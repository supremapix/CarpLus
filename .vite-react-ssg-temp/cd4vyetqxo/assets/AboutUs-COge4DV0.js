import { jsxs, jsx } from "react/jsx-runtime";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { motion, AnimatePresence } from "motion/react";
import { Star, Calendar, Users, Award, Wrench, Shield, Heart, Cog, UsersRound, ArrowRight, Phone, MessageSquare } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
const GALLERY_IMAGES = [
  { src: "/images/galeria/fachada-fullservice.webp", alt: "Fachada Carplus Pneus - Oficina Mecanica Full Service" },
  { src: "/images/galeria/proprietario-pneu.webp", alt: "Proprietario Carplus Pneus" },
  { src: "/images/galeria/showroom.webp", alt: "Showroom Carplus Pneus" },
  { src: "/images/galeria/sala-espera.webp", alt: "Sala de Espera Carplus Pneus" },
  { src: "/images/galeria/atendimento-cliente.webp", alt: "Atendimento ao cliente na Carplus Pneus" },
  { src: "/images/galeria/mecanico-carplus.webp", alt: "Mecanico Carplus trabalhando" },
  { src: "/images/galeria/jeep-compass.webp", alt: "Jeep Compass no elevador" },
  { src: "/images/galeria/alinhamento-jeep.webp", alt: "Servico de alinhamento" },
  { src: "/images/galeria/troca-pneu.webp", alt: "Troca de pneu" },
  { src: "/images/galeria/mecanico-motor.webp", alt: "Mecanico trabalhando no motor" },
  { src: "/images/galeria/oficina-carros.webp", alt: "Oficina com carros nos elevadores" },
  { src: "/images/galeria/montagem-pneu.webp", alt: "Montagem de pneu" },
  { src: "/images/galeria/rodas-pretas.webp", alt: "Rodas esportivas" },
  { src: "/images/galeria/mecanicos-trabalho.webp", alt: "Mecanicos trabalhando na Carplus Pneus" },
  { src: "/images/galeria/display-pneus.webp", alt: "Display de pneus Pirelli" },
  { src: "/images/galeria/escritorio.webp", alt: "Escritorio Carplus Pneus" },
  { src: "/images/galeria/fachada-logo.webp", alt: "Fachada com logo Carplus Pneus" },
  { src: "/images/galeria/caminhonete.webp", alt: "Caminhonete Carplus Pneus" },
  { src: "/images/galeria/loja-de-pneus-portao-curitiba-pirelli.png", alt: "Loja de pneus Carplus no Portão em Curitiba - mecânico em atendimento" }
];
const AUTO_PLAY_INTERVAL = 4e3;
function AboutGallery() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const goToNext = useCallback(() => {
    setSelectedIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  }, []);
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);
  const handleThumbnailClick = (index) => {
    setSelectedIndex(index);
    setIsPaused(true);
  };
  const handleMainImageClick = () => {
    setIsPaused((prev) => !prev);
  };
  return /* @__PURE__ */ jsxs("section", { className: "max-w-6xl mx-auto px-4 mb-12 md:mb-16", children: [
    /* @__PURE__ */ jsxs(
      motion.h2,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        className: "text-2xl md:text-3xl font-bold text-white text-center mb-8",
        children: [
          "Conheca Nossa ",
          /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Estrutura" })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-4", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.5 },
          className: "relative flex-1 aspect-[16/10] lg:aspect-[16/9] bg-[#1a1a1a] rounded-xl overflow-hidden cursor-pointer group",
          onClick: handleMainImageClick,
          children: [
            /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
              motion.img,
              {
                src: GALLERY_IMAGES[selectedIndex].src,
                alt: GALLERY_IMAGES[selectedIndex].alt,
                width: 1200,
                height: 801,
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.3 },
                className: "w-full h-full object-cover"
              },
              selectedIndex
            ) }),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white/80", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: `w-2 h-2 rounded-full ${isPaused ? "bg-amber-500" : "bg-green-500 animate-pulse"}`
                }
              ),
              isPaused ? "Pausado - clique para continuar" : "Automatico"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs text-white/80", children: [
              selectedIndex + 1,
              " / ",
              GALLERY_IMAGES.length
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "lg:w-32 xl:w-40 flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto lg:max-h-[400px] xl:max-h-[450px] pb-2 lg:pb-0 lg:pr-2 scrollbar-thin scrollbar-thumb-amber-500/50 scrollbar-track-transparent", children: GALLERY_IMAGES.map((image, index) => /* @__PURE__ */ jsxs(
        motion.button,
        {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.3, delay: index * 0.03 },
          onClick: () => handleThumbnailClick(index),
          className: `relative flex-shrink-0 w-20 h-14 lg:w-full lg:h-20 xl:h-24 rounded-lg overflow-hidden transition-all duration-200 ${selectedIndex === index ? "ring-2 ring-amber-500 ring-offset-2 ring-offset-[#0d0d0d]" : "opacity-60 hover:opacity-100"}`,
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                loading: "lazy",
                src: image.src,
                alt: image.alt,
                width: 1200,
                height: 801,
                className: "w-full h-full object-cover"
              }
            ),
            selectedIndex === index && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-amber-500/20" })
          ]
        },
        index
      )) })
    ] })
  ] });
}
function AboutUs() {
  const __seo = useSEO({
    title: "Quem Somos | Carplus Pneus e Oficina em Curitiba desde 2014",
    description: "Conheça a Carplus Pneus: referência em pneus e serviços automotivos no Portão, Curitiba, desde 2014. Equipe especializada, estrutura moderna e atendimento transparente.",
    canonical: "https://www.carpluspneuseoficina.com.br/quem-somos",
    ogImage: "https://www.carpluspneuseoficina.com.br/og-carplus.webp",
    keywords: ["quem somos Carplus", "oficina Curitiba Portão", "centro automotivo Curitiba", "história Carplus Pneus"]
  });
  return /* @__PURE__ */ jsxs("div", { className: "bg-dark min-h-screen", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { className: "pt-[120px] pb-16", children: [
      /* @__PURE__ */ jsxs("section", { className: "max-w-5xl mx-auto px-4 text-center mb-12 md:mb-16", children: [
        /* @__PURE__ */ jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 },
            className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-normal text-white leading-tight mb-6",
            children: [
              "Quem ",
              /* @__PURE__ */ jsx("span", { className: "text-amber-500", children: "Somos" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.1 },
            className: "text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-6",
            children: "Conheca a historia da Carplus Pneus, referencia em servicos automotivos em Curitiba desde 2014."
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, delay: 0.2 },
            className: "inline-flex items-center gap-3 bg-[#1a1a1a] border border-amber-500/30 rounded-full px-6 py-3",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-amber-500 fill-amber-500" }, i)) }),
              /* @__PURE__ */ jsx("span", { className: "text-white font-bold", children: "+215 avaliacoes 5 estrelas no Google" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(AboutGallery, {}),
      /* @__PURE__ */ jsx("section", { className: "bg-[#1a1a1a] border-y border-[#2a2a2a] py-8 mb-12 md:mb-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "w-8 h-8 text-amber-500" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-black text-white", children: "2014" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-400", children: "Ano de Fundacao" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-amber-500" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-black text-white", children: "10.000+" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-400", children: "Clientes Atendidos" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 text-amber-500" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-black text-white", children: "215+" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-400", children: "Avaliacoes 5 Estrelas" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsx(Wrench, { className: "w-8 h-8 text-amber-500" }),
          /* @__PURE__ */ jsx("p", { className: "text-2xl md:text-3xl font-black text-white", children: "Full" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm md:text-base text-gray-400", children: "Service Completo" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "max-w-4xl mx-auto px-4 mb-12 md:mb-16", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.2 },
          className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 md:p-10",
          children: /* @__PURE__ */ jsxs("div", { className: "prose prose-lg md:prose-xl prose-invert max-w-none", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6", children: [
              "A ",
              /* @__PURE__ */ jsx("strong", { className: "text-amber-500", children: "Carplus Pneus" }),
              " em Curitiba nasceu em novembro de 2014 com um proposito claro: oferecer servicos automotivos de alta qualidade, unindo confianca, tecnologia e atendimento transparente. Desde o inicio, nosso compromisso e garantir que cada cliente tenha seguranca e tranquilidade em cada quilometro rodado."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6", children: [
              "Ao longo dos anos, nos consolidamos como referencia em ",
              /* @__PURE__ */ jsx("strong", { className: "text-white", children: "centro automotivo em Curitiba" }),
              " e regiao, sempre guiados por valores solidos como respeito, comprometimento e atencao aos detalhes. Contamos com uma equipe tecnica especializada, estrutura moderna e equipamentos de ultima geracao para atender veiculos nacionais e importados com excelencia."
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6", children: "Nossa oficina foi planejada para proporcionar conforto, agilidade e eficiencia, utilizando produtos e marcas reconhecidas no mercado automotivo. Seguimos rigorosos padroes de manutencao, revisao e inspecao, garantindo mais desempenho, durabilidade e seguranca para o seu veiculo." }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6", children: [
              "A ",
              /* @__PURE__ */ jsx("strong", { className: "text-amber-500", children: "Carplus Pneus Curitiba" }),
              " vai alem de uma oficina mecanica: somos um verdadeiro parceiro de estrada. Atendemos clientes de toda Curitiba e regiao metropolitana, sempre prontos para entender suas necessidades e oferecer as melhores solucoes em pneus, manutencao e servicos automotivos."
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed", children: [
              "Se voce busca ",
              /* @__PURE__ */ jsx("strong", { className: "text-white", children: "qualidade, confianca e atendimento profissional" }),
              " em Curitiba, a Carplus Pneus e a escolha certa para cuidar do seu carro."
            ] })
          ] })
        }
      ) }),
      /* @__PURE__ */ jsx("section", { className: "max-w-5xl mx-auto px-4 mb-12 md:mb-16", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.6, delay: 0.3 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-amber-500/10 rounded-3xl blur-3xl" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                loading: "lazy",
                src: "/images/loja/proposito-carplus.webp",
                alt: "Proposito e Valores da Carplus Pneus - Valorizacao de Pessoas, Honestidade, Respeito e Colaboracao, Transparencia, Excelencia, Compromisso",
                width: 800,
                height: 1200,
                className: "relative w-full h-auto rounded-2xl md:rounded-3xl shadow-2xl border border-[#2a2a2a]"
              }
            )
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-[#0d0d0d]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4", children: [
                "Por que a Carplus e diferente",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "de qualquer outra oficina?" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-amber-500 font-medium", children: "A unica oficina onde voce entra preocupado e sai aliviado." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-amber-500/50 transition-colors",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "w-7 h-7 text-amber-500" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: "Orcamento aprovado por voce" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed", children: "Nenhum trabalho comeca sem sua aprovacao. Sem surpresas na nota. Sem cobrancas escondidas." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.2 },
              className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-amber-500/50 transition-colors",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Star, { className: "w-7 h-7 text-amber-500" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: "215 clientes nao mentem" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed", children: "Mais de 215 avaliacoes 5 estrelas no Google. Cada uma e a historia de um cliente que saiu satisfeito." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.3 },
              className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-amber-500/50 transition-colors",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Heart, { className: "w-7 h-7 text-amber-500" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: "Area kids + cafe enquanto voce espera" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed", children: "Traga seu filho. Tome um cafe. A gente cuida do seu carro enquanto voce relaxa. Esperar aqui e diferente." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.4 },
              className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-amber-500/50 transition-colors",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(Cog, { className: "w-7 h-7 text-amber-500" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: "Especialistas em recuperacao de rodas" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed", children: "Roda amassada, riscada ou oxidada? Restauramos sem necessidade de troca. Veja o antes e depois." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.5 },
              className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-amber-500/50 transition-colors md:col-span-2 lg:col-span-1",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(UsersRound, { className: "w-7 h-7 text-amber-500" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3", children: "Time que voce aprende a confiar" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed", children: "Vinicius, Matheus e Jocimar sao citados pelos clientes por nome. Nao e sorte — e padrao." })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-dark", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4", children: "O que nossos clientes dizem" }),
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 text-amber-500 text-xl font-medium", children: [
                /* @__PURE__ */ jsx("span", { children: "215 avaliacoes" }),
                /* @__PURE__ */ jsx("div", { className: "flex", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-amber-500 fill-amber-500" }, i)) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-amber-500 fill-amber-500" }, i)) }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed mb-6", children: '"Fui pela primeira vez com medo de levar gato por lebre. O Vinicius me explicou tudo antes de comecar, aprovei o orcamento e nao tive nenhuma surpresa na nota. Virei cliente."' }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold text-sm", children: "R" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "font-bold text-white", children: "Ricardo M." }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Cliente desde 2022" })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.2 },
              className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-amber-500 fill-amber-500" }, i)) }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed mb-6", children: '"Levei para recuperar as rodas e fiquei impressionada com o resultado. O Matheus fez um trabalho impecavel. O antes e depois foi absurdo. Vale muito a pena."' }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold text-sm", children: "F" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "font-bold text-white", children: "Fernanda K." }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Cliente desde 2021" })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.3 },
              className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6",
              children: [
                /* @__PURE__ */ jsx("div", { className: "flex mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { className: "w-5 h-5 text-amber-500 fill-amber-500" }, i)) }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed mb-6", children: '"Fui com minha filha e ficamos na area kids enquanto esperavamos. O Jocimar foi super atencioso desde a chegada. Nao sabia que ir a oficina podia ser assim."' }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-bold text-sm", children: "C" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "font-bold text-white", children: "Camila R." }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Cliente desde 2023" })
                  ] })
                ] })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-[#0d0d0d]", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4", children: [
                "Transformacao Carplus",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "Recuperacao de Rodas" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-2xl mx-auto", children: "Roda amassada ou riscada nao e sinonimo de troca. Veja o que fazemos por voce." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-10", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              className: "relative group overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-amber-500/50 transition-colors",
              children: [
                /* @__PURE__ */ jsx("div", { className: "aspect-[3/4] overflow-hidden", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    loading: "lazy",
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oxidacao%20severa%20%E2%86%92%20pintura%20eletrostatica-x6lyP8nFMo2iNxOXrTbBQR8kGcHI9t.png",
                    alt: "Pintura de rodas profissional na Carplus Curitiba - Tecnico especializado realizando pintura eletrostatica em roda de liga leve",
                    width: 900,
                    height: 1200,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 text-center", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: "Oxidacao severa → pintura eletrostatica" }),
                  /* @__PURE__ */ jsx("p", { className: "text-amber-500 text-sm", children: "Acabamento profissional de fabrica" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.2 },
              className: "relative group overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-amber-500/50 transition-colors",
              children: [
                /* @__PURE__ */ jsx("div", { className: "aspect-[3/4] overflow-hidden", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    loading: "lazy",
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roda%20amassada%20%E2%86%92%20restaurada%20em%202h-dFTVy6dSoaU0u7xdkPprLwtEJhSajO.png",
                    alt: "Rodas restauradas na Carplus Curitiba - Jogo de rodas pretas brilhantes recuperadas com acabamento impecavel",
                    width: 900,
                    height: 1200,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 text-center", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: "Roda amassada → restaurada em 2h" }),
                  /* @__PURE__ */ jsx("p", { className: "text-amber-500 text-sm", children: "Sem troca necessaria" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.3 },
              className: "relative group overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-amber-500/50 transition-colors",
              children: [
                /* @__PURE__ */ jsx("div", { className: "aspect-[3/4] overflow-hidden", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    loading: "lazy",
                    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Risco%20profundo%20%E2%86%92%20recuperacao%20total-U6WANiatYVSBrd9DVnwKajZ3hiA3mk.png",
                    alt: "Troca de pneus na Carplus Curitiba Portao - Cliente satisfeito com roda restaurada e pneu novo",
                    width: 900,
                    height: 1200,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  }
                ) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 text-center", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-white font-medium", children: "Risco profundo → recuperacao total" }),
                  /* @__PURE__ */ jsx("p", { className: "text-amber-500 text-sm", children: "Liga leve restaurada" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://wa.me/554130827282?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20recupera%C3%A7%C3%A3o%20de%20rodas.",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 bg-amber-500 text-black font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors text-lg",
            children: [
              "Quero recuperar minhas rodas",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 md:py-20 bg-dark", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-center mb-12",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4", children: "Conheca quem cuida do seu carro" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-400 max-w-2xl mx-auto", children: "Na Carplus, o atendimento tem nome e rosto. E isso que faz a diferenca." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1 },
              className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 text-center",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-black text-3xl", children: "V" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1", children: "Vinicius" }),
                /* @__PURE__ */ jsx("p", { className: "text-amber-500 text-sm font-medium mb-4", children: "Consultor de Atendimento" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed", children: "Vinicius e quem explica o que vai ser feito, alinha expectativas e garante que voce entenda cada etapa. Clientes pedem por ele pelo nome." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.2 },
              className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 text-center",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-black text-3xl", children: "M" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1", children: "Matheus" }),
                /* @__PURE__ */ jsx("p", { className: "text-amber-500 text-sm font-medium mb-4", children: "Especialista Tecnico em Rodas" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed", children: "Matheus e o responsavel pela recuperacao e pintura de rodas. Precisao tecnica que clientes reconhecem e recomendam." })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.3 },
              className: "bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 text-center",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx("span", { className: "text-amber-500 font-black text-3xl", children: "J" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-1", children: "Jocimar" }),
                /* @__PURE__ */ jsx("p", { className: "text-amber-500 text-sm font-medium mb-4", children: "Atendimento e Recepcao" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-400 leading-relaxed", children: "Jocimar e quem recebe voce com atencao e vai alem do esperado. Clientes dizem que se sentiram bem-vindos desde o primeiro contato." })
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "bg-amber-500 py-12 md:py-16 text-center px-4", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-black text-3xl md:text-4xl font-black mb-3", children: "Seu carro merece a Carplus." }),
            /* @__PURE__ */ jsx("p", { className: "text-black/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto", children: "Agende agora e descubra por que 215 clientes nos deram 5 estrelas." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "https://wa.me/554130827282?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o.",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center gap-2 bg-black text-amber-500 font-bold px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors text-lg",
                  children: [
                    /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5" }),
                    "Agendar pelo WhatsApp"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Link,
                {
                  to: "/servicos",
                  className: "inline-flex items-center gap-2 border-2 border-black text-black font-semibold px-8 py-4 rounded-lg hover:bg-black/10 transition-colors text-lg",
                  children: [
                    "Ver nossos servicos",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
                  ]
                }
              )
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "https://wa.me/554130827282?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o.",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Fale conosco pelo WhatsApp",
        className: "fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform",
        children: /* @__PURE__ */ jsx(MessageSquare, { className: "w-6 h-6 text-white", fill: "white" })
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  AboutUs as default
};
