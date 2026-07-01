import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ListFilter, Tag, CarFront, Search, X, ChevronRight, ChevronsLeft, ChevronLeft, ChevronsRight, BadgeCheck, Ruler, ChevronDown } from "lucide-react";
import { useSearchParams, Navigate, Link } from "react-router-dom";
import { TIRES } from "./tire-catalog-f1Gw3RQz.js";
import { b as ARO_PAGES } from "../main.mjs";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { T as TireCard } from "./TireCard-CTgUlHZr.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import { g as generateBreadcrumbSchema, b as generateProductListSchema, c as generateProductSchema, a as generateFaqSchema } from "./schema-DUlgfpSk.js";
import { detectDominantProfile, resolveThematicLanding, REDIRECT_THRESHOLD } from "./seoIndexing-wgbeegp_.js";
import "vite-react-ssg";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
const BRANDS = ["Pirelli", "Michelin", "Goodyear", "Continental", "Firestone", "Bridgestone", "Yokohama", "Prinx", "Delinte"];
const RIMS = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
const CATEGORIES = ["Econômico", "Conforto", "Conforto Premium", "Performance", "Esportivo", "SUV", "SUV Premium", "All Season"];
const VEHICLE_TYPES = ["Hatch", "Sedan", "SUV", "Picape", "Esportivo", "Sedan Premium", "SUV Premium", "Coupe", "Hatch Esportivo", "Híbrido", "SUV Esportivo"];
const PER_PAGE = 24;
const BASE_URL = "https://www.carpluspneuseoficina.com.br";
const ARO_SLUG_BY_NUMBER = new Map(ARO_PAGES.map((p) => [p.aro, p.slug]));
const ARO_NAV = ARO_PAGES.map((p) => p.aro).sort((a, b) => a - b);
const FEATURED_BRANDS = ["Michelin", "Bridgestone", "Goodyear", "Pirelli", "Continental", "Yokohama"];
const POPULAR_MEASURES = [
  { label: "195/55R15", slug: "195-55r15" },
  { label: "205/55R16", slug: "205-55r16" },
  { label: "175/70R14", slug: "175-70r14" },
  { label: "185/60R15", slug: "185-60r15" },
  { label: "225/45R17", slug: "225-45r17" }
];
const CATALOG_FAQS = [
  {
    question: "Qual o melhor pneu aro 15?",
    answer: "Não existe um único melhor pneu aro 15: depende do seu carro e do uso. Para uso urbano e economia, modelos como Pirelli P400 Evo e Goodyear Assurance são ótimos. Para mais conforto e silêncio, o Michelin Energy XM2+ se destaca, e para desempenho esportivo há opções como o Yokohama. Na Carplus, no Portão em Curitiba, indicamos a medida certa (185/60R15, 195/55R15 e outras) conforme o seu veículo."
  },
  {
    question: "Como escolher o pneu correto?",
    answer: "O pneu correto é definido pela medida original do veículo, que está na lateral do pneu atual (ex: 195/55R15) ou na etiqueta da porta do motorista. Respeite a medida, os índices de carga e velocidade e escolha a categoria (econômico, conforto ou performance) de acordo com o seu uso. Em caso de dúvida, informe o modelo e ano do carro pelo WhatsApp (41) 3082-7282 que indicamos a opção ideal."
  },
  {
    question: "Quando trocar os pneus?",
    answer: "Troque os pneus quando o sulco atingir o indicador de desgaste (TWI), em torno de 1,6 mm de profundidade, ou ao notar trincas, bolhas, deformações e vibrações anormais. Em geral, recomenda-se avaliar os pneus a cada 40.000 a 50.000 km ou a cada 5 anos, mesmo com pouca rodagem. A Carplus faz a avaliação gratuita no Portão, em Curitiba."
  },
  {
    question: "Qual a calibragem ideal?",
    answer: "A calibragem ideal é a recomendada pela montadora, indicada na etiqueta da porta do motorista ou no manual do veículo, normalmente entre 30 e 34 PSI para carros de passeio. Calibre sempre com os pneus frios e verifique a pressão a cada 15 dias. Com carga total ou viagens longas, siga a pressão específica indicada pela montadora. Na Carplus calibramos com nitrogênio e ar normal."
  }
];
function TireCatalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlMarca = searchParams.get("marca");
  const urlAro = searchParams.get("aro");
  const urlLargura = searchParams.get("largura");
  const urlAltura = searchParams.get("altura");
  const urlPage = parseInt(searchParams.get("page") || "1", 10);
  const currentPage = Number.isNaN(urlPage) || urlPage < 1 ? 1 : urlPage;
  const urlQuery = searchParams.get("q") || "";
  const [search, setSearch] = useState(urlQuery);
  const [selectedBrands, setSelectedBrands] = useState(() => {
    if (urlMarca) {
      const matchedBrand = BRANDS.find((b) => b.toLowerCase() === urlMarca.toLowerCase());
      return matchedBrand ? [matchedBrand] : [];
    }
    return [];
  });
  const [selectedRims, setSelectedRims] = useState(() => {
    return urlAro ? [parseInt(urlAro)] : [];
  });
  const [selectedLargura, setSelectedLargura] = useState(() => {
    return urlLargura ? parseInt(urlLargura) : null;
  });
  const [selectedAltura, setSelectedAltura] = useState(() => {
    return urlAltura ? parseInt(urlAltura) : null;
  });
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");
  useEffect(() => {
    if (urlMarca) {
      const matchedBrand = BRANDS.find((b) => b.toLowerCase() === urlMarca.toLowerCase());
      if (matchedBrand) setSelectedBrands([matchedBrand]);
    }
    if (urlAro) setSelectedRims([parseInt(urlAro)]);
    if (urlLargura) setSelectedLargura(parseInt(urlLargura));
    if (urlAltura) setSelectedAltura(parseInt(urlAltura));
    if (urlQuery) setSearch(urlQuery);
  }, [urlMarca, urlAro, urlLargura, urlAltura, urlQuery]);
  const filteredTires = useMemo(() => {
    let effectiveBrands = [...selectedBrands];
    if (urlMarca && effectiveBrands.length === 0) {
      const matchedBrand = BRANDS.find((b) => b.toLowerCase() === urlMarca.toLowerCase());
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
    const result = TIRES.filter((tire) => {
      if (!tire) return false;
      const matchesSearch = tire.nome.toLowerCase().includes(search.toLowerCase()) || tire.medida.toLowerCase().includes(search.toLowerCase()) || tire.carros.some((c) => c.toLowerCase().includes(search.toLowerCase()));
      const matchesBrand = effectiveBrands.length === 0 || effectiveBrands.includes(tire.marca);
      const matchesRim = effectiveRims.length === 0 || effectiveRims.includes(tire.aro);
      const matchesLargura = !effectiveLargura || tire.largura === effectiveLargura;
      const matchesAltura = !effectiveAltura || tire.perfil === effectiveAltura;
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(tire.categoria);
      const matchesVehicle = selectedVehicleTypes.length === 0 || tire.tipoVeiculo.some((v) => selectedVehicleTypes.includes(v));
      return matchesSearch && matchesBrand && matchesRim && matchesLargura && matchesAltura && matchesCategory && matchesVehicle;
    }).sort((a, b) => {
      if (sortBy === "rim-asc") return a.aro - b.aro;
      if (sortBy === "rim-desc") return b.aro - a.aro;
      if (sortBy === "brand") return a.marca.localeCompare(b.marca);
      return a.marca.localeCompare(b.marca) || a.aro - b.aro;
    });
    return result;
  }, [search, selectedBrands, selectedRims, selectedLargura, selectedAltura, selectedCategories, selectedVehicleTypes, sortBy, urlMarca, urlAro, urlLargura, urlAltura]);
  const totalResults = filteredTires.length;
  const totalPages = Math.max(1, Math.ceil(totalResults / PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const startIndex = (safePage - 1) * PER_PAGE;
  const paginatedTires = filteredTires.slice(startIndex, startIndex + PER_PAGE);
  const firstItem = totalResults === 0 ? 0 : startIndex + 1;
  const lastItem = Math.min(startIndex + PER_PAGE, totalResults);
  const activeAro = urlAro ? parseInt(urlAro) : selectedRims.length === 1 ? selectedRims[0] : null;
  const schemaJSON = useMemo(() => {
    const breadcrumbItems = [
      { name: "Home", url: BASE_URL },
      { name: "Pneus", url: `${BASE_URL}/pneus` }
    ];
    if (activeAro) {
      const aroSlug = ARO_SLUG_BY_NUMBER.get(activeAro);
      breadcrumbItems.push({
        name: `Pneu Aro ${activeAro}`,
        url: aroSlug ? `${BASE_URL}/${aroSlug}` : `${BASE_URL}/pneus?aro=${activeAro}`
      });
    }
    const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbItems);
    const itemListSchema = generateProductListSchema(
      paginatedTires.map((tire, index) => ({
        name: `${tire.nome} ${tire.medida} Curitiba`,
        url: `${BASE_URL}/pneu/${tire.slug}`,
        image: `${BASE_URL}${tire.imagemGrande}`,
        position: startIndex + index + 1
      }))
    );
    const productSchemas = paginatedTires.slice(0, 12).map(
      (tire) => generateProductSchema({
        name: `${tire.marca} ${tire.nome} ${tire.medida} - Curitiba`,
        description: tire.descricao,
        image: `${BASE_URL}${tire.imagemGrande}`,
        sku: tire.slug,
        brand: tire.marca,
        availability: "InStock",
        url: `${BASE_URL}/pneu/${tire.slug}`
      })
    );
    const faqSchema = generateFaqSchema(CATALOG_FAQS);
    return [breadcrumbSchema, itemListSchema, faqSchema, ...productSchemas];
  }, [paginatedTires, startIndex, activeAro]);
  const hasActiveFilters = !!urlMarca || !!urlAro || !!urlLargura || !!urlAltura || selectedBrands.length > 0 || selectedRims.length > 0 || selectedLargura !== null || selectedAltura !== null || selectedCategories.length > 0 || selectedVehicleTypes.length > 0 || search.trim().length > 0;
  const dominantProfile = useMemo(
    () => detectDominantProfile(paginatedTires),
    [paginatedTires]
  );
  const thematicLanding = safePage > 1 && !hasActiveFilters ? resolveThematicLanding(dominantProfile) : null;
  let seoTitle;
  let seoDescription;
  let seoCanonical;
  if (thematicLanding) {
    seoTitle = `${thematicLanding.label} | Carplus Pneus`;
    seoDescription = `${thematicLanding.label} na Carplus, no bairro Portão. Confira modelos, medidas e preços com montagem inclusa e até 10x sem juros. Orçamento no WhatsApp (41) 3082-7282.`;
    seoCanonical = `${BASE_URL}/${thematicLanding.slug}`;
  } else if (safePage > 1) {
    seoTitle = "Catálogo de Pneus em Curitiba | Carplus Centro Automotivo – Portão";
    seoDescription = "Encontre o pneu ideal para seu carro na Carplus em Curitiba. Pneus Pirelli, Michelin, Goodyear, Continental e mais. Montagem gratuita, até 10x sem juros.";
    seoCanonical = `${BASE_URL}/pneus`;
  } else {
    seoTitle = "Catálogo de Pneus em Curitiba | Carplus Centro Automotivo – Portão";
    seoDescription = "Encontre o pneu ideal para seu carro na Carplus em Curitiba. Pneus Pirelli, Michelin, Goodyear, Continental e mais. Montagem gratuita, até 10x sem juros.";
    seoCanonical = `${BASE_URL}/pneus`;
  }
  const __seo = useSEO({
    title: seoTitle,
    description: seoDescription,
    canonical: seoCanonical,
    ogType: "website",
    // Paginação (/pneus?page=2+) e URLs com filtros ativos recebem noindex,follow.
    // Apenas a primeira página (/pneus) permanece indexável e canônica.
    noindex: hasActiveFilters || safePage > 1,
    keywords: [
      "pneus curitiba",
      "pneu aro 13",
      "pneu aro 14",
      "pneu aro 15",
      "pneu aro 16",
      "pneu aro 17",
      "pneu aro 18",
      "pneu aro 19",
      "pneu aro 20",
      "pneu aro 21",
      "pneu aro 22",
      "pneu aro 23"
    ],
    schemaJSON,
    // Quando a página vira landing temática (canonical apontando para outra URL),
    // suprimimos prev/next para não enviar sinais de paginação contraditórios.
    prevUrl: !hasActiveFilters && !thematicLanding && safePage > 1 ? safePage - 1 === 1 ? `${BASE_URL}/pneus` : `${BASE_URL}/pneus?page=${safePage - 1}` : void 0,
    nextUrl: !hasActiveFilters && !thematicLanding && safePage < totalPages ? `${BASE_URL}/pneus?page=${safePage + 1}` : void 0
  });
  const goToPage = (page) => {
    const params = new URLSearchParams(searchParams);
    if (page <= 1) {
      params.delete("page");
    } else {
      params.set("page", String(page));
    }
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const resetToFirstPage = () => {
    if (currentPage !== 1) {
      const params = new URLSearchParams(searchParams);
      params.delete("page");
      setSearchParams(params);
    }
  };
  const toggleFilter = (list, setList, value) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
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
  const handleSearch = (value) => {
    setSearch(value);
    resetToFirstPage();
  };
  const shouldRedirect = safePage > 1 && !hasActiveFilters && !!thematicLanding && !!dominantProfile && dominantProfile.share >= REDIRECT_THRESHOLD;
  if (shouldRedirect && thematicLanding) {
    return /* @__PURE__ */ jsx(Navigate, { to: `/${thematicLanding.slug}`, replace: true });
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "bg-dark pt-32 md:pt-40 pb-0 text-white relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10", children: /* @__PURE__ */ jsx(
        "img",
        {
          loading: "lazy",
          src: "/images/loja/loja-de-pneus-curitiba.webp",
          width: 1067,
          height: 800,
          className: "w-full h-full object-cover",
          alt: "Fundo"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6 relative z-10 text-center pb-16", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block bg-primary text-black px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 tracking-widest", children: "Revendedor Multimarcas" }),
            /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight italic text-center", children: [
              "Catálogo de Pneus ",
              /* @__PURE__ */ jsx("br", {}),
              "em Curitiba"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto font-medium text-center", children: "Encontre o pneu ideal para seu carro com filtros avançados por medida, aro, categoria e modelo de veículo. Montagem técnica gratuita no Portão." })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "bg-dark/50 backdrop-blur-md py-4 overflow-hidden border-t border-white/5", children: /* @__PURE__ */ jsx("div", { className: "flex gap-12 whitespace-nowrap animate-tire-scroll", children: Array(4).fill(["PIRELLI", "MICHELIN", "GOODYEAR", "CONTINENTAL", "FIRESTONE", "BRIDGESTONE", "YOKOHAMA", "PRINX", "DELINTE"]).flat().map((brand, i) => /* @__PURE__ */ jsx("span", { className: "text-white/30 font-display text-2xl md:text-3xl font-bold tracking-tighter opacity-50 px-2 select-none italic", children: brand }, i)) }) }),
      /* @__PURE__ */ jsx("style", { children: `
          @keyframes tire-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-tire-scroll {
            animation: tire-scroll 40s linear infinite;
          }
        ` })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "max-w-7xl mx-auto px-4 md:px-6 py-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
      /* @__PURE__ */ jsx("aside", { className: "hidden lg:block w-72 flex-shrink-0", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-xl border border-gray-100 sticky top-28", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold uppercase flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ListFilter, { size: 20 }),
            " Filtros"
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: clearFilters,
              className: "text-xs text-red-600 font-bold hover:underline",
              children: "Limpar Todos"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Tag, { size: 14, className: "text-primary" }),
            " Marca"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: BRANDS.map((brand) => /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer group", children: [
            /* @__PURE__ */ jsx("div", { className: "relative flex items-center justify-center", children: /* @__PURE__ */ jsx(
              "input",
              {
                type: "checkbox",
                checked: selectedBrands.includes(brand),
                onChange: () => toggleFilter(selectedBrands, setSelectedBrands, brand),
                className: "w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
              }
            ) }),
            /* @__PURE__ */ jsx("span", { className: `text-sm ${selectedBrands.includes(brand) ? "font-bold text-black" : "text-gray-500"} group-hover:text-black transition-colors`, children: brand })
          ] }, brand)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("div", { className: "w-3.5 h-3.5 border-2 border-primary rounded-full" }),
            " Aro"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2", children: RIMS.map((rim) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => toggleFilter(selectedRims, setSelectedRims, rim),
              className: `h-10 rounded-xl text-xs font-bold transition-all ${selectedRims.includes(rim) ? "bg-primary text-black shadow-lg shadow-primary/20 scale-105" : "bg-gray-50 text-gray-400 hover:bg-gray-100"}`,
              children: rim
            },
            rim
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold uppercase tracking-widest mb-4", children: "Categoria" }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => toggleFilter(selectedCategories, setSelectedCategories, cat),
              className: `px-4 py-2 rounded-xl text-[10px] uppercase font-bold transition-all border ${selectedCategories.includes(cat) ? "bg-black text-white border-black" : "bg-white text-gray-500 border-gray-200 hover:border-black"}`,
              children: cat
            },
            cat
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-sm font-bold uppercase tracking-widest mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CarFront, { size: 14, className: "text-primary" }),
            " Veículo"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-2", children: VEHICLE_TYPES.map((type) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => toggleFilter(selectedVehicleTypes, setSelectedVehicleTypes, type),
              className: `flex items-center justify-center h-10 px-4 rounded-xl text-xs font-bold transition-all ${selectedVehicleTypes.includes(type) ? "bg-surface text-white scale-105" : "bg-gray-50 text-gray-500 hover:bg-gray-100"}`,
              children: type
            },
            type
          )) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-4 md:p-6 shadow-xl border border-gray-100 mb-8 flex flex-col md:flex-row gap-4 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative flex-grow w-full", children: [
            /* @__PURE__ */ jsx(Search, { className: "absolute left-5 top-1/2 -translate-y-1/2 text-gray-400", size: 20 }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                placeholder: "Pesquise por medida, modelo ou carro (ex: 195/60R15 ou Onix)...",
                value: search,
                onChange: (e) => handleSearch(e.target.value),
                className: "w-full bg-gray-50 border-none rounded-2xl py-4 pl-14 pr-6 focus:ring-2 focus:ring-primary font-medium text-sm md:text-base outline-none transition-all"
              }
            ),
            search && /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => handleSearch(""),
                className: "absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black",
                children: /* @__PURE__ */ jsx(X, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 w-full md:w-auto", children: [
            /* @__PURE__ */ jsxs(
              "select",
              {
                value: sortBy,
                onChange: (e) => setSortBy(e.target.value),
                className: "bg-gray-50 border-none rounded-2xl py-4 px-6 outline-none font-bold text-xs uppercase tracking-widest cursor-pointer focus:ring-2 focus:ring-primary transition-all w-full md:w-auto",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "relevance", children: "Mais Relevante" }),
                  /* @__PURE__ */ jsx("option", { value: "rim-asc", children: "Aro Crescente" }),
                  /* @__PURE__ */ jsx("option", { value: "rim-desc", children: "Aro Decrescente" }),
                  /* @__PURE__ */ jsx("option", { value: "brand", children: "Marca A���Z" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setIsFilterMenuOpen(true),
                className: "lg:hidden bg-primary text-black p-4 rounded-2xl shadow-lg flex-shrink-0",
                children: /* @__PURE__ */ jsx(ListFilter, { size: 24 })
              }
            )
          ] })
        ] }),
        thematicLanding && /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/${thematicLanding.slug}`,
            className: "flex items-center justify-between gap-4 bg-dark text-white rounded-3xl px-6 py-5 mb-8 shadow-xl hover:bg-black transition-colors group",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "text-sm md:text-base font-medium", children: [
                "Veja a página completa de",
                " ",
                /* @__PURE__ */ jsx("strong", { className: "font-bold", children: thematicLanding.label }),
                " com modelos, preços e conteúdo técnico exclusivo."
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-primary font-bold text-sm uppercase tracking-widest whitespace-nowrap", children: [
                "Ver página",
                /* @__PURE__ */ jsx(ChevronRight, { size: 18, className: "group-hover:translate-x-1 transition-transform" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(AroNavigation, {}),
        /* @__PURE__ */ jsx("div", { className: "mb-6 flex items-center justify-between px-2", children: /* @__PURE__ */ jsx("span", { className: "text-gray-500 font-medium text-sm", children: totalResults > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
          "Mostrando ",
          /* @__PURE__ */ jsxs("b", { className: "text-black", children: [
            firstItem,
            "–",
            lastItem
          ] }),
          " de ",
          /* @__PURE__ */ jsx("b", { className: "text-black", children: totalResults }),
          " pneus"
        ] }) : /* @__PURE__ */ jsx(Fragment, { children: "Nenhum pneu encontrado" }) }) }),
        totalResults > 0 && totalPages > 1 && /* @__PURE__ */ jsx(
          PaginationBar,
          {
            currentPage: safePage,
            totalPages,
            onPageChange: goToPage,
            className: "mb-8"
          }
        ),
        totalResults > 0 ? /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", children: paginatedTires.map((tire, index) => /* @__PURE__ */ jsx(TireCard, { tire, index }, `${tire.id}-${tire.marca}`)) }) : /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-20 text-center shadow-xl border border-gray-100", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-300", children: /* @__PURE__ */ jsx(Search, { size: 48 }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 uppercase", children: "Nenhum pneu encontrado" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-8 max-w-sm mx-auto", children: "Tente ajustar seus filtros ou a busca para encontrar o que procura." }),
          /* @__PURE__ */ jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: clearFilters,
              className: "bg-primary text-black px-10 py-4 rounded-xl font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/20",
              children: "Limpar Todos os Filtros"
            }
          )
        ] }),
        totalResults > 0 && totalPages > 1 && /* @__PURE__ */ jsx(
          PaginationBar,
          {
            currentPage: safePage,
            totalPages,
            onPageChange: goToPage,
            className: "mt-12"
          }
        ),
        /* @__PURE__ */ jsx(AroSeoBlock, {}),
        /* @__PURE__ */ jsx(BrandsBlock, {}),
        /* @__PURE__ */ jsx(PopularMeasuresBlock, {}),
        /* @__PURE__ */ jsx(CatalogFaqBlock, {})
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isFilterMenuOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          onClick: () => setIsFilterMenuOpen(false),
          className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] lg:hidden"
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          className: "fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white z-[1001] lg:hidden p-8 overflow-y-auto",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold uppercase italic tracking-tighter", children: "Filtros" }),
              /* @__PURE__ */ jsx("button", { onClick: () => setIsFilterMenuOpen(false), className: "p-2 hover:bg-gray-100 rounded-full", children: /* @__PURE__ */ jsx(X, {}) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => {
                    clearFilters();
                    setIsFilterMenuOpen(false);
                  },
                  className: "w-full text-center text-sm text-red-600 font-bold uppercase tracking-widest border border-red-100 py-3 rounded-xl",
                  children: "Limpar Filtros"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "mb-0", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold uppercase tracking-tighter mb-4 flex items-center gap-2", children: "Marca" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: BRANDS.map((brand) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => toggleFilter(selectedBrands, setSelectedBrands, brand),
                    className: `h-12 rounded-xl text-xs font-bold transition-all border ${selectedBrands.includes(brand) ? "bg-primary text-black border-primary" : "bg-white text-gray-500 border-gray-100"}`,
                    children: brand
                  },
                  brand
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-0", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold uppercase tracking-tighter mb-4 flex items-center gap-2", children: "Aro" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-2", children: RIMS.map((rim) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => toggleFilter(selectedRims, setSelectedRims, rim),
                    className: `h-12 rounded-xl text-xs font-bold transition-all border ${selectedRims.includes(rim) ? "bg-primary text-black border-primary" : "bg-white text-gray-500 border-gray-100"}`,
                    children: rim
                  },
                  rim
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-0", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold uppercase tracking-tighter mb-4", children: "Categoria" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((cat) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => toggleFilter(selectedCategories, setSelectedCategories, cat),
                    className: `px-4 py-3 rounded-xl text-[10px] uppercase font-bold transition-all border ${selectedCategories.includes(cat) ? "bg-black text-white border-black" : "bg-white text-gray-400 border-gray-100"}`,
                    children: cat
                  },
                  cat
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-12 sticky bottom-0 bg-white pt-4 pb-2", children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setIsFilterMenuOpen(false),
                className: "w-full bg-surface text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl",
                children: [
                  "Ver Resultados (",
                  totalResults,
                  ")"
                ]
              }
            ) })
          ]
        }
      )
    ] }) })
  ] });
}
function getPageItems(current, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const items = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  if (start > 2) items.push("ellipsis");
  for (let p = start; p <= end; p++) items.push(p);
  if (end < total - 1) items.push("ellipsis");
  items.push(total);
  return items;
}
function PaginationBar({ currentPage, totalPages, onPageChange, className = "" }) {
  const isFirst = currentPage <= 1;
  const isLast = currentPage >= totalPages;
  const pageItems = getPageItems(currentPage, totalPages);
  const navBtn = "h-10 px-3 inline-flex items-center justify-center rounded-xl text-xs font-bold uppercase tracking-wider transition-all border";
  const enabled = "bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black";
  const disabled = "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed";
  return /* @__PURE__ */ jsxs("nav", { className: `flex flex-wrap items-center justify-center gap-2 ${className}`, "aria-label": "Paginação do catálogo de pneus", children: [
    /* @__PURE__ */ jsx("button", { onClick: () => onPageChange(1), disabled: isFirst, className: `${navBtn} ${isFirst ? disabled : enabled}`, "aria-label": "Primeira página", children: /* @__PURE__ */ jsx(ChevronsLeft, { size: 16 }) }),
    /* @__PURE__ */ jsxs("button", { onClick: () => onPageChange(currentPage - 1), disabled: isFirst, className: `${navBtn} ${isFirst ? disabled : enabled}`, "aria-label": "Página anterior", children: [
      /* @__PURE__ */ jsx(ChevronLeft, { size: 16 }),
      " ",
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline ml-1", children: "Anterior" })
    ] }),
    pageItems.map(
      (item, i) => item === "ellipsis" ? /* @__PURE__ */ jsx("span", { className: "px-2 text-gray-400 select-none", children: "…" }, `e-${i}`) : /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onPageChange(item),
          "aria-current": item === currentPage ? "page" : void 0,
          className: `h-10 w-10 inline-flex items-center justify-center rounded-xl text-sm font-bold transition-all border ${item === currentPage ? "bg-primary text-black border-primary shadow-lg shadow-primary/20" : "bg-white text-gray-600 border-gray-200 hover:border-black hover:text-black"}`,
          children: item
        },
        item
      )
    ),
    /* @__PURE__ */ jsxs("button", { onClick: () => onPageChange(currentPage + 1), disabled: isLast, className: `${navBtn} ${isLast ? disabled : enabled}`, "aria-label": "Próxima página", children: [
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline mr-1", children: "Próxima" }),
      " ",
      /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: () => onPageChange(totalPages), disabled: isLast, className: `${navBtn} ${isLast ? disabled : enabled}`, "aria-label": "Última página", children: /* @__PURE__ */ jsx(ChevronsRight, { size: 16 }) })
  ] });
}
function AroNavigation() {
  return /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-3xl p-6 md:p-8 shadow-xl border border-gray-100 mb-8", "aria-labelledby": "nav-aro-titulo", children: [
    /* @__PURE__ */ jsxs("h2", { id: "nav-aro-titulo", className: "text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("div", { className: "w-3.5 h-3.5 border-2 border-primary rounded-full" }),
      " Pneus por Aro"
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ARO_NAV.map((aro) => {
      const slug = ARO_SLUG_BY_NUMBER.get(aro);
      if (!slug) return null;
      return /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/${slug}`,
          className: "h-11 px-4 inline-flex items-center justify-center rounded-xl text-sm font-bold bg-gray-50 text-gray-600 border border-gray-100 hover:bg-primary hover:text-black hover:border-primary transition-all",
          children: [
            "Aro ",
            aro
          ]
        },
        aro
      );
    }) })
  ] });
}
function AroSeoBlock() {
  return /* @__PURE__ */ jsxs("section", { className: "mt-16 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100", "aria-labelledby": "seo-aro-titulo", children: [
    /* @__PURE__ */ jsx("h2", { id: "seo-aro-titulo", className: "text-2xl font-bold uppercase tracking-tight mb-4", children: "Encontre Pneus por Aro" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed mb-6 text-pretty", children: "A Carplus Pneus, no bairro Portão em Curitiba, trabalha com pneus aro 13, aro 14, aro 15, aro 16, aro 17, aro 18, aro 19, aro 20, aro 21, aro 22 e aro 23 das principais marcas nacionais e importadas, como Michelin, Pirelli, Bridgestone, Goodyear, Continental e Yokohama. Escolha o aro do seu veículo para ver as medidas, aplicações e condições de montagem, balanceamento e parcelamento em até 10x sem juros." }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ARO_NAV.map((aro) => {
      const slug = ARO_SLUG_BY_NUMBER.get(aro);
      if (!slug) return null;
      return /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/${slug}`,
          className: "h-11 px-4 inline-flex items-center justify-center rounded-xl text-sm font-bold bg-gray-50 text-gray-700 border border-gray-100 hover:bg-primary hover:text-black hover:border-primary transition-all",
          children: [
            "Pneus Aro ",
            aro
          ]
        },
        aro
      );
    }) })
  ] });
}
function BrandsBlock() {
  return /* @__PURE__ */ jsxs("section", { className: "mt-8 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100", "aria-labelledby": "marcas-titulo", children: [
    /* @__PURE__ */ jsxs("h2", { id: "marcas-titulo", className: "text-2xl font-bold uppercase tracking-tight mb-4 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(BadgeCheck, { className: "text-primary", size: 24 }),
      " Marcas de Pneus"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed mb-6 text-pretty", children: "Trabalhamos com as principais marcas de pneus do mercado em Curitiba. Escolha a sua marca preferida e veja todos os modelos disponíveis na Carplus, no bairro Portão, com montagem, balanceamento e parcelamento em até 10x sem juros." }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: FEATURED_BRANDS.map((brand) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: `/pneus?marca=${encodeURIComponent(brand)}`,
        className: "h-11 px-5 inline-flex items-center justify-center rounded-xl text-sm font-bold bg-gray-50 text-gray-700 border border-gray-100 hover:bg-primary hover:text-black hover:border-primary transition-all",
        children: [
          "Pneus ",
          brand
        ]
      },
      brand
    )) })
  ] });
}
function PopularMeasuresBlock() {
  return /* @__PURE__ */ jsxs("section", { className: "mt-8 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100", "aria-labelledby": "medidas-titulo", children: [
    /* @__PURE__ */ jsxs("h2", { id: "medidas-titulo", className: "text-2xl font-bold uppercase tracking-tight mb-4 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Ruler, { className: "text-primary", size: 24 }),
      " Pneus Mais Procurados"
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed mb-6 text-pretty", children: "As medidas de pneu mais buscadas em Curitiba para hatches, sedans e SUVs. Clique na medida do seu veículo para ver os modelos disponíveis, aplicações e o melhor preço com montagem inclusa na Carplus." }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: POPULAR_MEASURES.map((m) => /* @__PURE__ */ jsx(
      Link,
      {
        to: `/pneu-medida/${m.slug}`,
        className: "h-11 px-5 inline-flex items-center justify-center rounded-xl text-sm font-bold bg-gray-50 text-gray-700 border border-gray-100 hover:bg-primary hover:text-black hover:border-primary transition-all",
        children: m.label
      },
      m.slug
    )) })
  ] });
}
function CatalogFaqBlock() {
  const [openIndex, setOpenIndex] = useState(0);
  return /* @__PURE__ */ jsxs("section", { className: "mt-8 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100", "aria-labelledby": "faq-titulo", children: [
    /* @__PURE__ */ jsx("h2", { id: "faq-titulo", className: "text-2xl font-bold uppercase tracking-tight mb-6", children: "Perguntas Frequentes sobre Pneus" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-3", children: CATALOG_FAQS.map((faq, index) => {
      const isOpen = openIndex === index;
      return /* @__PURE__ */ jsxs("div", { className: "border border-gray-100 rounded-2xl overflow-hidden", children: [
        /* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpenIndex(isOpen ? null : index),
            "aria-expanded": isOpen,
            className: "w-full flex items-center justify-between gap-4 p-5 text-left font-bold text-gray-900 hover:bg-gray-50 transition-colors",
            children: [
              /* @__PURE__ */ jsx("span", { children: faq.question }),
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  size: 20,
                  className: `flex-shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ) }),
        isOpen && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-gray-600 leading-relaxed text-pretty", children: faq.answer })
      ] }, index);
    }) })
  ] });
}
export {
  TireCatalog as default
};
