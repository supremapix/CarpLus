// scripts/generate-redirects.ts
// ─────────────────────────────────────────────────────────────────────────────
// REDIRECTS 301 INTELIGENTES DE PAGINAÇÃO
// ─────────────────────────────────────────────────────────────────────────────
// Gera, a partir do MESMO motor (src/lib/seoIndexing.ts), regras de redirect 301
// permanentes para as paginações "/pneus?page=N" cuja dominância ≥ REDIRECT_THRESHOLD
// (85%) aponta para uma landing temática real e indexável (ex.: /pneus-michelin-curitiba).
//
// As regras são escritas DIRETAMENTE no vercel.json (chave "redirects"), preservando
// rewrites, headers e redirects manuais. As regras de paginação são reconhecidas pela
// forma (source "/pneus" + query "page"), então rodar o script é idempotente.
//
// IMPORTANTE: o Vercel resolve o vercel.json versionado no repositório. Após rodar
// este script, o vercel.json atualizado precisa ser commitado para que os 301s
// entrem em vigor no edge. Em paralelo, o TireCatalog aplica o equivalente no SPA.
//
// Execução: `tsx scripts/generate-redirects.ts` (encadeado no prebuild).

import fs from 'fs';
import path from 'path';
import { getPaginationRedirects, REDIRECT_THRESHOLD } from '../src/lib/seoIndexing';

const ROOT = process.cwd();
const VERCEL_JSON = path.join(ROOT, 'vercel.json');

interface RedirectRule {
  source: string;
  has?: { type: 'query'; key: string; value: string }[];
  destination: string;
  permanent: boolean;
}

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

  // Preserva redirects manuais (qualquer regra que NÃO seja de paginação).
  const manualRedirects = (config.redirects ?? []).filter((r) => !isPaginationRule(r));
  const generated = buildPaginationRedirects();
  const redirects = [...manualRedirects, ...generated];

  // redirects antes de rewrites (o Vercel aplica redirects primeiro).
  const ordered: Record<string, unknown> = {};
  if (redirects.length > 0) ordered.redirects = redirects;
  if (config.rewrites) ordered.rewrites = config.rewrites;
  if (config.headers) ordered.headers = config.headers;
  for (const [k, v] of Object.entries(config)) {
    if (!['redirects', 'rewrites', 'headers'].includes(k)) ordered[k] = v;
  }

  fs.writeFileSync(VERCEL_JSON, JSON.stringify(ordered, null, 2) + '\n');

  console.log('[redirects] Redirects 301 de paginação gerados:');
  console.log(`  - threshold de redirect : ${Math.round(REDIRECT_THRESHOLD * 100)}%`);
  console.log(`  - regras manuais        : ${manualRedirects.length}`);
  console.log(`  - regras geradas (301)  : ${generated.length}`);
  for (const g of generated) {
    console.log(`    /pneus?page=${g.has?.[0].value} → ${g.destination}`);
  }
}

main();
