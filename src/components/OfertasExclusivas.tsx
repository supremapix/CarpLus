import { motion } from 'motion/react';
import {
  CheckCircle2, MapPin, Phone, Star, ArrowRight,
  Car, ShieldCheck, FileCheck, BadgeCheck, ExternalLink
} from 'lucide-react';
import LiteYouTube from './LiteYouTube';

// Link externo para a Carplus Autos (compra e venda de veículos).
const CARPLUS_AUTOS_URL = 'https://www.carplusautos.com.br/';

// Componente de Video YouTube Shorts (9:16) — usa façade LiteYouTube:
// nenhum script do YouTube carrega antes do clique do usuário.
function YouTubeShorts({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
      <LiteYouTube videoId={videoId} title={title} params="rel=0" />
    </div>
  );
}

const DIFERENCIAIS = [
  {
    titulo: 'Procedência Garantida',
    descricao: 'Histórico verificado e origem comprovada de cada veículo',
    Icone: ShieldCheck,
  },
  {
    titulo: 'Vistoria Aprovada',
    descricao: 'Todos os veículos passam por vistoria completa antes da venda',
    Icone: BadgeCheck,
  },
  {
    titulo: 'Avaliação Justa',
    descricao: 'Avaliamos o seu veículo com transparência e o melhor preço',
    Icone: Car,
  },
  {
    titulo: 'Documentação em Dia',
    descricao: 'Transferência segura, sem burocracia e sem dor de cabeça',
    Icone: FileCheck,
  },
];

export default function OfertasExclusivas() {
  return (
    <section className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* Imagem de fundo - loja Carplus Autos (compra e venda de veículos) */}
      <div className="absolute inset-0">
        <img
          loading="lazy"
          src="/images/loja/carplus-autos-compra-venda-veiculos.webp"
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
            <Car className="w-4 h-4" />
            Novidade na Carplus
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 text-balance">
            AGORA A CARPLUS <span className="text-amber-500">COMPRA E VENDE VEÍCULOS</span>
          </h2>
          <p className="text-neutral-400 text-lg max-w-3xl mx-auto text-pretty">
            Além de pneus e serviços automotivos, a Carplus agora também compra e vende veículos
            com procedência garantida e vistoria aprovada. Negócio seguro, transparente e com toda
            a confiança que você já conhece.
          </p>
        </motion.div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-3 gap-8 items-start min-w-0">
          {/* Coluna esquerda - Diferenciais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 min-w-0"
          >
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber-500" />
              Compra e Venda de Veículos
            </h3>

            {DIFERENCIAIS.map((item, index) => (
              <div
                key={index}
                className="block bg-neutral-800/50 border border-neutral-700/50 rounded-xl p-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.Icone className="w-5 h-5 text-amber-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold text-balance">
                      {item.titulo}
                    </h4>
                    <p className="text-neutral-500 text-sm text-pretty">{item.descricao}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Carplus Autos */}
            <a
              href={CARPLUS_AUTOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-6 bg-primary hover:bg-primary/90 text-neutral-900 font-bold py-4 px-6 rounded-xl text-center transition-all shadow-lg shadow-primary/20"
            >
              Conhecer a Carplus Autos
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Coluna central - Video */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center w-full min-w-0"
          >
            <YouTubeShorts
              videoId="TL490QZpGlc"
              title="Carplus agora compra e vende veículos com procedência e vistoria aprovada"
            />
            <p className="text-neutral-500 text-sm mt-4 text-center text-pretty">
              Veja a novidade da Carplus
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
              Por que negociar na Carplus?
            </h3>

            <ul className="space-y-3">
              {[
                'Veículos com procedência garantida',
                'Vistoria aprovada em todos os veículos',
                'Avaliação transparente do seu veículo',
                'Documentação regularizada',
                'Compra e venda com total segurança',
                'Tradição e confiança em Curitiba',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-neutral-300">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Saiba mais - Carplus Autos */}
            <a
              href={CARPLUS_AUTOS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-3 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl p-4 transition-colors group"
            >
              <span className="text-amber-500 font-semibold">Saiba mais em carplusautos.com.br</span>
              <ArrowRight className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </a>

            {/* Info de contato */}
            <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-xl p-5">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
