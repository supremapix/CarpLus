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
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import SectionTitle from './SectionTitle';

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
    title: 'Oficina Mecânica e Pneus em Curitiba | Carplus Centro Automotivo',
    description: 'Oficina mecânica e pneus em Curitiba: alinhamento e balanceamento 3D, freios, suspensão, troca de óleo, diagnóstico e pneus com instalação no Portão.',
    canonical: 'https://www.carpluspneuseoficina.com.br/',
    ogImage: 'https://www.carpluspneuseoficina.com.br/og-carplus.webp',
    keywords: [
      // Intencao comercial primaria (compra e instalacao)
      'onde instalar pneus em Curitiba', 'onde trocar pneus em Curitiba', 'onde comprar pneus em Curitiba',
      'distribuidora de pneus em Curitiba', 'loja de pneus em Curitiba', 'comprar pneus em Curitiba',
      'pneus em Curitiba', 'troca de pneus Curitiba', 'instalação de pneus Curitiba',
      'pneus com instalação', 'pneus com montagem', 'montagem de pneus',
      // Centro automotivo / auto center
      'centro automotivo Curitiba', 'auto center Curitiba', 'melhor loja de pneus em Curitiba',
      'loja de pneus Portão', 'centro automotivo Portão', 'oficina mecânica Portão',
      // Condicoes comerciais
      'pneus parcelados', 'pneus em até 10x', 'pneus com garantia', 'pneus originais',
      // Marcas
      'pneus Michelin Curitiba', 'pneus Pirelli Curitiba', 'pneus Goodyear Curitiba',
      'pneus Bridgestone Curitiba', 'pneus Continental Curitiba', 'pneus Yokohama Curitiba',
      'pneus Prinx Curitiba', 'pneus Delinte Curitiba',
      // Servicos relacionados
      'alinhamento 3D Curitiba', 'balanceamento de pneus', 'rodízio de pneus', 'conserto de pneus',
      // Aros
      'pneu aro 14', 'pneu aro 15', 'pneu aro 16', 'pneu aro 17', 'pneu aro 18',
      'pneu aro 19', 'pneu aro 20', 'pneu aro 21', 'pneu aro 22', 'pneu aro 23',
    ],
  });

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />

        <section className="-mb-16 bg-white py-16 md:-mb-24 md:py-24" aria-labelledby="home-local-services">
          <div className="mx-auto max-w-7xl px-4">
            <div id="home-local-services">
              <SectionTitle
                prefix="PNEUS E MANUTENÇÃO AUTOMOTIVA"
                highlight="NO PORTÃO, EM CURITIBA"
                className="!mb-4 !max-w-none !text-left [&_h2]:text-balance"
              />
            </div>
            <p className="mb-8 max-w-[60ch] text-left text-base font-light leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              A Carplus atende Curitiba com pneus, alinhamento, balanceamento, suspensão, freios e manutenção automotiva. Nossa oficina fica no bairro Portão e reúne serviços para cuidar da segurança e do desempenho do seu veículo.
            </p>
            <nav className="flex flex-wrap items-center justify-start gap-3" aria-label="Principais serviços da Carplus">
              <Link to="/servico/alinhamento-3d" className="flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-tight text-gray-600 transition-all hover:bg-gray-200">Alinhamento 3D em Curitiba</Link>
              <Link to="/servico/conserto-de-rodas" className="flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-tight text-gray-600 transition-all hover:bg-gray-200">Conserto de rodas em Curitiba</Link>
              <Link to="/servico/alinhamento-e-balanceamento" className="flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full bg-gray-100 px-4 py-2 text-xs font-bold uppercase tracking-tight text-gray-600 transition-all hover:bg-gray-200">Alinhamento e balanceamento</Link>
              <Link to="/servicos" className="flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-bold uppercase tracking-tight text-black shadow-lg shadow-primary/20 transition-colors hover:bg-yellow-400">
                Ver todos os serviços
                <ArrowRight size={16} />
              </Link>
            </nav>
          </div>
        </section>

        <DeferredSection minHeight={800}>
          <Suspense fallback={null}>
            <ServicesGrid />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={800}>
          <Suspense fallback={null}>
            <StoreSection />
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
