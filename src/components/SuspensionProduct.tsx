import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Play } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import NotFound from './NotFound';
import { useSEO } from '../hooks/useSEO';
import { generateBreadcrumbSchema } from '../lib/schema';
import { BASE_URL, WHATSAPP_NUMBER } from '../data/seoLanding';
import { SUSPENSION_FACTS } from '../data/suspensao4x4Facts';
import { type Suspensao4x4Item } from '../data/suspensao4x4';
import { SUSPENSION_BASE, suspensionBySlug, suspensionDetails, suspensionPath } from '../data/suspensao4x4Details';
import { SuspensionMedia } from './SuspensionCard';

const PRODUCT_REEL = 'https://www.instagram.com/reel/Dfrqw4itmjx/';
const IRONMAN_LOGO = '/images/suspensao-4x4/ironman-4x4.svg';

function Product({ item }: { item: Suspensao4x4Item }) {
  const { vehicle, brand, description, check, qualifier, photo, kind } = suspensionDetails(item);
  const [reelOpen, setReelOpen] = useState(false);
  const source = SUSPENSION_FACTS[item.ref];
  const path = suspensionPath(item);
  const canonical = BASE_URL + path;
  const title = item.name + ' | Carplus Curitiba';
  const seoText = `${item.name}: ${item.group.toLowerCase()}. Referência ${item.ref}. Confira a aplicação e solicite uma cotação na Carplus, no Portão.`;
  const quote = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de cotar ${item.name} (referência ${item.ref}). Meu veículo é [marca, modelo, ano, versão e tração].`)}`;
  useSEO({
    title, description: seoText, canonical,
    ogImage: photo || '/images/suspensao-4x4/hero-oficina-4x4.jpg',
    schemaJSON: [
      generateBreadcrumbSchema([{ name: 'Início', url: BASE_URL + '/' }, { name: 'Suspensão 4x4', url: BASE_URL + SUSPENSION_BASE }, { name: item.name, url: canonical }]),
      { '@context': 'https://schema.org', '@type': 'Product', name: item.name, description: seoText, url: canonical, sku: item.ref, category: item.group, ...(brand ? { brand: { '@type': 'Brand', name: brand } } : {}), ...(photo ? { image: new URL(photo, BASE_URL).href } : {}) },
    ],
  });
  const related = [...suspensionBySlug.values()].filter(other => other.ref !== item.ref && other.group === item.group && (!vehicle || other.vehicle === vehicle)).slice(0, 4);
  return <div className="min-h-screen bg-gray-50 text-gray-900">
    <Navbar />
    <main className="mx-auto max-w-6xl px-4 pb-16 pt-32 md:px-6">
      <nav aria-label="Caminho da página"><Link to={SUSPENSION_BASE + '#catalogo-4x4'} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold underline underline-offset-4"><ArrowLeft size={18} aria-hidden="true" /> Voltar ao catálogo 4x4</Link></nav>
      <article className="grid items-start gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white"><SuspensionMedia item={item} eager /></div>
        <div>
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-amber-800">{item.group} · {item.ref}</p>
          <h1 className="break-words text-2xl font-black leading-tight sm:text-4xl">{item.name}</h1>
          {item.brand === 'Ironman' && <div className="mt-4 inline-flex min-h-16 max-w-full items-center rounded-md border border-gray-200 bg-white px-4 py-3">
            <img src={IRONMAN_LOGO} width={190} height={40} alt="Ironman 4x4" decoding="async" className="h-10 w-48 max-w-full object-contain" />
          </div>}
          <p className="mt-4 text-base leading-relaxed text-gray-700">{description}{vehicle ? ` Esta referência é listada para ${vehicle}; confirme a versão do seu veículo antes da compra.` : ''}</p>
          {qualifier && <p className="mt-3 leading-relaxed text-gray-700">{qualifier}</p>}
          <dl className="my-5 grid gap-3 rounded-xl border border-gray-200 bg-white p-4 sm:grid-cols-2">
            <div><dt className="text-sm font-bold">Referência de cotação</dt><dd>{item.ref}</dd></div>
            {source?.code && <div><dt className="text-sm font-bold">Código no catálogo de referência</dt><dd>{source.code}</dd></div>}
            <div><dt className="text-sm font-bold">Categoria</dt><dd>{item.group}</dd></div>
            {brand && <div><dt className="text-sm font-bold">Marca informada</dt><dd>{brand}</dd></div>}
            {vehicle && <div><dt className="text-sm font-bold">Aplicação de catálogo</dt><dd>{vehicle}</dd></div>}
          </dl>
          {source?.facts?.length ? <section className="mb-5"><h2 className="text-lg font-bold">Composição informada no catálogo de referência</h2><ul className="mt-2 list-disc space-y-1 pl-5 text-gray-700">{source.facts.map(fact => <li key={fact}>{fact}</li>)}</ul><p className="mt-2 text-sm text-gray-700">Confirme a composição na cotação.</p></section> : null}
          <a href={quote} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-center text-sm font-bold text-dark hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"><MessageCircle size={19} aria-hidden="true" /> Pedir cotação desta referência</a>
          <p className="mt-2 text-sm text-gray-700">Preço, disponibilidade, componentes e instalação são confirmados no atendimento.</p>
        </div>
      </article>
      <section className="mt-8 rounded-xl border border-gray-200 bg-white p-5 sm:p-7">
        <h2 className="text-xl font-bold">{kind === 'ferramenta' ? 'O que confirmar antes da compra' : 'O que confirmar antes da compra ou instalação'}</h2>
        <p className="mt-3 leading-relaxed text-gray-700">{check}</p>
        <p className="mt-3 leading-relaxed text-gray-700">Envie a referência {item.ref} e os dados da aplicação. A Carplus Pneus e Oficina fica na Av. Presidente Arthur da Silva Bernardes, 1323, Portão, Curitiba.</p>
      </section>
      <section aria-labelledby="video-catalogo-ficha" className="mt-8 rounded-xl border border-gray-200 bg-white p-5 sm:p-7">
        <h2 id="video-catalogo-ficha" className="text-xl font-bold">Vídeo do catálogo de suspensão 4x4</h2>
        <p className="mt-2 text-gray-700">Veja uma apresentação da linha 4x4 da Carplus. O vídeo é geral e não demonstra necessariamente a peça desta ficha.</p>
        {reelOpen ? <iframe src={PRODUCT_REEL + 'embed/'} title="Apresentação do catálogo de suspensão 4x4 da Carplus no Instagram" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="mt-4 h-[36rem] w-full max-w-sm rounded-lg border border-gray-200" /> : <button type="button" onClick={() => setReelOpen(true)} className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-dark hover:bg-yellow-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-600"><Play size={18} aria-hidden="true" /> Carregar vídeo do catálogo</button>}
        <a href={PRODUCT_REEL} target="_blank" rel="noopener noreferrer" className="mt-2 flex min-h-11 w-fit items-center text-sm font-bold underline underline-offset-4">Abrir no Instagram</a>
      </section>
      {related.length > 0 && <section className="mt-8"><h2 className="text-xl font-bold">Consulte referências relacionadas</h2><ul className="mt-3 grid gap-2 sm:grid-cols-2">{related.map(other => <li key={other.ref}><Link to={suspensionPath(other)} className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4">{other.name}</Link></li>)}</ul></section>}
    </main>
    <Footer />
  </div>;
}
export default function SuspensionProduct() {
  const { slug } = useParams();
  const item = slug ? suspensionBySlug.get(slug) : undefined;
  return item ? <Product key={item.ref} item={item} /> : <NotFound />;
}
