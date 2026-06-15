import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { CircleCheck as CheckCircle2, ChevronRight, BookOpen, GitCompare, Ruler, Tag, CarFront, Wrench, MessageSquare } from 'lucide-react';
import { TIRES, type Tire } from '../data';
import { generateTireContent } from '../lib/tireContent';
import { getCanonicalSlug } from '../lib/seoIndexing';

interface TireSeoContentProps {
  tire: Tire;
}

// Helper: monta a slug de medida aceita pela rota /pneu-medida (ex.: "195/60R15" -> "195-60r15").
function measureToSlug(medida: string): string {
  return medida.toLowerCase().replace(/\//g, '-').replace(/r/g, 'r');
}

// Helper: slug de landing page de marca já existente no site.
function brandLandingSlug(marca: string): string {
  return `pneus-${marca.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-')}-curitiba`;
}

function dedupeByCanonical(tires: Tire[], excludeId: number, limit: number): Tire[] {
  const seen = new Set<string>();
  const out: Tire[] = [];
  for (const t of tires) {
    if (!t || !t.slug || t.id === excludeId) continue;
    const canon = getCanonicalSlug(t.slug);
    if (seen.has(canon)) continue;
    seen.add(canon);
    out.push(t);
    if (out.length >= limit) break;
  }
  return out;
}

export default function TireSeoContent({ tire }: TireSeoContentProps) {
  const content = generateTireContent(tire);

  // Blocos de linkagem interna contextual (mínimo 5 links por página).
  const sameMeasure = dedupeByCanonical(
    TIRES.filter((t) => t && t.medida === tire.medida),
    tire.id,
    4,
  );
  const sameBrand = dedupeByCanonical(
    TIRES.filter((t) => t && t.marca === tire.marca),
    tire.id,
    4,
  );
  const firstCar = tire.carros?.[0];
  const sameVehicle = firstCar
    ? dedupeByCanonical(
        TIRES.filter((t) => t && t.carros?.includes(firstCar)),
        tire.id,
        4,
      )
    : [];

  const relatedServices = [
    { slug: 'troca-de-pneus', label: 'Troca de Pneus' },
    { slug: 'alinhamento-3d', label: 'Alinhamento 3D' },
    { slug: 'balanceamento-computadorizado', label: 'Balanceamento' },
    { slug: 'calibragem-nitrogenio', label: 'Calibragem com Nitrogênio' },
  ];

  return (
    <>
      {/* ───── Conteúdo programático premium (900+ palavras únicas) ───── */}
      <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-12">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-primary p-3 rounded-2xl">
            <BookOpen className="text-black" size={28} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight italic leading-snug">
            Guia completo do {tire.marca} {tire.linha} {tire.medida}
          </h2>
        </div>

        <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-10">{content.intro}</p>

        <div className="space-y-10">
          {content.sections.map((sec, i) => (
            <div key={i}>
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 text-dark">
                {sec.heading}
              </h3>
              {sec.paragraphs.map((p, j) => (
                <p key={j} className="text-gray-600 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
              {sec.bullets && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {sec.bullets.map((b, k) => (
                    <li key={k} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                      <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ───── Comparação com modelos similares ───── */}
      {content.comparison.length > 0 && (
        <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-primary p-3 rounded-2xl">
              <GitCompare className="text-black" size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight italic leading-snug">
              Comparação com modelos similares
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.comparison.map(({ tire: t, reason }) => (
              <Link
                key={t.id}
                to={`/pneu/${getCanonicalSlug(t.slug)}`}
                className="border-2 border-gray-100 hover:border-primary rounded-2xl p-6 transition-all group"
              >
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest block mb-1">
                  {t.marca}
                </span>
                <h3 className="font-bold uppercase tracking-tighter mb-3 leading-tight group-hover:text-primary transition-colors">
                  {t.nome}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{reason}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ───── Linkagem interna contextual ───── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <LinkBlock
          icon={<Ruler size={20} />}
          title={`Mesma medida ${tire.medida}`}
          seeAll={{ to: `/pneu-medida/${measureToSlug(tire.medida)}`, label: `Ver todos ${tire.medida}` }}
          items={sameMeasure.map((t) => ({ to: `/pneu/${getCanonicalSlug(t.slug)}`, label: t.nome }))}
        />
        <LinkBlock
          icon={<Tag size={20} />}
          title={`Mais pneus ${tire.marca}`}
          seeAll={{ to: `/${brandLandingSlug(tire.marca)}`, label: `Ver linha ${tire.marca}` }}
          items={sameBrand.map((t) => ({ to: `/pneu/${getCanonicalSlug(t.slug)}`, label: t.nome }))}
        />
        {sameVehicle.length > 0 && (
          <LinkBlock
            icon={<CarFront size={20} />}
            title={`Pneus para ${firstCar}`}
            items={sameVehicle.map((t) => ({ to: `/pneu/${getCanonicalSlug(t.slug)}`, label: t.nome }))}
          />
        )}
        <LinkBlock
          icon={<Wrench size={20} />}
          title="Serviços relacionados"
          items={relatedServices.map((s) => ({ to: `/servico/${s.slug}`, label: s.label }))}
        />
      </section>

      {/* ───── CTA local Curitiba ───── */}
      <section className="bg-dark text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-12">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight italic leading-snug mb-4 text-primary">
          {tire.marca} {tire.linha} {tire.medida} em Curitiba
        </h2>
        <p className="text-white/80 leading-relaxed mb-8">{content.ctaLocal}</p>
        <a
          href={`https://wa.me/554130827282?text=${encodeURIComponent(`Olá! Quero o pneu ${tire.nome} com montagem inclusa.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all"
        >
          <MessageSquare size={20} /> Orçamento no WhatsApp
        </a>
      </section>
    </>
  );
}

interface LinkBlockProps {
  icon: ReactNode;
  title: string;
  items: { to: string; label: string }[];
  seeAll?: { to: string; label: string };
}

function LinkBlock({ icon, title, items, seeAll }: LinkBlockProps) {
  if (items.length === 0) return null;
  return (
    <div className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl border border-gray-100">
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-primary/10 text-primary p-2 rounded-xl">{icon}</div>
        <h3 className="font-bold uppercase tracking-tight text-dark">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="flex items-center justify-between gap-2 text-sm text-gray-600 hover:text-primary py-2 border-b border-gray-50 last:border-0 transition-colors group"
            >
              <span className="line-clamp-1">{item.label}</span>
              <ChevronRight size={16} className="text-gray-300 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
      {seeAll && (
        <Link
          to={seeAll.to}
          className="inline-flex items-center gap-2 text-primary font-bold text-sm mt-4 hover:underline"
        >
          {seeAll.label} <ChevronRight size={14} />
        </Link>
      )}
    </div>
  );
}
