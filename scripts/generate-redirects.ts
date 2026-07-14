// scripts/generate-redirects.ts
// ─────────────────────────────────────────────────────────────────────────────
// GERADOR DE REDIRECTS 301 DO vercel.json
// ─────────────────────────────────────────────────────────────────────────────
// Escreve a chave "redirects" do vercel.json a partir de DUAS origens claramente
// separadas, preservando rewrites, headers e demais chaves:
//
//   1. MANUAIS  (fonte: scripts/manual-redirects.ts) — 76 regras promovidas na E5:
//        • 69 bairros/cidades  /<slug>.html      → /bairro/<slug>
//        •  1 medida (dinâmica) /pneus/:medida     → /pneu-medida/:medida
//        •  6 slugs de marca    /<legacySlug>       → /<slug>
//      São a FONTE ÚNICA versionada — sempre reescritas, nunca perdidas.
//
//   2. PAGINAÇÃO (fonte: src/lib/seoIndexing.ts) — 76 regras autogeradas:
//        /pneus?page=N → /landing-tematica  (dominância ≥ REDIRECT_THRESHOLD)
//      Reconhecidas pela forma (source "/pneus" + query "page"); regeneradas a cada run.
//
// Resultado esperado após a E5: 76 manuais + 76 paginação = 152 redirects.
//
// GARANTIA DE NÃO-PERDA: qualquer redirect já presente no vercel.json que NÃO
// seja de paginação e NÃO esteja no conjunto manual gerenciado é PRESERVADO como
// "manual desconhecido" (defensivo). Assim o gerador é idempotente e nunca apaga
// regras — rodar `npm run redirects` restaura os manuais mesmo se o arquivo for
// esvaziado, sem descartar eventuais regras adicionadas à mão.
//
// Ordem final no vercel.json: [manuais, manuais-desconhecidos, paginação],
// depois rewrites (fallback SPA) e headers. O Vercel avalia redirects primeiro.
//
// Execução: `tsx scripts/generate-redirects.ts` (encadeado no prebuild).

import fs from 'fs';
import path from 'path';
import { getPaginationRedirects, REDIRECT_THRESHOLD } from '../src/lib/seoIndexing';
import { getManualRedirects, redirectKey, type RedirectRule } from './manual-redirects';

const ROOT = process.cwd();
const VERCEL_JSON = path.join(ROOT, 'vercel.json');

/** Uma regra é "de paginação" (autogerada) quando casa /pneus + query page. */
function isPaginationRule(r: RedirectRule): boolean {
  return (
    r.source === '/pneus' &&
    Array.isArray(r.has) &&
    r.has.some((h) => h.type === 'query' && h.key === 'page')
  );
}

function buildPaginationRedirects(): RedirectRule[] {
  return getPaginationRedirects().map((r) => ({
    // Query-based 301: /pneus?page=N → /landing (permanente), mesmo host.
    source: '/pneus',
    has: [{ type: 'query' as const, key: 'page', value: String(r.page) }],
    destination: `/${r.toSlug}`,
    permanent: true,
  }));
}

function main() {
  const raw = fs.readFileSync(VERCEL_JSON, 'utf-8');
  const config = JSON.parse(raw) as {
    rewrites?: unknown[];
    redirects?: RedirectRule[];
    headers?: unknown[];
    [k: string]: unknown;
  };

  const existing = config.redirects ?? [];

  // 1. Manuais gerenciados (fonte única versionada).
  const manual = getManualRedirects();
  const manualKeys = new Set(manual.map(redirectKey));

  // 2. Paginação (autogerada a cada run).
  const pagination = buildPaginationRedirects();

  // 3. Preserva manuais DESCONHECIDOS: presentes no vercel.json, mas que não são
  //    paginação nem fazem parte do conjunto manual gerenciado. Defensivo contra perda.
  const unknownManual = existing.filter(
    (r) => !isPaginationRule(r) && !manualKeys.has(redirectKey(r)),
  );

  const redirects = [...manual, ...unknownManual, ...pagination];

  // redirects antes de rewrites (o Vercel aplica redirects primeiro).
  const ordered: Record<string, unknown> = {};
  if (redirects.length > 0) ordered.redirects = redirects;
  if (config.rewrites) ordered.rewrites = config.rewrites;
  if (config.headers) ordered.headers = config.headers;
  for (const [k, v] of Object.entries(config)) {
    if (!['redirects', 'rewrites', 'headers'].includes(k)) ordered[k] = v;
  }

  fs.writeFileSync(VERCEL_JSON, JSON.stringify(ordered, null, 2) + '\n');

  console.log('[redirects] vercel.json atualizado:');
  console.log(`  - threshold de paginação    : ${Math.round(REDIRECT_THRESHOLD * 100)}%`);
  console.log(`  - manuais (fonte única)     : ${manual.length}`);
  console.log(`  - manuais preservados (n/i) : ${unknownManual.length}`);
  console.log(`  - paginação (autogerada)    : ${pagination.length}`);
  console.log(`  - TOTAL redirects           : ${redirects.length}`);
  if (unknownManual.length > 0) {
    console.log('  ⚠ regras manuais desconhecidas preservadas:');
    for (const u of unknownManual) console.log(`      ${u.source} → ${u.destination}`);
  }
}

main();
