import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MessageSquare,
  Phone,
  ChevronRight,
  ArrowLeft,
  ShieldCheck,
  Clock,
  Award,
  CircleCheck as CheckCircle2,
  Tag,
  Truck,
  CreditCard,
  MapPin,
  Car,
  Share2,
  Copy,
  Check,
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSEO } from '../hooks/useSEO';
import { generateProductSchema, generateBreadcrumbSchema } from '../lib/schema';
import { getPromoTireBySlug, PROMO_TIRES } from '../data/promoTires';

const BASE_URL = 'https://www.carpluspneuseoficina.com.br';
const WHATSAPP_PHONE = '554130827282';

export default function PneuPromocaoDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const tire = getPromoTireBySlug(slug);

  const pageUrl = `${BASE_URL}/pneu-promocao/${slug}`;

  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = pageUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share && tire) {
      try {
        await navigator.share({
          title: `${tire.marca} ${tire.medida}`,
          text: `Confira o pneu ${tire.marca} ${tire.nome} em promoção na Carplus Auto Center em Curitiba!`,
          url: pageUrl,
        });
      } catch {
        setShowShareMenu(true);
      }
    } else {
      setShowShareMenu((prev) => !prev);
    }
  };

  // FAQ específico do produto (gera FAQPage schema + conteúdo visível)
  const faqs = tire
    ? [
        {
          q: `Qual o preço do pneu ${tire.marca} ${tire.medida} em Curitiba?`,
          a: `O pneu ${tire.marca} ${tire.nome} está em promoção a partir de ${tire.preco} na Carplus Auto Center, no bairro Portão em Curitiba. Solicite seu orçamento atualizado pelo WhatsApp (41) 3082-7282.`,
        },
        {
          q: `A montagem e o balanceamento estão inclusos?`,
          a: `Sim. Na Carplus a montagem, o balanceamento e a calibragem são realizados por técnicos certificados, com a roda pronta em cerca de 40 minutos.`,
        },
        {
          q: `O pneu ${tire.marca} ${tire.medida} tem garantia?`,
          a: `Sim, todos os pneus possuem garantia de fábrica contra defeitos de fabricação, além do suporte completo da equipe Carplus em Curitiba.`,
        },
        {
          q: `Posso parcelar a compra do pneu ${tire.marca}?`,
          a: `Sim. Você pode parcelar em até 10x sem juros no cartão de crédito. Consulte as condições no WhatsApp ou diretamente na loja no Portão.`,
        },
        ...(tire.carros.length
          ? [
              {
                q: `Quais carros usam o pneu ${tire.medida}?`,
                a: `A medida ${tire.medida} é compatível com modelos populares como ${tire.carros.slice(0, 6).join(', ')}, entre outros. Confira a especificação na lateral do seu pneu atual ou consulte a equipe Carplus pelo WhatsApp (41) 3082-7282.`,
              },
            ]
          : []),
      ]
    : [];

  const productSchema = tire
    ? generateProductSchema({
        name: `Pneu ${tire.marca} ${tire.nome}`,
        description: `Pneu ${tire.marca} ${tire.nome}, medida ${tire.medida}, em promoção na Carplus Auto Center no Portão, Curitiba. Montagem, balanceamento e garantia de fábrica inclusos.`,
        image: [tire.imagem],
        sku: tire.slug,
        brand: tire.marca,
        price: tire.precoNumero,
        availability: 'InStock',
        url: pageUrl,
      })
    : null;

  const breadcrumbSchema = tire
    ? generateBreadcrumbSchema([
        { name: 'Home', url: BASE_URL },
        { name: 'Pneus em Promoção', url: `${BASE_URL}/#promocao` },
        { name: `${tire.marca} ${tire.medida}`, url: pageUrl },
      ])
    : null;

  const faqSchema =
    tire && faqs.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }
      : null;

  useSEO(
    tire
      ? {
          title: `Pneu ${tire.marca} ${tire.medida} em Promoção | ${tire.preco} – Carplus Curitiba`,
          description: `Pneu ${tire.marca} ${tire.nome} a partir de ${tire.preco} em Curitiba. Montagem inclusa, parcelamento em até 10x sem juros e garantia de fábrica na Carplus Auto Center, no Portão. WhatsApp: (41) 3082-7282.`,
          canonical: pageUrl,
          ogImage: tire.imagem,
          ogType: 'product',
          keywords: [
            `pneu ${tire.marca}`,
            `pneu ${tire.medida}`,
            `pneu ${tire.marca} curitiba`,
            `pneu aro ${tire.aro} curitiba`,
            'pneu em promoção curitiba',
            'loja de pneus portão curitiba',
            'carplus pneus',
          ],
          schemaJSON: [productSchema, breadcrumbSchema, faqSchema].filter(Boolean),
        }
      : {
          title: 'Pneu não encontrado | Carplus',
          description: 'Esta promoção de pneu não está mais disponível.',
          noindex: true,
        },
  );

  if (!tire) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 pt-24 md:pt-28">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-bold uppercase mb-4">Promoção não encontrada</h1>
          <p className="text-gray-500 mb-8">
            Esta oferta pode ter sido encerrada ou o endereço está incorreto.
          </p>
          <Link
            to="/"
            className="bg-primary text-black px-7 py-3 rounded-full font-bold uppercase tracking-widest text-sm"
          >
            Ver Promoções
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappMsg = `Olá! Vi a *promoção do pneu ${tire.marca} ${tire.nome}* (medida ${tire.medida}) por ${tire.preco}. Gostaria de garantir esse preço.\n\nOrigem do contato: ${pageUrl}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMsg)}`;

  const related = PROMO_TIRES.filter((t) => t.slug !== tire.slug && (t.aro === tire.aro || t.marca === tire.marca)).slice(0, 4);
  const relatedFallback = PROMO_TIRES.filter((t) => t.slug !== tire.slug).slice(0, 4);
  const relatedTires = related.length ? related : relatedFallback;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Voltar & Compartilhar */}
        <div className="mb-6 flex items-center justify-between">
          <button
            onClick={() => (window.history.length > 2 ? navigate(-1) : navigate('/'))}
            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest text-xs">Voltar</span>
          </button>

          <div className="relative">
            <button
              onClick={handleShare}
              aria-label="Compartilhar este pneu"
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
            >
              <Share2 size={16} />
              <span className="hidden sm:inline">Compartilhar</span>
            </button>

            {showShareMenu && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 min-w-[280px]">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  Compartilhar este pneu
                </p>

                <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3 mb-3">
                  <input
                    type="text"
                    value={pageUrl}
                    readOnly
                    className="flex-1 bg-transparent text-xs text-gray-600 outline-none truncate"
                  />
                  <button
                    onClick={handleCopyLink}
                    aria-label="Copiar link"
                    className={`p-2 rounded-lg transition-all ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'}`}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Confira o pneu ${tire.marca} ${tire.nome} em promoção na Carplus: ${pageUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-green-600 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Confira o pneu ${tire.marca} ${tire.nome} em promoção na Carplus Auto Center!`)}&url=${encodeURIComponent(pageUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors"
                  >
                    X / Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A66C2] text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-blue-800 transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>

                <button
                  onClick={() => setShowShareMenu(false)}
                  className="w-full mt-3 text-xs text-gray-400 hover:text-gray-600 transition-colors"
                >
                  Fechar
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Breadcrumb */}
        <nav
          aria-label="Trilha de navegação"
          className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2"
        >
          <Link to="/" className="hover:text-black">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link to="/#promocao" className="hover:text-black">
            Promoções
          </Link>
          <ChevronRight size={12} />
          <span className="text-black">
            {tire.marca} {tire.medida}
          </span>
        </nav>

        {/* Produto */}
        <section className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-gray-100 mb-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Imagem */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative flex justify-center items-center py-10"
              >
                <span className="absolute top-0 left-0 z-10 bg-primary text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase flex items-center gap-2 shadow-xl">
                  <Tag size={14} fill="currentColor" /> Oferta
                </span>
                <img
                  src={tire.imagem}
                  alt={`Pneu ${tire.marca} ${tire.nome} medida ${tire.medida}`}
                  className="w-full h-[300px] md:h-[460px] object-contain relative z-10 [mix-blend-mode:multiply]"
                />
              </motion.div>
            </div>

            {/* Info */}
            <div className="lg:w-1/2">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="bg-black text-white px-4 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">
                    {tire.marca}
                  </span>
                  <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase">
                    Aro {tire.aro}
                  </span>
                  <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase">
                    {tire.medida}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight italic leading-tight">
                  Pneu {tire.marca} {tire.nome} em Curitiba
                </h1>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                  Pneu {tire.marca} na medida <strong>{tire.medida}</strong> com montagem, balanceamento e garantia de
                  fábrica inclusos. Instalação rápida por técnicos certificados na Carplus Auto Center, no Portão, em
                  Curitiba.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Medida</span>
                    <span className="text-base md:text-lg font-bold text-black italic">{tire.medida}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Carga</span>
                    <span className="text-base md:text-lg font-bold text-black italic">{tire.carga}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Veloc.</span>
                    <span className="text-base md:text-lg font-bold text-black italic">{tire.velocidade}</span>
                  </div>
                </div>

                {/* Preço */}
                <div className="mb-8">
                  <span className="text-gray-400 text-sm font-bold uppercase tracking-widest">A partir de</span>
                  <div className="flex items-end gap-3">
                    <span className="font-accent font-bold text-primary text-5xl md:text-6xl leading-none">
                      {tire.preco}
                    </span>
                    <span className="text-gray-500 text-sm mb-1">ou 10x sem juros</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-full font-bold text-base hover:bg-green-600 transition-all shadow-2xl shadow-green-200"
                  >
                    <MessageSquare size={24} /> Pedir Orçamento
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="tel:+554130827282"
                    className="bg-black text-white px-7 py-4 rounded-full font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-3"
                  >
                    <Phone size={20} /> Ligar
                  </motion.a>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Pronta Entrega no Portão</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-primary" />
                    <span>Garantia de Fábrica</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} className="text-primary" />
                    <span>Montagem em 40 min</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: Truck, t: 'Montagem Inclusa', d: 'Instalação, balanceamento e calibragem por técnicos certificados.' },
            { icon: CreditCard, t: 'Até 10x Sem Juros', d: 'Parcele no cartão de crédito e leve seu pneu hoje mesmo.' },
            { icon: ShieldCheck, t: 'Garantia de Fábrica', d: 'Produtos originais com garantia contra defeitos de fabricação.' },
          ].map((b) => (
            <div key={b.t} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
                <b.icon size={24} />
              </div>
              <h2 className="text-lg font-bold uppercase tracking-tight mb-2">{b.t}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{b.d}</p>
            </div>
          ))}
        </section>

        {/* Carros Compatíveis */}
        {tire.carros.length > 0 && (
          <section id="carros-compativeis" className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-gray-100 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 uppercase italic tracking-tight flex items-center gap-3">
              <Car className="text-primary" size={30} /> Carros compatíveis com o pneu {tire.medida}
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              O pneu <strong>{tire.marca} {tire.medida}</strong> é indicado para os seguintes modelos mais populares no
              Brasil. Em caso de dúvida sobre a medida do seu veículo, fale com a equipe Carplus pelo WhatsApp.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {tire.carros.map((carro) => (
                <li
                  key={carro}
                  className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Car size={18} />
                  </span>
                  <span className="font-bold text-gray-700 text-sm">{carro}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-gray-400 leading-relaxed">
              * Lista de referência com os veículos mais comuns para esta medida. Sempre confira a especificação original
              na lateral do pneu atual ou no manual do seu carro.
            </p>
          </section>
        )}

        {/* Catálogo da marca / catálogo geral */}
        <section className="bg-gray-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold uppercase italic tracking-tight mb-2">
              {tire.temCatalogoMarca
                ? `Veja toda a linha ${tire.marca}`
                : 'Veja o catálogo completo de pneus'}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              {tire.temCatalogoMarca
                ? `Conheça as outras medidas e linhas de pneus ${tire.marca} disponíveis na Carplus em Curitiba.`
                : `Explore todas as marcas e medidas de pneus disponíveis na Carplus, no bairro Portão em Curitiba.`}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              to={tire.catalogoUrl}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-accent font-bold uppercase tracking-wide text-black text-sm transition-colors hover:bg-[#ffae2e]"
            >
              <Tag size={18} strokeWidth={2.5} />
              {tire.temCatalogoMarca ? `Catálogo ${tire.marca}` : 'Catálogo de pneus'}
            </Link>
            <Link
              to="/pneus-promocao"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-accent font-bold uppercase tracking-wide text-white text-sm transition-colors hover:border-primary hover:text-primary"
            >
              Todas as promoções
            </Link>
          </div>
        </section>

        {/* Saiba Mais (conteúdo rico SEO) */}
        <section id="saiba-mais" className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-gray-100 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase italic tracking-tight flex items-center gap-3">
            <Award className="text-primary" size={30} /> Saiba mais sobre o pneu {tire.marca} {tire.medida}
          </h2>
          <div className="prose prose-neutral max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              O pneu <strong>{tire.marca} {tire.nome}</strong> é uma excelente opção de custo-benefício para quem busca
              segurança e economia em Curitiba. Na medida <strong>{tire.medida}</strong> (aro {tire.aro}), ele atende a
              uma ampla variedade de veículos de passeio e está disponível em promoção na Carplus Auto Center, no bairro
              Portão.
            </p>
            <p>
              Com índice de carga <strong>{tire.carga}</strong> e índice de velocidade <strong>{tire.velocidade}</strong>,
              esse modelo oferece aderência em piso seco e molhado, conforto de rodagem e durabilidade no dia a dia da
              cidade e da estrada. Toda compra inclui montagem, balanceamento e calibragem feitos por nossos técnicos
              certificados — com a roda pronta em cerca de 40 minutos.
            </p>
            <p>
              Comprando na Carplus você conta com <strong>parcelamento em até 10x sem juros</strong>, garantia de fábrica
              e atendimento especializado. Estamos na Av. Arthur da Silva Bernardes, 1323 — Portão, Curitiba/PR,
              atendendo todos os bairros e região metropolitana.
            </p>
            <p className="flex items-center gap-2 text-sm font-bold text-primary">
              <MapPin size={16} /> Carplus Auto Center — Portão, Curitiba/PR
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase italic tracking-tight text-center">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-black">
                  {f.q}
                  <ChevronRight size={18} className="text-primary transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-gray-500 leading-relaxed text-sm">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-primary rounded-[2.5rem] p-10 md:p-16 mb-16 text-center">
          <h2 className="text-2xl md:text-4xl font-bold uppercase italic text-black mb-4 leading-snug text-balance">
            Garanta o {tire.marca} {tire.medida} por {tire.preco}
          </h2>
          <p className="text-black/70 font-medium mb-8 max-w-xl mx-auto">
            Fale agora com nossa equipe e reserve seu pneu em promoção. Estoque limitado!
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-base hover:bg-gray-900 transition-all"
          >
            <MessageSquare size={22} /> Pedir Orçamento no WhatsApp
          </a>
        </section>

        {/* Relacionados */}
        {relatedTires.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl md:text-2xl font-bold mb-6 uppercase italic tracking-tight">
              Outras promoções de pneus
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedTires.map((rt) => (
                <Link
                  key={rt.slug}
                  to={`/pneu-promocao/${rt.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-primary/60 hover:shadow-lg transition-all"
                >
                  <div className="aspect-square p-4 flex items-center justify-center">
                    <img
                      src={rt.imagem}
                      alt={`Pneu ${rt.marca} ${rt.medida}`}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-4 pt-0">
                    <p className="font-accent font-bold uppercase text-primary text-sm">{rt.marca}</p>
                    <p className="text-gray-500 text-xs leading-snug mb-2 min-h-[2rem]">{rt.nome}</p>
                    <p className="font-accent font-bold text-black text-lg flex items-center gap-1">
                      {rt.preco}
                      <CheckCircle2 size={14} className="text-green-500" />
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
