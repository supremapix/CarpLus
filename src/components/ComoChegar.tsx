
import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Star, Navigation, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSEO } from '../hooks/useSEO';

const ROTAS = [
  {
    origem: 'Água Verde / Batel',
    tempo: '5–8 min',
    via: 'Av. República Argentina',
    passos: ['Siga pela Av. República Argentina sentido Sul', 'Vire à direita na Rua Carlos Klemtz', 'Continue até a Av. Arthur da Silva Bernardes', 'Carplus no número 1.323, lado direito'],
  },
  {
    origem: 'Centro / Rebouças',
    tempo: '12–15 min',
    via: 'Av. Sete de Setembro',
    passos: ['Siga pela Av. Sete de Setembro sentido Sul/Portão', 'Cruze a Rua João Bettega', 'Vire na Av. Arthur da Silva Bernardes', 'Carplus no número 1.323'],
  },
  {
    origem: 'Campo Comprido / CIC',
    tempo: '8–12 min',
    via: 'Av. Affonso Camargo',
    passos: ['Siga pela Av. Affonso Camargo sentido Leste', 'Entre na Av. República Argentina sentido Sul', 'Vire na Av. Arthur da Silva Bernardes', 'Carplus no número 1.323'],
  },
  {
    origem: 'Shopping Palladium',
    tempo: '3 min',
    via: 'Av. Vereador Toaldo Túlio',
    passos: ['Saia pelo estacionamento Sul do Shopping', 'Entre na Av. Vereador Toaldo Túlio', 'Cruze a Av. República Argentina', 'Carplus na Arthur da Silva Bernardes, 1.323'],
  },
  {
    origem: 'Linha Verde / Cajuru',
    tempo: '15–20 min',
    via: 'Linha Verde → Portão',
    passos: ['Siga pela Linha Verde (BR-116) sentido Sul', 'Saída Portão pela Av. Winston Churchill', 'Entre na Av. Arthur da Silva Bernardes', 'Carplus no número 1.323'],
  },
  {
    origem: 'Região Metropolitana',
    tempo: '25–35 min',
    via: 'BR-476 → Linha Verde',
    passos: ['Siga pela BR-476 (Contorno Sul) sentido Curitiba', 'Acesse a Linha Verde sentido Norte', 'Saída Portão pela Av. Winston Churchill', 'Av. Arthur da Silva Bernardes, 1.323'],
  },
];

const FAQ_ITEMS = [
  { q: 'Qual o endereço exato da Carplus em Curitiba?', a: 'A Carplus Centro Automotivo fica na Av. Presid. Arthur da Silva Bernardes, 1323 – Portão, Curitiba – PR, CEP 80320-300. Referência: próximo ao Shopping Palladium e ao Parque do Barigüi.' },
  { q: 'Tem estacionamento na Carplus?', a: 'Sim! A Carplus tem estacionamento próprio gratuito. Você pode deixar o carro enquanto realizamos o serviço sem preocupação com rotativo ou tempo limitado.' },
  { q: 'Qual o horário de funcionamento da Carplus?', a: 'Atendemos de Segunda a Sexta das 8h às 18h e aos Sábados das 8h às 12h. Domingos e feriados fechado.' },
  { q: 'Como chegar na Carplus vindo do Shopping Palladium?', a: 'Do Shopping Palladium são apenas 3 minutos de carro. Saia pelo acesso Sul, siga pela Av. Vereador Toaldo Túlio, cruze a Av. República Argentina e chegue na Av. Arthur da Silva Bernardes, 1323.' },
  { q: 'A Carplus fica perto do Terminal do Portão?', a: 'O Terminal do Portão fica a aproximadamente 950m da Carplus (cerca de 12 minutos a pé ou 3 minutos de carro).' },
];

export default function ComoChegar() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: 'Carplus Curitiba: Endereço, Como Chegar e Horários',
    description: 'Encontre a Carplus Pneus e Oficina em Curitiba. Veja endereço, rota, horário de atendimento e fale com nossa equipe.',
    canonical: 'https://www.carpluspneuseoficina.com.br/como-chegar',
    ogImage: 'https://www.carpluspneuseoficina.com.br/og-carplus.webp',
    keywords: ['como chegar Carplus', 'oficina Portão Curitiba', 'endereço Carplus Curitiba', 'pneus perto do Shopping Palladium'],
    schemaJSON: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.slice(0, 6).map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-gray-500 mb-6 flex items-center justify-center gap-2">
            <Link to="/" className="hover:text-gray-800 transition-colors">Home</Link>
            <span className="text-gray-300">›</span>
            <span className="text-gray-600">Como Chegar</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-gray-900 leading-none mb-4 italic text-center">
            Carplus Curitiba: <span className="text-primary">endereço e como chegar</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed text-center">
            Consulte endereço, rotas, horários e contatos da Carplus Pneus e Oficina no bairro Portão, em Curitiba.
          </p>
        </div>
      </section>

      {/* Address card */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#242424] border border-white/08 border-l-4 border-l-primary rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
              <MapPin className="text-primary" size={28} />
            </div>
            <div className="flex-1">
              <h2 className="font-display text-xl md:text-2xl font-black text-white mb-1">Av. Presid. Arthur da Silva Bernardes, 1323</h2>
              <p className="text-sm text-white/45">Portão – Curitiba – PR – CEP 80320-300</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7" target="_blank" rel="noopener noreferrer" className="bg-[#4285F4] text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-85 transition-opacity">
                <Navigation size={15} /> Google Maps
              </a>
              <a href="https://ul.waze.com/ul?place=ChIJIwJzFnTj3JQRjCSZqaTtzbI&ll=-25.46364580%2C-49.30029800&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noopener noreferrer" className="bg-[#33CCFF] text-black px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-85 transition-opacity">
                🔵 Waze
              </a>
              <a href="https://wa.me/554130827282" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-85 transition-opacity">
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Info grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: <Clock size={20} className="text-primary" />, title: 'Seg–Sex', sub: '8h às 18h' },
              { icon: <Clock size={20} className="text-primary" />, title: 'Sábado', sub: '8h às 12h' },
              { icon: <Phone size={20} className="text-primary" />, title: 'Telefone', sub: '(41) 3082-7282', href: 'tel:+554130827282' },
              { icon: <Star size={20} className="text-primary" />, title: '4,9/5', sub: '234+ avaliações' },
            ].map((item, i) => (
              <div key={i} className="bg-[#242424] border border-white/06 rounded-xl p-4 flex flex-col items-center text-center gap-1.5">
                {item.icon}
                <strong className="font-display text-base font-black text-white">{item.title}</strong>
                {item.href
                  ? <a href={item.href} className="text-xs text-white/45 hover:text-primary transition-colors">{item.sub}</a>
                  : <span className="text-xs text-white/45">{item.sub}</span>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl" style={{ height: 420 }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.240580658666!2d-49.30287292373215!3d-25.46364093422533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce31ec1ad6641%3A0xa51067e0d7b484af!2sCarplus%20Pneus%20e%20Oficina%20Mec%C3%A2nica!5e0!3m2!1spt-BR!2sbr!4v1779235735934!5m2!1spt-BR!2sbr"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* Routes */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter text-gray-900 text-center mb-12 italic">
            Como Chegar de <span className="text-primary">Carro</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ROTAS.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#1a1a1a] border border-white/07 border-t-2 border-t-primary rounded-xl p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-display font-black text-white text-base leading-tight">{r.origem}</span>
                  <span className="bg-primary/15 text-primary text-[11px] font-bold px-2 py-0.5 rounded whitespace-nowrap shrink-0">⏱ {r.tempo}</span>
                </div>
                <span className="text-[#FFD600] text-xs font-semibold">Via: {r.via}</span>
                <ol className="space-y-1.5">
                  {r.passos.map((p, j) => (
                    <li key={j} className="text-xs text-white/55 leading-relaxed flex gap-2">
                      <span className="w-4 h-4 bg-primary text-black rounded-full text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">{j + 1}</span>
                      {p}
                    </li>
                  ))}
                </ol>
                <a
                  href={`https://www.google.com/maps/dir/${encodeURIComponent(r.origem + ', Curitiba, PR')}/Carplus+Auto+Center,+Av.+Arthur+da+Silva+Bernardes,+1323,+Portão,+Curitiba`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-xs text-white/40 border border-white/10 rounded-lg px-3 py-2 flex items-center justify-center gap-2 hover:bg-primary hover:text-black hover:border-primary transition-all font-bold"
                >
                  <Navigation size={13} /> Traçar rota
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parking */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#FFD600]/10 border border-[#FFD600]/40 rounded-2xl p-6 flex items-center gap-5">
            <span className="text-4xl shrink-0">🅿️</span>
            <div>
              <h3 className="font-display text-xl font-black text-gray-900 mb-1">Estacionamento Gratuito</h3>
              <p className="text-sm text-gray-600 leading-relaxed">A Carplus possui espaço próprio para você deixar o carro enquanto o serviço é realizado. Sem preocupações com estacionamento rotativo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tighter text-gray-900 text-center mb-10 italic">
            Dúvidas sobre <span className="text-primary">Localização</span>
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className="bg-[#1a1a1a] border border-white/07 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-bold text-white text-sm break-words">{item.q}</span>
                  {openFaq === i ? <ChevronUp size={16} className="text-primary shrink-0" /> : <ChevronDown size={16} className="text-white/40 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-white/55 leading-relaxed border-t border-white/05 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
