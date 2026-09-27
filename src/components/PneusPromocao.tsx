import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, List } from 'lucide-react';
import { PROMO_TIRES, PromoTire } from '../data/promoTires';

const BASE_URL = 'https://www.carpluspneuseoficina.com.br';

const FALLBACK_IMG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200"><rect width="200" height="200" fill="#f3f4f6"/><circle cx="100" cy="100" r="70" fill="none" stroke="#f59c00" stroke-width="14"/><circle cx="100" cy="100" r="30" fill="#f59c00"/></svg>`,
  );

const TireCard: FC<{ tire: PromoTire }> = ({ tire }) => {
  // URL da página dedicada — vai junto na mensagem do WhatsApp para rastrear a origem do clique
  const pageUrl = `${BASE_URL}/pneu-promocao/${tire.slug}`;
  const whatsappMsg = `Olá! Vi o *pneu ${tire.marca} ${tire.nome}* (medida ${tire.medida}) no site. Gostaria de saber o valor e consultar o pneu certo para o meu carro.\n\nOrigem do contato: ${pageUrl}`;
  const whatsappUrl = `https://wa.me/554130827282?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="group flex w-[230px] sm:w-[260px] flex-shrink-0 flex-col rounded-lg border border-neutral-200 bg-white overflow-hidden shadow-xs transition-colors hover:border-primary">
      <Link to={`/pneu-promocao/${tire.slug}`} className="relative aspect-square bg-white p-1 flex items-center justify-center overflow-hidden">
        <img
          src={tire.imagem}
          srcSet={`${tire.imagemSmall} 300w, ${tire.imagem} 600w`}
          sizes="(max-width: 640px) 230px, 260px"
          alt={`Pneu ${tire.marca} ${tire.nome}`}
          loading="lazy"
          decoding="async"
          width={300}
          height={300}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
          }}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-102"
        />
        <span className="absolute top-2.5 left-2.5 bg-black text-white text-[10px] font-accent font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
          Promoção
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to={`/pneu-promocao/${tire.slug}`} className="font-accent font-bold uppercase tracking-wide text-primary text-base leading-none hover:underline">
          {tire.marca}
        </Link>
        <p className="mt-1.5 text-neutral-600 text-sm leading-snug min-h-[2.5rem]">{tire.nome}</p>

        <p className="mt-3 rounded-md bg-primary/10 px-3 py-2 text-neutral-700 text-xs leading-snug border border-primary/20">
          Consulte o pneu certo para o seu carro no atendimento rápido pelo WhatsApp.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-black px-4 py-2.5 font-accent font-bold uppercase tracking-wider !text-white text-xs transition-colors hover:bg-neutral-800"
        >
          <MessageCircle size={15} strokeWidth={2.5} />
          Pedir orçamento
        </a>

        <Link
          to={`/pneu-promocao/${tire.slug}`}
          className="mt-2 inline-flex items-center justify-center gap-1 rounded-md border border-neutral-200 px-4 py-2 font-accent font-bold uppercase tracking-wider text-neutral-700 text-xs transition-colors hover:border-primary hover:text-primary"
        >
          Saiba mais
          <ArrowRight size={13} strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}

export default function PneusPromocao() {
  // Home exibe apenas 8 ofertas; o catalogo completo de promocoes fica em /pneus-promocao.
  const destaquePromo = PROMO_TIRES.slice(0, 8);
  // Duplicamos a lista para criar o efeito de loop infinito da esteira
  const track = [...destaquePromo, ...destaquePromo];

  return (
    <section id="promocao" className="relative bg-white py-14 md:py-20 overflow-hidden border-b border-gray-100">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-10 [animation:var(--animate-fade-in-up)]">
          <h2 className="font-accent font-bold uppercase text-neutral-900 text-3xl sm:text-4xl md:text-5xl tracking-tight text-balance">
            Onde Comprar Pneus em <span className="text-primary">Curitiba</span>
          </h2>

          {/* Chamada para consulta rápida pelo WhatsApp */}
          <div className="mt-5 inline-flex flex-col items-center">
            <span className="text-neutral-700 font-accent font-bold uppercase tracking-wider text-sm sm:text-base">
              Consulte o pneu certo para o seu carro
            </span>
            <a
              href="https://wa.me/554130827282?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20o%20pneu%20certo%20para%20o%20meu%20carro."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center gap-3.5 rounded-md border border-gray-200 bg-white hover:border-primary/80 px-6 py-3.5 shadow-sm transition-colors text-dark"
            >
              <div className="w-10 h-10 rounded-md bg-[#25D366] text-white flex items-center justify-center shrink-0">
                <MessageCircle size={22} strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <span className="block font-bold text-dark text-sm sm:text-base leading-tight uppercase tracking-tight">
                  Atendimento rápido pelo WhatsApp
                </span>
                <span className="text-xs text-gray-500 font-medium">Consulte medidas e valores com a equipe no Portão</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Esteira de produtos (direita -> esquerda) */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <div className="flex w-max gap-5 [animation:var(--animate-marquee-left)] hover:[animation-play-state:paused]">
          {track.map((tire, index) => (
            <TireCard key={`${tire.marca}-${index}`} tire={tire} />
          ))}
        </div>
      </div>

      {/* CTA: ver todos os pneus em lista */}
      <div className="mt-12 flex flex-col items-center gap-3 px-4">
        <p className="text-neutral-500 text-center text-sm">
          Não quer esperar a esteira passar? Veja todas as ofertas de uma vez.
        </p>
        <Link
          to="/pneus-promocao"
          className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 font-accent font-bold uppercase tracking-wide text-black text-base sm:text-lg transition-colors hover:bg-[#ffae2e]"
        >
          <List size={22} strokeWidth={2.5} />
          Ver todos os pneus em lista
          <ArrowRight size={20} strokeWidth={2.5} />
        </Link>
      </div>
    </section>
  );
}
