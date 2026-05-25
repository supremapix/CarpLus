import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { 
  MapPin, Phone, Clock, Star, Shield, Wrench, Car, 
  ChevronDown, ChevronRight, ExternalLink, CheckCircle2,
  Award, Users, Calendar, Newspaper, X
} from 'lucide-react';

// Galeria de imagens do centro automotivo
const GALERIA_IMAGENS = [
  { src: '/images/centro-automotivo/oficina-elevadores.webp', alt: 'Centro Automotivo Carplus no Portão - Área de elevadores e serviços', title: 'Oficina Mecânica Completa' },
  { src: '/images/centro-automotivo/mecanico-elevador.webp', alt: 'Mecânico especializado trabalhando no elevador - Carplus Portão', title: 'Profissionais Especializados' },
  { src: '/images/centro-automotivo/mecanico-pneus.webp', alt: 'Troca de pneus no Centro Automotivo Carplus Portão Curitiba', title: 'Serviço de Pneus' },
  { src: '/images/centro-automotivo/pneu-pirelli-scorpion.webp', alt: 'Pneu Pirelli Scorpion - Loja de Pneus Portão Curitiba', title: 'Pneus Premium' },
  { src: '/images/centro-automotivo/roda-bmw.webp', alt: 'Roda BMW em manutenção no Centro Automotivo Portão', title: 'Atendemos Todas as Marcas' },
  { src: '/images/centro-automotivo/duster-elevador.webp', alt: 'Renault Duster no elevador - Oficina Mecânica Portão', title: 'SUVs e Utilitários' },
  { src: '/images/centro-automotivo/oleos-petronas.webp', alt: 'Óleos Petronas Syntium - Troca de Óleo Portão Curitiba', title: 'Óleos de Qualidade' },
  { src: '/images/centro-automotivo/pirelli-performance-center.webp', alt: 'Pirelli Performance Center - Centro Automotivo Portão', title: 'Pirelli Performance Center' },
  { src: '/images/centro-automotivo/capa-banco-carplus.webp', alt: 'Capa de banco Carplus - Cuidado com seu veículo', title: 'Cuidado Total' },
  { src: '/images/centro-automotivo/atendimento-recepcao.webp', alt: 'Atendimento personalizado na recepção Carplus Portão', title: 'Atendimento Personalizado' },
];

// FAQ específico para Centro Automotivo no Portão
const FAQ_ITEMS = [
  {
    pergunta: 'Onde fica o Centro Automotivo Carplus no Portão?',
    resposta: 'A Carplus está localizada na Av. Presidente Arthur da Silva Bernardes, 1323, no coração do bairro Portão em Curitiba. Fácil acesso para quem vem da Água Verde, Santa Quitéria, Fazendinha, Novo Mundo, Capão Raso e toda região sul de Curitiba.'
  },
  {
    pergunta: 'Quais serviços o Centro Automotivo Carplus oferece?',
    resposta: 'Oferecemos serviços completos: troca e venda de pneus das melhores marcas, alinhamento e balanceamento computadorizado, troca de óleo e filtros, revisão de freios, suspensão, amortecedores, correias, arrefecimento, além de diagnóstico eletrônico completo.'
  },
  {
    pergunta: 'A Carplus é um Pirelli Performance Center?',
    resposta: 'Sim! Somos um Pirelli Performance Center certificado, o que significa que temos equipamentos de última geração, profissionais treinados pela Pirelli e acesso a toda linha de pneus premium da marca com garantia de fábrica.'
  },
  {
    pergunta: 'Qual o horário de funcionamento do Centro Automotivo?',
    resposta: 'Funcionamos de segunda a sexta das 8h às 18h e aos sábados das 8h às 13h. Atendemos com hora marcada para maior comodidade ou por ordem de chegada.'
  },
  {
    pergunta: 'A Carplus atende todas as marcas de veículos?',
    resposta: 'Sim! Atendemos todas as marcas e modelos de veículos: Volkswagen, Fiat, Chevrolet, Ford, Toyota, Honda, Hyundai, Renault, Jeep, BMW, Mercedes, Audi e muito mais. Temos equipamentos e peças para carros nacionais e importados.'
  },
  {
    pergunta: 'Como agendar um serviço no Centro Automotivo Carplus?',
    resposta: 'Você pode agendar pelo WhatsApp (41) 3082-7282, pelo telefone fixo ou simplesmente aparecer em nossa loja. Recomendamos agendamento para serviços mais complexos como revisão completa ou diagnóstico eletrônico.'
  },
  {
    pergunta: 'A Carplus oferece garantia nos serviços?',
    resposta: 'Sim! Todos os nossos serviços têm garantia. Trabalhamos apenas com peças de qualidade e profissionais experientes. A garantia varia conforme o serviço e peças utilizadas.'
  },
  {
    pergunta: 'Quais formas de pagamento são aceitas?',
    resposta: 'Aceitamos dinheiro, PIX, cartões de débito e crédito (Visa, Master, Elo, Amex, Hipercard) em até 12x. Também trabalhamos com financiamento para compras maiores.'
  }
];

// Serviços oferecidos
const SERVICOS = [
  { nome: 'Pneus', descricao: 'Venda e troca de pneus das melhores marcas', icone: '🛞', link: '/pneus' },
  { nome: 'Alinhamento', descricao: 'Alinhamento 3D computadorizado', icone: '🎯', link: '/servico/alinhamento' },
  { nome: 'Balanceamento', descricao: 'Balanceamento de rodas preciso', icone: '⚖️', link: '/servico/balanceamento' },
  { nome: 'Troca de Óleo', descricao: 'Óleos sintéticos e semi-sintéticos', icone: '🛢️', link: '/servico/troca-de-oleo' },
  { nome: 'Freios', descricao: 'Pastilhas, discos e fluido de freio', icone: '🛑', link: '/servico/troca-de-pastilha-de-freio' },
  { nome: 'Suspensão', descricao: 'Amortecedores, molas e buchas', icone: '🔧', link: '/servico/troca-de-amortecedor' },
  { nome: 'Arrefecimento', descricao: 'Radiador, mangueiras e fluido', icone: '❄️', link: '/servico/troca-de-fluido-de-arrefecimento' },
  { nome: 'Diagnóstico', descricao: 'Scanner eletrônico completo', icone: '📊', link: '/servico/injecao-eletronica' },
];

// Diferenciais
const DIFERENCIAIS = [
  { titulo: 'Pirelli Performance Center', descricao: 'Centro certificado Pirelli com equipamentos de última geração', icone: Award },
  { titulo: '+35 Anos de Experiência', descricao: 'Equipe liderada por especialista com 35 anos em diagnóstico automotivo', icone: Users },
  { titulo: 'Localização Privilegiada', descricao: 'No coração do Portão, fácil acesso de toda região sul de Curitiba', icone: MapPin },
  { titulo: 'Atendimento Personalizado', descricao: 'Diagnóstico honesto e transparente, sem surpresas no orçamento', icone: Shield },
];

export default function CentroAutomotivoPortao() {
  const [imagemAberta, setImagemAberta] = useState<number | null>(null);
  const [faqAberto, setFaqAberto] = useState<number | null>(null);

  // Schema JSON-LD para SEO
  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Carplus Auto Center - Centro Automotivo no Portão",
    "alternateName": "Carplus Pneus e Oficina Mecânica",
    "description": "Centro Automotivo completo no bairro Portão em Curitiba. Pneus, alinhamento, balanceamento, troca de óleo, freios, suspensão e diagnóstico eletrônico. Pirelli Performance Center certificado.",
    "url": "https://carpluspneuseoficina.com.br/centro-automotivo-portao",
    "telephone": "+55-41-3082-7282",
    "email": "contato@carpluspneuseoficina.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Presidente Arthur da Silva Bernardes, 1323",
      "addressLocality": "Curitiba",
      "addressRegion": "PR",
      "postalCode": "81020-010",
      "addressCountry": "BR",
      "neighborhood": "Portão"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -25.4634,
      "longitude": -49.2912
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "13:00"
      }
    ],
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Debit Card, PIX",
    "currenciesAccepted": "BRL",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "areaServed": [
      { "@type": "City", "name": "Curitiba" },
      { "@type": "Neighborhood", "name": "Portão" },
      { "@type": "Neighborhood", "name": "Água Verde" },
      { "@type": "Neighborhood", "name": "Santa Quitéria" },
      { "@type": "Neighborhood", "name": "Fazendinha" },
      { "@type": "Neighborhood", "name": "Novo Mundo" },
      { "@type": "Neighborhood", "name": "Capão Raso" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Automotivos",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Troca de Pneus" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Alinhamento Computadorizado" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Balanceamento de Rodas" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Troca de Óleo" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Revisão de Freios" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Suspensão e Amortecedores" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diagnóstico Eletrônico" } }
      ]
    }
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_ITEMS.map(item => ({
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://carpluspneuseoficina.com.br" },
      { "@type": "ListItem", "position": 2, "name": "Centro Automotivo Portão", "item": "https://carpluspneuseoficina.com.br/centro-automotivo-portao" }
    ]
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <Helmet>
        <title>Centro Automotivo no Portão Curitiba | Carplus - Pneus, Mecânica e Mais</title>
        <meta name="description" content="Centro Automotivo completo no bairro Portão em Curitiba. Pneus das melhores marcas, alinhamento 3D, balanceamento, troca de óleo, freios, suspensão. Pirelli Performance Center. Ligue (41) 3082-7282." />
        <meta name="keywords" content="centro automotivo portão, centro automotivo curitiba portão, oficina mecânica portão, loja de pneus portão, alinhamento portão curitiba, balanceamento portão, troca de óleo portão, mecânica portão curitiba, carplus portão" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Portão, Curitiba" />
        <link rel="canonical" href="https://carpluspneuseoficina.com.br/centro-automotivo-portao" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Centro Automotivo no Portão Curitiba | Carplus Auto Center" />
        <meta property="og:description" content="Centro Automotivo completo no bairro Portão. Pneus, alinhamento, balanceamento, troca de óleo, freios, suspensão e diagnóstico. Pirelli Performance Center certificado." />
        <meta property="og:url" content="https://carpluspneuseoficina.com.br/centro-automotivo-portao" />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="https://carpluspneuseoficina.com.br/images/centro-automotivo/oficina-elevadores.webp" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="business:contact_data:street_address" content="Av. Presidente Arthur da Silva Bernardes, 1323" />
        <meta property="business:contact_data:locality" content="Curitiba" />
        <meta property="business:contact_data:region" content="PR" />
        <meta property="business:contact_data:postal_code" content="81020-010" />
        <meta property="business:contact_data:country_name" content="Brasil" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Centro Automotivo no Portão Curitiba | Carplus" />
        <meta name="twitter:description" content="Centro Automotivo completo no Portão. Pneus, mecânica, alinhamento, balanceamento. Pirelli Performance Center." />
        <meta name="twitter:image" content="https://carpluspneuseoficina.com.br/images/centro-automotivo/oficina-elevadores.webp" />

        {/* Schema.org */}
        <script type="application/ld+json">{JSON.stringify(schemaLocalBusiness)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/centro-automotivo/oficina-elevadores.webp" 
            alt="Centro Automotivo Carplus no bairro Portão em Curitiba - Vista interna da oficina mecânica"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
              <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-amber-500">Centro Automotivo Portão</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-sm font-medium">Pirelli Performance Center Certificado</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Centro Automotivo no{' '}
              <span className="text-amber-500">Portão</span>
              <br />em Curitiba
            </h1>

            <p className="text-xl text-neutral-300 mb-8 max-w-2xl leading-relaxed">
              Seu carro merece o melhor cuidado. Na Carplus você encontra pneus das melhores marcas, 
              mecânica especializada, alinhamento 3D e atendimento de confiança no coração do Portão.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/554130827282?text=Olá! Vi o site e gostaria de agendar um serviço no Centro Automotivo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105"
              >
                <Phone size={20} />
                Agendar Serviço
              </a>
              <Link
                to="/pneus"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl border border-white/20 transition-all"
              >
                Ver Catálogo de Pneus
                <ChevronRight size={20} />
              </Link>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <MapPin className="w-6 h-6 text-amber-500 mb-2" />
                <p className="text-white font-medium">Av. Pres. Arthur da Silva Bernardes, 1323</p>
                <p className="text-neutral-400 text-sm">Portão, Curitiba - PR</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <Phone className="w-6 h-6 text-amber-500 mb-2" />
                <p className="text-white font-medium">(41) 3082-7282</p>
                <p className="text-neutral-400 text-sm">WhatsApp disponível</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <Clock className="w-6 h-6 text-amber-500 mb-2" />
                <p className="text-white font-medium">Seg-Sex: 8h-18h</p>
                <p className="text-neutral-400 text-sm">Sáb: 8h-13h</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que escolher a <span className="text-amber-500">Carplus</span>?
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Somos referência em centro automotivo no bairro Portão, com estrutura completa e profissionais experientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DIFERENCIAIS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-neutral-800/50 rounded-2xl p-6 border border-neutral-700/50 hover:border-amber-500/30 transition-all group"
              >
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
                  <item.icone className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.titulo}</h3>
                <p className="text-neutral-400">{item.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Serviços do Centro Automotivo
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Oferecemos todos os serviços que seu veículo precisa em um só lugar, no Portão em Curitiba.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICOS.map((servico, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={servico.link}
                  className="block bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-amber-500/50 transition-all group h-full"
                >
                  <span className="text-4xl mb-4 block">{servico.icone}</span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    {servico.nome}
                  </h3>
                  <p className="text-neutral-500 text-sm">{servico.descricao}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Conheça Nossa Estrutura
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Veja as instalações do nosso centro automotivo no Portão. Equipamentos modernos e ambiente organizado.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {GALERIA_IMAGENS.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setImagemAberta(index)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  title={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">{img.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Imagem */}
      {imagemAberta !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setImagemAberta(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
            onClick={() => setImagemAberta(null)}
          >
            <X size={32} />
          </button>
          <img
            src={GALERIA_IMAGENS[imagemAberta].src}
            alt={GALERIA_IMAGENS[imagemAberta].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}

      {/* Matérias / Blog */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <Newspaper className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-sm font-medium">Dicas e Notícias</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Matérias e Conteúdos
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Fique por dentro das novidades e dicas importantes para cuidar do seu veículo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Matéria 1 */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/centro-automotivo/pneu-pirelli-scorpion.webp"
                  alt="Quando trocar os pneus do carro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-amber-500 text-sm font-medium">Manutenção</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  Quando Trocar os Pneus? 5 Sinais de Alerta
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Os pneus são itens de segurança fundamentais. Conheça os principais sinais que indicam 
                  a hora certa de trocar: desgaste do TWI, bolhas laterais, rachaduras, idade superior 
                  a 5 anos e vibrações anormais. Na Carplus fazemos inspeção gratuita.
                </p>
                <div className="flex items-center gap-2 text-neutral-500 text-sm">
                  <Calendar size={14} />
                  <span>Equipe Carplus</span>
                </div>
              </div>
            </motion.article>

            {/* Matéria 2 */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src="/images/centro-automotivo/mecanico-elevador.webp"
                  alt="Importância da revisão preventiva"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-amber-500 text-sm font-medium">Revisão</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  Revisão Preventiva: Economize e Evite Surpresas
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  A revisão preventiva é o melhor investimento para seu carro. Verificamos pneus, freios, 
                  suspensão, óleo, filtros e sistema elétrico. Problemas identificados cedo custam menos 
                  para resolver e evitam panes na estrada.
                </p>
                <div className="flex items-center gap-2 text-neutral-500 text-sm">
                  <Calendar size={14} />
                  <span>Equipe Carplus</span>
                </div>
              </div>
            </motion.article>

            {/* Matéria 3 - Gazeta do Povo */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-amber-500/10 to-neutral-900 rounded-2xl overflow-hidden border border-amber-500/20 group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src="/images/centro-automotivo/oficina-elevadores.webp"
                  alt="Matéria Gazeta do Povo sobre revisão de verão"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Gazeta do Povo
                </div>
              </div>
              <div className="p-6">
                <span className="text-amber-500 text-sm font-medium">Na Mídia</span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  Pneus Lideram Panes no Verão, Alerta Carplus
                </h3>
                <p className="text-neutral-400 text-sm mb-4">
                  Em entrevista à Gazeta do Povo, nosso especialista Maurício Rocha, com 35 anos de experiência, 
                  alertou que pneus e freios lideram as falhas no verão. Calor e tráfego intenso elevam riscos. 
                  A matéria traz checklist essencial antes de viajar.
                </p>
                <a
                  href="https://www.gazetadopovo.com.br/conteudo-publicitario/carplus/pneus-panes-verao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors"
                >
                  Ler matéria completa
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tire suas dúvidas sobre o Centro Automotivo Carplus no Portão.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-neutral-800/50 rounded-xl border border-neutral-700/50 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setFaqAberto(faqAberto === index ? null : index)}
                >
                  <span className="text-white font-medium pr-4">{item.pergunta}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-amber-500 transition-transform flex-shrink-0 ${faqAberto === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {faqAberto === index && (
                  <div className="px-6 pb-6">
                    <p className="text-neutral-400 leading-relaxed">{item.resposta}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-amber-500 to-amber-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Agende seu Serviço no Centro Automotivo Carplus
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto mb-8 text-lg">
              Estamos no bairro Portão, prontos para atender você com qualidade e confiança. 
              Entre em contato e faça seu orçamento sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/554130827282"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-900 text-white font-bold px-8 py-4 rounded-xl transition-all"
              >
                <Phone size={20} />
                (41) 3082-7282
              </a>
              <Link
                to="/como-chegar"
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-black font-bold px-8 py-4 rounded-xl transition-all"
              >
                <MapPin size={20} />
                Como Chegar
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
