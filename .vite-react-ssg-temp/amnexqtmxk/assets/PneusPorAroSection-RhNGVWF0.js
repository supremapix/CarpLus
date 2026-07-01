import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { b as ARO_PAGES } from "../main.mjs";
import "vite-react-ssg";
import "react";
import "lucide-react";
const AROS = ARO_PAGES.map((p) => ({ aro: p.aro, slug: p.slug })).sort((a, b) => a.aro - b.aro);
function PneusPorAroSection() {
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-gray-50", "aria-labelledby": "home-pneus-aro-titulo", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-10", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block bg-primary text-black px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 tracking-widest", children: "Pneus por Medida" }),
      /* @__PURE__ */ jsx("h2", { id: "home-pneus-aro-titulo", className: "text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4 text-balance", children: "Pneus por Aro em Curitiba" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed text-pretty", children: "A Carplus Pneus trabalha com pneus aro 13, aro 14, aro 15, aro 16, aro 17, aro 18, aro 19, aro 20, aro 21, aro 22 e aro 23 das principais marcas nacionais e importadas, como Michelin, Pirelli, Bridgestone, Goodyear, Continental e Yokohama. Encontre o aro do seu veículo com montagem, balanceamento e alinhamento no bairro Portão." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-w-4xl mx-auto", children: AROS.map(({ aro, slug }) => /* @__PURE__ */ jsxs(
      Link,
      {
        to: `/${slug}`,
        className: "group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary transition-all py-5 flex flex-col items-center justify-center",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-black group-hover:text-primary transition-colors", children: aro }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-gray-400", children: "Aro" })
        ]
      },
      aro
    )) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/pneus",
        className: "inline-flex items-center justify-center bg-surface text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-transform",
        children: "Ver Catálogo Completo de Pneus"
      }
    ) })
  ] }) });
}
export {
  PneusPorAroSection as default
};
