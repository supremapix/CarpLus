import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronDown, X, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TIRES } from '../data';

export default function TireSearchBar() {
  const navigate = useNavigate();
  const [aro, setAro] = useState<number | null>(null);
  const [largura, setLargura] = useState<number | null>(null);
  const [altura, setAltura] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Get unique values from TIRES data
  const aros = useMemo(() => {
    const unique = [...new Set(TIRES.filter(t => t && t.aro).map(t => t.aro))].sort((a, b) => a - b);
    return unique;
  }, []);

  const larguras = useMemo(() => {
    let tires = TIRES.filter(t => t);
    if (aro) tires = tires.filter(t => t.aro === aro);
    const unique = [...new Set(tires.filter(t => t.largura).map(t => t.largura))].sort((a, b) => a - b);
    return unique;
  }, [aro]);

  const alturas = useMemo(() => {
    let tires = TIRES.filter(t => t);
    if (aro) tires = tires.filter(t => t.aro === aro);
    if (largura) tires = tires.filter(t => t.largura === largura);
    const unique = [...new Set(tires.filter(t => t.perfil).map(t => t.perfil))].sort((a, b) => a - b);
    return unique;
  }, [aro, largura]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (aro) params.set('aro', aro.toString());
    if (largura) params.set('largura', largura.toString());
    if (altura) params.set('altura', altura.toString());
    navigate(`/pneus?${params.toString()}`);
  };

  const clearFilters = () => {
    setAro(null);
    setLargura(null);
    setAltura(null);
  };

  const hasFilters = aro || largura || altura;

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative z-30 py-10 md:py-20 overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />
      
      {/* Diagonal stripes accent */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
      }} />
      
      {/* Primary color accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-4 md:py-6"
        >
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden w-full bg-white/10 border-2 border-white/20 rounded-2xl px-5 py-4 flex items-center justify-between mb-4"
          >
            <span className="flex items-center gap-3 text-white font-bold">
              <SlidersHorizontal size={20} className="text-primary" />
              Pesquise seu pneu pelo aro
            </span>
            <ChevronDown 
              size={20} 
              className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
            />
          </button>

          {/* Search Bar Container */}
          <div className={`${isExpanded ? 'block' : 'hidden'} md:block`}>
            {/* Header */}
            <div className="text-center mb-3 md:mb-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white">
                Pesquise <span className="text-primary">Pneus</span> por tamanho!
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/60 mt-2">
                Selecione o aro e encontre os melhores modelos
              </p>
            </div>

            {/* Search Fields */}
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/10 rounded-3xl p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-end">
                
                {/* ARO Select */}
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase tracking-widest text-white/70 ml-1">
                    Aro
                  </label>
                  <div className="relative">
                    <select
                      value={aro || ''}
                      onChange={(e) => {
                        setAro(e.target.value ? Number(e.target.value) : null);
                        setLargura(null);
                        setAltura(null);
                      }}
                      className="w-full appearance-none bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 pr-12 font-bold text-lg focus:border-primary focus:outline-none transition-colors cursor-pointer hover:border-gray-300"
                    >
                      <option value="">Escolha o aro</option>
                      {aros.map(a => (
                        <option key={a} value={a}>Aro {a}</option>
                      ))}
                    </select>
                    <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* LARGURA Select */}
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase tracking-widest text-white/70 ml-1">
                    Largura
                  </label>
                  <div className="relative">
                    <select
                      value={largura || ''}
                      onChange={(e) => {
                        setLargura(e.target.value ? Number(e.target.value) : null);
                        setAltura(null);
                      }}
                      disabled={!aro}
                      className="w-full appearance-none bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 pr-12 font-bold text-lg focus:border-primary focus:outline-none transition-colors cursor-pointer hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100"
                    >
                      <option value="">Escolha a largura</option>
                      {larguras.map(l => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                    <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* ALTURA Select */}
                <div className="space-y-2">
                  <label className="block text-xs font-black uppercase tracking-widest text-white/70 ml-1">
                    Altura
                  </label>
                  <div className="relative">
                    <select
                      value={altura || ''}
                      onChange={(e) => setAltura(e.target.value ? Number(e.target.value) : null)}
                      disabled={!largura}
                      className="w-full appearance-none bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 pr-12 font-bold text-lg focus:border-primary focus:outline-none transition-colors cursor-pointer hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100"
                    >
                      <option value="">Escolha a altura</option>
                      {alturas.map(a => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                    <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex gap-3">
                  {hasFilters && (
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      onClick={clearFilters}
                      className="w-14 h-14 md:h-[58px] flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-2xl transition-colors shrink-0"
                      title="Limpar filtros"
                    >
                      <X size={20} className="text-gray-600" />
                    </motion.button>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSearch}
                    disabled={!aro}
                    className="flex-1 bg-primary hover:bg-yellow-400 disabled:bg-gray-300 disabled:cursor-not-allowed text-black px-6 py-4 rounded-2xl font-black text-base uppercase tracking-tight flex items-center justify-center gap-2 transition-colors shadow-lg shadow-primary/20 disabled:shadow-none"
                  >
                    <Search size={20} />
                    <span className="hidden md:inline">Pesquisar</span>
                  </motion.button>
                </div>
              </div>

              {/* Quick Tip */}
              <div className="mt-4 text-center">
                <p className="text-xs text-white/40">
                  Exemplo: <span className="font-bold text-white/70">195/65R15</span> = Largura 195, Altura 65, Aro 15
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
