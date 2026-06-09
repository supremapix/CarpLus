
import { Star, MapPin, CreditCard, Wrench, Navigation, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-dark">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 md:hidden">
        <img 
          src="/images/hero-mobile.webp" 
          alt="Carplus Pneus - Loja de Pneus em Curitiba" 
          fetchPriority="high"
          width={554}
          height={1200}
          className="w-full h-full object-cover object-[30%_top]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />
      </div>
      
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <img 
          src="/images/hero-desktop.webp" 
          alt="Carplus Pneus - Oficina de Pneus em Curitiba" 
          fetchPriority="high"
          width={1920}
          height={685}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-36 pb-24 md:pt-40 md:pb-28">
        <div className="max-w-2xl">
          <h1 className="text-[3.2rem] sm:text-6xl md:text-7xl lg:text-8xl text-white mb-3 leading-[0.95] font-bold text-center md:text-left tracking-tighter">
            PNEUS <br className="md:hidden" /><span className="text-primary">EM CURITIBA</span>
          </h1>
          <h2 className="text-base sm:text-lg md:text-3xl text-white font-display font-bold uppercase tracking-tight mb-6 text-center md:text-left">
            OFICINA MECÂNICA <span className="text-primary italic">FULL SERVICE</span>
          </h2>
          
          <p className="text-[0.95rem] sm:text-base md:text-lg text-white/80 mb-8 max-w-xl font-medium text-center md:text-left mx-auto md:mx-0 leading-relaxed">
            Pneus das melhores marcas com preços a partir de R$ 269,00 à vista. Parcele em até 10x sem juros e conte com atendimento em toda Curitiba e Região.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12 justify-center md:justify-start px-4 sm:px-0">
            <a
              href="https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7"
              target="_blank"
              className="bg-white hover:bg-gray-100 text-dark px-6 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-tight shadow-lg"
            >
              <Navigation size={18} /> Ir até a Carplus
            </a>
            <a
              href="tel:+554130827282"
              className="bg-surface/40 backdrop-blur-sm hover:bg-gray-700 text-white px-6 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-tight border border-white/20"
            >
              <Phone size={18} /> Ligar agora
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 md:gap-y-6 mt-4 md:mt-6">
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
        </div>
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
