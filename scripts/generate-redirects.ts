// scripts/generate-redirects.ts
// Generates manual legacy redirects while preserving unknown manual rules.
// Catalog query pagination is NOT an alias for a brand/size landing. The shared
// indexing engine now returns no pagination redirects; old generated rules are
// removed on regeneration. Existing noindex pagination policy is unchanged.
// Expected: 85 manual redirects, 24 unchanged rewrites; no catalog-query redirects.

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

  // Ordem estável e determinística: buildCommand primeiro (config de deploy),
  // depois redirects (o Vercel aplica redirects antes de rewrites), rewrites,
  // headers e por fim quaisquer outras chaves preservadas do vercel.json.
  const ordered: Record<string, unknown> = {};
  if (config.buildCommand !== undefined) ordered.buildCommand = config.buildCommand;
  if (redirects.length > 0) ordered.redirects = redirects;
  if (config.rewrites) ordered.rewrites = config.rewrites;
  if (config.headers) ordered.headers = config.headers;
  for (const [k, v] of Object.entries(config)) {
    if (!['buildCommand', 'redirects', 'rewrites', 'headers'].includes(k)) ordered[k] = v;
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
