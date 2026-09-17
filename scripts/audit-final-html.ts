import fs from 'fs';
import path from 'path';
import { getStaticRoutes } from './static-routes';

const routes = getStaticRoutes();
let validCount = 0;
let spaShellCount = 0;
let missingCount = 0;
let totalContentLength = 0;

let stats: Record<string, { total: number, valid: number }> = {
  produto: { total: 0, valid: 0 },
  'landing-comercial': { total: 0, valid: 0 },
  servico: { total: 0, valid: 0 },
  medida: { total: 0, valid: 0 },
  veiculo: { total: 0, valid: 0 },
  bairro: { total: 0, valid: 0 },
  aro: { total: 0, valid: 0 },
  marca: { total: 0, valid: 0 },
  hub: { total: 0, valid: 0 },
  institucional: { total: 0, valid: 0 },
  home: { total: 0, valid: 0 },
};

let titleMissing = 0;
let descMissing = 0;
let h1Missing = 0;
let contentMissing = 0;
let schemaInvalid = 0;

for (const r of routes) {
  if (!stats[r.type]) {
    stats[r.type] = { total: 0, valid: 0 };
  }
  stats[r.type].total++;

  const cleanPath = r.path.replace(/^\/+|\/+$/g, '');
  const filePath = r.path === '/' 
    ? path.join(process.cwd(), 'dist', 'index.html') 
    : path.join(process.cwd(), 'dist', cleanPath, 'index.html');
  
  if (!fs.existsSync(filePath)) {
    missingCount++;
    continue;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('data-prerendered="true"')) {
    validCount++;
    stats[r.type].valid++;
    totalContentLength += content.length;

    if (!content.includes('<title')) titleMissing++;
    if (!content.includes('<meta name="description"')) descMissing++;
    if (!content.includes('<h1')) h1Missing++;
  } else {
    spaShellCount++;
  }
}

console.log('--- RELATORIO ---');
console.log(`URLs INDEXÁVEIS = ${routes.length}`);
console.log(`HTMLs GERADOS = ${validCount + spaShellCount}`);
console.log(`HTMLs VÁLIDOS = ${validCount}`);
console.log(`HTMLs AUSENTES = ${missingCount}`);
console.log(`SHELL SPA = ${spaShellCount}`);
console.log('--- DETALHES ---');
for (const type of Object.keys(stats)) {
  console.log(`${type} = ${stats[type].valid}/${stats[type].total}`);
}
console.log('--- PROBLEMAS ---');
console.log(`TITLE AUSENTE = ${titleMissing}`);
console.log(`DESCRIPTION AUSENTE = ${descMissing}`);
console.log(`H1 AUSENTE = ${h1Missing}`);
console.log(`CONTEÚDO AUSENTE = ${contentMissing}`);
