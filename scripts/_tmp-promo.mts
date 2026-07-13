import { PROMO_TIRES } from '../src/data/promoTires';
import fs from 'fs';
const out = PROMO_TIRES.slice(0, 5).map((t) => `${t.slug}`).join('\n');
fs.writeFileSync(new URL('./_promo-out.txt', import.meta.url), out || 'EMPTY:' + PROMO_TIRES.length);
