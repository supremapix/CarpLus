import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Flame, ChevronRight } from "lucide-react";
import { T as TireCard } from "./TireCard-CTgUlHZr.js";
import "react";
const FEATURED_TIRES = [
  {
    "id": 9,
    "slug": "pneu-pirelli-185-55r15-p7-all-season-82h",
    "nome": "Pirelli 185/55R15 P7 All Season 82H",
    "marca": "Pirelli",
    "linha": "P7 All Season",
    "aro": 15,
    "medida": "185/55R15",
    "imagem": "/images/pneus/pirelli-cinturato-p7.webp",
    "categoria": "All Season",
    "destaque": true,
    "novoModelo": false
  },
  {
    "id": 12,
    "slug": "pneu-pirelli-185-65r14-p400-evo-86t",
    "nome": "Pirelli 185/65R14 P400 Evo 86T",
    "marca": "Pirelli",
    "linha": "P400 Evo",
    "aro": 14,
    "medida": "185/65R14",
    "imagem": "/images/pneus/pirelli-p400-evo-real.webp",
    "categoria": "Econômico",
    "destaque": true,
    "novoModelo": false
  },
  {
    "id": 20,
    "slug": "pneu-michelin-205-55r16-primacy-4-91v",
    "nome": "Michelin 205/55R16 Primacy 4 91V",
    "marca": "Michelin",
    "linha": "Primacy 4",
    "aro": 16,
    "medida": "205/55R16",
    "imagem": "/images/pneus/157090-800-auto.webp",
    "categoria": "Conforto Premium",
    "destaque": true,
    "novoModelo": false
  },
  {
    "id": 21,
    "slug": "pneu-michelin-225-45r17-pilot-sport-4-94y",
    "nome": "Michelin 225/45R17 Pilot Sport 4 94Y",
    "marca": "Michelin",
    "linha": "Pilot Sport 4",
    "aro": 17,
    "medida": "225/45R17",
    "imagem": "/images/pneus/D_NQ_NP_2X_757136-MLU77101238791_062024-F.webp",
    "categoria": "Esportivo",
    "destaque": true,
    "novoModelo": true
  },
  {
    "id": 32,
    "slug": "pneu-goodyear-265-70r16-wrangler-at-silenttrac-112t",
    "nome": "Goodyear 265/70R16 Wrangler AT SilentTrac 112T",
    "marca": "Goodyear",
    "linha": "Wrangler",
    "aro": 16,
    "medida": "265/70R16",
    "imagem": "/images/pneus/pneu-26570r16-goodyear-wrangler-at-adventure-112t-1_1.webp",
    "categoria": "All-Terrain",
    "destaque": true,
    "novoModelo": true
  },
  {
    "id": 33,
    "slug": "pneu-continental-205-55r16-contipowercontact-2-91v",
    "nome": "Continental 205/55R16 ContiPowerContact 2 91V",
    "marca": "Continental",
    "linha": "ContiPowerContact",
    "aro": 16,
    "medida": "205/55R16",
    "imagem": "/images/pneus/continental-powercontact-2.webp",
    "categoria": "Performance",
    "destaque": true,
    "novoModelo": false
  },
  {
    "id": 176,
    "slug": "pneu-17570r14-bridgestone-dueler-at-revo2-88h",
    "nome": "Bridgestone 175/70R14 Dueler A/T Revo2 88H",
    "marca": "Bridgestone",
    "linha": "Dueler AT Revo2",
    "aro": 14,
    "medida": "175/70R14",
    "imagem": "/images/pneus/pneu-bridgestone-revo.webp",
    "categoria": "SUV",
    "destaque": true,
    "novoModelo": true
  },
  {
    "id": 178,
    "slug": "pneu-18560r15-bridgestone-ecopia-ep150-84h-oe",
    "nome": "Bridgestone 185/60R15 Ecopia EP150 84H OE",
    "marca": "Bridgestone",
    "linha": "Ecopia EP150",
    "aro": 15,
    "medida": "185/60R15",
    "imagem": "/images/pneus/pneu-bridgestone-ecopia.webp",
    "categoria": "Econômico",
    "destaque": true,
    "novoModelo": true
  }
];
function BestSellerTires() {
  return /* @__PURE__ */ jsx("section", { id: "mais-vendidos", className: "py-16 md:py-24 bg-white overflow-hidden relative border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-12 md:mb-16", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest mb-5", children: [
            /* @__PURE__ */ jsx(Flame, { size: 14, className: "fill-primary" }),
            "Os queridinhos da loja"
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold leading-tight uppercase tracking-tight", children: [
            "Pneus ",
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Mais Vendidos" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-medium leading-relaxed", children: "Os modelos preferidos dos nossos clientes em Curitiba" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6", children: FEATURED_TIRES.map((tire, index) => /* @__PURE__ */ jsx(TireCard, { tire, index }, tire.id)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 md:mt-16 text-center", children: /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/pneus",
        className: "bg-dark text-white px-10 py-3.5 rounded-full font-bold text-base hover:bg-black transition-all shadow-2xl inline-flex items-center gap-3 justify-center uppercase italic tracking-tighter",
        children: [
          "Ver Catálogo Completo ",
          /* @__PURE__ */ jsx(ChevronRight, {})
        ]
      }
    ) }) })
  ] }) });
}
export {
  BestSellerTires as default
};
