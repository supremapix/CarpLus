import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createStaticServer, listenOnFreePort } from './generate-static-pages';
import { launchBrowser } from './launch-browser';
async function main(){
 const server=createStaticServer(fs.readFileSync('dist/index.html'));const port=await listenOnFreePort(server);const origin=`http://127.0.0.1:${port}`;const browser=await launchBrowser();
 try{const page=await browser.newPage();await page.setRequestInterception(true);page.on('request',r=>r.url().startsWith(origin)||r.url().startsWith('data:')?r.continue():r.abort());
  for(const width of [360,390,1440])for(const route of ['/','/blog/calibragem-pneus-frios-carga','/servico/conserto-de-pneu']){
   await page.setViewport({width,height:844});await page.goto(origin+route,{waitUntil:'networkidle0'});await page.waitForSelector('footer img[alt="Carplus"]');
   await page.$eval('footer img[alt="Carplus"]',async(el)=>{el.scrollIntoView({behavior:'instant',block:'center'});await (el as HTMLImageElement).decode()});
   for(let i=0;i<5;i++){await page.$eval('footer img[alt="Carplus"]',el=>el.scrollIntoView({behavior:'instant',block:'center'}));await new Promise(r=>setTimeout(r,400));}
   const s=await page.$eval('footer img[alt="Carplus"]',el=>{const i=el as HTMLImageElement,r=i.getBoundingClientRect();return {x:r.x,y:r.y,w:r.width,h:r.height,nw:i.naturalWidth,nh:i.naturalHeight,overflow:document.documentElement.scrollWidth>innerWidth}});
   assert(s.y>=110 && s.y+s.h<=844,`Logo outside viewport after scroll ${route}: ${s.y}`);assert(s.nw>0);assert(!s.overflow,`${route} overflow ${width}`);assert(Math.abs(s.w/s.h-s.nw/s.nh)<0.01,'Logo distorted');
   if(width<768){assert(s.w>=199 && s.w<=201);assert(Math.abs(s.x+s.w/2-width/2)<2,'Logo not centered');}
   else assert(Math.abs(s.h-176)<2,'Desktop logo changed');
   const overlaps=await page.evaluate(()=>{const logo=document.querySelector('footer img[alt="Carplus"]')!.getBoundingClientRect();return [...document.querySelectorAll('a,button')].filter(el=>{let p:Element|null=el;let fixed=false;while(p){if(getComputedStyle(p).position==='fixed'){fixed=true;break}p=p.parentElement}const r=el.getBoundingClientRect();return fixed && r.width>0 && r.height>0 && r.left<logo.right && r.right>logo.left && r.top<logo.bottom && r.bottom>logo.top}).map(el=>el.textContent?.trim()||el.getAttribute('aria-label'))});
   assert.equal(overlaps.length,0,`Fixed control overlaps logo: ${overlaps.join(', ')}`);
   await page.screenshot({path:`/tmp/carplus-footer-${width}-${route==='/'?'home':route.startsWith('/blog')?'blog':'service'}.png`});
  }console.log('PASS footer: home/article/service at 360/390/1440px, 200px centered mobile logo, preserved aspect ratio and desktop, no overflow.');
 }finally{await browser.close();await new Promise<void>(r=>server.close(()=>r()))}
}
main().catch(e=>{console.error(e);process.exit(1)});
