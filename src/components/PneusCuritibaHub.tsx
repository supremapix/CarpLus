import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Circle, 
  Tag, 
  Car, 
  Ruler, 
  MapPin, 
  MessageSquare, 
  Phone, 
  Scale, 
  ShieldCheck, 
  Clock, 
  Award, 
  Star, 
  Info, 
  HelpCircle,
  Navigation,
  Wrench,
  CheckCircle2
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import TrustBar from './TrustBar';
import StoreSection from './StoreSection';
import Reviews from './Reviews';
import { useSEO } from '../hooks/useSEO';
import { generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema';
import {
  ARO_PAGES,
  BRAND_PAGES,
  VEHICLE_PAGES,
  MEASURE_SEO,
  LOCAL_COMBO_PAGES,
  COMPARISON_PAGES,
  BASE_URL,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
} from '../data/seoLanding';

function measureToSlug(medida: string): string {
  return medida.toLowerCase().replace(/\//g, '-');
}

const HUB_FAQ = [
  {
    question: 'Onde comprar pneus em Curitiba?',
    answer:
      'Na Carplus Centro Automotivo, localizada no bairro Portão (Av. Presidente Arthur da Silva Bernardes, 1323). Oferecemos um amplo estoque de pneus das principais marcas do mercado com atendimento consultivo e serviços completos.',
  },
  {
    question: 'A Carplus vende pneus com montagem?',
    answer:
      'Sim! Ao adquirir seus pneus novos na Carplus, a montagem e o balanceamento são realizados por nossa equipe técnica especializada diretamente em nossa loja física, garantindo total segurança na sua rodagem.',
  },
  {
    question: 'Quais marcas de pneus a Carplus trabalha?',
    answer:
      'Trabalhamos com as marcas mais consagradas do mercado mundial, incluindo Pirelli, Michelin, Goodyear, Continental, Bridgestone, Firestone, Yokohama, Prinx e Delinte. Consulte a disponibilidade da sua medida com nossos especialistas via WhatsApp.',
  },
  {
    question: 'Como saber a medida correta do pneu?',
    answer:
      'A medida do pneu está gravada em sua lateral, no formato de números e letras (exemplo: 205/55R16). Você também pode encontrar essa informação no manual do veículo ou no selo fixado na porta do motorista. Se tiver dúvidas, envie uma foto do seu pneu atual para o nosso WhatsApp.',
  },
  {
    question: 'Posso comprar pneus e fazer alinhamento no mesmo local?',
    answer:
      'Com certeza! A Carplus é um centro automotivo completo no Portão. Além de trocar seus pneus, você pode realizar alinhamento 3D computadorizado, balanceamento de rodas e revisão de suspensão e freios no mesmo dia.',
  },
  {
    question: 'A loja fica em qual bairro de Curitiba?',
    answer:
      'Estamos localizados na Avenida Presidente Arthur da Silva Bernardes, 1323, no bairro Portão. É um ponto estratégico e de fácil acesso para motoristas de toda a cidade, especialmente das regiões vizinhas.',
  },
  {
    question: 'Preciso agendar para trocar pneus?',
    answer:
      'Não é obrigatório agendar, pois atendemos por ordem de chegada com excelente agilidade. No entanto, agendar previamente pelo WhatsApp ajuda a garantir que sua medida estará separada e reservada, agilizando ainda mais o seu atendimento.',
  },
  {
    question: 'Vocês parcelam pneus?',
    answer:
      'Sim! Na Carplus você pode parcelar sua compra de pneus e os serviços em até 10x sem juros nos cartões de crédito. Oferecemos condições facilitadas e total transparência com emissão de nota fiscal e garantia oficial.',
  },
];

function Section({
  icon: Icon,
  title,
  subtitle,
  children,
  dark = false,
}: {
  icon: any;
  title: string;
  subtitle: string;
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <section className={`py-12 md:py-16 ${dark ? 'bg-dark text-white border-t border-b border-white/10' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 border-b-2 border-primary pb-3 mb-8">
          <Icon size={24} className="text-primary shrink-0" />
          <div>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tight italic">{title}</h2>
            <p className={`${dark ? 'text-white/60' : 'text-gray-500'} text-xs sm:text-sm font-medium`}>{subtitle}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function PneusCuritibaHub() {
  useSEO({
    title: 'Pneus em Curitiba | Loja de Pneus no Portão com Montagem | Carplus',
    description:
      'Pneus em Curitiba na Carplus, no Portão. Consulte pneus por medida, aro ou marca, com montagem, balanceamento, garantia e atendimento rápido pelo WhatsApp.',
    canonical: `${BASE_URL}/pneus-curitiba`,
    ogImage: '/images/loja/carplus-oficina-portao-fachada-curitiba.jpg',
    schemaJSON: [
      generateBreadcrumbSchema([
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Pneus em Curitiba', url: `${BASE_URL}/pneus-curitiba` },
      ]),
      generateFaqSchema(HUB_FAQ),
    ],
  });

  const linkClass =
    'flex items-center gap-2.5 bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 px-4 py-3 rounded-md text-xs sm:text-sm font-bold text-gray-700 hover:text-black transition-all shadow-sm';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-dark text-white overflow-hidden border-b border-white/10" aria-labelledby="pneus-curitiba-h1">
        {/* Decorative background image overlay */}
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/images/hero-fachada-carplus.webp" 
            alt="Oficina Carplus em Curitiba"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="text-xs text-white/50 mb-6 flex items-center gap-2 font-medium uppercase tracking-wider">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-white">Pneus em Curitiba</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/35 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-sm mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Venda e Instalação de Pneus
            </span>
            <h1 id="pneus-curitiba-h1" className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight italic leading-tight mb-5 text-balance">
              Pneus em <span className="text-primary">Curitiba no Portão</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/80 font-normal leading-relaxed max-w-3xl mb-8 text-pretty">
              Loja de pneus em Curitiba com montagem, balanceamento, marcas reconhecidas e atendimento rápido pelo WhatsApp. Encontre a especificação ideal para o seu automóvel com laudo técnico e garantia de fábrica.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-2xl">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de consultar uma medida de pneu na Carplus.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-md border border-emerald-500/20 shadow-sm transition-colors whitespace-nowrap sm:min-w-[210px]"
              >
                <MessageSquare size={18} className="shrink-0" />
                <span>Consultar medida no WhatsApp</span>
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex min-h-12 items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors whitespace-nowrap sm:min-w-[150px]"
              >
                <Phone size={17} className="shrink-0" />
                <span>Ligar agora</span>
              </a>
              <Link
                to="/como-chegar"
                className="flex min-h-12 items-center justify-center gap-2.5 bg-primary hover:bg-yellow-400 text-dark font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors shadow-sm whitespace-nowrap sm:min-w-[140px]"
              >
                <Navigation size={17} className="shrink-0" />
                <span>Como Chegar</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TrustBar / Barra de confiança */}
      <TrustBar variant="light" />

      {/* Por que comprar pneus na Carplus */}
      <section className="py-14 md:py-20 bg-white" aria-labelledby="por-que-carplus">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <header className="mb-10 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Qualidade Garantida</span>
            <h2 id="por-que-carplus" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic mt-2 text-gray-900">
              Por que comprar pneus na <span className="text-primary font-bold">Carplus</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-500 leading-relaxed text-balance">
              Diferenciais de atendimento e estrutura que garantem máxima segurança, procedência e agilidade na sua compra.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: 'Loja Física no Portão',
                description: 'Localização de fácil acesso na Avenida Presidente Arthur da Silva Bernardes, 1323, com vagas para clientes em frente à loja para sua comodidade.'
              },
              {
                icon: Ruler,
                title: 'Atendimento por Medida',
                description: 'Nossa equipe técnica ajuda você a identificar a especificação exata exigida pelo fabricante para garantir a perfeita compatibilidade.'
              },
              {
                icon: Wrench,
                title: 'Montagem e Balanceamento',
                description: 'Contamos com maquinários e equipamentos de última geração para montagem de alta precisão e balanceamento sem danos à roda.'
              },
              {
                icon: Award,
                title: 'Oficina no Mesmo Local',
                description: 'Somos um centro automotivo completo: se precisar de revisão de freios, suspensão, amortecedores ou troca de óleo, realizamos tudo na hora.'
              },
              {
                icon: Star,
                title: 'Marcas Reconhecidas',
                description: 'Revenda de marcas consagradas (Pirelli, Michelin, Goodyear, Continental, Bridgestone, Firestone, Yokohama, Prinx, Delinte) com procedência.'
              },
              {
                icon: ShieldCheck,
                title: 'Nota Fiscal e Garantia',
                description: 'Todos os pneus comercializados acompanham nota fiscal eletrônica e garantia integral contra quaisquer defeitos de fabricação.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-lg shadow-xs hover:border-gray-200 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4 text-neutral-800 shrink-0">
                  <item.icon size={22} />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pneus por Medida */}
      <Section icon={Ruler} title="Pneus por Medida" subtitle="As medidas mais procuradas no catálogo Carplus Curitiba">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {MEASURE_SEO.map((m) => (
            <Link key={m.medida} to={`/pneu-medida/${measureToSlug(m.medida)}`} className={linkClass}>
              <ChevronRight size={14} className="text-primary shrink-0" />
              <span>{m.medida}</span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center sm:text-left">
          <Link
            to="/medidas-de-pneus-curitiba"
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline uppercase text-xs sm:text-sm tracking-tight"
          >
            Ver todas as medidas e como ler a do seu pneu <ChevronRight size={16} />
          </Link>
        </div>
      </Section>

      {/* Pneus por Aro */}
      <Section icon={Circle} title="Pneus por Aro" subtitle="Selecione o aro ideal para o seu automóvel">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {ARO_PAGES.map((a) => (
            <Link key={a.slug} to={`/${a.slug}`} className={linkClass}>
              <ChevronRight size={14} className="text-primary shrink-0" />
              <span>Pneu Aro {a.aro}</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Marcas de Pneus em Curitiba */}
      <Section icon={Tag} title="Marcas de Pneus em Curitiba" subtitle="Marcas que trabalhamos — Consulte disponibilidade pelo WhatsApp">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {BRAND_PAGES.map((b) => (
            <Link key={b.slug} to={`/${b.slug}`} className={linkClass}>
              <ChevronRight size={14} className="text-primary shrink-0" />
              <span>{b.marca}</span>
            </Link>
          ))}
        </div>
        <p className="mt-5 text-xs text-gray-500 italic text-center sm:text-left">
          *Trabalhamos com ampla variedade de medidas para cada uma das marcas. Devido ao alto giro de estoque físico, sugerimos sempre consultar a disponibilidade exata no WhatsApp.
        </p>
      </Section>

      {/* Instalação Completa */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-100" aria-labelledby="instalacao-completa">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Serviços Profissionais</span>
              <h2 id="instalacao-completa" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic mt-2 mb-6 text-gray-900 leading-tight">
                Instalação Completa de Pneus em Nossa Oficina
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                A troca de pneus exige precisão mecânica para garantir a dirigibilidade perfeita, estabilidade em curvas e o máximo rendimento quilométrico. Na Carplus, cada montagem passa por uma esteira rígida de processos técnicos:
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Montagem Técnica Especializada',
                    desc: 'Realizada por técnicos qualificados utilizando maquinários de braço pneumático que não agridem nem riscam as rodas de liga leve.'
                  },
                  {
                    title: 'Balanceamento Dinâmico de Rodas',
                    desc: 'Eliminação completa de vibrações no volante por meio de máquinas de calibração eletrônica ultra-precisas.'
                  },
                  {
                    title: 'Alinhamento 3D Computadorizado (Recomendado)',
                    desc: 'Ajuste fino da geometria de direção do veículo para garantir o desgaste 100% regular do seu novo jogo de pneus.'
                  },
                  {
                    title: 'Calibragem de Pressão Exata',
                    desc: 'Ajuste conforme as especificações originais da montadora, considerando o uso urbano ou rodoviário.'
                  }
                ].map((step, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-primary shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-gray-900 leading-tight">{step.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-500 leading-normal mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-4 border-t border-gray-200 mt-2">
                  <p className="text-xs sm:text-sm text-gray-600">
                    Aproveite a visita para fazer também a revisão preventiva do veículo. Conheça nossa página de{' '}
                    <Link to="/manutencao-automotiva-curitiba" className="text-neutral-900 font-bold hover:text-primary underline">
                      manutenção automotiva em Curitiba
                    </Link>{' '}
                    com scanner, freios, suspensão e troca de óleo no Portão.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm max-w-md mx-auto lg:max-w-none w-full">
              <img 
                src="/images/loja/loja-de-pneus-curitiba.webp" 
                alt="Equipamentos de balanceamento e alinhamento na oficina Carplus"
                className="w-full h-auto object-cover max-h-[480px]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-dark/80 backdrop-blur-xs p-4 text-center">
                <p className="text-xs text-white font-bold uppercase tracking-wider">
                  Equipamento de Diagnóstico de Precisão
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco Local */}
      <section className="py-14 md:py-20 bg-dark text-white relative overflow-hidden" aria-labelledby="local-portao">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Onde Estamos</span>
              <h2 id="local-portao" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic mt-2 mb-6 leading-tight">
                Loja de Pneus no <span className="text-primary">Portão, Curitiba</span>
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                Estamos estrategicamente localizados na <strong className="text-white">Avenida Presidente Arthur da Silva Bernardes, 1323</strong>, no coração do bairro Portão. Um local amplo, moderno e de fácil acesso para motoristas que necessitam de atendimento automotivo ágil e de alta qualidade.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-5 mb-6 shadow-xs">
                <h4 className="font-bold text-xs uppercase tracking-widest text-primary mb-3">Atendemos Próximo Aos Bairros:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs sm:text-sm text-white/70">
                  {['Água Verde', 'Vila Izabel', 'Guaíra', 'Fanny', 'Lindóia', 'Novo Mundo', 'Santa Quitéria', 'Fazendinha', 'Capão Raso', 'Seminário'].map((bairro, idx) => (
                    <span key={idx} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-primary rounded-full" />
                      {bairro}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm text-white/60">
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 size={16} className="text-primary" /> Estacionamento próprio gratuito no local
                </span>
                <span className="hidden sm:inline text-white/20">•</span>
                <span className="flex items-center gap-1.5 font-bold">
                  <CheckCircle2 size={16} className="text-primary" /> Vagas exclusivas para clientes
                </span>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-5 rounded-lg shadow-sm">
              <h3 className="font-bold text-base uppercase tracking-tight text-white mb-4 flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                <span>Horários de Funcionamento</span>
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-white/75 mb-6">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span>Segunda a Sexta-feira:</span>
                  <span className="font-bold text-white">08:00 às 18:00</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span>Sábado:</span>
                  <span className="font-bold text-white">08:00 às 12:00</span>
                </div>
                <div className="flex justify-between py-1.5 text-red-400">
                  <span>Domingos e Feriados:</span>
                  <span className="font-medium">Fechado</span>
                </div>
              </div>
              <Link
                to="/como-chegar"
                className="w-full min-h-11 flex items-center justify-center gap-2 bg-primary hover:bg-yellow-400 text-dark font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors shadow-sm"
              >
                <Navigation size={17} className="shrink-0" />
                <span>Como Chegar (Mapa Completo)</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco de Prova Local e Estrutura */}
      <StoreSection />
      <Reviews />

      {/* FAQ Otimizado */}
      <section className="bg-white py-14 md:py-20 border-t border-gray-100" aria-labelledby="faq-curitiba-titulo">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <header className="mb-10 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Tire Suas Dúvidas</span>
            <h2 id="faq-curitiba-titulo" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic mt-2 text-gray-900">
              Perguntas Frequentes Sobre <span className="text-primary font-bold">Pneus em Curitiba</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              Respostas claras e transparentes para as dúvidas mais comuns de motoristas na hora de comprar e trocar pneus.
            </p>
          </header>

          <div className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
            {HUB_FAQ.map((faq, idx) => (
              <details key={idx} className="group py-4">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-sm sm:text-base font-bold leading-snug text-gray-900 hover:text-primary transition-colors [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-lg sm:text-xl leading-none text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-1 pt-3 text-xs sm:text-sm leading-relaxed text-gray-600 text-pretty">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

          <div className="mt-10 p-5 bg-gray-50 rounded-lg border border-gray-100 text-center max-w-2xl mx-auto">
            <HelpCircle size={24} className="mx-auto text-primary mb-2" />
            <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1">Ainda tem alguma dúvida técnica?</h3>
            <p className="text-xs text-gray-500 mb-4">
              Nossa equipe técnica no Portão está à disposição para analisar o desgaste dos seus pneus atuais e indicar as melhores opções para sua segurança.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista sobre pneus na Carplus.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-2.5 rounded-md shadow-xs border border-emerald-500/15 transition-colors"
            >
              <MessageSquare size={16} /> Falar Com Especialista
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
