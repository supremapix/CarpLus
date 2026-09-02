import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowRight } from 'lucide-react';
import SectionTitle from './SectionTitle';

// Bloco "Loja de Pneus no Portão, Curitiba" — responde: onde comprar, marcas,
// medidas, montagem/balanceamento/alinhamento, localização e WhatsApp, sem
// repetir o que já está no bloco de oficina/bairros da Home.
const MARCAS = ['Pirelli', 'Michelin', 'Goodyear', 'Continental', 'Bridgestone', 'Firestone', 'Yokohama', 'Prinx', 'Delinte'];

const LINKS_PNEUS = [
  { label: 'Catálogo de pneus', to: '/pneus' },
  { label: 'Pneus por medida', to: '/medidas-de-pneus-curitiba' },
  { label: 'Pneus por aro e marca', to: '/pneus-curitiba' },
  { label: 'Montagem de pneu', to: '/servico/montagem-de-pneu' },
  { label: 'Alinhamento e balanceamento', to: '/servico/alinhamento-e-balanceamento' },
];

export default function StoreSection() {
  return (
    <section className="w-full overflow-hidden bg-[#111111] px-4 py-14 md:px-8 md:py-24" aria-labelledby="home-loja-pneus">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md flex-shrink-0 lg:w-1/2 lg:max-w-none"
          >
            <div className="absolute -left-3 -top-3 z-10 size-14 md:-left-4 md:-top-4 md:size-20">
              <div className="absolute left-0 top-0 h-2 w-full bg-primary" />
              <div className="absolute left-0 top-0 h-full w-2 bg-primary" />
            </div>
            <div className="absolute -bottom-3 -right-3 z-10 size-14 md:-bottom-4 md:-right-4 md:size-20">
              <div className="absolute bottom-0 right-0 h-2 w-full bg-primary" />
              <div className="absolute bottom-0 right-0 h-full w-2 bg-primary" />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                loading="lazy"
                src="/images/loja/carplus-oficina-interior.webp"
                alt="Interior da loja de pneus e oficina Carplus no Portão, Curitiba"
                width={1001}
                height={1200}
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full text-center lg:w-1/2 lg:text-left"
          >
            <p className="mb-2 text-sm font-bold uppercase tracking-wider text-primary sm:text-base">
              Carplus Pneus e Oficina
            </p>

            <div id="home-loja-pneus">
              <SectionTitle prefix="LOJA DE PNEUS NO PORTÃO," highlight="CURITIBA" darkBg className="lg:text-left" />
            </div>

            <div className="flex flex-col gap-5 text-pretty text-base leading-relaxed text-gray-300 md:text-lg">
              <p>
                A Carplus vende pneus para carros de passeio, SUVs, picapes e utilitários na Av. Presidente Arthur da Silva Bernardes, 1323, no Portão. O catálogo cobre do aro 13 ao aro 22, com medidas organizadas por largura, perfil e aro para facilitar a busca pela medida exata do seu veículo.
              </p>
              <p>
                Marcas comercializadas: <span className="font-semibold text-white">{MARCAS.join(', ')}</span>. A montagem e o balanceamento são feitos no ato da compra, no mesmo endereço, e o alinhamento 3D é realizado na própria oficina. Pagamento em até 10x sem juros no cartão.
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start" aria-label="Páginas de pneus">
              {LINKS_PNEUS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="flex min-h-10 items-center gap-1 rounded-full border border-white/15 px-4 text-xs font-bold uppercase tracking-tight text-white/85 transition-colors hover:border-primary hover:text-primary"
                  >
                    {l.label}
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                to="/pneus"
                className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-tight text-black shadow-lg transition-colors hover:bg-yellow-400"
              >
                Ver pneus
              </Link>
              <a
                href="https://wa.me/554130827282?text=Ola! Gostaria de consultar a disponibilidade de pneus na Carplus."
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-bold uppercase tracking-tight text-white transition-colors hover:bg-white/10"
              >
                <MessageSquare size={18} aria-hidden="true" />
                Consultar medida no WhatsApp
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
