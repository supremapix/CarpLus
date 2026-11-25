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
import { SUSPENSION_PREMIUM } from '../data/suspensao4x4Premium';
import { SuspensionGallery } from './SuspensionGallery';
import { SuspensionMedia } from './SuspensionCard';

const PRODUCT_REEL = 'https://www.instagram.com/reel/Dfrqw4itmjx/';
const IRONMAN_LOGO = '/images/suspensao-4x4/ironman-4x4.svg';

function Product({ item }: { item: Suspensao4x4Item }) {
  const { vehicle, brand, description, check, qualifier, photo, kind } = suspensionDetails(item);
  const [reelOpen, setReelOpen] = useState(false);
  const source = SUSPENSION_FACTS[item.ref];
  const premium = item.brand === 'Ironman' || item.ref === 'CP4X4-062';
  const premiumData = premium ? SUSPENSION_PREMIUM[item.ref.toLowerCase()] ?? SUSPENSION_PREMIUM[item.ref] : undefined;
  const photos = Array.from(new Set(premiumData?.gallery?.length ? premiumData.gallery : photo ? [photo] : []));
  const specs = premiumData?.specs?.filter(spec => spec.label.trim() && spec.value.trim()) ?? [];
  const productFAQ = [
    { question: 'Como saber se esta peça serve no meu veículo?', answer: 'Envie marca, modelo, ano, versão e tração, junto da referência ' + item.ref + '. A Carplus confere a aplicação e a configuração antes de cotar.' },
    { question: 'O orçamento inclui instalação e alinhamento?', answer: 'O orçamento detalha o que vem na peça ou kit e os serviços cotados separadamente, quando aplicáveis. Confirme o preço, o prazo e a disponibilidade antes de fechar.' },
    { question: 'Onde posso solicitar a cotação em Curitiba?', answer: 'Fale com a Carplus Pneus e Oficina pelo WhatsApp ou visite a unidade da Av. Presidente Arthur da Silva Bernardes, 1323, no bairro Portão.' },
  ];
  const path = suspensionPath(item);
  const canonical = BASE_URL + path;
  const title = item.name + ' | Carplus Curitiba';
  const seoText = `${item.name}: ${item.group.toLowerCase()}. Referência ${item.ref}. Confira a aplicação e solicite uma cotação na Carplus, no Portão.`;
  const quote = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Gostaria de cotar ${item.name} (referência ${item.ref}). Meu veículo é [marca, modelo, ano, versão e tração].`)}`;
  useSEO({
    title, description: seoText, canonical,
    ogImage: photos[0] || '/images/suspensao-4x4/hero-oficina-4x4.jpg',
    schemaJSON: [
      generateBreadcrumbSchema([{ name: 'Início', url: BASE_URL + '/' }, { name: 'Suspensão 4x4', url: BASE_URL + SUSPENSION_BASE }, { name: item.name, url: canonical }]),
      { '@context': 'https://schema.org', '@type': 'Product', name: item.name, description: seoText, url: canonical, sku: item.ref, category: item.group, ...(brand ? { brand: { '@type': 'Brand', name: brand } } : {}), ...(photos.length ? { image: premium ? photos.map(src => new URL(src, BASE_URL).href) : new URL(photos[0], BASE_URL).href } : {}), ...(specs.length ? { additionalProperty: specs.map(spec => ({ '@type': 'PropertyValue', name: spec.label, value: spec.value })) } : {}) },
    ],
  });
  const related = [...suspensionBySlug.values()].filter(other => other.ref !== item.ref && other.group === item.group && (!vehicle || other.vehicle === vehicle)).slice(0, 4);
  return <div className="min-h-screen bg-gray-50 text-gray-900">
    <Navbar />
    <main className={`mx-auto px-4 pb-16 pt-32 md:px-6 ${premium ? 'max-w-7xl' : 'max-w-6xl'}`}>
      <nav aria-label="Caminho da página"><Link to={SUSPENSION_BASE + '#catalogo-4x4'} className="mb-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold underline underline-offset-4"><ArrowLeft size={18} aria-hidden="true" /> Voltar ao catálogo 4x4</Link></nav>
      <article className={`grid items-start gap-6 ${premium ? 'lg:grid-cols-[1.15fr_0.85fr] lg:gap-9' : 'lg:grid-cols-[0.9fr_1.1fr]'}`}>
        {premium && photos.length ? <SuspensionGallery name={item.name} images={photos} /> : <div className="overflow-hidden rounded-xl border border-gray-200 bg-white"><SuspensionMedia item={item} eager /></div>}
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
      {premium && specs.length > 0 && <section aria-labelledby="ficha-tecnica-4x4" className="mt-8 rounded-xl border border-gray-200 bg-white p-5 sm:p-7">
        <h2 id="ficha-tecnica-4x4" className="text-xl font-bold sm:text-2xl">Ficha técnica desta referência</h2>
        <p className="mt-2 text-sm text-gray-700">Dados documentados no catálogo. Confirme as especificações, medidas e aplicação no orçamento.</p>
        <dl className="mt-4 divide-y divide-gray-200 rounded-lg border border-gray-200">
          {specs.map((spec, i) => <div key={spec.label + i} className="grid gap-1 px-3 py-3 sm:grid-cols-[minmax(11rem,0.37fr)_1fr] sm:gap-4 sm:px-4">
            <dt className="font-bold">{spec.label}</dt><dd className="break-words text-gray-700">{spec.value}</dd>
          </div>)}
        </dl>
      </section>}
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
      {premium && <section aria-labelledby="faq-ficha-4x4" className="mt-8 rounded-xl border border-gray-200 bg-white p-5 sm:p-7">
        <h2 id="faq-ficha-4x4" className="text-xl font-bold">Dúvidas antes de pedir orçamento</h2>
        <div className="mt-2 divide-y divide-gray-200">{productFAQ.map(({question,answer}) => <details key={question} className="py-3">
          <summary className="cursor-pointer font-semibold focus-visible:outline-2 focus-visible:outline-amber-600">{question}</summary>
          <p className="mt-2 text-gray-700">{answer}</p>
        </details>)}</div>
        <Link to="/servico/revisao-de-suspensao" className="mt-3 inline-flex min-h-11 items-center text-sm font-bold underline underline-offset-4">Conheça o serviço de revisão de suspensão da Carplus</Link>
      </section>}
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
