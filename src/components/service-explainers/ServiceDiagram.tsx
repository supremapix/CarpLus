import type { ServiceExplainerKind } from '../../data/serviceExplainers';

function AlignmentDiagram() {
  return <>
    <path d="M101 28H219M101 194H219M105 23V199M215 23V199" className="se-guide" />
    <path d="M145 22L160 11L175 22M160 11V34" className="se-line" />
    <rect x="127" y="40" width="66" height="138" rx="22" className="se-body" />
    <path d="M139 63H181L185 88H135ZM136 141H184L180 158H140Z" className="se-glass" />
    <path d="M116 75H204M116 153H204" className="se-line" />
    <g transform="translate(105 74)"><g className="se-align-left se-motion"><rect x="-11" y="-26" width="22" height="52" rx="7" className="se-tire" /><path d="M0 -18V18" className="se-tread" /></g></g>
    <g transform="translate(215 74)"><g className="se-align-right se-motion"><rect x="-11" y="-26" width="22" height="52" rx="7" className="se-tire" /><path d="M0 -18V18" className="se-tread" /></g></g>
    <rect x="94" y="132" width="22" height="43" rx="7" className="se-tire" /><rect x="204" y="132" width="22" height="43" rx="7" className="se-tire" />
    <path d="M51 79H81M239 79H269" className="se-line" /><text x="160" y="220" textAnchor="middle" className="se-label">Vista superior · convergência</text>
  </>;
}

function WheelSpokes() {
  return <g stroke="currentColor" strokeWidth="7" strokeLinecap="round">
    <path d="M0 -40V-13M38 -13L12 -4M24 32L7 10M-24 32L-7 10M-38 -13L-12 -4" />
    <circle r="10" fill="currentColor" stroke="none" />
  </g>;
}

function BalanceDiagram() {
  return <>
    <g transform="translate(119 112)">
      <circle r="72" className="se-tire" /><circle r="53" className="se-rim" />
      <g className="se-balance-spin se-motion"><WheelSpokes /><rect x="-11" y="42" width="22" height="8" rx="2" className="se-weight se-balance-weight se-motion" /></g>
    </g>
    <path d="M193 70H208M131 159L205 147" className="se-line" />
    <text x="212" y="68" className="se-label"><tspan x="212">Roda</tspan><tspan x="212" dy="17">+ pneu</tspan></text>
    <text x="207" y="153" className="se-label">Contrapeso</text>
    <text x="160" y="220" textAnchor="middle" className="se-label">Equilíbrio de massa do conjunto</text>
  </>;
}

function BrakesDiagram() {
  return <>
    {/* Axial section: pads meet opposite faces, never the circumference of the disc. */}
    <path d="M60 68V49H166V68" className="se-caliper" />
    <rect x="106" y="69" width="14" height="113" rx="3" className="se-rim" />
    <g className="se-pad-left se-motion"><rect x="89" y="84" width="17" height="70" rx="4" className="se-pad" /></g>
    <g className="se-pad-right se-motion"><rect x="120" y="84" width="17" height="70" rx="4" className="se-pad" /></g>
    <path d="M41 118H68M65 114L70 118L65 122M185 118H158M161 114L156 118L161 122" className="se-line" />
    <text x="113" y="32" textAnchor="middle" className="se-label">Pinça</text>
    <text x="113" y="201" textAnchor="middle" className="se-label">Disco entre as pastilhas</text>
    <g transform="translate(254 116)"><circle r="39" className="se-rim" /><g className="se-brake-spin se-motion"><path d="M0 -30V-14M26 15L12 7M-26 15L-12 7" className="se-line" /><circle r="8" className="se-body" /></g></g>
    <text x="254" y="176" textAnchor="middle" className="se-label">Giro reduzido</text>
    <text x="160" y="225" textAnchor="middle" className="se-label">Freio a disco · corte simplificado</text>
  </>;
}

export default function ServiceDiagram({ kind, titleId, descriptionId }: {
  kind: ServiceExplainerKind; titleId: string; descriptionId: string;
}) {
  return <svg viewBox="0 0 320 240" width="320" height="240" role="img" aria-labelledby={titleId} aria-describedby={descriptionId} className="se-diagram" focusable="false">
    {kind === 'alignment' ? <AlignmentDiagram /> : kind === 'balance' ? <BalanceDiagram /> : <BrakesDiagram />}
  </svg>;
}
