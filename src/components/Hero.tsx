
import { motion } from 'motion/react';
import { Star, MapPin, CreditCard, Wrench, MessageSquare, Navigation, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-dark pt-[120px] md:pt-[100px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus.webp" 
          alt="Loja de Pneus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/70 to-primary/20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 text-accent px-4 py-1.5 rounded-full mb-6 font-medium text-sm">
            <Star size={14} fill="currentColor" />
            <span>4,9/5 · 312+ Avaliações Google</span>
          </div>

          <h1 className="text-6xl md:text-8xl text-white mb-2 leading-[0.9] font-bold">
            PNEUS <br />
            <span className="text-primary">EM CURITIBA</span>
          </h1>
          <h2 className="text-xl md:text-4xl text-white font-display font-bold uppercase tracking-tight mb-8">
            OFICINA MECÂNICA <span className="text-primary italic">FULL SERVICE</span>
          </h2>
          
          <p className="text-lg text-white/80 mb-10 max-w-xl font-medium">
            Pneus das melhores marcas a partir de R$ 269,00 à vista! Parcelamento em até 10x sem juros. Atendemos toda Curitiba e Região.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://wa.me/554130827282" 
              className="bg-primary hover:bg-yellow-600 text-black px-6 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all transform uppercase tracking-tighter shadow-lg shadow-primary/30 whitespace-nowrap"
            >
              <MessageSquare size={22} /> Orçamento no WhatsApp
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7" 
              target="_blank"
              className="bg-white hover:bg-gray-100 text-dark px-6 py-4 rounded-xl font-bold text-base flex items-center gap-2 transition-all transform uppercase tracking-tighter shadow-xl"
            >
              <Navigation size={18} /> Ir até o Portão
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+554130827282" 
              className="bg-surface hover:bg-gray-700 text-white px-6 py-4 rounded-xl font-bold text-base flex items-center gap-2 transition-all transform uppercase tracking-widest border border-white/10"
            >
              <Phone size={18} /> Ligar
            </motion.a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Star, text: 'Referência em Curitiba' },
              { icon: MapPin, text: 'Portão – Curitiba' },
              { icon: CreditCard, text: 'Pneus em até 10x' },
              { icon: Wrench, text: 'Full Service' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 border-l border-primary pl-4">
                <item.icon size={18} className="text-primary" />
                <span className="text-xs font-accent uppercase tracking-widest leading-none">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Brand Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-dark/50 backdrop-blur-md py-4 overflow-hidden border-t border-white/5">
        <div className="flex gap-12 whitespace-nowrap animate-infinite-scroll">
          {Array(4).fill(['PIRELLI', 'MICHELIN', 'GOODYEAR', 'CONTINENTAL', 'FIRESTONE', 'BRIDGESTONE']).flat().map((brand, i) => (
            <span key={i} className="text-white/30 font-display text-4xl font-bold tracking-tighter opacity-50 px-2 select-none italic">
              {brand}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
