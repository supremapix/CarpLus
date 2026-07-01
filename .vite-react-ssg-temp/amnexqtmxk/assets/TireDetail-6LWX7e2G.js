import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { BookOpen, CircleCheck, GitCompare, Ruler, Tag, CarFront, Wrench, MessageSquare, ChevronRight, ArrowLeft, Share2, Check, Copy, Star, Phone, ShieldCheck, Clock, Award, MapPin } from "lucide-react";
import { TIRES, NEIGHBORHOODS } from "./tire-catalog-f1Gw3RQz.js";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { a as TireTips, T as TireFAQ } from "./TireTips-CsCLgetD.js";
import { useState, useEffect } from "react";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import { c as generateProductSchema, g as generateBreadcrumbSchema } from "./schema-DUlgfpSk.js";
import { getCanonicalSlug, decideTireIndexing } from "./seoIndexing-wgbeegp_.js";
import { g as generateTireContent } from "./tireContent-Bdt-G5Xg.js";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
import "../main.mjs";
import "vite-react-ssg";
const TIRE_REVIEWS = {
  // Exemplo de estrutura (comentado — ative apenas com dados reais):
  // "pneu-pirelli-175-70r13-p400-evo-82t": {
  //   ratingValue: 4.8,
  //   reviewCount: 12,
  //   price: 289.9,
  //   reviews: [
  //     {
  //       author: "Marcos A.",
  //       datePublished: "2025-02-10",
  //       reviewBody: "Pneu excelente para o dia a dia, silencioso e econômico.",
  //       ratingValue: 5,
  //     },
  //   ],
  // },
};
function getTireReview(slug) {
  const entry = TIRE_REVIEWS[slug];
  if (!entry || !entry.reviewCount || entry.reviewCount <= 0) return void 0;
  return entry;
}
function measureToSlug(medida) {
  return medida.toLowerCase().replace(/\//g, "-").replace(/r/g, "r");
}
function brandLandingSlug(marca) {
  return `pneus-${marca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}-curitiba`;
}
function dedupeByCanonical(tires, excludeId, limit) {
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const t of tires) {
    if (!t || !t.slug || t.id === excludeId) continue;
    const canon = getCanonicalSlug(t.slug);
    if (seen.has(canon)) continue;
    seen.add(canon);
    out.push(t);
    if (out.length >= limit) break;
  }
  return out;
}
function TireSeoContent({ tire }) {
  var _a;
  const content = generateTireContent(tire);
  const sameMeasure = dedupeByCanonical(
    TIRES.filter((t) => t && t.medida === tire.medida),
    tire.id,
    4
  );
  const sameBrand = dedupeByCanonical(
    TIRES.filter((t) => t && t.marca === tire.marca),
    tire.id,
    4
  );
  const firstCar = (_a = tire.carros) == null ? void 0 : _a[0];
  const sameVehicle = firstCar ? dedupeByCanonical(
    TIRES.filter((t) => {
      var _a2;
      return t && ((_a2 = t.carros) == null ? void 0 : _a2.includes(firstCar));
    }),
    tire.id,
    4
  ) : [];
  const relatedServices = [
    { slug: "troca-de-pneus", label: "Troca de Pneus" },
    { slug: "alinhamento-3d", label: "Alinhamento 3D" },
    { slug: "balanceamento-computadorizado", label: "Balanceamento" },
    { slug: "calibragem-nitrogenio", label: "Calibragem com Nitrogênio" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary p-3 rounded-2xl", children: /* @__PURE__ */ jsx(BookOpen, { className: "text-black", size: 28 }) }),
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold uppercase tracking-tight italic leading-snug", children: [
          "Guia completo do ",
          tire.marca,
          " ",
          tire.linha,
          " ",
          tire.medida
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed text-base md:text-lg mb-10", children: content.intro }),
      /* @__PURE__ */ jsx("div", { className: "space-y-10", children: content.sections.map((sec, i) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 text-dark", children: sec.heading }),
        sec.paragraphs.map((p, j) => /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed mb-4", children: p }, j)),
        sec.bullets && /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4", children: sec.bullets.map((b, k) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 bg-gray-50 rounded-xl p-3", children: [
          /* @__PURE__ */ jsx(CircleCheck, { size: 18, className: "text-primary flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: b })
        ] }, k)) })
      ] }, i)) })
    ] }),
    content.comparison.length > 0 && /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary p-3 rounded-2xl", children: /* @__PURE__ */ jsx(GitCompare, { className: "text-black", size: 28 }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold uppercase tracking-tight italic leading-snug", children: "Comparação com modelos similares" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: content.comparison.map(({ tire: t, reason }) => /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/pneu/${getCanonicalSlug(t.slug)}`,
          className: "border-2 border-gray-100 hover:border-primary rounded-2xl p-6 transition-all group",
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-primary uppercase tracking-widest block mb-1", children: t.marca }),
            /* @__PURE__ */ jsx("h3", { className: "font-bold uppercase tracking-tighter mb-3 leading-tight group-hover:text-primary transition-colors", children: t.nome }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 leading-relaxed", children: reason })
          ]
        },
        t.id
      )) })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", children: [
      /* @__PURE__ */ jsx(
        LinkBlock,
        {
          icon: /* @__PURE__ */ jsx(Ruler, { size: 20 }),
          title: `Mesma medida ${tire.medida}`,
          seeAll: { to: `/pneu-medida/${measureToSlug(tire.medida)}`, label: `Ver todos ${tire.medida}` },
          items: sameMeasure.map((t) => ({ to: `/pneu/${getCanonicalSlug(t.slug)}`, label: t.nome }))
        }
      ),
      /* @__PURE__ */ jsx(
        LinkBlock,
        {
          icon: /* @__PURE__ */ jsx(Tag, { size: 20 }),
          title: `Mais pneus ${tire.marca}`,
          seeAll: { to: `/${brandLandingSlug(tire.marca)}`, label: `Ver linha ${tire.marca}` },
          items: sameBrand.map((t) => ({ to: `/pneu/${getCanonicalSlug(t.slug)}`, label: t.nome }))
        }
      ),
      sameVehicle.length > 0 && /* @__PURE__ */ jsx(
        LinkBlock,
        {
          icon: /* @__PURE__ */ jsx(CarFront, { size: 20 }),
          title: `Pneus para ${firstCar}`,
          items: sameVehicle.map((t) => ({ to: `/pneu/${getCanonicalSlug(t.slug)}`, label: t.nome }))
        }
      ),
      /* @__PURE__ */ jsx(
        LinkBlock,
        {
          icon: /* @__PURE__ */ jsx(Wrench, { size: 20 }),
          title: "Serviços relacionados",
          items: relatedServices.map((s) => ({ to: `/servico/${s.slug}`, label: s.label }))
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "bg-dark text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-12", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold uppercase tracking-tight italic leading-snug mb-4 text-primary", children: [
        tire.marca,
        " ",
        tire.linha,
        " ",
        tire.medida,
        " em Curitiba"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/80 leading-relaxed mb-8", children: content.ctaLocal }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: `https://wa.me/554130827282?text=${encodeURIComponent(`Olá! Quero o pneu ${tire.nome} com montagem inclusa.`)}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all",
          children: [
            /* @__PURE__ */ jsx(MessageSquare, { size: 20 }),
            " Orçamento no WhatsApp"
          ]
        }
      )
    ] })
  ] });
}
function LinkBlock({ icon, title, items, seeAll }) {
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-primary/10 text-primary p-2 rounded-xl", children: icon }),
      /* @__PURE__ */ jsx("h3", { className: "font-bold uppercase tracking-tight text-dark", children: title })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: items.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
      Link,
      {
        to: item.to,
        className: "flex items-center justify-between gap-2 text-sm text-gray-600 hover:text-primary py-2 border-b border-gray-50 last:border-0 transition-colors group",
        children: [
          /* @__PURE__ */ jsx("span", { className: "line-clamp-1", children: item.label }),
          /* @__PURE__ */ jsx(ChevronRight, { size: 16, className: "text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" })
        ]
      }
    ) }, item.to)) }),
    seeAll && /* @__PURE__ */ jsxs(
      Link,
      {
        to: seeAll.to,
        className: "inline-flex items-center gap-2 text-primary font-bold text-sm mt-4 hover:underline",
        children: [
          seeAll.label,
          " ",
          /* @__PURE__ */ jsx(ChevronRight, { size: 14 })
        ]
      }
    )
  ] });
}
function TireDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const tire = TIRES.find((t) => t && t.slug === slug);
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate("/pneus");
    }
  };
  const shareUrl = `https://www.carpluspneuseoficina.com.br/pneu/${slug}`;
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  };
  const handleShare = async () => {
    if (navigator.share && tire) {
      try {
        await navigator.share({
          title: tire.nome,
          text: `Confira o pneu ${tire.nome} na Carplus Centro Automotivo em Curitiba!`,
          url: shareUrl
        });
      } catch (err) {
        setShowShareMenu(true);
      }
    } else {
      setShowShareMenu(!showShareMenu);
    }
  };
  const BASE_URL = "https://www.carpluspneuseoficina.com.br";
  const modifiedISO = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const lastUpdated = (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  const indexDecision = tire ? decideTireIndexing(tire) : null;
  const review = tire ? getTireReview(tire.slug) : void 0;
  const productSchema = tire ? generateProductSchema({
    name: tire.nome,
    description: tire.descricao,
    image: [
      `${BASE_URL}${tire.imagemGrande}`,
      `${BASE_URL}${tire.imagem}`
    ],
    sku: tire.slug,
    brand: tire.marca,
    availability: "InStock",
    url: `${BASE_URL}/pneu/${getCanonicalSlug(tire.slug)}`,
    dateModified: modifiedISO,
    // AggregateRating + Offer com preço são incluídos apenas quando há dados reais
    ...review && {
      ratingValue: review.ratingValue,
      reviewCount: review.reviewCount,
      price: review.price,
      reviews: review.reviews
    }
  }) : null;
  const breadcrumbSchema = tire ? generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Pneus", url: `${BASE_URL}/pneus` },
    { name: tire.marca, url: `${BASE_URL}/pneus?marca=${tire.marca.toLowerCase()}` },
    { name: tire.nome, url: `${BASE_URL}/pneu/${tire.slug}` }
  ]) : null;
  const __seo = useSEO(
    tire ? {
      title: `${tire.nome} em Curitiba | Carplus Centro Automotivo – Portao`,
      description: `Compre ${tire.nome} (medida ${tire.medida}) na Carplus em Curitiba. Montagem inclusa, parcelamento em ate 10x sem juros, garantia de fabrica. Ligue: (41) 3082-7282.`,
      canonical: (indexDecision == null ? void 0 : indexDecision.canonicalUrl) ?? `${BASE_URL}/pneu/${tire.slug}`,
      noindex: indexDecision ? !indexDecision.index : false,
      ogImage: tire.imagemGrande,
      ogType: "product",
      schemaJSON: [productSchema, breadcrumbSchema].filter(Boolean)
    } : { title: "Pneu nao encontrado | Carplus", description: "Pneu nao encontrado.", noindex: true }
  );
  useEffect(() => {
  }, []);
  if (!tire) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 p-6 pt-24 md:pt-28", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold uppercase mb-4", children: "Pneu não encontrado" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-8", children: "O modelo que você procura não consta em nosso catálogo digital ou foi removido." }),
        /* @__PURE__ */ jsx(Link, { to: "/pneus", className: "bg-primary text-black px-7 py-3 rounded-full font-bold uppercase tracking-widest text-sm", children: "Ver Catálogo Completo" })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  const relatedTires = TIRES.filter((t) => t && t.aro === tire.aro && t.id !== tire.id).slice(0, 4);
  const whatsappMsg = `Olá! Vi no site o pneu *${tire.nome}* (Medida: ${tire.medida}). Gostaria de consultar o preço e disponibilidade para meu carro.`;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 pt-24 md:pt-28", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 md:px-6 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleBack,
            className: "flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-black transition-colors group",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { size: 18, className: "group-hover:-translate-x-1 transition-transform" }),
              /* @__PURE__ */ jsx("span", { className: "uppercase tracking-widest text-xs", children: "Voltar" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: handleShare,
              className: "flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
              children: [
                /* @__PURE__ */ jsx(Share2, { size: 16 }),
                /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Compartilhar" })
              ]
            }
          ),
          showShareMenu && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 min-w-[280px]", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-gray-400 uppercase tracking-widest mb-3", children: "Compartilhar este pneu" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-gray-50 rounded-xl p-3 mb-3", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  value: shareUrl,
                  readOnly: true,
                  className: "flex-1 bg-transparent text-xs text-gray-600 outline-none truncate"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleCopyLink,
                  className: `p-2 rounded-lg transition-all ${copied ? "bg-green-500 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-600"}`,
                  children: copied ? /* @__PURE__ */ jsx(Check, { size: 14 }) : /* @__PURE__ */ jsx(Copy, { size: 14 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://wa.me/?text=${encodeURIComponent(`Confira o pneu ${tire == null ? void 0 : tire.nome} na Carplus: ${shareUrl}`)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "bg-[#25D366] text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-green-600 transition-colors",
                  children: "WhatsApp"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "bg-[#1877F2] text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors",
                  children: "Facebook"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Confira o pneu ${tire == null ? void 0 : tire.nome} na Carplus Centro Automotivo!`)}&url=${encodeURIComponent(shareUrl)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "bg-black text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors",
                  children: "X / Twitter"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "bg-[#0A66C2] text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-blue-800 transition-colors",
                  children: "LinkedIn"
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setShowShareMenu(false),
                className: "w-full mt-3 text-xs text-gray-400 hover:text-gray-600 transition-colors",
                children: "Fechar"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-black", children: "Home" }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 12 }),
        /* @__PURE__ */ jsx(Link, { to: "/pneus", className: "hover:text-black", children: "Pneus" }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 12 }),
        /* @__PURE__ */ jsx(Link, { to: `/pneus?marca=${tire.marca.toLowerCase()}`, className: "hover:text-black", children: tire.marca }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 12 }),
        /* @__PURE__ */ jsx("span", { className: "text-black", children: tire.nome })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-gray-100 mb-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-12 lg:gap-20", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:w-1/2", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            className: "relative overflow-visible group flex justify-center items-center py-10",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 z-10 flex flex-col gap-3", children: [
                tire.destaque && /* @__PURE__ */ jsxs("span", { className: "bg-primary text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase flex items-center gap-2 shadow-xl", children: [
                  /* @__PURE__ */ jsx(Star, { size: 14, fill: "currentColor" }),
                  " Destaque"
                ] }),
                tire.novoModelo && /* @__PURE__ */ jsx("span", { className: "bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl", children: "Lançamento" })
              ] }),
              /* @__PURE__ */ jsx(
                motion.img,
                {
                  src: tire.imagemGrande,
                  alt: tire.nome,
                  width: 600,
                  height: 600,
                  className: "w-full h-[300px] md:h-[500px] object-contain relative z-10 [mix-blend-mode:multiply] group-hover:scale-105 transition-transform duration-700"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-transparent pointer-events-none" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "lg:w-1/2", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "bg-black text-white px-4 py-1 rounded-lg text-xs font-bold uppercase tracking-widest", children: tire.marca }),
                /* @__PURE__ */ jsxs("span", { className: "bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase italic", children: [
                  "Aro ",
                  tire.aro
                ] }),
                /* @__PURE__ */ jsx("span", { className: "bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase italic tracking-tighter", children: tire.categoria })
              ] }),
              /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-tight italic leading-tight", children: tire.nome }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-4 leading-relaxed font-medium", children: tire.descricao }),
              /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-gray-400 font-medium mb-8", children: [
                "Última atualização: ",
                lastUpdated,
                "."
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-6 mb-12", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-2xl", children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1", children: "Medida" }),
                  /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-black italic", children: tire.medida })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-2xl", children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1", children: "Índice Carga" }),
                  /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-black italic", children: tire.indiceCarga })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-2xl", children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1", children: "Velocidade" }),
                  /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-black italic", children: tire.indiceVelocidade })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-12", children: [
                /* @__PURE__ */ jsxs(
                  motion.a,
                  {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    href: `https://wa.me/554130827282?text=${encodeURIComponent(whatsappMsg)}`,
                    target: "_blank",
                    className: "flex-grow flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-full font-bold text-base hover:bg-green-600 transition-all shadow-2xl shadow-green-200",
                    children: [
                      /* @__PURE__ */ jsx(MessageSquare, { size: 24 }),
                      " Orçamento no WhatsApp"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.a,
                  {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    href: "tel:+554130827282",
                    className: "bg-black text-white px-7 py-4 rounded-full font-bold hover:bg-gray-900 transition-all flex items-center justify-center gap-3",
                    children: [
                      /* @__PURE__ */ jsx(Phone, { size: 20 }),
                      " Ligar"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 rounded-full bg-green-500 animate-pulse" }),
                  /* @__PURE__ */ jsx("span", { children: "Pronta Entrega no Portão" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(ShieldCheck, { size: 14, className: "text-primary" }),
                  /* @__PURE__ */ jsx("span", { children: "Garantia de Fábrica" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-primary" }),
                  /* @__PURE__ */ jsx("span", { children: "Montagem em 40 min" })
                ] })
              ] })
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-8 uppercase italic tracking-tight leading-snug flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Award, { className: "text-primary", size: 32 }),
            " Especificações Técnicas"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1", children: [
            { label: "Marca", value: tire.marca },
            { label: "Linha", value: tire.linha },
            { label: "Medida", value: tire.medida },
            { label: "Aro", value: `${tire.aro}"` },
            { label: "Largura", value: `${tire.largura}mm` },
            { label: "Perfil", value: `${tire.perfil}%` },
            { label: "Índice de Carga", value: tire.indiceCarga },
            { label: "Índice de Velocidade", value: tire.indiceVelocidade },
            { label: "Categoria", value: tire.categoria }
          ].map((spec, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between py-4 border-b border-gray-50 last:border-0 md:last:border-b", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest", children: spec.label }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black", children: spec.value })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-dark text-white rounded-[2rem] p-8 md:p-12 shadow-xl relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-8 opacity-5", children: /* @__PURE__ */ jsx(CarFront, { size: 120 }) }),
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-8 uppercase italic tracking-tight leading-snug relative z-10", children: [
            "Carros ",
            /* @__PURE__ */ jsx("br", {}),
            " Compatíveis"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3 relative z-10", children: tire.carros.map((car, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all cursor-default group", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-primary text-black p-1.5 rounded-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(CircleCheck, { size: 14 }) }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-sm tracking-tight", children: car })
          ] }, i)) }),
          /* @__PURE__ */ jsx("p", { className: "mt-8 text-[10px] text-white/40 uppercase font-bold tracking-widest italic leading-relaxed", children: "* Verifique sempre a medida correta no manual do proprietário ou na lateral do seu pneu atual." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-primary rounded-[2.5rem] p-10 md:p-20 mb-20 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-10 pointer-events-none", children: /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            src: "/images/loja/oficina-mecanica-portao-curitiba.png",
            width: 1200,
            height: 801,
            className: "w-full h-full object-cover grayscale",
            alt: "Oficina Carplus no Portão em Curitiba"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center relative z-10", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl lg:text-6xl font-bold mb-8 uppercase tracking-normal italic leading-snug text-black", children: "Por que comprar na Carplus Portão?" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 text-left", children: [
            "Montagem e balanceamento gratuitos",
            "Parcelamento em até 10x sem juros",
            "Garantia oficial de fábrica",
            "Instalação rápida (agendada)",
            "Atendimento Especializado em Curitiba",
            "⭐ 4.9/5 estrelas no Google Maps"
          ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-black/5 p-5 rounded-2xl flex items-center gap-4 border border-black/10", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-black text-primary p-2 rounded-xl flex-shrink-0", children: /* @__PURE__ */ jsx(CircleCheck, { size: 20 }) }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-black uppercase tracking-tighter leading-none", children: item })
          ] }, i)) }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              whileHover: { scale: 1.05 },
              className: "mt-12 inline-block max-w-full",
              children: /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://wa.me/554130827282",
                  target: "_blank",
                  className: "bg-black text-white px-6 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-2xl hover:bg-gray-900 transition-all flex items-center justify-center gap-3 w-full sm:w-auto",
                  children: [
                    "Sair com Pneus Novos Agora ",
                    /* @__PURE__ */ jsx(MessageSquare, {})
                  ]
                }
              )
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(TireSeoContent, { tire }),
      /* @__PURE__ */ jsx(TireTips, { tireName: tire.nome, categoria: tire.categoria }),
      /* @__PURE__ */ jsx(TireFAQ, { tire }),
      relatedTires.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mb-20 px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-12", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight italic leading-snug", children: [
            "Outras Opções ",
            /* @__PURE__ */ jsxs("span", { className: "text-primary italic", children: [
              "Aro ",
              tire.aro
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Link, { to: "/pneus", className: "text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-2", children: [
            "Ver Tudo ",
            /* @__PURE__ */ jsx(ArrowLeft, { size: 14, className: "rotate-180" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: relatedTires.map((t) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/pneu/${t.slug}`,
            className: "bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary transition-all group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "relative mb-6 overflow-visible flex items-center justify-center p-4", children: /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  src: t.imagem,
                  alt: t.nome,
                  width: 600,
                  height: 600,
                  className: "h-32 object-contain group-hover:scale-110 transition-transform duration-500 [mix-blend-mode:multiply]"
                }
              ) }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-primary uppercase tracking-widest mb-1 block", children: t.marca }),
              /* @__PURE__ */ jsx("h3", { className: "font-bold uppercase tracking-tighter mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors", children: t.nome }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-gray-400 italic", children: "Disponível" }),
                /* @__PURE__ */ jsx(ChevronRight, { className: "text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all", size: 20 })
              ] })
            ]
          },
          t.id
        )) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-20 px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-gray-400", children: "Entrega" }),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black text-dark", children: [
            "Entregamos ",
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: tire.nome }),
            " em Toda Curitiba"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 mt-4", children: "Atendemos todos os bairros e cidades da região metropolitana" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3", children: NEIGHBORHOODS.slice(0, 24).map((neighborhood) => {
          const neighborhoodSlug = neighborhood.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
          return /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/bairro/${neighborhoodSlug}`,
              className: "bg-gray-50 hover:bg-primary/10 border border-gray-100 hover:border-primary/30 rounded-xl p-3 transition-all group text-center",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 14, className: "text-primary flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-dark group-hover:text-primary transition-colors truncate", children: neighborhood.name })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] text-gray-400", children: neighborhood.tempo })
              ]
            },
            neighborhood.name
          );
        }) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/como-chegar",
            className: "inline-flex items-center gap-2 text-primary font-bold hover:underline",
            children: [
              "Ver todos os bairros atendidos ",
              /* @__PURE__ */ jsx(ChevronRight, { size: 16 })
            ]
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  TireDetail as default
};
