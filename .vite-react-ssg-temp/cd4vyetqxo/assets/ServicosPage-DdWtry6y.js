import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Wrench, LayoutGrid, MessageSquare, ArrowUp, Clock, ChevronRight } from "lucide-react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { SERVICE_CATEGORIES, BUSINESS_INFO } from "./services-SlP8WPLZ.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import { g as getIcon } from "./iconMap-BowL9SiG.js";
import "react-helmet-async";
function AnimatedCounter({ value, suffix = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("span", { ref, className: "font-display text-2xl md:text-3xl text-white", children: [
    isVisible ? value : "0",
    suffix
  ] });
}
function ServiceCard({ service, categoryId }) {
  const Icon = getIcon(service.icon);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      className: "bg-[#1a1a1a] border border-[#333] rounded-xl p-6 flex flex-col gap-4 hover:border-primary/60 transition-all group hover:shadow-lg hover:shadow-primary/10",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-lg bg-[#2a2a2a] border border-[#444] flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-base uppercase tracking-tight leading-tight pt-1", children: service.name })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-[#ccc] leading-relaxed", children: service.shortDescription }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-1.5 flex-grow", children: service.highlights.slice(0, 4).map((h, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs text-white/70", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[#00C853] mt-0.5 shrink-0", children: "✓" }),
          h
        ] }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-auto pt-4 border-t border-[#333]", children: [
          service.estimatedTime ? /* @__PURE__ */ jsxs("span", { className: "text-xs text-white/40 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Clock, { size: 12 }),
            " ",
            service.estimatedTime
          ] }) : /* @__PURE__ */ jsx("span", { className: "text-xs text-white/40", children: "—" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/servico/${service.slug}`,
                className: "text-primary text-xs font-bold uppercase tracking-tight hover:underline flex items-center gap-1",
                children: [
                  "Detalhes ",
                  /* @__PURE__ */ jsx(ChevronRight, { size: 12 })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(`Olá! Gostaria de agendar: ${service.name}`)}`,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": `Agendar ${service.name} via WhatsApp`,
                className: "bg-primary text-black px-3 py-2 rounded-full font-bold text-xs uppercase tracking-tight flex items-center gap-1.5 hover:bg-yellow-400 transition-colors group-hover:shadow-md group-hover:shadow-primary/20",
                children: /* @__PURE__ */ jsx(MessageSquare, { size: 12 })
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function CategorySection({ category }) {
  const Icon = getIcon(category.icon);
  return /* @__PURE__ */ jsxs("section", { id: category.id, className: "scroll-mt-32", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-primary" }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-black uppercase tracking-tight text-white", children: category.name }),
      /* @__PURE__ */ jsx("div", { className: "flex-grow h-px bg-gradient-to-r from-primary/40 to-transparent ml-4" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: category.services.map((service) => /* @__PURE__ */ jsx(ServiceCard, { service, categoryId: category.id }, service.id)) })
  ] });
}
function ServicosPage() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navRef = useRef(null);
  const __seo = useSEO({
    title: "Serviços de Oficina e Pneus em Curitiba Portão | Carplus Centro Automotivo",
    description: "Alinhamento 3D, troca de pneus, óleo, suspensão e freios em Curitiba. Carplus Centro Automotivo no Portão – agende pelo (41) 3082-7282.",
    canonical: "https://www.carpluspneuseoficina.com.br/servicos/",
    ogImage: "https://www.carpluspneuseoficina.com.br/og-carplus.webp"
  });
  const totalServices = useMemo(
    () => SERVICE_CATEGORIES.reduce((acc, cat) => acc + cat.services.length, 0),
    []
  );
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToCategory = (categoryId) => {
    var _a;
    setActiveCategory(categoryId);
    if (categoryId === "todos") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(categoryId);
    if (element) {
      const navHeight = ((_a = navRef.current) == null ? void 0 : _a.offsetHeight) || 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - navHeight - 20, behavior: "smooth" });
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    SERVICE_CATEGORIES.forEach((cat) => {
      const element = document.getElementById(cat.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-[#0a0a0a]", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("script", { type: "application/ld+json", dangerouslySetInnerHTML: { __html: JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "AutoRepair",
          "@id": "https://www.carpluspneuseoficina.com.br/#business",
          "name": "Carplus Centro Automotivo",
          "alternateName": "Carplus Pneus e Oficina Mecânica",
          "url": "https://www.carpluspneuseoficina.com.br",
          "telephone": "+554130827282",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Presidente Arthur da Silva Bernardes, 1323",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "postalCode": "80320-300",
            "addressCountry": "BR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -25.4853,
            "longitude": -49.2872
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "08:00",
              "closes": "18:00"
            },
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": "Saturday",
              "opens": "08:00",
              "closes": "12:00"
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "214",
            "bestRating": "5",
            "worstRating": "1"
          }
        },
        {
          "@type": "WebPage",
          "@id": "https://www.carpluspneuseoficina.com.br/servicos#webpage",
          "url": "https://www.carpluspneuseoficina.com.br/servicos",
          "name": "Serviços de Pneus e Oficina Mecânica em Curitiba | Carplus",
          "isPartOf": { "@id": "https://www.carpluspneuseoficina.com.br/#business" },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.carpluspneuseoficina.com.br" },
              { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://www.carpluspneuseoficina.com.br/servicos" }
            ]
          }
        }
      ]
    }) } }),
    /* @__PURE__ */ jsxs("section", { className: "pt-28 pb-12 px-4 bg-[#0a0a0a] text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-primary" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxs("nav", { className: "text-xs text-white/40 mb-6 flex items-center justify-center gap-2", "aria-label": "Breadcrumb", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white/70 transition-colors", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/20", "aria-hidden": "true", children: "›" }),
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Serviços" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight mb-4 italic text-center", children: [
          "Nossos ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Serviços" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-white/55 max-w-xl mx-auto leading-relaxed", children: "Oficina mecânica full service e loja de pneus no Portão, Curitiba. Tudo em um só lugar." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-bold", children: [
          /* @__PURE__ */ jsx(Wrench, { size: 16 }),
          totalServices,
          " Serviços Disponíveis"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-[#111] border-y border-white/05 py-8 px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6", children: BUSINESS_INFO.stats.map((stat, i) => {
      const Icon = getIcon(stat.icon);
      return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 text-center", children: [
        /* @__PURE__ */ jsx(Icon, { className: "w-7 h-7 text-primary" }),
        /* @__PURE__ */ jsx(AnimatedCounter, { value: stat.value }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] md:text-xs text-white/45 uppercase tracking-wider", children: stat.label })
      ] }, i);
    }) }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        ref: navRef,
        className: "sticky top-0 z-50 bg-[#111] border-b border-primary/30 shadow-lg shadow-black/20",
        children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxs(
              "nav",
              {
                className: "flex items-center gap-3 py-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/50 scrollbar-track-transparent pb-3 cursor-grab active:cursor-grabbing touch-pan-x",
                style: { WebkitOverflowScrolling: "touch", scrollbarWidth: "thin" },
                "aria-label": "Filtros de categoria",
                children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => scrollToCategory("todos"),
                      className: `shrink-0 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-tight transition-all flex items-center gap-2 ${activeCategory === "todos" ? "bg-primary text-black shadow-lg shadow-primary/30" : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"}`,
                      children: [
                        /* @__PURE__ */ jsx(LayoutGrid, { size: 16 }),
                        /* @__PURE__ */ jsx("span", { children: "Todos" })
                      ]
                    }
                  ),
                  SERVICE_CATEGORIES.map((cat) => {
                    const CatIcon = getIcon(cat.icon);
                    return /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => scrollToCategory(cat.id),
                        className: `shrink-0 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-tight transition-all flex items-center gap-2 whitespace-nowrap ${activeCategory === cat.id ? "bg-primary text-black shadow-lg shadow-primary/30" : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"}`,
                        children: [
                          /* @__PURE__ */ jsx(CatIcon, { size: 16 }),
                          /* @__PURE__ */ jsx("span", { children: cat.name })
                        ]
                      },
                      cat.id
                    );
                  })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#111] to-transparent pointer-events-none" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "h-0.5 bg-white/10 -mt-1", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-full bg-primary transition-all duration-300",
              style: {
                width: `${(SERVICE_CATEGORIES.findIndex((c) => c.id === activeCategory) + 1) / SERVICE_CATEGORIES.length * 100}%`
              }
            }
          ) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("main", { className: "py-16 px-4 bg-[#0a0a0a]", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto space-y-20", children: SERVICE_CATEGORIES.map((category) => /* @__PURE__ */ jsx(CategorySection, { category }, category.id)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 bg-primary", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-black mb-4 italic leading-snug text-center", children: "Pronto para agendar?" }),
      /* @__PURE__ */ jsx("p", { className: "text-black/70 text-base mb-8", children: "Atendemos Seg–Sex 8h–18h e Sáb 8h–12h. Sem agendamento para a maioria dos serviços." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `https://wa.me/${BUSINESS_INFO.whatsapp}`,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "bg-black text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors shadow-xl",
            children: [
              /* @__PURE__ */ jsx(MessageSquare, { size: 18 }),
              " WhatsApp Agora"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/pneus",
            className: "bg-black/10 text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 border border-black/15 hover:bg-black/20 transition-colors",
            children: "Ver Catálogo de Pneus"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: `https://wa.me/${BUSINESS_INFO.whatsapp}`,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Fale conosco pelo WhatsApp",
        className: "fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform",
        children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6 text-white", fill: "white" })
      }
    ),
    showBackToTop && /* @__PURE__ */ jsx(
      motion.button,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        "aria-label": "Voltar ao topo",
        className: "fixed bottom-6 left-6 z-50 w-12 h-12 bg-white/10 backdrop-blur border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors",
        children: /* @__PURE__ */ jsx(ArrowUp, { className: "w-5 h-5 text-white" })
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  ServicosPage as default
};
