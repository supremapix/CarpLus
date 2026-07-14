// Helper único de inicialização do Chrome headless para a geração estática.
//
// Dois modos, detectados em tempo de execução:
//   • LOCAL (sandbox/dev): usa o pacote `puppeteer` (devDependency) com o
//     Chrome empacotado. Comprovado e rápido para desenvolvimento.
//   • SERVERLESS (build da Vercel): usa `puppeteer-core` + `@sparticuz/chromium`
//     (ambos em dependencies), pois a imagem de build da Vercel NÃO possui as
//     bibliotecas de sistema exigidas pelo Chrome empacotado do puppeteer.
//
// A seleção é automática: a Vercel define `VERCEL=1` no build. Também há
// overrides explícitos para testar cada caminho localmente:
//   • USE_SERVERLESS_CHROMIUM=1  → força o caminho serverless
//   • PUPPETEER_LOCAL=1          → força o caminho local (tem prioridade)
import type { Browser } from 'puppeteer-core';

const COMMON_ARGS = ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'];

/** Decide se deve usar o Chromium serverless (@sparticuz/chromium). */
export function useServerlessChromium(): boolean {
  if (process.env.PUPPETEER_LOCAL === '1') return false;
  if (process.env.USE_SERVERLESS_CHROMIUM === '1') return true;
  return Boolean(process.env.VERCEL);
}

/** Abre um browser headless no modo apropriado ao ambiente. */
export async function launchBrowser(): Promise<Browser> {
  if (useServerlessChromium()) {
    const { default: chromium } = await import('@sparticuz/chromium');
    const { default: puppeteerCore } = await import('puppeteer-core');
    // O viewport é definido por página em renderRouteOnPage, então não
    // dependemos de defaultViewport (removido na API do @sparticuz/chromium v149+).
    const executablePath = await chromium.executablePath();
    console.log(`[launch-browser] modo=serverless (@sparticuz/chromium) exec=${executablePath}`);
    return puppeteerCore.launch({
      args: [...chromium.args, ...COMMON_ARGS],
      executablePath,
      headless: true,
    });
  }

  // Caminho local: importa o puppeteer completo apenas quando necessário.
  const { default: puppeteer } = await import('puppeteer');
  console.log('[launch-browser] modo=local (puppeteer com Chrome empacotado)');
  return puppeteer.launch({ headless: true, args: COMMON_ARGS }) as unknown as Browser;
}
