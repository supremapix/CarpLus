/**
 * Script para baixar todas as imagens de pneus de URLs externas
 * e atualizar o arquivo data.ts com caminhos locais
 * 
 * Uso: node --env-file-if-exists=/vercel/share/.env.project scripts/download-tire-images.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const DATA_FILE = path.join(__dirname, '../src/data.ts');
const IMAGES_DIR = path.join(__dirname, '../public/images/pneus');

// Criar diretório de imagens se não existir
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
  console.log('Diretório criado:', IMAGES_DIR);
}

// Ler o arquivo data.ts
const dataContent = fs.readFileSync(DATA_FILE, 'utf-8');

// Extrair todas as URLs de imagens (imagem e imagemGrande)
const imageUrlRegex = /(imagem|imagemGrande):\s*["']([^"']+)["']/g;
const urlMap = new Map(); // URL original -> nome do arquivo local

let match;
while ((match = imageUrlRegex.exec(dataContent)) !== null) {
  const url = match[2];
  if (url.startsWith('http')) {
    if (!urlMap.has(url)) {
      // Gerar nome único baseado na URL
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname.split('/');
      let filename = pathParts[pathParts.length - 1];
      
      // Limpar nome do arquivo
      filename = filename.replace(/[?#].*$/, ''); // Remove query strings
      filename = filename.replace(/[^a-zA-Z0-9._-]/g, '_'); // Remove caracteres especiais
      
      // Se não tiver extensão, adicionar .jpg
      if (!filename.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
        filename += '.jpg';
      }
      
      // Garantir nome único
      let uniqueFilename = filename;
      let counter = 1;
      while ([...urlMap.values()].includes(uniqueFilename)) {
        const ext = path.extname(filename);
        const base = path.basename(filename, ext);
        uniqueFilename = `${base}_${counter}${ext}`;
        counter++;
      }
      
      urlMap.set(url, uniqueFilename);
    }
  }
}

console.log(`\nEncontradas ${urlMap.size} URLs únicas de imagens para baixar.\n`);

// Função para baixar uma imagem
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(IMAGES_DIR, filename);
    
    // Verificar se arquivo já existe
    if (fs.existsSync(filePath)) {
      console.log(`[SKIP] ${filename} - já existe`);
      resolve({ url, filename, status: 'exists' });
      return;
    }
    
    const protocol = url.startsWith('https') ? https : http;
    
    const request = protocol.get(url, { 
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      },
      timeout: 30000
    }, (response) => {
      // Seguir redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        console.log(`[ERRO] ${filename} - HTTP ${response.statusCode}`);
        resolve({ url, filename, status: 'error', code: response.statusCode });
        return;
      }
      
      const file = fs.createWriteStream(filePath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`[OK] ${filename}`);
        resolve({ url, filename, status: 'downloaded' });
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {});
        reject(err);
      });
    });
    
    request.on('error', (err) => {
      console.log(`[ERRO] ${filename} - ${err.message}`);
      resolve({ url, filename, status: 'error', message: err.message });
    });
    
    request.on('timeout', () => {
      request.destroy();
      console.log(`[TIMEOUT] ${filename}`);
      resolve({ url, filename, status: 'timeout' });
    });
  });
}

// Função para processar downloads em lotes
async function downloadInBatches(entries, batchSize = 5) {
  const results = [];
  const entriesArray = [...entries];
  
  for (let i = 0; i < entriesArray.length; i += batchSize) {
    const batch = entriesArray.slice(i, i + batchSize);
    console.log(`\nProcessando lote ${Math.floor(i/batchSize) + 1}/${Math.ceil(entriesArray.length/batchSize)}...`);
    
    const batchResults = await Promise.all(
      batch.map(([url, filename]) => downloadImage(url, filename))
    );
    results.push(...batchResults);
    
    // Pequena pausa entre lotes para não sobrecarregar
    if (i + batchSize < entriesArray.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }
  
  return results;
}

// Função principal
async function main() {
  console.log('='.repeat(60));
  console.log('DOWNLOAD DE IMAGENS DE PNEUS');
  console.log('='.repeat(60));
  
  // Baixar todas as imagens
  const results = await downloadInBatches(urlMap.entries(), 5);
  
  // Estatísticas
  const downloaded = results.filter(r => r.status === 'downloaded').length;
  const existing = results.filter(r => r.status === 'exists').length;
  const errors = results.filter(r => r.status === 'error' || r.status === 'timeout').length;
  
  console.log('\n' + '='.repeat(60));
  console.log('RESUMO:');
  console.log(`  - Baixadas: ${downloaded}`);
  console.log(`  - Já existiam: ${existing}`);
  console.log(`  - Erros: ${errors}`);
  console.log('='.repeat(60));
  
  // Atualizar o arquivo data.ts
  console.log('\nAtualizando data.ts com caminhos locais...');
  
  let updatedContent = dataContent;
  const successfulUrls = results.filter(r => r.status === 'downloaded' || r.status === 'exists');
  
  for (const { url, filename } of successfulUrls) {
    const localPath = `/images/pneus/${filename}`;
    // Escapar caracteres especiais da URL para uso em regex
    const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedUrl, 'g');
    updatedContent = updatedContent.replace(regex, localPath);
  }
  
  // Salvar arquivo atualizado
  fs.writeFileSync(DATA_FILE, updatedContent, 'utf-8');
  console.log('Arquivo data.ts atualizado com sucesso!');
  
  // Listar erros se houver
  if (errors > 0) {
    console.log('\n[AVISO] Algumas imagens não puderam ser baixadas:');
    results
      .filter(r => r.status === 'error' || r.status === 'timeout')
      .forEach(r => console.log(`  - ${r.url}`));
  }
  
  console.log('\nConcluído!');
}

main().catch(console.error);
