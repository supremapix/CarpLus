import { useEffect, useReducer, useRef } from 'react';
import { isStaticGeneration } from '../../lib/prerender';
import { EXPLAINER_DURATION_MS, INITIAL_PLAYBACK, isPlaybackRunning, playbackReducer } from './playback';

export function useExplainerPlayback() {
  const ref = useRef<HTMLElement>(null);
  const [state, dispatch] = useReducer(playbackReducer, INITIAL_PLAYBACK);
  const clock = useRef({ remaining: EXPLAINER_DURATION_MS, run: 0 });
  const running = isPlaybackRunning(state);

  useEffect(() => {
    // Static generation and unsupported browsers keep complete, useful static content.
    if (isStaticGeneration() || !window.matchMedia || !window.IntersectionObserver) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!media.addEventListener) return;
    const updateMotion = () => dispatch({ type: 'environment', reducedMotion: media.matches, pageVisible: !document.hidden });
    const updateVisibility = () => dispatch({ type: 'visibility', pageVisible: !document.hidden });
    updateMotion();
    media.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(([entry]) => {
      dispatch({ type: 'viewport', inView: entry.isIntersecting && entry.intersectionRatio >= 0.25 });
    }, { threshold: [0, 0.25], rootMargin: '0px' });
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      media.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);

  useEffect(() => {
    if (clock.current.run !== state.run) clock.current = { remaining: EXPLAINER_DURATION_MS, run: state.run };
    if (!running) return;
    const startedAt = performance.now();
    const timer = window.setTimeout(() => dispatch({ type: 'finish', run: state.run }), clock.current.remaining);
    return () => {
      window.clearTimeout(timer);
      clock.current.remaining = Math.max(0, clock.current.remaining - (performance.now() - startedAt));
    };
  }, [running, state.run]);

  return { ref, state, running, toggle: () => dispatch({ type: 'toggle' }) };
}
