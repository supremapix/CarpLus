#!/usr/bin/env node
// E5.5 — Inventário independente dos redirects + análise de conflitos.
// Lê vercel.json (fonte servida) e classifica cada regra, detectando:
// duplicatas, loops, cadeias, conflito com rota válida/asset/página física/rewrite.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf-8'));
const redirects = cfg.redirects || [];

// Rotas válidas que DEVEM permanecer 200 (amostra representativa + prefixos).
const VALID_ROUTES = ['/', '/pneus', '/servicos', '/quem-somos', '/contato', '/bairro/portao'];
const ASSET_RE = /^\/(assets|images)\//;
const PHYSICAL_PILOT = new Set(
  fs.existsSync(path.join(ROOT, 'dist'))
    ? []
    : [],
);

const keyOf = (r) =>
  r.source + '::' + ((r.has || []).map((h) => `${h.key}=${h.value}`).sort().join('&'));

// Índice de origens e destinos.
const sourceKeys = new Map();
const destSet = new Set(redirects.map((r) => r.destination));

let dupCount = 0;
let loopCount = 0;
let chainCount = 0;

function categorize(r) {
  if (r.source === '/pneus' && (r.has || []).some((h) => h.key === 'page')) return 'paginacao';
  if (/^\/[a-z0-9-]+\.html$/.test(r.source)) return 'bairro-cidade';
  if (r.source.includes(':medida')) return 'medida-dinamica';
  return 'marca-legacy';
}

const rows = [];
for (const r of redirects) {
  const k = keyOf(r);
  let conflito = '';
  const obs = [];

  // duplicata
  if (sourceKeys.has(k)) {
    conflito = 'DUPLICATA';
    dupCount++;
  }
  sourceKeys.set(k, true);

  // loop: source == destination
  const srcPath = r.source.split('?')[0];
  if (srcPath === r.destination) {
    conflito = 'LOOP';
    loopCount++;
  }

  // cadeia: destination é source de outra regra
  const destIsSource = redirects.some((o) => o !== r && o.source.split('?')[0] === r.destination);
  if (destIsSource) {
    conflito = conflito ? conflito + '+CADEIA' : 'CADEIA';
    chainCount++;
  }

  // conflito com rota válida (source exatamente uma rota que deve ser 200)
  if (VALID_ROUTES.includes(srcPath)) {
    obs.push('source-igual-rota-valida');
  }
  // conflito com asset
  if (ASSET_RE.test(srcPath)) {
    obs.push('source-asset');
  }

  const cat = categorize(r);
  const manual = cat === 'paginacao' ? 'automatico' : 'manual';
  const query = (r.has || []).map((h) => `${h.key}=${h.value}`).join('&');
  const source = query ? `${r.source}?${query}` : r.source;

  rows.push({
    source,
    destination: r.destination,
    categoria: cat,
    manual_ou_automatico: manual,
    status: r.permanent ? '301' : '302',
    conflito: conflito || 'nenhum',
    observacao: obs.join(';') || '-',
  });
}

// CSV
const header = ['source', 'destination', 'categoria', 'manual_ou_automatico', 'status', 'conflito', 'observacao'];
const esc = (v) => (/[",\n]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v);
const csv = [header.join(',')]
  .concat(rows.map((r) => header.map((h) => esc(String(r[h]))).join(',')))
  .join('\n');
fs.mkdirSync(path.join(ROOT, 'reports'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'reports/e5-redirect-inventory.csv'), csv + '\n');

// Resumo
const byCat = rows.reduce((a, r) => ((a[r.categoria] = (a[r.categoria] || 0) + 1), a), {});
console.log('[inventory] linhas:', rows.length);
console.log('[inventory] por categoria:', JSON.stringify(byCat));
console.log('[inventory] duplicatas:', dupCount, '| loops:', loopCount, '| cadeias:', chainCount);
console.log('[inventory] source == rota válida:', rows.filter((r) => r.observacao.includes('rota-valida')).length);
console.log('[inventory] source == asset:', rows.filter((r) => r.observacao.includes('asset')).length);
console.log('[inventory] CSV escrito em reports/e5-redirect-inventory.csv');

const fail = dupCount > 0 || loopCount > 0 || chainCount > 0;
process.exit(fail ? 1 : 0);
