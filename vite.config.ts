import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          // Separa as libs e dados pesados em chunks cacheáveis e
          // independentes, mantendo o bundle inicial pequeno.
          manualChunks(id) {
            // Catálogo de pneus (~2 MB): chunk próprio, carregado sob
            // demanda e cacheado/compartilhado entre as rotas que o usam.
            if (/[\\/]src[\\/]data\.ts$/.test(id)) return 'tire-catalog';
            if (!id.includes('node_modules')) return undefined;
            if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom)[\\/]/.test(id))
              return 'react-vendor';
            if (id.includes('motion')) return 'motion';
            if (id.includes('react-helmet-async')) return 'helmet';
            if (id.includes('lucide-react')) return 'icons';
            return 'vendor';
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
