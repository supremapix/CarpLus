import { useRef, useState, useEffect, type ReactNode } from 'react';

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
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
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
