import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { MapPin, DollarSign, Shield, Award, Star, Phone, ChevronRight, CircleDot, Wrench, Target, Scale, Zap, BadgeCheck, ChevronDown } from "lucide-react";
import { useState } from "react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { L as LiteYouTube } from "./LiteYouTube-C8oiXB0y.js";
import "./services-SlP8WPLZ.js";
const GALERIA_BORRACHARIA = [
  { src: "/images/borracharia/proprietario-carplus.webp", alt: "Proprietário da Carplus Pneus segurando pneu novo - Borracharia no Portão Curitiba", title: "Atendimento especializado Carplus" },
  { src: "/images/borracharia/mecanico-balanceamento.webp", alt: "Mecânico realizando balanceamento de pneu na Carplus - Borracharia Portão", title: "Balanceamento profissional" },
  { src: "/images/borracharia/alinhamento-3d.webp", alt: "Alinhamento 3D computadorizado na Carplus Pneus - Portão Curitiba", title: "Alinhamento 3D" },
  { src: "/images/borracharia/mecanico-troca-pneu.webp", alt: "Troca de pneu profissional na Carplus - Borracharia no bairro Portão", title: "Troca de pneus" },
  { src: "/images/borracharia/conserto-pneu.webp", alt: "Conserto de pneu furado na Carplus Pneus - Borracharia Portão Curitiba", title: "Conserto de pneus" },
  { src: "/images/borracharia/pneu-desgastado.webp", alt: "Avaliação de desgaste de pneu na Carplus - Borracharia no Portão", title: "Avaliação de pneus" },
  { src: "/images/borracharia/pneus-yokohama.webp", alt: "Pneus Yokohama em estoque na Carplus Pneus Portão Curitiba", title: "Pneus Yokohama" },
  { src: "/images/borracharia/alinhamento-roda.webp", alt: "Serviço de alinhamento de rodas na Carplus - Borracharia Portão", title: "Alinhamento de rodas" },
  { src: "/images/borracharia/vitrine-pirelli.webp", alt: "Vitrine de pneus Pirelli na loja Carplus - Portão Curitiba", title: "Pneus Pirelli" }
];
const SERVICOS_BORRACHARIA = [
  { nome: "Troca de Pneus", descricao: "Troca rápida e profissional de pneus nacionais e importados", Icone: CircleDot, destaque: true },
  { nome: "Conserto de Furos", descricao: "Reparo de pneus furados com garantia de qualidade", Icone: Wrench, destaque: true },
  { nome: "Alinhamento 3D", descricao: "Alinhamento computadorizado com precisão milimétrica", Icone: Target, destaque: false },
  { nome: "Balanceamento", descricao: "Balanceamento de rodas para maior conforto e segurança", Icone: Scale, destaque: false },
  { nome: "Rodízio de Pneus", descricao: "Rodízio para desgaste uniforme e maior durabilidade", Icone: Zap, destaque: false },
  { nome: "Calibragem", descricao: "Calibragem gratuita com nitrogênio disponível", Icone: BadgeCheck, destaque: false }
];
const FAQ_BORRACHARIA = [
  { pergunta: "Quanto custa consertar um pneu furado no Portão?", resposta: "Na Carplus oferecemos o melhor preço da região para conserto de pneus furados. O valor varia conforme o tipo de reparo (manchão ou vulcanização), mas garantimos preço competitivo com qualidade superior. Consulte pelo WhatsApp (41) 3082-7282." },
  { pergunta: "A Carplus atende emergências de pneu furado?", resposta: "Sim! Atendemos clientes com pneus furados durante todo nosso horário de funcionamento, de segunda a sexta das 8h às 18h e sábados das 8h às 13h. Basta trazer seu veículo que realizamos o conserto na hora." },
  { pergunta: "Vocês vendem pneus novos e usados?", resposta: "Trabalhamos exclusivamente com pneus novos de primeira linha das melhores marcas: Pirelli, Bridgestone, Continental, Michelin, Goodyear, Dunlop, Yokohama e outras. Não trabalhamos com pneus usados ou recauchutados." },
  { pergunta: "Qual a garantia do serviço de borracharia?", resposta: "Todos os serviços de borracharia da Carplus têm garantia total. O conserto de furos tem garantia vitalícia, e os serviços de alinhamento e balanceamento têm garantia de 6 meses ou até a próxima revisão." },
  { pergunta: "Atendem carros rebaixados e importados?", resposta: "Sim! Temos equipamentos adequados para atender todos os tipos de veículos, incluindo rebaixados, importados, SUVs, pickups e até veículos híbridos e elétricos. Somos especializados em rodas de liga leve." },
  { pergunta: "Precisa agendar para trocar pneus?", resposta: "Não é necessário agendamento para a maioria dos serviços. Porém, recomendamos entrar em contato pelo WhatsApp (41) 3082-7282 para garantir atendimento mais rápido, especialmente aos sábados." }
];
const BAIRROS_ATENDIDOS = [
  "Portão",
  "Água Verde",
  "Vila Izabel",
  "Capão Raso",
  "Seminário",
  "Fazendinha",
  "Novo Mundo",
  "Santa Quitéria",
  "Campo Comprido",
  "Guaíra",
  "Parolin",
  "Hauer",
  "Xaxim",
  "Pinheirinho"
];
function BorrachariaPortao() {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_BORRACHARIA.map((faq) => ({
      "@type": "Question",
      "name": faq.pergunta,
      "acceptedAnswer": { "@type": "Answer", "text": faq.resposta }
    }))
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Borracharia no Portão Curitiba - Troca de Pneus e Conserto | Carplus" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Borracharia completa no bairro Portão em Curitiba. Troca de pneus, conserto de furos, alinhamento 3D e balanceamento. Melhor preço da região! (41) 3082-7282" }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "borracharia portao, borracharia curitiba, troca de pneus portao, conserto pneu furado, alinhamento portao, balanceamento curitiba, pneu furado portao" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://carpluspneuseoficina.com.br/borracharia-portao" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Borracharia no Portão Curitiba - Carplus Pneus" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Borracharia completa no Portão. Troca de pneus, conserto de furos, alinhamento e balanceamento. Melhor preço da região!" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://carpluspneuseoficina.com.br/borracharia-portao" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "business.business" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaFAQ) })
    ] }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "bg-neutral-950 min-h-screen", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative pt-24 pb-16 overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 bg-amber-500/20 text-amber-500 px-4 py-2 rounded-full text-sm font-medium mb-6", children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 16 }),
                  "Bairro Portão, Curitiba"
                ] }),
                /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6", children: [
                  "Borracharia ",
                  /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Full Service" }),
                  " no Portão"
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-lg text-neutral-400 mb-8 leading-relaxed", children: [
                  "Precisa trocar os pneus ou consertou um furo? A ",
                  /* @__PURE__ */ jsx("strong", { className: "text-white", children: "Carplus Pneus" }),
                  " é a borracharia mais completa do bairro Portão em Curitiba. Atendimento profissional,",
                  /* @__PURE__ */ jsx("strong", { className: "text-amber-500", children: " melhor preço da região" }),
                  " e serviços de qualidade premium."
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 mb-8", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-sm", children: [
                    /* @__PURE__ */ jsx(DollarSign, { size: 14 }),
                    " Melhor Preço"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 bg-blue-500/20 text-blue-400 px-3 py-1.5 rounded-full text-sm", children: [
                    /* @__PURE__ */ jsx(Shield, { size: 14 }),
                    " Garantia Total"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded-full text-sm", children: [
                    /* @__PURE__ */ jsx(Award, { size: 14 }),
                    " +35 Anos"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-8", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 20, className: "fill-amber-500 text-amber-500" }, i)) }),
                  /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: "4.9" }),
                  /* @__PURE__ */ jsx("span", { className: "text-neutral-500", children: "+847 avaliações no Google" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
                  /* @__PURE__ */ jsxs(
                    "a",
                    {
                      href: "https://wa.me/554130827282?text=Olá! Preciso de serviço de borracharia.",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-bold transition-all",
                      children: [
                        /* @__PURE__ */ jsx(Phone, { size: 18 }),
                        "WhatsApp Borracharia"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/pneus",
                      className: "inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-900 px-6 py-3 rounded-full font-bold transition-all",
                      children: [
                        "Ver Pneus em Oferta",
                        /* @__PURE__ */ jsx(ChevronRight, { size: 18 })
                      ]
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              className: "relative",
              children: [
                /* @__PURE__ */ jsx("div", { className: "relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/20", children: /* @__PURE__ */ jsx(
                  LiteYouTube,
                  {
                    videoId: "1fWqUJdCdRg",
                    title: "Carplus Borracharia no Portão - Troca de Pneus Curitiba",
                    params: "rel=0&playsinline=1"
                  }
                ) }),
                /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -right-4 bg-amber-500 text-neutral-900 px-4 py-2 rounded-xl font-bold text-sm", children: "Veja nosso trabalho" })
              ]
            }
          )
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-900/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black text-white mb-4", children: [
                "Servicos de ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Borracharia" }),
                " Completos"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "Na Carplus voce encontra todos os servicos de borracharia com equipamentos modernos e profissionais treinados." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: SERVICOS_BORRACHARIA.map((servico, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            className: `relative p-6 rounded-2xl border transition-all group ${servico.destaque ? "bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-amber-500/50 hover:border-amber-500" : "bg-neutral-900 border-neutral-800 hover:border-amber-500/50"}`,
            children: [
              servico.destaque && /* @__PURE__ */ jsx("span", { className: "absolute -top-3 right-4 bg-amber-500 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full", children: "MAIS PROCURADO" }),
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors", children: /* @__PURE__ */ jsx(servico.Icone, { className: "w-7 h-7 text-amber-500" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: servico.nome }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-400", children: servico.descricao })
            ]
          },
          servico.nome
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black text-white mb-4", children: [
                "Nossa ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Estrutura" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "Conheça a estrutura completa da Carplus Pneus no bairro Portão. Equipamentos modernos e ambiente organizado." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: GALERIA_BORRACHARIA.map((img, index) => /* @__PURE__ */ jsxs(
          motion.figure,
          {
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: index * 0.05 },
            className: `relative rounded-2xl overflow-hidden cursor-pointer group ${index === 0 ? "md:col-span-2 md:row-span-2" : ""}`,
            onClick: () => setSelectedImage(index),
            children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: img.src,
                  alt: img.alt,
                  title: img.title,
                  loading: "lazy",
                  width: 1200,
                  height: 801,
                  className: "w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx("figcaption", { className: "absolute bottom-4 left-4 right-4 text-white font-medium", children: img.title }) })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx(AnimatePresence, { children: selectedImage !== null && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          className: "fixed inset-0 z-50 bg-neutral-950/95 flex items-center justify-center p-4",
          onClick: () => setSelectedImage(null),
          children: /* @__PURE__ */ jsx(
            motion.img,
            {
              initial: { scale: 0.9 },
              animate: { scale: 1 },
              exit: { scale: 0.9 },
              src: GALERIA_BORRACHARIA[selectedImage].src,
              alt: GALERIA_BORRACHARIA[selectedImage].alt,
              width: 1200,
              height: 801,
              className: "max-w-full max-h-[90vh] rounded-2xl"
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-900/50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black text-white mb-4", children: [
                "Atendemos ",
                /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Toda a Regiao" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "Clientes de diversos bairros de Curitiba escolhem a Carplus pela qualidade e preço justo." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: BAIRROS_ATENDIDOS.map((bairro, index) => /* @__PURE__ */ jsx(
          motion.span,
          {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: index * 0.05 },
            className: "bg-neutral-800 hover:bg-amber-500/20 text-neutral-300 hover:text-amber-500 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-default",
            children: bairro
          },
          bairro
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12",
            children: /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black text-white mb-4", children: [
              "Perguntas ",
              /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Frequentes" })
            ] })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: FAQ_BORRACHARIA.map((faq, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden",
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setExpandedFaq(expandedFaq === index ? null : index),
                  className: "w-full flex items-center justify-between p-6 text-left",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-white pr-4", children: faq.pergunta }),
                    /* @__PURE__ */ jsx(
                      ChevronDown,
                      {
                        size: 20,
                        className: `text-amber-500 transition-transform flex-shrink-0 ${expandedFaq === index ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { children: expandedFaq === index && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsx("p", { className: "px-6 pb-6 text-neutral-400", children: faq.resposta })
                }
              ) })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-b from-amber-500/10 to-transparent", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4 text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black text-white mb-6", children: [
              "Furou o Pneu? ",
              /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Venha para a Carplus!" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-lg mb-8", children: "Estamos na Av. Presidente Arthur da Silva Bernardes, 1323 - Portão, Curitiba. Atendimento de segunda a sexta das 8h às 18h e sábados das 8h às 13h." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://wa.me/554130827282?text=Olá! Preciso de serviço de borracharia.",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all",
                  children: [
                    /* @__PURE__ */ jsx(Phone, { size: 20 }),
                    "(41) 3082-7282"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://maps.app.goo.gl/qLF9fGScB8M6TQVB6",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all",
                  children: [
                    /* @__PURE__ */ jsx(MapPin, { size: 20 }),
                    "Como Chegar"
                  ]
                }
              )
            ] })
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  BorrachariaPortao as default
};
