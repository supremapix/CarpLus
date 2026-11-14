import assert from 'node:assert/strict';
import {preview} from 'vite';
import {launchBrowser} from './launch-browser';
const route='/centro-automotivo-para-troca-de-pneus-curitiba';
const server=await preview({preview:{host:'127.0.0.1',port:0}});
const address=server.httpServer.address(); assert(address && typeof address!=='string');
const origin=`http://127.0.0.1:${address.port}`;
const browser=await launchBrowser();
try {
 const page=await browser.newPage();
 await page.setRequestInterception(true);
 page.on('request',r=>{if(r.url().startsWith(origin)||/^(data:|blob:)/.test(r.url()))void r.continue();else void r.abort();});
 for(const width of [390,1440]) {
  await page.setViewport({width,height:900});
  await page.goto(origin+route,{waitUntil:'networkidle0'});
  await page.waitForSelector('h1');
  const state=await page.evaluate(()=>({h1:[...document.querySelectorAll('h1')].map(e=>e.textContent),canonical:document.querySelector('link[rel=canonical]')?.getAttribute('href'),width:document.documentElement.scrollWidth,text:document.body.innerText,schemas:[...document.querySelectorAll('script[type="application/ld+json"]')].map(e=>JSON.parse(e.textContent||'{}'))}));
  assert.equal(state.h1.length,1);assert(state.h1[0]?.includes('Onde trocar pneus em Curitiba'));
  assert(state.canonical?.endsWith(route));assert(state.width<=width);
  assert(state.text.toLowerCase().includes('preço do pneu não é o mesmo'));
  assert(JSON.stringify(state.schemas).includes('FAQPage'));
 }
 await page.goto(origin+'/pneus-curitiba',{waitUntil:'networkidle0'});
 const link=await page.$(`a[href="${route}"]`);assert(link);await link.click();await page.waitForFunction(()=>location.pathname.includes('centro-automotivo-para-troca'));
 console.log('PASS: desktop/mobile route, canonical, FAQ JSON-LD, no overflow and hub navigation; no external messages');
} finally {await browser.close();await new Promise<void>(r=>server.httpServer.close(()=>r()));}
