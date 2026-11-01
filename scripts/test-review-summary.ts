import assert from 'node:assert/strict';
import { GOOGLE_REVIEW_SUMMARY as reviews } from '../src/data/reviewSummary';
import { RATING_VALUE, REVIEW_COUNT } from '../src/data/oficinaMarcas';
import fs from 'node:fs';
assert.equal(reviews.rating,4.9); assert.equal(reviews.count,271);
assert.equal(reviews.checkedDate,'2026-11-01');
assert.equal(reviews.source,'https://maps.google.com/maps?cid=11894120831274747055');
assert.equal(RATING_VALUE,reviews.rating); assert.equal(REVIEW_COUNT,reviews.count);
for (const file of ['HomeTrust','ReviewsHeader','CompararAnunciosPneus']) {
 const source=fs.readFileSync(`src/components/${file}.tsx`,'utf8');
 assert.ok(source.includes('reviewSummary')); assert.ok(!source.includes('262 avaliações'));
}
console.log('PASS: verified dated Google review summary is centralized and reused.');
