// scripts/generate-sitemap.ts
// ─────────────────────────────────────────────────────────────────────────────
// SITEMAP INTELIGENTE E SEGMENTADO
// ─────────────────────────────────────────────────────────────────────────────
// Gera APENAS URLs indexáveis, usando o mesmo motor (src/lib/seoIndexing.ts)
// que define o robots/canonical em runtime — garantindo sitemap e meta tags
// 100% sincronizados.
//
// Exclui automaticamente:
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
// Execução: `tsx scripts/generate-sitemap.ts` (rodado no prebuild).

import fs from 'fs';
import path from 'path';
import { getIndexableTireSlugs, isMeasureIndexable } from '../src/lib/seoIndexing';
import {
  ARO_PAGES,
  BRAND_PAGES,
  VEHICLE_PAGES,
  LOCAL_COMBO_PAGES,
  INTENT_PAGES,
  COMPARISON_PAGES,
  MEASURE_SEO,
} from '../src/data/seoLanding';
import { CENTRO_AUTOMOTIVO_PAGES } from '../src/data/centroAutomotivoSeo';
import { SERVICE_CATEGORIES } from '../src/data/services';
import { INDEXABLE_NEIGHBORHOOD_SLUGS } from '../src/data/indexableNeighborhoods';

const BASE_URL = 'https://www.carpluspneuseoficina.com.br';
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

// Converte "195/60R15" → "195-60r15" (formato aceito pela rota /pneu-medida).
function measureToSlug(medida: string): string {
  return medida.toLowerCase().replace('/', '-');
}

// ─── 1) PRODUTOS (apenas canônicos indexáveis) ───────────────────────────────
const indexableTireSlugs = getIndexableTireSlugs();
const produtos: UrlEntry[] = indexableTireSlugs.map((slug) => ({
  loc: `${BASE_URL}/pneu/${slug}`,
  changefreq: 'weekly',
  priority: '0.7',
}));
write('sitemap-produtos.xml', buildUrlset(produtos));

// ─── 2) MEDIDAS (apenas com 2+ opções) ────────────────────────────────────────
const medidas: UrlEntry[] = MEASURE_SEO.filter((m) => isMeasureIndexable(m.medida)).map((m) => ({
  loc: `${BASE_URL}/pneu-medida/${measureToSlug(m.medida)}`,
  changefreq: 'weekly',
  priority: '0.8',
}));
write('sitemap-medidas.xml', buildUrlset(medidas));

// ─── 3) VEÍCULOS ──────────────────────────────────────────────────────────────
const veiculos: UrlEntry[] = VEHICLE_PAGES.map((p) => ({
  loc: `${BASE_URL}/${p.slug}`,
  changefreq: 'weekly',
  priority: '0.8',
}));
write('sitemap-veiculos.xml', buildUrlset(veiculos));

// ─── 4) SERVIÇOS + INSTITUCIONAL + HUBS + LANDINGS ────────────────────────────
const staticPages: UrlEntry[] = [
  { loc: `${BASE_URL}/`, changefreq: 'daily', priority: '1.0' },
  { loc: `${BASE_URL}/pneus`, changefreq: 'daily', priority: '0.9' },
  { loc: `${BASE_URL}/pneus-curitiba`, changefreq: 'weekly', priority: '0.9' },
  { loc: `${BASE_URL}/medidas-de-pneus-curitiba`, changefreq: 'weekly', priority: '0.9' },
  { loc: `${BASE_URL}/loja-de-pneus-curitiba-perto-de-mim`, changefreq: 'weekly', priority: '0.9' },
  { loc: `${BASE_URL}/servicos`, changefreq: 'weekly', priority: '0.9' },
  { loc: `${BASE_URL}/quem-somos`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${BASE_URL}/contato`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${BASE_URL}/como-chegar`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${BASE_URL}/faq`, changefreq: 'weekly', priority: '0.6' },
  { loc: `${BASE_URL}/bairros`, changefreq: 'weekly', priority: '0.7' },
];

const serviceSlugs = new Set<string>();
for (const cat of SERVICE_CATEGORIES) {
  for (const s of cat.services) serviceSlugs.add(s.slug);
}
const servicos: UrlEntry[] = [...serviceSlugs].map((slug) => ({
  loc: `${BASE_URL}/servico/${slug}`,
  changefreq: 'weekly',
  priority: '0.7',
}));

const bairros: UrlEntry[] = INDEXABLE_NEIGHBORHOOD_SLUGS.map((slug) => ({
  loc: `${BASE_URL}/bairro/${slug}`,
  changefreq: 'weekly',
  priority: '0.6',
}));

const landings: UrlEntry[] = [
  ...ARO_PAGES,
  ...BRAND_PAGES,
  ...LOCAL_COMBO_PAGES,
  ...INTENT_PAGES,
  ...COMPARISON_PAGES,
  ...CENTRO_AUTOMOTIVO_PAGES,
].map((p: { slug: string }) => ({
  loc: `${BASE_URL}/${p.slug}`,
  changefreq: 'weekly',
  priority: '0.8',
}));

write('sitemap-servicos.xml', buildUrlset([...staticPages, ...servicos, ...bairros, ...landings]));

// ─── 5) ÍNDICE DE SITEMAPS ────────────────────────────────────────────────────
const segments = [
  'sitemap-produtos.xml',
  'sitemap-medidas.xml',
  'sitemap-veiculos.xml',
  'sitemap-servicos.xml',
];
const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${segments
  .map(
    (s) => `  <sitemap>
    <loc>${BASE_URL}/${s}</loc>
    <lastmod>${lastmod}</lastmod>
  </sitemap>`,
  )
  .join('\n')}
</sitemapindex>
`;
write('sitemap.xml', sitemapIndex);

// ─── Log ──────────────────────────────────────────────────────────────────────
console.log('[sitemap] Sitemap inteligente gerado:');
console.log(`  - sitemap-produtos.xml : ${produtos.length} produtos canônicos indexáveis`);
console.log(`  - sitemap-medidas.xml  : ${medidas.length} medidas (2+ opções)`);
console.log(`  - sitemap-veiculos.xml : ${veiculos.length} páginas por veículo`);
console.log(
  `  - sitemap-servicos.xml : ${staticPages.length + servicos.length + bairros.length + landings.length} URLs (institucional + serviços + bairros + landings)`,
);
console.log(`  - sitemap.xml          : índice com ${segments.length} sitemaps`);
