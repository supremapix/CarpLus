import { SUSPENSAO_4X4, type Suspensao4x4Item } from './suspensao4x4';
import { SUSPENSION_IMAGES } from './suspensao4x4Images';

export const SUSPENSION_BASE = '/suspensao-4x4-curitiba';

export function suspensionSlug(item: Suspensao4x4Item) {
  const name = item.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 92).replace(/-+$/, '');
  return `${name}-${item.ref.toLowerCase()}`;
}
export const suspensionPath = (item: Suspensao4x4Item) => `${SUSPENSION_BASE}/${suspensionSlug(item)}`;
export const suspensionBySlug = new Map(SUSPENSAO_4X4.map(item => [suspensionSlug(item), item]));

const guide: Record<string, readonly [string, string, string]> = {
  'Kits de suspensão': ['kit', 'Conjunto de suspensão para projetos de reposição ou alteração, conforme a configuração de cada referência.', 'Confirme a composição do kit, os eixos atendidos e se precisa de peças complementares. Informe altura desejada e se o veículo tem carga constante.'],
  'Amortecedores e acessórios': ['amortecedor', 'Amortecedor ou componente relacionado ao amortecimento, identificado pela configuração desta referência.', 'Confirme eixo, lado, fixação e altura atual da suspensão. Quando for acessório, confirme também o modelo do amortecedor.'],
  'Braços, bandejas e componentes': ['bandeja', 'Componente associado à articulação da suspensão. Compare esta referência com a posição e a configuração da peça que será substituída.', 'Confirme eixo, lado, pontos de fixação e se buchas ou pivôs fazem parte da referência.'],
  'Lift, calços e jumelos': ['lift', 'Peça usada em projetos de lift ou na montagem do conjunto, conforme a referência. A medida anunciada da peça não confirma, por si só, a altura final do veículo.', 'Informe altura atual, medida pretendida e peças já instaladas. Confirme a aplicação, geometria e necessidade de componentes adicionais.'],
  'Molas e feixes': ['mola', 'Mola ou feixe associado à sustentação do veículo. A escolha depende do eixo, da aplicação e da carga de uso.', 'Informe carga habitual, acessórios permanentes e medidas do conjunto existente. Confirme se a cotação é unitária, de par ou de conjunto.'],
  'Ferramentas': ['ferramenta', 'Ferramenta relacionada ao trabalho de suspensão. Não é uma peça a ser montada no veículo.', 'Confirme a operação prevista, as medidas e as ferramentas complementares necessárias.'],
  'Proteções': ['protecao', 'Peça destinada à proteção de um componente ou área de montagem, de acordo com o modelo descrito.', 'Confirme o local protegido, os pontos de fixação e as interferências com os acessórios já instalados.'],
  'Outros acessórios 4x4': ['acessorio', 'Acessório complementar para um projeto 4x4. A aplicação depende da montagem prevista para esta referência.', 'Informe os acessórios já instalados e confirme o tipo de fixação, as medidas e os itens fornecidos.'],
  'Outros componentes': ['acessorio', 'Componente complementar de suspensão 4x4. A referência ajuda a distinguir a peça de outras versões com nomes semelhantes.', 'Confirme a função, a posição no conjunto e as medidas da peça existente antes de comprar.'],
};

export function suspensionDetails(item: Suspensao4x4Item) {
  const [kind, description, check] = guide[item.group] ?? guide['Outros componentes'];
  const vehicle = item.vehicle !== 'Diversos' ? item.vehicle : null;
  const brand = item.brand !== 'Não informada' && item.brand !== 'Não informado' ? item.brand : null;
  const name = item.name;
  const qualifier = /(?:\bc\/|\bcom)\s*bandeja/i.test(name)
    ? 'A referência é identificada no catálogo como versão com bandeja. Confirme quais bandejas e demais peças acompanham a cotação.'
    : /\b(?:nitrogas|foam cell|im2[.,]5|full)\b/i.test(name)
    ? 'A linha ou configuração aparece no nome da referência. Use o código abaixo para diferenciá-la de versões com nomes parecidos.'
    : null;
  return {
    kind, description, check, vehicle, brand, qualifier,
    photo: SUSPENSION_IMAGES[item.ref] as string | undefined,
  };
}
