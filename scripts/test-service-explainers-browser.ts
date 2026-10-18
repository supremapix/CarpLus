import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { listenOnFreePort, resolveShellHtml } from './generate-static-pages';
import { launchBrowser } from './launch-browser';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
const screenshotDir = '/tmp/carplus-service-explainers';
const routes = [
  ['/', 3], ['/servicos', 3], ['/servico/alinhamento-3d', 1],
  ['/servico/alinhamento-e-balanceamento', 2], ['/servico/manutencao-de-freios', 1],
] as const;
const distRoot = path.resolve('dist');
const mimeTypes: Record<string, string> = {
  '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.css':'text/css; charset=utf-8', '.json':'application/json', '.svg':'image/svg+xml',
  '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp',
  '.ico':'image/x-icon', '.woff':'font/woff', '.woff2':'font/woff2',
};

/** Unlike the generation server, QA must serve each real SSG artifact before SPA fallback. */
function createArtifactServer(shell: Buffer): http.Server {
  return http.createServer((request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
      let file = path.resolve(distRoot, `.${pathname}`);
      const relative = path.relative(distRoot, file);
      if (relative.startsWith('..') || path.isAbsolute(relative)) {
        response.writeHead(403); response.end(); return;
      }
      if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
      if (fs.existsSync(file) && fs.statSync(file).isFile()) {
        response.writeHead(200, { 'Content-Type':mimeTypes[path.extname(file)] ?? 'application/octet-stream', 'Cache-Control':'no-store' });
        response.end(request.method === 'HEAD' ? undefined : fs.readFileSync(file)); return;
      }
      // Missing assets must fail rather than masquerading as successful HTML.
      if (path.extname(pathname)) { response.writeHead(404); response.end(); return; }
      response.writeHead(200, { 'Content-Type':'text/html; charset=utf-8', 'Cache-Control':'no-store' });
      response.end(request.method === 'HEAD' ? undefined : shell);
    } catch { response.writeHead(400); response.end(); }
  });
}

async function main() {
  fs.mkdirSync(screenshotDir, { recursive: true });
  const shell = resolveShellHtml();
  const server = createArtifactServer(shell);
  const origin = `http://127.0.0.1:${await listenOnFreePort(server)}`;
  let browser: Awaited<ReturnType<typeof launchBrowser>> | undefined;
  const errors: string[] = [];
  let assertions = 0;
  function check(condition: unknown, message: string) { assert(condition, message); assertions++; }
  try {
    // Fail before browser work if a route is silently receiving the home shell instead of its artifact.
    const generatedRoutes: typeof routes[number][] = [];
    for (const route of routes) {
      const file = path.join(distRoot, route[0].replace(/^\//, ''), 'index.html');
      const expected = fs.existsSync(file) ? fs.readFileSync(file) : shell;
      const response = await fetch(`${origin}${route[0]}`);
      check(response.status === 200, `${route[0]}: HTTP 200`);
      check(Buffer.from(await response.arrayBuffer()).equals(expected), `${route[0]}: response exactly matches its artifact or genuine SPA fallback`);
      if (fs.existsSync(file) && /data-prerendered/.test(expected.toString())) generatedRoutes.push(route);
    }
    const fallback = await fetch(`${origin}/__service_explainer_missing_route__`);
    check(Buffer.from(await fallback.arrayBuffer()).equals(shell), 'missing route uses preserved SPA shell, not generated home');
    check((await fetch(`${origin}/assets/__missing__.js`)).status === 404, 'missing asset cannot return successful home HTML');
    browser = await launchBrowser();
    const page = await browser.newPage();
    page.on('pageerror', error => errors.push(String(error)));
    await page.setRequestInterception(true);
    page.on('request', request => request.url().startsWith(origin) || request.url().startsWith('data:') ? request.continue() : request.abort());
    // Read SSG directly with page JavaScript disabled before testing client remount/interaction.
    if (generatedRoutes.length) {
      await page.setJavaScriptEnabled(false);
      for (const [route, count] of generatedRoutes) {
        await page.goto(`${origin}${route}`, {waitUntil:'domcontentloaded'});
        check(await page.$$eval('.service-explainer', els=>els.length) === count, `${route}: exact diagrams present in original SSG without JS`);
        check(await page.$$eval('.se-summary', els=>els.every(el=>el.textContent!.length>60)), `${route}: original SSG explanations readable without JS`);
      }
      await page.setJavaScriptEnabled(true);
    }
    console.log(`Artifact coverage: ${generatedRoutes.length}/${routes.length} routes served original generated HTML; others used SPA fallback.`);
    // Reduced motion also stabilizes screenshots without hiding essential diagram information.
    await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
    for (const width of [320, 390, 768, 1440]) {
      await page.setViewport({width,height:900});
      for (const [route, count] of routes) {
        await page.goto(`${origin}${route}`,{waitUntil:'networkidle0'});
        await page.waitForSelector('.service-explainer');
        const state = await page.evaluate(() => {
          const figures = [...document.querySelectorAll<HTMLElement>('.service-explainer')];
          return {
            overflow: document.documentElement.scrollWidth > innerWidth,
            h1: document.querySelectorAll('h1').length,
            figures: figures.map(figure => {
              const svg = figure.querySelector('svg')!;
              const button = figure.querySelector<HTMLButtonElement>('button')!;
              const motion = [...figure.querySelectorAll('.se-motion')];
              return {
                active: figure.dataset.active,
                running: figure.dataset.running,
                text: figure.textContent,
                nested: !!button.closest('a'),
                disabled: button.disabled,
                buttonHeight: button.getBoundingClientRect().height,
                svgWidth: svg.getBoundingClientRect().width,
                containerWidth: figure.getBoundingClientRect().width,
                animations: motion.map(el => getComputedStyle(el).animationName),
                titleExists: !!document.getElementById(svg.getAttribute('aria-labelledby')!),
                descriptionExists: !!document.getElementById(svg.getAttribute('aria-describedby')!),
              };
            }),
            duplicateIds: [...document.querySelectorAll('[id]')].map(el=>el.id).filter((id,i,all)=>all.indexOf(id)!==i),
          };
        });
        check(!state.overflow, `${route} ${width}px: no overflow`);
        check(state.h1 === 1, `${route} ${width}px: H1 preserved`);
        check(state.figures.length === count, `${route} ${width}px: expected diagram count`);
        check(state.duplicateIds.length === 0, `${route} ${width}px: unique document IDs`);
        for (const figure of state.figures) {
          check(figure.active === 'false' && figure.running === 'false', `${route}: reduced motion is static`);
          check(figure.animations.every(name=>name==='none'), `${route}: CSS motion fully disabled`);
          check(figure.disabled && !figure.nested && figure.buttonHeight >= 44, `${route}: safe native touch control`);
          check(figure.svgWidth <= figure.containerWidth, `${route}: diagram fits container`);
          check(figure.titleExists && figure.descriptionExists && figure.text?.includes('Esquema ilustrativo'), `${route}: semantic description and visible label`);
        }
        if ((width===390 || width===1440) && (route==='/' || route==='/servico/manutencao-de-freios' || route==='/servico/alinhamento-e-balanceamento')) {
          await page.$eval('.service-explainer', el=>el.scrollIntoView({block:'center',behavior:'instant'}));
          await sleep(150);
          await page.screenshot({path:`${screenshotDir}/${route === '/' ? 'home' : route.split('/').at(-1)}-${width}.png`});
        }
      }
    }
    // New document: all figures below the fold must remain idle until visible.
    await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'no-preference'}]);
    await page.setViewport({width:390,height:844});
    await page.goto(origin,{waitUntil:'networkidle0'});
    await page.waitForSelector('.service-explainer');
    check((await page.$$eval('.service-explainer', els=>els.map(el=>(el as HTMLElement).dataset.phase))).every(p=>p==='idle'), 'no offscreen autoplay');
    const selector = '.service-explainer[data-explainer="alignment"]';
    await page.$eval(selector, el=>el.scrollIntoView({block:'center',behavior:'instant'}));
    await page.waitForFunction(s=>document.querySelector<HTMLElement>(s)?.dataset.running==='true',{},selector);
    const getPhase = () => page.$eval(selector, el=>(el as HTMLElement).dataset.phase);
    const getTransform = () => page.$eval(`${selector} .se-align-left`, el=>getComputedStyle(el).transform);
    const before = await getTransform(); await sleep(1800); const after = await getTransform();
    check(before !== after, 'SVG actually changes in normal motion');
    const sizeBefore = await page.$eval(selector, el=>({width:el.getBoundingClientRect().width,height:el.getBoundingClientRect().height}));
    const button = `${selector} button`;
    await page.focus(button); await page.keyboard.press('Enter');
    check(await getPhase()==='paused', 'Enter pauses');
    // Allow the compositor to apply the paused play-state before sampling transforms.
    await sleep(80);
    const paused = await getTransform(); await sleep(350);
    check(paused===await getTransform(), `pause holds visual state (${paused} vs ${await getTransform()})`);
    check(await page.$eval(button, el=>document.activeElement===el), 'focus stays on playback control');
    await page.$eval('h1', el=>el.scrollIntoView({block:'start',behavior:'instant'}));
    await sleep(150);
    await page.$eval(selector, el=>el.scrollIntoView({block:'center',behavior:'instant'}));
    await sleep(150);
    check(await getPhase()==='paused', 'scroll does not override manual pause');
    await page.focus(button); await page.keyboard.press('Space');
    check(await getPhase()==='playing', 'Space resumes');
    await page.evaluate(()=>{ Object.defineProperty(document,'hidden',{configurable:true,value:true}); document.dispatchEvent(new Event('visibilitychange')); });
    await sleep(100);
    check(await page.$eval(selector, el=>(el as HTMLElement).dataset.running)==='false', 'hidden document suspends playback');
    const hidden = await getTransform(); await sleep(300);
    check(hidden===await getTransform(), 'hidden document preserves motion position');
    await page.evaluate(()=>{ delete (document as unknown as {hidden?:boolean}).hidden; document.dispatchEvent(new Event('visibilitychange')); });
    await page.waitForFunction(s=>document.querySelector<HTMLElement>(s)?.dataset.phase==='complete',{timeout:9000},selector);
    const sizeAfter = await page.$eval(selector, el=>({width:el.getBoundingClientRect().width,height:el.getBoundingClientRect().height}));
    check(JSON.stringify(sizeBefore)===JSON.stringify(sizeAfter), 'play/pause/complete does not change component size');
    await page.$eval('h1', el=>el.scrollIntoView({block:'start',behavior:'instant'})); await sleep(150);
    await page.$eval(selector, el=>el.scrollIntoView({block:'center',behavior:'instant'})); await sleep(150);
    check(await getPhase()==='complete', 'no repeat on scroll after completion');
    await page.click(button); check(await getPhase()==='playing', 'explicit replay works');
    await page.click(button); await page.click(button); await page.click(button);
    check(await getPhase()==='paused', 'repeated clicks leave coherent paused state');
    await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]); await sleep(150);
    check(await getPhase()==='complete' && await page.$eval(`${selector} .se-align-left`,el=>getComputedStyle(el).animationName)==='none', 'live reduced-motion update stops and restores static scene');
    // Mobile native button responds to touch, too.
    await page.setViewport({width:390,height:844,hasTouch:true,isMobile:true});
    await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'no-preference'}]);
    await page.goto(`${origin}/servico/manutencao-de-freios`,{waitUntil:'networkidle0'});
    await page.$eval('.service-explainer',el=>el.scrollIntoView({block:'center',behavior:'instant'}));
    await page.waitForFunction(()=>document.querySelector<HTMLElement>('.service-explainer')?.dataset.running==='true');
    await page.tap('.se-control'); check(await page.$eval('.service-explainer',el=>(el as HTMLElement).dataset.phase)==='paused', 'touch pauses');
    await page.tap('.se-control'); check(await page.$eval('.service-explainer',el=>(el as HTMLElement).dataset.phase)==='playing', 'touch resumes');
    // SPA navigation away/back removes old observers/timers and does not leak duplicate diagrams.
    await page.goto(`${origin}/servico/troca-de-oleo`,{waitUntil:'networkidle0'});
    check(await page.$$eval('.service-explainer',els=>els.length)===0, 'unrelated service has no diagram');
    await page.goBack({waitUntil:'networkidle0'});
    check(await page.$$eval('.service-explainer',els=>els.length)===1, 'back navigation restores exactly one diagram');
    // Capture real early/late states for all three drawings, not just static screenshots.
    await page.setViewport({width:1440,height:1000,hasTouch:false,isMobile:false});
    await page.goto(origin,{waitUntil:'networkidle0'});
    await page.$eval('.service-explainer',el=>el.scrollIntoView({block:'center',behavior:'instant'}));
    await page.waitForFunction(()=>[...document.querySelectorAll<HTMLElement>('.service-explainer')].every(el=>el.dataset.running==='true'));
    await sleep(650);
    const motionSelectors = ['.se-align-left','.se-balance-spin','.se-brake-spin'];
    const early = await page.evaluate(selectors=>selectors.map(s=>getComputedStyle(document.querySelector(s)!).transform),motionSelectors);
    await page.screenshot({path:`${screenshotDir}/home-motion-early-1440.png`});
    await sleep(2850);
    const late = await page.evaluate(selectors=>selectors.map(s=>getComputedStyle(document.querySelector(s)!).transform),motionSelectors);
    check(early.every((value,i)=>value!==late[i]), 'all three diagrams visibly transform during playback');
    await page.screenshot({path:`${screenshotDir}/home-motion-late-1440.png`});
    // Production generation guard: visible diagrams must remain static for snapshots.
    await page.evaluateOnNewDocument(()=>{ (window as unknown as {__STATIC_RENDER__:boolean}).__STATIC_RENDER__=true; });
    await page.goto(`${origin}/servico/alinhamento-e-balanceamento`,{waitUntil:'networkidle0'});
    await page.$eval('.service-explainer',el=>el.scrollIntoView({block:'center',behavior:'instant'}));
    await sleep(300);
    check(await page.$$eval('.service-explainer',els=>els.every(el=>(el as HTMLElement).dataset.active==='false' && el.querySelector('button')?.disabled)), 'static generator never starts visible diagrams');
    const snapshot = await page.content();
    await page.setJavaScriptEnabled(false);
    await page.setContent(snapshot,{waitUntil:'domcontentloaded'});
    check(await page.$$eval('.service-explainer',els=>els.length)===2, 'static snapshot preserves both diagrams without page JS');
    check(await page.$$eval('.se-summary',els=>els.every(el=>el.textContent!.length>60)), 'static snapshot retains useful explanations without page JS');
    await page.screenshot({path:`${screenshotDir}/static-no-javascript-1440.png`});
    check(errors.length===0, `no browser errors: ${errors.join('\n')}`);
    console.log(`PASS: ${assertions} browser assertions; five routes × four widths; reduced/live motion, keyboard, touch, pause, hidden document, repeated clicks, completion/replay, stable size, routing and errors. Screenshots: ${screenshotDir}`);
  } finally { await browser?.close(); await new Promise<void>(resolve=>server.close(()=>resolve())); }
}
main().catch(error=>{ console.error(error); process.exitCode=1; });
