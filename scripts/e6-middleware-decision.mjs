#!/usr/bin/env node
// Valida a LÓGICA DE DECISÃO real do middleware.js (código puro, sem rede).
// Objetivo E6.5: entender exatamente o que acontece no edge para bots vs humanos
// vs assets, e provar a interação middleware × páginas físicas E6 × Prerender.io.
//
// Estratégia: importamos o middleware real e injetamos um `fetch` mockado que
// NÃO faz rede — apenas registra se foi chamado e devolve uma resposta simulada.
// `return undefined` do middleware = "seguir a cadeia normal (filesystem/SPA)".
import assert from 'node:assert';

const mod = await import('../middleware.js');
const middleware = mod.default;

function makeReq(pathname, userAgent) {
  return {
    url: `https://www.carpluspneuseoficina.com.br${pathname}`,
    headers: { get: (k) => (k.toLowerCase() === 'user-agent' ? userAgent : null) },
  };
}

const GOOGLEBOT =
  'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)';
const HUMAN =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36';

let prerenderCalls = [];
const realFetch = globalThis.fetch;
globalThis.fetch = async (u) => {
  prerenderCalls.push(String(u));
  return {
    ok: true,
    status: 200,
    headers: { get: () => 'text/html; charset=utf-8' },
    text: async () => '<html><head><title>prerendered</title></head><body>bot</body></html>',
  };
};

const cases = [
  // [descrição, path, UA, esperaPrerender, esperaFallthrough]
  ['Humano em página de produto', '/pneu-medida/175-65r14', HUMAN, false, true],
  ['Humano na home', '/', HUMAN, false, true],
  ['Bot em página de produto', '/pneu-medida/175-65r14', GOOGLEBOT, true, false],
  ['Bot na home', '/', GOOGLEBOT, true, false],
  ['Bot em landing de serviço', '/servicos', GOOGLEBOT, true, false],
  ['Bot pedindo asset .js', '/assets/app-abc123.js', GOOGLEBOT, false, true],
  ['Bot pedindo sitemap.xml', '/sitemap.xml', GOOGLEBOT, false, true],
  ['Bot pedindo robots.txt', '/robots.txt', GOOGLEBOT, false, true],
  ['Bot em /images/foto.png', '/images/foto.png', GOOGLEBOT, false, true],
];

const withToken = process.env.PRERENDER_TOKEN ? 'COM token' : 'SEM token';
console.log(`[e6-mw] Avaliando decisão do middleware (${withToken})\n`);

let pass = 0;
let fail = 0;
for (const [desc, pathname, ua, expectPrerender, expectFallthrough] of cases) {
  prerenderCalls = [];
  const result = await middleware(makeReq(pathname, ua));
  const didFallthrough = result === undefined;
  const didPrerender = prerenderCalls.length > 0;

  // Sem token, mesmo bots caem no fallthrough (SPA) — refletimos isso.
  const tokenPresent = !!process.env.PRERENDER_TOKEN;
  const effExpectPrerender = expectPrerender && tokenPresent;
  const effExpectFallthrough = expectPrerender && !tokenPresent ? true : expectFallthrough;

  const ok =
    didPrerender === effExpectPrerender && didFallthrough === effExpectFallthrough;
  if (ok) pass++;
  else fail++;
  console.log(
    `  ${ok ? 'OK ' : 'XX '} ${desc}\n       prerender=${didPrerender} (esp ${effExpectPrerender}) | fallthrough=${didFallthrough} (esp ${effExpectFallthrough})`,
  );
}

globalThis.fetch = realFetch;

console.log(`\n[e6-mw] ${pass} passaram, ${fail} falharam`);
console.log(
  '\n[e6-mw] CONCLUSÃO-CHAVE: para BOTS em rotas de página, o middleware reescreve',
);
console.log(
  '        para o Prerender.io ANTES de chegar ao filesystem — logo, as 1.512',
);
console.log(
  '        páginas físicas da E6 NÃO são servidas a bots enquanto o middleware',
);
console.log(
  '        estiver ativo. Elas beneficiam humanos (FS/200) e ficam prontas para',
);
console.log('        substituir o Prerender.io na etapa final (remoção do middleware).');

process.exit(fail === 0 ? 0 : 1);
