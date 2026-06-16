import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ListFilter as Filter, X, MessageSquare, ChevronRight, ChevronLeft, ChevronsLeft, ChevronsRight, Star, Tag, CarFront, Ruler, BadgeCheck, ChevronDown } from 'lucide-react';
import { Link, Navigate, useSearchParams } from 'react-router-dom';
import { TIRES, Tire } from '../data';
import { ARO_PAGES } from '../data/seoLanding';
import Navbar from './Navbar';
import Footer from './Footer';
import TireCard from './TireCard';
import { useSEO } from '../hooks/useSEO';
import { generateProductListSchema, generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema';
import { detectDominantProfile, resolveThematicLanding, REDIRECT_THRESHOLD } from '../lib/seoIndexing';

const BRANDS = ["Pirelli", "Michelin", "Goodyear", "Continental", "Firestone", "Bridgestone", "Yokohama", "Prinx", "Delinte"];
const RIMS = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const CATEGORIES = ["Econômico", "Conforto", "Conforto Premium", "Performance", "Esportivo", "SUV", "SUV Premium", "All Season"];
const VEHICLE_TYPES = ["Hatch", "Sedan", "SUV", "Picape", "Esportivo", "Sedan Premium", "SUV Premium", "Coupe", "Hatch Esportivo", "Híbrido", "SUV Esportivo"];

// Quantidade de pneus exibidos por página (paginação SEO friendly)
const PER_PAGE = 24;
const BASE_URL = "https://www.carpluspneuseoficina.com.br";

// Mapa aro -> slug da landing page de aro já existente e indexada.
// Reaproveitamos as páginas /pneu-aro-XX-curitiba para NÃO criar conteúdo duplicado.
const ARO_SLUG_BY_NUMBER = new Map<number, string>(ARO_PAGES.map((p) => [p.aro, p.slug]));
// Aros para a navegação (13 ao 23), conforme landing pages disponíveis.
const ARO_NAV = ARO_PAGES.map((p) => p.aro).sort((a, b) => a - b);

// Marcas de pneus em destaque, com link interno para o catálogo filtrado por marca.
const FEATURED_BRANDS = ["Michelin", "Bridgestone", "Goodyear", "Pirelli", "Continental", "Yokohama"];

// Medidas mais procuradas -> slug aceito pela rota /pneu-medida/:medida (ex: 195-55r15).
const POPULAR_MEASURES: Array<{ label: string; slug: string }> = [
  { label: "195/55R15", slug: "195-55r15" },
  { label: "205/55R16", slug: "205-55r16" },
  { label: "175/70R14", slug: "175-70r14" },
  { label: "185/60R15", slug: "185-60r15" },
  { label: "225/45R17", slug: "225-45r17" },
];

// FAQ da página /pneus — usado tanto no schema (FAQPage) quanto na UI (accordion).
const CATALOG_FAQS: Array<{ question: string; answer: string }> = [
  {
    question: "Qual o melhor pneu aro 15?",
    answer:
      "Não existe um único melhor pneu aro 15: depende do seu carro e do uso. Para uso urbano e economia, modelos como Pirelli P400 Evo e Goodyear Assurance são ótimos. Para mais conforto e silêncio, o Michelin Energy XM2+ se destaca, e para desempenho esportivo há opções como o Yokohama. Na Carplus, no Portão em Curitiba, indicamos a medida certa (185/60R15, 195/55R15 e outras) conforme o seu veículo.",
  },
  {
    question: "Como escolher o pneu correto?",
    answer:
      "O pneu correto é definido pela medida original do veículo, que está na lateral do pneu atual (ex: 195/55R15) ou na etiqueta da porta do motorista. Respeite a medida, os índices de carga e velocidade e escolha a categoria (econômico, conforto ou performance) de acordo com o seu uso. Em caso de dúvida, informe o modelo e ano do carro pelo WhatsApp (41) 3082-7282 que indicamos a opção ideal.",
  },
  {
    question: "Quando trocar os pneus?",
    answer:
      "Troque os pneus quando o sulco atingir o indicador de desgaste (TWI), em torno de 1,6 mm de profundidade, ou ao notar trincas, bolhas, deformações e vibrações anormais. Em geral, recomenda-se avaliar os pneus a cada 40.000 a 50.000 km ou a cada 5 anos, mesmo com pouca rodagem. A Carplus faz a avaliação gratuita no Portão, em Curitiba.",
  },
  {
    question: "Qual a calibragem ideal?",
    answer:
      "A calibragem ideal é a recomendada pela montadora, indicada na etiqueta da porta do motorista ou no manual do veículo, normalmente entre 30 e 34 PSI para carros de passeio. Calibre sempre com os pneus frios e verifique a pressão a cada 15 dias. Com carga total ou viagens longas, siga a pressão específica indicada pela montadora. Na Carplus calibramos com nitrogênio e ar normal.",
  },
];

export default function TireCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get URL params directly
  const urlMarca = searchParams.get('marca');
  const urlAro = searchParams.get('aro');
  const urlLargura = searchParams.get('largura');
  const urlAltura = searchParams.get('altura');
  const urlPage = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = Number.isNaN(urlPage) || urlPage < 1 ? 1 : urlPage;
  // Termo de busca vindo do SearchAction do Google (sitelinks searchbox): /pneus?q=...
  const urlQuery = searchParams.get('q') || '';

  const [search, setSearch] = useState(urlQuery);
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
    if (urlQuery) setSearch(urlQuery);
  }, [urlMarca, urlAro, urlLargura, urlAltura, urlQuery]);

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

  // ───── Schemas estruturados (JSON-LD) ─────
  // Aro ativo (via filtro ou URL) para enriquecer o breadcrumb: Home > Pneus > Pneu Aro 15.
  const activeAro = urlAro
    ? parseInt(urlAro)
    : selectedRims.length === 1
      ? selectedRims[0]
      : null;

  const schemaJSON = useMemo(() => {
    // 1. BreadcrumbList — Home > Pneus (> Pneu Aro XX quando há aro selecionado)
    const breadcrumbItems = [
      { name: "Home", url: BASE_URL },
      { name: "Pneus", url: `${BASE_URL}/pneus` },
    ];
    if (activeAro) {
      const aroSlug = ARO_SLUG_BY_NUMBER.get(activeAro);
      breadcrumbItems.push({
        name: `Pneu Aro ${activeAro}`,
        url: aroSlug ? `${BASE_URL}/${aroSlug}` : `${BASE_URL}/pneus?aro=${activeAro}`,
      });
    }
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);

    // 2. ItemList — apenas os pneus da página atual, com posição absoluta no catálogo.
    const itemListSchema = generateProductListSchema(
      paginatedTires.map((tire, index) => ({
        name: `${tire.nome} ${tire.medida} Curitiba`,
        url: `${BASE_URL}/pneu/${tire.slug}`,
        image: `${BASE_URL}${tire.imagemGrande}`,
        position: startIndex + index + 1,
      }))
    );

    // NOTA: Páginas de categoria/listagem (/pneus) NÃO emitem nós Product isolados.
    // Sem preço real por pneu, um Product com `offers` sem `price` gera erro de
    // Merchant Listings no Google. A vitrine é representada pelo ItemList acima
    // (padrão recomendado); o Product completo vive na página de detalhe (/pneu/:slug).

    // 7. FAQPage Schema
    const faqSchema = generateFaqSchema(CATALOG_FAQS);

    return [breadcrumbSchema, itemListSchema, faqSchema];
  }, [paginatedTires, startIndex, activeAro]);

  // Há filtros/busca ativos? Nesse caso a URL deixa de ser canônica e recebe noindex
  // (mantém o comportamento anti-conteúdo-duplicado das URLs com ?marca=, ?aro= etc.).
  const hasActiveFilters =
    !!urlMarca || !!urlAro || !!urlLargura || !!urlAltura ||
    selectedBrands.length > 0 || selectedRims.length > 0 ||
    selectedLargura !== null || selectedAltura !== null ||
    selectedCategories.length > 0 || selectedVehicleTypes.length > 0 ||
    search.trim().length > 0;

  // ───── Perfil dominante da paginação ─────
  // Detecta o padrão predominante (marca/aro/categoria) entre os pneus exibidos.
  // Em páginas paginadas puras (sem filtros), um padrão forte (≥60%) permite
  // substituir o título genérico "Página N" por uma intenção real e concentrar a
  // autoridade na landing temática já existente (ex.: /pneus-michelin-curitiba).
  const dominantProfile = useMemo(
    () => detectDominantProfile(paginatedTires),
    [paginatedTires],
  );
  const thematicLanding =
    safePage > 1 && !hasActiveFilters ? resolveThematicLanding(dominantProfile) : null;

  // ───── SEO dinâmico por página ─────
  let seoTitle: string;
  let seoDescription: string;
  let seoCanonical: string;

  if (thematicLanding) {
    // Página de paginação com padrão forte → intenção de busca real + canonical
    // apontando para a landing temática indexável (consolida o link equity).
    seoTitle = `${thematicLanding.label} | Carplus Pneus`;
    seoDescription = `${thematicLanding.label} na Carplus, no bairro Portão. Confira modelos, medidas e preços com montagem inclusa e até 10x sem juros. Orçamento no WhatsApp (41) 3082-7282.`;
    seoCanonical = `${BASE_URL}/${thematicLanding.slug}`;
  } else if (safePage > 1) {
    // Sem padrão forte: mantém genérica, porém noindex e fora do sitemap.
    seoTitle = "Catálogo de Pneus em Curitiba | Carplus Centro Automotivo – Portão";
    seoDescription = "Encontre o pneu ideal para seu carro na Carplus em Curitiba. Pneus Pirelli, Michelin, Goodyear, Continental e mais. Montagem gratuita, até 10x sem juros.";
    seoCanonical = `${BASE_URL}/pneus`;
  } else {
    seoTitle = "Catálogo de Pneus em Curitiba | Carplus Centro Automotivo – Portão";
    seoDescription = "Encontre o pneu ideal para seu carro na Carplus em Curitiba. Pneus Pirelli, Michelin, Goodyear, Continental e mais. Montagem gratuita, até 10x sem juros.";
    seoCanonical = `${BASE_URL}/pneus`;
  }

  useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical: seoCanonical,
    ogType: "website",
    // Paginação (/pneus?page=2+) e URLs com filtros ativos recebem noindex,follow.
    // Apenas a primeira página (/pneus) permanece indexável e canônica.
    noindex: hasActiveFilters || safePage > 1,
    keywords: [
      'pneus curitiba', 'pneu aro 13', 'pneu aro 14', 'pneu aro 15', 'pneu aro 16',
      'pneu aro 17', 'pneu aro 18', 'pneu aro 19', 'pneu aro 20', 'pneu aro 21',
      'pneu aro 22', 'pneu aro 23',
    ],
    schemaJSON,
    // Quando a página vira landing temática (canonical apontando para outra URL),
    // suprimimos prev/next para não enviar sinais de paginação contraditórios.
    prevUrl: !hasActiveFilters && !thematicLanding && safePage > 1
      ? (safePage - 1 === 1 ? `${BASE_URL}/pneus` : `${BASE_URL}/pneus?page=${safePage - 1}`)
      : undefined,
    nextUrl: !hasActiveFilters && !thematicLanding && safePage < totalPages
      ? `${BASE_URL}/pneus?page=${safePage + 1}`
      : undefined,
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

  // ───── 301-equivalente (SPA) para paginações fortemente dominadas ─────
  // Quando a paginação tem dominância ≥ REDIRECT_THRESHOLD (85%) e existe landing
  // temática correspondente, redirecionamos definitivamente para consolidar a
  // autoridade. No edge, o vercel.json aplica o 301 real; aqui garantimos a mesma
  // experiência dentro da SPA (e para crawlers que executam JS).
  const shouldRedirect =
    safePage > 1 &&
    !hasActiveFilters &&
    !!thematicLanding &&
    !!dominantProfile &&
    dominantProfile.share >= REDIRECT_THRESHOLD;

  if (shouldRedirect && thematicLanding) {
    return <Navigate to={`/${thematicLanding.slug}`} replace />;
  }

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

            {/* Banner de intenção: quando a paginação tem um padrão forte (≥60%),
                direciona o usuário (e a autoridade) para a landing temática real,
                em vez de manter uma página genérica "Página N". */}
            {thematicLanding && (
              <Link
                to={`/${thematicLanding.slug}`}
                className="flex items-center justify-between gap-4 bg-dark text-white rounded-3xl px-6 py-5 mb-8 shadow-xl hover:bg-black transition-colors group"
              >
                <span className="text-sm md:text-base font-medium">
                  Veja a página completa de{' '}
                  <strong className="font-bold">{thematicLanding.label}</strong> com modelos,
                  preços e conteúdo técnico exclusivo.
                </span>
                <span className="flex items-center gap-1 text-primary font-bold text-sm uppercase tracking-widest whitespace-nowrap">
                  Ver página
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )}

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

            {/* Bloco — Marcas de Pneus */}
            <BrandsBlock />

            {/* Bloco — Pneus Mais Procurados (medidas populares) */}
            <PopularMeasuresBlock />

            {/* FAQ SEO da página de pneus */}
            <CatalogFaqBlock />
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

// Bloco "Marcas de Pneus" — links internos para o catálogo filtrado por marca.
function BrandsBlock() {
  return (
    <section className="mt-8 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100" aria-labelledby="marcas-titulo">
      <h2 id="marcas-titulo" className="text-2xl font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
        <BadgeCheck className="text-primary" size={24} /> Marcas de Pneus
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6 text-pretty">
        Trabalhamos com as principais marcas de pneus do mercado em Curitiba. Escolha a sua marca
        preferida e veja todos os modelos disponíveis na Carplus, no bairro Portão, com montagem,
        balanceamento e parcelamento em até 10x sem juros.
      </p>
      <div className="flex flex-wrap gap-2">
        {FEATURED_BRANDS.map((brand) => (
          <Link
            key={brand}
            to={`/pneus?marca=${encodeURIComponent(brand)}`}
            className="h-11 px-5 inline-flex items-center justify-center rounded-xl text-sm font-bold bg-gray-50 text-gray-700 border border-gray-100 hover:bg-primary hover:text-black hover:border-primary transition-all"
          >
            Pneus {brand}
          </Link>
        ))}
      </div>
    </section>
  );
}

// Bloco "Pneus Mais Procurados" — links para as medidas populares (/pneu-medida/:medida).
function PopularMeasuresBlock() {
  return (
    <section className="mt-8 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100" aria-labelledby="medidas-titulo">
      <h2 id="medidas-titulo" className="text-2xl font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
        <Ruler className="text-primary" size={24} /> Pneus Mais Procurados
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6 text-pretty">
        As medidas de pneu mais buscadas em Curitiba para hatches, sedans e SUVs. Clique na medida
        do seu veículo para ver os modelos disponíveis, aplicações e o melhor preço com montagem
        inclusa na Carplus.
      </p>
      <div className="flex flex-wrap gap-2">
        {POPULAR_MEASURES.map((m) => (
          <Link
            key={m.slug}
            to={`/pneu-medida/${m.slug}`}
            className="h-11 px-5 inline-flex items-center justify-center rounded-xl text-sm font-bold bg-gray-50 text-gray-700 border border-gray-100 hover:bg-primary hover:text-black hover:border-primary transition-all"
          >
            {m.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

// FAQ SEO da página /pneus — accordion acessível, sincronizado com o FAQPage Schema.
function CatalogFaqBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="mt-8 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100" aria-labelledby="faq-titulo">
      <h2 id="faq-titulo" className="text-2xl font-bold uppercase tracking-tight mb-6">
        Perguntas Frequentes sobre Pneus
      </h2>
      <div className="flex flex-col gap-3">
        {CATALOG_FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-primary transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </h3>
              {isOpen && (
                <div className="px-5 pb-5 text-gray-600 leading-relaxed text-pretty">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
