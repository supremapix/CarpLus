
import { useParams, Link } from 'react-router-dom';
import { NEIGHBORHOODS } from '../data';
import { Navigation, ArrowLeft, Clock, MapPin, MessageSquare, Star, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useSEO } from '../hooks/useSEO';

export default function NeighborhoodDetail() {
  const { slug } = useParams();
  const bairro = NEIGHBORHOODS.find(n =>
    n.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-') === slug
    || n.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  const slugForUrl = bairro
    ? bairro.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')
    : slug;

  useSEO(
    bairro
      ? {
          title: `Loja de Pneus e Oficina para ${bairro.name} – Curitiba | Carplus Auto Center`,
          description: `Moradores do ${bairro.name} encontram na Carplus os melhores pneus Pirelli, Michelin e Goodyear. A apenas ${bairro.tempo} de você, no Portão. Ligue: (41) 3082-7282.`,
          canonical: `https://carpluscwb.com.br/bairro/${slugForUrl}`,
          ogImage: 'https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-em-curitiba.webp',
          schemaJSON: [
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Carplus Auto Center",
              "description": `Loja de pneus e oficina em Curitiba, próxima ao ${bairro.name}. Pneus Pirelli, Michelin, Goodyear. Alinhamento 3D, troca de óleo e revisão completa.`,
              "url": `https://carpluscwb.com.br/bairro/${slugForUrl}`,
              "telephone": "+55-41-3082-7282",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Arthur da Silva Bernardes, 1323",
                "addressLocality": "Curitiba",
                "addressRegion": "PR",
                "postalCode": "81070-010",
                "addressCountry": "BR"
              },
              "geo": { "@type": "GeoCoordinates", "latitude": -25.4770, "longitude": -49.2845 },
              "areaServed": [
                { "@type": "City", "name": "Curitiba" },
                { "@type": "Neighborhood", "name": bairro.name }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://carpluscwb.com.br/" },
                { "@type": "ListItem", "position": 2, "name": "Bairros", "item": "https://carpluscwb.com.br/#bairros" },
                { "@type": "ListItem", "position": 3, "name": bairro.name, "item": `https://carpluscwb.com.br/bairro/${slugForUrl}` }
              ]
            }
          ]
        }
      : { title: 'Bairro não encontrado | Carplus', description: 'Bairro não encontrado.' }
  );

  if (!bairro) return <div>Bairro não encontrado</div>;

  const carplusPos: [number, number] = [-25.4770, -49.2845];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main>
        {/* Sub-Hero */}
        <section className="relative min-h-[520px] flex flex-col justify-end bg-dark text-white overflow-hidden">
           <div className="absolute inset-0">
              <img
                src="https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-em-curitiba.webp"
                className="w-full h-full object-cover"
                alt="Curitiba"
              />
              <div className="absolute inset-0 bg-black/60" />
           </div>

           <div className="max-w-7xl mx-auto px-4 relative z-10 w-full pt-32 pb-24">
              <Link to="/#bairros" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-8 hover:gap-4 transition-all">
                 <ArrowLeft size={16} /> Voltar para lista
              </Link>
              
              <h1 className="text-5xl md:text-8xl mb-4 leading-none">Pneus e Oficina <br /> para o <span className="text-primary italic">{bairro.name}</span></h1>
              <p className="text-xl md:text-3xl text-white/60 font-light mb-12">Estamos a apenas <span className="text-white font-bold">{bairro.tempo}</span> de você!</p>

              <div className="flex flex-wrap gap-4">
                 <a
                  href={`https://wa.me/554130827282?text=Olá! Estou no ${bairro.name} e preciso de pneu/oficina`}
                  className="bg-primary text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-yellow-500 transition-all shadow-lg shadow-primary/30 uppercase tracking-tight"
                 >
                    <MessageSquare size={17} /> Pedir Orçamento
                 </a>
                 <a
                  href={`https://www.google.com/maps/dir/${bairro.name},+Curitiba/Carplus+Auto+Center`}
                  target="_blank"
                  className="bg-white text-dark px-6 py-3 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-gray-100 transition-all shadow-md uppercase tracking-tight"
                 >
                    <Navigation size={17} /> Ver Rota no Maps
                 </a>
              </div>
           </div>
        </section>

        {/* Info Grid */}
        <section className="py-24 max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl mb-8">Como chegar do <span className="text-primary italic">{bairro.name}</span></h2>
                 <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                   Moradores do {bairro.name} têm na Carplus a sua melhor opção de custo-benefício em Curitiba. 
                   A rota principal é via <span className="font-bold text-dark">{bairro.via}</span>, garantindo um trajeto rápido de aproximadamente {bairro.tempo} sem complicações.
                 </p>

                 <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-3xl">
                       <Clock className="text-primary mt-1" />
                       <div>
                          <p className="font-bold text-lg mb-1">Tempo Estimado</p>
                          <p className="text-gray-500">Apenas {bairro.tempo} de carro em fluxo normal.</p>
                       </div>
                    </div>
                    <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-3xl">
                       <MapPin className="text-primary mt-1" />
                       <div>
                          <p className="font-bold text-lg mb-1">Rota Inteligente</p>
                          <p className="text-gray-500">Acesso facilitado pelas principais vias arteriais da região.</p>
                       </div>
                    </div>
                 </div>

                 <img 
                    src="https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-pirelli.webp" 
                    className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" 
                    alt="Carplus Portão" 
                 />
              </div>

              {/* Mini Map */}
              <div className="h-[600px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-100 relative">
                 <MapContainer center={carplusPos} zoom={13} className="h-full w-full">
                    <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
                    <Marker position={carplusPos} icon={L.divIcon({ html: `<div style="background:#FAB115;color:black;padding:5px 10px;border-radius:5px;font-weight:bold;font-size:10px;white-space:nowrap;">🔧 CARPLUS</div>`, className: '' })} />
                    <Marker position={[bairro.lat, bairro.lng]} icon={L.divIcon({ html: `<div style="background:#00C853;color:white;padding:5px 10px;border-radius:5px;font-weight:bold;font-size:10px;white-space:nowrap;">📍 VOCÊ</div>`, className: '' })} />
                 </MapContainer>
                 <div className="absolute bottom-8 left-8 right-8 z-[1000] bg-white p-6 rounded-2xl shadow-xl">
                    <p className="font-bold mb-2">Ponto de Referência no Portão:</p>
                    <p className="text-sm text-gray-500 italic">Estamos localizados próximos à Av. Arthur da Silva Bernardes, fácil acesso para quem vem do {bairro.name}.</p>
                 </div>
              </div>
           </div>
        </section>

        {/* Services for region */}
        <section className="py-24 bg-gray-50">
           <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-4xl mb-12">Por que moradores do {bairro.name} escolhem a Carplus?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                    { title: 'Preço de Atacado', desc: 'Preços competitivos em pneus Pirelli, Michelin e Goodyear.' },
                    { title: 'Precisão no Alinhamento', desc: 'Equipamento 3D de última geração para evitar desgaste irregular.' },
                    { title: 'Atendimento Rápido', desc: 'Sabemos que seu tempo é precioso. Agilidade sem abrir mão da qualidade.' }
                 ].map((box, i) => (
                    <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100">
                       <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                          <Star size={32} />
                       </div>
                       <h3 className="text-2xl font-bold mb-4">{box.title}</h3>
                       <p className="text-gray-500 leading-relaxed">{box.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* Reviews Section */}
        <section className="py-24 bg-white max-w-4xl mx-auto px-4">
           <div className="text-center mb-16">
              <h2 className="text-4xl mb-4 italic">Quem mora no <span className="text-primary">{bairro.name}</span> aprova!</h2>
              <div className="flex justify-center gap-1 text-accent mb-2">
                 {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
              </div>
              <p className="text-gray-400 font-bold">4.9/5 estrelas no Google Maps</p>
           </div>

           <div className="space-y-6">
              {[
                { name: 'Ricardo S.', text: `Moro no ${bairro.name} e não troco a Carplus por nada. Atendimento honesto e rápido.` },
                { name: 'Fernanda A.', text: `Sempre trago meu carro aqui no Portão. São apenas alguns minutos de casa e o preço dos pneus é excelente.` }
              ].map((rev, i) => (
                <div key={i} className="p-8 bg-gray-50 rounded-3xl flex gap-6">
                   <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-gray-300">#</div>
                   <div>
                      <p className="font-bold mb-2">{rev.name}</p>
                      <p className="text-gray-600 italic">"{rev.text}"</p>
                      <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-gray-400 mt-4 tracking-widest">
                         <MapPin size={10} /> {bairro.name}, Curitiba
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
