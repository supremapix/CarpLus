import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronRight, ClipboardList, MapPin, Wrench } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSEO } from '../hooks/useSEO';
import { generateBreadcrumbSchema, generateFaqSchema } from '../lib/schema';
import {
  CARPLUS_GOOGLE_MAPS, COMPARISON_CHECKLIST, COMPARISON_FAQ, COMPARISON_GUIDE_SEO,
  COMPARISON_MESSAGE, COMPARISON_TECHNICAL_SOURCE,
} from '../data/comparisonGuide';

const container = 'max-w-7xl mx-auto px-4 md:px-6';
const heading = 'text-3xl md:text-4xl font-black tracking-tight leading-tight';
const textLink = 'inline-flex min-h-11 items-center gap-2 font-bold underline underline-offset-4 hover:text-amber-800';
const button = 'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-center font-bold transition-colors';

export const COMPARISON_GUIDE_SCHEMA = [
  generateBreadcrumbSchema([
    { name: 'Início', url: 'https://www.carpluspneuseoficina.com.br/' },
    { name: 'Pneus em Curitiba', url: 'https://www.carpluspneuseoficina.com.br/pneus-curitiba' },
    { name: 'Comparar anúncios de pneus', url: COMPARISON_GUIDE_SEO.canonical },
  ]),
  generateFaqSchema(COMPARISON_FAQ),
];

export default function CompararAnunciosPneus() {
  useSEO({ ...COMPARISON_GUIDE_SEO, schemaJSON: COMPARISON_GUIDE_SCHEMA });

  return (
    <>
      <Navbar />
      <main className="bg-gray-50 text-neutral-950 min-h-screen [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-current [&_summary:focus-visible]:outline-2 [&_summary:focus-visible]:outline-offset-4 [&_summary:focus-visible]:outline-current">
        <section className="pt-32 pb-14 md:pb-20 bg-dark text-white" aria-labelledby="comparar-anuncios-title">
          <div className={container}>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-white/75 mb-8">
              <Link to="/" className="inline-flex min-h-11 items-center hover:text-primary">Início</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <Link to="/pneus-curitiba" className="inline-flex min-h-11 items-center hover:text-primary">Pneus em Curitiba</Link>
              <ChevronRight size={14} aria-hidden="true" />
              <span aria-current="page">Comparar anúncios</span>
            </nav>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <div>
                <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Guia de compra · Curitiba</p>
                <h1 id="comparar-anuncios-title" className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">Como comparar anúncios de pneus e atendimento em loja</h1>
                <p className="text-lg text-white/85 leading-relaxed mt-6">Você encontrou um anúncio de pneu e quer comparar antes de decidir? Além do valor anunciado, confira a medida completa, a condição do produto e o que será necessário para instalar no seu carro.</p>
                <div className="flex flex-col sm:flex-row gap-3 mt-7">
                  <Link to="/contato" className={`${button} bg-primary text-black hover:bg-amber-400`}>Consultar um pneu<ArrowRight size={18} aria-hidden="true" /></Link>
                  <Link to="/manutencao-automotiva-curitiba" className={`${button} border border-white/40 hover:bg-white/10`}>Preciso de um serviço</Link>
                </div>
              </div>
              <figure className="overflow-hidden rounded-lg border border-white/20 bg-white/5">
                <img src={COMPARISON_GUIDE_SEO.ogImage} alt="Fachada da Carplus Pneus e Oficina no Portão, em Curitiba" width="1200" height="801" fetchPriority="high" className="w-full aspect-[4/3] object-cover" />
                <figcaption className="flex items-start gap-2 p-4 text-sm text-white/80"><MapPin size={18} className="text-primary shrink-0" aria-hidden="true" />Loja e oficina da Carplus no bairro Portão.</figcaption>
              </figure>
            </div>
            <p className="max-w-4xl mt-10 pt-7 border-t border-white/20 text-white/80 leading-relaxed">Plataformas de anúncios reúnem ofertas de diferentes vendedores. A Carplus é uma loja de pneus e oficina no Portão, em Curitiba, com endereço físico e contato direto com a equipe. São formas diferentes de pesquisar e contratar: compare o produto e o atendimento de cada oferta, não apenas o nome da plataforma.</p>
          </div>
        </section>

        <nav aria-label="Nesta página" className="bg-white border-b border-gray-200">
          <div className={`${container} flex flex-wrap gap-x-6 gap-y-1 py-3`}>
            {[["checklist", "Checklist de compra"], ["peca-ou-servico", "Peça ou serviço?"], ["conheca-carplus", "Conheça a Carplus"], ["duvidas", "Dúvidas"]].map(([id, label]) => <a key={id} href={`#${id}`} className="inline-flex min-h-11 items-center text-sm font-bold hover:underline underline-offset-4">{label}</a>)}
          </div>
        </nav>

        <section id="checklist" aria-labelledby="checklist-title" className="py-14 md:py-20 scroll-mt-32">
          <div className={`${container} grid lg:grid-cols-[0.8fr_1.2fr] gap-9 lg:gap-14 items-start`}>
            <div>
              <ClipboardList size={32} className="text-amber-700 mb-5" aria-hidden="true" />
              <h2 id="checklist-title" className={heading}>Vai comprar pneus? Confira estes pontos</h2>
              <div className="flex flex-col items-start gap-1 mt-6">
                <Link to="/medidas-de-pneus-curitiba" className={textLink}>Buscar pneus por medida<ArrowRight size={18} aria-hidden="true" /></Link>
                <Link to="/pneus" className={textLink}>Consultar o catálogo de pneus<ArrowRight size={18} aria-hidden="true" /></Link>
              </div>
            </div>
            <ol className="space-y-4" aria-label="Cinco pontos para comparar ofertas de pneus">
              {COMPARISON_CHECKLIST.map((item, index) => <li key={item.title} className="flex gap-4 bg-white border border-gray-200 rounded-lg p-5 sm:p-6">
                <span aria-hidden="true" className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-primary text-black font-black text-sm">{index + 1}</span>
                <div className="min-w-0">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                  {index === 0 && <a href={COMPARISON_TECHNICAL_SOURCE} target="_blank" rel="noopener noreferrer" className={`${textLink} text-sm mt-3`}>Referência técnica: como ler as marcações do pneu, Michelin<span className="sr-only"> (abre em nova aba)</span></a>}
                </div>
              </li>)}
            </ol>
          </div>
        </section>

        <section id="peca-ou-servico" aria-labelledby="peca-ou-servico-title" className="py-14 md:py-20 bg-white border-y border-gray-200 scroll-mt-32">
          <div className={`${container} grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14`}>
            <div><Wrench size={32} className="text-amber-700 mb-5" aria-hidden="true" /><h2 id="peca-ou-servico-title" className={heading}>Precisa de mecânica, não apenas de uma peça?</h2></div>
            <div>
              <p className="text-gray-600 leading-relaxed">Um anúncio de peça não equivale à contratação da instalação ou ao diagnóstico do veículo. Informe modelo, ano e o que você percebeu no carro. Pergunte quais verificações serão realizadas e peça um orçamento que separe peças e mão de obra antes de autorizar o trabalho.</p>
              <p className="text-gray-600 leading-relaxed mt-4">Para conhecer os serviços da Carplus, siga para o guia de manutenção. Se a necessidade é um atendimento de pneu ou roda, consulte a página de borracharia no Portão.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-5">
                <Link to="/manutencao-automotiva-curitiba" className={textLink}>Manutenção automotiva em Curitiba</Link>
                <Link to="/borracharia-portao" className={textLink}>Borracharia no Portão</Link>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1 mt-3 pt-3 border-t border-gray-200 text-sm">
                <Link to="/servico/montagem-de-pneu" className={textLink}>Montagem de pneu</Link>
                <Link to="/servico/alinhamento-e-balanceamento" className={textLink}>Alinhamento e balanceamento</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="conheca-carplus" aria-labelledby="conheca-carplus-title" className="py-14 md:py-20 scroll-mt-32">
          <div className={`${container} grid lg:grid-cols-2 items-center gap-9 lg:gap-14`}>
            <figure>
              <img src="/images/loja/carplus-oficina-interior.webp" alt="Área interna da oficina Carplus no Portão" loading="lazy" width="1001" height="1200" className="w-full aspect-[4/3] object-cover rounded-lg" />
              <figcaption className="text-sm text-gray-600 mt-3">Interior da Carplus no Portão, em Curitiba.</figcaption>
            </figure>
            <div>
              <h2 id="conheca-carplus-title" className={heading}>Conheça a Carplus antes de escolher</h2>
              <p className="text-gray-600 leading-relaxed mt-6">Visite a loja na Av. Presidente Arthur da Silva Bernardes, 1323, Portão, Curitiba. Veja fotos do espaço, consulte as avaliações no Google e fale diretamente com a equipe sobre o pneu ou serviço que procura.</p>
              <div className="bg-white border border-gray-200 border-l-4 border-l-primary rounded-lg p-5 my-6">
                <p className="font-bold text-xl">Avaliação no Google: 4,9 de 5</p>
                <p className="text-sm text-gray-600 leading-relaxed mt-2">Com 262 avaliações na consulta de <time dateTime="2026-10-18">18/10/2026</time>. As avaliações e a quantidade podem mudar.</p>
                <a href={CARPLUS_GOOGLE_MAPS} target="_blank" rel="noopener noreferrer" className={`${textLink} text-sm mt-3`}>Ver avaliações no Google<span className="sr-only"> (abre em nova aba)</span></a>
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                <Link to="/como-chegar" className={textLink}>Ver localização e como chegar</Link>
                <Link to="/quem-somos" className={textLink}>Conhecer a loja</Link>
              </div>
            </div>
          </div>
        </section>

        <section id="duvidas" aria-labelledby="duvidas-title" className="py-14 md:py-20 bg-white border-y border-gray-200 scroll-mt-32">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 id="duvidas-title" className={`${heading} mb-8`}>Dúvidas na comparação</h2>
            <div className="space-y-4">
              {COMPARISON_FAQ.map((faq) => <details key={faq.question} className="group border border-gray-200 rounded-lg bg-gray-50">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 p-5 font-bold [&::-webkit-details-marker]:hidden"><span>{faq.question}</span><ChevronDown size={20} className="shrink-0 group-open:rotate-180" aria-hidden="true" /></summary>
                <p className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>)}
            </div>
          </div>
        </section>

        <section aria-labelledby="orcamento-title" className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 id="orcamento-title" className={heading}>Organize sua consulta de pneus</h2>
            <p className="text-gray-600 mt-5">Mensagem sugerida para o atendimento, sem envio automático:</p>
            <p className="p-6 my-6 rounded-lg bg-white border border-gray-200 leading-relaxed">{COMPARISON_MESSAGE}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link to="/contato" className={`${button} bg-primary text-black hover:bg-amber-400`}>Consultar um pneu<ArrowRight size={18} aria-hidden="true" /></Link>
              <Link to="/pneus-curitiba" className={textLink}>Voltar à central de pneus</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
