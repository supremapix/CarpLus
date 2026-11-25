import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ClipboardList, MapPin, MessageCircle, Phone, Play, Search, Wrench } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSEO } from '../hooks/useSEO';
import { generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema';
import { BASE_URL, WHATSAPP_NUMBER, PHONE_DISPLAY } from '../data/seoLanding';
import { SUSPENSAO_4X4 } from '../data/suspensao4x4';
import { SUSPENSION_IMAGES } from '../data/suspensao4x4Images';
import { SuspensionCard } from './SuspensionCard';

export const SUSPENSAO_4X4_PATH = '/suspensao-4x4-curitiba';
const TITLE = 'Suspensão 4x4 em Curitiba | Catálogo Carplus no Portão';
const DESCRIPTION = 'Consulte kits de suspensão 4x4, lift, amortecedores, molas e acessórios na Carplus, no Portão. Filtre o catálogo e peça orçamento por modelo e ano.';
const HERO = '/images/suspensao-4x4/hero-oficina-4x4.jpg';
const INSTAGRAM = 'https://www.instagram.com/reel/Dfrqw4itmjx/';
const CX = 'mx-auto max-w-7xl px-4 md:px-6';
const BTN = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-center text-sm font-bold text-dark hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500';
const CTA = (ref?: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  `Olá! Quero um orçamento de suspensão 4x4 na Carplus.${ref ? ` Referência: ${ref}.` : ''} Meu veículo é [marca/modelo], ano [ano], versão [versão]. Uso principal: [cidade, carga, estrada de terra ou trilha].`
)}`;
const norm = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const IRONMAN_BRAND = 'Ironman';
const IRONMAN_COUNT = SUSPENSAO_4X4.filter(item => item.brand === IRONMAN_BRAND).length;
const IRONMAN_HERO = SUSPENSION_IMAGES['CP4X4-001'];
const FAQ = [
  { question: 'O catálogo confirma que a peça serve no meu veículo?', answer: 'Não. As famílias e gerações são referências de catálogo. Para confirmar, envie marca, modelo, ano, versão e tração. A equipe verifica a aplicação e as peças adicionais antes de indicar a configuração.' },
  { question: 'Qual é a diferença entre revisar e elevar a suspensão?', answer: 'A revisão procura desgaste, folgas e a origem de ruídos. Um kit lift altera a altura e pode exigir verificação de geometria, pneus, carga e requisitos aplicáveis. Converse com a oficina antes de comprar ou instalar.' },
  { question: 'O valor do kit inclui instalação e alinhamento?', answer: 'Não presuma que inclui. No orçamento, peça para discriminar o que vem no kit, peças complementares, instalação e alinhamento, quando aplicáveis. Preço, disponibilidade e prazo são confirmados na cotação.' },
  { question: 'Onde fica a Carplus Pneus e Oficina?', answer: 'A unidade fica na Av. Presidente Arthur da Silva Bernardes, 1323, Portão, Curitiba–PR. Ligue ou fale pelo WhatsApp para combinar avaliação ou orçamento.' },
];
const GUIDE = [
  ['Revisão e reposição', 'Barulho, desgaste irregular ou folga? Comece por uma avaliação da suspensão. A Carplus revisa o conjunto e faz troca de amortecedores, buchas, bieletas, pivôs e terminais conforme a necessidade.'],
  ['Kits e peças 4x4', 'Use o catálogo para identificar uma referência de kit, mola, amortecedor, bandeja ou acessório. O conjunto exato depende do veículo e da configuração desejada.'],
  ['Elevação e uso com carga', 'Conte se a picape roda com carga constante, em estrada de terra ou em trilha. Não escolha pela altura anunciada: confirme geometria, medidas e requisitos de instalação para o seu caso.'],
];

export default function Suspensao4x4() {
  useSEO({
    title: TITLE, description: DESCRIPTION, canonical: `${BASE_URL}${SUSPENSAO_4X4_PATH}`, ogImage: HERO,
    schemaJSON: [
      generateBreadcrumbSchema([{ name: 'Início', url: `${BASE_URL}/` }, { name: 'Serviços', url: `${BASE_URL}/servicos` }, { name: 'Suspensão 4x4', url: `${BASE_URL}${SUSPENSAO_4X4_PATH}` }]),
      generateFaqSchema(FAQ),
    ],
  });
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState('');
  const [brand, setBrand] = useState('');
  const showIronman = () => {
    setQuery('');
    setFamily('');
    setBrand(IRONMAN_BRAND);
    const results = document.getElementById('filtros-catalogo-4x4');
    results?.focus({ preventScroll: true });
    results?.scrollIntoView({ block: 'start', behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  const [video, setVideo] = useState(false);
  const groups = useMemo(() => Array.from(new Set(SUSPENSAO_4X4.map(item => item.group))).sort((a, b) => a.localeCompare(b, 'pt-BR')), []);
  const filtered = useMemo(() => {
    const words = norm(query).trim().split(/\s+/).filter(Boolean);
    return SUSPENSAO_4X4.filter(item => (!family || item.group === family) && (!brand || item.brand === brand) && words.every(w => norm(`${item.name} ${item.group} ${item.vehicle} ${item.brand} ${item.ref}`).includes(w)));
  }, [query, family, brand]);
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <section aria-labelledby="suspensao-4x4-title" className="bg-dark bg-[radial-gradient(ellipse_at_top_right,rgba(255,199,0,0.16),transparent_55%)] pb-10 pt-28 text-white md:pb-16 md:pt-32">
          <div className={CX}>
            <nav aria-label="Caminho da página" className="mb-5 flex flex-wrap items-center gap-2 text-sm text-white/80">
              <Link to="/" className="hover:text-primary">Início</Link><ChevronRight size={15} aria-hidden="true" />
              <Link to="/servicos" className="hover:text-primary">Serviços</Link><ChevronRight size={15} aria-hidden="true" />
              <span aria-current="page">Suspensão 4x4</span>
            </nav>
            <div className="grid items-center gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary">Catálogo de suspensão 4x4 · Curitiba</p>
                <h1 id="suspensao-4x4-title" className="max-w-2xl text-4xl font-black italic leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">O kit certo começa <span className="text-primary">pelo seu 4×4.</span></h1>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">Quer preparar a picape para carga, estrada de terra ou trilha? Compare kits lift, amortecedores, molas e componentes. A Carplus, no Portão, confere a aplicação com você antes do orçamento.</p>
                <div className="mt-5 grid gap-2.5 sm:flex sm:flex-wrap">
                  <a href="#catalogo-4x4" className={BTN}>Explorar catálogo <ArrowRight size={18} aria-hidden="true" /></a>
                  <button type="button" onClick={showIronman} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/50 px-5 py-3 text-sm font-bold hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Ver linha Ironman <ArrowRight size={18} aria-hidden="true" /></button>
                </div>
                <p className="mt-4 text-sm text-white/80"><strong className="text-white">Tenha em mãos:</strong> modelo, ano e versão. A equipe confirma a aplicação e as condições na cotação.</p>
                <a href={CTA()} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-bold text-primary underline underline-offset-4 hover:text-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><MessageCircle size={17} aria-hidden="true" /> Pedir orçamento no WhatsApp</a>
              </div>
              <figure className="overflow-hidden rounded-2xl border border-white/20 bg-white text-dark shadow-lg shadow-black/25">
                <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-neutral-200 bg-neutral-50 px-4 py-3 sm:px-6">
                  <img src="/images/suspensao-4x4/ironman-4x4.svg" alt="Ironman 4x4" width={152} height={34} className="h-auto w-28 sm:w-36" decoding="async" />
                  <span className="rounded-full border border-neutral-300 bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-neutral-700">Na Carplus</span>
                </div>
                <img src={IRONMAN_HERO} alt="Foto do kit Ironman 4x4 NitroGás para Ford Ranger 2024, com molas e amortecedores" width={800} height={800} fetchPriority="high" decoding="async" className="mx-auto h-auto max-h-80 w-full object-contain px-3 sm:px-5" />
                <figcaption className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1 border-t border-neutral-200 px-4 py-3 sm:px-6">
                  <span className="text-sm font-bold">Kit Ironman NitroGás · Ford Ranger 2024</span><span className="text-xs text-neutral-600">Referência CP4X4-001</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <nav aria-label="Nesta página" className="sticky top-20 z-20 border-b border-gray-200 bg-white md:static">
          <div className={`${CX} flex flex-wrap items-center justify-between gap-x-4 py-2`}>
            <div className="flex flex-wrap gap-x-4">
              <a href="#catalogo-4x4" className="inline-flex min-h-11 items-center text-sm font-bold hover:underline">Catálogo</a>
              <a href="#avaliacao" className="inline-flex min-h-11 items-center text-sm font-bold hover:underline">Oficina</a>
              <a href="#como-orcar" className="inline-flex min-h-11 items-center text-sm font-bold hover:underline">Como cotar</a>
            </div>
            <a href={CTA()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-bold text-dark"><MessageCircle size={17} aria-hidden="true" /><span className="hidden min-[380px]:inline">Orçar</span><span className="sr-only"> suspensão 4x4 pelo WhatsApp</span></a>
          </div>
        </nav>

        <section id="catalogo-4x4" className="scroll-mt-40 py-12 md:py-16" aria-labelledby="catalogo-4x4-title">
          <div className={CX}>
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-amber-700">Consulta por aplicação</p>
            <h2 id="catalogo-4x4-title" className="text-2xl font-black uppercase italic tracking-tight md:text-4xl">Catálogo de suspensão 4x4</h2>
            <p className="mt-3 mb-5 max-w-3xl text-gray-700">Pesquise pelo modelo do veículo, fabricante ou nome da peça. As referências comerciais não confirmam estoque, ano compatível, componentes incluídos ou serviço de instalação. Consulte a equipe antes de fechar.</p>
            <aside aria-labelledby="linha-ironman-4x4" className="mb-7 overflow-hidden rounded-xl border border-neutral-800 bg-dark text-white sm:grid sm:grid-cols-[1fr_0.64fr]">
              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <p className="text-xs font-bold uppercase tracking-widest text-primary">Marca em destaque</p>
                <h3 id="linha-ironman-4x4" className="mt-2 text-3xl font-black uppercase italic tracking-tight md:text-5xl">Ironman <span className="text-primary">4x4</span></h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base">Explore {IRONMAN_COUNT} referências da Ironman 4x4, entre kits, amortecedores e componentes. Informe modelo, ano e versão para a Carplus confirmar a aplicação e preparar a cotação.</p>
                <button type="button" onClick={showIronman} className={`${BTN} mt-5 self-start`}>Ver linha Ironman 4x4 <ArrowRight size={18} aria-hidden="true" /></button>
              </div>
              <figure className="bg-white text-dark">
                <img src={IRONMAN_HERO} alt="Kit de suspensão Ironman 4x4 NitroGás para Ford Ranger 2024" width={800} height={800} loading="lazy" decoding="async" className="mx-auto h-48 w-full object-contain sm:h-56" />
                <figcaption className="px-3 pb-2 text-center text-xs">Kit NitroGás para Ford Ranger 2024 · CP4X4-001</figcaption>
              </figure>
            </aside>
            <div id="filtros-catalogo-4x4" tabIndex={-1} aria-label="Filtros do catálogo" role="group" className="scroll-mt-36 grid gap-4 rounded-xl border border-gray-200 bg-white p-4 sm:grid-cols-[2fr_1fr] sm:p-5">
              <label className="block min-w-0 font-bold text-sm">
                Buscar peça ou veículo
                <span className="relative mt-2 block">
                  <Search size={18} aria-hidden="true" className="pointer-events-none absolute left-3 top-3.5 text-gray-600" />
                  <input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Ex.: Hilux, Ranger ou amortecedor" className="min-h-12 w-full rounded-md border border-gray-400 bg-white pr-3 pl-10 text-base font-normal text-dark focus:border-amber-600 focus:outline-2 focus:outline-amber-600" />
                </span>
              </label>
              <label className="block min-w-0 text-sm font-bold">
                Grupo de produtos
                <select value={family} onChange={e => setFamily(e.target.value)} className="mt-2 min-h-12 w-full rounded-md border border-gray-400 bg-white px-3 text-base font-normal focus:border-amber-600 focus:outline-2 focus:outline-amber-600">
                  <option value="">Todos os grupos</option>
                  {groups.map(group => <option value={group} key={group}>{group}</option>)}
                </select>
              </label>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <p aria-live="polite" role="status" className="text-sm text-gray-700"><strong>{filtered.length}</strong> {filtered.length === 1 ? 'referência encontrada' : 'referências encontradas'}</p>
              {brand && <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-900">Marca: Ironman 4x4</span>}
              {(query || family || brand) && <button type="button" onClick={() => { setQuery(''); setFamily(''); setBrand(''); }} className="min-h-11 px-2 text-sm font-bold underline underline-offset-4">Limpar filtros</button>}
            </div>
            {filtered.length === 0 ? <p className="mt-4 rounded-lg border border-gray-200 bg-white p-4">Nenhuma referência combina com os filtros. Experimente só o modelo do veículo ou <a href={CTA()} className="font-bold underline">consulte a oficina</a>.</p> :
              <ul className="mt-4 grid grid-cols-2 items-start gap-2 sm:gap-4 lg:grid-cols-4" aria-label="Resultados do catálogo de suspensão 4x4">
                {filtered.map(item => <SuspensionCard key={item.ref} item={item} quote={CTA(item.ref + ' — ' + item.name)} />)}
              </ul>}
          </div>
        </section>

        <section id="avaliacao" className="scroll-mt-40 border-y border-gray-200 bg-white py-12 md:py-16" aria-labelledby="oficina-title">
          <div className={CX}>
            <h2 id="oficina-title" className="text-2xl font-black uppercase italic tracking-tight md:text-4xl">Da revisão ao projeto 4x4</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">{GUIDE.map(([title, description]) => <article key={title} className="rounded-lg border border-gray-200 bg-gray-50 p-5"><Wrench className="mb-3 text-amber-700" size={24} aria-hidden="true" /><h3 className="text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-gray-700">{description}</p></article>)}</div>
            <div className="mt-5 flex flex-wrap gap-x-6"><Link to="/servico/revisao-de-suspensao" className="inline-flex min-h-11 items-center gap-1 font-bold underline underline-offset-4">Conhecer a revisão de suspensão<ChevronRight size={17} aria-hidden="true" /></Link><Link to="/servicos" className="inline-flex min-h-11 items-center gap-1 font-bold underline underline-offset-4">Todos os serviços<ChevronRight size={17} aria-hidden="true" /></Link></div>
          </div>
        </section>

        <section id="como-orcar" className="scroll-mt-40 py-12 md:py-16" aria-labelledby="como-orcar-title">
          <div className={`${CX} grid gap-8 lg:grid-cols-[1.2fr_0.8fr]`}>
            <div className="rounded-xl bg-dark p-6 text-white sm:p-8">
              <ClipboardList size={28} className="mb-4 text-primary" aria-hidden="true" />
              <h2 id="como-orcar-title" className="text-2xl font-black uppercase italic tracking-tight sm:text-3xl">O que enviar no orçamento</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 leading-relaxed text-white/90">
                <li>Marca, modelo, ano, versão e tração do veículo.</li>
                <li>Seu objetivo: revisão, reposição, carga ou projeto de elevação.</li>
                <li>A referência da peça, se souber, e as modificações já existentes.</li>
              </ol>
              <a href={CTA()} target="_blank" rel="noopener noreferrer" className={`${BTN} mt-6`}><MessageCircle size={18} aria-hidden="true" /> Enviar modelo e ano</a>
            </div>
            <aside aria-labelledby="local-title" className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8">
              <MapPin size={28} className="mb-4 text-amber-700" aria-hidden="true" />
              <h2 id="local-title" className="text-xl font-bold">Uma unidade, no Portão</h2>
              <p className="mt-3 leading-relaxed text-gray-700">Av. Presidente Arthur da Silva Bernardes, 1323<br />Portão, Curitiba–PR · CEP 80320-300</p>
              <div className="mt-4 flex flex-wrap gap-x-5">
                <Link to="/como-chegar" className="inline-flex min-h-11 items-center gap-1 font-bold underline underline-offset-4">Ver como chegar <ArrowRight size={16} aria-hidden="true" /></Link>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="inline-flex min-h-11 items-center gap-1 font-bold underline underline-offset-4"><Phone size={16} aria-hidden="true" /> {PHONE_DISPLAY}</a>
              </div>
            </aside>
          </div>
        </section>

        <section className="border-t border-gray-200 bg-white py-12" aria-labelledby="video-4x4-title">
          <div className={CX}>
            <h2 id="video-4x4-title" className="text-2xl font-black uppercase italic tracking-tight">Vídeo no Instagram</h2>
            <p className="mt-2 text-sm text-gray-700">O conteúdo externo só é carregado após sua escolha.</p>
            {video ? <iframe src={`${INSTAGRAM}embed/`} title="Reel do Instagram incorporado" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="mt-4 h-[36rem] w-full max-w-sm rounded-lg border border-gray-200" /> :
              <button type="button" onClick={() => setVideo(true)} className={`${BTN} mt-4`}><Play size={18} aria-hidden="true" /> Carregar vídeo</button>}
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-2 flex min-h-11 w-fit items-center text-sm font-bold underline underline-offset-4">Abrir no Instagram</a>
          </div>
        </section>

        <section className="border-t border-gray-200 py-12 md:py-16" aria-labelledby="perguntas-title">
          <div className={CX}>
            <h2 id="perguntas-title" className="text-2xl font-black uppercase italic tracking-tight md:text-4xl">Dúvidas sobre suspensão 4x4</h2>
            <div className="mt-6 grid gap-3">{FAQ.map(({ question, answer }) => <details key={question} className="rounded-lg border border-gray-200 bg-white p-4"><summary className="cursor-pointer font-bold">{question}</summary><p className="mt-3 text-sm leading-relaxed text-gray-700">{answer}</p></details>)}</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

