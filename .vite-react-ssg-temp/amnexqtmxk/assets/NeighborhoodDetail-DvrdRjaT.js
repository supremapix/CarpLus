import { jsx, jsxs } from "react/jsx-runtime";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { NEIGHBORHOODS, TIRES } from "./tire-catalog-f1Gw3RQz.js";
import { ArrowLeft, Clock, MessageSquare, Navigation, Phone, Wrench, CheckCircle, Car, MapPin, Shield, CreditCard, Award, Star, ChevronRight, ChevronDown } from "lucide-react";
import { N as Navbar, F as Footer } from "./Footer-DkaDSj4_.js";
import { motion, AnimatePresence } from "motion/react";
import { u as useSEO } from "./useSEO-DsO0176p.js";
import { isIndexableNeighborhood } from "./indexableNeighborhoods-DE_rAs70.js";
import { g as getGaleriaSchema, S as ServicosGaleria } from "./ServicosGaleria-n-n04Zde.js";
import "./services-SlP8WPLZ.js";
import "react-helmet-async";
function getFaqBairro(nome, tempo, via) {
  return [
    {
      question: `Tem loja de pneus perto do ${nome}?`,
      answer: `Sim! A Carplus Centro Automotivo fica a apenas ${tempo} de carro do ${nome}, na Av. Arthur da Silva Bernardes, 1323 – Portão, Curitiba. Vendemos pneus Pirelli, Michelin, Goodyear, Continental, Firestone, Bridgestone e Yokohama com montagem e balanceamento inclusos no preço.`
    },
    {
      question: `Como chegar do ${nome} até a Carplus no Portão?`,
      answer: `Do ${nome} até a Carplus são aproximadamente ${tempo} de carro via ${via}. Não precisa agendar, pode vir direto! Horário de funcionamento: Segunda a Sexta das 8h às 18h e Sábados das 8h às 12h. Estacionamento próprio gratuito.`
    },
    {
      question: `A Carplus atende moradores do ${nome}?`,
      answer: `Com certeza! Recebemos clientes do ${nome} com frequência. A distância é pequena (${tempo}) e o custo-benefício compensa muito a viagem até o Portão — pneus das melhores marcas, parcelamento em até 10x sem juros e serviço full service completo.`
    },
    {
      question: `Qual oficina mecânica atende quem mora no ${nome}?`,
      answer: `A Carplus Centro Automotivo é a oficina full service mais recomendada para quem mora no ${nome}. Realizamos alinhamento 3D computadorizado, balanceamento de rodas, troca de óleo (sintético e mineral), revisão completa, suspensão, freios, ar-condicionado automotivo e diagnóstico eletrônico com scanner — tudo em um só lugar, a ${tempo} do ${nome}.`
    },
    {
      question: `Vale a pena sair do ${nome} para trocar pneu na Carplus?`,
      answer: `Sim, e muitos clientes do ${nome} confirmam nas nossas avaliações (4,9 estrelas no Google com 850+ avaliações). Com apenas ${tempo} de deslocamento, você tem acesso às melhores marcas de pneus, serviço profissional com garantia de fábrica e parcelamento em até 10x sem juros. A economia compensa!`
    },
    {
      question: `A Carplus faz alinhamento e balanceamento para quem vem do ${nome}?`,
      answer: `Sim! Nosso equipamento de alinhamento é computadorizado 3D, o mais preciso do mercado atualmente. Atendemos todos os modelos de carros (nacionais e importados) e fazemos balanceamento de rodas de todos os aros (13" a 22"). Clientes do ${nome} podem vir sem agendamento ou ligar antes: (41) 3082-7282.`
    },
    {
      question: `Quanto custa trocar pneu vindo do ${nome}?`,
      answer: `Os preços variam conforme marca e medida. Trabalhamos com opções a partir de R$ 269,00 para pneus econômicos e parcelamos em até 10x sem juros. Moradores do ${nome} podem enviar uma mensagem no WhatsApp (41) 3082-7282 com a medida do seu pneu (ex: 185/65R15) para receber um orçamento rápido e personalizado.`
    },
    {
      question: `Quais marcas de pneus a Carplus tem para moradores do ${nome}?`,
      answer: `Trabalhamos com as principais marcas do mercado: Pirelli (P400 Evo, P7, P Zero, Scorpion), Michelin (Energy XM2, Primacy 4, Pilot Sport), Goodyear (Direction, EfficientGrip), Continental (ComfortContact, SportContact), Firestone, Bridgestone e Yokohama. Todas com garantia de fábrica e instalação profissional inclusa.`
    },
    {
      question: `A Carplus aceita cartão e parcela para clientes do ${nome}?`,
      answer: `Sim! Aceitamos todos os cartões de crédito e débito. Parcelamos em até 10x sem juros no cartão. Também aceitamos Pix, dinheiro e transferência bancária. Moradores do ${nome} podem aproveitar as mesmas condições de pagamento.`
    },
    {
      question: `Preciso agendar para ir do ${nome} à Carplus?`,
      answer: `Não é necessário agendar! Trabalhamos com atendimento por ordem de chegada. No entanto, se preferir garantir prioridade, pode agendar pelo WhatsApp (41) 3082-7282. Horário: Seg-Sex 8h às 18h, Sábado 8h às 12h. O trajeto do ${nome} é de aproximadamente ${tempo}.`
    }
  ];
}
const faqExtra = {
  "portao": [
    {
      question: "A Carplus fica no Portão mesmo?",
      answer: "Sim! Estamos localizados no coração do Portão, na Av. Arthur da Silva Bernardes, 1323, a poucos metros do Shopping Palladium. Somos a principal loja de pneus do bairro há mais de 10 anos."
    },
    {
      question: "Tem oficina perto do Shopping Palladium?",
      answer: "A Carplus Centro Automotivo fica a apenas 3 minutos do Shopping Palladium! Você pode trazer o carro para revisão ou troca de pneus e aproveitar para fazer compras enquanto esperamos."
    }
  ],
  "agua-verde": [
    {
      question: "Qual o caminho do Água Verde até a Carplus?",
      answer: "Do Água Verde, siga pela Av. República Argentina até a Av. Arthur da Silva Bernardes. São apenas 5 minutos de carro sem trânsito intenso. Fácil estacionamento na loja."
    },
    {
      question: "A Carplus atende carros executivos do Água Verde?",
      answer: "Sim! Atendemos veículos executivos e de luxo. Temos pneus premium como Pirelli P Zero, Michelin Pilot Sport 4 e Continental SportContact para BMW, Mercedes, Audi e outros importados."
    }
  ],
  "campo-comprido": [
    {
      question: "A Carplus atende SUVs e picapes do Campo Comprido?",
      answer: 'Sim! Somos especialistas em pneus para SUVs e picapes. Trabalhamos com todos os aros (18", 19", 20", 22") e temos em estoque Pirelli Scorpion, Michelin CrossClimate, Goodyear Wrangler e outras linhas específicas para veículos altos.'
    },
    {
      question: "Qual pneu é melhor para SUV no Campo Comprido?",
      answer: "Para SUVs do Campo Comprido, recomendamos o Pirelli Scorpion (excelente durabilidade), Michelin CrossClimate (bom em todas as condições) ou Continental CrossContact (conforto e silêncio). Venha até a Carplus para uma avaliação personalizada do seu veículo."
    }
  ],
  "cic": [
    {
      question: "A Carplus atende frotas de empresas do CIC?",
      answer: "Sim! Temos condições especiais para frotas empresariais do CIC: contratos de manutenção preventiva, troca de pneus em quantidade, revisões periódicas com nota fiscal e atendimento prioritário. Contato comercial: (41) 3082-7282."
    },
    {
      question: "A Carplus tem pneus para vans e utilitários do CIC?",
      answer: "Sim! Trabalhamos com pneus para vans (Ducato, Master, Sprinter) e utilitários leves (HR, Daily, Bongo). Marcas como Pirelli Chrono, Michelin Agilis e Goodyear Cargo para veículos de trabalho."
    }
  ],
  "batel": [
    {
      question: "Para carros de luxo do Batel, quais pneus premium a Carplus tem?",
      answer: "Para veículos premium do Batel, trabalhamos com as melhores linhas: Pirelli P Zero (Ferrari, Lamborghini, Porsche), Michelin Pilot Sport 4 (BMW, Mercedes), Continental SportContact 5 (Audi) e versões Run Flat para quem precisa."
    },
    {
      question: "A Carplus atende BMW e Mercedes do Batel?",
      answer: "Sim! Somos especializados em pneus para veículos importados. Temos pneus Run Flat, perfil baixo e alta performance em estoque. Nossos técnicos são treinados para atender BMW, Mercedes, Audi, Porsche e outras marcas premium."
    }
  ],
  "centro": [
    {
      question: "Vale a pena sair do Centro de Curitiba para ir à Carplus?",
      answer: "Com certeza! Em 12 minutos você chega à Carplus no Portão e encontra: estacionamento gratuito (ao contrário do Centro), atendimento sem fila, preços de atacado e parcelamento em até 10x. A economia compensa o deslocamento."
    }
  ],
  "colombo": [
    {
      question: "Vale a pena vir de Colombo até a Carplus?",
      answer: "Sim! Muitos clientes de Colombo escolhem a Carplus pela variedade de marcas, qualidade do serviço e preços de atacado. São cerca de 30 minutos pela PR-417. A economia em pneus compensa o deslocamento, especialmente na troca do jogo completo."
    },
    {
      question: "Tem loja de pneus em Colombo que seja boa?",
      answer: "A Carplus no Portão (Curitiba) é a escolha de muitos moradores de Colombo que buscam qualidade. Apesar da distância de 30 minutos, os preços de atacado e a variedade de marcas compensam. Parcelamos em até 10x sem juros."
    }
  ],
  "sao-jose-dos-pinhais": [
    {
      question: "A Carplus atende quem vem de São José dos Pinhais?",
      answer: "Sim! A rota mais comum de São José dos Pinhais é pela BR-376 ou Av. das Torres → contorno sul → acesso ao Portão. Cerca de 30 minutos. Com a variedade de pneus e serviços full service, muitos clientes de SJP preferem a Carplus."
    },
    {
      question: "Tem loja de pneus boa perto do aeroporto de Curitiba?",
      answer: "A Carplus fica a cerca de 30 minutos do Aeroporto Afonso Pena. Moradores de São José dos Pinhais e região do aeroporto encontram na Carplus pneus das melhores marcas com preços de atacado."
    }
  ],
  "pinhais": [
    {
      question: "De Pinhais até a Carplus demora quanto tempo?",
      answer: "De Pinhais até a Carplus são aproximadamente 22 minutos de carro pela Rodovia Deputado João Leopoldo Jacomel. O trajeto é rápido e direto, e a economia em pneus compensa o deslocamento."
    }
  ],
  "araucaria": [
    {
      question: "A Carplus atende empresas de Araucária?",
      answer: "Sim! Araucária tem muitas indústrias e frotas. A Carplus oferece condições especiais para empresas: contratos de manutenção, atendimento prioritário, nota fiscal e pneus para vans/utilitários. Contato: (41) 3082-7282."
    }
  ],
  "santa-felicidade": [
    {
      question: "De Santa Felicidade, qual o melhor caminho para a Carplus?",
      answer: "De Santa Felicidade, siga pela Av. Manoel Ribas sentido centro, depois acesse a Av. República Argentina até o Portão. São aproximadamente 20 minutos. Aproveite para almoçar nos restaurantes italianos e depois visite a Carplus!"
    }
  ],
  "capao-raso": [
    {
      question: "A Carplus fica perto do Terminal Capão Raso?",
      answer: "Sim! A Carplus fica a cerca de 10 minutos do Terminal Capão Raso, no bairro Portão. Acesso fácil pela Av. Winston Churchill e depois Av. República Argentina."
    }
  ],
  "cajuru": [
    {
      question: "Do Cajuru, como chegar na Carplus?",
      answer: "Do Cajuru, siga pela Av. Prefeito Mauricio Fruet até a Linha Verde, depois acesse a saída para o Portão. São aproximadamente 20 minutos. O trajeto é tranquilo e a economia em pneus vale o deslocamento."
    }
  ],
  "uberaba": [
    {
      question: "A Carplus atende moradores do Uberaba?",
      answer: "Sim! Do Uberaba, o acesso é fácil pela Av. das Torres. São aproximadamente 18 minutos até a Carplus no Portão. Muitos moradores do Uberaba já são clientes fiéis pela qualidade e preço justo."
    }
  ],
  "bacacheri": [
    {
      question: "Tem oficina boa perto do aeroporto do Bacacheri?",
      answer: "A Carplus fica a cerca de 20 minutos do Bacacheri. Apesar de não ser no bairro, a qualidade do serviço e os preços de atacado atraem muitos clientes da região norte de Curitiba."
    }
  ],
  "boa-vista": [
    {
      question: "De Boa Vista, vale a pena ir até a Carplus?",
      answer: "Sim! De Boa Vista até a Carplus são aproximadamente 22 minutos. A variedade de pneus e o atendimento profissional compensam o deslocamento. Parcelamos em até 10x sem juros."
    }
  ],
  "santa-candida": [
    {
      question: "A Carplus atende quem vem de Santa Cândida?",
      answer: "Sim! De Santa Cândida, siga pela Av. Paraná sentido centro, depois acesse a República Argentina. São aproximadamente 25 minutos. Muitos moradores de Santa Cândida e região norte já são clientes."
    }
  ],
  "jardim-botanico": [
    {
      question: "Do Jardim Botânico até a Carplus é longe?",
      answer: "Não! Do Jardim Botânico até a Carplus são aproximadamente 15 minutos de carro. Siga pela Av. Pref. Omar Sabbag até a Sete de Setembro, depois acesse a República Argentina."
    }
  ],
  "bigorrilho": [
    {
      question: "A Carplus tem pneus para carros importados do Bigorrilho?",
      answer: "Sim! Atendemos veículos importados com pneus premium: Pirelli P Zero, Michelin Pilot Sport, Continental SportContact. O Bigorrilho fica a apenas 10 minutos da Carplus."
    }
  ],
  "merces": [
    {
      question: "Das Mercês, como chegar na Carplus?",
      answer: "Das Mercês, siga pela Rua Manoel Ribas até a Av. Iguaçu, depois acesse a República Argentina. São aproximadamente 12 minutos até a Carplus no Portão."
    }
  ],
  "reboucas": [
    {
      question: "Do Rebouças até a Carplus demora muito?",
      answer: "Não! Do Rebouças até a Carplus são apenas 10 minutos de carro. Siga pela Rua Westphalen até a Sete de Setembro, depois acesse a República Argentina."
    }
  ],
  "novo-mundo": [
    {
      question: "Tem loja de pneus perto do Novo Mundo?",
      answer: "A Carplus fica a apenas 7 minutos do Novo Mundo! Siga pela Av. Brasília em direção ao Portão. Somos a opção mais próxima com preços de atacado e serviço profissional."
    }
  ],
  "fazendinha": [
    {
      question: "Da Fazendinha, como chegar na Carplus?",
      answer: "Da Fazendinha, siga pela Rua João Dembinski até a Av. Winston Churchill, depois acesse a República Argentina. São aproximadamente 10 minutos até a Carplus."
    }
  ],
  "pinheirinho": [
    {
      question: "Do Pinheirinho até a Carplus é longe?",
      answer: "Não! Do Pinheirinho, siga pela Linha Verde sentido centro até a saída para o Portão. São aproximadamente 15 minutos. O trajeto é rápido e sem semáforos."
    }
  ],
  "guaira": [
    {
      question: "A Carplus fica perto do Guaíra?",
      answer: "Sim! O Guaíra fica a apenas 5 minutos da Carplus. Somos vizinhos! Siga pela Rua Kennedy até a República Argentina e em poucos metros estará na nossa loja."
    }
  ],
  "parolin": [
    {
      question: "Do Parolin, qual o caminho para a Carplus?",
      answer: "Do Parolin, siga pela Av. Getúlio Vargas em direção ao Portão. A Carplus fica na Av. Arthur da Silva Bernardes. São aproximadamente 8 minutos de carro."
    }
  ],
  "campo-largo": [
    {
      question: "Vale a pena vir de Campo Largo para trocar pneu?",
      answer: "Sim! Apesar da distância de 35 minutos pela BR-277, os preços de atacado da Carplus compensam. Muitos clientes de Campo Largo vêm especialmente para trocar o jogo completo de pneus."
    }
  ],
  "almirante-tamandare": [
    {
      question: "A Carplus atende Almirante Tamandaré?",
      answer: "Sim! De Almirante Tamandaré, siga pela Rodovia dos Minérios até a BR-476, depois acesse Curitiba. São aproximadamente 25 minutos. A economia em pneus compensa o trajeto."
    }
  ],
  "fazenda-rio-grande": [
    {
      question: "De Fazenda Rio Grande até a Carplus demora muito?",
      answer: "São aproximadamente 35 minutos pela BR-116 até o contorno sul e depois acesso ao Portão. Muitos clientes de Fazenda Rio Grande escolhem a Carplus pelos preços de atacado."
    }
  ]
};
function getFaqCompleto(nome, slug, tempo, via) {
  const gerais = getFaqBairro(nome, tempo, via);
  const extras = faqExtra[slug] || [];
  return [...gerais, ...extras];
}
const NEIGHBORHOOD_SEO_CONTENT = {
  // ══════════════════════════════════════
  // ZONA SUL - MUITO PRÓXIMOS (até 10 min)
  // ══════════════════════════════════════
  "portao": {
    slug: "portao",
    name: "Portão",
    metaTitle: "Loja de Pneus no Portão Curitiba | Carplus Centro Automotivo - 2 min",
    metaDescription: "Loja de pneus no Portão, Curitiba. Pneus Pirelli, Michelin, Goodyear com montagem inclusa. Alinhamento 3D, balanceamento e troca de óleo. Estamos na sua porta!",
    h1: "Pneus e Oficina no Portão",
    heroSubtitle: "A melhor loja de pneus do seu bairro, a apenas 2 minutos de você!",
    introText: "Moradores do Portão têm a vantagem de contar com a Carplus Centro Automotivo literalmente a poucos passos de casa. Localizada na Av. Arthur da Silva Bernardes, 1323, somos referência em pneus e serviços automotivos na região sul de Curitiba há mais de 10 anos.",
    localContext: "O Portão é um dos bairros mais tradicionais de Curitiba, conhecido pelo comércio forte e pela proximidade com o Shopping Palladium. Quem mora aqui sabe que praticidade é essencial — e é exatamente isso que oferecemos: serviço de qualidade sem precisar atravessar a cidade.",
    servicesHighlight: [
      "Troca de pneus com montagem e balanceamento inclusos",
      "Alinhamento computadorizado 3D de alta precisão",
      "Revisão completa para carros do dia a dia",
      "Diagnóstico eletrônico com scanner automotivo",
      "Troca de óleo sintético e mineral",
      "Manutenção de suspensão e freios"
    ],
    searchPhrases: [
      "loja de pneus no Portão",
      "pneus baratos Portão Curitiba",
      "oficina mecânica Portão",
      "alinhamento Portão",
      "troca de óleo Portão Curitiba",
      "borracharia Portão",
      "pneu Pirelli Portão",
      "balanceamento perto do Palladium"
    ],
    nearbyLandmarks: [
      "Shopping Palladium (3 min)",
      "Supermercado Condor Portão",
      "Terminal do Portão",
      "Colégio Estadual do Paraná",
      "Praça do Portão"
    ],
    trafficTips: "A Carplus fica na Av. Arthur da Silva Bernardes, uma das principais vias do bairro. Acesso fácil tanto para quem vem da Av. República Argentina quanto da Av. Presidente Kennedy.",
    testimonialContext: "vizinhos do Portão",
    whyChooseUs: [
      "Somos do bairro — conhecemos as necessidades dos moradores",
      "Estacionamento próprio amplo",
      "Atendimento sem agendamento",
      "Preço de atacado em pneus das melhores marcas"
    ],
    localBenefits: "Você pode deixar o carro para serviço e resolver outras coisas no comércio local enquanto esperamos. Ou simplesmente tomar um café no Palladium enquanto seu carro fica pronto!"
  },
  "agua-verde": {
    slug: "agua-verde",
    name: "Água Verde",
    metaTitle: "Loja de Pneus Água Verde Curitiba | Carplus - 5 min",
    metaDescription: "Pneus em Curitiba para moradores do Água Verde. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 5 minutos pela República Argentina.",
    h1: "Pneus para Moradores do Água Verde",
    heroSubtitle: "Só 5 minutos pela República Argentina até a melhor loja de pneus de Curitiba",
    introText: "O Água Verde é conhecido pela qualidade de vida e pelo perfil exigente de seus moradores. Para quem preza por segurança e busca os melhores produtos para seu veículo, a Carplus Centro Automotivo está a apenas 5 minutos de distância.",
    localContext: "Um dos bairros mais nobres e arborizados de Curitiba, o Água Verde reúne famílias que valorizam conforto e praticidade. Com fácil acesso pela Avenida República Argentina, chegar à Carplus é rápido e sem complicações.",
    servicesHighlight: [
      "Pneus premium para sedans e SUVs do Água Verde",
      "Alinhamento 3D para veículos executivos",
      "Troca de óleo com lubrificantes sintéticos",
      "Revisão pré-viagem com checklist completo",
      "Manutenção de ar-condicionado automotivo"
    ],
    searchPhrases: [
      "loja de pneus Água Verde",
      "pneus perto do Água Verde Curitiba",
      "oficina mecânica Água Verde",
      "alinhamento Água Verde",
      "troca de pneu Água Verde",
      "pneus Michelin Água Verde",
      "mecânica automotiva Água Verde Curitiba"
    ],
    nearbyLandmarks: [
      "Praça do Japão",
      "Shopping Curitiba",
      "Parque Barigui",
      "Hospital Nossa Senhora das Graças"
    ],
    trafficTips: "Siga pela Av. República Argentina sentido Portão. Em aproximadamente 5 minutos você chega na Carplus, sem precisar pegar vias muito movimentadas.",
    testimonialContext: "moradores do Água Verde",
    whyChooseUs: [
      "Variedade de pneus para SUVs e sedans executivos",
      "Atendimento personalizado para quem valoriza qualidade",
      "Ambiente climatizado para espera confortável",
      "Parcelamento em até 10x sem juros"
    ],
    localBenefits: "Moradores do Água Verde podem trazer o carro pela manhã e buscar no final do dia, ou esperar no local com Wi-Fi gratuito e café."
  },
  "guaira": {
    slug: "guaira",
    name: "Guaíra",
    metaTitle: "Pneus no Guaíra Curitiba | Oficina Carplus - 5 min",
    metaDescription: "Loja de pneus para moradores do Guaíra. Pneus Pirelli, Michelin e Goodyear. Alinhamento, balanceamento e serviços automotivos a 5 min de você.",
    h1: "Oficina e Loja de Pneus para o Guaíra",
    heroSubtitle: "Moradores do Guaíra: sua oficina de confiança está a 5 minutos",
    introText: "O Guaíra é um bairro tradicional de Curitiba, com forte presença comercial e residencial. Para quem mora aqui e precisa de pneus novos ou serviços automotivos, a Carplus oferece tudo em um só lugar, pertinho de casa.",
    localContext: "Vizinho do Portão e com acesso direto pela Rua Kennedy, o Guaíra tem moradores que valorizam praticidade e preço justo. Nossa loja atende exatamente esse perfil: serviço de qualidade sem complicação.",
    servicesHighlight: [
      "Pneus econômicos e premium para todos os bolsos",
      "Alinhamento computadorizado 3D",
      "Balanceamento de rodas",
      "Troca de óleo e filtros",
      "Revisão de suspensão e freios",
      "Diagnóstico eletrônico completo"
    ],
    searchPhrases: [
      "pneus Guaíra Curitiba",
      "loja de pneus perto do Guaíra",
      "oficina mecânica Guaíra",
      "borracharia Guaíra",
      "alinhamento Guaíra Curitiba",
      "troca de pneu Guaíra",
      "pneus baratos Guaíra"
    ],
    nearbyLandmarks: [
      "Mercado Municipal do Guaíra",
      "Terminal do Capão Raso",
      "Parque Barigui",
      "Shopping Palladium"
    ],
    trafficTips: "Do Guaíra, siga pela Rua Kennedy até a Av. República Argentina. Vire à esquerda e em poucos metros estará na Av. Arthur da Silva Bernardes.",
    testimonialContext: "vizinhos do Guaíra",
    whyChooseUs: [
      "Próximo ao Guaíra com fácil acesso",
      "Preços de atacado para pneus",
      "Montagem e balanceamento inclusos",
      "Garantia de fábrica em todos os pneus"
    ],
    localBenefits: "Agende pelo WhatsApp e ganhe prioridade no atendimento. Moradores do Guaíra são nossos vizinhos e clientes frequentes!"
  },
  "parolin": {
    slug: "parolin",
    name: "Parolin",
    metaTitle: "Loja de Pneus Parolin Curitiba | Carplus Centro Automotivo - 8 min",
    metaDescription: "Pneus e serviços automotivos para o Parolin, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D, troca de óleo. A 8 minutos pela Getúlio Vargas.",
    h1: "Pneus e Oficina Mecânica para o Parolin",
    heroSubtitle: "Do Parolin à Carplus em apenas 8 minutos pela Getúlio Vargas",
    introText: "O Parolin, um dos bairros mais antigos de Curitiba, tem moradores que conhecem bem o valor de um serviço de qualidade. A Carplus atende a comunidade do Parolin com pneus das melhores marcas e serviços mecânicos completos.",
    localContext: "Localizado próximo ao centro e com fácil acesso a diversas regiões de Curitiba, o Parolin é um bairro misto de residências e comércios. Quem mora aqui encontra na Carplus uma oficina completa sem precisar ir longe.",
    servicesHighlight: [
      "Pneus para carros populares e compactos",
      "Alinhamento 3D para veículos do dia a dia",
      "Troca de óleo com filtros de qualidade",
      "Revisão de freios e suspensão",
      "Serviço de ar-condicionado automotivo"
    ],
    searchPhrases: [
      "pneus Parolin Curitiba",
      "loja de pneus perto do Parolin",
      "oficina mecânica Parolin",
      "borracharia Parolin Curitiba",
      "alinhamento Parolin",
      "troca de pneu Parolin",
      "mecânico Parolin"
    ],
    nearbyLandmarks: [
      "Praça Zacarias",
      "Shopping Estação",
      "Rodoferroviária de Curitiba",
      "Centro Histórico"
    ],
    trafficTips: "Siga pela Av. Getúlio Vargas em direção ao Portão. A Carplus fica na Av. Arthur da Silva Bernardes, com fácil acesso.",
    testimonialContext: "moradores do Parolin",
    whyChooseUs: [
      "Trajeto rápido e sem trânsito pesado",
      "Opções econômicas e premium de pneus",
      "Atendimento rápido sem agendamento",
      "Pagamento parcelado em até 10x"
    ],
    localBenefits: "Do Parolin você pode vir de carro ou até de ônibus — o Terminal do Portão fica próximo à nossa loja."
  },
  "campo-comprido": {
    slug: "campo-comprido",
    name: "Campo Comprido",
    metaTitle: "Pneus Campo Comprido Curitiba | Carplus - 8 min",
    metaDescription: "Loja de pneus para Campo Comprido, Curitiba. Pneus para SUVs e sedans. Alinhamento 3D, balanceamento. A 8 min pela Eduardo Sprada.",
    h1: "Pneus e Serviços para Campo Comprido",
    heroSubtitle: "Campo Comprido está a apenas 8 minutos da melhor oficina de Curitiba",
    introText: "O Campo Comprido é um bairro em expansão, com muitas famílias e veículos novos. Para quem precisa de pneus de qualidade ou serviços automotivos confiáveis, a Carplus oferece o melhor custo-benefício da região.",
    localContext: "Com ruas amplas e fácil acesso pela Rua Eduardo Sprada, o Campo Comprido concentra moradores que valorizam praticidade. A Carplus atende esse público com pneus para SUVs, picapes e sedans de todas as marcas.",
    servicesHighlight: [
      "Pneus para SUVs e crossovers",
      "Pneus para picapes (Hilux, Ranger, S10)",
      "Alinhamento 3D para veículos altos",
      'Balanceamento de rodas grandes (17" a 22")',
      "Revisão completa pré-viagem"
    ],
    searchPhrases: [
      "pneus Campo Comprido",
      "loja de pneus Campo Comprido Curitiba",
      "oficina Campo Comprido",
      "pneus para SUV Campo Comprido",
      "alinhamento Campo Comprido",
      "troca de pneu Campo Comprido",
      "pneus Pirelli Scorpion Campo Comprido"
    ],
    nearbyLandmarks: [
      "Parque Barigui",
      "Shopping Barigui",
      "UTFPR - Campus Ecoville",
      "Hospital Marcelino Champagnat"
    ],
    trafficTips: "Do Campo Comprido, siga pela Rua Eduardo Sprada até a Av. Affonso Camargo. O trajeto é rápido e com poucas semáforos.",
    testimonialContext: "moradores do Campo Comprido",
    whyChooseUs: [
      "Especialistas em pneus para SUVs e picapes",
      'Estoque de aros grandes (18", 19", 20", 22")',
      "Atendimento técnico especializado",
      "Condições especiais para troca do jogo completo"
    ],
    localBenefits: "Moradores do Campo Comprido podem aproveitar para fazer a revisão completa do veículo enquanto estão perto do Barigui."
  },
  "novo-mundo": {
    slug: "novo-mundo",
    name: "Novo Mundo",
    metaTitle: "Loja de Pneus Novo Mundo Curitiba | Carplus - 7 min",
    metaDescription: "Pneus para moradores do Novo Mundo, Curitiba. Pirelli, Michelin, Goodyear. Oficina completa a 7 min pela Av. Brasília. Alinhamento 3D incluso.",
    h1: "Pneus e Oficina para o Novo Mundo",
    heroSubtitle: "Novo Mundo: sua oficina de confiança está a 7 minutos",
    introText: "O Novo Mundo é um bairro consolidado de Curitiba, com forte comércio e moradores que conhecem bem a importância de manter o carro em dia. A Carplus está próxima para atender com qualidade e preço justo.",
    localContext: "Localizado entre o Portão e o Capão Raso, o Novo Mundo tem acesso facilitado pela Av. Brasília. Em apenas 7 minutos você chega à Carplus para trocar pneus, fazer alinhamento ou revisão completa.",
    servicesHighlight: [
      "Pneus econômicos para carros populares",
      "Pneus Pirelli P400 Evo em estoque",
      "Alinhamento computadorizado 3D",
      "Balanceamento de rodas",
      "Troca de óleo e filtros",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Novo Mundo Curitiba",
      "loja de pneus Novo Mundo",
      "oficina mecânica Novo Mundo",
      "borracharia Novo Mundo",
      "alinhamento Novo Mundo Curitiba",
      "pneus baratos Novo Mundo",
      "troca de pneu Novo Mundo"
    ],
    nearbyLandmarks: [
      "Terminal Capão Raso",
      "Supermercado Condor Novo Mundo",
      "Shopping Palladium",
      "Parque Caiuá"
    ],
    trafficTips: "Siga pela Av. Brasília em direção ao Portão. A Carplus fica na Av. Arthur da Silva Bernardes, próxima ao cruzamento principal.",
    testimonialContext: "moradores do Novo Mundo",
    whyChooseUs: [
      "Preços competitivos em pneus",
      "Atendimento rápido e sem fila",
      "Montagem e balanceamento inclusos",
      "Garantia de fábrica"
    ],
    localBenefits: "Venha pela manhã e aproveite para resolver outras coisas no comércio do Portão enquanto seu carro fica pronto."
  },
  // ══════════════════════════════════════
  // ZONA SUL - PRÓXIMOS (10-15 min)
  // ══════════════════════════════════════
  "fazendinha": {
    slug: "fazendinha",
    name: "Fazendinha",
    metaTitle: "Pneus Fazendinha Curitiba | Carplus Centro Automotivo - 10 min",
    metaDescription: "Loja de pneus para Fazendinha, Curitiba. Pirelli, Michelin, Goodyear com instalação inclusa. Alinhamento 3D e troca de óleo a 10 min de você.",
    h1: "Pneus e Oficina para a Fazendinha",
    heroSubtitle: "Da Fazendinha à Carplus em 10 minutos pela João Dembinski",
    introText: "A Fazendinha é um bairro residencial tradicional de Curitiba, com famílias que valorizam serviço de qualidade. A Carplus oferece pneus das melhores marcas com preço justo e atendimento diferenciado.",
    localContext: "Com fácil acesso pela Rua João Dembinski, a Fazendinha está bem conectada ao Portão. São apenas 10 minutos até a Carplus, onde você encontra tudo para seu veículo.",
    servicesHighlight: [
      "Pneus para carros populares e familiares",
      "Alinhamento 3D de precisão",
      "Balanceamento computadorizado",
      "Troca de óleo com filtros",
      "Revisão de freios"
    ],
    searchPhrases: [
      "pneus Fazendinha Curitiba",
      "loja de pneus Fazendinha",
      "oficina mecânica Fazendinha",
      "alinhamento Fazendinha",
      "borracharia Fazendinha Curitiba"
    ],
    nearbyLandmarks: [
      "Terminal Fazendinha",
      "CIC",
      "Parque dos Tropeiros"
    ],
    trafficTips: "Siga pela Rua João Dembinski até a Av. Winston Churchill, depois acesse a Av. República Argentina.",
    testimonialContext: "moradores da Fazendinha",
    whyChooseUs: [
      "Trajeto rápido sem trânsito",
      "Preços de atacado",
      "Atendimento sem agendamento"
    ],
    localBenefits: "Moradores da Fazendinha economizam tempo e dinheiro vindo até a Carplus no Portão."
  },
  "capao-raso": {
    slug: "capao-raso",
    name: "Capão Raso",
    metaTitle: "Pneus Capão Raso Curitiba | Carplus - 10 min",
    metaDescription: "Loja de pneus Capão Raso, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 10 min pela Winston Churchill.",
    h1: "Pneus e Serviços Automotivos para o Capão Raso",
    heroSubtitle: "Capão Raso: pneus de qualidade a 10 minutos de distância",
    introText: "O Capão Raso é um dos bairros mais populosos da zona sul de Curitiba. Para atender essa comunidade exigente, a Carplus oferece pneus de todas as marcas e serviços automotivos completos.",
    localContext: "Com o Terminal do Capão Raso como referência, o bairro tem fácil acesso ao Portão pela Av. Winston Churchill. A Carplus está pronta para receber moradores que buscam qualidade e economia.",
    servicesHighlight: [
      "Pneus econômicos e intermediários",
      "Alinhamento 3D para veículos leves",
      "Balanceamento de rodas",
      "Troca de óleo e revisão básica",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Capão Raso",
      "loja de pneus Capão Raso Curitiba",
      "oficina Capão Raso",
      "alinhamento Capão Raso",
      "borracharia perto do Capão Raso",
      "pneus baratos Capão Raso",
      "mecânico Capão Raso"
    ],
    nearbyLandmarks: [
      "Terminal Capão Raso",
      "Supermercado Festval",
      "UPA Capão Raso"
    ],
    trafficTips: "Do Capão Raso, siga pela Av. Winston Churchill até a Av. República Argentina. A Carplus fica a poucos metros, na Arthur da Silva Bernardes.",
    testimonialContext: "moradores do Capão Raso",
    whyChooseUs: [
      "Próximo ao Terminal do Capão Raso",
      "Preços competitivos",
      "Atendimento rápido"
    ],
    localBenefits: "Venha de carro ou de ônibus — estamos pertinho do Terminal do Portão!"
  },
  "cic": {
    slug: "cic",
    name: "CIC",
    metaTitle: "Pneus CIC Curitiba | Carplus Centro Automotivo - 15 min",
    metaDescription: "Loja de pneus para o CIC, Curitiba. Pneus para carros, vans e utilitários. Alinhamento 3D e serviços mecânicos. Atendemos frotas empresariais.",
    h1: "Pneus e Oficina para o CIC (Cidade Industrial)",
    heroSubtitle: "CIC: pneus e serviços para frotas e veículos particulares",
    introText: "A Cidade Industrial de Curitiba (CIC) concentra empresas e trabalhadores que dependem de seus veículos todos os dias. A Carplus oferece pneus para carros, vans e utilitários leves, além de condições especiais para frotas.",
    localContext: "O CIC é o maior bairro de Curitiba em extensão e abriga centenas de empresas. Para esse público, a Carplus oferece atendimento ágil, preços de atacado e suporte para gestão de frotas.",
    servicesHighlight: [
      "Pneus para vans e utilitários",
      "Atendimento para frotas empresariais",
      "Alinhamento 3D para veículos de carga leve",
      "Troca de óleo e revisão preventiva",
      "Manutenção de suspensão e freios"
    ],
    searchPhrases: [
      "pneus CIC Curitiba",
      "loja de pneus CIC",
      "pneus para van CIC",
      "oficina mecânica CIC",
      "pneus para frota CIC",
      "borracharia CIC Curitiba",
      "alinhamento CIC"
    ],
    nearbyLandmarks: [
      "Parque dos Tropeiros",
      "Via rápida Linha Verde",
      "Rodovia do Xisto"
    ],
    trafficTips: "Do CIC, siga pela Rodovia do Xisto até a Av. República Argentina, ou acesse pela Linha Verde.",
    testimonialContext: "trabalhadores e empresas do CIC",
    whyChooseUs: [
      "Condições especiais para frotas",
      "Pneus para vans e utilitários",
      "Nota fiscal para pessoa jurídica",
      "Atendimento prioritário para empresas"
    ],
    localBenefits: "Empresas do CIC podem fechar contratos de manutenção preventiva com a Carplus. Ligue: (41) 3082-7282."
  },
  "pinheirinho": {
    slug: "pinheirinho",
    name: "Pinheirinho",
    metaTitle: "Pneus Pinheirinho Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus para o Pinheirinho, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 15 min pela Linha Verde.",
    h1: "Pneus e Oficina para o Pinheirinho",
    heroSubtitle: "Do Pinheirinho à Carplus em 15 minutos pela Linha Verde",
    introText: "O Pinheirinho é um dos bairros mais populosos de Curitiba, com forte comércio local. Para quem precisa de pneus novos ou serviços mecânicos, a Carplus oferece qualidade com preço justo.",
    localContext: "Com acesso facilitado pela Linha Verde, o trajeto do Pinheirinho ao Portão é rápido e sem complicações. A Carplus está pronta para atender com agilidade.",
    servicesHighlight: [
      "Pneus econômicos para carros populares",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Freios e suspensão"
    ],
    searchPhrases: [
      "pneus Pinheirinho Curitiba",
      "loja de pneus Pinheirinho",
      "oficina Pinheirinho",
      "alinhamento Pinheirinho",
      "borracharia Pinheirinho"
    ],
    nearbyLandmarks: [
      "Terminal Pinheirinho",
      "Shopping Total",
      "Linha Verde"
    ],
    trafficTips: "Siga pela Linha Verde sentido centro até a saída para o Portão.",
    testimonialContext: "moradores do Pinheirinho",
    whyChooseUs: [
      "Acesso rápido pela Linha Verde",
      "Preços de atacado",
      "Atendimento sem agendamento"
    ],
    localBenefits: "O trajeto pela Linha Verde é rápido e sem semáforos. Vale a pena vir até a Carplus!"
  },
  // ══════════════════════════════════════
  // ZONA CENTRO
  // ══════════════════════════════════════
  "batel": {
    slug: "batel",
    name: "Batel",
    metaTitle: "Pneus Batel Curitiba | Carplus - Pneus Premium - 8 min",
    metaDescription: "Pneus premium para o Batel, Curitiba. Pirelli P Zero, Michelin Pilot Sport, Continental. Alinhamento 3D. A 8 min pela Sete de Setembro.",
    h1: "Pneus Premium para Moradores do Batel",
    heroSubtitle: "Batel: pneus de alta performance para quem exige o melhor",
    introText: "O Batel é referência em sofisticação em Curitiba. Para moradores que dirigem veículos premium e esportivos, a Carplus oferece pneus das linhas mais exclusivas: Pirelli P Zero, Michelin Pilot Sport e Continental SportContact.",
    localContext: "Um dos bairros mais nobres de Curitiba, o Batel concentra veículos de luxo e esportivos. A Carplus atende esse público exigente com pneus de alta performance e serviço técnico especializado.",
    servicesHighlight: [
      "Pneus Pirelli P Zero e Cinturato",
      "Pneus Michelin Pilot Sport 4",
      "Pneus Continental SportContact",
      "Alinhamento 3D de precisão para importados",
      "Balanceamento para rodas de liga leve",
      "Run Flat em estoque"
    ],
    searchPhrases: [
      "pneus Batel Curitiba",
      "pneus premium Batel",
      "loja de pneus Batel",
      "pneus para BMW Batel",
      "pneus Michelin Batel",
      "pneus esportivos Batel",
      "alinhamento Batel Curitiba",
      "pneus Run Flat Batel"
    ],
    nearbyLandmarks: [
      "Shopping Pátio Batel",
      "Oscar Niemeyer",
      "Praça do Japão",
      "Shopping Curitiba"
    ],
    trafficTips: "Do Batel, siga pela Av. Sete de Setembro até a Av. República Argentina. A Carplus fica na Arthur da Silva Bernardes, Portão.",
    testimonialContext: "moradores do Batel",
    whyChooseUs: [
      "Especialistas em pneus para veículos premium",
      "Estoque de Run Flat e alta performance",
      "Técnicos treinados para carros importados",
      "Ambiente confortável para espera"
    ],
    localBenefits: "Traga seu BMW, Mercedes ou Audi para a Carplus. Temos os pneus certos e o serviço que seu carro merece."
  },
  "centro": {
    slug: "centro",
    name: "Centro",
    metaTitle: "Pneus Centro de Curitiba | Carplus - 12 min",
    metaDescription: "Loja de pneus perto do Centro de Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos. A 12 min pela Visconde de Guarapuava.",
    h1: "Pneus e Oficina para o Centro de Curitiba",
    heroSubtitle: "Do Centro ao Portão em 12 minutos — fuja do trânsito, venha para a Carplus",
    introText: "Quem trabalha ou mora no Centro de Curitiba sabe que encontrar uma oficina de confiança pode ser um desafio. A Carplus está a apenas 12 minutos e oferece tudo que você precisa: pneus, alinhamento, balanceamento e revisão.",
    localContext: "O Centro de Curitiba é movimentado e nem sempre tem estacionamento fácil. Na Carplus, você encontra estacionamento próprio, atendimento rápido e pode resolver tudo em uma só visita.",
    servicesHighlight: [
      "Pneus para todos os modelos",
      "Alinhamento 3D computadorizado",
      "Balanceamento de rodas",
      "Troca de óleo expressa",
      "Diagnóstico eletrônico"
    ],
    searchPhrases: [
      "pneus Centro Curitiba",
      "loja de pneus perto do Centro",
      "oficina Centro Curitiba",
      "alinhamento Centro",
      "borracharia Centro Curitiba",
      "troca de pneu Centro"
    ],
    nearbyLandmarks: [
      "Rua XV de Novembro",
      "Praça Tiradentes",
      "Shopping Estação",
      "Mercado Municipal"
    ],
    trafficTips: "Siga pela Av. Visconde de Guarapuava até a Av. República Argentina. O trajeto é tranquilo fora do horário de pico.",
    testimonialContext: "trabalhadores do Centro",
    whyChooseUs: [
      "Estacionamento próprio",
      "Fora da zona de estacionamento pago",
      "Atendimento rápido"
    ],
    localBenefits: "Fuja do trânsito e dos estacionamentos caros do Centro. Na Carplus você estaciona de graça e resolve tudo!"
  },
  "reboucas": {
    slug: "reboucas",
    name: "Rebouças",
    metaTitle: "Pneus Rebouças Curitiba | Carplus - 10 min",
    metaDescription: "Loja de pneus para o Rebouças, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 10 min pela Westphalen.",
    h1: "Pneus e Oficina para o Rebouças",
    heroSubtitle: "Do Rebouças à Carplus em 10 minutos",
    introText: "O Rebouças é um bairro central de Curitiba, com fácil acesso ao Portão. Moradores e trabalhadores da região encontram na Carplus pneus de qualidade e serviços automotivos completos.",
    localContext: "Próximo ao Centro e com bom acesso pela Rua Westphalen, o Rebouças está bem posicionado para quem precisa de uma oficina de confiança sem ir muito longe.",
    servicesHighlight: [
      "Pneus para sedans e hatches",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Rebouças Curitiba",
      "loja de pneus Rebouças",
      "oficina Rebouças",
      "alinhamento Rebouças",
      "borracharia Rebouças"
    ],
    nearbyLandmarks: [
      "Shopping Estação",
      "Rodoferroviária",
      "Batel",
      "Centro"
    ],
    trafficTips: "Siga pela Rua Westphalen até a Av. Sete de Setembro, depois acesse a República Argentina.",
    testimonialContext: "moradores do Rebouças",
    whyChooseUs: [
      "Localização estratégica",
      "Atendimento rápido",
      "Preços justos"
    ],
    localBenefits: "Do Rebouças você chega rápido à Carplus e ainda foge do trânsito do Centro."
  },
  "bigorrilho": {
    slug: "bigorrilho",
    name: "Bigorrilho",
    metaTitle: "Pneus Bigorrilho Curitiba | Carplus - 10 min",
    metaDescription: "Pneus para moradores do Bigorrilho, Curitiba. Pirelli, Michelin. Alinhamento 3D e balanceamento. A 10 min pela Padre Agostinho.",
    h1: "Pneus e Serviços para o Bigorrilho",
    heroSubtitle: "Bigorrilho: pneus de qualidade a 10 minutos de distância",
    introText: "O Bigorrilho é um dos bairros mais valorizados de Curitiba, com moradores que prezam por qualidade em tudo. A Carplus oferece pneus premium e serviços de alto padrão para esse público exigente.",
    localContext: "Vizinho do Batel e com fácil acesso pela Rua Padre Agostinho, o Bigorrilho está a poucos minutos da Carplus. Atendemos veículos de todas as marcas com o cuidado que você merece.",
    servicesHighlight: [
      "Pneus para SUVs e sedans executivos",
      "Alinhamento 3D de precisão",
      "Balanceamento computadorizado",
      "Troca de óleo sintético"
    ],
    searchPhrases: [
      "pneus Bigorrilho Curitiba",
      "loja de pneus Bigorrilho",
      "oficina Bigorrilho",
      "alinhamento Bigorrilho",
      "pneus Michelin Bigorrilho"
    ],
    nearbyLandmarks: [
      "Parque Barigui",
      "Shopping Barigui",
      "Batel"
    ],
    trafficTips: "Siga pela Rua Padre Agostinho até a Av. Sete de Setembro, depois acesse a República Argentina.",
    testimonialContext: "moradores do Bigorrilho",
    whyChooseUs: [
      "Pneus premium em estoque",
      "Atendimento personalizado",
      "Ambiente confortável"
    ],
    localBenefits: "Moradores do Bigorrilho podem aproveitar a proximidade com o Barigui para um passeio enquanto o carro fica pronto."
  },
  "merces": {
    slug: "merces",
    name: "Mercês",
    metaTitle: "Pneus Mercês Curitiba | Carplus - 12 min",
    metaDescription: "Loja de pneus para as Mercês, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços mecânicos. A 12 min pela Manoel Ribas.",
    h1: "Pneus e Oficina para as Mercês",
    heroSubtitle: "Das Mercês à Carplus em 12 minutos",
    introText: "As Mercês são um bairro tradicional de Curitiba, com moradores que valorizam serviço de qualidade. A Carplus oferece pneus das melhores marcas e atendimento diferenciado.",
    localContext: "Com fácil acesso pela Rua Manoel Ribas, as Mercês estão bem conectadas ao Portão. Em 12 minutos você chega à Carplus para resolver tudo em uma visita.",
    servicesHighlight: [
      "Pneus para todos os modelos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão de freios"
    ],
    searchPhrases: [
      "pneus Mercês Curitiba",
      "loja de pneus Mercês",
      "oficina Mercês",
      "alinhamento Mercês",
      "borracharia Mercês"
    ],
    nearbyLandmarks: [
      "Praça de Bolso do Ciclista",
      "Centro Cívico",
      "Bigorrilho"
    ],
    trafficTips: "Siga pela Rua Manoel Ribas até a Av. Iguaçu, depois acesse a República Argentina.",
    testimonialContext: "moradores das Mercês",
    whyChooseUs: [
      "Trajeto rápido",
      "Preços competitivos",
      "Atendimento de qualidade"
    ],
    localBenefits: "Das Mercês o acesso é fácil e o trajeto é tranquilo, mesmo em horários de pico."
  },
  "jardim-botanico": {
    slug: "jardim-botanico",
    name: "Jardim Botânico",
    metaTitle: "Pneus Jardim Botânico Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus para Jardim Botânico, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 15 min pela Omar Sabbag.",
    h1: "Pneus e Oficina para o Jardim Botânico",
    heroSubtitle: "Do Jardim Botânico à Carplus em 15 minutos",
    introText: "O Jardim Botânico é o cartão-postal de Curitiba e abriga moradores que valorizam qualidade de vida. Para manter seu carro em perfeito estado, a Carplus está a apenas 15 minutos de distância.",
    localContext: "Próximo ao famoso parque, o bairro Jardim Botânico tem acesso fácil pela Av. Pref. Omar Sabbag. A Carplus oferece pneus e serviços para todos os tipos de veículos.",
    servicesHighlight: [
      "Pneus para carros e SUVs",
      "Alinhamento 3D",
      "Balanceamento",
      "Revisão pré-viagem",
      "Troca de óleo"
    ],
    searchPhrases: [
      "pneus Jardim Botânico Curitiba",
      "loja de pneus Jardim Botânico",
      "oficina Jardim Botânico",
      "alinhamento Jardim Botânico",
      "mecânica Jardim Botânico"
    ],
    nearbyLandmarks: [
      "Jardim Botânico de Curitiba",
      "UFPR",
      "Prado Velho"
    ],
    trafficTips: "Siga pela Av. Pref. Omar Sabbag até a Av. Sete de Setembro, depois acesse a República Argentina.",
    testimonialContext: "moradores do Jardim Botânico",
    whyChooseUs: [
      "Trajeto tranquilo",
      "Variedade de pneus",
      "Serviço completo"
    ],
    localBenefits: "Aproveite para visitar o parque enquanto seu carro fica pronto na Carplus!"
  },
  // ══════════════════════════════════════
  // ZONA NORTE / LESTE
  // ══════════════════════════════════════
  "santa-felicidade": {
    slug: "santa-felicidade",
    name: "Santa Felicidade",
    metaTitle: "Pneus Santa Felicidade Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus para Santa Felicidade, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 20 min pela Manoel Ribas.",
    h1: "Pneus e Oficina para Santa Felicidade",
    heroSubtitle: "De Santa Felicidade à Carplus em 20 minutos",
    introText: "Santa Felicidade, o bairro italiano de Curitiba, é conhecido pela gastronomia e pela comunidade acolhedora. Moradores que buscam pneus de qualidade encontram na Carplus o melhor custo-benefício.",
    localContext: "Com acesso pela Av. Manoel Ribas, Santa Felicidade está a 20 minutos da Carplus. O trajeto é agradável e vale a pena pela qualidade do serviço e variedade de pneus.",
    servicesHighlight: [
      "Pneus para todos os veículos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Santa Felicidade",
      "loja de pneus Santa Felicidade Curitiba",
      "oficina Santa Felicidade",
      "alinhamento Santa Felicidade",
      "borracharia Santa Felicidade"
    ],
    nearbyLandmarks: [
      "Restaurantes italianos",
      "Vinícolas",
      "Parque Tingui"
    ],
    trafficTips: "Siga pela Av. Manoel Ribas sentido centro, depois acesse a República Argentina.",
    testimonialContext: "moradores de Santa Felicidade",
    whyChooseUs: [
      "Vale a pena o trajeto",
      "Preços de atacado",
      "Qualidade garantida"
    ],
    localBenefits: "Aproveite para almoçar nos restaurantes de Santa Felicidade antes ou depois de visitar a Carplus!"
  },
  "cajuru": {
    slug: "cajuru",
    name: "Cajuru",
    metaTitle: "Pneus Cajuru Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus para o Cajuru, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços mecânicos. A 20 min pela Mauricio Fruet.",
    h1: "Pneus e Oficina para o Cajuru",
    heroSubtitle: "Do Cajuru à Carplus em 20 minutos",
    introText: "O Cajuru é um dos maiores bairros de Curitiba, com comunidade ativa e diversificada. A Carplus atende moradores do Cajuru com pneus de qualidade e preços justos.",
    localContext: "Com acesso pela Av. Prefeito Mauricio Fruet, o Cajuru está bem conectado ao Portão. São 20 minutos até a Carplus, onde você encontra tudo para seu veículo.",
    servicesHighlight: [
      "Pneus econômicos e intermediários",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Cajuru Curitiba",
      "loja de pneus Cajuru",
      "oficina Cajuru",
      "alinhamento Cajuru",
      "borracharia Cajuru Curitiba"
    ],
    nearbyLandmarks: [
      "Terminal do Cajuru",
      "Zoológico de Curitiba",
      "Linha Verde"
    ],
    trafficTips: "Siga pela Av. Prefeito Mauricio Fruet até a Linha Verde, depois acesse a saída para o Portão.",
    testimonialContext: "moradores do Cajuru",
    whyChooseUs: [
      "Acesso fácil pela Linha Verde",
      "Preços competitivos",
      "Atendimento rápido"
    ],
    localBenefits: "Moradores do Cajuru encontram na Carplus qualidade que vale o trajeto."
  },
  "uberaba": {
    slug: "uberaba",
    name: "Uberaba",
    metaTitle: "Pneus Uberaba Curitiba | Carplus - 18 min",
    metaDescription: "Loja de pneus para o Uberaba, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 18 min pela Av. das Torres.",
    h1: "Pneus e Oficina para o Uberaba",
    heroSubtitle: "Do Uberaba à Carplus em 18 minutos",
    introText: "O Uberaba é um bairro residencial importante de Curitiba, com fácil acesso pela Av. das Torres. Moradores encontram na Carplus pneus de qualidade e serviço profissional.",
    localContext: "Bem localizado na zona leste, o Uberaba tem acesso rápido ao Portão pela Av. das Torres. A Carplus oferece atendimento completo para todos os tipos de veículos.",
    servicesHighlight: [
      "Pneus para carros e SUVs",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus Uberaba Curitiba",
      "loja de pneus Uberaba",
      "oficina Uberaba",
      "alinhamento Uberaba",
      "borracharia Uberaba"
    ],
    nearbyLandmarks: [
      "Zoológico de Curitiba",
      "Linha Verde",
      "Av. das Torres"
    ],
    trafficTips: "Siga pela Av. das Torres até acessar a Linha Verde ou a Av. Comendador Franco.",
    testimonialContext: "moradores do Uberaba",
    whyChooseUs: [
      "Trajeto rápido",
      "Variedade de pneus",
      "Preço justo"
    ],
    localBenefits: "Do Uberaba o acesso é rápido e direto pela Av. das Torres."
  },
  "bacacheri": {
    slug: "bacacheri",
    name: "Bacacheri",
    metaTitle: "Pneus Bacacheri Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus para o Bacacheri, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 20 min pela Erasto Gaertner.",
    h1: "Pneus e Oficina para o Bacacheri",
    heroSubtitle: "Do Bacacheri à Carplus em 20 minutos",
    introText: "O Bacacheri é um bairro tranquilo da zona norte de Curitiba, próximo ao aeroporto. Moradores encontram na Carplus pneus de todas as marcas e serviços automotivos completos.",
    localContext: "Com fácil acesso pela Av. Erasto Gaertner, o Bacacheri está a 20 minutos da Carplus. O trajeto é agradável e o serviço vale a viagem.",
    servicesHighlight: [
      "Pneus para todos os modelos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão pré-viagem"
    ],
    searchPhrases: [
      "pneus Bacacheri Curitiba",
      "loja de pneus Bacacheri",
      "oficina Bacacheri",
      "alinhamento Bacacheri",
      "mecânica Bacacheri"
    ],
    nearbyLandmarks: [
      "Aeroporto do Bacacheri",
      "Parque Bacacheri",
      "Parque General Iberê de Mattos"
    ],
    trafficTips: "Siga pela Av. Erasto Gaertner até o centro, depois acesse a República Argentina.",
    testimonialContext: "moradores do Bacacheri",
    whyChooseUs: [
      "Qualidade que vale o trajeto",
      "Preços de atacado",
      "Serviço profissional"
    ],
    localBenefits: "Moradores do Bacacheri podem aproveitar a revisão pré-viagem antes de pegar a estrada."
  },
  "boa-vista": {
    slug: "boa-vista",
    name: "Boa Vista",
    metaTitle: "Pneus Boa Vista Curitiba | Carplus - 22 min",
    metaDescription: "Loja de pneus para Boa Vista, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços mecânicos. A 22 min pela Rua Holanda.",
    h1: "Pneus e Oficina para Boa Vista",
    heroSubtitle: "De Boa Vista à Carplus em 22 minutos",
    introText: "Boa Vista é um dos bairros mais tradicionais da zona norte de Curitiba. Para moradores que buscam pneus de qualidade e serviço profissional, a Carplus oferece o melhor custo-benefício.",
    localContext: "Com acesso pela Rua Holanda, Boa Vista está bem conectado ao centro e ao Portão. A Carplus atende com pneus de todas as marcas e serviços completos.",
    servicesHighlight: [
      "Pneus para carros e SUVs",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Boa Vista Curitiba",
      "loja de pneus Boa Vista",
      "oficina Boa Vista",
      "alinhamento Boa Vista",
      "borracharia Boa Vista"
    ],
    nearbyLandmarks: [
      "Parque São Lourenço",
      "Terminal Boa Vista",
      "Barreirinha"
    ],
    trafficTips: "Siga pela Rua Holanda até a Av. Paraná, depois acesse o centro e a República Argentina.",
    testimonialContext: "moradores de Boa Vista",
    whyChooseUs: [
      "Qualidade garantida",
      "Preços justos",
      "Atendimento profissional"
    ],
    localBenefits: "De Boa Vista o trajeto é tranquilo e vale a pena pela qualidade do serviço."
  },
  "santa-candida": {
    slug: "santa-candida",
    name: "Santa Cândida",
    metaTitle: "Pneus Santa Cândida Curitiba | Carplus - 25 min",
    metaDescription: "Loja de pneus para Santa Cândida, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 25 min pela Av. Paraná.",
    h1: "Pneus e Oficina para Santa Cândida",
    heroSubtitle: "De Santa Cândida à Carplus em 25 minutos",
    introText: "Santa Cândida é um bairro em crescimento na zona norte de Curitiba. Moradores que buscam pneus de qualidade encontram na Carplus variedade e preço justo.",
    localContext: "Com acesso pela Av. Paraná, Santa Cândida está a 25 minutos da Carplus. O trajeto é direto e vale a pena pela economia e qualidade.",
    servicesHighlight: [
      "Pneus econômicos e intermediários",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Freios e suspensão"
    ],
    searchPhrases: [
      "pneus Santa Cândida Curitiba",
      "loja de pneus Santa Cândida",
      "oficina Santa Cândida",
      "alinhamento Santa Cândida",
      "borracharia Santa Cândida"
    ],
    nearbyLandmarks: [
      "Terminal Santa Cândida",
      "Colombo",
      "BR-116"
    ],
    trafficTips: "Siga pela Av. Paraná sentido centro, depois acesse a República Argentina.",
    testimonialContext: "moradores de Santa Cândida",
    whyChooseUs: [
      "Preços de atacado",
      "Variedade de marcas",
      "Atendimento rápido"
    ],
    localBenefits: "Moradores de Santa Cândida economizam comprando pneus na Carplus."
  },
  // ══════════════════════════════════════
  // REGIÃO METROPOLITANA
  // ══════════════════════════════════════
  "sao-jose-dos-pinhais": {
    slug: "sao-jose-dos-pinhais",
    name: "São José dos Pinhais",
    metaTitle: "Pneus São José dos Pinhais | Carplus Curitiba - 30 min",
    metaDescription: "Loja de pneus para São José dos Pinhais. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 30 min pela Av. das Torres.",
    h1: "Pneus e Oficina para São José dos Pinhais",
    heroSubtitle: "De São José dos Pinhais à Carplus em 30 minutos",
    introText: "São José dos Pinhais é a segunda maior cidade da região metropolitana de Curitiba. Moradores encontram na Carplus pneus de qualidade com preços de atacado que compensam o deslocamento.",
    localContext: "Com acesso pela Av. das Torres e BR-376, São José dos Pinhais está bem conectado a Curitiba. A Carplus oferece variedade de pneus e serviços que fazem valer a viagem.",
    servicesHighlight: [
      "Pneus para todos os veículos",
      "Alinhamento 3D de precisão",
      "Balanceamento computadorizado",
      "Troca de óleo",
      "Revisão completa pré-viagem"
    ],
    searchPhrases: [
      "pneus São José dos Pinhais",
      "loja de pneus SJP",
      "oficina São José dos Pinhais",
      "alinhamento São José dos Pinhais",
      "pneus baratos SJP",
      "borracharia São José dos Pinhais"
    ],
    nearbyLandmarks: [
      "Aeroporto Afonso Pena",
      "Centro de SJP",
      "BR-376"
    ],
    trafficTips: "Siga pela Av. das Torres ou BR-376 até o contorno sul, depois acesse o Portão.",
    testimonialContext: "moradores de São José dos Pinhais",
    whyChooseUs: [
      "Preços de atacado que compensam o trajeto",
      "Variedade de marcas",
      "Serviço profissional"
    ],
    localBenefits: "Muitos clientes de São José dos Pinhais confirmam: vale a pena vir até a Carplus pela economia e qualidade!"
  },
  "colombo": {
    slug: "colombo",
    name: "Colombo",
    metaTitle: "Pneus Colombo PR | Carplus Curitiba - 30 min",
    metaDescription: "Loja de pneus para Colombo, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 30 min pela PR-417.",
    h1: "Pneus e Oficina para Colombo",
    heroSubtitle: "De Colombo à Carplus em 30 minutos",
    introText: "Colombo é uma das maiores cidades da região metropolitana de Curitiba. Moradores encontram na Carplus pneus de qualidade e serviços que fazem valer o deslocamento.",
    localContext: "Com acesso pela PR-417, Colombo está bem conectado a Curitiba. A Carplus oferece preços de atacado e atendimento profissional para moradores da região.",
    servicesHighlight: [
      "Pneus para carros e SUVs",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus Colombo PR",
      "loja de pneus Colombo",
      "oficina Colombo",
      "alinhamento Colombo",
      "borracharia Colombo"
    ],
    nearbyLandmarks: [
      "Centro de Colombo",
      "Atuba",
      "Santa Cândida"
    ],
    trafficTips: "Siga pela PR-417 até a Av. Paraná em Curitiba, depois acesse a República Argentina.",
    testimonialContext: "moradores de Colombo",
    whyChooseUs: [
      "Preços de atacado",
      "Qualidade garantida",
      "Atendimento profissional"
    ],
    localBenefits: "Muitos clientes de Colombo já são clientes fiéis da Carplus. Venha conhecer!"
  },
  "pinhais": {
    slug: "pinhais",
    name: "Pinhais",
    metaTitle: "Pneus Pinhais PR | Carplus Curitiba - 22 min",
    metaDescription: "Loja de pneus para Pinhais, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços mecânicos. A 22 min pela Rodovia João Leopoldo Jacomel.",
    h1: "Pneus e Oficina para Pinhais",
    heroSubtitle: "De Pinhais à Carplus em 22 minutos",
    introText: "Pinhais faz divisa com Curitiba e tem acesso fácil ao Portão. Moradores encontram na Carplus pneus de qualidade e serviços profissionais pertinho de casa.",
    localContext: "Com acesso pela Rodovia Deputado João Leopoldo Jacomel, Pinhais está a apenas 22 minutos da Carplus. O trajeto é rápido e vale pela qualidade.",
    servicesHighlight: [
      "Pneus para todos os veículos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Pinhais PR",
      "loja de pneus Pinhais",
      "oficina Pinhais",
      "alinhamento Pinhais",
      "borracharia Pinhais"
    ],
    nearbyLandmarks: [
      "Centro de Pinhais",
      "Piraquara",
      "Cajuru"
    ],
    trafficTips: "Siga pela Rodovia João Leopoldo Jacomel até a Linha Verde ou centro de Curitiba.",
    testimonialContext: "moradores de Pinhais",
    whyChooseUs: [
      "Proximidade com Curitiba",
      "Preços competitivos",
      "Serviço de qualidade"
    ],
    localBenefits: "Pinhais está tão perto que parece Curitiba. Venha conhecer a Carplus!"
  },
  "araucaria": {
    slug: "araucaria",
    name: "Araucária",
    metaTitle: "Pneus Araucária PR | Carplus Curitiba - 30 min",
    metaDescription: "Loja de pneus para Araucária, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos. A 30 min pela Rodovia do Xisto.",
    h1: "Pneus e Oficina para Araucária",
    heroSubtitle: "De Araucária à Carplus em 30 minutos",
    introText: "Araucária é uma importante cidade industrial da região metropolitana. Moradores e empresas encontram na Carplus pneus de qualidade e condições especiais para frotas.",
    localContext: "Com acesso pela Rodovia do Xisto, Araucária está bem conectada ao Portão. A Carplus oferece atendimento para veículos particulares e frotas empresariais.",
    servicesHighlight: [
      "Pneus para carros, vans e utilitários",
      "Atendimento para frotas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo"
    ],
    searchPhrases: [
      "pneus Araucária PR",
      "loja de pneus Araucária",
      "oficina Araucária",
      "pneus para frota Araucária",
      "alinhamento Araucária"
    ],
    nearbyLandmarks: [
      "Centro de Araucária",
      "Refinaria Getúlio Vargas",
      "CIC"
    ],
    trafficTips: "Siga pela Rodovia do Xisto até a Av. República Argentina.",
    testimonialContext: "moradores e empresas de Araucária",
    whyChooseUs: [
      "Condições especiais para frotas",
      "Preços de atacado",
      "Atendimento profissional"
    ],
    localBenefits: "Empresas de Araucária podem fechar contratos de manutenção com a Carplus."
  },
  "campo-largo": {
    slug: "campo-largo",
    name: "Campo Largo",
    metaTitle: "Pneus Campo Largo PR | Carplus Curitiba - 35 min",
    metaDescription: "Loja de pneus para Campo Largo, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 35 min pela BR-277.",
    h1: "Pneus e Oficina para Campo Largo",
    heroSubtitle: "De Campo Largo à Carplus em 35 minutos",
    introText: "Campo Largo, a capital da louça, tem moradores que conhecem qualidade. Para pneus e serviços automotivos, a Carplus oferece o melhor custo-benefício da região.",
    localContext: "Com acesso pela BR-277, Campo Largo está a 35 minutos da Carplus. O trajeto vale pela economia em pneus de qualidade.",
    servicesHighlight: [
      "Pneus para todos os veículos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus Campo Largo PR",
      "loja de pneus Campo Largo",
      "oficina Campo Largo",
      "alinhamento Campo Largo",
      "borracharia Campo Largo"
    ],
    nearbyLandmarks: [
      "Centro de Campo Largo",
      "Museu da Louça",
      "BR-277"
    ],
    trafficTips: "Siga pela BR-277 até o acesso ao Portão pela Av. República Argentina.",
    testimonialContext: "moradores de Campo Largo",
    whyChooseUs: [
      "Preços de atacado",
      "Qualidade garantida",
      "Variedade de marcas"
    ],
    localBenefits: "Moradores de Campo Largo economizam comprando pneus na Carplus!"
  },
  "almirante-tamandare": {
    slug: "almirante-tamandare",
    name: "Almirante Tamandaré",
    metaTitle: "Pneus Almirante Tamandaré PR | Carplus Curitiba - 25 min",
    metaDescription: "Loja de pneus para Almirante Tamandaré, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 25 min pela Rodovia dos Minérios.",
    h1: "Pneus e Oficina para Almirante Tamandaré",
    heroSubtitle: "De Almirante Tamandaré à Carplus em 25 minutos",
    introText: "Almirante Tamandaré é uma cidade em crescimento na região metropolitana. Moradores encontram na Carplus pneus de qualidade e preços justos.",
    localContext: "Com acesso pela Rodovia dos Minérios, Almirante Tamandaré está a 25 minutos da Carplus. O trajeto é direto e vale a pena.",
    servicesHighlight: [
      "Pneus econômicos e intermediários",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão básica"
    ],
    searchPhrases: [
      "pneus Almirante Tamandaré PR",
      "loja de pneus Almirante Tamandaré",
      "oficina Almirante Tamandaré",
      "alinhamento Almirante Tamandaré",
      "borracharia Almirante Tamandaré"
    ],
    nearbyLandmarks: [
      "Centro de Almirante Tamandaré",
      "Colombo",
      "Santa Cândida"
    ],
    trafficTips: "Siga pela Rodovia dos Minérios até a BR-476, depois acesse Curitiba.",
    testimonialContext: "moradores de Almirante Tamandaré",
    whyChooseUs: [
      "Preços competitivos",
      "Qualidade garantida",
      "Atendimento rápido"
    ],
    localBenefits: "Moradores de Almirante Tamandaré são bem-vindos na Carplus!"
  },
  "fazenda-rio-grande": {
    slug: "fazenda-rio-grande",
    name: "Fazenda Rio Grande",
    metaTitle: "Pneus Fazenda Rio Grande PR | Carplus Curitiba - 35 min",
    metaDescription: "Loja de pneus para Fazenda Rio Grande, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 35 min pela BR-116.",
    h1: "Pneus e Oficina para Fazenda Rio Grande",
    heroSubtitle: "De Fazenda Rio Grande à Carplus em 35 minutos",
    introText: "Fazenda Rio Grande é uma cidade em expansão na região sul de Curitiba. Moradores encontram na Carplus pneus de qualidade e serviços profissionais.",
    localContext: "Com acesso pela BR-116, Fazenda Rio Grande está a 35 minutos da Carplus. O trajeto compensa pelos preços de atacado.",
    servicesHighlight: [
      "Pneus para todos os veículos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus Fazenda Rio Grande PR",
      "loja de pneus Fazenda Rio Grande",
      "oficina Fazenda Rio Grande",
      "alinhamento Fazenda Rio Grande",
      "borracharia Fazenda Rio Grande"
    ],
    nearbyLandmarks: [
      "Centro de Fazenda Rio Grande",
      "BR-116",
      "Pinheirinho"
    ],
    trafficTips: "Siga pela BR-116 até o contorno sul, depois acesse o Portão.",
    testimonialContext: "moradores de Fazenda Rio Grande",
    whyChooseUs: [
      "Preços de atacado",
      "Variedade de pneus",
      "Serviço profissional"
    ],
    localBenefits: "Fazenda Rio Grande está mais perto do que parece. Venha conhecer a Carplus!"
  },
  // ══════════════════════════════════════
  // BAIRROS ADICIONAIS DE CURITIBA
  // ══════════════════════════════════════
  "sitio-cercado": {
    slug: "sitio-cercado",
    name: "Sítio Cercado",
    metaTitle: "Pneus Sítio Cercado Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus para o Sítio Cercado, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 20 min pela Izaac Ferreira da Cruz.",
    h1: "Pneus e Oficina para o Sítio Cercado",
    heroSubtitle: "Do Sítio Cercado à Carplus em 20 minutos",
    introText: "O Sítio Cercado é um dos maiores bairros de Curitiba em população. Para essa comunidade que busca qualidade e economia, a Carplus oferece pneus das melhores marcas com preço justo.",
    localContext: "Com acesso pela Rua Izaac Ferreira da Cruz, o Sítio Cercado está bem conectado à zona sul de Curitiba. A Carplus no Portão atende moradores da região com serviço profissional.",
    servicesHighlight: [
      "Pneus econômicos para carros populares",
      "Alinhamento 3D computadorizado",
      "Balanceamento de rodas",
      "Troca de óleo e filtros",
      "Revisão de freios e suspensão"
    ],
    searchPhrases: [
      "pneus Sítio Cercado",
      "loja de pneus Sítio Cercado Curitiba",
      "oficina Sítio Cercado",
      "alinhamento Sítio Cercado",
      "borracharia Sítio Cercado"
    ],
    nearbyLandmarks: [
      "Terminal Sítio Cercado",
      "Pinheirinho",
      "Linha Verde"
    ],
    trafficTips: "Do Sítio Cercado, siga pela Rua Izaac Ferreira da Cruz até a Linha Verde, depois acesse o Portão.",
    testimonialContext: "moradores do Sítio Cercado",
    whyChooseUs: [
      "Preços de atacado",
      "Opções econômicas",
      "Atendimento rápido"
    ],
    localBenefits: "Moradores do Sítio Cercado economizam comprando pneus na Carplus."
  },
  "tatuquara": {
    slug: "tatuquara",
    name: "Tatuquara",
    metaTitle: "Pneus Tatuquara Curitiba | Carplus - 25 min",
    metaDescription: "Loja de pneus para o Tatuquara, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 25 min pela Regis Bittencourt.",
    h1: "Pneus e Oficina para o Tatuquara",
    heroSubtitle: "Do Tatuquara à Carplus em 25 minutos",
    introText: "O Tatuquara é um bairro em desenvolvimento na zona sul de Curitiba. Moradores encontram na Carplus pneus de qualidade com preços que cabem no orçamento.",
    localContext: "Com acesso pela Rodovia Regis Bittencourt, o Tatuquara está a 25 minutos da Carplus. O trajeto vale pela economia em pneus de qualidade.",
    servicesHighlight: [
      "Pneus para carros populares",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Freios básicos"
    ],
    searchPhrases: [
      "pneus Tatuquara Curitiba",
      "loja de pneus Tatuquara",
      "oficina Tatuquara",
      "alinhamento Tatuquara"
    ],
    nearbyLandmarks: [
      "Terminal Tatuquara",
      "CIC",
      "Rodovia Regis Bittencourt"
    ],
    trafficTips: "Do Tatuquara, siga pela Rodovia Regis Bittencourt ou pela Av. Winston Churchill até o Portão.",
    testimonialContext: "moradores do Tatuquara",
    whyChooseUs: [
      "Preços acessíveis",
      "Variedade de marcas",
      "Parcelamento em 10x"
    ],
    localBenefits: "Vale a pena o trajeto do Tatuquara para economizar em pneus de qualidade."
  },
  "umbara": {
    slug: "umbara",
    name: "Umbará",
    metaTitle: "Pneus Umbará Curitiba | Carplus - 25 min",
    metaDescription: "Loja de pneus para o Umbará, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 25 min pela Nicola Pellanda.",
    h1: "Pneus e Oficina para o Umbará",
    heroSubtitle: "Do Umbará à Carplus em 25 minutos",
    introText: "O Umbará é um bairro residencial tranquilo na zona sul de Curitiba. Moradores que buscam pneus de qualidade encontram na Carplus variedade e bom preço.",
    localContext: "Com acesso pela Rua Nicola Pellanda, o Umbará está a 25 minutos da Carplus. O trajeto é direto e vale pela qualidade.",
    servicesHighlight: [
      "Pneus para todos os modelos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus Umbará Curitiba",
      "loja de pneus Umbará",
      "oficina Umbará",
      "alinhamento Umbará"
    ],
    nearbyLandmarks: [
      "Sítio Cercado",
      "Pinheirinho",
      "BR-116"
    ],
    trafficTips: "Do Umbará, siga pela Rua Nicola Pellanda até a BR-116 ou Linha Verde.",
    testimonialContext: "moradores do Umbará",
    whyChooseUs: [
      "Qualidade garantida",
      "Preços justos",
      "Atendimento profissional"
    ],
    localBenefits: "Moradores do Umbará são bem-vindos na Carplus!"
  },
  "centro-civico": {
    slug: "centro-civico",
    name: "Centro Cívico",
    metaTitle: "Pneus Centro Cívico Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus para o Centro Cívico, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 15 min pela Cândido de Abreu.",
    h1: "Pneus e Oficina para o Centro Cívico",
    heroSubtitle: "Do Centro Cívico à Carplus em 15 minutos",
    introText: "O Centro Cívico é o coração administrativo de Curitiba, próximo ao Palácio Iguaçu. Servidores e moradores encontram na Carplus pneus de qualidade a poucos minutos.",
    localContext: "Com fácil acesso pela Av. Cândido de Abreu, o Centro Cívico está a 15 minutos da Carplus. Ideal para quem trabalha na região e quer resolver tudo em um lugar.",
    servicesHighlight: [
      "Pneus para sedans executivos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo sintético",
      "Diagnóstico eletrônico"
    ],
    searchPhrases: [
      "pneus Centro Cívico Curitiba",
      "loja de pneus Centro Cívico",
      "oficina Centro Cívico",
      "alinhamento Centro Cívico"
    ],
    nearbyLandmarks: [
      "Palácio Iguaçu",
      "Museu Oscar Niemeyer",
      "Bosque do Papa"
    ],
    trafficTips: "Do Centro Cívico, siga pela Av. Cândido de Abreu até o centro, depois acesse a República Argentina.",
    testimonialContext: "servidores e moradores do Centro Cívico",
    whyChooseUs: [
      "Localização estratégica",
      "Atendimento rápido",
      "Estacionamento gratuito"
    ],
    localBenefits: "Resolva tudo em um lugar só e fuja do trânsito do centro!"
  },
  "ahu": {
    slug: "ahu",
    name: "Ahú",
    metaTitle: "Pneus Ahú Curitiba | Carplus - 18 min",
    metaDescription: "Loja de pneus para o Ahú, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 18 min pela Anita Garibaldi.",
    h1: "Pneus e Oficina para o Ahú",
    heroSubtitle: "Do Ahú à Carplus em 18 minutos",
    introText: "O Ahú é um bairro tradicional e arborizado de Curitiba. Moradores que valorizam qualidade encontram na Carplus pneus das melhores marcas.",
    localContext: "Com acesso pela Av. Anita Garibaldi, o Ahú está a 18 minutos da Carplus. Trajeto tranquilo para um atendimento de qualidade.",
    servicesHighlight: [
      "Pneus para carros e SUVs",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Ahú Curitiba",
      "loja de pneus Ahú",
      "oficina Ahú",
      "alinhamento Ahú"
    ],
    nearbyLandmarks: [
      "Parque São Lourenço",
      "Bosque do Alemão",
      "Centro Cívico"
    ],
    trafficTips: "Do Ahú, siga pela Av. Anita Garibaldi até o centro, depois acesse a República Argentina.",
    testimonialContext: "moradores do Ahú",
    whyChooseUs: [
      "Qualidade premium",
      "Atendimento personalizado",
      "Variedade de marcas"
    ],
    localBenefits: "Moradores do Ahú apreciam qualidade. Venha conhecer a Carplus!"
  },
  "cabral": {
    slug: "cabral",
    name: "Cabral",
    metaTitle: "Pneus Cabral Curitiba | Carplus - 18 min",
    metaDescription: "Loja de pneus para o Cabral, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços mecânicos. A 18 min pela Av. Paraná.",
    h1: "Pneus e Oficina para o Cabral",
    heroSubtitle: "Do Cabral à Carplus em 18 minutos",
    introText: "O Cabral é um bairro valorizado de Curitiba, com infraestrutura completa. Moradores exigentes encontram na Carplus pneus premium e serviço de qualidade.",
    localContext: "Com acesso pela Av. Paraná, o Cabral está a 18 minutos da Carplus. O trajeto é agradável e o serviço vale a visita.",
    servicesHighlight: [
      "Pneus para veículos executivos",
      "Alinhamento 3D de precisão",
      "Balanceamento computadorizado",
      "Troca de óleo sintético",
      "Ar-condicionado automotivo"
    ],
    searchPhrases: [
      "pneus Cabral Curitiba",
      "loja de pneus Cabral",
      "oficina Cabral",
      "alinhamento Cabral"
    ],
    nearbyLandmarks: [
      "Shopping Mueller",
      "Juvevê",
      "Alto da Glória"
    ],
    trafficTips: "Do Cabral, siga pela Av. Paraná até o centro, depois acesse a República Argentina.",
    testimonialContext: "moradores do Cabral",
    whyChooseUs: [
      "Pneus premium em estoque",
      "Técnicos especializados",
      "Ambiente confortável"
    ],
    localBenefits: "Moradores do Cabral merecem o melhor. Venha à Carplus!"
  },
  "juveve": {
    slug: "juveve",
    name: "Juvevê",
    metaTitle: "Pneus Juvevê Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus para o Juvevê, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 15 min pela João Gualberto.",
    h1: "Pneus e Oficina para o Juvevê",
    heroSubtitle: "Do Juvevê à Carplus em 15 minutos",
    introText: "O Juvevê é um bairro nobre de Curitiba, conhecido pela gastronomia e qualidade de vida. Moradores encontram na Carplus pneus de alta qualidade.",
    localContext: "Com acesso pela Rua João Gualberto, o Juvevê está a 15 minutos da Carplus. Trajeto rápido para um atendimento premium.",
    servicesHighlight: [
      "Pneus para carros de luxo",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo premium",
      "Revisão executiva"
    ],
    searchPhrases: [
      "pneus Juvevê Curitiba",
      "loja de pneus Juvevê",
      "oficina Juvevê",
      "alinhamento Juvevê"
    ],
    nearbyLandmarks: [
      "Alto da Glória",
      "Centro",
      "Cabral"
    ],
    trafficTips: "Do Juvevê, siga pela Rua João Gualberto até o centro, depois acesse a República Argentina.",
    testimonialContext: "moradores do Juvevê",
    whyChooseUs: [
      "Qualidade premium",
      "Atendimento diferenciado",
      "Marcas exclusivas"
    ],
    localBenefits: "O Juvevê merece qualidade. Carplus é a escolha certa!"
  },
  "alto-da-gloria": {
    slug: "alto-da-gloria",
    name: "Alto da Glória",
    metaTitle: "Pneus Alto da Glória Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus para o Alto da Glória, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 15 min pela Nicolau Maeder.",
    h1: "Pneus e Oficina para o Alto da Glória",
    heroSubtitle: "Do Alto da Glória à Carplus em 15 minutos",
    introText: "O Alto da Glória é um dos bairros mais tradicionais de Curitiba, próximo ao centro. Moradores encontram na Carplus pneus de qualidade e atendimento profissional.",
    localContext: "Com acesso pela Rua Nicolau Maeder, o Alto da Glória está a 15 minutos da Carplus. Localização conveniente para resolver tudo rapidamente.",
    servicesHighlight: [
      "Pneus para sedans e hatches",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus Alto da Glória Curitiba",
      "loja de pneus Alto da Glória",
      "oficina Alto da Glória",
      "alinhamento Alto da Glória"
    ],
    nearbyLandmarks: [
      "Praça Ouvidor Pardinho",
      "Centro",
      "Juvevê"
    ],
    trafficTips: "Do Alto da Glória, siga pela Rua Nicolau Maeder até a Sete de Setembro, depois acesse a República Argentina.",
    testimonialContext: "moradores do Alto da Glória",
    whyChooseUs: [
      "Proximidade com o centro",
      "Preços justos",
      "Atendimento rápido"
    ],
    localBenefits: "Do Alto da Glória você chega rápido à Carplus!"
  },
  "alto-da-rua-xv": {
    slug: "alto-da-rua-xv",
    name: "Alto da Rua XV",
    metaTitle: "Pneus Alto da XV Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus para o Alto da Rua XV, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 15 min pela Itupava.",
    h1: "Pneus e Oficina para o Alto da Rua XV",
    heroSubtitle: "Do Alto da XV à Carplus em 15 minutos",
    introText: "O Alto da Rua XV é um bairro charmoso de Curitiba, conhecido pelos bares e restaurantes. Moradores encontram na Carplus pneus de qualidade pertinho de casa.",
    localContext: "Com acesso pela Rua Itupava, o Alto da XV está a 15 minutos da Carplus. Aproveite para trocar os pneus e depois curtir o bairro!",
    servicesHighlight: [
      "Pneus para carros urbanos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão básica"
    ],
    searchPhrases: [
      "pneus Alto da XV Curitiba",
      "loja de pneus Alto da Rua XV",
      "oficina Alto da XV",
      "alinhamento Alto da XV"
    ],
    nearbyLandmarks: [
      "Rua Itupava",
      "Cristo Rei",
      "Centro"
    ],
    trafficTips: "Do Alto da XV, siga pela Rua Itupava até a Av. Sete de Setembro, depois acesse a República Argentina.",
    testimonialContext: "moradores do Alto da Rua XV",
    whyChooseUs: [
      "Trajeto rápido",
      "Preços acessíveis",
      "Bom atendimento"
    ],
    localBenefits: "Resolva os pneus e depois aproveite o Alto da XV!"
  },
  "cristo-rei": {
    slug: "cristo-rei",
    name: "Cristo Rei",
    metaTitle: "Pneus Cristo Rei Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus para o Cristo Rei, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 15 min pela Av. São José.",
    h1: "Pneus e Oficina para o Cristo Rei",
    heroSubtitle: "Do Cristo Rei à Carplus em 15 minutos",
    introText: "O Cristo Rei é um bairro universitário de Curitiba, próximo à PUC-PR. Estudantes e moradores encontram na Carplus pneus com bom preço.",
    localContext: "Com acesso pela Av. São José, o Cristo Rei está a 15 minutos da Carplus. Opção acessível para quem precisa de pneus de qualidade.",
    servicesHighlight: [
      "Pneus econômicos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Freios básicos"
    ],
    searchPhrases: [
      "pneus Cristo Rei Curitiba",
      "loja de pneus Cristo Rei",
      "oficina Cristo Rei",
      "alinhamento Cristo Rei"
    ],
    nearbyLandmarks: [
      "PUC-PR",
      "Jardim Botânico",
      "Alto da XV"
    ],
    trafficTips: "Do Cristo Rei, siga pela Av. São José até a Sete de Setembro, depois acesse a República Argentina.",
    testimonialContext: "estudantes e moradores do Cristo Rei",
    whyChooseUs: [
      "Preços acessíveis",
      "Opções econômicas",
      "Parcelamento"
    ],
    localBenefits: "Estudantes e moradores do Cristo Rei economizam na Carplus!"
  },
  "tingui": {
    slug: "tingui",
    name: "Tingui",
    metaTitle: "Pneus Tingui Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus para o Tingui, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 20 min pela Mascarenhas de Moraes.",
    h1: "Pneus e Oficina para o Tingui",
    heroSubtitle: "Do Tingui à Carplus em 20 minutos",
    introText: "O Tingui é um bairro tranquilo de Curitiba, próximo ao famoso Parque Tingui. Moradores encontram na Carplus pneus de qualidade a 20 minutos.",
    localContext: "Com acesso pela Rua Mascarenhas de Moraes, o Tingui está bem conectado ao resto da cidade. A Carplus atende com qualidade.",
    servicesHighlight: [
      "Pneus para carros e SUVs",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão pré-viagem"
    ],
    searchPhrases: [
      "pneus Tingui Curitiba",
      "loja de pneus Tingui",
      "oficina Tingui",
      "alinhamento Tingui"
    ],
    nearbyLandmarks: [
      "Parque Tingui",
      "Bacacheri",
      "Boa Vista"
    ],
    trafficTips: "Do Tingui, siga pela Rua Mascarenhas de Moraes até a Av. Paraná ou Linha Verde.",
    testimonialContext: "moradores do Tingui",
    whyChooseUs: [
      "Qualidade garantida",
      "Preços justos",
      "Bom atendimento"
    ],
    localBenefits: "Aproveite para visitar o Parque Tingui depois de passar na Carplus!"
  },
  "atuba": {
    slug: "atuba",
    name: "Atuba",
    metaTitle: "Pneus Atuba Curitiba | Carplus - 25 min",
    metaDescription: "Loja de pneus para o Atuba, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 25 min pela BR-116.",
    h1: "Pneus e Oficina para o Atuba",
    heroSubtitle: "Do Atuba à Carplus em 25 minutos",
    introText: "O Atuba fica na divisa entre Curitiba e Colombo, com fácil acesso pela BR-116. Moradores encontram na Carplus pneus de qualidade.",
    localContext: "Com acesso pela BR-116, o Atuba está a 25 minutos da Carplus. O trajeto vale pela variedade e preço de pneus.",
    servicesHighlight: [
      "Pneus para todos os veículos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Atuba Curitiba",
      "loja de pneus Atuba",
      "oficina Atuba",
      "alinhamento Atuba"
    ],
    nearbyLandmarks: [
      "Colombo",
      "Santa Cândida",
      "BR-116"
    ],
    trafficTips: "Do Atuba, siga pela BR-116 ou Av. Paraná sentido centro, depois acesse a República Argentina.",
    testimonialContext: "moradores do Atuba",
    whyChooseUs: [
      "Preços de atacado",
      "Variedade de marcas",
      "Atendimento profissional"
    ],
    localBenefits: "Moradores do Atuba e Colombo encontram qualidade na Carplus!"
  },
  "barreirinha": {
    slug: "barreirinha",
    name: "Barreirinha",
    metaTitle: "Pneus Barreirinha Curitiba | Carplus - 22 min",
    metaDescription: "Loja de pneus para a Barreirinha, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 22 min pela Anita Garibaldi.",
    h1: "Pneus e Oficina para a Barreirinha",
    heroSubtitle: "Da Barreirinha à Carplus em 22 minutos",
    introText: "A Barreirinha é um bairro tradicional da zona norte de Curitiba. Moradores encontram na Carplus pneus de qualidade com preço acessível.",
    localContext: "Com acesso pela Av. Anita Garibaldi, a Barreirinha está a 22 minutos da Carplus. Trajeto direto e sem complicações.",
    servicesHighlight: [
      "Pneus econômicos e intermediários",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Freios e suspensão"
    ],
    searchPhrases: [
      "pneus Barreirinha Curitiba",
      "loja de pneus Barreirinha",
      "oficina Barreirinha",
      "alinhamento Barreirinha"
    ],
    nearbyLandmarks: [
      "Parque da Barreirinha",
      "Boa Vista",
      "Santa Cândida"
    ],
    trafficTips: "Da Barreirinha, siga pela Av. Anita Garibaldi sentido centro, depois acesse a República Argentina.",
    testimonialContext: "moradores da Barreirinha",
    whyChooseUs: [
      "Preços acessíveis",
      "Boa variedade",
      "Atendimento rápido"
    ],
    localBenefits: "Da Barreirinha o trajeto é tranquilo. Venha conhecer a Carplus!"
  },
  "pilarzinho": {
    slug: "pilarzinho",
    name: "Pilarzinho",
    metaTitle: "Pneus Pilarzinho Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus para o Pilarzinho, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 20 min pela Amauri Lange Silveira.",
    h1: "Pneus e Oficina para o Pilarzinho",
    heroSubtitle: "Do Pilarzinho à Carplus em 20 minutos",
    introText: "O Pilarzinho é um bairro residencial tranquilo de Curitiba. Moradores encontram na Carplus pneus de todas as marcas com preço justo.",
    localContext: "Com acesso pela Rua Amauri Lange Silveira, o Pilarzinho está a 20 minutos da Carplus. O trajeto é agradável.",
    servicesHighlight: [
      "Pneus para carros e SUVs",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão básica"
    ],
    searchPhrases: [
      "pneus Pilarzinho Curitiba",
      "loja de pneus Pilarzinho",
      "oficina Pilarzinho",
      "alinhamento Pilarzinho"
    ],
    nearbyLandmarks: [
      "São Lourenço",
      "Barreirinha",
      "Santa Felicidade"
    ],
    trafficTips: "Do Pilarzinho, siga pela Rua Amauri Lange Silveira até a Av. Manoel Ribas.",
    testimonialContext: "moradores do Pilarzinho",
    whyChooseUs: [
      "Preços justos",
      "Variedade de marcas",
      "Bom atendimento"
    ],
    localBenefits: "Moradores do Pilarzinho são bem-vindos na Carplus!"
  },
  "sao-lourenco": {
    slug: "sao-lourenco",
    name: "São Lourenço",
    metaTitle: "Pneus São Lourenço Curitiba | Carplus - 18 min",
    metaDescription: "Loja de pneus para o São Lourenço, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento. A 18 min pela Mateus Leme.",
    h1: "Pneus e Oficina para o São Lourenço",
    heroSubtitle: "Do São Lourenço à Carplus em 18 minutos",
    introText: "O São Lourenço é conhecido pelo famoso parque de mesmo nome. Moradores encontram na Carplus pneus de qualidade a 18 minutos.",
    localContext: "Com acesso pela Rua Mateus Leme, o São Lourenço está bem conectado ao centro e ao Portão. Trajeto rápido e fácil.",
    servicesHighlight: [
      "Pneus para todos os modelos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus São Lourenço Curitiba",
      "loja de pneus São Lourenço",
      "oficina São Lourenço",
      "alinhamento São Lourenço"
    ],
    nearbyLandmarks: [
      "Parque São Lourenço",
      "Ahú",
      "Pilarzinho"
    ],
    trafficTips: "Do São Lourenço, siga pela Rua Mateus Leme até o centro, depois acesse a República Argentina.",
    testimonialContext: "moradores do São Lourenço",
    whyChooseUs: [
      "Qualidade garantida",
      "Preços competitivos",
      "Atendimento profissional"
    ],
    localBenefits: "Aproveite para passear no Parque São Lourenço depois de visitar a Carplus!"
  },
  "bairro-alto": {
    slug: "bairro-alto",
    name: "Bairro Alto",
    metaTitle: "Pneus Bairro Alto Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus para o Bairro Alto, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 20 min pela Alberico Flores Bueno.",
    h1: "Pneus e Oficina para o Bairro Alto",
    heroSubtitle: "Do Bairro Alto à Carplus em 20 minutos",
    introText: "O Bairro Alto é um bairro tranquilo da zona norte de Curitiba. Moradores encontram na Carplus pneus de qualidade e preço acessível.",
    localContext: "Com acesso pela Rua Alberico Flores Bueno, o Bairro Alto está a 20 minutos da Carplus. Trajeto direto pela zona norte.",
    servicesHighlight: [
      "Pneus econômicos e intermediários",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus Bairro Alto Curitiba",
      "loja de pneus Bairro Alto",
      "oficina Bairro Alto",
      "alinhamento Bairro Alto"
    ],
    nearbyLandmarks: [
      "Boa Vista",
      "Bacacheri",
      "Tingui"
    ],
    trafficTips: "Do Bairro Alto, siga pela Rua Alberico Flores Bueno até a Linha Verde ou Av. Paraná.",
    testimonialContext: "moradores do Bairro Alto",
    whyChooseUs: [
      "Preços acessíveis",
      "Variedade de pneus",
      "Atendimento rápido"
    ],
    localBenefits: "Moradores do Bairro Alto economizam comprando pneus na Carplus!"
  },
  // ══════════════════════════════════════
  // NOVOS BAIRROS - ZONA SUL E OESTE
  // ══════════════════════════════════════
  "abranches": {
    slug: "abranches",
    name: "Abranches",
    metaTitle: "Pneus Abranches Curitiba | Carplus Centro Automotivo - 18 min",
    metaDescription: "Loja de pneus para Abranches, Curitiba. Pirelli, Michelin, Goodyear, Yokohama. Alinhamento 3D e serviços automotivos. A 18 min de você.",
    h1: "Pneus e Oficina para Abranches",
    heroSubtitle: "Abranches: pneus de qualidade a 18 minutos da sua casa",
    introText: "O bairro Abranches, tradicional região norte de Curitiba, conta com a Carplus Centro Automotivo para todas as necessidades automotivas. Oferecemos pneus das melhores marcas com instalação profissional e preço justo.",
    localContext: "Abranches é conhecido por suas áreas verdes e tranquilidade. Moradores do bairro encontram na Carplus uma oficina completa a apenas 18 minutos, com fácil acesso pela Av. Anita Garibaldi.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear e Yokohama",
      "Alinhamento computadorizado 3D Hunter",
      "Balanceamento de rodas",
      "Troca de óleo sintético e mineral",
      "Revisão de suspensão e freios"
    ],
    searchPhrases: [
      "pneus Abranches Curitiba",
      "loja de pneus Abranches",
      "oficina mecânica Abranches",
      "alinhamento Abranches",
      "borracharia Abranches"
    ],
    nearbyLandmarks: [
      "Parque Tingui",
      "Santa Cândida",
      "Cachoeira"
    ],
    trafficTips: "De Abranches, siga pela Av. Anita Garibaldi sentido centro. Continue até o Portão pela Av. República Argentina.",
    testimonialContext: "moradores de Abranches",
    whyChooseUs: [
      "Preços de atacado em todas as marcas",
      "Montagem e balanceamento inclusos",
      "Atendimento sem agendamento",
      "Garantia de fábrica"
    ],
    localBenefits: "Moradores de Abranches podem combinar a visita à Carplus com um passeio pelo Parque Tingui!"
  },
  "bom-retiro": {
    slug: "bom-retiro",
    name: "Bom Retiro",
    metaTitle: "Pneus Bom Retiro Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus para Bom Retiro, Curitiba. Pirelli, Michelin, Goodyear com instalação. Alinhamento 3D e balanceamento a 15 min.",
    h1: "Pneus e Oficina para o Bom Retiro",
    heroSubtitle: "Bom Retiro: sua oficina de confiança está a 15 minutos",
    introText: "O Bom Retiro é um bairro tradicional e bem localizado de Curitiba. Para moradores que buscam pneus de qualidade e serviços automotivos confiáveis, a Carplus Centro Automotivo oferece o melhor atendimento.",
    localContext: "Com fácil acesso ao centro e outras regiões, o Bom Retiro tem moradores exigentes que valorizam qualidade. A Carplus atende esse perfil com pneus premium e serviços de alta qualidade.",
    servicesHighlight: [
      "Pneus para carros populares e executivos",
      "Alinhamento 3D de precisão",
      "Balanceamento computadorizado",
      "Troca de óleo com filtros",
      "Diagnóstico eletrônico"
    ],
    searchPhrases: [
      "pneus Bom Retiro Curitiba",
      "loja de pneus Bom Retiro",
      "oficina Bom Retiro",
      "alinhamento Bom Retiro",
      "troca de pneu Bom Retiro"
    ],
    nearbyLandmarks: [
      "Centro Cívico",
      "Ahú",
      "Mercês"
    ],
    trafficTips: "Do Bom Retiro, siga em direção ao Centro Cívico e depois pela Av. República Argentina até o Portão.",
    testimonialContext: "moradores do Bom Retiro",
    whyChooseUs: [
      "Qualidade premium",
      "Atendimento personalizado",
      "Parcelamento facilitado"
    ],
    localBenefits: "O Bom Retiro tem acesso direto ao Portão - aproveite para conhecer a Carplus!"
  },
  "boqueirao": {
    slug: "boqueirao",
    name: "Boqueirão",
    metaTitle: "Pneus Boqueirão Curitiba | Carplus Centro Automotivo - 15 min",
    metaDescription: "Loja de pneus para o Boqueirão, Curitiba. Pirelli, Michelin, Goodyear, Yokohama. Alinhamento 3D, balanceamento e serviços. A 15 min pela Linha Verde.",
    h1: "Pneus e Oficina para o Boqueirão",
    heroSubtitle: "Boqueirão: pneus das melhores marcas a 15 minutos de distância",
    introText: "O Boqueirão é um dos maiores e mais populosos bairros de Curitiba. A Carplus Centro Automotivo atende essa comunidade com pneus de todas as marcas e serviços automotivos completos, com preço justo e atendimento de qualidade.",
    localContext: "Com forte comércio e grande população, o Boqueirão tem moradores que precisam de praticidade. A Carplus oferece estoque próprio de pneus e serviços rápidos para quem não pode perder tempo.",
    servicesHighlight: [
      "Pneus econômicos e intermediários para carros populares",
      "Pneus para SUVs e picapes leves",
      "Alinhamento computadorizado 3D",
      "Balanceamento de rodas aro 13 a 22",
      "Troca de óleo e revisão básica",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Boqueirão Curitiba",
      "loja de pneus Boqueirão",
      "oficina mecânica Boqueirão",
      "alinhamento Boqueirão",
      "borracharia Boqueirão",
      "pneus baratos Boqueirão"
    ],
    nearbyLandmarks: [
      "Terminal do Boqueirão",
      "Supermercado Condor Boqueirão",
      "Av. Marechal Floriano Peixoto"
    ],
    trafficTips: "Do Boqueirão, siga pela Linha Verde (sentido sul) e depois acesse a Av. República Argentina. A Carplus fica na Av. Arthur da Silva Bernardes.",
    testimonialContext: "moradores do Boqueirão",
    whyChooseUs: [
      "Maior estoque de pneus da região",
      "Preços competitivos",
      "Atendimento rápido sem fila",
      "Parcelamento em até 10x"
    ],
    localBenefits: "O Boqueirão tem acesso direto pela Linha Verde - venha conhecer a Carplus e aproveite os melhores preços!"
  },
  "butiatuvinha": {
    slug: "butiatuvinha",
    name: "Butiatuvinha",
    metaTitle: "Pneus Butiatuvinha Curitiba | Carplus - 25 min",
    metaDescription: "Loja de pneus para Butiatuvinha. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos a 25 min.",
    h1: "Pneus e Oficina para Butiatuvinha",
    heroSubtitle: "Butiatuvinha: pneus de qualidade com atendimento diferenciado",
    introText: "Butiatuvinha é um bairro residencial na região noroeste de Curitiba. Moradores encontram na Carplus Centro Automotivo todas as soluções em pneus e serviços automotivos.",
    localContext: "O bairro Butiatuvinha fica próximo ao Parque Tingui e Santa Felicidade. A Carplus atende moradores da região com qualidade e preço justo.",
    servicesHighlight: [
      "Pneus para todos os tipos de veículos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Butiatuvinha",
      "oficina Butiatuvinha",
      "alinhamento Butiatuvinha Curitiba",
      "troca de pneu Butiatuvinha"
    ],
    nearbyLandmarks: [
      "Parque Tingui",
      "Santa Felicidade",
      "Lamenha Pequena"
    ],
    trafficTips: "De Butiatuvinha, siga pela Av. Manoel Ribas em direção ao centro.",
    testimonialContext: "moradores de Butiatuvinha",
    whyChooseUs: [
      "Atendimento especializado",
      "Preços justos",
      "Garantia de fábrica"
    ],
    localBenefits: "Moradores de Butiatuvinha podem aproveitar para conhecer nossa loja no caminho para o centro!"
  },
  "cachoeira": {
    slug: "cachoeira",
    name: "Cachoeira",
    metaTitle: "Pneus Cachoeira Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus para Cachoeira, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento a 20 min.",
    h1: "Pneus e Oficina para Cachoeira",
    heroSubtitle: "Cachoeira: sua oficina de confiança está a 20 minutos",
    introText: "O bairro Cachoeira, na zona norte de Curitiba, conta com a Carplus Centro Automotivo para todas as necessidades em pneus e serviços automotivos.",
    localContext: "Cachoeira é um bairro tranquilo com fácil acesso à região central. A Carplus oferece pneus de qualidade e serviços profissionais.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento computadorizado",
      "Balanceamento de rodas",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Cachoeira Curitiba",
      "oficina Cachoeira",
      "alinhamento Cachoeira",
      "loja de pneus Cachoeira"
    ],
    nearbyLandmarks: [
      "Abranches",
      "Santa Cândida",
      "Barreirinha"
    ],
    trafficTips: "De Cachoeira, siga pela Av. Anita Garibaldi ou Rua Mateus Leme em direção ao centro.",
    testimonialContext: "moradores de Cachoeira",
    whyChooseUs: [
      "Qualidade garantida",
      "Preços acessíveis",
      "Atendimento rápido"
    ],
    localBenefits: "Moradores de Cachoeira economizam tempo e dinheiro na Carplus!"
  },
  "campina-do-siqueira": {
    slug: "campina-do-siqueira",
    name: "Campina do Siqueira",
    metaTitle: "Pneus Campina do Siqueira | Carplus Curitiba - 10 min",
    metaDescription: "Loja de pneus Campina do Siqueira, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços a 10 min.",
    h1: "Pneus e Oficina para Campina do Siqueira",
    heroSubtitle: "Campina do Siqueira: pneus de qualidade a apenas 10 minutos",
    introText: "A Campina do Siqueira é um bairro bem localizado na região oeste de Curitiba. Moradores contam com a Carplus para pneus e serviços automotivos de qualidade.",
    localContext: "Com acesso fácil ao centro e outras regiões, a Campina do Siqueira está a apenas 10 minutos da Carplus. Trajeto rápido pela Rua Padre Agostinho.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear e Yokohama",
      "Alinhamento 3D Hunter",
      "Balanceamento computadorizado",
      "Troca de óleo sintético",
      "Revisão de suspensão"
    ],
    searchPhrases: [
      "pneus Campina do Siqueira",
      "oficina Campina do Siqueira",
      "alinhamento Campina do Siqueira Curitiba",
      "troca de pneu Campina do Siqueira"
    ],
    nearbyLandmarks: [
      "Bigorrilho",
      "Mercês",
      "Seminário"
    ],
    trafficTips: "Da Campina do Siqueira, siga pela Rua Padre Agostinho até a Av. República Argentina.",
    testimonialContext: "moradores da Campina do Siqueira",
    whyChooseUs: [
      "Localização estratégica",
      "Preços competitivos",
      "Atendimento profissional"
    ],
    localBenefits: "A Campina do Siqueira tem acesso direto ao Portão - venha conhecer a Carplus!"
  },
  "campo-de-santana": {
    slug: "campo-de-santana",
    name: "Campo de Santana",
    metaTitle: "Pneus Campo de Santana Curitiba | Carplus - 25 min",
    metaDescription: "Loja de pneus para Campo de Santana, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 25 min.",
    h1: "Pneus e Oficina para Campo de Santana",
    heroSubtitle: "Campo de Santana: pneus com instalação profissional",
    introText: "Campo de Santana é um bairro em crescimento na região sul de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços completos para moradores do bairro.",
    localContext: "O Campo de Santana fica na região sul de Curitiba, com fácil acesso pela Av. Raimundo Blum. A Carplus atende moradores com preço justo.",
    servicesHighlight: [
      "Pneus para carros populares",
      "Pneus para SUVs e picapes",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo"
    ],
    searchPhrases: [
      "pneus Campo de Santana Curitiba",
      "oficina Campo de Santana",
      "alinhamento Campo de Santana",
      "borracharia Campo de Santana"
    ],
    nearbyLandmarks: [
      "Caximba",
      "Ganchinho",
      "Umbará"
    ],
    trafficTips: "Do Campo de Santana, siga pela Av. Raimundo Blum até a Linha Verde.",
    testimonialContext: "moradores do Campo de Santana",
    whyChooseUs: [
      "Preços acessíveis",
      "Qualidade garantida",
      "Parcelamento facilitado"
    ],
    localBenefits: "Moradores do Campo de Santana encontram na Carplus os melhores preços de Curitiba!"
  },
  "capao-da-imbuia": {
    slug: "capao-da-imbuia",
    name: "Capão da Imbuia",
    metaTitle: "Pneus Capão da Imbuia Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus para Capão da Imbuia. Pirelli, Michelin, Goodyear, Yokohama. Alinhamento 3D e serviços a 20 min.",
    h1: "Pneus e Oficina para Capão da Imbuia",
    heroSubtitle: "Capão da Imbuia: pneus das melhores marcas a 20 minutos",
    introText: "O Capão da Imbuia é um bairro tradicional da zona leste de Curitiba. A Carplus Centro Automotivo oferece pneus de todas as marcas e serviços automotivos completos.",
    localContext: "Com fácil acesso pela Av. Prefeito Mauricio Fruet, o Capão da Imbuia está bem conectado ao Portão. A Carplus atende moradores com qualidade e preço justo.",
    servicesHighlight: [
      "Pneus econômicos e premium",
      "Alinhamento computadorizado 3D",
      "Balanceamento de rodas",
      "Troca de óleo e filtros",
      "Revisão de suspensão e freios"
    ],
    searchPhrases: [
      "pneus Capão da Imbuia",
      "loja de pneus Capão da Imbuia Curitiba",
      "oficina Capão da Imbuia",
      "alinhamento Capão da Imbuia",
      "troca de pneu Capão da Imbuia"
    ],
    nearbyLandmarks: [
      "Jardim Botânico",
      "Cajuru",
      "Guabirotuba"
    ],
    trafficTips: "Do Capão da Imbuia, siga pela Av. Prefeito Mauricio Fruet até o Centro, depois pela Av. República Argentina até o Portão.",
    testimonialContext: "moradores do Capão da Imbuia",
    whyChooseUs: [
      "Estoque completo de pneus",
      "Preços competitivos",
      "Atendimento sem agendamento"
    ],
    localBenefits: "O Capão da Imbuia tem acesso rápido ao Portão - visite a Carplus!"
  },
  "caximba": {
    slug: "caximba",
    name: "Caximba",
    metaTitle: "Pneus Caximba Curitiba | Carplus Centro Automotivo - 30 min",
    metaDescription: "Loja de pneus para Caximba, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos.",
    h1: "Pneus e Oficina para Caximba",
    heroSubtitle: "Caximba: pneus de qualidade para sua família",
    introText: "O bairro Caximba, na extremidade sul de Curitiba, conta com a Carplus Centro Automotivo para todas as necessidades em pneus e serviços automotivos.",
    localContext: "A Caximba é um dos bairros mais ao sul de Curitiba. A Carplus oferece pneus de qualidade e preço justo para moradores que buscam economia.",
    servicesHighlight: [
      "Pneus econômicos para carros populares",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Caximba Curitiba",
      "oficina Caximba",
      "alinhamento Caximba",
      "borracharia Caximba"
    ],
    nearbyLandmarks: [
      "Ganchinho",
      "Umbará",
      "Campo de Santana"
    ],
    trafficTips: "Da Caximba, siga pela Av. Juscelino Kubitschek de Oliveira até a Linha Verde.",
    testimonialContext: "moradores da Caximba",
    whyChooseUs: [
      "Melhores preços de Curitiba",
      "Qualidade garantida",
      "Parcelamento em até 10x"
    ],
    localBenefits: "Moradores da Caximba economizam na Carplus - preço de atacado!"
  },
  "ecoville": {
    slug: "ecoville",
    name: "Ecoville",
    metaTitle: "Pneus Ecoville Curitiba | Carplus Centro Automotivo - 12 min",
    metaDescription: "Loja de pneus Ecoville, Curitiba. Pirelli, Michelin, Continental, Yokohama. Alinhamento 3D para SUVs e sedans executivos a 12 min.",
    h1: "Pneus e Oficina para o Ecoville",
    heroSubtitle: "Ecoville: pneus premium para veículos de alto padrão",
    introText: "O Ecoville é uma das regiões mais valorizadas de Curitiba, com moradores que buscam qualidade e excelência. A Carplus Centro Automotivo oferece pneus premium das melhores marcas mundiais e serviços de alta precisão.",
    localContext: "Conhecido pelo alto padrão de vida e proximidade com o Parque Barigui, o Ecoville reúne profissionais exigentes. A Carplus atende esse perfil com pneus para SUVs premium, sedans executivos e carros importados.",
    servicesHighlight: [
      "Pneus premium para BMW, Mercedes, Audi e Volvo",
      "Pneus Run Flat em estoque",
      "Alinhamento 3D Hunter para veículos importados",
      "Balanceamento de rodas aro 18 a 22",
      "Troca de óleo com lubrificantes sintéticos premium"
    ],
    searchPhrases: [
      "pneus Ecoville Curitiba",
      "pneus para BMW Ecoville",
      "loja de pneus Ecoville",
      "oficina Ecoville",
      "pneus premium Ecoville",
      "alinhamento Ecoville"
    ],
    nearbyLandmarks: [
      "Parque Barigui",
      "Shopping Barigui",
      "ParkShopping Barigui",
      "Hospital Marcelino Champagnat"
    ],
    trafficTips: "Do Ecoville, siga pela Av. Pedro Viriato Parigot de Souza até a Av. República Argentina. Trajeto rápido de aproximadamente 12 minutos.",
    testimonialContext: "moradores do Ecoville",
    whyChooseUs: [
      "Especialistas em pneus para veículos importados",
      "Estoque de pneus Run Flat e alta performance",
      "Atendimento premium",
      "Ambiente climatizado para espera"
    ],
    localBenefits: "Moradores do Ecoville encontram na Carplus pneus para veículos de alto padrão com atendimento diferenciado!"
  },
  "fanny": {
    slug: "fanny",
    name: "Fanny",
    metaTitle: "Pneus Fanny Curitiba | Carplus Centro Automotivo - 8 min",
    metaDescription: "Loja de pneus para Fanny, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento a 8 min.",
    h1: "Pneus e Oficina para o Fanny",
    heroSubtitle: "Fanny: pneus de qualidade pertinho de você",
    introText: "O bairro Fanny é uma região residencial tradicional de Curitiba. A Carplus Centro Automotivo, localizada no Portão vizinho, oferece pneus das melhores marcas com instalação profissional.",
    localContext: "Vizinho do Portão, o Fanny está a apenas 8 minutos da Carplus. Moradores do bairro têm a comodidade de uma oficina completa pertinho de casa.",
    servicesHighlight: [
      "Pneus para carros populares e familiares",
      "Alinhamento 3D de precisão",
      "Balanceamento computadorizado",
      "Troca de óleo e filtros",
      "Revisão de freios"
    ],
    searchPhrases: [
      "pneus Fanny Curitiba",
      "loja de pneus Fanny",
      "oficina Fanny",
      "alinhamento Fanny",
      "troca de pneu Fanny"
    ],
    nearbyLandmarks: [
      "Portão",
      "Lindóia",
      "Novo Mundo"
    ],
    trafficTips: "Do Fanny, siga pela Rua Nicola Pellanda até a Av. Arthur da Silva Bernardes.",
    testimonialContext: "vizinhos do Fanny",
    whyChooseUs: [
      "Vizinho do seu bairro",
      "Preços de atacado",
      "Atendimento rápido"
    ],
    localBenefits: "O Fanny está pertinho da Carplus - venha nos visitar!"
  },
  "ganchinho": {
    slug: "ganchinho",
    name: "Ganchinho",
    metaTitle: "Pneus Ganchinho Curitiba | Carplus - 25 min",
    metaDescription: "Loja de pneus para Ganchinho, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos.",
    h1: "Pneus e Oficina para Ganchinho",
    heroSubtitle: "Ganchinho: pneus com preço justo",
    introText: "O Ganchinho é um bairro da zona sul de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível para moradores da região.",
    localContext: "Localizado na região sul, o Ganchinho tem acesso ao Portão pela Linha Verde. A Carplus oferece os melhores preços de pneus de Curitiba.",
    servicesHighlight: [
      "Pneus econômicos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão"
    ],
    searchPhrases: [
      "pneus Ganchinho Curitiba",
      "oficina Ganchinho",
      "alinhamento Ganchinho",
      "borracharia Ganchinho"
    ],
    nearbyLandmarks: [
      "Umbará",
      "Sítio Cercado",
      "Caximba"
    ],
    trafficTips: "Do Ganchinho, siga pela Linha Verde em direção ao centro.",
    testimonialContext: "moradores do Ganchinho",
    whyChooseUs: [
      "Melhores preços",
      "Qualidade garantida",
      "Parcelamento"
    ],
    localBenefits: "Moradores do Ganchinho economizam na Carplus!"
  },
  "guabirotuba": {
    slug: "guabirotuba",
    name: "Guabirotuba",
    metaTitle: "Pneus Guabirotuba Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus Guabirotuba, Curitiba. Pirelli, Michelin, Goodyear, Yokohama. Alinhamento 3D e balanceamento a 15 min.",
    h1: "Pneus e Oficina para Guabirotuba",
    heroSubtitle: "Guabirotuba: pneus das melhores marcas a 15 minutos",
    introText: "O Guabirotuba é um bairro residencial da zona leste de Curitiba. A Carplus Centro Automotivo oferece pneus de todas as marcas e serviços automotivos completos para moradores do bairro.",
    localContext: "Bem localizado entre o Centro e o Jardim Botânico, o Guabirotuba tem fácil acesso à Carplus pela Av. das Torres ou Centro.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear e Yokohama",
      "Alinhamento computadorizado 3D",
      "Balanceamento de rodas",
      "Troca de óleo sintético e mineral",
      "Revisão de freios e suspensão"
    ],
    searchPhrases: [
      "pneus Guabirotuba Curitiba",
      "loja de pneus Guabirotuba",
      "oficina Guabirotuba",
      "alinhamento Guabirotuba",
      "troca de pneu Guabirotuba"
    ],
    nearbyLandmarks: [
      "Jardim Botânico",
      "Prado Velho",
      "Hauer"
    ],
    trafficTips: "Do Guabirotuba, siga pela Av. das Torres ou pelo Centro até a Av. República Argentina.",
    testimonialContext: "moradores do Guabirotuba",
    whyChooseUs: [
      "Estoque completo",
      "Preços competitivos",
      "Atendimento profissional"
    ],
    localBenefits: "O Guabirotuba está bem conectado ao Portão - venha conhecer a Carplus!"
  },
  "hauer": {
    slug: "hauer",
    name: "Hauer",
    metaTitle: "Pneus Hauer Curitiba | Carplus Centro Automotivo - 12 min",
    metaDescription: "Loja de pneus para Hauer, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento a 12 min.",
    h1: "Pneus e Oficina para o Hauer",
    heroSubtitle: "Hauer: pneus de qualidade a 12 minutos da sua casa",
    introText: "O Hauer é um bairro tradicional de Curitiba, com forte comércio e moradores que valorizam qualidade. A Carplus Centro Automotivo está a apenas 12 minutos para atender todas as suas necessidades automotivas.",
    localContext: "Localizado entre o Boqueirão e o Centro, o Hauer tem fácil acesso ao Portão. A Carplus oferece pneus de qualidade e serviços profissionais.",
    servicesHighlight: [
      "Pneus para carros populares e SUVs",
      "Alinhamento 3D Hunter",
      "Balanceamento computadorizado",
      "Troca de óleo",
      "Revisão de suspensão e freios"
    ],
    searchPhrases: [
      "pneus Hauer Curitiba",
      "loja de pneus Hauer",
      "oficina Hauer",
      "alinhamento Hauer",
      "troca de pneu Hauer"
    ],
    nearbyLandmarks: [
      "Boqueirão",
      "Prado Velho",
      "Guabirotuba"
    ],
    trafficTips: "Do Hauer, siga pela Av. Marechal Floriano Peixoto até o Rebouças, depois pela Av. República Argentina.",
    testimonialContext: "moradores do Hauer",
    whyChooseUs: [
      "Qualidade premium",
      "Preços justos",
      "Atendimento rápido"
    ],
    localBenefits: "O Hauer tem acesso direto ao Portão - visite a Carplus!"
  },
  "hugo-lange": {
    slug: "hugo-lange",
    name: "Hugo Lange",
    metaTitle: "Pneus Hugo Lange Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus Hugo Lange, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 15 min.",
    h1: "Pneus e Oficina para Hugo Lange",
    heroSubtitle: "Hugo Lange: pneus premium para veículos de alto padrão",
    introText: "Hugo Lange é um bairro nobre de Curitiba, com moradores que valorizam qualidade. A Carplus Centro Automotivo oferece pneus premium e serviços de excelência.",
    localContext: "Localizado próximo ao Jardim Botânico, Hugo Lange reúne famílias que buscam o melhor. A Carplus atende com pneus para veículos de alto padrão.",
    servicesHighlight: [
      "Pneus premium para sedans executivos",
      "Alinhamento 3D de precisão",
      "Balanceamento",
      "Troca de óleo sintético",
      "Diagnóstico eletrônico"
    ],
    searchPhrases: [
      "pneus Hugo Lange",
      "oficina Hugo Lange Curitiba",
      "alinhamento Hugo Lange",
      "troca de pneu Hugo Lange"
    ],
    nearbyLandmarks: [
      "Jardim Botânico",
      "Cristo Rei",
      "Jardim Social"
    ],
    trafficTips: "De Hugo Lange, siga pelo Centro até a Av. República Argentina.",
    testimonialContext: "moradores de Hugo Lange",
    whyChooseUs: [
      "Qualidade premium",
      "Atendimento diferenciado",
      "Pneus para importados"
    ],
    localBenefits: "Hugo Lange merece o melhor - visite a Carplus!"
  },
  "jardim-das-americas": {
    slug: "jardim-das-americas",
    name: "Jardim das Américas",
    metaTitle: "Pneus Jardim das Américas Curitiba | Carplus - 18 min",
    metaDescription: "Loja de pneus para Jardim das Américas. Pirelli, Michelin, Goodyear, Yokohama. Alinhamento 3D a 18 min.",
    h1: "Pneus e Oficina para Jardim das Américas",
    heroSubtitle: "Jardim das Américas: pneus das melhores marcas",
    introText: "O Jardim das Américas é um bairro tradicional de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços automotivos completos para moradores.",
    localContext: "Com fácil acesso pela Av. das Torres, o Jardim das Américas está a 18 minutos da Carplus. Moradores encontram pneus de todas as marcas.",
    servicesHighlight: [
      "Pneus para carros e SUVs",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Jardim das Américas Curitiba",
      "oficina Jardim das Américas",
      "alinhamento Jardim das Américas",
      "troca de pneu Jardim das Américas"
    ],
    nearbyLandmarks: [
      "Uberaba",
      "Guabirotuba",
      "Prado Velho"
    ],
    trafficTips: "Do Jardim das Américas, siga pela Av. das Torres em direção ao Centro.",
    testimonialContext: "moradores do Jardim das Américas",
    whyChooseUs: [
      "Variedade de pneus",
      "Preços justos",
      "Atendimento rápido"
    ],
    localBenefits: "O Jardim das Américas está bem conectado - venha à Carplus!"
  },
  "jardim-social": {
    slug: "jardim-social",
    name: "Jardim Social",
    metaTitle: "Pneus Jardim Social Curitiba | Carplus - 18 min",
    metaDescription: "Loja de pneus Jardim Social, Curitiba. Pirelli, Michelin, Continental. Alinhamento 3D para veículos de alto padrão.",
    h1: "Pneus e Oficina para Jardim Social",
    heroSubtitle: "Jardim Social: pneus premium para seu veículo",
    introText: "O Jardim Social é um dos bairros mais nobres de Curitiba. A Carplus Centro Automotivo oferece pneus premium para veículos de alto padrão.",
    localContext: "Bairro residencial de alto padrão, o Jardim Social reúne famílias exigentes. A Carplus atende com pneus para veículos importados e nacionais premium.",
    servicesHighlight: [
      "Pneus para BMW, Mercedes, Audi",
      "Alinhamento 3D Hunter",
      "Balanceamento de precisão",
      "Troca de óleo sintético",
      "Diagnóstico eletrônico"
    ],
    searchPhrases: [
      "pneus Jardim Social Curitiba",
      "oficina Jardim Social",
      "alinhamento Jardim Social",
      "pneus premium Jardim Social"
    ],
    nearbyLandmarks: [
      "Hugo Lange",
      "Jardim Botânico",
      "Cristo Rei"
    ],
    trafficTips: "Do Jardim Social, siga pelo Centro até a Av. República Argentina.",
    testimonialContext: "moradores do Jardim Social",
    whyChooseUs: [
      "Especialistas em pneus premium",
      "Atendimento VIP",
      "Ambiente climatizado"
    ],
    localBenefits: "O Jardim Social merece qualidade - visite a Carplus!"
  },
  "lamenha-pequena": {
    slug: "lamenha-pequena",
    name: "Lamenha Pequena",
    metaTitle: "Pneus Lamenha Pequena Curitiba | Carplus - 22 min",
    metaDescription: "Loja de pneus para Lamenha Pequena. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para Lamenha Pequena",
    heroSubtitle: "Lamenha Pequena: pneus de qualidade",
    introText: "Lamenha Pequena é um bairro da região noroeste de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.",
    localContext: "Próximo a Santa Felicidade, Lamenha Pequena tem acesso fácil ao centro. A Carplus atende moradores com qualidade.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus Lamenha Pequena",
      "oficina Lamenha Pequena Curitiba",
      "alinhamento Lamenha Pequena"
    ],
    nearbyLandmarks: [
      "Santa Felicidade",
      "Butiatuvinha",
      "São Braz"
    ],
    trafficTips: "De Lamenha Pequena, siga pela Av. Manoel Ribas em direção ao centro.",
    testimonialContext: "moradores de Lamenha Pequena",
    whyChooseUs: [
      "Qualidade garantida",
      "Preços justos",
      "Atendimento profissional"
    ],
    localBenefits: "Moradores de Lamenha Pequena são bem-vindos na Carplus!"
  },
  "lindoia": {
    slug: "lindoia",
    name: "Lindóia",
    metaTitle: "Pneus Lindóia Curitiba | Carplus Centro Automotivo - 8 min",
    metaDescription: "Loja de pneus Lindóia, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento a 8 min.",
    h1: "Pneus e Oficina para Lindóia",
    heroSubtitle: "Lindóia: pneus de qualidade a 8 minutos",
    introText: "O Lindóia é um bairro bem localizado de Curitiba, vizinho do Portão. A Carplus Centro Automotivo está a apenas 8 minutos para atender moradores com pneus de qualidade.",
    localContext: "Vizinho do Portão e Fanny, o Lindóia tem acesso direto à Carplus. Moradores encontram pneus das melhores marcas com preço justo.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear",
      "Alinhamento 3D Hunter",
      "Balanceamento computadorizado",
      "Troca de óleo",
      "Revisão de freios"
    ],
    searchPhrases: [
      "pneus Lindóia Curitiba",
      "oficina Lindóia",
      "alinhamento Lindóia",
      "troca de pneu Lindóia"
    ],
    nearbyLandmarks: [
      "Portão",
      "Fanny",
      "Novo Mundo"
    ],
    trafficTips: "Do Lindóia, siga pela Rua Nicola Pellanda ou pela Av. República Argentina.",
    testimonialContext: "vizinhos do Lindóia",
    whyChooseUs: [
      "Pertinho do seu bairro",
      "Preços de atacado",
      "Atendimento rápido"
    ],
    localBenefits: "O Lindóia está a poucos minutos da Carplus - visite-nos!"
  },
  "mossungue": {
    slug: "mossungue",
    name: "Mossunguê",
    metaTitle: "Pneus Mossunguê Curitiba | Carplus - 12 min",
    metaDescription: "Loja de pneus para Mossunguê, Curitiba. Pirelli, Michelin, Goodyear, Continental. Alinhamento 3D a 12 min.",
    h1: "Pneus e Oficina para Mossunguê",
    heroSubtitle: "Mossunguê: pneus premium para seu veículo",
    introText: "O Mossunguê é um bairro de alto padrão de Curitiba, próximo ao Parque Barigui. A Carplus Centro Automotivo oferece pneus premium e serviços de qualidade.",
    localContext: "Com moradores exigentes, o Mossunguê está a 12 minutos da Carplus. Oferecemos pneus para SUVs e sedans executivos.",
    servicesHighlight: [
      "Pneus premium para SUVs",
      "Alinhamento 3D de precisão",
      "Balanceamento",
      "Troca de óleo sintético",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Mossunguê Curitiba",
      "oficina Mossunguê",
      "alinhamento Mossunguê",
      "pneus para SUV Mossunguê"
    ],
    nearbyLandmarks: [
      "Parque Barigui",
      "Ecoville",
      "Campo Comprido"
    ],
    trafficTips: "Do Mossunguê, siga pela Av. Iguaçu até a Av. República Argentina.",
    testimonialContext: "moradores do Mossunguê",
    whyChooseUs: [
      "Pneus para veículos de alto padrão",
      "Atendimento premium",
      "Qualidade garantida"
    ],
    localBenefits: "O Mossunguê merece qualidade - visite a Carplus!"
  },
  "orleans": {
    slug: "orleans",
    name: "Orleans",
    metaTitle: "Pneus Orleans Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus Orleans, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos.",
    h1: "Pneus e Oficina para Orleans",
    heroSubtitle: "Orleans: pneus de qualidade",
    introText: "Orleans é um bairro residencial de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços profissionais.",
    localContext: "O bairro Orleans está bem localizado com acesso fácil ao Portão. A Carplus atende moradores com preço justo.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Orleans Curitiba",
      "oficina Orleans",
      "alinhamento Orleans",
      "troca de pneu Orleans"
    ],
    nearbyLandmarks: [
      "Seminário",
      "Bigorrilho",
      "Mercês"
    ],
    trafficTips: "De Orleans, siga pela Rua Padre Agostinho até a Av. República Argentina.",
    testimonialContext: "moradores de Orleans",
    whyChooseUs: [
      "Preços competitivos",
      "Qualidade",
      "Atendimento profissional"
    ],
    localBenefits: "Orleans está próximo da Carplus - venha nos visitar!"
  },
  "prado-velho": {
    slug: "prado-velho",
    name: "Prado Velho",
    metaTitle: "Pneus Prado Velho Curitiba | Carplus - 12 min",
    metaDescription: "Loja de pneus Prado Velho, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 12 min.",
    h1: "Pneus e Oficina para Prado Velho",
    heroSubtitle: "Prado Velho: pneus de qualidade a 12 minutos",
    introText: "O Prado Velho é um bairro bem localizado de Curitiba, próximo ao Centro e à PUCPR. A Carplus Centro Automotivo oferece pneus de qualidade.",
    localContext: "Com fácil acesso pela Av. das Torres, o Prado Velho está a 12 minutos da Carplus. Atendemos estudantes e moradores.",
    servicesHighlight: [
      "Pneus para carros populares",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão básica"
    ],
    searchPhrases: [
      "pneus Prado Velho Curitiba",
      "oficina Prado Velho",
      "alinhamento Prado Velho",
      "borracharia Prado Velho"
    ],
    nearbyLandmarks: [
      "PUCPR",
      "Guabirotuba",
      "Parolin"
    ],
    trafficTips: "Do Prado Velho, siga pela Av. Marechal Floriano Peixoto até o Rebouças.",
    testimonialContext: "moradores do Prado Velho",
    whyChooseUs: [
      "Preços acessíveis",
      "Qualidade",
      "Atendimento rápido"
    ],
    localBenefits: "O Prado Velho está bem conectado - visite a Carplus!"
  },
  "santa-quiteria": {
    slug: "santa-quiteria",
    name: "Santa Quitéria",
    metaTitle: "Pneus Santa Quitéria Curitiba | Carplus - 8 min",
    metaDescription: "Loja de pneus Santa Quitéria, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 8 min.",
    h1: "Pneus e Oficina para Santa Quitéria",
    heroSubtitle: "Santa Quitéria: pneus de qualidade pertinho",
    introText: "Santa Quitéria é um bairro tradicional de Curitiba, vizinho do Portão. A Carplus Centro Automotivo está a apenas 8 minutos com pneus das melhores marcas.",
    localContext: "Vizinho do Portão, Santa Quitéria tem acesso direto à Carplus. Moradores encontram qualidade e preço justo.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Santa Quitéria Curitiba",
      "oficina Santa Quitéria",
      "alinhamento Santa Quitéria",
      "troca de pneu Santa Quitéria"
    ],
    nearbyLandmarks: [
      "Portão",
      "Campo Comprido",
      "Fazendinha"
    ],
    trafficTips: "De Santa Quitéria, siga pela Rua João Dembinski até a Av. República Argentina.",
    testimonialContext: "vizinhos de Santa Quitéria",
    whyChooseUs: [
      "Pertinho do seu bairro",
      "Preços de atacado",
      "Atendimento profissional"
    ],
    localBenefits: "Santa Quitéria está pertinho da Carplus - venha nos visitar!"
  },
  "santo-inacio": {
    slug: "santo-inacio",
    name: "Santo Inácio",
    metaTitle: "Pneus Santo Inácio Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus Santo Inácio, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para Santo Inácio",
    heroSubtitle: "Santo Inácio: pneus de qualidade",
    introText: "Santo Inácio é um bairro da região oeste de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços profissionais.",
    localContext: "Com fácil acesso ao Portão, Santo Inácio está a 15 minutos da Carplus. Moradores encontram pneus de todas as marcas.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Santo Inácio Curitiba",
      "oficina Santo Inácio",
      "alinhamento Santo Inácio",
      "borracharia Santo Inácio"
    ],
    nearbyLandmarks: [
      "CIC",
      "Campo Comprido",
      "Santa Quitéria"
    ],
    trafficTips: "De Santo Inácio, siga pela Rua João Dembinski ou Av. Juscelino Kubitschek.",
    testimonialContext: "moradores de Santo Inácio",
    whyChooseUs: [
      "Preços competitivos",
      "Qualidade garantida",
      "Parcelamento"
    ],
    localBenefits: "Santo Inácio está bem conectado - visite a Carplus!"
  },
  "sao-braz": {
    slug: "sao-braz",
    name: "São Braz",
    metaTitle: "Pneus São Braz Curitiba | Carplus - 18 min",
    metaDescription: "Loja de pneus São Braz, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento.",
    h1: "Pneus e Oficina para São Braz",
    heroSubtitle: "São Braz: pneus de qualidade",
    introText: "São Braz é um bairro tradicional da região noroeste de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.",
    localContext: "Próximo a Santa Felicidade, São Braz tem acesso fácil ao Portão. A Carplus atende moradores com qualidade.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão"
    ],
    searchPhrases: [
      "pneus São Braz Curitiba",
      "oficina São Braz",
      "alinhamento São Braz",
      "troca de pneu São Braz"
    ],
    nearbyLandmarks: [
      "Santa Felicidade",
      "Butiatuvinha",
      "Lamenha Pequena"
    ],
    trafficTips: "De São Braz, siga pela Av. Manoel Ribas em direção ao centro.",
    testimonialContext: "moradores de São Braz",
    whyChooseUs: [
      "Qualidade",
      "Preços justos",
      "Atendimento profissional"
    ],
    localBenefits: "Moradores de São Braz são bem-vindos na Carplus!"
  },
  "sao-francisco": {
    slug: "sao-francisco",
    name: "São Francisco",
    metaTitle: "Pneus São Francisco Curitiba | Carplus - 12 min",
    metaDescription: "Loja de pneus São Francisco, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 12 min.",
    h1: "Pneus e Oficina para São Francisco",
    heroSubtitle: "São Francisco: pneus de qualidade",
    introText: "O bairro São Francisco é uma região nobre de Curitiba. A Carplus Centro Automotivo oferece pneus premium e serviços de qualidade.",
    localContext: "Localizado próximo ao Centro, São Francisco tem moradores exigentes. A Carplus atende com pneus de alta qualidade.",
    servicesHighlight: [
      "Pneus premium",
      "Alinhamento 3D Hunter",
      "Balanceamento",
      "Troca de óleo sintético",
      "Diagnóstico eletrônico"
    ],
    searchPhrases: [
      "pneus São Francisco Curitiba",
      "oficina São Francisco",
      "alinhamento São Francisco",
      "pneus premium São Francisco"
    ],
    nearbyLandmarks: [
      "Centro Histórico",
      "Mercês",
      "Batel"
    ],
    trafficTips: "De São Francisco, siga pela Av. Visconde de Guarapuava até a Av. República Argentina.",
    testimonialContext: "moradores de São Francisco",
    whyChooseUs: [
      "Qualidade premium",
      "Atendimento diferenciado",
      "Pneus para importados"
    ],
    localBenefits: "São Francisco merece qualidade - visite a Carplus!"
  },
  "sao-joao": {
    slug: "sao-joao",
    name: "São João",
    metaTitle: "Pneus São João Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus São João, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para São João",
    heroSubtitle: "São João: pneus de qualidade",
    introText: "São João é um bairro da região norte de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.",
    localContext: "O bairro São João tem acesso fácil ao centro. A Carplus atende moradores com qualidade e atendimento profissional.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus São João Curitiba",
      "oficina São João",
      "alinhamento São João",
      "borracharia São João"
    ],
    nearbyLandmarks: [
      "Santa Cândida",
      "Boa Vista",
      "Tingui"
    ],
    trafficTips: "De São João, siga pela Av. Paraná em direção ao centro.",
    testimonialContext: "moradores de São João",
    whyChooseUs: [
      "Preços acessíveis",
      "Qualidade",
      "Atendimento rápido"
    ],
    localBenefits: "Moradores de São João são bem-vindos na Carplus!"
  },
  "sao-miguel": {
    slug: "sao-miguel",
    name: "São Miguel",
    metaTitle: "Pneus São Miguel Curitiba | Carplus - 25 min",
    metaDescription: "Loja de pneus São Miguel, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para São Miguel",
    heroSubtitle: "São Miguel: pneus com preço justo",
    introText: "São Miguel é um bairro da zona sul de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível.",
    localContext: "O bairro São Miguel fica na região sul com acesso pela Linha Verde. A Carplus atende moradores com os melhores preços.",
    servicesHighlight: [
      "Pneus econômicos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão"
    ],
    searchPhrases: [
      "pneus São Miguel Curitiba",
      "oficina São Miguel",
      "alinhamento São Miguel",
      "borracharia São Miguel"
    ],
    nearbyLandmarks: [
      "CIC",
      "Tatuquara",
      "Pinheirinho"
    ],
    trafficTips: "De São Miguel, siga pela Linha Verde em direção ao centro.",
    testimonialContext: "moradores de São Miguel",
    whyChooseUs: [
      "Melhores preços",
      "Qualidade",
      "Parcelamento"
    ],
    localBenefits: "Moradores de São Miguel economizam na Carplus!"
  },
  "seminario": {
    slug: "seminario",
    name: "Seminário",
    metaTitle: "Pneus Seminário Curitiba | Carplus - 10 min",
    metaDescription: "Loja de pneus Seminário, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 10 min.",
    h1: "Pneus e Oficina para o Seminário",
    heroSubtitle: "Seminário: pneus de qualidade a 10 minutos",
    introText: "O Seminário é um bairro bem localizado de Curitiba. A Carplus Centro Automotivo está a apenas 10 minutos com pneus das melhores marcas.",
    localContext: "Vizinho do Bigorrilho e Mercês, o Seminário tem fácil acesso ao Portão. Moradores encontram qualidade e preço justo.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear",
      "Alinhamento 3D Hunter",
      "Balanceamento",
      "Troca de óleo",
      "Revisão de freios"
    ],
    searchPhrases: [
      "pneus Seminário Curitiba",
      "oficina Seminário",
      "alinhamento Seminário",
      "troca de pneu Seminário"
    ],
    nearbyLandmarks: [
      "Bigorrilho",
      "Mercês",
      "Campina do Siqueira"
    ],
    trafficTips: "Do Seminário, siga pela Rua Padre Agostinho até a Av. República Argentina.",
    testimonialContext: "moradores do Seminário",
    whyChooseUs: [
      "Localização estratégica",
      "Preços competitivos",
      "Atendimento profissional"
    ],
    localBenefits: "O Seminário está pertinho da Carplus - visite-nos!"
  },
  "taboao": {
    slug: "taboao",
    name: "Taboão",
    metaTitle: "Pneus Taboão Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus Taboão, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para Taboão",
    heroSubtitle: "Taboão: pneus de qualidade",
    introText: "Taboão é um bairro da região sul de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.",
    localContext: "O bairro Taboão tem acesso fácil pela Linha Verde. A Carplus atende moradores com qualidade.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Taboão Curitiba",
      "oficina Taboão",
      "alinhamento Taboão",
      "borracharia Taboão"
    ],
    nearbyLandmarks: [
      "Pinheirinho",
      "Capão Raso",
      "Novo Mundo"
    ],
    trafficTips: "Do Taboão, siga pela Linha Verde em direção ao Portão.",
    testimonialContext: "moradores do Taboão",
    whyChooseUs: [
      "Preços justos",
      "Qualidade",
      "Atendimento rápido"
    ],
    localBenefits: "Moradores do Taboão são bem-vindos na Carplus!"
  },
  "taruma": {
    slug: "taruma",
    name: "Tarumã",
    metaTitle: "Pneus Tarumã Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus Tarumã, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 20 min.",
    h1: "Pneus e Oficina para Tarumã",
    heroSubtitle: "Tarumã: pneus de qualidade",
    introText: "O Tarumã é um bairro tradicional de Curitiba, próximo ao Parque do Tarumã. A Carplus Centro Automotivo oferece pneus de qualidade.",
    localContext: "Com o famoso Parque do Tarumã, o bairro tem moradores que valorizam qualidade de vida. A Carplus atende com pneus de alta qualidade.",
    servicesHighlight: [
      "Pneus para carros e SUVs",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Tarumã Curitiba",
      "oficina Tarumã",
      "alinhamento Tarumã",
      "troca de pneu Tarumã"
    ],
    nearbyLandmarks: [
      "Parque do Tarumã",
      "Capão da Imbuia",
      "Cajuru"
    ],
    trafficTips: "Do Tarumã, siga pela Av. Prefeito Erasto Gaertner em direção ao centro.",
    testimonialContext: "moradores do Tarumã",
    whyChooseUs: [
      "Qualidade",
      "Preços justos",
      "Atendimento profissional"
    ],
    localBenefits: "O Tarumã tem acesso fácil ao Portão - visite a Carplus!"
  },
  "augusta": {
    slug: "augusta",
    name: "Augusta",
    metaTitle: "Pneus Augusta Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus Augusta, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para Augusta",
    heroSubtitle: "Augusta: pneus de qualidade",
    introText: "Augusta é um bairro da região de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços profissionais.",
    localContext: "O bairro Augusta está bem conectado às principais vias. A Carplus atende moradores com qualidade e preço justo.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus Augusta Curitiba",
      "oficina Augusta",
      "alinhamento Augusta",
      "borracharia Augusta"
    ],
    nearbyLandmarks: [
      "Bacacheri",
      "Boa Vista",
      "Tingui"
    ],
    trafficTips: "De Augusta, siga pelas principais vias em direção ao Portão.",
    testimonialContext: "moradores de Augusta",
    whyChooseUs: [
      "Qualidade",
      "Preços competitivos",
      "Atendimento"
    ],
    localBenefits: "Moradores de Augusta são bem-vindos na Carplus!"
  },
  "riviera": {
    slug: "riviera",
    name: "Riviera",
    metaTitle: "Pneus Riviera Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus Riviera, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para Riviera",
    heroSubtitle: "Riviera: pneus de qualidade",
    introText: "Riviera é um bairro residencial de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.",
    localContext: "O bairro Riviera está bem localizado com acesso fácil ao Portão. A Carplus atende moradores com qualidade.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Riviera Curitiba",
      "oficina Riviera",
      "alinhamento Riviera",
      "troca de pneu Riviera"
    ],
    nearbyLandmarks: [
      "Santa Quitéria",
      "Campo Comprido",
      "CIC"
    ],
    trafficTips: "De Riviera, siga pela Av. República Argentina em direção ao Portão.",
    testimonialContext: "moradores de Riviera",
    whyChooseUs: [
      "Preços justos",
      "Qualidade",
      "Atendimento profissional"
    ],
    localBenefits: "Riviera está próximo da Carplus - venha nos visitar!"
  },
  "alto-boqueirao": {
    slug: "alto-boqueirao",
    name: "Alto Boqueirão",
    metaTitle: "Pneus Alto Boqueirão Curitiba | Carplus - 18 min",
    metaDescription: "Loja de pneus Alto Boqueirão, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 18 min.",
    h1: "Pneus e Oficina para Alto Boqueirão",
    heroSubtitle: "Alto Boqueirão: pneus de qualidade",
    introText: "O Alto Boqueirão é uma região populosa de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível para moradores.",
    localContext: "Parte do grande Boqueirão, o Alto Boqueirão tem acesso pela Linha Verde. A Carplus atende com os melhores preços.",
    servicesHighlight: [
      "Pneus econômicos e intermediários",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão"
    ],
    searchPhrases: [
      "pneus Alto Boqueirão Curitiba",
      "oficina Alto Boqueirão",
      "alinhamento Alto Boqueirão",
      "borracharia Alto Boqueirão"
    ],
    nearbyLandmarks: [
      "Boqueirão",
      "Uberaba",
      "Hauer"
    ],
    trafficTips: "Do Alto Boqueirão, siga pela Linha Verde em direção ao centro.",
    testimonialContext: "moradores do Alto Boqueirão",
    whyChooseUs: [
      "Preços competitivos",
      "Qualidade",
      "Parcelamento"
    ],
    localBenefits: "O Alto Boqueirão tem acesso direto - visite a Carplus!"
  },
  "caiua": {
    slug: "caiua",
    name: "Caiuá",
    metaTitle: "Pneus Caiuá Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus Caiuá, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para Caiuá",
    heroSubtitle: "Caiuá: pneus de qualidade",
    introText: "Caiuá é um bairro da região sul de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.",
    localContext: "O bairro Caiuá fica próximo ao CIC com acesso fácil ao Portão. A Carplus atende moradores com qualidade.",
    servicesHighlight: [
      "Pneus econômicos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Caiuá Curitiba",
      "oficina Caiuá",
      "alinhamento Caiuá",
      "borracharia Caiuá"
    ],
    nearbyLandmarks: [
      "CIC",
      "Fazendinha",
      "Campo Comprido"
    ],
    trafficTips: "De Caiuá, siga pela Av. República Argentina em direção ao Portão.",
    testimonialContext: "moradores de Caiuá",
    whyChooseUs: [
      "Preços acessíveis",
      "Qualidade",
      "Atendimento rápido"
    ],
    localBenefits: "Moradores de Caiuá economizam na Carplus!"
  },
  // ══════════════════════════════════════
  // VILAS
  // ══════════════════════════════════════
  "vila-izabel": {
    slug: "vila-izabel",
    name: "Vila Izabel",
    metaTitle: "Pneus Vila Izabel Curitiba | Carplus Centro Automotivo - 5 min",
    metaDescription: "Loja de pneus Vila Izabel, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e balanceamento a 5 min.",
    h1: "Pneus e Oficina para Vila Izabel",
    heroSubtitle: "Vila Izabel: pneus de qualidade pertinho de você",
    introText: "A Vila Izabel é uma região vizinha do Portão. A Carplus Centro Automotivo está a apenas 5 minutos, oferecendo pneus das melhores marcas.",
    localContext: "Vizinha do Portão, a Vila Izabel tem acesso direto à Carplus. Moradores encontram qualidade e preço justo a poucos minutos de casa.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear, Yokohama",
      "Alinhamento 3D Hunter",
      "Balanceamento computadorizado",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Vila Izabel Curitiba",
      "oficina Vila Izabel",
      "alinhamento Vila Izabel",
      "troca de pneu Vila Izabel"
    ],
    nearbyLandmarks: [
      "Portão",
      "Água Verde",
      "Fanny"
    ],
    trafficTips: "Da Vila Izabel, são apenas 5 minutos até a Carplus pela Av. Arthur da Silva Bernardes.",
    testimonialContext: "vizinhos da Vila Izabel",
    whyChooseUs: [
      "Vizinho do seu bairro",
      "Preços de atacado",
      "Atendimento rápido"
    ],
    localBenefits: "A Vila Izabel está pertinho da Carplus - venha nos visitar!"
  },
  "vila-hauer": {
    slug: "vila-hauer",
    name: "Vila Hauer",
    metaTitle: "Pneus Vila Hauer Curitiba | Carplus - 12 min",
    metaDescription: "Loja de pneus Vila Hauer, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 12 min.",
    h1: "Pneus e Oficina para Vila Hauer",
    heroSubtitle: "Vila Hauer: pneus de qualidade",
    introText: "A Vila Hauer é uma região tradicional de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e serviços profissionais.",
    localContext: "Próxima ao Hauer, a Vila Hauer tem acesso fácil ao Portão. A Carplus atende moradores com qualidade.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão"
    ],
    searchPhrases: [
      "pneus Vila Hauer Curitiba",
      "oficina Vila Hauer",
      "alinhamento Vila Hauer",
      "troca de pneu Vila Hauer"
    ],
    nearbyLandmarks: [
      "Hauer",
      "Boqueirão",
      "Prado Velho"
    ],
    trafficTips: "Da Vila Hauer, siga pela Av. Marechal Floriano Peixoto até o Rebouças.",
    testimonialContext: "moradores da Vila Hauer",
    whyChooseUs: [
      "Preços competitivos",
      "Qualidade",
      "Atendimento profissional"
    ],
    localBenefits: "A Vila Hauer está bem conectada - visite a Carplus!"
  },
  "vila-guaira": {
    slug: "vila-guaira",
    name: "Vila Guaíra",
    metaTitle: "Pneus Vila Guaíra Curitiba | Carplus - 5 min",
    metaDescription: "Loja de pneus Vila Guaíra, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 5 min.",
    h1: "Pneus e Oficina para Vila Guaíra",
    heroSubtitle: "Vila Guaíra: pneus de qualidade pertinho",
    introText: "A Vila Guaíra é uma região próxima ao Guaíra e Portão. A Carplus Centro Automotivo está a apenas 5 minutos com pneus das melhores marcas.",
    localContext: "Vizinha do Portão, a Vila Guaíra tem acesso direto à Carplus. Moradores encontram qualidade e preço justo.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão de freios"
    ],
    searchPhrases: [
      "pneus Vila Guaíra Curitiba",
      "oficina Vila Guaíra",
      "alinhamento Vila Guaíra",
      "troca de pneu Vila Guaíra"
    ],
    nearbyLandmarks: [
      "Guaíra",
      "Portão",
      "Capão Raso"
    ],
    trafficTips: "Da Vila Guaíra, são poucos minutos até a Carplus pela Rua Kennedy.",
    testimonialContext: "vizinhos da Vila Guaíra",
    whyChooseUs: [
      "Pertinho do seu bairro",
      "Preços de atacado",
      "Atendimento rápido"
    ],
    localBenefits: "A Vila Guaíra está pertinho - venha à Carplus!"
  },
  "vila-fanny": {
    slug: "vila-fanny",
    name: "Vila Fanny",
    metaTitle: "Pneus Vila Fanny Curitiba | Carplus - 8 min",
    metaDescription: "Loja de pneus Vila Fanny, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 8 min.",
    h1: "Pneus e Oficina para Vila Fanny",
    heroSubtitle: "Vila Fanny: pneus de qualidade",
    introText: "A Vila Fanny é uma região próxima ao Fanny e Portão. A Carplus Centro Automotivo oferece pneus das melhores marcas.",
    localContext: "Vizinha do Portão, a Vila Fanny tem acesso fácil à Carplus. Moradores encontram qualidade e preço justo.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão"
    ],
    searchPhrases: [
      "pneus Vila Fanny Curitiba",
      "oficina Vila Fanny",
      "alinhamento Vila Fanny",
      "troca de pneu Vila Fanny"
    ],
    nearbyLandmarks: [
      "Fanny",
      "Portão",
      "Lindóia"
    ],
    trafficTips: "Da Vila Fanny, siga pela Rua Nicola Pellanda até a Carplus.",
    testimonialContext: "vizinhos da Vila Fanny",
    whyChooseUs: [
      "Preços justos",
      "Qualidade",
      "Atendimento rápido"
    ],
    localBenefits: "A Vila Fanny está pertinho - visite-nos!"
  },
  "vila-torres": {
    slug: "vila-torres",
    name: "Vila Torres",
    metaTitle: "Pneus Vila Torres Curitiba | Carplus - 12 min",
    metaDescription: "Loja de pneus Vila Torres, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para Vila Torres",
    heroSubtitle: "Vila Torres: pneus de qualidade",
    introText: "A Vila Torres é uma região de Curitiba próxima ao Prado Velho. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível.",
    localContext: "A Vila Torres tem acesso fácil ao centro e ao Portão. A Carplus atende moradores com os melhores preços.",
    servicesHighlight: [
      "Pneus econômicos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão"
    ],
    searchPhrases: [
      "pneus Vila Torres Curitiba",
      "oficina Vila Torres",
      "alinhamento Vila Torres",
      "borracharia Vila Torres"
    ],
    nearbyLandmarks: [
      "Prado Velho",
      "Centro",
      "Rebouças"
    ],
    trafficTips: "Da Vila Torres, siga pelo Centro até a Av. República Argentina.",
    testimonialContext: "moradores da Vila Torres",
    whyChooseUs: [
      "Preços acessíveis",
      "Qualidade",
      "Parcelamento"
    ],
    localBenefits: "Moradores da Vila Torres economizam na Carplus!"
  },
  "vila-oficinas": {
    slug: "vila-oficinas",
    name: "Vila Oficinas",
    metaTitle: "Pneus Vila Oficinas Curitiba | Carplus - 18 min",
    metaDescription: "Loja de pneus Vila Oficinas, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para Vila Oficinas",
    heroSubtitle: "Vila Oficinas: pneus de qualidade",
    introText: "A Vila Oficinas é uma região de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.",
    localContext: "A Vila Oficinas está bem conectada às principais vias. A Carplus atende moradores com qualidade.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus Vila Oficinas Curitiba",
      "oficina Vila Oficinas",
      "alinhamento Vila Oficinas",
      "troca de pneu Vila Oficinas"
    ],
    nearbyLandmarks: [
      "Cajuru",
      "Capão da Imbuia",
      "Uberaba"
    ],
    trafficTips: "Da Vila Oficinas, siga pela Av. das Torres em direção ao Centro.",
    testimonialContext: "moradores da Vila Oficinas",
    whyChooseUs: [
      "Qualidade",
      "Preços competitivos",
      "Atendimento"
    ],
    localBenefits: "Moradores da Vila Oficinas são bem-vindos na Carplus!"
  },
  // ══════════════════════════════════════
  // NOVAS VILAS E REGIÕES POPULARES
  // ══════════════════════════════════════
  "vila-sandra": {
    slug: "vila-sandra",
    name: "Vila Sandra",
    metaTitle: "Pneus Vila Sandra Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus Vila Sandra, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços a 15 min.",
    h1: "Pneus e Oficina para Vila Sandra",
    heroSubtitle: "Vila Sandra: pneus de qualidade",
    introText: "A Vila Sandra é uma comunidade de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo para moradores.",
    localContext: "A Vila Sandra tem acesso fácil ao Portão. A Carplus atende moradores com qualidade e preços competitivos.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Vila Sandra Curitiba",
      "oficina Vila Sandra",
      "alinhamento Vila Sandra",
      "borracharia Vila Sandra"
    ],
    nearbyLandmarks: [
      "CIC",
      "Fazendinha",
      "Portão"
    ],
    trafficTips: "Da Vila Sandra, siga em direção ao Portão pela Av. República Argentina.",
    testimonialContext: "moradores da Vila Sandra",
    whyChooseUs: [
      "Preços acessíveis",
      "Qualidade garantida",
      "Parcelamento"
    ],
    localBenefits: "Moradores da Vila Sandra são bem-vindos na Carplus!"
  },
  "neoville": {
    slug: "neoville",
    name: "Neoville",
    metaTitle: "Pneus Neoville Curitiba | Carplus Centro Automotivo - 12 min",
    metaDescription: "Loja de pneus Neoville, Curitiba. Pirelli, Michelin, Goodyear, Continental. Alinhamento 3D para veículos de alto padrão.",
    h1: "Pneus e Oficina para Neoville",
    heroSubtitle: "Neoville: pneus premium para seu veículo",
    introText: "O Neoville é um empreendimento de alto padrão em Curitiba. A Carplus Centro Automotivo oferece pneus premium e serviços de excelência para moradores exigentes.",
    localContext: "O Neoville reúne moradores que valorizam qualidade. A Carplus atende com pneus para veículos de alto padrão e serviços profissionais.",
    servicesHighlight: [
      "Pneus premium para SUVs e sedans executivos",
      "Alinhamento 3D Hunter de precisão",
      "Balanceamento computadorizado",
      "Troca de óleo sintético premium",
      "Diagnóstico eletrônico completo"
    ],
    searchPhrases: [
      "pneus Neoville Curitiba",
      "oficina Neoville",
      "alinhamento Neoville",
      "pneus premium Neoville"
    ],
    nearbyLandmarks: [
      "Ecoville",
      "Campo Comprido",
      "Mossunguê"
    ],
    trafficTips: "Do Neoville, siga pela Av. República Argentina em direção ao Portão.",
    testimonialContext: "moradores do Neoville",
    whyChooseUs: [
      "Especialistas em pneus premium",
      "Atendimento VIP",
      "Pneus para importados"
    ],
    localBenefits: "O Neoville merece qualidade premium - visite a Carplus!"
  },
  "vila-verde": {
    slug: "vila-verde",
    name: "Vila Verde",
    metaTitle: "Pneus Vila Verde Curitiba | Carplus - 15 min",
    metaDescription: "Loja de pneus Vila Verde, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos.",
    h1: "Pneus e Oficina para Vila Verde",
    heroSubtitle: "Vila Verde: pneus de qualidade",
    introText: "A Vila Verde é uma região residencial de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.",
    localContext: "A Vila Verde está bem localizada com acesso ao Portão. A Carplus atende moradores com qualidade e atendimento profissional.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Vila Verde Curitiba",
      "oficina Vila Verde",
      "alinhamento Vila Verde",
      "troca de pneu Vila Verde"
    ],
    nearbyLandmarks: [
      "CIC",
      "Campo Comprido",
      "Santa Quitéria"
    ],
    trafficTips: "Da Vila Verde, siga em direção ao Portão pelas principais vias.",
    testimonialContext: "moradores da Vila Verde",
    whyChooseUs: [
      "Preços competitivos",
      "Qualidade",
      "Atendimento rápido"
    ],
    localBenefits: "Moradores da Vila Verde são bem-vindos na Carplus!"
  },
  "vila-nossa-senhora-da-luz": {
    slug: "vila-nossa-senhora-da-luz",
    name: "Vila Nossa Senhora da Luz",
    metaTitle: "Pneus Vila Nossa Senhora da Luz | Carplus Curitiba - 15 min",
    metaDescription: "Loja de pneus Vila Nossa Senhora da Luz, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D a 15 min.",
    h1: "Pneus e Oficina para Vila Nossa Senhora da Luz",
    heroSubtitle: "Vila Nossa Senhora da Luz: pneus de qualidade",
    introText: "A Vila Nossa Senhora da Luz é uma comunidade de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível.",
    localContext: "A Vila Nossa Senhora da Luz tem acesso ao Portão pelas principais vias. A Carplus atende moradores com os melhores preços.",
    servicesHighlight: [
      "Pneus econômicos e intermediários",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão"
    ],
    searchPhrases: [
      "pneus Vila Nossa Senhora da Luz",
      "oficina Vila Nossa Senhora da Luz Curitiba",
      "alinhamento Vila Nossa Senhora da Luz",
      "borracharia Vila Nossa Senhora da Luz"
    ],
    nearbyLandmarks: [
      "CIC",
      "Pinheirinho",
      "Capão Raso"
    ],
    trafficTips: "Da Vila Nossa Senhora da Luz, siga em direção ao Portão.",
    testimonialContext: "moradores da Vila Nossa Senhora da Luz",
    whyChooseUs: [
      "Preços acessíveis",
      "Qualidade",
      "Parcelamento"
    ],
    localBenefits: "Moradores da Vila Nossa Senhora da Luz economizam na Carplus!"
  },
  "vila-pantanal": {
    slug: "vila-pantanal",
    name: "Vila Pantanal",
    metaTitle: "Pneus Vila Pantanal Curitiba | Carplus - 18 min",
    metaDescription: "Loja de pneus Vila Pantanal, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para Vila Pantanal",
    heroSubtitle: "Vila Pantanal: pneus de qualidade",
    introText: "A Vila Pantanal é uma comunidade de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo para moradores.",
    localContext: "A Vila Pantanal está conectada às principais vias de Curitiba. A Carplus atende moradores com qualidade.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Vila Pantanal Curitiba",
      "oficina Vila Pantanal",
      "alinhamento Vila Pantanal",
      "borracharia Vila Pantanal"
    ],
    nearbyLandmarks: [
      "Alto Boqueirão",
      "Uberaba",
      "Cajuru"
    ],
    trafficTips: "Da Vila Pantanal, siga pela Linha Verde em direção ao Portão.",
    testimonialContext: "moradores da Vila Pantanal",
    whyChooseUs: [
      "Preços justos",
      "Qualidade",
      "Atendimento profissional"
    ],
    localBenefits: "Moradores da Vila Pantanal são bem-vindos na Carplus!"
  },
  "vitoria-regia": {
    slug: "vitoria-regia",
    name: "Vitória Régia",
    metaTitle: "Pneus Vitória Régia Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus Vitória Régia, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços automotivos.",
    h1: "Pneus e Oficina para Vitória Régia",
    heroSubtitle: "Vitória Régia: pneus de qualidade",
    introText: "Vitória Régia é uma região de Curitiba. A Carplus Centro Automotivo oferece pneus de qualidade e preço acessível para moradores.",
    localContext: "Vitória Régia tem acesso ao Portão pelas principais vias. A Carplus atende moradores com os melhores preços.",
    servicesHighlight: [
      "Pneus econômicos",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Revisão geral"
    ],
    searchPhrases: [
      "pneus Vitória Régia Curitiba",
      "oficina Vitória Régia",
      "alinhamento Vitória Régia",
      "borracharia Vitória Régia"
    ],
    nearbyLandmarks: [
      "CIC",
      "Tatuquara",
      "Campo Comprido"
    ],
    trafficTips: "De Vitória Régia, siga em direção ao Portão pelas principais vias.",
    testimonialContext: "moradores de Vitória Régia",
    whyChooseUs: [
      "Preços acessíveis",
      "Qualidade",
      "Parcelamento"
    ],
    localBenefits: "Moradores de Vitória Régia são bem-vindos na Carplus!"
  },
  "sabara": {
    slug: "sabara",
    name: "Sabará",
    metaTitle: "Pneus Sabará Curitiba | Carplus - 20 min",
    metaDescription: "Loja de pneus Sabará, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para Sabará",
    heroSubtitle: "Sabará: pneus de qualidade",
    introText: "Sabará é um bairro de Curitiba na região do Pinheirinho. A Carplus Centro Automotivo oferece pneus de qualidade e preço justo.",
    localContext: "Sabará está bem localizado com acesso ao Portão. A Carplus atende moradores com qualidade e atendimento profissional.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Sabará Curitiba",
      "oficina Sabará",
      "alinhamento Sabará",
      "troca de pneu Sabará"
    ],
    nearbyLandmarks: [
      "Pinheirinho",
      "Capão Raso",
      "Tatuquara"
    ],
    trafficTips: "De Sabará, siga em direção ao Portão pela Rua Kennedy ou pela Linha Verde.",
    testimonialContext: "moradores de Sabará",
    whyChooseUs: [
      "Preços competitivos",
      "Qualidade",
      "Atendimento rápido"
    ],
    localBenefits: "Moradores de Sabará são bem-vindos na Carplus!"
  },
  "santa-felicidade-norte": {
    slug: "santa-felicidade-norte",
    name: "Santa Felicidade Norte",
    metaTitle: "Pneus Santa Felicidade Norte | Carplus Curitiba - 20 min",
    metaDescription: "Loja de pneus Santa Felicidade Norte, Curitiba. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços.",
    h1: "Pneus e Oficina para Santa Felicidade Norte",
    heroSubtitle: "Santa Felicidade Norte: pneus de qualidade",
    introText: "Santa Felicidade Norte é uma região tradicional de Curitiba, conhecida pela gastronomia italiana. A Carplus Centro Automotivo oferece pneus de qualidade.",
    localContext: "Santa Felicidade Norte fica na região noroeste de Curitiba, com acesso pela Av. Manoel Ribas. A Carplus atende moradores com qualidade.",
    servicesHighlight: [
      "Pneus para carros e SUVs",
      "Alinhamento 3D Hunter",
      "Balanceamento",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Santa Felicidade Norte",
      "oficina Santa Felicidade Norte Curitiba",
      "alinhamento Santa Felicidade Norte",
      "troca de pneu Santa Felicidade Norte"
    ],
    nearbyLandmarks: [
      "Santa Felicidade",
      "Butiatuvinha",
      "São Braz"
    ],
    trafficTips: "De Santa Felicidade Norte, siga pela Av. Manoel Ribas em direção ao centro.",
    testimonialContext: "moradores de Santa Felicidade Norte",
    whyChooseUs: [
      "Qualidade",
      "Preços justos",
      "Atendimento profissional"
    ],
    localBenefits: "Moradores de Santa Felicidade Norte são bem-vindos na Carplus!"
  },
  // ══════════════════════════════════════
  // REGIÃO METROPOLITANA - NOVOS
  // ══════════════════════════════════════
  "piraquara": {
    slug: "piraquara",
    name: "Piraquara",
    metaTitle: "Pneus Piraquara PR | Carplus Curitiba - 35 min",
    metaDescription: "Loja de pneus para Piraquara, PR. Pirelli, Michelin, Goodyear, Yokohama. Alinhamento 3D e serviços. A 35 min pela BR-116.",
    h1: "Pneus e Oficina para Piraquara",
    heroSubtitle: "De Piraquara à Carplus em 35 minutos",
    introText: "Piraquara é uma cidade da região metropolitana de Curitiba, conhecida pelos mananciais. Moradores encontram na Carplus pneus de qualidade e preços que compensam o deslocamento.",
    localContext: "Com acesso pela BR-116 e pela Rodovia João Leopoldo Jacomel, Piraquara está a 35 minutos da Carplus. O trajeto vale pela economia e qualidade.",
    servicesHighlight: [
      "Pneus Pirelli, Michelin, Goodyear e Yokohama",
      "Alinhamento computadorizado 3D",
      "Balanceamento de rodas",
      "Troca de óleo sintético e mineral",
      "Revisão de suspensão e freios"
    ],
    searchPhrases: [
      "pneus Piraquara PR",
      "loja de pneus Piraquara",
      "oficina Piraquara",
      "alinhamento Piraquara",
      "borracharia Piraquara"
    ],
    nearbyLandmarks: [
      "Centro de Piraquara",
      "Pinhais",
      "Quatro Barras"
    ],
    trafficTips: "De Piraquara, siga pela BR-116 ou pela Rodovia João Leopoldo Jacomel em direção a Curitiba.",
    testimonialContext: "moradores de Piraquara",
    whyChooseUs: [
      "Preços de atacado",
      "Variedade de pneus",
      "Atendimento profissional",
      "Parcelamento em até 10x"
    ],
    localBenefits: "Muitos clientes de Piraquara são clientes fiéis da Carplus. Venha conhecer!"
  },
  "quatro-barras": {
    slug: "quatro-barras",
    name: "Quatro Barras",
    metaTitle: "Pneus Quatro Barras PR | Carplus Curitiba - 30 min",
    metaDescription: "Loja de pneus para Quatro Barras, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 30 min pela BR-116.",
    h1: "Pneus e Oficina para Quatro Barras",
    heroSubtitle: "De Quatro Barras à Carplus em 30 minutos",
    introText: "Quatro Barras é uma cidade da região metropolitana de Curitiba, próxima à Serra do Mar. Moradores encontram na Carplus pneus de qualidade e excelente atendimento.",
    localContext: "Com acesso pela BR-116, Quatro Barras está a 30 minutos da Carplus. A viagem vale pela economia em pneus e serviços de qualidade.",
    servicesHighlight: [
      "Pneus para carros e SUVs",
      "Alinhamento 3D Hunter",
      "Balanceamento computadorizado",
      "Troca de óleo",
      "Revisão completa"
    ],
    searchPhrases: [
      "pneus Quatro Barras PR",
      "loja de pneus Quatro Barras",
      "oficina Quatro Barras",
      "alinhamento Quatro Barras",
      "borracharia Quatro Barras"
    ],
    nearbyLandmarks: [
      "Centro de Quatro Barras",
      "Campina Grande do Sul",
      "Piraquara"
    ],
    trafficTips: "De Quatro Barras, siga pela BR-116 em direção a Curitiba.",
    testimonialContext: "moradores de Quatro Barras",
    whyChooseUs: [
      "Preços justos",
      "Qualidade premium",
      "Atendimento especializado"
    ],
    localBenefits: "Moradores de Quatro Barras são bem-vindos na Carplus!"
  },
  "campina-grande-do-sul": {
    slug: "campina-grande-do-sul",
    name: "Campina Grande do Sul",
    metaTitle: "Pneus Campina Grande do Sul PR | Carplus Curitiba - 35 min",
    metaDescription: "Loja de pneus para Campina Grande do Sul, PR. Pirelli, Michelin, Goodyear. Alinhamento 3D e serviços. A 35 min pela BR-116.",
    h1: "Pneus e Oficina para Campina Grande do Sul",
    heroSubtitle: "De Campina Grande do Sul à Carplus em 35 minutos",
    introText: "Campina Grande do Sul é uma cidade da região metropolitana de Curitiba. Moradores encontram na Carplus pneus de qualidade e preços que compensam o deslocamento.",
    localContext: "Com acesso pela BR-116, Campina Grande do Sul está a 35 minutos da Carplus. A economia em pneus vale a viagem.",
    servicesHighlight: [
      "Pneus das melhores marcas",
      "Alinhamento 3D",
      "Balanceamento",
      "Troca de óleo",
      "Suspensão e freios"
    ],
    searchPhrases: [
      "pneus Campina Grande do Sul PR",
      "loja de pneus Campina Grande do Sul",
      "oficina Campina Grande do Sul",
      "alinhamento Campina Grande do Sul",
      "borracharia Campina Grande do Sul"
    ],
    nearbyLandmarks: [
      "Centro de Campina Grande do Sul",
      "Quatro Barras",
      "Bocaiúva do Sul"
    ],
    trafficTips: "De Campina Grande do Sul, siga pela BR-116 em direção a Curitiba.",
    testimonialContext: "moradores de Campina Grande do Sul",
    whyChooseUs: [
      "Preços de atacado",
      "Qualidade garantida",
      "Parcelamento facilitado"
    ],
    localBenefits: "Moradores de Campina Grande do Sul são bem-vindos na Carplus!"
  }
};
function getNeighborhoodSeoContent(slug) {
  return NEIGHBORHOOD_SEO_CONTENT[slug] || null;
}
function generateGenericSeoContent(name, slug, tempo, via) {
  return {
    slug,
    name,
    metaTitle: `Pneus ${name} | Carplus Centro Automotivo Curitiba - ${tempo}`,
    metaDescription: `Loja de pneus para ${name}. Pirelli, Michelin, Goodyear com instalação inclusa. Alinhamento 3D e balanceamento. A ${tempo} de você.`,
    h1: `Pneus e Oficina para ${name}`,
    heroSubtitle: `${name}: sua oficina de confiança está a ${tempo}`,
    introText: `Moradores de ${name} encontram na Carplus Centro Automotivo a melhor opção em pneus e serviços automotivos em Curitiba. Localizada no Portão, a ${tempo} de você, oferecemos pneus Pirelli, Michelin, Goodyear e Continental com montagem e balanceamento inclusos.`,
    localContext: `${name} tem acesso fácil ao Portão via ${via}. A Carplus atende moradores da região com qualidade, preço justo e atendimento profissional há mais de 10 anos.`,
    servicesHighlight: [
      "Pneus das melhores marcas com instalação inclusa",
      "Alinhamento computadorizado 3D",
      "Balanceamento de rodas",
      "Troca de óleo e filtros",
      "Revisão de suspensão e freios",
      "Diagnóstico eletrônico"
    ],
    searchPhrases: [
      `pneus ${name}`,
      `loja de pneus ${name}`,
      `oficina ${name}`,
      `alinhamento ${name}`,
      `borracharia ${name}`,
      `troca de pneu ${name}`
    ],
    nearbyLandmarks: [],
    trafficTips: `Do ${name}, siga pela ${via} em direção ao Portão. A Carplus fica na Av. Arthur da Silva Bernardes, 1323.`,
    testimonialContext: `moradores de ${name}`,
    whyChooseUs: [
      "Preços de atacado em pneus",
      "Montagem e balanceamento inclusos",
      "Garantia de fábrica",
      "Parcelamento em até 10x sem juros"
    ],
    localBenefits: `Moradores de ${name} são bem-vindos! Venha conhecer a Carplus e descubra por que somos a oficina mais bem avaliada do Portão.`
  };
}
function FaqItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "border-b border-gray-100 last:border-none", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsOpen(!isOpen),
        className: "w-full py-5 px-6 flex justify-between items-start text-left group",
        children: [
          /* @__PURE__ */ jsx("span", { className: `text-sm md:text-base font-bold transition-colors pr-4 whitespace-normal break-words overflow-wrap-anywhere flex-1 ${isOpen ? "text-primary" : "text-dark"}`, children: q }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { rotate: isOpen ? 180 : 0 },
              className: `p-1.5 rounded-full flex-shrink-0 self-start ${isOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-400"}`,
              children: /* @__PURE__ */ jsx(ChevronDown, { size: 18 })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: { height: "auto", opacity: 1 },
        exit: { height: 0, opacity: 0 },
        className: "overflow-hidden",
        children: /* @__PURE__ */ jsx("p", { className: "px-6 pb-5 text-gray-500 leading-relaxed", children: a })
      }
    ) })
  ] });
}
function NeighborhoodDetail() {
  const { slug } = useParams();
  const bairro = NEIGHBORHOODS.find(
    (n) => n.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-") === slug || n.name.toLowerCase().replace(/\s+/g, "-") === slug
  );
  const slugForUrl = bairro ? bairro.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-") : slug;
  const seoContent = bairro ? getNeighborhoodSeoContent(slugForUrl || "") || generateGenericSeoContent(bairro.name, slugForUrl || "", bairro.tempo, bairro.via) : null;
  const shouldIndex = isIndexableNeighborhood(slugForUrl);
  const __seo = useSEO(
    bairro && seoContent ? {
      title: seoContent.metaTitle,
      description: seoContent.metaDescription,
      canonical: `https://www.carpluspneuseoficina.com.br/bairro/${slugForUrl}`,
      noindex: !shouldIndex,
      ogImage: "/images/loja/carplus-oficina-portao-fachada-curitiba.jpg",
      schemaJSON: [
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Carplus Centro Automotivo",
          "description": seoContent.metaDescription,
          "url": `https://www.carpluspneuseoficina.com.br/bairro/${slugForUrl}`,
          "telephone": "+55-41-3082-7282",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Arthur da Silva Bernardes, 1323",
            "addressLocality": "Curitiba",
            "addressRegion": "PR",
            "postalCode": "80320-300",
            "addressCountry": "BR"
          },
          "geo": { "@type": "GeoCoordinates", "latitude": -25.477, "longitude": -49.2845 },
          "areaServed": [
            { "@type": "City", "name": "Curitiba" },
            { "@type": "Neighborhood", "name": bairro.name }
          ],
          "priceRange": "$$",
          "openingHours": ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "850",
            "bestRating": "5"
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carpluspneuseoficina.com.br/" },
            { "@type": "ListItem", "position": 2, "name": "Bairros Atendidos", "item": "https://www.carpluspneuseoficina.com.br/bairros" },
            { "@type": "ListItem", "position": 3, "name": bairro.name, "item": `https://www.carpluspneuseoficina.com.br/bairro/${slugForUrl}` }
          ]
        },
        {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Venda e instalação de pneus",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Carplus Centro Automotivo"
          },
          "areaServed": {
            "@type": "Neighborhood",
            "name": bairro.name,
            "containedInPlace": {
              "@type": "City",
              "name": "Curitiba"
            }
          },
          "description": `Venda de pneus Pirelli, Michelin, Goodyear e Continental para moradores de ${bairro.name}. Instalação, alinhamento 3D e balanceamento inclusos.`
        },
        getGaleriaSchema(bairro.name)
      ]
    } : { title: "Bairro não encontrado | Carplus", description: "Bairro não encontrado.", noindex: true }
  );
  if (!bairro || !seoContent) return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-white flex items-center justify-center", children: "Bairro não encontrado" });
  const faqItems = getFaqCompleto(bairro.name, slugForUrl || "", bairro.tempo, bairro.via);
  return /* @__PURE__ */ jsxs("div", { className: "bg-white min-h-screen", children: [
    __seo,
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsxs("section", { className: "relative min-h-[580px] flex flex-col justify-end bg-dark text-white overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              loading: "lazy",
              src: "/images/hero/pneu-prinx-hicity-curitiba.webp",
              width: 1200,
              height: 801,
              className: "w-full h-full object-cover",
              alt: `Loja de pneus para ${bairro.name} - Carplus Centro Automotivo Curitiba`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 relative z-10 w-full pt-32 pb-24", children: [
          /* @__PURE__ */ jsx("nav", { className: "mb-6", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxs("ol", { className: "flex items-center gap-2 text-xs text-white/60", children: [
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-white transition-colors", children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "mx-1", children: "/" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/bairros", className: "hover:text-white transition-colors", children: "Bairros Atendidos" }) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "mx-1", children: "/" }) }),
            /* @__PURE__ */ jsx("li", { className: "text-primary font-bold", children: bairro.name })
          ] }) }),
          /* @__PURE__ */ jsxs(Link, { to: "/bairros", className: "inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-6 hover:gap-4 transition-all", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { size: 16 }),
            " Voltar para lista"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight font-bold [text-shadow:_0_2px_12px_rgb(0_0_0_/_55%)]", children: [
            seoContent.h1.split(bairro.name)[0],
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: bairro.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-white/70 font-light mb-4 max-w-3xl [text-shadow:_0_1px_8px_rgb(0_0_0_/_50%)]", children: seoContent.heroSubtitle }),
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8", children: [
            /* @__PURE__ */ jsx(Clock, { size: 18, className: "text-primary" }),
            /* @__PURE__ */ jsxs("span", { className: "text-white font-bold", children: [
              "Apenas ",
              bairro.tempo,
              " de carro"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-white/50", children: [
              "via ",
              bairro.via
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `https://wa.me/554130827282?text=Olá! Moro no ${bairro.name} e preciso de pneus/serviços automotivos.`,
                className: "bg-[#25D366] text-white px-6 py-3.5 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-[#20BD5A] transition-all shadow-lg shadow-green-900/30 uppercase tracking-tight",
                children: [
                  /* @__PURE__ */ jsx(MessageSquare, { size: 17 }),
                  " WhatsApp: (41) 3082-7282"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `https://www.google.com/maps/dir/${encodeURIComponent(bairro.name + ", Curitiba, PR")}/Carplus+Auto+Center+Portão+Curitiba`,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-white text-dark px-6 py-3.5 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-gray-100 transition-all shadow-md uppercase tracking-tight",
                children: [
                  /* @__PURE__ */ jsx(Navigation, { size: 17 }),
                  " Ver Rota no Maps"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "tel:+554130827282",
                className: "bg-primary text-black px-6 py-3.5 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-yellow-500 transition-all shadow-lg shadow-primary/30 uppercase tracking-tight",
                children: [
                  /* @__PURE__ */ jsx(Phone, { size: 17 }),
                  " Ligar Agora"
                ]
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-gray-400", children: "Sobre o atendimento" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug tracking-tight text-dark", children: [
            "Loja de Pneus e Oficina para ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: bairro.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 leading-relaxed mb-6", children: seoContent.introText }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 leading-relaxed mb-8", children: seoContent.localContext }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-2xl p-4 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-primary", children: bairro.tempo }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 uppercase tracking-wide", children: "Distância" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-2xl p-4 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-primary", children: "4.9" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 uppercase tracking-wide", children: "Avaliação" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-2xl p-4 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-primary", children: "10+" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 uppercase tracking-wide", children: "Anos" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-2xl p-4 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-primary", children: "10x" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 uppercase tracking-wide", children: "Parcelamento" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-primary/10 border border-primary/20 rounded-2xl p-6", children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold text-dark mb-2", children: "Precisa de pneus ou serviços?" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: seoContent.localBenefits }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: `https://wa.me/554130827282?text=Olá! Moro no ${bairro.name} e gostaria de um orçamento.`,
                className: "inline-flex items-center gap-2 bg-primary text-black px-5 py-2.5 rounded-full font-bold text-sm hover:bg-yellow-500 transition-all",
                children: [
                  /* @__PURE__ */ jsx(MessageSquare, { size: 16 }),
                  " Solicitar Orçamento"
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-dark text-white rounded-3xl p-8 mb-6", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold mb-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Wrench, { className: "text-primary" }),
              " Serviços para ",
              bairro.name
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: seoContent.servicesHighlight.map((service, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle, { size: 20, className: "text-primary flex-shrink-0 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: service })
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-3xl p-8", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold mb-6 flex items-center gap-3 text-dark", children: [
              /* @__PURE__ */ jsx(Car, { className: "text-primary" }),
              " Marcas Disponíveis"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: ["Pirelli", "Michelin", "Goodyear", "Continental", "Firestone", "Bridgestone", "Yokohama"].map((marca) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-white rounded-xl p-3 border border-gray-100", children: [
              /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-primary rounded-full" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-dark", children: marca })
            ] }, marca)) }),
            /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500 mt-4", children: [
              "Moradores de ",
              bairro.name,
              " têm acesso a todas as marcas com garantia de fábrica e instalação profissional."
            ] })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-gray-400", children: "Localização" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug tracking-tight text-dark", children: [
            "Como Chegar do ",
            /* @__PURE__ */ jsx("span", { className: "text-primary", children: bairro.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 mb-8 leading-relaxed", children: seoContent.trafficTips }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6 mb-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-2xl", children: /* @__PURE__ */ jsx(Clock, { className: "text-primary", size: 24 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-lg mb-1 text-dark", children: "Tempo Estimado" }),
                /* @__PURE__ */ jsxs("p", { className: "text-gray-500", children: [
                  "Aproximadamente ",
                  /* @__PURE__ */ jsx("strong", { className: "text-primary", children: bairro.tempo }),
                  " de carro em fluxo normal de trânsito."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-2xl", children: /* @__PURE__ */ jsx(MapPin, { className: "text-primary", size: 24 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-lg mb-1 text-dark", children: "Rota Recomendada" }),
                /* @__PURE__ */ jsxs("p", { className: "text-gray-500", children: [
                  "Via ",
                  /* @__PURE__ */ jsx("strong", { className: "text-dark", children: bairro.via }),
                  " - acesso direto e sem complicações."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-2xl", children: /* @__PURE__ */ jsx(Navigation, { className: "text-primary", size: 24 }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-bold text-lg mb-1 text-dark", children: "Endereço Completo" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: "Av. Presidente Arthur da Silva Bernardes, 1323 - Portão, Curitiba - PR, 80320-300" })
              ] })
            ] })
          ] }),
          seoContent.nearbyLandmarks.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl p-6 border border-gray-100", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-bold text-dark mb-4", children: [
              "Pontos de Referência em ",
              bairro.name
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: seoContent.nearbyLandmarks.map((landmark, i) => /* @__PURE__ */ jsx("span", { className: "bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm", children: landmark }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "h-[550px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative", children: [
          /* @__PURE__ */ jsx(
            "iframe",
            {
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.240580658666!2d-49.30287292373215!3d-25.46364093422533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce31ec1ad6641%3A0xa51067e0d7b484af!2sCarplus%20Pneus%20e%20Oficina%20Mec%C3%A2nica!5e0!3m2!1spt-BR!2sbr!4v1779235735934!5m2!1spt-BR!2sbr",
              width: "100%",
              height: "100%",
              style: { border: 0 },
              allowFullScreen: true,
              loading: "lazy",
              referrerPolicy: "no-referrer-when-downgrade",
              className: "w-full h-full"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-6 right-6 z-[1000] bg-white p-5 rounded-2xl shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-bold text-dark", children: "Carplus Centro Automotivo" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: "Portão, Curitiba - PR" })
            ] }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://maps.app.goo.gl/LzV4SnjtW4vffrrC8",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "bg-primary text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-500 transition-all",
                children: "Abrir Rota"
              }
            )
          ] }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(ServicosGaleria, { local: bairro.name, variant: "light" }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-dark text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-white/40", children: "Diferenciais" }),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-black mb-4", children: [
            "Por Que Moradores de ",
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: bairro.name }),
            " Escolhem a Carplus?"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-white/60 text-lg max-w-2xl mx-auto", children: "Há mais de 10 anos atendendo Curitiba e região metropolitana com qualidade, transparência e preço justo." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          { icon: Shield, title: "Garantia de Fábrica", desc: "Todos os pneus com garantia oficial do fabricante." },
          { icon: CreditCard, title: "Parcelamento", desc: "Em até 10x sem juros no cartão de crédito." },
          { icon: Award, title: "4.9 Estrelas", desc: "Mais de 850 avaliações positivas no Google." },
          { icon: Wrench, title: "Serviço Incluso", desc: "Montagem e balanceamento já inclusos no preço." }
        ].map((item, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(item.icon, { size: 28, className: "text-black" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-white/60", children: item.desc })
            ]
          },
          i
        )) }),
        seoContent.whyChooseUs.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-16 bg-white/5 rounded-3xl p-8 border border-white/10", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold mb-6 text-center", children: [
            "Vantagens exclusivas para ",
            seoContent.testimonialContext
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: seoContent.whyChooseUs.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(CheckCircle, { size: 20, className: "text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-white/80", children: item })
          ] }, i)) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-gray-400", children: "Avaliações" }),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black mb-4 text-dark", children: [
            "O Que Dizem os ",
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: seoContent.testimonialContext })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-1 text-primary mb-2", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Star, { size: 28, fill: "currentColor" }, i)) }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 font-bold text-lg", children: "4.9/5 estrelas no Google Maps (850+ avaliações)" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
          { name: "Ricardo S.", bairro: bairro.name, text: `Moro no ${bairro.name} e não troco a Carplus por nada. Atendimento honesto, preço justo e serviço de primeira. Já troquei pneus de dois carros da família aqui.` },
          { name: "Fernanda A.", bairro: bairro.name, text: `Sempre trago meu carro aqui no Portão. São apenas ${bairro.tempo} de casa e o preço dos pneus é muito melhor que nas lojas do ${bairro.name}. Recomendo demais!` },
          { name: "Carlos M.", bairro: bairro.name, text: `Vim do ${bairro.name} indicado por um amigo. O alinhamento ficou perfeito, os pneus são de qualidade e ainda parcelaram em 10x. Voltarei sempre!` }
        ].map((rev, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "p-8 bg-gray-50 rounded-3xl flex gap-6 hover:shadow-lg transition-all",
            children: [
              /* @__PURE__ */ jsx("div", { className: "w-14 h-14 bg-primary rounded-full flex items-center justify-center font-bold text-black text-xl flex-shrink-0", children: rev.name.charAt(0) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-bold text-dark", children: rev.name }),
                  /* @__PURE__ */ jsx("div", { className: "flex gap-0.5", children: [...Array(5)].map((_, i2) => /* @__PURE__ */ jsx(Star, { size: 14, fill: "#FAB115", className: "text-primary" }, i2)) })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-gray-600 italic leading-relaxed", children: [
                  "“",
                  rev.text,
                  "”"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[11px] uppercase font-bold text-gray-400 mt-4 tracking-widest", children: [
                  /* @__PURE__ */ jsx(MapPin, { size: 12 }),
                  " ",
                  rev.bairro,
                  ", Curitiba - Cliente verificado"
                ] })
              ] })
            ]
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://www.google.com/maps/place/Carplus+Auto+Center/@-25.477,-49.2845,17z/data=!4m8!3m7!1s0x0:0x0!8m2!3d-25.477!4d-49.2845!9m1!1b1!16s",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-2 text-primary font-bold hover:underline",
            children: [
              "Ver todas as avaliações no Google Maps",
              /* @__PURE__ */ jsx(ArrowLeft, { size: 16, className: "rotate-180" })
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-gray-400", children: "FAQ" }),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black text-dark", children: [
            "Dúvidas de Quem Vem do ",
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: bairro.name })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 mt-4", children: "Perguntas frequentes de moradores da região" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "rounded-3xl border border-gray-200 shadow-lg bg-white overflow-hidden", children: faqItems.map((item, i) => /* @__PURE__ */ jsx(FaqItem, { q: item.question, a: item.answer }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center mt-10", children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-500 mb-4", children: "Não encontrou sua dúvida?" }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `https://wa.me/554130827282?text=Olá! Moro no ${bairro.name} e tenho uma dúvida sobre pneus/serviços.`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-tight hover:bg-[#20BD5A] transition-all shadow-lg shadow-green-900/20",
              children: [
                /* @__PURE__ */ jsx(MessageSquare, { size: 16 }),
                " Pergunte no WhatsApp"
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-white border-t border-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-dark mb-6 text-center", children: [
          "Serviços Automotivos para ",
          bairro.name
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2", children: seoContent.searchPhrases.map((phrase, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm hover:bg-primary hover:text-black transition-all cursor-default",
            children: phrase
          },
          i
        )) }),
        /* @__PURE__ */ jsxs("p", { className: "text-center text-gray-400 text-sm mt-8", children: [
          "A Carplus Centro Automotivo atende ",
          bairro.name,
          " e toda Curitiba com pneus, alinhamento, balanceamento, troca de óleo, freios, suspensão e mais."
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-[0.3em] text-gray-400", children: "Pneus" }),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-primary" })
          ] }),
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-black text-dark", children: [
            "Pneus Disponíveis para ",
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: bairro.name })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-gray-500 mt-4", children: [
            "Entrega e montagem para moradores do ",
            bairro.name,
            " e região"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4", children: TIRES.filter((t) => t && t.destaque).slice(0, 12).map((tire) => /* @__PURE__ */ jsxs(
          Link,
          {
            to: `/pneu/${tire.slug}`,
            className: "bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all group",
            children: [
              /* @__PURE__ */ jsx("div", { className: "aspect-square mb-3 overflow-hidden rounded-xl bg-gray-50", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: tire.imagem,
                  alt: `${tire.nome} para ${bairro.name}`,
                  width: 600,
                  height: 600,
                  className: "w-full h-full object-contain group-hover:scale-105 transition-transform",
                  loading: "lazy"
                }
              ) }),
              /* @__PURE__ */ jsx("p", { className: "text-xs font-bold text-gray-400 uppercase", children: tire.marca }),
              /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-dark truncate", children: tire.medida }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 truncate", children: tire.linha })
            ]
          },
          tire.id
        )) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-10", children: /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/pneus",
            className: "inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold uppercase tracking-tight hover:bg-yellow-400 transition-all shadow-lg",
            children: [
              "Ver Todos os Pneus ",
              /* @__PURE__ */ jsx(ChevronRight, { size: 20 })
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-primary", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4 text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-black text-black mb-6", children: [
          "Mora no ",
          bairro.name,
          "? Venha Conhecer a Carplus!"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-black/70 text-lg mb-10 max-w-2xl mx-auto", children: [
          "Estamos a apenas ",
          bairro.tempo,
          " de você. Pneus das melhores marcas, serviço profissional e parcelamento em até 10x sem juros."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `https://wa.me/554130827282?text=Olá! Moro no ${bairro.name} e quero agendar uma visita.`,
              className: "bg-black text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 text-base hover:bg-gray-900 transition-all shadow-lg uppercase tracking-tight",
              children: [
                /* @__PURE__ */ jsx(MessageSquare, { size: 20 }),
                " Falar no WhatsApp"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "tel:+554130827282",
              className: "bg-white text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 text-base hover:bg-gray-100 transition-all shadow-md uppercase tracking-tight",
              children: [
                /* @__PURE__ */ jsx(Phone, { size: 20 }),
                " (41) 3082-7282"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-black/60 text-sm mt-8", children: "Seg a Sex: 8h às 18h | Sábado: 8h às 12h" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  NeighborhoodDetail as default
};
