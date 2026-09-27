import { Link } from 'react-router-dom';
import {
  Crosshair,
  Disc3,
  ShieldAlert,
  Sliders,
  Droplets,
  Cpu,
  ArrowRight,
  MessageSquare,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import SectionTitle from './SectionTitle';

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

const CORE_SERVICES = [
  {
    id: 'alinhamento-3d',
    title: 'Alinhamento 3D',
    slug: 'alinhamento-3d',
    icon: Crosshair,
    description: 'Equipamento 3D de alta precisão. Corrige volante torto e evita desgaste irregular dos pneus.',
    highlight: 'Hunter 3D de alta precisão',
    time: '30–40 min',
  },
  {
    id: 'balanceamento',
    title: 'Balanceamento de Rodas',
    slug: 'alinhamento-e-balanceamento',
    icon: Disc3,
    description: 'Elimina trepidações e vibrações no volante em médias e altas velocidades, protegendo a suspensão.',
    highlight: 'Digital dinâmico 4 rodas',
    time: '20–30 min',
  },
  {
    id: 'freios',
    title: 'Manutenção de Freios',
    slug: 'manutencao-de-freios',
    icon: ShieldAlert,
    description: 'Troca de pastilhas, discos, fluido DOT4 e revisão completa com diagnóstico antes do orçamento.',
    highlight: 'Peças com nota fiscal e garantia',
    time: '45–90 min',
  },
  {
    id: 'suspensao',
    title: 'Suspensão e Direção',
    slug: 'revisao-de-suspensao',
    icon: Sliders,
    description: 'Troca de amortecedores, buchas, pivôs, terminais, cambagem e caster para estabilidade total.',
    highlight: 'Diagnóstico detalhado sem surpresas',
    time: '1–3 horas',
  },
  {
    id: 'troca-oleo',
    title: 'Troca de Óleo e Filtros',
    slug: 'troca-de-oleo',
    icon: Droplets,
    description: 'Óleos sintéticos, semissintéticos e minerais com homologação de fábrica e troca de filtros.',
    highlight: 'Mobil, Shell Helix, Castrol',
    time: '30–45 min',
  },
  {
    id: 'scanner',
    title: 'Diagnóstico com Scanner',
    slug: 'diagnostico-eletronico',
    icon: Cpu,
    description: 'Scanner profissional para leitura de injeção, reset de luzes de painel, módulos ABS e airbag.',
    highlight: 'Multiprotocolo nacionais e importados',
    time: '30–50 min',
  },
];

export default function HomeServicesCompact() {
  return (
    <section id="servicos" className="py-14 md:py-20 bg-white" aria-labelledby="home-servicos-titulo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-sm inline-block mb-3 border border-primary/20">
              Oficina Especializada · Portão, Curitiba
            </span>
            <div id="home-servicos-titulo">
              <SectionTitle prefix="SERVIÇOS" highlight="MECÂNICOS" className="!mb-3 md:!text-left" />
            </div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Mecânica de confiança com orçamento transparente, diagnóstico prévio e garantia em todas as peças e serviços.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/servicos"
              className="flex min-h-11 items-center justify-center gap-2 bg-dark hover:bg-black text-white px-5 rounded-md font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-sm"
            >
              Ver todos os serviços
              <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/554130827282?text=Olá! Gostaria de agendar uma avaliação mecânica na Carplus."
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-5 rounded-md font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors border border-emerald-500/20 shadow-sm"
            >
              <MessageSquare size={15} />
              Agendar avaliação
            </a>
          </div>
        </div>

        {/* Services Grid (Compact 6 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-12">
          {CORE_SERVICES.map((serv) => {
            const Icon = serv.icon;
            const waMsg = `Olá! Gostaria de agendar o serviço de *${serv.title}* na Carplus Portão.`;
            const waUrl = `https://wa.me/554130827282?text=${encodeURIComponent(waMsg)}`;

            return (
              <div
                key={serv.id}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:bg-white hover:border-primary/60 transition-colors flex flex-col justify-between group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-md bg-white border border-gray-200 flex items-center justify-center text-dark group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-colors shadow-xs">
                      <Icon size={20} />
                    </div>
                    <span className="text-[11px] font-bold text-gray-500 bg-white border border-gray-200 px-2 py-0.5 rounded-sm">
                      ⏱ {serv.time}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 tracking-tight group-hover:text-primary transition-colors">
                    <Link to={`/servico/${serv.slug}`} className="hover:underline">
                      {serv.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {serv.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-700 mb-5 bg-white/70 p-2 rounded-md border border-gray-200/60">
                    <CheckCircle2 size={14} className="text-green-600 shrink-0" />
                    <span className="truncate">{serv.highlight}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200/70 flex items-center justify-between gap-3">
                  <Link
                    to={`/servico/${serv.slug}`}
                    className="text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-primary flex items-center gap-1 transition-colors"
                  >
                    Ver detalhes <ArrowRight size={13} />
                  </Link>

                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-[#25D366] hover:text-green-700 flex items-center gap-1 transition-colors"
                  >
                    <MessageSquare size={13} /> Agendar
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Semantic GEO & Local Coverage Card (Critical for SEO & Local LLMs) */}
        <div className="bg-dark text-white rounded-lg p-6 sm:p-8 md:p-10 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
              <MapPin size={16} />
              <span>Unidade Única no Portão, Curitiba</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold mb-2">
              Av. Presidente Arthur da Silva Bernardes, 1323 – Portão, Curitiba
            </h4>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
              Localização com fácil acesso para moradores do Portão e bairros próximos como{' '}
              {BAIRROS_PROXIMOS.slice(0, -1).join(', ')} e {BAIRROS_PROXIMOS.at(-1)}. Estacionamento gratuito para clientes.
            </p>
            <div className="flex flex-wrap gap-1.5" aria-label="Bairros atendidos">
              {BAIRROS_PROXIMOS.map((b) => (
                <span
                  key={b}
                  className="text-[11px] font-medium text-white/80 bg-white/10 px-2.5 py-0.5 rounded-sm border border-white/10"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <Link
              to="/como-chegar"
              className="flex min-h-11 items-center justify-center gap-2 bg-primary hover:bg-yellow-400 text-black px-6 rounded-md font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
            >
              Como Chegar
            </Link>
            <Link
              to="/centro-automotivo-portao"
              className="flex min-h-11 items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white px-5 rounded-md font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors"
            >
              Sobre a Oficina
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
