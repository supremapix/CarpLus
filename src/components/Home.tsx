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
import HomeFAQ, { getHomeFaqSchema } from './HomeFAQ';
import { ArrowRight, MessageSquare, MapPin } from 'lucide-react';
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
const CentroAutomotivoCTA = lazy(() => import('./CentroAutomotivoCTA'));
const OfertasExclusivas = lazy(() => import('./OfertasExclusivas'));

// Bairros próximos ao Portão realmente atendidos (área de atendimento, não filiais).
const BAIRROS_PROXIMOS = [
  'Vila Izabel',
  'Água Verde',
  'Guaíra',
  'Fanny',
  'Lindóia',
  'Novo Mundo',
  'Seminário',
  'Santa Quitéria',
  'Fazendinha',
  'Capão Raso',
];

const HOME_SCHEMA = [getHomeFaqSchema()];

export default function Home() {
  useSEO({
    title: 'Oficina Mecânica e Loja de Pneus no Portão, Curitiba | Carplus',
    description: 'Carplus Pneus e Oficina: centro automotivo no Portão, Curitiba. Venda e montagem de pneus, alinhamento 3D, balanceamento, freios e suspensão. Av. Pres. Arthur da Silva Bernardes, 1323.',
    canonical: 'https://www.carpluspneuseoficina.com.br/',
    ogImage: 'https://www.carpluspneuseoficina.com.br/og-carplus.webp',
    schemaJSON: HOME_SCHEMA,
    keywords: [
      // Oficina
      'oficina mecânica Portão', 'oficina mecânica Curitiba', 'oficina no Portão', 'mecânico Portão Curitiba',
      'centro automotivo Portão', 'centro automotivo Curitiba',
      // Pneus
      'pneus Curitiba', 'loja de pneus Curitiba', 'venda de pneus Curitiba', 'comprar pneus Curitiba',
      'troca de pneus Curitiba', 'pneus Portão', 'loja de pneus Portão', 'onde comprar pneus em Curitiba',
      // Marcas
      'pneus Pirelli Curitiba', 'pneus Michelin Curitiba', 'pneus Goodyear Curitiba',
      'pneus Bridgestone Curitiba', 'pneus Continental Curitiba', 'pneus Firestone Curitiba',
      'pneus Yokohama Curitiba', 'pneus Prinx Curitiba', 'pneus Delinte Curitiba',
      // Serviços
      'alinhamento 3D Curitiba', 'balanceamento Curitiba', 'freios Curitiba', 'suspensão Curitiba',
      'troca de óleo Portão', 'conserto de rodas Curitiba',
      // Aros
      'pneu aro 13 Curitiba', 'pneu aro 14 Curitiba', 'pneu aro 15 Curitiba', 'pneu aro 16 Curitiba',
      'pneu aro 17 Curitiba', 'pneu aro 18 Curitiba', 'pneu aro 19 Curitiba', 'pneu aro 20 Curitiba',
      'pneu aro 21 Curitiba', 'pneu aro 22 Curitiba',
    ],
  });

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />

        {/* Bloco semântico GEO/AIO: entidade → serviço → endereço → bairro → área atendida.
            Renderizado no HTML inicial (sem lazy) para buscadores e LLMs. */}
        <section className="-mb-16 bg-white py-14 md:-mb-24 md:py-24" aria-labelledby="home-oficina-portao">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-7">
                <div id="home-oficina-portao">
                  <SectionTitle
                    prefix="OFICINA MECÂNICA NO PORTÃO"
                    highlight="PARA BAIRROS PRÓXIMOS"
                    className="!mb-4 !max-w-none text-center lg:!text-left [&_h2]:text-balance"
                  />
                </div>
                <p className="mx-auto mb-4 max-w-[62ch] text-center text-base leading-relaxed text-gray-700 sm:text-lg lg:mx-0 lg:text-left">
                  A Carplus Pneus e Oficina é um centro automotivo localizado no bairro Portão, em Curitiba, na Av. Presidente Arthur da Silva Bernardes, 1323. A empresa trabalha com venda e montagem de pneus e com serviços de oficina mecânica: alinhamento 3D, balanceamento, freios, suspensão, direção, troca de óleo e diagnóstico com scanner.
                </p>
                <p className="mx-auto mb-8 max-w-[62ch] text-center text-base leading-relaxed text-gray-700 sm:text-lg lg:mx-0 lg:text-left">
                  Por estar no Portão, a oficina atende clientes do próprio bairro e de regiões próximas, como {BAIRROS_PROXIMOS.slice(0, -1).join(', ')} e {BAIRROS_PROXIMOS.at(-1)}.
                </p>
                <nav className="flex flex-wrap items-center justify-center gap-3 lg:justify-start" aria-label="Principais serviços da Carplus">
                  <Link to="/servico/alinhamento-3d" className="flex min-h-11 items-center rounded-full bg-gray-100 px-4 text-xs font-bold uppercase tracking-tight text-gray-700 transition-colors hover:bg-gray-200">Alinhamento 3D</Link>
                  <Link to="/servico/alinhamento-e-balanceamento" className="flex min-h-11 items-center rounded-full bg-gray-100 px-4 text-xs font-bold uppercase tracking-tight text-gray-700 transition-colors hover:bg-gray-200">Balanceamento</Link>
                  <Link to="/servico/manutencao-de-freios" className="flex min-h-11 items-center rounded-full bg-gray-100 px-4 text-xs font-bold uppercase tracking-tight text-gray-700 transition-colors hover:bg-gray-200">Freios</Link>
                  <Link to="/servico/revisao-de-suspensao" className="flex min-h-11 items-center rounded-full bg-gray-100 px-4 text-xs font-bold uppercase tracking-tight text-gray-700 transition-colors hover:bg-gray-200">Suspensão</Link>
                  <Link to="/servico/troca-de-oleo" className="flex min-h-11 items-center rounded-full bg-gray-100 px-4 text-xs font-bold uppercase tracking-tight text-gray-700 transition-colors hover:bg-gray-200">Troca de óleo</Link>
                  <Link to="/servico/conserto-de-rodas" className="flex min-h-11 items-center rounded-full bg-gray-100 px-4 text-xs font-bold uppercase tracking-tight text-gray-700 transition-colors hover:bg-gray-200">Conserto de rodas</Link>
                  <Link to="/servicos" className="flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold uppercase tracking-tight text-black shadow-lg shadow-primary/20 transition-colors hover:bg-yellow-400">
                    Todos os serviços
                    <ArrowRight size={16} />
                  </Link>
                </nav>
              </div>

              <aside className="lg:col-span-5" aria-label="Endereço e área de atendimento">
                <div className="mx-auto flex h-full max-w-md flex-col gap-5 rounded-3xl bg-dark p-6 text-white sm:p-8 lg:max-w-none">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-black">
                      <MapPin size={24} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">Única unidade</p>
                      <address className="mt-1 text-base font-bold not-italic leading-snug">
                        Av. Presidente Arthur da Silva Bernardes, 1323<br />
                        Portão, Curitiba – PR, 80320-300
                      </address>
                      <p className="mt-2 text-sm text-white/70">Seg a Sex 8h–18h · Sáb 8h–12h</p>
                    </div>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-widest text-white/50">Área de atendimento</p>
                    <ul className="flex flex-wrap gap-2" aria-label="Bairros atendidos">
                      {BAIRROS_PROXIMOS.map((b) => (
                        <li key={b} className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/85">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    <Link to="/centro-automotivo-portao" className="flex min-h-12 flex-1 items-center justify-center rounded-full bg-primary px-5 text-sm font-bold uppercase tracking-tight text-black transition-colors hover:bg-yellow-400">
                      Oficina no Portão
                    </Link>
                    <Link to="/como-chegar" className="flex min-h-12 flex-1 items-center justify-center rounded-full border border-white/20 px-5 text-sm font-bold uppercase tracking-tight text-white transition-colors hover:bg-white/10">
                      Como chegar
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
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

        {/* Links de aro no HTML inicial (sem lazy): rastreáveis por buscadores e LLMs */}
        <PneusPorAroSection />

        <DeferredSection minHeight={900} unmountOnExit>
          <Suspense fallback={null}>
            <Reviews />
          </Suspense>
        </DeferredSection>

        <HomeFAQ />

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
