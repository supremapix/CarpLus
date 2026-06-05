import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight, Flame } from 'lucide-react';
import { FEATURED_TIRES } from '../data/featuredTires';
import TireCard from './TireCard';

// Vitrine enxuta da Home: 8 pneus mais vendidos.
// Usa apenas o arquivo pequeno FEATURED_TIRES (sem o catalogo completo).
export default function BestSellerTires() {
  return (
    <section id="mais-vendidos" className="py-16 md:py-24 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5">
              <Flame size={14} className="fill-primary" />
              Os queridinhos da loja
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold leading-tight uppercase tracking-tight">
              Pneus <span className="text-primary italic">Mais Vendidos</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Os modelos preferidos dos nossos clientes em Curitiba
            </p>
          </motion.div>
        </div>

        {/* Grid de 8 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {FEATURED_TIRES.map((tire, index) => (
            <TireCard key={tire.id} tire={tire} index={index} />
          ))}
        </div>

        {/* CTA para o catalogo completo */}
        <div className="mt-12 md:mt-16 text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/pneus"
              className="bg-dark text-white px-10 py-3.5 rounded-full font-bold text-base hover:bg-black transition-all shadow-2xl inline-flex items-center gap-3 justify-center uppercase italic tracking-tighter"
            >
              Ver Catálogo Completo <ChevronRight />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
