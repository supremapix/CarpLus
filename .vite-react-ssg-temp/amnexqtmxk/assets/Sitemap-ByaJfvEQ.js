import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { SERVICES, NEIGHBORHOODS, POPULAR_REGIONS, CITIES, TIRES } from "./tire-catalog-f1Gw3RQz.js";
import { b as ARO_PAGES, c as BRAND_PAGES, V as VEHICLE_PAGES, L as LOCAL_COMBO_PAGES, C as CENTRO_AUTOMOTIVO_PAGES } from "../main.mjs";
import { Link } from "react-router-dom";
import { Globe, Wrench, Circle, ChevronRight, MapPin, Tag, Car, Navigation } from "lucide-react";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import "react";
import "./services-SlP8WPLZ.js";
import "vite-react-ssg";
import "react-helmet-async";
const TIRE_BRANDS = [...new Set(TIRES.filter((t) => t && t.marca).map((t) => t.marca))].sort();
TIRE_BRANDS.flatMap(
  (brand) => TIRES.filter((t) => t && t.marca === brand).slice(0, 30)
);
function Sitemap() {
  const __seo = useSEO({
    title: "Mapa do Site | Carplus Centro Automotivo - Pneus e Servicos em Curitiba",
    description: "Navegue por todas as paginas do site Carplus Centro Automotivo. Encontre pneus por marca, servicos automotivos, bairros atendidos em Curitiba e regiao metropolitana.",
    canonical: "https://www.carpluspneuseoficina.com.br/sitemap",
    schemaJSON: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mapa do Site - Carplus Centro Automotivo",
      "description": "Indice completo de todas as paginas do site Carplus Centro Automotivo",
      "url": "https://www.carpluspneuseoficina.com.br/sitemap",
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": TIRES.length + SERVICES.length + NEIGHBORHOODS.length,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Catalogo de Pneus", "url": "https://www.carpluspneuseoficina.com.br/pneus" },
          { "@type": "ListItem", "position": 2, "name": "Servicos", "url": "https://www.carpluspneuseoficina.com.br/servicos" },
          { "@type": "ListItem", "position": 3, "name": "Bairros Atendidos", "url": "https://www.carpluspneuseoficina.com.br/bairros" }
        ]
      }
    }
  });
  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-32 md:pt-36 pb-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsxs("h1", { className: "text-6xl mb-4 italic uppercase tracking-tighter", children: [
          "Sitemap ",
          /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Carplus" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-500", children: "Mapa completo de navegação do site e regiões atendidas." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2", children: [
            /* @__PURE__ */ jsx(Globe, { size: 24, className: "text-primary" }),
            " Institucional"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 font-medium text-gray-600", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-primary transition-colors", children: "Pagina Inicial" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/quem-somos", className: "hover:text-primary transition-colors", children: "Quem Somos" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/contato", className: "hover:text-primary transition-colors", children: "Contato" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/faq", className: "hover:text-primary transition-colors", children: "Perguntas Frequentes (FAQ)" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/politica-de-privacidade", className: "hover:text-primary transition-colors", children: "Politica de Privacidade" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/trocas-e-devolucoes", className: "hover:text-primary transition-colors", children: "Trocas e Devolucoes" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2", children: [
            /* @__PURE__ */ jsx(Wrench, { size: 24, className: "text-primary" }),
            " Nossos Servicos"
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 font-medium text-gray-600", children: SERVICES.map((s) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: `/servico/${s.slug}`, className: "hover:text-primary transition-colors", children: s.title }) }, s.slug)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2", children: [
            /* @__PURE__ */ jsx(Circle, { size: 24, className: "text-primary" }),
            " Pneus por Marca"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3 font-medium text-gray-600", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/pneus", className: "hover:text-primary transition-colors font-bold", children: "Ver Todos os Pneus" }) }),
            TIRE_BRANDS.map((brand) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/pneus?marca=${brand.toLowerCase()}`,
                className: "hover:text-primary transition-colors flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsx(ChevronRight, { size: 12, className: "text-primary" }),
                  "Pneus ",
                  brand
                ]
              }
            ) }, brand))
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 24, className: "text-primary" }),
            " Bairros Atendidos"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-y-2 text-sm text-gray-500 max-h-[400px] overflow-y-auto pr-2", children: [
            NEIGHBORHOODS.slice(0, 20).map((n) => /* @__PURE__ */ jsx(Link, { to: `/bairro/${n.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`, className: "hover:text-primary truncate", children: n.name }, n.name)),
            /* @__PURE__ */ jsx(Link, { to: "/bairros", className: "text-primary font-bold mt-2", children: "Ver todos os bairros..." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-12 border-t border-gray-100", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2 mb-8", children: [
          /* @__PURE__ */ jsx(Circle, { size: 24, className: "text-primary" }),
          " Paginas de Pneus por Categoria"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Circle, { size: 18, className: "text-primary" }),
              " Pneus por Aro"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-gray-600", children: ARO_PAGES.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: `/${p.slug}`, className: "hover:text-primary transition-colors flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(ChevronRight, { size: 12, className: "text-primary" }),
              " Pneu Aro ",
              p.aro
            ] }) }, p.slug)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Tag, { size: 18, className: "text-primary" }),
              " Pneus por Marca"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-gray-600", children: BRAND_PAGES.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: `/${p.slug}`, className: "hover:text-primary transition-colors flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(ChevronRight, { size: 12, className: "text-primary" }),
              " Pneu ",
              p.marca
            ] }) }, p.slug)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Car, { size: 18, className: "text-primary" }),
              " Pneus por Veiculo"
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm text-gray-600", children: VEHICLE_PAGES.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: `/${p.slug}`, className: "hover:text-primary transition-colors flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(ChevronRight, { size: 12, className: "text-primary" }),
              " Pneu ",
              p.nome
            ] }) }, p.slug)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Navigation, { size: 18, className: "text-primary" }),
              " Paginas Locais"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-gray-600", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: "/pneus-curitiba", className: "hover:text-primary transition-colors flex items-center gap-1 font-bold", children: [
                /* @__PURE__ */ jsx(ChevronRight, { size: 12, className: "text-primary" }),
                " Pneus em Curitiba (Hub)"
              ] }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: "/loja-de-pneus-curitiba-perto-de-mim", className: "hover:text-primary transition-colors flex items-center gap-1 font-bold", children: [
                /* @__PURE__ */ jsx(ChevronRight, { size: 12, className: "text-primary" }),
                " Loja de Pneus Perto de Mim"
              ] }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: "/centro-automotivo-portao", className: "hover:text-primary transition-colors flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(ChevronRight, { size: 12, className: "text-primary" }),
                " Centro Automotivo Portao"
              ] }) }),
              LOCAL_COMBO_PAGES.map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: `/${p.slug}`, className: "hover:text-primary transition-colors flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(ChevronRight, { size: 12, className: "text-primary" }),
                " ",
                p.h1
              ] }) }, p.slug))
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-12 border-t border-gray-100", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2 mb-8", children: [
          /* @__PURE__ */ jsx(Wrench, { size: 24, className: "text-primary" }),
          " Centro Automotivo e Oficina"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3 text-sm text-gray-600", children: CENTRO_AUTOMOTIVO_PAGES.map((p) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/${p.slug}`,
            className: "hover:text-primary transition-colors flex items-center gap-1",
            children: [
              /* @__PURE__ */ jsx(ChevronRight, { size: 12, className: "text-primary shrink-0" }),
              " ",
              p.breadcrumbName
            ]
          },
          p.slug
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-12 border-t border-gray-100", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2 mb-8", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 24, className: "text-primary" }),
          " Todos os Bairros e Regioes Atendidas"
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold uppercase tracking-widest text-gray-400 mb-4", children: "Bairros de Curitiba" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-sm text-gray-500 mb-8", children: NEIGHBORHOODS.map((n) => /* @__PURE__ */ jsx(Link, { to: `/bairro/${n.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`, className: "hover:text-primary truncate", children: n.name }, n.name)) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold uppercase tracking-widest text-gray-400 mb-4", children: "Regioes Populares e Vilas" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-sm text-gray-500 mb-8", children: POPULAR_REGIONS.map((r) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/bairro/${r.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`,
            className: "flex items-center gap-1 hover:text-primary transition-colors",
            children: [
              /* @__PURE__ */ jsx(ChevronRight, { size: 10, className: "text-primary" }),
              " ",
              r.name
            ]
          },
          `${r.name}-${r.via}`
        )) }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold uppercase tracking-widest text-gray-400 mb-4", children: "Regiao Metropolitana (RMC)" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-2 text-sm", children: CITIES.map((c) => /* @__PURE__ */ jsx(
          Link,
          {
            to: `/bairro/${c.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`,
            className: "font-bold text-gray-700 hover:text-primary transition-colors",
            children: c.name
          },
          c.name
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 pt-12 border-t border-gray-100", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold uppercase tracking-tight flex items-center gap-2 border-b-2 border-primary pb-2 mb-8", children: [
          /* @__PURE__ */ jsx(Circle, { size: 24, className: "text-primary" }),
          " Catalogo Completo de Pneus (",
          TIRES.length,
          " produtos)"
        ] }),
        TIRE_BRANDS.map((brand) => {
          const brandTires = TIRES.filter((t) => t && t.marca === brand);
          return /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold uppercase tracking-widest text-gray-400 mb-4", children: [
              "Pneus ",
              brand,
              " (",
              brandTires.length,
              " modelos)"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-1 text-xs text-gray-500 max-h-[300px] overflow-y-auto", children: brandTires.map((tire) => /* @__PURE__ */ jsx(
              Link,
              {
                to: `/pneu/${tire.slug}`,
                className: "hover:text-primary truncate",
                title: tire.nome,
                children: tire.nome
              },
              tire.slug
            )) })
          ] }, brand);
        })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Sitemap as default
};
