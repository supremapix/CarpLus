import { Link } from 'react-router-dom';
import { Disc, Wrench, Navigation, ArrowRight, MessageSquare, MapPin } from 'lucide-react';

export default function MainPaths() {
  const paths = [
    {
      icon: Disc,
      tag: 'Loja de Pneus',
      title: 'Comprar Pneus',
      description:
        'Pneus aro 13 ao 22 das melhores marcas: Pirelli, Michelin, Goodyear, Continental e mais. Montagem e balanceamento inclusos e até 10x sem juros.',
      primaryTo: '/pneus',
      primaryLabel: 'Ver catálogo de pneus',
      secondaryHref:
        'https://wa.me/554130827282?text=Olá! Gostaria de consultar medidas e valores de pneus na Carplus.',
      secondaryLabel: 'Consultar no WhatsApp',
      secondaryIcon: MessageSquare,
      accentBorder: 'hover:border-primary',
    },
    {
      icon: Wrench,
      tag: 'Oficina Completa',
      title: 'Agendar Serviço',
      description:
        'Alinhamento 3D computadorizado, balanceamento, manutenção de freios, revisão de suspensão, troca de óleo e scanner eletrônico com laudo transparente.',
      primaryTo: '/servicos',
      primaryLabel: 'Ver todos os serviços',
      secondaryHref:
        'https://wa.me/554130827282?text=Olá! Gostaria de agendar uma avaliação mecânica para o meu veículo na Carplus.',
      secondaryLabel: 'Agendar avaliação',
      secondaryIcon: MessageSquare,
      accentBorder: 'hover:border-primary',
    },
    {
      icon: Navigation,
      tag: 'Fácil Acesso no Portão',
      title: 'Como Chegar',
      description:
        'Localização central na Av. Pres. Arthur da Silva Bernardes, 1323, no Portão. Estacionamento próprio gratuito e acesso rápido para bairros vizinhos.',
      primaryTo: '/como-chegar',
      primaryLabel: 'Rotas e horários',
      secondaryHref: 'https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7',
      secondaryLabel: 'Abrir no Google Maps',
      secondaryIcon: MapPin,
      accentBorder: 'hover:border-primary',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 border-b border-gray-100" aria-label="Acesso rápido: Pneus, Oficina e Localização">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full inline-block mb-3">
            O que você precisa hoje?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-gray-900 leading-tight">
            Escolha como a Carplus pode te ajudar
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Pneus novos com montagem, oficina mecânica completa e atendimento ágil no Portão, em Curitiba.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {paths.map((p, idx) => {
            const Icon = p.icon;
            const SecIcon = p.secondaryIcon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-6 sm:p-8 border border-gray-150 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${p.accentBorder}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-dark text-primary flex items-center justify-center group-hover:scale-105 transition-transform shadow-md">
                      <Icon size={26} />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 font-normal">
                    {p.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-gray-100">
                  <Link
                    to={p.primaryTo}
                    className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-dark hover:bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-tight px-4 py-2.5 transition-colors w-full"
                  >
                    <span>{p.primaryLabel}</span>
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href={p.secondaryHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-10 items-center justify-center gap-2 rounded-xl border border-gray-200 hover:border-primary hover:text-black text-gray-700 text-xs font-bold uppercase tracking-tight px-4 py-2 transition-colors w-full"
                  >
                    <SecIcon size={14} className="text-primary" />
                    <span>{p.secondaryLabel}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
