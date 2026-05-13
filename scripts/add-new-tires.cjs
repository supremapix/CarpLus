/**
 * Script para adicionar novos pneus ao catálogo
 * 1. Lê arquivo de entrada com URLs e títulos
 * 2. Verifica duplicatas
 * 3. Baixa imagens novas
 * 4. Adiciona novos pneus ao data.ts
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const DATA_FILE = path.join(__dirname, '../src/data.ts');
const IMAGES_DIR = path.join(__dirname, '../public/images/pneus');
const INPUT_FILE = process.argv[2] || path.join(__dirname, 'new-tires-input.txt');

// Criar diretório de imagens se não existir
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Ler arquivo de entrada
function parseInputFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim());
  const tires = [];
  
  for (const line of lines) {
    // Pular linha de cabeçalho
    if (line.startsWith('Imagens') || line.includes('Metadado')) continue;
    
    // Formato: URL\tTítulo
    const parts = line.split('\t');
    if (parts.length >= 2) {
      const imageUrl = parts[0].trim();
      const title = parts[1].trim();
      
      if (imageUrl.startsWith('http') && title.startsWith('Pneu')) {
        tires.push({ imageUrl, title });
      }
    }
  }
  
  return tires;
}

// Extrair informações do título do pneu
function parseTireTitle(title) {
  // Exemplo: "Pneu Pirelli 175/70R13 P400 Evo 82T para Chevrolet Celta"
  const info = {
    marca: 'Pirelli',
    medida: '',
    linha: '',
    indiceVelocidade: '',
    indiceCarga: '',
    carros: [],
    runFlat: false,
    xl: false
  };
  
  // Extrair medida (175/70R13, 205/55R16, etc.)
  const medidaMatch = title.match(/(\d{3}\/\d{2}R\d{2}(?:\.\d)?)/);
  if (medidaMatch) {
    info.medida = medidaMatch[1];
  }
  
  // Extrair aro
  const aroMatch = info.medida.match(/R(\d{2})/);
  if (aroMatch) {
    info.aro = parseInt(aroMatch[1]);
  }
  
  // Extrair largura e perfil
  const dimMatch = info.medida.match(/(\d{3})\/(\d{2})/);
  if (dimMatch) {
    info.largura = parseInt(dimMatch[1]);
    info.perfil = parseInt(dimMatch[2]);
  }
  
  // Detectar Run Flat
  info.runFlat = title.includes('Run Flat');
  
  // Detectar XL (Extra Load)
  info.xl = title.includes(' XL');
  
  // Extrair linha do pneu
  const linhaPatterns = [
    { pattern: /P400 Evo/i, linha: 'P400 Evo', categoria: 'Econômico' },
    { pattern: /P7 Cinturato/i, linha: 'P7 Cinturato', categoria: 'Conforto' },
    { pattern: /P1 Cinturato Plus/i, linha: 'P1 Cinturato Plus', categoria: 'Conforto' },
    { pattern: /P1 Cinturato/i, linha: 'P1 Cinturato', categoria: 'Conforto' },
    { pattern: /P Zero Corsa/i, linha: 'P Zero Corsa', categoria: 'Ultra High Performance' },
    { pattern: /P Zero Rosso/i, linha: 'P Zero Rosso', categoria: 'Ultra High Performance' },
    { pattern: /P Zero Nero GT/i, linha: 'P Zero Nero GT', categoria: 'Ultra High Performance' },
    { pattern: /P Zero Nero/i, linha: 'P Zero Nero', categoria: 'Ultra High Performance' },
    { pattern: /P Zero Asimmetrico/i, linha: 'P Zero Asimmetrico', categoria: 'Ultra High Performance' },
    { pattern: /P Zero/i, linha: 'P Zero', categoria: 'Ultra High Performance' },
    { pattern: /P7 All Season/i, linha: 'P7 All Season', categoria: 'All Season' },
    { pattern: /P7/i, linha: 'P7', categoria: 'Conforto' },
    { pattern: /P4 Four Seasons/i, linha: 'P4 Four Seasons', categoria: 'All Season' },
    { pattern: /Scorpion Verde All Season/i, linha: 'Scorpion Verde All Season', categoria: 'SUV All Season' },
    { pattern: /Scorpion Zero All Season/i, linha: 'Scorpion Zero All Season', categoria: 'SUV Ultra High Performance' },
    { pattern: /Scorpion Verde/i, linha: 'Scorpion Verde', categoria: 'SUV' },
    { pattern: /Scorpion ATR/i, linha: 'Scorpion ATR', categoria: 'SUV All Terrain' },
    { pattern: /Scorpion HT/i, linha: 'Scorpion HT', categoria: 'SUV Highway Terrain' },
    { pattern: /Scorpion STR/i, linha: 'Scorpion STR', categoria: 'SUV Street' },
    { pattern: /Scorpion A\/T/i, linha: 'Scorpion A/T', categoria: 'SUV All Terrain' },
    { pattern: /Formula S\/T/i, linha: 'Formula S/T', categoria: 'SUV' },
    { pattern: /W-Cita/i, linha: 'W-Cita', categoria: 'Econômico' },
    { pattern: /Dragon/i, linha: 'Dragon', categoria: 'High Performance' },
    { pattern: /Nero GT/i, linha: 'Nero GT', categoria: 'Ultra High Performance' },
    { pattern: /FG01/i, linha: 'FG01', categoria: 'Carga' },
    { pattern: /FR01/i, linha: 'FR01', categoria: 'Carga' },
  ];
  
  for (const { pattern, linha, categoria } of linhaPatterns) {
    if (pattern.test(title)) {
      info.linha = linha;
      info.categoria = categoria;
      break;
    }
  }
  
  // Extrair índice de carga e velocidade (ex: 82T, 91W, 97Y XL)
  const indicesMatch = title.match(/(\d{2,3})([A-Z])\s*(XL)?(?:\s|$|para|-|Run)/);
  if (indicesMatch) {
    info.indiceCarga = indicesMatch[1];
    info.indiceVelocidade = indicesMatch[2];
  }
  
  // Extrair carro específico (após "para")
  const carroMatch = title.match(/para\s+(.+)$/i);
  if (carroMatch) {
    info.carros = [carroMatch[1].trim()];
  }
  
  // Determinar tipo de veículo baseado na categoria/linha
  if (info.linha.includes('Scorpion')) {
    info.tipoVeiculo = ['SUV', 'Crossover'];
  } else if (info.linha.includes('FG01') || info.linha.includes('FR01')) {
    info.tipoVeiculo = ['Caminhão', 'Carga'];
  } else if (info.aro >= 18 || info.linha.includes('P Zero')) {
    info.tipoVeiculo = ['Passeio', 'Sedan Premium', 'Esportivo'];
  } else {
    info.tipoVeiculo = ['Passeio', 'Hatch', 'Sedan'];
  }
  
  return info;
}

// Gerar slug a partir do título
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/^pneu\s+/i, 'pneu-')
    .replace(/\s+para\s+/g, '-')
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/\//g, '-')
    .replace(/--+/g, '-')
    .replace(/-+$/g, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// Gerar nome do arquivo de imagem a partir da URL
function getImageFilename(url) {
  try {
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    let filename = pathParts[pathParts.length - 1];
    filename = filename.replace(/[?#].*$/, '');
    return filename;
  } catch (e) {
    return null;
  }
}

// Baixar imagem
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(IMAGES_DIR, filename);
    
    if (fs.existsSync(filePath)) {
      console.log(`  [EXISTE] ${filename}`);
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
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
        return;
      }
      
      if (response.statusCode !== 200) {
        console.log(`  [ERRO] ${filename} - HTTP ${response.statusCode}`);
        resolve({ url, filename, status: 'error' });
        return;
      }
      
      const file = fs.createWriteStream(filePath);
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`  [BAIXADA] ${filename}`);
        resolve({ url, filename, status: 'downloaded' });
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {});
        reject(err);
      });
    });
    
    request.on('error', (err) => {
      console.log(`  [ERRO] ${filename} - ${err.message}`);
      resolve({ url, filename, status: 'error' });
    });
    
    request.on('timeout', () => {
      request.destroy();
      resolve({ url, filename, status: 'timeout' });
    });
  });
}

// Mapear índice de velocidade para descrição
function getVelocityDescription(code) {
  const map = {
    'T': 'T (190km/h)',
    'H': 'H (210km/h)',
    'V': 'V (240km/h)',
    'W': 'W (270km/h)',
    'Y': 'Y (300km/h)',
    'Z': 'Z (+240km/h)'
  };
  return map[code] || code;
}

// Mapear índice de carga para descrição
function getLoadDescription(code) {
  const map = {
    '82': '82 (475kg)',
    '84': '84 (500kg)',
    '86': '86 (530kg)',
    '88': '88 (560kg)',
    '89': '89 (580kg)',
    '91': '91 (615kg)',
    '92': '92 (630kg)',
    '93': '93 (650kg)',
    '94': '94 (670kg)',
    '95': '95 (690kg)',
    '96': '96 (710kg)',
    '97': '97 (730kg)',
    '98': '98 (750kg)',
    '99': '99 (775kg)',
    '100': '100 (800kg)',
    '101': '101 (825kg)',
    '102': '102 (850kg)',
    '103': '103 (875kg)',
    '104': '104 (900kg)',
    '105': '105 (925kg)',
    '106': '106 (950kg)',
    '107': '107 (975kg)',
    '108': '108 (1000kg)',
    '109': '109 (1030kg)',
    '110': '110 (1060kg)'
  };
  return map[code] || `${code}`;
}

// Gerar descrição do pneu
function generateDescription(info, title) {
  const parts = [];
  
  if (info.linha.includes('P Zero')) {
    parts.push(`Pneu Pirelli ${info.linha} medida ${info.medida}`);
    parts.push('desenvolvido para veículos de alta performance.');
    parts.push('Máxima aderência em pista seca e molhada com tecnologia de ponta.');
  } else if (info.linha.includes('Scorpion')) {
    parts.push(`Pneu Pirelli ${info.linha} medida ${info.medida}`);
    parts.push('projetado para SUVs e crossovers.');
    parts.push('Excelente desempenho em diversas condições de terreno.');
  } else if (info.linha.includes('Cinturato')) {
    parts.push(`Pneu Pirelli ${info.linha} medida ${info.medida}`);
    parts.push('com tecnologia de baixo ruído e alta durabilidade.');
    parts.push('Ideal para uso diário com conforto e segurança.');
  } else {
    parts.push(`Pneu Pirelli ${info.linha} medida ${info.medida}.`);
    parts.push('Desempenho confiável para uso urbano e rodoviário.');
  }
  
  if (info.runFlat) {
    parts.push('Tecnologia Run Flat permite rodar até 80km mesmo com pneu furado.');
  }
  
  if (info.xl) {
    parts.push('Versão XL (Extra Load) com capacidade de carga reforçada.');
  }
  
  if (info.carros.length > 0) {
    parts.push(`Indicado para ${info.carros[0]}.`);
  }
  
  return parts.join(' ');
}

async function main() {
  console.log('='.repeat(60));
  console.log('ADICIONAR NOVOS PNEUS AO CATÁLOGO');
  console.log('='.repeat(60));
  
  // Verificar se o arquivo de entrada existe
  if (!fs.existsSync(INPUT_FILE)) {
    console.error(`Erro: Arquivo de entrada não encontrado: ${INPUT_FILE}`);
    process.exit(1);
  }
  
  // Ler pneus do arquivo de entrada
  console.log(`\nLendo arquivo: ${INPUT_FILE}`);
  const newTiresInput = parseInputFile(INPUT_FILE);
  console.log(`Encontrados ${newTiresInput.length} pneus no arquivo de entrada.`);
  
  // Ler data.ts existente
  console.log('\nLendo catálogo existente...');
  const dataContent = fs.readFileSync(DATA_FILE, 'utf-8');
  
  // Extrair slugs existentes para verificar duplicatas
  const existingSlugs = new Set();
  const slugRegex = /slug:\s*["']([^"']+)["']/g;
  let match;
  while ((match = slugRegex.exec(dataContent)) !== null) {
    existingSlugs.add(match[1]);
  }
  console.log(`Catálogo atual tem ${existingSlugs.size} pneus.`);
  
  // Encontrar o maior ID existente
  const idRegex = /id:\s*(\d+)/g;
  let maxId = 0;
  while ((match = idRegex.exec(dataContent)) !== null) {
    maxId = Math.max(maxId, parseInt(match[1]));
  }
  console.log(`Maior ID existente: ${maxId}`);
  
  // Processar novos pneus
  const newTires = [];
  const duplicates = [];
  const imageUrlsToDownload = new Map();
  
  for (const { imageUrl, title } of newTiresInput) {
    const slug = generateSlug(title);
    
    if (existingSlugs.has(slug)) {
      duplicates.push(title);
      continue;
    }
    
    const info = parseTireTitle(title);
    const imageFilename = getImageFilename(imageUrl);
    
    if (imageFilename && !imageUrlsToDownload.has(imageUrl)) {
      imageUrlsToDownload.set(imageUrl, imageFilename);
    }
    
    const localImagePath = imageFilename ? `/images/pneus/${imageFilename}` : '/images/pneus/logo-produtos.webp';
    
    newTires.push({
      id: ++maxId,
      slug,
      nome: title.replace(/^Pneu\s+/i, ''),
      marca: 'Pirelli',
      linha: info.linha || 'Pirelli',
      aro: info.aro || 15,
      medida: info.medida,
      largura: info.largura || 195,
      perfil: info.perfil || 65,
      indiceVelocidade: getVelocityDescription(info.indiceVelocidade),
      indiceCarga: getLoadDescription(info.indiceCarga) + (info.xl ? ' XL' : ''),
      categoria: info.categoria || 'Passeio',
      tipoVeiculo: info.tipoVeiculo,
      imagem: localImagePath,
      imagemGrande: localImagePath,
      descricao: generateDescription(info, title),
      carros: info.carros,
      destaque: false,
      novoModelo: true
    });
    
    existingSlugs.add(slug);
  }
  
  console.log(`\nNovos pneus a adicionar: ${newTires.length}`);
  console.log(`Duplicatas ignoradas: ${duplicates.length}`);
  console.log(`Imagens únicas para baixar: ${imageUrlsToDownload.size}`);
  
  // Baixar imagens novas
  if (imageUrlsToDownload.size > 0) {
    console.log('\n--- BAIXANDO IMAGENS ---');
    for (const [url, filename] of imageUrlsToDownload) {
      await downloadImage(url, filename);
    }
  }
  
  // Adicionar novos pneus ao data.ts
  if (newTires.length > 0) {
    console.log('\n--- ADICIONANDO NOVOS PNEUS ---');
    
    // Encontrar a posição correta do array TIRES (não o último ]; do arquivo)
    // Procura o padrão "];\n\nexport const SERVICES" ou "];\n\nexport const"
    const tiresEndRegex = /\];\s*\n\s*\n\s*export const SERVICES/;
    const tiresEndMatch = dataContent.match(tiresEndRegex);
    
    if (!tiresEndMatch) {
      console.error('Erro: Não foi possível encontrar o final do array TIRES.');
      process.exit(1);
    }
    
    const insertPosition = dataContent.indexOf(tiresEndMatch[0]);
    
    // Gerar código para os novos pneus
    let newTiresCode = '';
    for (const tire of newTires) {
      newTiresCode += `
  {
    id: ${tire.id},
    slug: "${tire.slug}",
    nome: "${tire.nome.replace(/"/g, '\\"')}",
    marca: "${tire.marca}",
    linha: "${tire.linha}",
    aro: ${tire.aro},
    medida: "${tire.medida}",
    largura: ${tire.largura},
    perfil: ${tire.perfil},
    indiceVelocidade: "${tire.indiceVelocidade}",
    indiceCarga: "${tire.indiceCarga}",
    categoria: "${tire.categoria}",
    tipoVeiculo: ${JSON.stringify(tire.tipoVeiculo)},
    imagem: "${tire.imagem}",
    imagemGrande: "${tire.imagemGrande}",
    descricao: "${tire.descricao.replace(/"/g, '\\"')}",
    carros: ${JSON.stringify(tire.carros)},
    destaque: ${tire.destaque},
    novoModelo: ${tire.novoModelo}
  },`;
    }
    
    // Inserir novos pneus
    const updatedContent = 
      dataContent.slice(0, insertPosition) + 
      newTiresCode + '\n' +
      dataContent.slice(insertPosition);
    
    fs.writeFileSync(DATA_FILE, updatedContent, 'utf-8');
    console.log(`\n${newTires.length} pneus adicionados ao catálogo!`);
  }
  
  // Resumo final
  console.log('\n' + '='.repeat(60));
  console.log('RESUMO:');
  console.log(`  - Pneus no arquivo de entrada: ${newTiresInput.length}`);
  console.log(`  - Novos pneus adicionados: ${newTires.length}`);
  console.log(`  - Duplicatas ignoradas: ${duplicates.length}`);
  console.log(`  - Imagens baixadas: ${imageUrlsToDownload.size}`);
  console.log(`  - Total de pneus no catálogo: ${existingSlugs.size}`);
  console.log('='.repeat(60));
  
  if (duplicates.length > 0 && duplicates.length <= 20) {
    console.log('\nDuplicatas encontradas:');
    duplicates.forEach(d => console.log(`  - ${d}`));
  }
}

main().catch(console.error);
