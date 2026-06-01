import { Link } from 'react-router-dom';
import { ChevronRight, Circle, Tag, Car, Ruler, MapPin, MessageSquare, Phone } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSEO } from '../hooks/useSEO';
import { generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema';
import {
  ARO_PAGES,
  BRAND_PAGES,
  VEHICLE_PAGES,
  MEASURE_SEO,
  LOCAL_COMBO_PAGES,
  BASE_URL,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
} from '../data/seoLanding';

function measureToSlug(medida: string): string {
  return medida.toLowerCase().replace(/\//g, '-');
}

const HUB_FAQ = [
  {
    question: 'Onde comprar pneus em Curitiba com montagem inclusa?',
    answer:
      'Na Carplus Auto Center, no bairro Portão, em Curitiba. Trabalhamos com pneus de várias marcas e aros, com montagem, balanceamento e calibragem inclusos e parcelamento em até 10x sem juros.',
  },
  {
    question: 'Quais marcas de pneus a Carplus trabalha?',
    answer:
      'Trabalhamos com marcas como Pirelli, Michelin, Goodyear, Continental e Yokohama, além de outras opções de custo-benefício, cobrindo do aro 13 ao aro 20 e além.',
  },
  {
    question: 'A Carplus faz alinhamento e balanceamento?',
    answer:
      'Sim. Somos uma oficina mecânica completa: alinhamento 3D computadorizado, balanceamento, freios, suspensão, troca de óleo e muito mais, tudo no mesmo lugar, no Portão.',
  },
];

function Section({
  icon: Icon,
  title,
  subtitle,
  children,
}: {
  icon: any;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 border-b-2 border-primary pb-3 mb-6">
        <Icon size={24} className="text-primary" />
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-tighter italic">{title}</h2>
          <p className="text-gray-500 text-sm font-medium">{subtitle}</p>
        </div>
      </div>
      {children}
    </section>
  );
}

export default function PneusCuritibaHub() {
  useSEO({
    title: 'Pneus em Curitiba | Carplus Auto Center – Aros, Marcas e Medidas',
    description:
      'Pneus em Curitiba na Carplus, bairro Portão. Encontre pneus por aro (13 ao 20), por marca (Pirelli, Michelin, Goodyear, Continental, Yokohama), por medida e por veículo. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.',
    canonical: `${BASE_URL}/pneus-curitiba`,
    ogImage: '/images/loja/loja-de-pneus-em-curitiba.webp',
    schemaJSON: [
      generateBreadcrumbSchema([
        { name: 'Home', url: `${BASE_URL}/` },
        { name: 'Pneus Curitiba', url: `${BASE_URL}/pneus-curitiba` },
      ]),
      generateFaqSchema(HUB_FAQ),
    ],
  });

  const linkClass =
    'flex items-center gap-2 bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-700 hover:text-black transition-all';

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <ChevronRight size={12} />
          <span className="text-black">Pneus Curitiba</span>
        </nav>

        {/* Hero */}
        <section className="mb-14">
          <span className="inline-flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" /> Central de Pneus · Curitiba
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter italic leading-none mb-5 text-balance">
            Pneus em <span className="text-primary">Curitiba</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl text-pretty">
            Encontre o pneu ideal para o seu carro por aro, marca, medida ou modelo de veículo. A Carplus fica no bairro
            Portão e oferece montagem, balanceamento e alinhamento no mesmo lugar, com parcelamento em até 10x sem juros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de um orçamento de pneus em Curitiba.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all shadow-2xl shadow-green-200"
            >
              <MessageSquare size={22} /> Orçamento no WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all"
            >
              <Phone size={20} /> {PHONE_DISPLAY}
            </a>
          </div>
        </section>

        {/* Por Aro */}
        <Section icon={Circle} title="Pneus por Aro" subtitle="Do aro 13 ao aro 20">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {ARO_PAGES.map((a) => (
              <Link key={a.slug} to={`/${a.slug}`} className={linkClass}>
                <ChevronRight size={14} className="text-primary" /> Pneu Aro {a.aro}
              </Link>
            ))}
          </div>
        </Section>

        {/* Por Marca */}
        <Section icon={Tag} title="Pneus por Marca" subtitle="Marcas que trabalhamos">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {BRAND_PAGES.map((b) => (
              <Link key={b.slug} to={`/${b.slug}`} className={linkClass}>
                <ChevronRight size={14} className="text-primary" /> {b.marca}
              </Link>
            ))}
          </div>
        </Section>

        {/* Por Medida */}
        <Section icon={Ruler} title="Pneus por Medida" subtitle="As medidas mais procuradas">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {MEASURE_SEO.map((m) => (
              <Link key={m.medida} to={`/pneu-medida/${measureToSlug(m.medida)}`} className={linkClass}>
                <ChevronRight size={14} className="text-primary" /> {m.medida}
              </Link>
            ))}
          </div>
        </Section>

        {/* Por Veículo */}
        <Section icon={Car} title="Pneus por Veículo" subtitle="Modelos populares em Curitiba">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {VEHICLE_PAGES.map((v) => (
              <Link key={v.slug} to={`/${v.slug}`} className={linkClass}>
                <ChevronRight size={14} className="text-primary" /> {v.nome}
              </Link>
            ))}
          </div>
        </Section>

        {/* SEO Local */}
        <Section icon={MapPin} title="Pneus por Região" subtitle="Atendimento no Portão e bairros vizinhos">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {LOCAL_COMBO_PAGES.map((p) => (
              <Link key={p.slug} to={`/${p.slug}`} className={linkClass}>
                <ChevronRight size={14} className="text-primary" /> {p.h1}
              </Link>
            ))}
          </div>
        </Section>

        {/* Catálogo completo */}
        <section className="bg-dark text-white rounded-[2.5rem] p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter italic mb-3">
            Procura uma medida específica?
          </h2>
          <p className="text-white/70 font-medium mb-8 max-w-xl mx-auto">
            Acesse o catálogo completo com filtros por marca, aro e medida, ou fale com nossa equipe técnica gratuitamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pneus"
              className="bg-primary text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all uppercase italic tracking-tighter inline-flex items-center justify-center gap-2"
            >
              Catálogo Completo <ChevronRight />
            </Link>
            <Link
              to="/servicos"
              className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all uppercase italic tracking-tighter inline-flex items-center justify-center gap-2"
            >
              Nossos Serviços <ChevronRight />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
