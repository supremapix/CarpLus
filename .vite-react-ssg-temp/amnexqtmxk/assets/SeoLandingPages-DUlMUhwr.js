import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, MessageSquare, Phone, CreditCard, ShieldCheck, Clock, Star, Target, CircleCheck, HelpCircle, Wrench, Crosshair, Disc3, Car, Droplets, MapPin, ChevronDown } from "lucide-react";
import { B as BASE_URL, O as OG_IMAGE, W as WHATSAPP_NUMBER, P as PHONE_DISPLAY, a as ADDRESS_FULL, h as getAroPage, b as ARO_PAGES, i as getBrandPage, d as COMPARISON_PAGES, c as BRAND_PAGES, n as getVehiclePage, V as VEHICLE_PAGES, m as getLocalComboPage, o as normalizeText, L as LOCAL_COMBO_PAGES, l as getIntentPage, I as INTENT_PAGES, k as getComparisonPage } from "../main.mjs";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { T as TireCard } from "./TireCard-CTgUlHZr.js";
import { g as getGaleriaSchema, S as ServicosGaleria } from "./ServicosGaleria-n-n04Zde.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import { g as generateBreadcrumbSchema, a as generateFaqSchema } from "./schema-DUlgfpSk.js";
import NotFound from "./NotFound-VeUBkCaf.js";
import { TIRES } from "./tire-catalog-f1Gw3RQz.js";
import "vite-react-ssg";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
const RELATED_SERVICES = [
  {
    icon: Crosshair,
    title: "Alinhamento 3D",
    description: "Alinhamento computadorizado que evita desgaste irregular dos pneus novos.",
    to: "/servico/alinhamento-e-balanceamento"
  },
  {
    icon: Disc3,
    title: "Balanceamento",
    description: "Balanceamento de precisão que elimina vibrações no volante e na carroceria.",
    to: "/servico/alinhamento-e-balanceamento"
  },
  {
    icon: Car,
    title: "Suspensão",
    description: "Revisão de amortecedores, molas e batentes para mais segurança e conforto.",
    to: "/servico/revisao-de-suspensao"
  },
  {
    icon: Droplets,
    title: "Troca de Óleo",
    description: "Troca de óleo e filtros com produtos de qualidade no mesmo dia.",
    to: "/servico/troca-de-oleo"
  }
];
function getRelatedServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Serviços relacionados — Carplus Centro Automotivo",
    itemListElement: RELATED_SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        url: `${BASE_URL}${s.to}`,
        serviceType: s.title,
        areaServed: { "@type": "City", name: "Curitiba" },
        provider: {
          "@type": "AutoRepair",
          name: "Carplus Centro Automotivo",
          telephone: "+55-41-3082-7282"
        }
      }
    }))
  };
}
function FaqAccordion({ faq }) {
  const [openIndex, setOpenIndex] = useState(0);
  return /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faq.map((item, index) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: `border-2 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? "border-primary bg-primary/5" : "border-gray-100 hover:border-gray-200"}`,
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpenIndex(openIndex === index ? null : index),
            className: "w-full flex items-start justify-between p-5 md:p-6 text-left group",
            "aria-expanded": openIndex === index,
            children: [
              /* @__PURE__ */ jsx(
                "h3",
                {
                  className: `font-bold text-base md:text-lg pr-4 transition-colors flex-1 ${openIndex === index ? "text-black" : "text-gray-700 group-hover:text-black"}`,
                  children: item.question
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { rotate: openIndex === index ? 180 : 0 },
                  transition: { duration: 0.2 },
                  className: `flex-shrink-0 self-start p-2 rounded-xl transition-colors ${openIndex === index ? "bg-primary text-black" : "bg-gray-100 text-gray-500 group-hover:bg-gray-200"}`,
                  children: /* @__PURE__ */ jsx(ChevronDown, { size: 20 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(AnimatePresence, { children: openIndex === index && /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3, ease: "easeInOut" },
            children: /* @__PURE__ */ jsx("div", { className: "px-5 md:px-6 pb-5 md:pb-6", children: /* @__PURE__ */ jsx("div", { className: "pt-2 border-t border-primary/20", children: /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed pt-4", children: item.answer }) }) })
          }
        ) })
      ]
    },
    index
  )) });
}
function SeoTireLanding({
  badge,
  h1,
  highlight,
  metaTitle,
  metaDescription,
  canonicalPath,
  intro,
  tags = [],
  sections,
  tires,
  faq,
  breadcrumb,
  relatedLinksTitle = "Explore também",
  relatedLinks,
  whatsappMsg,
  galleryLocal
}) {
  const displayTires = tires.slice(0, 12);
  const brands = [...new Set(tires.filter((t) => t && t.marca).map((t) => t.marca))];
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: h1,
    description: metaDescription,
    numberOfItems: tires.length,
    itemListElement: displayTires.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: t.nome,
        image: t.imagemGrande || t.imagem,
        brand: { "@type": "Brand", name: t.marca },
        url: `${BASE_URL}/pneu/${t.slug}`
      }
    }))
  };
  const __seo = useSEO({
    title: metaTitle,
    description: metaDescription,
    canonical: `${BASE_URL}${canonicalPath}`,
    ogImage: OG_IMAGE,
    ogType: "website",
    schemaJSON: [
      itemListSchema,
      generateBreadcrumbSchema(breadcrumb.map((b) => ({ name: b.name, url: `${BASE_URL}${b.path}` }))),
      generateFaqSchema(faq),
      getRelatedServicesSchema(),
      ...galleryLocal ? [getGaleriaSchema(galleryLocal)] : []
    ]
  });
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;
  let h1Before = h1;
  let h1Highlight = "";
  let h1After = "";
  if (highlight && h1.includes(highlight)) {
    const idx = h1.indexOf(highlight);
    h1Before = h1.slice(0, idx);
    h1Highlight = highlight;
    h1After = h1.slice(idx + highlight.length);
  }
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 pt-24 md:pt-28 pb-20 md:pb-0", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 md:px-6 py-8", children: [
      /* @__PURE__ */ jsx(
        "nav",
        {
          "aria-label": "breadcrumb",
          className: "flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2",
          children: breadcrumb.map((b, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
            i > 0 && /* @__PURE__ */ jsx(ChevronRight, { size: 12 }),
            i < breadcrumb.length - 1 ? /* @__PURE__ */ jsx(Link, { to: b.path, className: "hover:text-black", children: b.name }) : /* @__PURE__ */ jsx("span", { className: "text-black", children: b.name })
          ] }, b.path))
        }
      ),
      /* @__PURE__ */ jsxs("section", { className: "relative mb-12 overflow-hidden rounded-[2rem] bg-dark text-white", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: "/images/hero/pneu-prinx-hicity-curitiba.webp",
              width: 1200,
              height: 801,
              className: "w-full h-full object-cover",
              alt: `${h1} - Carplus Pneus e Centro Automotivo em Curitiba`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/50" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-7 md:p-12", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 bg-primary text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-5", children: [
            /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-black animate-pulse" }),
            badge
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-bold uppercase tracking-tighter italic leading-none mb-5 text-balance [text-shadow:_0_2px_12px_rgb(0_0_0_/_55%)]", children: highlight ? /* @__PURE__ */ jsxs(Fragment, { children: [
            h1Before,
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: h1Highlight }),
            h1After
          ] }) : h1 }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-3xl text-pretty [text-shadow:_0_1px_8px_rgb(0_0_0_/_50%)]", children: intro }),
          tags.length > 0 && /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mt-6", children: tags.map((tag) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-tight",
              children: tag
            },
            tag
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mt-8", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: waHref,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-base hover:bg-green-600 transition-all shadow-2xl shadow-green-900/40",
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
                className: "flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all",
                children: [
                  /* @__PURE__ */ jsx(Phone, { size: 20 }),
                  " ",
                  PHONE_DISPLAY
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-14", children: [
        { icon: CreditCard, title: "10x sem juros", sub: "Nos pneus" },
        { icon: ShieldCheck, title: "Garantia total", sub: "Nota fiscal" },
        { icon: Clock, title: "Montagem rápida", sub: "No mesmo dia" },
        { icon: Star, title: "4,9 no Google", sub: "+300 avaliações" }
      ].map((b) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 text-primary p-2.5 rounded-xl", children: /* @__PURE__ */ jsx(b.icon, { size: 22 }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold text-sm leading-tight", children: b.title }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-[11px] uppercase font-bold tracking-widest", children: b.sub })
        ] })
      ] }, b.title)) }),
      /* @__PURE__ */ jsx("section", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-16", children: sections.map((s) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold uppercase tracking-tighter italic mb-4", children: s.title }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: s.content })
      ] }, s.title)) }),
      displayTires.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between mb-8 flex-wrap gap-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold uppercase tracking-tighter italic", children: [
              "Modelos ",
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "disponíveis" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-500 font-medium mt-1", children: [
              tires.length,
              " ",
              tires.length === 1 ? "opção encontrada" : "opções encontradas",
              " no nosso catálogo",
              brands.length > 0 && ` · ${brands.slice(0, 5).join(", ")}`
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/pneus",
              className: "hidden md:flex items-center gap-2 text-primary font-bold hover:underline uppercase text-sm tracking-tight",
              children: [
                "Ver catálogo completo ",
                /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5", children: displayTires.map((tire, index) => /* @__PURE__ */ jsx(TireCard, { tire, index }, tire.id)) }),
        tires.length > displayTires.length && /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/pneus",
            className: "inline-flex items-center gap-3 bg-dark text-white px-10 py-3.5 rounded-full font-bold hover:bg-black transition-all uppercase italic tracking-tighter",
            children: [
              "Ver todos os ",
              tires.length,
              " modelos ",
              /* @__PURE__ */ jsx(ChevronRight, {})
            ]
          }
        ) })
      ] }),
      galleryLocal && /* @__PURE__ */ jsx("section", { className: "mb-16 -mx-4 md:-mx-6", children: /* @__PURE__ */ jsx(ServicosGaleria, { local: galleryLocal, variant: "light" }) }),
      /* @__PURE__ */ jsxs("section", { className: "bg-dark text-white rounded-[2.5rem] p-8 md:p-12 mb-16 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(Target, { size: 160 }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 max-w-3xl", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold uppercase tracking-tighter italic mb-4", children: [
            "Pneu novo pede ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: "alinhamento e balanceamento" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/70 leading-relaxed mb-8", children: "Toda troca de pneus na Carplus pode ser combinada com alinhamento 3D computadorizado e balanceamento de precisão. Essa combinação evita o desgaste irregular, reduz o consumo de combustível, elimina vibrações no volante e prolonga a vida útil do conjunto. Aproveite e faça tudo no mesmo lugar, no bairro Portão." }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: [
            { label: "Alinhamento 3D", to: "/servico/alinhamento-e-balanceamento" },
            { label: "Balanceamento", to: "/servico/alinhamento-e-balanceamento" },
            { label: "Montagem de Pneu", to: "/servico/montagem-de-pneu" },
            { label: "Rodízio de Pneus", to: "/servico/rodizio-de-pneus" },
            { label: "Cambagem e Caster", to: "/servico/cambagem-e-caster" }
          ].map((s) => /* @__PURE__ */ jsxs(
            Link,
            {
              to: s.to,
              className: "bg-white/5 border border-white/15 hover:bg-primary hover:text-black hover:border-primary px-5 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(CircleCheck, { size: 15 }),
                " ",
                s.label
              ]
            },
            s.label
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-10", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary p-3 rounded-2xl", children: /* @__PURE__ */ jsx(HelpCircle, { className: "text-black", size: 28 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold uppercase tracking-tighter italic", children: "Perguntas Frequentes" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm font-medium", children: "Tudo o que você precisa saber antes de comprar" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(FaqAccordion, { faq })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-dark p-3 rounded-2xl", children: /* @__PURE__ */ jsx(Wrench, { className: "text-primary", size: 28 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold uppercase tracking-tighter italic", children: "Serviços Relacionados" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm font-medium", children: "Tudo o que seu carro precisa, no mesmo lugar — no Portão, em Curitiba" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5", children: RELATED_SERVICES.map((s) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: s.to,
            className: "group bg-white rounded-[2rem] p-7 shadow-sm border border-gray-100 hover:border-primary hover:shadow-xl transition-all flex flex-col",
            children: [
              /* @__PURE__ */ jsx("div", { className: "bg-primary/10 text-primary p-3 rounded-2xl w-fit mb-5 group-hover:bg-primary group-hover:text-black transition-colors", children: /* @__PURE__ */ jsx(s.icon, { size: 26 }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold uppercase tracking-tight italic mb-2", children: s.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm leading-relaxed flex-1", children: s.description }),
              /* @__PURE__ */ jsxs("span", { className: "mt-5 inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-tight", children: [
                "Saiba mais ",
                /* @__PURE__ */ jsx(ChevronRight, { size: 16, className: "group-hover:translate-x-1 transition-transform" })
              ] })
            ]
          },
          s.title
        )) })
      ] }),
      relatedLinks.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold uppercase tracking-tighter italic mb-6", children: relatedLinksTitle }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: relatedLinks.map((link) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: link.to,
            className: "bg-white border border-gray-200 hover:border-primary hover:bg-primary/5 px-5 py-2.5 rounded-full text-sm font-bold text-gray-700 hover:text-black transition-all flex items-center gap-2",
            children: [
              /* @__PURE__ */ jsx(ChevronRight, { size: 14, className: "text-primary" }),
              " ",
              link.label
            ]
          },
          link.to
        )) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-primary rounded-[2.5rem] p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 mb-8", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-black/70 font-bold uppercase tracking-widest text-xs mb-3", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16 }),
            " ",
            ADDRESS_FULL
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-black text-black leading-tight uppercase italic", children: "Peça seu orçamento agora" }),
          /* @__PURE__ */ jsx("p", { className: "text-black/70 font-medium mt-2", children: "Atendimento rápido, preço justo e montagem inclusa." })
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
            "a",
            {
              href: `tel:+${WHATSAPP_NUMBER}`,
              className: "bg-black/10 text-black border border-black/10 px-8 py-4 rounded-full font-bold hover:bg-black/20 transition-all flex items-center justify-center gap-3 uppercase tracking-tight",
              children: [
                /* @__PURE__ */ jsx(Phone, { size: 20 }),
                " Ligar"
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
          "aria-label": "Pedir orçamento no WhatsApp",
          children: [
            /* @__PURE__ */ jsx(MessageSquare, { size: 18 }),
            " Orçamento"
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
function getTiresByAro(aro) {
  return TIRES.filter((t) => t && t.aro === aro);
}
function getTiresByBrand(marca) {
  const target = marca.toLowerCase();
  return TIRES.filter((t) => t && t.marca && t.marca.toLowerCase() === target);
}
function getTiresByVehicle(termos) {
  const targets = termos.map((t) => t.toLowerCase());
  return TIRES.filter(
    (t) => t && Array.isArray(t.carros) && t.carros.some(
      (carro) => targets.some((target) => carro.toLowerCase().includes(target))
    )
  );
}
function getMeasuresForTires(tires) {
  return [...new Set(tires.filter((t) => t && t.medida).map((t) => t.medida))].sort();
}
function getFeaturedTires(limit = 12) {
  const featured = [];
  const seen = /* @__PURE__ */ new Set();
  for (const aro of [14, 15, 16, 17, 18, 13]) {
    for (const tire of getTiresByAro(aro)) {
      if (tire && !seen.has(tire.id)) {
        seen.add(tire.id);
        featured.push(tire);
      }
      if (featured.length >= limit) return featured;
    }
  }
  return featured;
}
const HOME_CRUMB = { name: "Home", path: "/" };
const HUB_CRUMB = { name: "Pneus Curitiba", path: "/pneus-curitiba" };
function measureToSlug(medida) {
  return medida.toLowerCase().replace(/\//g, "-");
}
function AroLandingPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug || "";
  const page = getAroPage(slug);
  if (!page) return /* @__PURE__ */ jsx(NotFound, {});
  const tires = getTiresByAro(page.aro);
  const measures = getMeasuresForTires(tires).slice(0, 8);
  const relatedLinks = [
    ...ARO_PAGES.filter((a) => a.aro !== page.aro).map((a) => ({
      label: `Aro ${a.aro}`,
      to: `/${a.slug}`
    })),
    ...measures.map((m) => ({ label: `Pneu ${m}`, to: `/pneu-medida/${measureToSlug(m)}` }))
  ];
  return /* @__PURE__ */ jsx(
    SeoTireLanding,
    {
      badge: `Aro ${page.aro} · Curitiba`,
      h1: page.h1,
      highlight: `Aro ${page.aro}`,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      canonicalPath: `/${page.slug}`,
      intro: page.intro,
      tags: page.perfilTipico,
      sections: [
        { title: "Aplicações do Aro " + page.aro, content: page.aplicacoes },
        ...page.secoesConteudo ?? [],
        {
          title: "Por que comprar na Carplus",
          content: "Somos loja de pneus e oficina mecânica no bairro Portão, em Curitiba. Trabalhamos apenas com marcas reconhecidas, oferecemos montagem, balanceamento e calibragem inclusos, parcelamento em até 10x sem juros e garantia com nota fiscal em todos os serviços."
        }
      ],
      tires,
      faq: page.faq,
      breadcrumb: [HOME_CRUMB, HUB_CRUMB, { name: `Aro ${page.aro}`, path: `/${page.slug}` }],
      relatedLinksTitle: "Pneus por aro e medida",
      relatedLinks,
      whatsappMsg: `Olá! Vi a página de pneu aro ${page.aro} em Curitiba e gostaria de um orçamento.`,
      galleryLocal: "Curitiba"
    }
  );
}
function BrandLandingPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug || "";
  const page = getBrandPage(slug);
  if (!page) return /* @__PURE__ */ jsx(NotFound, {});
  const tires = getTiresByBrand(page.marca);
  const brandComparisons = COMPARISON_PAGES.filter((c) => c.brands.includes(page.marca)).map(
    (c) => ({ label: c.h1, to: `/${c.slug}` })
  );
  const relatedLinks = [
    ...brandComparisons,
    ...BRAND_PAGES.filter((b) => b.marca !== page.marca).map((b) => ({
      label: `Pneu ${b.marca}`,
      to: `/${b.slug}`
    })),
    ...ARO_PAGES.slice(0, 6).map((a) => ({ label: `Aro ${a.aro}`, to: `/${a.slug}` }))
  ];
  return /* @__PURE__ */ jsx(
    SeoTireLanding,
    {
      badge: `${page.marca} · Curitiba`,
      h1: page.h1,
      highlight: page.marca,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      canonicalPath: `/${page.slug}`,
      intro: page.intro,
      sections: [
        { title: `Linhas ${page.marca} disponíveis`, content: page.linhas },
        ...page.secoesConteudo ?? [],
        {
          title: "Instalação completa inclusa",
          content: "Na compra dos pneus " + page.marca + ", a montagem, o balanceamento e a calibragem já estão inclusos. O alinhamento 3D é feito na própria Carplus, no Portão, e o pagamento pode ser parcelado em até 10x sem juros."
        }
      ],
      tires,
      faq: page.faq,
      breadcrumb: [HOME_CRUMB, HUB_CRUMB, { name: page.marca, path: `/${page.slug}` }],
      relatedLinksTitle: "Outras marcas e aros",
      relatedLinks,
      whatsappMsg: `Olá! Vi a página de pneu ${page.marca} em Curitiba e gostaria de um orçamento.`,
      galleryLocal: "Curitiba"
    }
  );
}
function VehicleLandingPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug || "";
  const page = getVehiclePage(slug);
  if (!page) return /* @__PURE__ */ jsx(NotFound, {});
  const tires = getTiresByVehicle(page.termos);
  const measures = getMeasuresForTires(tires).slice(0, 8);
  const relatedLinks = [
    ...VEHICLE_PAGES.filter((v) => v.slug !== page.slug).slice(0, 8).map((v) => ({ label: v.nome, to: `/${v.slug}` })),
    ...measures.map((m) => ({ label: `Pneu ${m}`, to: `/pneu-medida/${measureToSlug(m)}` }))
  ];
  return /* @__PURE__ */ jsx(
    SeoTireLanding,
    {
      badge: `${page.nome} · Curitiba`,
      h1: page.h1,
      highlight: page.nome.split(" ").slice(-1)[0],
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      canonicalPath: `/${page.slug}`,
      intro: page.intro,
      sections: [
        ...page.pneuOriginal ? [{ title: `Pneu original do ${page.nome}`, content: page.pneuOriginal }] : [],
        { title: `Medidas comuns do ${page.nome}`, content: page.medidasComuns },
        {
          title: "Troca completa no Portão",
          content: "Trocamos os pneus do seu " + page.nome + " com montagem, balanceamento e calibragem inclusos. Recomendamos o alinhamento 3D a cada troca para garantir estabilidade, segurança e maior durabilidade. Parcelamos em até 10x sem juros."
        }
      ],
      tires,
      faq: page.faq,
      breadcrumb: [HOME_CRUMB, HUB_CRUMB, { name: page.nome, path: `/${page.slug}` }],
      relatedLinksTitle: "Pneus para outros veículos",
      relatedLinks,
      whatsappMsg: `Olá! Tenho um ${page.nome} e gostaria de um orçamento de pneus.`,
      galleryLocal: "Curitiba"
    }
  );
}
function IntentLandingPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug || "";
  const page = getIntentPage(slug);
  if (!page) return /* @__PURE__ */ jsx(NotFound, {});
  const tires = getFeaturedTires(12);
  const serviceLinks = [
    { label: "Catálogo de Pneus", to: "/pneus" },
    { label: "Pneus Curitiba", to: "/pneus-curitiba" },
    { label: "Alinhamento e Balanceamento", to: "/servico/alinhamento-e-balanceamento" },
    { label: "Troca de Óleo", to: "/servico/troca-de-oleo" },
    { label: "Revisão de Suspensão", to: "/servico/revisao-de-suspensao" },
    { label: "Manutenção de Freios", to: "/servico/manutencao-de-freios" },
    { label: "Contato", to: "/contato" }
  ];
  const clusterLinks = INTENT_PAGES.filter((p) => p.slug !== page.slug).map((p) => ({
    label: p.h1,
    to: `/${p.slug}`
  }));
  const aroLinks = ARO_PAGES.slice(0, 5).map((a) => ({ label: `Aro ${a.aro}`, to: `/${a.slug}` }));
  const relatedLinks = [...serviceLinks, ...clusterLinks, ...aroLinks];
  return /* @__PURE__ */ jsx(
    SeoTireLanding,
    {
      badge: page.badge,
      h1: page.h1,
      highlight: page.highlight,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      canonicalPath: `/${page.slug}`,
      intro: page.intro,
      tags: page.tags,
      sections: page.sections,
      tires,
      faq: page.faq,
      breadcrumb: [HOME_CRUMB, HUB_CRUMB, { name: page.h1, path: `/${page.slug}` }],
      relatedLinksTitle: "Serviços e páginas relacionadas",
      relatedLinks,
      whatsappMsg: page.whatsappMsg,
      galleryLocal: "Curitiba"
    }
  );
}
function ComparisonLandingPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug || "";
  const page = getComparisonPage(slug);
  if (!page) return /* @__PURE__ */ jsx(NotFound, {});
  const perBrand = page.brands.map((b) => getTiresByBrand(b));
  const merged = [];
  const maxLen = Math.max(0, ...perBrand.map((arr) => arr.length));
  for (let i = 0; i < maxLen; i++) {
    for (const arr of perBrand) {
      if (arr[i]) merged.push(arr[i]);
    }
  }
  const brandLinks = page.brands.map((b) => BRAND_PAGES.find((bp) => bp.marca === b)).filter((bp) => Boolean(bp)).map((bp) => ({ label: `Pneu ${bp.marca}`, to: `/${bp.slug}` }));
  const otherComparisons = COMPARISON_PAGES.filter((p) => p.slug !== page.slug).slice(0, 8).map((p) => ({ label: p.h1, to: `/${p.slug}` }));
  const relatedLinks = [
    ...brandLinks,
    { label: "Todas as marcas", to: "/pneus-curitiba" },
    { label: "Catálogo de Pneus", to: "/pneus" },
    ...otherComparisons
  ];
  return /* @__PURE__ */ jsx(
    SeoTireLanding,
    {
      badge: page.badge,
      h1: page.h1,
      highlight: page.highlight,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      canonicalPath: `/${page.slug}`,
      intro: page.intro,
      tags: page.tags,
      sections: page.sections,
      tires: merged,
      faq: page.faq,
      breadcrumb: [HOME_CRUMB, HUB_CRUMB, { name: page.h1, path: `/${page.slug}` }],
      relatedLinksTitle: "Marcas e comparativos relacionados",
      relatedLinks,
      whatsappMsg: page.whatsappMsg,
      galleryLocal: "Curitiba"
    }
  );
}
function LocalComboLandingPage({ slug: slugProp }) {
  const params = useParams();
  const slug = slugProp || params.slug || "";
  const page = getLocalComboPage(slug);
  if (!page) return /* @__PURE__ */ jsx(NotFound, {});
  let tires = [];
  if (page.tipo === "aro" && page.aro) tires = getTiresByAro(page.aro);
  else if (page.tipo === "marca" && page.marca) tires = getTiresByBrand(page.marca);
  else tires = getTiresByAro(15).concat(getTiresByAro(16)).slice(0, 12);
  const bairroSlug = normalizeText(page.bairro);
  const relatedLinks = [
    { label: `Bairro ${page.bairro}`, to: `/bairro/${bairroSlug}` },
    ...LOCAL_COMBO_PAGES.filter((p) => p.slug !== page.slug).map((p) => ({
      label: p.h1,
      to: `/${p.slug}`
    })),
    ...ARO_PAGES.slice(0, 4).map((a) => ({ label: `Aro ${a.aro}`, to: `/${a.slug}` }))
  ];
  const sectionTitle = page.tipo === "loja" ? "Loja e oficina no Portão" : page.tipo === "marca" ? `Pneu ${page.marca} perto de você` : `Pneu aro ${page.aro} perto de você`;
  return /* @__PURE__ */ jsx(
    SeoTireLanding,
    {
      badge: `${page.bairro} · Curitiba`,
      h1: page.h1,
      highlight: page.bairro,
      metaTitle: page.metaTitle,
      metaDescription: page.metaDescription,
      canonicalPath: `/${page.slug}`,
      intro: page.intro,
      sections: [
        { title: sectionTitle, content: page.intro },
        {
          title: "Tudo no mesmo lugar",
          content: "Além dos pneus, a Carplus é uma oficina mecânica completa: alinhamento 3D, balanceamento, freios, suspensão, troca de óleo e muito mais. Montagem inclusa, garantia com nota fiscal e parcelamento em até 10x sem juros."
        }
      ],
      tires,
      faq: page.faq,
      breadcrumb: [HOME_CRUMB, HUB_CRUMB, { name: page.bairro, path: `/${page.slug}` }],
      relatedLinksTitle: "Veja também",
      relatedLinks,
      whatsappMsg: `Olá! Vi a página "${page.h1}" e gostaria de um orçamento.`,
      galleryLocal: page.bairro
    }
  );
}
export {
  AroLandingPage,
  BrandLandingPage,
  ComparisonLandingPage,
  IntentLandingPage,
  LocalComboLandingPage,
  VehicleLandingPage
};
