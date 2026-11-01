import assert from 'node:assert/strict';
import fs from 'node:fs';
import { launchBrowser } from './launch-browser';
import verified from '../src/data/googleReviewsVerified.json';
import { PROMO_TIRES } from '../src/data/promoTires';
const origin=process.env.TEST_ORIGIN||'http://127.0.0.1:3108';
const sitemap=fs.readFileSync('public/sitemap-produtos.xml','utf8');
const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>new URL(x[1]).pathname);
const routes=['/servico/alinhamento-e-balanceamento',urls.find(x=>x.startsWith('/pneu/'))!,'/pneu-promocao/'+PROMO_TIRES[0].slug];
const browser=await launchBrowser();
try{const page=await browser.newPage();await page.setRequestInterception(true);page.on('request',r=>r.url().startsWith(origin)||r.url().startsWith('data:')?r.continue():r.abort());
 for(const width of (process.env.REVIEWS_ONLY ? [] : [320,390,1172]))for(const [idx,route] of routes.entries()){
  await page.setViewport({width,height:900});await page.goto(origin+route,{waitUntil:'networkidle0'});
  const selector=idx===0?'[aria-labelledby="service-advice-title"]':'[aria-labelledby="troca-pneu-orientacao"]';
  await page.waitForSelector(selector);await page.$eval(selector,el=>el.scrollIntoView({block:'start',behavior:'instant'}));await page.evaluate(()=>scrollBy(0,-120));
  await new Promise(r=>setTimeout(r,400));await page.screenshot({path:`/tmp/carplus-advice-${idx}-${width}.png`});
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,`${route} overflow at${width}`);
  const links=await page.$$eval(`${selector} a`,els=>els.map(el=>({href:(el as HTMLAnchorElement).href,height:el.getBoundingClientRect().height,width:el.getBoundingClientRect().width,scrollWidth:el.scrollWidth,clientWidth:el.clientWidth})));
  assert(links.some(x=>x.href.startsWith('https://wa.me/554130827282')));
  assert(links.every(x=>x.height>=44&&x.scrollWidth<=x.clientWidth),`CTA clipped or too small ${route} at${width}: ${JSON.stringify(links)}`);
  await page.$eval(`${selector} a[href^="https://wa.me"]`,el=>el.scrollIntoView({block:'center',behavior:'instant'}));await page.screenshot({path:`/tmp/carplus-advice-cta-${idx}-${width}.png`});
 }
 await page.setViewport({width:320,height:900});await page.goto(origin,{waitUntil:'networkidle0'});
 // Let the preceding lazy store section settle, then keep the review root in view.
 for(let attempt=0;attempt<5;attempt++){
  await page.evaluate(()=>{const root=document.querySelectorAll<HTMLElement>('main > div')[1];root?.scrollIntoView({block:'start',behavior:'instant'});scrollBy(0,-130);});
  await new Promise(resolve=>setTimeout(resolve,600));
 }
 await page.waitForFunction(name=>[...document.querySelectorAll('h4')].some(el=>el.textContent===name),{},verified.reviews[0].name);
 assert((await page.content()).includes('271 avaliações no Google'));
 await page.evaluate(name=>{const heading=[...document.querySelectorAll('h4')].find(el=>el.textContent===name);(heading?.closest('button')||heading?.closest('[role="button"]')||heading?.parentElement?.parentElement?.parentElement as HTMLElement)?.click();},verified.reviews[0].name);
 await page.waitForSelector('[aria-label="Fechar avaliação"]');
 assert.equal(await page.evaluate(()=>document.activeElement?.getAttribute('aria-label')),'Fechar avaliação');
 await page.keyboard.down('Shift');await page.keyboard.press('Tab');await page.keyboard.up('Shift');
 assert((await page.evaluate(()=>document.activeElement?.textContent))?.includes('Próximo'));await page.keyboard.press('Tab');
 await new Promise(r=>setTimeout(r,400));await page.screenshot({path:'/tmp/carplus-review-320.png'});
 assert((await page.content()).includes(verified.reviews[0].text));
 assert(await page.$('a[href="https://maps.google.com/maps?cid=11894120831274747055"]'));
 await page.keyboard.press('ArrowRight');await page.waitForFunction(name=>[...document.querySelectorAll('h4')].some(el=>el.textContent===name),{},verified.reviews[1].name);
 await page.keyboard.press('ArrowRight');await page.keyboard.press('ArrowRight');
 await page.waitForFunction(()=>[...document.querySelectorAll('h4')].some(el=>el.textContent==='Isaac Coelho'));
 await page.screenshot({path:'/tmp/carplus-review-old-320.png'});
 assert.equal(await page.$eval('[role="dialog"]',el=>el.getBoundingClientRect().height>innerHeight),false);await page.keyboard.press('Escape');
 await page.waitForFunction(()=>!document.querySelector('[role="dialog"]'));
 await page.evaluate(()=>document.querySelector<HTMLElement>('[aria-label="Ler avaliação de Daiane Baggio"]')?.click());
 await page.waitForSelector('#review-modal-author');
 assert.equal(await page.$eval('#review-modal-author',el=>el.textContent),'Daiane Baggio');
 await page.keyboard.press('ArrowRight');
 await page.waitForFunction(()=>document.querySelector('#review-modal-author')?.textContent==='Dayane De Oliveira Martins');
 await page.keyboard.press('Escape');
 console.log(process.env.REVIEWS_ONLY ? 'PASS review browser: original/source, dated271summary, keyboard trap, viewport fit, oldIsaac preservation, correct cross-column index navigation.' : 'PASS service/tire/promo advice3widths, CTA44px/no clipping; reviews source/originals/271summary/focus/navigation.');
}finally{await browser.close()}
