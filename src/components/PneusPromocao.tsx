import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Zap, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/554130827282';

interface PromoTire {
  marca: string;
  nome: string;
  preco: string;
  imagem: string;
}

const TIRES: PromoTire[] = [
  { marca: 'BRIDGESTONE', nome: '195/55/15 Ecopia EP150 85H', preco: 'R$ 489,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1445393/pneu_bridgestone_aro_15_ecopia_ep150_19555r15_bl85_1_20260424103219_554d143d730b.jpg' },
  { marca: 'COMFORSER', nome: '185/60/14 82H CF510', preco: 'R$ 239,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1445393/pneu_18560r14_82h_cf510_comforser_1_20260317145707_26dca0dc6878.jpg' },
  { marca: 'CONTINENTAL', nome: '175/65/14 ContiPowerContact 82T', preco: 'R$ 379,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1411063/pneu_17565r14_continental_contipowercontact_82t_1_20251222152416_f9cbacb94d08.jpg' },
  { marca: 'DELINTE', nome: '185/60/15 DH2 84H', preco: 'R$ 329,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_775428-MLU76889830244_062024-F.webp' },
  { marca: 'FIRESTONE', nome: '175/65/14 F700 82T', preco: 'R$ 379,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1411063/pneu_17565r14_firestone_f700_82t_1_20250911111043_865d44577d85.jpg' },
  { marca: 'GOODYEAR', nome: '205/55/17 91V Wrangler Territory', preco: 'R$ 789,00', imagem: 'https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-20555r17-goodyear-wrangler-territory-ht-91v-1.png' },
  { marca: 'HIFLY', nome: '185/60/14 82H HF261', preco: 'R$ 269,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1411063/pneu_18560r14_hifly_hf261_82h_1_20250912182338_fa8f9c5baa8e.jpg' },
  { marca: 'JK TYRE', nome: '175/70/13 82T Turbo', preco: 'R$ 269,00', imagem: 'https://www.alvespneus.com.br/image/catalog/Jk-Tyre/pneu-aro-13-175-70r13-jk-tyre-82t-tl-turbo.png' },
  { marca: 'LINGLONG', nome: '195/60/15 Green-Max HP010 88H', preco: 'R$ 289,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_958386-MLA99823472497_112025-F.webp' },
  { marca: 'MAXTREK', nome: '185/65/15 88H Maximus M2', preco: 'R$ 299,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1445393/pneu_maxtrek_aro_16_maximus_m2_20565r15_94h_sl_1_20260218135248_7d79f0f6def4.jpg' },
  { marca: 'MICHELIN', nome: '215/50/17 95W Primacy 4 +', preco: 'R$ 749,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_967456-MLA79828137217_102024-F.webp' },
  { marca: 'PIRELLI', nome: '175/65/14 82H P400 Evo', preco: 'R$ 379,00', imagem: 'https://www.pensepneus.com.br/media/catalog/product/cache/e5c188f9fa76550a763b93b91095e130/p/4/p400_evo_1.webp' },
  { marca: 'PRINX', nome: '185/55/16 HH2 83H', preco: 'R$ 459,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1411063/pneu_18555r16_prinx_hh2_hicity_83h_1_20250909002931_6e7b2d587166.jpg' },
  { marca: 'PROVATO', nome: '265/60/18 Crosswind A/T 110T', preco: 'R$ 639,00', imagem: 'https://1stpneus.com.br/wp-content/uploads/2022/10/CROSSWIND-AT.jpg' },
  { marca: 'ROADKING', nome: '175/70/14C Radial109 95/93T', preco: 'R$ 289,00', imagem: 'https://cdn.iset.io/assets/42004/produtos/2461/thumb_550-550-9409-1.jpg' },
  { marca: 'SPEEDMAX', nome: '175/55/16 80H Energrip SPM022', preco: 'R$ 489,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1411063/pneu_17555r16_speedmax_energrip_spm022_ev_80h_1_20260522095029_33f1e899ed35.jpg' },
  { marca: 'TORNEL', nome: '175/70/14 Astral Neo 84T', preco: 'R$ 279,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_785643-MLB110473824363_042026-F.webp' },
  { marca: 'XBRI', nome: '175/75/14 86T Fastway A5', preco: 'R$ 269,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_686334-MLA100095996251_122025-F.webp' },
  { marca: 'YOKOHAMA', nome: '175/65/14 ES32 82T', preco: 'R$ 399,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_714535-MLB107513343737_022026-F.webp' },
  { marca: 'ZMAX', nome: '225/65/16C Vanmejor 112/110R Carga', preco: 'R$ 559,00', imagem: 'https://http2.mlstatic.com/D_930543-MLA112057599751_052026-C.jpg' },
];

const FALLBACK_IMG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#1a1a1a"/><circle cx="100" cy="100" r="70" fill="none" stroke="#f59c00" stroke-width="14"/><circle cx="100" cy="100" r="30" fill="#f59c00"/></svg>`,
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

function TireCard({ tire, index }: { tire: PromoTire; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.4), ease: 'easeOut' }}
      className="group flex flex-col rounded-2xl border border-white/10 bg-[#111] overflow-hidden transition-all duration-300 hover:border-primary/70 hover:shadow-[0_0_24px_rgba(245,156,0,0.25)]"
    >
      <div className="relative aspect-square bg-white/5 p-4 flex items-center justify-center overflow-hidden">
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
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="font-accent font-bold uppercase tracking-wide text-primary text-base leading-none">
          {tire.marca}
        </p>
        <p className="mt-1.5 text-white/70 text-sm leading-snug min-h-[2.5rem]">{tire.nome}</p>

        <div className="mt-3 flex items-baseline gap-1">
          <span className="text-white/40 text-xs">a partir de</span>
        </div>
        <p className="font-accent font-bold text-primary text-2xl leading-none">{tire.preco}</p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 font-accent font-bold uppercase tracking-wide text-black text-sm transition-colors hover:bg-[#ffae2e]"
        >
          <MessageCircle size={16} strokeWidth={2.5} />
          Pedir orçamento
        </a>
      </div>
    </motion.div>
  );
}

export default function PneusPromocao() {
  return (
    <section className="relative bg-[#1A1A1A] py-16 md:py-24 overflow-hidden">
      {/* Textura diagonal sutil no topo da seção */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-64 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, #f59c00 0, #f59c00 2px, transparent 2px, transparent 16px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-accent font-bold uppercase text-white text-4xl sm:text-5xl md:text-6xl tracking-tight text-balance">
            Pneus em <span className="text-primary">Promoção</span>
          </h2>

          {/* Badge de preço estilo etiqueta de oferta */}
          <div className="mt-6 inline-flex flex-col items-center">
            <span className="text-white/60 font-accent uppercase tracking-[0.2em] text-sm">
              Preços a partir de
            </span>
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-3 flex items-center gap-3 rounded-2xl border-2 border-primary bg-primary/10 px-6 py-3 shadow-[0_0_30px_rgba(245,156,0,0.45)]"
            >
              <Zap size={32} className="text-primary fill-primary" />
              <span className="font-accent font-bold text-primary text-5xl sm:text-6xl leading-none drop-shadow-[0_0_12px_rgba(245,156,0,0.6)]">
                R$ <CountUp to={239} />
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Grid de pneus */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TIRES.map((tire, index) => (
            <TireCard key={`${tire.marca}-${tire.nome}`} tire={tire} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
