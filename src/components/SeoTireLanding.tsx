import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronRight,
  ChevronDown,
  MessageSquare,
  Phone,
  ShieldCheck,
  Clock,
  CreditCard,
  Star,
  HelpCircle,
  Target,
  CircleCheck as CheckCircle2,
  MapPin,
} from 'lucide-react';
import type { Tire } from '../data';
import type { FaqItem } from '../data/seoLanding';
import { WHATSAPP_NUMBER, PHONE_DISPLAY, ADDRESS_FULL, BASE_URL, OG_IMAGE } from '../data/seoLanding';
import Navbar from './Navbar';
import Footer from './Footer';
import TireCard from './TireCard';
import { useSEO } from '../hooks/useSEO';
import {
  generateBreadcrumbSchema,
  generateFaqSchema,
} from '../lib/schema';

export interface SeoLandingSection {
  title: string;
  content: string;
}

export interface SeoLandingLink {
  label: string;
  to: string;
}

export interface SeoTireLandingProps {
  badge: string;
  h1: string;
  highlight?: string;
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;
  intro: string;
  tags?: string[];
  sections: SeoLandingSection[];
  tires: Tire[];
  faq: FaqItem[];
  breadcrumb: { name: string; path: string }[];
  relatedLinksTitle?: string;
  relatedLinks: SeoLandingLink[];
  whatsappMsg: string;
}

function FaqAccordion({ faq }: { faq: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="space-y-4">
      {faq.map((item, index) => (
        <div
          key={index}
          className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
            openIndex === index ? 'border-primary bg-primary/5' : 'border-gray-100 hover:border-gray-200'
          }`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-start justify-between p-5 md:p-6 text-left group"
            aria-expanded={openIndex === index}
          >
            <h3
              className={`font-bold text-base md:text-lg pr-4 transition-colors flex-1 ${
                openIndex === index ? 'text-black' : 'text-gray-700 group-hover:text-black'
              }`}
            >
              {item.question}
            </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className={`flex-shrink-0 self-start p-2 rounded-xl transition-colors ${
                openIndex === index ? 'bg-primary text-black' : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
              }`}
            >
              <ChevronDown size={20} />
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <div className="pt-2 border-t border-primary/20">
                    <p className="text-gray-600 leading-relaxed pt-4">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function SeoTireLanding({
  badge,
  h1,
  highlight,
  metaTitle,
  metaDescription,
  canonicalPath,
  intro,
  tags = [],
  sections,
  tires,
  faq,
  breadcrumb,
  relatedLinksTitle = 'Explore também',
  relatedLinks,
  whatsappMsg,
}: SeoTireLandingProps) {
  const displayTires = tires.slice(0, 12);
  const brands = [...new Set(tires.filter((t) => t && t.marca).map((t) => t.marca))];

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: h1,
    description: metaDescription,
    numberOfItems: tires.length,
    itemListElement: displayTires.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: t.nome,
        image: t.imagemGrande || t.imagem,
        brand: { '@type': 'Brand', name: t.marca },
        url: `${BASE_URL}/pneu/${t.slug}`,
      },
    })),
  };

  useSEO({
    title: metaTitle,
    description: metaDescription,
    canonical: `${BASE_URL}${canonicalPath}`,
    ogImage: OG_IMAGE,
    ogType: 'website',
    schemaJSON: [
      itemListSchema,
      generateBreadcrumbSchema(breadcrumb.map((b) => ({ name: b.name, url: `${BASE_URL}${b.path}` }))),
      generateFaqSchema(faq),
    ],
  });

  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

  // H1 com destaque
  let h1Before = h1;
  let h1Highlight = '';
  let h1After = '';
  if (highlight && h1.includes(highlight)) {
    const idx = h1.indexOf(highlight);
    h1Before = h1.slice(0, idx);
    h1Highlight = highlight;
    h1After = h1.slice(idx + highlight.length);
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Breadcrumb */}
        <nav
          aria-label="breadcrumb"
          className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2"
        >
          {breadcrumb.map((b, i) => (
            <span key={b.path} className="flex items-center gap-2">
              {i > 0 && <ChevronRight size={12} />}
              {i < breadcrumb.length - 1 ? (
                <Link to={b.path} className="hover:text-black">
                  {b.name}
                </Link>
              ) : (
                <span className="text-black">{b.name}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Hero */}
        <section className="mb-12">
          <span className="inline-flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5">
            <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            {badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter italic leading-none mb-5 text-balance">
            {highlight ? (
              <>
                {h1Before}
                <span className="text-primary">{h1Highlight}</span>
                {h1After}
              </>
            ) : (
              h1
            )}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl text-pretty">{intro}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* CTA principal */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-green-600 transition-all shadow-2xl shadow-green-200"
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

        {/* Trust badges */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {[
            { icon: CreditCard, title: '10x sem juros', sub: 'Nos pneus' },
            { icon: ShieldCheck, title: 'Garantia total', sub: 'Nota fiscal' },
            { icon: Clock, title: 'Montagem rápida', sub: 'No mesmo dia' },
            { icon: Star, title: '4,9 no Google', sub: '+300 avaliações' },
          ].map((b) => (
            <div key={b.title} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="bg-primary/10 text-primary p-2.5 rounded-xl">
                <b.icon size={22} />
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">{b.title}</p>
                <p className="text-gray-400 text-[11px] uppercase font-bold tracking-widest">{b.sub}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Conteúdo / Seções */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {sections.map((s) => (
            <div key={s.title} className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold uppercase tracking-tighter italic mb-4">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </section>

        {/* Grid de pneus reais do catálogo */}
        {displayTires.length > 0 && (
          <section className="mb-16">
            <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter italic">
                  Modelos <span className="text-primary">disponíveis</span>
                </h2>
                <p className="text-gray-500 font-medium mt-1">
                  {tires.length} {tires.length === 1 ? 'opção encontrada' : 'opções encontradas'} no nosso catálogo
                  {brands.length > 0 && ` · ${brands.slice(0, 5).join(', ')}`}
                </p>
              </div>
              <Link
                to="/pneus"
                className="hidden md:flex items-center gap-2 text-primary font-bold hover:underline uppercase text-sm tracking-tight"
              >
                Ver catálogo completo <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {displayTires.map((tire, index) => (
                <TireCard key={tire.id} tire={tire} index={index} />
              ))}
            </div>
            {tires.length > displayTires.length && (
              <div className="text-center mt-10">
                <Link
                  to="/pneus"
                  className="inline-flex items-center gap-3 bg-dark text-white px-10 py-3.5 rounded-full font-bold hover:bg-black transition-all uppercase italic tracking-tighter"
                >
                  Ver todos os {tires.length} modelos <ChevronRight />
                </Link>
              </div>
            )}
          </section>
        )}

        {/* Relação com alinhamento e balanceamento */}
        <section className="bg-dark text-white rounded-[2.5rem] p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Target size={160} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter italic mb-4">
              Pneu novo pede <span className="text-primary">alinhamento e balanceamento</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Toda troca de pneus na Carplus pode ser combinada com alinhamento 3D computadorizado e balanceamento de
              precisão. Essa combinação evita o desgaste irregular, reduz o consumo de combustível, elimina vibrações no
              volante e prolonga a vida útil do conjunto. Aproveite e faça tudo no mesmo lugar, no bairro Portão.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Alinhamento 3D', to: '/servico/alinhamento-e-balanceamento' },
                { label: 'Balanceamento', to: '/servico/alinhamento-e-balanceamento' },
                { label: 'Montagem de Pneu', to: '/servico/montagem-de-pneu' },
                { label: 'Rodízio de Pneus', to: '/servico/rodizio-de-pneus' },
                { label: 'Cambagem e Caster', to: '/servico/cambagem-e-caster' },
              ].map((s) => (
                <Link
                  key={s.label}
                  to={s.to}
                  className="bg-white/5 border border-white/15 hover:bg-primary hover:text-black hover:border-primary px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2"
                >
                  <CheckCircle2 size={15} /> {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="bg-primary p-3 rounded-2xl">
              <HelpCircle className="text-black" size={28} />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter italic">Perguntas Frequentes</h2>
              <p className="text-gray-500 text-sm font-medium">Tudo o que você precisa saber antes de comprar</p>
            </div>
          </div>
          <FaqAccordion faq={faq} />
        </section>

        {/* Internal Linking */}
        {relatedLinks.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold uppercase tracking-tighter italic mb-6">{relatedLinksTitle}</h2>
            <div className="flex flex-wrap gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 px-5 py-2.5 rounded-full text-sm font-bold text-gray-700 hover:text-black transition-all flex items-center gap-2"
                >
                  <ChevronRight size={14} className="text-primary" /> {link.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Location / Final CTA */}
        <section className="bg-primary rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-black/70 font-bold uppercase tracking-widest text-xs mb-3">
              <MapPin size={16} /> {ADDRESS_FULL}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-black leading-tight uppercase italic">
              Peça seu orçamento agora
            </h2>
            <p className="text-black/70 font-medium mt-2">Atendimento rápido, preço justo e montagem inclusa.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-3 uppercase tracking-tight"
            >
              <MessageSquare size={20} /> WhatsApp
            </a>
            <a
              href={`tel:+${WHATSAPP_NUMBER}`}
              className="bg-black/10 text-black border border-black/10 px-8 py-4 rounded-full font-bold hover:bg-black/20 transition-all flex items-center justify-center gap-3 uppercase tracking-tight"
            >
              <Phone size={20} /> Ligar
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
