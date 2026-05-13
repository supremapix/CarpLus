const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const INPUT_FILE = path.join(__dirname, 'new-tires-input.txt');
const DATA_FILE = path.join(__dirname, '..', 'src', 'data.ts');
const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images', 'pneus');

// Criar diretório de imagens se não existir
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Função para baixar imagem
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(IMAGES_DIR, filename);
    
    // Se já existe, pular
    if (fs.existsSync(filePath)) {
      console.log(`  [EXISTE] ${filename}`);
      return resolve(filePath);
    }
    
    const protocol = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, { 
      headers: { 'User-Agent': 'Mozilla/5.0' },
      timeout: 30000
    }, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        file.close();
        fs.unlinkSync(filePath);
        return downloadImage(response.headers.location, filename).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filePath);
        return reject(new Error(`HTTP ${response.statusCode}`));
      }
      
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`  [BAIXADO] ${filename}`);
        resolve(filePath);
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      reject(err);
    });
  });
}

// Gerar slug único
function generateSlug(title, existingSlugs) {
  let baseSlug = title
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  let slug = baseSlug;
  let counter = 1;
  
  while (existingSlugs.has(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  
  existingSlugs.add(slug);
  return slug;
}

// Gerar nome de arquivo de imagem
function generateImageFilename(url, title) {
  const ext = path.extname(new URL(url).pathname) || '.webp';
  const baseName = title
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  return `${baseName}${ext}`;
}

// Extrair medida do título
function extractMeasure(title) {
  const match = title.match(/(\d{3}\/\d{2}\s*[Rr]\s*\d{2})/);
  return match ? match[1].replace(/\s+/g, '') : '';
}

// Extrair linha/modelo
function extractLine(title) {
  // Remove "Pneu" do início e a medida
  let line = title
    .replace(/^Pneu\s+/i, '')
    .replace(/\d{3}\/\d{2}\s*[Rr]\s*\d{2}.*$/, '')
    .trim();
  return line || 'Padrão';
}

// Extrair marca
function extractBrand(title) {
  const brands = ['Pirelli', 'Bridgestone', 'Continental', 'Michelin', 'Goodyear', 'Dunlop', 'Firestone', 'Yokohama', 'Hankook', 'Kumho', 'Toyo', 'BFGoodrich', 'Maxxis', 'Nexen', 'Falken', 'General', 'Kelly', 'Sumitomo'];
  for (const brand of brands) {
    if (title.toLowerCase().includes(brand.toLowerCase())) {
      return brand;
    }
  }
  return 'Outra';
}

// Determinar categoria
function determineCategory(title, measure) {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('caminhonete') || titleLower.includes('suv') || titleLower.includes('pickup')) {
    return 'SUV/Caminhonete';
  }
  if (titleLower.includes('caminhão') || titleLower.includes('carga')) {
    return 'Carga';
  }
  
  // Baseado no aro
  const aroMatch = measure.match(/[Rr](\d+)/);
  if (aroMatch) {
    const aro = parseInt(aroMatch[1]);
    if (aro >= 17) return 'Performance';
    if (aro <= 14) return 'Econômico';
  }
  
  return 'Passeio';
}

// Extrair índices
function extractIndices(title) {
  const match = title.match(/(\d{2,3})\s*([HSTVWYZ])\b/i);
  if (match) {
    return {
      carga: match[1],
      velocidade: match[2].toUpperCase()
    };
  }
  return { carga: '82', velocidade: 'T' };
}

async function main() {
  console.log('=== INICIANDO CADASTRO DE NOVOS PNEUS ===\n');
  
  // Ler arquivo de entrada
  const inputContent = fs.readFileSync(INPUT_FILE, 'utf-8');
  const lines = inputContent.split('\n').filter(l => l.trim());
  
  // Ler data.ts existente
  let dataContent = fs.readFileSync(DATA_FILE, 'utf-8');
  
  // Extrair slugs e títulos existentes
  const existingSlugs = new Set();
  const existingTitles = new Set();
  
  const slugMatches = dataContent.matchAll(/slug:\s*["']([^"']+)["']/g);
  for (const m of slugMatches) {
    existingSlugs.add(m[1]);
  }
  
  const titleMatches = dataContent.matchAll(/titulo:\s*["']([^"']+)["']/g);
  for (const m of titleMatches) {
    existingTitles.add(m[1].toLowerCase().trim());
  }
  
  // Encontrar o maior ID existente
  const idMatches = dataContent.matchAll(/id:\s*(\d+)/g);
  let maxId = 0;
  for (const m of idMatches) {
    maxId = Math.max(maxId, parseInt(m[1]));
  }
  
  console.log(`Pneus existentes: ${existingTitles.size}`);
  console.log(`Maior ID atual: ${maxId}`);
  console.log(`Linhas no arquivo de entrada: ${lines.length}`);
  
  // Parsear novos pneus
  const newTires = [];
  const imagesToDownload = new Map(); // url -> filename
  
  for (const line of lines) {
    const parts = line.split('\t');
    if (parts.length < 4) continue;
    
    const [wpId, title, imageUrl, priceStr] = parts;
    
    // Verificar se é um pneu válido
    if (!title || !title.toLowerCase().startsWith('pneu')) continue;
    
    // Verificar se já existe (por título normalizado)
    const normalizedTitle = title.toLowerCase().trim();
    if (existingTitles.has(normalizedTitle)) {
      continue;
    }
    
    // Marcar como existente para evitar duplicatas dentro do arquivo
    existingTitles.add(normalizedTitle);
    
    const measure = extractMeasure(title);
    const linha = extractLine(title);
    const brand = extractBrand(title);
    const category = determineCategory(title, measure);
    const indices = extractIndices(title);
    const slug = generateSlug(title, existingSlugs);
    
    // Processar preço
    let price = 0;
    if (priceStr) {
      const priceMatch = priceStr.match(/[\d.,]+/);
      if (priceMatch) {
        price = parseFloat(priceMatch[0].replace('.', '').replace(',', '.')) || 0;
      }
    }
    
    // Processar imagem
    let localImage = '/images/pneus/pneu-generico.webp';
    if (imageUrl && imageUrl.startsWith('http')) {
      const imageFilename = generateImageFilename(imageUrl, title);
      localImage = `/images/pneus/${imageFilename}`;
      if (!imagesToDownload.has(imageUrl)) {
        imagesToDownload.set(imageUrl, imageFilename);
      }
    }
    
    maxId++;
    
    newTires.push({
      id: maxId,
      slug,
      titulo: title,
      medida: measure,
      linha,
      marca: brand,
      categoria: category,
      indiceCarga: indices.carga,
      indiceVelocidade: indices.velocidade,
      preco: price,
      precoAntigo: Math.round(price * 1.15),
      imagem: localImage,
      imagemGrande: localImage,
      emEstoque: true,
      destaque: false,
      descricao: `${title} - Pneu de alta qualidade para ${category.toLowerCase()}.`,
      carrosCompativeis: []
    });
  }
  
  console.log(`\nNovos pneus a adicionar: ${newTires.length}`);
  console.log(`Imagens a baixar: ${imagesToDownload.size}`);
  
  if (newTires.length === 0) {
    console.log('\nNenhum pneu novo para adicionar.');
    return;
  }
  
  // Baixar imagens
  console.log('\n--- BAIXANDO IMAGENS ---');
  for (const [url, filename] of imagesToDownload) {
    try {
      await downloadImage(url, filename);
    } catch (err) {
      console.log(`  [ERRO] ${filename}: ${err.message}`);
    }
  }
  
  // Gerar código dos novos pneus
  console.log('\n--- GERANDO CÓDIGO ---');
  let newTiresCode = '';
  for (const tire of newTires) {
    newTiresCode += `
  {
    id: ${tire.id},
    slug: "${tire.slug}",
    titulo: "${tire.titulo.replace(/"/g, '\\"')}",
    medida: "${tire.medida}",
    linha: "${tire.linha.replace(/"/g, '\\"')}",
    marca: "${tire.marca}",
    categoria: "${tire.categoria}",
    indiceCarga: "${tire.indiceCarga}",
    indiceVelocidade: "${tire.indiceVelocidade}",
    preco: ${tire.preco},
    precoAntigo: ${tire.precoAntigo},
    imagem: "${tire.imagem}",
    imagemGrande: "${tire.imagemGrande}",
    emEstoque: ${tire.emEstoque},
    destaque: ${tire.destaque},
    descricao: "${tire.descricao.replace(/"/g, '\\"')}",
    carrosCompativeis: []
  },`;
  }
  
  // Inserir no data.ts antes do fechamento do array TIRES
  // Encontrar o padrão: }]; seguido de export const SERVICES ou outra exportação
  const insertPattern = /(\s*}\s*,?\s*)\];\s*\n\s*\nexport const SERVICES/;
  const insertMatch = dataContent.match(insertPattern);
  
  if (!insertMatch) {
    console.error('Erro: Não encontrou o padrão de inserção no data.ts');
    
    // Tentativa alternativa: encontrar o último pneu e o fechamento do array
    const altPattern = /(carrosCompativeis:\s*\[[^\]]*\]\s*}\s*,?)\s*\];\s*\nexport const SERVICES/;
    const altMatch = dataContent.match(altPattern);
    
    if (altMatch) {
      const insertPos = dataContent.indexOf(altMatch[0]);
      const beforeInsert = dataContent.substring(0, insertPos + altMatch[1].length);
      const afterInsert = dataContent.substring(insertPos + altMatch[1].length);
      
      // Remover o ]; inicial do afterInsert
      const cleanAfter = afterInsert.replace(/^\s*\];/, '];');
      
      dataContent = beforeInsert + newTiresCode + '\n' + cleanAfter;
    } else {
      console.error('Erro: Não foi possível encontrar onde inserir os novos pneus.');
      process.exit(1);
    }
  } else {
    const insertPos = dataContent.indexOf(insertMatch[0]);
    const beforeInsert = dataContent.substring(0, insertPos) + insertMatch[1];
    const afterInsert = '];\n\nexport const SERVICES' + dataContent.substring(insertPos + insertMatch[0].length);
    
    dataContent = beforeInsert + newTiresCode + '\n' + afterInsert;
  }
  
  // Salvar data.ts
  fs.writeFileSync(DATA_FILE, dataContent);
  
  console.log(`\n=== CONCLUÍDO ===`);
  console.log(`Total de novos pneus adicionados: ${newTires.length}`);
  console.log(`Novo total de pneus: ${407 + newTires.length}`);
}

main().catch(console.error);
