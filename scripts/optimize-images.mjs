import { readdirSync, statSync, writeFileSync, renameSync, existsSync } from 'fs';
import { join, extname, basename, dirname } from 'path';
import sharp from 'sharp';

const ROOT = 'public';

// Limites por categoria
const RULES = {
  pneu:   { maxW: 600,  maxH: 600,  capKB: 150 },
  heroD:  { maxW: 1920, maxH: 1080, capKB: 250 },
  heroM:  { maxW: 800,  maxH: 1200, capKB: 200 },
  inst:   { maxW: 1200, maxH: 1200, capKB: 250 },
};

// Pastas/arquivos a IGNORAR (library assets, favicon, logos pequenos)
const SKIP = [
  'leaflet',          // markers exigidos pelo Leaflet
  'favicon-carplus',  // favicon
];

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

function classify(path) {
  const lower = path.toLowerCase();
  if (SKIP.some((s) => lower.includes(s))) return null;
  if (basename(lower) === 'hero-desktop.webp') return 'heroD';
  if (basename(lower) === 'hero-mobile.webp') return 'heroM';
  if (lower.includes('/pneus/') || lower.includes('\\pneus\\') || /\/pneus\//.test(lower)) return 'pneu';
  if (lower.includes('logo') || lower.includes('/logos/')) return null; // logos pequenos, manter
  return 'inst';
}

const IMG_EXT = ['.png', '.jpg', '.jpeg', '.webp'];

async function encodeWebp(input, w, h, capBytes) {
  let quality = 82;
  let buf;
  do {
    buf = await sharp(input)
      .resize(w, h, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality })
      .toBuffer();
    quality -= 7;
  } while (buf.length > capBytes && quality >= 38);
  return buf;
}

async function encodeJpeg(input, w, h, capBytes) {
  let quality = 82;
  let buf;
  do {
    buf = await sharp(input)
      .resize(w, h, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality, mozjpeg: true })
      .toBuffer();
    quality -= 7;
  } while (buf.length > capBytes && quality >= 38);
  return buf;
}

async function encodePng(input, w, h) {
  return sharp(input)
    .resize(w, h, { fit: 'inside', withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 80 })
    .toBuffer();
}

const files = walk(ROOT).filter((f) => IMG_EXT.includes(extname(f).toLowerCase()));

let beforeTotal = 0;
let afterTotal = 0;
let countProcessed = 0;
const overCap = [];
const skipped = [];

for (const f of files) {
  const cat = classify(f);
  const beforeSize = statSync(f).size;
  beforeTotal += beforeSize;

  if (!cat) {
    afterTotal += beforeSize; // mantido como está
    continue;
  }

  const rule = RULES[cat];
  const capBytes = rule.capKB * 1024;
  const ext = extname(f).toLowerCase();

  let out;
  try {
    if (ext === '.webp') {
      out = await encodeWebp(f, rule.maxW, rule.maxH, capBytes);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      out = await encodeJpeg(f, rule.maxW, rule.maxH, capBytes);
    } else if (ext === '.png') {
      out = await encodePng(f, rule.maxW, rule.maxH);
    }
  } catch (e) {
    skipped.push(`${f} -> ${e.message.split('\n')[0]}`);
    afterTotal += beforeSize;
    continue;
  }

  // So substitui se ficou MENOR (nunca aumenta)
  if (out && out.length < beforeSize) {
    writeFileSync(f, out);
    afterTotal += out.length;
  } else {
    afterTotal += beforeSize;
  }

  const finalSize = statSync(f).size;
  if (finalSize > capBytes) overCap.push(`${(finalSize / 1024).toFixed(0)}KB (cap ${rule.capKB}) ${f}`);
  countProcessed++;
}

const kb = (b) => (b / 1024).toFixed(0);
const mb = (b) => (b / 1024 / 1024).toFixed(2);

console.log('================= RELATORIO =================');
console.log('ANTES:');
console.log('  Imagens (total):', files.length);
console.log('  Peso total     :', mb(beforeTotal), 'MB');
console.log('DEPOIS:');
console.log('  Processadas    :', countProcessed);
console.log('  Peso total     :', mb(afterTotal), 'MB');
console.log('ECONOMIA:');
console.log('  ', mb(beforeTotal - afterTotal), 'MB', `(${(((beforeTotal - afterTotal) / beforeTotal) * 100).toFixed(1)}%)`);
if (overCap.length) {
  console.log('--- ACIMA DO CAP (verificar) ---');
  overCap.forEach((l) => console.log('  ', l));
} else {
  console.log('Todas dentro dos limites de peso.');
}
if (skipped.length) {
  console.log('--- PULADAS (formato/erro) ---');
  skipped.forEach((l) => console.log('  ', l));
}
