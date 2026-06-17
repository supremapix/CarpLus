
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
        
        {/* Redirects bairros .html → /bairro/ */}
        <Route path="/taboao.html" element={<Navigate to="/bairro/taboao" replace />} />
        <Route path="/agua-verde.html" element={<Navigate to="/bairro/agua-verde" replace />} />
        <Route path="/alto-da-rua-xv.html" element={<Navigate to="/bairro/alto-da-rua-xv" replace />} />
        <Route path="/bacacheri.html" element={<Navigate to="/bairro/bacacheri" replace />} />
        <Route path="/batel.html" element={<Navigate to="/bairro/batel" replace />} />
        <Route path="/boqueirao.html" element={<Navigate to="/bairro/boqueirao" replace />} />
        <Route path="/caiua.html" element={<Navigate to="/bairro/caiua" replace />} />
        <Route path="/campo-comprido.html" element={<Navigate to="/bairro/campo-comprido" replace />} />
        <Route path="/campo-de-santana.html" element={<Navigate to="/bairro/campo-de-santana" replace />} />
        <Route path="/capao-raso.html" element={<Navigate to="/bairro/capao-raso" replace />} />
        <Route path="/cascatinha.html" element={<Navigate to="/bairro/cascatinha" replace />} />
        <Route path="/caximba.html" element={<Navigate to="/bairro/caximba" replace />} />
        <Route path="/centro.html" element={<Navigate to="/bairro/centro" replace />} />
        <Route path="/cic.html" element={<Navigate to="/bairro/cic" replace />} />
        <Route path="/conquista.html" element={<Navigate to="/bairro/conquista" replace />} />
        <Route path="/cristo-rei.html" element={<Navigate to="/bairro/cristo-rei" replace />} />
        <Route path="/fazendinha.html" element={<Navigate to="/bairro/fazendinha" replace />} />
        <Route path="/ganchinho.html" element={<Navigate to="/bairro/ganchinho" replace />} />
        <Route path="/guaira.html" element={<Navigate to="/bairro/guaira" replace />} />
        <Route path="/hauer.html" element={<Navigate to="/bairro/hauer" replace />} />
        <Route path="/hugo-lange.html" element={<Navigate to="/bairro/hugo-lange" replace />} />
        <Route path="/jardim-botanico.html" element={<Navigate to="/bairro/jardim-botanico" replace />} />
        <Route path="/jardim-das-americas.html" element={<Navigate to="/bairro/jardim-das-americas" replace />} />
        <Route path="/jardim-gabineto.html" element={<Navigate to="/bairro/jardim-gabineto" replace />} />
        <Route path="/jardim-da-ordem.html" element={<Navigate to="/bairro/jardim-da-ordem" replace />} />
        <Route path="/jardim-itatiaia.html" element={<Navigate to="/bairro/jardim-itatiaia" replace />} />
        <Route path="/jardim-social.html" element={<Navigate to="/bairro/jardim-social" replace />} />
        <Route path="/juveve.html" element={<Navigate to="/bairro/juveve" replace />} />
        <Route path="/lamenha-pequena.html" element={<Navigate to="/bairro/lamenha-pequena" replace />} />
        <Route path="/lindoia.html" element={<Navigate to="/bairro/lindoia" replace />} />
        <Route path="/merces.html" element={<Navigate to="/bairro/merces" replace />} />
        <Route path="/neoville.html" element={<Navigate to="/bairro/neoville" replace />} />
        <Route path="/novo-mundo.html" element={<Navigate to="/bairro/novo-mundo" replace />} />
        <Route path="/orleans.html" element={<Navigate to="/bairro/orleans" replace />} />
        <Route path="/parolin.html" element={<Navigate to="/bairro/parolin" replace />} />
        <Route path="/pilarzinho.html" element={<Navigate to="/bairro/pilarzinho" replace />} />
        <Route path="/prado-velho.html" element={<Navigate to="/bairro/prado-velho" replace />} />
        <Route path="/reboucas.html" element={<Navigate to="/bairro/reboucas" replace />} />
        <Route path="/santa-candida.html" element={<Navigate to="/bairro/santa-candida" replace />} />
        <Route path="/santa-felicidade.html" element={<Navigate to="/bairro/santa-felicidade" replace />} />
        <Route path="/santo-inacio.html" element={<Navigate to="/bairro/santo-inacio" replace />} />
        <Route path="/sao-braz.html" element={<Navigate to="/bairro/sao-braz" replace />} />
        <Route path="/sao-lourenco.html" element={<Navigate to="/bairro/sao-lourenco" replace />} />
        <Route path="/sao-miguel.html" element={<Navigate to="/bairro/sao-miguel" replace />} />
        <Route path="/taruma.html" element={<Navigate to="/bairro/taruma" replace />} />
        <Route path="/uberaba.html" element={<Navigate to="/bairro/uberaba" replace />} />
        <Route path="/umbara.html" element={<Navigate to="/bairro/umbara" replace />} />
        <Route path="/vila-nossa-senhora-da-luz.html" element={<Navigate to="/bairro/vila-nossa-senhora-da-luz" replace />} />
        <Route path="/vila-oficinas.html" element={<Navigate to="/bairro/vila-oficinas" replace />} />
        <Route path="/vila-sandra.html" element={<Navigate to="/bairro/vila-sandra" replace />} />
        <Route path="/vila-sao-pedro.html" element={<Navigate to="/bairro/vila-sao-pedro" replace />} />
        <Route path="/vista-alegre.html" element={<Navigate to="/bairro/vista-alegre" replace />} />
        <Route path="/vitoria-regia.html" element={<Navigate to="/bairro/vitoria-regia" replace />} />
        <Route path="/ahu.html" element={<Navigate to="/bairro/ahu" replace />} />
        <Route path="/atenas.html" element={<Navigate to="/bairro/atenas" replace />} />
        <Route path="/bairro-alto.html" element={<Navigate to="/bairro/bairro-alto" replace />} />
        <Route path="/bigorrilho.html" element={<Navigate to="/bairro/bigorrilho" replace />} />
        <Route path="/butiatuvinha.html" element={<Navigate to="/bairro/butiatuvinha" replace />} />
        <Route path="/cajuru.html" element={<Navigate to="/bairro/cajuru" replace />} />
        <Route path="/portao.html" element={<Navigate to="/bairro/portao" replace />} />
        <Route path="/santa-quiteria.html" element={<Navigate to="/bairro/santa-quiteria" replace />} />
        {/* Cidades RMC */}
        <Route path="/sao-jose-dos-pinhais.html" element={<Navigate to="/bairro/sao-jose-dos-pinhais" replace />} />
        <Route path="/colombo.html" element={<Navigate to="/bairro/colombo" replace />} />
        <Route path="/araucaria.html" element={<Navigate to="/bairro/araucaria" replace />} />
        <Route path="/pinhais.html" element={<Navigate to="/bairro/pinhais" replace />} />
        <Route path="/campo-largo.html" element={<Navigate to="/bairro/campo-largo" replace />} />
        <Route path="/almirante-tamandare.html" element={<Navigate to="/bairro/almirante-tamandare" replace />} />
        <Route path="/fazenda-rio-grande.html" element={<Navigate to="/bairro/fazenda-rio-grande" replace />} />
        <Route path="/contenda.html" element={<Navigate to="/bairro/contenda" replace />} />
        
        {/* Dashboard administrativo de SEO (noindex) */}
        <Route path="/admin/seo" element={<AdminSeoDashboard />} />

        {/* 404 — SEMPRE POR ULTIMO */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
