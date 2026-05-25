const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'bridgestone-tires-input.txt');
const DATA_FILE = path.join(__dirname, '..', 'src', 'data.ts');

// Mapeamento de imagens locais por linha Bridgestone
const IMAGES_MAP = {
  'Ecopia': '/images/pneus/pneu-bridgestone-ecopia.webp',
  'Turanza': '/images/pneus/pneu-bridgestone-turanza.webp',
  'Dueler': '/images/pneus/pneu-bridgestone-dueler.webp',
  'Potenza': '/images/pneus/pneu-bridgestone-potenza.webp',
  'Alenza': '/images/pneus/pneu-bridgestone-alenza.webp',
  'Duravis': '/images/pneus/pneu-bridgestone-duravis.webp',
  'default': '/images/pneus/pneu-bridgestone.webp'
};

function getImageForLine(title) {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('ecopia')) return IMAGES_MAP['Ecopia'];
  if (titleLower.includes('turanza')) return IMAGES_MAP['Turanza'];
  if (titleLower.includes('dueler') || titleLower.includes('revo')) return IMAGES_MAP['Dueler'];
  if (titleLower.includes('potenza') || titleLower.includes('re050') || titleLower.includes('s001')) return IMAGES_MAP['Potenza'];
  if (titleLower.includes('alenza')) return IMAGES_MAP['Alenza'];
  if (titleLower.includes('duravis')) return IMAGES_MAP['Duravis'];
  return IMAGES_MAP['default'];
}

function extractLine(title) {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('ecopia')) return 'Ecopia';
  if (titleLower.includes('turanza')) return 'Turanza';
  if (titleLower.includes('dueler')) return 'Dueler';
  if (titleLower.includes('potenza')) return 'Potenza';
  if (titleLower.includes('alenza')) return 'Alenza';
  if (titleLower.includes('duravis')) return 'Duravis';
  if (titleLower.includes('b250')) return 'B250';
  if (titleLower.includes('revo')) return 'Dueler AT REVO2';
  return 'Bridgestone';
}

function extractCategory(title) {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('potenza') || titleLower.includes('s001')) return 'Esportivo';
  if (titleLower.includes('turanza')) return 'Conforto';
  if (titleLower.includes('ecopia')) return 'Econômico';
  if (titleLower.includes('dueler') || titleLower.includes('alenza')) return 'SUV';
  if (titleLower.includes('duravis')) return 'Carga';
  return 'Passeio';
}

function extractTipoVeiculo(title, categoria) {
  const titleLower = title.toLowerCase();
  if (titleLower.includes('moto') || /\d{2,3}\/\d{2,3}-\d{2}/.test(title)) return ['Moto'];
  if (categoria === 'SUV') return ['SUV', 'Caminhonete'];
  if (categoria === 'Esportivo') return ['Esportivo', 'Sedan Premium'];
  if (categoria === 'Carga') return ['Van', 'Utilitário'];
  return ['Passeio', 'Sedan', 'Hatch'];
}

function generateSlug(name) {
  return name
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseLineToTire(line, id, existingSlugs) {
  const parts = line.split('\t');
  if (parts.length < 5) return null;
  
  const nome = parts[0].trim();
  if (!nome || !nome.toUpperCase().startsWith('PNEU')) return null;
  if (/\d{2,3}\/\d{2,3}-\d{2}/.test(nome)) return null; // Ignorar pneus de moto
  
  const descricao = parts[3] || '';
  const slug_original = parts[7] || '';
  
  // Extrair medida (ex: 175/70R14)
  const medidaMatch = nome.match(/(\d{3})\/(\d{2,3})R(\d{2})/i);
  if (!medidaMatch) return null;
  
  const largura = parseInt(medidaMatch[1]);
  const perfil = parseInt(medidaMatch[2]);
  const aro = parseInt(medidaMatch[3]);
  const medida = `${largura}/${perfil}R${aro}`;
  
  // Extrair índices
  const indicesMatch = nome.match(/(\d{2,3})([HSTVWYZ])/i);
  const indiceCarga = indicesMatch ? indicesMatch[1] : '88';
  const indiceVelocidade = indicesMatch ? indicesMatch[2].toUpperCase() : 'H';
  
  // Criar slug único
  let baseSlug = slug_original || generateSlug(nome);
  let slug = baseSlug;
  let counter = 1;
  while (existingSlugs.has(slug)) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  existingSlugs.add(slug);
  
  const linha = extractLine(nome);
  const categoria = extractCategory(nome);
  const tipoVeiculo = extractTipoVeiculo(nome, categoria);
  const imagem = getImageForLine(nome);
  
  // Determinar carros compatíveis baseado no aro
  let carros = [];
  if (aro <= 14) carros = ['Fiat Uno', 'VW Gol', 'Chevrolet Celta', 'Fiat Palio'];
  else if (aro === 15) carros = ['Honda Fit', 'Toyota Etios', 'VW Polo', 'Hyundai HB20'];
  else if (aro === 16) carros = ['Honda Civic', 'Toyota Corolla', 'VW Jetta', 'Chevrolet Cruze'];
  else if (aro === 17) carros = ['Jeep Compass', 'VW T-Cross', 'Toyota Corolla Cross', 'Honda HR-V'];
  else if (aro >= 18) carros = ['BMW X1', 'Audi Q3', 'Mercedes GLA', 'Volvo XC40'];
  
  // Nome formatado
  const nomeFormatado = `Bridgestone ${medida} ${linha} ${indiceCarga}${indiceVelocidade}`;
  
  return {
    id,
    slug,
    nome: nomeFormatado,
    marca: 'Bridgestone',
    linha,
    aro,
    medida,
    largura,
    perfil,
    indiceVelocidade: `${indiceVelocidade} (${getVelocidadeKm(indiceVelocidade)})`,
    indiceCarga: `${indiceCarga} (${getCargaKg(indiceCarga)})`,
    categoria,
    tipoVeiculo,
    imagem,
    imagemGrande: imagem,
    descricao: descricao || `O ${nomeFormatado} é um pneu premium com tecnologia japonesa Bridgestone, projetado para oferecer segurança, conforto e durabilidade. Disponível na Carplus Auto Center em Curitiba com montagem inclusa e garantia de fábrica.`,
    carros,
    destaque: false,
    novoModelo: true
  };
}

function getVelocidadeKm(letra) {
  const map = { 'H': '210km/h', 'T': '190km/h', 'S': '180km/h', 'V': '240km/h', 'W': '270km/h', 'Y': '300km/h', 'Z': '240+km/h' };
  return map[letra] || '210km/h';
}

function getCargaKg(indice) {
  const i = parseInt(indice);
  if (i <= 82) return '475kg';
  if (i <= 88) return '560kg';
  if (i <= 91) return '615kg';
  if (i <= 95) return '690kg';
  if (i <= 100) return '800kg';
  if (i <= 105) return '925kg';
  if (i <= 110) return '1060kg';
  return '1000+kg';
}

function main() {
  console.log('=== ADICIONANDO PNEUS BRIDGESTONE ===\n');
  
  // Ler arquivo de entrada
  const inputContent = fs.readFileSync(INPUT_FILE, 'utf-8');
  const lines = inputContent.split('\n').filter(l => l.trim() && !l.startsWith('Nome'));
  
  // Ler data.ts existente
  let dataContent = fs.readFileSync(DATA_FILE, 'utf-8');
  
  // Extrair slugs existentes
  const existingSlugs = new Set();
  const slugMatches = dataContent.matchAll(/slug:\s*["']([^"']+)["']/g);
  for (const m of slugMatches) {
    existingSlugs.add(m[1]);
  }
  
  // Encontrar o maior ID existente
  const idMatches = dataContent.matchAll(/id:\s*(\d+)/g);
  let maxId = 0;
  for (const m of idMatches) {
    maxId = Math.max(maxId, parseInt(m[1]));
  }
  
  console.log(`Pneus existentes (slugs): ${existingSlugs.size}`);
  console.log(`Maior ID atual: ${maxId}`);
  console.log(`Linhas no arquivo de entrada: ${lines.length}`);
  
  // Parsear novos pneus
  const newTires = [];
  let currentId = maxId;
  
  for (const line of lines) {
    currentId++;
    const tire = parseLineToTire(line, currentId, existingSlugs);
    if (tire) {
      newTires.push(tire);
    } else {
      currentId--; // Reverter ID se não foi adicionado
    }
  }
  
  console.log(`\nNovos pneus Bridgestone a adicionar: ${newTires.length}`);
  
  if (newTires.length === 0) {
    console.log('\nNenhum pneu novo para adicionar.');
    return;
  }
  
  // Gerar código dos novos pneus
  let newTiresCode = '\n  // ══════════════════════════════════════\n  // BRIDGESTONE – Linha Completa\n  // ══════════════════════════════════════\n';
  
  for (const tire of newTires) {
    newTiresCode += `  {
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
  },\n`;
  }
  
  // Encontrar onde inserir (antes do fechamento do array TIRES)
  const insertPattern = /(\s*}\s*\n\s*\];)\s*\n\s*export const SERVICES/;
  const insertMatch = dataContent.match(insertPattern);
  
  if (insertMatch) {
    const insertPos = dataContent.indexOf(insertMatch[0]);
    const beforeInsert = dataContent.substring(0, insertPos);
    const afterInsert = dataContent.substring(insertPos + insertMatch[1].length);
    
    dataContent = beforeInsert + newTiresCode + '];\n\nexport const SERVICES' + afterInsert.replace(/^\s*export const SERVICES/, '');
    
    // Salvar data.ts
    fs.writeFileSync(DATA_FILE, dataContent);
    
    console.log(`\n=== CONCLUÍDO ===`);
    console.log(`Total de novos pneus Bridgestone adicionados: ${newTires.length}`);
  } else {
    console.error('Erro: Não encontrou o padrão de inserção no data.ts');
  }
}

main();
