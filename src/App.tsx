
import { Routes, Route, useLocation, Navigate, useParams } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import BackToTop from './components/BackToTop';
import AnalyticsLoader from './components/AnalyticsLoader';
import {
  ARO_PAGES,
  BRAND_PAGES,
  VEHICLE_PAGES,
  LOCAL_COMBO_PAGES,
  INTENT_PAGES,
  COMPARISON_PAGES,
} from './data/seoLanding';
import { CENTRO_AUTOMOTIVO_PAGES } from './data/centroAutomotivoSeo';
import { OFICINA_MARCA_PAGES } from './data/oficinaMarcas';

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
const OficinaMarcaPage = lazy(() => import('./components/OficinaMarcaPage'));

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

// Fallback minimalista enquanto o chunk da rota carrega
function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div
        className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"
        role="status"
        aria-label="Carregando"
      />
    </div>
  );
}

// Redirect 301 de rotas legadas /pneus/:medida → /pneu-medida/:medida.
// O Google rastreou URLs como /pneus/325-30-19, que nunca existiram como rota.
function LegacyMedidaRedirect() {
  const { medida } = useParams<{ medida: string }>();
  return <Navigate to={`/pneu-medida/${medida ?? ''}`} replace />;
}

export default function App() {
  const { pathname } = useLocation();

  // Após a primeira hidratação de uma página pré-renderizada, remove o marcador
  // `data-prerendered`. A primeira render já foi ansiosa (casou com o HTML
  // estático); a partir daqui, navegações SPA voltam ao comportamento lazy
  // normal (DeferredSection etc.) para preservar performance.
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.removeAttribute('data-prerendered');
    }
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* LocalBusiness/Organization/WebSite vivem como fonte UNICA no index.html.
          Nao injetar schema global aqui para evitar duplicacao no Search Console. */}
      <BackToTop />
      {/* Delayed Analytics: injeta o GTM apos 5s OU scroll OU clique (nunca no load inicial). */}
      <AnalyticsLoader />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pneus" element={<TireCatalog />} />
      <Route path="/pneu/:slug" element={<TireDetail />} />
      <Route path="/pneus-promocao" element={<PneusPromocaoLista />} />
      <Route path="/pneu-promocao/:slug" element={<PneuPromocaoDetalhe />} />
      <Route path="/pneu-medida/:medida" element={<TireMeasureDetail />} />
      {/* Redirect 301 de rota legada rastreada pelo Google */}
      <Route path="/pneus/:medida" element={<LegacyMedidaRedirect />} />
      <Route path="/bairro/:slug" element={<NeighborhoodDetail />} />
      <Route path="/servico/:slug" element={<ServiceDetail />} />
      <Route path="/quem-somos" element={<AboutUs />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
      <Route path="/trocas-e-devolucoes" element={<ReturnPolicy />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/servicos" element={<ServicosPage />} />
      <Route path="/como-chegar" element={<ComoChegar />} />
      <Route path="/bairros" element={<BairrosPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/centro-automotivo-portao" element={<CentroAutomotivoPortao />} />
      <Route path="/borracharia-portao" element={<BorrachariaPortao />} />

      {/* ───── Landing pages SEO de Centro Automotivo ───── */}
      {CENTRO_AUTOMOTIVO_PAGES.map((p) => (
        <Route key={p.slug} path={`/${p.slug}`} element={<CentroAutomotivoSeoPage slug={p.slug} />} />
      ))}

      {/* ───── Landing pages SEO de Oficina por Marca ───── */}
      {OFICINA_MARCA_PAGES.map((p) => (
        <Route key={p.slug} path={`/oficina/${p.slug}`} element={<OficinaMarcaPage slug={p.slug} />} />
      ))}

      {/* ───── Hub SEO de Pneus ───── */}
      <Route path="/pneus-curitiba" element={<PneusCuritibaHub />} />
      <Route path="/medidas-de-pneus-curitiba" element={<PneusMedidasHub />} />
      <Route path="/loja-de-pneus-curitiba-perto-de-mim" element={<LojaDePneusPertoDeMim />} />

      {/* Landing pages por Aro */}
      {ARO_PAGES.map((p) => (
        <Route key={p.slug} path={`/${p.slug}`} element={<AroLandingPage slug={p.slug} />} />
      ))}

      {/* Landing pages por Marca */}
      {BRAND_PAGES.map((p) => (
        <Route key={p.slug} path={`/${p.slug}`} element={<BrandLandingPage slug={p.slug} />} />
      ))}

      {/* Redirects 301 dos slugs antigos (singular) → novos slugs (plural) de marca */}
      {BRAND_PAGES.filter((p) => p.legacySlug).map((p) => (
        <Route
          key={p.legacySlug}
          path={`/${p.legacySlug}`}
          element={<Navigate to={`/${p.slug}`} replace />}
        />
      ))}

      {/* Landing pages por Veículo */}
      {VEHICLE_PAGES.map((p) => (
        <Route key={p.slug} path={`/${p.slug}`} element={<VehicleLandingPage slug={p.slug} />} />
      ))}

      {/* Landing pages SEO Local (combinações) */}
      {LOCAL_COMBO_PAGES.map((p) => (
        <Route key={p.slug} path={`/${p.slug}`} element={<LocalComboLandingPage slug={p.slug} />} />
      ))}

      {/* Landing pages de Intenção de Compra */}
      {INTENT_PAGES.map((p) => (
        <Route key={p.slug} path={`/${p.slug}`} element={<IntentLandingPage slug={p.slug} />} />
      ))}

      {/* Landing pages de Comparativo de Marcas */}
      {COMPARISON_PAGES.map((p) => (
        <Route key={p.slug} path={`/${p.slug}`} element={<ComparisonLandingPage slug={p.slug} />} />
      ))}
        
        {/* Dashboard administrativo de SEO (noindex) */}
        <Route path="/admin/seo" element={<AdminSeoDashboard />} />

        {/* 404 — SEMPRE POR ULTIMO */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
