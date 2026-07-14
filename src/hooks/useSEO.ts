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
  /**
   * Código HTTP a comunicar aos bots via `<meta name="prerender-status-code">`.
   * Usado pela página 404 para que o Prerender.io responda 404 real aos
   * crawlers (enquanto o middleware estiver ativo). Aditivo: quando ausente,
   * nenhum meta é criado e o comportamento das demais páginas não muda. O meta
   * é REMOVIDO no cleanup para não vazar o status em navegações SPA.
   */
  prerenderStatusCode?: number;
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
  prerenderStatusCode,
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

    // prerender-status-code: comunica o status HTTP aos bots via Prerender.io.
    // Só existe quando a rota o solicita (ex.: 404). Marcado como dinâmico e
    // removido no cleanup para NUNCA persistir em navegações SPA para outras rotas.
    let statusMetaEl: HTMLMetaElement | null = null;
    if (prerenderStatusCode != null) {
      statusMetaEl =
        (document.querySelector('meta[name="prerender-status-code"]') as HTMLMetaElement | null) ??
        (() => {
          const el = document.createElement('meta');
          el.setAttribute('name', 'prerender-status-code');
          document.head.appendChild(el);
          return el;
        })();
      statusMetaEl.setAttribute('content', String(prerenderStatusCode));
      statusMetaEl.setAttribute('data-dynamic-status', 'true');
    }

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
      // Sinal confiável para a geração estática interna (E2/E3/E4):
      // marca que a rota atual chamou useSEO com título/description/canonical/JSON-LD
      // já aplicados ao DOM. Coexiste com o Prerender.io (render-event) sem substituí-lo.
      const w = window as unknown as {
        __STATIC_RENDER_READY__?: boolean;
        __STATIC_RENDER_STATUS__?: {
          ready: boolean;
          route: string;
          title: string;
          hasCanonical: boolean;
          jsonLd: number;
          noindex: boolean;
          timestamp: number;
        };
      };
      w.__STATIC_RENDER_READY__ = true;
      // Status detalhado: só é "ready" quando há título e canonical aplicados.
      // O gerador (E4) usa isto para confirmar que os metadados essenciais da
      // ROTA CORRETA já estão no DOM antes de capturar (evita capturar a home
      // em outra rota ou metadados incompletos).
      w.__STATIC_RENDER_STATUS__ = {
        ready: !!title && !!canonicalEl?.getAttribute('href'),
        route: window.location.pathname,
        title: document.title,
        hasCanonical: !!canonicalEl?.getAttribute('href'),
        jsonLd: document.querySelectorAll('script[data-dynamic-schema="true"]').length,
        noindex: !!noindex,
        timestamp: Date.now(),
      };
    }

    return () => {
      injected.forEach(s => s.parentNode?.removeChild(s));
      prevLinkEl?.parentNode?.removeChild(prevLinkEl);
      nextLinkEl?.parentNode?.removeChild(nextLinkEl);
      // Remove o meta de status para não vazar o 404 a outras rotas na navegação SPA.
      if (statusMetaEl?.getAttribute('data-dynamic-status') === 'true') {
        statusMetaEl.parentNode?.removeChild(statusMetaEl);
      }
    };
  }, [title, description, canonical, ogImage, ogType, keywords, schemaJSON, noindex, prevUrl, nextUrl, prerenderStatusCode]);
}
