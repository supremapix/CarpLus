
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Home from './components/Home';
import NeighborhoodDetail from './components/NeighborhoodDetail';
import ServiceDetail from './components/ServiceDetail';
import TireCatalog from './components/TireCatalog';
import TireDetail from './components/TireDetail';
import TireMeasureDetail from './components/TireMeasureDetail';
import PrivacyPolicy from './components/Institutional/PrivacyPolicy';
import ReturnPolicy from './components/Institutional/ReturnPolicy';
import AboutUs from './components/Institutional/AboutUs';
import Contact from './components/Institutional/Contact';
import Sitemap from './components/Sitemap';
import NotFound from './components/NotFound';
import ServicosPage from './components/ServicosPage';
import ComoChegar from './components/ComoChegar';
import BairrosPage from './components/BairrosPage';
import FAQPage from './components/FAQPage';
import CentroAutomotivoPortao from './components/CentroAutomotivoPortao';
import BackToTop from './components/BackToTop';
import { generateLocalBusinessSchema } from './lib/schema';

// Schema de LocalBusiness global para todas as paginas
const localBusinessSchema = generateLocalBusinessSchema();

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* Schema LocalBusiness global injetado em todas as paginas */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      
      <BackToTop />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pneus" element={<TireCatalog />} />
      <Route path="/pneu/:slug" element={<TireDetail />} />
      <Route path="/pneu-medida/:medida" element={<TireMeasureDetail />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
