import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Share2, Check, Copy, ChevronRight, Tag, MessageSquare, Phone, ShieldCheck, Clock, Truck, CreditCard, Car, Award, MapPin, CircleCheck } from "lucide-react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import { c as generateProductSchema, g as generateBreadcrumbSchema } from "./schema-DUlgfpSk.js";
import { getPromoTireBySlug, PROMO_TIRES } from "./promoTires-CI2UiQpD.js";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
const BASE_URL = "https://www.carpluspneuseoficina.com.br";
const WHATSAPP_PHONE = "554130827282";
function PneuPromocaoDetalhe() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const tire = getPromoTireBySlug(slug);
  const pageUrl = `${BASE_URL}/pneu-promocao/${slug}`;
  const modifiedISO = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const lastUpdated = (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
  const [copied, setCopied] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = pageUrl;
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
          title: `${tire.marca} ${tire.medida}`,
          text: `Confira o pneu ${tire.marca} ${tire.nome} em promoção na Carplus Centro Automotivo em Curitiba!`,
          url: pageUrl
        });
      } catch {
        setShowShareMenu(true);
      }
    } else {
      setShowShareMenu((prev) => !prev);
    }
  };
  const faqs = tire ? [
    {
      q: `Qual o preço do pneu ${tire.marca} ${tire.medida} em Curitiba?`,
      a: `O pneu ${tire.marca} ${tire.nome} está em promoção a partir de ${tire.preco} na Carplus Centro Automotivo, no bairro Portão em Curitiba. Solicite seu orçamento atualizado pelo WhatsApp (41) 3082-7282.`
    },
    {
      q: `A montagem e o balanceamento estão inclusos?`,
      a: `Sim. Na Carplus a montagem, o balanceamento e a calibragem são realizados por técnicos certificados, com a roda pronta em cerca de 40 minutos.`
    },
    {
      q: `O pneu ${tire.marca} ${tire.medida} tem garantia?`,
      a: `Sim, todos os pneus possuem garantia de fábrica contra defeitos de fabricação, além do suporte completo da equipe Carplus em Curitiba.`
    },
    {
      q: `Posso parcelar a compra do pneu ${tire.marca}?`,
      a: `Sim. Você pode parcelar em até 10x sem juros no cartão de crédito. Consulte as condições no WhatsApp ou diretamente na loja no Portão.`
    },
    ...tire.carros.length ? [
      {
        q: `Quais carros usam o pneu ${tire.medida}?`,
        a: `A medida ${tire.medida} é compatível com modelos populares como ${tire.carros.slice(0, 6).join(", ")}, entre outros. Confira a especificação na lateral do seu pneu atual ou consulte a equipe Carplus pelo WhatsApp (41) 3082-7282.`
      }
    ] : []
  ] : [];
  const productSchema = tire ? generateProductSchema({
    name: `Pneu ${tire.marca} ${tire.nome}`,
    description: `Pneu ${tire.marca} ${tire.nome}, medida ${tire.medida}, em promoção na Carplus Centro Automotivo no Portão, Curitiba. Montagem, balanceamento e garantia de fábrica inclusos.`,
    image: [tire.imagem],
    sku: tire.slug,
    brand: tire.marca,
    price: tire.precoNumero,
    availability: "InStock",
    url: pageUrl,
    dateModified: modifiedISO
  }) : null;
  const breadcrumbSchema = tire ? generateBreadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Pneus em Promoção", url: `${BASE_URL}/#promocao` },
    { name: `${tire.marca} ${tire.medida}`, url: pageUrl }
  ]) : null;
  const faqSchema = tire && faqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  } : null;
  const __seo = useSEO(
    tire ? {
      title: `Pneu ${tire.marca} ${tire.medida} em Promoção | ${tire.preco} – Carplus Curitiba`,
      description: `Pneu ${tire.marca} ${tire.nome} a partir de ${tire.preco} em Curitiba. Montagem inclusa, parcelamento em até 10x sem juros e garantia de fábrica na Carplus Centro Automotivo, no Portão. WhatsApp: (41) 3082-7282.`,
      canonical: pageUrl,
      ogImage: tire.imagem,
      ogType: "product",
      keywords: [
        `pneu ${tire.marca}`,
        `pneu ${tire.medida}`,
        `pneu ${tire.marca} curitiba`,
        `pneu aro ${tire.aro} curitiba`,
        "pneu em promoção curitiba",
        "loja de pneus portão curitiba",
        "carplus pneus"
      ],
      schemaJSON: [productSchema, breadcrumbSchema, faqSchema].filter(Boolean)
    } : {
      title: "Pneu não encontrado | Carplus",
      description: "Esta promoção de pneu não está mais disponível.",
      noindex: true
    }
  );
  if (!tire) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 pt-24 md:pt-28", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold uppercase mb-4", children: "Promoção não encontrada" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-8", children: "Esta oferta pode ter sido encerrada ou o endereço está incorreto." }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/",
            className: "bg-primary text-black px-7 py-3 rounded-full font-bold uppercase tracking-widest text-sm",
            children: "Ver Promoções"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  const whatsappMsg = `Olá! Vi a *promoção do pneu ${tire.marca} ${tire.nome}* (medida ${tire.medida}) por ${tire.preco}. Gostaria de garantir esse preço.

Origem do contato: ${pageUrl}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(whatsappMsg)}`;
  const related = PROMO_TIRES.filter((t) => t.slug !== tire.slug && (t.aro === tire.aro || t.marca === tire.marca)).slice(0, 4);
  const relatedFallback = PROMO_TIRES.filter((t) => t.slug !== tire.slug).slice(0, 4);
  const relatedTires = related.length ? related : relatedFallback;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 pt-24 md:pt-28", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 md:px-6 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.history.length > 2 ? navigate(-1) : navigate("/"),
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
              "aria-label": "Compartilhar este pneu",
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
                  value: pageUrl,
                  readOnly: true,
                  className: "flex-1 bg-transparent text-xs text-gray-600 outline-none truncate"
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: handleCopyLink,
                  "aria-label": "Copiar link",
                  className: `p-2 rounded-lg transition-all ${copied ? "bg-green-500 text-white" : "bg-gray-200 hover:bg-gray-300 text-gray-600"}`,
                  children: copied ? /* @__PURE__ */ jsx(Check, { size: 14 }) : /* @__PURE__ */ jsx(Copy, { size: 14 })
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://wa.me/?text=${encodeURIComponent(`Confira o pneu ${tire.marca} ${tire.nome} em promoção na Carplus: ${pageUrl}`)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "bg-[#25D366] text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-green-600 transition-colors",
                  children: "WhatsApp"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "bg-[#1877F2] text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors",
                  children: "Facebook"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Confira o pneu ${tire.marca} ${tire.nome} em promoção na Carplus Centro Automotivo!`)}&url=${encodeURIComponent(pageUrl)}`,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "bg-black text-white text-center py-2 rounded-lg text-xs font-bold hover:bg-gray-800 transition-colors",
                  children: "X / Twitter"
                }
              ),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`,
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
      /* @__PURE__ */ jsxs(
        "nav",
        {
          "aria-label": "Trilha de navegação",
          className: "flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2",
          children: [
            /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-black", children: "Home" }),
            /* @__PURE__ */ jsx(ChevronRight, { size: 12 }),
            /* @__PURE__ */ jsx(Link, { to: "/#promocao", className: "hover:text-black", children: "Promoções" }),
            /* @__PURE__ */ jsx(ChevronRight, { size: 12 }),
            /* @__PURE__ */ jsxs("span", { className: "text-black", children: [
              tire.marca,
              " ",
              tire.medida
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl border border-gray-100 mb-12", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-12 lg:gap-20", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:w-1/2", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            className: "relative flex justify-center items-center py-10",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "absolute top-0 left-0 z-10 bg-primary text-black px-4 py-1.5 rounded-full text-xs font-bold uppercase flex items-center gap-2 shadow-xl", children: [
                /* @__PURE__ */ jsx(Tag, { size: 14, fill: "currentColor" }),
                " Oferta"
              ] }),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: tire.imagem,
                  alt: `Pneu ${tire.marca} ${tire.nome} medida ${tire.medida}`,
                  loading: "lazy",
                  decoding: "async",
                  width: 600,
                  height: 600,
                  className: "w-full h-[300px] md:h-[460px] object-contain relative z-10 [mix-blend-mode:multiply]"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "lg:w-1/2", children: /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "bg-black text-white px-4 py-1 rounded-lg text-xs font-bold uppercase tracking-widest", children: tire.marca }),
            /* @__PURE__ */ jsxs("span", { className: "bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase", children: [
              "Aro ",
              tire.aro
            ] }),
            /* @__PURE__ */ jsx("span", { className: "bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase", children: tire.medida })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight italic leading-tight", children: [
            "Pneu ",
            tire.marca,
            " ",
            tire.nome,
            " em Curitiba"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-600 mb-8 leading-relaxed font-medium", children: [
            "Pneu ",
            tire.marca,
            " na medida ",
            /* @__PURE__ */ jsx("strong", { children: tire.medida }),
            " com montagem, balanceamento e garantia de fábrica inclusos. Instalação rápida por técnicos certificados na Carplus Centro Automotivo, no Portão, em Curitiba."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-gray-400 font-medium mb-8 -mt-4", children: [
            "Última atualização: ",
            lastUpdated,
            "."
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 mb-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-2xl", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1", children: "Medida" }),
              /* @__PURE__ */ jsx("span", { className: "text-base md:text-lg font-bold text-black italic", children: tire.medida })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-2xl", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1", children: "Carga" }),
              /* @__PURE__ */ jsx("span", { className: "text-base md:text-lg font-bold text-black italic", children: tire.carga })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-2xl", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1", children: "Veloc." }),
              /* @__PURE__ */ jsx("span", { className: "text-base md:text-lg font-bold text-black italic", children: tire.velocidade })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm font-bold uppercase tracking-widest", children: "A partir de" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "font-accent font-bold text-primary text-5xl md:text-6xl leading-none", children: tire.preco }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-500 text-sm mb-1", children: "ou 10x sem juros" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 mb-8", children: [
            /* @__PURE__ */ jsxs(
              motion.a,
              {
                whileHover: { scale: 1.02 },
                whileTap: { scale: 0.98 },
                href: whatsappUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex-grow flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-full font-bold text-base hover:bg-green-600 transition-all shadow-2xl shadow-green-200",
                children: [
                  /* @__PURE__ */ jsx(MessageSquare, { size: 24 }),
                  " Pedir Orçamento"
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
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-x-6 gap-y-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest", children: [
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
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-16", children: [
        { icon: Truck, t: "Montagem Inclusa", d: "Instalação, balanceamento e calibragem por técnicos certificados." },
        { icon: CreditCard, t: "Até 10x Sem Juros", d: "Parcele no cartão de crédito e leve seu pneu hoje mesmo." },
        { icon: ShieldCheck, t: "Garantia de Fábrica", d: "Produtos originais com garantia contra defeitos de fabricação." }
      ].map((b) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-8 shadow-xl border border-gray-100", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 text-primary w-12 h-12 rounded-2xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(b.icon, { size: 24 }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-bold uppercase tracking-tight mb-2", children: b.t }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm leading-relaxed", children: b.d })
      ] }, b.t)) }),
      tire.carros.length > 0 && /* @__PURE__ */ jsxs("section", { id: "carros-compativeis", className: "bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-gray-100 mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-2 uppercase italic tracking-tight flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Car, { className: "text-primary", size: 30 }),
          " Carros compatíveis com o pneu ",
          tire.medida
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-500 mb-8 leading-relaxed", children: [
          "O pneu ",
          /* @__PURE__ */ jsxs("strong", { children: [
            tire.marca,
            " ",
            tire.medida
          ] }),
          " é indicado para os seguintes modelos mais populares no Brasil. Em caso de dúvida sobre a medida do seu veículo, fale com a equipe Carplus pelo WhatsApp."
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: tire.carros.map((carro) => /* @__PURE__ */ jsxs(
          "li",
          {
            className: "flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3",
            children: [
              /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center", children: /* @__PURE__ */ jsx(Car, { size: 18 }) }),
              /* @__PURE__ */ jsx("span", { className: "font-bold text-gray-700 text-sm", children: carro })
            ]
          },
          carro
        )) }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-xs text-gray-400 leading-relaxed", children: "* Lista de referência com os veículos mais comuns para esta medida. Sempre confira a especificação original na lateral do pneu atual ou no manual do seu carro." })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-gray-900 text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl font-bold uppercase italic tracking-tight mb-2", children: tire.temCatalogoMarca ? `Veja toda a linha ${tire.marca}` : "Veja o catálogo completo de pneus" }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm leading-relaxed max-w-xl", children: tire.temCatalogoMarca ? `Conheça as outras medidas e linhas de pneus ${tire.marca} disponíveis na Carplus em Curitiba.` : `Explore todas as marcas e medidas de pneus disponíveis na Carplus, no bairro Portão em Curitiba.` })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 flex-shrink-0", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: tire.catalogoUrl,
              className: "inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-accent font-bold uppercase tracking-wide text-black text-sm transition-colors hover:bg-[#ffae2e]",
              children: [
                /* @__PURE__ */ jsx(Tag, { size: 18, strokeWidth: 2.5 }),
                tire.temCatalogoMarca ? `Catálogo ${tire.marca}` : "Catálogo de pneus"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/pneus-promocao",
              className: "inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-accent font-bold uppercase tracking-wide text-white text-sm transition-colors hover:border-primary hover:text-primary",
              children: "Todas as promoções"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "saiba-mais", className: "bg-white rounded-[2.5rem] p-8 md:p-14 shadow-xl border border-gray-100 mb-16", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl font-bold mb-6 uppercase italic tracking-tight flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Award, { className: "text-primary", size: 30 }),
          " Saiba mais sobre o pneu ",
          tire.marca,
          " ",
          tire.medida
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "prose prose-neutral max-w-none text-gray-600 leading-relaxed space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "O pneu ",
            /* @__PURE__ */ jsxs("strong", { children: [
              tire.marca,
              " ",
              tire.nome
            ] }),
            " é uma excelente opção de custo-benefício para quem busca segurança e economia em Curitiba. Na medida ",
            /* @__PURE__ */ jsx("strong", { children: tire.medida }),
            " (aro ",
            tire.aro,
            "), ele atende a uma ampla variedade de veículos de passeio e está disponível em promoção na Carplus Centro Automotivo, no bairro Portão."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Com índice de carga ",
            /* @__PURE__ */ jsx("strong", { children: tire.carga }),
            " e índice de velocidade ",
            /* @__PURE__ */ jsx("strong", { children: tire.velocidade }),
            ", esse modelo oferece aderência em piso seco e molhado, conforto de rodagem e durabilidade no dia a dia da cidade e da estrada. Toda compra inclui montagem, balanceamento e calibragem feitos por nossos técnicos certificados — com a roda pronta em cerca de 40 minutos."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Comprando na Carplus você conta com ",
            /* @__PURE__ */ jsx("strong", { children: "parcelamento em até 10x sem juros" }),
            ", garantia de fábrica e atendimento especializado. Estamos na Av. Arthur da Silva Bernardes, 1323 — Portão, Curitiba/PR, atendendo todos os bairros e região metropolitana."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 text-sm font-bold text-primary", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 16 }),
            " Carplus Centro Automotivo — Portão, Curitiba/PR"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-8 uppercase italic tracking-tight text-center", children: "Perguntas Frequentes" }),
        /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: faqs.map((f) => /* @__PURE__ */ jsxs("details", { className: "group bg-white rounded-2xl border border-gray-100 shadow-sm p-6", children: [
          /* @__PURE__ */ jsxs("summary", { className: "cursor-pointer list-none flex items-center justify-between gap-4 font-bold text-black", children: [
            f.q,
            /* @__PURE__ */ jsx(ChevronRight, { size: 18, className: "text-primary transition-transform group-open:rotate-90" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-gray-500 leading-relaxed text-sm", children: f.a })
        ] }, f.q)) })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-primary rounded-[2.5rem] p-10 md:p-16 mb-16 text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-4xl font-bold uppercase italic text-black mb-4 leading-snug text-balance", children: [
          "Garanta o ",
          tire.marca,
          " ",
          tire.medida,
          " por ",
          tire.preco
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-black/70 font-medium mb-8 max-w-xl mx-auto", children: "Fale agora com nossa equipe e reserve seu pneu em promoção. Estoque limitado!" }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: whatsappUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full font-bold text-base hover:bg-gray-900 transition-all",
            children: [
              /* @__PURE__ */ jsx(MessageSquare, { size: 22 }),
              " Pedir Orçamento no WhatsApp"
            ]
          }
        )
      ] }),
      relatedTires.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-2xl font-bold mb-6 uppercase italic tracking-tight", children: "Outras promoções de pneus" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: relatedTires.map((rt) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/pneu-promocao/${rt.slug}`,
            className: "group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:border-primary/60 hover:shadow-lg transition-all",
            children: [
              /* @__PURE__ */ jsx("div", { className: "aspect-square p-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: rt.imagem,
                  srcSet: `${rt.imagemSmall} 300w, ${rt.imagem} 600w`,
                  sizes: "(max-width: 768px) 45vw, 200px",
                  alt: `Pneu ${rt.marca} ${rt.medida}`,
                  loading: "lazy",
                  decoding: "async",
                  width: 300,
                  height: 300,
                  className: "max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "p-4 pt-0", children: [
                /* @__PURE__ */ jsx("p", { className: "font-accent font-bold uppercase text-primary text-sm", children: rt.marca }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-xs leading-snug mb-2 min-h-[2rem]", children: rt.nome }),
                /* @__PURE__ */ jsxs("p", { className: "font-accent font-bold text-black text-lg flex items-center gap-1", children: [
                  rt.preco,
                  /* @__PURE__ */ jsx(CircleCheck, { size: 14, className: "text-green-500" })
                ] })
              ] })
            ]
          },
          rt.slug
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  PneuPromocaoDetalhe as default
};
