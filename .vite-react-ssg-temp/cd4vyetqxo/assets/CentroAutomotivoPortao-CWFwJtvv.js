import { jsxs, jsx } from "react/jsx-runtime";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { ChevronRight, Award, Phone, MapPin, Clock, Users, Shield, CircleDot, Target, Scale, Droplets, CircleStop, Settings, Snowflake, BarChart3, X, Newspaper, Calendar, ExternalLink, ChevronDown } from "lucide-react";
import "./services-SlP8WPLZ.js";
const GALERIA_IMAGENS = [
  { src: "/images/centro-automotivo/mecanico-elevador.webp", alt: "Mecânico especializado trabalhando no elevador - Carplus Portão", title: "Profissionais Especializados" },
  { src: "/images/centro-automotivo/mecanico-pneus.webp", alt: "Troca de pneus no Centro Automotivo Carplus Portão Curitiba", title: "Serviço de Pneus" },
  { src: "/images/centro-automotivo/pneu-pirelli-scorpion.webp", alt: "Pneu Pirelli Scorpion - Loja de Pneus Portão Curitiba", title: "Pneus Premium" },
  { src: "/images/centro-automotivo/roda-bmw.webp", alt: "Roda BMW em manutenção no Centro Automotivo Portão", title: "Atendemos Todas as Marcas" },
  { src: "/images/centro-automotivo/duster-elevador.webp", alt: "Renault Duster no elevador - Oficina Mecânica Portão", title: "SUVs e Utilitários" },
  { src: "/images/centro-automotivo/oleos-petronas.webp", alt: "Óleos Petronas Syntium - Troca de Óleo Portão Curitiba", title: "Óleos de Qualidade" },
  { src: "/images/centro-automotivo/carplus-oficina-portao-fachada.jpg", alt: "Fachada do Centro Automotivo Carplus no Portão em Curitiba", title: "Nossa Fachada no Portão" },
  { src: "/images/centro-automotivo/capa-banco-carplus.webp", alt: "Capa de banco Carplus - Cuidado com seu veículo", title: "Cuidado Total" },
  { src: "/images/centro-automotivo/atendimento-recepcao.webp", alt: "Atendimento personalizado na recepção Carplus Portão", title: "Atendimento Personalizado" }
];
const FAQ_ITEMS = [
  {
    pergunta: "Onde fica o Centro Automotivo Carplus no Portão?",
    resposta: "A Carplus está localizada na Av. Presidente Arthur da Silva Bernardes, 1323, no coração do bairro Portão em Curitiba. Fácil acesso para quem vem da Água Verde, Santa Quitéria, Fazendinha, Novo Mundo, Capão Raso e toda região sul de Curitiba."
  },
  {
    pergunta: "Quais serviços o Centro Automotivo Carplus oferece?",
    resposta: "Oferecemos serviços completos: troca e venda de pneus das melhores marcas, alinhamento e balanceamento computadorizado, troca de óleo e filtros, revisão de freios, suspensão, amortecedores, correias, arrefecimento, além de diagnóstico eletrônico completo."
  },
  {
    pergunta: "A Carplus é um Pirelli Performance Center?",
    resposta: "Sim! Somos um Pirelli Performance Center certificado, o que significa que temos equipamentos de última geração, profissionais treinados pela Pirelli e acesso a toda linha de pneus premium da marca com garantia de fábrica."
  },
  {
    pergunta: "Qual o horário de funcionamento do Centro Automotivo?",
    resposta: "Funcionamos de segunda a sexta das 8h às 18h e aos sábados das 8h às 13h. Atendemos com hora marcada para maior comodidade ou por ordem de chegada."
  },
  {
    pergunta: "A Carplus atende todas as marcas de veículos?",
    resposta: "Sim! Atendemos todas as marcas e modelos de veículos: Volkswagen, Fiat, Chevrolet, Ford, Toyota, Honda, Hyundai, Renault, Jeep, BMW, Mercedes, Audi e muito mais. Temos equipamentos e peças para carros nacionais e importados."
  },
  {
    pergunta: "Como agendar um serviço no Centro Automotivo Carplus?",
    resposta: "Você pode agendar pelo WhatsApp (41) 3082-7282, pelo telefone fixo ou simplesmente aparecer em nossa loja. Recomendamos agendamento para serviços mais complexos como revisão completa ou diagnóstico eletrônico."
  },
  {
    pergunta: "A Carplus oferece garantia nos serviços?",
    resposta: "Sim! Todos os nossos serviços têm garantia. Trabalhamos apenas com peças de qualidade e profissionais experientes. A garantia varia conforme o serviço e peças utilizadas."
  },
  {
    pergunta: "Quais formas de pagamento são aceitas?",
    resposta: "Aceitamos dinheiro, PIX, cartões de débito e crédito (Visa, Master, Elo, Amex, Hipercard) em até 12x. Também trabalhamos com financiamento para compras maiores."
  }
];
const SERVICOS = [
  { nome: "Pneus", descricao: "Venda e troca de pneus das melhores marcas", Icone: CircleDot, link: "/pneus" },
  { nome: "Alinhamento", descricao: "Alinhamento 3D computadorizado", Icone: Target, link: "/servico/alinhamento" },
  { nome: "Balanceamento", descricao: "Balanceamento de rodas preciso", Icone: Scale, link: "/servico/balanceamento" },
  { nome: "Troca de Óleo", descricao: "Óleos sintéticos e semi-sintéticos", Icone: Droplets, link: "/servico/troca-de-oleo" },
  { nome: "Freios", descricao: "Pastilhas, discos e fluido de freio", Icone: CircleStop, link: "/servico/troca-de-pastilha-de-freio" },
  { nome: "Suspensão", descricao: "Amortecedores, molas e buchas", Icone: Settings, link: "/servico/troca-de-amortecedor" },
  { nome: "Arrefecimento", descricao: "Radiador, mangueiras e fluido", Icone: Snowflake, link: "/servico/troca-de-fluido-de-arrefecimento" },
  { nome: "Diagnóstico", descricao: "Scanner eletrônico completo", Icone: BarChart3, link: "/servico/injecao-eletronica" }
];
const DIFERENCIAIS = [
  { titulo: "Pirelli Performance Center", descricao: "Centro certificado Pirelli com equipamentos de última geração", icone: Award },
  { titulo: "+35 Anos de Experiência", descricao: "Equipe liderada por especialista com 35 anos em diagnóstico automotivo", icone: Users },
  { titulo: "Localização Privilegiada", descricao: "No coração do Portão, fácil acesso de toda região sul de Curitiba", icone: MapPin },
  { titulo: "Atendimento Personalizado", descricao: "Diagnóstico honesto e transparente, sem surpresas no orçamento", icone: Shield }
];
function CentroAutomotivoPortao() {
  const [imagemAberta, setImagemAberta] = useState(null);
  const [faqAberto, setFaqAberto] = useState(null);
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      "name": item.pergunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.resposta
      }
    }))
  };
  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carpluspneuseoficina.com.br/" },
      { "@type": "ListItem", "position": 2, "name": "Centro Automotivo Portão", "item": "https://www.carpluspneuseoficina.com.br/centro-automotivo-portao" }
    ]
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-neutral-950", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Centro Automotivo no Portão Curitiba | Carplus - Pneus, Mecânica e Mais" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Centro Automotivo completo no bairro Portão em Curitiba. Pneus das melhores marcas, alinhamento 3D, balanceamento, troca de óleo, freios, suspensão. Pirelli Performance Center. Ligue (41) 3082-7282." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "centro automotivo portão, centro automotivo curitiba portão, oficina mecânica portão, loja de pneus portão, alinhamento portão curitiba, balanceamento portão, troca de óleo portão, mecânica portão curitiba, carplus portão" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow, max-image-preview:large" }),
      /* @__PURE__ */ jsx("meta", { name: "geo.region", content: "BR-PR" }),
      /* @__PURE__ */ jsx("meta", { name: "geo.placename", content: "Portão, Curitiba" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.carpluspneuseoficina.com.br/centro-automotivo-portao" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Centro Automotivo no Portão Curitiba | Carplus Centro Automotivo" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Centro Automotivo completo no bairro Portão. Pneus, alinhamento, balanceamento, troca de óleo, freios, suspensão e diagnóstico. Pirelli Performance Center certificado." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.carpluspneuseoficina.com.br/centro-automotivo-portao" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "business.business" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://carpluspneuseoficina.com.br/images/centro-automotivo/mecanico-elevador.webp" }),
      /* @__PURE__ */ jsx("meta", { property: "og:locale", content: "pt_BR" }),
      /* @__PURE__ */ jsx("meta", { property: "business:contact_data:street_address", content: "Av. Presidente Arthur da Silva Bernardes, 1323" }),
      /* @__PURE__ */ jsx("meta", { property: "business:contact_data:locality", content: "Curitiba" }),
      /* @__PURE__ */ jsx("meta", { property: "business:contact_data:region", content: "PR" }),
      /* @__PURE__ */ jsx("meta", { property: "business:contact_data:postal_code", content: "81020-010" }),
      /* @__PURE__ */ jsx("meta", { property: "business:contact_data:country_name", content: "Brasil" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Centro Automotivo no Portão Curitiba | Carplus" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Centro Automotivo completo no Portão. Pneus, mecânica, alinhamento, balanceamento. Pirelli Performance Center." }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:image", content: "https://carpluspneuseoficina.com.br/images/centro-automotivo/mecanico-elevador.webp" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaFAQ) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(schemaBreadcrumb) })
    ] }),
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[70vh] flex items-center justify-center overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            loading: "lazy",
            src: "/images/centro-automotivo/mecanico-elevador.webp",
            alt: "Centro Automotivo Carplus no bairro Portão em Curitiba - Vista interna da oficina mecânica",
            width: 1200,
            height: 801,
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4 py-20", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "max-w-4xl",
          children: [
            /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-neutral-400 mb-6", children: [
              /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-amber-500 transition-colors", children: "Home" }),
              /* @__PURE__ */ jsx(ChevronRight, { size: 14 }),
              /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Centro Automotivo Portão" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6", children: [
              /* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-amber-500" }),
              /* @__PURE__ */ jsx("span", { className: "text-amber-500 text-sm font-medium", children: "Pirelli Performance Center Certificado" })
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold text-white mb-6 leading-tight", children: [
              "Centro Automotivo no",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Portão" }),
              /* @__PURE__ */ jsx("br", {}),
              "em Curitiba"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-neutral-300 mb-8 max-w-2xl leading-relaxed", children: "Seu carro merece o melhor cuidado. Na Carplus você encontra pneus das melhores marcas, mecânica especializada, alinhamento 3D e atendimento de confiança no coração do Portão." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://wa.me/554130827282?text=Olá! Vi o site e gostaria de agendar um serviço no Centro Automotivo.",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105",
                  children: [
                    /* @__PURE__ */ jsx(Phone, { size: 20 }),
                    "Agendar Serviço"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/pneus",
                  className: "inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition-all",
                  children: [
                    "Ver Catálogo de Pneus",
                    /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "w-6 h-6 text-amber-500 mb-2" }),
                /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: "Av. Pres. Arthur da Silva Bernardes, 1323" }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-sm", children: "Portão, Curitiba - PR" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10", children: [
                /* @__PURE__ */ jsx(Phone, { className: "w-6 h-6 text-amber-500 mb-2" }),
                /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: "(41) 3082-7282" }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-sm", children: "WhatsApp disponível" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-6 h-6 text-amber-500 mb-2" }),
                /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: "Seg-Sex: 8h-18h" }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-sm", children: "Sáb: 8h-13h" })
              ] })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: [
              "Por que escolher a ",
              /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Carplus" }),
              "?"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "Somos referência em centro automotivo no bairro Portão, com estrutura completa e profissionais experientes." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: DIFERENCIAIS.map((item, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50 hover:border-amber-500/30 transition-all group",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors", children: /* @__PURE__ */ jsx(item.icone, { className: "w-6 h-6 text-amber-500" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: item.titulo }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-400", children: item.descricao })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-950", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Serviços do Centro Automotivo" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "Oferecemos todos os serviços que seu veículo precisa em um só lugar, no Portão em Curitiba." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: SERVICOS.map((servico, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: index * 0.05 },
          children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: servico.link,
              className: "block bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-amber-500/50 transition-all group h-full",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors", children: /* @__PURE__ */ jsx(servico.Icone, { className: "w-6 h-6 text-amber-500" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition-colors", children: servico.nome }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-500 text-sm", children: servico.descricao })
              ]
            }
          )
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Conheça Nossa Estrutura" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "Veja as instalações do nosso centro automotivo no Portão. Equipamentos modernos e ambiente organizado." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: GALERIA_IMAGENS.map((img, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: index * 0.05 },
          className: "relative aspect-square rounded-xl overflow-hidden cursor-pointer group",
          onClick: () => setImagemAberta(index),
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: img.src,
                alt: img.alt,
                title: img.title,
                width: 1200,
                height: 801,
                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: /* @__PURE__ */ jsx("p", { className: "text-white text-sm font-medium", children: img.title }) }) })
          ]
        },
        index
      )) })
    ] }) }),
    imagemAberta !== null && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4",
        onClick: () => setImagemAberta(null),
        children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "absolute top-4 right-4 text-white hover:text-amber-500 transition-colors",
              onClick: () => setImagemAberta(null),
              children: /* @__PURE__ */ jsx(X, { size: 32 })
            }
          ),
          /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: GALERIA_IMAGENS[imagemAberta].src,
              alt: GALERIA_IMAGENS[imagemAberta].alt,
              width: 1200,
              height: 801,
              className: "max-w-full max-h-[90vh] object-contain rounded-lg"
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-950", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6", children: [
              /* @__PURE__ */ jsx(Newspaper, { className: "w-4 h-4 text-amber-500" }),
              /* @__PURE__ */ jsx("span", { className: "text-amber-500 text-sm font-medium", children: "Dicas e Notícias" })
            ] }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Matérias e Conteúdos" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "Fique por dentro das novidades e dicas importantes para cuidar do seu veículo." })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "aspect-video overflow-hidden", children: /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  src: "/images/centro-automotivo/pneu-pirelli-scorpion.webp",
                  alt: "Quando trocar os pneus do carro",
                  width: 802,
                  height: 1200,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-amber-500 text-sm font-medium", children: "Manutenção" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mt-2 mb-3", children: "Quando Trocar os Pneus? 5 Sinais de Alerta" }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-sm mb-4", children: "Os pneus são itens de segurança fundamentais. Conheça os principais sinais que indicam a hora certa de trocar: desgaste do TWI, bolhas laterais, rachaduras, idade superior a 5 anos e vibrações anormais. Na Carplus fazemos inspeção gratuita." }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-neutral-500 text-sm", children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 14 }),
                  /* @__PURE__ */ jsx("span", { children: "Equipe Carplus" })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            className: "bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "aspect-video overflow-hidden", children: /* @__PURE__ */ jsx(
                "img",
                {
                  loading: "lazy",
                  src: "/images/centro-automotivo/mecanico-elevador.webp",
                  alt: "Importância da revisão preventiva",
                  width: 802,
                  height: 1200,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                }
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-amber-500 text-sm font-medium", children: "Revisão" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mt-2 mb-3", children: "Revisão Preventiva: Economize e Evite Surpresas" }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-sm mb-4", children: "A revisão preventiva é o melhor investimento para seu carro. Verificamos pneus, freios, suspensão, óleo, filtros e sistema elétrico. Problemas identificados cedo custam menos para resolver e evitam panes na estrada." }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-neutral-500 text-sm", children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 14 }),
                  /* @__PURE__ */ jsx("span", { children: "Equipe Carplus" })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.article,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.2 },
            className: "bg-gradient-to-br from-amber-500/10 to-neutral-900 rounded-2xl overflow-hidden border border-amber-500/20 group",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "aspect-video overflow-hidden relative", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    loading: "lazy",
                    src: "/images/centro-automotivo/mecanico-elevador.webp",
                    alt: "Matéria Gazeta do Povo sobre revisão de verão",
                    width: 1200,
                    height: 801,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full", children: "Gazeta do Povo" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-amber-500 text-sm font-medium", children: "Na Mídia" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mt-2 mb-3", children: "Pneus Lideram Panes no Verão, Alerta Carplus" }),
                /* @__PURE__ */ jsx("p", { className: "text-neutral-400 text-sm mb-4", children: "Em entrevista à Gazeta do Povo, nosso especialista Maurício Rocha, com 35 anos de experiência, alertou que pneus e freios lideram as falhas no verão. Calor e tráfego intenso elevam riscos. A matéria traz checklist essencial antes de viajar." }),
                /* @__PURE__ */ jsxs(
                  "a",
                  {
                    href: "https://www.gazetadopovo.com.br/conteudo-publicitario/carplus/pneus-panes-verao/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors",
                    children: [
                      "Ler matéria completa",
                      /* @__PURE__ */ jsx(ExternalLink, { size: 16 })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-neutral-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Perguntas Frequentes" }),
            /* @__PURE__ */ jsx("p", { className: "text-neutral-400 max-w-2xl mx-auto", children: "Tire suas dúvidas sobre o Centro Automotivo Carplus no Portão." })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto space-y-4", children: FAQ_ITEMS.map((item, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 10 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.05 },
          className: "bg-neutral-800/50 rounded-xl border border-neutral-700/50 overflow-hidden",
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "w-full flex items-center justify-between p-6 text-left",
                onClick: () => setFaqAberto(faqAberto === index ? null : index),
                children: [
                  /* @__PURE__ */ jsx("span", { className: "text-white font-medium pr-4", children: item.pergunta }),
                  /* @__PURE__ */ jsx(
                    ChevronDown,
                    {
                      className: `w-5 h-5 text-amber-500 transition-transform flex-shrink-0 ${faqAberto === index ? "rotate-180" : ""}`
                    }
                  )
                ]
              }
            ),
            faqAberto === index && /* @__PURE__ */ jsx("div", { className: "px-6 pb-6", children: /* @__PURE__ */ jsx("p", { className: "text-neutral-400 leading-relaxed", children: item.resposta }) })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-amber-500 to-amber-600", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-black mb-4", children: "Agende seu Serviço no Centro Automotivo Carplus" }),
          /* @__PURE__ */ jsx("p", { className: "text-black/70 max-w-2xl mx-auto mb-8 text-lg", children: "Estamos no bairro Portão, prontos para atender você com qualidade e confiança. Entre em contato e faça seu orçamento sem compromisso." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "https://wa.me/554130827282",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-900 text-white font-bold px-8 py-4 rounded-xl transition-all",
                children: [
                  /* @__PURE__ */ jsx(Phone, { size: 20 }),
                  "(41) 3082-7282"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link,
              {
                to: "/como-chegar",
                className: "inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-black font-bold px-8 py-4 rounded-xl transition-all",
                children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 20 }),
                  "Como Chegar"
                ]
              }
            )
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  CentroAutomotivoPortao as default
};
