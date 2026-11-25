import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CATALOG_LINKS } from '../data/catalogLinks';

export default function CatalogCrossLink({ from }: { from: 'tires' | 'ironman' }) {
  const fromTires = from === 'tires';
  const destination = CATALOG_LINKS[fromTires ? 1 : 0];

  return (
    <section aria-labelledby="outro-catalogo" className="mx-auto w-full max-w-7xl px-4 pb-12 md:pb-16">
      <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-dark p-6 text-white sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Explore o outro catálogo da Carplus</p>
          <h2 id="outro-catalogo" className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
            {fromTires ? 'Montando ou revisando seu 4x4?' : 'Também precisa de pneus?'}
          </h2>
          <p className="mt-2 max-w-2xl leading-relaxed text-white/80">
            {fromTires
              ? 'Confira os kits e componentes de suspensão Ironman 4x4 e encontre opções para o seu veículo.'
              : 'Compare pneus por aro, medida e marca e consulte a disponibilidade com a equipe da Carplus.'}
          </p>
        </div>
        <Link to={destination.to} className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-center text-sm font-black text-black transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-fit lg:shrink-0">
          Ver {destination.label.toLowerCase().replace('ironman', 'Ironman')}
          <ArrowRight size={18} aria-hidden="true" className="shrink-0" />
        </Link>
      </div>
    </section>
  );
}
