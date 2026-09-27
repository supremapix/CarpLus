import { lazy, Suspense } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TrustBar from './TrustBar';
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
import { MessageSquare } from 'lucide-react';
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

        {/* 2. Bloco curto de confiança: Portão, 10x, garantia, nota fiscal e avaliação Google */}
        <TrustBar variant="light" />

        {/* 3. Três caminhos principais: Comprar pneus, Agendar serviço, Como chegar */}
        <MainPaths />

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
          subtitle="Atendimento rápido com diagnóstico antes do orçamento, pneus das principais marcas e equipe qualificada para cuidar do seu carro."
          whatsappMessage="Olá! Vi o site da Carplus e gostaria de solicitar um orçamento no Portão."
          primaryActionText="Chamar no WhatsApp"
        />

        {/* Marcas parceiras discretas */}
        <DeferredSection minHeight={200} unmountOnExit>
          <BrandsCarousel />
        </DeferredSection>
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/554130827282"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-6 z-[900] bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group overflow-hidden border-4 border-white/20 transition-transform hover:scale-110 active:scale-90"
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
