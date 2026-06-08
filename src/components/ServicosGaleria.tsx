import { Wrench } from 'lucide-react';

const BASE_URL = 'https://www.carpluspneuseoficina.com.br';

export interface GaleriaImagem {
  src: string;
  alt: string;
  legenda: string;
}

/**
 * Galeria reutilizável das fotos reais da oficina e dos serviços da Carplus.
 * Usada nas páginas de bairro e cidade para reforçar o contexto local (SEO)
 * e gerar prova visual dos serviços oferecidos.
 *
 * O alt e a legenda são personalizados com o nome da localidade recebido por prop.
 */
export function getGaleriaServicos(local: string): GaleriaImagem[] {
  return [
    {
      src: '/images/servicos-galeria/oficina-mecanica-elevadores-curitiba.webp',
      alt: `Centro automotivo Carplus com elevadores atendendo ${local} - Curitiba`,
      legenda: 'Oficina mecânica completa com elevadores',
    },
    {
      src: '/images/servicos-galeria/montagem-pneu-pirelli-curitiba.webp',
      alt: `Montagem de pneus para clientes de ${local} - Carplus Pirelli Performance Center`,
      legenda: 'Montagem de pneus por equipe especializada',
    },
    {
      src: '/images/servicos-galeria/alinhamento-3d-curitiba.webp',
      alt: `Alinhamento 3D computadorizado para veículos de ${local} - Carplus Curitiba`,
      legenda: 'Alinhamento 3D computadorizado',
    },
    {
      src: '/images/servicos-galeria/balanceamento-roda-curitiba.webp',
      alt: `Balanceamento de rodas para motoristas de ${local} - Carplus Curitiba`,
      legenda: 'Balanceamento de rodas de precisão',
    },
    {
      src: '/images/servicos-galeria/manutencao-freios-curitiba.webp',
      alt: `Manutenção e revisão de freios para carros de ${local} - Carplus Curitiba`,
      legenda: 'Revisão e manutenção de freios',
    },
    {
      src: '/images/servicos-galeria/loja-pneus-prinx-curitiba.webp',
      alt: `Loja de pneus com diversas marcas para ${local} - Carplus Curitiba`,
      legenda: 'Pneus das melhores marcas em estoque',
    },
    {
      src: '/images/servicos-galeria/alinhamento-pneu-michelin-curitiba.webp',
      alt: `Serviço de alinhamento de pneus Michelin para ${local} - Carplus Curitiba`,
      legenda: 'Alinhamento com equipamento profissional',
    },
    {
      src: '/images/servicos-galeria/rodas-alinhamento-oficina-curitiba.webp',
      alt: `Estrutura da oficina Carplus para atender ${local} - Curitiba`,
      legenda: 'Estrutura completa de oficina',
    },
  ];
}

/**
 * Gera o schema JSON-LD ImageGallery com as imagens dos serviços.
 * Deve ser incluído no array schemaJSON do useSEO de cada página.
 */
export function getGaleriaSchema(local: string) {
  const imagens = getGaleriaServicos(local);
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: `Serviços e centro automotivo Carplus para ${local}`,
    description: `Fotos reais da oficina mecânica e dos serviços de pneus, alinhamento, balanceamento e freios da Carplus atendendo ${local}, em Curitiba.`,
    image: imagens.map((img) => ({
      '@type': 'ImageObject',
      contentUrl: `${BASE_URL}${img.src}`,
      url: `${BASE_URL}${img.src}`,
      caption: img.alt,
      description: img.legenda,
    })),
  };
}

interface ServicosGaleriaProps {
  local: string;
  /** Variante visual: 'light' (fundo branco) ou 'muted' (fundo cinza claro) */
  variant?: 'light' | 'muted';
  titulo?: string;
  subtitulo?: string;
}

export default function ServicosGaleria({
  local,
  variant = 'light',
  titulo,
  subtitulo,
}: ServicosGaleriaProps) {
  const imagens = getGaleriaServicos(local);
  const bg = variant === 'muted' ? 'bg-gray-50' : 'bg-white';

  return (
    <section className={`py-20 ${bg}`} aria-labelledby="galeria-servicos-heading">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-1 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 flex items-center gap-2">
              <Wrench size={14} className="text-primary" /> Nossa Estrutura
            </span>
            <div className="w-12 h-1 bg-primary" />
          </div>
          <h2
            id="galeria-servicos-heading"
            className="text-3xl md:text-4xl font-black text-dark text-balance"
          >
            {titulo || (
              <>
                Conheça o Centro Automotivo que Atende{' '}
                <span className="text-primary italic">{local}</span>
              </>
            )}
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-pretty">
            {subtitulo ||
              `Veja a estrutura completa da Carplus: oficina mecânica, montagem de pneus, alinhamento 3D, balanceamento e freios para quem vem do ${local} e região.`}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {imagens.map((img, i) => (
            <figure
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 ${
                i === 0 ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={i === 0 ? 1200 : 600}
                height={i === 0 ? 800 : 400}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  i === 0 ? 'h-full min-h-[260px] md:min-h-[400px]' : 'h-44 md:h-52'
                }`}
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10">
                <span className="text-white text-sm font-bold leading-tight">{img.legenda}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
