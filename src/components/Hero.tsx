
import { Star, MapPin, Wrench, Navigation, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex items-center overflow-hidden bg-dark">
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 md:hidden">
        <img 
          src="/images/hero-fachada-carplus.webp" 
          alt="Fachada da Carplus Pneus e Oficina Mecânica no Portão, em Curitiba, ao anoitecer" 
          fetchPriority="high"
          width={1808}
          height={1352}
          className="w-full h-full object-cover object-[65%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" />
      </div>
      
      {/* Background Image - Desktop */}
      <div className="absolute inset-0 hidden md:block">
        <img 
          src="/images/hero-fachada-carplus.webp" 
          alt="Fachada da Carplus Pneus e Oficina Mecânica no Portão, em Curitiba, ao anoitecer" 
          fetchPriority="high"
          width={1808}
          height={1352}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-6 md:pb-24 md:pt-40 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center md:mx-0 md:items-start md:text-left">
          <p className="mb-4 font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
            Carplus Pneus e Oficina · Portão, Curitiba
          </p>
          <h1 className="text-balance text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Oficina Mecânica e Loja de Pneus no Portão
            <span className="mt-2 block text-primary">em Curitiba</span>
          </h1>
          <p className="mt-5 mb-3 max-w-xl text-base md:text-lg text-white/90 leading-relaxed">
            Pneus e oficina no mesmo endereço. Conheça onde seu carro será atendido e fale com a equipe antes de vir.
          </p>
          <p className="mb-6 max-w-xl text-sm text-white/75 leading-relaxed">
            Conte o que seu carro precisa ou informe a medida do pneu para consultar opções e solicitar um orçamento.
          </p>

          <div className="mb-10 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <a
              href="https://wa.me/554130827282?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Carplus%20e%20gostaria%20de%20um%20atendimento%20no%20Port%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2.5 rounded-md bg-[#25D366] hover:bg-[#20bd5a] px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white border border-emerald-500/20 shadow-sm transition-colors sm:min-w-[220px]"
            >
              <MessageSquare size={17} /> Conversar sobre meu carro
            </a>
            <a
              href="tel:+554130827282"
              className="flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white transition-colors sm:min-w-[160px]"
            >
              <Phone size={16} /> (41) 3082-7282
            </a>
            <Link
              to="/como-chegar"
              className="flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary hover:bg-yellow-400 px-5 text-xs sm:text-sm font-bold uppercase tracking-wider text-dark shadow-sm transition-colors sm:min-w-[150px]"
            >
              <Navigation size={16} /> Como Chegar
            </Link>
          </div>

          <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-3 text-left md:grid-cols-4 md:gap-y-6" aria-label="Destaques">
            {[
              { icon: MapPin, text: 'Portão – Curitiba' },
              { icon: Wrench, text: 'Oficina Full Service' },
              { icon: Phone, text: 'Contato direto' },
              { icon: Star, text: 'Montagem e alinhamento' },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 border-l-2 border-primary py-1 pl-3 text-white/85 md:py-2 md:pl-4">
                <item.icon size={16} className="shrink-0 text-primary" />
                <span className="font-accent text-[11px] uppercase leading-tight tracking-wider sm:text-xs">{item.text}</span>
              </li>
            ))}
          </ul>
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
        @keyframes caret {
          0%, 45% { opacity: 1; }
          50%, 95% { opacity: 0; }
          100% { opacity: 1; }
        }
        .animate-caret {
          animation: caret 1s step-end infinite;
        }
      `}</style>
    </section>
  );
}
