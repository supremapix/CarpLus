import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schemaJSON?: object | object[];
}

export function useSEO({ title, description, canonical, ogImage, ogType = 'website', schemaJSON }: SEOProps) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrValue] = selector.replace('meta[', '').replace(']', '').split('=');
        el.setAttribute(attrName, attrValue.replace(/"/g, ''));
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:type"]', 'content', ogType);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);

    if (ogImage) {
      setMeta('meta[property="og:image"]', 'content', ogImage);
      setMeta('meta[name="twitter:image"]', 'content', ogImage);
    }

    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      if (!canonicalEl) {
        canonicalEl = document.createElement('link');
        canonicalEl.rel = 'canonical';
        document.head.appendChild(canonicalEl);
      }
      canonicalEl.href = canonical;
    }

    const schemas = schemaJSON ? (Array.isArray(schemaJSON) ? schemaJSON : [schemaJSON]) : [];
    const injected: HTMLScriptElement[] = [];

    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      script.setAttribute('data-dynamic-schema', 'true');
      document.head.appendChild(script);
      injected.push(script);
    });

    return () => {
      injected.forEach(s => s.parentNode?.removeChild(s));
    };
  }, [title, description, canonical, ogImage, ogType, schemaJSON]);
}
