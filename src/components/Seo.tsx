import { Helmet } from 'react-helmet-async';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
  schemaJSON?: object | object[];
  noindex?: boolean;
  /** URL da página anterior na paginação (gera <link rel="prev">). */
  prevUrl?: string;
  /** URL da próxima página na paginação (gera <link rel="next">). */
  nextUrl?: string;
}

const BASE_URL = 'https://www.carpluspneuseoficina.com.br';

/**
 * Componente de SEO renderizado na árvore React.
 *
 * Substitui o antigo hook `useSEO` (que manipulava o DOM via useEffect e só
 * funcionava no navegador). Ao renderizar via `<Helmet>` (react-helmet-async), as
 * tags entram na árvore React e são capturadas no HTML gerado no build (SSG via
 * vite-react-ssg, que usa o mesmo HelmetProvider), eliminando a dependência de
 * pré-render em runtime.
 */
export function Seo({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  keywords = [],
  schemaJSON,
  noindex = false,
  prevUrl,
  nextUrl,
}: SEOProps) {
  const fullImage = ogImage
    ? ogImage.startsWith('http')
      ? ogImage
      : `${BASE_URL}${ogImage}`
    : undefined;

  const schemas = schemaJSON ? (Array.isArray(schemaJSON) ? schemaJSON : [schemaJSON]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, follow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Carplus Pneus e Oficina" />
      <meta property="og:locale" content="pt_BR" />
      {canonical && <meta property="og:url" content={canonical} />}
      {fullImage && <meta property="og:image" content={fullImage} />}
      {fullImage && <meta property="og:image:width" content="1200" />}
      {fullImage && <meta property="og:image:height" content="630" />}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {fullImage && <meta name="twitter:image" content={fullImage} />}

      {/* Canonical + paginação */}
      {canonical && <link rel="canonical" href={canonical} />}
      {prevUrl && <link rel="prev" href={prevUrl} />}
      {nextUrl && <link rel="next" href={nextUrl} />}

      {/* Schema.org JSON-LD por página (LocalBusiness/Organization/WebSite ficam no index.html) */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
