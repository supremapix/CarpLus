const fs = require('fs');
const path = require('path');
const src = fs.readFileSync(path.join(__dirname, '../src/data.ts'), 'utf8');

const marcas = {}; const aros = {}; const medidas = {}; const carros = {};
let m;
const marcaRe = /marca:\s*"([^"]+)"/g;
while ((m = marcaRe.exec(src))) marcas[m[1]] = (marcas[m[1]] || 0) + 1;
const aroRe = /aro:\s*(\d+)/g;
while ((m = aroRe.exec(src))) aros[m[1]] = (aros[m[1]] || 0) + 1;
const medRe = /medida:\s*"([^"]+)"/g;
while ((m = medRe.exec(src))) medidas[m[1]] = (medidas[m[1]] || 0) + 1;
const carRe = /carros:\s*\[([^\]]*)\]/g;
while ((m = carRe.exec(src))) {
  m[1].split(',').forEach((c) => {
    const cc = c.trim().replace(/^["']|["']$/g, '');
    if (cc) carros[cc] = (carros[cc] || 0) + 1;
  });
}

console.log('=== MARCAS ===');
console.log(JSON.stringify(marcas));
console.log('=== AROS ===');
console.log(JSON.stringify(aros));
console.log('=== TOTAL MEDIDAS ===', Object.keys(medidas).length);
const topMed = Object.entries(medidas).sort((a, b) => b[1] - a[1]).slice(0, 50);
console.log('=== TOP MEDIDAS ===');
console.log(topMed.map((x) => x[0] + ':' + x[1]).join(' | '));
const topCar = Object.entries(carros).sort((a, b) => b[1] - a[1]).slice(0, 80);
console.log('=== TOP CARROS ===');
console.log(topCar.map((x) => x[0] + ':' + x[1]).join(' | '));
