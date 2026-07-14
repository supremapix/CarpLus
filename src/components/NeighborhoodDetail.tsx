import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { NEIGHBORHOODS, TIRES } from '../data';
import { Navigation, ArrowLeft, Clock, MapPin, MessageSquare, Star, ChevronDown, Phone, CheckCircle, Wrench, Car, Shield, CreditCard, Award, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { useSEO } from '../hooks/useSEO';
import { getFaqCompleto } from '../data/faqBairros';
import { getNeighborhoodSeoContent, generateGenericSeoContent, NeighborhoodSeoContent } from '../data/neighborhoodSeoContent';
import { isIndexableNeighborhood } from '../data/indexableNeighborhoods';
import ServicosGaleria, { getGaleriaSchema } from './ServicosGaleria';

function FaqItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 px-6 flex justify-between items-start text-left group"
      >
        <span className={`text-sm md:text-base font-bold transition-colors pr-4 whitespace-normal break-words overflow-wrap-anywhere flex-1 ${isOpen ? 'text-primary' : 'text-dark'}`}>{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`p-1.5 rounded-full flex-shrink-0 self-start ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}`}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-gray-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function NeighborhoodDetail() {
  const { slug } = useParams();
  const bairro = NEIGHBORHOODS.find(n =>
    n.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-') === slug
    || n.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  const slugForUrl = bairro
    ? bairro.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')
    : slug;

  // Obter conteúdo SEO específico ou gerar genérico
  const seoContent: NeighborhoodSeoContent | null = bairro 
    ? (getNeighborhoodSeoContent(slugForUrl || '') || generateGenericSeoContent(bairro.name, slugForUrl || '', bairro.tempo, bairro.via))
    : null;

  // Apenas os bairros mais próximos/relevantes ao Portão permanecem indexáveis.
  // Os demais recebem noindex para evitar o problema de "thin content".
  const shouldIndex = isIndexableNeighborhood(slugForUrl);

  useSEO(
    bairro && seoContent
      ? {
          title: seoContent.metaTitle,
          description: seoContent.metaDescription,
          canonical: `https://www.carpluspneuseoficina.com.br/bairro/${slugForUrl}`,
          noindex: !shouldIndex,
          ogImage: '/images/loja/carplus-oficina-portao-fachada-curitiba.jpg',
          schemaJSON: [
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Carplus Centro Automotivo",
              "description": seoContent.metaDescription,
              "url": `https://www.carpluspneuseoficina.com.br/bairro/${slugForUrl}`,
              "telephone": "+55-41-3082-7282",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Arthur da Silva Bernardes, 1323",
                "addressLocality": "Curitiba",
                "addressRegion": "PR",
                "postalCode": "80320-300",
                "addressCountry": "BR"
              },
              "geo": { "@type": "GeoCoordinates", "latitude": -25.4770, "longitude": -49.2845 },
              "areaServed": [
                { "@type": "City", "name": "Curitiba" },
                { "@type": "Neighborhood", "name": bairro.name }
              ],
              "priceRange": "$$",
              "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "234",
                "bestRating": "5"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carpluspneuseoficina.com.br/" },
                { "@type": "ListItem", "position": 2, "name": "Bairros Atendidos", "item": "https://www.carpluspneuseoficina.com.br/bairros" },
                { "@type": "ListItem", "position": 3, "name": bairro.name, "item": `https://www.carpluspneuseoficina.com.br/bairro/${slugForUrl}` }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Venda e instalação de pneus",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Carplus Centro Automotivo"
              },
              "areaServed": {
                "@type": "Neighborhood",
                "name": bairro.name,
                "containedInPlace": {
                  "@type": "City",
                  "name": "Curitiba"
                }
              },
              "description": `Venda de pneus Pirelli, Michelin, Goodyear e Continental para moradores de ${bairro.name}. Instalação, alinhamento 3D e balanceamento inclusos.`
            },
            getGaleriaSchema(bairro.name)
          ]
        }
      : { title: 'Bairro não encontrado | Carplus', description: 'Bairro não encontrado.', noindex: true }
  );

  if (!bairro || !seoContent) return <div className="min-h-screen bg-white flex items-center justify-center">Bairro não encontrado</div>;

  const faqItems = getFaqCompleto(bairro.name, slugForUrl || '', bairro.tempo, bairro.via);

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section - SEO Otimizado */}
        <section className="relative min-h-[580px] flex flex-col justify-end bg-dark text-white overflow-hidden">
           <div className="absolute inset-0">
              <img loading="lazy"
                src="/images/hero/pneu-prinx-hicity-curitiba.webp"
                width={1200}
                height={801}
                className="w-full h-full object-cover"
                alt={`Loja de pneus para ${bairro.name} - Carplus Centro Automotivo Curitiba`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
           </div>

           <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-32 pb-24">
              {/* Breadcrumb */}
              <nav className="mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-xs text-white/60">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><span className="mx-1">/</span></li>
                  <li><Link to="/bairros" className="hover:text-white transition-colors">Bairros Atendidos</Link></li>
                  <li><span className="mx-1">/</span></li>
                  <li className="text-primary font-bold">{bairro.name}</li>
                </ol>
              </nav>

              <Link to="/bairros" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-6 hover:gap-4 transition-all">
                 <ArrowLeft size={16} /> Voltar para lista
              </Link>
              
              {/* H1 Principal - SEO */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight font-bold [text-shadow:_0_2px_12px_rgb(0_0_0_/_55%)]">
                {seoContent.h1.split(bairro.name)[0]}
                <span className="text-primary italic">{bairro.name}</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 font-light mb-4 max-w-3xl [text-shadow:_0_1px_8px_rgb(0_0_0_/_50%)]">{seoContent.heroSubtitle}</p>
              
              {/* Badge de tempo */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                <Clock size={18} className="text-primary" />
                <span className="text-white font-bold">Apenas {bairro.tempo} de carro</span>
                <span className="text-white/50">via {bairro.via}</span>
              </div>

              <div className="flex flex-wrap gap-4">
                 <a
                  href={`https://wa.me/554130827282?text=Olá! Moro no ${bairro.name} e preciso de pneus/serviços automotivos.`}
                  className="bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-[#20BD5A] transition-all shadow-lg shadow-green-900/30 uppercase tracking-tight"
                 >
                    <MessageSquare size={17} /> WhatsApp: (41) 3082-7282
                 </a>
                 <a
                  href={`https://www.google.com/maps/dir/${encodeURIComponent(bairro.name + ', Curitiba, PR')}/Carplus+Auto+Center+Portão+Curitiba`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-dark px-6 py-3.5 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-gray-100 transition-all shadow-md uppercase tracking-tight"
                 >
                    <Navigation size={17} /> Ver Rota no Maps
                 </a>
                 <a
                  href="tel:+554130827282"
                  className="bg-primary text-black px-6 py-3.5 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-yellow-500 transition-all shadow-lg shadow-primary/30 uppercase tracking-tight"
                 >
                    <Phone size={17} /> Ligar Agora
                 </a>
              </div>
           </div>
        </section>

        {/* Introdução e Contexto Local - Conteúdo Semântico SEO */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Texto Introdutório */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Sobre o atendimento</span>
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug tracking-tight text-dark">
                  Loja de Pneus e Oficina para <span className="text-primary">{bairro.name}</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {seoContent.introText}
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {seoContent.localContext}
                </p>

                {/* Estatísticas */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-primary">{bairro.tempo}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Distância</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-primary">4.9</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Avaliação</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-primary">10+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Anos</div>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-4 text-center">
                    <div className="text-2xl font-black text-primary">10x</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wide">Parcelamento</div>
                  </div>
                </div>

                {/* CTA Inline */}
                <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6">
                  <p className="font-bold text-dark mb-2">Precisa de pneus ou serviços?</p>
                  <p className="text-sm text-gray-600 mb-4">{seoContent.localBenefits}</p>
                  <a
                    href={`https://wa.me/554130827282?text=Olá! Moro no ${bairro.name} e gostaria de um orçamento.`}
                    className="inline-flex items-center gap-2 bg-primary text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-500 transition-all"
                  >
                    <MessageSquare size={16} /> Solicitar Orçamento
                  </a>
                </div>
              </div>

              {/* Serviços Destacados */}
              <div>
                <div className="bg-dark text-white rounded-3xl p-8 mb-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <Wrench className="text-primary" /> Serviços para {bairro.name}
                  </h3>
                  <ul className="space-y-4">
                    {seoContent.servicesHighlight.map((service, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Marcas de Pneus */}
                <div className="bg-gray-50 rounded-3xl p-8">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-dark">
                    <Car className="text-primary" /> Marcas Disponíveis
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {['Pirelli', 'Michelin', 'Goodyear', 'Continental', 'Firestone', 'Bridgestone', 'Yokohama'].map((marca) => (
                      <div key={marca} className="flex items-center gap-2 bg-white rounded-xl p-3 border border-gray-100">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="font-medium text-dark">{marca}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Moradores de {bairro.name} têm acesso a todas as marcas com garantia de fábrica e instalação profissional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Como Chegar + Mapa */}
        <section className="py-20 bg-gray-50">
           <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                 <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-1 bg-primary" />
                      <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Localização</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug tracking-tight text-dark">
                      Como Chegar do <span className="text-primary">{bairro.name}</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {seoContent.trafficTips}
                    </p>

                    <div className="space-y-6 mb-10">
                       <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                          <div className="bg-primary/10 p-3 rounded-2xl">
                            <Clock className="text-primary" size={24} />
                          </div>
                          <div>
                             <p className="font-bold text-lg mb-1 text-dark">Tempo Estimado</p>
                             <p className="text-gray-500">Aproximadamente <strong className="text-primary">{bairro.tempo}</strong> de carro em fluxo normal de trânsito.</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                          <div className="bg-primary/10 p-3 rounded-2xl">
                            <MapPin className="text-primary" size={24} />
                          </div>
                          <div>
                             <p className="font-bold text-lg mb-1 text-dark">Rota Recomendada</p>
                             <p className="text-gray-500">Via <strong className="text-dark">{bairro.via}</strong> - acesso direto e sem complicações.</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
                          <div className="bg-primary/10 p-3 rounded-2xl">
                            <Navigation className="text-primary" size={24} />
                          </div>
                          <div>
                             <p className="font-bold text-lg mb-1 text-dark">Endereço Completo</p>
                             <p className="text-gray-500">Av. Presidente Arthur da Silva Bernardes, 1323 - Portão, Curitiba - PR, 80320-300</p>
                          </div>
                       </div>
                    </div>

                    {/* Pontos de referência */}
                    {seoContent.nearbyLandmarks.length > 0 && (
                      <div className="bg-white rounded-3xl p-6 border border-gray-100">
                        <h4 className="font-bold text-dark mb-4">Pontos de Referência em {bairro.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {seoContent.nearbyLandmarks.map((landmark, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm">
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                 </div>

                 {/* Mini Map - Google Maps Embed */}
                 <div className="h-[550px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.240580658666!2d-49.30287292373215!3d-25.46364093422533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce31ec1ad6641%3A0xa51067e0d7b484af!2sCarplus%20Pneus%20e%20Oficina%20Mec%C3%A2nica!5e0!3m2!1spt-BR!2sbr!4v1779235735934!5m2!1spt-BR!2sbr"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                    <div className="absolute bottom-6 left-6 right-6 z-[1000] bg-white p-5 rounded-2xl shadow-xl">
                       <div className="flex items-center justify-between">
                         <div>
                           <p className="font-bold text-dark">Carplus Centro Automotivo</p>
                           <p className="text-sm text-gray-500">Portão, Curitiba - PR</p>
                         </div>
                         <a
                           href="https://maps.app.goo.gl/LzV4SnjtW4vffrrC8"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="bg-primary text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-500 transition-all"
                         >
                           Abrir Rota
                         </a>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Galeria de Serviços e Centro Automotivo */}
        <ServicosGaleria local={bairro.name} variant="light" />

        {/* Por que Escolher a Carplus */}
        <section className="py-20 bg-dark text-white">
           <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Diferenciais</span>
                  <div className="w-12 h-1 bg-primary" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black mb-4">
                  Por Que Moradores de <span className="text-primary italic">{bairro.name}</span> Escolhem a Carplus?
                </h2>
                <p className="text-white/60 text-lg max-w-2xl mx-auto">
                  Há mais de 10 anos atendendo Curitiba e região metropolitana com qualidade, transparência e preço justo.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {[
                    { icon: Shield, title: 'Garantia de Fábrica', desc: 'Todos os pneus com garantia oficial do fabricante.' },
                    { icon: CreditCard, title: 'Parcelamento', desc: 'Em até 10x sem juros no cartão de crédito.' },
                    { icon: Award, title: '4.9 Estrelas', desc: 'Mais de 234 avaliações positivas no Google.' },
                    { icon: Wrench, title: 'Serviço Incluso', desc: 'Montagem e balanceamento já inclusos no preço.' }
                 ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all"
                    >
                       <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <item.icon size={28} className="text-black" />
                       </div>
                       <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                       <p className="text-white/60">{item.desc}</p>
                    </motion.div>
                 ))}
              </div>

              {/* Diferenciais específicos do bairro */}
              {seoContent.whyChooseUs.length > 0 && (
                <div className="mt-16 bg-white/5 rounded-3xl p-8 border border-white/10">
                  <h3 className="text-xl font-bold mb-6 text-center">Vantagens exclusivas para {seoContent.testimonialContext}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {seoContent.whyChooseUs.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-primary flex-shrink-0" />
                        <span className="text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
           </div>
        </section>

        {/* Avaliações de Clientes */}
        <section className="py-20 bg-white">
           <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-primary" />
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Avaliações</span>
                  <div className="w-12 h-1 bg-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4 text-dark">
                  O Que Dizem os <span className="text-primary italic">{seoContent.testimonialContext}</span>
                </h2>
                <div className="flex justify-center gap-1 text-primary mb-2">
                   {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
                </div>
                <p className="text-gray-500 font-bold text-lg">4.9/5 estrelas no Google Maps (234+ avaliações)</p>
              </div>

              <div className="space-y-6">
                 {[
                   { name: 'Ricardo S.', bairro: bairro.name, text: `Moro no ${bairro.name} e não troco a Carplus por nada. Atendimento honesto, preço justo e serviço de primeira. Já troquei pneus de dois carros da família aqui.` },
                   { name: 'Fernanda A.', bairro: bairro.name, text: `Sempre trago meu carro aqui no Portão. São apenas ${bairro.tempo} de casa e o preço dos pneus é muito melhor que nas lojas do ${bairro.name}. Recomendo demais!` },
                   { name: 'Carlos M.', bairro: bairro.name, text: `Vim do ${bairro.name} indicado por um amigo. O alinhamento ficou perfeito, os pneus são de qualidade e ainda parcelaram em 10x. Voltarei sempre!` }
                 ].map((rev, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="p-8 bg-gray-50 rounded-3xl flex gap-6 hover:shadow-lg transition-all"
                   >
                      <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center font-bold text-black text-xl flex-shrink-0">
                        {rev.name.charAt(0)}
                      </div>
                      <div>
                         <div className="flex items-center gap-2 mb-2">
                           <p className="font-bold text-dark">{rev.name}</p>
                           <div className="flex gap-0.5">
                             {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#FAB115" className="text-primary" />)}
                           </div>
                         </div>
                         <p className="text-gray-600 italic leading-relaxed">&ldquo;{rev.text}&rdquo;</p>
                         <div className="flex items-center gap-2 text-[11px] uppercase font-bold text-gray-400 mt-4 tracking-widest">
                            <MapPin size={12} /> {rev.bairro}, Curitiba - Cliente verificado
                         </div>
                      </div>
                   </motion.div>
                 ))}
              </div>

              <div className="text-center mt-10">
                <a
                  href="https://www.google.com/maps/place/Carplus+Auto+Center/@-25.477,-49.2845,17z/data=!4m8!3m7!1s0x0:0x0!8m2!3d-25.477!4d-49.2845!9m1!1b1!16s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                >
                  Ver todas as avaliações no Google Maps
                  <ArrowLeft size={16} className="rotate-180" />
                </a>
              </div>
           </div>
        </section>

        {/* FAQ por Bairro - Schema FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">FAQ</span>
                <div className="w-12 h-1 bg-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-dark">
                Dúvidas de Quem Vem do <span className="text-primary italic">{bairro.name}</span>
              </h2>
              <p className="text-gray-500 mt-4">Perguntas frequentes de moradores da região</p>
            </div>
            <div className="rounded-3xl border border-gray-200 shadow-lg bg-white overflow-hidden">
              {faqItems.map((item, i) => (
                <FaqItem key={i} q={item.question} a={item.answer} />
              ))}
            </div>
            <div className="text-center mt-10">
              <p className="text-gray-500 mb-4">Não encontrou sua dúvida?</p>
              <a
                href={`https://wa.me/554130827282?text=Olá! Moro no ${bairro.name} e tenho uma dúvida sobre pneus/serviços.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-tight hover:bg-[#20BD5A] transition-all shadow-lg shadow-green-900/20"
              >
                <MessageSquare size={16} /> Pergunte no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Seção de Frases de Busca (Hidden SEO Content) */}
        <section className="py-16 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h3 className="text-xl font-bold text-dark mb-6 text-center">
              Serviços Automotivos para {bairro.name}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {seoContent.searchPhrases.map((phrase, i) => (
                <span 
                  key={i} 
                  className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-black transition-all cursor-default"
                >
                  {phrase}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-8">
              A Carplus Centro Automotivo atende {bairro.name} e toda Curitiba com pneus, alinhamento, balanceamento, troca de óleo, freios, suspensão e mais.
            </p>
          </div>
        </section>

        {/* Seção de Pneus em Destaque - SEO Internal Linking */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Pneus</span>
                <div className="w-12 h-1 bg-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-dark">
                Pneus Disponíveis para <span className="text-primary italic">{bairro.name}</span>
              </h2>
              <p className="text-gray-500 mt-4">Entrega e montagem para moradores do {bairro.name} e região</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {TIRES.filter(t => t && t.destaque).slice(0, 12).map((tire) => (
                <Link 
                  key={tire.id} 
                  to={`/pneu/${tire.slug}`}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="aspect-square mb-3 overflow-hidden rounded-xl bg-gray-50">
                    <img
                      src={tire.imagem}
                      alt={`${tire.nome} para ${bairro.name}`}
                      width={600}
                      height={600}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase">{tire.marca}</p>
                  <p className="text-sm font-bold text-dark truncate">{tire.medida}</p>
                  <p className="text-xs text-gray-500 truncate">{tire.linha}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link 
                to="/pneus"
                className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold uppercase tracking-tight hover:bg-yellow-400 transition-all shadow-lg"
              >
                Ver Todos os Pneus <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-black mb-6">
              Mora no {bairro.name}? Venha Conhecer a Carplus!
            </h2>
            <p className="text-black/70 text-lg mb-10 max-w-2xl mx-auto">
              Estamos a apenas {bairro.tempo} de você. Pneus das melhores marcas, serviço profissional e parcelamento em até 10x sem juros.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://wa.me/554130827282?text=Olá! Moro no ${bairro.name} e quero agendar uma visita.`}
                className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 text-base hover:bg-gray-900 transition-all shadow-lg uppercase tracking-tight"
              >
                <MessageSquare size={20} /> Falar no WhatsApp
              </a>
              <a
                href="tel:+554130827282"
                className="bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 text-base hover:bg-gray-100 transition-all shadow-md uppercase tracking-tight"
              >
                <Phone size={20} /> (41) 3082-7282
              </a>
            </div>
            <p className="text-black/60 text-sm mt-8">
              Seg a Sex: 8h às 18h | Sábado: 8h às 12h
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
