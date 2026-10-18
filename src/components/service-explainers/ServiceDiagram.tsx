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

function SuspensionDiagram() {
  return <>
    <rect x="76" y="39" width="108" height="16" rx="5" className="se-body" />
    <text x="130" y="26" textAnchor="middle" className="se-label">Suporte do veículo</text>
    {/* Spring scales from its fixed upper mount; the lower mount moves by the same amount. */}
    <g transform="translate(99 55)"><g className="se-spring se-motion">
      <path d="M0 0V8L-13 17L13 29L-13 41L13 53L-13 65L0 77V85" className="se-spring-line" />
    </g></g>
    <path d="M153 55V123" className="se-damper-rod" />
    <g className="se-suspension-wheel se-motion">
      <rect x="143" y="96" width="20" height="44" rx="4" className="se-pad" />
      <path d="M87 140H166M126 140V156" className="se-line" />
      <circle cx="126" cy="176" r="25" className="se-tire" /><circle cx="126" cy="176" r="13" className="se-rim" />
    </g>
    <path d="M46 92H79M174 106H192" className="se-line" />
    <text x="42" y="86" textAnchor="middle" className="se-label">Mola</text>
    <text x="196" y="101" className="se-label"><tspan x="196">Amortecedor</tspan><tspan x="196" dy="18">controla</tspan><tspan x="196" dy="18">oscilações</tspan></text>
    <text x="160" y="225" textAnchor="middle" className="se-label">Suspensão · princípio simplificado</text>
  </>;
}

function FilterDiagram() {
  return <>
    <text x="160" y="34" textAnchor="middle" className="se-label">Exemplo: filtro de óleo</text>
    <rect x="118" y="62" width="80" height="117" rx="10" className="se-body" />
    <rect x="145" y="72" width="28" height="97" rx="3" className="se-filter-medium" />
    <path d="M150 78V163M156 78V163M162 78V163M168 78V163" className="se-filter-fold" />
    <path d="M30 120H111M104 114L111 120L104 126M201 120H287M280 114L287 120L280 126" className="se-line" />
    {/* Particles stop before the medium; none crosses to the outlet side. */}
    <g className="se-filter-particles se-motion"><circle cx="137" cy="100" r="4" className="se-particle" /><circle cx="136" cy="120" r="3" className="se-particle" /><circle cx="137" cy="141" r="4" className="se-particle" /></g>
    <g className="se-filter-flow se-motion"><path d="M256 112L265 120L256 128" className="se-flow" /></g>
    <text x="61" y="151" textAnchor="middle" className="se-label">Entrada</text>
    <text x="252" y="151" textAnchor="middle" className="se-label">Saída</text>
    <path d="M139 164L111 192H65" className="se-line" />
    <text x="32" y="207" className="se-label">Partículas retidas</text>
    <text x="222" y="194" textAnchor="middle" className="se-label"><tspan x="222">Meio filtrante</tspan></text>
    <text x="160" y="231" textAnchor="middle" className="se-label">Fluxo simplificado · não é montagem</text>
  </>;
}

function DiagnosticsDiagram() {
  return <>
    <text x="68" y="52" textAnchor="middle" className="se-label">Módulo</text>
    <rect x="31" y="72" width="74" height="78" rx="8" className="se-body" />
    <rect x="52" y="93" width="31" height="35" rx="3" className="se-rim" />
    <path d="M57 86V93M67 86V93M77 86V93M57 128V136M67 128V136M77 128V136M45 100H52M45 111H52M45 122H52M83 100H91M83 111H91M83 122H91" className="se-line" />
    <path d="M105 112H204" className="se-line" />
    <g className="se-diagnostic-data se-motion"><rect x="180" y="107" width="9" height="10" rx="2" className="se-weight" /><rect x="165" y="109" width="5" height="6" rx="1" className="se-weight" /></g>
    <text x="249" y="52" textAnchor="middle" className="se-label">Scanner</text>
    <rect x="204" y="67" width="89" height="100" rx="10" className="se-tire" />
    <rect x="213" y="78" width="71" height="64" rx="3" className="se-glass" />
    <text x="248" y="97" textAnchor="middle" className="se-label">Dados</text>
    <path d="M222 108H231L235 102L240 114L245 108H274" className="se-line" />
    <text x="248" y="132" textAnchor="middle" className="se-label">Códigos</text>
    <circle cx="248" cy="154" r="4" className="se-weight" />
    <text x="155" y="145" textAnchor="middle" className="se-label">Leitura</text>
    <path d="M68 160V184H249V175" className="se-guide" />
    <text x="160" y="208" textAnchor="middle" className="se-label">Informações para avaliação profissional</text>
    <text x="160" y="229" textAnchor="middle" className="se-label">Não define a peça a trocar</text>
  </>;
}

const DIAGRAMS = {
  alignment: AlignmentDiagram,
  balance: BalanceDiagram,
  brakes: BrakesDiagram,
  suspension: SuspensionDiagram,
  filter: FilterDiagram,
  diagnostics: DiagnosticsDiagram,
} satisfies Record<ServiceExplainerKind, () => React.JSX.Element>;

export default function ServiceDiagram({ kind, titleId, descriptionId }: {
  kind: ServiceExplainerKind; titleId: string; descriptionId: string;
}) {
  const Diagram = DIAGRAMS[kind];
  return <svg viewBox="0 0 320 240" width="320" height="240" role="img" aria-labelledby={titleId} aria-describedby={descriptionId} className="se-diagram" focusable="false">
    <Diagram />
  </svg>;
}
