const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'src', 'data.ts');

console.log('=== CORRIGINDO ESTRUTURA DO DATA.TS ===\n');

// Ler arquivo
let content = fs.readFileSync(DATA_FILE, 'utf-8');
const lines = content.split('\n');

console.log(`Total de linhas no arquivo: ${lines.length}`);

// Encontrar onde CITIES começa e onde os pneus errados começam
let citiesStartLine = -1;
let wrongTiresStartLine = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const CITIES = [')) {
    citiesStartLine = i;
  }
  // Primeiro pneu errado (id: 411)
  if (lines[i].includes('id: 411,')) {
    wrongTiresStartLine = i - 1; // -1 para pegar o { de abertura
    break;
  }
}

console.log(`CITIES começa na linha: ${citiesStartLine + 1}`);
console.log(`Pneus errados começam na linha: ${wrongTiresStartLine + 1}`);

// Extrair os pneus errados (do formato novo)
const wrongTiresContent = lines.slice(wrongTiresStartLine).join('\n');

// Parsear os pneus errados
const tireObjects = [];
const tireRegex = /\{\s*id:\s*(\d+),\s*slug:\s*"([^"]+)",\s*nome:\s*"([^"]+)",\s*marca:\s*"([^"]+)",\s*linha:\s*"([^"]+)",\s*aro:\s*(\d+),\s*medida:\s*"([^"]+)",\s*largura:\s*(\d+),\s*perfil:\s*(\d+),\s*indiceVelocidade:\s*"([^"]+)",\s*indiceCarga:\s*"([^"]+)",\s*categoria:\s*"([^"]+)",\s*tipoVeiculo:\s*\[([^\]]*)\],\s*imagem:\s*"([^"]+)",\s*imagemGrande:\s*"([^"]+)",\s*descricao:\s*"([^"]+)",\s*carros:\s*\[([^\]]*)\],\s*destaque:\s*(true|false),\s*novoModelo:\s*(true|false)\s*\}/gs;

let match;
while ((match = tireRegex.exec(wrongTiresContent)) !== null) {
  tireObjects.push({
    id: parseInt(match[1]),
    slug: match[2],
    nome: match[3],
    marca: match[4],
    linha: match[5],
    aro: parseInt(match[6]),
    medida: match[7],
    largura: parseInt(match[8]),
    perfil: parseInt(match[9]),
    indiceVelocidade: match[10],
    indiceCarga: match[11],
    categoria: match[12],
    tipoVeiculo: match[13],
    imagem: match[14],
    imagemGrande: match[15],
    descricao: match[16],
    carros: match[17],
    destaque: match[18] === 'true',
    novoModelo: match[19] === 'true'
  });
}

console.log(`Pneus extraídos: ${tireObjects.length}`);

if (tireObjects.length === 0) {
  console.log('Erro: Não conseguiu extrair os pneus. Verificando conteúdo...');
  console.log(wrongTiresContent.substring(0, 1000));
  process.exit(1);
}

// Converter para o formato do array TIRES
function convertToTiresFormat(tire) {
  // Extrair índice de carga numérico
  const cargaMatch = tire.indiceCarga.match(/^(\d+)/);
  const indiceCarga = cargaMatch ? cargaMatch[1] : '82';
  
  // Extrair índice de velocidade (letra)
  const velocidadeMatch = tire.indiceVelocidade.match(/^([A-Z])/);
  const indiceVelocidade = velocidadeMatch ? velocidadeMatch[1] : 'T';
  
  // Determinar preço baseado na categoria
  let preco = 299.90;
  if (tire.categoria.includes('Ultra') || tire.categoria.includes('Performance')) {
    preco = 599.90 + (tire.aro - 15) * 50;
  } else if (tire.categoria.includes('SUV') || tire.categoria.includes('Caminhonete')) {
    preco = 449.90 + (tire.aro - 15) * 30;
  } else if (tire.aro >= 17) {
    preco = 399.90 + (tire.aro - 17) * 40;
  } else if (tire.aro >= 15) {
    preco = 329.90 + (tire.aro - 15) * 25;
  }
  
  // Arredondar para .90
  preco = Math.round(preco / 10) * 10 - 0.10;
  
  return {
    id: tire.id,
    slug: tire.slug,
    titulo: `Pneu ${tire.nome}`,
    medida: tire.medida,
    linha: tire.linha,
    marca: tire.marca,
    categoria: tire.categoria === 'Econômico' ? 'Passeio' : 
               tire.categoria === 'Ultra High Performance' ? 'Performance' : tire.categoria,
    indiceCarga,
    indiceVelocidade,
    preco,
    precoAntigo: Math.round(preco * 1.15 * 100) / 100,
    imagem: tire.imagem,
    imagemGrande: tire.imagemGrande,
    emEstoque: true,
    destaque: tire.destaque,
    descricao: tire.descricao,
    carrosCompativeis: tire.carros ? tire.carros.split(',').map(c => c.trim().replace(/"/g, '')).filter(c => c) : []
  };
}

const convertedTires = tireObjects.map(convertToTiresFormat);
console.log(`Pneus convertidos: ${convertedTires.length}`);

// Gerar código dos pneus convertidos
let tiresCode = '';
for (const tire of convertedTires) {
  const carrosStr = tire.carrosCompativeis.length > 0 
    ? `["${tire.carrosCompativeis.join('", "')}"]` 
    : '[]';
  
  tiresCode += `
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
    carrosCompativeis: ${carrosStr}
  },`;
}

// Reconstruir o arquivo
// 1. Manter tudo até o fechamento do array TIRES
// 2. Adicionar os novos pneus
// 3. Fechar TIRES
// 4. Manter SERVICES, NEIGHBORHOODS, POPULAR_REGIONS
// 5. Reconstruir CITIES corretamente

// Encontrar o fim do array TIRES (antes de SERVICES)
const tiresEndRegex = /(\s*}\s*,?\s*)\];\s*\n\s*export const SERVICES/;
const tiresEndMatch = content.match(tiresEndRegex);

if (!tiresEndMatch) {
  console.log('Erro: Não encontrou o fim do array TIRES');
  process.exit(1);
}

const tiresEndPos = content.indexOf(tiresEndMatch[0]);
const beforeTiresEnd = content.substring(0, tiresEndPos + tiresEndMatch[1].length);

// Encontrar SERVICES, NEIGHBORHOODS, POPULAR_REGIONS e CITIES original (até os pneus errados)
const servicesStart = content.indexOf('export const SERVICES');
const citiesContent = lines.slice(citiesStartLine, wrongTiresStartLine).join('\n');

// Encontrar o último item válido do CITIES antes dos pneus errados
// Baseado na linha 1380
const validCitiesEnd = citiesContent.lastIndexOf('}');
const validCities = citiesContent.substring(0, validCitiesEnd + 1);

// Extrair SERVICES, NEIGHBORHOODS e POPULAR_REGIONS
const servicesSection = content.substring(servicesStart, content.indexOf('export const CITIES'));

// Reconstruir arquivo
const newContent = beforeTiresEnd + tiresCode + `
];

${servicesSection}
${validCities}
];
`;

// Salvar
fs.writeFileSync(DATA_FILE, newContent);

console.log('\n=== ARQUIVO CORRIGIDO ===');
console.log(`Novos pneus adicionados ao array TIRES: ${convertedTires.length}`);

// Verificar o resultado
const finalContent = fs.readFileSync(DATA_FILE, 'utf-8');
const finalIdMatches = finalContent.match(/id:\s*\d+/g);
console.log(`Total de IDs no arquivo: ${finalIdMatches ? finalIdMatches.length : 0}`);
