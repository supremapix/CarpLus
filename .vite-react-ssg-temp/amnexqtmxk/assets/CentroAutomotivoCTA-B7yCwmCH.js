import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MapPin, Star, Shield, Wrench, ArrowRight } from "lucide-react";
function CentroAutomotivoCTA() {
  return /* @__PURE__ */ jsxs("section", { className: "py-16 bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/30 relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-5", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: {
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
    } }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-4 h-4 text-amber-500" }),
              /* @__PURE__ */ jsx("span", { className: "text-amber-500 text-sm font-medium", children: "Bairro Portão, Curitiba" })
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4 leading-tight", children: [
              "Centro Automotivo Completo no",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Portão" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-300 text-lg mb-6 leading-relaxed", children: "Pneus das melhores marcas, mecânica especializada, alinhamento 3D e atendimento de confiança. Tudo que seu carro precisa em um só lugar, com mais de 35 anos de experiência no mercado automotivo." }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 text-amber-500" }) }),
                /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-medium", children: "Pirelli Center" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-amber-500" }) }),
                /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-medium", children: "Garantia Total" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Wrench, { className: "w-6 h-6 text-amber-500" }) }),
                /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-medium", children: "Full Service" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/centro-automotivo-portao",
                className: "inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 group",
                children: [
                  "Conhecer o Centro Automotivo",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 30 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.6, delay: 0.2 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl overflow-hidden shadow-2xl", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  src: "/images/centro-automotivo/mecanico-elevador.webp",
                  alt: "Centro Automotivo Carplus no Portão - Oficina Mecânica Completa em Curitiba",
                  width: 1200,
                  height: 801,
                  className: "w-full h-80 lg:h-96 object-cover"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-4 right-4", children: /* @__PURE__ */ jsx("div", { className: "bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-black font-bold text-lg", children: "4.9" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 mb-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 fill-amber-500 text-amber-500" }, i)) }),
                  /* @__PURE__ */ jsx("p", { className: "text-white/80 text-sm", children: "+800 avaliações no Google" })
                ] })
              ] }) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 -right-4 bg-amber-500 rounded-xl p-4 shadow-xl hidden lg:block", children: [
              /* @__PURE__ */ jsx("p", { className: "text-black font-bold text-lg", children: "35+ Anos" }),
              /* @__PURE__ */ jsx("p", { className: "text-black/70 text-sm", children: "de experiência" })
            ] })
          ]
        }
      )
    ] }) }) })
  ] });
}
export {
  CentroAutomotivoCTA as default
};
