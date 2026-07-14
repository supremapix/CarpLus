import { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TireSearchBar from './TireSearchBar';
import PneusPromocao from './PneusPromocao';
import BrandsCarousel from './BrandsCarousel';
import TireMeasuresSection from './TireMeasuresSection';
import PneusCuritibaPromo from './PneusCuritibaPromo';
import Footer from './Footer';
import DeferredSection from './DeferredSection';
import { MessageSquare } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

// Componentes abaixo da dobra: carregados sob demanda (lazy) para manter o
// chunk "motion" fora do caminho critico do carregamento inicial da Home.
const BestSellerTires = lazy(() => import('./BestSellerTires'));
const TiresByBrandLazy = lazy(() => import('./TiresByBrandLazy'));
const StoreSection = lazy(() => import('./StoreSection'));
const ServicesGrid = lazy(() => import('./ServicesGrid'));
const Reviews = lazy(() => import('./Reviews'));
const FAQInfiniteScroll = lazy(() => import('./FAQInfiniteScroll'));
const CentroAutomotivoCTA = lazy(() => import('./CentroAutomotivoCTA'));
const OfertasExclusivas = lazy(() => import('./OfertasExclusivas'));
const PneusPorAroSection = lazy(() => import('./PneusPorAroSection'));

export default function Home() {
  useSEO({
    title: 'Carplus Centro Automotivo – Loja de Pneus e Oficina em Curitiba, Portão',
    description: 'Loja de pneus Pirelli, Michelin, Goodyear, Continental e Yokohama em Curitiba. Alinhamento 3D, troca de óleo, suspensão e freios. No Portão – (41) 3082-7282.',
    canonical: 'https://www.carpluspneuseoficina.com.br/',
    ogImage: 'https://www.carpluspneuseoficina.com.br/og-carplus.webp',
    keywords: ['loja de pneus Curitiba', 'pneus Portão Curitiba', 'oficina mecânica Portão', 'alinhamento 3D Curitiba', 'Carplus Centro Automotivo', 'pneu aro 14', 'pneu aro 15', 'pneu aro 16', 'pneu aro 17', 'pneu aro 18', 'pneu aro 19', 'pneu aro 20', 'pneu aro 21', 'pneu aro 22', 'pneu aro 23'],
  });

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />

        <DeferredSection minHeight={800}>
          <Suspense fallback={null}>
            <ServicesGrid />
          </Suspense>
        </DeferredSection>

        <PneusPromocao />

        <TireSearchBar />
        
        <TireMeasuresSection />

        <PneusCuritibaPromo />

        <DeferredSection minHeight={900}>
          <Suspense fallback={null}>
            <BestSellerTires />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={400}>
          <Suspense fallback={null}>
            <TiresByBrandLazy />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={800}>
          <Suspense fallback={null}>
            <StoreSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={500}>
          <Suspense fallback={null}>
            <CentroAutomotivoCTA />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={700}>
          <Suspense fallback={null}>
            <OfertasExclusivas />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={500}>
          <Suspense fallback={null}>
            <PneusPorAroSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={900} unmountOnExit>
          <Suspense fallback={null}>
            <Reviews />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={700} unmountOnExit>
          <Suspense fallback={null}>
            <FAQInfiniteScroll />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={300} unmountOnExit>
          <BrandsCarousel />
        </DeferredSection>
      </main>
      <Footer />

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/554130827282"
        target="_blank"
        className="fixed bottom-6 right-6 z-[900] bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group overflow-hidden border-4 border-white/20 transition-transform hover:scale-110 active:scale-90 [animation:var(--animate-fade-in-up)]"
      >
         <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
         <MessageSquare size={24} className="relative z-10" />
         <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 overflow-hidden whitespace-nowrap font-bold text-sm relative z-10">
            Dúvidas? Chame aqui
         </span>
      </a>
    </div>
  );
}
