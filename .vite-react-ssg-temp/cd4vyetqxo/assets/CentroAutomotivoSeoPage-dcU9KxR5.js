import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ChevronRight, Award, MessageCircle, MapPin, Phone, Clock, Info, Truck, Gauge, BadgeCheck, Star, Shield, Wrench, Users, ChevronDown } from "lucide-react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { a as generateFaqSchema, g as generateBreadcrumbSchema } from "./schema-DUlgfpSk.js";
import { j as getCentroAutomotivoPage, g as WHATSAPP_NUMBER, f as PHONE_DISPLAY, A as ADDRESS_FULL, M as MAPS_EMBED } from "../main.mjs";
import "./services-SlP8WPLZ.js";
import "vite-react-ssg";
const BASE_URL = "https://www.carpluspneuseoficina.com.br";
const ICONS = {
  clock: Clock,
  users: Users,
  wrench: Wrench,
  shield: Shield,
  award: Award,
  mapPin: MapPin,
  star: Star,
  badgeCheck: BadgeCheck,
  gauge: Gauge,
  truck: Truck
};
function CentroAutomotivoSeoPage({ slug }) {
  const page = getCentroAutomotivoPage(slug);
  const [faqAberto, setFaqAberto] = useState(0);
  if (!page) return null;
  const canonical = `${BASE_URL}/${page.slug}`;
  const ogImageFull = `${BASE_URL}${page.heroImage}`;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(page.whatsappMessage)}`;
  const isPertoDeMim = page.slug === "centro-automotivo-perto-de-mim";
  const schemaFaq = generateFaqSchema(page.faq);
  const schemaBreadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: `${BASE_URL}/` },
    { name: page.breadcrumbName, url: canonical }
  ]);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-neutral-950", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: page.metaTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: page.metaDescription }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: page.keywords.join(", ") }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" }),
      /* @__PURE__ */ jsx("meta", { name: "geo.region", content: "BR-PR" }),
      /* @__PURE__ */ jsx("meta", { name: "geo.placename", content: "Curitiba" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: page.metaTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: page.metaDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "business.business" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: canonical }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: ogImageFull }),
      /* @__PURE__ */ jsx("meta", { property: "og:site_name", content: "Carplus Pneus e Oficina" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "pt_BR" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: page.metaTitle }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: page.metaDescription }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: ogImageFull }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaFaq) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaBreadcrumb) })
    ] }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[68vh] flex items-center overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: page.heroImage,
            alt: page.heroImageAlt,
            width: 1200,
            height: 801,
            className: "w-full h-full object-cover",
            loading: "eager"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4 py-20", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7 },
          className: "max-w-3xl",
          children: [
            /* @__PURE__ */ jsxs("nav", { "aria-label": "Breadcrumb", className: "flex items-center gap-2 text-sm text-neutral-400 mb-6", children: [
              /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-amber-500 transition-colors", children: "Home" }),
              /* @__PURE__ */ jsx(ChevronRight, { size: 14, "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: page.breadcrumbName })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6", children: [
              /* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-amber-500", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("span", { className: "text-amber-500 text-sm font-medium", children: page.eyebrow })
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance", children: page.h1 }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed text-pretty", children: page.heroSubtitle }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: whatsappHref,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-all hover:scale-105",
                  children: [
                    /* @__PURE__ */ jsx(MessageCircle, { size: 20, "aria-hidden": "true" }),
                    "Falar no WhatsApp"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: whatsappHref,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition-all",
                  children: [
                    "Solicitar Orçamento",
                    /* @__PURE__ */ jsx(ChevronRight, { size: 20, "aria-hidden": "true" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-amber-500 mb-2", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("p", { className: "text-white font-medium text-sm", children: "Av. Pres. Arthur da Silva Bernardes, 1323" }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-sm", children: "Portão, Curitiba - PR" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10", children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 text-amber-500 mb-2", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("p", { className: "text-white font-medium text-sm", children: PHONE_DISPLAY }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-sm", children: "WhatsApp disponível" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6 text-amber-500 mb-2", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("p", { className: "text-white font-medium text-sm", children: "Seg-Sex: 8h-18h" }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-sm", children: "Sáb: 8h-13h" })
              ] })
            ] })
          ]
        }
      ) })
    ] }),
    page.comparativeNotice && /* @__PURE__ */ jsx("div", { className: "bg-neutral-900 border-y border-neutral-800", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-4", children: /* @__PURE__ */ jsxs("p", { className: "flex items-start gap-2 text-sm text-neutral-400 max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsx(Info, { className: "w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("span", { children: page.comparativeNotice })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4 text-balance", children: [
          "Por que escolher a ",
          /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Carplus" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "Atendimento rápido, profissionais qualificados e garantia em tudo o que fazemos." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: page.benefits.map((b, i) => {
        const Icon = ICONS[b.icon];
        return /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            className: "bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50 hover:border-amber-500/30 transition-all",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-amber-500", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2", children: b.title }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-sm leading-relaxed", children: b.description })
            ]
          },
          i
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-950", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4 text-balance", children: "Serviços do Centro Automotivo" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "Tudo o que o seu veículo precisa em um só lugar, com tecnologia e garantia." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: page.services.map((s, i) => {
        const Icon = ICONS[s.icon];
        return /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: i * 0.05 },
            children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: s.link,
                className: "block bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-amber-500/50 transition-all group h-full",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-amber-500", "aria-hidden": "true" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-white mb-2 group-hover:text-amber-500 transition-colors", children: s.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm leading-relaxed", children: s.description })
                ]
              }
            )
          },
          i
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-900", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-10", children: page.sections.map((sec, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white mb-4 text-balance", children: sec.title }),
          /* @__PURE__ */ jsx("p", { className: "text-neutral-300 leading-relaxed text-pretty", children: sec.content })
        ]
      },
      i
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-950", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4 text-balance", children: "Nossos Diferenciais" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "O que torna a Carplus uma referência em centro automotivo." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto", children: page.differentials.map((d, i) => {
        const Icon = ICONS[d.icon];
        return /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: i % 2 === 0 ? -20 : 20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            className: "flex gap-4 bg-neutral-900 rounded-2xl p-6 border border-neutral-800",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-amber-500", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-1", children: d.title }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-sm leading-relaxed", children: d.description })
              ] })
            ]
          },
          i
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4 text-balance", children: "O que dizem nossos clientes" }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-neutral-300", children: [
          /* @__PURE__ */ jsx("span", { className: "flex", "aria-hidden": "true", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-amber-500 fill-amber-500" }, i)) }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "4,9 de 5" }),
          /* @__PURE__ */ jsx("span", { className: "text-neutral-500", children: "• avaliações no Google" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: page.testimonials.map((t, i) => /* @__PURE__ */ jsxs(
        motion.figure,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex mb-4", "aria-label": `${t.rating} de 5 estrelas`, children: [...Array(t.rating)].map((_, s) => /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-amber-500 fill-amber-500", "aria-hidden": "true" }, s)) }),
            /* @__PURE__ */ jsx("blockquote", { className: "text-neutral-300 text-sm leading-relaxed mb-4", children: `"${t.text}"` }),
            /* @__PURE__ */ jsxs("figcaption", { className: "text-neutral-500 text-sm font-medium", children: [
              "— ",
              t.author
            ] })
          ]
        },
        i
      )) })
    ] }) }),
    isPertoDeMim && /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-950", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4 text-balance", children: "Como Chegar" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: ADDRESS_FULL })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto rounded-2xl overflow-hidden border border-neutral-800", children: /* @__PURE__ */ jsx(
        "iframe",
        {
          title: "Mapa da localização do Centro Automotivo Carplus em Curitiba",
          src: MAPS_EMBED,
          width: "100%",
          height: "420",
          style: { border: 0 },
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4 text-balance", children: "Perguntas Frequentes" }),
        /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "Tire suas dúvidas sobre o nosso centro automotivo." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: page.faq.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-neutral-800/50 rounded-xl border border-neutral-700/50 overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "w-full flex items-center justify-between p-6 text-left",
            onClick: () => setFaqAberto(faqAberto === i ? null : i),
            "aria-expanded": faqAberto === i,
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-white font-medium pr-4", children: item.question }),
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  className: `w-5 h-5 text-amber-500 transition-transform flex-shrink-0 ${faqAberto === i ? "rotate-180" : ""}`,
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ),
        faqAberto === i && /* @__PURE__ */ jsx("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsx("p", { className: "text-neutral-400 leading-relaxed", children: item.answer }) })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-amber-500 to-amber-600", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-black mb-4 text-balance", children: page.ctaTitle }),
      /* @__PURE__ */ jsx("p", { className: "text-black/70 max-w-2xl mx-auto mb-8 text-lg text-pretty", children: page.ctaSubtitle }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: whatsappHref,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-900 text-white font-bold px-8 py-4 rounded-xl transition-all",
            children: [
              /* @__PURE__ */ jsx(MessageCircle, { size: 20, "aria-hidden": "true" }),
              PHONE_DISPLAY
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/como-chegar",
            className: "inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-black font-bold px-8 py-4 rounded-xl transition-all",
            children: [
              /* @__PURE__ */ jsx(MapPin, { size: 20, "aria-hidden": "true" }),
              "Como Chegar"
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsxs(
      "a",
      {
        href: whatsappHref,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Falar no WhatsApp",
        className: "fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-3 sm:px-5 sm:py-4 rounded-full shadow-lg transition-all hover:scale-105",
        children: [
          /* @__PURE__ */ jsx(MessageCircle, { size: 22, "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "WhatsApp" })
        ]
      }
    )
  ] });
}
export {
  CentroAutomotivoSeoPage as default
};
