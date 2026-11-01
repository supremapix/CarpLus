import assert from 'node:assert/strict';
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
const baseline=execFileSync('git',['show','fb6ade57b438b3b3ab799edd3423439c3db19851:src/components/Reviews.tsx'],{encoding:'utf8'});
const originalArray=baseline.split('const ALL_REVIEWS = [')[1].split('\n];')[0];
const current=fs.readFileSync('src/components/Reviews.tsx','utf8');
assert.ok(current.includes(originalArray),'Existing literal reviews must remain unchanged');
const verified=JSON.parse(fs.readFileSync('src/data/googleReviewsVerified.json','utf8'));
assert.equal(verified.reviews.length,3);
for(const review of verified.reviews){assert.ok(review.textIsComplete && review.missingFromExistingCorpus && review.source.startsWith('https://www.google.com/maps/'));assert.ok(!originalArray.includes(review.name));assert.equal(review.stars,5);}
assert.ok(current.includes('verifiedGoogleReviews.reviews.map'));
console.log('PASS: existing Google review corpus verbatim preserved, only three verified missing originals imported with provenance.');
