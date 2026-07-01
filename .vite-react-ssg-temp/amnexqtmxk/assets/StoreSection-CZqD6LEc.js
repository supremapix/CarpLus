import { jsx, jsxs } from "react/jsx-runtime";
import { motion } from "motion/react";
import { MessageSquare } from "lucide-react";
import { S as SectionTitle } from "./Home-jT0kmvw9.js";
import "react";
import "./Footer-DkaDSj4_.js";
import "react-router-dom";
import "./services-SlP8WPLZ.js";
import "./promoTires-CI2UiQpD.js";
import "./LiteYouTube-C8oiXB0y.js";
import "./useSEO-DsO0176p.js";
import "react-helmet-async";
function StoreSection() {
  return /* @__PURE__ */ jsx("section", { className: "w-full bg-[#111111] py-16 md:py-24 px-4 md:px-8 overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-10 lg:gap-16 items-center", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "relative w-full lg:w-1/2 flex-shrink-0",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-2 bg-amber-500" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-2 h-full bg-amber-500" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-full h-2 bg-amber-500" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-2 h-full bg-amber-500" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "relative rounded-lg overflow-hidden shadow-2xl", children: /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: "/images/loja/carplus-oficina-interior.webp",
              alt: "Carplus Pneus - Loja e Oficina no Portao, Curitiba",
              width: 1001,
              height: 1200,
              className: "w-full h-auto object-cover"
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, delay: 0.2 },
        className: "w-full lg:w-1/2 text-center lg:text-left",
        children: [
          /* @__PURE__ */ jsx("p", { className: "text-amber-500 font-bold text-sm sm:text-base md:text-lg tracking-wider uppercase mb-2 text-center lg:text-left", children: "Carplus Pneus e Oficina" }),
          /* @__PURE__ */ jsx(SectionTitle, { prefix: "LOJA DE PNEUS EM", highlight: "CURITIBA", darkBg: true, className: "lg:text-left" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left", children: [
            /* @__PURE__ */ jsxs("p", { children: [
              "Bem-vindo à ",
              /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Carplus Pneus e Oficina" }),
              ", sua referência em pneus e serviços automotivos em Curitiba e Região Metropolitana. Trabalhamos com as principais marcas do mercado — ",
              /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Pirelli, Michelin, Goodyear, Continental, Bridgestone, Firestone, Yokohama, Prinx e Delinte" }),
              " — com pneus ",
              /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "a partir de R$ 239,00 à vista" }),
              " e parcelamento em até 10x sem juros."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Aqui você encontra o pneu ideal para o seu veículo, de carros de passeio compactos a SUVs, picapes e utilitários. Nossa estrutura foi pensada para garantir disponibilidade imediata e preços competitivos, com atendimento personalizado via WhatsApp e a segurança de uma ",
              /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "loja física consolidada com estoque real" }),
              " no bairro Portão."
            ] }),
            /* @__PURE__ */ jsxs("p", { children: [
              "Todos os produtos são originais, com selo do INMETRO e garantia de fábrica. Além da venda de pneus, somos uma oficina ",
              /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "full service" }),
              ": alinhamento 3D, balanceamento, troca de óleo, freios e suspensão. Escolha a medida certa, negocie diretamente com nossos consultores e rode com mais segurança pelas ruas de Curitiba. ",
              /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Carplus Pneus: qualidade e confiança em um só lugar" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center lg:justify-start", children: /* @__PURE__ */ jsxs(
            motion.a,
            {
              href: "https://wa.me/554130827282?text=Ola! Gostaria de saber mais sobre pneus disponiveis na Carplus.",
              target: "_blank",
              rel: "noopener noreferrer",
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              className: "inline-flex items-center gap-3 mt-8 bg-amber-500 hover:bg-amber-600 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors shadow-lg",
              children: [
                "Fale pelo WhatsApp",
                /* @__PURE__ */ jsx(MessageSquare, { size: 22 })
              ]
            }
          ) })
        ]
      }
    )
  ] }) }) });
}
export {
  StoreSection as default
};
