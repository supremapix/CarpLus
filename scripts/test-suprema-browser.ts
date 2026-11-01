import assert from 'node:assert/strict';
import { launchBrowser } from './launch-browser';
const origin = process.env.TEST_ORIGIN || 'http://127.0.0.1:3107';
const browser = await launchBrowser();
try {
 const page = await browser.newPage();
 await page.setRequestInterception(true);
 let delaySearch = true;
 page.on('request', request => {
  if (request.url().includes('/src/components/GlobalSearch.tsx') && delaySearch) { delaySearch = false; setTimeout(()=>request.continue(),1200); return; }
  request.url().startsWith(origin) || /^(data:|blob:)/.test(request.url()) ? request.continue() : request.abort();
 });
 const errors: string[] = [];
 page.on('pageerror', error => errors.push(String(error)));
 for (const width of (process.env.TEST_WIDTHS || '320,390,1172,1536').split(',').map(Number)) {
  await page.setViewport({ width, height: 900 });
  await page.goto(origin, { waitUntil: 'networkidle0' });
  await page.waitForSelector('h1');
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth),false, `Overflow at ${width}`);
  await new Promise(resolve=>setTimeout(resolve,350));
  await page.screenshot({path:`/tmp/carplus-suprema-${width}.png`});
  if (width < 1536) {
   await page.click('[aria-label="Abrir menu"]');
   await page.waitForSelector('#mobile-navigation');
   assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Fechar menu');
   await page.keyboard.down('Shift'); await page.keyboard.press('Tab'); await page.keyboard.up('Shift');
   assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('href')), 'tel:+554130827282');
   await page.keyboard.press('Tab');
   assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Fechar menu');
   await new Promise(resolve=>setTimeout(resolve,350));
  await page.screenshot({path:`/tmp/carplus-menu-${width}.png`});
   await page.keyboard.press('Escape');
   assert.equal(await page.$('#mobile-navigation'), null);
   assert.equal(await page.evaluate(() => document.activeElement?.getAttribute('aria-label')), 'Abrir menu');
   await page.click('[aria-label="Abrir menu"]');
   await page.click('#mobile-navigation button:nth-of-type(1)').catch(()=>{});
   // Escape safely closes a repeated open without navigation.
   await page.keyboard.press('Escape');
  }
  await page.keyboard.down('Control'); await page.keyboard.press('k'); await page.keyboard.up('Control');
  if (width === 320) {
   await page.waitForSelector('[aria-label="Carregando busca"]');
   await page.click('[aria-label="Carregando busca"] button');
   assert.equal(await page.$('[aria-label="Carregando busca"]'),null);
   await page.keyboard.down('Control'); await page.keyboard.press('k'); await page.keyboard.up('Control');
  }
  await page.waitForSelector('input[aria-label="Buscar pneus, serviços, bairros e páginas"]');
  await page.keyboard.press('Escape');
  await page.keyboard.down('Control'); await page.keyboard.press('k'); await page.keyboard.up('Control');
  await page.waitForSelector('input[aria-label="Buscar pneus, serviços, bairros e páginas"]');
  await page.type('input[aria-label="Buscar pneus, serviços, bairros e páginas"]', '205');
  await page.waitForFunction(() => document.querySelector('[role="dialog"] [role="status"]')?.textContent?.includes('10 resultados'));
  assert.equal(await page.$$eval('[role="dialog"] button p',els=>els.some(el=>el.scrollWidth>el.clientWidth)),false, 'Search result text overflow');
  await new Promise(resolve=>setTimeout(resolve,350));
  await page.screenshot({path:`/tmp/carplus-search-${width}.png`});
  await page.keyboard.press('Escape');
  await page.click('[aria-label="Compartilhar esta página"]');
  assert.equal(await page.$$eval('#global-share-panel a',els=>els.length), 6);
  await new Promise(resolve=>setTimeout(resolve,350));
  await page.screenshot({path:`/tmp/carplus-share-${width}.png`});
  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', {configurable:true, value:{writeText:async()=>{throw new Error('Denied for test')}}}));
  // Use text selector for copy without touching outbound links.
  await page.evaluate(() => [...document.querySelectorAll<HTMLButtonElement>('#global-share-panel button')].find(el=>el.textContent?.includes('Copiar texto'))?.click());
  await page.waitForFunction(() => document.querySelector('#global-share-panel [role="status"]')?.textContent?.includes('Não foi possível'));
  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', {configurable:true, value:{writeText:async(text:string)=>{(window as any).__copiedText=text;}}}));
  await page.evaluate(() => [...document.querySelectorAll<HTMLButtonElement>('#global-share-panel button')].find(el=>el.textContent?.includes('Copiar texto'))?.click());
  await page.waitForFunction(() => document.querySelector('#global-share-panel [role="status"]')?.textContent?.includes('Texto e link copiados'));
  assert((await page.evaluate(()=>(window as any).__copiedText)).includes(await page.title()));
  await page.keyboard.press('Escape');
  await page.click('[aria-label="Abrir dicas e dúvidas rápidas"]');
  await page.waitForSelector('#quick-tips-dialog');
  await new Promise(resolve=>setTimeout(resolve,350));
  await page.screenshot({path:`/tmp/carplus-tips-${width}.png`});
  assert.equal(await page.evaluate(()=>document.activeElement?.getAttribute('aria-label')),'Fechar dicas');
  await page.keyboard.down('Shift'); await page.keyboard.press('Tab'); await page.keyboard.up('Shift');
  assert((await page.evaluate(()=>document.activeElement?.getAttribute('href')))?.startsWith('https://wa.me/554130827282'));
  await page.keyboard.press('Tab');
  assert.equal(await page.evaluate(()=>document.activeElement?.getAttribute('aria-label')),'Fechar dicas');
  await page.keyboard.press('Escape');
  assert.equal(await page.$('#quick-tips-dialog'),null);
  await page.evaluate(()=>scrollTo(0,301));
  await page.waitForFunction(()=>document.querySelector('[aria-label="Voltar ao topo"]')?.getAttribute('aria-hidden')==='false');
  await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
  await page.click('[aria-label="Voltar ao topo"]');
  await page.waitForFunction(()=>scrollY===0);
  const overlaps=await page.evaluate(()=>{
   const names=['Compartilhar esta página','Abrir dicas e dúvidas rápidas','Consultar Carplus no WhatsApp (abre nova aba)','Ligar para Carplus: (41) 3082-7282'];
   const rects=names.map(name=>({name,r:document.querySelector(`[aria-label="${name}"]`)!.getBoundingClientRect()}));
   return rects.flatMap((a,i)=>rects.slice(i+1).filter(b=>a.r.left<b.r.right&&a.r.right>b.r.left&&a.r.top<b.r.bottom&&a.r.bottom>b.r.top).map(b=>a.name+' / '+b.name));
  });
  assert.deepEqual(overlaps,[], 'Floating controls overlap');
 }
 for(const route of ['/pneus','/servicos','/como-chegar','/blog','/politica-de-privacidade']) {
  await page.goto(origin+route,{waitUntil:'networkidle0'});
  await page.click('[aria-label="Abrir dicas e dúvidas rápidas"]');
  const text=await page.$eval('#quick-tips-dialog',el=>el.textContent);
  assert(text && text.length>100);
  await page.keyboard.press('Escape');
  await page.click('[aria-label="Compartilhar esta página"]');
  const href=await page.$eval('#global-share-panel a',el=>(el as HTMLAnchorElement).href);
  assert(decodeURIComponent(href).includes(await page.title()), 'Share title must follow route');
  assert(decodeURIComponent(href).includes(origin+route), 'Share URL must follow route');
  await page.keyboard.press('Escape');
 }
 assert.deepEqual(errors,[], 'Runtime page errors');
 console.log('PASS actual browser: selected widths, drawer trap/Escape/reopen, search close/reopen/results, 6 share networks/copy failure/context, contextual tips, back-top/reduced-motion, no controls overlap.');
} finally { await browser.close(); }
