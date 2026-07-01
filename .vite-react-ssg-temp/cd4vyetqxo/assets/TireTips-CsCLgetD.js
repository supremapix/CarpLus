import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, Lightbulb, ChevronRight, Gauge, Wrench, Shield, ThermometerSun, AlertTriangle, Car } from "lucide-react";
function generateTireFAQ(tire) {
  const brand = tire.marca;
  const model = tire.linha;
  const measure = tire.medida;
  const rim = tire.aro;
  return [
    {
      question: `Qual o preço do pneu ${brand} ${model} ${measure} em Curitiba?`,
      answer: `O preço do pneu ${brand} ${model} medida ${measure} varia conforme promoções e condições de pagamento. Na Carplus Centro Automotivo, oferecemos parcelamento em até 10x sem juros e os melhores preços da região do Portão. Entre em contato pelo WhatsApp (41) 3082-7282 para obter um orçamento personalizado com montagem e balanceamento inclusos.`
    },
    {
      question: `O pneu ${brand} ${model} ${measure} é bom para qual tipo de carro?`,
      answer: `O pneu ${brand} ${model} na medida ${measure} (aro ${rim}) é ideal para ${tire.tipoVeiculo.join(", ").toLowerCase()}. Modelos compatíveis incluem: ${tire.carros.join(", ")}. Sempre verifique a medida original do seu veículo no manual do proprietário ou na lateral do pneu atual.`
    },
    {
      question: `O pneu ${brand} ${model} tem garantia?`,
      answer: `Sim! O pneu ${brand} ${model} possui garantia de fábrica contra defeitos de fabricação por 5 anos ou até atingir o indicador de desgaste (TWI). A garantia não cobre danos por impacto, cortes, bolhas causadas por buracos ou falta de calibragem e alinhamento. Na Carplus, oferecemos suporte completo para acionamento da garantia.`
    },
    {
      question: `Quanto tempo dura o pneu ${brand} ${model}?`,
      answer: `A durabilidade do pneu ${brand} ${model} ${measure} depende de fatores como: estilo de direção, condições das vias, calibragem correta e manutenção do alinhamento. Em média, pneus da linha ${model} duram entre 40.000 a 60.000 km com uso adequado. Na Carplus, oferecemos alinhamento 3D computadorizado para maximizar a vida útil dos seus pneus.`
    },
    {
      question: `Onde comprar pneu ${brand} ${model} ${measure} em Curitiba?`,
      answer: `Você encontra o pneu ${brand} ${model} ${measure} com pronta entrega na Carplus Centro Automotivo, localizada na Av. Arthur da Silva Bernardes, 1323 - Portão, Curitiba. Atendemos de segunda a sexta das 8h às 18h e sábados das 8h às 12h. Ligue (41) 3082-7282 ou envie mensagem no WhatsApp para verificar disponibilidade e agendar a instalação.`
    },
    {
      question: `Qual a diferença do pneu ${brand} ${model} para outros modelos?`,
      answer: `O ${brand} ${model} é um pneu de categoria ${tire.categoria.toLowerCase()} com índice de velocidade ${tire.indiceVelocidade} e capacidade de carga ${tire.indiceCarga}. ${tire.descricao} Diferencia-se pela tecnologia ${brand} de última geração que proporciona melhor aderência, frenagem e durabilidade.`
    },
    {
      question: `Posso parcelar a compra do pneu ${brand} ${model}?`,
      answer: `Sim! Na Carplus Centro Automotivo você parcela em até 10x sem juros no cartão de crédito. Também aceitamos PIX, dinheiro e transferência bancária com condições especiais. A montagem, balanceamento e descarte do pneu antigo estão inclusos no preço. Consulte condições pelo (41) 3082-7282.`
    },
    {
      question: `O pneu ${brand} ${model} aro ${rim} serve no meu carro?`,
      answer: `O pneu ${brand} ${model} ${measure} com aro ${rim}" é compatível com veículos que utilizam essa medida original ou equivalente aprovada pelo fabricante. Carros como ${tire.carros.slice(0, 3).join(", ")} geralmente utilizam essa medida. Em caso de dúvida, nossa equipe técnica pode verificar a compatibilidade gratuitamente. Envie foto do pneu atual pelo WhatsApp!`
    }
  ];
}
function TireFAQ({ tire }) {
  const [openIndex, setOpenIndex] = useState(null);
  const faqItems = generateTireFAQ(tire);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };
  return /* @__PURE__ */ jsxs("section", { className: "bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-20", children: [
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: { __html: JSON.stringify(faqSchema) }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-10", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-primary p-3 rounded-2xl", children: /* @__PURE__ */ jsx(HelpCircle, { className: "text-black", size: 28 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold uppercase tracking-tighter italic", children: "Perguntas Frequentes" }),
        /* @__PURE__ */ jsxs("p", { className: "text-gray-500 text-sm font-medium", children: [
          "Dúvidas sobre o ",
          tire.marca,
          " ",
          tire.linha,
          " ",
          tire.medida
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: faqItems.map((item, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: `border-2 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? "border-primary bg-primary/5" : "border-gray-100 hover:border-gray-200"}`,
        children: [
          /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => toggleFAQ(index),
              className: "w-full flex items-start justify-between p-5 md:p-6 text-left group",
              "aria-expanded": openIndex === index,
              children: [
                /* @__PURE__ */ jsx("h3", { className: `font-bold text-base md:text-lg pr-4 transition-colors whitespace-normal break-words overflow-wrap-anywhere flex-1 ${openIndex === index ? "text-black" : "text-gray-700 group-hover:text-black"}`, children: item.question }),
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
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-10 p-6 bg-gray-50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("p", { className: "font-bold text-lg", children: [
          "Ainda tem dúvidas sobre o ",
          tire.marca,
          " ",
          tire.linha,
          "?"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-500 text-sm", children: "Nossa equipe técnica está pronta para ajudar!" })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: `https://wa.me/554130827282?text=${encodeURIComponent(`Olá! Tenho uma dúvida sobre o pneu ${tire.nome}`)}`,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-tight hover:bg-green-600 transition-colors whitespace-nowrap",
          children: "Falar com Especialista"
        }
      )
    ] })
  ] });
}
const allTips = [
  {
    id: 1,
    icon: /* @__PURE__ */ jsx(Gauge, { className: "w-6 h-6" }),
    title: "Calibragem Correta",
    shortDesc: "Verifique a pressão a cada 15 dias",
    fullDesc: "A calibragem correta dos pneus é essencial para segurança, economia de combustível e durabilidade. Verifique a pressão sempre com os pneus frios, seguindo a especificação do fabricante do veículo (geralmente na porta do motorista). Pneus mal calibrados podem aumentar o consumo em até 3% e reduzir a vida útil em 25%.",
    category: "geral"
  },
  {
    id: 2,
    icon: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6" }),
    title: "Rodízio de Pneus",
    shortDesc: "A cada 10.000 km para desgaste uniforme",
    fullDesc: "O rodízio dos pneus garante desgaste uniforme e prolonga a vida útil do conjunto. Em veículos de tração dianteira, os pneus da frente desgastam mais rápido. Recomendamos fazer o rodízio a cada 10.000 km ou conforme manual do veículo. Isso pode aumentar a durabilidade dos pneus em até 20%.",
    category: "geral"
  },
  {
    id: 3,
    icon: /* @__PURE__ */ jsx(ThermometerSun, { className: "w-6 h-6" }),
    title: "Cuidados com o Calor",
    shortDesc: "Evite exposição prolongada ao sol",
    fullDesc: "O calor excessivo acelera o envelhecimento da borracha dos pneus. Sempre que possível, estacione em locais cobertos ou à sombra. Em dias muito quentes, a pressão dos pneus pode aumentar naturalmente - não esvazie, pois ao esfriar a pressão ficará abaixo do ideal. Pneus de alta performance são mais sensíveis às variações térmicas.",
    category: "esportivo"
  },
  {
    id: 4,
    icon: /* @__PURE__ */ jsx(AlertTriangle, { className: "w-6 h-6" }),
    title: "Sinais de Desgaste",
    shortDesc: "Observe indicadores TWI no pneu",
    fullDesc: "Os pneus possuem indicadores de desgaste (TWI - Tread Wear Indicator) nas ranhuras principais. Quando a banda de rodagem atinge 1,6mm, esses indicadores ficam nivelados com a superfície, indicando necessidade de troca. Para pneus de alta performance, recomendamos trocar com 3mm para manter a dirigibilidade em pista molhada.",
    category: "geral"
  },
  {
    id: 5,
    icon: /* @__PURE__ */ jsx(Wrench, { className: "w-6 h-6" }),
    title: "Alinhamento e Balanceamento",
    shortDesc: "Essencial após troca ou impacto",
    fullDesc: "Alinhamento incorreto causa desgaste irregular e compromete a dirigibilidade. Faça o alinhamento 3D a cada 10.000 km ou após impactos em buracos/guias. O balanceamento deve ser verificado sempre que houver vibração no volante. Na Carplus, oferecemos alinhamento 3D computadorizado de alta precisão.",
    category: "geral"
  },
  {
    id: 6,
    icon: /* @__PURE__ */ jsx(Car, { className: "w-6 h-6" }),
    title: "Amaciamento de Pneus Novos",
    shortDesc: "Primeiros 500 km com cautela",
    fullDesc: "Pneus novos possuem uma camada de desmoldante da fábrica que reduz a aderência inicial. Nos primeiros 500 km, evite acelerações bruscas, frenagens fortes e curvas em alta velocidade. Isso permite que a borracha atinja sua capacidade máxima de aderência de forma segura e gradual.",
    category: "esportivo"
  },
  {
    id: 7,
    icon: /* @__PURE__ */ jsx(Gauge, { className: "w-6 h-6" }),
    title: "Pressão para Track Days",
    shortDesc: "Ajuste fino para máxima performance",
    fullDesc: "Em uso de pista, a pressão ideal varia conforme temperatura ambiente, tipo de asfalto e estilo de pilotagem. Comece com a pressão recomendada e ajuste em incrementos de 2 PSI após cada sessão, verificando a temperatura do pneu. O objetivo é obter temperatura uniforme em toda a banda de rodagem.",
    category: "esportivo"
  },
  {
    id: 8,
    icon: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6" }),
    title: "Armazenamento Correto",
    shortDesc: "Proteja seus pneus quando não usados",
    fullDesc: "Ao armazenar pneus, mantenha-os em local fresco, seco e protegido da luz solar. Pneus montados em rodas devem ser guardados deitados ou pendurados. Pneus sem roda devem ficar em pé e ser girados mensalmente. Cubra com sacos plásticos para proteger da poeira e ozônio.",
    category: "geral"
  }
];
function TireTips({ tireName, categoria }) {
  const [expandedTip, setExpandedTip] = useState(null);
  const [activeFilter, setActiveFilter] = useState("todos");
  const isEsportivo = categoria.toLowerCase().includes("esportivo") || categoria.toLowerCase().includes("uhp") || tireName.toLowerCase().includes("neova") || tireName.toLowerCase().includes("pilot sport") || tireName.toLowerCase().includes("potenza");
  const filteredTips = allTips.filter((tip) => {
    if (activeFilter === "todos") return true;
    return tip.category === activeFilter;
  });
  const toggleTip = (id) => {
    setExpandedTip(expandedTip === id ? null : id);
  };
  return /* @__PURE__ */ jsxs("section", { className: "py-12 bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-800 rounded-2xl my-8 overflow-hidden relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-64 h-64 bg-[#F7941D]/5 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-48 h-48 bg-[#F7941D]/3 rounded-full blur-2xl" }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 px-6 md:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-[#F7941D]/20 rounded-xl", children: /* @__PURE__ */ jsx(Lightbulb, { className: "w-7 h-7 text-[#F7941D]" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-white", children: "Dicas de Especialistas" }),
          /* @__PURE__ */ jsxs("p", { className: "text-zinc-400 text-sm md:text-base", children: [
            "Maximize a performance e durabilidade do seu ",
            tireName.split(" ").slice(0, 2).join(" ")
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-6 flex-wrap", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveFilter("todos"),
            className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "todos" ? "bg-[#F7941D] text-white shadow-lg shadow-[#F7941D]/30" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"}`,
            children: "Todas as Dicas"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveFilter("geral"),
            className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "geral" ? "bg-[#F7941D] text-white shadow-lg shadow-[#F7941D]/30" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"}`,
            children: "Manutenção Geral"
          }
        ),
        isEsportivo && /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveFilter("esportivo"),
            className: `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === "esportivo" ? "bg-[#F7941D] text-white shadow-lg shadow-[#F7941D]/30" : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"}`,
            children: "Performance Esportiva"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3 md:gap-4", children: filteredTips.map((tip) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `group bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#F7941D]/50 hover:shadow-lg hover:shadow-[#F7941D]/10 ${expandedTip === tip.id ? "ring-2 ring-[#F7941D]/50" : ""}`,
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => toggleTip(tip.id),
                className: "w-full p-4 md:p-5 text-left flex items-start gap-3 md:gap-4",
                "aria-expanded": expandedTip === tip.id,
                children: [
                  /* @__PURE__ */ jsx("div", { className: `p-2 md:p-2.5 rounded-lg transition-colors duration-300 flex-shrink-0 ${expandedTip === tip.id ? "bg-[#F7941D] text-white" : "bg-zinc-700/50 text-[#F7941D] group-hover:bg-[#F7941D]/20"}`, children: tip.icon }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0 overflow-hidden", children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-sm md:text-base mb-1 group-hover:text-[#F7941D] transition-colors truncate", children: tip.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs md:text-sm text-zinc-400 line-clamp-2", children: tip.shortDesc })
                  ] }),
                  /* @__PURE__ */ jsx(
                    ChevronRight,
                    {
                      className: `w-4 h-4 md:w-5 md:h-5 text-zinc-500 transition-transform duration-300 flex-shrink-0 mt-0.5 ${expandedTip === tip.id ? "rotate-90 text-[#F7941D]" : "group-hover:text-[#F7941D]"}`
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: `overflow-hidden transition-all duration-300 ${expandedTip === tip.id ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ jsxs("div", { className: "px-4 md:px-5 pb-4 md:pb-5 pt-0", children: [
              /* @__PURE__ */ jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mb-3 md:mb-4" }),
              /* @__PURE__ */ jsx("p", { className: "text-zinc-300 text-xs md:text-sm leading-relaxed", children: tip.fullDesc }),
              tip.category === "esportivo" && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 mt-3 px-2.5 md:px-3 py-1 bg-[#F7941D]/10 text-[#F7941D] text-xs font-medium rounded-full", children: [
                /* @__PURE__ */ jsx(Gauge, { className: "w-3 h-3 md:w-3.5 md:h-3.5" }),
                "Dica para Alta Performance"
              ] })
            ] }) })
          ]
        },
        tip.id
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 p-6 bg-gradient-to-r from-[#F7941D]/20 via-[#F7941D]/10 to-transparent rounded-xl border border-[#F7941D]/30", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-[#F7941D] rounded-full", children: /* @__PURE__ */ jsx(Wrench, { className: "w-6 h-6 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-white text-lg", children: "Precisa de ajuda profissional?" }),
            /* @__PURE__ */ jsx("p", { className: "text-zinc-400 text-sm", children: "Nossa equipe especializada está pronta para atender você" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/5541991677282?text=Olá! Gostaria de agendar um serviço para meus pneus.",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 px-6 py-3 bg-[#F7941D] hover:bg-[#e8850f] text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#F7941D]/30 whitespace-nowrap",
            children: [
              "Agendar Serviço",
              /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5" })
            ]
          }
        )
      ] }) })
    ] })
  ] });
}
export {
  TireFAQ as T,
  TireTips as a
};
