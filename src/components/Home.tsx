import { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import HomeTrust from './HomeTrust';
import MainPaths from './MainPaths';
import HomeServicesCompact from './HomeServicesCompact';
import TireSearchBar from './TireSearchBar';
import PneusPorAroSection from './PneusPorAroSection';
import PneusPromocao from './PneusPromocao';
import HomeFAQ, { getHomeFaqSchema } from './HomeFAQ';
import FinalCTA from './FinalCTA';
import BrandsCarousel from './BrandsCarousel';
import Footer from './Footer';
import DeferredSection from './DeferredSection';
import { ArrowRight } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

// Componentes abaixo da dobra com lazy loading
const StoreSection = lazy(() => import('./StoreSection'));
const Reviews = lazy(() => import('./Reviews'));

const HOME_SCHEMA = [getHomeFaqSchema()];

export default function Home() {
  useSEO({
    title: 'Oficina Mecânica e Loja de Pneus no Portão, Curitiba | Carplus',
    description:
      'Carplus Pneus e Oficina: centro automotivo no Portão, Curitiba. Venda e montagem de pneus, alinhamento 3D, balanceamento, freios e suspensão. Av. Pres. Arthur da Silva Bernardes, 1323.',
    canonical: 'https://www.carpluspneuseoficina.com.br/',
    ogImage: 'https://www.carpluspneuseoficina.com.br/og-carplus.webp',
    schemaJSON: HOME_SCHEMA,
    keywords: [
      // Oficina
      'oficina mecânica Portão',
      'oficina mecânica Curitiba',
      'oficina no Portão',
      'mecânico Portão Curitiba',
      'centro automotivo Portão',
      'centro automotivo Curitiba',
      // Pneus
      'pneus Curitiba',
      'loja de pneus Curitiba',
      'venda de pneus Curitiba',
      'comprar pneus Curitiba',
      'troca de pneus Curitiba',
      'pneus Portão',
      'loja de pneus Portão',
      'onde comprar pneus em Curitiba',
      // Marcas
      'pneus Pirelli Curitiba',
      'pneus Michelin Curitiba',
      'pneus Goodyear Curitiba',
      'pneus Bridgestone Curitiba',
      'pneus Continental Curitiba',
      'pneus Firestone Curitiba',
      'pneus Yokohama Curitiba',
      'pneus Prinx Curitiba',
      'pneus Delinte Curitiba',
      // Serviços
      'alinhamento 3D Curitiba',
      'balanceamento Curitiba',
      'freios Curitiba',
      'suspensão Curitiba',
      'troca de óleo Portão',
      'conserto de rodas Curitiba',
      // Aros
      'pneu aro 13 Curitiba',
      'pneu aro 14 Curitiba',
      'pneu aro 15 Curitiba',
      'pneu aro 16 Curitiba',
      'pneu aro 17 Curitiba',
      'pneu aro 18 Curitiba',
      'pneu aro 19 Curitiba',
      'pneu aro 20 Curitiba',
      'pneu aro 21 Curitiba',
      'pneu aro 22 Curitiba',
    ],
  });

  return (
    <div className="relative bg-white min-h-screen">
      <Navbar />

      <main>
        {/* 1. Hero claro com Oficina Mecânica e Loja de Pneus no Portão, Curitiba */}
        <Hero />

        {/* 2. Provas visuais reais e contato antes de explorar o catálogo. */}
        <HomeTrust />

        {/* 3. Três caminhos principais: Comprar pneus, Agendar serviço, Como chegar */}
        <MainPaths />

        <section aria-labelledby="home-ironman-4x4" className="mx-auto max-w-7xl px-4 py-7 md:px-6 md:py-10">
          <div className="grid overflow-hidden rounded-2xl border border-neutral-800 bg-dark text-white sm:grid-cols-[1fr_0.55fr]">
            <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-9">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Suspensão 4x4 · Portão, Curitiba</p>
              <h2 id="home-ironman-4x4" className="mt-2 text-2xl font-black italic leading-tight sm:text-3xl lg:text-4xl">Linha Ironman 4x4 na Carplus</h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">Vai preparar a picape para carga, estrada de terra ou trilha? Compare kits, molas e amortecedores e confirme a aplicação com a Carplus pelo modelo, ano e versão do seu veículo.</p>
              <a href="/suspensao-4x4-curitiba#linha-ironman-4x4" className="mt-5 inline-flex min-h-12 max-w-full items-center justify-center gap-2 self-start rounded-md bg-primary px-4 py-2.5 text-sm font-bold text-dark hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Ver produtos Ironman 4x4 <ArrowRight size={18} aria-hidden="true" /></a>
            </div>
            <figure className="flex flex-col items-center justify-center gap-1 border-t border-neutral-200 bg-white p-4 text-dark sm:border-t-0 sm:border-l sm:px-6">
              <img src="/images/suspensao-4x4/ironman-4x4.svg" alt="Ironman 4x4" width={152} height={34} loading="lazy" decoding="async" className="h-auto w-32" />
              <img src="/images/suspensao-4x4/produtos/cp4x4-001.webp" alt="Foto do kit Ironman NitroGás para Ford Ranger 2024" width={800} height={800} loading="lazy" decoding="async" className="h-32 w-full object-contain sm:h-40" />
              <figcaption className="text-center text-xs text-neutral-700">Kit NitroGás para Ford Ranger 2024 · CP4X4-001</figcaption>
            </figure>
          </div>
        </section>

        {/* 4. Serviços principais em grid compacto */}
        <HomeServicesCompact />

        {/* 5. Atalho para buscar pneus por medida ou aro + ofertas selecionadas */}
        <TireSearchBar />
        <PneusPorAroSection />
        <PneusPromocao />

        {/* 6. Prova local e estrutura da loja */}
        <DeferredSection minHeight={600}>
          <Suspense fallback={null}>
            <StoreSection />
          </Suspense>
        </DeferredSection>

        <DeferredSection minHeight={500} unmountOnExit>
          <Suspense fallback={null}>
            <Reviews />
          </Suspense>
        </DeferredSection>

        {/* 7. FAQ curto */}
        <HomeFAQ />

        {/* 8. CTA final de conversão */}
        <FinalCTA
          title="Oficina Mecânica e Loja de Pneus no Portão, Curitiba"
          subtitle="Pneus, alinhamento, freios e suspensão no mesmo endereço. Conte o que seu carro precisa e consulte os próximos passos com a equipe."
          whatsappMessage="Olá! Vi o site da Carplus e gostaria de solicitar um orçamento no Portão."
          primaryActionText="Conversar sobre meu carro"
        />

        {/* Marcas parceiras discretas */}
        <DeferredSection minHeight={200} unmountOnExit>
          <BrandsCarousel />
        </DeferredSection>
      </main>

      <Footer />

      {/* Floating WhatsApp */}
    </div>
  );
}
