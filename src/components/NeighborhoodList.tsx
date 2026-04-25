
import { useState } from 'react';
import { Search, MapPin, Navigation, ArrowRight, ChevronDown } from 'lucide-react';
import { NEIGHBORHOODS } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function NeighborhoodList() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'sul' | 'centro'>('all');

  const filtered = NEIGHBORHOODS.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || b.zona === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <section id="bairros" className="bg-gray-50 border-t border-gray-100">
      {/* Aba / Toggle */}
      <button
        onClick={() => setIsOpen(v => !v)}
        className="w-full flex items-center justify-between px-6 py-6 md:px-12 hover:bg-gray-100 transition-colors group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <MapPin size={20} className="text-primary flex-shrink-0" />
          <span className="text-xl md:text-2xl font-bold text-dark group-hover:text-primary transition-colors">
            Atendemos Seu Bairro
          </span>
          <span className="hidden md:inline-flex items-center gap-1 ml-2 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {NEIGHBORHOODS.length} bairros e cidades
          </span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={24} className="text-gray-400 group-hover:text-primary transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <p className="text-xl text-gray-500 font-light max-w-xl mx-auto">
             Moradores de toda Curitiba e RM escolhem a Carplus pela transparência e preço justo no Portão.
           </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Busque seu bairro ou cidade..." 
                className="w-full bg-white border border-gray-200 py-4 pl-12 pr-6 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-gray-200 overflow-x-auto w-full md:w-auto">
              {[
                { id: 'all', label: 'Todos' },
                { id: 'sul', label: 'Zona Sul' },
                { id: 'centro', label: 'Central' },
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id as any)}
                  className={`
                    px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all whitespace-nowrap
                    ${filter === f.id ? 'bg-primary text-white shadow-md shadow-primary/20' : 'text-gray-500 hover:bg-gray-50'}
                  `}
                >
                  {f.label}
                </button>
              ))}
            </div>
        </div>

        {/* Neighborhood Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
           <AnimatePresence mode="popLayout">
            {filtered.map((b) => (
              <motion.div
                layout
                key={b.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
              >
                 <div className="flex justify-between items-start mb-4">
                    <div className="bg-gray-100 p-3 rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors">
                       <MapPin size={24} />
                    </div>
                    <span className={`
                      text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest
                      ${b.tempo.includes('5') ? 'bg-[#00C853]/10 text-[#00C853]' : 'bg-blue-100 text-blue-600'}
                    `}>
                       ~{b.tempo} CARRO
                    </span>
                 </div>

                 <h3 className="text-2xl font-bold mb-1 uppercase group-hover:text-primary transition-colors">{b.name}</h3>
                 <p className="text-gray-400 text-xs font-medium mb-6 flex items-center gap-1">
                   Via Principal: <span className="text-gray-600 italic">{b.via}</span>
                 </p>

                 <div className="flex items-center gap-2">
                    <motion.div className="flex-grow" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        to={`/bairro/${b.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="w-full flex items-center justify-center gap-2 bg-gray-50 hover:bg-dark hover:text-white py-3 rounded-xl font-bold text-[10px] uppercase transition-all shadow-sm"
                      >
                         Ver Página <ArrowRight size={12} />
                      </Link>
                    </motion.div>
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={`https://www.google.com/maps/dir/${b.name},+Curitiba/Carplus+Auto+Center`}
                      target="_blank"
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-white hover:bg-red-700 transition-all shadow-lg shadow-primary/20"
                    >
                       <Navigation size={16} />
                    </motion.a>
                 </div>
              </motion.div>
            ))}
           </AnimatePresence>
        </div>
        </div>
      </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
