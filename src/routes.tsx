import { lazy } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import type { RouteRecord } from 'vite-react-ssg';
import RootLayout from './RootLayout';
import {
  ARO_PAGES,
  BRAND_PAGES,
  VEHICLE_PAGES,
  LOCAL_COMBO_PAGES,
  INTENT_PAGES,
  COMPARISON_PAGES,
  MEASURE_SLUGS,
} from './data/seoLanding';
import { CENTRO_AUTOMOTIVO_PAGES } from './data/centroAutomotivoSeo';

// ───── Code-splitting: cada rota vira um chunk carregado sob demanda ─────
const Home = lazy(() => import('./components/Home'));
const NeighborhoodDetail = lazy(() => import('./components/NeighborhoodDetail'));
const ServiceDetail = lazy(() => import('./components/ServiceDetail'));
const TireCatalog = lazy(() => import('./components/TireCatalog'));
const TireDetail = lazy(() => import('./components/TireDetail'));
const PneuPromocaoDetalhe = lazy(() => import('./components/PneuPromocaoDetalhe'));
const PneusPromocaoLista = lazy(() => import('./components/PneusPromocaoLista'));
const TireMeasureDetail = lazy(() => import('./components/TireMeasureDetail'));
const PrivacyPolicy = lazy(() => import('./components/Institutional/PrivacyPolicy'));
const ReturnPolicy = lazy(() => import('./components/Institutional/ReturnPolicy'));
const AboutUs = lazy(() => import('./components/Institutional/AboutUs'));
const Contact = lazy(() => import('./components/Institutional/Contact'));
const Sitemap = lazy(() => import('./components/Sitemap'));
const NotFound = lazy(() => import('./components/NotFound'));
const ServicosPage = lazy(() => import('./components/ServicosPage'));
const ComoChegar = lazy(() => import('./components/ComoChegar'));
const BairrosPage = lazy(() => import('./components/BairrosPage'));
const FAQPage = lazy(() => import('./components/FAQPage'));
const CentroAutomotivoPortao = lazy(() => import('./components/CentroAutomotivoPortao'));
const BorrachariaPortao = lazy(() => import('./components/BorrachariaPortao'));
const PneusCuritibaHub = lazy(() => import('./components/PneusCuritibaHub'));
const PneusMedidasHub = lazy(() => import('./components/PneusMedidasHub'));
const LojaDePneusPertoDeMim = lazy(() => import('./components/LojaDePneusPertoDeMim'));
const AdminSeoDashboard = lazy(() => import('./components/AdminSeoDashboard'));
const CentroAutomotivoSeoPage = lazy(() => import('./components/CentroAutomotivoSeoPage'));

// Landing pages SEO (todas no mesmo módulo)
const AroLandingPage = lazy(() =>
  import('./components/SeoLandingPages').then((m) => ({ default: m.AroLandingPage })),
);
const BrandLandingPage = lazy(() =>
  import('./components/SeoLandingPages').then((m) => ({ default: m.BrandLandingPage })),
);
const VehicleLandingPage = lazy(() =>
  import('./components/SeoLandingPages').then((m) => ({ default: m.VehicleLandingPage })),
);
const LocalComboLandingPage = lazy(() =>
  import('./components/SeoLandingPages').then((m) => ({ default: m.LocalComboLandingPage })),
);
const IntentLandingPage = lazy(() =>
  import('./components/SeoLandingPages').then((m) => ({ default: m.IntentLandingPage })),
);
const ComparisonLandingPage = lazy(() =>
  import('./components/SeoLandingPages').then((m) => ({ default: m.ComparisonLandingPage })),
);

// Redirect 301 de rotas legadas /pneus/:medida → /pneu-medida/:medida.
// O Google rastreou URLs como /pneus/325-30-19, que nunca existiram como rota.
function LegacyMedidaRedirect() {
  const { medida } = useParams<{ medida: string }>();
  return <Navigate to={`/pneu-medida/${medida ?? ''}`} replace />;
}

// ───── getStaticPaths: enumeram as rotas dinâmicas para o SSG ─────
// Usam import dinâmico para manter os dados grandes (src/data.ts) fora do
// bundle principal do cliente — só são carregados no build.
async function tirePaths(): Promise<string[]> {
  const [{ TIRES }, { isCanonicalSlug }] = await Promise.all([
    import('./data'),
    import('./lib/seoIndexing'),
  ]);
  return TIRES.filter((t) => t.slug && isCanonicalSlug(t.slug)).map((t) => `/pneu/${t.slug}`);
}

async function measurePaths(): Promise<string[]> {
  return MEASURE_SLUGS.map((s) => `/pneu-medida/${s}`);
}

async function neighborhoodPaths(): Promise<string[]> {
  const { INDEXABLE_NEIGHBORHOOD_SLUGS } = await import('./data/indexableNeighborhoods');
  return INDEXABLE_NEIGHBORHOOD_SLUGS.map((s) => `/bairro/${s}`);
}

async function servicePaths(): Promise<string[]> {
  const { getAllServices } = await import('./data/services');
  return getAllServices().map((s) => `/servico/${s.slug}`);
}

async function promoPaths(): Promise<string[]> {
  const { PROMO_TIRES } = await import('./data/promoTires');
  return PROMO_TIRES.map((t) => `/pneu-promocao/${t.slug}`);
}

export const routes: RouteRecord[] = [
  {
    // Rota "pathless": aplica o layout a todas as filhas mantendo os paths absolutos.
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/pneus', element: <TireCatalog /> },
      { path: '/pneu/:slug', element: <TireDetail />, getStaticPaths: tirePaths },
      { path: '/pneus-promocao', element: <PneusPromocaoLista /> },
      { path: '/pneu-promocao/:slug', element: <PneuPromocaoDetalhe />, getStaticPaths: promoPaths },
      { path: '/pneu-medida/:medida', element: <TireMeasureDetail />, getStaticPaths: measurePaths },
      // Redirect 301 de rota legada rastreada pelo Google
      { path: '/pneus/:medida', element: <LegacyMedidaRedirect /> },
      { path: '/bairro/:slug', element: <NeighborhoodDetail />, getStaticPaths: neighborhoodPaths },
      { path: '/servico/:slug', element: <ServiceDetail />, getStaticPaths: servicePaths },
      { path: '/quem-somos', element: <AboutUs /> },
      { path: '/contato', element: <Contact /> },
      { path: '/politica-de-privacidade', element: <PrivacyPolicy /> },
      { path: '/trocas-e-devolucoes', element: <ReturnPolicy /> },
      { path: '/sitemap', element: <Sitemap /> },
      { path: '/servicos', element: <ServicosPage /> },
      { path: '/como-chegar', element: <ComoChegar /> },
      { path: '/bairros', element: <BairrosPage /> },
      { path: '/faq', element: <FAQPage /> },
      { path: '/centro-automotivo-portao', element: <CentroAutomotivoPortao /> },
      { path: '/borracharia-portao', element: <BorrachariaPortao /> },

      // ───── Landing pages SEO de Centro Automotivo ─────
      ...CENTRO_AUTOMOTIVO_PAGES.map((p) => ({
        path: `/${p.slug}`,
        element: <CentroAutomotivoSeoPage slug={p.slug} />,
      })),

      // ───── Hub SEO de Pneus ─────
      { path: '/pneus-curitiba', element: <PneusCuritibaHub /> },
      { path: '/medidas-de-pneus-curitiba', element: <PneusMedidasHub /> },
      { path: '/loja-de-pneus-curitiba-perto-de-mim', element: <LojaDePneusPertoDeMim /> },

      // Landing pages por Aro
      ...ARO_PAGES.map((p) => ({
        path: `/${p.slug}`,
        element: <AroLandingPage slug={p.slug} />,
      })),

      // Landing pages por Marca
      ...BRAND_PAGES.map((p) => ({
        path: `/${p.slug}`,
        element: <BrandLandingPage slug={p.slug} />,
      })),

      // Redirects 301 dos slugs antigos (singular) → novos slugs (plural) de marca
      ...BRAND_PAGES.filter((p) => p.legacySlug).map((p) => ({
        path: `/${p.legacySlug}`,
        element: <Navigate to={`/${p.slug}`} replace />,
      })),

      // Landing pages por Veículo
      ...VEHICLE_PAGES.map((p) => ({
        path: `/${p.slug}`,
        element: <VehicleLandingPage slug={p.slug} />,
      })),

      // Landing pages SEO Local (combinações)
      ...LOCAL_COMBO_PAGES.map((p) => ({
        path: `/${p.slug}`,
        element: <LocalComboLandingPage slug={p.slug} />,
      })),

      // Landing pages de Intenção de Compra
      ...INTENT_PAGES.map((p) => ({
        path: `/${p.slug}`,
        element: <IntentLandingPage slug={p.slug} />,
      })),

      // Landing pages de Comparativo de Marcas
      ...COMPARISON_PAGES.map((p) => ({
        path: `/${p.slug}`,
        element: <ComparisonLandingPage slug={p.slug} />,
      })),

      // Redirects bairros ".html" (URLs legadas) → /bairro/:slug
      // NÃO definidos aqui como rotas: um path terminando em ".html" faz o SSG
      // gerar arquivos ".html.html" e não cobre a URL real. Esses 301 são
      // server-side reais, escritos no vercel.json por scripts/generate-redirects.ts
      // (buildLegacyRedirects → /:slug.html → /bairro/:slug), aplicados no edge.

      // Dashboard administrativo de SEO (noindex)
      { path: '/admin/seo', element: <AdminSeoDashboard /> },

      // 404 — SEMPRE POR ÚLTIMO
      { path: '*', element: <NotFound /> },
    ],
  },
];
