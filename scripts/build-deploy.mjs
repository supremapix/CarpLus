#!/usr/bin/env node
// Build de deploy da Vercel — resiliente e opt-in.
//
// Objetivo: NUNCA quebrar o deploy de produção. O build tem duas camadas:
//
//   1. ESSENCIAL (sempre roda, falha = deploy falha):
//        sitemap  →  redirects  →  build:spa
//      Reproduz o build seguro conhecido-bom (SPA + sitemap + 152 redirects).
//
//   2. OPT-IN / BEST-EFFORT (só com GENERATE_STATIC=1):
//        generate:static:all  →  validate:static:all
//      Gera as 1.512 páginas estáticas usando Chromium serverless
//      (@sparticuz/chromium) na Vercel. Se qualquer passo falhar, o build
//      registra um AVISO e conclui com sucesso servindo o SPA — o Prerender.io
//      continua cobrindo os bots. Assim, habilitar a flag jamais derruba a
//      produção.
//
// Para ativar a geração completa em um deploy: defina GENERATE_STATIC=1 nas
// variáveis de ambiente do projeto na Vercel (ou no comando local).
import { spawnSync } from 'node:child_process';

function run(cmd, { essential }) {
  const tag = essential ? 'ESSENCIAL' : 'best-effort';
  console.log(`\n[build-deploy] ▶ (${tag}) ${cmd}`);
  const res = spawnSync(cmd, { shell: true, stdio: 'inherit' });
  const code = res.status ?? 1;
  if (code !== 0) {
    if (essential) {
      console.error(`[build-deploy] FALHA ESSENCIAL em "${cmd}" (exit ${code}). Abortando build.`);
      process.exit(code);
    }
    console.warn(
      `[build-deploy] AVISO: passo best-effort "${cmd}" falhou (exit ${code}). ` +
        `O deploy segue com o SPA; bots continuam cobertos pelo Prerender.io.`,
    );
    return false;
  }
  return true;
}

console.log('[build-deploy] Iniciando build de deploy resiliente.');
console.log(`[build-deploy] Ambiente Vercel: ${process.env.VERCEL ? 'sim' : 'nao'}`);
console.log(`[build-deploy] GENERATE_STATIC: ${process.env.GENERATE_STATIC ?? '(nao definido)'}`);

// Camada 1 — essencial.
run('npm run sitemap', { essential: true });
run('npm run redirects', { essential: true });
run('npm run build:spa', { essential: true });

// Camada 2 — opt-in, best-effort.
if (process.env.GENERATE_STATIC === '1') {
  console.log('\n[build-deploy] GENERATE_STATIC=1 → gerando as 1.512 páginas estáticas.');
  const generated = run('npm run generate:static:all', { essential: false });
  if (generated) {
    run('npm run validate:static:all', { essential: false });
  }
} else {
  console.log(
    '\n[build-deploy] GENERATE_STATIC != 1 → pulando geração estática. ' +
      'Publicando apenas o SPA (comportamento seguro). Defina GENERATE_STATIC=1 para gerar as páginas.',
  );
}

console.log('\n[build-deploy] Build de deploy concluído com sucesso.');
