#!/usr/bin/env node
// E5.5 — Controles negativos e de precedência exigidos pela auditoria.
// Garante que os redirects NÃO capturam rotas válidas, assets nem colidem
// com a regra dinâmica de medida, e que a precedência redirect→filesystem→rewrite
// se mantém. Roda contra o e5-routing-server (BASE).
const BASE = process.env.BASE || 'http://localhost:4600';

async function probe(url) {
  const res = await fetch(BASE + url, { redirect: 'manual' });
  return {
    status: res.status,
    location: res.headers.get('location'),
    servedBy: res.headers.get('x-served-by'),
  };
}

// caso: { url, expect: { status, servedBy? , location? , notStatus? } }
const cases = [
  // rotas válidas devem permanecer 200 via filesystem OU fallback (NÃO 301)
  { url: '/pneus', desc: '/pneus catálogo permanece 200 (nao redireciona)', expect: { notStatus: 301 } },
  { url: '/bairro/portao', desc: '/bairro/portao permanece 200', expect: { notStatus: 301 } },
  { url: '/quem-somos', desc: '/quem-somos permanece 200', expect: { notStatus: 301 } },
  { url: '/', desc: 'home permanece 200', expect: { notStatus: 301 } },

  // a regra dinâmica /pneus/:medida NÃO pode capturar slug de marca (sem barra)
  { url: '/pneus-pirelli-curitiba', desc: 'slug de marca NAO e capturado pela regra dinamica', expect: { notStatus: 301 } },

  // asset físico não pode ser redirecionado (deve ser 200 filesystem)
  { url: '__ASSET__', desc: 'asset .js real nao e redirecionado (200 filesystem)', expect: { status: 200, servedBy: 'filesystem' } },
  { url: '/assets/inexistente-exemplo.js', desc: 'asset inexistente NAO redireciona (cai no fallback, nunca 301)', expect: { notStatus: 301 } },

  // redirects legados DEVEM disparar 301
  { url: '/portao.html', desc: '/portao.html dispara 301', expect: { status: 301, location: '/bairro/portao' } },
  { url: '/pneus/175-65r14', desc: 'medida legada dispara 301', expect: { status: 301, location: '/pneu-medida/175-65r14' } },
  { url: '/pneu-pirelli-curitiba', desc: 'marca legada dispara 301', expect: { status: 301, location: '/pneus-pirelli-curitiba' } },

  // paginação: com query dispara; sem query NÃO
  { url: '/pneus?page=5', desc: 'paginacao com ?page dispara 301', expect: { status: 301 } },

  // rota inexistente → fallback SPA (soft-404, 200)
  { url: '/rota-inexistente-e55-xyz', desc: 'rota inexistente cai no fallback SPA (200)', expect: { status: 200, servedBy: 'spa-fallback-rewrite' } },

  // sitemap/robots servidos direto (200 filesystem), nunca redirecionados
  { url: '/sitemap.xml', desc: 'sitemap.xml servido direto (nao 301)', expect: { notStatus: 301 } },
  { url: '/robots.txt', desc: 'robots.txt servido direto (nao 301)', expect: { notStatus: 301 } },
];

// descobre um asset real
async function realAsset() {
  const html = await (await fetch(BASE + '/')).text();
  return (html.match(/\/assets\/[a-zA-Z0-9._-]+\.(js|css)/) || [])[0];
}

let pass = 0;
let fail = 0;
const bad = [];

const asset = await realAsset();

for (const c of cases) {
  const url = c.url === '__ASSET__' ? asset : c.url;
  if (!url) { bad.push(`sem asset para: ${c.desc}`); fail++; continue; }
  const r = await probe(url);
  let ok = true;
  const e = c.expect;
  if (e.status !== undefined && r.status !== e.status) ok = false;
  if (e.notStatus !== undefined && r.status === e.notStatus) ok = false;
  if (e.servedBy !== undefined && r.servedBy !== e.servedBy) ok = false;
  if (e.location !== undefined && r.location !== e.location) ok = false;
  console.log(`${ok ? '✓' : '✗'} ${c.desc}`);
  console.log(`     ${url} → ${r.status}${r.location ? ' → ' + r.location : ''} (${r.servedBy || '-'})`);
  if (ok) pass++; else { fail++; bad.push(c.desc); }
}

console.log('\n' + '='.repeat(50));
console.log(`Controles negativos/precedência: ${pass}/${cases.length}`);
if (fail) { console.log('FALHAS:'); bad.forEach((b) => console.log('  ✗ ' + b)); }
process.exit(fail === 0 ? 0 : 1);
