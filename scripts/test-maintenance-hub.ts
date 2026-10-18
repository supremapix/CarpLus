/**
 * Regressão local do hub, contra o bundle de produção já construído.
 * npm run build:spa
 * USE_SERVERLESS_CHROMIUM=1 node scripts/run-ts.mjs scripts/test-maintenance-hub.ts
 * Opcional: HUB_SCREENSHOT_DIR=/tmp/carplus-hub-qa para salvar screenshots.
 * Não publica, envia mensagens ou modifica conteúdo de produção.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { preview } from 'vite';
import { launchBrowser } from './launch-browser';
import { HUB_FAQS } from '../src/data/maintenanceHub';

const route = '/manutencao-automotiva-curitiba';
const canonical = `https://www.carpluspneuseoficina.com.br${route}`;
const server = await preview({ preview: { host: '127.0.0.1', port: 0, open: false } });
const address = server.httpServer.address();
assert(address && typeof address !== 'string', 'Servidor local não iniciado');
const origin = `http://127.0.0.1:${address.port}`;
let browser: Awaited<ReturnType<typeof launchBrowser>> | undefined;
const screenshotDir = process.env.HUB_SCREENSHOT_DIR;

try {
  browser = await launchBrowser();
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(String(error)));
  let internalLinks: string[] = [];

  for (const width of [320, 390, 1440]) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    const response = await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0' });
    assert.equal(response?.status(), 200, 'Hub deve ser servido localmente');
    await page.evaluate(async () => {
      document.documentElement.style.scrollBehavior = 'auto';
      for (const img of document.querySelectorAll<HTMLImageElement>('main img')) {
        img.loading = 'eager';
        img.scrollIntoView({ behavior: 'instant' });
        if (!img.complete) {
          await new Promise<void>((resolve, reject) => {
            img.addEventListener('load', () => resolve(), { once: true });
            img.addEventListener('error', () => reject(new Error(`Falha na imagem: ${img.src}`)), { once: true });
          });
        }
        await img.decode();
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    await new Promise((resolve) => setTimeout(resolve, 400));
    const state = await page.evaluate(() => {
      const schemas = [...document.querySelectorAll('script[type="application/ld+json"]')]
        .map((element) => JSON.parse(element.textContent || '{}'))
        .flatMap((schema) => schema['@graph'] || schema);
      const faqs = schemas.filter((schema) => schema['@type'] === 'FAQPage');
      return {
        title: document.title,
        description: document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content,
        canonical: [...document.querySelectorAll<HTMLLinkElement>('link[rel="canonical"]')].map((link) => link.href),
        h1: document.querySelectorAll('h1').length,
        overflow: document.documentElement.scrollWidth > innerWidth,
        faqSchemas: faqs.length,
        faqStructured: faqs[0]?.mainEntity.map((entry: { name: string; acceptedAnswer: { text: string } }) => ({
          question: entry.name, answer: entry.acceptedAnswer.text,
        })),
        faqVisible: [...document.querySelectorAll('main details')].map((detail) => ({
          question: detail.querySelector('summary span')?.textContent,
          answer: detail.querySelector('p')?.textContent,
        })),
        images: [...document.querySelectorAll<HTMLImageElement>('main img')].map((img) => ({
          src: img.getAttribute('src'), loaded: img.complete && img.naturalWidth > 0, alt: img.alt,
        })),
        anchors: [...document.querySelectorAll<HTMLAnchorElement>('main a[href^="#"]')]
          .every((link) => document.getElementById(link.hash.slice(1))),
        contactLinks: [...document.querySelectorAll<HTMLAnchorElement>('main a[href*="wa.me"]')].map((link) => link.href),
        internalLinks: [...new Set([...document.querySelectorAll('main a[href^="/"]')]
          .map((link) => link.getAttribute('href')!))],
        breadcrumbTop: document.querySelector('nav[aria-label="Breadcrumb"]')!.getBoundingClientRect().top,
        headerBottom: document.querySelector('header')!.getBoundingClientRect().bottom,
      };
    });
    assert.equal(state.title, 'Manutenção automotiva e mecânico no Portão | Carplus Curitiba');
    assert.equal(state.description, 'Procura um mecânico confiável em Curitiba? Conheça a Carplus no Portão, veja orientações por sintomas e consulte manutenção para carros atuais e antigos.');
    assert.deepEqual(state.canonical, [canonical]);
    assert.equal(state.h1, 1);
    assert.equal(state.overflow, false, `Overflow em ${width}px`);
    assert.equal(state.faqSchemas, 1);
    assert.deepEqual(state.faqVisible, HUB_FAQS);
    assert.deepEqual(state.faqStructured, HUB_FAQS);
    assert.equal(state.images.length, 2);
    assert(state.images.every((img) => img.loaded && img.alt), 'Fotos devem carregar e ter alt');
    assert(state.anchors, 'Âncoras devem ter destino');
    assert(state.breadcrumbTop >= state.headerBottom, 'Cabeçalho não deve ocultar breadcrumb');
    assert.equal(state.contactLinks.length, 3);
    for (const href of state.contactLinks) {
      const url = new URL(href);
      assert.equal(url.hostname, 'wa.me');
      assert.equal(url.pathname, '/554130827282');
      const message = url.searchParams.get('text') || '';
      assert(['[modelo]', '[ano]', '[sintoma ou necessidade]'].every((field) => message.includes(field)));
    }
    internalLinks = state.internalLinks;
    // Confirma que o FAQ também é utilizável, além de existir no DOM.
    await page.locator('main details summary').click();
    assert(await page.$eval('main details', (detail) => detail.hasAttribute('open')));
    await page.locator('main details summary').click();
    if (screenshotDir) {
      await fs.mkdir(screenshotDir, { recursive: true });
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      await new Promise((resolve) => setTimeout(resolve, 400));
      await page.screenshot({ path: path.join(screenshotDir, `hub-${width}.png`), fullPage: true });
    }
    console.log(`PASS ${width}px: layout, imagens, SEO, 7 FAQs, âncoras e WhatsApp`);
  }

  for (const destination of internalLinks) {
    await page.goto(`${origin}${destination}`, { waitUntil: 'networkidle0' });
    const invalid = await page.evaluate(() =>
      document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content.includes('noindex') ||
      document.body.innerText.includes('Página não encontrada'));
    assert.equal(Boolean(invalid), false, `Destino inválido: ${destination}`);
  }
  assert.deepEqual(errors, [], 'Não deve haver erros JavaScript');
  console.log(`PASS ${internalLinks.length} destinos internos; nenhum erro JavaScript. Nada foi publicado.`);
} finally {
  await browser?.close();
  await new Promise<void>((resolve, reject) => server.httpServer.close((error) => error ? reject(error) : resolve()));
}
