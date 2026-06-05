import { useMemo, useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TIRES } from '../data';
import TireCard from './TireCard';

const BRAND_ORDER = [
  'Pirelli',
  'Michelin', 
  'Goodyear',
  'Continental',
  'Bridgestone',
  'Firestone',
  'Yokohama',
  'Dunlop',
  'Hankook'
];

interface BrandRowProps {
  brand: string;
  tires: any[];
}

function BrandRow({ brand, tires }: BrandRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-10">
      {/* Brand Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-3">
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-gray-800">
            {brand}
          </h3>
          <span className="text-sm text-gray-400 font-medium">
            ({tires.length} {tires.length === 1 ? 'pneu' : 'pneus'})
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Rolar para esquerda"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Rolar para direita"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
          <Link
            to={`/pneus?marca=${brand}`}
            className="hidden md:flex items-center gap-1 text-primary font-bold text-sm hover:underline ml-2"
          >
            Ver todos <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scroll-smooth"
        style={{ scrollbarWidth: 'thin' }}
      >
        {tires.map((tire: any, index: number) => (
          <div key={tire.id} className="flex-shrink-0 w-[280px]">
            <TireCard tire={tire} index={index} />
          </div>
        ))}
        {/* Ver mais card */}
        <Link
          to={`/pneus?marca=${brand}`}
          className="flex-shrink-0 w-[280px] h-full min-h-[320px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-3 hover:border-primary hover:bg-primary/5 transition-all group"
        >
          <div className="w-14 h-14 rounded-full bg-gray-100 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
            <ChevronRight size={28} className="text-gray-400 group-hover:text-primary transition-colors" />
          </div>
          <span className="font-bold text-gray-500 group-hover:text-primary transition-colors">
            Ver todos {brand}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function TiresByBrand() {
  const tiresByBrand = useMemo(() => {
    const grouped: Record<string, any[]> = {};
    
    TIRES.forEach(tire => {
      if (!grouped[tire.marca]) {
        grouped[tire.marca] = [];
      }
      grouped[tire.marca].push(tire);
    });

    // Sort by brand order and limit to 9 brands
    const sortedBrands = BRAND_ORDER.filter(brand => grouped[brand] && grouped[brand].length > 0);
    
    // Add any remaining brands not in BRAND_ORDER
    Object.keys(grouped).forEach(brand => {
      if (!sortedBrands.includes(brand) && sortedBrands.length < 9) {
        sortedBrands.push(brand);
      }
    });

    return sortedBrands.slice(0, 9).map(brand => ({
      brand,
      tires: grouped[brand].slice(0, 12) // Limit to 12 tires per brand for performance
    }));
  }, []);

  return (
    <section id="pneus" className="py-16 md:py-24 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold leading-tight uppercase tracking-tight">
              Pneus por <span className="text-primary italic">Marca</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Navegue pelos melhores pneus das principais marcas do mercado
            </p>
          </motion.div>
        </div>

        {/* Brand Rows */}
        <div className="space-y-6">
          {tiresByBrand.map(({ brand, tires }, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
            >
              <BrandRow brand={brand} tires={tires} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 md:mt-16 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/pneus"
              className="bg-dark text-white px-10 py-3.5 rounded-full font-bold text-base hover:bg-black transition-all shadow-2xl flex items-center gap-3 justify-center max-w-sm mx-auto uppercase italic tracking-tighter"
            >
              Ver Catálogo Completo <ChevronRight />
            </Link>
          </motion.div>
        </div>

        {/* Specialist Advice CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[300px]"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img loading="lazy"
              src="/images/loja/estoque-pneus-carplus.webp"
              alt="Loja de pneus Carplus"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" />
          </div>

          {/* Content over image */}
          <div className="relative z-10 px-10 py-14 md:px-16 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Consultoria Técnica Gratuita
              </div>
              <h3 className="text-4xl md:text-6xl font-bold mb-4 text-white leading-tight uppercase italic tracking-tight">
                Dúvida sobre o<br className="hidden md:block" /> pneu ideal?
              </h3>
              <p className="text-base md:text-lg font-medium text-white/65 max-w-sm">
                Fale com o Maurício e receba uma consultoria técnica gratuita.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full lg:w-auto shrink-0 lg:min-w-[280px]">
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/554130827282?text=Olá Mauricio! Gostaria de ajuda para escolher os pneus ideais."
                className="bg-primary text-black px-8 py-5 rounded-2xl font-black text-base hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/40 uppercase tracking-tight"
              >
                <MessageSquare size={20} /> Falar com Maurício
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+554130827282"
                className="bg-white/10 border border-white/25 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-white/20 transition-all flex items-center justify-center gap-3 uppercase tracking-tight backdrop-blur-sm"
              >
                <Phone size={18} /> (41) 3082-7282
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
