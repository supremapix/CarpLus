#!/usr/bin/env node
// Testa via HTTP TODOS os 152 redirects do vercel.json contra o e5-routing-server:
//   - status 301
//   - Location == destino esperado (com :param substituído)
//   - destino final resolve SEM nova redireção (sem cadeia): 2º hop != 301
// Também testa: rotas piloto (filesystem 200), rota inexistente (soft-404 200),
// e um asset (200).
import fs from 'node:fs';
import path from 'node:path';

const BASE = process.env.BASE || 'http://localhost:4600';
const config = JSON.parse(fs.readFileSync(path.resolve('vercel.json'), 'utf-8'));
const REDIRECTS = config.redirects ?? [];

let pass = 0;
let fail = 0;
const bad = [];

async function head(url) {
  const res = await fetch(url, { redirect: 'manual' });
  return { status: res.status, location: res.headers.get('location'), servedBy: res.headers.get('x-served-by') };
}

// Gera uma URL concreta a partir de um source (substitui :param e query has).
function concreteRequest(r) {
  if (Array.isArray(r.has)) {
    const qs = r.has.map((h) => `${h.key}=${h.value}`).join('&');
    return { url: `${r.source}?${qs}`, expected: r.destination };
  }
  if (r.source.includes(':')) {
    // usa um valor de exemplo para o param
    const sample = '175-65r14';
    const src = r.source.replace(/:[a-zA-Z0-9_]+/g, sample);
    const dst = r.destination.replace(/:[a-zA-Z0-9_]+/g, sample);
    return { url: src, expected: dst };
  }
  return { url: r.source, expected: r.destination };
}

console.log(`# Teste HTTP dos redirects (${REDIRECTS.length}) contra ${BASE}\n`);

for (const r of REDIRECTS) {
  const { url, expected } = concreteRequest(r);
  try {
    const first = await head(BASE + url);
    if (first.status !== 301) {
      fail++; bad.push(`[status ${first.status}] ${url}`); continue;
    }
    if (first.location !== expected) {
      fail++; bad.push(`[destino ${first.location} != ${expected}] ${url}`); continue;
    }
    // 2º hop: destino não pode redirecionar de novo (sem cadeia)
    const second = await head(BASE + first.location);
    if (second.status === 301) {
      fail++; bad.push(`[cadeia: ${url} -> ${first.location} -> ${second.location}]`); continue;
    }
    pass++;
  } catch (e) {
    fail++; bad.push(`[erro ${e.message}] ${url}`);
  }
}

console.log(`Redirects 301 corretos e sem cadeia: ${pass}/${REDIRECTS.length}`);
if (bad.length) {
  console.log('Falhas:');
  for (const b of bad.slice(0, 40)) console.log('  ✗ ' + b);
}

// Testes extra
console.log('\n# Rotas extra');
const extra = [
  { url: '/pneu/pneu-pirelli-175-70r13-p400-evo-82t', want: 'filesystem', status: 200 },
  { url: '/bairro/portao', want: 'filesystem', status: 200 },
  { url: '/quem-somos', want: 'filesystem', status: 200 },
  { url: '/rota-que-nao-existe-e5', want: 'spa-fallback-rewrite', status: 200 },
];
let extraPass = 0;
for (const t of extra) {
  const r = await head(BASE + t.url);
  const good = r.status === t.status && r.servedBy === t.want;
  console.log(`  ${good ? '✓' : '✗'} ${t.url} → ${r.status} (${r.servedBy})`);
  if (good) extraPass++; else fail++;
}

// Asset
const assetHtml = await (await fetch(BASE + '/pneu/pneu-pirelli-175-70r13-p400-evo-82t')).text();
const asset = (assetHtml.match(/\/assets\/[a-zA-Z0-9._-]+\.js/) || [])[0];
if (asset) {
  const r = await head(BASE + asset);
  const good = r.status === 200 && r.servedBy === 'filesystem';
  console.log(`  ${good ? '✓' : '✗'} asset ${asset} → ${r.status} (${r.servedBy})`);
  if (good) extraPass++; else fail++;
}

console.log('\n' + '='.repeat(50));
if (fail === 0) {
  console.log(`RESULTADO: APROVADO — ${pass}/${REDIRECTS.length} redirects + ${extraPass} rotas extra`);
  process.exit(0);
} else {
  console.log(`RESULTADO: REPROVADO — ${fail} falha(s)`);
  process.exit(1);
}
