import { Link } from 'react-router-dom';
import { ARO_PAGES } from '../data/seoLanding';

// Seção "Pneus por Aro em Curitiba" da Home.
// Grid estático (sem slider) com links rastreáveis para as landing pages de aro
// já existentes (/pneu-aro-XX-curitiba). Exibe apenas aros com catálogo real
// (13 ao 22); o aro 23 tem poucas medidas e segue acessível pela página do hub.
export const HOME_AROS = ARO_PAGES.filter((p) => p.aro >= 13 && p.aro <= 22)
  .map((p) => ({ aro: p.aro, slug: p.slug }))
  .sort((a, b) => a.aro - b.aro);

export default function PneusPorAroSection() {
  return (
    <section className="bg-gray-50 py-14 md:py-20" aria-labelledby="home-pneus-aro-titulo">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
          <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-black">
            Pneus por Aro
          </span>
          <h2 id="home-pneus-aro-titulo" className="mb-3 text-balance text-3xl font-bold uppercase tracking-tight md:text-4xl">
            Pneus por Aro em Curitiba
          </h2>
          <p className="text-pretty text-base leading-relaxed text-gray-600">
            Escolha o aro do seu veículo e veja as medidas e marcas disponíveis na Carplus, no Portão. Montagem, balanceamento e alinhamento 3D no mesmo endereço.
          </p>
        </div>

        <ul className="mx-auto grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-5" aria-label="Pneus por aro">
          {HOME_AROS.map(({ aro, slug }) => (
            <li key={aro}>
              <Link
                to={`/${slug}`}
                className="group flex min-h-20 flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white py-4 shadow-sm transition-all hover:border-primary hover:shadow-lg"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Pneus</span>
                <span className="text-xl font-bold text-black transition-colors group-hover:text-primary">Aro {aro}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10">
          <Link
            to="/medidas-de-pneus-curitiba"
            className="flex min-h-12 w-full items-center justify-center rounded-full bg-surface px-6 text-sm font-bold uppercase tracking-tight text-white shadow-lg transition-colors hover:bg-black sm:w-auto"
          >
            Buscar por medida
          </Link>
          <Link
            to="/pneus"
            className="flex min-h-12 w-full items-center justify-center rounded-full border border-gray-300 px-6 text-sm font-bold uppercase tracking-tight text-gray-800 transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            Catálogo completo
          </Link>
        </div>
      </div>
    </section>
  );
}
