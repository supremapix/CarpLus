import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createStaticServer, listenOnFreePort } from './generate-static-pages';
import { launchBrowser } from './launch-browser';
import { generateLocalBusinessSchema } from '../src/lib/schema';
import { GEO_LAT, GEO_LNG, REVIEW_COUNT } from '../src/data/oficinaMarcas';

async function main() {
  const business = generateLocalBusinessSchema() as {geo:{latitude:number;longitude:number};openingHoursSpecification:{dayOfWeek:string[];closes:string}[];aggregateRating:{reviewCount:string}};
  assert.deepEqual(business.geo, {'@type':'GeoCoordinates',latitude:-25.4636,longitude:-49.3003});
  assert.equal(business.openingHoursSpecification.find(h=>h.dayOfWeek.includes('Saturday'))?.closes,'12:00');
  assert.equal(business.aggregateRating.reviewCount,'262');assert.equal(GEO_LAT,-25.4636);assert.equal(GEO_LNG,-49.3003);assert.equal(REVIEW_COUNT,262);

  const server = createStaticServer(fs.readFileSync('dist/index.html'));
  const port = await listenOnFreePort(server); const origin = `http://127.0.0.1:${port}`;
  const browser = await launchBrowser();
  try {
    const page = await browser.newPage();
    const errors: string[] = []; page.on('pageerror', e => errors.push(String(e)));
    await page.setRequestInterception(true);
    page.on('request', r => r.url().startsWith(origin) || r.url().startsWith('data:') ? r.continue() : r.abort());
    for (const width of [360,390,768,1440]) {
      await page.setViewport({width,height:844});
      await page.goto(origin, {waitUntil:'networkidle0'});
      await page.waitForSelector('#home-trust-title');
      const state = await page.evaluate(() => {
        const hero = document.querySelector('#inicio')!;
        const cta = [...hero.querySelectorAll('a')].find(a => a.textContent?.includes('Conversar sobre meu carro'))!;
        return { h1: document.querySelectorAll('h1').length, title: hero.querySelector('h1')?.textContent, ctaTop: cta.getBoundingClientRect().top, ctaBottom: cta.getBoundingClientRect().bottom, overflow: document.documentElement.scrollWidth > innerWidth, videoCount: document.querySelectorAll('#por-que-confiar iframe').length, text: document.querySelector('#por-que-confiar')?.textContent, photos: [...document.querySelectorAll<HTMLImageElement>('#por-que-confiar img')].map(i=>i.getAttribute('src')) };
      });
      assert.equal(state.h1,1); assert(!state.overflow, `${width}px overflow`); assert(state.ctaBottom < 844, `CTA below fold at ${width}: ${state.ctaBottom}`); assert.equal(state.videoCount,0); assert(state.text?.includes('Por que confiar')); assert(state.text?.includes('262 avaliações')); assert(state.text?.includes('18/10/2026'));  assert(state.photos.every(p=>p?.startsWith('/images/')));
      if(width===390 || width===1440) { await page.screenshot({path:`/tmp/carplus-home-hero-${width}.png`}); await page.$eval('#por-que-confiar',el=>el.scrollIntoView()); await new Promise(r=>setTimeout(r,900)); await page.screenshot({path:`/tmp/carplus-home-trust-${width}.png`}); }
    }
    await page.setViewport({width:390,height:844});
    await page.goto(origin,{waitUntil:'networkidle0'}); await page.waitForSelector('#por-que-confiar');
    const oldText=await page.$eval('#inicio',el=>el.textContent); await new Promise(r=>setTimeout(r,4500)); assert.equal(await page.$eval('#inicio',el=>el.textContent),oldText);
    await page.click('#por-que-confiar button[aria-label^="Reproduzir vídeo"]');
    const frame=await page.$eval('#por-que-confiar iframe',el=>({src:el.getAttribute('src'),title:el.getAttribute('title')}));
    assert(frame.src?.includes('mute=1'));assert(frame.src?.includes('controls=1'));assert(frame.src?.includes('xlwso3EmUog'));assert.equal(frame.title,'Vídeo da Carplus: preparação para viagens');
    await page.evaluate(()=>scrollTo(0,document.body.scrollHeight)); await new Promise(r=>setTimeout(r,1000));
    assert.equal(errors.length,0,errors.join('\n'));
    for(const file of ['src/components/Reviews.tsx','src/components/ReviewsHeader.tsx']) {const text=fs.readFileSync(file,'utf8');assert(!text.includes('getTimeAgo'));assert(!text.includes('TIME_OPTIONS'));assert(!text.includes('4.9 ★'));assert(!text.includes('+250'));}
    console.log('PASS: 360/390/768/1440px, CTA within 844px fold, stable hero, local visual proof, video click-only/muted/controls, no synthetic dates or page errors. Playback and Carplus identity confirmed separately in authenticated browser.');
  } finally {await browser.close(); await new Promise<void>(resolve=>server.close(()=>resolve()));}
}
main().catch(e=>{console.error(e);process.exit(1)});
