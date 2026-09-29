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
//      registra um AVISO e conclui com sucesso servindo o SPA. Assim, habilitar
//      a flag jamais derruba a produção.
//
// Para ativar a geração completa em um deploy: defina GENERATE_STATIC=1 nas
// variáveis de ambiente do projeto na Vercel (ou no comando local).
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// Emite dist/404.html a partir do shell SPA limpo (dist/index.html logo após
// build:spa, ANTES da geração estática sobrescrever a home). A Vercel serve
// /404.html com HTTP 404 real para qualquer rota não resolvida por
// redirects → filesystem → rewrites. O React então renderiza <NotFound> (noindex).
function emit404() {
  const dist = path.join(process.cwd(), 'dist');
  const shell = path.join(dist, 'index.html');
  const out = path.join(dist, '404.html');
  if (!fs.existsSync(shell)) {
    console.warn('[build-deploy] AVISO: dist/index.html ausente; nao foi possivel emitir 404.html.');
    return;
  }
  let html = fs.readFileSync(shell, 'utf-8');
  // Substitui Title
  html = html.replace(/<title>.*?<\/title>/i, '<title>Página não encontrada | Carplus Pneus e Oficina</title>');
  // Substitui meta description
  html = html.replace(/<meta name="description" content=".*?" \/>/i, '<meta name="description" content="A página que você procura não foi encontrada. Conheça nosso catálogo de pneus novos e serviços de manutenção automotiva no bairro Portão em Curitiba." />');
  // Garante robots noindex
  html = html.replace(/<meta name="robots" content=".*?" \/>/i, '<meta name="robots" content="noindex, follow" />');
  // Remove canonical da home para não gerar soft 404
  html = html.replace(/<link rel="canonical" href=".*?" \/>/i, '');
  // Substitui OpenGraph Title e remove og:url apontando para a home
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, '<meta property="og:title" content="Página não encontrada | Carplus Pneus e Oficina" />');
  html = html.replace(/<meta property="og:url" content=".*?" \/>/i, '');
  // Adiciona prerender-status-code=404 para crawlers e middlewares
  if (!html.includes('prerender-status-code')) {
    html = html.replace('</head>', '  <meta name="prerender-status-code" content="404" />\n  </head>');
  }

  fs.writeFileSync(out, html, 'utf-8');
  console.log('[build-deploy] 404.html emitido com title, noindex e sem canonical da home.');
}

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
        `O deploy segue com o SPA (bots recebem o HTML servido normalmente).`,
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

// 404 real: captura o shell SPA limpo agora, antes de qualquer geração estática.
emit404();

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
