import { useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Car, Wrench, Shield, Award, MapPin, Star, BadgeCheck, Clock,
  Phone, ChevronRight, ChevronDown, MessageCircle, CreditCard, FileText,
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  getOficinaMarcaPage,
  OFICINA_MARCA_PAGES,
  OFICINA_DEPOIMENTOS,
  WHATSAPP_NUMBER,
  PHONE_DISPLAY,
  PHONE_TEL,
  ADDRESS_FULL,
  ADDRESS_STREET,
  ADDRESS_POSTAL,
  MAPS_EMBED,
  BASE_URL,
  GEO_LAT,
  GEO_LNG,
  RATING_VALUE,
  REVIEW_COUNT,
  INSTAGRAM_URL,
} from '../data/oficinaMarcas';

interface Props {
  slug: string;
}

// Diferenciais fixos (padrão Carplus).
const DIFERENCIAIS = [
  { icon: BadgeCheck, title: 'Diagnóstico antes do orçamento', description: 'Fazemos o diagnóstico computadorizado com scanner antes de qualquer serviço, para um orçamento preciso.' },
  { icon: Shield, title: 'Garantia em todos os serviços', description: 'Peças de qualidade e nota fiscal em tudo, com garantia em cada atendimento.' },
  { icon: Award, title: 'Nacionais e importados', description: 'Cuidamos de carros nacionais e importados em Curitiba, com diagnóstico antes do orçamento.' },
  { icon: CreditCard, title: 'Até 10x sem juros', description: 'Parcelamos os serviços em até 10x sem juros. Aceitamos cartão, débito, dinheiro e PIX.' },
  { icon: FileText, title: 'Nota fiscal em tudo', description: 'Emitimos nota fiscal de peças e serviços, mantendo a garantia de fábrica do seu veículo.' },
  { icon: Star, title: 'Nota 4,9 no Google', description: 'Mais de 234 avaliações de clientes satisfeitos que confiam na Carplus.' },
];

export default function OficinaMarcaPage({ slug }: Props) {
  const page = getOficinaMarcaPage(slug);
  const [faqAberto, setFaqAberto] = useState<number | null>(0);
  const [problemaAberto, setProblemaAberto] = useState<number | null>(0);

  if (!page) return null;

  const isMarca = page.tipo === 'marca';
  const canonical = `${BASE_URL}/oficina/${page.slug}`;
  const heroImage = '/images/loja/carplus-oficina-portao-fachada-curitiba.jpg';
  const ogImageFull = `${BASE_URL}${heroImage}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(page.whatsappMessage)}`;
  const telHref = `tel:${PHONE_TEL}`;

  // ─── JSON-LD @graph: AutoRepair + Service + FAQPage + BreadcrumbList ───
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['AutoRepair', 'LocalBusiness'],
        '@id': `${BASE_URL}/#autorepair`,
        name: 'Carplus Centro Automotivo',
        alternateName: 'Carplus Pneus e Oficina',
        url: BASE_URL,
        image: ogImageFull,
        telephone: PHONE_TEL,
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS_STREET,
          addressLocality: 'Curitiba',
          addressRegion: 'PR',
          postalCode: ADDRESS_POSTAL,
          addressCountry: 'BR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: GEO_LAT,
          longitude: GEO_LNG,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '08:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '08:00',
            closes: '12:00',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: RATING_VALUE,
          reviewCount: REVIEW_COUNT,
          bestRating: '5',
          worstRating: '1',
        },
        sameAs: [INSTAGRAM_URL],
      },
      {
        '@type': 'Service',
        serviceType: isMarca
          ? `Manutenção e revisão de veículos ${page.marca}`
          : `${page.marca} em Curitiba`,
        provider: { '@id': `${BASE_URL}/#autorepair` },
        areaServed: {
          '@type': 'City',
          name: 'Curitiba e Região Metropolitana',
        },
        url: canonical,
      },
      {
        '@type': 'FAQPage',
        mainEntity: page.faq.map((f) => ({
          '@type': 'Question',
          name: f.pergunta,
          acceptedAnswer: { '@type': 'Answer', text: f.resposta },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${BASE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Oficina', item: `${BASE_URL}/oficina-mecanica-curitiba` },
          { '@type': 'ListItem', position: 3, name: page.h1, item: canonical },
        ],
      },
    ],
  };

  // "Veja também": demais páginas + páginas existentes do site.
  const relacionadas = OFICINA_MARCA_PAGES.filter((p) => p.slug !== page.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-neutral-950">
      <Helmet>
        <title>{page.titleTag}</title>
        <meta name="description" content={page.metaDescription} />
        <meta name="keywords" content={page.keywordsSecundarias.join(', ')} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Curitiba" />
        <meta name="geo.position" content={`${GEO_LAT};${GEO_LNG}`} />
        <link rel="canonical" href={canonical} />

        {/* Open Graph */}
        <meta property="og:title" content={page.titleTag} />
        <meta property="og:description" content={page.metaDescription} />
        <meta property="og:type" content="business.business" />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={ogImageFull} />
        <meta property="og:site_name" content="Carplus Pneus e Oficina" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={page.titleTag} />
        <meta name="twitter:description" content={page.metaDescription} />
        <meta name="twitter:image" content={ogImageFull} />

        <script type="application/ld+json">{JSON.stringify(schemaGraph)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[68vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`${page.h1} - Carplus Centro Automotivo Portão`}
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
            {/* Breadcrumb visual */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
              <Link to="/" className="hover:text-amber-500 transition-colors">Início</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link to="/oficina-mecanica-curitiba" className="hover:text-amber-500 transition-colors">Oficina</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span className="text-amber-500">{page.marca}</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <Wrench className="w-4 h-4 text-amber-500" aria-hidden="true" />
              <span className="text-amber-500 text-sm font-medium">{page.eyebrow}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              {page.h1}
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed text-pretty">
              {page.heroSubtitulo}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Star, label: '4,9 no Google' },
                { icon: Award, label: 'Garantia' },
                { icon: Shield, label: 'Garantia total' },
                { icon: FileText, label: 'Nota fiscal' },
              ].map((b, i) => {
                const Icon = b.icon;
                return (
                  <span key={i} className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1.5 text-sm text-white">
                    <Icon className="w-4 h-4 text-amber-500" aria-hidden="true" />
                    {b.label}
                  </span>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
              >
                <MessageCircle size={20} aria-hidden="true" />
                Falar no WhatsApp
              </a>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-all"
              >
                <Phone size={20} aria-hidden="true" />
                Ligar {PHONE_DISPLAY}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Barra de confiança */}
      <div className="bg-amber-500">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Star, label: '234+ avaliações no Google' },
              { icon: BadgeCheck, label: 'Diagnóstico antes do orçamento' },
              { icon: CreditCard, label: 'Até 10x sem juros' },
              { icon: Clock, label: 'Seg-Sáb' },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center justify-center gap-2 text-black">
                  <Icon className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm font-semibold">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modelos atendidos */}
      <section className="py-16 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-balance">
              {isMarca ? `Modelos ${page.marca} que atendemos` : 'O que atendemos'}
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              {isMarca
                ? `Atendemos toda a linha ${page.marca}, com diagnóstico e peças adequadas para cada modelo.`
                : 'Atendemos todos os tipos e sistemas, com equipamento e diagnóstico adequados.'}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {page.modelosAtendidos.map((modelo, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-2 text-neutral-200"
              >
                <Car className="w-4 h-4 text-amber-500" aria-hidden="true" />
                {modelo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços em destaque */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              {isMarca ? `Serviços em destaque para ${page.marca}` : 'Serviços em destaque'}
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tecnologia, peças de qualidade e garantia em todos os serviços.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {page.servicosDestaque.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50 hover:border-amber-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-amber-500" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{s.titulo}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problemas comuns (accordion) */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              {isMarca
                ? `Problemas comuns em veículos ${page.marca} que resolvemos`
                : 'Problemas comuns que resolvemos'}
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Conheça os casos que mais atendemos e como a Carplus resolve cada um.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {page.problemasComuns.map((item, i) => (
              <div key={i} className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setProblemaAberto(problemaAberto === i ? null : i)}
                  aria-expanded={problemaAberto === i}
                >
                  <span className="text-white font-medium pr-4">{item.problema}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 transition-transform flex-shrink-0 ${problemaAberto === i ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {problemaAberto === i && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-400 leading-relaxed">{item.solucao}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oficina autorizada — alternativa inteligente (apenas marcas) */}
      {isMarca && page.alternativaAutorizada && (
        <section className="py-20 bg-neutral-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-neutral-800/40 rounded-2xl p-8 border border-amber-500/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
                {`Procurando oficina autorizada ${page.marca} mais próxima? Conheça a alternativa inteligente`}
              </h2>
              <p className="text-neutral-300 leading-relaxed text-pretty">{page.alternativaAutorizada}</p>
            </div>
          </div>
        </section>
      )}

      {/* Conteúdo editorial (SEO) */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-neutral-300 leading-relaxed text-pretty mb-10 text-lg">{page.intro}</p>
            <div className="space-y-10">
              {page.secoes.map((sec, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">{sec.titulo}</h2>
                  <p className="text-neutral-300 leading-relaxed text-pretty">{sec.conteudo}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Por que a Carplus (diferenciais) */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Por que escolher a <span className="text-amber-500">Carplus</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              O que torna a Carplus uma referência em oficina especializada em Curitiba.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIFERENCIAIS.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex gap-4 bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50"
                >
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-amber-500" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">{d.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{d.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-neutral-950">
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
              <span className="text-neutral-500">• 234+ avaliações no Google</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFICINA_DEPOIMENTOS.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800"
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

      {/* Como chegar */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Como chegar</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">{ADDRESS_FULL}</p>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-neutral-800">
            <iframe
              title="Mapa da localização da Carplus Centro Automotivo no Portão, Curitiba"
              src={MAPS_EMBED}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="text-center text-neutral-500 text-sm mt-6 max-w-2xl mx-auto">
            Atendemos o Portão e os bairros vizinhos: Água Verde, Novo Mundo, Fazendinha, Vila Izabel, Capão Raso, Santa Quitéria, Lindóia e Seminário.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Perguntas frequentes</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">Tire suas dúvidas sobre a oficina especializada da Carplus.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {page.faq.map((item, i) => (
              <div key={i} className="bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setFaqAberto(faqAberto === i ? null : i)}
                  aria-expanded={faqAberto === i}
                >
                  <span className="text-white font-medium pr-4">{item.pergunta}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 transition-transform flex-shrink-0 ${faqAberto === i ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {faqAberto === i && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-400 leading-relaxed">{item.resposta}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-balance">{page.ctaTitle}</h2>
          <p className="text-black/70 max-w-2xl mx-auto mb-8 text-lg text-pretty">{page.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Falar no WhatsApp
            </a>
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-900 text-white font-bold px-8 py-4 rounded-xl transition-all"
            >
              <Phone size={20} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Veja também (links internos) */}
      <section className="py-16 bg-neutral-950 border-t border-neutral-900">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center text-balance">Veja também</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {relacionadas.map((p) => (
              <Link
                key={p.slug}
                to={`/oficina/${p.slug}`}
                className="flex items-center justify-between bg-neutral-900 rounded-xl p-4 border border-neutral-800 hover:border-amber-500/50 transition-all group"
              >
                <span className="text-neutral-200 group-hover:text-amber-500 transition-colors font-medium">
                  {p.tipo === 'marca' ? `Oficina especializada ${p.marca}` : p.h1}
                </span>
                <ChevronRight className="w-5 h-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/servicos" className="text-amber-500 hover:text-amber-400 font-medium">Todos os serviços</Link>
            <span className="text-neutral-700">•</span>
            <Link to="/pneus" className="text-amber-500 hover:text-amber-400 font-medium">Pneus</Link>
            <span className="text-neutral-700">•</span>
            <Link to="/centro-automotivo-portao" className="text-amber-500 hover:text-amber-400 font-medium">Centro automotivo no Portão</Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Botão flutuante de WhatsApp */}
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
