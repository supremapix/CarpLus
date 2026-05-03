
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import NeighborhoodDetail from './components/NeighborhoodDetail';
import ServiceDetail from './components/ServiceDetail';
import TireCatalog from './components/TireCatalog';
import TireDetail from './components/TireDetail';
import PrivacyPolicy from './components/Institutional/PrivacyPolicy';
import ReturnPolicy from './components/Institutional/ReturnPolicy';
import AboutUs from './components/Institutional/AboutUs';
import Contact from './components/Institutional/Contact';
import Sitemap from './components/Sitemap';
import NotFound from './components/NotFound';
import ServicosPage from './components/ServicosPage';
import ComoChegar from './components/ComoChegar';
import BairrosPage from './components/BairrosPage';

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pneus" element={<TireCatalog />} />
      <Route path="/pneu/:slug" element={<TireDetail />} />
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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
