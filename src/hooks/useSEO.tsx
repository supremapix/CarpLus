import { Seo, type SEOProps } from '../components/Seo';

export type { SEOProps };

/**
 * Compat: antes este era um hook que injetava meta tags no DOM via useEffect
 * (só funcionava no navegador, exigindo pré-render em runtime para o Googlebot).
 *
 * Agora retorna o elemento `<Seo/>`, que renderiza as tags na árvore React e é
 * capturado no HTML gerado no build (SSG via vite-react-ssg). Os call sites devem
 * renderizar o retorno, ex.:
 *
 *   const seo = useSEO({ title, description, ... });
 *   return (<div>{seo} ...</div>);
 *
 * Preferir importar `<Seo/>` diretamente em código novo.
 */
export function useSEO(props: SEOProps) {
  return <Seo {...props} />;
}
