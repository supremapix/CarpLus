// scripts/generate-static-all.entry.ts
// Entrypoint fino do gerador estático escalável (E6). A lógica vive em
// ./generate-static-all.ts. Mantido separado para não depender do guard
// "invocado diretamente", frágil quando empacotado (esbuild) e executado.

import { main } from './generate-static-all';

main().catch((err) => {
  console.error('[e6] Erro crítico:', err);
  process.exit(1);
});
