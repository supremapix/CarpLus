import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Award, CheckCircle2, CircleDot, Wrench, Shield, Clock, ArrowRight, Star, MapPin, Phone } from "lucide-react";
import { L as LiteYouTube } from "./LiteYouTube-C8oiXB0y.js";
import "react";
function YouTubeShorts({ videoId, title }) {
  return /* @__PURE__ */ jsx("div", { className: "relative aspect-[9/16] w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx(LiteYouTube, { videoId, title, params: "rel=0" }) });
}
const SERVICOS_DESTAQUE = [
  {
    titulo: "Troca de Pneus",
    descricao: "Troca rapida com equipamento profissional",
    Icone: CircleDot,
    link: "/pneus"
  },
  {
    titulo: "Conserto de Pneu Furado",
    descricao: "Reparo profissional com garantia",
    Icone: Wrench,
    link: "/borracharia-portao"
  },
  {
    titulo: "Alinhamento 3D",
    descricao: "Tecnologia computadorizada de precisao",
    Icone: Shield,
    link: "/servico/alinhamento"
  },
  {
    titulo: "Balanceamento",
    descricao: "Eliminacao de vibracoes e desgaste irregular",
    Icone: Clock,
    link: "/servico/balanceamento"
  }
];
function OfertasExclusivas() {
  return /* @__PURE__ */ jsxs("section", { className: "py-20 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-5", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-medium mb-4", children: [
              /* @__PURE__ */ jsx(Award, { className: "w-4 h-4" }),
              "Ofertas Exclusivas"
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-black text-white mb-4", children: [
              "TROCA DE PNEUS NO ",
              /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "BAIRRO PORTAO" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-lg max-w-3xl mx-auto", children: "Rapidez, seguranca e atendimento profissional. A Carplus e referencia em troca de pneus, alinhamento, balanceamento e servicos automotivos completos em Curitiba." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8 items-start min-w-0", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "space-y-4 min-w-0",
            children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-6 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-amber-500" }),
                "Servicos em Destaque"
              ] }),
              SERVICOS_DESTAQUE.map((servico, index) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: servico.link,
                  className: "block bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50 hover:border-amber-500/50 rounded-xl p-4 transition-all group",
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/30 transition-colors", children: /* @__PURE__ */ jsx(servico.Icone, { className: "w-5 h-5 text-amber-500" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold group-hover:text-amber-500 transition-colors text-balance", children: servico.titulo }),
                      /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm text-pretty", children: servico.descricao })
                    ] }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 text-neutral-600 group-hover:text-amber-500 transition-colors flex-shrink-0" })
                  ] })
                },
                index
              )),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/borracharia-portao",
                  className: "block mt-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-900 font-bold py-4 px-6 rounded-xl text-center transition-all shadow-lg shadow-amber-500/20",
                  children: "Conhecer Borracharia Full Service"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "flex flex-col items-center w-full min-w-0",
            children: [
              /* @__PURE__ */ jsx(
                YouTubeShorts,
                {
                  videoId: "4FpPSM5vYE8",
                  title: "Troca de Pneus no Bairro Portao - Carplus Curitiba"
                }
              ),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm mt-4 text-center", children: "Veja nosso atendimento profissional" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "space-y-6 min-w-0",
            children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-6 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-amber-500" }),
                "Por que escolher a Carplus?"
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                "Pneus nacionais e importados",
                "Troca rapida de pneus",
                "Alinhamento computadorizado",
                "Balanceamento profissional",
                "Pneus para carros eletricos",
                "Revisao automotiva completa",
                "Borracharia Full Service",
                "Atendimento especializado"
              ].map((item, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-neutral-300", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-amber-500 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: item })
              ] }, index)) }),
              /* @__PURE__ */ jsxs("div", { className: "bg-neutral-800/50 border border-neutral-700/50 rounded-xl p-5 mt-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-4", children: [
                  /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-medium text-pretty", children: "Av. Presidente Arthur da Silva Bernardes, 1323" }),
                    /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm", children: "Portao - Curitiba - PR" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "tel:4130827282",
                    className: "flex items-center gap-3 text-amber-500 hover:text-amber-400 transition-colors",
                    children: [
                      /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" }),
                      /* @__PURE__ */ jsx("span", { className: "font-bold", children: "(41) 3082-7282" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-xs", children: "Atendemos: Portao, Agua Verde, Vila Izabel, Capao Raso, Seminario, Fazendinha, Novo Mundo e toda Curitiba." })
            ]
          }
        )
      ] })
    ] })
  ] });
}
export {
  OfertasExclusivas as default
};
