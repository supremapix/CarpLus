
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, ChevronRight, CircleCheck as CheckCircle2, Search, ListFilter as Filter, Circle as CircleHelp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TIRES } from '../data';
import TireCard from './TireCard';

const RIM_SIZES = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22];

export default function TireGallery() {
  const [selectedRim, setSelectedRim] = useState<number | null>(15);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTires = useMemo(() => {
    return TIRES.filter(tire => {
      const matchesRim = selectedRim ? tire.aro === selectedRim : true;
      const matchesSearch = searchTerm === '' || 
        tire.marca.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tire.nome.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesRim && matchesSearch;
    }).slice(0, 8); // Only show first 8 in home gallery
  }, [selectedRim, searchTerm]);

  return (
    <section id="pneus" className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl mb-4 italic font-black leading-none uppercase tracking-tighter">
              Buscador de<br />
              <span className="text-primary pr-2">PNEUS</span>
            </h2>
            <p className="text-2xl text-gray-800 max-w-2xl mx-auto font-medium leading-tight">
              Selecione o aro do seu veículo e encontre os <br className="hidden md:block"/> melhores modelos em estoque.
            </p>
          </motion.div>
        </div>

        {/* Search and Filter UI */}
        <div className="bg-gray-50 p-8 md:p-12 rounded-[3.5rem] shadow-2xl border border-gray-100 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            
            {/* Search Input */}
            <div className="lg:col-span-5">
              <label className="block text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-4 ml-2 flex items-center gap-2">
                <Search size={16} /> Buscar por Marca ou Nome
              </label>
              <div className="relative group">
                <input 
                  type="text"
                  placeholder="Ex: Pirelli, Michelin, Scorpion..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border-2 border-gray-200 py-6 px-8 rounded-3xl outline-none focus:border-primary transition-all font-bold text-xl group-hover:border-gray-300"
                />
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-primary transition-colors">
                    <Search size={32} />
                </div>
              </div>
            </div>

            {/* Rim Filter */}
            <div className="lg:col-span-7">
              <label className="block text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-4 ml-2 flex items-center gap-2">
                <Filter size={16} /> Filtrar por Aro do Carro
              </label>
              <div className="flex flex-wrap gap-2 md:gap-3 justify-center lg:justify-start">
                <button
                  onClick={() => setSelectedRim(null)}
                  className={`px-6 py-4 rounded-2xl font-black text-sm uppercase transition-all border-2 ${!selectedRim ? 'bg-primary border-primary text-black shadow-lg shadow-primary/20' : 'bg-white border-gray-200 text-gray-500 hover:border-gray-400'}`}
                >
                  TODOS
                </button>
                {RIM_SIZES.map(rim => (
                  <button
                    key={rim}
                    onClick={() => setSelectedRim(rim)}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl font-accent text-2xl flex items-center justify-center transition-all border-2 ${selectedRim === rim ? 'bg-primary border-primary text-black shadow-xl shadow-primary/30 scale-110 z-10' : 'bg-white border-gray-200 text-gray-400 hover:border-gray-400'}`}
                  >
                    {rim}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tire Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTires.length > 0 ? (
              filteredTires.map((tire: any, index: number) => (
                <TireCard key={tire.id} tire={tire} index={index} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center">
                 <p className="text-gray-400 text-xl font-light italic">Nenhum pneu encontrado para sua busca...</p>
                 <button 
                  onClick={() => {setSearchTerm(''); setSelectedRim(null);}}
                  className="mt-4 text-primary font-bold underline"
                 >
                   Limpar Filtros
                 </button>
              </div>
            )}
          </AnimatePresence>
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link 
                    to="/pneus"
                    className="bg-dark text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-black transition-all shadow-2xl flex items-center gap-3 justify-center max-w-sm mx-auto uppercase italic tracking-tighter"
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
          className="mt-20 relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[260px]"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/image.png"
              alt="Maurício especialista"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
          </div>

          {/* Content over image */}
          <div className="relative z-10 p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-500/40 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Disponível agora
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-2 text-white leading-tight uppercase italic tracking-tighter">Dúvida sobre o pneu ideal?</h3>
              <p className="text-sm font-medium text-white/70 max-w-md">Fale com o Maurício e receba uma consultoria técnica gratuita.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://wa.me/554130827282?text=Olá Mauricio! Gostaria de ajuda para escolher os pneus ideais."
                className="bg-primary text-black px-7 py-3 rounded-xl font-bold text-sm hover:bg-yellow-500 transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-tight"
              >
                <MessageSquare size={16} /> Falar com Maurício
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+554130827282"
                className="bg-white/10 border border-white/20 text-white px-7 py-3 rounded-xl font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-center gap-2 uppercase tracking-tight"
              >
                <CheckCircle2 size={16} /> (41) 3082-7282
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
