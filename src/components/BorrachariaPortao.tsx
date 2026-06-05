import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, Clock, Star, Shield, Wrench, Car, 
  ChevronDown, ChevronRight, CheckCircle2, Award, Users,
  Play, CircleDot, Target, Scale, Zap, DollarSign, BadgeCheck
} from 'lucide-react';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LiteYouTube from './LiteYouTube';

// Galeria de imagens da borracharia
const GALERIA_BORRACHARIA = [
  { src: '/images/borracharia/proprietario-carplus.webp', alt: 'Proprietário da Carplus Pneus segurando pneu novo - Borracharia no Portão Curitiba', title: 'Atendimento especializado Carplus' },
  { src: '/images/borracharia/mecanico-balanceamento.webp', alt: 'Mecânico realizando balanceamento de pneu na Carplus - Borracharia Portão', title: 'Balanceamento profissional' },
  { src: '/images/borracharia/alinhamento-3d.webp', alt: 'Alinhamento 3D computadorizado na Carplus Pneus - Portão Curitiba', title: 'Alinhamento 3D' },
  { src: '/images/borracharia/mecanico-troca-pneu.webp', alt: 'Troca de pneu profissional na Carplus - Borracharia no bairro Portão', title: 'Troca de pneus' },
  { src: '/images/borracharia/conserto-pneu.webp', alt: 'Conserto de pneu furado na Carplus Pneus - Borracharia Portão Curitiba', title: 'Conserto de pneus' },
  { src: '/images/borracharia/pneu-desgastado.webp', alt: 'Avaliação de desgaste de pneu na Carplus - Borracharia no Portão', title: 'Avaliação de pneus' },
  { src: '/images/borracharia/pneus-yokohama.webp', alt: 'Pneus Yokohama em estoque na Carplus Pneus Portão Curitiba', title: 'Pneus Yokohama' },
  { src: '/images/borracharia/alinhamento-roda.webp', alt: 'Serviço de alinhamento de rodas na Carplus - Borracharia Portão', title: 'Alinhamento de rodas' },
  { src: '/images/borracharia/vitrine-pirelli.webp', alt: 'Vitrine de pneus Pirelli na loja Carplus - Portão Curitiba', title: 'Pneus Pirelli' },
];

// Serviços de borracharia
const SERVICOS_BORRACHARIA = [
  { nome: 'Troca de Pneus', descricao: 'Troca rápida e profissional de pneus nacionais e importados', Icone: CircleDot, destaque: true },
  { nome: 'Conserto de Furos', descricao: 'Reparo de pneus furados com garantia de qualidade', Icone: Wrench, destaque: true },
  { nome: 'Alinhamento 3D', descricao: 'Alinhamento computadorizado com precisão milimétrica', Icone: Target, destaque: false },
  { nome: 'Balanceamento', descricao: 'Balanceamento de rodas para maior conforto e segurança', Icone: Scale, destaque: false },
  { nome: 'Rodízio de Pneus', descricao: 'Rodízio para desgaste uniforme e maior durabilidade', Icone: Zap, destaque: false },
  { nome: 'Calibragem', descricao: 'Calibragem gratuita com nitrogênio disponível', Icone: BadgeCheck, destaque: false },
];

// FAQ da borracharia
const FAQ_BORRACHARIA = [
  { pergunta: 'Quanto custa consertar um pneu furado no Portão?', resposta: 'Na Carplus oferecemos o melhor preço da região para conserto de pneus furados. O valor varia conforme o tipo de reparo (manchão ou vulcanização), mas garantimos preço competitivo com qualidade superior. Consulte pelo WhatsApp (41) 3082-7282.' },
  { pergunta: 'A Carplus atende emergências de pneu furado?', resposta: 'Sim! Atendemos clientes com pneus furados durante todo nosso horário de funcionamento, de segunda a sexta das 8h às 18h e sábados das 8h às 13h. Basta trazer seu veículo que realizamos o conserto na hora.' },
  { pergunta: 'Vocês vendem pneus novos e usados?', resposta: 'Trabalhamos exclusivamente com pneus novos de primeira linha das melhores marcas: Pirelli, Bridgestone, Continental, Michelin, Goodyear, Dunlop, Yokohama e outras. Não trabalhamos com pneus usados ou recauchutados.' },
  { pergunta: 'Qual a garantia do serviço de borracharia?', resposta: 'Todos os serviços de borracharia da Carplus têm garantia total. O conserto de furos tem garantia vitalícia, e os serviços de alinhamento e balanceamento têm garantia de 6 meses ou até a próxima revisão.' },
  { pergunta: 'Atendem carros rebaixados e importados?', resposta: 'Sim! Temos equipamentos adequados para atender todos os tipos de veículos, incluindo rebaixados, importados, SUVs, pickups e até veículos híbridos e elétricos. Somos especializados em rodas de liga leve.' },
  { pergunta: 'Precisa agendar para trocar pneus?', resposta: 'Não é necessário agendamento para a maioria dos serviços. Porém, recomendamos entrar em contato pelo WhatsApp (41) 3082-7282 para garantir atendimento mais rápido, especialmente aos sábados.' },
];

// Bairros atendidos
const BAIRROS_ATENDIDOS = [
  'Portão', 'Água Verde', 'Vila Izabel', 'Capão Raso', 'Seminário', 
  'Fazendinha', 'Novo Mundo', 'Santa Quitéria', 'Campo Comprido',
  'Guaíra', 'Parolin', 'Hauer', 'Xaxim', 'Pinheirinho'
];

export default function BorrachariaPortao() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Schema.org (LocalBusiness vive como fonte unica no index.html)
  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_BORRACHARIA.map(faq => ({
      "@type": "Question",
      "name": faq.pergunta,
      "acceptedAnswer": { "@type": "Answer", "text": faq.resposta }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Borracharia no Portão Curitiba - Troca de Pneus e Conserto | Carplus</title>
        <meta name="description" content="Borracharia completa no bairro Portão em Curitiba. Troca de pneus, conserto de furos, alinhamento 3D e balanceamento. Melhor preço da região! (41) 3082-7282" />
        <meta name="keywords" content="borracharia portao, borracharia curitiba, troca de pneus portao, conserto pneu furado, alinhamento portao, balanceamento curitiba, pneu furado portao" />
        <link rel="canonical" href="https://carpluspneuseoficina.com.br/borracharia-portao" />
        <meta property="og:title" content="Borracharia no Portão Curitiba - Carplus Pneus" />
        <meta property="og:description" content="Borracharia completa no Portão. Troca de pneus, conserto de furos, alinhamento e balanceamento. Melhor preço da região!" />
        <meta property="og:url" content="https://carpluspneuseoficina.com.br/borracharia-portao" />
        <meta property="og:type" content="business.business" />
        {/* LocalBusiness vem da fonte unica (index.html). Aqui apenas FAQ. */}
        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
      </Helmet>

      <Navbar />

      <main className="bg-neutral-950 min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />
          
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Texto */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <MapPin size={16} />
                  Bairro Portão, Curitiba
                </span>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                  Borracharia <span className="text-amber-500">Full Service</span> no Portão
                </h1>
                
                <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                  Precisa trocar os pneus ou consertou um furo? A <strong className="text-white">Carplus Pneus</strong> é a 
                  borracharia mais completa do bairro Portão em Curitiba. Atendimento profissional, 
                  <strong className="text-amber-500"> melhor preço da região</strong> e serviços de qualidade premium.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-sm">
                    <DollarSign size={14} /> Melhor Preço
                  </span>
                  <span className="flex items-center gap-2 bg-blue-500/20 text-blue-400 px-3 py-1.5 rounded-full text-sm">
                    <Shield size={14} /> Garantia Total
                  </span>
                  <span className="flex items-center gap-2 bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded-full text-sm">
                    <Award size={14} /> +35 Anos
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-white font-bold">4.9</span>
                  <span className="text-neutral-500">+847 avaliações no Google</span>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/554130827282?text=Olá! Preciso de serviço de borracharia."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-full font-bold transition-all"
                  >
                    <Phone size={18} />
                    WhatsApp Borracharia
                  </a>
                  <Link
                    to="/pneus"
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-neutral-900 px-6 py-3 rounded-full font-bold transition-all"
                  >
                    Ver Pneus em Oferta
                    <ChevronRight size={18} />
                  </Link>
                </div>
              </motion.div>

              {/* Video */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/20">
                  <LiteYouTube
                    videoId="1fWqUJdCdRg"
                    title="Carplus Borracharia no Portão - Troca de Pneus Curitiba"
                    params="rel=0&playsinline=1"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-amber-500 text-neutral-900 px-4 py-2 rounded-xl font-bold text-sm">
                  Veja nosso trabalho
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção Serviços */}
        <section className="py-20 bg-neutral-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Servicos de <span className="text-amber-500">Borracharia</span> Completos
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Na Carplus voce encontra todos os servicos de borracharia com equipamentos modernos e profissionais treinados.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICOS_BORRACHARIA.map((servico, index) => (
                <motion.div
                  key={servico.nome}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-6 rounded-2xl border transition-all group ${
                    servico.destaque 
                      ? 'bg-gradient-to-br from-amber-500/20 to-amber-500/5 border-amber-500/50 hover:border-amber-500' 
                      : 'bg-neutral-900 border-neutral-800 hover:border-amber-500/50'
                  }`}
                >
                  {servico.destaque && (
                    <span className="absolute -top-3 right-4 bg-amber-500 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full">
                      MAIS PROCURADO
                    </span>
                  )}
                  <div className="w-14 h-14 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
                    <servico.Icone className="w-7 h-7 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{servico.nome}</h3>
                  <p className="text-neutral-400">{servico.descricao}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria de Imagens */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Nossa <span className="text-amber-500">Estrutura</span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Conheça a estrutura completa da Carplus Pneus no bairro Portão. Equipamentos modernos e ambiente organizado.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {GALERIA_BORRACHARIA.map((img, index) => (
                <motion.figure
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
                    index === 0 ? 'md:col-span-2 md:row-span-2' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    title={img.title}
                    loading="lazy"
                    width={1200}
                    height={801}
                    className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <figcaption className="absolute bottom-4 left-4 right-4 text-white font-medium">
                      {img.title}
                    </figcaption>
                  </div>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-neutral-950/95 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={GALERIA_BORRACHARIA[selectedImage].src}
                alt={GALERIA_BORRACHARIA[selectedImage].alt}
                width={1200}
                height={801}
                className="max-w-full max-h-[90vh] rounded-2xl"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bairros Atendidos */}
        <section className="py-20 bg-neutral-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Atendemos <span className="text-amber-500">Toda a Regiao</span>
              </h2>
              <p className="text-neutral-400 max-w-2xl mx-auto">
                Clientes de diversos bairros de Curitiba escolhem a Carplus pela qualidade e preço justo.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3">
              {BAIRROS_ATENDIDOS.map((bairro, index) => (
                <motion.span
                  key={bairro}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-neutral-800 hover:bg-amber-500/20 text-neutral-300 hover:text-amber-500 px-4 py-2 rounded-full text-sm font-medium transition-all cursor-default"
                >
                  {bairro}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Perguntas <span className="text-amber-500">Frequentes</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {FAQ_BORRACHARIA.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-white pr-4">{faq.pergunta}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-amber-500 transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-neutral-400">{faq.resposta}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-to-b from-amber-500/10 to-transparent">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Furou o Pneu? <span className="text-amber-500">Venha para a Carplus!</span>
              </h2>
              <p className="text-neutral-400 text-lg mb-8">
                Estamos na Av. Presidente Arthur da Silva Bernardes, 1323 - Portão, Curitiba.
                Atendimento de segunda a sexta das 8h às 18h e sábados das 8h às 13h.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/554130827282?text=Olá! Preciso de serviço de borracharia."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  <Phone size={20} />
                  (41) 3082-7282
                </a>
                <a
                  href="https://maps.app.goo.gl/qLF9fGScB8M6TQVB6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  <MapPin size={20} />
                  Como Chegar
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
