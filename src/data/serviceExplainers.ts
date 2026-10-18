/** Small educational diagrams, not a diagnosis, specification or repair tutorial. */
export type ServiceExplainerKind = 'alignment' | 'balance' | 'brakes';

export interface ServiceExplainerContent {
  title: string;
  summary: string;
  steps: readonly [string, string, string];
  caveat: string;
  cardNote: string;
  diagramDescription: string;
  source: { name: string; url: string };
}

const MICHELIN_SOURCE = {
  name: 'Michelin: alinhamento e balanceamento',
  url: 'https://www.michelin.com.br/auto/conselhos/cuidados-com-pneus/alinhamento-de-roda-balanceamento-de-roda',
};

export const SERVICE_EXPLAINERS: Record<ServiceExplainerKind, ServiceExplainerContent> = {
  alignment: {
    title: 'Alinhamento: ângulos das rodas',
    summary: 'O alinhamento verifica a geometria das rodas. Os ajustes seguem as especificações do fabricante do veículo.',
    steps: ['Medir os ângulos', 'Comparar com a especificação', 'Ajustar quando indicado'],
    cardNote: 'Ângulos ilustrativos, não especificações de ajuste.',
    caveat: 'Vista superior simplificada da convergência. Os ângulos e ajustes possíveis variam conforme o veículo; rodas paralelas aqui não representam uma especificação universal.',
    diagramDescription: 'Veículo visto de cima. As duas rodas dianteiras mudam de orientação em relação às linhas de referência. O desenho ilustra somente o conceito de convergência.',
    source: MICHELIN_SOURCE,
  },
  balance: {
    title: 'Balanceamento: equilíbrio do conjunto',
    summary: 'O balanceamento compensa diferenças de massa no conjunto roda e pneu com contrapesos. É diferente do alinhamento.',
    steps: ['Medir o desequilíbrio', 'Posicionar contrapesos', 'Conferir o conjunto'],
    cardNote: 'Peso e posição definidos pelo equipamento.',
    caveat: 'Posição e massa dos contrapesos são definidas pelo equipamento. O desenho não indica valores nem garante a causa de uma vibração.',
    diagramDescription: 'Roda e pneu vistos de frente, com um contrapeso representado no aro. A rotação e a posição do peso são apenas ilustrativas.',
    source: MICHELIN_SOURCE,
  },
  brakes: {
    title: 'Freios: contato que reduz o giro',
    summary: 'No freio a disco, as pastilhas pressionam as faces do disco. O atrito ajuda a reduzir a rotação da roda.',
    steps: ['Disco ligado à roda', 'Pastilhas pressionam o disco', 'Atrito reduz a rotação'],
    cardNote: 'Corte simplificado, não um procedimento de reparo.',
    caveat: 'Corte simplificado de um freio a disco, não um procedimento de reparo. A manutenção depende da avaliação do sistema completo por um profissional.',
    diagramDescription: 'Um corte mostra duas pastilhas pressionando as faces opostas do disco. Ao lado, uma vista frontal do disco ilustra a redução do giro.',
    source: {
      name: 'Bosch: componentes do sistema de freios',
      url: 'https://www.boschaftermarket.com/gb/en/parts/products/braking-systems/',
    },
  },
};

/** Deliberately bounded pilot. Unknown services render no generic/misleading diagram. */
export const SERVICE_EXPLAINER_ROUTES: Record<string, readonly ServiceExplainerKind[]> = {
  'alinhamento-3d': ['alignment'],
  'alinhamento-e-balanceamento': ['alignment', 'balance'],
  'manutencao-de-freios': ['brakes'],
};

export function getServiceExplainers(slug: string): readonly ServiceExplainerKind[] {
  return SERVICE_EXPLAINER_ROUTES[slug] ?? [];
}

export function getCardExplainer(slug: string): ServiceExplainerKind | undefined {
  // The combined card introduces balance; the detail page explains both services.
  return slug === 'alinhamento-e-balanceamento' ? 'balance' : getServiceExplainers(slug)[0];
}
