import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
  schemaJSON?: object | object[];
  noindex?: boolean;
}

const BASE_URL = 'https://carpluspneuseoficina.com.br';

// Schema.org base para LocalBusiness - sempre presente
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
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '347',
    bestRating: '5',
    worstRating: '1',
  },
};

export function useSEO({ 
  title, 
  description, 
  canonical, 
  ogImage, 
  ogType = 'website', 
  keywords = [],
  schemaJSON,
  noindex = false 
}: SEOProps) {
  useEffect(() => {
    // Atualiza o título
    document.title = title;

    // Helper para criar/atualizar meta tags
    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        const match = selector.match(/\[([^=]+)="([^"]+)"\]/);
        if (match) {
          el.setAttribute(match[1], match[2]);
        }
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Meta tags básicas
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Keywords
    if (keywords.length > 0) {
      setMeta('meta[name="keywords"]', 'content', keywords.join(', '));
    }

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', ogType);
    setMeta('meta[property="og:url"]', 'content', canonical || window.location.href);
    setMeta('meta[property="og:site_name"]', 'content', 'Carplus Pneus e Oficina');
    setMeta('meta[property="og:locale"]', 'content', 'pt_BR');

    if (ogImage) {
      const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;
      setMeta('meta[property="og:image"]', 'content', fullImageUrl);
      setMeta('meta[property="og:image:width"]', 'content', '1200');
      setMeta('meta[property="og:image:height"]', 'content', '630');
      setMeta('meta[name="twitter:image"]', 'content', fullImageUrl);
    }

    // Twitter Card
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    // Canonical URL
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.rel = 'canonical';
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = canonical;
    }

    // Resource hints para performance
    const addLink = (rel: string, href: string, extra?: Record<string, string>) => {
      if (!document.querySelector(`link[rel="${rel}"][href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (extra) {
          Object.entries(extra).forEach(([key, value]) => {
            link.setAttribute(key, value);
          });
        }
        document.head.appendChild(link);
      }
    };

    addLink('dns-prefetch', '//fonts.googleapis.com');
    addLink('dns-prefetch', '//fonts.gstatic.com');
    addLink('preconnect', 'https://fonts.googleapis.com', { crossorigin: '' });
    addLink('preconnect', 'https://fonts.gstatic.com', { crossorigin: '' });

    // Schema.org JSON-LD
    // Remove schemas dinâmicos anteriores
    document.querySelectorAll('script[data-dynamic-schema="true"]').forEach(s => s.remove());
    
    const injected: HTMLScriptElement[] = [];

    // Adiciona LocalBusiness schema base
    const localBusinessScript = document.createElement('script');
    localBusinessScript.type = 'application/ld+json';
    localBusinessScript.text = JSON.stringify(LOCAL_BUSINESS_SCHEMA);
    localBusinessScript.setAttribute('data-dynamic-schema', 'true');
    document.head.appendChild(localBusinessScript);
    injected.push(localBusinessScript);

    // Adiciona schemas customizados
    const schemas = schemaJSON ? (Array.isArray(schemaJSON) ? schemaJSON : [schemaJSON]) : [];
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.setAttribute('data-dynamic-schema', 'true');
      document.head.appendChild(script);
      injected.push(script);
    });

    // Dispara evento para pre-render saber que renderizou
    if (typeof window !== 'undefined') {
      document.dispatchEvent(new Event('render-event'));
    }

    return () => {
      injected.forEach(s => s.parentNode?.removeChild(s));
    };
  }, [title, description, canonical, ogImage, ogType, keywords, schemaJSON, noindex]);
}
