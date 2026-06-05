import { readFileSync, mkdirSync, writeFileSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const OUT_DIR = resolve(root, 'public/pneus');
mkdirSync(OUT_DIR, { recursive: true });

// Extrai a lista RAW_TIRES (marca + url) do arquivo de dados via regex simples.
const dataFile = readFileSync(resolve(root, 'src/data/promoTires.ts'), 'utf8');
const rawBlock = dataFile.slice(
  dataFile.indexOf('const RAW_TIRES'),
  dataFile.indexOf('];', dataFile.indexOf('const RAW_TIRES')) + 2
);
const entryRe = /marca:\s*'([^']+)'[^]*?imagem:\s*'([^']+)'/g;
const tires = [];
let m;
while ((m = entryRe.exec(rawBlock)) !== null) {
  tires.push({ marca: m[1], url: m[2] });
}

function slugify(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CarplusImageBot/1.0)' },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

const MAX_DIM = 600;
const MAX_KB = 150;
const report = [];
let totalBefore = 0;
let totalAfter = 0;

for (const tire of tires) {
  const slug = slugify(tire.marca);
  const outPath = resolve(OUT_DIR, `${slug}.webp`);
  try {
    const input = await fetchBuffer(tire.url);
    totalBefore += input.length;

    // Tenta qualidades decrescentes até ficar < 150KB (versão 600px).
    let quality = 82;
    let out;
    do {
      out = await sharp(input)
        .resize(MAX_DIM, MAX_DIM, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality })
        .toBuffer();
      quality -= 8;
    } while (out.length > MAX_KB * 1024 && quality >= 40);

    writeFileSync(outPath, out);
    totalAfter += out.length;

    // Versão responsiva menor (300px) para cards da esteira/lista.
    const outSmall = await sharp(input)
      .resize(300, 300, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 78 })
      .toBuffer();
    writeFileSync(resolve(OUT_DIR, `${slug}-300.webp`), outSmall);
    totalAfter += outSmall.length;
    report.push({
      marca: tire.marca,
      slug,
      antesKB: (input.length / 1024).toFixed(1),
      depoisKB: (out.length / 1024).toFixed(1),
      ok: true,
    });
  } catch (err) {
    report.push({ marca: tire.marca, slug, erro: String(err.message || err), ok: false });
  }
}

console.log('\n=== RELATÓRIO DE OTIMIZAÇÃO (PNEUS PROMOÇÃO) ===\n');
console.log('MARCA'.padEnd(14), 'ANTES'.padStart(9), 'DEPOIS'.padStart(9), '  STATUS');
for (const r of report) {
  if (r.ok) {
    console.log(
      r.marca.padEnd(14),
      `${r.antesKB}KB`.padStart(9),
      `${r.depoisKB}KB`.padStart(9),
      '  OK'
    );
  } else {
    console.log(r.marca.padEnd(14), 'FALHOU'.padStart(9), ''.padStart(9), `  ${r.erro}`);
  }
}
const okCount = report.filter((r) => r.ok).length;
console.log('\n--- TOTAIS ---');
console.log(`Imagens processadas: ${okCount}/${report.length}`);
console.log(`ANTES:  ${(totalBefore / 1024).toFixed(1)} KB (${(totalBefore / 1024 / 1024).toFixed(2)} MB)`);
console.log(`DEPOIS: ${(totalAfter / 1024).toFixed(1)} KB (${(totalAfter / 1024 / 1024).toFixed(2)} MB)`);
const economia = totalBefore - totalAfter;
console.log(
  `ECONOMIA: ${(economia / 1024).toFixed(1)} KB (${((economia / totalBefore) * 100).toFixed(1)}%)`
);

// Mapa slug -> caminho local, salvo para uso posterior.
const map = Object.fromEntries(report.filter((r) => r.ok).map((r) => [r.marca, `/pneus/${r.slug}.webp`]));
writeFileSync(resolve(OUT_DIR, '_map.json'), JSON.stringify(map, null, 2));
console.log('\nMapa salvo em public/pneus/_map.json');
