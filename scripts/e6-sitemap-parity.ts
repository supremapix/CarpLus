// scripts/e6-sitemap-parity.ts
// ─────────────────────────────────────────────────────────────────────────────
// PARIDADE ENUMERADOR ↔ SITEMAPS (Etapa E6)
// ─────────────────────────────────────────────────────────────────────────────
// Compara o enumerador único (static-routes.ts) com os XML de sitemap gravados
// em public/. Bloqueia (exit 1) quando há divergência crítica:
//   • URL indexável ausente do sitemap;
//   • URL de sitemap ausente do enumerador;
//   • redirect (origem de vercel.json) presente no sitemap;
//   • URL duplicada no enumerador ou no sitemap;
//   • canonical conflitante (path != canonical esperado).
// Escreve reports/e6-sitemap-parity.md.
// Execução: `npm run routes:parity` (rode `npm run sitemap` antes).

import fs from 'fs';
import path from 'path';
import { BASE_URL, getStaticRoutes, SITEMAP_SEGMENTS } from './static-routes';

const ROOT = process.cwd();
const REPORTS = path.join(ROOT, 'reports');
const PUBLIC_DIR = path.join(ROOT, 'public');

function readSitemapLocs(file: string): string[] {
  const full = path.join(PUBLIC_DIR, file);
  if (!fs.existsSync(full)) return [];
  const xml = fs.readFileSync(full, 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

interface VercelRedirect {
  source: string;
  has?: unknown[];
  missing?: unknown[];
}

function readRedirects(): VercelRedirect[] {
  const vj = path.join(ROOT, 'vercel.json');
  if (!fs.existsSync(vj)) return [];
  try {
    const json = JSON.parse(fs.readFileSync(vj, 'utf8'));
    return (json.redirects ?? []) as VercelRedirect[];
  } catch {
    return [];
  }
}

function main() {
  fs.mkdirSync(REPORTS, { recursive: true });
  const routes = getStaticRoutes();

  // URLs do enumerador (absolutas, home normalizada com "/").
  const enumUrls = routes.map((r) => `${BASE_URL}${r.path === '/' ? '/' : r.path}`);
  const enumSet = new Set(enumUrls);

  // URLs de todos os sitemaps segmentados.
  const sitemapUrls: string[] = [];
  for (const seg of SITEMAP_SEGMENTS) sitemapUrls.push(...readSitemapLocs(seg));
  const sitemapSet = new Set(sitemapUrls);

  // Divergências.
  const missingFromSitemap = enumUrls.filter((u) => !sitemapSet.has(u)); // indexável fora do sitemap
  const extraInSitemap = sitemapUrls.filter((u) => !enumSet.has(u)); // sitemap sem lastro no enumerador

  const dupEnum = duplicates(enumUrls);
  const dupSitemap = duplicates(sitemapUrls);

  // Redirects (fonte) que apareçam no sitemap → grave problema de canibalização.
  // IMPORTANTE: só redirects INCONDICIONAIS de PATH PURO podem colidir com uma
  // URL de sitemap. Os redirects de paginação usam `source: "/pneus"` + `has`
  // de query (`page=N`) → só disparam com `?page=`, NÃO afetam a URL nua
  // `/pneus` (página canônica indexável). Ignoramos qualquer redirect com `has`,
  // `missing` ou querystring na origem.
  const redirects = readRedirects();
  const unconditionalPaths = new Set(
    redirects
      .filter((r) => !r.has && !r.missing && !r.source.includes('?'))
      .map((r) => r.source.replace(/\/+$/, '') || '/'),
  );
  const redirectsInSitemap = sitemapUrls.filter((u) => {
    const p = u.replace(BASE_URL, '').replace(/\/+$/, '') || '/';
    return unconditionalPaths.has(p);
  });

  // Canonical conflitante: expectedCanonical deve ser auto-referencial (== URL).
  const canonicalConflicts = routes.filter(
    (r) => r.expectedCanonical !== `${BASE_URL}${r.path === '/' ? '/' : r.path}`,
  );

  const critical =
    missingFromSitemap.length +
    extraInSitemap.length +
    dupEnum.length +
    dupSitemap.length +
    redirectsInSitemap.length +
    canonicalConflicts.length;

  // ─── Relatório ──────────────────────────────────────────────────────────────
  const L: string[] = [];
  L.push('# E6 — Paridade Enumerador ↔ Sitemaps');
  L.push('');
  L.push(`Gerado em: ${new Date().toISOString()}`);
  L.push('');
  L.push('## Totais');
  L.push('');
  L.push(`- Enumerador (rotas indexáveis): **${enumUrls.length}**`);
  L.push(`- Sitemaps (URLs somadas): **${sitemapUrls.length}**`);
  L.push(`- URLs únicas no enumerador: ${enumSet.size}`);
  L.push(`- URLs únicas nos sitemaps: ${sitemapSet.size}`);
  L.push('');
  L.push('## Divergências');
  L.push('');
  L.push(`- URLs ausentes do sitemap (indexáveis fora): **${missingFromSitemap.length}**`);
  L.push(`- URLs excedentes no sitemap (sem lastro): **${extraInSitemap.length}**`);
  L.push(`- Duplicatas no enumerador: **${dupEnum.length}**`);
  L.push(`- Duplicatas nos sitemaps: **${dupSitemap.length}**`);
  L.push(`- Redirects (vercel.json) presentes no sitemap: **${redirectsInSitemap.length}**`);
  L.push(`- Canonicals conflitantes: **${canonicalConflicts.length}**`);
  L.push('');
  const sample = (label: string, arr: string[]) => {
    if (arr.length) {
      L.push(`### ${label} (amostra até 20)`);
      L.push('');
      for (const x of arr.slice(0, 20)) L.push(`- \`${x}\``);
      L.push('');
    }
  };
  sample('URLs ausentes do sitemap', missingFromSitemap);
  sample('URLs excedentes no sitemap', extraInSitemap);
  sample('Duplicatas no enumerador', dupEnum);
  sample('Duplicatas nos sitemaps', dupSitemap);
  sample('Redirects no sitemap', redirectsInSitemap);
  sample('Canonicals conflitantes', canonicalConflicts.map((r) => `${r.path} → ${r.expectedCanonical}`));
  L.push('## Veredito');
  L.push('');
  L.push('```text');
  L.push(critical === 0 ? 'PARIDADE OK — enumerador e sitemap 100% sincronizados' : `DIVERGÊNCIA CRÍTICA (${critical}) — geração bloqueada`);
  L.push('```');

  const out = path.join(REPORTS, 'e6-sitemap-parity.md');
  fs.writeFileSync(out, L.join('\n') + '\n', 'utf8');
  console.log(`[parity] enum=${enumUrls.length} sitemap=${sitemapUrls.length} divergências=${critical} → ${path.relative(ROOT, out)}`);

  if (critical > 0) {
    console.error(`[parity] DIVERGÊNCIA CRÍTICA (${critical}). Geração bloqueada.`);
    process.exit(1);
  }
  console.log('[parity] Paridade OK.');
}

function duplicates(arr: string[]): string[] {
  const seen = new Set<string>();
  const dup = new Set<string>();
  for (const x of arr) {
    if (seen.has(x)) dup.add(x);
    else seen.add(x);
  }
  return [...dup];
}

main();
