import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState, type FC } from 'react';
import { Link } from 'react-router-dom';
import { Zap, MessageCircle, ArrowRight } from 'lucide-react';
import { PROMO_TIRES, PromoTire } from '../data/promoTires';

const BASE_URL = 'https://www.carpluspneuseoficina.com.br';

const FALLBACK_IMG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#f3f4f6"/><circle cx="100" cy="100" r="70" fill="none" stroke="#f59c00" stroke-width="14"/><circle cx="100" cy="100" r="30" fill="#f59c00"/></svg>`,
  );

function CountUp({ to, duration = 1500 }: { to: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return <span ref={ref}>{value}</span>;
}

const TireCard: FC<{ tire: PromoTire }> = ({ tire }) => {
  // URL da página dedicada — vai junto na mensagem do WhatsApp para rastrear a origem do clique
  const pageUrl = `${BASE_URL}/pneu-promocao/${tire.slug}`;
  const whatsappMsg = `Olá! Vi a *promoção do pneu ${tire.marca} ${tire.nome}* (medida ${tire.medida}) por ${tire.preco}. Gostaria de garantir esse preço.\n\nOrigem do contato: ${pageUrl}`;
  const whatsappUrl = `https://wa.me/554130827282?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="group flex w-[230px] sm:w-[260px] flex-shrink-0 flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all duration-300 hover:border-primary/70 hover:shadow-[0_8px_28px_rgba(245,156,0,0.22)]">
      <Link to={`/pneu-promocao/${tire.slug}`} className="relative aspect-square bg-white p-4 flex items-center justify-center overflow-hidden">
        <img
          src={tire.imagem}
          alt={`Pneu ${tire.marca} ${tire.nome}`}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
          }}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 bg-primary text-black text-[11px] font-accent font-bold uppercase tracking-wider px-2 py-0.5 rounded">
          Promoção
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to={`/pneu-promocao/${tire.slug}`} className="font-accent font-bold uppercase tracking-wide text-primary text-base leading-none hover:underline">
          {tire.marca}
        </Link>
        <p className="mt-1.5 text-neutral-600 text-sm leading-snug min-h-[2.5rem]">{tire.nome}</p>

        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-neutral-400 text-xs">a partir de</span>
        </div>
        <p className="font-accent font-bold text-neutral-900 text-2xl leading-none">{tire.preco}</p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-accent font-bold uppercase tracking-wide text-black text-sm transition-colors hover:bg-[#ffae2e]"
        >
          <MessageCircle size={16} strokeWidth={2.5} />
          Pedir orçamento
        </a>

        <Link
          to={`/pneu-promocao/${tire.slug}`}
          className="mt-2 inline-flex items-center justify-center gap-1 rounded-xl border border-neutral-200 px-4 py-2 font-accent font-bold uppercase tracking-wide text-neutral-700 text-xs transition-colors hover:border-primary hover:text-primary"
        >
          Saiba mais
          <ArrowRight size={14} strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}

export default function PneusPromocao() {
  // Duplicamos a lista para criar o efeito de loop infinito da esteira
  const track = [...PROMO_TIRES, ...PROMO_TIRES];

  return (
    <section id="promocao" className="relative bg-white py-16 md:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-accent font-bold uppercase text-neutral-900 text-4xl sm:text-5xl md:text-6xl tracking-tight text-balance">
            Pneus em <span className="text-primary">Promoção</span>
          </h2>

          {/* Badge de preço estilo etiqueta de oferta */}
          <div className="mt-6 inline-flex flex-col items-center">
            <span className="text-neutral-900 font-accent font-bold uppercase tracking-[0.2em] text-lg sm:text-xl">
              Preços a partir de
            </span>
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-3 flex items-center gap-3 rounded-2xl border-2 border-primary bg-primary/10 px-7 py-4 shadow-[0_0_30px_rgba(245,156,0,0.30)]"
            >
              <Zap size={40} className="text-primary fill-primary" />
              <span className="font-accent font-bold text-neutral-900 text-6xl sm:text-7xl leading-none">
                R$ <CountUp to={239} />
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Esteira de produtos (direita -> esquerda) */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div className="flex w-max gap-5 [animation:var(--animate-marquee-left)] hover:[animation-play-state:paused]">
          {track.map((tire, index) => (
            <TireCard key={`${tire.marca}-${index}`} tire={tire} />
          ))}
        </div>
      </div>
    </section>
  );
}
