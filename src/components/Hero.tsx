
import { useEffect, useState } from 'react';
import { Star, MapPin, CreditCard, Wrench, Navigation, Phone } from 'lucide-react';
import { isPrerenderEager } from '../lib/prerender';

// Frases da descrição da Hero — conteúdo real do site (preços, serviços e oficina)
const HERO_PHRASES = [
  'Pneus das melhores marcas a partir de R$ 239,00 à vista, com montagem e balanceamento inclusos e parcelamento em até 10x sem juros.',
  'Oficina Full Service: alinhamento e balanceamento 3D, troca de óleo, freios, suspensão e direção com garantia em todos os serviços.',
  'Referência no Portão, em Curitiba — diagnóstico antes do orçamento, conserto e reforma de rodas e atendimento rápido pelo WhatsApp.',
];

// Palavras que rodam em efeito máquina de escrever antes de "EM CURITIBA"
const TYPEWRITER_WORDS = ['OFICINA', 'PNEUS', 'CENTRO AUTOMOTIVO', 'SERVIÇOS', 'MECÂNICOS DE CONFIANÇA'];

function Typewriter() {
  // Durante a geração estática / hidratação de página pré-renderizada, o h1
  // (conteúdo crítico de SEO) precisa estar COMPLETO e determinístico. Por isso
  // iniciamos com a primeira palavra inteira, em vez de string vazia digitada.
  const eager = isPrerenderEager();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState(eager ? TYPEWRITER_WORDS[0] : '');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // No modo pré-render, não anima: mantém a palavra completa fixa e estável.
    if (isPrerenderEager()) return;

    const currentWord = TYPEWRITER_WORDS[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === currentWord) {
      // Palavra completa: pausa antes de apagar
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === '') {
      // Apagou tudo: avança para a próxima palavra
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
    } else {
      // Digitando ou apagando um caractere
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1),
          );
        },
        deleting ? 55 : 110,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <span className="inline-flex items-center text-primary">
      {text}
      <span className="ml-[0.04em] h-[0.85em] w-[0.06em] bg-primary animate-caret" aria-hidden="true" />
    </span>
  );
}

function HeroPhrasesLoop() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_PHRASES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mb-8 max-w-xl mx-auto md:mx-0 min-h-[6rem] sm:min-h-[5rem] md:min-h-[4.5rem]">
      {HERO_PHRASES.map((phrase, i) => (
        <p
          key={i}
          aria-hidden={i !== index}
          className={`absolute inset-0 text-[0.95rem] sm:text-base md:text-lg text-white/80 font-medium text-center md:text-left leading-relaxed transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {phrase}
        </p>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-dark">
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

      <div className="relative max-w-7xl mx-auto px-4 pt-36 pb-24 md:pt-40 md:pb-28">
        <div className="max-w-2xl">
          {/* H1 semantico da Home: alvo das buscas de alta intencao comercial
              ("loja/distribuidora de pneus em Curitiba com instalacao"). Fica em
              sr-only para NAO alterar o layout nem o efeito maquina de escrever,
              que segue identico logo abaixo como h2. */}
          <h1 className="sr-only">
            Loja e Distribuidora de Pneus em Curitiba com Instalação, Alinhamento e Balanceamento
          </h1>
          <h2 className="text-[3.2rem] sm:text-6xl md:text-7xl lg:text-8xl text-white mb-3 leading-[0.95] font-bold text-center md:text-left tracking-tighter">
            <span className="inline-flex items-center justify-center md:justify-start min-h-[1.1em] w-full">
              <Typewriter />
            </span>
            <br />
            <span className="text-white">EM CURITIBA</span>
          </h2>
          <p className="text-base sm:text-lg md:text-3xl text-white font-display font-bold uppercase tracking-tight mb-6 text-center md:text-left">
            OFICINA MECÂNICA <span className="text-primary italic">FULL SERVICE</span>
          </p>
          
          <HeroPhrasesLoop />

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
