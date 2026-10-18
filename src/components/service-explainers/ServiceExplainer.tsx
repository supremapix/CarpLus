import { useId, type CSSProperties } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { SERVICE_EXPLAINERS, getCardExplainer, getServiceExplainers, type ServiceExplainerKind } from '../../data/serviceExplainers';
import { EXPLAINER_DURATION_MS } from './playback';
import { useExplainerPlayback } from './useExplainerPlayback';
import ServiceDiagram from './ServiceDiagram';
import './service-explainers.css';

export function ServiceExplainer({ kind, variant = 'card' }: { kind: ServiceExplainerKind; variant?: 'card' | 'detail' }) {
  const content = SERVICE_EXPLAINERS[kind];
  const id = useId();
  const { ref, state, running, toggle } = useExplainerPlayback();
  const active = !state.reducedMotion && (state.phase === 'playing' || state.phase === 'paused');
  const disabled = !state.ready || state.reducedMotion;
  const label = disabled ? 'Esquema estático' : state.phase === 'playing' ? 'Pausar' : state.phase === 'paused' ? 'Retomar' : state.phase === 'complete' ? 'Repetir' : 'Ver animação';
  const ControlIcon = state.phase === 'playing' ? Pause : state.phase === 'complete' ? RotateCcw : Play;

  return <figure ref={ref} className={`service-explainer service-explainer--${variant}`} data-explainer={kind} data-phase={state.phase} data-active={active} data-running={running} style={{ '--se-duration': `${EXPLAINER_DURATION_MS}ms` } as CSSProperties}>
    <div className="se-heading" id={`${id}-title`}>{content.title}</div>
    <div className="se-canvas" id={`${id}-canvas`}>
      <ServiceDiagram key={state.run} kind={kind} titleId={`${id}-title`} descriptionId={`${id}-description`} />
    </div>
    <p className="sr-only" id={`${id}-description`}>{content.diagramDescription}</p>
    <figcaption className="se-caption">
      <div className="se-controls">
        <span>Esquema ilustrativo</span>
        <button type="button" onClick={toggle} disabled={disabled} aria-controls={`${id}-canvas`} aria-label={`${label}: ${content.title}`} className="se-control">
          <ControlIcon size={14} aria-hidden="true" /><span>{label}</span>
        </button>
      </div>
      <p className="se-summary">{content.summary}</p>
      {variant === 'card' && <p className="se-card-note">{content.cardNote}</p>}
      {variant === 'detail' && <>
        <ol className="se-steps">{content.steps.map((step, index) => <li key={step}><span aria-hidden="true">{index + 1}</span>{step}</li>)}</ol>
        <p className="se-caveat">{content.caveat}</p>
        <a className="se-source" href={content.source.url} target="_blank" rel="noopener noreferrer">Fonte técnica: {content.source.name} (abre em nova aba)</a>
      </>}
    </figcaption>
  </figure>;
}

export function ServiceCardExplainer({ slug, className }: { slug: string; className?: string }) {
  const kind = getCardExplainer(slug);
  return kind ? <div className={className}><ServiceExplainer kind={kind} /></div> : null;
}

export function ServiceExplainerSection({ slug }: { slug: string }) {
  const kinds = getServiceExplainers(slug);
  if (!kinds.length) return null;
  return <section className="se-section" aria-label="Entenda o serviço com esquemas ilustrativos">
    <div className="se-section-inner">
      <p className="se-eyebrow">Entenda o serviço</p>
      <h2>Uma explicação visual, sem complicar</h2>
      <p className="se-intro">Veja o princípio de funcionamento. As ilustrações complementam as fotos da oficina e não substituem uma avaliação do seu veículo.</p>
      <div className={`se-detail-grid${kinds.length > 1 ? ' se-detail-grid--pair' : ''}`}>
        {kinds.map(kind => <ServiceExplainer key={`${slug}-${kind}`} kind={kind} variant="detail" />)}
      </div>
    </div>
  </section>;
}
