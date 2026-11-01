#!/usr/bin/env node
// Required initial HTML for the exact existing 1533 indexed URLs plus existing
// customer/legacy extras. The previous opt-in could silently serve home metadata
// on catalog URLs if GENERATE_STATIC was absent or failed. Publication now fails
// closed rather than replacing already-indexable initial content with the SPA.
// This changes delivery guarantees only, never sitemap identities/indexability.
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
console.log('[build-deploy] HTML inicial obrigatório para todo o inventário indexado existente.');

// Camada 1 — essencial.
run('npm run sitemap', { essential: true });
run('npm run redirects', { essential: true });
run('npm run build:spa', { essential: true });

// 404 real: captura o shell SPA limpo agora, antes de qualquer geração estática.
emit404();

// Editorial pages must ship their own HTML, independent of full-site prerendering.
run('node scripts/run-ts.mjs scripts/generate-static-blog.ts', { essential: true });
run('node scripts/run-ts.mjs scripts/generate-static-comparison-guide.ts', { essential: true });

// Serviços legados e página regional válidos precisam de HTML próprio, sem decidir consolidação
// de URLs nem adicioná-los ao sitemap. Falha aqui impede publicar o shell.
run('npm run generate:static:existing-pages', { essential: true });

// All 40 existing indexed services, promotions, policies and HTML sitemap must not ship the home shell.
run('node scripts/run-ts.mjs scripts/generate-static-customer-pages.ts', { essential: true });

// Every existing indexed URL is required, independently of environment flags.
run('npm run generate:static:all', { essential: true });
run('node scripts/run-ts.mjs scripts/validate-static-all.ts --require-all', { essential: true });

// Validate extra routes again after full generation, and enforce product identity/schema.
run('npm run validate:static:existing-pages', { essential: true });
run('node scripts/run-ts.mjs scripts/generate-static-customer-pages.ts --validate', { essential: true });
run('node scripts/run-ts.mjs scripts/validate-static-products-required.ts', { essential: true });

run('node scripts/emit-build-receipt.mjs', { essential: true });

console.log('\n[build-deploy] Build de deploy concluído com sucesso.');
