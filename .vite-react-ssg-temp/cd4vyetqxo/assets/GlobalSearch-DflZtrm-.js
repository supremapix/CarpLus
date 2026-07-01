import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useRef, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Car, Wrench, MapPin, FileText, Search, X, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { TIRES, SERVICES, NEIGHBORHOODS } from "./tire-catalog-f1Gw3RQz.js";
const STATIC_PAGES = [
  { title: "Inicio", description: "Pagina inicial da Carplus Centro Automotivo", url: "/", keywords: ["home", "inicio", "principal"] },
  { title: "Quem Somos", description: "Conheca a historia e equipe da Carplus", url: "/quem-somos", keywords: ["sobre", "historia", "equipe", "empresa"] },
  { title: "Catalogo de Pneus", description: "Todos os pneus disponiveis na Carplus", url: "/pneus", keywords: ["pneus", "catalogo", "comprar", "loja"] },
  { title: "Servicos", description: "Todos os servicos automotivos oferecidos", url: "/servicos", keywords: ["servicos", "mecanica", "oficina"] },
  { title: "Como Chegar", description: "Localizacao e mapa da Carplus no Portao", url: "/como-chegar", keywords: ["mapa", "endereco", "localizacao", "gps"] },
  { title: "FAQ - Perguntas Frequentes", description: "Duvidas comuns sobre nossos servicos", url: "/faq", keywords: ["duvidas", "perguntas", "ajuda", "faq"] },
  { title: "Contato", description: "Entre em contato com a Carplus", url: "/contato", keywords: ["contato", "telefone", "whatsapp", "email"] },
  { title: "Centro Automotivo Portao", description: "Centro automotivo completo no bairro Portao", url: "/centro-automotivo-portao", keywords: ["centro automotivo", "portao", "oficina", "mecanica"] },
  { title: "Politica de Privacidade", description: "Nossa politica de privacidade e dados", url: "/politica-de-privacidade", keywords: ["privacidade", "dados", "lgpd"] },
  { title: "Trocas e Devolucoes", description: "Politica de trocas e devolucoes", url: "/trocas-e-devolucoes", keywords: ["troca", "devolucao", "garantia"] },
  { title: "Sitemap", description: "Mapa do site completo", url: "/sitemap", keywords: ["sitemap", "mapa", "paginas"] },
  { title: "Bairros Atendidos", description: "Todos os bairros de Curitiba que atendemos", url: "/bairros", keywords: ["bairros", "regioes", "curitiba"] }
];
function GlobalSearch({ isOpen: externalIsOpen, onClose } = {}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen !== void 0 ? externalIsOpen : internalIsOpen;
  const setIsOpen = onClose ? (val) => {
    if (!val) onClose();
  } : setInternalIsOpen;
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const searchIndex = useMemo(() => {
    const index = [];
    TIRES.forEach((tire) => {
      index.push({
        type: "pneu",
        title: `${tire.marca} ${tire.modelo} ${tire.medida}`,
        description: `Pneu ${tire.categoria} - ${tire.indiceVelocidade ? `Indice ${tire.indiceVelocidade}` : "Aro " + tire.aro}`,
        url: `/pneu/${tire.slug}`,
        icon: /* @__PURE__ */ jsx(Car, { size: 16, className: "text-primary" })
      });
    });
    SERVICES.forEach((service) => {
      index.push({
        type: "servico",
        title: service.title,
        description: service.description.substring(0, 100) + "...",
        url: `/servico/${service.slug}`,
        icon: /* @__PURE__ */ jsx(Wrench, { size: 16, className: "text-primary" })
      });
    });
    NEIGHBORHOODS.forEach((neighborhood) => {
      const zonaLabel = neighborhood.zona === "sul" ? "Zona Sul" : neighborhood.zona === "norte" ? "Zona Norte" : neighborhood.zona === "leste" ? "Zona Leste" : neighborhood.zona === "oeste" ? "Zona Oeste" : neighborhood.zona === "rmc" ? "Regiao Metropolitana" : "Curitiba";
      index.push({
        type: "bairro",
        title: neighborhood.name,
        description: `${zonaLabel} - ${neighborhood.tempo} da Carplus`,
        url: `/bairro/${neighborhood.slug || neighborhood.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`,
        icon: /* @__PURE__ */ jsx(MapPin, { size: 16, className: "text-primary" })
      });
    });
    STATIC_PAGES.forEach((page) => {
      index.push({
        type: "pagina",
        title: page.title,
        description: page.description,
        url: page.url,
        icon: /* @__PURE__ */ jsx(FileText, { size: 16, className: "text-primary" })
      });
    });
    return index;
  }, []);
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const normalizedQuery = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const filtered = searchIndex.filter((item) => {
      const normalizedTitle = item.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      const normalizedDescription = item.description.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return normalizedTitle.includes(normalizedQuery) || normalizedDescription.includes(normalizedQuery);
    });
    const sorted = filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase();
      const bTitle = b.title.toLowerCase();
      const q = normalizedQuery;
      if (aTitle.startsWith(q) && !bTitle.startsWith(q)) return -1;
      if (!aTitle.startsWith(q) && bTitle.startsWith(q)) return 1;
      return 0;
    });
    setResults(sorted.slice(0, 10));
  }, [query, searchIndex]);
  const openSearch = () => {
    setIsOpen(true);
    setTimeout(() => {
      var _a;
      return (_a = inputRef.current) == null ? void 0 : _a.focus();
    }, 100);
  };
  const closeSearch = () => {
    setIsOpen(false);
    setQuery("");
    setResults([]);
  };
  const handleResultClick = (url) => {
    navigate(url);
    closeSearch();
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }
      if (e.key === "Escape") {
        closeSearch();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  const groupedResults = useMemo(() => {
    const groups = {
      pagina: [],
      servico: [],
      bairro: [],
      pneu: []
    };
    results.forEach((result) => {
      groups[result.type].push(result);
    });
    return groups;
  }, [results]);
  const typeLabels = {
    pagina: "Paginas",
    servico: "Servicos",
    bairro: "Bairros",
    pneu: "Pneus"
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: closeSearch,
        className: "fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.95, y: -20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: -20 },
        className: "fixed top-[10%] left-1/2 -translate-x-1/2 w-full max-w-2xl z-[101] px-4",
        children: /* @__PURE__ */ jsxs("div", { className: "bg-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 p-4 border-b border-white/10", children: [
            /* @__PURE__ */ jsx(Search, { size: 20, className: "text-primary" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                type: "text",
                value: query,
                onChange: (e) => setQuery(e.target.value),
                placeholder: "Buscar pneus, servicos, bairros, paginas...",
                className: "flex-1 bg-transparent text-white text-lg placeholder:text-white/40 outline-none"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: closeSearch,
                className: "text-white/40 hover:text-white p-1",
                children: /* @__PURE__ */ jsx(X, { size: 20 })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "max-h-[60vh] overflow-y-auto", children: query.trim() === "" ? /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
            /* @__PURE__ */ jsx(Search, { size: 48, className: "mx-auto text-white/20 mb-4" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/40 text-sm", children: "Digite para buscar em todo o site" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/20 text-xs mt-2", children: "Pneus, servicos, bairros, paginas e mais" })
          ] }) : results.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "p-8 text-center", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-white/40", children: [
              'Nenhum resultado encontrado para "',
              query,
              '"'
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-white/20 text-sm mt-2", children: "Tente buscar por outra palavra-chave" })
          ] }) : /* @__PURE__ */ jsx("div", { className: "divide-y divide-white/5", children: Object.entries(groupedResults).map(
            ([type, items]) => items.length > 0 && /* @__PURE__ */ jsxs("div", { className: "py-2", children: [
              /* @__PURE__ */ jsx("p", { className: "px-4 py-2 text-xs font-bold text-primary uppercase tracking-widest", children: typeLabels[type] }),
              items.map((result, index) => /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => handleResultClick(result.url),
                  className: "w-full flex items-center gap-4 px-4 py-3 hover:bg-white/5 transition-colors text-left group",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors", children: result.icon }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-white font-medium truncate", children: result.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-white/40 text-sm truncate", children: result.description })
                    ] }),
                    /* @__PURE__ */ jsx(ChevronRight, { size: 16, className: "text-white/20 group-hover:text-primary transition-colors" })
                  ]
                },
                `${result.url}-${index}`
              ))
            ] }, type)
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "border-t border-white/10 px-4 py-3 flex items-center justify-between text-xs text-white/30", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx("kbd", { className: "bg-white/5 px-1.5 py-0.5 rounded", children: "↵" }),
                " selecionar"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx("kbd", { className: "bg-white/5 px-1.5 py-0.5 rounded", children: "esc" }),
                " fechar"
              ] })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "Carplus" })
          ] })
        ] })
      }
    )
  ] }) }) });
}
export {
  GlobalSearch as default
};
