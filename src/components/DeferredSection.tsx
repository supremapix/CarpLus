import { useRef, useState, useEffect, type ReactNode } from 'react';
import { isPrerenderEager, isStaticGeneration } from '../lib/prerender';

interface DeferredSectionProps {
  children: ReactNode;
  /** Altura reservada do placeholder para evitar layout shift quando nao montado */
  minHeight?: number;
  /** Margem do IntersectionObserver para pre-carregar antes de entrar na tela */
  rootMargin?: string;
  className?: string;
  /**
   * Desmonta os filhos quando a secao sai do viewport (mantendo a altura reservada).
   * Mantem o DOM enxuto em paginas longas com listas/marquees pesados.
   */
  unmountOnExit?: boolean;
}

/**
 * Monta os filhos apenas quando a secao se aproxima do viewport.
 * Reduz drasticamente a quantidade de elementos no DOM no carregamento inicial,
 * evitando renderizar listas/marquees pesados que estao fora da tela.
 * Com unmountOnExit, tambem libera os elementos ao sair da tela.
 */
export default function DeferredSection({
  children,
  minHeight = 600,
  rootMargin = '150px',
  className,
  unmountOnExit = false,
}: DeferredSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Render ansioso durante a geração estática ou ao hidratar uma página
  // pré-renderizada → conteúdo completo no snapshot, sem hydration mismatch.
  const eager = isPrerenderEager();
  const [isVisible, setIsVisible] = useState(eager);
  const [hasMounted, setHasMounted] = useState(eager);

  useEffect(() => {
    // Durante a geração headless, mantém tudo montado (não instala o observer,
    // para o unmountOnExit não desmontar seções fora da viewport antes do capture).
    if (isStaticGeneration()) return;

    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      setHasMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.some((e) => e.isIntersecting);
        setIsVisible(intersecting);
        if (intersecting) setHasMounted(true);
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  // Sem unmountOnExit: monta uma unica vez e mantem. Com unmountOnExit: segue a visibilidade.
  const shouldRender = unmountOnExit ? isVisible : hasMounted;

  return (
    <div ref={ref} className={className} style={shouldRender ? undefined : { minHeight }}>
      {shouldRender ? children : null}
    </div>
  );
}
