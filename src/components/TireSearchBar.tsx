import { useState, useMemo } from 'react';
import { Search, ChevronDown, X, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { TIRE_FILTER_TREE, TIRE_AROS } from '../data/tireFilters';

export default function TireSearchBar() {
  const navigate = useNavigate();
  const [aro, setAro] = useState<number | null>(null);
  const [largura, setLargura] = useState<number | null>(null);
  const [altura, setAltura] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Opcoes derivadas de uma arvore de filtros pequena (gerada do catalogo),
  // evitando importar o catalogo completo (~2 MB) na Home.
  const aros = TIRE_AROS;

  const larguras = useMemo(() => {
    if (!aro) return [] as number[];
    return Object.keys(TIRE_FILTER_TREE[aro] ?? {}).map(Number).sort((a, b) => a - b);
  }, [aro]);

  const alturas = useMemo(() => {
    if (!aro || !largura) return [] as number[];
    return (TIRE_FILTER_TREE[aro]?.[largura] ?? []).slice().sort((a, b) => a - b);
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
        <div
          className="py-4 md:py-6 [animation:var(--animate-fade-in-down)]"
        >
          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden w-full bg-white/10 border border-white/20 rounded-md px-5 py-3.5 flex items-center justify-between mb-4 transition-colors hover:bg-white/15"
          >
            <span className="flex items-center gap-2.5 text-white font-bold text-sm uppercase tracking-wider">
              <SlidersHorizontal size={18} className="text-primary" />
              Pesquise seu pneu pelo aro
            </span>
            <ChevronDown 
              size={18} 
              className={`text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
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
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-4 md:p-6 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 items-end">
                
                {/* ARO Select */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 ml-0.5">
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
                      className="w-full appearance-none bg-white border border-gray-200 rounded-md px-4 py-3.5 pr-10 font-bold text-base focus:border-primary focus:outline-none transition-colors cursor-pointer hover:border-gray-300 text-dark"
                    >
                      <option value="">Escolha o aro</option>
                      {aros.map(a => (
                        <option key={a} value={a}>Aro {a}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* LARGURA Select */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 ml-0.5">
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
                      className="w-full appearance-none bg-white border border-gray-200 rounded-md px-4 py-3.5 pr-10 font-bold text-base focus:border-primary focus:outline-none transition-colors cursor-pointer hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 text-dark"
                    >
                      <option value="">Escolha a largura</option>
                      {larguras.map(l => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* ALTURA Select */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-white/80 ml-0.5">
                    Altura
                  </label>
                  <div className="relative">
                    <select
                      value={altura || ''}
                      onChange={(e) => setAltura(e.target.value ? Number(e.target.value) : null)}
                      disabled={!largura}
                      className="w-full appearance-none bg-white border border-gray-200 rounded-md px-4 py-3.5 pr-10 font-bold text-base focus:border-primary focus:outline-none transition-colors cursor-pointer hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100 text-dark"
                    >
                      <option value="">Escolha a altura</option>
                      {alturas.map(a => (
                        <option key={a} value={a}>{a}</option>
                      ))}
                    </select>
                    <ChevronDown size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex gap-2">
                  {hasFilters && (
                    <button
                      onClick={clearFilters}
                      className="w-12 h-12 md:h-[50px] flex items-center justify-center bg-white/20 hover:bg-white/30 text-white rounded-md transition-colors shrink-0"
                      title="Limpar filtros"
                    >
                      <X size={18} />
                    </button>
                  )}
                  <button
                    onClick={handleSearch}
                    disabled={!aro}
                    className="flex-1 min-h-12 bg-primary hover:bg-yellow-400 disabled:bg-gray-400 disabled:cursor-not-allowed text-black px-5 py-3.5 rounded-md font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <Search size={18} />
                    <span>Pesquisar Pneus</span>
                  </button>
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
        </div>
      </div>
    </section>
  );
}
