import { useParams } from 'react-router-dom';
import SeoTireLanding from './SeoTireLanding';
import NotFound from './NotFound';
import {
  ARO_PAGES,
  BRAND_PAGES,
  VEHICLE_PAGES,
  LOCAL_COMBO_PAGES,
  INTENT_PAGES,
  COMPARISON_PAGES,
  getAroPage,
  getBrandPage,
  getVehiclePage,
  getLocalComboPage,
  getIntentPage,
  getComparisonPage,
  normalizeText,
} from '../data/seoLanding';
import {
  getTiresByAro,
  getTiresByBrand,
  getTiresByVehicle,
  getMeasuresForTires,
  getFeaturedTires,
} from '../data/seoLandingFilters';

const HOME_CRUMB = { name: 'Home', path: '/' };
const HUB_CRUMB = { name: 'Pneus Curitiba', path: '/pneus-curitiba' };

function measureToSlug(medida: string): string {
  return medida.toLowerCase().replace(/\//g, '-');
}

// ─── PÁGINA POR ARO ──────────────────────────────────────────────
export function AroLandingPage({ slug: slugProp }: { slug?: string }) {
  const params = useParams();
  const slug = slugProp || params.slug || '';
  const page = getAroPage(slug);
  if (!page) return <NotFound />;

  const tires = getTiresByAro(page.aro);
  const measures = getMeasuresForTires(tires).slice(0, 8);

  const relatedLinks = [
    ...ARO_PAGES.filter((a) => a.aro !== page.aro).map((a) => ({
      label: `Aro ${a.aro}`,
      to: `/${a.slug}`,
    })),
    ...measures.map((m) => ({ label: `Pneu ${m}`, to: `/pneu-medida/${measureToSlug(m)}` })),
  ];

  return (
    <SeoTireLanding
      badge={`Aro ${page.aro} · Curitiba`}
      h1={page.h1}
      highlight={`Aro ${page.aro}`}
      metaTitle={page.metaTitle}
      metaDescription={page.metaDescription}
      canonicalPath={`/${page.slug}`}
      intro={page.intro}
      tags={page.perfilTipico}
      sections={[
        { title: 'Aplicações do Aro ' + page.aro, content: page.aplicacoes },
        {
          title: 'Por que comprar na Carplus',
          content:
            'Somos loja de pneus e oficina mecânica no bairro Portão, em Curitiba. Trabalhamos apenas com marcas reconhecidas, oferecemos montagem, balanceamento e calibragem inclusos, parcelamento em até 10x sem juros e garantia com nota fiscal em todos os serviços.',
        },
      ]}
      tires={tires}
      faq={page.faq}
      breadcrumb={[HOME_CRUMB, HUB_CRUMB, { name: `Aro ${page.aro}`, path: `/${page.slug}` }]}
      relatedLinksTitle="Pneus por aro e medida"
      relatedLinks={relatedLinks}
      whatsappMsg={`Olá! Vi a página de pneu aro ${page.aro} em Curitiba e gostaria de um orçamento.`}
    />
  );
}

// ─── PÁGINA POR MARCA ────────────────────────────────────────────
export function BrandLandingPage({ slug: slugProp }: { slug?: string }) {
  const params = useParams();
  const slug = slugProp || params.slug || '';
  const page = getBrandPage(slug);
  if (!page) return <NotFound />;

  const tires = getTiresByBrand(page.marca);

  // Comparativos que envolvem esta marca (links contextuais — ETAPA 8)
  const brandComparisons = COMPARISON_PAGES.filter((c) => c.brands.includes(page.marca)).map(
    (c) => ({ label: c.h1, to: `/${c.slug}` }),
  );

  const relatedLinks = [
    ...brandComparisons,
    ...BRAND_PAGES.filter((b) => b.marca !== page.marca).map((b) => ({
      label: `Pneu ${b.marca}`,
      to: `/${b.slug}`,
    })),
    ...ARO_PAGES.slice(0, 6).map((a) => ({ label: `Aro ${a.aro}`, to: `/${a.slug}` })),
  ];

  return (
    <SeoTireLanding
      badge={`${page.marca} · Curitiba`}
      h1={page.h1}
      highlight={page.marca}
      metaTitle={page.metaTitle}
      metaDescription={page.metaDescription}
      canonicalPath={`/${page.slug}`}
      intro={page.intro}
      sections={[
        { title: `Linhas ${page.marca} disponíveis`, content: page.linhas },
        {
          title: 'Instalação completa inclusa',
          content:
            'Na compra dos pneus ' +
            page.marca +
            ', a montagem, o balanceamento e a calibragem já estão inclusos. O alinhamento 3D é feito na própria Carplus, no Portão, e o pagamento pode ser parcelado em até 10x sem juros.',
        },
      ]}
      tires={tires}
      faq={page.faq}
      breadcrumb={[HOME_CRUMB, HUB_CRUMB, { name: page.marca, path: `/${page.slug}` }]}
      relatedLinksTitle="Outras marcas e aros"
      relatedLinks={relatedLinks}
      whatsappMsg={`Olá! Vi a página de pneu ${page.marca} em Curitiba e gostaria de um orçamento.`}
    />
  );
}

// ─── PÁGINA POR VEÍCULO ──────────────────────────────────────────
export function VehicleLandingPage({ slug: slugProp }: { slug?: string }) {
  const params = useParams();
  const slug = slugProp || params.slug || '';
  const page = getVehiclePage(slug);
  if (!page) return <NotFound />;

  const tires = getTiresByVehicle(page.termos);
  const measures = getMeasuresForTires(tires).slice(0, 8);

  const relatedLinks = [
    ...VEHICLE_PAGES.filter((v) => v.slug !== page.slug)
      .slice(0, 8)
      .map((v) => ({ label: v.nome, to: `/${v.slug}` })),
    ...measures.map((m) => ({ label: `Pneu ${m}`, to: `/pneu-medida/${measureToSlug(m)}` })),
  ];

  return (
    <SeoTireLanding
      badge={`${page.nome} · Curitiba`}
      h1={page.h1}
      highlight={page.nome.split(' ').slice(-1)[0]}
      metaTitle={page.metaTitle}
      metaDescription={page.metaDescription}
      canonicalPath={`/${page.slug}`}
      intro={page.intro}
      sections={[
        ...(page.pneuOriginal
          ? [{ title: `Pneu original do ${page.nome}`, content: page.pneuOriginal }]
          : []),
        { title: `Medidas comuns do ${page.nome}`, content: page.medidasComuns },
        {
          title: 'Troca completa no Portão',
          content:
            'Trocamos os pneus do seu ' +
            page.nome +
            ' com montagem, balanceamento e calibragem inclusos. Recomendamos o alinhamento 3D a cada troca para garantir estabilidade, segurança e maior durabilidade. Parcelamos em até 10x sem juros.',
        },
      ]}
      tires={tires}
      faq={page.faq}
      breadcrumb={[HOME_CRUMB, HUB_CRUMB, { name: page.nome, path: `/${page.slug}` }]}
      relatedLinksTitle="Pneus para outros veículos"
      relatedLinks={relatedLinks}
      whatsappMsg={`Olá! Tenho um ${page.nome} e gostaria de um orçamento de pneus.`}
    />
  );
}

// ─── PÁGINA DE INTENÇÃO DE COMPRA ────────────────────────────────
export function IntentLandingPage({ slug: slugProp }: { slug?: string }) {
  const params = useParams();
  const slug = slugProp || params.slug || '';
  const page = getIntentPage(slug);
  if (!page) return <NotFound />;

  const tires = getFeaturedTires(12);

  // Links internos exigidos: pneus, hub, serviços principais, contato + demais do cluster
  const serviceLinks = [
    { label: 'Catálogo de Pneus', to: '/pneus' },
    { label: 'Pneus Curitiba', to: '/pneus-curitiba' },
    { label: 'Alinhamento e Balanceamento', to: '/servico/alinhamento-e-balanceamento' },
    { label: 'Troca de Óleo', to: '/servico/troca-de-oleo' },
    { label: 'Revisão de Suspensão', to: '/servico/revisao-de-suspensao' },
    { label: 'Manutenção de Freios', to: '/servico/manutencao-de-freios' },
    { label: 'Contato', to: '/contato' },
  ];
  const clusterLinks = INTENT_PAGES.filter((p) => p.slug !== page.slug).map((p) => ({
    label: p.h1,
    to: `/${p.slug}`,
  }));
  const aroLinks = ARO_PAGES.slice(0, 5).map((a) => ({ label: `Aro ${a.aro}`, to: `/${a.slug}` }));
  const relatedLinks = [...serviceLinks, ...clusterLinks, ...aroLinks];

  return (
    <SeoTireLanding
      badge={page.badge}
      h1={page.h1}
      highlight={page.highlight}
      metaTitle={page.metaTitle}
      metaDescription={page.metaDescription}
      canonicalPath={`/${page.slug}`}
      intro={page.intro}
      tags={page.tags}
      sections={page.sections}
      tires={tires}
      faq={page.faq}
      breadcrumb={[HOME_CRUMB, HUB_CRUMB, { name: page.h1, path: `/${page.slug}` }]}
      relatedLinksTitle="Serviços e páginas relacionadas"
      relatedLinks={relatedLinks}
      whatsappMsg={page.whatsappMsg}
    />
  );
}

// ─── PÁGINA DE COMPARATIVO DE MARCAS ─────────────────────────────
export function ComparisonLandingPage({ slug: slugProp }: { slug?: string }) {
  const params = useParams();
  const slug = slugProp || params.slug || '';
  const page = getComparisonPage(slug);
  if (!page) return <NotFound />;

  // Puxa pneus reais do catálogo para cada marca envolvida, intercalando
  // para que ambas as marcas apareçam no grid quando houver duas.
  const perBrand = page.brands.map((b) => getTiresByBrand(b));
  const merged: ReturnType<typeof getTiresByBrand> = [];
  const maxLen = Math.max(0, ...perBrand.map((arr) => arr.length));
  for (let i = 0; i < maxLen; i++) {
    for (const arr of perBrand) {
      if (arr[i]) merged.push(arr[i]);
    }
  }

  // Links internos: páginas de marca reais + outros comparativos + hub.
  const brandLinks = page.brands
    .map((b) => BRAND_PAGES.find((bp) => bp.marca === b))
    .filter((bp): bp is (typeof BRAND_PAGES)[number] => Boolean(bp))
    .map((bp) => ({ label: `Pneu ${bp.marca}`, to: `/${bp.slug}` }));

  const otherComparisons = COMPARISON_PAGES.filter((p) => p.slug !== page.slug)
    .slice(0, 8)
    .map((p) => ({ label: p.h1, to: `/${p.slug}` }));

  const relatedLinks = [
    ...brandLinks,
    { label: 'Todas as marcas', to: '/pneus-curitiba' },
    { label: 'Catálogo de Pneus', to: '/pneus' },
    ...otherComparisons,
  ];

  return (
    <SeoTireLanding
      badge={page.badge}
      h1={page.h1}
      highlight={page.highlight}
      metaTitle={page.metaTitle}
      metaDescription={page.metaDescription}
      canonicalPath={`/${page.slug}`}
      intro={page.intro}
      tags={page.tags}
      sections={page.sections}
      tires={merged}
      faq={page.faq}
      breadcrumb={[HOME_CRUMB, HUB_CRUMB, { name: page.h1, path: `/${page.slug}` }]}
      relatedLinksTitle="Marcas e comparativos relacionados"
      relatedLinks={relatedLinks}
      whatsappMsg={page.whatsappMsg}
    />
  );
}

// ─── PÁGINA SEO LOCAL (combinações) ──────────────────────────────
export function LocalComboLandingPage({ slug: slugProp }: { slug?: string }) {
  const params = useParams();
  const slug = slugProp || params.slug || '';
  const page = getLocalComboPage(slug);
  if (!page) return <NotFound />;

  let tires = [] as ReturnType<typeof getTiresByAro>;
  if (page.tipo === 'aro' && page.aro) tires = getTiresByAro(page.aro);
  else if (page.tipo === 'marca' && page.marca) tires = getTiresByBrand(page.marca);
  else tires = getTiresByAro(15).concat(getTiresByAro(16)).slice(0, 12);

  const bairroSlug = normalizeText(page.bairro);
  const relatedLinks = [
    { label: `Bairro ${page.bairro}`, to: `/bairro/${bairroSlug}` },
    ...LOCAL_COMBO_PAGES.filter((p) => p.slug !== page.slug).map((p) => ({
      label: p.h1,
      to: `/${p.slug}`,
    })),
    ...ARO_PAGES.slice(0, 4).map((a) => ({ label: `Aro ${a.aro}`, to: `/${a.slug}` })),
  ];

  const sectionTitle =
    page.tipo === 'loja'
      ? 'Loja e oficina no Portão'
      : page.tipo === 'marca'
      ? `Pneu ${page.marca} perto de você`
      : `Pneu aro ${page.aro} perto de você`;

  return (
    <SeoTireLanding
      badge={`${page.bairro} · Curitiba`}
      h1={page.h1}
      highlight={page.bairro}
      metaTitle={page.metaTitle}
      metaDescription={page.metaDescription}
      canonicalPath={`/${page.slug}`}
      intro={page.intro}
      sections={[
        { title: sectionTitle, content: page.intro },
        {
          title: 'Tudo no mesmo lugar',
          content:
            'Além dos pneus, a Carplus é uma oficina mecânica completa: alinhamento 3D, balanceamento, freios, suspensão, troca de óleo e muito mais. Montagem inclusa, garantia com nota fiscal e parcelamento em até 10x sem juros.',
        },
      ]}
      tires={tires}
      faq={page.faq}
      breadcrumb={[HOME_CRUMB, HUB_CRUMB, { name: page.bairro, path: `/${page.slug}` }]}
      relatedLinksTitle="Veja também"
      relatedLinks={relatedLinks}
      whatsappMsg={`Olá! Vi a página "${page.h1}" e gostaria de um orçamento.`}
    />
  );
}
