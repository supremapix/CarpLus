import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Cpu, 
  Target, 
  Wrench, 
  Droplets, 
  ShieldAlert, 
  Sliders, 
  ClipboardCheck, 
  Circle, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Navigation, 
  Clock, 
  MapPin, 
  AlertTriangle, 
  HelpCircle,
  Layers,
  Sparkles
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import TrustBar from './TrustBar';
import StoreSection from './StoreSection';
import Reviews from './Reviews';
import { useSEO } from '../hooks/useSEO';
import { generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema';
import { BASE_URL, WHATSAPP_NUMBER, PHONE_DISPLAY } from '../data/seoLanding';

const HUB_FAQS = [
  {
    question: 'A Carplus faz manutenção automotiva em Curitiba?',
    answer: 'Sim! A Carplus é um centro automotivo completo no bairro Portão, especializado em manutenção preventiva e corretiva, injeção eletrônica, freios, suspensão, alinhamento, balanceamento, troca de óleo e venda de pneus para carros nacionais e importados.'
  },
  {
    question: 'A Carplus passa scanner em carros?',
    answer: 'Sim. Contamos com scanner automotivo multiprotocolo profissional de última geração para diagnóstico eletrônico computadorizado. Realizamos a leitura e análise de falhas no motor, câmbio, injeção eletrônica, ABS, airbag, além de reset de luzes de alerta no painel.'
  },
  {
    question: 'Quando devo fazer alinhamento e balanceamento?',
    answer: 'O alinhamento e o balanceamento são recomendados a cada 10.000 km, na troca de pneus, após impactos fortes em buracos ou sempre que notar o volante puxando para um lado ou vibrando em velocidades médias/altas.'
  },
  {
    question: 'A Carplus faz troca de óleo?',
    answer: 'Sim. Realizamos troca de óleo com lubrificantes sintéticos, semissintéticos e minerais de marcas homologadas pelas montadoras, com substituição do filtro de óleo, filtro de ar, filtro de combustível e filtro de cabine, conforme o manual do seu veículo.'
  },
  {
    question: 'A Carplus revisa freios?',
    answer: 'Sim. Fazemos inspeção detalhada de todo o sistema de freios: avaliação do desgaste de pastilhas e discos, retífica de discos de freio, troca de fluido de freio DOT 3 / DOT 4 com sangria completa e verificação do sistema ABS.'
  },
  {
    question: 'A Carplus faz revisão de suspensão?',
    answer: 'Sim! Diagnosticamos e substituímos amortecedores, molas, buchas, pivôs, terminais de direção, coxins e barras estabilizadoras, eliminando ruídos e garantindo estabilidade e conforto ao dirigir.'
  },
  {
    question: 'Posso trocar pneus e fazer alinhamento no mesmo lugar?',
    answer: 'Com certeza! Essa é uma das principais conveniências da Carplus. Você pode escolher pneus novos para seu carro e já realizar montagem, balanceamento e alinhamento 3D no mesmo local e no mesmo atendimento.'
  },
  {
    question: 'Preciso agendar atendimento?',
    answer: 'Não é obrigatório agendar: atendemos por ordem de chegada com excelente agilidade na oficina. No entanto, agendando previamente pelo WhatsApp você garante horário reservado e atendimento prioritário.'
  },
  {
    question: 'A oficina fica em qual bairro de Curitiba?',
    answer: 'Estamos localizados na Avenida Presidente Arthur da Silva Bernardes, 1323, no bairro Portão, em Curitiba. Ponto de fácil acesso com vagas para clientes no local.'
  },
  {
    question: 'Como falar com a Carplus pelo WhatsApp?',
    answer: 'Basta clicar nos botões de WhatsApp do site ou enviar uma mensagem para o número (41) 3082-7282. Nossa equipe técnica atende prontamente para tirar dúvidas, agendar avaliações e passar orçamentos.'
  }
];

const SERVICOS_PRINCIPAIS = [
  {
    icon: Cpu,
    title: 'Scanner Automotivo',
    slug: '/servico/scanner-automotivo',
    benefit: 'Diagnóstico eletrônico computadorizado para leitura de códigos de falha, luz de injeção acesa e análise de sensores em veículos nacionais e importados.',
    tag: 'Diagnóstico Eletrônico'
  },
  {
    icon: Target,
    title: 'Alinhamento e Balanceamento',
    slug: '/servico/alinhamento-e-balanceamento',
    benefit: 'Correção de geometria veicular e eliminação de trepidações no volante, aumentando a vida útil dos pneus e garantindo estabilidade direcional.',
    tag: 'Geometria de Rodas'
  },
  {
    icon: Layers,
    title: 'Alinhamento 3D Computadorizado',
    slug: '/servico/alinhamento-3d',
    benefit: 'Aferição tridimensional com precisão milimétrica para ajuste de cáster, câmber e convergência em padrões rigorosos de fábrica.',
    tag: 'Tecnologia 3D'
  },
  {
    icon: Droplets,
    title: 'Troca de Óleo e Filtros',
    slug: '/servico/troca-de-oleo',
    benefit: 'Lubrificantes sintéticos e semissintéticos com especificações homologadas, troca de filtro de óleo, ar e cabine com descarte ecológico.',
    tag: 'Lubrificação e Motor'
  },
  {
    icon: ShieldAlert,
    title: 'Manutenção de Freios',
    slug: '/servico/manutencao-de-freios',
    benefit: 'Revisão e troca de pastilhas, discos, fluido de freio DOT4 e retífica, garantindo máxima segurança e resposta imediata na frenagem.',
    tag: 'Segurança Ativa'
  },
  {
    icon: Sliders,
    title: 'Suspensão Automotiva',
    slug: '/servico/revisao-de-suspensao',
    benefit: 'Avaliação técnica completa de amortecedores, molas, pivôs, buchas e bandejas, eliminando barulhos secos e desgaste prematuro.',
    tag: 'Conforto e Estabilidade'
  },
  {
    icon: ClipboardCheck,
    title: 'Revisão Preventiva Geral',
    slug: '/servico/revisao-geral',
    benefit: 'Checklist detalhado de itens mecânicos e de segurança antes de viagens ou revisões programadas, com laudo apresentado antes do orçamento.',
    tag: 'Prevenção de Falhas'
  },
  {
    icon: Circle,
    title: 'Pneus e Geometria Completa',
    slug: '/pneus-curitiba',
    benefit: 'Amplo catálogo de pneus das melhores marcas com montagem e balanceamento no mesmo local, integrando pneus e mecânica.',
    tag: 'Pneus em Curitiba'
  }
];

const SINAIS_OFICINA = [
  {
    titulo: 'Luz de injeção acesa no painel',
    descricao: 'Indica falha no gerenciamento do motor, sonda lambda, bicos injetores ou ignição detectada pela central.',
    servico: 'Scanner Automotivo',
    link: '/servico/scanner-automotivo'
  },
  {
    titulo: 'Carro puxando para um lado',
    descricao: 'Desvio de trajetória em linha reta indica desalinhamento das rodas dianteiras ou traseiras.',
    servico: 'Alinhamento 3D',
    link: '/servico/alinhamento-3d'
  },
  {
    titulo: 'Volante tremendo ou vibrando',
    descricao: 'Trepidação no volante em velocidades acima de 60 km/h costuma ser causada por rodas desbalanceadas.',
    servico: 'Balanceamento',
    link: '/servico/alinhamento-e-balanceamento'
  },
  {
    titulo: 'Barulho ou chiado ao frear',
    descricao: 'Ruído metálico indica pastilhas gastas no fim da vida útil ou discos com ranhuras que exigem revisão.',
    servico: 'Revisão de Freios',
    link: '/servico/manutencao-de-freios'
  },
  {
    titulo: 'Desgaste irregular dos pneus',
    descricao: 'Pneu com borracha gasta apenas na borda interna ou externa é sinal claro de cambagem ou convergência incorreta.',
    servico: 'Alinhamento & Pneus',
    link: '/servico/alinhamento-e-balanceamento'
  },
  {
    titulo: 'Óleo vencido ou escurecido',
    descricao: 'Lubrificante fora do prazo ou da viscosidade perde a capacidade de proteção e pode fundir componentes internos.',
    servico: 'Troca de Óleo',
    link: '/servico/troca-de-oleo'
  },
  {
    titulo: 'Suspensão batendo seco',
    descricao: 'Pancadas em quebra-molas ou asfalto irregular apontam amortecedores estourados ou buchas danificadas.',
    servico: 'Suspensão',
    link: '/servico/revisao-de-suspensao'
  },
  {
    titulo: 'Consumo aumentado de combustível',
    descricao: 'Filtros sujos, velas desgastadas, sensores descalibrados ou pneus murchos elevam o consumo drasticamente.',
    servico: 'Revisão Geral',
    link: '/servico/revisao-geral'
  },
  {
    titulo: 'Dificuldade na partida do motor',
    descricao: 'Partida pesada ou engasgos sugerem problemas na bateria, motor de partida, velas ou alimentação de combustível.',
    servico: 'Diagnóstico Técnico',
    link: '/servico/scanner-automotivo'
  }
];

export default function ManutencaoAutomotivaHub() {
  useSEO({
    title: 'Manutenção Automotiva em Curitiba | Centro Automotivo no Portão | Carplus',
    description: 'Manutenção automotiva em Curitiba no bairro Portão. Scanner automotivo, alinhamento, balanceamento, troca de óleo, freios, suspensão e revisão preventiva na Carplus Pneus e Oficina.',
    canonical: `${BASE_URL}/manutencao-automotiva-curitiba`,
    ogImage: '/images/loja/carplus-oficina-portao-fachada-curitiba.jpg',
    keywords: [
      'manutenção automotiva em curitiba',
      'centro automotivo em curitiba',
      'oficina mecânica no portão',
      'scanner automotivo em curitiba',
      'alinhamento e balanceamento em curitiba',
      'troca de óleo em curitiba',
      'revisão de freios em curitiba',
      'suspensão automotiva em curitiba'
    ],
    schemaJSON: [
      generateBreadcrumbSchema([
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Manutenção Automotiva em Curitiba', url: `${BASE_URL}/manutencao-automotiva-curitiba` },
      ]),
      generateFaqSchema(HUB_FAQS),
      {
        '@context': 'https://schema.org',
        '@type': 'AutoRepair',
        '@id': `${BASE_URL}/#localbusiness`,
        name: 'Carplus Pneus e Centro Automotivo',
        description: 'Centro automotivo especializado em manutenção preventiva, corretiva, freios, suspensão, scanner e pneus no Portão, Curitiba.',
        telephone: '+55-41-3082-7282',
        url: `${BASE_URL}/manutencao-automotiva-curitiba`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Av. Presidente Arthur da Silva Bernardes, 1323',
          addressLocality: 'Curitiba',
          addressRegion: 'PR',
          postalCode: '80320-300',
          addressCountry: 'BR'
        },
        areaServed: {
          '@type': 'City',
          name: 'Curitiba'
        }
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-dark text-white overflow-hidden border-b border-white/10" aria-labelledby="manutencao-h1">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="/images/hero-fachada-carplus.webp" 
            alt="Oficina Mecânica Carplus no Portão Curitiba"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="text-xs text-white/50 mb-6 flex items-center gap-2 font-medium uppercase tracking-wider">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={12} className="opacity-40" />
            <span className="text-white">Manutenção Automotiva em Curitiba</span>
          </nav>

          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-sm mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Centro Automotivo Full Service
            </span>

            <h1 id="manutencao-h1" className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight italic leading-tight mb-5 text-balance">
              Manutenção Automotiva em <span className="text-primary">Curitiba no Portão</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 font-normal leading-relaxed max-w-3xl mb-8 text-pretty">
              A Carplus é o seu centro automotivo completo no bairro Portão: unimos oficina mecânica especializada, revisão preventiva computadorizada e venda de pneus no mesmo local. Atendimento técnico transparente com laudo prévio e sem serviços desnecessários.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-2xl">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de um orçamento para manutenção automotiva na Carplus Portão.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-md border border-emerald-500/20 shadow-sm transition-colors whitespace-nowrap sm:min-w-[220px]"
              >
                <MessageSquare size={18} className="shrink-0" />
                <span>Falar no WhatsApp</span>
              </a>
              <a
                href="#servicos-grid"
                className="flex min-h-12 items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors whitespace-nowrap sm:min-w-[170px]"
              >
                <Wrench size={16} className="shrink-0" />
                <span>Ver Serviços</span>
              </a>
              <a
                href={`tel:+${WHATSAPP_NUMBER}`}
                className="flex min-h-12 items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors whitespace-nowrap sm:min-w-[150px]"
              >
                <Phone size={16} className="shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TrustBar Padronizada */}
      <TrustBar variant="light" />

      {/* Introdução Curta */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100" aria-labelledby="intro-manutencao">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Estrutura & Agilidade</span>
          <h2 id="intro-manutencao" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic mt-2 mb-4 text-gray-900">
            Oficina Mecânica e Centro Automotivo Integrado
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-balance">
            Você não precisa levar o carro a diferentes locais para resolver pneus em uma loja e suspensão ou freios em outra. Na Carplus Centro Automotivo, no bairro Portão em Curitiba, reunimos profissionais qualificados, ferramental de precisão e atendimento ágil com total transparência para que seu veículo receba o cuidado certo, sem suposições e com peças de qualidade garantida.
          </p>
        </div>
      </section>

      {/* Grid de Serviços Principais */}
      <section id="servicos-grid" className="py-14 md:py-20 bg-gray-50" aria-labelledby="grid-servicos-titulo">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <header className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Serviços Automotivos</span>
            <h2 id="grid-servicos-titulo" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic mt-2 text-gray-900">
              Especialidades de Manutenção na <span className="text-primary font-bold">Carplus</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
              Clique no serviço para ver detalhes técnicos ou converse direto com nossa equipe no Portão.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICOS_PRINCIPAIS.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:border-primary/50 transition-all shadow-xs group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 bg-primary/10 rounded-md flex items-center justify-center text-neutral-900 group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                        <Icon size={20} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600 bg-gray-100 px-2.5 py-1 rounded-sm">
                        {srv.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {srv.benefit}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <Link
                      to={srv.slug}
                      className="text-xs font-bold text-neutral-900 hover:text-primary uppercase tracking-tight flex items-center gap-1 transition-colors"
                    >
                      <span>Ver detalhes</span>
                      <ChevronRight size={14} className="text-primary" />
                    </Link>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de consultar o serviço de ${srv.title} na Carplus Portão.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-tight"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seção "Quando procurar uma oficina?" */}
      <section className="py-14 md:py-20 bg-white border-t border-gray-200" aria-labelledby="quando-procurar">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <header className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-[0.15em] flex items-center justify-center gap-1.5">
              <AlertTriangle size={15} /> Diagnóstico Preventivo
            </span>
            <h2 id="quando-procurar" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic mt-2 text-gray-900">
              Quando Procurar uma Oficina Mecânica?
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
              Fique atento aos sintomas mais frequentes no dia a dia. Identificar o problema no início evita desgastes em cadeia e despesas maiores.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SINAIS_OFICINA.map((sinal, idx) => (
              <div key={idx} className="bg-gray-50 border border-gray-200/80 rounded-lg p-5 flex flex-col justify-between hover:border-gray-300 transition-colors">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 size={15} className="shrink-0" />
                    <span>Sintoma Alerta</span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-2 leading-snug">
                    {sinal.titulo}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {sinal.descricao}
                  </p>
                </div>
                <div className="pt-3 border-t border-gray-200/50 flex items-center justify-between text-xs">
                  <span className="font-medium text-gray-500">Indicado:</span>
                  <Link to={sinal.link} className="font-bold text-neutral-900 hover:text-primary flex items-center gap-1">
                    {sinal.servico} <ChevronRight size={13} className="text-primary" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção "Serviços em um só lugar" */}
      <section className="py-14 md:py-20 bg-dark text-white relative overflow-hidden" aria-labelledby="um-so-lugar">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Mais Praticidade</span>
              <h2 id="um-so-lugar" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic mt-2 mb-6 leading-tight">
                Todos os Serviços Mecânicos em um Só Lugar
              </h2>
              <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                Em centros automotivos tradicionais, muitas vezes você precisa comprar o pneu em um estabelecimento, procurar outra oficina para fazer a suspensão e ainda um terceiro local para passar o scanner eletrônico. Na Carplus você resolve tudo na mesma parada:
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  'Troca de pneus com alinhamento 3D e balanceamento computadorizado simultâneos',
                  'Revisão completa de freios (pastilhas, discos, fluido) sem sair da loja',
                  'Diagnóstico por scanner multiprotocolo para leitura de luz de injeção e falhas eletrônicas',
                  'Troca de óleo com filtros de alta qualidade específicos para o motor do seu carro',
                  'Revisão técnica de suspensão e amortecedores com laudo apresentado antes do serviço'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-white/85 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação completa na Carplus Portão.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-12 items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-md transition-colors"
                >
                  <MessageSquare size={17} /> Agendar Avaliação
                </a>
                <Link
                  to="/como-chegar"
                  className="flex min-h-12 items-center justify-center gap-2 bg-primary hover:bg-yellow-400 text-dark font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors shadow-sm"
                >
                  <Navigation size={17} /> Como Chegar
                </Link>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8">
              <h3 className="font-bold text-lg uppercase tracking-tight text-white mb-4 flex items-center gap-2">
                <Wrench className="text-primary" size={20} />
                <span>Atendimento na Oficina Carplus</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                Nosso compromisso é com a transparência: antes de qualquer intervenção, seu carro passa por uma avaliação criteriosa. O cliente recebe explicação detalhada do que realmente precisa de atenção urgente e do que pode ser planejado para revisões futuras.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-white/80 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 font-bold text-white">
                  <CheckCircle2 size={15} className="text-primary" /> Garantia e nota fiscal em todos os serviços
                </div>
                <div className="flex items-center gap-2 font-bold text-white">
                  <CheckCircle2 size={15} className="text-primary" /> Equipamentos homologados de alta tecnologia
                </div>
                <div className="flex items-center gap-2 font-bold text-white">
                  <CheckCircle2 size={15} className="text-primary" /> Condições em até 10x sem juros nos cartões
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Local - Bairro Portão e Regiões Vizinhas */}
      <section className="py-14 md:py-20 bg-white" aria-labelledby="local-manutencao">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Localização Estratégica</span>
              <h2 id="local-manutencao" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic mt-2 mb-6 text-gray-900 leading-tight">
                Oficina Mecânica no Portão, Curitiba
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
                Estamos na <strong className="text-gray-900">Av. Presidente Arthur da Silva Bernardes, 1323 – Portão</strong>, uma das avenidas de melhor acesso em Curitiba. Atendemos com facilidade motoristas de diversos bairros próximos:
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 mb-6">
                <h4 className="font-bold text-xs uppercase tracking-widest text-neutral-800 mb-3">Atendimento Próximo Aos Bairros:</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs sm:text-sm text-gray-600">
                  {['Portão', 'Água Verde', 'Vila Izabel', 'Novo Mundo', 'Fazendinha', 'Santa Quitéria', 'Campo Comprido', 'Capão Raso', 'Lindóia'].map((bairro, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {bairro}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm text-gray-600">
                <span className="flex items-center gap-1.5 font-bold text-gray-800">
                  <CheckCircle2 size={16} className="text-primary" /> Estacionamento próprio gratuito no local
                </span>
                <span className="hidden sm:inline text-gray-300">•</span>
                <span className="flex items-center gap-1.5 font-bold text-gray-800">
                  <CheckCircle2 size={16} className="text-primary" /> Vagas exclusivas para clientes
                </span>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-base uppercase tracking-tight text-gray-900 mb-4 flex items-center gap-2">
                <Clock size={18} className="text-primary" />
                <span>Horários de Atendimento</span>
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-gray-600 mb-6">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Segunda a Sexta-feira:</span>
                  <span className="font-bold text-gray-900">08:00 às 18:00</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span>Sábado:</span>
                  <span className="font-bold text-gray-900">08:00 às 12:00</span>
                </div>
                <div className="flex justify-between py-2 text-red-600">
                  <span>Domingos e Feriados:</span>
                  <span className="font-medium">Fechado</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/como-chegar"
                  className="flex-1 min-h-11 flex items-center justify-center gap-2 bg-primary hover:bg-yellow-400 text-dark font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors shadow-xs"
                >
                  <Navigation size={16} /> Como Chegar (Rotas)
                </Link>
                <a
                  href="tel:+554130827282"
                  className="min-h-11 flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-800 font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors"
                >
                  <Phone size={15} /> Ligar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social e Estrutura */}
      <StoreSection />
      <Reviews />

      {/* FAQ com 10 Perguntas Reais */}
      <section className="bg-white py-14 md:py-20 border-t border-gray-200" aria-labelledby="faq-manutencao-titulo">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <header className="mb-10 text-center">
            <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Dúvidas Frequentes</span>
            <h2 id="faq-manutencao-titulo" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic mt-2 text-gray-900">
              Perguntas Sobre <span className="text-primary font-bold">Manutenção Automotiva</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
              Tudo o que você precisa saber sobre os serviços da Carplus no bairro Portão.
            </p>
          </header>

          <div className="flex flex-col divide-y divide-gray-200 border-t border-b border-gray-200">
            {HUB_FAQS.map((faq, idx) => (
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

          <div className="mt-10 p-5 bg-gray-50 rounded-lg border border-gray-200 text-center max-w-2xl mx-auto">
            <HelpCircle size={24} className="mx-auto text-primary mb-2" />
            <h3 className="font-bold text-sm sm:text-base text-gray-900 mb-1">Precisa de um diagnóstico para seu carro?</h3>
            <p className="text-xs text-gray-500 mb-4">
              Envie uma mensagem para nossos técnicos no Portão e tire dúvidas sobre os sintomas do seu veículo.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de falar com um especialista sobre manutenção automotiva na Carplus.')}`}
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
