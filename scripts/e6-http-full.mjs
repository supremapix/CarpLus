#!/usr/bin/env node
// E6 — Testes HTTP ponta a ponta contra o dist completo (1512 rotas).
// Modela a cadeia da Vercel via servidor local: redirects(301) -> filesystem -> rewrite(SPA).
// Verifica: (1) 152 redirects 301 com destino exato; (2) precedência do filesystem
// sobre o rewrite numa amostra ampla e determinística de rotas físicas de TODOS os
// tipos; (3) fallback SPA (soft-404, HTTP 200) para rota inexistente.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BASE = process.env.BASE || 'http://localhost:4600';

function loadJSON(p) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
}

async function head(url) {
  const res = await fetch(url, { redirect: 'manual' });
  return res;
}

let pass = 0;
let fail = 0;
const failures = [];
function check(cond, label, extra) {
  if (cond) pass++;
  else {
    fail++;
    failures.push(label + (extra ? ` — ${extra}` : ''));
  }
}

// Amostra determinística: 1 rota física por diretório de tipo em dist.
function sampleDistRoutes() {
  const distDir = path.join(ROOT, 'dist');
  const samples = [];
  const skip = new Set(['assets', 'images']);
  for (const entry of fs.readdirSync(distDir).sort()) {
    const full = path.join(distDir, entry);
    if (!fs.statSync(full).isDirectory() || skip.has(entry)) continue;
    // pega o primeiro index.html recursivamente (determinístico via sort)
    const stack = [full];
    let found = null;
    while (stack.length && !found) {
      const cur = stack.shift();
      const items = fs.readdirSync(cur).sort();
      if (items.includes('index.html')) {
        found = path.join(cur, 'index.html');
        break;
      }
      for (const it of items) {
        const p = path.join(cur, it);
        if (fs.statSync(p).isDirectory()) stack.push(p);
      }
    }
    if (found) {
      const rel = '/' + path.relative(distDir, path.dirname(found)).split(path.sep).join('/');
      samples.push(rel);
    }
  }
  return samples;
}

async function main() {
  console.log(`[e6-http] BASE=${BASE}`);

  // ── 1) Redirects 301 ────────────────────────────────────────────────────
  const vj = loadJSON('vercel.json');
  const redirects = vj.redirects || [];
  // só testamos redirects incondicionais de path puro via HTTP simples
  const simple = redirects.filter((r) => !r.has && !r.missing && !r.source.includes(':'));
  let rOk = 0;
  for (const r of simple) {
    const res = await head(BASE + r.source);
    const loc = res.headers.get('location');
    const is301 = res.status === 301 || res.status === 308;
    const destOk = loc && loc.replace(/^https?:\/\/[^/]+/, '') === r.destination;
    check(is301 && destOk, `redirect ${r.source}`, `status=${res.status} loc=${loc}`);
    if (is301 && destOk) rOk++;
  }
  console.log(`[e6-http] redirects incondicionais 301: ${rOk}/${simple.length}`);

  // redirect dinâmico de medida (:medida) — testa 1 exemplo
  const dyn = redirects.find((r) => r.source.includes(':'));
  if (dyn) {
    const sample = dyn.source.replace(/:[^/]+/, '175-65r14');
    const res = await head(BASE + sample);
    check(res.status === 301 || res.status === 308, `redirect dinamico ${sample}`, `status=${res.status}`);
  }

  // ── 2) Precedência filesystem sobre rewrite ─────────────────────────────
  const distRoutes = sampleDistRoutes();
  let fsOk = 0;
  for (const route of distRoutes) {
    const res = await head(BASE + route);
    const servedBy = res.headers.get('x-served-by') || '';
    const is200 = res.status === 200;
    const fromFs = servedBy.includes('filesystem');
    check(is200 && fromFs, `filesystem ${route}`, `status=${res.status} servedBy=${servedBy}`);
    if (is200 && fromFs) fsOk++;
  }
  console.log(`[e6-http] rotas físicas via filesystem: ${fsOk}/${distRoutes.length} (amostra 1/tipo)`);

  // ── 3) Fallback SPA (soft-404) ──────────────────────────────────────────
  const res404 = await head(BASE + '/rota-inexistente-e6-http-test-xyz');
  const servedBy = res404.headers.get('x-served-by') || '';
  check(res404.status === 200 && servedBy.includes('rewrite'), 'fallback SPA rota inexistente', `status=${res404.status} servedBy=${servedBy}`);

  // /pneus puro deve ser 200 filesystem (não redirecionado)
  const resPneus = await head(BASE + '/pneus');
  check(resPneus.status === 200, '/pneus puro = 200 (não redirecionado)', `status=${resPneus.status}`);

  console.log(`\n[e6-http] RESULTADO: ${pass} passaram, ${fail} falharam`);
  if (fail) {
    console.log('\nFALHAS:');
    for (const f of failures.slice(0, 30)) console.log('  - ' + f);
    process.exit(1);
  }
  console.log('[e6-http] APROVADO');
}

main().catch((e) => {
  console.error('[e6-http] ERRO:', e);
  process.exit(1);
});
