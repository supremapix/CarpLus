"use client";
import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ListFilter as Filter, X, MessageSquare, ChevronRight, Star, Tag, CarFront } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { TIRES, Tire } from '@/lib/data';
import Navbar from './Navbar';
import Footer from './Footer';
import TireCard from './TireCard';

const BRANDS = ["Pirelli", "Michelin", "Goodyear", "Continental", "Firestone", "Bridgestone", "Yokohama", "Prinx", "Delinte"];
const RIMS = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const CATEGORIES = ["Econômico", "Conforto", "Conforto Premium", "Performance", "Esportivo", "SUV", "SUV Premium", "All Season"];
const VEHICLE_TYPES = ["Hatch", "Sedan", "SUV", "Picape", "Esportivo", "Sedan Premium", "SUV Premium", "Coupe", "Hatch Esportivo", "Híbrido", "SUV Esportivo"];

export default function TireCatalog() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRims, setSelectedRims] = useState<number[]>([]);
  const [selectedLargura, setSelectedLargura] = useState<number | null>(null);
  const [selectedAltura, setSelectedAltura] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<string[]>([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");

  // Read URL params on mount
  useEffect(() => {
    const aro = searchParams.get('aro');
    const largura = searchParams.get('largura');
    const altura = searchParams.get('altura');
    const marca = searchParams.get('marca');
    
    if (aro) setSelectedRims([parseInt(aro)]);
    if (largura) setSelectedLargura(parseInt(largura));
    if (altura) setSelectedAltura(parseInt(altura));
    if (marca) {
      // Find exact brand match (case-insensitive)
      const matchedBrand = BRANDS.find(b => b.toLowerCase() === marca.toLowerCase());
      if (matchedBrand) setSelectedBrands([matchedBrand]);
    }
  }, [searchParams]);

  const filteredTires = useMemo(() => {
    return TIRES.filter(tire => {
      const matchesSearch = 
        tire.nome.toLowerCase().includes(search.toLowerCase()) ||
        tire.medida.toLowerCase().includes(search.toLowerCase()) ||
        tire.carros.some(c => c.toLowerCase().includes(search.toLowerCase()));
      
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(tire.marca);
      const matchesRim = selectedRims.length === 0 || selectedRims.includes(tire.aro);
      const matchesLargura = !selectedLargura || tire.largura === selectedLargura;
      const matchesAltura = !selectedAltura || tire.perfil === selectedAltura;
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tire.categoria);
      const matchesVehicle = selectedVehicleTypes.length === 0 || tire.tipoVeiculo.some(v => selectedVehicleTypes.includes(v));

      return matchesSearch && matchesBrand && matchesRim && matchesLargura && matchesAltura && matchesCategory && matchesVehicle;
    }).sort((a, b) => {
      if (sortBy === "rim-asc") return a.aro - b.aro;
      if (sortBy === "rim-desc") return b.aro - a.aro;
      if (sortBy === "brand") return a.marca.localeCompare(b.marca);
      return 0; // Default relevance
    });
  }, [search, selectedBrands, selectedRims, selectedLargura, selectedAltura, selectedCategories, selectedVehicleTypes, sortBy]);

  const toggleFilter = (list: any[], setList: Function, value: any) => {
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedRims([]);
    setSelectedLargura(null);
    setSelectedAltura(null);
    setSelectedCategories([]);
    setSelectedVehicleTypes([]);
    setSearch("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 md:pt-28">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-dark pb-0 pt-12 md:pt-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-curitiba.webp"
            className="w-full h-full object-cover"
            alt="Fundo"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block bg-primary text-black px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 tracking-widest">
              Revendedor Multimarcas
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter italic">
              Catálogo de Pneus <br />
              em Curitiba
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto font-medium">
              Encontre o pneu ideal para seu carro com filtros avançados por medida, aro, categoria e modelo de veículo. Montagem técnica gratuita no Portão.
            </p>
          </motion.div>
        </div>

        {/* Brand Ticker — rente ao final do hero */}
        <div className="bg-dark/50 backdrop-blur-md py-4 overflow-hidden border-t border-white/5">
          <div className="flex gap-12 whitespace-nowrap animate-tire-scroll">
            {Array(4).fill(['PIRELLI', 'MICHELIN', 'GOODYEAR', 'CONTINENTAL', 'FIRESTONE', 'BRIDGESTONE', 'YOKOHAMA', 'PRINX', 'DELINTE']).flat().map((brand, i) => (
              <span key={i} className="text-white/30 font-display text-4xl font-bold tracking-tighter opacity-50 px-2 select-none italic">
                {brand}
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes tire-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-tire-scroll {
            animation: tire-scroll 40s linear infinite;
          }
        `}</style>
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 sticky top-28">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold uppercase flex items-center gap-2">
                  <Filter size={20} /> Filtros
                </h2>
                <button 
                  onClick={clearFilters}
                  className="text-xs text-red-600 font-bold hover:underline"
                >
                  Limpar Todos
                </button>
              </div>

              {/* Brand Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Tag size={14} className="text-primary" /> Marca
                </h3>
                <div className="space-y-2">
                  {BRANDS.map(brand => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          type="checkbox" 
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleFilter(selectedBrands, setSelectedBrands, brand)}
                          className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
                        />
                      </div>
                      <span className={`text-sm ${selectedBrands.includes(brand) ? 'font-bold text-black' : 'text-gray-500'} group-hover:text-black transition-colors`}>
                        {brand}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rim Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <div className="w-3.5 h-3.5 border-2 border-primary rounded-full" /> Aro
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {RIMS.map(rim => (
                    <button
                      key={rim}
                      onClick={() => toggleFilter(selectedRims, setSelectedRims, rim)}
                      className={`h-10 rounded-xl text-xs font-bold transition-all ${
                        selectedRims.includes(rim) 
                        ? 'bg-primary text-black shadow-lg shadow-primary/20 scale-105' 
                        : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      {rim}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Categoria</h3>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => toggleFilter(selectedCategories, setSelectedCategories, cat)}
                      className={`px-4 py-2 rounded-xl text-[10px] uppercase font-bold transition-all border ${
                        selectedCategories.includes(cat)
                        ? 'bg-black text-white border-black'
                        : 'bg-white text-gray-500 border-gray-200 hover:border-black'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Vehicle Type Filter */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                  <CarFront size={14} className="text-primary" /> Veículo
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {VEHICLE_TYPES.map(type => (
                    <button
                      key={type}
                      onClick={() => toggleFilter(selectedVehicleTypes, setSelectedVehicleTypes, type)}
                      className={`flex items-center justify-center h-10 px-4 rounded-xl text-xs font-bold transition-all ${
                        selectedVehicleTypes.includes(type)
                        ? 'bg-surface text-white scale-105'
                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-grow">
            
            {/* Search and Sort Header */}
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-xl border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center">
              <div className="relative flex-grow w-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text"
                  placeholder="Pesquise por medida, modelo ou carro (ex: 195/60R15 ou Onix)..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary font-medium text-sm md:text-base outline-none transition-all"
                />
                {search && (
                  <button 
                    onClick={() => setSearch("")}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-4 w-full md:w-auto">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 border-none rounded-2xl py-4 px-6 outline-none font-bold text-xs uppercase tracking-widest cursor-pointer focus:ring-2 focus:ring-primary transition-all w-full md:w-auto"
                >
                  <option value="relevance">Mais Relevante</option>
                  <option value="rim-asc">Aro Crescente</option>
                  <option value="rim-desc">Aro Decrescente</option>
                  <option value="brand">Marca A–Z</option>
                </select>

                <button 
                  onClick={() => setIsFilterMenuOpen(true)}
                  className="lg:hidden bg-primary text-black p-4 rounded-2xl shadow-lg flex-shrink-0"
                >
                  <Filter size={24} />
                </button>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8 flex items-center justify-between px-2">
              <span className="text-gray-500 font-medium text-sm">
                Exibindo <b className="text-black">{filteredTires.length}</b> de <b className="text-black">{TIRES.length}</b> pneus encontrados
              </span>
            </div>

            {/* Grid */}
            {filteredTires.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredTires.map((tire, index) => (
                    <TireCard key={tire.id} tire={tire} index={index} />
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-20 text-center shadow-xl border border-gray-100">
                <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300">
                  <Search size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase">Nenhum pneu encontrado</h3>
                <p className="text-gray-500 mb-8 max-w-sm mx-auto">Tente ajustar seus filtros ou a busca para encontrar o que procura.</p>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={clearFilters}
                  className="bg-primary text-black px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/20"
                >
                  Limpar Todos os Filtros
                </motion.button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* Footer is handled globally or per page */}
      <Footer />

      {/* Mobile Filter Menu Overlay */}
      <AnimatePresence>
        {isFilterMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsFilterMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white z-[1001] lg:hidden p-8 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold uppercase italic tracking-tighter">Filtros</h2>
                <button onClick={() => setIsFilterMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X />
                </button>
              </div>
              
              <div className="space-y-12">
                 <button 
                  onClick={() => { clearFilters(); setIsFilterMenuOpen(false); }}
                  className="w-full text-center text-sm text-red-600 font-bold uppercase tracking-widest border border-red-100 py-3 rounded-xl"
                >
                  Limpar Filtros
                </button>

                {/* Filter segments copied from desktop sidebar */}
                 {/* Brand Filter */}
                <div className="mb-0">
                  <h3 className="text-lg font-bold uppercase tracking-tighter mb-4 flex items-center gap-2">Marca</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {BRANDS.map(brand => (
                      <button
                        key={brand}
                        onClick={() => toggleFilter(selectedBrands, setSelectedBrands, brand)}
                        className={`h-12 rounded-xl text-xs font-bold transition-all border ${
                          selectedBrands.includes(brand)
                          ? 'bg-primary text-black border-primary'
                          : 'bg-white text-gray-500 border-gray-100'
                        }`}
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rim Filter */}
                <div className="mb-0">
                  <h3 className="text-lg font-bold uppercase tracking-tighter mb-4 flex items-center gap-2">Aro</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {RIMS.map(rim => (
                      <button
                        key={rim}
                        onClick={() => toggleFilter(selectedRims, setSelectedRims, rim)}
                        className={`h-12 rounded-xl text-xs font-bold transition-all border ${
                          selectedRims.includes(rim) 
                          ? 'bg-primary text-black border-primary' 
                          : 'bg-white text-gray-500 border-gray-100'
                        }`}
                      >
                        {rim}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-0">
                  <h3 className="text-lg font-bold uppercase tracking-tighter mb-4">Categoria</h3>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat}
                        onClick={() => toggleFilter(selectedCategories, setSelectedCategories, cat)}
                        className={`px-4 py-3 rounded-xl text-[10px] uppercase font-bold transition-all border ${
                          selectedCategories.includes(cat)
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-gray-400 border-gray-100'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 sticky bottom-0 bg-white pt-4 pb-2">
                <button 
                  onClick={() => setIsFilterMenuOpen(false)}
                  className="w-full bg-surface text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl"
                >
                  Ver Resultados ({filteredTires.length})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
