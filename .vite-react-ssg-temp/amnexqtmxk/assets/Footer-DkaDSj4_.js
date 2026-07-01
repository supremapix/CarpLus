import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { MapPin, Phone, Clock, Search, MessageSquare, Menu, X, ChevronRight, Instagram, Star, ShieldCheck, Heart } from "lucide-react";
import { useState, useEffect, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { SERVICE_CATEGORIES } from "./services-SlP8WPLZ.js";
const GlobalSearch = lazy(() => import("./GlobalSearch-DflZtrm-.js"));
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  const navLinks = [
    { name: "Início", href: "/#inicio" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Catálogo", href: "/pneus" },
    { name: "Serviços", href: "/servicos" },
    { name: "Como Chegar", href: "/como-chegar" },
    { name: "FAQ", href: "/faq" }
  ];
  const handleLinkClick = (e, href) => {
    if (href.startsWith("/#") && window.location.pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 z-50 transition-all duration-300", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-primary text-white py-1.5 px-4 text-[10px] md:text-xs font-medium", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(MapPin, { size: 12 }),
          " Portão, Curitiba"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Phone, { size: 12 }),
          " (41) 3082-7282"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxs("span", { className: "hidden sm:flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Clock, { size: 12 }),
        " Seg-Sex 8h-18h | Sáb 8h-12h"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("nav", { className: `transition-all duration-300 px-4 ${isScrolled ? "bg-dark shadow-xl py-2" : "bg-dark py-3"}`, children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex-shrink-1", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            src: "/images/logos/logo-horizontal.svg",
            alt: "Carplus Centro Automotivo",
            width: 1182,
            height: 168,
            className: `hidden lg:block transition-all duration-300 w-auto ${isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"}`
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            src: "/carplus-pneus-oficina-mecanica-full-service-horizontal.svg",
            alt: "Carplus Centro Automotivo",
            width: 2952,
            height: 708,
            className: `lg:hidden transition-all duration-300 w-auto ${isScrolled ? "h-9" : "h-11"}`
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-6", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsSearchOpen(true),
            className: "flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2 transition-all group",
            children: [
              /* @__PURE__ */ jsx(Search, { size: 14, className: "text-white/40 group-hover:text-primary transition-colors" }),
              /* @__PURE__ */ jsx("span", { className: "text-white/40 text-xs", children: "Buscar..." }),
              /* @__PURE__ */ jsxs("kbd", { className: "flex items-center gap-0.5 text-[10px] text-white/30 bg-white/5 px-1.5 py-0.5 rounded ml-2", children: [
                /* @__PURE__ */ jsx("span", { children: "⌘" }),
                "K"
              ] })
            ]
          }
        ),
        navLinks.map((link) => /* @__PURE__ */ jsx(
          Link,
          {
            to: link.href,
            onClick: (e) => handleLinkClick(e, link.href),
            className: "font-display text-sm uppercase tracking-tight hover:text-primary transition-colors text-white",
            children: link.name
          },
          link.name
        )),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/554130827282",
            target: "_blank",
            className: "bg-[#25D366] text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition-transform hover:scale-105 active:scale-95 text-sm uppercase tracking-tighter shadow-lg",
            children: [
              /* @__PURE__ */ jsx(MessageSquare, { size: 16 }),
              " WhatsApp"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:hidden flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setIsSearchOpen(true),
            className: "text-white p-2 bg-white/5 rounded-full",
            "aria-label": "Buscar",
            children: /* @__PURE__ */ jsx(Search, { size: 20 })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "text-white p-2",
            onClick: () => setIsMobileMenuOpen(true),
            children: /* @__PURE__ */ jsx(Menu, { className: "text-white" })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: `fixed inset-0 z-[60] bg-dark text-white p-6 flex flex-col transition-transform duration-300 ease-out will-change-transform ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"}`,
        "aria-hidden": !isMobileMenuOpen,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-8 bg-black/30 p-4 rounded-3xl border border-white/5", children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                loading: "lazy",
                src: "/carplus-pneus-oficina-mecanica-full-service-horizontal.svg",
                alt: "Carplus Centro Automotivo",
                width: 2952,
                height: 708,
                className: "h-10"
              }
            ),
            /* @__PURE__ */ jsx("button", { onClick: () => setIsMobileMenuOpen(false), className: "bg-white/10 p-2 rounded-xl", children: /* @__PURE__ */ jsx(X, { size: 32 }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 overflow-y-auto pb-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-primary font-bold text-xs uppercase tracking-widest pl-2", children: "Menu Principal" }),
              navLinks.map((link) => /* @__PURE__ */ jsx(
                Link,
                {
                  to: link.href,
                  onClick: (e) => handleLinkClick(e, link.href),
                  className: "font-display text-2xl font-bold uppercase block hover:text-primary transition-colors py-2 border-l-4 border-transparent hover:border-primary pl-2",
                  children: link.name
                },
                link.name
              )),
              /* @__PURE__ */ jsx(
                Link,
                {
                  to: "/contato",
                  onClick: () => setIsMobileMenuOpen(false),
                  className: "font-display text-2xl font-bold uppercase block hover:text-primary transition-colors py-2 border-l-4 border-transparent hover:border-primary pl-2",
                  children: "Contato"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-white/10 space-y-6", children: [
              /* @__PURE__ */ jsx("p", { className: "text-primary font-bold text-xs uppercase tracking-widest pl-2", children: "Informações de Contato" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "tel:+554130827282",
                    className: "bg-white/5 p-6 rounded-3xl border border-white/10 flex items-center gap-6 group hover:bg-white/10 transition-all",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-black", children: /* @__PURE__ */ jsx(Phone, { size: 32 }) }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "text-white font-black text-2xl leading-none mb-1", children: "(41) 3082-7282" }),
                        /* @__PURE__ */ jsx("p", { className: "text-white/40 text-xs font-bold uppercase tracking-widest", children: "Ligar Agora" })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://wa.me/554130827282",
                    className: "bg-[#25D366]/10 p-6 rounded-3xl border border-[#25D366]/20 flex items-center gap-6 group hover:bg-[#25D366]/20 transition-all",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center text-white", children: /* @__PURE__ */ jsx(MessageSquare, { size: 32 }) }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "text-[#25D366] font-black text-2xl leading-none mb-1", children: "WhatsApp" }),
                        /* @__PURE__ */ jsx("p", { className: "text-white/40 text-xs font-bold uppercase tracking-widest", children: "Falar com Consultor" })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10 mt-6", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "text-primary", size: 32 }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-white font-bold text-base leading-tight", children: "Portão – Curitiba" }),
                  /* @__PURE__ */ jsx("p", { className: "text-white/40 text-xs font-bold uppercase tracking-widest", children: "Av. Arthur Bernardes, 1323" })
                ] })
              ] })
            ] })
          ] })
        ]
      }
    ),
    isSearchOpen && /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(GlobalSearch, { isOpen: isSearchOpen, onClose: () => setIsSearchOpen(false) }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("footer", { className: "bg-dark text-white pt-24 pb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 mb-20 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "bg-primary p-10 md:p-14 rounded-[32px] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/30", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl lg:text-5xl mb-3 leading-tight font-black", children: [
            /* @__PURE__ */ jsx("span", { className: "text-white", children: "Precisa de Pneus" }),
            " ",
            /* @__PURE__ */ jsx("br", {}),
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-black italic", children: "ou Oficina?" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-black/70 text-base font-medium", children: "Entre em contato agora – atendimento rápido e preço justo garantido." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 w-full lg:w-auto", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "https://wa.me/554130827282",
              className: "bg-black text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-gray-900 transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-tight",
              children: [
                /* @__PURE__ */ jsx(MessageSquare, { size: 17 }),
                " WhatsApp Agora"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:+554130827282",
              className: "bg-black/10 text-black px-7 py-3 rounded-full font-bold text-sm hover:bg-black/20 border border-black/10 transition-all flex items-center justify-center gap-2 uppercase tracking-tight",
              children: [
                /* @__PURE__ */ jsx(Phone, { size: 18 }),
                " (41) 3082-7282"
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 text-center md:text-left items-center md:items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-10 flex flex-col items-center md:items-start w-full", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: "/images/logos/logo-vertical.svg",
              width: 957,
              height: 1025,
              className: "h-56 md:h-64 drop-shadow-2xl",
              alt: "Carplus"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 text-xl leading-relaxed max-w-sm mx-auto md:mx-0 font-medium", children: "Referência em Curitiba para quem busca segurança, tecnologia de ponta e o melhor atendimento para seu veículo." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-lg uppercase tracking-widest mb-6 text-primary font-black", children: "Nossos Serviços" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-3 text-sm font-medium max-h-80 overflow-y-auto pr-2 scrollbar-thin", children: SERVICE_CATEGORIES.flatMap(
            (category) => category.services.map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              Link,
              {
                to: `/servico/${service.slug}`,
                className: "footer-service-link transition-colors flex items-center justify-center md:justify-start gap-2",
                children: [
                  /* @__PURE__ */ jsx(ChevronRight, { className: "text-primary/40 flex-shrink-0", size: 14 }),
                  /* @__PURE__ */ jsx("span", { children: service.name })
                ]
              }
            ) }, service.slug))
          ) }),
          /* @__PURE__ */ jsx("div", { className: "pt-4 mt-4 border-t border-white/10", children: /* @__PURE__ */ jsx(Link, { to: "/pneus", className: "font-bold text-primary hover:text-white transition-colors text-sm uppercase tracking-tight", children: "Ver Todos os Pneus" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "w-full", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-2xl uppercase tracking-widest mb-10 text-primary font-black", children: "Onde Estamos" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-10 text-white/80", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex flex-col md:flex-row items-center md:items-start gap-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 border border-primary/20", children: /* @__PURE__ */ jsx(MapPin, { size: 32 }) }),
              /* @__PURE__ */ jsx("span", { className: "text-xl font-bold leading-tight", children: "Av. Presid. Arthur da Silva Bernardes, 1323 – Portão, Curitiba – PR" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex flex-col md:flex-row items-center md:items-start gap-6 group", children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-black flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(Phone, { size: 32 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("a", { href: "tel:+554130827282", className: "text-3xl font-black text-white hover:text-primary transition-colors block leading-none mb-1 text-center md:text-left", children: "(41) 3082-7282" }),
                /* @__PURE__ */ jsx("p", { className: "text-primary font-bold text-xs uppercase tracking-widest text-center md:text-left", children: "Ligar Agora" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex flex-col md:flex-row items-center md:items-start gap-6", children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary flex-shrink-0 border border-white/10", children: /* @__PURE__ */ jsx(Clock, { size: 32 }) }),
              /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold", children: [
                /* @__PURE__ */ jsx("p", { children: "Segunda a Sexta: 08:00 – 18:00" }),
                /* @__PURE__ */ jsx("p", { children: "Sábado: 08:00 – 12:00" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-8 w-full", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-xl uppercase tracking-widest mb-8 text-primary font-bold", children: "Siga-nos" }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center md:justify-start gap-6 mb-8", children: [
            /* @__PURE__ */ jsx("a", { href: "https://www.instagram.com/carpluscwb/", target: "_blank", className: "w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all shadow-lg", children: /* @__PURE__ */ jsx(Instagram, { size: 32 }) }),
            /* @__PURE__ */ jsx("a", { href: "https://wa.me/554130827282", target: "_blank", className: "w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#25D366] text-white transition-all shadow-lg", children: /* @__PURE__ */ jsx(MessageSquare, { size: 32 }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6 max-w-xs mx-auto md:mx-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10", children: [
              /* @__PURE__ */ jsx(Star, { className: "text-accent", size: 32, fill: "currentColor" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-lg leading-tight", children: "4.9/5 no Google" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs opacity-60 uppercase font-bold tracking-widest", children: "312+ Avaliações" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "text-primary", size: 32 }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-lg leading-tight", children: "Garantia Total" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs opacity-60 uppercase font-bold tracking-widest", children: "Nota Fiscal em Tudo" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 pt-12 border-t border-white/10 mb-12", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 text-left", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-xs uppercase tracking-widest mb-4 text-primary font-black", children: "Pneus por Aro" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-xs font-medium text-white/50", children: ["13", "14", "15", "16", "17", "18"].map((aro) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: `/pneu-aro-${aro}-curitiba`, className: "hover:text-primary transition-colors", children: [
            "Pneu Aro ",
            aro
          ] }) }, aro)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-xs uppercase tracking-widest mb-4 text-primary font-black", children: "Marcas" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-xs font-medium text-white/50", children: [["pirelli", "Pirelli"], ["michelin", "Michelin"], ["goodyear", "Goodyear"], ["continental", "Continental"], ["yokohama", "Yokohama"]].map(([slug, name]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: `/pneus-${slug}-curitiba`, className: "hover:text-primary transition-colors", children: [
            "Pneus ",
            name
          ] }) }, slug)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-xs uppercase tracking-widest mb-4 text-primary font-black", children: "Por Veículo" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-xs font-medium text-white/50", children: [["hb20", "HB20"], ["onix", "Onix"], ["corolla", "Corolla"], ["compass", "Compass"], ["kwid", "Kwid"]].map(([slug, name]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: `/pneu-para-${slug}-curitiba`, className: "hover:text-primary transition-colors", children: [
            "Pneu para ",
            name
          ] }) }, slug)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-display text-xs uppercase tracking-widest mb-4 text-primary font-black", children: "Atendimento Local" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-xs font-medium text-white/50", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/pneus-curitiba", className: "hover:text-primary transition-colors font-bold text-primary/80", children: "Central de Pneus" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/loja-de-pneus-portao-curitiba", className: "hover:text-primary transition-colors", children: "Loja de Pneus Portão" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/pneu-aro-15-portao-curitiba", className: "hover:text-primary transition-colors", children: "Pneu Aro 15 Portão" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/pneu-aro-16-agua-verde-curitiba", className: "hover:text-primary transition-colors", children: "Pneu Aro 16 Água Verde" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/bairros", className: "hover:text-primary transition-colors", children: "Bairros Atendidos" }) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left space-y-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Carplus Centro Automotivo © 2025" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs", children: "CNPJ 22.345.678/0001-90 · Todos os direitos reservados" })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://supremasite.com.br",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 rounded-full px-5 py-2.5 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-white/50 text-xs font-medium", children: "Desenvolvido com" }),
              /* @__PURE__ */ jsx(Heart, { size: 12, className: "text-red-500 animate-pulse", fill: "currentColor" }),
              /* @__PURE__ */ jsx("span", { className: "text-white/50 text-xs font-medium", children: "por" }),
              /* @__PURE__ */ jsxs("span", { className: "text-white group-hover:text-primary font-bold text-xs transition-colors flex items-center gap-2", children: [
                "Suprema Sites Express",
                /* @__PURE__ */ jsx("img", { loading: "lazy", src: "/images/logos/suprema.webp", alt: "Suprema Mídia", width: 649, height: 185, className: "h-4 w-auto flex-shrink-0 object-contain opacity-80 group-hover:opacity-100 transition-opacity" })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-black py-4 border-t border-white/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 flex justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20", children: [
      /* @__PURE__ */ jsx(Link, { to: "/politica-de-privacidade", className: "hover:text-primary transition-colors", children: "Privacidade" }),
      /* @__PURE__ */ jsx(Link, { to: "/trocas-e-devolucoes", className: "hover:text-primary transition-colors", children: "Garantia" }),
      /* @__PURE__ */ jsx(Link, { to: "/sitemap", className: "hover:text-primary transition-colors", children: "Sitemap" })
    ] }) })
  ] });
}
export {
  Footer as F,
  Navbar as N
};
