import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

// ViteReactSSG cuida do RouterProvider (data router) e do HelmetProvider internamente,
// gerando HTML estático de cada rota no build (elimina a dependência de pré-render em runtime).
export const createRoot = ViteReactSSG({ routes });
