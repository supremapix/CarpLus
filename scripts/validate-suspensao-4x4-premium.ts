import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { SUSPENSAO_4X4 } from '../src/data/suspensao4x4';
import { SUSPENSION_PREMIUM } from '../src/data/suspensao4x4Premium';

const scope = SUSPENSAO_4X4.filter(item => item.brand === 'Ironman' || item.ref === 'CP4X4-062');
assert.equal(scope.length, 115);
assert.equal(Object.keys(SUSPENSION_PREMIUM).length, 115);
let photos = 0;
let galleries = 0;
let documented = 0;
for (const item of scope) {
  const row = SUSPENSION_PREMIUM[item.ref.toLowerCase()] ?? SUSPENSION_PREMIUM[item.ref];
  assert(row, 'Missing premium data: ' + item.ref);
  assert.equal(row.sourceVerified, true, 'Supplier match not verified: ' + item.ref);
  const gallery = row.gallery || [];
  assert(gallery.length, 'No verified product image: ' + item.ref);
  assert.equal(gallery.length, new Set(gallery).size, 'Duplicate image URL: ' + item.ref);
  photos += gallery.length;
  if (gallery.length > 1) galleries++;
  if (row.specs?.length) documented++;
  for (const url of gallery) {
    assert(url.startsWith('/images/suspensao-4x4/'), 'Nonlocal image: ' + url);
    assert(url.includes(item.ref.toLowerCase()), 'Incorrect SKU filename: ' + url);
    const image = fs.readFileSync(path.join('public', url));
    assert(image.length > 800, 'Empty image: ' + url);
    assert(image.subarray(0, 4).toString() === 'RIFF' && image.subarray(8, 12).toString() === 'WEBP', 'Non-WebP asset: ' + url);
  }
}
assert.equal(SUSPENSION_PREMIUM['cp4x4-062']?.gallery?.length, 4);
assert(SUSPENSION_PREMIUM['cp4x4-062']?.specs?.some(s => s.value.includes('1,5 pol.') && s.value.includes('2 pol.')));
console.log({ products: scope.length, photos, galleries, documented });
