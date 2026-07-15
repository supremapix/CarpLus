#!/usr/bin/env node
/**
 * E8.7 — Auditoria no Edge real da Vercel (Preview).
 *
 * NÃO altera nada. Apenas faz requisições HTTP e classifica os resultados.
 * Pré-requisitos no Preview (definidos por quem opera, fora deste script):
 *   - GENERATE_STATIC=1  (build publica as 1.512 páginas físicas)
 *   - PRERENDER_ENABLED=false  (bots caem no HTML físico, sem Prerender.io)
 *   - Deployment Protection desativada OU um Protection Bypass for Automation secret.
 *
 * Uso:
 *   BASE="https://<preview>.vercel.app" \
 *   BYPASS="<VERCEL_AUTOMATION_BYPASS_SECRET opcional>" \
 *   node scripts/e8.7-edge-audit.mjs
 *
 * Saída: tabela por objetivo + resumo PASS/FAIL + JSON em reports/e8.7-edge-results.json
 */
import fs from 'node:fs';
import path from 'node:path';

const BASE = (process.env.BASE || '').replace(/\/$/, '');
const BYPASS = process.env.BYPASS || '';
if (!BASE) {
  console.error('ERRO: defina BASE com a URL do Preview.');
  process.exit(2);
}

const UA_HUMAN =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';
const UA_GOOGLE = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const UA_BING = 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)';

const vercelJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'vercel.json'), 'utf8'));
const REDIRECTS = vercelJson.redirects || [];

function headers(extra = {}) {
  const h = { ...extra };
  if (BYPASS) {
    // Apenas o header de bypass em CADA requisição. NÃO enviar
    // 'x-vercel-set-bypass-cookie': com ele o edge responde 307 + Set-Cookie
    // (persistindo o bypass em cookie) em vez de servir o conteúdo direto,
    // o que quebra a leitura de status/HTML por requisição.
    h['x-vercel-protection-bypass'] = BYPASS;
  }
  return h;
}

async function req(pathname, { ua = UA_HUMAN, redirect = 'manual' } = {}) {
  const res = await fetch(BASE + pathname, {
    method: 'GET',
    redirect,
    headers: headers({ 'user-agent': ua }),
  });
  const body = await res.text().catch(() => '');
  return { status: res.status, location: res.headers.get('location'), ct: res.headers.get('content-type'), body };
}

const results = [];
function record(objetivo, nome, ok, detalhe) {
  results.push({ objetivo, nome, ok, detalhe });
  const tag = ok ? 'PASS' : 'FAIL';
  console.log(`  [${tag}] ${nome} — ${detalhe}`);
}

// Detecta a tela de SSO (bloqueio de proteção) para abortar cedo com mensagem clara.
function looksLikeSSO(r) {
  return r.status === 302 && /sso-api|vercel\.com\/login/.test(r.location || '');
}

async function main() {
  console.log(`\n=== E8.7 Edge Audit — ${BASE} ===`);
  console.log(`Bypass token: ${BYPASS ? 'fornecido' : 'NÃO fornecido'}\n`);

  // Sonda inicial de proteção
  const probe = await req('/');
  if (looksLikeSSO(probe)) {
    console.error(
      'BLOQUEADO: o Preview está sob Deployment Protection (302 → SSO). ' +
        'Desative a proteção ou forneça BYPASS (VERCEL_AUTOMATION_BYPASS_SECRET).',
    );
    fs.writeFileSync(
      path.join(process.cwd(), 'reports', 'e8.7-edge-results.json'),
      JSON.stringify({ base: BASE, blocked: 'SSO', probe }, null, 2),
    );
    process.exit(3);
  }

  // Objetivo 1 + 4: rotas válidas físicas (200 + HTML pré-renderizado, sem JS)
  console.log('OBJETIVO 1/4 — rotas válidas e precedência de filesystem');
  const fisicas = ['/', '/pneus', '/servicos', '/quem-somos', '/contato', '/pneu-medida/175-65r14'];
  for (const p of fisicas) {
    const r = await req(p);
    const temH1 = /<h1[\s>]/i.test(r.body);
    const prerender = /data-prerendered/i.test(r.body);
    record(1, `GET ${p}`, r.status === 200 && temH1, `status=${r.status} h1=${temH1} data-prerendered=${prerender}`);
  }

  // Objetivo 3: redirects permanentes (amostra + verificação de destino).
  // A Vercel emite 308 para redirects permanentes (equivalente a 301, preserva
  // o método). Aceitamos 301 OU 308 como permanente. Redirects dinâmicos (com
  // ':param' no source) não podem ser testados pelo source literal — testamos
  // o caso legado /pneus/<medida> com um valor concreto e ignoramos os demais.
  console.log('\nOBJETIVO 3 — redirects permanentes 301/308 (amostra de 20 dos ' + REDIRECTS.length + ')');
  const estaticos = REDIRECTS.filter(r => !r.source.includes(':') && !r.source.includes('('));
  const step = Math.max(1, Math.floor(estaticos.length / 20));
  const sample = estaticos.filter((_, i) => i % step === 0).slice(0, 20);
  const permanentOk = (status, rd) => {
    const wantsPermanent = (rd.statusCode ?? (rd.permanent ? 308 : 302)) !== 302;
    return wantsPermanent ? (status === 301 || status === 308) : status === 302 || status === 307;
  };
  // Monta a URL de teste respeitando condições `has` de query (ex.: paginação
  // /pneus?page=N). Sem a query, a request bate no catálogo /pneus (200) e
  // parece falha — por isso a query condicional precisa ir na URL testada.
  const buildTestUrl = (rd) => {
    const q = (rd.has || []).filter(h => h.type === 'query').map(h => `${h.key}=${h.value}`).join('&');
    return q ? `${rd.source}?${q}` : rd.source;
  };
  let okRedir = 0;
  for (const rd of sample) {
    const url = buildTestUrl(rd);
    const r = await req(url);
    const destOk = (r.location || '').split('?')[0].endsWith(rd.destination);
    const ok = permanentOk(r.status, rd) && destOk;
    if (ok) okRedir++;
    record(3, `${url}`, ok, `status=${r.status} → ${r.location || 'sem location'}`);
  }
  // Caso dinâmico legado: /pneus/<medida> deve redirecionar; /pneus/<img>.webp NÃO.
  const rMedida = await req('/pneus/325-30-19');
  const medidaOk = (rMedida.status === 301 || rMedida.status === 308) && /\/pneu-medida\/325-30-19$/.test(rMedida.location || '');
  if (medidaOk) okRedir++;
  record(3, `/pneus/325-30-19 (medida legada)`, medidaOk, `status=${rMedida.status} → ${rMedida.location || 'sem location'}`);
  const rWebp = await req('/pneus/bridgestone.webp');
  const webpOk = rWebp.status === 200 && /image\//.test(rWebp.ct || '');
  record(3, `/pneus/bridgestone.webp (imagem NÃO redireciona)`, webpOk, `status=${rWebp.status} type=${rWebp.ct}`);
  record(3, `RESUMO redirects`, okRedir === sample.length + 1 && webpOk, `${okRedir}/${sample.length + 1} permanentes + imagem servida`);

  // Objetivo 2: URLs inexistentes → 404 real
  console.log('\nOBJETIVO 2 — URLs inexistentes retornam 404 real');
  for (const p of ['/pagina-que-nao-existe', '/xyz/abc/123', '/pneu-medida/000-00r00', '/pneu/slug-invalido-999']) {
    const r = await req(p);
    record(2, `GET ${p}`, r.status === 404, `status=${r.status}`);
  }

  // Objetivo 4b: arquivos/meta com precedência (200)
  console.log('\nOBJETIVO 4 — arquivos físicos e meta-arquivos (200)');
  for (const p of ['/sitemap.xml', '/robots.txt', '/llms.txt']) {
    const r = await req(p);
    record(4, `GET ${p}`, r.status === 200, `status=${r.status} type=${r.ct}`);
  }

  // Objetivo 5 + 6: bots recebem HTML físico completo (sem Prerender.io)
  console.log('\nOBJETIVO 5/6 — bots recebem HTML físico (PRERENDER_ENABLED=false)');
  for (const [ua, nome] of [[UA_GOOGLE, 'Googlebot'], [UA_BING, 'Bingbot']]) {
    const r = await req('/pneus', { ua });
    const temH1 = /<h1[\s>]/i.test(r.body);
    const temJsonLd = /application\/ld\+json/i.test(r.body);
    const naoEhPrerenderIo = !/prerender\.io/i.test(r.ct || '');
    record(
      5,
      `${nome} GET /pneus`,
      r.status === 200 && temH1 && temJsonLd,
      `status=${r.status} h1=${temH1} json-ld=${temJsonLd} filesystem=${naoEhPrerenderIo}`,
    );
  }

  // Resumo
  const fails = results.filter((r) => !r.ok);
  console.log(`\n=== RESUMO: ${results.length - fails.length}/${results.length} PASS ===`);
  if (fails.length) {
    console.log('FALHAS:');
    fails.forEach((f) => console.log(`  - [obj ${f.objetivo}] ${f.nome}: ${f.detalhe}`));
  }
  fs.writeFileSync(
    path.join(process.cwd(), 'reports', 'e8.7-edge-results.json'),
    JSON.stringify({ base: BASE, bypass: !!BYPASS, total: results.length, fails: fails.length, results }, null, 2),
  );
  console.log('\nJSON salvo em reports/e8.7-edge-results.json');
  process.exit(fails.length ? 1 : 0);
}

main().catch((e) => {
  console.error('ERRO na auditoria:', e.message);
  process.exit(2);
});
