import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ListFilter as Filter, X, MessageSquare, ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight, Star, Tag, CarFront } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';
import { TIRES, Tire } from '../data';
import { ARO_PAGES } from '../data/seoLanding';
import Navbar from './Navbar';
import Footer from './Footer';
import TireCard from './TireCard';
import { useSEO } from '../hooks/useSEO';
import { generateProductListSchema, generateBreadcrumbSchema } from '../lib/schema';

const BRANDS = ["Pirelli", "Michelin", "Goodyear", "Continental", "Firestone", "Bridgestone", "Yokohama", "Prinx", "Delinte"];
const RIMS = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const CATEGORIES = ["Econômico", "Conforto", "Conforto Premium", "Performance", "Esportivo", "SUV", "SUV Premium", "All Season"];
const VEHICLE_TYPES = ["Hatch", "Sedan", "SUV", "Picape", "Esportivo", "Sedan Premium", "SUV Premium", "Coupe", "Hatch Esportivo", "Híbrido", "SUV Esportivo"];

// Quantidade de pneus exibidos por página (paginação SEO friendly)
const PER_PAGE = 24;

// Mapa aro -> slug da landing page de aro já existente e indexada.
// Reaproveitamos as páginas /pneu-aro-XX-curitiba para NÃO criar conteúdo duplicado.
const ARO_SLUG_BY_NUMBER = new Map<number, string>(ARO_PAGES.map((p) => [p.aro, p.slug]));
// Aros para a navegação (13 ao 23), conforme landing pages disponíveis.
const ARO_NAV = ARO_PAGES.map((p) => p.aro).sort((a, b) => a - b);

export default function TireCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get URL params directly
  const urlMarca = searchParams.get('marca');
  const urlAro = searchParams.get('aro');
  const urlLargura = searchParams.get('largura');
  const urlAltura = searchParams.get('altura');
  const urlPage = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = Number.isNaN(urlPage) || urlPage < 1 ? 1 : urlPage;
  
  const [search, setSearch] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>(() => {
    if (urlMarca) {
      const matchedBrand = BRANDS.find(b => b.toLowerCase() === urlMarca.toLowerCase());
      return matchedBrand ? [matchedBrand] : [];
    }
    return [];
  });
  const [selectedRims, setSelectedRims] = useState<number[]>(() => {
    return urlAro ? [parseInt(urlAro)] : [];
  });
  const [selectedLargura, setSelectedLargura] = useState<number | null>(() => {
    return urlLargura ? parseInt(urlLargura) : null;
  });
  const [selectedAltura, setSelectedAltura] = useState<number | null>(() => {
    return urlAltura ? parseInt(urlAltura) : null;
  });
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState<string[]>([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");

  // Sync state when URL params change (for navigation within the app)
  useEffect(() => {
    if (urlMarca) {
      const matchedBrand = BRANDS.find(b => b.toLowerCase() === urlMarca.toLowerCase());
      if (matchedBrand) setSelectedBrands([matchedBrand]);
    }
    if (urlAro) setSelectedRims([parseInt(urlAro)]);
    if (urlLargura) setSelectedLargura(parseInt(urlLargura));
    if (urlAltura) setSelectedAltura(parseInt(urlAltura));
  }, [urlMarca, urlAro, urlLargura, urlAltura]);

  const BASE_URL = "https://www.carpluspneuseoficina.com.br";

  // Schema ItemList para catalogo de produtos
  const productListSchema = generateProductListSchema(
    TIRES.slice(0, 50).map((tire, index) => ({
      name: tire.nome,
      url: `${BASE_URL}/pneu/${tire.slug}`,
      image: `${BASE_URL}${tire.imagemGrande}`,
      position: index + 1,
    }))
  );

  // Schema Breadcrumb para pagina de catalogo
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Pneus", url: `${BASE_URL}/pneus` },
  ]);

  const filteredTires = useMemo(() => {
    // Use URL params OR state for filtering
    let effectiveBrands = [...selectedBrands];
    if (urlMarca && effectiveBrands.length === 0) {
      const matchedBrand = BRANDS.find(b => b.toLowerCase() === urlMarca.toLowerCase());
      if (matchedBrand) effectiveBrands = [matchedBrand];
    }
    
    let effectiveRims = [...selectedRims];
    if (urlAro && effectiveRims.length === 0) {
      effectiveRims = [parseInt(urlAro)];
    }
    
    let effectiveLargura = selectedLargura;
    if (urlLargura && !effectiveLargura) {
      effectiveLargura = parseInt(urlLargura);
    }
    
    let effectiveAltura = selectedAltura;
    if (urlAltura && !effectiveAltura) {
      effectiveAltura = parseInt(urlAltura);
    }
    
    const result = TIRES.filter(tire => {
      if (!tire) return false;
      const matchesSearch = 
        tire.nome.toLowerCase().includes(search.toLowerCase()) ||
        tire.medida.toLowerCase().includes(search.toLowerCase()) ||
        tire.carros.some(c => c.toLowerCase().includes(search.toLowerCase()));
      
      const matchesBrand = effectiveBrands.length === 0 || effectiveBrands.includes(tire.marca);
      const matchesRim = effectiveRims.length === 0 || effectiveRims.includes(tire.aro);
      const matchesLargura = !effectiveLargura || tire.largura === effectiveLargura;
      const matchesAltura = !effectiveAltura || tire.perfil === effectiveAltura;
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tire.categoria);
      const matchesVehicle = selectedVehicleTypes.length === 0 || tire.tipoVeiculo.some(v => selectedVehicleTypes.includes(v));

      return matchesSearch && matchesBrand && matchesRim && matchesLargura && matchesAltura && matchesCategory && matchesVehicle;
    }).sort((a, b) => {
      if (sortBy === "rim-asc") return a.aro - b.aro;
      if (sortBy === "rim-desc") return b.aro - a.aro;
      if (sortBy === "brand") return a.marca.localeCompare(b.marca);
      // Default: ordenar por marca para agrupar os pneus de cada marca juntos
      return a.marca.localeCompare(b.marca) || a.aro - b.aro;
    });
    
    return result;
  }, [search, selectedBrands, selectedRims, selectedLargura, selectedAltura, selectedCategories, selectedVehicleTypes, sortBy, urlMarca, urlAro, urlLargura, urlAltura]);

  // ───── Paginação ─────
  const totalResults = filteredTires.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * PER_PAGE;
  const paginatedTires = filteredTires.slice(startIndex, startIndex + PER_PAGE);
  const firstItem = totalResults === 0 ? 0 : startIndex + 1;
  const lastItem = Math.min(startIndex + PER_PAGE, totalResults);

  // Há filtros/busca ativos? Nesse caso a URL deixa de ser canônica e recebe noindex
  // (mantém o comportamento anti-conteúdo-duplicado das URLs com ?marca=, ?aro= etc.).
  const hasActiveFilters =
    !!urlMarca || !!urlAro || !!urlLargura || !!urlAltura ||
    selectedBrands.length > 0 || selectedRims.length > 0 ||
    selectedLargura !== null || selectedAltura !== null ||
    selectedCategories.length > 0 || selectedVehicleTypes.length > 0 ||
    search.trim().length > 0;

  // ───── SEO dinâmico por página ─────
  const seoTitle = safePage > 1
    ? `Pneus em Curitiba - Página ${safePage} | Carplus Pneus`
    : "Catálogo de Pneus em Curitiba | Carplus Centro Automotivo – Portão";
  const seoDescription = safePage > 1
    ? `Página ${safePage} do catálogo de pneus da Carplus em Curitiba. Pneus aro 13 ao 23 das marcas Pirelli, Michelin, Goodyear, Continental e mais. Montagem inclusa e até 10x sem juros.`
    : "Encontre o pneu ideal para seu carro na Carplus em Curitiba. Pneus Pirelli, Michelin, Goodyear, Continental e mais. Montagem gratuita, até 10x sem juros.";
  // Canonical aponta para a página paginada (sem filtros). Com filtros ativos, noindex.
  const seoCanonical = safePage > 1 ? `${BASE_URL}/pneus?page=${safePage}` : `${BASE_URL}/pneus`;

  useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical: seoCanonical,
    ogType: "website",
    noindex: hasActiveFilters,
    keywords: [
      'pneus curitiba', 'pneu aro 13', 'pneu aro 14', 'pneu aro 15', 'pneu aro 16',
      'pneu aro 17', 'pneu aro 18', 'pneu aro 19', 'pneu aro 20', 'pneu aro 21',
      'pneu aro 22', 'pneu aro 23',
    ],
    schemaJSON: [productListSchema, breadcrumbSchema],
  });

  // Navega para uma página específica preservando os demais query params.
  const goToPage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    if (page <= 1) {
      params.delete('page');
    } else {
      params.set('page', String(page));
    }
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sempre que os filtros/busca mudam, volta para a página 1.
  const resetToFirstPage = () => {
    if (currentPage !== 1) {
      const params = new URLSearchParams(searchParams);
      params.delete('page');
      setSearchParams(params);
    }
  };

  const toggleFilter = (list: any[], setList: Function, value: any) => {
    if (list.includes(value)) {
      setList(list.filter(item => item !== value));
    } else {
      setList([...list, value]);
    }
    resetToFirstPage();
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedRims([]);
    setSelectedLargura(null);
    setSelectedAltura(null);
    setSelectedCategories([]);
    setSelectedVehicleTypes([]);
    setSearch("");
    resetToFirstPage();
  };

  // Atualiza busca e volta para a primeira página.
  const handleSearch = (value: string) => {
    setSearch(value);
    resetToFirstPage();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-dark pt-32 md:pt-40 pb-0 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img loading="lazy"
            src="/images/loja/loja-de-pneus-curitiba.webp"
            width={1067}
            height={800}
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight italic text-center">
              Catálogo de Pneus <br />
              em Curitiba
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto font-medium text-center">
              Encontre o pneu ideal para seu carro com filtros avançados por medida, aro, categoria e modelo de veículo. Montagem técnica gratuita no Portão.
            </p>
          </motion.div>
        </div>

        {/* Brand Ticker — rente ao final do hero */}
        <div className="bg-dark/50 backdrop-blur-md py-4 overflow-hidden border-t border-white/5">
          <div className="flex gap-12 whitespace-nowrap animate-tire-scroll">
            {Array(4).fill(['PIRELLI', 'MICHELIN', 'GOODYEAR', 'CONTINENTAL', 'FIRESTONE', 'BRIDGESTONE', 'YOKOHAMA', 'PRINX', 'DELINTE']).flat().map((brand, i) => (
              <span key={i} className="text-white/30 font-display text-2xl md:text-3xl font-bold tracking-tighter opacity-50 px-2 select-none italic">
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
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary font-medium text-sm md:text-base outline-none transition-all"
                />
                {search && (
                  <button 
                    onClick={() => handleSearch("")}
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
                  <option value="brand">Marca A���Z</option>
                </select>

                <button 
                  onClick={() => setIsFilterMenuOpen(true)}
                  className="lg:hidden bg-primary text-black p-4 rounded-2xl shadow-lg flex-shrink-0"
                >
                  <Filter size={24} />
                </button>
              </div>
            </div>

            {/* Navegação por Aro — links para as landing pages de aro */}
            <AroNavigation />

            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between px-2">
              <span className="text-gray-500 font-medium text-sm">
                {totalResults > 0 ? (
                  <>Mostrando <b className="text-black">{firstItem}–{lastItem}</b> de <b className="text-black">{totalResults}</b> pneus</>
                ) : (
                  <>Nenhum pneu encontrado</>
                )}
              </span>
            </div>

            {/* Paginação — topo */}
            {totalResults > 0 && totalPages > 1 && (
              <PaginationBar
                currentPage={safePage}
                totalPages={totalPages}
                onPageChange={goToPage}
                className="mb-8"
              />
            )}

            {/* Grid */}
            {totalResults > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedTires.map((tire, index) => (
                  <TireCard key={`${tire.id}-${tire.marca}`} tire={tire} index={index} />
                ))}
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

            {/* Paginação — rodapé */}
            {totalResults > 0 && totalPages > 1 && (
              <PaginationBar
                currentPage={safePage}
                totalPages={totalPages}
                onPageChange={goToPage}
                className="mt-12"
              />
            )}

            {/* Bloco SEO — Encontre Pneus por Aro */}
            <AroSeoBlock />
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
                  Ver Resultados ({totalResults})
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// ════════════════════════════════════════════════════════════════
// Subcomponentes de SEO / navegação
// ════════════════════════════════════════════════════════════════

// Helper: gera o array de páginas a exibir, com reticências para muitas páginas.
function getPageItems(current: number, total: number): (number | 'ellipsis')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const items: (number | 'ellipsis')[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) items.push('ellipsis');
  for (let p = start; p <= end; p++) items.push(p);
  if (end < total - 1) items.push('ellipsis');
  items.push(total);
  return items;
}

interface PaginationBarProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

function PaginationBar({ currentPage, totalPages, onPageChange, className = '' }: PaginationBarProps) {
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;
  const pageItems = getPageItems(currentPage, totalPages);

  const navBtn = "h-10 px-3 inline-flex items-center justify-center rounded-xl text-xs font-bold uppercase tracking-wider transition-all border";
  const enabled = "bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black";
  const disabled = "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed";

  return (
    <nav className={`flex flex-wrap items-center justify-center gap-2 ${className}`} aria-label="Paginação do catálogo de pneus">
      <button onClick={() => onPageChange(1)} disabled={isFirst} className={`${navBtn} ${isFirst ? disabled : enabled}`} aria-label="Primeira página">
        <ChevronsLeft size={16} />
      </button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={isFirst} className={`${navBtn} ${isFirst ? disabled : enabled}`} aria-label="Página anterior">
        <ChevronLeft size={16} /> <span className="hidden sm:inline ml-1">Anterior</span>
      </button>

      {pageItems.map((item, i) =>
        item === 'ellipsis' ? (
          <span key={`e-${i}`} className="px-2 text-gray-400 select-none">…</span>
        ) : (
          <button
            key={item}
            onClick={() => onPageChange(item)}
            aria-current={item === currentPage ? 'page' : undefined}
            className={`h-10 w-10 inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all border ${
              item === currentPage
                ? 'bg-primary text-black border-primary shadow-lg shadow-primary/20'
                : 'bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black'
            }`}
          >
            {item}
          </button>
        )
      )}

      <button onClick={() => onPageChange(currentPage + 1)} disabled={isLast} className={`${navBtn} ${isLast ? disabled : enabled}`} aria-label="Próxima página">
        <span className="hidden sm:inline mr-1">Próxima</span> <ChevronRight size={16} />
      </button>
      <button onClick={() => onPageChange(totalPages)} disabled={isLast} className={`${navBtn} ${isLast ? disabled : enabled}`} aria-label="Última página">
        <ChevronsRight size={16} />
      </button>
    </nav>
  );
}

// Navegação por aro (acima da listagem). Cada botão leva à landing page de aro
// já existente e indexada (/pneu-aro-XX-curitiba), evitando conteúdo duplicado.
function AroNavigation() {
  return (
    <section className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 mb-8" aria-labelledby="nav-aro-titulo">
      <h2 id="nav-aro-titulo" className="text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
        <div className="w-3.5 h-3.5 border-2 border-primary rounded-full" /> Pneus por Aro
      </h2>
      <div className="flex flex-wrap gap-2">
        {ARO_NAV.map((aro) => {
          const slug = ARO_SLUG_BY_NUMBER.get(aro);
          if (!slug) return null;
          return (
            <Link
              key={aro}
              to={`/${slug}`}
              className="h-11 px-4 inline-flex items-center justify-center rounded-xl text-sm font-bold bg-gray-50 text-gray-600 border border-gray-100 hover:bg-primary hover:text-black hover:border-primary transition-all"
            >
              Aro {aro}
            </Link>
          );
        })}
      </div>
    </section>
  );
}

// Bloco SEO no rodapé da listagem — "Encontre Pneus por Aro" com texto otimizado
// e links internos para as landing pages de aro.
function AroSeoBlock() {
  return (
    <section className="mt-16 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100" aria-labelledby="seo-aro-titulo">
      <h2 id="seo-aro-titulo" className="text-2xl font-bold uppercase tracking-tight mb-4">
        Encontre Pneus por Aro
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6 text-pretty">
        A Carplus Pneus, no bairro Portão em Curitiba, trabalha com pneus aro 13, aro 14, aro 15,
        aro 16, aro 17, aro 18, aro 19, aro 20, aro 21, aro 22 e aro 23 das principais marcas
        nacionais e importadas, como Michelin, Pirelli, Bridgestone, Goodyear, Continental e
        Yokohama. Escolha o aro do seu veículo para ver as medidas, aplicações e condições de
        montagem, balanceamento e parcelamento em até 10x sem juros.
      </p>
      <div className="flex flex-wrap gap-2">
        {ARO_NAV.map((aro) => {
          const slug = ARO_SLUG_BY_NUMBER.get(aro);
          if (!slug) return null;
          return (
            <Link
              key={aro}
              to={`/${slug}`}
              className="h-11 px-4 inline-flex items-center justify-center rounded-xl text-sm font-bold bg-gray-50 text-gray-700 border border-gray-100 hover:bg-primary hover:text-black hover:border-primary transition-all"
            >
              Pneus Aro {aro}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
