// Dados dos pneus em promoção (esteira da Home + páginas dedicadas)
// Fonte única para a esteira e para as landing pages individuais.

export interface PromoTire {
  slug: string;
  marca: string;
  nome: string;
  preco: string;
  precoNumero: number;
  imagem: string;
  medida: string;
  largura: number;
  perfil: number;
  aro: number;
  carga: string;
  velocidade: string;
  carros: string[];
  catalogoUrl: string;
  temCatalogoMarca: boolean;
}

interface RawPromoTire {
  marca: string;
  nome: string;
  preco: string;
  imagem: string;
}

const RAW_TIRES: RawPromoTire[] = [
  { marca: 'BRIDGESTONE', nome: '195/55/15 Ecopia EP150 85H', preco: 'R$ 489,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1445393/pneu_bridgestone_aro_15_ecopia_ep150_19555r15_bl85_1_20260424103219_554d143d730b.jpg' },
  { marca: 'COMFORSER', nome: '185/60/14 82H CF510', preco: 'R$ 239,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1445393/pneu_18560r14_82h_cf510_comforser_1_20260317145707_26dca0dc6878.jpg' },
  { marca: 'CONTINENTAL', nome: '175/65/14 ContiPowerContact 82T', preco: 'R$ 379,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1411063/pneu_17565r14_continental_contipowercontact_82t_1_20251222152416_f9cbacb94d08.jpg' },
  { marca: 'DELINTE', nome: '185/60/15 DH2 84H', preco: 'R$ 329,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_775428-MLU76889830244_062024-F.webp' },
  { marca: 'FIRESTONE', nome: '175/65/14 F700 82T', preco: 'R$ 379,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1411063/pneu_17565r14_firestone_f700_82t_1_20250911111043_865d44577d85.jpg' },
  { marca: 'GOODYEAR', nome: '205/55/17 91V Wrangler Territory', preco: 'R$ 789,00', imagem: 'https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-20555r17-goodyear-wrangler-territory-ht-91v-1.png' },
  { marca: 'HIFLY', nome: '185/60/14 82H HF261', preco: 'R$ 269,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1411063/pneu_18560r14_hifly_hf261_82h_1_20250912182338_fa8f9c5baa8e.jpg' },
  { marca: 'JK TYRE', nome: '175/70/13 82T Turbo', preco: 'R$ 269,00', imagem: 'https://www.alvespneus.com.br/image/catalog/Jk-Tyre/pneu-aro-13-175-70r13-jk-tyre-82t-tl-turbo.png' },
  { marca: 'LINGLONG', nome: '195/60/15 Green-Max HP010 88H', preco: 'R$ 289,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_958386-MLA99823472497_112025-F.webp' },
  { marca: 'MAXTREK', nome: '185/65/15 88H Maximus M2', preco: 'R$ 299,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1445393/pneu_maxtrek_aro_16_maximus_m2_20565r15_94h_sl_1_20260218135248_7d79f0f6def4.jpg' },
  { marca: 'MICHELIN', nome: '215/50/17 95W Primacy 4 +', preco: 'R$ 749,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_967456-MLA79828137217_102024-F.webp' },
  { marca: 'PIRELLI', nome: '175/65/14 82H P400 Evo', preco: 'R$ 379,00', imagem: 'https://www.pensepneus.com.br/media/catalog/product/cache/e5c188f9fa76550a763b93b91095e130/p/4/p400_evo_1.webp' },
  { marca: 'PRINX', nome: '185/55/16 HH2 83H', preco: 'R$ 459,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1411063/pneu_18555r16_prinx_hh2_hicity_83h_1_20250909002931_6e7b2d587166.jpg' },
  { marca: 'PROVATO', nome: '265/60/18 Crosswind A/T 110T', preco: 'R$ 639,00', imagem: 'https://1stpneus.com.br/wp-content/uploads/2022/10/CROSSWIND-AT.jpg' },
  { marca: 'ROADKING', nome: '175/70/14C Radial109 95/93T', preco: 'R$ 289,00', imagem: 'https://cdn.iset.io/assets/42004/produtos/2461/thumb_550-550-9409-1.jpg' },
  { marca: 'SPEEDMAX', nome: '175/55/16 80H Energrip SPM022', preco: 'R$ 489,00', imagem: 'https://images.tcdn.com.br/img/img_prod/1411063/pneu_17555r16_speedmax_energrip_spm022_ev_80h_1_20260522095029_33f1e899ed35.jpg' },
  { marca: 'TORNEL', nome: '175/70/14 Astral Neo 84T', preco: 'R$ 279,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_785643-MLB110473824363_042026-F.webp' },
  { marca: 'XBRI', nome: '175/75/14 86T Fastway A5', preco: 'R$ 269,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_686334-MLA100095996251_122025-F.webp' },
  { marca: 'YOKOHAMA', nome: '175/65/14 ES32 82T', preco: 'R$ 399,00', imagem: 'https://http2.mlstatic.com/D_NQ_NP_2X_714535-MLB107513343737_022026-F.webp' },
  { marca: 'ZMAX', nome: '225/65/16C Vanmejor 112/110R Carga', preco: 'R$ 559,00', imagem: 'https://http2.mlstatic.com/D_930543-MLA112057599751_052026-C.jpg' },
];

// Carros compatíveis por medida (modelos mais comuns no Brasil para cada dimensão).
// Chave no formato largura/perfil/aro.
const CARROS_POR_MEDIDA: Record<string, string[]> = {
  '195/55/15': ['Chevrolet Onix', 'VW Polo', 'VW Virtus', 'Hyundai HB20S', 'Chevrolet Prisma', 'VW Gol (G6/G7)', 'Ford Fiesta'],
  '185/60/14': ['VW Gol', 'VW Voyage', 'VW Fox', 'Fiat Palio', 'Fiat Siena', 'Chevrolet Celta', 'Ford Ka', 'Ford Fiesta'],
  '175/65/14': ['Chevrolet Onix', 'Chevrolet Prisma', 'Hyundai HB20', 'Renault Sandero', 'Renault Logan', 'VW Up!', 'Ford Ka'],
  '185/60/15': ['Chevrolet Onix', 'Hyundai HB20', 'VW Fox', 'Fiat Argo', 'Fiat Cronos', 'VW Gol', 'Renault Sandero'],
  '205/55/17': ['Honda Civic', 'Toyota Corolla', 'Chevrolet Cruze', 'VW Jetta', 'Kia Cerato', 'Nissan Sentra'],
  '175/70/13': ['VW Gol (G2/G3/G4)', 'Fiat Palio', 'Fiat Uno', 'Chevrolet Corsa', 'Chevrolet Celta', 'Renault Clio'],
  '195/60/15': ['Toyota Corolla (antigo)', 'Honda Civic (antigo)', 'Chevrolet Astra', 'Chevrolet Vectra', 'Ford Focus', 'Renault Mégane'],
  '185/65/15': ['Renault Logan', 'Renault Sandero', 'Chevrolet Spin', 'Chevrolet Cobalt', 'Honda Fit', 'Honda City', 'Fiat Idea'],
  '215/50/17': ['Honda Civic', 'Toyota Corolla', 'Chevrolet Cruze', 'Kia Cerato', 'Nissan Sentra', 'Renault Mégane'],
  '185/55/16': ['VW Polo', 'VW Virtus', 'Honda City', 'Honda Fit', 'Toyota Yaris', 'Hyundai HB20', 'Chevrolet Onix Plus'],
  '265/60/18': ['Toyota Hilux', 'Toyota SW4', 'Ford Ranger', 'Chevrolet S10', 'VW Amarok', 'Mitsubishi Pajero', 'Chevrolet Trailblazer'],
  '175/70/14': ['VW Gol', 'VW Voyage', 'VW Saveiro', 'Fiat Strada', 'Fiat Fiorino', 'Fiat Doblò', 'VW Kombi'],
  '175/55/16': ['VW Up!', 'Peugeot 208', 'Fiat Argo', 'Fiat Mobi', 'VW Polo (entrada)'],
  '175/75/14': ['VW Kombi', 'Fiat Fiorino', 'Fiat Strada', 'VW Saveiro', 'Fiat Doblò Cargo'],
  '225/65/16': ['Renault Master', 'Mercedes Sprinter', 'Fiat Ducato', 'Iveco Daily', 'Peugeot Boxer', 'Citroën Jumper'],
};

function carrosParaMedida(largura: number, perfil: number, aro: number): string[] {
  return CARROS_POR_MEDIDA[`${largura}/${perfil}/${aro}`] ?? [];
}

// Marcas que possuem página de catálogo dedicada (BRAND_PAGES em seoLanding.ts).
// Chave normalizada (minúscula, sem acento) → slug da página de catálogo.
const CATALOGO_POR_MARCA: Record<string, string> = {
  pirelli: '/pneu-pirelli-curitiba',
  michelin: '/pneu-michelin-curitiba',
  goodyear: '/pneu-goodyear-curitiba',
  continental: '/pneu-continental-curitiba',
  yokohama: '/pneu-yokohama-curitiba',
  bridgestone: '/pneu-bridgestone-curitiba',
  firestone: '/pneu-firestone-curitiba',
  prinx: '/pneu-prinx-curitiba',
  delinte: '/pneu-delinte-curitiba',
};

// Catálogo geral (fallback para marcas sem página própria).
const CATALOGO_GERAL = '/pneus';

function catalogoParaMarca(marca: string): { url: string; proprio: boolean } {
  const chave = marca
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
  const url = CATALOGO_POR_MARCA[chave];
  return url ? { url, proprio: true } : { url: CATALOGO_GERAL, proprio: false };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[/.]/g, '-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function parsePrice(preco: string): number {
  return Number(preco.replace(/[^0-9,]/g, '').replace(',', '.')) || 0;
}

function enrich(raw: RawPromoTire): PromoTire {
  const medidaMatch = raw.nome.match(/(\d{3})\/(\d{2})\/(\d{2})/);
  const largura = medidaMatch ? Number(medidaMatch[1]) : 0;
  const perfil = medidaMatch ? Number(medidaMatch[2]) : 0;
  const aro = medidaMatch ? Number(medidaMatch[3]) : 0;
  const medida = medidaMatch ? `${largura}/${perfil} R${aro}` : '';

  const cargaMatch = raw.nome.match(/\b(\d{2,3}(?:\/\d{2,3})?)\s*([A-Z])\b/);
  const carga = cargaMatch ? cargaMatch[1] : '—';
  const velocidade = cargaMatch ? cargaMatch[2] : '—';

  const catalogo = catalogoParaMarca(raw.marca);

  return {
    slug: slugify(`${raw.marca}-${raw.nome}`),
    marca: raw.marca,
    nome: raw.nome,
    preco: raw.preco,
    precoNumero: parsePrice(raw.preco),
    imagem: raw.imagem,
    medida,
    largura,
    perfil,
    aro,
    carga,
    velocidade,
    carros: carrosParaMedida(largura, perfil, aro),
    catalogoUrl: catalogo.url,
    temCatalogoMarca: catalogo.proprio,
  };
}

export const PROMO_TIRES: PromoTire[] = RAW_TIRES.map(enrich);

export function getPromoTireBySlug(slug?: string): PromoTire | undefined {
  if (!slug) return undefined;
  return PROMO_TIRES.find((t) => t.slug === slug);
}
