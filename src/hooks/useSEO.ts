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
  /** URL da página anterior na paginação (gera <link rel="prev">). */
  prevUrl?: string;
  /** URL da próxima página na paginação (gera <link rel="next">). */
  nextUrl?: string;
}

const BASE_URL = 'https://www.carpluspneuseoficina.com.br';

export function useSEO({ 
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
    setMeta('meta[name="robots"]', 'content', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
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

    // rel="prev" / rel="next" para paginação (reforça sinais ao Google).
    const setPageLink = (rel: 'prev' | 'next', href?: string): HTMLLinkElement | null => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (href) {
        if (!el) {
          el = document.createElement('link');
          el.rel = rel;
          document.head.appendChild(el);
        }
        el.href = href;
        el.setAttribute('data-dynamic-pagelink', 'true');
        return el;
      }
      // Sem href: remove eventual link remanescente de outra página.
      if (el && el.getAttribute('data-dynamic-pagelink') === 'true') {
        el.parentNode?.removeChild(el);
      }
      return null;
    };
    const prevLinkEl = setPageLink('prev', prevUrl);
    const nextLinkEl = setPageLink('next', nextUrl);

    // Fontes hospedadas localmente (Inter + Oswald): sem hints ao Google Fonts.

    // Schema.org JSON-LD
    // Remove schemas dinâmicos anteriores
    document.querySelectorAll('script[data-dynamic-schema="true"]').forEach(s => s.remove());
    
    const injected: HTMLScriptElement[] = [];

    // IMPORTANTE: LocalBusiness/Organization/WebSite vivem como fonte UNICA no index.html.
    // Nao injetamos LocalBusiness aqui para evitar duplicacao de schema no Search Console.

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
      prevLinkEl?.parentNode?.removeChild(prevLinkEl);
      nextLinkEl?.parentNode?.removeChild(nextLinkEl);
    };
  }, [title, description, canonical, ogImage, ogType, keywords, schemaJSON, noindex, prevUrl, nextUrl]);
}
