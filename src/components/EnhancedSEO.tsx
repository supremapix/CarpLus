import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export interface EnhancedSEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product' | 'place';
  noindex?: boolean;
  // Schema.org
  schema?: {
    type: 'LocalBusiness' | 'AutoRepair' | 'Product' | 'Service' | 'FAQPage' | 'BreadcrumbList';
    data?: Record<string, unknown>;
  };
  // Breadcrumbs para Schema.org
  breadcrumbs?: Array<{ name: string; url: string }>;
  // Artigo/Blog
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  };
  // Produto
  product?: {
    price?: string;
    currency?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
    brand?: string;
    sku?: string;
  };
  // FAQs para Schema.org
  faqs?: Array<{ question: string; answer: string }>;
}

const BASE_URL = 'https://carpluspneuseoficina.com.br';

// Schema.org base para LocalBusiness
const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'AutoRepair',
  '@id': `${BASE_URL}/#organization`,
  name: 'Carplus Pneus e Oficina Mecânica',
  alternateName: 'Carplus Auto Center',
  description: 'Loja de pneus e oficina mecânica completa no bairro Portão em Curitiba. Especializada em pneus, alinhamento 3D, balanceamento, freios, suspensão e serviços automotivos.',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo-carplus.webp`,
  image: `${BASE_URL}/images/fachada-carplus.webp`,
  telephone: '+55-41-3082-7282',
  email: 'contato@carpluspneuseoficina.com.br',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Presidente Arthur da Silva Bernardes, 1323',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    postalCode: '81560-000',
    addressCountry: 'BR',
    neighborhood: 'Portão',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -25.4619,
    longitude: -49.2937,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '12:00',
    },
  ],
  areaServed: {
    '@type': 'City',
    name: 'Curitiba',
    containedInPlace: {
      '@type': 'State',
      name: 'Paraná',
    },
  },
  sameAs: [
    'https://www.facebook.com/carpluspneus',
    'https://www.instagram.com/carpluspneus',
    'https://wa.me/554130827282',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços Automotivos',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Venda de Pneus' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Alinhamento 3D' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Balanceamento' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Troca de Óleo' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Suspensão e Freios' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ar-Condicionado Automotivo' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '347',
    bestRating: '5',
    worstRating: '1',
  },
};

export function EnhancedSEO({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/images/og-carplus.webp',
  ogType = 'website',
  noindex = false,
  schema,
  breadcrumbs,
  article,
  product,
  faqs,
}: EnhancedSEOProps) {
  const location = useLocation();
  const currentUrl = `${BASE_URL}${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Atualiza title
    document.title = title;

    // Função helper para criar/atualizar meta tags
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Função helper para criar/atualizar link tags
    const setLink = (rel: string, href: string, extra?: Record<string, string>) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
      if (extra) {
        Object.entries(extra).forEach(([key, value]) => {
          link.setAttribute(key, value);
        });
      }
    };

    // Meta tags básicas
    setMeta('description', description);
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Keywords
    if (keywords.length > 0) {
      setMeta('keywords', keywords.join(', '));
    }

    // Open Graph
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', currentUrl, true);
    setMeta('og:type', ogType, true);
    setMeta('og:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:site_name', 'Carplus Pneus e Oficina', true);
    setMeta('og:locale', 'pt_BR', true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`);

    // Artigo específico
    if (article) {
      if (article.publishedTime) setMeta('article:published_time', article.publishedTime, true);
      if (article.modifiedTime) setMeta('article:modified_time', article.modifiedTime, true);
      if (article.author) setMeta('article:author', article.author, true);
    }

    // Canonical URL
    setLink('canonical', canonicalUrl);

    // Resource hints para performance
    setLink('dns-prefetch', '//fonts.googleapis.com');
    setLink('dns-prefetch', '//fonts.gstatic.com');
    setLink('preconnect', 'https://fonts.googleapis.com', { crossorigin: '' });
    setLink('preconnect', 'https://fonts.gstatic.com', { crossorigin: '' });

    // Schema.org JSON-LD
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"][data-seo]');
    existingSchemas.forEach(el => el.remove());

    // LocalBusiness Schema (sempre presente)
    const localBusinessScript = document.createElement('script');
    localBusinessScript.type = 'application/ld+json';
    localBusinessScript.setAttribute('data-seo', 'local-business');
    localBusinessScript.textContent = JSON.stringify(LOCAL_BUSINESS_SCHEMA);
    document.head.appendChild(localBusinessScript);

    // WebSite Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Carplus Pneus e Oficina',
      description: 'Loja de pneus e oficina mecânica em Curitiba',
      publisher: { '@id': `${BASE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${BASE_URL}/pneus?busca={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    };
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.setAttribute('data-seo', 'website');
    websiteScript.textContent = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);

    // Breadcrumbs Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
        })),
      };
      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.setAttribute('data-seo', 'breadcrumb');
      breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);
    }

    // FAQ Schema
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      };
      const faqScript = document.createElement('script');
      faqScript.type = 'application/ld+json';
      faqScript.setAttribute('data-seo', 'faq');
      faqScript.textContent = JSON.stringify(faqSchema);
      document.head.appendChild(faqScript);
    }

    // Product Schema
    if (product) {
      const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: title,
        description: description,
        image: ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`,
        brand: {
          '@type': 'Brand',
          name: product.brand || 'Carplus',
        },
        sku: product.sku,
        offers: {
          '@type': 'Offer',
          url: currentUrl,
          priceCurrency: product.currency || 'BRL',
          price: product.price,
          availability: `https://schema.org/${product.availability || 'InStock'}`,
          seller: { '@id': `${BASE_URL}/#organization` },
        },
      };
      const productScript = document.createElement('script');
      productScript.type = 'application/ld+json';
      productScript.setAttribute('data-seo', 'product');
      productScript.textContent = JSON.stringify(productSchema);
      document.head.appendChild(productScript);
    }

    // Custom Schema
    if (schema?.data) {
      const customSchema = {
        '@context': 'https://schema.org',
        '@type': schema.type,
        ...schema.data,
      };
      const customScript = document.createElement('script');
      customScript.type = 'application/ld+json';
      customScript.setAttribute('data-seo', 'custom');
      customScript.textContent = JSON.stringify(customSchema);
      document.head.appendChild(customScript);
    }

    // Dispara evento para pre-render saber que renderizou
    if (typeof window !== 'undefined') {
      document.dispatchEvent(new Event('render-event'));
    }

    // Cleanup
    return () => {
      const schemas = document.querySelectorAll('script[type="application/ld+json"][data-seo]');
      schemas.forEach(el => el.remove());
    };
  }, [title, description, keywords, canonical, ogImage, ogType, noindex, schema, breadcrumbs, article, product, faqs, currentUrl, canonicalUrl]);

  return null;
}

export default EnhancedSEO;
