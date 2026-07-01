import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, LayoutGrid, ChevronLeft, ChevronRight, MoveHorizontal, Check, Clock } from "lucide-react";
import { SERVICE_CATEGORIES } from "./services-SlP8WPLZ.js";
import { S as SectionTitle } from "./Home-jT0kmvw9.js";
import { g as getIcon } from "./iconMap-BowL9SiG.js";
import "./Footer-DkaDSj4_.js";
import "./promoTires-CI2UiQpD.js";
import "./LiteYouTube-C8oiXB0y.js";
import "./useSEO-DsO0176p.js";
import "react-helmet-async";
const ALL_SERVICES = SERVICE_CATEGORIES.flatMap(
  (cat) => cat.services.map((s) => ({ ...s, categoryName: cat.name, categoryIcon: cat.icon }))
);
const STUDIO_IMAGES = [
  "/images/loja/loja-de-pneus.webp",
  "/images/loja/carplus-oficina-portao-fachada-curitiba.jpg",
  "/images/loja/oficina-mecanica-portao-curitiba.png",
  "/images/servicos-galeria/oficina-mecanica-elevadores-curitiba.webp",
  "/images/servicos-galeria/montagem-pneu-pirelli-curitiba.webp",
  "/images/servicos-galeria/alinhamento-3d-curitiba.webp",
  "/images/servicos-galeria/balanceamento-roda-curitiba.webp",
  "/images/servicos-galeria/manutencao-freios-curitiba.webp",
  "/images/servicos-galeria/loja-pneus-prinx-curitiba.webp",
  "/images/servicos-galeria/rodas-alinhamento-oficina-curitiba.webp",
  "/images/servicos-galeria/alinhamento-pneu-michelin-curitiba.webp"
];
function ServiceCarouselCard({ service, index }) {
  const Icon = getIcon(service.icon);
  const CatIcon = getIcon(service.categoryIcon);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { delay: Math.min(index * 0.05, 0.3) },
      className: "flex-shrink-0 w-[280px] sm:w-[300px] bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all group",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(CatIcon, { size: 12, className: "text-primary" }) }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-gray-400", children: service.categoryName })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors", children: /* @__PURE__ */ jsx(Icon, { size: 22, className: "text-gray-700 group-hover:text-white transition-colors" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-gray-900 text-sm uppercase tracking-tight leading-tight pt-1 flex-1", children: service.name })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2", children: service.shortDescription }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 mb-4", children: service.highlights.slice(0, 2).map((h, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-[11px] text-gray-600", children: [
          /* @__PURE__ */ jsx(Check, { size: 12, className: "text-green-500 mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "line-clamp-1", children: h })
        ] }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-3 border-t border-gray-100", children: [
          service.estimatedTime && /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-gray-400 flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Clock, { size: 10 }),
            " ",
            service.estimatedTime
          ] }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/servico/${service.slug}`,
              className: "text-primary text-[11px] font-bold uppercase tracking-tight flex items-center gap-1 hover:gap-2 transition-all",
              children: [
                "Ver mais ",
                /* @__PURE__ */ jsx(ChevronRight, { size: 12 })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function ServicesGrid() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % STUDIO_IMAGES.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, []);
  const scrollMetrics = useRef({ scrollWidth: 0, clientWidth: 0 });
  const scrollRafRef = useRef(null);
  const updateScrollState = (scrollLeft) => {
    const { scrollWidth, clientWidth } = scrollMetrics.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const ro = new ResizeObserver(() => {
      scrollMetrics.current = {
        scrollWidth: carousel.scrollWidth,
        clientWidth: carousel.clientWidth
      };
      updateScrollState(carousel.scrollLeft);
    });
    ro.observe(carousel);
    const onScroll = () => {
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
      scrollRafRef.current = requestAnimationFrame(() => updateScrollState(carousel.scrollLeft));
    };
    carousel.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ro.disconnect();
      carousel.removeEventListener("scroll", onScroll);
      if (scrollRafRef.current) cancelAnimationFrame(scrollRafRef.current);
    };
  }, [activeCategory]);
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };
  const filteredServices = activeCategory ? ALL_SERVICES.filter((s) => {
    var _a;
    return (_a = SERVICE_CATEGORIES.find((c) => c.id === activeCategory)) == null ? void 0 : _a.services.some((cs) => cs.id === s.id);
  }) : ALL_SERVICES.slice(0, 12);
  return /* @__PURE__ */ jsx("section", { id: "servicos", className: "py-16 md:py-24 bg-white overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4 md:gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsx(SectionTitle, { prefix: "NOSSOS", highlight: "SERVIÇOS" }),
        /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl text-gray-600 font-light text-left", children: "Oficina mecânica completa para todas as marcas nacionais e importadas." })
      ] }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/servicos",
          className: "flex items-center gap-2 bg-primary text-black px-5 py-3 rounded-full font-bold text-sm uppercase tracking-tight hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/20",
          children: [
            "Ver Todos os Serviços",
            /* @__PURE__ */ jsx(ArrowRight, { size: 16 })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mb-6 overflow-x-auto scrollbar-hide", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 pb-2", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setActiveCategory(null),
          className: `shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tight transition-all flex items-center gap-2 ${activeCategory === null ? "bg-dark text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
          children: [
            /* @__PURE__ */ jsx(LayoutGrid, { size: 14 }),
            "Todos"
          ]
        }
      ),
      SERVICE_CATEGORIES.map((cat) => {
        const CatIcon = getIcon(cat.icon);
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setActiveCategory(cat.id),
            className: `shrink-0 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-tight transition-all flex items-center gap-2 whitespace-nowrap ${activeCategory === cat.id ? "bg-dark text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
            children: [
              /* @__PURE__ */ jsx(CatIcon, { size: 14 }),
              cat.name
            ]
          },
          cat.id
        );
      })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      canScrollLeft && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scroll("left"),
          className: "hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-xl rounded-full items-center justify-center hover:bg-primary hover:text-white transition-colors border border-gray-100",
          "aria-label": "Rolar para esquerda",
          children: /* @__PURE__ */ jsx(ChevronLeft, { size: 24 })
        }
      ),
      canScrollRight && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scroll("right"),
          className: "hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-xl rounded-full items-center justify-center hover:bg-primary hover:text-white transition-colors border border-gray-100",
          "aria-label": "Rolar para direita",
          children: /* @__PURE__ */ jsx(ChevronRight, { size: 24 })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-[5] pointer-events-none" }),
      /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-[5] pointer-events-none" }),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: carouselRef,
          className: "flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory touch-pan-x",
          style: { WebkitOverflowScrolling: "touch" },
          children: filteredServices.map((service, index) => /* @__PURE__ */ jsx("div", { className: "snap-start", children: /* @__PURE__ */ jsx(ServiceCarouselCard, { service, index }) }, service.id))
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mt-4 md:hidden", children: [
        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Arraste para ver mais" }),
        /* @__PURE__ */ jsx(MoveHorizontal, { size: 14, className: "text-gray-400" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 rounded-2xl p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-2xl md:text-3xl font-bold text-dark", children: [
          ALL_SERVICES.length,
          "+"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 uppercase tracking-wider", children: "Serviços" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-bold text-primary", children: "5.0" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 uppercase tracking-wider", children: "Avaliação Google" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-bold text-dark", children: "214+" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 uppercase tracking-wider", children: "Avaliações" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-bold text-dark", children: "10x" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 uppercase tracking-wider", children: "Sem Juros" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-dark text-white p-8 md:p-12 rounded-3xl md:rounded-[40px] flex flex-col justify-center items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block bg-primary/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-primary mb-6 rounded", children: "Scanner Automotivo Profissional" }),
        /* @__PURE__ */ jsxs("h3", { className: "text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 leading-none font-bold", children: [
          "Diagnóstico ",
          /* @__PURE__ */ jsx("br", {}),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Computadorizado" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base md:text-lg text-white/70 mb-6 md:mb-8 max-w-md", children: "Utilizamos equipamentos de última geração para identificar com precisão qualquer problema no sistema eletrônico do seu veículo." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-3 md:space-y-4 mb-6 md:mb-8 text-left", children: [
          "Leitura de Injeção Eletrônica",
          "Reset de Mensagens no Painel",
          "Análise de Sensores e Atuadores",
          "Diagnóstico de Módulos ABS e Airbag"
        ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 md:w-6 md:h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Check, { className: "text-primary", size: 12 }) }),
          /* @__PURE__ */ jsx("span", { className: "font-medium text-white/90 text-sm md:text-base", children: item })
        ] }, item)) }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/servico/scanner-automotivo",
            className: "inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold uppercase tracking-widest text-xs px-6 py-4 rounded-xl transition-all",
            children: [
              "Agendar Diagnóstico ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 14 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative rounded-3xl md:rounded-[40px] overflow-hidden flex flex-col bg-white border border-gray-100 shadow-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-t-3xl md:rounded-t-[40px]", children: [
          STUDIO_IMAGES.map((src, i) => /* @__PURE__ */ jsx(
            motion.img,
            {
              src,
              alt: "Oficina Mecânica Carplus",
              width: 1200,
              height: 900,
              initial: false,
              animate: {
                opacity: i === currentImageIndex ? 1 : 0,
                scale: i === currentImageIndex ? 1 : 1.05
              },
              transition: { duration: 0.8, ease: "easeInOut" },
              className: "absolute inset-0 w-full h-full object-contain"
            },
            src
          )),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10", children: STUDIO_IMAGES.map((_, i) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setCurrentImageIndex(i),
              className: `w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? "w-8 bg-primary" : "bg-white/50"}`
            },
            i
          )) }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-6 md:p-8 lg:p-12 flex-grow flex flex-col justify-center", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-block bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white mb-4 rounded self-start", children: "Equipe Especializada" }),
          /* @__PURE__ */ jsx("p", { className: "text-dark text-lg md:text-xl lg:text-2xl font-bold leading-tight", children: "Técnicos treinados para atender todas as marcas do mercado." })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  ServicesGrid as default
};
