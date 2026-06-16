import { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Clock, Users, Wrench, Shield, Award, MapPin, Star, BadgeCheck,
  Gauge, Truck, Phone, ChevronRight, ChevronDown, Info, MessageCircle,
  type LucideIcon,
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { generateFaqSchema, generateBreadcrumbSchema } from '../lib/schema';
import {
  getCentroAutomotivoPage,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
  ADDRESS_FULL,
  MAPS_EMBED,
  type IconKey,
} from '../data/centroAutomotivoSeo';

const BASE_URL = 'https://www.carpluspneuseoficina.com.br';

const ICONS: Record<IconKey, LucideIcon> = {
  clock: Clock,
  users: Users,
  wrench: Wrench,
  shield: Shield,
  award: Award,
  mapPin: MapPin,
  star: Star,
  badgeCheck: BadgeCheck,
  gauge: Gauge,
  truck: Truck,
};

interface Props {
  slug: string;
}

export default function CentroAutomotivoSeoPage({ slug }: Props) {
  const page = getCentroAutomotivoPage(slug);
  const [faqAberto, setFaqAberto] = useState<number | null>(0);

  if (!page) return null;

  const canonical = `${BASE_URL}/${page.slug}`;
  const ogImageFull = `${BASE_URL}${page.heroImage}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(page.whatsappMessage)}`;
  const isPertoDeMim = page.slug === 'centro-automotivo-perto-de-mim';

  const schemaFaq = generateFaqSchema(page.faq);
  const schemaBreadcrumb = generateBreadcrumbSchema([
    { name: 'Home', url: `${BASE_URL}/` },
    { name: page.breadcrumbName, url: canonical },
  ]);

  return (
    <div className="min-h-screen bg-neutral-950">
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <meta name="keywords" content={page.keywords.join(', ')} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Curitiba" />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={page.metaTitle} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImageFull} />
        <meta property="og:site_name" content="Carplus Pneus e Oficina" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.metaTitle} />
        <meta name="twitter:description" content={page.metaDescription} />
        <meta name="twitter:image" content={ogImageFull} />

        {/* JSON-LD: FAQPage + BreadcrumbList (LocalBusiness vem da fonte única no index.html) */}
        <script type="application/ld+json">{JSON.stringify(schemaFaq)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[68vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={page.heroImage}
            alt={page.heroImageAlt}
            width={1200}
            height={801}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
              <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-amber-500">{page.breadcrumbName}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-amber-500" aria-hidden="true" />
              <span className="text-amber-500 text-sm font-medium">{page.eyebrow}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              {page.h1}
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed text-pretty">
              {page.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Falar no WhatsApp
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition-all"
              >
                Solicitar Orçamento
                <ChevronRight size={20} aria-hidden="true" />
              </a>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <MapPin className="w-6 h-6 text-amber-500 mb-2" aria-hidden="true" />
                <p className="text-white font-medium text-sm">Av. Pres. Arthur da Silva Bernardes, 1323</p>
                <p className="text-neutral-400 text-sm">Portão, Curitiba - PR</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <Phone className="w-6 h-6 text-amber-500 mb-2" aria-hidden="true" />
                <p className="text-white font-medium text-sm">{PHONE_DISPLAY}</p>
                <p className="text-neutral-400 text-sm">WhatsApp disponível</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <Clock className="w-6 h-6 text-amber-500 mb-2" aria-hidden="true" />
                <p className="text-white font-medium text-sm">Seg-Sex: 8h-18h</p>
                <p className="text-neutral-400 text-sm">Sáb: 8h-13h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Aviso comparativo (páginas alternativa-*) */}
      {page.comparativeNotice && (
        <div className="bg-neutral-900 border-y border-neutral-800">
          <div className="container mx-auto px-4 py-4">
            <p className="flex items-start gap-2 text-sm text-neutral-400 max-w-3xl mx-auto">
              <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>{page.comparativeNotice}</span>
            </p>
          </div>
        </div>
      )}

      {/* Benefícios */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Por que escolher a <span className="text-amber-500">Carplus</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Atendimento rápido, profissionais qualificados e garantia em tudo o que fazemos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {page.benefits.map((b, i) => {
              const Icon = ICONS[b.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50 hover:border-amber-500/30 transition-all"
                >
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-500" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{b.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Serviços do Centro Automotivo
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tudo o que o seu veículo precisa em um só lugar, com tecnologia e garantia.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {page.services.map((s, i) => {
              const Icon = ICONS[s.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={s.link}
                    className="block bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-amber-500/50 transition-all group h-full"
                  >
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
                      <Icon className="w-6 h-6 text-amber-500" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{s.description}</p>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conteúdo editorial (SEO) */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            {page.sections.map((sec, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">{sec.title}</h2>
                <p className="text-neutral-300 leading-relaxed text-pretty">{sec.content}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Nossos Diferenciais</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              O que torna a Carplus uma referência em centro automotivo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {page.differentials.map((d, i) => {
              const Icon = ICONS[d.icon];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4 bg-neutral-900 rounded-2xl p-6 border border-neutral-800"
                >
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-amber-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{d.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{d.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              O que dizem nossos clientes
            </h2>
            <div className="inline-flex items-center gap-2 text-neutral-300">
              <span className="flex" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                ))}
              </span>
              <span className="font-medium">4,9 de 5</span>
              <span className="text-neutral-500">• avaliações no Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50"
              >
                <div className="flex mb-4" aria-label={`${t.rating} de 5 estrelas`}>
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-500" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-neutral-300 text-sm leading-relaxed mb-4">
                  {`"${t.text}"`}
                </blockquote>
                <figcaption className="text-neutral-500 text-sm font-medium">— {t.author}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa (apenas perto-de-mim) */}
      {isPertoDeMim && (
        <section className="py-20 bg-neutral-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Como Chegar</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">{ADDRESS_FULL}</p>
            </div>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-neutral-800">
              <iframe
                title="Mapa da localização do Centro Automotivo Carplus em Curitiba"
                src={MAPS_EMBED}
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Perguntas Frequentes</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Tire suas dúvidas sobre o nosso centro automotivo.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {page.faq.map((item, i) => (
              <div key={i} className="bg-neutral-800/50 rounded-xl border border-neutral-700/50 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setFaqAberto(faqAberto === i ? null : i)}
                  aria-expanded={faqAberto === i}
                >
                  <span className="text-white font-medium pr-4">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 transition-transform flex-shrink-0 ${faqAberto === i ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {faqAberto === i && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-400 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-balance">{page.ctaTitle}</h2>
          <p className="text-black/70 max-w-2xl mx-auto mb-8 text-lg text-pretty">{page.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-900 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              <MessageCircle size={20} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <Link
              to="/como-chegar"
              className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-black font-bold px-8 py-4 rounded-xl transition-all"
            >
              <MapPin size={20} aria-hidden="true" />
              Como Chegar
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Botão flutuante de WhatsApp (mobile e desktop) */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-3 sm:px-5 sm:py-4 rounded-full shadow-lg transition-all hover:scale-105"
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
