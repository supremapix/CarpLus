import assert from 'node:assert/strict';
import { generateRoutes, preserveShellBackup } from './generate-static-pages';
preserveShellBackup();
const route='/suspensao-4x4-curitiba';
const result=(await generateRoutes([{ path:route, type:'institucional', expectJsonLd:true }]))[0];
assert.equal(result.result.status,'ok',JSON.stringify(result.result));
assert.equal(result.result.canonical,'https://www.carpluspneuseoficina.com.br'+route);
assert(result.html?.includes('CP4X4-001') && result.html?.includes('CP4X4-202'));
assert(result.html?.includes('G-VHK6RGQ6SH'));
assert(!result.html?.includes('https://www.instagram.com/reel/Dfrqw4itmjx/embed/'));
console.log(JSON.stringify({status:result.result.status, canonical:result.result.canonical, filename:result.outputFile, bytes:Buffer.byteLength(result.html??'')}));

