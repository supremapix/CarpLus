import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, useRef } from "react";
import { motion } from "motion/react";
import { ChevronRight, MessageSquare, Phone, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { TIRES } from "./tire-catalog-f1Gw3RQz.js";
import { T as TireCard } from "./TireCard-CTgUlHZr.js";
const BRAND_ORDER = [
  "Pirelli",
  "Michelin",
  "Goodyear",
  "Continental",
  "Bridgestone",
  "Firestone",
  "Yokohama",
  "Dunlop",
  "Hankook"
];
function BrandRow({ brand, tires }) {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4 px-1", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-black uppercase tracking-tight text-gray-800", children: brand }),
        /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-400 font-medium", children: [
          "(",
          tires.length,
          " ",
          tires.length === 1 ? "pneu" : "pneus",
          ")"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("left"),
            className: "w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors",
            "aria-label": "Rolar para esquerda",
            children: /* @__PURE__ */ jsx(ChevronLeft, { size: 20, className: "text-gray-600" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => scroll("right"),
            className: "w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors",
            "aria-label": "Rolar para direita",
            children: /* @__PURE__ */ jsx(ChevronRight, { size: 20, className: "text-gray-600" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/pneus?marca=${brand}`,
            className: "hidden md:flex items-center gap-1 text-primary font-bold text-sm hover:underline ml-2",
            children: [
              "Ver todos ",
              /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: scrollRef,
        className: "flex gap-4 overflow-x-auto pb-4 scrollbar-thin scroll-smooth",
        style: { scrollbarWidth: "thin" },
        children: [
          tires.map((tire, index) => /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-[280px]", children: /* @__PURE__ */ jsx(TireCard, { tire, index }) }, tire.id)),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/pneus?marca=${brand}`,
              className: "flex-shrink-0 w-[280px] h-full min-h-[320px] bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex flex-col items-center justify-center gap-3 hover:border-primary hover:bg-primary/5 transition-all group",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-full bg-gray-100 group-hover:bg-primary/20 flex items-center justify-center transition-colors", children: /* @__PURE__ */ jsx(ChevronRight, { size: 28, className: "text-gray-400 group-hover:text-primary transition-colors" }) }),
                /* @__PURE__ */ jsxs("span", { className: "font-bold text-gray-500 group-hover:text-primary transition-colors", children: [
                  "Ver todos ",
                  brand
                ] })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function TiresByBrand() {
  const tiresByBrand = useMemo(() => {
    const grouped = {};
    TIRES.forEach((tire) => {
      if (!grouped[tire.marca]) {
        grouped[tire.marca] = [];
      }
      grouped[tire.marca].push(tire);
    });
    const sortedBrands = BRAND_ORDER.filter((brand) => grouped[brand] && grouped[brand].length > 0);
    Object.keys(grouped).forEach((brand) => {
      if (!sortedBrands.includes(brand) && sortedBrands.length < 9) {
        sortedBrands.push(brand);
      }
    });
    return sortedBrands.slice(0, 9).map((brand) => ({
      brand,
      tires: grouped[brand].slice(0, 6)
      // 6 pneus por marca; carrossel + card "Ver todos" cobrem o resto
    }));
  }, []);
  return /* @__PURE__ */ jsxs("section", { id: "pneus", className: "py-16 md:py-24 bg-white overflow-hidden relative border-t border-gray-100", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-full h-96 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center mb-12 md:mb-16", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold leading-tight uppercase tracking-tight", children: [
              "Pneus por ",
              /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Marca" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed", children: "Navegue pelos melhores pneus das principais marcas do mercado" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6", children: tiresByBrand.map(({ brand, tires }, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-50px" },
          transition: { delay: index * 0.05 },
          children: /* @__PURE__ */ jsx(BrandRow, { brand, tires })
        },
        brand
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 md:mt-16 text-center", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/pneus",
              className: "bg-dark text-white px-10 py-3.5 rounded-full font-bold text-base hover:bg-black transition-all shadow-2xl flex items-center gap-3 justify-center max-w-sm mx-auto uppercase italic tracking-tighter",
              children: [
                "Ver Catálogo Completo ",
                /* @__PURE__ */ jsx(ChevronRight, {})
              ]
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "mt-16 md:mt-20 relative rounded-[2.5rem] overflow-hidden shadow-2xl min-h-[300px]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  src: "/images/loja/estoque-pneus-carplus.webp",
                  alt: "Loja de pneus Carplus",
                  width: 1200,
                  height: 429,
                  className: "w-full h-full object-cover object-center"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10 px-10 py-14 md:px-16 md:py-16 flex flex-col lg:flex-row items-center justify-between gap-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse" }),
                  "Consultoria Técnica Gratuita"
                ] }),
                /* @__PURE__ */ jsxs("h3", { className: "text-4xl md:text-6xl font-bold mb-4 text-white leading-tight uppercase italic tracking-tight", children: [
                  "Dúvida sobre o",
                  /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
                  " pneu ideal?"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg font-medium text-white/65 max-w-sm", children: "Fale com o Maurício e receba uma consultoria técnica gratuita." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4 w-full lg:w-auto shrink-0 lg:min-w-[280px]", children: [
                /* @__PURE__ */ jsxs(
                  motion.a,
                  {
                    whileHover: { scale: 1.04 },
                    whileTap: { scale: 0.97 },
                    href: "https://wa.me/554130827282?text=Olá Mauricio! Gostaria de ajuda para escolher os pneus ideais.",
                    className: "bg-primary text-black px-8 py-5 rounded-2xl font-black text-base hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/40 uppercase tracking-tight",
                    children: [
                      /* @__PURE__ */ jsx(MessageSquare, { size: 20 }),
                      " Falar com Maurício"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.a,
                  {
                    whileHover: { scale: 1.04 },
                    whileTap: { scale: 0.97 },
                    href: "tel:+554130827282",
                    className: "bg-white/10 border border-white/25 text-white px-8 py-4 rounded-2xl font-bold text-base hover:bg-white/20 transition-all flex items-center justify-center gap-3 uppercase tracking-tight backdrop-blur-sm",
                    children: [
                      /* @__PURE__ */ jsx(Phone, { size: 18 }),
                      " (41) 3082-7282"
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] })
  ] });
}
export {
  TiresByBrand as default
};
