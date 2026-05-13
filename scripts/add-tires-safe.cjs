const fs = require('fs');

const inputPath = './scripts/new-tires-input.txt';
const dataPath = './src/data.ts';

// Ler arquivo de entrada
const inputContent = fs.readFileSync(inputPath, 'utf-8');
const lines = inputContent.split('\n').filter(line => line.trim());

// Ler data.ts atual
let dataContent = fs.readFileSync(dataPath, 'utf-8');

// Encontrar o maior ID atual
const idMatches = dataContent.match(/id:\s*(\d+)/g);
const ids = idMatches.map(m => parseInt(m.match(/\d+/)[0]));
let nextId = Math.max(...ids) + 1;
console.log('Maior ID atual:', nextId - 1);
console.log('Próximo ID:', nextId);

// Extrair slugs existentes para verificar duplicatas
const existingSlugs = new Set();
const slugMatches = dataContent.match(/slug:\s*"([^"]+)"/g);
if (slugMatches) {
  slugMatches.forEach(m => {
    const slug = m.match(/"([^"]+)"/)[1];
    existingSlugs.add(slug);
  });
}
console.log('Total de slugs existentes:', existingSlugs.size);

// Parsear pneus do arquivo de entrada
// Formato: URL_IMAGEM\tTITULO (separado por tab)
const newTires = [];
const duplicates = [];

console.log('\nProcessando linhas...');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].replace(/\r/g, ''); // Remover \r do Windows
  const parts = line.split('\t');
  
  if (parts.length < 2) continue;
  
  const imageUrl = parts[0].trim();
  const titulo = parts[1].trim();
  
  // Ignorar cabeçalho e linhas que não são pneus
  if (!titulo || !titulo.startsWith('Pneu ')) continue;
  
  // Extrair informações do título
  const tituloClean = titulo.replace('Pneu ', '');
  
  // Extrair marca (primeira palavra após "Pneu ")
  const marcaMatch = tituloClean.match(/^(\w+)/);
  const marca = marcaMatch ? marcaMatch[1] : 'Outros';
  
  // Extrair medida (padrão XXX/XXRXX ou similar)
  const medidaMatch = tituloClean.match(/(\d{2,3}\/\d{2}R\d{2})/i);
  const medida = medidaMatch ? medidaMatch[1].toUpperCase() : '';
  
  if (!medida) {
    // Tentar outros formatos de medida
    const altMedidaMatch = tituloClean.match(/(\d{2,3}R\d{2})/i);
    if (!altMedidaMatch) continue;
  }
  
  // Extrair aro da medida
  const aroMatch = medida.match(/R(\d+)/i);
  const aro = aroMatch ? parseInt(aroMatch[1]) : 0;
  
  // Extrair largura e perfil
  const dimMatch = medida.match(/^(\d+)\/(\d+)/);
  const largura = dimMatch ? parseInt(dimMatch[1]) : 0;
  const perfil = dimMatch ? parseInt(dimMatch[2]) : 0;
  
  // Extrair linha (após a medida)
  let linha = 'Standard';
  const linhaMatch = tituloClean.match(/R\d+\s+(.+?)(?:\s+\d{2,3}[A-Z]|\s+para\s|$)/i);
  if (linhaMatch) {
    linha = linhaMatch[1].trim();
  }
  
  // Extrair índices de carga e velocidade (ex: 82T, 84H, 91V)
  const indicesMatch = tituloClean.match(/(\d{2,3})([A-Z])(?:\s|$)/);
  const indiceCarga = indicesMatch ? indicesMatch[1] : '82';
  const indiceVelocidade = indicesMatch ? indicesMatch[2] : 'T';
  
  // Extrair carro compatível (se houver "para Xxxx")
  const carroMatch = titulo.match(/para\s+(.+?)$/i);
  const carros = carroMatch ? [carroMatch[1].trim()] : [];
  
  // Gerar slug
  let slug = titulo.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  
  // Verificar duplicata
  if (existingSlugs.has(slug)) {
    duplicates.push(titulo);
    continue;
  }
  
  // Determinar categoria
  let categoria = 'Passeio';
  if (linha.toLowerCase().includes('scorpion') || linha.toLowerCase().includes('suv')) {
    categoria = 'SUV';
  } else if (linha.toLowerCase().includes('cinturato') || linha.toLowerCase().includes('p7') || linha.toLowerCase().includes('p zero')) {
    categoria = 'Performance';
  }
  
  // Determinar tipo de veículo
  let tipoVeiculo = ['Passeio'];
  if (categoria === 'SUV') {
    tipoVeiculo = ['SUV', 'Caminhonete'];
  } else if (largura >= 225 || aro >= 18) {
    tipoVeiculo = ['Sedan', 'SUV'];
  }
  
  // Processar URL da imagem
  let imagem = '/images/pneus/pneu-generico.webp';
  if (imageUrl && imageUrl.startsWith('http')) {
    // Extrair nome do arquivo da URL
    const imgMatch = imageUrl.match(/([^\/]+\.(jpg|jpeg|png|webp|gif))/i);
    if (imgMatch) {
      imagem = '/images/pneus/' + imgMatch[1];
    }
  }
  
  // Criar objeto do pneu
  const tire = {
    id: nextId++,
    slug,
    nome: titulo,
    marca,
    linha,
    aro,
    medida,
    largura,
    perfil,
    indiceVelocidade: `${indiceVelocidade} (${getVelocidade(indiceVelocidade)}km/h)`,
    indiceCarga: `${indiceCarga} (${getCarga(indiceCarga)}kg)`,
    categoria,
    tipoVeiculo,
    imagem,
    imagemGrande: imagem,
    descricao: `${titulo}. Excelente desempenho e durabilidade.`,
    carros,
    destaque: false,
    novoModelo: false
  };
  
  newTires.push(tire);
  existingSlugs.add(slug);
}

console.log(`\nPneus parseados: ${newTires.length}`);
console.log(`Duplicatas ignoradas: ${duplicates.length}`);

// Funções auxiliares
function getVelocidade(codigo) {
  const map = { 'T': 190, 'H': 210, 'V': 240, 'W': 270, 'Y': 300, 'S': 180, 'R': 170, 'Q': 160 };
  return map[codigo] || 180;
}

function getCarga(codigo) {
  const base = { '80': 450, '82': 475, '84': 500, '86': 530, '88': 560, '90': 600, '91': 615, '92': 630, '94': 670, '96': 710, '98': 750, '100': 800, '102': 850, '104': 900, '106': 950 };
  return base[codigo] || 500;
}

if (newTires.length === 0) {
  console.log('\nNenhum pneu novo para adicionar.');
  console.log('Verifique se os pneus já existem no catálogo ou se o formato do arquivo está correto.');
  process.exit(0);
}

// Encontrar a posição para inserir (antes do fechamento do array TIRES)
const insertMarker = '];\n\nexport const SERVICES';
const insertPos = dataContent.indexOf(insertMarker);

if (insertPos === -1) {
  console.error('Erro: Não encontrou o marcador para inserção');
  process.exit(1);
}

// Gerar o código dos novos pneus (formato de uma linha cada)
const tiresCode = newTires.map(t => {
  const tipoVeiculoStr = JSON.stringify(t.tipoVeiculo);
  const carrosStr = JSON.stringify(t.carros);
  return `  { id: ${t.id}, slug: "${t.slug}", nome: "${t.nome}", marca: "${t.marca}", linha: "${t.linha}", aro: ${t.aro}, medida: "${t.medida}", largura: ${t.largura}, perfil: ${t.perfil}, indiceVelocidade: "${t.indiceVelocidade}", indiceCarga: "${t.indiceCarga}", categoria: "${t.categoria}", tipoVeiculo: ${tipoVeiculoStr}, imagem: "${t.imagem}", imagemGrande: "${t.imagemGrande}", descricao: "${t.descricao.replace(/"/g, '\\"')}", carros: ${carrosStr}, destaque: ${t.destaque}, novoModelo: ${t.novoModelo} },`;
}).join('\n');

// Inserir os novos pneus
const newContent = dataContent.slice(0, insertPos) + '\n' + tiresCode + '\n' + dataContent.slice(insertPos);

fs.writeFileSync(dataPath, newContent);
console.log(`\n${newTires.length} pneus adicionados ao data.ts!`);

// Contar total final
const finalContent = fs.readFileSync(dataPath, 'utf-8');
const finalIds = finalContent.match(/id:\s*\d+/g);
console.log('Total de pneus agora:', finalIds ? finalIds.length : 0);
