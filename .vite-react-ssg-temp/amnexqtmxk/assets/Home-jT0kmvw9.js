import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo, useRef, useEffect, Suspense, lazy } from "react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { Navigation, Phone, Star, MapPin, CreditCard, Wrench, SlidersHorizontal, ChevronDown, X, Search, Zap, List, ArrowRight, MessageCircle, ShieldCheck, Clock, MessageSquare, Tag, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { PROMO_TIRES } from "./promoTires-CI2UiQpD.js";
import { L as LiteYouTube } from "./LiteYouTube-C8oiXB0y.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "inicio", className: "relative min-h-screen flex items-center overflow-hidden bg-dark", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 md:hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/hero-mobile.webp",
          alt: "Carplus Pneus - Loja de Pneus em Curitiba",
          fetchPriority: "high",
          width: 554,
          height: 1200,
          className: "w-full h-full object-cover object-[30%_top]"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 hidden md:block", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/images/hero-desktop.webp",
          alt: "Carplus Pneus - Oficina de Pneus em Curitiba",
          fetchPriority: "high",
          width: 1920,
          height: 685,
          className: "w-full h-full object-cover object-center"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-transparent" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 pt-36 pb-24 md:pt-40 md:pb-28", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-[3.2rem] sm:text-6xl md:text-7xl lg:text-8xl text-white mb-3 leading-[0.95] font-bold text-center md:text-left tracking-tighter", children: [
        "PNEUS ",
        /* @__PURE__ */ jsx("br", { className: "md:hidden" }),
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "EM CURITIBA" })
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-base sm:text-lg md:text-3xl text-white font-display font-bold uppercase tracking-tight mb-6 text-center md:text-left", children: [
        "OFICINA MECÂNICA ",
        /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "FULL SERVICE" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-[0.95rem] sm:text-base md:text-lg text-white/80 mb-8 max-w-xl font-medium text-center md:text-left mx-auto md:mx-0 leading-relaxed", children: "Pneus das melhores marcas com preços a partir de R$ 269,00 à vista. Parcele em até 10x sem juros e conte com atendimento em toda Curitiba e Região." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mb-12 justify-center md:justify-start px-4 sm:px-0", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7",
            target: "_blank",
            className: "bg-white hover:bg-gray-100 text-dark px-6 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-tight shadow-lg",
            children: [
              /* @__PURE__ */ jsx(Navigation, { size: 18 }),
              " Ir até a Carplus"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "tel:+554130827282",
            className: "bg-surface/40 backdrop-blur-sm hover:bg-gray-700 text-white px-6 py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-tight border border-white/20",
            children: [
              /* @__PURE__ */ jsx(Phone, { size: 18 }),
              " Ligar agora"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 md:gap-y-6 mt-4 md:mt-6", children: [
        { icon: Star, text: "Referência em Curitiba" },
        { icon: MapPin, text: "Portão – Curitiba" },
        { icon: CreditCard, text: "Pneus em até 10x" },
        { icon: Wrench, text: "Full Service" }
      ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-white/80 border-l border-primary pl-4 py-1 md:py-2", children: [
        /* @__PURE__ */ jsx(item.icon, { size: 18, className: "text-primary" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-accent uppercase tracking-widest leading-tight", children: item.text })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-dark/50 backdrop-blur-md py-4 overflow-hidden border-t border-white/5", children: /* @__PURE__ */ jsx("div", { className: "flex gap-12 whitespace-nowrap animate-infinite-scroll", children: Array(4).fill(["PIRELLI", "MICHELIN", "GOODYEAR", "CONTINENTAL", "FIRESTONE", "BRIDGESTONE", "YOKOHAMA", "PRINX", "DELINTE"]).flat().map((brand, i) => /* @__PURE__ */ jsx("span", { className: "text-white/30 font-display text-2xl md:text-3xl font-bold tracking-tighter opacity-50 px-2 select-none italic", children: brand }, i)) }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 18s linear infinite;
        }
      ` })
  ] });
}
const TIRE_FILTER_TREE = { "13": { "165": [70], "175": [70] }, "14": { "165": [70], "175": [65, 70, 80], "185": [60, 65, 70], "195": [70, 75], "215": [75], "5.9": [] }, "15": { "5": [], "31": [10.5], "135": [80], "155": [60], "165": [50, 80], "175": [55, 65], "185": [45, 55, 60, 65], "195": [45, 50, 55, 60, 65, 70], "205": [50, 55, 60, 65, 70, 75], "215": [70, 75], "225": [60, 70, 75], "235": [75], "255": [75], "265": [70, 75], "5.6": [], "7.1": [] }, "16": { "6": [], "125": [80, 90], "145": [90], "175": [55], "185": [55], "195": [45, 50, 55, 60, 75], "205": [45, 50, 55, 60, 65, 70, 75, 80], "215": [45, 55, 60, 65, 70, 75, 80], "225": [45, 50, 55, 60, 65, 70, 75], "235": [60, 65, 70, 85], "245": [70, 75], "255": [70], "265": [70, 75], "285": [75] }, "17": { "115": [95], "125": [80], "135": [80, 90], "155": [70], "195": [45], "205": [40, 45, 50, 55], "215": [40, 45, 50, 55, 60, 65], "225": [45, 50, 55, 60, 65, 70], "235": [40, 45, 50, 55, 60, 65, 70, 75], "245": [40, 45, 65, 70], "255": [40, 45, 60, 65, 70], "265": [65, 70], "285": [65, 70] }, "18": { "125": [60, 70], "135": [80], "145": [85], "155": [90], "195": [60], "215": [40, 45, 50, 55], "225": [40, 45, 50, 55, 60], "235": [40, 45, 50, 55, 60, 65], "245": [35, 40, 45, 50, 60], "255": [35, 40, 45, 55, 60, 70], "265": [35, 40, 45, 60, 65, 70], "275": [35, 40, 45, 65, 70], "285": [30, 35], "295": [30, 35] }, "19": { "125": [70], "155": [70, 80], "175": [60, 80], "205": [55], "225": [35, 40, 45, 55], "235": [35, 40, 45, 50, 55], "245": [30, 35, 40, 45, 50, 55], "255": [30, 35, 40, 45, 50, 55, 65], "265": [30, 35, 40, 50, 55], "275": [30, 35, 40, 45, 55], "285": [35, 45], "295": [30], "305": [30], "325": [30] }, "20": { "145": [60], "155": [60], "175": [55], "215": [45], "225": [35], "235": [35, 45, 50, 55, 60], "245": [30, 35, 40, 45, 50], "255": [30, 35, 40, 45, 50, 55], "265": [30, 35, 40, 45, 50], "275": [30, 35, 40, 45, 50, 55, 60], "285": [30, 35, 40, 45], "295": [30, 35, 40], "305": [30, 40], "315": [35] }, "21": { "235": [50], "245": [35, 40], "255": [30, 35, 40, 45, 50], "265": [30, 35, 40, 45], "275": [35, 40, 45], "285": [35, 40, 45], "295": [35, 40], "305": [30], "315": [35, 40], "325": [30] }, "22": { "255": [30, 40], "265": [35, 40], "275": [35, 40, 45], "285": [35, 40, 45], "295": [40], "315": [30, 35], "325": [35] }, "23": { "285": [35] } };
const TIRE_AROS = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
function TireSearchBar() {
  const navigate = useNavigate();
  const [aro, setAro] = useState(null);
  const [largura, setLargura] = useState(null);
  const [altura, setAltura] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const aros = TIRE_AROS;
  const larguras = useMemo(() => {
    if (!aro) return [];
    return Object.keys(TIRE_FILTER_TREE[aro] ?? {}).map(Number).sort((a, b) => a - b);
  }, [aro]);
  const alturas = useMemo(() => {
    var _a;
    if (!aro || !largura) return [];
    return (((_a = TIRE_FILTER_TREE[aro]) == null ? void 0 : _a[largura]) ?? []).slice().sort((a, b) => a - b);
  }, [aro, largura]);
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (aro) params.set("aro", aro.toString());
    if (largura) params.set("largura", largura.toString());
    if (altura) params.set("altura", altura.toString());
    navigate(`/pneus?${params.toString()}`);
  };
  const clearFilters = () => {
    setAro(null);
    setLargura(null);
    setAltura(null);
  };
  const hasFilters = aro || largura || altura;
  return /* @__PURE__ */ jsxs("section", { className: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative z-30 py-10 md:py-20 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03]", style: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    } }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.02]", style: {
      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
    } }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] rounded-full" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "py-4 md:py-6 [animation:var(--animate-fade-in-down)]",
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setIsExpanded(!isExpanded),
              className: "md:hidden w-full bg-white/10 border-2 border-white/20 rounded-2xl px-5 py-4 flex items-center justify-between mb-4",
              children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3 text-white font-bold", children: [
                  /* @__PURE__ */ jsx(SlidersHorizontal, { size: 20, className: "text-primary" }),
                  "Pesquise seu pneu pelo aro"
                ] }),
                /* @__PURE__ */ jsx(
                  ChevronDown,
                  {
                    size: 20,
                    className: `text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: `${isExpanded ? "block" : "hidden"} md:block`, children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-3 md:mb-4", children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white", children: [
                "Pesquise ",
                /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Pneus" }),
                " por tamanho!"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl text-white/60 mt-2", children: "Selecione o aro e encontre os melhores modelos" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm border-2 border-white/10 rounded-3xl p-4 md:p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 items-end", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs font-black uppercase tracking-widest text-white/70 ml-1", children: "Aro" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxs(
                      "select",
                      {
                        value: aro || "",
                        onChange: (e) => {
                          setAro(e.target.value ? Number(e.target.value) : null);
                          setLargura(null);
                          setAltura(null);
                        },
                        className: "w-full appearance-none bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 pr-12 font-bold text-lg focus:border-primary focus:outline-none transition-colors cursor-pointer hover:border-gray-300",
                        children: [
                          /* @__PURE__ */ jsx("option", { value: "", children: "Escolha o aro" }),
                          aros.map((a) => /* @__PURE__ */ jsxs("option", { value: a, children: [
                            "Aro ",
                            a
                          ] }, a))
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(ChevronDown, { size: 20, className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs font-black uppercase tracking-widest text-white/70 ml-1", children: "Largura" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxs(
                      "select",
                      {
                        value: largura || "",
                        onChange: (e) => {
                          setLargura(e.target.value ? Number(e.target.value) : null);
                          setAltura(null);
                        },
                        disabled: !aro,
                        className: "w-full appearance-none bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 pr-12 font-bold text-lg focus:border-primary focus:outline-none transition-colors cursor-pointer hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100",
                        children: [
                          /* @__PURE__ */ jsx("option", { value: "", children: "Escolha a largura" }),
                          larguras.map((l) => /* @__PURE__ */ jsx("option", { value: l, children: l }, l))
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(ChevronDown, { size: 20, className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("label", { className: "block text-xs font-black uppercase tracking-widest text-white/70 ml-1", children: "Altura" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxs(
                      "select",
                      {
                        value: altura || "",
                        onChange: (e) => setAltura(e.target.value ? Number(e.target.value) : null),
                        disabled: !largura,
                        className: "w-full appearance-none bg-white border-2 border-gray-200 rounded-2xl px-5 py-4 pr-12 font-bold text-lg focus:border-primary focus:outline-none transition-colors cursor-pointer hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-100",
                        children: [
                          /* @__PURE__ */ jsx("option", { value: "", children: "Escolha a altura" }),
                          alturas.map((a) => /* @__PURE__ */ jsx("option", { value: a, children: a }, a))
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(ChevronDown, { size: 20, className: "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
                  hasFilters && /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: clearFilters,
                      className: "w-14 h-14 md:h-[58px] flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-2xl transition-transform hover:scale-105 active:scale-95 shrink-0 [animation:var(--animate-pop-in)]",
                      title: "Limpar filtros",
                      children: /* @__PURE__ */ jsx(X, { size: 20, className: "text-gray-600" })
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: handleSearch,
                      disabled: !aro,
                      className: "flex-1 bg-primary hover:bg-yellow-400 disabled:bg-gray-300 disabled:cursor-not-allowed text-black px-6 py-4 rounded-2xl font-black text-base uppercase tracking-tight flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20 disabled:shadow-none",
                      children: [
                        /* @__PURE__ */ jsx(Search, { size: 20 }),
                        /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Pesquisar" })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-white/40", children: [
                "Exemplo: ",
                /* @__PURE__ */ jsx("span", { className: "font-bold text-white/70", children: "195/65R15" }),
                " = Largura 195, Altura 65, Aro 15"
              ] }) })
            ] })
          ] })
        ]
      }
    ) })
  ] });
}
const BASE_URL = "https://www.carpluspneuseoficina.com.br";
const FALLBACK_IMG = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#f3f4f6"/><circle cx="100" cy="100" r="70" fill="none" stroke="#f59c00" stroke-width="14"/><circle cx="100" cy="100" r="30" fill="#f59c00"/></svg>`
);
function CountUp({ to, duration = 1500 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return /* @__PURE__ */ jsx("span", { ref, children: value });
}
const TireCard = ({ tire }) => {
  const pageUrl = `${BASE_URL}/pneu-promocao/${tire.slug}`;
  const whatsappMsg = `Olá! Vi a *promoção do pneu ${tire.marca} ${tire.nome}* (medida ${tire.medida}) por ${tire.preco}. Gostaria de garantir esse preço.

Origem do contato: ${pageUrl}`;
  const whatsappUrl = `https://wa.me/554130827282?text=${encodeURIComponent(whatsappMsg)}`;
  return /* @__PURE__ */ jsxs("div", { className: "group flex w-[230px] sm:w-[260px] flex-shrink-0 flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.07)] transition-all duration-300 hover:border-primary/70 hover:shadow-[0_8px_28px_rgba(245,156,0,0.22)]", children: [
    /* @__PURE__ */ jsxs(Link, { to: `/pneu-promocao/${tire.slug}`, className: "relative aspect-square bg-white p-1 flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: tire.imagem,
          srcSet: `${tire.imagemSmall} 300w, ${tire.imagem} 600w`,
          sizes: "(max-width: 640px) 230px, 260px",
          alt: `Pneu ${tire.marca} ${tire.nome}`,
          loading: "lazy",
          decoding: "async",
          width: 300,
          height: 300,
          onError: (e) => {
            e.currentTarget.src = FALLBACK_IMG;
          },
          className: "h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "absolute top-3 left-3 bg-black text-white text-[11px] font-accent font-bold uppercase tracking-wider px-2 py-0.5 rounded", children: "Promoção" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-4", children: [
      /* @__PURE__ */ jsx(Link, { to: `/pneu-promocao/${tire.slug}`, className: "font-accent font-bold uppercase tracking-wide text-primary text-base leading-none hover:underline", children: tire.marca }),
      /* @__PURE__ */ jsx("p", { className: "mt-1.5 text-neutral-600 text-sm leading-snug min-h-[2.5rem]", children: tire.nome }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 flex items-baseline gap-1", children: /* @__PURE__ */ jsx("span", { className: "text-neutral-400 text-xs", children: "a partir de" }) }),
      /* @__PURE__ */ jsx("p", { className: "font-accent font-bold text-neutral-900 text-2xl leading-none", children: tire.preco }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: whatsappUrl,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 font-accent font-bold uppercase tracking-wide !text-white text-sm transition-colors hover:bg-neutral-800",
          children: [
            /* @__PURE__ */ jsx(MessageCircle, { size: 16, strokeWidth: 2.5 }),
            "Pedir orçamento"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/pneu-promocao/${tire.slug}`,
          className: "mt-2 inline-flex items-center justify-center gap-1 rounded-xl border border-neutral-200 px-4 py-2 font-accent font-bold uppercase tracking-wide text-neutral-700 text-xs transition-colors hover:border-primary hover:text-primary",
          children: [
            "Saiba mais",
            /* @__PURE__ */ jsx(ArrowRight, { size: 14, strokeWidth: 2.5 })
          ]
        }
      )
    ] })
  ] });
};
function PneusPromocao() {
  const destaquePromo = PROMO_TIRES.slice(0, 8);
  const track = [...destaquePromo, ...destaquePromo];
  return /* @__PURE__ */ jsxs("section", { id: "promocao", className: "relative bg-white py-16 md:py-24 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 [animation:var(--animate-fade-in-up)]", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-accent font-bold uppercase text-neutral-900 text-4xl sm:text-5xl md:text-6xl tracking-tight text-balance", children: [
        "Pneus em ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Promoção" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 inline-flex flex-col items-center", children: [
        /* @__PURE__ */ jsx("span", { className: "text-neutral-900 font-accent font-bold uppercase tracking-[0.2em] text-lg sm:text-xl", children: "Preços a partir de" }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "mt-3 flex items-center gap-3 rounded-2xl border-2 border-primary bg-primary/10 px-7 py-4 shadow-[0_0_30px_rgba(245,156,0,0.30)] [animation:var(--animate-pulse-scale)] will-change-transform",
            children: [
              /* @__PURE__ */ jsx(Zap, { size: 40, className: "text-primary fill-primary" }),
              /* @__PURE__ */ jsxs("span", { className: "font-accent font-bold text-neutral-900 text-6xl sm:text-7xl leading-none", children: [
                "R$ ",
                /* @__PURE__ */ jsx(CountUp, { to: 239 })
              ] })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative w-full overflow-hidden",
        style: {
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)"
        },
        children: /* @__PURE__ */ jsx("div", { className: "flex w-max gap-5 [animation:var(--animate-marquee-left)] hover:[animation-play-state:paused]", children: track.map((tire, index) => /* @__PURE__ */ jsx(TireCard, { tire }, `${tire.marca}-${index}`)) })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-col items-center gap-3 px-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-center text-sm", children: "Não quer esperar a esteira passar? Veja todas as ofertas de uma vez." }),
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/pneus-promocao",
          className: "inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-accent font-bold uppercase tracking-wide text-black text-base sm:text-lg transition-colors hover:bg-[#ffae2e]",
          children: [
            /* @__PURE__ */ jsx(List, { size: 22, strokeWidth: 2.5 }),
            "Ver todos os pneus em lista",
            /* @__PURE__ */ jsx(ArrowRight, { size: 20, strokeWidth: 2.5 })
          ]
        }
      )
    ] })
  ] });
}
function SectionTitle({ prefix, highlight, className = "", darkBg = false }) {
  return /* @__PURE__ */ jsx("div", { className: `text-center md:text-left max-w-[640px] mb-8 ${className}`, children: /* @__PURE__ */ jsxs("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-bold uppercase leading-snug tracking-normal", children: [
    /* @__PURE__ */ jsx("span", { className: darkBg ? "text-white" : "text-dark", children: prefix }),
    " ",
    /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: highlight })
  ] }) });
}
function BrandsCarousel() {
  return /* @__PURE__ */ jsxs("section", { className: "bg-dark pt-16 md:pt-0 md:pb-0 overflow-hidden relative border-b border-white/10 min-h-[600px] md:min-h-0", id: "especialista", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0 select-none pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute inset-0 bg-gradient-to-r from-dark via-dark/80 via-50% to-dark/20 z-10" }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-transparent z-10" }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent z-10" }),
      /* @__PURE__ */ jsx(
        "img",
        {
          loading: "lazy",
          src: "/images/loja/oficina-carplus-pneus.webp",
          alt: "",
          width: 1200,
          height: 428,
          className: "w-full h-full object-cover object-center opacity-70"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10 py-16 md:py-32 lg:py-48", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center justify-center gap-3 bg-white/5 border border-primary/30 text-primary px-6 py-2 rounded-full mb-16 font-display font-bold text-[12px] uppercase tracking-[0.25em] w-fit mx-auto backdrop-blur-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse" }),
        "Consultoria Técnica Gratuita"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-col md:grid md:grid-cols-[1.2fr_1fr] items-center gap-12 lg:gap-24", children: /* @__PURE__ */ jsxs("div", { className: "w-full space-y-8 md:space-y-10 order-1 text-center md:text-left relative", children: [
        /* @__PURE__ */ jsx("div", { className: "md:hidden inline-flex items-center gap-2 bg-white/5 border border-white/10 text-primary px-4 py-2 rounded-full mb-6 font-display font-bold text-sm uppercase tracking-widest", children: "Consultoria Técnica Gratuita" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6 [animation:var(--animate-fade-in-up)]", children: [
          /* @__PURE__ */ jsx(SectionTitle, { prefix: "FALE COM UM", highlight: "ESPECIALISTA", darkBg: true, className: "md:text-left" }),
          /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 font-sans font-medium max-w-[460px] mx-auto md:mx-0 leading-tight md:leading-relaxed text-center md:text-left", children: "O Maurício está pronto para te ajudar a escolher o pneu com o melhor custo-benefício para seu estilo de condução." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-stretch md:items-center gap-4 py-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 flex-1 hover:bg-primary/10 hover:border-primary/30 transition-colors group", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "text-primary", size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsx("p", { className: "text-white font-display font-bold text-base uppercase tracking-tight", children: "Segurança Total" }),
              /* @__PURE__ */ jsx("p", { className: "text-white/40 text-xs uppercase font-sans font-bold tracking-[0.1em]", children: "Garantia de Fábrica" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 flex-1 hover:bg-primary/10 hover:border-primary/30 transition-colors group", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20", children: /* @__PURE__ */ jsx(Star, { className: "text-primary", size: 24, fill: "currentColor" }) }),
            /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsx("p", { className: "text-white font-display font-bold text-base uppercase tracking-tight", children: "Expertise" }),
              /* @__PURE__ */ jsx("p", { className: "text-white/40 text-xs uppercase font-sans font-bold tracking-[0.1em]", children: "Técnicos Certificados" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "pt-6 border-t border-white/5 space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex flex-col gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0", children: /* @__PURE__ */ jsx(Phone, { className: "text-primary", size: 28 }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm text-white/50 uppercase tracking-[0.15em] font-sans font-bold", children: "Ligue ou chame agora" }),
                /* @__PURE__ */ jsx("strong", { className: "text-primary font-display font-black text-3xl tracking-wide", children: "(41) 3082-7282" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-5", children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0", children: /* @__PURE__ */ jsx(Clock, { className: "text-primary", size: 28 }) }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm text-white/50 uppercase tracking-[0.15em] font-sans font-bold", children: "Horário de atendimento" }),
                /* @__PURE__ */ jsx("strong", { className: "text-primary font-display font-black text-xl tracking-wide", children: "Seg–Sex 8h–18h | Sáb 8h–12h" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "md:hidden block w-full", children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://wa.me/554130827282?text=Olá Mauricio! Gostaria de uma consultoria técnica sobre pneus.",
              target: "_blank",
              className: "bg-primary hover:bg-white text-black px-8 py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 transition-transform hover:scale-105 active:scale-95 w-full leading-none group",
              children: [
                "CHAMAR NO WHATSAPP",
                /* @__PURE__ */ jsx(MessageSquare, { size: 24, className: "group-hover:rotate-12 transition-transform" })
              ]
            }
          ) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-dark/50 backdrop-blur-md py-4 overflow-hidden border-t border-white/5", children: /* @__PURE__ */ jsx("div", { className: "flex gap-12 whitespace-nowrap animate-brands-scroll", children: Array(4).fill(["PIRELLI", "MICHELIN", "GOODYEAR", "CONTINENTAL", "FIRESTONE", "BRIDGESTONE", "YOKOHAMA", "PRINX", "DELINTE"]).flat().map((brand, i) => /* @__PURE__ */ jsx("span", { className: "text-white/30 font-display text-2xl md:text-3xl font-bold tracking-tighter opacity-50 px-2 select-none italic", children: brand }, i)) }) }),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes brands-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-brands-scroll {
          animation: brands-scroll 18s linear infinite;
        }
      ` })
  ] });
}
function TireMeasuresSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "relative w-full overflow-hidden pt-8 pb-0 px-4 md:pt-12 md:px-8 text-center",
      style: {
        backgroundColor: "#1a1a1a",
        backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 8px,
            rgba(255,255,255,0.025) 8px,
            rgba(255,255,255,0.025) 10px
          )
        `
      },
      children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            className: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`,
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "Como entender as " }),
              /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "medidas" }),
              /* @__PURE__ */ jsx("span", { className: "text-white", children: " do pneu?" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "p",
          {
            className: `text-gray-400 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed px-2 transition-all duration-500 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2.5"}`,
            children: "Entenda o significado dos numeros na lateral do seu pneu e escolha o modelo certo."
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `w-full max-w-[900px] mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`,
            children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/images/pneus/pneus-medidas.webp",
                alt: "Infográfico mostrando as medidas de um pneu: Largura em milímetros, Altura em relação à largura e Aro em polegadas, com exemplo 225/55 R18",
                width: 1024,
                height: 1024,
                className: "w-full h-auto",
                loading: "lazy"
              }
            )
          }
        )
      ]
    }
  );
}
const VIDEOS = [
  {
    id: "xlwso3EmUog",
    title: "CarPlus Pneus",
    subtitle: "Sua loja de pneus no Portão"
  },
  {
    id: "v72kI13VyAU",
    title: "Promoções CarPlus",
    subtitle: "Ofertas imperdíveis para você"
  },
  {
    id: "TY8qfETXlJQ",
    title: "Troca de Óleo e Filtros",
    subtitle: "Manutenção completa do motor"
  }
];
function PneusCuritibaPromo() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const nextVideo = () => {
    setActiveVideoIndex((prev) => (prev + 1) % VIDEOS.length);
  };
  const prevVideo = () => {
    setActiveVideoIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
  };
  const activeVideo = VIDEOS[activeVideoIndex];
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref: sectionRef,
      className: "relative w-full overflow-hidden py-16 md:py-24 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white",
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `text-center mb-12 md:mb-16 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5", children: [
                /* @__PURE__ */ jsx(Tag, { size: 14 }),
                "Ofertas Exclusivas"
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 uppercase tracking-normal", children: [
                /* @__PURE__ */ jsx("span", { className: "text-dark", children: "Pneus em Curitiba e " }),
                /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Promoção!" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed", children: "Os melhores preços em pneus no bairro Portão. Condições imperdíveis para você trocar seus pneus com segurança e economia." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center", children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `relative mx-auto w-full max-w-[320px] lg:max-w-[380px] transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`,
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: prevVideo,
                    className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-black transition-colors",
                    "aria-label": "Vídeo anterior",
                    children: /* @__PURE__ */ jsx(ChevronLeft, { size: 20 })
                  }
                ),
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: nextVideo,
                    className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-dark hover:bg-primary hover:text-black transition-colors",
                    "aria-label": "Próximo vídeo",
                    children: /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-dark/10", children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "absolute inset-0 [animation:var(--animate-fade-in)]",
                      children: /* @__PURE__ */ jsx(
                        LiteYouTube,
                        {
                          videoId: activeVideo.id,
                          title: `CarPlus - ${activeVideo.title}`,
                          params: `mute=1&loop=1&playlist=${activeVideo.id}&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1`
                        }
                      )
                    },
                    activeVideo.id
                  ),
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/20 pointer-events-none" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-primary text-black px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-lg", children: [
                    /* @__PURE__ */ jsx(Play, { size: 10, fill: "currentColor" }),
                    "Destaque Premium"
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 z-10", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-lg mb-1", children: activeVideo.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/70 text-sm", children: activeVideo.subtitle })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2 mt-4", children: VIDEOS.map((video, index) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setActiveVideoIndex(index),
                    className: `w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeVideoIndex ? "bg-primary w-8" : "bg-dark/30 hover:bg-dark/50"}`,
                    "aria-label": `Ver vídeo ${index + 1}`
                  },
                  video.id
                )) }),
                /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" }),
                /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: `space-y-6 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`,
              children: [
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Tag, { className: "text-primary", size: 24 }) }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2 text-dark", children: "Até 10x Sem Juros" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Parcele sua compra em até 10x sem juros no cartão de crédito." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(MapPin, { className: "text-primary", size: 24 }) }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2 text-dark", children: "Montagem Grátis" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Montagem, balanceamento e alinhamento gratuitos." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-dark text-white p-8 rounded-3xl relative overflow-hidden", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" }),
                  /* @__PURE__ */ jsxs("div", { className: "relative z-10 text-center", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-3 uppercase italic tracking-tight", children: [
                      "Check-up ",
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Automotivo" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/70 mb-6 text-base sm:text-lg", children: "Garanta sua segurança com nossa revisão completa. Verificação de freios, suspensão, fluidos e sistema elétrico para uma viagem tranquila." }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
                      /* @__PURE__ */ jsxs(
                        Link,
                        {
                          to: "/centro-automotivo-portao",
                          className: "bg-primary text-black px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/30",
                          children: [
                            "Ver Serviços ",
                            /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: "https://wa.me/554130827282?text=Olá! Gostaria de agendar um Check-up Automotivo completo para meu veículo!",
                          className: "bg-white/10 border border-white/30 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/20 transition-colors",
                          children: [
                            /* @__PURE__ */ jsx(Phone, { size: 16 }),
                            " Agendar Agora"
                          ]
                        }
                      )
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 p-4 bg-gray-50 rounded-2xl", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(MapPin, { className: "text-black", size: 24 }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "font-bold text-dark", children: "Portão, Curitiba - PR" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Av. Presidente Arthur da Silva Bernardes, 1323 - Atendimento de Seg a Sáb" })
                  ] })
                ] })
              ]
            }
          )
        ] })
      ] })
    }
  );
}
function DeferredSection({
  children,
  minHeight = 600,
  rootMargin = "150px",
  className,
  unmountOnExit = false
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      setHasMounted(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.some((e) => e.isIntersecting);
        setIsVisible(intersecting);
        if (intersecting) setHasMounted(true);
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);
  const shouldRender = unmountOnExit ? isVisible : hasMounted;
  return /* @__PURE__ */ jsx("div", { ref, className, style: shouldRender ? void 0 : { minHeight }, children: shouldRender ? children : null });
}
const BestSellerTires = lazy(() => import("./BestSellerTires-BFFHvzl9.js"));
const TiresByBrandLazy = lazy(() => import("./TiresByBrandLazy-KRp49ZHj.js"));
const StoreSection = lazy(() => import("./StoreSection-CZqD6LEc.js"));
const ServicesGrid = lazy(() => import("./ServicesGrid-DB1H8WKJ.js"));
const Reviews = lazy(() => import("./Reviews-Ddo16tyy.js"));
const FAQInfiniteScroll = lazy(() => import("./FAQInfiniteScroll-DLFTCNay.js"));
const CentroAutomotivoCTA = lazy(() => import("./CentroAutomotivoCTA-B7yCwmCH.js"));
const OfertasExclusivas = lazy(() => import("./OfertasExclusivas-DtAWit5Z.js"));
const PneusPorAroSection = lazy(() => import("./PneusPorAroSection-RhNGVWF0.js"));
function Home() {
  const __seo = useSEO({
    title: "Carplus Centro Automotivo – Loja de Pneus e Oficina em Curitiba, Portão",
    description: "Loja de pneus Pirelli, Michelin, Goodyear, Continental e Yokohama em Curitiba. Alinhamento 3D, troca de óleo, suspensão e freios. No Portão – (41) 3082-7282.",
    canonical: "https://www.carpluspneuseoficina.com.br/",
    ogImage: "https://www.carpluspneuseoficina.com.br/og-carplus.webp",
    keywords: ["loja de pneus Curitiba", "pneus Portão Curitiba", "oficina mecânica Portão", "alinhamento 3D Curitiba", "Carplus Centro Automotivo", "pneu aro 14", "pneu aro 15", "pneu aro 16", "pneu aro 17", "pneu aro 18", "pneu aro 19", "pneu aro 20", "pneu aro 21", "pneu aro 22", "pneu aro 23"]
  });
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(PneusPromocao, {}),
      /* @__PURE__ */ jsx(TireSearchBar, {}),
      /* @__PURE__ */ jsx(TireMeasuresSection, {}),
      /* @__PURE__ */ jsx(PneusCuritibaPromo, {}),
      /* @__PURE__ */ jsx(DeferredSection, { minHeight: 900, children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(BestSellerTires, {}) }) }),
      /* @__PURE__ */ jsx(DeferredSection, { minHeight: 400, children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(TiresByBrandLazy, {}) }) }),
      /* @__PURE__ */ jsx(DeferredSection, { minHeight: 800, children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(StoreSection, {}) }) }),
      /* @__PURE__ */ jsx(DeferredSection, { minHeight: 800, unmountOnExit: true, children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(ServicesGrid, {}) }) }),
      /* @__PURE__ */ jsx(DeferredSection, { minHeight: 500, children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(CentroAutomotivoCTA, {}) }) }),
      /* @__PURE__ */ jsx(DeferredSection, { minHeight: 700, children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(OfertasExclusivas, {}) }) }),
      /* @__PURE__ */ jsx(DeferredSection, { minHeight: 500, children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(PneusPorAroSection, {}) }) }),
      /* @__PURE__ */ jsx(DeferredSection, { minHeight: 900, unmountOnExit: true, children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(Reviews, {}) }) }),
      /* @__PURE__ */ jsx(DeferredSection, { minHeight: 700, unmountOnExit: true, children: /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(FAQInfiniteScroll, {}) }) }),
      /* @__PURE__ */ jsx(DeferredSection, { minHeight: 300, unmountOnExit: true, children: /* @__PURE__ */ jsx(BrandsCarousel, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: "https://wa.me/554130827282",
        target: "_blank",
        className: "fixed bottom-6 right-6 z-[900] bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group overflow-hidden border-4 border-white/20 transition-transform hover:scale-110 active:scale-90 [animation:var(--animate-fade-in-up)]",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" }),
          /* @__PURE__ */ jsx(MessageSquare, { size: 24, className: "relative z-10" }),
          /* @__PURE__ */ jsx("span", { className: "max-w-0 group-hover:max-w-xs transition-all duration-500 overflow-hidden whitespace-nowrap font-bold text-sm relative z-10", children: "Dúvidas? Chame aqui" })
        ]
      }
    )
  ] });
}
const Home$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
export {
  Home$1 as H,
  SectionTitle as S
};
