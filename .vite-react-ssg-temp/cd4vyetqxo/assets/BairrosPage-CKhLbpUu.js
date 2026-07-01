import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Navigation, ChevronUp, ChevronDown } from "lucide-react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
const BAIRROS = [
  // Muito Próximo
  { slug: "portao", nome: "Portão", tempo: "2 min", zona: "Muito Próximo", cor: "#00C853", rota: "Av. Arthur da Silva Bernardes" },
  { slug: "agua-verde", nome: "Água Verde", tempo: "5 min", zona: "Muito Próximo", cor: "#00C853", rota: "Av. República Argentina" },
  { slug: "guaira", nome: "Guaíra", tempo: "5 min", zona: "Muito Próximo", cor: "#00C853", rota: "Av. República Argentina" },
  { slug: "parolin", nome: "Parolin", tempo: "8 min", zona: "Muito Próximo", cor: "#00C853", rota: "Av. Getúlio Vargas" },
  { slug: "campo-comprido", nome: "Campo Comprido", tempo: "8 min", zona: "Muito Próximo", cor: "#00C853", rota: "Av. Affonso Camargo" },
  { slug: "taboao", nome: "Taboão", tempo: "7 min", zona: "Muito Próximo", cor: "#00C853", rota: "Av. República Argentina" },
  { slug: "novo-mundo", nome: "Novo Mundo", tempo: "10 min", zona: "Muito Próximo", cor: "#00C853", rota: "Av. República Argentina" },
  { slug: "santo-inacio", nome: "Santo Inácio", tempo: "10 min", zona: "Muito Próximo", cor: "#00C853", rota: "Av. Iguaçu" },
  // Próximo
  { slug: "batel", nome: "Batel", tempo: "8 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Sete de Setembro" },
  { slug: "seminario", nome: "Seminário", tempo: "8 min", zona: "Próximo", cor: "#2196F3", rota: "Av. República Argentina" },
  { slug: "merces", nome: "Mercês", tempo: "10 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Iguaçu" },
  { slug: "bigorrilho", nome: "Bigorrilho", tempo: "10 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Sete de Setembro" },
  { slug: "reboucas", nome: "Rebouças", tempo: "10 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Sete de Setembro" },
  { slug: "capao-raso", nome: "Capão Raso", tempo: "12 min", zona: "Próximo", cor: "#2196F3", rota: "Av. República Argentina" },
  { slug: "neoville", nome: "Neoville", tempo: "12 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Winston Churchill" },
  { slug: "centro", nome: "Centro", tempo: "12 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Sete de Setembro" },
  { slug: "alto-da-gloria", nome: "Alto da Glória", tempo: "12 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Sete de Setembro" },
  { slug: "fazendinha", nome: "Fazendinha", tempo: "12 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Winston Churchill" },
  { slug: "prado-velho", nome: "Prado Velho", tempo: "14 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Sete de Setembro" },
  { slug: "jardim-botanico", nome: "Jardim Botânico", tempo: "15 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Sete de Setembro" },
  { slug: "cic", nome: "CIC", tempo: "15 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Ruy Barbosa" },
  { slug: "vista-alegre", nome: "Vista Alegre", tempo: "18 min", zona: "Próximo", cor: "#2196F3", rota: "Av. Iguaçu" },
  { slug: "sao-lourenco", nome: "São Lourenço", tempo: "18 min", zona: "Próximo", cor: "#2196F3", rota: "Linha Verde" },
  { slug: "uberaba", nome: "Uberaba", tempo: "18 min", zona: "Próximo", cor: "#2196F3", rota: "BR-376" },
  { slug: "cajuru", nome: "Cajuru", tempo: "20 min", zona: "Próximo", cor: "#2196F3", rota: "Linha Verde" },
  // Moderado
  { slug: "bairro-alto", nome: "Bairro Alto", tempo: "20 min", zona: "Moderado", cor: "#F9A825", rota: "BR-116 / Linha Verde" },
  { slug: "barreirinha", nome: "Barreirinha", tempo: "22 min", zona: "Moderado", cor: "#F9A825", rota: "Linha Verde Norte" },
  { slug: "abranches", nome: "Abranches", tempo: "25 min", zona: "Moderado", cor: "#F9A825", rota: "BR-116" },
  { slug: "santa-candida", nome: "Santa Cândida", tempo: "25 min", zona: "Moderado", cor: "#F9A825", rota: "Linha Verde Norte" },
  { slug: "pinhais", nome: "Pinhais", tempo: "22 min", zona: "Moderado", cor: "#F9A825", rota: "BR-116" },
  { slug: "almirante-tamandare", nome: "Almirante Tamandaré", tempo: "28 min", zona: "Moderado", cor: "#F9A825", rota: "BR-476" },
  // Região Metro
  { slug: "colombo", nome: "Colombo", tempo: "30 min", zona: "Região Metro", cor: "#757575", rota: "BR-476" },
  { slug: "araucaria", nome: "Araucária", tempo: "30 min", zona: "Região Metro", cor: "#757575", rota: "BR-476" },
  { slug: "sao-jose-dos-pinhais", nome: "São José dos Pinhais", tempo: "30 min", zona: "Região Metro", cor: "#757575", rota: "BR-376" },
  { slug: "campo-largo", nome: "Campo Largo", tempo: "35 min", zona: "Região Metro", cor: "#757575", rota: "BR-277" },
  { slug: "fazenda-rio-grande", nome: "Fazenda Rio Grande", tempo: "35 min", zona: "Região Metro", cor: "#757575", rota: "BR-476 Contorno Sul" }
];
const ZONAS = ["Todos", "Muito Próximo", "Próximo", "Moderado", "Região Metro"];
const ZONA_LEGEND = [
  { cor: "#00C853", label: "Muito Próximo", sub: "até 10 min" },
  { cor: "#2196F3", label: "Próximo", sub: "10–20 min" },
  { cor: "#F9A825", label: "Moderado", sub: "20–30 min" },
  { cor: "#757575", label: "Região Metro", sub: "30–35 min" }
];
const FAQ_ITEMS = [
  { q: "A Carplus atende todos os bairros de Curitiba?", a: "Sim! Recebemos clientes de todos os bairros de Curitiba. Os mais próximos como Portão, Água Verde e Guaíra ficam a menos de 10 minutos. Bairros mais distantes como Cajuru e Santa Cândida ficam entre 20 e 30 minutos." },
  { q: "A Carplus atende cidades da região metropolitana?", a: "Sim! Atendemos clientes de Colombo, São José dos Pinhais, Pinhais, Araucária, Campo Largo, Fazenda Rio Grande e Almirante Tamandaré. A distância média é de 25 a 35 minutos de carro." },
  { q: "Qual bairro de Curitiba fica mais perto da Carplus?", a: "O próprio Portão fica a menos de 2 minutos. Água Verde e Guaíra são os bairros vizinhos mais próximos, a apenas 5 minutos pela Av. República Argentina." },
  { q: "A Carplus faz entrega de pneus nos bairros?", a: "No momento não realizamos entrega em domicílio. O atendimento é presencial em nossa loja no Portão, onde realizamos também a montagem e balanceamento inclusos." },
  { q: "Tem oficina boa perto do Shopping Palladium?", a: "A Carplus fica a apenas 3 minutos do Shopping Palladium! Estamos na Av. Arthur da Silva Bernardes, 1323 – Portão. Você pode trazer o carro para revisão ou troca de pneus com facilidade." }
];
function BairrosPage() {
  const [busca, setBusca] = useState("");
  const [zona, setZona] = useState("Todos");
  const [openFaq, setOpenFaq] = useState(null);
  const __seo = useSEO({
    title: "Bairros Atendidos em Curitiba e Região | Carplus Pneus e Oficina",
    description: "A Carplus atende todos os bairros de Curitiba e a região metropolitana a partir do Portão. Veja tempo de deslocamento e rotas até a nossa loja.",
    canonical: "https://www.carpluspneuseoficina.com.br/bairros",
    ogImage: "https://www.carpluspneuseoficina.com.br/og-carplus.webp",
    keywords: ["pneus Curitiba bairros", "oficina mecânica Curitiba", "pneus região metropolitana Curitiba", "Carplus Portão"],
    schemaJSON: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.slice(0, 6).map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a }
      }))
    }
  });
  const filtrados = BAIRROS.filter((b) => {
    const okBusca = b.nome.toLowerCase().includes(busca.toLowerCase());
    const okZona = zona === "Todos" || b.zona === zona;
    return okBusca && okZona;
  });
  const grupos = ZONAS.filter((z) => z !== "Todos").map((z) => ({
    zona: z,
    bairros: filtrados.filter((b) => b.zona === z)
  })).filter((g) => g.bairros.length > 0);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-dark", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "pt-32 pb-16 px-4 bg-dark text-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-primary" }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxs("nav", { className: "text-xs text-white/40 mb-6 flex items-center justify-center gap-2", children: [
          /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white/70 transition-colors", children: "Home" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/20", children: "›" }),
          /* @__PURE__ */ jsx("span", { className: "text-white/60", children: "Bairros Atendidos" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-none mb-4 italic text-center", children: [
          "Bairros ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Atendidos" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-white/55 max-w-xl mx-auto leading-relaxed text-center", children: [
          "Atendemos ",
          BAIRROS.length,
          "+ bairros de Curitiba e toda a região metropolitana"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "bg-black/30 border-y border-white/05 py-8 px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4", children: [
      { val: `${BAIRROS.length}+`, label: "Bairros atendidos" },
      { val: "2 min", label: "Bairro mais próximo" },
      { val: "35 min", label: "Região mais distante" },
      { val: "10 Anos", label: "Atendendo Curitiba" }
    ].map((s, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 text-center py-2", children: [
      /* @__PURE__ */ jsx("strong", { className: "font-display text-3xl text-primary", children: s.val }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-white/45 uppercase tracking-wide", children: s.label })
    ] }, i)) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-5 px-4 bg-[#1a1a1a] border-b border-white/06", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto flex flex-wrap gap-5 justify-center", children: ZONA_LEGEND.map((l, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full shrink-0", style: { background: l.cor } }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-white", children: l.label }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-white/35", children: l.sub })
    ] }, i)) }) }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-[70px] z-30 bg-[#1a1a1a] border-b border-white/08 py-4 px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto flex flex-col gap-3", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Busque seu bairro ou cidade...",
          value: busca,
          onChange: (e) => setBusca(e.target.value),
          className: "w-full max-w-md bg-[#242424] border border-white/10 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-primary transition-colors placeholder-white/30"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ZONAS.map((z) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setZona(z),
          className: `px-4 py-1.5 rounded-full text-xs font-bold border transition-all ${zona === z ? "bg-primary border-primary text-black" : "bg-[#242424] border-white/08 text-white/60 hover:border-white/25"}`,
          children: z
        },
        z
      )) }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-white/30", children: [
        filtrados.length,
        " bairro",
        filtrados.length !== 1 ? "s" : "",
        " encontrado",
        filtrados.length !== 1 ? "s" : ""
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 px-4 bg-[#1a1a1a]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto space-y-12", children: [
      grupos.map((grupo) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xs font-black uppercase tracking-[3px] text-white/35 mb-5 pb-2 border-b border-white/06", children: grupo.zona }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3", children: grupo.bairros.map((b, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.03 },
            className: "bg-[#242424] border border-white/06 rounded-xl p-4 flex flex-col gap-2.5 hover:border-primary/40 hover:-translate-y-0.5 transition-all group",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-full shrink-0", style: { background: b.cor } }),
                /* @__PURE__ */ jsx("strong", { className: "font-display font-black text-white text-sm leading-tight", children: b.nome })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-xs text-white/45", children: [
                "⏱ ",
                b.tempo,
                " de carro"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-white/28", children: [
                "Via: ",
                b.rota
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-1 pt-2 border-t border-white/05", children: [
                /* @__PURE__ */ jsx(Link, { to: `/bairro/${b.slug}`, className: "text-[11px] font-bold text-primary group-hover:underline", children: "Ver página →" }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: `https://www.google.com/maps/dir/${encodeURIComponent(b.nome + ", Curitiba, PR")}/Carplus+Auto+Center+Portão+Curitiba`,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: (e) => e.stopPropagation(),
                    className: "text-[11px] text-white/35 hover:text-white flex items-center gap-1 transition-colors",
                    children: [
                      /* @__PURE__ */ jsx(Navigation, { size: 10 }),
                      " Rota"
                    ]
                  }
                )
              ] })
            ]
          },
          b.slug
        )) })
      ] }, grupo.zona)),
      filtrados.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-16 text-white/40", children: [
        /* @__PURE__ */ jsx("p", { className: "text-4xl mb-4", children: "?" }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
          'Nenhum bairro encontrado para "',
          busca,
          '".',
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("a", { href: "https://wa.me/554130827282", target: "_blank", rel: "noopener noreferrer", className: "text-[#25D366] underline", children: "Fale no WhatsApp" }),
          " para saber se atendemos sua região."
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 bg-[#242424]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxs("h2", { className: "font-display text-2xl md:text-3xl font-black uppercase tracking-tighter text-white text-center mb-10 italic", children: [
        "Dúvidas sobre ",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Atendimento" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: FAQ_ITEMS.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "bg-[#1a1a1a] border border-white/07 rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpenFaq(openFaq === i ? null : i),
            className: "w-full flex items-center justify-between gap-4 p-5 text-left",
            children: [
              /* @__PURE__ */ jsx("span", { className: "font-bold text-white text-sm break-words", children: item.q }),
              openFaq === i ? /* @__PURE__ */ jsx(ChevronUp, { size: 16, className: "text-primary shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { size: 16, className: "text-white/40 shrink-0" })
            ]
          }
        ),
        openFaq === i && /* @__PURE__ */ jsx("div", { className: "px-5 pb-5 text-sm text-white/55 leading-relaxed border-t border-white/05 pt-4", children: item.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  BairrosPage as default
};
