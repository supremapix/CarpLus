#!/usr/bin/env node
// Validação estática dos redirects do vercel.json (E5).
// Verifica: contagem, todos permanentes, sources únicos (sem conflito),
// ausência de cadeias (destino que também é source) e loops.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const config = JSON.parse(fs.readFileSync(path.join(ROOT, 'vercel.json'), 'utf-8'));
const redirects = config.redirects ?? [];

let errors = 0;
const fail = (m) => {
  errors++;
  console.log('  ✗ ' + m);
};
const ok = (m) => console.log('  ✓ ' + m);

console.log('# Validação estática dos redirects (vercel.json)\n');

// 1. Contagem
console.log('1. Contagem');
if (redirects.length === 161) ok(`${redirects.length} redirects (esperado)`);
else fail(`esperado 161, encontrado ${redirects.length}`);

const bairro = redirects.filter((r) => r.source.endsWith('.html'));
const medida = redirects.filter((r) => r.source.includes(':medida'));
const servico = redirects.filter((r) => r.source.startsWith('/servico/'));
const catalog = redirects.filter((r) => ['/catalogo', '/catalogo/'].includes(r.source));
const hosts = redirects.filter((r) => r.has?.some((h) => h.type === 'host'));
const brand = redirects.filter(
  (r) => !r.has && !r.source.endsWith('.html') && !r.source.includes(':medida') && !r.source.startsWith('/servico/') && !catalog.includes(r),
);
const pag = redirects.filter((r) => r.has?.some((h) => h.type === 'query' && h.key === 'page'));
console.log(
  `   grupos → bairros:${bairro.length} medida:${medida.length} marcas:${brand.length} servicos:${servico.length} catálogo:${catalog.length} hosts:${hosts.length} paginação:${pag.length}`,
);
if (bairro.length === 71) ok('71 bairros/cidades');
else fail(`bairros: ${bairro.length}`);
if (medida.length === 1) ok('1 medida dinâmica');
else fail(`medida: ${medida.length}`);
if (brand.length === 6) ok('6 marcas legadas');
else fail(`marcas: ${brand.length}`);
if (servico.length >= 1) ok(`${servico.length} serviço(s) legado(s) (/servico/diagnostico-eletronico → /servico/scanner-automotivo)`);
else fail(`servicos: ${servico.length}`);
if (catalog.length === 2 && catalog.every((r) => !r.has && r.destination === '/pneus')) ok('2 entradas de catálogo para /pneus');
else fail('redirects de catálogo ausentes ou incorretos');
if (hosts.length === 3) ok('3 hosts legados');
else fail(`hosts: ${hosts.length}`);
if (pag.length === 76) ok('76 paginação');
else fail(`paginação: ${pag.length}`);

// 2. Todos permanentes (308 na Vercel)
console.log('\n2. Status permanente (308 na Vercel)');
const notPermanent = redirects.filter((r) => r.permanent !== true);
if (notPermanent.length === 0) ok('todos permanent:true → 308 na Vercel');
else fail(`${notPermanent.length} não são permanentes`);

// 3. Sources únicos (sem conflito). Chave inclui query para paginação.
console.log('\n3. Sources únicos (sem conflito)');
const keyOf = (r) =>
  r.source + '::' + (r.has ?? []).map((h) => `${h.key}=${h.value}`).sort().join('&');
const seen = new Map();
let dup = 0;
for (const r of redirects) {
  const k = keyOf(r);
  if (seen.has(k)) {
    dup++;
    fail(`source duplicado: ${k}`);
  }
  seen.set(k, true);
}
if (dup === 0) ok('nenhum source duplicado');

// 4. Sem cadeias nem loops: nenhum destination pode ser também um source.
console.log('\n4. Sem cadeias / loops (destino nunca é source)');
// Regras condicionais não redirecionam a entrada limpa (ex.: /pneus sem page).
const sourcePaths = new Set(redirects.filter((r) => !r.has?.length).map((r) => r.source.split('?')[0]));
let chains = 0;
for (const r of redirects) {
  const destPath = r.destination.split('?')[0];
  // Ignora parâmetros dinâmicos (ex.: /pneu-medida/:medida) — não são sources.
  if (destPath.includes(':')) continue;
  if (sourcePaths.has(destPath)) {
    chains++;
    fail(`cadeia: destino ${destPath} também é source`);
  }
  if (r.source.split('?')[0] === destPath) {
    fail(`loop direto: ${r.source} → ${r.destination}`);
  }
}
if (chains === 0) ok('nenhuma cadeia ou loop detectado');

// 5. Medida não colide com catálogo/landings de marca
console.log('\n5. Coerência do redirect dinâmico de medida');
const m = medida[0];
// O padrão inclui ([^.]+) para NÃO capturar arquivos estáticos como
// /pneus/bridgestone.webp (imagens dos pneus em promoção).
if (m && m.source === '/pneus/:medida([^.]+)' && m.destination === '/pneu-medida/:medida') {
  ok('/pneus/:medida([^.]+) → /pneu-medida/:medida (1 segmento sem ponto; não afeta /pneus, /pneus-* nem imagens /pneus/*.webp)');
} else {
  fail('redirect de medida inesperado: ' + JSON.stringify(m));
}

console.log('\n' + '='.repeat(50));
if (errors === 0) {
  console.log('RESULTADO: APROVADO (0 erros)');
  process.exit(0);
} else {
  console.log(`RESULTADO: REPROVADO (${errors} erro(s))`);
  process.exit(1);
}
