import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { MessageSquare, Phone, Navigation, ChevronRight, CircleCheck as CheckCircle2, ShieldCheck, Clock, Award, Star, ArrowLeft, CarFront, Share2, Copy, Check, MapPin } from 'lucide-react';
import { TIRES, Tire, NEIGHBORHOODS } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';
import TireFAQ from './TireFAQ';
import TireTips from './TireTips';
import { useEffect, useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { generateProductSchema, generateBreadcrumbSchema } from '../lib/schema';
import { getTireReview } from '../data/tireReviews';
import { decideTireIndexing, getCanonicalSlug } from '../lib/seoIndexing';
import TireSeoContent from './TireSeoContent';
import { BUILD_DATE_ISO, buildDatePtBR } from '../lib/buildInfo';

export default function TireDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const tire = TIRES.find(t => t && t.slug === slug);
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/pneus');
    }
  };

  const shareUrl = `https://www.carpluspneuseoficina.com.br/pneu/${slug}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
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
          title: tire.nome,
          text: `Confira o pneu ${tire.nome} na Carplus Centro Automotivo em Curitiba!`,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error
        setShowShareMenu(true);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };

  const BASE_URL = "https://www.carpluspneuseoficina.com.br";

  // Data da última revisão de conteúdo — determinística (baked no build).
  // ISO para schema, formato PT-BR para exibição. Evita hydration mismatch.
  const modifiedISO = BUILD_DATE_ISO;
  const lastUpdated = buildDatePtBR();

  // Decisão de indexação inteligente: variantes equivalentes recebem canonical
  // para a URL principal do grupo + noindex,follow. A página canônica é indexada.
  const indexDecision = tire ? decideTireIndexing(tire) : null;

  // Avaliações e preço reais (quando cadastrados). Sem dados → schema sem rating/preço.
  const review = tire ? getTireReview(tire.slug) : undefined;

  // Gera schema de produto otimizado para Rich Snippets
  const productSchema = tire
    ? generateProductSchema({
        name: tire.nome,
        description: tire.descricao,
        image: [
          `${BASE_URL}${tire.imagemGrande}`,
          `${BASE_URL}${tire.imagem}`,
        ],
        sku: tire.slug,
        brand: tire.marca,
        availability: "InStock",
        url: `${BASE_URL}/pneu/${getCanonicalSlug(tire.slug)}`,
        dateModified: modifiedISO,
        // AggregateRating + Offer com preço são incluídos apenas quando há dados reais
        ...(review && {
          ratingValue: review.ratingValue,
          reviewCount: review.reviewCount,
          price: review.price,
          reviews: review.reviews,
        }),
      })
    : null;

  // Gera schema de breadcrumb
  const breadcrumbSchema = tire
    ? generateBreadcrumbSchema([
        { name: "Home", url: BASE_URL },
        { name: "Pneus", url: `${BASE_URL}/pneus` },
        { name: tire.marca, url: `${BASE_URL}/pneus?marca=${tire.marca.toLowerCase()}` },
        { name: tire.nome, url: `${BASE_URL}/pneu/${tire.slug}` },
      ])
    : null;

  useSEO(
    tire
      ? {
          title: `${tire.nome} em Curitiba | Carplus Centro Automotivo – Portao`,
          description: `Compre ${tire.nome} (medida ${tire.medida}) na Carplus em Curitiba. Montagem inclusa, parcelamento em ate 10x sem juros, garantia de fabrica. Ligue: (41) 3082-7282.`,
          canonical: indexDecision?.canonicalUrl ?? `${BASE_URL}/pneu/${tire.slug}`,
          noindex: indexDecision ? !indexDecision.index : false,
          ogImage: tire.imagemGrande,
          ogType: 'product',
          schemaJSON: [productSchema, breadcrumbSchema].filter(Boolean),
        }
      : { title: 'Pneu nao encontrado | Carplus', description: 'Pneu nao encontrado.', noindex: true }
  );

  useEffect(() => {}, []);

  if (!tire) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 pt-24 md:pt-28">
        <Navbar />
        <div className="text-center">
            <h1 className="text-4xl font-bold uppercase mb-4">Pneu não encontrado</h1>
            <p className="text-gray-500 mb-8">O modelo que você procura não consta em nosso catálogo digital ou foi removido.</p>
            <Link to="/pneus" className="bg-primary text-black px-7 py-3 rounded-full font-bold uppercase tracking-widest text-sm">Ver Catálogo Completo</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedTires = TIRES.filter(t => t && t.aro === tire.aro && t.id !== tire.id).slice(0, 4);

  const whatsappMsg = `Olá! Vi no site o pneu *${tire.nome}* (Medida: ${tire.medida}). Gostaria de consultar o preço e disponibilidade para meu carro.`;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        {/* Back & Share Buttons */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="uppercase tracking-widest text-xs">Voltar</span>
          </button>

          <div className="relative">
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all"
            >
              <Share2 size={16} />
              <span className="hidden sm:inline">Compartilhar</span>
            </button>

            {showShareMenu && (
              <div className="absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 min-w-[280px]">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Compartilhar este pneu</p>
                
                <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-3 mb-3">
                  <input 
                    type="text" 
                    value={shareUrl} 
                    readOnly 
                    className="flex-1 bg-transparent text-xs text-gray-600 outline-none truncate"
                  />
                  <button
                    onClick={handleCopyLink}
                    className={`p-2 rounded-lg transition-all ${copied ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'}`}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Confira o pneu ${tire?.nome} na Carplus: ${shareUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-green-600 transition-colors"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1877F2] text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    Facebook
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Confira o pneu ${tire?.nome} na Carplus Centro Automotivo!`)}&url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors"
                  >
                    X / Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
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
        <nav className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2">
            <Link to="/" className="hover:text-black">Home</Link>
            <ChevronRight size={12} />
            <Link to="/pneus" className="hover:text-black">Pneus</Link>
            <ChevronRight size={12} />
            <Link to={`/pneus?marca=${tire.marca.toLowerCase()}`} className="hover:text-black">{tire.marca}</Link>
            <ChevronRight size={12} />
            <span className="text-black">{tire.nome}</span>
        </nav>

        <section className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-gray-100 mb-12">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                
                {/* Product Image */}
                <div className="lg:w-1/2">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative overflow-visible group flex justify-center items-center py-10"
                    >
                        <div className="absolute top-0 left-0 z-10 flex flex-col gap-3">
                            {tire.destaque && (
                                <span className="bg-primary text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase flex items-center gap-2 shadow-xl">
                                    <Star size={14} fill="currentColor" /> Destaque
                                </span>
                            )}
                            {tire.novoModelo && (
                                <span className="bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                                    Lançamento
                                </span>
                            )}
                        </div>
                        <motion.img 
                            src={tire.imagemGrande} 
                            alt={tire.nome}
                            width={600}
                            height={600}
                            className="w-full h-[300px] md:h-[500px] object-contain relative z-10 [mix-blend-mode:multiply] group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-transparent pointer-events-none" />
                    </motion.div>
                </div>

                {/* Product Info */}
                <div className="lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="bg-black text-white px-4 py-1 rounded-lg text-xs font-bold uppercase tracking-widest">{tire.marca}</span>
                            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase italic">Aro {tire.aro}</span>
                            <span className="bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase italic tracking-tighter">{tire.categoria}</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-tight italic leading-tight">
                            {tire.nome}
                        </h1>

                        <p className="text-lg text-gray-600 mb-4 leading-relaxed font-medium">
                            {tire.descricao}
                        </p>

                        <p className="text-[11px] text-gray-400 font-medium mb-8">
                            Última atualização: {lastUpdated}.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-gray-50 p-4 rounded-2xl">
                                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Medida</span>
                                <span className="text-lg font-bold text-black italic">{tire.medida}</span>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl">
                                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Índice Carga</span>
                                <span className="text-lg font-bold text-black italic">{tire.indiceCarga}</span>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-2xl">
                                <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Velocidade</span>
                                <span className="text-lg font-bold text-black italic">{tire.indiceVelocidade}</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                             <motion.a 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href={`https://wa.me/554130827282?text=${encodeURIComponent(whatsappMsg)}`}
                                target="_blank"
                                className="flex-grow flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-full font-bold text-base hover:bg-green-600 transition-all shadow-2xl shadow-green-200"
                             >
                                <MessageSquare size={24} /> Orçamento no WhatsApp
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

                        <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
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

        {/* Technical Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {/* Specs Table */}
            <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl">
                 <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase italic tracking-tight leading-snug flex items-center gap-3">
                    <Award className="text-primary" size={32} /> Especificações Técnicas
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                    {[
                        { label: 'Marca', value: tire.marca },
                        { label: 'Linha', value: tire.linha },
                        { label: 'Medida', value: tire.medida },
                        { label: 'Aro', value: `${tire.aro}"` },
                        { label: 'Largura', value: `${tire.largura}mm` },
                        { label: 'Perfil', value: `${tire.perfil}%` },
                        { label: 'Índice de Carga', value: tire.indiceCarga },
                        { label: 'Índice de Velocidade', value: tire.indiceVelocidade },
                        { label: 'Categoria', value: tire.categoria }
                    ].map((spec, i) => (
                        <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0 md:last:border-b">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{spec.label}</span>
                            <span className="font-bold text-black">{spec.value}</span>
                        </div>
                    ))}
                 </div>
            </div>

            {/* Compatible Cars */}
            <div className="bg-dark text-white rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                    <CarFront size={120} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 uppercase italic tracking-tight leading-snug relative z-10">Carros <br/> Compatíveis</h2>
                <div className="space-y-3 relative z-10">
                    {tire.carros.map((car, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all cursor-default group">
                            <div className="bg-primary text-black p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                                <CheckCircle2 size={14} />
                            </div>
                            <span className="font-bold text-sm tracking-tight">{car}</span>
                        </div>
                    ))}
                </div>
                <p className="mt-8 text-[10px] text-white/40 uppercase font-bold tracking-widest italic leading-relaxed">
                    * Verifique sempre a medida correta no manual do proprietário ou na lateral do seu pneu atual.
                </p>
            </div>
        </div>

        {/* Why Buy Carplus */}
        <section className="bg-primary rounded-[2.5rem] p-10 md:p-20 mb-20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img loading="lazy"
                    src="/images/loja/oficina-mecanica-portao-curitiba.png"
                    width={1200}
                    height={801}
                    className="w-full h-full object-cover grayscale"
                    alt="Oficina Carplus no Portão em Curitiba"
                />
            </div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase tracking-normal italic leading-snug text-black">
                   Por que comprar na Carplus Portão?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    {[
                        "Montagem e balanceamento gratuitos",
                        "Parcelamento em até 10x sem juros",
                        "Garantia oficial de fábrica",
                        "Instalação rápida (agendada)",
                        "Atendimento Especializado em Curitiba",
                        "⭐ 4.9/5 estrelas no Google Maps"
                    ].map((item, i) => (
                        <div key={i} className="bg-black/5 p-5 rounded-2xl flex items-center gap-4 border border-black/10">
                            <div className="bg-black text-primary p-2 rounded-xl flex-shrink-0">
                                <CheckCircle2 size={20} />
                            </div>
                            <span className="font-bold text-black uppercase tracking-tighter leading-none">{item}</span>
                        </div>
                    ))}
                </div>
                
                <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="mt-12 inline-block max-w-full"
                >
                    <a 
                        href="https://wa.me/554130827282"
                        target="_blank"
                        className="bg-black text-white px-6 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl hover:bg-gray-900 transition-all flex items-center justify-center gap-3 w-full sm:w-auto"
                    >
                         Sair com Pneus Novos Agora <MessageSquare />
                    </a>
                </motion.div>
            </div>
        </section>

        {/* Conteúdo programático premium + linkagem interna contextual */}
        <TireSeoContent tire={tire} />

        {/* Tips Section */}
        <TireTips tireName={tire.nome} categoria={tire.categoria} />

        {/* FAQ Section */}
        <TireFAQ tire={tire} />

        {/* Related Products */}
        {relatedTires.length > 0 && (
            <section className="mb-20 px-4">
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight italic leading-snug">
                        Outras Opções <span className="text-primary italic">Aro {tire.aro}</span>
                    </h2>
                    <Link to="/pneus" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2">
                        Ver Tudo <ArrowLeft size={14} className="rotate-180" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {relatedTires.map(t => (
                        <Link 
                            key={t.id}
                            to={`/pneu/${t.slug}`}
                            className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary transition-all group"
                        >
                            <div className="relative mb-6 overflow-visible flex items-center justify-center p-4">
                <img loading="lazy"
                    src={t.imagem}
                    alt={t.nome}
                    width={600}
                    height={600}
                    className="h-32 object-contain group-hover:scale-110 transition-transform duration-500 [mix-blend-mode:multiply]"
                />
                            </div>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block">{t.marca}</span>
                            <h3 className="font-bold uppercase tracking-tighter mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                                {t.nome}
                            </h3>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-bold text-gray-400 italic">Disponível</span>
                                <ChevronRight className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all" size={20} />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        )}

        {/* Bairros e Cidades Atendidas - SEO Internal Linking */}
        <section className="mb-20 px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Entrega</span>
              <div className="w-12 h-1 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-dark">
              Entregamos <span className="text-primary italic">{tire.nome}</span> em Toda Curitiba
            </h2>
            <p className="text-gray-500 mt-4">Atendemos todos os bairros e cidades da região metropolitana</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {NEIGHBORHOODS.slice(0, 24).map((neighborhood) => {
              const neighborhoodSlug = neighborhood.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
              return (
                <Link 
                  key={neighborhood.name}
                  to={`/bairro/${neighborhoodSlug}`}
                  className="bg-gray-50 hover:bg-primary/10 border border-gray-100 hover:border-primary/30 rounded-xl p-3 transition-all group text-center"
                >
                  <div className="flex items-center justify-center gap-2">
                    <MapPin size={14} className="text-primary flex-shrink-0" />
                    <span className="text-sm font-medium text-dark group-hover:text-primary transition-colors truncate">{neighborhood.name}</span>
                  </div>
                  <span className="text-[10px] text-gray-400">{neighborhood.tempo}</span>
                </Link>
              );
            })}
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/como-chegar"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Ver todos os bairros atendidos <ChevronRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
