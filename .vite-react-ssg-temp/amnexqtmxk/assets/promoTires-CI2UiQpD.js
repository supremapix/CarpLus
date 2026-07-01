const RAW_TIRES = [
  { marca: "BRIDGESTONE", nome: "195/55/15 Ecopia EP150 85H", preco: "R$ 489,00", imagem: "/pneus/bridgestone.webp" },
  { marca: "COMFORSER", nome: "185/60/14 82H CF510", preco: "R$ 239,00", imagem: "/pneus/comforser.webp" },
  { marca: "CONTINENTAL", nome: "175/65/14 ContiPowerContact 82T", preco: "R$ 379,00", imagem: "/pneus/continental.webp" },
  { marca: "DELINTE", nome: "185/60/15 DH2 84H", preco: "R$ 329,00", imagem: "/pneus/delinte.webp" },
  { marca: "FIRESTONE", nome: "175/65/14 F700 82T", preco: "R$ 379,00", imagem: "/pneus/firestone.webp" },
  { marca: "GOODYEAR", nome: "205/55/17 91V Wrangler Territory", preco: "R$ 789,00", imagem: "/pneus/goodyear.webp" },
  { marca: "HIFLY", nome: "185/60/14 82H HF261", preco: "R$ 269,00", imagem: "/pneus/hifly.webp" },
  { marca: "JK TYRE", nome: "175/70/13 82T Turbo", preco: "R$ 269,00", imagem: "/pneus/jk-tyre.webp" },
  { marca: "LINGLONG", nome: "195/60/15 Green-Max HP010 88H", preco: "R$ 289,00", imagem: "/pneus/linglong.webp" },
  { marca: "MAXTREK", nome: "185/65/15 88H Maximus M2", preco: "R$ 299,00", imagem: "/pneus/maxtrek.webp" },
  { marca: "MICHELIN", nome: "215/50/17 95W Primacy 4 +", preco: "R$ 749,00", imagem: "/pneus/michelin.webp" },
  { marca: "PIRELLI", nome: "175/65/14 82H P400 Evo", preco: "R$ 379,00", imagem: "/pneus/pirelli.webp" },
  { marca: "PRINX", nome: "185/55/16 HH2 83H", preco: "R$ 459,00", imagem: "/pneus/prinx.webp" },
  { marca: "PROVATO", nome: "265/60/18 Crosswind A/T 110T", preco: "R$ 639,00", imagem: "/pneus/provato.webp" },
  { marca: "ROADKING", nome: "175/70/14C Radial109 95/93T", preco: "R$ 289,00", imagem: "/pneus/roadking.webp" },
  { marca: "SPEEDMAX", nome: "175/55/16 80H Energrip SPM022", preco: "R$ 489,00", imagem: "/pneus/speedmax.webp" },
  { marca: "TORNEL", nome: "175/70/14 Astral Neo 84T", preco: "R$ 279,00", imagem: "/pneus/tornel.webp" },
  { marca: "XBRI", nome: "175/75/14 86T Fastway A5", preco: "R$ 269,00", imagem: "/pneus/xbri.webp" },
  { marca: "YOKOHAMA", nome: "175/65/14 ES32 82T", preco: "R$ 399,00", imagem: "/pneus/yokohama.webp" },
  { marca: "ZMAX", nome: "225/65/16C Vanmejor 112/110R Carga", preco: "R$ 559,00", imagem: "/pneus/zmax.webp" }
];
const CARROS_POR_MEDIDA = {
  "195/55/15": ["Chevrolet Onix", "VW Polo", "VW Virtus", "Hyundai HB20S", "Chevrolet Prisma", "VW Gol (G6/G7)", "Ford Fiesta"],
  "185/60/14": ["VW Gol", "VW Voyage", "VW Fox", "Fiat Palio", "Fiat Siena", "Chevrolet Celta", "Ford Ka", "Ford Fiesta"],
  "175/65/14": ["Chevrolet Onix", "Chevrolet Prisma", "Hyundai HB20", "Renault Sandero", "Renault Logan", "VW Up!", "Ford Ka"],
  "185/60/15": ["Chevrolet Onix", "Hyundai HB20", "VW Fox", "Fiat Argo", "Fiat Cronos", "VW Gol", "Renault Sandero"],
  "205/55/17": ["Honda Civic", "Toyota Corolla", "Chevrolet Cruze", "VW Jetta", "Kia Cerato", "Nissan Sentra"],
  "175/70/13": ["VW Gol (G2/G3/G4)", "Fiat Palio", "Fiat Uno", "Chevrolet Corsa", "Chevrolet Celta", "Renault Clio"],
  "195/60/15": ["Toyota Corolla (antigo)", "Honda Civic (antigo)", "Chevrolet Astra", "Chevrolet Vectra", "Ford Focus", "Renault Mégane"],
  "185/65/15": ["Renault Logan", "Renault Sandero", "Chevrolet Spin", "Chevrolet Cobalt", "Honda Fit", "Honda City", "Fiat Idea"],
  "215/50/17": ["Honda Civic", "Toyota Corolla", "Chevrolet Cruze", "Kia Cerato", "Nissan Sentra", "Renault Mégane"],
  "185/55/16": ["VW Polo", "VW Virtus", "Honda City", "Honda Fit", "Toyota Yaris", "Hyundai HB20", "Chevrolet Onix Plus"],
  "265/60/18": ["Toyota Hilux", "Toyota SW4", "Ford Ranger", "Chevrolet S10", "VW Amarok", "Mitsubishi Pajero", "Chevrolet Trailblazer"],
  "175/70/14": ["VW Gol", "VW Voyage", "VW Saveiro", "Fiat Strada", "Fiat Fiorino", "Fiat Doblò", "VW Kombi"],
  "175/55/16": ["VW Up!", "Peugeot 208", "Fiat Argo", "Fiat Mobi", "VW Polo (entrada)"],
  "175/75/14": ["VW Kombi", "Fiat Fiorino", "Fiat Strada", "VW Saveiro", "Fiat Doblò Cargo"],
  "225/65/16": ["Renault Master", "Mercedes Sprinter", "Fiat Ducato", "Iveco Daily", "Peugeot Boxer", "Citroën Jumper"]
};
function carrosParaMedida(largura, perfil, aro) {
  return CARROS_POR_MEDIDA[`${largura}/${perfil}/${aro}`] ?? [];
}
const CATALOGO_POR_MARCA = {
  pirelli: "/pneus-pirelli-curitiba",
  michelin: "/pneus-michelin-curitiba",
  goodyear: "/pneus-goodyear-curitiba",
  continental: "/pneus-continental-curitiba",
  yokohama: "/pneus-yokohama-curitiba",
  bridgestone: "/pneus-bridgestone-curitiba",
  firestone: "/pneu-firestone-curitiba",
  prinx: "/pneu-prinx-curitiba",
  delinte: "/pneu-delinte-curitiba"
};
const CATALOGO_GERAL = "/pneus";
function catalogoParaMarca(marca) {
  const chave = marca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
  const url = CATALOGO_POR_MARCA[chave];
  return url ? { url, proprio: true } : { url: CATALOGO_GERAL, proprio: false };
}
function slugify(text) {
  return text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[/.]/g, "-").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function parsePrice(preco) {
  return Number(preco.replace(/[^0-9,]/g, "").replace(",", ".")) || 0;
}
function enrich(raw) {
  const medidaMatch = raw.nome.match(/(\d{3})\/(\d{2})\/(\d{2})/);
  const largura = medidaMatch ? Number(medidaMatch[1]) : 0;
  const perfil = medidaMatch ? Number(medidaMatch[2]) : 0;
  const aro = medidaMatch ? Number(medidaMatch[3]) : 0;
  const medida = medidaMatch ? `${largura}/${perfil} R${aro}` : "";
  const cargaMatch = raw.nome.match(/\b(\d{2,3}(?:\/\d{2,3})?)\s*([A-Z])\b/);
  const carga = cargaMatch ? cargaMatch[1] : "—";
  const velocidade = cargaMatch ? cargaMatch[2] : "—";
  const catalogo = catalogoParaMarca(raw.marca);
  return {
    slug: slugify(`${raw.marca}-${raw.nome}`),
    marca: raw.marca,
    nome: raw.nome,
    preco: raw.preco,
    precoNumero: parsePrice(raw.preco),
    imagem: raw.imagem,
    imagemSmall: raw.imagem.replace(/\.webp$/, "-300.webp"),
    medida,
    largura,
    perfil,
    aro,
    carga,
    velocidade,
    carros: carrosParaMedida(largura, perfil, aro),
    catalogoUrl: catalogo.url,
    temCatalogoMarca: catalogo.proprio
  };
}
const PROMO_TIRES = RAW_TIRES.map(enrich);
function getPromoTireBySlug(slug) {
  if (!slug) return void 0;
  return PROMO_TIRES.find((t) => t.slug === slug);
}
export {
  PROMO_TIRES,
  getPromoTireBySlug
};
