import { jsx, jsxs } from "react/jsx-runtime";
import { useState, Suspense, lazy } from "react";
import { motion } from "motion/react";
import { Loader2, Store, ChevronDown } from "lucide-react";
const TiresByBrand = lazy(() => import("./TiresByBrand-C9i7YX6Y.js"));
function TiresByBrandLazy() {
  const [show, setShow] = useState(false);
  if (show) {
    return /* @__PURE__ */ jsx(
      Suspense,
      {
        fallback: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center gap-3 py-20 text-gray-500", children: [
          /* @__PURE__ */ jsx(Loader2, { className: "animate-spin text-primary", size: 32 }),
          /* @__PURE__ */ jsx("span", { className: "font-bold uppercase tracking-wide text-sm", children: "Carregando pneus por marca…" })
        ] }),
        children: /* @__PURE__ */ jsx(TiresByBrand, {})
      }
    );
  }
  return /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-white border-t border-gray-100", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto px-4 text-center", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6", children: /* @__PURE__ */ jsx(Store, { size: 30 }) }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl mb-4 font-bold leading-tight uppercase tracking-tight", children: [
          "Explore por ",
          /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Marca" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-600 max-w-xl mx-auto font-medium leading-relaxed mb-8", children: "Pirelli, Michelin, Goodyear, Continental e muito mais. Veja os modelos de cada marca disponíveis na loja." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setShow(true),
            className: "bg-primary text-black px-10 py-4 rounded-full font-black text-base hover:bg-yellow-400 transition-all shadow-2xl shadow-primary/30 inline-flex items-center gap-3 justify-center uppercase tracking-tight",
            children: [
              "Ver pneus por marca ",
              /* @__PURE__ */ jsx(ChevronDown, { size: 20, strokeWidth: 2.5 })
            ]
          }
        )
      ]
    }
  ) }) });
}
export {
  TiresByBrandLazy as default
};
