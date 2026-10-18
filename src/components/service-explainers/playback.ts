export const EXPLAINER_DURATION_MS = 6000;
export type PlaybackPhase = 'idle' | 'playing' | 'paused' | 'complete';
export interface PlaybackState {
  ready: boolean;
  reducedMotion: boolean;
  inView: boolean;
  pageVisible: boolean;
  phase: PlaybackPhase;
  run: number;
}
export const INITIAL_PLAYBACK: PlaybackState = {
  ready: false, reducedMotion: true, inView: false, pageVisible: true, phase: 'idle', run: 0,
};
export type PlaybackEvent =
  | { type: 'environment'; reducedMotion: boolean; pageVisible: boolean }
  | { type: 'viewport'; inView: boolean }
  | { type: 'visibility'; pageVisible: boolean }
  | { type: 'toggle' }
  | { type: 'finish'; run: number };

export function isPlaybackRunning(state: PlaybackState): boolean {
  return state.ready && !state.reducedMotion && state.inView && state.pageVisible && state.phase === 'playing';
}

/** Environmental pauses preserve progress. Only an explicit replay restarts a finished sequence. */
export function playbackReducer(state: PlaybackState, event: PlaybackEvent): PlaybackState {
  let next = state;
  switch (event.type) {
    case 'environment':
      next = { ...state, ready: true, reducedMotion: event.reducedMotion, pageVisible: event.pageVisible,
        phase: event.reducedMotion ? 'complete' : state.phase };
      break;
    case 'viewport': next = { ...state, inView: event.inView }; break;
    case 'visibility': next = { ...state, pageVisible: event.pageVisible }; break;
    case 'toggle':
      if (!state.ready || state.reducedMotion) return state;
      if (state.phase === 'playing') return { ...state, phase: 'paused' };
      if (state.phase === 'paused') return { ...state, phase: 'playing' };
      return { ...state, phase: 'playing', run: state.run + 1 };
    case 'finish':
      return event.run === state.run && state.phase === 'playing' ? { ...state, phase: 'complete' } : state;
  }
  if (next.phase === 'idle' && next.ready && !next.reducedMotion && next.inView && next.pageVisible) {
    return { ...next, phase: 'playing' };
  }
  return next;
}
