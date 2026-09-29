import { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Home, 
  Disc3, 
  Wrench, 
  Search, 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare, 
  ChevronRight, 
  ChevronDown,
  Navigation,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import TrustBar from './TrustBar';
import { useSEO } from '../hooks/useSEO';
import { WHATSAPP_NUMBER, PHONE_DISPLAY, ADDRESS_FULL } from '../data/seoLanding';

const RECOMMENDED_LINKS = [
  { label: 'Página Inicial', path: '/' },
  { label: 'Todos os Serviços', path: '/servicos' },
  { label: 'Manutenção Automotiva no Portão', path: '/manutencao-automotiva-curitiba' },
  { label: 'Pneus em Curitiba', path: '/pneus-curitiba' },
  { label: 'Catálogo de Pneus', path: '/catalogo' },
  { label: 'Como Chegar (Rotas)', path: '/como-chegar' },
];

const POPULAR_SIZES = [
  { label: '195/55R15', path: '/pneu-medida/195-55r15' },
  { label: '205/55R16', path: '/pneu-medida/205-55r16' },
  { label: '175/70R14', path: '/pneu-medida/175-70r14' },
  { label: '185/60R15', path: '/pneu-medida/185-60r15' },
  { label: '185/65R15', path: '/pneu-medida/185-65r15' },
  { label: '195/60R15', path: '/pneu-medida/195-60r15' },
  { label: '225/45R17', path: '/pneu-medida/225-45r17' },
  { label: '215/50R17', path: '/pneu-medida/215-50r17' },
];

const MAIN_SECTIONS = [
  {
    icon: Disc3,
    title: 'Pneus em Curitiba',
    description: 'Catálogo completo do aro 13 ao aro 22 com marcas consagradas (Pirelli, Michelin, Goodyear, Continental, Bridgestone) e montagem no Portão.',
    link: '/pneus-curitiba',
    ctaText: 'Ver Pneus em Curitiba'
  },
  {
    icon: Wrench,
    title: 'Manutenção Automotiva',
    description: 'Oficina mecânica especializada: scanner automotivo, alinhamento 3D, balanceamento, revisão de freios, suspensão e troca de óleo com laudo prévio.',
    link: '/manutencao-automotiva-curitiba',
    ctaText: 'Ver Serviços Automotivos'
  },
  {
    icon: MapPin,
    title: 'Oficina no Portão, Curitiba',
    description: `${ADDRESS_FULL}. Acesso fácil com vagas para clientes em frente à loja para atendimento ágil e sem complicação.`,
    link: '/como-chegar',
    ctaText: 'Como Chegar na Loja'
  },
  {
    icon: MessageSquare,
    title: 'Atendimento via WhatsApp',
    description: 'Consulte medidas disponíveis em estoque, tire dúvidas sobre serviços mecânicos e solicite seu orçamento sem compromisso.',
    link: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Estava navegando na Carplus e gostaria de tirar uma dúvida sobre pneus e serviços.')}`,
    isExternal: true,
    ctaText: 'Falar no WhatsApp'
  }
];

const FAQ_ITEMS = [
  {
    q: 'Onde fica a Carplus Pneus e Oficina?',
    a: `Estamos localizados na ${ADDRESS_FULL}. Ponto de acesso fácil com vagas para clientes em frente à loja, atendendo motoristas do Portão, Água Verde, Vila Izabel, Novo Mundo, Santa Quitéria, Fazendinha e toda Curitiba.`
  },
  {
    q: 'Qual o horário de funcionamento?',
    a: 'Atendemos de segunda a sexta-feira das 08h às 18h e aos sábados das 08h às 12h. Domingos e feriados: fechado.'
  },
  {
    q: 'Quais marcas e medidas de pneus vocês vendem?',
    a: 'Trabalhamos com marcas líderes consolidadas como Michelin, Pirelli, Goodyear, Continental, Bridgestone, Firestone e Yokohama, com medidas do aro 13 ao aro 22 para carros de passeio, SUVs e utilitários.'
  },
  {
    q: 'Quais serviços a oficina realiza no local?',
    a: 'Oficina mecânica e centro automotivo completo: montagem de pneus, balanceamento dinâmico, alinhamento 3D computadorizado, scanner eletrônico multiprotocolo, revisão de freios, suspensão, amortecedores e troca de óleo com filtros homologados.'
  },
  {
    q: 'Como solicitar um orçamento ou tirar dúvidas?',
    a: `Você pode falar diretamente com nossa equipe técnica pelo WhatsApp ${PHONE_DISPLAY}, ligar no fixo da loja ou comparecer presencialmente. Nota fiscal e garantia conforme serviço/produto.`
  }
];

export default function NotFound() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  useSEO({
    title: 'Página não encontrada | Carplus Pneus e Oficina',
    description: 'A página que você procura não foi encontrada. Conheça nosso catálogo de pneus novos e serviços de manutenção automotiva no bairro Portão em Curitiba.',
    noindex: true
  });

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (query) {
      navigate(`/pneus?q=${encodeURIComponent(query)}`);
    } else {
      navigate('/pneus');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-primary selection:text-black">
      <Navbar />

      <main className="flex-1">
        {/* Hero 404 Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-dark text-white overflow-hidden border-b border-white/10" aria-labelledby="h1-404">
          {/* Imagem de fundo sutil da loja */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <img 
              src="/images/hero-fachada-carplus.webp" 
              alt="Carplus Pneus e Oficina no Portão Curitiba"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 md:px-6 text-center z-10">
            {/* Logo oficial da Carplus */}
            <div className="mb-6 flex justify-center">
              <Link to="/" className="inline-block transition-transform hover:scale-105 duration-200">
                <img 
                  src="/images/logos/logo-horizontal.svg" 
                  alt="Carplus Pneus e Oficina Mecânica"
                  width={1182}
                  height={168}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain mx-auto"
                />
              </Link>
            </div>

            {/* Badge de status */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-sm mb-4">
              <span>Erro 404</span>
              <span className="text-white/40">•</span>
              <span>Página não encontrada</span>
            </div>

            <h1 id="h1-404" className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight italic mb-4 text-balance">
              Ops, essa página não foi encontrada
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 font-normal leading-relaxed text-pretty">
              O endereço pode ter mudado ou sido digitado incorretamente. Você ainda pode acessar os principais serviços da Carplus no Portão, em Curitiba.
            </p>

            {/* Barra de busca rápida */}
            <div className="max-w-xl mx-auto mb-8">
              <form onSubmit={handleSearch} className="relative flex items-center">
                <div className="relative flex-1">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Buscar por medida (ex: 205/55R16), marca ou serviço..."
                    className="w-full pl-11 pr-4 py-3.5 bg-white text-gray-900 rounded-l-md text-xs sm:text-sm font-medium placeholder-gray-500 focus:outline-hidden focus:ring-2 focus:ring-primary shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-yellow-400 text-gray-900 font-bold px-5 sm:px-6 py-3.5 rounded-r-md text-xs sm:text-sm uppercase tracking-wider transition-colors shrink-0 shadow-sm cursor-pointer"
                >
                  Buscar
                </button>
              </form>
            </div>

            {/* 5 Botões Obrigatórios com Hierarquia Visual Impecável */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-primary hover:bg-yellow-400 text-gray-900 font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors shadow-sm"
              >
                <Home size={16} />
                <span>Voltar para início</span>
              </Link>
              <Link
                to="/manutencao-automotiva-curitiba"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors"
              >
                <Wrench size={16} />
                <span>Ver serviços automotivos</span>
              </Link>
              <Link
                to="/pneus-curitiba"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors"
              >
                <Disc3 size={16} />
                <span>Ver pneus em Curitiba</span>
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre serviços e pneus na Carplus Portão.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors shadow-sm border border-emerald-500/20"
              >
                <MessageSquare size={16} />
                <span>Falar no WhatsApp</span>
              </a>
              <Link
                to="/como-chegar"
                className="inline-flex min-h-11 items-center justify-center gap-2 bg-white/5 hover:bg-white/15 border border-white/15 text-white/90 font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors"
              >
                <Navigation size={16} />
                <span>Como chegar</span>
              </Link>
            </div>
          </div>
        </section>

        {/* TrustBar Institucional (4.9 ★ no Google / Mais de 250 avaliações de clientes) */}
        <TrustBar variant="light" />

        {/* Links Recomendados e Acesso Rápido */}
        <section className="py-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">Links Recomendados</span>
                <h3 className="font-bold text-sm sm:text-base text-gray-900">Acesse Diretamente as Principais Páginas:</h3>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-end gap-2">
                {RECOMMENDED_LINKS.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-xs font-semibold bg-white border border-gray-200 hover:border-primary text-gray-700 hover:text-primary px-3 py-1.5 rounded-md transition-colors shadow-2xs"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Medidas Populares */}
        <section className="py-6 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Catálogo Rápido</span>
                <h4 className="font-bold text-xs sm:text-sm text-gray-800">Medidas de Pneus em Destaque:</h4>
              </div>
              <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
                {POPULAR_SIZES.map((size) => (
                  <Link
                    key={size.label}
                    to={size.path}
                    className="text-xs font-semibold bg-gray-50 border border-gray-200 hover:border-primary text-gray-600 hover:text-primary px-2.5 py-1 rounded transition-colors"
                  >
                    {size.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Grade de Seções Principais da Empresa */}
        <section className="py-14 md:py-20 bg-gray-50" aria-labelledby="principais-destinos">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <header className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Navegação</span>
              <h2 id="principais-destinos" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight italic mt-2 text-gray-900">
                O Que Você Procura na <span className="text-primary font-bold">Carplus</span>?
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
                Selecione abaixo para ir direto aos setores mais procurados da nossa loja e centro automotivo no Portão.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {MAIN_SECTIONS.map((sec, idx) => {
                const Icon = sec.icon;
                const isExt = sec.isExternal;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col justify-between hover:border-primary/60 hover:shadow-md transition-all group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-md bg-primary/10 text-gray-900 group-hover:bg-primary group-hover:text-black transition-colors flex items-center justify-center mb-4">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                        {sec.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                        {sec.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      {isExt ? (
                        <a
                          href={sec.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-tight transition-colors"
                        >
                          <span>{sec.ctaText}</span>
                          <ArrowRight size={14} />
                        </a>
                      ) : (
                        <Link
                          to={sec.link}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-900 hover:text-primary uppercase tracking-tight transition-colors"
                        >
                          <span>{sec.ctaText}</span>
                          <ChevronRight size={14} className="text-primary" />
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Card de Contato Direto & Localização */}
        <section className="py-12 bg-white border-t border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                {/* Telefone e WhatsApp */}
                <div className="flex items-start gap-4 pt-4 md:pt-0">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Atendimento Imediato</span>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 mt-0.5">{PHONE_DISPLAY}</h4>
                    <p className="text-xs text-gray-500 mt-1">WhatsApp e ligações com nossa equipe técnica.</p>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 mt-2"
                    >
                      <span>Conversar no WhatsApp</span>
                      <ChevronRight size={13} />
                    </a>
                  </div>
                </div>

                {/* Localização */}
                <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Endereço no Portão</span>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 mt-0.5">Av. Pres. Arthur Bernardes, 1323</h4>
                    <p className="text-xs text-gray-500 mt-1">Bairro Portão, Curitiba – PR. Vagas para clientes em frente à loja.</p>
                    <Link
                      to="/como-chegar"
                      className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-800 mt-2"
                    >
                      <Navigation size={12} />
                      <span>Ver mapa e rotas</span>
                    </Link>
                  </div>
                </div>

                {/* Horários */}
                <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-6">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Horário de Funcionamento</span>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 mt-0.5">Seg a Sex: 08h às 18h</h4>
                    <p className="text-xs text-gray-500 mt-1">Sábados das 08h às 12h. Atendimento ágil.</p>
                    <span className="inline-block text-[11px] font-medium text-gray-400 mt-2">
                      Domingos e feriados: fechado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Perguntas Frequentes */}
        <section className="py-14 md:py-20 bg-gray-50" aria-labelledby="faq-404-titulo">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <header className="text-center mb-10">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.15em]">Dúvidas Rápidas</span>
              <h2 id="faq-404-titulo" className="text-2xl sm:text-3xl font-black uppercase tracking-tight italic mt-2 text-gray-900">
                Perguntas Frequentes
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-gray-500">
                Informações práticas sobre a loja e centro automotivo Carplus.
              </p>
            </header>

            <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {FAQ_ITEMS.map((item, idx) => (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-gray-900 hover:text-primary transition-colors cursor-pointer py-1"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-primary shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="pt-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
