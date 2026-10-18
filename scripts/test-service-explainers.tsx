import assert from 'node:assert/strict';
import fs from 'node:fs';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import HomeServicesCompact from '../src/components/HomeServicesCompact';
import { ServiceExplainer, ServiceExplainerSection, ServiceCardExplainer } from '../src/components/service-explainers/ServiceExplainer';
import { INITIAL_PLAYBACK, EXPLAINER_DURATION_MS, playbackReducer, isPlaybackRunning, type PlaybackState } from '../src/components/service-explainers/playback';
import { SERVICE_EXPLAINERS, SERVICE_EXPLAINER_ROUTES, getServiceExplainers, getCardExplainer, type ServiceExplainerKind } from '../src/data/serviceExplainers';
import { getServiceBySlug } from '../src/data/services';

let assertions = 0;
function check(condition: unknown, message: string) { assert(condition, message); assertions++; }
const environment = { type: 'environment', reducedMotion: false, pageVisible: true } as const;
let state: PlaybackState = playbackReducer(INITIAL_PLAYBACK, environment);
check(state.phase === 'idle' && !isPlaybackRunning(state), 'no autoplay before entering viewport');
state = playbackReducer(state, {type:'viewport',inView:true});
check(isPlaybackRunning(state), 'visible diagram starts once');
state = playbackReducer(state, {type:'toggle'});
check(state.phase === 'paused' && !isPlaybackRunning(state), 'pause stops motion');
state = playbackReducer(state, {type:'viewport',inView:false});
state = playbackReducer(state, {type:'viewport',inView:true});
check(state.phase === 'paused', 'scroll never overrides manual pause');
state = playbackReducer(state, {type:'toggle'});
check(isPlaybackRunning(state), 'resume works');
state = playbackReducer(state, {type:'visibility',pageVisible:false});
check(!isPlaybackRunning(state) && state.phase === 'playing', 'hidden tab suspends without resetting');
state = playbackReducer(state, {type:'visibility',pageVisible:true});
check(isPlaybackRunning(state), 'tab visibility resumes remaining sequence');
state = playbackReducer(state, {type:'viewport',inView:false});
check(!isPlaybackRunning(state), 'outside viewport suspends');
state = playbackReducer(state, {type:'viewport',inView:true});
state = playbackReducer(state, {type:'finish',run:state.run});
check(state.phase === 'complete', 'sequence finishes');
state = playbackReducer(state, {type:'viewport',inView:false});
state = playbackReducer(state, {type:'viewport',inView:true});
check(state.phase === 'complete' && !isPlaybackRunning(state), 'completed diagram never replays on scroll');
state = playbackReducer(state, {type:'toggle'});
check(state.run === 1 && isPlaybackRunning(state), 'explicit replay has fresh identity');
state = playbackReducer(state, {type:'finish',run:0});
check(state.phase === 'playing', 'stale timeout cannot finish newer replay');
state = playbackReducer(state, {type:'environment',reducedMotion:true,pageVisible:true});
check(state.phase === 'complete' && !isPlaybackRunning(state), 'live reduced-motion preference stops all movement');
const reduced = state;
state = playbackReducer(state, {type:'toggle'});
check(state === reduced, 'reduced motion cannot be overridden by playback');
state = playbackReducer(state, environment);
check(state.phase === 'complete', 'removing reduced-motion preference does not restart automatically');
check(!isPlaybackRunning(playbackReducer(INITIAL_PLAYBACK, {type:'toggle'})), 'unsupported/static environments stay static');
check(EXPLAINER_DURATION_MS === 6000, 'bounded six-second sequence');

for (const [slug, kinds] of Object.entries(SERVICE_EXPLAINER_ROUTES)) {
  const service = getServiceBySlug(slug);
  check(!!service, `existing route: ${slug}`);
  // Preserve the original pilot's copy safeguards without changing unrelated catalog copy.
  if (['alinhamento-3d', 'alinhamento-e-balanceamento', 'manutencao-de-freios'].includes(slug)) {
    check(service!.estimatedTime === null, `no unverified fixed timing for ${slug}`);
    check(!/Hunter|0,01|Elimina|Resultado em/i.test(`${service!.shortDescription} ${service!.highlights.join(' ')}`), `no unverified equipment/result claims for ${slug}`);
  }
  const html = renderToStaticMarkup(<ServiceExplainerSection slug={slug} />);
  check((html.match(/<figure/g) ?? []).length === kinds.length, `correct diagrams for ${slug}`);
  check(!html.includes('data-active="true"'), `static generation has no active movement: ${slug}`);
}
check(getServiceExplainers('reparo-eletrico').length === 0, 'no inaccurate generic fallback');
check(renderToStaticMarkup(<ServiceCardExplainer slug="unknown" />) === '', 'unknown cards unchanged');
check(getCardExplainer('alinhamento-e-balanceamento') === 'balance', 'combined card introduces balance');
const expectedNewMappings = { 'revisao-de-suspensao': 'suspension', 'troca-de-oleo': 'filter', 'troca-de-filtros': 'filter', 'scanner-automotivo': 'diagnostics' } as const;
for (const [slug, kind] of Object.entries(expectedNewMappings)) {
  check(getCardExplainer(slug) === kind, `${slug}: specific card diagram`);
  check(getServiceExplainers(slug).length === 1 && getServiceExplainers(slug)[0] === kind, `${slug}: same specific detail diagram`);
}
const home = renderToStaticMarkup(<MemoryRouter><HomeServicesCompact /></MemoryRouter>);
check((home.match(/<figure/g) ?? []).length === 6, 'all six real home cards include a diagram');
for (const kind of Object.keys(SERVICE_EXPLAINERS) as ServiceExplainerKind[]) {
  check(home.includes(`data-explainer="${kind}"`), `home includes ${kind}`);
  for (const variant of ['card','detail'] as const) {
    const html = renderToStaticMarkup(<ServiceExplainer kind={kind} variant={variant} />);
    check(html.includes('Esquema ilustrativo'), `${kind}/${variant}: explicit diagram label`);
    check(html.includes(SERVICE_EXPLAINERS[kind].summary), `${kind}/${variant}: useful text without JS/motion`);
    check(html.includes('viewBox="0 0 320 240"') && html.includes('width="320" height="240"'), `${kind}/${variant}: reserved SVG geometry`);
    check(html.includes('type="button"') && html.includes('aria-controls=') && html.includes('disabled=""'), `${kind}/${variant}: semantic static control`);
    check(html.includes('role="img"') && html.includes('aria-describedby='), `${kind}/${variant}: accessible diagram description`);
    if (variant === 'detail') check(html.includes('<ol') && html.includes(SERVICE_EXPLAINERS[kind].source.url), `${kind}: static steps and primary source`);
  }
}
check(SERVICE_EXPLAINERS.filter.cardNote.includes('filtro de óleo') && SERVICE_EXPLAINERS.filter.caveat.includes('outras aplicações'), 'oil filter example does not imply all filters are identical');
check(SERVICE_EXPLAINERS.diagnostics.summary.includes('não definem sozinhas a peça a trocar'), 'scanner does not claim automatic diagnosis');
check(SERVICE_EXPLAINERS.suspension.caveat.includes('não permite diagnosticar desgaste'), 'suspension motion is not a diagnostic test');
const css = fs.readFileSync('src/components/service-explainers/service-explainers.css','utf8');
check(css.includes('prefers-reduced-motion: reduce') && css.includes('animation: none !important'), 'CSS-level reduced-motion defense');
check(css.includes('aspect-ratio: 4 / 3') && css.includes('animation-iteration-count: 1'), 'reserved space and finite motion');
check(!css.includes('infinite') && !css.includes('filter:'), 'no looping or costly animated filters');
for (const name of ['se-spring', 'se-suspension-wheel', 'se-filter-particles', 'se-filter-flow', 'se-diagnostic-data']) {
  check(css.includes(`animation-name: ${name}`) && css.includes(`@keyframes ${name}`), `${name}: registered finite animation`);
}
for (const f of ['ServiceDiagram.tsx','ServiceExplainer.tsx','useExplainerPlayback.ts']) {
  const source = fs.readFileSync(`src/components/service-explainers/${f}`,'utf8');
  check(!/requestAnimationFrame|setInterval|fetch\(|\.focus\(/.test(source), `${f}: no frame loop, external request or focus move`);
}
console.log(`PASS: ${assertions} assertions. Playback, viewport/visibility, pause/replay, live reduced-motion, static rendering, route coverage, semantics, sizing and no external runtime dependency.`);
