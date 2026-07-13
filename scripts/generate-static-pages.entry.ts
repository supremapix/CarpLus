// scripts/generate-static-pages.entry.ts
// Entrypoint fino da geração estática. Toda a lógica vive em
// ./generate-static-pages.ts (reutilizado pelos testes via generateRoutes).
// Mantido separado para não depender do guard "invocado diretamente", que é
// frágil quando o script é empacotado (esbuild) e executado como bundle.

import { main } from './generate-static-pages';

main().catch((err) => {
  console.error('[static] Erro crítico:', err);
  process.exit(1);
});
