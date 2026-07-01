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
import { BRAND_PAGES } from '../src/data/seoLanding';
import { LEGACY_BAIRRO_HTML } from '../src/data/legacyRedirects';

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

/**
 * Regras "legadas" autogeradas (301 estáticos de URLs antigas):
 *  - /pneus/:medida        → /pneu-medida/:medida
 *  - /:legacySlug (marca)  → /:slug (novo slug plural)
 *  - /:slug.html (bairro)  → /bairro/:slug
 * Reconhecidas para regeneração idempotente (removidas antes de reescrever).
 */
function isGeneratedLegacyRule(r: RedirectRule): boolean {
  if (r.has) return false; // regras legadas não usam query
  if (r.source === '/pneus/:medida') return true;
  if (r.source.endsWith('.html')) return true;
  const brandLegacy = BRAND_PAGES.some(
    (p) => p.legacySlug && r.source === `/${p.legacySlug}`,
  );
  return brandLegacy;
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

/** 301 estáticos de URLs legadas (rastreadas pelo Google) → URLs canônicas atuais. */
function buildLegacyRedirects(): RedirectRule[] {
  const rules: RedirectRule[] = [];

  // Rota legada /pneus/:medida (nunca existiu como página) → /pneu-medida/:medida
  rules.push({
    source: '/pneus/:medida',
    destination: '/pneu-medida/:medida',
    permanent: true,
  });

  // Slugs antigos (singular) de marca → novos slugs (plural)
  for (const p of BRAND_PAGES) {
    if (p.legacySlug) {
      rules.push({ source: `/${p.legacySlug}`, destination: `/${p.slug}`, permanent: true });
    }
  }

  // Bairros servidos como ".html" na SPA legada → /bairro/:slug
  for (const slug of LEGACY_BAIRRO_HTML) {
    rules.push({ source: `/${slug}.html`, destination: `/bairro/${slug}`, permanent: true });
  }

  return rules;
}

function main() {
  const raw = fs.readFileSync(VERCEL_JSON, 'utf-8');
  const config = JSON.parse(raw) as {
    rewrites?: unknown[];
    redirects?: RedirectRule[];
    headers?: unknown[];
    [k: string]: unknown;
  };

  // Preserva redirects manuais (qualquer regra que NÃO seja autogerada:
  // nem paginação, nem legada).
  const manualRedirects = (config.redirects ?? []).filter(
    (r) => !isPaginationRule(r) && !isGeneratedLegacyRule(r),
  );
  const generated = buildPaginationRedirects();
  const legacy = buildLegacyRedirects();
  // Legados primeiro (mais específicos / paths), depois paginação (query-based).
  const redirects = [...manualRedirects, ...legacy, ...generated];

  // redirects antes de rewrites (o Vercel aplica redirects primeiro).
  const ordered: Record<string, unknown> = {};
  if (redirects.length > 0) ordered.redirects = redirects;
  if (config.rewrites) ordered.rewrites = config.rewrites;
  if (config.headers) ordered.headers = config.headers;
  for (const [k, v] of Object.entries(config)) {
    if (!['redirects', 'rewrites', 'headers'].includes(k)) ordered[k] = v;
  }

  fs.writeFileSync(VERCEL_JSON, JSON.stringify(ordered, null, 2) + '\n');

  console.log('[redirects] Redirects 301 gerados no vercel.json:');
  console.log(`  - threshold de redirect : ${Math.round(REDIRECT_THRESHOLD * 100)}%`);
  console.log(`  - regras manuais        : ${manualRedirects.length}`);
  console.log(`  - regras legadas (301)  : ${legacy.length} (/pneus/:medida, marcas, bairros .html)`);
  console.log(`  - regras paginação (301): ${generated.length}`);
  for (const g of generated) {
    console.log(`    /pneus?page=${g.has?.[0].value} → ${g.destination}`);
  }
}

main();
