import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { ChevronRight, MessageSquare, Phone, Ruler, Search } from "lucide-react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import { g as generateBreadcrumbSchema, a as generateFaqSchema } from "./schema-DUlgfpSk.js";
import { e as MEASURE_SEO, B as BASE_URL, W as WHATSAPP_NUMBER, P as PHONE_DISPLAY, b as ARO_PAGES, c as BRAND_PAGES, V as VEHICLE_PAGES } from "../main.mjs";
import "react";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
import "vite-react-ssg";
function measureToSlug(medida) {
  return medida.toLowerCase().replace(/\//g, "-");
}
function aroFromMedida(medida) {
  const match = medida.match(/R(\d{2})/i);
  return match ? Number(match[1]) : 0;
}
const HUB_FAQ = [
  {
    question: "Como sei qual a medida do pneu do meu carro?",
    answer: "A medida está gravada na lateral do pneu, no formato 195/65R15, por exemplo. Os três números indicam a largura, o perfil e o aro. Você também encontra essa informação no manual do veículo ou na etiqueta da porta do motorista. Em caso de dúvida, envie a medida pelo WhatsApp (41) 3082-7282 que confirmamos para você."
  },
  {
    question: "O que significam os números da medida do pneu?",
    answer: "No exemplo 195/65R15: 195 é a largura em milímetros, 65 é o perfil (altura proporcional à largura, em %), R indica construção radial e 15 é o diâmetro do aro em polegadas. Cada medida é indicada para determinados modelos de carro."
  },
  {
    question: "A Carplus tem todas as medidas em estoque?",
    answer: "Trabalhamos com as medidas mais procuradas do mercado, do aro 13 ao aro 20 e além, em várias marcas. A disponibilidade varia por modelo — confirme a sua medida pelo WhatsApp (41) 3082-7282 ou consulte o catálogo completo."
  },
  {
    question: "Posso trocar a medida original do meu pneu?",
    answer: "É possível em alguns casos, respeitando o diâmetro externo e a capacidade de carga recomendados pelo fabricante. Recomendamos sempre consultar nossa equipe técnica antes de mudar a medida, para garantir segurança e o correto funcionamento do velocímetro."
  }
];
function PneusMedidasHub() {
  const __seo = useSEO({
    title: "Medidas de Pneus em Curitiba | Carplus Centro Automotivo – Portão",
    description: "Encontre pneus por medida em Curitiba na Carplus, bairro Portão. Veja as medidas mais procuradas (175/65R14, 195/65R15, 205/55R16, 225/65R17 e mais), aplicações por modelo, montagem inclusa e 10x sem juros. WhatsApp: (41) 3082-7282.",
    canonical: `${BASE_URL}/medidas-de-pneus-curitiba`,
    ogImage: "/images/loja/carplus-oficina-portao-fachada-curitiba.jpg",
    schemaJSON: [
      generateBreadcrumbSchema([
        { name: "Home", url: `${BASE_URL}/` },
        { name: "Pneus Curitiba", url: `${BASE_URL}/pneus-curitiba` },
        { name: "Medidas de Pneus", url: `${BASE_URL}/medidas-de-pneus-curitiba` }
      ]),
      generateFaqSchema(HUB_FAQ),
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Medidas de pneus disponíveis em Curitiba",
        numberOfItems: MEASURE_SEO.length,
        itemListElement: MEASURE_SEO.map((m, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `Pneu ${m.medida}`,
          url: `${BASE_URL}/pneu-medida/${measureToSlug(m.medida)}`
        }))
      }
    ]
  });
  const byAro = MEASURE_SEO.reduce((acc, m) => {
    const aro = aroFromMedida(m.medida);
    (acc[aro] = acc[aro] || []).push(m);
    return acc;
  }, {});
  const aros = Object.keys(byAro).map(Number).filter((a) => a > 0).sort((a, b) => a - b);
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Olá! Quero um orçamento de pneus. A medida do meu carro é:"
  )}`;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 pt-24 md:pt-28 pb-20 md:pb-0", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 md:px-6 py-8", children: [
      /* @__PURE__ */ jsxs(
        "nav",
        {
          "aria-label": "breadcrumb",
          className: "flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2",
          children: [
            /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-black", children: "Home" }),
            /* @__PURE__ */ jsx(ChevronRight, { size: 12 }),
            /* @__PURE__ */ jsx(Link, { to: "/pneus-curitiba", className: "hover:text-black", children: "Pneus Curitiba" }),
            /* @__PURE__ */ jsx(ChevronRight, { size: 12 }),
            /* @__PURE__ */ jsx("span", { className: "text-black", children: "Medidas de Pneus" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("section", { className: "mb-14", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5", children: [
          /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-black animate-pulse" }),
          " Medidas de Pneus · Curitiba"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold uppercase tracking-tighter italic leading-none mb-5 text-balance", children: [
          "Pneus por ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Medida" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-600 font-medium leading-relaxed max-w-3xl text-pretty", children: "Saiba qual pneu é o ideal para o seu carro. Reunimos as medidas mais procuradas em Curitiba, com as aplicações por modelo e os pneus disponíveis na Carplus, no bairro Portão. Montagem, balanceamento e calibragem inclusos, com até 10x sem juros." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mt-8", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: waHref,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all shadow-2xl shadow-green-200",
              children: [
                /* @__PURE__ */ jsx(MessageSquare, { size: 22 }),
                " Enviar minha medida"
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
      /* @__PURE__ */ jsxs("section", { className: "bg-dark text-white rounded-[2.5rem] p-8 md:p-12 mb-14 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(Ruler, { size: 160 }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-3xl", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold uppercase tracking-tighter italic mb-4", children: [
            "Como ler a ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "medida do pneu" })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-white/70 leading-relaxed mb-6", children: [
            "A medida fica gravada na lateral do pneu. No exemplo ",
            /* @__PURE__ */ jsx("strong", { className: "text-white", children: "195/65R15" }),
            ":",
            /* @__PURE__ */ jsx("strong", { className: "text-white", children: " 195" }),
            " é a largura em milímetros,",
            /* @__PURE__ */ jsx("strong", { className: "text-white", children: " 65" }),
            " é o perfil (% da largura),",
            /* @__PURE__ */ jsx("strong", { className: "text-white", children: " R" }),
            " indica construção radial e",
            /* @__PURE__ */ jsx("strong", { className: "text-white", children: " 15" }),
            " é o aro em polegadas. Cada medida atende modelos específicos."
          ] }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: waHref,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 bg-primary text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all uppercase italic tracking-tighter text-sm",
              children: [
                /* @__PURE__ */ jsx(Search, { size: 16 }),
                " Não sei minha medida"
              ]
            }
          )
        ] })
      ] }),
      aros.map((aro) => {
        const aroPage = ARO_PAGES.find((a) => a.aro === aro);
        return /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 border-b-2 border-primary pb-3 mb-6 flex-wrap", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Ruler, { size: 22, className: "text-primary" }),
              /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold uppercase tracking-tighter italic", children: [
                "Medidas Aro ",
                aro
              ] })
            ] }),
            aroPage && /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/${aroPage.slug}`,
                className: "text-primary font-bold hover:underline uppercase text-xs tracking-tight inline-flex items-center gap-1",
                children: [
                  "Ver tudo do aro ",
                  aro,
                  " ",
                  /* @__PURE__ */ jsx(ChevronRight, { size: 14 })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: byAro[aro].map((m) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/pneu-medida/${measureToSlug(m.medida)}`,
              className: "group bg-white border border-gray-200 hover:border-primary rounded-2xl p-5 transition-all hover:shadow-md",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-lg font-bold tracking-tight group-hover:text-black", children: m.medida }),
                  /* @__PURE__ */ jsx(ChevronRight, { size: 18, className: "text-primary" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm leading-relaxed line-clamp-2", children: m.aplicacoes })
              ]
            },
            m.medida
          )) })
        ] }, aro);
      }),
      /* @__PURE__ */ jsx("section", { className: "mb-14", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold uppercase tracking-tighter italic mb-2", children: [
          "Busque também por ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "marca ou veículo" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm font-medium mb-8", children: "Prefere escolher pela marca do pneu ou pelo modelo do seu carro? Use os atalhos abaixo." }),
        /* @__PURE__ */ jsx("h3", { className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-3", children: "Por marca" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 mb-8", children: BRAND_PAGES.map((b) => /* @__PURE__ */ jsx(
          Link,
          {
            to: `/${b.slug}`,
            className: "bg-gray-50 border border-gray-200 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:border-primary hover:text-primary transition-all",
            children: b.marca
          },
          b.slug
        )) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xs font-bold uppercase tracking-widest text-gray-400 mb-3", children: "Por veículo" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
          VEHICLE_PAGES.slice(0, 12).map((v) => /* @__PURE__ */ jsx(
            Link,
            {
              to: `/${v.slug}`,
              className: "bg-gray-50 border border-gray-200 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:border-primary hover:text-primary transition-all",
              children: v.nome
            },
            v.slug
          )),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/pneus-curitiba",
              className: "bg-primary text-black px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:bg-yellow-400 transition-all inline-flex items-center gap-1",
              children: [
                "Central de Pneus ",
                /* @__PURE__ */ jsx(ChevronRight, { size: 14 })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-14", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold uppercase tracking-tighter italic mb-8", children: "Perguntas Frequentes" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: HUB_FAQ.map((item) => /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-100 pb-6 last:border-0 last:pb-0", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: item.question }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: item.answer })
        ] }, item.question)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-primary rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-black text-black leading-tight uppercase italic", children: "Não achou sua medida?" }),
          /* @__PURE__ */ jsx("p", { className: "text-black/70 font-medium mt-2", children: "Envie a medida do seu carro e nossa equipe confirma a disponibilidade na hora." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: waHref,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-3 uppercase tracking-tight",
              children: [
                /* @__PURE__ */ jsx(MessageSquare, { size: 20 }),
                " WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/pneus",
              className: "bg-black/10 text-black border border-black/10 px-8 py-4 rounded-full font-bold hover:bg-black/20 transition-all flex items-center justify-center gap-3 uppercase tracking-tight",
              children: [
                "Catálogo ",
                /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
              ]
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsxs("div", { className: "md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 px-3 py-3 flex gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: waHref,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-bold text-sm",
          "aria-label": "Enviar medida no WhatsApp",
          children: [
            /* @__PURE__ */ jsx(MessageSquare, { size: 18 }),
            " Enviar medida"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: `tel:+${WHATSAPP_NUMBER}`,
          className: "flex items-center justify-center gap-2 bg-black text-white px-5 py-3 rounded-full font-bold text-sm",
          "aria-label": `Ligar para ${PHONE_DISPLAY}`,
          children: [
            /* @__PURE__ */ jsx(Phone, { size: 18 }),
            " Ligar"
          ]
        }
      )
    ] })
  ] });
}
export {
  PneusMedidasHub as default
};
