import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, MapPin, Phone, Star, ArrowRight,
  CircleDot, Wrench, Shield, Clock, Award
} from 'lucide-react';
import LiteYouTube from './LiteYouTube';

// Componente de Video YouTube Shorts (9:16) — usa façade LiteYouTube:
// nenhum script do YouTube carrega antes do clique do usuário.
function YouTubeShorts({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
      <LiteYouTube videoId={videoId} title={title} params="rel=0" />
    </div>
  );
}

const SERVICOS_DESTAQUE = [
  { 
    titulo: 'Troca de Pneus', 
    descricao: 'Troca rapida com equipamento profissional',
    Icone: CircleDot,
    link: '/pneus'
  },
  { 
    titulo: 'Conserto de Pneu Furado', 
    descricao: 'Reparo profissional com garantia',
    Icone: Wrench,
    link: '/borracharia-portao'
  },
  { 
    titulo: 'Alinhamento 3D', 
    descricao: 'Tecnologia computadorizada de precisao',
    Icone: Shield,
    link: '/servico/alinhamento'
  },
  { 
    titulo: 'Balanceamento', 
    descricao: 'Eliminacao de vibracoes e desgaste irregular',
    Icone: Clock,
    link: '/servico/balanceamento'
  },
];

export default function OfertasExclusivas() {
  return (
    <section className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* Imagem de fundo - troca de pneus na oficina Carplus */}
      <div className="absolute inset-0">
        <img
          loading="lazy"
          src="/images/loja/troca-de-pneus-portao-carplus.webp"
          alt=""
          width={1920}
          height={1280}
          className="w-full h-full object-cover object-center"
        />
        {/* Sobreposicao escura para legibilidade */}
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/40 to-neutral-950" />
      </div>

      {/* Brilho decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header da secao */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Ofertas Exclusivas
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            TROCA DE PNEUS NO <span className="text-amber-500">BAIRRO PORTAO</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto">
            Rapidez, seguranca e atendimento profissional. A Carplus e referencia em troca de pneus, 
            alinhamento, balanceamento e servicos automotivos completos em Curitiba.
          </p>
        </motion.div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-3 gap-8 items-start min-w-0">
          {/* Coluna esquerda - Servicos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 min-w-0"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              Servicos em Destaque
            </h3>
            
            {SERVICOS_DESTAQUE.map((servico, index) => (
              <Link
                key={index}
                to={servico.link}
                className="block bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-700/50 hover:border-amber-500/50 rounded-xl p-4 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-500/30 transition-colors">
                    <servico.Icone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold group-hover:text-amber-500 transition-colors text-balance">
                      {servico.titulo}
                    </h4>
                    <p className="text-neutral-500 text-sm text-pretty">{servico.descricao}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-neutral-600 group-hover:text-amber-500 transition-colors flex-shrink-0" />
                </div>
              </Link>
            ))}

            {/* CTA Borracharia */}
            <Link
              to="/borracharia-portao"
              className="block mt-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-neutral-900 font-bold py-4 px-6 rounded-xl text-center transition-all shadow-lg shadow-amber-500/20"
            >
              Conhecer Borracharia Full Service
            </Link>
          </motion.div>

          {/* Coluna central - Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full min-w-0"
          >
            <YouTubeShorts 
              videoId="4FpPSM5vYE8" 
              title="Troca de Pneus no Bairro Portao - Carplus Curitiba" 
            />
            <p className="text-neutral-500 text-sm mt-4 text-center">
              Veja nosso atendimento profissional
            </p>
          </motion.div>

          {/* Coluna direita - Beneficios e CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 min-w-0"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500" />
              Por que escolher a Carplus?
            </h3>

            <ul className="space-y-3">
              {[
                'Pneus nacionais e importados',
                'Troca rapida de pneus',
                'Alinhamento computadorizado',
                'Balanceamento profissional',
                'Pneus para carros eletricos',
                'Revisao automotiva completa',
                'Borracharia Full Service',
                'Atendimento especializado'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Info de contato */}
            <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-xl p-5 mt-6">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-white text-sm font-medium text-pretty">Av. Presidente Arthur da Silva Bernardes, 1323</p>
                  <p className="text-neutral-500 text-sm">Portao - Curitiba - PR</p>
                </div>
              </div>
              <a 
                href="tel:4130827282"
                className="flex items-center gap-3 text-amber-500 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="font-bold">(41) 3082-7282</span>
              </a>
            </div>

            {/* Bairros atendidos */}
            <p className="text-neutral-500 text-xs">
              Atendemos: Portao, Agua Verde, Vila Izabel, Capao Raso, Seminario, Fazendinha, Novo Mundo e toda Curitiba.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
