
import { useEffect, useState } from 'react';
import { Star, MapPin, CreditCard, Wrench, Navigation, Phone } from 'lucide-react';
import { isPrerenderEager } from '../lib/prerender';

// Frases da descrição da Hero — conteúdo real do site (preços, serviços e oficina)
const HERO_PHRASES = [
  'Centro automotivo completo no Portão, em Curitiba: venda e montagem de pneus, alinhamento 3D, balanceamento, freios e suspensão.',
  'Pneus aro 13 a 22 das principais marcas, com montagem e balanceamento inclusos e parcelamento em até 10x sem juros.',
  'Oficina mecânica com diagnóstico antes do orçamento e garantia em todos os serviços. Atende Portão e bairros próximos.',
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
    <div className="relative mb-8 mt-5 w-full max-w-xl min-h-[5.5rem] sm:min-h-[5rem] md:min-h-[4.5rem]">
      {HERO_PHRASES.map((phrase, i) => (
        <p
          key={i}
          aria-hidden={i !== index}
          className={`absolute inset-0 text-[0.95rem] sm:text-base md:text-lg text-white/80 font-medium text-center md:text-left leading-relaxed text-pretty transition-opacity duration-700 ${
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
    <section id="inicio" className="relative flex min-h-[680px] items-center overflow-hidden bg-dark md:min-h-screen">
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

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-6 md:pb-28 md:pt-40 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center md:mx-0 md:items-start md:text-left">
          <p className="mb-4 font-accent text-[11px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
            Carplus Pneus e Oficina · Portão, Curitiba
          </p>
          <h1 className="text-balance text-[2rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Oficina Mecânica e Loja de Pneus no Portão
            <span className="mt-2 block text-primary">em Curitiba</span>
          </h1>
          <div className="mt-4 hidden min-h-10 items-center font-display text-xl font-bold uppercase text-white sm:flex md:text-2xl" aria-hidden="true">
            <Typewriter />
            <span className="ml-2">em Curitiba</span>
          </div>

          <HeroPhrasesLoop />

          <div className="mb-10 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:justify-start">
            <a
              href="https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-tight text-dark shadow-lg transition-colors hover:bg-yellow-400 sm:min-w-[200px]"
            >
              <Navigation size={18} /> Ir até a Carplus
            </a>
            <a
              href="tel:+554130827282"
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 text-sm font-bold uppercase tracking-tight text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:min-w-[200px]"
            >
              <Phone size={18} /> (41) 3082-7282
            </a>
          </div>

          <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-3 text-left md:grid-cols-4 md:gap-y-6" aria-label="Destaques">
            {[
              { icon: MapPin, text: 'Portão – Curitiba' },
              { icon: Wrench, text: 'Oficina Full Service' },
              { icon: CreditCard, text: 'Pneus em até 10x' },
              { icon: Star, text: 'Montagem e alinhamento' },
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 border-l border-primary py-1 pl-3 text-white/80 md:py-2 md:pl-4">
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
