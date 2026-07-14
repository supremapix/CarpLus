// scripts/generate-sitemap.ts
// ─────────────────────────────────────────────────────────────────────────────
// SITEMAP INTELIGENTE E SEGMENTADO
// ─────────────────────────────────────────────────────────────────────────────
// Emite APENAS URLs indexáveis a partir do ENUMERADOR ÚNICO
// (scripts/static-routes.ts), que por sua vez reutiliza o mesmo motor de
// indexação (src/lib/seoIndexing.ts) usado no runtime — garantindo sitemap,
// meta tags e geração estática 100% sincronizados (fonte única da verdade).
//
// Exclui automaticamente (via enumerador/motor de indexação):
//   • páginas noindex (variantes duplicadas, baixo score)
//   • paginações (/pneus?page=N)
//   • medidas com menos de 2 opções (conteúdo fino)
//
// Saída:
//   /sitemap.xml            (índice de sitemaps)
//   /sitemap-produtos.xml
//   /sitemap-medidas.xml
//   /sitemap-veiculos.xml
//   /sitemap-servicos.xml
//
// Execução: `node scripts/run-ts.mjs scripts/generate-sitemap.ts` (via `npm run
// sitemap`, rodado no prebuild). Usa o wrapper confiável run-ts.mjs.

import fs from 'fs';
import path from 'path';
import { BASE_URL, getStaticRoutes, SITEMAP_SEGMENTS, type SitemapSegment } from './static-routes';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const lastmod = new Date().toISOString().split('T')[0];

interface UrlEntry {
  loc: string;
  changefreq: string;
  priority: string;
}

function buildUrlset(entries: UrlEntry[]): string {
  const body = entries
    .map(
      (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;
}

function write(file: string, content: string) {
  fs.writeFileSync(path.join(PUBLIC_DIR, file), content);
}

// ─── Agrupa o enumerador único por segmento (preserva a ordem de emissão) ─────
const routes = getStaticRoutes();
const bySegment = new Map<SitemapSegment, UrlEntry[]>();
for (const seg of SITEMAP_SEGMENTS) bySegment.set(seg, []);
for (const r of routes) {
  bySegment.get(r.sitemap)!.push({
    loc: `${BASE_URL}${r.path === '/' ? '/' : r.path}`,
    changefreq: r.changefreq,
    priority: r.priority,
  });
}

// Normaliza a home para terminar com "/" (comportamento histórico: BASE_URL + "/").
for (const [, entries] of bySegment) {
  for (const e of entries) if (e.loc === BASE_URL) e.loc = `${BASE_URL}/`;
}

const counts: Record<string, number> = {};
for (const seg of SITEMAP_SEGMENTS) {
  const entries = bySegment.get(seg)!;
  counts[seg] = entries.length;
  write(seg, buildUrlset(entries));
}

// ─── ÍNDICE DE SITEMAPS ────────────────────────────────────────────────────────
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${SITEMAP_SEGMENTS.map(
  (s) => `  <sitemap>
    <loc>${BASE_URL}/${s}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`,
).join('\n')}
</sitemapindex>
`;
write('sitemap.xml', sitemapIndex);

// ─── Log ──────────────────────────────────────────────────────────────────────
console.log('[sitemap] Sitemap inteligente gerado (fonte única = static-routes.ts):');
console.log(`  - sitemap-produtos.xml : ${counts['sitemap-produtos.xml']} produtos canônicos indexáveis`);
console.log(`  - sitemap-medidas.xml  : ${counts['sitemap-medidas.xml']} medidas (2+ opções)`);
console.log(`  - sitemap-veiculos.xml : ${counts['sitemap-veiculos.xml']} páginas por veículo`);
console.log(`  - sitemap-servicos.xml : ${counts['sitemap-servicos.xml']} URLs (institucional + serviços + bairros + landings)`);
console.log(`  - sitemap.xml          : índice com ${SITEMAP_SEGMENTS.length} sitemaps`);
console.log(`  - TOTAL                : ${routes.length} URLs indexáveis`);
