import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import {
  MapPin, Phone, Clock, Navigation, ChevronDown, ChevronRight,
  CheckCircle2, Star, Shield, CircleDot, Target, Scale, Crosshair,
  MessageSquare, Route, Car, Locate,
} from 'lucide-react';

const WHATSAPP_NUMBER = '554130827282';
const PHONE_DISPLAY = '(41) 3082-7282';
const STORE_ADDRESS = 'Av. Presidente Arthur da Silva Bernardes, 1323, Portão, Curitiba - PR';
const MAPS_DESTINATION = 'Carplus+Pneus+e+Oficina+Mecânica,+Av.+Presidente+Arthur+da+Silva+Bernardes,+1323,+Curitiba';
const waBase = `https://wa.me/${WHATSAPP_NUMBER}`;

// Regiões/bairros atendidos — links internos para páginas de bairro
const REGIOES = [
  { nome: 'Portão', slug: 'portao' },
  { nome: 'Água Verde', slug: 'agua-verde' },
  { nome: 'Fazendinha', slug: 'fazendinha' },
  { nome: 'Santa Quitéria', slug: 'santa-quiteria' },
  { nome: 'Novo Mundo', slug: 'novo-mundo' },
  { nome: 'Capão Raso', slug: 'capao-raso' },
  { nome: 'Vila Izabel', slug: 'vila-izabel' },
  { nome: 'Batel', slug: 'batel' },
  { nome: 'Cidade Industrial', slug: 'cidade-industrial' },
  { nome: 'Boqueirão', slug: 'boqueirao' },
  { nome: 'Xaxim', slug: 'xaxim' },
  { nome: 'Pinheirinho', slug: 'pinheirinho' },
];

// Marcas disponíveis — links internos para landing pages de marca
const MARCAS = [
  { nome: 'Pirelli', slug: 'pneu-pirelli-curitiba' },
  { nome: 'Michelin', slug: 'pneu-michelin-curitiba' },
  { nome: 'Goodyear', slug: 'pneu-goodyear-curitiba' },
  { nome: 'Continental', slug: 'pneu-continental-curitiba' },
  { nome: 'Bridgestone', slug: 'pneu-bridgestone-curitiba' },
  { nome: 'Firestone', slug: 'pneu-firestone-curitiba' },
  { nome: 'Yokohama', slug: 'pneu-yokohama-curitiba' },
  { nome: 'Prinx', slug: 'pneu-prinx-curitiba' },
];

const DIFERENCIAIS = [
  { titulo: 'Fácil de chegar', descricao: 'No Portão, com acesso rápido pela Linha Verde, BR-116 e principais avenidas da região sul.', icone: MapPin },
  { titulo: 'Pronta entrega', descricao: 'Grande estoque de pneus de todas as marcas e medidas para instalação no mesmo dia.', icone: CheckCircle2 },
  { titulo: 'Montagem inclusa', descricao: 'Montagem, balanceamento e calibragem inclusos, com alinhamento 3D na própria loja.', icone: Shield },
  { titulo: 'Avaliação nota 5', descricao: 'Centenas de clientes da região avaliam a Carplus com nota máxima no Google.', icone: Star },
];

const SERVICOS = [
  { nome: 'Pneus novos', descricao: 'Todas as marcas e medidas', Icone: CircleDot, link: '/pneus' },
  { nome: 'Alinhamento 3D', descricao: 'Computadorizado e preciso', Icone: Target, link: '/servico/alinhamento' },
  { nome: 'Balanceamento', descricao: 'Rodas equilibradas', Icone: Scale, link: '/servico/balanceamento' },
  { nome: 'Geometria', descricao: 'Cambagem e caster', Icone: Crosshair, link: '/servico/cambagem' },
];

const FAQ_ITEMS = [
  {
    pergunta: 'Onde fica a loja de pneus da Carplus em Curitiba?',
    resposta: `A Carplus fica na ${STORE_ADDRESS}, no bairro Portão. Estamos a poucos minutos da Água Verde, Fazendinha, Santa Quitéria, Novo Mundo, Capão Raso e de toda a região sul e central de Curitiba, com acesso fácil pela Linha Verde e BR-116.`,
  },
  {
    pergunta: 'Como encontrar uma loja de pneus perto de mim em Curitiba?',
    resposta: 'Use o botão "Traçar rota até a loja" desta página: ele detecta a sua localização e abre a rota direta até a Carplus no Google Maps. Você também pode ligar ou chamar no WhatsApp (41) 3082-7282 para confirmar a sua medida antes de vir.',
  },
  {
    pergunta: 'A Carplus tem o pneu da minha medida em estoque?',
    resposta: 'Provavelmente sim. Trabalhamos com grande estoque de pneus de todas as marcas e medidas, do aro 13 ao aro 22, para carros de passeio, SUVs e utilitários. Envie a medida do seu pneu pelo WhatsApp (41) 3082-7282 que confirmamos na hora.',
  },
  {
    pergunta: 'Preciso agendar para trocar os pneus?',
    resposta: 'Não é obrigatório. Atendemos por ordem de chegada e também com hora marcada. Para agilizar, recomendamos confirmar a disponibilidade da sua medida pelo WhatsApp antes de se deslocar até a loja.',
  },
  {
    pergunta: 'A montagem dos pneus já está inclusa no preço?',
    resposta: 'Sim. O valor dos pneus já inclui montagem, balanceamento e calibragem. O alinhamento 3D é feito na própria loja, garantindo segurança e maior durabilidade dos pneus.',
  },
  {
    pergunta: 'Quais formas de pagamento a Carplus aceita?',
    resposta: 'Aceitamos PIX, dinheiro, cartões de débito e crédito (Visa, Master, Elo, Amex, Hipercard) em até 10x sem juros, facilitando a troca dos seus pneus.',
  },
];

export default function LojaDePneusPertoDeMim() {
  const [faqAberto, setFaqAberto] = useState<number | null>(0);
  const [localizando, setLocalizando] = useState(false);

  const canonical = 'https://www.carpluspneuseoficina.com.br/loja-de-pneus-curitiba-perto-de-mim';
  const heroImg = '/images/centro-automotivo/carplus-oficina-portao-fachada.jpg';

  // Abre rota no Google Maps a partir da localização do usuário (intenção "perto de mim")
  const tracarRota = () => {
    const fallback = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_DESTINATION}`;
    if (!('geolocation' in navigator)) {
      window.open(fallback, '_blank', 'noopener');
      return;
    }
    setLocalizando(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${MAPS_DESTINATION}&travelmode=driving`;
        window.open(url, '_blank', 'noopener');
        setLocalizando(false);
      },
      () => {
        window.open(fallback, '_blank', 'noopener');
        setLocalizando(false);
      },
      { enableHighAccuracy: true, timeout: 8000 },
    );
  };

  const schemaFAQ = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.pergunta,
      acceptedAnswer: { '@type': 'Answer', text: item.resposta },
    })),
  };

  const schemaBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.carpluspneuseoficina.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Loja de Pneus Curitiba Perto de Mim', item: canonical },
    ],
  };

  return (
    <div className="min-h-screen bg-neutral-950 pb-20 md:pb-0">
      <Helmet>
        <title>Loja de Pneus em Curitiba Perto de Mim | Carplus - Portão</title>
        <meta
          name="description"
          content="Procurando loja de pneus perto de você em Curitiba? A Carplus, no Portão, tem pneus de todas as marcas com pronta entrega, montagem e 10x sem juros. Trace a rota e venha! (41) 3082-7282."
        />
        <meta
          name="keywords"
          content="loja de pneus perto de mim, loja de pneus curitiba perto de mim, pneus perto de mim, borracharia perto de mim curitiba, loja de pneus curitiba, pneus curitiba portão, onde comprar pneus em curitiba"
        />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="geo.region" content="BR-PR" />
        <meta name="geo.placename" content="Portão, Curitiba" />
        <meta name="geo.position" content="-25.46364;-49.30287" />
        <meta name="ICBM" content="-25.46364, -49.30287" />
        <link rel="canonical" href={canonical} />

        <meta property="og:title" content="Loja de Pneus em Curitiba Perto de Mim | Carplus" />
        <meta property="og:description" content="Loja de pneus perto de você em Curitiba. Todas as marcas, pronta entrega, montagem inclusa e 10x sem juros no Portão." />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="business.business" />
        <meta property="og:image" content="https://www.carpluspneuseoficina.com.br/images/centro-automotivo/carplus-oficina-portao-fachada.jpg" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Loja de Pneus em Curitiba Perto de Mim | Carplus" />
        <meta name="twitter:description" content="Loja de pneus perto de você no Portão, Curitiba. Todas as marcas, montagem inclusa e 10x sem juros." />
        <meta name="twitter:image" content="https://www.carpluspneuseoficina.com.br/images/centro-automotivo/carplus-oficina-portao-fachada.jpg" />

        <script type="application/ld+json">{JSON.stringify(schemaFAQ)}</script>
        <script type="application/ld+json">{JSON.stringify(schemaBreadcrumb)}</script>
      </Helmet>

      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src={heroImg}
            alt="Loja de pneus Carplus no bairro Portão em Curitiba, fácil acesso de toda a região"
            width={1200}
            height={801}
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <nav className="flex items-center gap-2 text-sm text-neutral-400 mb-6">
              <Link to="/" className="hover:text-amber-500 transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-amber-500">Loja de Pneus Perto de Mim</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <Locate className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-sm font-medium">A loja de pneus mais perto de você em Curitiba</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight text-balance">
              Loja de Pneus em Curitiba{' '}
              <span className="text-amber-500">Perto de Você</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-8 max-w-2xl leading-relaxed text-pretty">
              Está procurando <strong className="text-white">&quot;loja de pneus perto de mim&quot;</strong>? A Carplus está no
              Portão, em Curitiba, com pneus de todas as marcas em pronta entrega, montagem inclusa e
              parcelamento em até 10x sem juros. Trace a rota e venha em poucos minutos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={tracarRota}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 disabled:opacity-70"
                disabled={localizando}
              >
                <Navigation size={20} />
                {localizando ? 'Localizando você...' : 'Traçar rota até a loja'}
              </button>
              <a
                href={`${waBase}?text=${encodeURIComponent('Olá! Estou perto e gostaria de um orçamento de pneus.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold px-8 py-4 rounded-xl transition-all"
              >
                <MessageSquare size={20} />
                Pedir orçamento agora
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <MapPin className="w-6 h-6 text-amber-500 mb-2" />
                <p className="text-white font-medium">Av. Pres. Arthur da Silva Bernardes, 1323</p>
                <p className="text-neutral-400 text-sm">Portão, Curitiba - PR</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                <Phone className="w-6 h-6 text-amber-500 mb-2" />
                <p className="text-white font-medium">{PHONE_DISPLAY}</p>
                <p className="text-neutral-400 text-sm">WhatsApp e telefone</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Por que somos a <span className="text-amber-500">loja de pneus</span> mais procurada perto de você
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-pretty">
              Quem busca pneus em Curitiba quer rapidez, preço justo e confiança. A Carplus entrega os três no mesmo lugar.
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

      {/* Regiões atendidas */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
              <Car className="w-4 h-4 text-amber-500" />
              <span className="text-amber-500 text-sm font-medium">Atendemos toda a região</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Perto de você, esteja onde estiver em Curitiba
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-pretty">
              Veja se o seu bairro está na nossa região de atendimento e confira a página dedicada com a rota até a loja.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {REGIOES.map((r, index) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  to={`/bairro/${r.slug}`}
                  className="flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-amber-500/50 rounded-xl px-4 py-3 transition-all group"
                >
                  <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-neutral-200 text-sm font-medium group-hover:text-amber-500 transition-colors">
                    Pneus no {r.nome}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/bairros" className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 font-medium transition-colors">
              Ver todos os bairros atendidos
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Marcas */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Todas as marcas de pneus em um só lugar
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-pretty">
              Das linhas premium às opções de melhor custo-benefício, você encontra a sua marca de pneu aqui pertinho.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {MARCAS.map((m, index) => (
              <motion.div
                key={m.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <Link
                  to={`/${m.slug}`}
                  className="flex items-center justify-center bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50 hover:border-amber-500/50 rounded-xl px-4 py-5 transition-all group h-full"
                >
                  <span className="text-white font-bold text-lg group-hover:text-amber-500 transition-colors">{m.nome}</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/pneus" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-xl transition-all">
              Ver catálogo completo de pneus
              <ChevronRight size={18} />
            </Link>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Mais do que pneus, um centro automotivo completo
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-pretty">
              Aproveite a visita e deixe seu carro 100% seguro com nossos serviços feitos na hora.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {SERVICOS.map((servico, index) => (
              <motion.div
                key={servico.nome}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={servico.link}
                  className="block bg-neutral-900 rounded-2xl p-6 border border-neutral-800 hover:border-amber-500/50 transition-all group h-full"
                >
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/30 transition-colors">
                    <servico.Icone className="w-6 h-6 text-amber-500" />
                  </div>
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

      {/* Como chegar / Mapa */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                <Route className="w-4 h-4 text-amber-500" />
                <span className="text-amber-500 text-sm font-medium">Como chegar</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                A poucos minutos de onde você está
              </h2>
              <p className="text-neutral-400 mb-6 leading-relaxed text-pretty">
                Estamos na {STORE_ADDRESS}, com estacionamento fácil e acesso rápido pela Linha Verde, BR-116 e principais
                avenidas da região sul e central de Curitiba. Clique abaixo e traçamos a rota direto do seu celular.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={tracarRota}
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-6 py-3 rounded-xl transition-all disabled:opacity-70"
                  disabled={localizando}
                >
                  <Navigation size={18} />
                  {localizando ? 'Localizando...' : 'Traçar rota até a loja'}
                </button>
                <Link
                  to="/como-chegar"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 transition-all"
                >
                  <MapPin size={18} />
                  Ver instruções detalhadas
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-neutral-800 shadow-xl"
            >
              <iframe
                title="Localização da Carplus Pneus e Oficina no Portão, Curitiba"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.240580658666!2d-49.30287292373215!3d-25.46364093422533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce31ec1ad6641%3A0xa51067e0d7b484af!2sCarplus%20Pneus%20e%20Oficina%20Mec%C3%A2nica!5e0!3m2!1spt-BR!2sbr!4v1779235735934!5m2!1spt-BR!2sbr"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
              Perguntas frequentes
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-pretty">
              Tudo o que você precisa saber antes de vir até a loja de pneus mais perto de você.
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
                  aria-expanded={faqAberto === index}
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
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-balance">
              Sua loja de pneus em Curitiba está aqui pertinho
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto mb-8 text-lg text-pretty">
              Trace a rota, chame no WhatsApp e garanta seus pneus com montagem inclusa e 10x sem juros. Atendimento rápido e de confiança no Portão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`${waBase}?text=${encodeURIComponent('Olá! Quero um orçamento de pneus na Carplus.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black hover:bg-neutral-900 text-white font-bold px-8 py-4 rounded-xl transition-all"
              >
                <MessageSquare size={20} />
                {PHONE_DISPLAY}
              </a>
              <button
                onClick={tracarRota}
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-black font-bold px-8 py-4 rounded-xl transition-all disabled:opacity-70"
                disabled={localizando}
              >
                <Navigation size={20} />
                {localizando ? 'Localizando...' : 'Traçar rota até a loja'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Barra de CTA fixa — somente mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 px-3 py-3 flex gap-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <button
          onClick={tracarRota}
          className="flex-1 flex items-center justify-center gap-2 bg-amber-500 text-black py-3 rounded-full font-bold text-sm disabled:opacity-70"
          disabled={localizando}
          aria-label="Traçar rota até a loja"
        >
          <Navigation size={18} /> {localizando ? 'Localizando...' : 'Rota'}
        </button>
        <a
          href={`${waBase}?text=${encodeURIComponent('Olá! Quero um orçamento de pneus.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-bold text-sm"
          aria-label="Pedir orçamento no WhatsApp"
        >
          <MessageSquare size={18} /> Orçamento
        </a>
      </div>
    </div>
  );
}
