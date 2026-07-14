// E8 — Valida o HTML FÍSICO que um bot receberia quando PRERENDER_ENABLED=false.
// Com o kill-switch, o middleware deixa o bot cair no filesystem, então o HTML
// servido é exatamente o gerado no build (SSG). Este script busca uma amostra de
// rotas por tipo, extrai os sinais de SEO e emite um CSV de comparação.
import { writeFileSync } from 'node:fs';

const BASE = process.env.BASE || 'http://localhost:4700';
const BOT_UA = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';

const ROUTES = [
  ['home', '/'],
  ['catalogo-pneus', '/pneus'],
  ['servicos', '/servicos'],
  ['produto-medida', '/pneu-medida/175-65r14'],
  ['institucional-quem-somos', '/quem-somos'],
  ['contato', '/contato'],
];

function pick(re, html) {
  const m = html.match(re);
  return m ? m[1].trim().replace(/\s+/g, ' ') : '';
}

function analyze(html) {
  const title = pick(/<title>([^<]*)<\/title>/i, html);
  const description = pick(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i, html);
  const canonical = pick(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i, html);
  const h1 = pick(/<h1[^>]*>([\s\S]*?)<\/h1>/i, html).replace(/<[^>]+>/g, '');
  const ogTitle = pick(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']*)["']/i, html);
  const ogImage = pick(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']*)["']/i, html);
  const twitterCard = pick(/<meta[^>]+name=["']twitter:card["'][^>]+content=["']([^"']*)["']/i, html);
  const jsonLdCount = (html.match(/application\/ld\+json/gi) || []).length;
  const hasBreadcrumb = /BreadcrumbList/.test(html);
  const hasFaq = /FAQPage|"Question"/.test(html);
  const internalLinks = (html.match(/<a\s[^>]*href=["']\//gi) || []).length;
  const images = (html.match(/<img\s/gi) || []).length;
  const prerenderedAttr = /data-prerendered=["']true["']/.test(html);
  return { title, description, canonical, h1, ogTitle, ogImage, twitterCard, jsonLdCount, hasBreadcrumb, hasFaq, internalLinks, images, prerenderedAttr };
}

const rows = [];
const header = ['tipo','rota','status','bytes','title','description_len','canonical','h1','og_title','og_image','twitter_card','jsonld_blocks','breadcrumb','faq','internal_links','images','data_prerendered'];
rows.push(header.join(','));

let allOk = true;
for (const [tipo, rota] of ROUTES) {
  try {
    const res = await fetch(BASE + rota, { headers: { 'User-Agent': BOT_UA } });
    const html = await res.text();
    const a = analyze(html);
    const csv = (v) => '"' + String(v).replace(/"/g, '""') + '"';
    rows.push([
      tipo, rota, res.status, html.length, csv(a.title), a.description.length, csv(a.canonical),
      csv(a.h1), csv(a.ogTitle), csv(a.ogImage), a.twitterCard, a.jsonLdCount,
      a.hasBreadcrumb, a.hasFaq, a.internalLinks, a.images, a.prerenderedAttr,
    ].join(','));
    const ok = res.status === 200 && a.title && a.canonical && a.h1 && a.jsonLdCount > 0;
    if (!ok) allOk = false;
    console.log(`${ok ? 'OK ' : 'XX '} ${tipo.padEnd(24)} status=${res.status} title="${a.title.slice(0,40)}" canonical=${a.canonical ? 'sim' : 'NAO'} h1=${a.h1 ? 'sim' : 'NAO'} jsonld=${a.jsonLdCount} og=${a.ogTitle ? 'sim' : 'nao'} tw=${a.twitterCard || 'nao'} bc=${a.hasBreadcrumb} links=${a.internalLinks} imgs=${a.images}`);
  } catch (e) {
    allOk = false;
    console.log(`XX ${tipo} ERRO: ${e.message}`);
    rows.push([tipo, rota, 'ERRO', 0, '', 0, '', '', '', '', '', 0, false, false, 0, 0, false].join(','));
  }
}

writeFileSync('reports/e8-bot-comparison.csv', rows.join('\n') + '\n');
console.log('\nCSV escrito em reports/e8-bot-comparison.csv');
console.log('RESULTADO:', allOk ? 'TODAS AS ROTAS OK' : 'HOUVE FALHAS');
process.exit(allOk ? 0 : 1);
