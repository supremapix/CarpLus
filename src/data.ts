
export interface Tire {
  id: number;
  slug: string;
  nome: string;
  marca: string;
  linha: string;
  aro: number;
  medida: string;
  largura: number;
  perfil: number;
  indiceVelocidade: string;
  indiceCarga: string;
  categoria: string;
  tipoVeiculo: string[];
  imagem: string;
  imagemGrande: string;
  descricao: string;
  carros: string[];
  destaque: boolean;
  novoModelo: boolean;
  url_original?: string;
}

export const TIRES: Tire[] = [
  // ══════════════════════════════════════
  // LINHA P400 EVO – Econômico / Urbano
  // ══════════════════════════════════════
  {
    id: 1,
    slug: "pneu-pirelli-175-70r13-p400-evo-82t",
    nome: "Pirelli 175/70R13 P400 Evo 82T",
    marca: "Pirelli",
    linha: "P400 Evo",
    aro: 13,
    medida: "175/70R13",
    largura: 175,
    perfil: 70,
    indiceVelocidade: "T (190km/h)",
    indiceCarga: "82 (475kg)",
    categoria: "Econômico",
    tipoVeiculo: ["Passeio", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "Com estrutura reforçada, o pneu 175/70R13 P400 Evo oferece desempenho seguro e bom custo-benefício para uso diário em vias urbanas. Ideal para quem busca economia sem abrir mão da segurança.",
    carros: ["Chevrolet Celta", "Chevrolet Classic", "Fiat Uno", "VW Gol G4", "Fiat Palio"],
    destaque: false,
    novoModelo: false,
    url_original: "https://carpluscwb.com.br/pneu-pirelli-175-70r13-p400-evo-82t/"
  },
  {
    id: 2,
    slug: "pneu-pirelli-175-70r13-p400-evo-82t-chevrolet-celta",
    nome: "Pirelli 175/70R13 P400 Evo 82T – Chevrolet Celta",
    marca: "Pirelli",
    linha: "P400 Evo",
    aro: 13,
    medida: "175/70R13",
    largura: 175,
    perfil: 70,
    indiceVelocidade: "T (190km/h)",
    indiceCarga: "82 (475kg)",
    categoria: "Econômico",
    tipoVeiculo: ["Passeio", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "Pneu Pirelli P400 Evo medida 175/70R13 82T, indicado para Chevrolet Celta. Ótimo desempenho em pista seca e molhada com baixo ruído interno.",
    carros: ["Chevrolet Celta"],
    destaque: false,
    novoModelo: false
  },
  {
    id: 3,
    slug: "pneu-pirelli-175-70r13-p400-evo-82t-chevrolet-classic",
    nome: "Pirelli 175/70R13 P400 Evo 82T – Chevrolet Classic",
    marca: "Pirelli",
    linha: "P400 Evo",
    aro: 13, medida: "175/70R13", largura: 175, perfil: 70,
    indiceVelocidade: "T (190km/h)", indiceCarga: "82 (475kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Sedan"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "P400 Evo medida 175/70R13 específico para Chevrolet Classic. Excelente aderência e durabilidade para uso urbano intenso.",
    carros: ["Chevrolet Classic"], destaque: false, novoModelo: false
  },
  {
    id: 4,
    slug: "pneu-pirelli-175-70r13-p400-evo-82t-fiat-uno",
    nome: "Pirelli 175/70R13 P400 Evo 82T – Fiat Uno",
    marca: "Pirelli", linha: "P400 Evo", aro: 13, medida: "175/70R13",
    largura: 175, perfil: 70, indiceVelocidade: "T (190km/h)", indiceCarga: "82 (475kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "Pneu Pirelli P400 Evo para Fiat Uno. Conforto no dia a dia com segurança garantida pela tecnologia Pirelli.",
    carros: ["Fiat Uno"], destaque: false, novoModelo: false
  },
  {
    id: 5,
    slug: "pneu-pirelli-175-70r14-p400-evo-84t",
    nome: "Pirelli 175/70R14 P400 Evo 84T",
    marca: "Pirelli", linha: "P400 Evo", aro: 14, medida: "175/70R14",
    largura: 175, perfil: 70, indiceVelocidade: "T (190km/h)", indiceCarga: "84 (500kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Hatch", "Sedan"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "P400 Evo aro 14 de 175/70R14 84T. Versão atualizada com melhor resistência ao desgaste e estabilidade em curvas.",
    carros: ["Chevrolet Celta", "Honda Fit", "VW Polo", "Fiat Palio Weekend"],
    destaque: false, novoModelo: false
  },
  {
    id: 6,
    slug: "pneu-pirelli-175-70r14-p400-evo-84t-chevrolet-celta",
    nome: "Pirelli 175/70R14 P400 Evo 84T – Chevrolet Celta",
    marca: "Pirelli", linha: "P400 Evo", aro: 14, medida: "175/70R14",
    largura: 175, perfil: 70, indiceVelocidade: "T (190km/h)", indiceCarga: "84 (500kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "P400 Evo aro 14 para Chevrolet Celta. Desempenho urbano comprovado com foco em economia de combustível.",
    carros: ["Chevrolet Celta"], destaque: false, novoModelo: false
  },
  {
    id: 7,
    slug: "pneu-pirelli-175-70r14-p400-evo-84t-honda-fit",
    nome: "Pirelli 175/70R14 P400 Evo 84T – Honda Fit",
    marca: "Pirelli", linha: "P400 Evo", aro: 14, medida: "175/70R14",
    largura: 175, perfil: 70, indiceVelocidade: "T (190km/h)", indiceCarga: "84 (500kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "P400 Evo para Honda Fit aro 14. Conforto acústico e baixa resistência ao rolamento para melhor eficiência.",
    carros: ["Honda Fit"], destaque: false, novoModelo: false
  },
  {
    id: 8,
    slug: "pneu-pirelli-175-80r14-w-cita-88t",
    nome: "Pirelli 175/80R14 W-Cita 88T",
    marca: "Pirelli", linha: "W-Cita", aro: 14, medida: "175/80R14",
    largura: 175, perfil: 80, indiceVelocidade: "T (190km/h)", indiceCarga: "88 (560kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Sedan"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Pneu Pirelli W-Cita 175/80R14 88T. Desenvolvido para conforto em longas distâncias com tecnologia de baixo ruído.",
    carros: ["VW Golf", "Fiat Tempra", "Chevrolet Vectra antigo"],
    destaque: false, novoModelo: false
  },

  // ══════════════════════════════════════
  // LINHA P7 / P7 ALL SEASON – Intermediário
  // ══════════════════════════════════════
  {
    id: 9,
    slug: "pneu-pirelli-185-55r15-p7-all-season-82h",
    nome: "Pirelli 185/55R15 P7 All Season 82H",
    marca: "Pirelli", linha: "P7 All Season", aro: 15, medida: "185/55R15",
    largura: 185, perfil: 55, indiceVelocidade: "H (210km/h)", indiceCarga: "82 (475kg)",
    categoria: "All Season", tipoVeiculo: ["Passeio", "Hatch Premium", "Sedan"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "O P7 All Season combina desempenho em pista seca e molhada ao longo de todas as estações. Tecnologia PNCS (Pirelli Noise Canceling System) para máximo conforto acústico.",
    carros: ["Fiat Bravo", "VW Golf", "Peugeot 308", "Renault Mégane"],
    destaque: true, novoModelo: false
  },
  {
    id: 10,
    slug: "pneu-pirelli-185-60r15-p7-88h-xl",
    nome: "Pirelli 185/60R15 P7 88H XL",
    marca: "Pirelli", linha: "P7", aro: 15, medida: "185/60R15",
    largura: 185, perfil: 60, indiceVelocidade: "H (210km/h)", indiceCarga: "88 XL (560kg)",
    categoria: "Conforto", tipoVeiculo: ["Passeio", "Hatch", "Sedan"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "P7 88H XL (Extra Load) para carros que exigem maior capacidade de carga. Alta performance com conforto de dirigibilidade.",
    carros: ["Honda Civic", "Toyota Corolla antigo", "Renault Fluence"],
    destaque: false, novoModelo: false
  },

  // ══════════════════════════════════════
  // LINHA P400 EVO – ARO 14/15
  // ══════════════════════════════════════
  {
    id: 11,
    slug: "pneu-pirelli-185-60r14-p400-evo-82h",
    nome: "Pirelli 185/60R14 P400 Evo 82H",
    marca: "Pirelli", linha: "P400 Evo", aro: 14, medida: "185/60R14",
    largura: 185, perfil: 60, indiceVelocidade: "H (210km/h)", indiceCarga: "82 (475kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Hatch", "Sedan"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "P400 Evo 185/60R14 para uso urbano com índice H (210km/h). Boa estabilidade em pista molhada e baixo custo operacional.",
    carros: ["Fiat Stilo", "VW Polo", "Chevrolet Prisma antigo"],
    destaque: false, novoModelo: false
  },
  {
    id: 12,
    slug: "pneu-pirelli-185-65r14-p400-evo-86t",
    nome: "Pirelli 185/65R14 P400 Evo 86T",
    marca: "Pirelli", linha: "P400 Evo", aro: 14, medida: "185/65R14",
    largura: 185, perfil: 65, indiceVelocidade: "T (190km/h)", indiceCarga: "86 (530kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Sedan", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "P400 Evo 185/65R14 – uma das medidas mais populares do Brasil. Equilíbrio perfeito entre custo, durabilidade e desempenho.",
    carros: ["VW Gol G5/G6", "Chevrolet Onix 1.0", "Fiat Palio", "Renault Logan"],
    destaque: true, novoModelo: false
  },
  {
    id: 13,
    slug: "pneu-pirelli-195-55r15-p400-evo-85h",
    nome: "Pirelli 195/55R15 P400 Evo 85H",
    marca: "Pirelli", linha: "P400 Evo", aro: 15, medida: "195/55R15",
    largura: 195, perfil: 55, indiceVelocidade: "H (210km/h)", indiceCarga: "85 (515kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "P400 Evo aro 15 perfil baixo. Visual esportivo com economia para o bolso. Ótimo para quem tem rodas esportivas.",
    carros: ["VW Golf", "Peugeot 206/207", "Fiat Bravo", "Seat Ibiza"],
    destaque: false, novoModelo: false
  },
  {
    id: 14,
    slug: "pneu-pirelli-195-60r15-p400-evo-88h",
    nome: "Pirelli 195/60R15 P400 Evo 88H",
    marca: "Pirelli", linha: "P400 Evo", aro: 15, medida: "195/60R15",
    largura: 195, perfil: 60, indiceVelocidade: "H (210km/h)", indiceCarga: "88 (560kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Sedan", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "P400 Evo 195/60R15 – medida muito solicitada. Durabilidade e segurança para uso urbano diário.",
    carros: ["Chevrolet Cruze", "Chevrolet Onix Plus", "Fiat Argo 1.3", "Honda City", "VW Virtus"],
    destaque: true, novoModelo: false
  },
  {
    id: 15,
    slug: "pneu-pirelli-195-60r15-p400-evo-88h-chevrolet-cruze",
    nome: "Pirelli 195/60R15 P400 Evo 88H – Chevrolet Cruze",
    marca: "Pirelli", linha: "P400 Evo", aro: 15, medida: "195/60R15",
    largura: 195, perfil: 60, indiceVelocidade: "H (210km/h)", indiceCarga: "88 (560kg)",
    categoria: "Econômico", tipoVeiculo: ["Sedan"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "Pneu P400 Evo 195/60R15 homologado para Chevrolet Cruze. Direção precisa e frenagem eficiente.",
    carros: ["Chevrolet Cruze"], destaque: false, novoModelo: false
  },
  {
    id: 16,
    slug: "pneu-pirelli-195-60r15-p400-evo-88h-chevrolet-onix",
    nome: "Pirelli 195/60R15 P400 Evo 88H – Chevrolet Onix",
    marca: "Pirelli", linha: "P400 Evo", aro: 15, medida: "195/60R15",
    largura: 195, perfil: 60, indiceVelocidade: "H (210km/h)", indiceCarga: "88 (560kg)",
    categoria: "Econômico", tipoVeiculo: ["Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "P400 Evo específico para Chevrolet Onix – o carro mais vendido do Brasil. Tecnologia Pirelli para o carro da família.",
    carros: ["Chevrolet Onix", "Chevrolet Onix Plus"],
    destaque: false, novoModelo: false
  },
  {
    id: 17,
    slug: "pneu-pirelli-195-60r15-p400-evo-88h-fiat-argo",
    nome: "Pirelli 195/60R15 P400 Evo 88H – Fiat Argo",
    marca: "Pirelli", linha: "P400 Evo", aro: 15, medida: "195/60R15",
    largura: 195, perfil: 60, indiceVelocidade: "H (210km/h)", indiceCarga: "88 (560kg)",
    categoria: "Econômico", tipoVeiculo: ["Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-pirelli-p400-evo-600x600.webp",
    descricao: "Pneu Pirelli para Fiat Argo 195/60R15. Resposta ágil à direção e conforto no dia a dia urbano.",
    carros: ["Fiat Argo"], destaque: false, novoModelo: false
  },

  // ══════════════════════════════════════
  // LINHA P ZERO – Esportivo Premium
  // ══════════════════════════════════════
  {
    id: 18,
    slug: "pneu-pirelli-205-45r17-p-zero-84v-run-flat",
    nome: "Pirelli 205/45R17 P Zero 84V Run Flat",
    marca: "Pirelli", linha: "P Zero", aro: 17, medida: "205/45R17",
    largura: 205, perfil: 45, indiceVelocidade: "V (240km/h)", indiceCarga: "84 (500kg)",
    categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Sedan Premium", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-205-45r17-pirelli-pzero.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/pneu-205-45r17-pirelli-pzero.webp",
    descricao: "O P Zero Run Flat permite rodar até 80km a 80km/h mesmo sem pressão. Tecnologia de ponta para carros esportivos e premium. Máxima aderência em pista seca.",
    carros: ["BMW Série 1", "BMW Série 3", "Mini Cooper", "Audi A3"],
    destaque: true, novoModelo: true
  },

  // ══════════════════════════════════════
  // OUTRAS MARCAS – Michelin
  // ══════════════════════════════════════
  {
    id: 19,
    slug: "pneu-michelin-185-65r15-energy-xm2-88h",
    nome: "Michelin 185/65R15 Energy XM2 88H",
    marca: "Michelin", linha: "Energy XM2", aro: 15, medida: "185/65R15",
    largura: 185, perfil: 65, indiceVelocidade: "H (210km/h)", indiceCarga: "88 (560kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Hatch", "Sedan"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Michelin Energy XM2 – referência em eficiência energética. Menor consumo de combustível com durabilidade Michelin.",
    carros: ["Toyota Yaris", "Honda Fit", "VW Polo", "Renault Sandero"],
    destaque: false, novoModelo: false
  },
  {
    id: 20,
    slug: "pneu-michelin-205-55r16-primacy-4-91v",
    nome: "Michelin 205/55R16 Primacy 4 91V",
    marca: "Michelin", linha: "Primacy 4", aro: 16, medida: "205/55R16",
    largura: 205, perfil: 55, indiceVelocidade: "V (240km/h)", indiceCarga: "91 (615kg)",
    categoria: "Conforto Premium", tipoVeiculo: ["Sedan", "Hatch Premium"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Primacy 4 – a última geração dos pneus de conforto Michelin. Frenagem segura mesmo quando o pneu está gasto.",
    carros: ["VW Jetta", "Toyota Corolla", "Honda Civic", "Chevrolet Cruze LT"],
    destaque: true, novoModelo: false
  },
  {
    id: 21,
    slug: "pneu-michelin-225-45r17-pilot-sport-4-94y",
    nome: "Michelin 225/45R17 Pilot Sport 4 94Y",
    marca: "Michelin", linha: "Pilot Sport 4", aro: 17, medida: "225/45R17",
    largura: 225, perfil: 45, indiceVelocidade: "Y (300km/h)", indiceCarga: "94 (670kg)",
    categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Sedan Premium"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Pilot Sport 4 – o pneu esportivo número 1 do mundo. Tecnologia de F1 para as ruas. Grip extremo e frenagem precisa.",
    carros: ["Audi A4", "BMW 320i", "Mercedes C180", "VW Golf GTI"],
    destaque: true, novoModelo: true
  },

  // GOODYEAR
  {
    id: 22,
    slug: "pneu-goodyear-185-65r15-direction-touring-88h",
    nome: "Goodyear 185/65R15 Direction Touring 88H",
    marca: "Goodyear", linha: "Direction Touring", aro: 15, medida: "185/65R15",
    largura: 185, perfil: 65, indiceVelocidade: "H (210km/h)", indiceCarga: "88 (560kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Sedan", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Direction Touring oferece conforto e estabilidade para viagens longas. Roda com baixo ruído e excelente aderência em chuva.",
    carros: ["Toyota Yaris", "Fiat Cronos", "VW Polo", "Renault Logan"],
    destaque: false, novoModelo: false
  },
  {
    id: 23,
    slug: "pneu-goodyear-205-55r16-efficientgrip-performance-91v",
    nome: "Goodyear 205/55R16 EfficientGrip Performance 91V",
    marca: "Goodyear", linha: "EfficientGrip", aro: 16, medida: "205/55R16",
    largura: 205, perfil: 55, indiceVelocidade: "V (240km/h)", indiceCarga: "91 (615kg)",
    categoria: "Performance", tipoVeiculo: ["Sedan", "Hatch Premium"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "EfficientGrip Performance – melhor frenagem em piso molhado com baixíssima resistência ao rolamento.",
    carros: ["VW Jetta", "Honda Civic", "Toyota Corolla", "Hyundai HB20S"],
    destaque: false, novoModelo: false
  },

  // CONTINENTAL
  {
    id: 24,
    slug: "pneu-continental-195-65r15-conticomfortcontact-cc6-91h",
    nome: "Continental 195/65R15 ContiComfortContact CC6 91H",
    marca: "Continental", linha: "ContiComfortContact", aro: 15, medida: "195/65R15",
    largura: 195, perfil: 65, indiceVelocidade: "H (210km/h)", indiceCarga: "91 (615kg)",
    categoria: "Conforto", tipoVeiculo: ["Sedan", "Hatch", "Passeio"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "ContiComfortContact CC6 – tecnologia alemã para máximo conforto e menor emissão de ruído. Perfeito para dirigir na cidade.",
    carros: ["Toyota Corolla", "Honda Civic antigo", "Renault Fluence"],
    destaque: false, novoModelo: false
  },

  // FIRESTONE
  {
    id: 25,
    slug: "pneu-firestone-175-70r13-f600-82t",
    nome: "Firestone 175/70R13 F600 82T",
    marca: "Firestone", linha: "F600", aro: 13, medida: "175/70R13",
    largura: 175, perfil: 70, indiceVelocidade: "T (190km/h)", indiceCarga: "82 (475kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Firestone F600 – custo-benefício líder de mercado. Ideal para carros populares em uso urbano intenso.",
    carros: ["Chevrolet Celta", "Fiat Uno", "VW Gol G4"],
    destaque: false, novoModelo: false
  },

  // BRIDGESTONE
  {
    id: 26,
    slug: "pneu-bridgestone-185-65r15-ecopia-ep150-88h",
    nome: "Bridgestone 185/65R15 Ecopia EP150 88H",
    marca: "Bridgestone", linha: "Ecopia", aro: 15, medida: "185/65R15",
    largura: 185, perfil: 65, indiceVelocidade: "H (210km/h)", indiceCarga: "88 (560kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Hatch", "Sedan"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Ecopia EP150 – foco em eficiência de combustível e baixo impacto ambiental. Tecnologia eco-friendly Bridgestone.",
    carros: ["Honda Fit", "Toyota Etios", "VW Polo", "Hyundai HB20"],
    destaque: false, novoModelo: false
  },

  // ADICIONAIS MICHELIN
  {
    id: 27,
    slug: "pneu-michelin-215-50r17-primacy-4-95v",
    nome: "Michelin 215/50R17 Primacy 4 95V",
    marca: "Michelin", linha: "Primacy 4", aro: 17, medida: "215/50R17",
    largura: 215, perfil: 50, indiceVelocidade: "V (240km/h)", indiceCarga: "95 (690kg)",
    categoria: "Conforto Premium", tipoVeiculo: ["Sedan", "SUV"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Primacy 4 proporciona segurança excepcional do primeiro ao último quilômetro. Ideal para veículos premium.",
    carros: ["Chevrolet Cruze", "Honda Civic", "Ford Focus"],
    destaque: false, novoModelo: false
  },
  {
    id: 28,
    slug: "pneu-michelin-235-60r18-primacy-suv-103v",
    nome: "Michelin 235/60R18 Primacy SUV 103V",
    marca: "Michelin", linha: "Primacy SUV", aro: 18, medida: "235/60R18",
    largura: 235, perfil: 60, indiceVelocidade: "V (240km/h)", indiceCarga: "103 (875kg)",
    categoria: "SUV", tipoVeiculo: ["SUV", "Picape"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Desenvolvido especificamente para SUVs grandes, oferece estabilidade e frenagem superior em molhado.",
    carros: ["Volvo XC60", "Audi Q5", "Land Rover Freelander"],
    destaque: true, novoModelo: false
  },
  {
    id: 29,
    slug: "pneu-michelin-245-45r18-pilot-sport-4-100y",
    nome: "Michelin 245/45R18 Pilot Sport 4 100Y",
    marca: "Michelin", linha: "Pilot Sport 4", aro: 18, medida: "245/45R18",
    largura: 245, perfil: 45, indiceVelocidade: "Y (300km/h)", indiceCarga: "100 (800kg)",
    categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Sedan Premium"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Pilot Sport 4 – controle e reatividade. Inspirado na tecnologia de pneus de competição.",
    carros: ["BMW Série 5", "Audi A6", "Mercedes Classe E"],
    destaque: false, novoModelo: false
  },

  // ADICIONAIS GOODYEAR
  {
    id: 30,
    slug: "pneu-goodyear-175-65r14-direction-touring-82t",
    nome: "Goodyear 175/65R14 Direction Touring 82T",
    marca: "Goodyear", linha: "Direction Touring", aro: 14, medida: "175/65R14",
    largura: 175, perfil: 65, indiceVelocidade: "T (190km/h)", indiceCarga: "82 (475kg)",
    categoria: "Econômico", tipoVeiculo: ["Passeio", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Segmento econômico com durabilidade e segurança Goodyear. Ótimo para frotas e uso severo.",
    carros: ["Fiat Palio", "VW Gol", "Ford Ka antigo"],
    destaque: false, novoModelo: false
  },
  {
    id: 31,
    slug: "pneu-goodyear-225-65r17-efficientgrip-suv-102h",
    nome: "Goodyear 225/65R17 EfficientGrip SUV 102H",
    marca: "Goodyear", linha: "EfficientGrip", aro: 17, medida: "225/65R17",
    largura: 225, perfil: 65, indiceVelocidade: "H (210km/h)", indiceCarga: "102 (850kg)",
    categoria: "SUV", tipoVeiculo: ["SUV", "Crossover"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Eficiência de combustível e aderência para SUVs modernos. Tecnologia FuelSaving.",
    carros: ["Honda CR-V", "Toyota RAV4", "Jeep Cherokee"],
    destaque: false, novoModelo: false
  },
  {
    id: 32,
    slug: "pneu-goodyear-265-70r16-wrangler-at-silenttrac-112t",
    nome: "Goodyear 265/70R16 Wrangler AT SilentTrac 112T",
    marca: "Goodyear", linha: "Wrangler", aro: 16, medida: "265/70R16",
    largura: 265, perfil: 70, indiceVelocidade: "T (190km/h)", indiceCarga: "112 (1120kg)",
    categoria: "All-Terrain", tipoVeiculo: ["Picape", "SUV 4x4"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Pneu todo terreno com tecnologia SilentTrac para redução de ruído em asfalto.",
    carros: ["Toyota Hilux", "Chevrolet S10", "Mitsubishi L200"],
    destaque: true, novoModelo: true
  },

  // ADICIONAIS CONTINENTAL
  {
    id: 33,
    slug: "pneu-continental-205-55r16-contipowercontact-2-91v",
    nome: "Continental 205/55R16 ContiPowerContact 2 91V",
    marca: "Continental", linha: "ContiPowerContact", aro: 16, medida: "205/55R16",
    largura: 205, perfil: 55, indiceVelocidade: "V (240km/h)", indiceCarga: "91 (615kg)",
    categoria: "Performance", tipoVeiculo: ["Sedan", "Hatch"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "ContiPowerContact 2 – durabilidade extrema e economia de combustível com segurança alemã.",
    carros: ["VW Golf", "Toyota Corolla", "Hyundai HB20S"],
    destaque: true, novoModelo: false
  },
  {
    id: 34,
    slug: "pneu-continental-225-50r17-contisportcontact-5-94y",
    nome: "Continental 225/50R17 ContiSportContact 5 94Y",
    marca: "Continental", linha: "ContiSportContact", aro: 17, medida: "225/50R17",
    largura: 225, perfil: 50, indiceVelocidade: "Y (300km/h)", indiceCarga: "94 (670kg)",
    categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Sedan Premium"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "SportContact 5 – controle excepcional e curta distância de frenagem sob todas as condições.",
    carros: ["BMW Série 3", "Audi A4", "Mercedes Classe C"],
    destaque: false, novoModelo: false
  },
  {
    id: 35,
    slug: "pneu-continental-235-55r19-contisportcontact-5-suv-101v",
    nome: "Continental 235/55R19 ContiSportContact 5 SUV 101V",
    marca: "Continental", linha: "ContiSportContact", aro: 19, medida: "235/55R19",
    largura: 235, perfil: 55, indiceVelocidade: "V (240km/h)", indiceCarga: "101 (825kg)",
    categoria: "SUV Premium", tipoVeiculo: ["SUV"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2025/07/logo-produtos.webp",
    descricao: "Versão SUV do aclamado SportContact 5. Máxima performance para utilitários esportivos de luxo.",
    carros: ["Volvo XC60", "Audi Q5", "Mercedes GLC"],
    destaque: false, novoModelo: false
  }
];

export const SERVICES = [
  { id: 1, slug: 'loja-de-pneus', title: 'Loja de Pneus', icon: 'Disc', description: 'Pneus Pirelli, Michelin, Goodyear e mais. Em até 10x sem juros.' },
  { id: 2, slug: 'alinhamento-3d', title: 'Alinhamento 3D', icon: 'Target', description: 'Alinhamento computadorizado 3D de alta precisão para sua segurança.' },
  { id: 3, slug: 'troca-de-oleo', title: 'Troca de Óleo', icon: 'Droplets', description: 'Filtros e lubrificantes de primeira linha para todos os modelos.' },
  { id: 4, slug: 'scanner-automotivo', title: 'Scanner Automotivo', icon: 'Cpu', description: 'Diagnóstico eletrônico completo e reset de falhas do sistema.' },
  { id: 5, slug: 'suspensao-e-freios', title: 'Suspensão e Freios', icon: 'ShieldAlert', description: 'Revisão completa de amortecedores, pastilhas e discos.' },
  { id: 6, slug: 'ar-condicionado', title: 'Ar-Condicionado', icon: 'Snowflake', description: 'Higienização e carga de gás para o máximo conforto térmico.' },
  { id: 7, slug: 'manutencao-motor', title: 'Manutenção Motor', icon: 'Wrench', description: 'Reparos mecânicos preventivos e corretivos especializados.' },
  { id: 8, slug: 'conserto-de-rodas', title: 'Conserto de Rodas', icon: 'Hammer', description: 'Recuperação e retífica de rodas de liga leve em Curitiba.' },
  { id: 9, slug: 'correia-dentada', title: 'Correia Dentada', icon: 'Link', description: 'Troca preventiva de correia dentada com peças originais e garantia.' },
];

export const NEIGHBORHOODS = [
  // ZONA SUL / PROXIMOS
  { name: "Portão", lat: -25.4770, lng: -49.2845, tempo: "2 min", zona: "sul", via: "Av. Arthur da Silva Bernardes" },
  { name: "Água Verde", lat: -25.4627, lng: -49.2809, tempo: "5 min", zona: "sul", via: "Av. República Argentina" },
  { name: "Campo Comprido", lat: -25.4740, lng: -49.3140, tempo: "8 min", zona: "sul", via: "Rua Eduardo Sprada" },
  { name: "Guaíra", lat: -25.4830, lng: -49.2980, tempo: "5 min", zona: "sul", via: "Rua Kennedy" },
  { name: "Fazendinha", lat: -25.4960, lng: -49.3120, tempo: "10 min", zona: "sul", via: "Rua João Dembinski" },
  { name: "CIC", lat: -25.5000, lng: -49.3500, tempo: "15 min", zona: "sul", via: "Rodovia do Xisto" },
  { name: "Parolin", lat: -25.4730, lng: -49.2650, tempo: "8 min", zona: "sul", via: "Av. Mal. Floriano Peixoto" },
  { name: "Novo Mundo", lat: -25.4880, lng: -49.2880, tempo: "7 min", zona: "sul", via: "Av. Brasília" },
  { name: "Capão Raso", lat: -25.4980, lng: -49.2880, tempo: "10 min", zona: "sul", via: "Av. Winston Churchill" },
  { name: "Pinheirinho", lat: -25.5180, lng: -49.2980, tempo: "15 min", zona: "sul", via: "Linha Verde" },
  { name: "Sítio Cercado", lat: -25.5280, lng: -49.2580, tempo: "20 min", zona: "sul", via: "Rua Izaac Ferreira da Cruz" },
  { name: "Tatuquara", lat: -25.5680, lng: -49.3480, tempo: "25 min", zona: "sul", via: "Rodovia Regis Bittencourt" },
  { name: "Umbará", lat: -25.5580, lng: -49.2680, tempo: "25 min", zona: "sul", via: "Rua Nicola Pellanda" },
  
  // CENTRO
  { name: "Batel", lat: -25.4427, lng: -49.2810, tempo: "8 min", zona: "centro", via: "Av. Sete de Setembro" },
  { name: "Centro", lat: -25.4284, lng: -49.2733, tempo: "12 min", zona: "centro", via: "Av. Visconde de Guarapuava" },
  { name: "Rebouças", lat: -25.4470, lng: -49.2700, tempo: "10 min", zona: "centro", via: "Rua Westphalen" },
  { name: "Centro Cívico", lat: -25.4180, lng: -49.2680, tempo: "15 min", zona: "centro", via: "Av. Cândido de Abreu" },
  { name: "Mercês", lat: -25.4360, lng: -49.2950, tempo: "12 min", zona: "centro", via: "Rua Manoel Ribas" },
  { name: "Bigorrilho", lat: -25.4390, lng: -49.2930, tempo: "10 min", zona: "centro", via: "Rua Padre Agostinho" },
  { name: "Ahú", lat: -25.4080, lng: -49.2680, tempo: "18 min", zona: "norte", via: "Av. Anita Garibaldi" },
  { name: "Cabral", lat: -25.4080, lng: -49.2520, tempo: "18 min", zona: "norte", via: "Av. Paraná" },
  { name: "Juvevê", lat: -25.4180, lng: -49.2580, tempo: "15 min", zona: "centro", via: "Rua João Gualberto" },
  { name: "Alto da Glória", lat: -25.4230, lng: -49.2630, tempo: "15 min", zona: "centro", via: "Rua Nicolau Maeder" },
  { name: "Alto da Rua XV", lat: -25.4300, lng: -49.2600, tempo: "15 min", zona: "centro", via: "Rua Itupava" },
  { name: "Cristo Rei", lat: -25.4380, lng: -49.2480, tempo: "15 min", zona: "centro", via: "Av. São José" },
  { name: "Jardim Botânico", lat: -25.4420, lng: -49.2440, tempo: "15 min", zona: "centro", via: "Av. Pref. Omar Sabbag" },
  
  // NORTE / LESTE
  { name: "Santa Felicidade", lat: -25.4020, lng: -49.3280, tempo: "20 min", zona: "norte", via: "Av. Manoel Ribas" },
  { name: "Santa Cândida", lat: -25.3680, lng: -49.2700, tempo: "25 min", zona: "norte", via: "Av. Paraná" },
  { name: "Boa Vista", lat: -25.3880, lng: -49.2530, tempo: "22 min", zona: "norte", via: "Rua Holanda" },
  { name: "Bacacheri", lat: -25.3980, lng: -49.2330, tempo: "20 min", zona: "norte", via: "Av. Erasto Gaertner" },
  { name: "Bairro Alto", lat: -25.3850, lng: -49.2580, tempo: "20 min", zona: "norte", via: "Rua Alberico Flores Bueno" },
  { name: "Cajuru", lat: -25.4500, lng: -49.2150, tempo: "20 min", zona: "leste", via: "Av. Prefeito Mauricio Fruet" },
  { name: "Uberaba", lat: -25.4680, lng: -49.2200, tempo: "18 min", zona: "leste", via: "Av. das Torres" },
  { name: "Tingui", lat: -25.3950, lng: -49.2450, tempo: "20 min", zona: "norte", via: "Rua Mascarenhas de Moraes" },
  { name: "Atuba", lat: -25.3780, lng: -49.2180, tempo: "25 min", zona: "norte", via: "BR-116" },
  { name: "Barreirinha", lat: -25.3830, lng: -49.2780, tempo: "22 min", zona: "norte", via: "Av. Anita Garibaldi" },
  { name: "Pilarzinho", lat: -25.3920, lng: -49.2880, tempo: "20 min", zona: "norte", via: "Rua Amauri Lange Silveira" },
  { name: "São Lourenço", lat: -25.3950, lng: -49.2880, tempo: "18 min", zona: "norte", via: "Rua Mateus Leme" },
];

export const POPULAR_REGIONS = [
  { name: "Vila Sandra", zona: "popular", tempo: "10 min", via: "Rua João Dembinski" },
  { name: "Neoville", zona: "popular", tempo: "12 min", via: "Rua Pedro Gusso" },
  { name: "Vila Verde", zona: "popular", tempo: "15 min", via: "Ecoville" },
  { name: "Vila Nossa Senhora da Luz", zona: "popular", tempo: "12 min", via: "Linha Verde" },
  { name: "Vila Torres", zona: "popular", tempo: "12 min", via: "Prado Velho" },
  { name: "Vila Pantanal", zona: "popular", tempo: "20 min", via: "Uberaba" },
  { name: "Vitória Régia", zona: "popular", tempo: "18 min", via: "Rua João Bettega" },
  { name: "Caiuá", zona: "popular", tempo: "15 min", via: "Rua Raúl Pompéia" },
  { name: "Sabará", zona: "popular", tempo: "15 min", via: "CIC" },
  { name: "Vila Sandra", zona: "popular", tempo: "12 min", via: "CIC" },
  { name: "Vila Izabel", zona: "popular", tempo: "5 min", via: "Portão" },
  { name: "Santa Felicidade Norte", zona: "popular", tempo: "25 min", via: "Santa Felicidade" },
];

export const CITIES = [
  { name: "São José dos Pinhais", lat: -25.5346, lng: -49.2070, tempo: "30 min", zona: "metro", via: "Av. das Torres" },
  { name: "Pinhais", lat: -25.4441, lng: -49.1919, tempo: "22 min", zona: "metro", via: "Rod. Deputado João Leopoldo Jacomel" },
  { name: "Colombo", lat: -25.2915, lng: -49.2239, tempo: "30 min", zona: "metro", via: "PR-417" },
  { name: "Araucária", lat: -25.5925, lng: -49.4005, tempo: "30 min", zona: "metro", via: "Rodovia do Xisto" },
  { name: "Almirante Tamandaré", lat: -25.3243, lng: -49.3039, tempo: "25 min", zona: "metro", via: "Rodovia dos Minérios" },
  { name: "Campo Largo", lat: -25.4590, lng: -49.5278, tempo: "35 min", zona: "metro", via: "BR-277" },
  { name: "Fazenda Rio Grande", lat: -25.6600, lng: -49.3060, tempo: "35 min", zona: "metro", via: "BR-116" },
  { name: "Piraquara", lat: -25.4428, lng: -49.0620, tempo: "40 min", zona: "metro", via: "Rodovia João Leopoldo Jacomel" },
  { name: "Quatro Barras", lat: -25.3644, lng: -49.0769, tempo: "40 min", zona: "metro", via: "BR-116" },
  { name: "Campina Grande do Sul", lat: -25.3050, lng: -49.0550, tempo: "45 min", zona: "metro", via: "BR-116" },
];
