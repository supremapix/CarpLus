
import { motion } from 'motion/react';
import { Star, MapPin, CreditCard, Wrench, Navigation, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/images/hero-pneus.png" 
          alt="Carplus Pneus - Loja de Pneus em Curitiba" 
          className="w-full h-full object-cover object-[50%_center] md:object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-dark via-dark/90 md:via-dark/70 to-dark/60 md:to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-36 pb-24 md:pt-40 md:pb-28">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl text-white mb-2 leading-[1.0] font-bold text-center md:text-left">
            PNEUS <span className="text-primary">EM CURITIBA</span>
          </h1>
          <h2 className="text-sm sm:text-base md:text-3xl text-white font-display font-bold uppercase tracking-tight mb-8 text-center md:text-left">
            OFICINA MECÂNICA <span className="text-primary italic">FULL SERVICE</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-10 max-w-xl font-medium text-center md:text-left mx-auto md:mx-0">
            Pneus das melhores marcas a partir de R$ 269,00 à vista! Parcelamento em até 10x sem juros. Atendemos toda Curitiba e Região.
          </p>

          <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7"
              target="_blank"
              className="bg-white hover:bg-gray-100 text-dark px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all uppercase tracking-tight shadow-md"
            >
              <Navigation size={16} /> Ir até o Portão
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="tel:+554130827282"
              className="bg-surface hover:bg-gray-700 text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all uppercase tracking-tight border border-white/10"
            >
              <Phone size={16} /> Ligar
            </motion.a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3 md:gap-y-6 mt-14 md:mt-6 mb-8 md:mb-0">
            {[
              { icon: Star, text: 'Referência em Curitiba' },
              { icon: MapPin, text: 'Portão – Curitiba' },
              { icon: CreditCard, text: 'Pneus em até 10x' },
              { icon: Wrench, text: 'Full Service' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/80 border-l border-primary pl-4 py-1 md:py-2">
                <item.icon size={18} className="text-primary" />
                <span className="text-xs font-accent uppercase tracking-widest leading-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Brand Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-dark/50 backdrop-blur-md py-4 overflow-hidden border-t border-white/5">
        <div className="flex gap-12 whitespace-nowrap animate-infinite-scroll">
          {Array(4).fill(['PIRELLI', 'MICHELIN', 'GOODYEAR', 'CONTINENTAL', 'FIRESTONE', 'BRIDGESTONE', 'YOKOHAMA', 'PRINX', 'DELINTE']).flat().map((brand, i) => (
            <span key={i} className="text-white/30 font-display text-2xl md:text-3xl font-bold tracking-tighter opacity-50 px-2 select-none italic">
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
          animation: infinite-scroll 18s linear infinite;
        }
      `}</style>
    </section>
  );
}
