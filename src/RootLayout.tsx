import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, Suspense } from 'react';
import BackToTop from './components/BackToTop';
import AnalyticsLoader from './components/AnalyticsLoader';

// Fallback minimalista enquanto o chunk da rota carrega
function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div
        className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin"
        role="status"
        aria-label="Carregando"
      />
    </div>
  );
}

/**
 * Layout raiz (pathless) usado pelo data router do vite-react-ssg.
 *
 * Concentra o que antes ficava em App.tsx: scroll-to-top a cada navegação,
 * BackToTop, Analytics diferido e o Suspense que envolve as rotas lazy.
 * O <Outlet/> renderiza a rota atual.
 *
 * Observação: NÃO injetamos schema global aqui — LocalBusiness/Organization/WebSite
 * vivem como fonte única no index.html para evitar duplicação no Search Console.
 */
export default function RootLayout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <BackToTop />
      <AnalyticsLoader />
      <Suspense fallback={<RouteFallback />}>
        <Outlet />
      </Suspense>
    </>
  );
}
