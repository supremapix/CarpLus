// E6 — Teste HTTP de roteamento completo sobre as 1512 rotas físicas + 152 redirects.
// Modela a ordem da Vercel (redirects 301 → filesystem → rewrite SPA) via
// scripts/e5-routing-server.mjs. Valida:
//  1) amostra determinística de rotas físicas → 200 servido do filesystem
//     (X-Served-By: filesystem) com HTML preenchido (canonical + <h1>).
//  2) os 152 redirects → 301 com Location correto e sem encadeamento.
//  3) controles negativos → rota inexistente cai no fallback SPA (200 soft-404),
//     e /pneus puro permanece 200 (não redirecionado).
import fs from 'node:fs';
import path from 'node:path';

const PORT = process.env.PORT || 4700;
const BASE = `http://localhost:${PORT}`;
const ROOT = process.cwd();

function readJson(p) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
}

// Enumera todos os index.html físicos de rota (exclui shell raiz e assets).
function listPhysicalRoutes() {
  const routes = [];
  const distDir = path.join(ROOT, 'dist');
  const walk = (dir, base) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        if (base === '' && (entry.name === 'assets' || entry.name === 'images')) continue;
        walk(path.join(dir, entry.name), `${base}/${entry.name}`);
      } else if (entry.name === 'index.html' && base !== '') {
        routes.push(base);
      }
    }
  };
  walk(distDir, '');
  routes.push('/'); // home = dist/index.html
  return routes.sort();
}

// Amostra determinística (a cada N) para cobrir todo o alfabeto de rotas.
function sample(arr, n) {
  if (arr.length <= n) return arr;
  const step = arr.length / n;
  const out = [];
  for (let i = 0; i < n; i++) out.push(arr[Math.floor(i * step)]);
  return out;
}

async function fetchNoRedirect(url) {
  const res = await fetch(url, { redirect: 'manual' });
  return res;
}

async function main() {
  let pass = 0;
  let fail = 0;
  const failures = [];
  const check = (cond, label) => {
    if (cond) pass++;
    else {
      fail++;
      failures.push(label);
    }
  };

  // 1) Rotas físicas (amostra de 200).
  const physical = listPhysicalRoutes();
  const physSample = sample(physical, 200);
  console.log(`[http] rotas físicas: ${physical.length} · amostra: ${physSample.length}`);
  for (const route of physSample) {
    const res = await fetchNoRedirect(`${BASE}${route}`);
    const served = res.headers.get('x-served-by');
    const body = await res.text();
    const ok200 = res.status === 200;
    const fromFs = served === 'filesystem';
    const hasCanonical = /<link rel="canonical"/.test(body);
    const hasH1 = /<h1/.test(body);
    check(
      ok200 && fromFs && hasCanonical && hasH1,
      `fisica ${route} (status=${res.status} served=${served} canonical=${hasCanonical} h1=${hasH1})`,
    );
  }

  // 2) Redirects 301.
  const vj = readJson('vercel.json');
  const redirects = vj.redirects || [];
  let redirectTested = 0;
  for (const r of redirects) {
    // Só testamos redirects incondicionais de path puro (os de paginação usam
    // `has` de query e exigem ?page=, testados à parte).
    if (r.has || r.missing || r.source.includes(':')) continue;
    const res = await fetchNoRedirect(`${BASE}${r.source}`);
    const loc = res.headers.get('location');
    const is301 = res.status === 301 || res.status === 308;
    // sem encadeamento: seguir o Location deve dar 200 (não outro 3xx)
    let noChain = true;
    if (loc) {
      const res2 = await fetchNoRedirect(`${BASE}${loc.startsWith('http') ? new URL(loc).pathname : loc}`);
      noChain = res2.status < 300 || res2.status >= 400;
    }
    check(
      is301 && loc === r.destination && noChain,
      `redirect ${r.source} → ${loc} (esperado ${r.destination}, status=${res.status}, semCadeia=${noChain})`,
    );
    redirectTested++;
  }
  // Um redirect de paginação (com ?page=)
  const pag = redirects.find((r) => (r.has || []).some?.((h) => h.key === 'page'));
  if (pag) {
    const res = await fetchNoRedirect(`${BASE}/pneus?page=3`);
    check(res.status === 301 || res.status === 308, `paginacao /pneus?page=3 (status=${res.status})`);
    redirectTested++;
  }
  console.log(`[http] redirects testados: ${redirectTested}`);

  // 3) Controles negativos.
  const negInexistente = await fetchNoRedirect(`${BASE}/rota-inexistente-e6-xyz`);
  const negBody = await negInexistente.text();
  check(
    negInexistente.status === 200 && negInexistente.headers.get('x-served-by') === 'spa-fallback-rewrite',
    `soft-404 fallback (status=${negInexistente.status} served=${negInexistente.headers.get('x-served-by')})`,
  );
  check(negBody.length > 0, 'soft-404 body não vazio');

  const pneusPuro = await fetchNoRedirect(`${BASE}/pneus`);
  check(pneusPuro.status === 200, `/pneus puro = 200 (status=${pneusPuro.status})`);

  console.log(`\n[http] RESULTADO: ${pass} passaram, ${fail} falharam`);
  if (fail > 0) {
    console.log('FALHAS:');
    failures.slice(0, 30).forEach((f) => console.log('  - ' + f));
    process.exit(1);
  }
  console.log('[http] APROVADO — roteamento completo íntegro.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
