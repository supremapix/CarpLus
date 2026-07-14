// scripts/static-routes.ts
// ─────────────────────────────────────────────────────────────────────────────
// ENUMERADOR ÚNICO E TIPADO DE ROTAS INDEXÁVEIS (Etapa E6)
// ─────────────────────────────────────────────────────────────────────────────
// FONTE ÚNICA DA VERDADE das URLs públicas/canônicas/indexáveis do site.
// Reutiliza EXATAMENTE as mesmas fontes que alimentam o sitemap e o motor de
// indexação em runtime (src/lib/seoIndexing.ts + src/data/*), sem inventar
// nenhuma rota nem manter listas manuais.
//
// Consumido por:
//   • scripts/generate-sitemap.ts  (emite os XML a partir daqui)
//   • scripts/generate-static-all* (gera o HTML físico de cada rota)
//   • scripts/e6-route-inventory.ts + e6-sitemap-parity.ts (auditoria)
//
// A ordem de emissão espelha 1:1 a ordem histórica do sitemap, garantindo
// paridade byte-a-byte das URLs.

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

export const BASE_URL = 'https://www.carpluspneuseoficina.com.br';

// Arquivos de sitemap segmentados (mesmos nomes/segmentação atuais).
export type SitemapSegment =
  | 'sitemap-produtos.xml'
  | 'sitemap-medidas.xml'
  | 'sitemap-veiculos.xml'
  | 'sitemap-servicos.xml';

export type RouteType =
  | 'home'
  | 'produto'
  | 'medida'
  | 'veiculo'
  | 'servico'
  | 'bairro'
  | 'cidade'
  | 'marca'
  | 'aro'
  | 'landing-comercial'
  | 'institucional'
  | 'hub';

export interface StaticRoute {
  /** Caminho público exato (como usuário/Google acessam). */
  path: string;
  /** Categoria da rota. */
  type: RouteType;
  /** Identificador estável (slug ou chave). */
  id: string;
  /** Origem dos dados (arquivo/coleção que definiu a rota). */
  dataSource: string;
  /** Rota indexável? (todo o enumerador é indexável por construção). */
  indexable: boolean;
  /** Canonical esperado (auto-referencial para todas as indexáveis). */
  expectedCanonical: string;
  /** Sitemap segmentado correspondente. */
  sitemap: SitemapSegment;
  /** Prioridade do sitemap (string, ex.: "0.8"). */
  priority: string;
  /** changefreq do sitemap. */
  changefreq: string;
  /** Prioridade de geração (menor = gera antes). Home e hubs primeiro. */
  genPriority: number;
  /** É a home? (grava direto em dist/index.html). */
  isHome?: boolean;
}

// Converte "195/60R15" → "195-60r15" (formato aceito por /pneu-medida).
export function measureToSlug(medida: string): string {
  return medida.toLowerCase().replace('/', '-');
}

/**
 * Enumera TODAS as rotas indexáveis, na MESMA ordem por segmento usada
 * historicamente pelo gerador de sitemap (para paridade byte-a-byte).
 */
export function getStaticRoutes(): StaticRoute[] {
  const routes: StaticRoute[] = [];
  const abs = (p: string) => `${BASE_URL}${p}`;

  // ─── 1) PRODUTOS canônicos indexáveis → sitemap-produtos.xml ───────────────
  for (const slug of getIndexableTireSlugs()) {
    const path = `/pneu/${slug}`;
    routes.push({
      path,
      type: 'produto',
      id: slug,
      dataSource: 'src/data (TIRES) via getIndexableTireSlugs()',
      indexable: true,
      expectedCanonical: abs(path),
      sitemap: 'sitemap-produtos.xml',
      priority: '0.7',
      changefreq: 'weekly',
      genPriority: 40,
    });
  }

  // ─── 2) MEDIDAS (2+ opções) → sitemap-medidas.xml ──────────────────────────
  for (const m of MEASURE_SEO.filter((x) => isMeasureIndexable(x.medida))) {
    const path = `/pneu-medida/${measureToSlug(m.medida)}`;
    routes.push({
      path,
      type: 'medida',
      id: m.medida,
      dataSource: 'src/data/seoLanding.ts (MEASURE_SEO)',
      indexable: true,
      expectedCanonical: abs(path),
      sitemap: 'sitemap-medidas.xml',
      priority: '0.8',
      changefreq: 'weekly',
      genPriority: 20,
    });
  }

  // ─── 3) VEÍCULOS → sitemap-veiculos.xml ────────────────────────────────────
  for (const p of VEHICLE_PAGES) {
    const path = `/${p.slug}`;
    routes.push({
      path,
      type: 'veiculo',
      id: p.slug,
      dataSource: 'src/data/seoLanding.ts (VEHICLE_PAGES)',
      indexable: true,
      expectedCanonical: abs(path),
      sitemap: 'sitemap-veiculos.xml',
      priority: '0.8',
      changefreq: 'weekly',
      genPriority: 20,
    });
  }

  // ─── 4) sitemap-servicos.xml = static + serviços + bairros + landings ──────
  // 4a) Páginas institucionais/hubs (ordem histórica exata).
  const staticPages: Array<{ path: string; priority: string; changefreq: string; type: RouteType }> = [
    { path: '/', priority: '1.0', changefreq: 'daily', type: 'home' },
    { path: '/pneus', priority: '0.9', changefreq: 'daily', type: 'hub' },
    { path: '/pneus-curitiba', priority: '0.9', changefreq: 'weekly', type: 'hub' },
    { path: '/medidas-de-pneus-curitiba', priority: '0.9', changefreq: 'weekly', type: 'hub' },
    { path: '/loja-de-pneus-curitiba-perto-de-mim', priority: '0.9', changefreq: 'weekly', type: 'hub' },
    { path: '/servicos', priority: '0.9', changefreq: 'weekly', type: 'hub' },
    { path: '/quem-somos', priority: '0.7', changefreq: 'monthly', type: 'institucional' },
    { path: '/contato', priority: '0.7', changefreq: 'monthly', type: 'institucional' },
    { path: '/como-chegar', priority: '0.7', changefreq: 'monthly', type: 'institucional' },
    { path: '/faq', priority: '0.6', changefreq: 'weekly', type: 'institucional' },
    { path: '/bairros', priority: '0.7', changefreq: 'weekly', type: 'hub' },
  ];
  for (const sp of staticPages) {
    routes.push({
      path: sp.path,
      type: sp.type,
      id: sp.path === '/' ? 'home' : sp.path.replace(/^\//, ''),
      dataSource: 'scripts/static-routes.ts (páginas fixas)',
      indexable: true,
      expectedCanonical: abs(sp.path),
      sitemap: 'sitemap-servicos.xml',
      priority: sp.priority,
      changefreq: sp.changefreq,
      genPriority: sp.path === '/' ? 0 : 5,
      isHome: sp.path === '/',
    });
  }

  // 4b) Serviços (ordem de iteração do Set, como no sitemap atual).
  const serviceSlugs = new Set<string>();
  for (const cat of SERVICE_CATEGORIES) for (const s of cat.services) serviceSlugs.add(s.slug);
  for (const slug of serviceSlugs) {
    const path = `/servico/${slug}`;
    routes.push({
      path,
      type: 'servico',
      id: slug,
      dataSource: 'src/data/services.ts (SERVICE_CATEGORIES)',
      indexable: true,
      expectedCanonical: abs(path),
      sitemap: 'sitemap-servicos.xml',
      priority: '0.7',
      changefreq: 'weekly',
      genPriority: 20,
    });
  }

  // 4c) Bairros/cidades indexáveis.
  for (const slug of INDEXABLE_NEIGHBORHOOD_SLUGS) {
    const path = `/bairro/${slug}`;
    routes.push({
      path,
      type: 'bairro',
      id: slug,
      dataSource: 'src/data/indexableNeighborhoods.ts',
      indexable: true,
      expectedCanonical: abs(path),
      sitemap: 'sitemap-servicos.xml',
      priority: '0.6',
      changefreq: 'weekly',
      genPriority: 20,
    });
  }

  // 4d) Landings comerciais (ordem: ARO, BRAND, LOCAL, INTENT, COMPARISON, CENTRO).
  const landingGroups: Array<{ pages: Array<{ slug: string }>; type: RouteType; source: string }> = [
    { pages: ARO_PAGES, type: 'aro', source: 'src/data/seoLanding.ts (ARO_PAGES)' },
    { pages: BRAND_PAGES, type: 'marca', source: 'src/data/seoLanding.ts (BRAND_PAGES)' },
    { pages: LOCAL_COMBO_PAGES, type: 'landing-comercial', source: 'src/data/seoLanding.ts (LOCAL_COMBO_PAGES)' },
    { pages: INTENT_PAGES, type: 'landing-comercial', source: 'src/data/seoLanding.ts (INTENT_PAGES)' },
    { pages: COMPARISON_PAGES, type: 'landing-comercial', source: 'src/data/seoLanding.ts (COMPARISON_PAGES)' },
    { pages: CENTRO_AUTOMOTIVO_PAGES, type: 'landing-comercial', source: 'src/data/centroAutomotivoSeo.ts' },
  ];
  for (const g of landingGroups) {
    for (const p of g.pages) {
      const path = `/${p.slug}`;
      routes.push({
        path,
        type: g.type,
        id: p.slug,
        dataSource: g.source,
        indexable: true,
        expectedCanonical: abs(path),
        sitemap: 'sitemap-servicos.xml',
        priority: '0.8',
        changefreq: 'weekly',
        genPriority: 10,
      });
    }
  }

  // ─── DEDUPE por path (correção técnica indispensável) ──────────────────────
  // O catálogo bruto (TIRES) contém registros idênticos duplicados (mesma
  // marca/medida/linha/índices → mesmo slug canônico), o que gerava <loc>
  // repetidos no sitemap e tentaria escrever o MESMO index.html duas vezes.
  // Uma URL pública nunca pode aparecer duas vezes: mantemos a 1ª ocorrência,
  // preservando ordem. Não altera dados, preços, schemas nem a lógica de URL.
  const seen = new Set<string>();
  const deduped: StaticRoute[] = [];
  for (const r of routes) {
    if (seen.has(r.path)) continue;
    seen.add(r.path);
    deduped.push(r);
  }
  return deduped;
}

/** Ordem fixa dos segmentos no índice de sitemaps. */
export const SITEMAP_SEGMENTS: SitemapSegment[] = [
  'sitemap-produtos.xml',
  'sitemap-medidas.xml',
  'sitemap-veiculos.xml',
  'sitemap-servicos.xml',
];
