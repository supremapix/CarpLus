const fs = require('fs');

const dataPath = './src/data.ts';
let content = fs.readFileSync(dataPath, 'utf-8');

// Encontrar onde começa a parte com formato errado (titulo em vez de nome)
const wrongFormatStart = content.indexOf('titulo:');

if (wrongFormatStart === -1) {
  console.log('Nenhum pneu com formato errado encontrado (titulo:)');
  process.exit(0);
}

console.log('Encontrado formato errado na posição:', wrongFormatStart);

// Substituir titulo: por nome:
content = content.replace(/titulo:/g, 'nome:');
console.log('Substituído titulo: por nome:');

// Substituir carrosCompativeis: por carros:
content = content.replace(/carrosCompativeis:/g, 'carros:');
console.log('Substituído carrosCompativeis: por carros:');

// Remover campos que não existem na interface: preco, precoAntigo, emEstoque
content = content.replace(/\s*preco:\s*[\d.]+,?\n/g, '\n');
content = content.replace(/\s*precoAntigo:\s*[\d.]+,?\n/g, '\n');
content = content.replace(/\s*emEstoque:\s*(true|false),?\n/g, '\n');
console.log('Removidos campos extras (preco, precoAntigo, emEstoque)');

// Adicionar campos faltantes com valores padrão
// aro, largura, perfil, tipoVeiculo, novoModelo

// Função para extrair aro da medida
function extractAro(medida) {
  const match = medida.match(/R(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

// Função para extrair largura da medida  
function extractLargura(medida) {
  const match = medida.match(/^(\d+)/);
  return match ? parseInt(match[1]) : 0;
}

// Função para extrair perfil da medida
function extractPerfil(medida) {
  const match = medida.match(/\/(\d+)R/);
  return match ? parseInt(match[1]) : 0;
}

// Processar cada pneu que está em formato multi-linha
const tiresRegex = /\{\s*id:\s*(\d+),\s*slug:\s*"([^"]+)",\s*nome:\s*"([^"]+)",\s*medida:\s*"([^"]+)",\s*linha:\s*"([^"]+)",\s*marca:\s*"([^"]+)",\s*categoria:\s*"([^"]+)",\s*indiceCarga:\s*"([^"]+)",\s*indiceVelocidade:\s*"([^"]+)",\s*imagem:\s*"([^"]+)",\s*imagemGrande:\s*"([^"]+)",\s*destaque:\s*(true|false),\s*descricao:\s*"([^"]+)",\s*carros:\s*\[(.*?)\]\s*\}/gs;

let match;
const newTires = [];
let processedCount = 0;

// Encontrar todos os pneus no formato multi-linha após a linha 1227
const servicesStart = content.indexOf('export const SERVICES');
const tiresEnd = content.lastIndexOf('];', servicesStart);

// Pegar a seção de pneus novos
const newTiresSection = content.substring(content.indexOf('{', content.indexOf('id: 411')), tiresEnd);

// Usar regex mais flexível para encontrar pneus
const tireBlocks = newTiresSection.split(/\},\s*\{/);
console.log(`Encontrados ${tireBlocks.length} blocos de pneus para processar`);

// Salvar o arquivo com as substituições básicas
fs.writeFileSync(dataPath, content);
console.log('\nArquivo salvo com substituições básicas.');

// Agora ler novamente e adicionar os campos faltantes
content = fs.readFileSync(dataPath, 'utf-8');

// Adicionar aro:, largura:, perfil:, tipoVeiculo:, novoModelo: para pneus que não têm
// Encontrar pneus que têm nome: mas não têm aro:
const lines = content.split('\n');
const newLines = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Se a linha tem medida: e a próxima não tem aro:
  if (line.includes('medida:') && !lines[i-1]?.includes('aro:') && !lines[i+1]?.includes('aro:')) {
    // Extrair a medida
    const medidaMatch = line.match(/medida:\s*"([^"]+)"/);
    if (medidaMatch) {
      const medida = medidaMatch[1];
      const aro = extractAro(medida);
      const largura = extractLargura(medida);
      const perfil = extractPerfil(medida);
      
      // Adicionar aro antes de medida
      newLines.push(`    aro: ${aro},`);
      newLines.push(line);
      newLines.push(`    largura: ${largura},`);
      newLines.push(`    perfil: ${perfil},`);
      continue;
    }
  }
  
  // Se a linha tem categoria: e precisa adicionar tipoVeiculo depois
  if (line.includes('categoria:') && !lines[i+1]?.includes('tipoVeiculo:') && !lines[i+1]?.includes('indiceCarga:')) {
    newLines.push(line);
    // Determinar tipo de veículo baseado na categoria
    const catMatch = line.match(/categoria:\s*"([^"]+)"/);
    if (catMatch) {
      const cat = catMatch[1];
      let tipoVeiculo = '["Passeio"]';
      if (cat.includes('SUV') || cat.includes('Caminhonete')) {
        tipoVeiculo = '["SUV", "Caminhonete"]';
      } else if (cat.includes('Performance')) {
        tipoVeiculo = '["Esportivo"]';
      }
      newLines.push(`    tipoVeiculo: ${tipoVeiculo},`);
    }
    continue;
  }
  
  // Se a linha tem destaque: e a próxima não tem novoModelo:
  if (line.includes('destaque:') && !lines[i+1]?.includes('novoModelo:') && !lines[i+1]?.includes('descricao:')) {
    newLines.push(line);
    newLines.push(`    novoModelo: false,`);
    continue;
  }
  
  newLines.push(line);
}

fs.writeFileSync(dataPath, newLines.join('\n'));
console.log('Campos adicionais inseridos.');

// Verificar resultado
const finalContent = fs.readFileSync(dataPath, 'utf-8');
const startMatch = finalContent.indexOf('export const TIRES: Tire[] = [');
const servicesMatchFinal = finalContent.indexOf('export const SERVICES');
const tiresSection = finalContent.substring(startMatch, servicesMatchFinal);
const idMatches = tiresSection.match(/id:\s*\d+/g);
console.log('\nTotal de pneus no array TIRES:', idMatches ? idMatches.length : 0);
