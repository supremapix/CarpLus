import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ChevronRight, MessageSquare, Phone, Circle, Tag, Ruler, Scale, Car, MapPin } from "lucide-react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import { g as generateBreadcrumbSchema, a as generateFaqSchema } from "./schema-DUlgfpSk.js";
import { W as WHATSAPP_NUMBER, P as PHONE_DISPLAY, b as ARO_PAGES, c as BRAND_PAGES, e as MEASURE_SEO, d as COMPARISON_PAGES, V as VEHICLE_PAGES, L as LOCAL_COMBO_PAGES, B as BASE_URL } from "../main.mjs";
import "react";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
import "vite-react-ssg";
function measureToSlug(medida) {
  return medida.toLowerCase().replace(/\//g, "-");
}
const HUB_FAQ = [
  {
    question: "Onde comprar pneus em Curitiba com montagem inclusa?",
    answer: "Na Carplus Centro Automotivo, no bairro Portão, em Curitiba. Trabalhamos com pneus de várias marcas e aros, com montagem, balanceamento e calibragem inclusos e parcelamento em até 10x sem juros."
  },
  {
    question: "Quais marcas de pneus a Carplus trabalha?",
    answer: "Trabalhamos com marcas como Pirelli, Michelin, Goodyear, Continental e Yokohama, além de outras opções de custo-benefício, cobrindo do aro 13 ao aro 20 e além."
  },
  {
    question: "A Carplus faz alinhamento e balanceamento?",
    answer: "Sim. Somos uma oficina mecânica completa: alinhamento 3D computadorizado, balanceamento, freios, suspensão, troca de óleo e muito mais, tudo no mesmo lugar, no Portão."
  }
];
function Section({
  icon: Icon,
  title,
  subtitle,
  children
}) {
  return /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b-2 border-primary pb-3 mb-6", children: [
      /* @__PURE__ */ jsx(Icon, { size: 24, className: "text-primary" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold uppercase tracking-tighter italic", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm font-medium", children: subtitle })
      ] })
    ] }),
    children
  ] });
}
function PneusCuritibaHub() {
  const __seo = useSEO({
    title: "Pneus em Curitiba | Carplus Centro Automotivo – Aros, Marcas e Medidas",
    description: "Pneus em Curitiba na Carplus, bairro Portão. Encontre pneus por aro (13 ao 20), por marca (Pirelli, Michelin, Goodyear, Continental, Yokohama), por medida e por veículo. Montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.",
    canonical: `${BASE_URL}/pneus-curitiba`,
    ogImage: "/images/loja/carplus-oficina-portao-fachada-curitiba.jpg",
    schemaJSON: [
      generateBreadcrumbSchema([
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Pneus Curitiba", url: `${BASE_URL}/pneus-curitiba` }
      ]),
      generateFaqSchema(HUB_FAQ)
    ]
  });
  const linkClass = "flex items-center gap-2 bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-700 hover:text-black transition-all";
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 pt-24 md:pt-28", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 md:px-6 py-8", children: [
      /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-black", children: "Home" }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 12 }),
        /* @__PURE__ */ jsx("span", { className: "text-black", children: "Pneus Curitiba" })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-14", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-black animate-pulse" }),
          " Central de Pneus · Curitiba"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold uppercase tracking-tighter italic leading-none mb-5 text-balance", children: [
          "Pneus em ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Curitiba" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl text-pretty", children: "Encontre o pneu ideal para o seu carro por aro, marca, medida ou modelo de veículo. A Carplus fica no bairro Portão e oferece montagem, balanceamento e alinhamento no mesmo lugar, com parcelamento em até 10x sem juros." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mt-8", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Gostaria de um orçamento de pneus em Curitiba.")}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all shadow-2xl shadow-green-200",
              children: [
                /* @__PURE__ */ jsx(MessageSquare, { size: 22 }),
                " Orçamento no WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `tel:+${WHATSAPP_NUMBER}`,
              className: "flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all",
              children: [
                /* @__PURE__ */ jsx(Phone, { size: 20 }),
                " ",
                PHONE_DISPLAY
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Section, { icon: Circle, title: "Pneus por Aro", subtitle: "Do aro 13 ao aro 20", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3", children: ARO_PAGES.map((a) => /* @__PURE__ */ jsxs(Link, { to: `/${a.slug}`, className: linkClass, children: [
        /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "text-primary" }),
        " Pneu Aro ",
        a.aro
      ] }, a.slug)) }) }),
      /* @__PURE__ */ jsx(Section, { icon: Tag, title: "Pneus por Marca", subtitle: "Marcas que trabalhamos", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3", children: BRAND_PAGES.map((b) => /* @__PURE__ */ jsxs(Link, { to: `/${b.slug}`, className: linkClass, children: [
        /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "text-primary" }),
        " ",
        b.marca
      ] }, b.slug)) }) }),
      /* @__PURE__ */ jsxs(Section, { icon: Ruler, title: "Pneus por Medida", subtitle: "As medidas mais procuradas", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3", children: MEASURE_SEO.map((m) => /* @__PURE__ */ jsxs(Link, { to: `/pneu-medida/${measureToSlug(m.medida)}`, className: linkClass, children: [
          /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "text-primary" }),
          " ",
          m.medida
        ] }, m.medida)) }),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/medidas-de-pneus-curitiba",
            className: "inline-flex items-center gap-2 mt-5 text-primary font-bold hover:underline uppercase text-sm tracking-tight",
            children: [
              "Ver todas as medidas e como ler a do seu pneu ",
              /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Section, { icon: Scale, title: "Comparativos de Marcas", subtitle: "Ajudamos você a escolher", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: COMPARISON_PAGES.map((p) => /* @__PURE__ */ jsxs(Link, { to: `/${p.slug}`, className: linkClass, children: [
        /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "text-primary" }),
        " ",
        p.h1
      ] }, p.slug)) }) }),
      /* @__PURE__ */ jsx(Section, { icon: Car, title: "Pneus por Veículo", subtitle: "Modelos populares em Curitiba", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3", children: VEHICLE_PAGES.map((v) => /* @__PURE__ */ jsxs(Link, { to: `/${v.slug}`, className: linkClass, children: [
        /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "text-primary" }),
        " ",
        v.nome
      ] }, v.slug)) }) }),
      /* @__PURE__ */ jsx(Section, { icon: MapPin, title: "Pneus por Região", subtitle: "Atendimento no Portão e bairros vizinhos", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: LOCAL_COMBO_PAGES.map((p) => /* @__PURE__ */ jsxs(Link, { to: `/${p.slug}`, className: linkClass, children: [
        /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "text-primary" }),
        " ",
        p.h1
      ] }, p.slug)) }) }),
      /* @__PURE__ */ jsxs("section", { className: "bg-dark text-white rounded-[2.5rem] p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold uppercase tracking-tighter italic mb-3", children: "Procura uma medida específica?" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/70 font-medium mb-8 max-w-xl mx-auto", children: "Acesse o catálogo completo com filtros por marca, aro e medida, ou fale com nossa equipe técnica gratuitamente." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/pneus",
              className: "bg-primary text-black px-10 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all uppercase italic tracking-tighter inline-flex items-center justify-center gap-2",
              children: [
                "Catálogo Completo ",
                /* @__PURE__ */ jsx(ChevronRight, {})
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/servicos",
              className: "bg-white/10 border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all uppercase italic tracking-tighter inline-flex items-center justify-center gap-2",
              children: [
                "Nossos Serviços ",
                /* @__PURE__ */ jsx(ChevronRight, {})
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PneusCuritibaHub as default
};
