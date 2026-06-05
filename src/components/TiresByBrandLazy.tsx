import { lazy, Suspense, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Loader2, Store } from 'lucide-react';

// O catalogo completo (~2 MB) e o componente pesado "Pneus por Marca" so sao
// carregados APOS o clique do usuario — nunca no carregamento inicial da Home.
const TiresByBrand = lazy(() => import('./TiresByBrand'));

export default function TiresByBrandLazy() {
  const [show, setShow] = useState(false);

  if (show) {
    return (
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center gap-3 py-20 text-gray-500">
            <Loader2 className="animate-spin text-primary" size={32} />
            <span className="font-bold uppercase tracking-wide text-sm">Carregando pneus por marca…</span>
          </div>
        }
      >
        <TiresByBrand />
      </Suspense>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
            <Store size={30} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 font-bold leading-tight uppercase tracking-tight">
            Explore por <span className="text-primary italic">Marca</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto font-medium leading-relaxed mb-8">
            Pirelli, Michelin, Goodyear, Continental e muito mais. Veja os modelos de cada marca disponíveis na loja.
          </p>
          <button
            onClick={() => setShow(true)}
            className="bg-primary text-black px-10 py-4 rounded-full font-black text-base hover:bg-yellow-400 transition-all shadow-2xl shadow-primary/30 inline-flex items-center gap-3 justify-center uppercase tracking-tight"
          >
            Ver pneus por marca <ChevronDown size={20} strokeWidth={2.5} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
