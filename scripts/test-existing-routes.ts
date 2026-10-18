// Regressões locais, após build:deploy ou build:spa + geração essencial.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { getEssentialExistingRoutes, getLegacyServiceRoutes, validateEssentialExistingHtml } from './essential-existing-routes';
import { getManualRedirects, redirectKey } from './manual-redirects';
import { getStaticRoutes } from './static-routes';
import { getShellTitle, outputFileFor, resolveShellHtml } from './generate-static-pages';

const routes = getEssentialExistingRoutes();
const indexed = getStaticRoutes();
assert.deepEqual(getLegacyServiceRoutes().map(route => route.path).sort(), [
  '/servico/loja-de-pneus', '/servico/suspensao-e-freios', '/servico/ar-condicionado',
  '/servico/manutencao-motor', '/servico/correia-dentada',
].sort(), 'lote delimitado aos cinco serviços existentes, sem novos aliases');
assert.equal(routes.length, 6, 'cinco serviços e uma página regional');
assert.equal(indexed.filter(route => route.type === 'servico').length, 40);
const sitemap = fs.readFileSync('public/sitemap-servicos.xml', 'utf8');
for (const route of routes) {
  assert(!indexed.some(indexable => indexable.path === route.path), 'sitemap não ampliado');
  assert(!sitemap.includes(`<loc>${route.expectedCanonical}</loc>`), `${route.path} fora do sitemap`);
  assert.equal(outputFileFor(route), outputFileFor({ ...route, path: `${route.path}/` }), 'barra final resolve ao mesmo index.html');
}
const config = JSON.parse(fs.readFileSync('vercel.json', 'utf8'));
const manual = getManualRedirects();
for (const source of ['/catalogo', '/catalogo/']) {
  const expected = { source, destination: '/pneus', permanent: true };
  assert.deepEqual(manual.find(rule => rule.source === source), expected);
  assert.deepEqual(config.redirects.filter(rule => rule.source === source), [expected]);
}
assert(!manual.some(rule => rule.source === '/pneus' && !rule.has), 'destino limpo não redireciona novamente');
assert.equal(new Set(config.redirects.map(redirectKey)).size, config.redirects.length);
assert.equal(config.redirects.filter(rule => rule.has?.some(condition => condition.type === 'query' && condition.key === 'page')).length, 76);
for (const source of ['/servico/diagnostico-eletronico', '/servico/diagnostico-eletronico/']) {
  assert.equal(manual.find(rule => rule.source === source)?.destination, '/servico/scanner-automotivo');
}
function walk(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : /\.[jt]sx?$/.test(file) ? [file] : [];
  });
}
for (const file of walk('src')) {
  const source = fs.readFileSync(file, 'utf8').replace(/<Route path="\/catalogo"[^\n]*/g, '');
  assert(!/['"]\/catalogo\/?['"]/.test(source), `${file}: link interno deve apontar ao destino direto`);
}
assert(!fs.readFileSync('scripts/generate-sitemap.cjs', 'utf8').includes("url: '/catalogo'"), 'gerador histórico também usa destino direto');
const shell = resolveShellHtml();
const shellTitle = getShellTitle(shell);
for (const route of routes) {
  const html = fs.readFileSync(outputFileFor(route), 'utf8');
  assert.deepEqual(validateEssentialExistingHtml(route, html, shellTitle), [], route.path);
  for (const [label, broken] of [
    ['shell SPA', shell.toString()],
    ['canonical da home', html.replace(`href="${route.expectedCanonical}"`, 'href="https://www.carpluspneuseoficina.com.br/"')],
    ['canonical duplicada', html.replace('</head>', `<link rel="canonical" href="${route.expectedCanonical}"></head>`)],
    ['noindex indevido', html.replace('name="robots" content="index, follow', 'name="robots" content="noindex, follow')],
    ['sem prerender', html.replace('data-prerendered="true"', '')],
    ['H1 ausente', html.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/i, '')],
    ['conteúdo incompleto', html.replace(/<section\b[^>]*>[\s\S]*?<\/section>/gi, '')],
  ]) assert(validateEssentialExistingHtml(route, broken, shellTitle).length, `${route.path}: rejeitar ${label}`);
}

// Executa a orquestração real com subprocessos simulados: não inicia snapshot
// global. Prova ambos os ramos e fail-closed dos passos essenciais, inclusive
// após falha do snapshot opcional. O teste browser cobre os arquivos reais.
const buildSource = fs.readFileSync('scripts/build-deploy.mjs', 'utf8').replace(/^import .*;\n/gm, '');
const generate = 'npm run generate:static:existing-pages';
const validate = 'npm run validate:static:existing-pages';
function runBuild(flag: string, fail?: string) {
  const calls: string[] = [];
  let exit = 0;
  const files = new Map([[path.join(process.cwd(), 'dist/index.html'), shell.toString()]]);
  try {
    vm.runInNewContext(buildSource, {
      spawnSync: (command: string) => { calls.push(command); return { status: command === fail ? 9 : 0 }; },
      fs: { existsSync: (file: string) => files.has(file), readFileSync: (file: string) => files.get(file), writeFileSync: (file: string, value: string) => files.set(file, value) },
      path,
      process: { env: { GENERATE_STATIC: flag }, cwd: () => process.cwd(), exit: (code: number) => { exit = code; throw new Error('expected build exit'); } },
      console: { log() {}, warn() {}, error() {} },
    });
  } catch (error) { if (!exit) throw error; }
  return { calls, exit };
}
for (const flag of ['0', '1']) {
  const success = runBuild(flag);
  assert.equal(success.exit, 0);
  assert(success.calls.includes(generate));
  assert.equal(success.calls.at(-1), validate);
  assert.equal(success.calls.includes('npm run generate:static:all'), flag === '1');
  assert.equal(runBuild(flag, generate).exit, 9, 'geração essencial deve abortar deploy');
  assert.equal(runBuild(flag, validate).exit, 9, 'validação final deve abortar deploy');
}
const optionalFailure = runBuild('1', 'npm run generate:static:all');
assert.equal(optionalFailure.exit, 0);
assert.equal(optionalFailure.calls.at(-1), validate, 'falha global não pode pular validação essencial');
assert(!optionalFailure.calls.includes('npm run validate:static:all'));
console.log('PASS: seis rotas, sitemap preservado, redirects, links diretos, HTML completo, controles negativos e build com flag 0/1 (orquestração simulada).');
