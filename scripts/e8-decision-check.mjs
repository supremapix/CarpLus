import mw from '../middleware.js';
const cases = [
  ['Googlebot page', 'Mozilla/5.0 (compatible; Googlebot/2.1)', 'https://x.com/pneus'],
  ['Bingbot page', 'Mozilla/5.0 (compatible; bingbot/2.0)', 'https://x.com/pneu-medida/175-65r14'],
  ['facebookexternalhit', 'facebookexternalhit/1.1', 'https://x.com/servicos'],
  ['Twitterbot', 'Twitterbot/1.0', 'https://x.com/'],
  ['Humano', 'Mozilla/5.0 (Windows NT 10.0) Chrome/120', 'https://x.com/pneus'],
  ['asset (bot)', 'Googlebot/2.1', 'https://x.com/assets/app.js'],
];
async function run(label){
  let fetched=false;
  global.fetch = async () => { fetched=true; return { ok:true, status:200, headers:{get:()=>'text/html'}, text: async()=>'<html>prerendered</html>' }; };
  console.log('### '+label+' (PRERENDER_ENABLED='+(process.env.PRERENDER_ENABLED??'<unset>')+', PRERENDER_TOKEN='+(process.env.PRERENDER_TOKEN?'set':'unset')+')');
  for (const [name, ua, href] of cases){
    fetched=false;
    const req = { headers: { get: (h)=> h==='user-agent'?ua:null }, url: href };
    const res = await mw(req);
    const outcome = res ? 'PRERENDER (Response '+res.status+')' : 'FALLTHROUGH (HTML fisico/SPA)';
    console.log(`  ${name.padEnd(22)} -> ${outcome}${fetched?' [chamou prerender.io]':''}`);
  }
}
await run(process.argv[2]);
