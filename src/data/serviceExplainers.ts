/** Small educational diagrams, not a diagnosis, specification or repair tutorial. */
export type ServiceExplainerKind = 'alignment' | 'balance' | 'brakes' | 'suspension' | 'filter' | 'diagnostics';

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
  suspension: {
    title: 'Suspensão: mola e amortecedor',
    summary: 'A mola permite o movimento da suspensão. O amortecedor controla suas oscilações. A revisão avalia o conjunto, não apenas uma peça.',
    steps: ['Mola se comprime e se estende', 'Amortecedor controla o movimento', 'Avaliação considera o conjunto'],
    cardNote: 'Movimento ilustrativo, não um teste de desgaste.',
    caveat: 'Esquema simplificado de mola e amortecedor, sem representar toda a suspensão ou a direção. O movimento não permite diagnosticar desgaste nem indica peças a substituir.',
    diagramDescription: 'Uma mola e um amortecedor ligam uma roda ao suporte superior. A mola muda de comprimento enquanto a roda oscila com amplitude decrescente. Os rótulos explicam o papel de cada componente mesmo sem movimento.',
    source: {
      name: 'Monroe: função de molas e amortecedores',
      url: 'https://www.monroe.com/technical-resources/shocks-101/shocks-vs-struts.html',
    },
  },
  filter: {
    title: 'Filtro de óleo: retenção de partículas',
    summary: 'O filtro de óleo retém partículas presentes no lubrificante. O filtro adequado e o intervalo de troca dependem das recomendações do fabricante do veículo.',
    steps: ['Óleo passa pelo meio filtrante', 'Partículas ficam retidas', 'Troca conforme o fabricante'],
    cardNote: 'Exemplo de filtro de óleo; outros filtros são diferentes.',
    caveat: 'Fluxo e partículas ilustrativos, não um corte de um modelo específico nem um procedimento de troca. Filtros de ar, combustível e cabine têm outras aplicações; cada item segue a especificação e o plano de manutenção do veículo.',
    diagramDescription: 'Setas mostram o óleo atravessando um meio filtrante. Partículas se deslocam até o filtro e ficam retidas antes da saída. A legenda identifica o exemplo como filtro de óleo, com fluxo simplificado.',
    source: {
      name: 'MANN-FILTER: filtros de óleo',
      url: 'https://www.mann-filter.com/us-en/parts/oil-filter.html',
    },
  },
  diagnostics: {
    title: 'Scanner: dados para a avaliação',
    summary: 'O scanner lê dados e códigos dos módulos compatíveis do veículo. Essas informações orientam a avaliação profissional, mas não definem sozinhas a peça a trocar.',
    steps: ['Comunicar com o módulo compatível', 'Ler dados e códigos disponíveis', 'Interpretar e realizar os testes necessários'],
    cardNote: 'Leitura de códigos não substitui o diagnóstico.',
    caveat: 'Acesso a módulos e funções varia conforme o veículo e o equipamento. O desenho não indica uma falha real; a leitura de um código ou a remoção de um alerta não comprova que o problema foi resolvido.',
    diagramDescription: 'Um módulo eletrônico está ligado a um scanner. Marcadores percorrem a ligação para representar a comunicação. A tela identifica dados e códigos, sem apontar uma peça defeituosa ou mostrar uma conclusão automática.',
    source: {
      name: 'Bosch: leitura de códigos e dados (manual em PDF)',
      url: 'https://www.boschdiagnostics.com/sites/default/files/2025-01/OBD%201200%20User%20Manual.pdf',
    },
  },
};

/** Explicit service mapping. Unknown services render no generic/misleading diagram. */
export const SERVICE_EXPLAINER_ROUTES: Record<string, readonly ServiceExplainerKind[]> = {
  'alinhamento-3d': ['alignment'],
  'alinhamento-e-balanceamento': ['alignment', 'balance'],
  'manutencao-de-freios': ['brakes'],
  'revisao-de-suspensao': ['suspension'],
  'troca-de-oleo': ['filter'],
  'troca-de-filtros': ['filter'],
  'scanner-automotivo': ['diagnostics'],
};

export function getServiceExplainers(slug: string): readonly ServiceExplainerKind[] {
  return SERVICE_EXPLAINER_ROUTES[slug] ?? [];
}

export function getCardExplainer(slug: string): ServiceExplainerKind | undefined {
  // The combined card introduces balance; the detail page explains both services.
  return slug === 'alinhamento-e-balanceamento' ? 'balance' : getServiceExplainers(slug)[0];
}
