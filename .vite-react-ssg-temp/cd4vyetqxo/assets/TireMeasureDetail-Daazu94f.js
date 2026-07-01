import { jsxs, jsx } from "react/jsx-runtime";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronRight, Layers, CircleCheck, Star, MessageSquare, Phone, ShieldCheck, Clock, Award, CarFront, ArrowLeft } from "lucide-react";
import { TIRES } from "./tire-catalog-f1Gw3RQz.js";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { a as TireTips, T as TireFAQ } from "./TireTips-CsCLgetD.js";
import { useMemo, useState, useEffect } from "react";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import { isMeasureIndexable } from "./seoIndexing-wgbeegp_.js";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
import "../main.mjs";
import "vite-react-ssg";
function TireMeasureDetail() {
  var _a;
  const { medida } = useParams();
  const normalizedMedida = useMemo(() => {
    if (!medida) return "";
    return medida.replace(/-/g, "/").toUpperCase().replace(/R(\d)/i, "R$1");
  }, [medida]);
  const tiresWithMeasure = useMemo(() => {
    return TIRES.filter(
      (t) => t && t.medida && t.medida.toUpperCase().replace(/\s/g, "") === normalizedMedida.replace(/\s/g, "")
    );
  }, [normalizedMedida]);
  const lineGroups = useMemo(() => {
    const groups = {};
    tiresWithMeasure.forEach((tire2) => {
      const key = `${tire2.marca} - ${tire2.linha}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(tire2);
    });
    return groups;
  }, [tiresWithMeasure]);
  const lineOptions = Object.keys(lineGroups);
  const [selectedLine, setSelectedLine] = useState(lineOptions[0] || "");
  const [selectedTire, setSelectedTire] = useState(null);
  useEffect(() => {
    var _a2;
    if (((_a2 = lineGroups[selectedLine]) == null ? void 0 : _a2.length) > 0) {
      setSelectedTire(lineGroups[selectedLine][0]);
    }
  }, [selectedLine, lineGroups]);
  useEffect(() => {
    if (lineOptions.length > 0 && !selectedLine) {
      setSelectedLine(lineOptions[0]);
    }
  }, [lineOptions, selectedLine]);
  const tire = selectedTire || tiresWithMeasure[0];
  const __seo = useSEO(
    tire ? {
      title: `Pneu ${normalizedMedida} em Curitiba | Carplus Centro Automotivo – Todas as Marcas`,
      description: `Compare e compre pneu ${normalizedMedida} na Carplus em Curitiba. Várias marcas: Pirelli, Firestone, Continental. Montagem inclusa, parcelamento em até 10x sem juros. Ligue: (41) 3082-7282.`,
      canonical: `https://www.carpluspneuseoficina.com.br/pneu-medida/${medida}`,
      noindex: !isMeasureIndexable(normalizedMedida),
      ogImage: tire.imagemGrande,
      ogType: "product",
      schemaJSON: [
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": `Pneus ${normalizedMedida}`,
          "description": `Lista de pneus disponíveis na medida ${normalizedMedida}`,
          "numberOfItems": tiresWithMeasure.length,
          "itemListElement": tiresWithMeasure.map((t, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "item": {
              "@type": "Product",
              "name": t.nome,
              "image": t.imagemGrande,
              "brand": { "@type": "Brand", "name": t.marca },
              "url": `https://www.carpluspneuseoficina.com.br/pneu/${t.slug}`
            }
          }))
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carpluspneuseoficina.com.br/" },
            { "@type": "ListItem", "position": 2, "name": "Pneus", "item": "https://www.carpluspneuseoficina.com.br/pneus" },
            { "@type": "ListItem", "position": 3, "name": `Medida ${normalizedMedida}`, "item": `https://www.carpluspneuseoficina.com.br/pneu-medida/${medida}` }
          ]
        }
      ]
    } : { title: "Pneu não encontrado | Carplus", description: "Pneu não encontrado." }
  );
  if (tiresWithMeasure.length === 0) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen flex items-center justify-center bg-gray-50 p-6 pt-24 md:pt-28", children: [
      /* @__PURE__ */ jsx(Navbar, {}),
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold uppercase mb-4", children: "Medida não encontrada" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-500 mb-8", children: [
          "Não encontramos pneus na medida ",
          normalizedMedida,
          " em nosso catálogo."
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/pneus", className: "bg-primary text-black px-7 py-3 rounded-full font-bold uppercase tracking-widest text-sm", children: "Ver Catálogo Completo" })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] });
  }
  if (!tire) return null;
  const allCompatibleCars = useMemo(() => {
    const cars = /* @__PURE__ */ new Set();
    tiresWithMeasure.forEach((t) => t.carros.forEach((car) => cars.add(car)));
    return Array.from(cars).sort();
  }, [tiresWithMeasure]);
  const relatedTires = TIRES.filter((t) => t && t.aro === tire.aro && !tiresWithMeasure.some((tw) => tw.id === t.id)).slice(0, 4);
  const whatsappMsg = `Olá! Vi no site os pneus na medida *${normalizedMedida}*. Gostaria de consultar preços e disponibilidade das opções disponíveis.`;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 pt-24 md:pt-28", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 md:px-6 py-8", children: [
      /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-8 overflow-x-auto whitespace-nowrap pb-2", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-black", children: "Home" }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 12 }),
        /* @__PURE__ */ jsx(Link, { to: "/pneus", className: "hover:text-black", children: "Pneus" }),
        /* @__PURE__ */ jsx(ChevronRight, { size: 12 }),
        /* @__PURE__ */ jsxs("span", { className: "text-black", children: [
          "Medida ",
          normalizedMedida
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-3 mb-4", children: /* @__PURE__ */ jsxs("span", { className: "bg-primary text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Layers, { size: 16 }),
          tiresWithMeasure.length,
          " ",
          tiresWithMeasure.length === 1 ? "opção disponível" : "opções disponíveis"
        ] }) }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold uppercase tracking-tighter italic leading-none mb-2", children: [
          "Pneu ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: normalizedMedida })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-500", children: [
          "Compare todas as opções de pneus ",
          normalizedMedida,
          " disponíveis na Carplus"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100 mb-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Layers, { size: 20, className: "text-primary" }),
          "Selecione a Linha"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3", children: lineOptions.map((line) => {
          const lineTires = lineGroups[line];
          const firstTire = lineTires[0];
          const isSelected = selectedLine === line;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => setSelectedLine(line),
              className: `relative p-4 rounded-2xl border-2 transition-all text-left ${isSelected ? "border-primary bg-primary/5 shadow-lg" : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"}`,
              children: [
                isSelected && /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(CircleCheck, { size: 20, className: "text-primary" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      loading: "lazy",
                      src: firstTire.imagem,
                      alt: firstTire.linha,
                      width: 64,
                      height: 64,
                      className: "w-16 h-16 object-contain [mix-blend-mode:multiply]"
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-primary uppercase tracking-widest block", children: firstTire.marca }),
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-black block", children: firstTire.linha })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mt-3", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium", children: firstTire.categoria }),
                  /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium", children: firstTire.indiceCarga })
                ] }),
                lineTires.length > 1 && /* @__PURE__ */ jsxs("span", { className: "text-[10px] text-gray-400 mt-2 block", children: [
                  "+ ",
                  lineTires.length - 1,
                  " ",
                  lineTires.length - 1 === 1 ? "variante" : "variantes"
                ] })
              ]
            },
            line
          );
        }) })
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
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  src: tire.imagemGrande,
                  alt: tire.nome,
                  width: 600,
                  height: 600,
                  className: "w-full h-[300px] md:h-[500px] object-contain relative z-10 [mix-blend-mode:multiply] group-hover:scale-105 transition-transform duration-700"
                },
                tire.imagemGrande
              )
            ]
          },
          tire.id
        ) }),
        /* @__PURE__ */ jsx("div", { className: "lg:w-1/2", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6 flex-wrap", children: [
                /* @__PURE__ */ jsx("span", { className: "bg-black text-white px-4 py-1 rounded-lg text-xs font-bold uppercase tracking-widest", children: tire.marca }),
                /* @__PURE__ */ jsxs("span", { className: "bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase italic", children: [
                  "Aro ",
                  tire.aro
                ] }),
                /* @__PURE__ */ jsx("span", { className: "bg-gray-100 text-gray-500 px-3 py-1 rounded-lg text-xs font-bold uppercase italic tracking-tighter", children: tire.categoria }),
                /* @__PURE__ */ jsx("span", { className: "bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-bold uppercase", children: tire.linha })
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tighter italic leading-none", children: tire.nome }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8 leading-relaxed font-medium", children: tire.descricao }),
              ((_a = lineGroups[selectedLine]) == null ? void 0 : _a.length) > 1 && /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 block", children: "Variantes disponíveis:" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: lineGroups[selectedLine].map((variant) => /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: () => setSelectedTire(variant),
                    className: `px-4 py-2 rounded-full text-sm font-medium transition-all ${(selectedTire == null ? void 0 : selectedTire.id) === variant.id ? "bg-primary text-black" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
                    children: variant.nome.replace(`${variant.marca} ${variant.medida} `, "").replace(`${variant.linha} `, "")
                  },
                  variant.id
                )) })
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
          },
          tire.id
        ) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-8 uppercase italic tracking-tighter flex items-center gap-3", children: [
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
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-4 uppercase italic tracking-tighter relative z-10", children: [
            "Carros ",
            /* @__PURE__ */ jsx("br", {}),
            " Compatíveis"
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-white/60 uppercase font-bold tracking-widest mb-6", children: [
            "Todos os veículos compatíveis com ",
            normalizedMedida
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3 relative z-10 max-h-[400px] overflow-y-auto pr-2", children: allCompatibleCars.length > 0 ? allCompatibleCars.map((car, i) => /* @__PURE__ */ jsxs("div", { className: "bg-white/5 border border-white/10 p-4 rounded-xl flex items-center gap-3 hover:bg-white/10 transition-all cursor-default group", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-primary text-black p-1.5 rounded-lg group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(CircleCheck, { size: 14 }) }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-sm tracking-tight", children: car })
          ] }, i)) : /* @__PURE__ */ jsx("p", { className: "text-white/40 text-sm", children: "Consulte a compatibilidade com seu veículo" }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-8 text-[10px] text-white/40 uppercase font-bold tracking-widest italic leading-relaxed", children: "* Verifique sempre a medida correta no manual do proprietário ou na lateral do seu pneu atual." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-[2rem] p-8 md:p-12 shadow-xl mb-20", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-8 uppercase italic tracking-tighter flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Layers, { className: "text-primary", size: 32 }),
          " Compare Todas as Opções ",
          normalizedMedida
        ] }),
        /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full min-w-[600px]", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-100", children: [
            /* @__PURE__ */ jsx("th", { className: "text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2", children: "Pneu" }),
            /* @__PURE__ */ jsx("th", { className: "text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2", children: "Linha" }),
            /* @__PURE__ */ jsx("th", { className: "text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2", children: "Categoria" }),
            /* @__PURE__ */ jsx("th", { className: "text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2", children: "Carga" }),
            /* @__PURE__ */ jsx("th", { className: "text-left text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2", children: "Velocidade" }),
            /* @__PURE__ */ jsx("th", { className: "text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest py-4 px-2", children: "Ação" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: tiresWithMeasure.map((t) => /* @__PURE__ */ jsxs(
            "tr",
            {
              className: `border-b border-gray-50 hover:bg-gray-50 transition-colors ${(selectedTire == null ? void 0 : selectedTire.id) === t.id ? "bg-primary/5" : ""}`,
              children: [
                /* @__PURE__ */ jsx("td", { className: "py-4 px-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("img", { loading: "lazy", src: t.imagem, alt: t.nome, width: 48, height: 48, className: "w-12 h-12 object-contain [mix-blend-mode:multiply]" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-primary uppercase tracking-widest block", children: t.marca }),
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-sm", children: t.nome.replace(`${t.marca} `, "").replace(`${t.medida} `, "") })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("td", { className: "py-4 px-2", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: t.linha }) }),
                /* @__PURE__ */ jsx("td", { className: "py-4 px-2", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-medium", children: t.categoria }) }),
                /* @__PURE__ */ jsx("td", { className: "py-4 px-2", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: t.indiceCarga.split(" ")[0] }) }),
                /* @__PURE__ */ jsx("td", { className: "py-4 px-2", children: /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: t.indiceVelocidade.split(" ")[0] }) }),
                /* @__PURE__ */ jsx("td", { className: "py-4 px-2 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => {
                        setSelectedLine(`${t.marca} - ${t.linha}`);
                        setSelectedTire(t);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      },
                      className: "text-[10px] font-bold text-primary hover:underline uppercase",
                      children: "Selecionar"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: `/pneu/${t.slug}`,
                      className: "text-[10px] font-bold text-gray-400 hover:text-black uppercase",
                      children: "Ver Detalhes"
                    }
                  )
                ] }) })
              ]
            },
            t.id
          )) })
        ] }) })
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
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-7xl font-bold mb-8 uppercase tracking-tighter italic leading-none text-black", children: "Por que comprar na Carplus Portão?" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 text-left", children: [
            "Montagem e balanceamento gratuitos",
            "Parcelamento em até 10x sem juros",
            "Garantia oficial de fábrica",
            "Instalação rápida (agendada)",
            "Atendimento Especializado em Curitiba",
            "4.9/5 estrelas no Google Maps"
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
      /* @__PURE__ */ jsx(TireTips, { tireName: `Pneu ${normalizedMedida}`, categoria: tire.categoria }),
      /* @__PURE__ */ jsx(TireFAQ, { tire }),
      relatedTires.length > 0 && /* @__PURE__ */ jsxs("section", { className: "mb-20 px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-12", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold uppercase tracking-tighter italic leading-none", children: [
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
      /* @__PURE__ */ jsx("section", { className: "mb-20 px-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-100", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold uppercase tracking-tighter italic mb-2", children: "Explore mais pneus em Curitiba" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm font-medium mb-8", children: "Navegue por aro, marca ou veículo e encontre o pneu ideal com instalação inclusa no Portão." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: `/pneu-aro-${tire.aro}-curitiba`,
              className: "bg-primary text-black px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:bg-black hover:text-primary transition-all",
              children: [
                "Pneu Aro ",
                tire.aro
              ]
            }
          ),
          [["pirelli", "Pirelli"], ["michelin", "Michelin"], ["goodyear", "Goodyear"], ["continental", "Continental"], ["yokohama", "Yokohama"]].map(([slug, name]) => /* @__PURE__ */ jsx(
            Link,
            {
              to: `/pneu-${slug}-curitiba`,
              className: "bg-white border border-gray-200 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:border-primary hover:text-primary transition-all",
              children: name
            },
            slug
          )),
          /* @__PURE__ */ jsx(
            Link,
            {
              to: "/medidas-de-pneus-curitiba",
              className: "bg-white border border-gray-200 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:border-primary hover:text-primary transition-all",
              children: "Todas as Medidas"
            }
          ),
          /* @__PURE__ */ jsxs(
            Link,
            {
              to: "/pneus-curitiba",
              className: "bg-white border border-gray-200 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-tight hover:border-primary hover:text-primary transition-all flex items-center gap-2",
              children: [
                "Central de Pneus ",
                /* @__PURE__ */ jsx(ChevronRight, { size: 14 })
              ]
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  TireMeasureDetail as default
};
