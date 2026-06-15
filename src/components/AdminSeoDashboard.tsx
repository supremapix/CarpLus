import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CircleCheck as CheckCircle2,
  Copy,
  TriangleAlert,
  FileText,
  Search,
  ListFilter,
  ChartBar as BarChart3,
  ExternalLink,
} from 'lucide-react';
import {
  getAllTireDecisions,
  getSeoStats,
  MIN_PRODUCT_WORDS,
  type NoindexReason,
} from '../lib/seoIndexing';
import { generateTireContent } from '../lib/tireContent';
import { useSEO } from '../hooks/useSEO';

const REASON_LABEL: Record<NoindexReason, string> = {
  duplicate: 'Variante duplicada',
  'low-score': 'Score SEO baixo',
  'thin-content': 'Conteúdo fino',
};

type FilterKey = 'all' | 'indexable' | 'duplicate' | 'low-score' | 'thin';

export default function AdminSeoDashboard() {
  useSEO({
    title: 'Dashboard SEO | Carplus (Admin)',
    description: 'Painel interno de monitoramento de indexação.',
    noindex: true,
    canonical: 'https://www.carpluspneuseoficina.com.br/admin/seo',
  });

  const [filter, setFilter] = useState<FilterKey>('duplicate');
  const [query, setQuery] = useState('');

  const stats = useMemo(() => getSeoStats(), []);
  const decisions = useMemo(() => getAllTireDecisions(), []);

  // Páginas finas: canônicas indexáveis cujo conteúdo programático fica abaixo do mínimo.
  const thinSlugs = useMemo(() => {
    const set = new Set<string>();
    for (const d of decisions) {
      if (!d.decision.index) continue;
      const wc = generateTireContent(d.tire).wordCount + (d.tire.descricao || '').split(/\s+/).length;
      if (wc < MIN_PRODUCT_WORDS) set.add(d.tire.slug);
    }
    return set;
  }, [decisions]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return decisions
      .filter((d) => {
        if (filter === 'indexable' && !d.decision.index) return false;
        if (filter === 'duplicate' && !d.decision.reasons.includes('duplicate')) return false;
        if (filter === 'low-score' && !d.decision.reasons.includes('low-score')) return false;
        if (filter === 'thin' && !thinSlugs.has(d.tire.slug)) return false;
        if (q && !d.tire.nome.toLowerCase().includes(q) && !d.tire.slug.toLowerCase().includes(q)) {
          return false;
        }
        return true;
      })
      .slice(0, 300);
  }, [decisions, filter, query, thinSlugs]);

  const kpis = [
    { label: 'URLs de produto', value: stats.total, icon: <FileText size={20} />, tone: 'neutral' },
    { label: 'Indexáveis', value: stats.indexable, icon: <CheckCircle2 size={20} />, tone: 'good' },
    { label: 'Duplicadas (noindex)', value: stats.duplicates, icon: <Copy size={20} />, tone: 'warn' },
    { label: 'Score baixo (noindex)', value: stats.lowScore, icon: <TriangleAlert size={20} />, tone: 'warn' },
    { label: 'Páginas finas', value: thinSlugs.size, icon: <FileText size={20} />, tone: thinSlugs.size > 0 ? 'warn' : 'good' },
    { label: 'Redução de URLs', value: `${stats.reductionPct}%`, icon: <BarChart3 size={20} />, tone: 'good' },
  ];

  const filters: { key: FilterKey; label: string; count: number }[] = [
    { key: 'all', label: 'Todas', count: stats.total },
    { key: 'indexable', label: 'Indexáveis', count: stats.indexable },
    { key: 'duplicate', label: 'Duplicadas', count: stats.duplicates },
    { key: 'low-score', label: 'Score baixo', count: stats.lowScore },
    { key: 'thin', label: 'Conteúdo fino', count: thinSlugs.size },
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      <header className="border-b border-white/10 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight italic">
              Dashboard <span className="text-primary">SEO</span>
            </h1>
            <p className="text-white/50 text-sm mt-1">
              Monitoramento de indexação inteligente — atualizado em tempo real a partir do catálogo.
            </p>
          </div>
          <Link to="/" className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-primary">
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* KPIs */}
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="bg-white/5 border border-white/10 rounded-2xl p-5"
            >
              <div
                className={`inline-flex p-2 rounded-xl mb-3 ${
                  k.tone === 'good'
                    ? 'bg-green-500/15 text-green-400'
                    : k.tone === 'warn'
                      ? 'bg-primary/15 text-primary'
                      : 'bg-white/10 text-white/70'
                }`}
              >
                {k.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold">{k.value}</div>
              <div className="text-[11px] uppercase tracking-widest text-white/50 mt-1">{k.label}</div>
            </div>
          ))}
        </section>

        {/* Como funciona */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
          <h2 className="font-bold uppercase tracking-tight mb-3 flex items-center gap-2">
            <ListFilter size={18} className="text-primary" /> Regras de indexação aplicadas
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/70">
            <li>• Variantes equivalentes (por veículo, -para-*, -run-flat, -oe, -yt, -1..-9) → noindex,follow + canonical para a principal.</li>
            <li>• Página canônica com score SEO mínimo e 900+ palavras → index,follow.</li>
            <li>• Paginação /pneus?page=2+ e filtros → noindex,follow e fora do sitemap.</li>
            <li>• Medidas com menos de 2 opções → noindex (conteúdo fino).</li>
          </ul>
        </section>

        {/* Filtros + busca */}
        <section className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                  filter === f.key
                    ? 'bg-primary text-black'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
                }`}
              >
                {f.label} <span className="opacity-60">({f.count})</span>
              </button>
            ))}
          </div>
          <div className="relative md:ml-auto md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por nome ou slug…"
              className="w-full bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm outline-none focus:border-primary"
            />
          </div>
        </section>

        {/* Tabela */}
        <section className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-[11px] uppercase tracking-widest text-white/40 border-b border-white/10">
                  <th className="px-4 py-3 font-bold">Produto</th>
                  <th className="px-4 py-3 font-bold">Status</th>
                  <th className="px-4 py-3 font-bold">Score</th>
                  <th className="px-4 py-3 font-bold">Canonical</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((d) => (
                  <tr key={d.tire.slug} className="border-b border-white/5 hover:bg-white/5">
                    <td className="px-4 py-3">
                      <a
                        href={`/pneu/${d.tire.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:text-primary inline-flex items-center gap-1"
                      >
                        {d.tire.nome} <ExternalLink size={12} className="text-white/30" />
                      </a>
                      <div className="text-[11px] text-white/40 mt-0.5">/pneu/{d.tire.slug}</div>
                    </td>
                    <td className="px-4 py-3">
                      {d.decision.index ? (
                        <span className="inline-flex items-center gap-1 text-green-400 text-xs font-bold">
                          <CheckCircle2 size={14} /> index
                        </span>
                      ) : (
                        <span className="inline-flex flex-col gap-1">
                          <span className="text-primary text-xs font-bold">noindex,follow</span>
                          <span className="text-[10px] text-white/40">
                            {d.decision.reasons.map((r) => REASON_LABEL[r]).join(', ')}
                          </span>
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 font-bold">{d.decision.score}</td>
                    <td className="px-4 py-3 text-[11px] text-white/50">
                      {d.decision.canonicalSlug === d.tire.slug ? (
                        <span className="text-white/30">— própria</span>
                      ) : (
                        <span>/pneu/{d.decision.canonicalSlug}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <div className="px-4 py-12 text-center text-white/40 text-sm">Nenhuma URL encontrada para este filtro.</div>
          )}
          {filtered.length >= 300 && (
            <div className="px-4 py-3 text-center text-white/40 text-xs border-t border-white/10">
              Exibindo as primeiras 300 URLs. Refine a busca para ver mais.
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
