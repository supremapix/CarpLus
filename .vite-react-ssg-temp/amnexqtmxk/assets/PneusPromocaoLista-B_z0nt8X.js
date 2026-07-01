import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronRight, Tag, Search, ArrowUpDown, Car, ExternalLink, MessageSquare, ShieldCheck, CreditCard } from "lucide-react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import { b as generateProductListSchema, g as generateBreadcrumbSchema } from "./schema-DUlgfpSk.js";
import { PROMO_TIRES } from "./promoTires-CI2UiQpD.js";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
const BASE_URL = "https://www.carpluspneuseoficina.com.br";
const WHATSAPP_PHONE = "554130827282";
const FALLBACK_IMG = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="%23f3f4f6"/><text x="50%" y="50%" font-size="16" fill="%239ca3af" text-anchor="middle" dy=".3em">Pneu</text></svg>'
);
function PneusPromocaoLista() {
  const [busca, setBusca] = useState("");
  const [ordem, setOrdem] = useState("menor");
  const pageUrl = `${BASE_URL}/pneus-promocao`;
  const listaFiltrada = useMemo(() => {
    const termo = busca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    const filtrada = PROMO_TIRES.filter((t) => {
      if (!termo) return true;
      const alvo = `${t.marca} ${t.nome} ${t.medida} ${t.carros.join(" ")}`.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return alvo.includes(termo);
    });
    return [...filtrada].sort((a, b) => {
      if (ordem === "menor") return a.precoNumero - b.precoNumero;
      if (ordem === "maior") return b.precoNumero - a.precoNumero;
      return a.marca.localeCompare(b.marca);
    });
  }, [busca, ordem]);
  const productListSchema = generateProductListSchema(
    PROMO_TIRES.map((t, i) => ({
      name: `Pneu ${t.marca} ${t.nome}`,
      url: `${BASE_URL}/pneu-promocao/${t.slug}`,
      image: t.imagem,
      position: i + 1
    }))
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Pneus em Promoção", url: pageUrl }
  ]);
  const __seo = useSEO({
    title: "Pneus em Promoção em Curitiba | Lista Completa – Carplus Portão",
    description: "Lista completa de pneus em promoção em Curitiba a partir de R$ 239. Veja preço, medida e carros compatíveis de cada modelo. Montagem inclusa e até 10x sem juros na Carplus, no Portão. WhatsApp: (41) 3082-7282.",
    canonical: pageUrl,
    keywords: [
      "pneus em promoção curitiba",
      "pneu barato curitiba",
      "lista de pneus em promoção",
      "preço de pneu curitiba",
      "loja de pneus portão curitiba",
      "carplus pneus"
    ],
    schemaJSON: [productListSchema, breadcrumbSchema]
  });
  const precoMin = Math.min(...PROMO_TIRES.map((t) => t.precoNumero));
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 flex flex-col", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-1 pt-24 md:pt-28", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "max-w-6xl mx-auto w-full px-4 md:px-6 mb-4", children: /* @__PURE__ */ jsxs("ol", { className: "flex items-center gap-1.5 text-sm text-gray-400", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-primary", children: "Home" }) }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 14 }),
        /* @__PURE__ */ jsx("li", { className: "text-gray-700 font-semibold", children: "Pneus em Promoção" })
      ] }) }),
      /* @__PURE__ */ jsxs("header", { className: "max-w-6xl mx-auto w-full px-4 md:px-6 mb-8", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 bg-primary/10 text-primary font-accent font-bold uppercase tracking-wider text-sm px-3 py-1 rounded-full", children: [
          /* @__PURE__ */ jsx(Tag, { size: 15 }),
          " Ofertas Carplus"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "mt-3 text-3xl md:text-5xl font-bold uppercase italic tracking-tight text-gray-900 text-balance", children: "Pneus em Promoção em Curitiba" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-3 text-gray-600 leading-relaxed max-w-2xl", children: [
          "Confira a lista completa das nossas ofertas a partir de",
          " ",
          /* @__PURE__ */ jsxs("strong", { className: "text-gray-900", children: [
            "R$ ",
            precoMin.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
          ] }),
          ". Todos os preços já incluem montagem, balanceamento e calibragem, com parcelamento em até 10x sem juros na Carplus, no bairro Portão."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto w-full px-4 md:px-6 mb-6 flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
          /* @__PURE__ */ jsx(Search, { size: 18, className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "search",
              value: busca,
              onChange: (e) => setBusca(e.target.value),
              placeholder: "Buscar por marca, medida ou carro (ex: Onix, 175/65/14)",
              className: "w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-3 text-gray-800 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none",
              "aria-label": "Buscar pneu"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative sm:w-64", children: [
          /* @__PURE__ */ jsx(ArrowUpDown, { size: 18, className: "absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              value: ordem,
              onChange: (e) => setOrdem(e.target.value),
              className: "w-full appearance-none rounded-xl border border-gray-200 bg-white pl-11 pr-8 py-3 text-gray-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer",
              "aria-label": "Ordenar lista",
              children: [
                /* @__PURE__ */ jsx("option", { value: "menor", children: "Menor preço" }),
                /* @__PURE__ */ jsx("option", { value: "maior", children: "Maior preço" }),
                /* @__PURE__ */ jsx("option", { value: "marca", children: "Marca (A-Z)" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto w-full px-4 md:px-6 mb-4", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500", children: [
        listaFiltrada.length,
        " ",
        listaFiltrada.length === 1 ? "pneu encontrado" : "pneus encontrados"
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "max-w-6xl mx-auto w-full px-4 md:px-6 pb-16", children: listaFiltrada.length === 0 ? /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl border border-gray-100 p-12 text-center", children: /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Nenhum pneu encontrado para a sua busca." }) }) : /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4", children: listaFiltrada.map((tire, i) => {
        const msg = `Olá! Vi a *promoção do pneu ${tire.marca} ${tire.nome}* (medida ${tire.medida}) por ${tire.preco}. Gostaria de garantir esse preço.

Origem do contato: ${BASE_URL}/pneus-promocao (lista)`;
        const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(msg)}`;
        return /* @__PURE__ */ jsxs(
          motion.li,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, margin: "-40px" },
            transition: { duration: 0.4, delay: Math.min(i * 0.03, 0.3) },
            className: "group flex flex-col sm:flex-row gap-4 bg-white rounded-2xl border border-gray-100 p-4 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all",
            children: [
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: `/pneu-promocao/${tire.slug}`,
                  className: "relative flex-shrink-0 w-full sm:w-36 h-36 bg-white rounded-xl overflow-hidden flex items-center justify-center",
                  children: [
                    /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: tire.imagem,
                        srcSet: `${tire.imagemSmall} 300w, ${tire.imagem} 600w`,
                        sizes: "(max-width: 640px) 90vw, 144px",
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
                    /* @__PURE__ */ jsx("span", { className: "absolute top-2 left-2 bg-black text-white text-[10px] font-accent font-bold uppercase tracking-wider px-2 py-0.5 rounded", children: "Promoção" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col", children: [
                /* @__PURE__ */ jsx(
                  Link,
                  {
                    to: `/pneu-promocao/${tire.slug}`,
                    className: "font-accent font-bold uppercase tracking-wide text-primary text-lg leading-none hover:underline",
                    children: tire.marca
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-gray-800 font-semibold", children: tire.nome }),
                /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-2 text-xs", children: [
                  /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 bg-gray-100 text-gray-600 rounded-full px-2.5 py-1 font-semibold", children: [
                    "Aro ",
                    tire.aro
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1 bg-gray-100 text-gray-600 rounded-full px-2.5 py-1 font-semibold", children: tire.medida }),
                  tire.carros.length > 0 && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 bg-gray-100 text-gray-600 rounded-full px-2.5 py-1 font-semibold", children: [
                    /* @__PURE__ */ jsx(Car, { size: 12 }),
                    " ",
                    tire.carros.slice(0, 2).join(", "),
                    tire.carros.length > 2 ? "…" : ""
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: tire.catalogoUrl,
                    className: "mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-primary w-fit",
                    children: [
                      /* @__PURE__ */ jsx(ExternalLink, { size: 14 }),
                      tire.temCatalogoMarca ? `Ver catálogo ${tire.marca}` : "Ver catálogo completo de pneus"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-row sm:flex-col items-end justify-between sm:justify-center gap-2 sm:w-48 sm:border-l sm:border-gray-100 sm:pl-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-[11px] text-gray-400 uppercase tracking-wide", children: "a partir de" }),
                  /* @__PURE__ */ jsx("span", { className: "font-accent font-bold text-gray-900 text-2xl leading-none", children: tire.preco })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 w-auto sm:w-full", children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: whatsappUrl,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-2.5 font-accent font-bold uppercase tracking-wide !text-white text-sm transition-colors hover:bg-neutral-800",
                      children: [
                        /* @__PURE__ */ jsx(MessageSquare, { size: 16, strokeWidth: 2.5 }),
                        "Pedir orçamento"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: `/pneu-promocao/${tire.slug}`,
                      className: "inline-flex items-center justify-center gap-1 rounded-xl border border-gray-200 px-4 py-2 font-accent font-bold uppercase tracking-wide text-gray-700 text-xs transition-colors hover:border-primary hover:text-primary",
                      children: "Saiba mais"
                    }
                  )
                ] })
              ] })
            ]
          },
          tire.slug
        );
      }) }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-white border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto w-full px-4 md:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(ShieldCheck, { size: 22 }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 font-semibold leading-snug", children: "Montagem, balanceamento e garantia de fábrica inclusos" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(CreditCard, { size: 22 }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 font-semibold leading-snug", children: "Parcele em até 10x sem juros no cartão" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(Tag, { size: 22 }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 font-semibold leading-snug", children: "Preços de Curitiba, no bairro Portão" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PneusPromocaoLista as default
};
