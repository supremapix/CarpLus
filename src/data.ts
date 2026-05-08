
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
    imagem: "https://http2.mlstatic.com/D_834516-MLA99820843057_112025-C.jpg",
    imagemGrande: "https://http2.mlstatic.com/D_834516-MLA99820843057_112025-C.jpg",
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
    imagem: "https://kdpneus.vteximg.com.br/arquivos/ids/167375-1000-1000/kd-pneus-pirelli-cinturatoP7_principal.jpg?v=635412807666570000",
    imagemGrande: "https://kdpneus.vteximg.com.br/arquivos/ids/167375-1000-1000/kd-pneus-pirelli-cinturatoP7_principal.jpg?v=635412807666570000",
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
    imagem: "https://http2.mlstatic.com/D_Q_NP_2X_864229-MLA99443168018_112025-T.webp",
    imagemGrande: "https://http2.mlstatic.com/D_Q_NP_2X_864229-MLA99443168018_112025-T.webp",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_733214-MLA99353516140_112025-F.webp",
    imagemGrande: "https://http2.mlstatic.com/D_NQ_NP_2X_733214-MLA99353516140_112025-F.webp",
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
    imagem: "https://pneubarato.vtexassets.com/arquivos/ids/157090-800-auto?v=639052050479700000&width=800&height=auto&aspect=true",
    imagemGrande: "https://pneubarato.vtexassets.com/arquivos/ids/157090-800-auto?v=639052050479700000&width=800&height=auto&aspect=true",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_757136-MLU77101238791_062024-F.webp",
    imagemGrande: "https://http2.mlstatic.com/D_NQ_NP_2X_757136-MLU77101238791_062024-F.webp",
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
    imagem: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18565r15-goodyear-eagle-touring-88h-1.png?width=1200&height=1200&optimize=low",
    imagemGrande: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18565r15-goodyear-eagle-touring-88h-1.png?width=1200&height=1200&optimize=low",
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
    imagem: "https://images.tcdn.com.br/img/img_prod/1411063/pneu_20555r16_goodyear_efficientgrip_performance_9_1_20260114082455_85d4804b5090.jpg",
    imagemGrande: "https://images.tcdn.com.br/img/img_prod/1411063/pneu_20555r16_goodyear_efficientgrip_performance_9_1_20260114082455_85d4804b5090.jpg",
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
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGbyppwu42btjb-x4pxmYOJER2hWM0BjbLQ&s",
    imagemGrande: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPGbyppwu42btjb-x4pxmYOJER2hWM0BjbLQ&s",
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
    imagem: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-17570r13-goodyear-kelly-edge-touring-2-82t-1.png?optimize=high&bg-color=255%2C255%2C255&fit=bounds&height=300&width=300&format=jpeg",
    imagemGrande: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-17570r13-goodyear-kelly-edge-touring-2-82t-1.png?optimize=high&bg-color=255%2C255%2C255&fit=bounds&height=300&width=300&format=jpeg",
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
    imagem: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18565r15-bridgestone-ecopia-ep150-88h-1.png?width=1200&height=1200&optimize=low",
    imagemGrande: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-18565r15-bridgestone-ecopia-ep150-88h-1.png?width=1200&height=1200&optimize=low",
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
    imagem: "https://m.media-amazon.com/images/I/61bfO1+ANBL._AC_SY300_SX300_QL70_ML2_.jpg",
    imagemGrande: "https://m.media-amazon.com/images/I/61bfO1+ANBL._AC_SY300_SX300_QL70_ML2_.jpg",
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
    imagem: "https://images.tcdn.com.br/img/img_prod/1094037/pneu_michelin_aro_18_primacy_suv_235_60r18_103v_1115_1_3e1c199ea05fe29d80b69fa9e4d8ab2a.png",
    imagemGrande: "https://images.tcdn.com.br/img/img_prod/1094037/pneu_michelin_aro_18_primacy_suv_235_60r18_103v_1115_1_3e1c199ea05fe29d80b69fa9e4d8ab2a.png",
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
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_627317-MLB108531668774_032026-F.webp",
    imagemGrande: "https://http2.mlstatic.com/D_NQ_NP_2X_627317-MLB108531668774_032026-F.webp",
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
    imagem: "https://leopneus.com.br/wp-content/uploads/2021/11/GOODYEAR13-324x324.png",
    imagemGrande: "https://leopneus.com.br/wp-content/uploads/2021/11/GOODYEAR13-324x324.png",
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
    imagem: "https://imgs.casasbahia.com.br/8483447/1g.jpg",
    imagemGrande: "https://imgs.casasbahia.com.br/8483447/1g.jpg",
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
    imagem: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-26570r16-goodyear-wrangler-at-adventure-112t-1_1.png?width=1200&height=1200&optimize=low",
    imagemGrande: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-26570r16-goodyear-wrangler-at-adventure-112t-1_1.png?width=1200&height=1200&optimize=low",
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
    imagem: "https://www.pensepneus.com.br/media/catalog/product/cache/e5c188f9fa76550a763b93b91095e130/p/n/pneu_continental_aro_16_205-55_r16_91v_powercontact_2.webp",
    imagemGrande: "https://www.pensepneus.com.br/media/catalog/product/cache/e5c188f9fa76550a763b93b91095e130/p/n/pneu_continental_aro_16_205-55_r16_91v_powercontact_2.webp",
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
    imagem: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-22550r17-continental-contisportcontact-5-98y-1.jpg?width=1200&height=1200&optimize=low",
    imagemGrande: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-22550r17-continental-contisportcontact-5-98y-1.jpg?width=1200&height=1200&optimize=low",
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
    imagem: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-23555r19-continental-contisportcontact-5-suv-101w-1.jpg?width=1200&height=1200&optimize=low",
    imagemGrande: "https://www.acheipneus.com.br/media/catalog/product/p/n/pneu-23555r19-continental-contisportcontact-5-suv-101w-1.jpg?width=1200&height=1200&optimize=low",
    descricao: "Versão SUV do aclamado SportContact 5. Máxima performance para utilitários esportivos de luxo.",
    carros: ["Volvo XC60", "Audi Q5", "Mercedes GLC"],
    destaque: false, novoModelo: false
  },

  // ══════════════════════════════════════
  // YOKOHAMA – Linha C.Drive 2
  // ══════════════════════════════════════
  {
    id: 36,
    slug: "pneu-yokohama-c-drive-2-zps-235-50r18-97v-runflat",
    nome: "Yokohama C.Drive 2 Z.P.S 235/50R18 97V (RUNFLAT)",
    marca: "Yokohama", linha: "C.Drive 2", aro: 18, medida: "235/50R18",
    largura: 235, perfil: 50, indiceVelocidade: "V (240km/h)", indiceCarga: "97 (730kg)",
    categoria: "Conforto Premium", tipoVeiculo: ["SUV Premium", "Sedan Premium"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-c-drive.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-c-drive.webp",
    descricao: "O Pneu Yokohama C.Drive 2 Z.P.S é um modelo de alta performance desenvolvido para veículos premium, como o Mercedes-Benz GLA e BMW X1. Ele equilibra segurança avançada com conforto de condução, utilizando a tecnologia Z.P.S (Zero Pressure System - Run Flat) da Yokohama, que permite rodar até 80 km a 80 km/h mesmo sem pressão nos pneus.",
    carros: ["Mercedes-Benz GLA", "BMW X1", "Audi Q3"],
    destaque: true, novoModelo: true
  },

  // ══════════════════════════════════════
  // YOKOHAMA – Linha ADVAN dB V551
  // ══════════════════════════════════════
  {
    id: 37,
    slug: "pneu-yokohama-advan-db-v551-215-50r17-91v",
    nome: "Yokohama ADVAN dB V551 215/50R17 91V",
    marca: "Yokohama", linha: "ADVAN dB V551", aro: 17, medida: "215/50R17",
    largura: 215, perfil: 50, indiceVelocidade: "V (240km/h)", indiceCarga: "91 (615kg)",
    categoria: "Conforto Premium", tipoVeiculo: ["Sedan Premium", "Híbrido"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-db.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-db.webp",
    descricao: "O pneu Yokohama ADVAN dB Decibel V551, desenvolvido para veículos de alto padrão com exigência de baixíssimo nível de ruído combinado a Alta Performance, é Equipamento Original do Honda Civic Híbrido. Tecnologia silenciosa para máximo conforto acústico.",
    carros: ["Honda Civic Híbrido", "Toyota Prius", "Lexus CT200h"],
    destaque: true, novoModelo: true
  },

  // ══════════════════════════════════════
  // YOKOHAMA – Linha ADVAN Sport V103 (RUNFLAT)
  // ══════════════════════════════════════
  {
    id: 38,
    slug: "pneu-yokohama-v103-zps-225-50rf17-94y-runflat",
    nome: "Yokohama V103 Z.P.S 225/50 RF17 94Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V103", aro: 17, medida: "225/50R17",
    largura: 225, perfil: 50, indiceVelocidade: "Y (300km/h)", indiceCarga: "94 (670kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    descricao: "O Yokohama ADVAN Sport V103 Z.P.S é um pneu de ultra alta performance (UHP) projetado para sedãs e cupês premium, como os da BMW, Mercedes-Benz e Audi. Ele combina um comportamento esportivo com a segurança da tecnologia de rodagem sem pressão.",
    carros: ["BMW Série 3", "Mercedes Classe C", "Audi A4"],
    destaque: false, novoModelo: true
  },
  {
    id: 39,
    slug: "pneu-yokohama-v103-zps-205-45rf17-84v-runflat",
    nome: "Yokohama V103 Z.P.S 205/45 RF17 84V (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V103", aro: 17, medida: "205/45R17",
    largura: 205, perfil: 45, indiceVelocidade: "V (240km/h)", indiceCarga: "84 (500kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Hatch Esportivo"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    descricao: "O Yokohama ADVAN Sport V103 Z.P.S é um pneu de ultra alta performance (UHP) projetado para sedãs e cupês premium, como os da BMW, Mercedes-Benz e Audi. Ele combina um comportamento esportivo com a segurança da tecnologia de rodagem sem pressão.",
    carros: ["BMW Série 1", "Mini Cooper", "Mercedes A-Class"],
    destaque: false, novoModelo: true
  },
  {
    id: 40,
    slug: "pneu-yokohama-v103-zps-245-50rf18-100w-runflat",
    nome: "Yokohama V103 Z.P.S 245/50 RF18 100W (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V103", aro: 18, medida: "245/50R18",
    largura: 245, perfil: 50, indiceVelocidade: "W (270km/h)", indiceCarga: "100 (800kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "SUV Premium"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    descricao: "O Yokohama ADVAN Sport V103 Z.P.S é um pneu de ultra alta performance (UHP) projetado para sedãs e cupês premium, como os da BMW, Mercedes-Benz e Audi. Ele combina um comportamento esportivo com a segurança da tecnologia de rodagem sem pressão.",
    carros: ["BMW Série 5", "Mercedes Classe E", "Audi A6"],
    destaque: false, novoModelo: true
  },
  {
    id: 41,
    slug: "pneu-yokohama-v103-zps-225-40rf18-88y-runflat",
    nome: "Yokohama V103 Z.P.S 225/40 RF18 88Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V103", aro: 18, medida: "225/40R18",
    largura: 225, perfil: 40, indiceVelocidade: "Y (300km/h)", indiceCarga: "88 (560kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    descricao: "O Yokohama ADVAN Sport V103 Z.P.S é um pneu de ultra alta performance (UHP) projetado para sedãs e cupês premium, como os da BMW, Mercedes-Benz e Audi. Ele combina um comportamento esportivo com a segurança da tecnologia de rodagem sem pressão.",
    carros: ["BMW Série 3", "Mercedes C-Class Coupe", "Audi A5"],
    destaque: false, novoModelo: true
  },
  {
    id: 42,
    slug: "pneu-yokohama-v103-zps-245-40rf18-93y-runflat",
    nome: "Yokohama V103 Z.P.S 245/40 RF18 93Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V103", aro: 18, medida: "245/40R18",
    largura: 245, perfil: 40, indiceVelocidade: "Y (300km/h)", indiceCarga: "93 (650kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    descricao: "O Yokohama ADVAN Sport V103 Z.P.S é um pneu de ultra alta performance (UHP) projetado para sedãs e cupês premium, como os da BMW, Mercedes-Benz e Audi. Ele combina um comportamento esportivo com a segurança da tecnologia de rodagem sem pressão.",
    carros: ["BMW Série 4", "Mercedes CLA", "Audi S4"],
    destaque: false, novoModelo: true
  },
  {
    id: 43,
    slug: "pneu-yokohama-v103-zps-255-35rf18-90y-runflat",
    nome: "Yokohama V103 Z.P.S 255/35 RF18 90Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V103", aro: 18, medida: "255/35R18",
    largura: 255, perfil: 35, indiceVelocidade: "Y (300km/h)", indiceCarga: "90 (600kg)",
    categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    descricao: "O Yokohama ADVAN Sport V103 Z.P.S é um pneu de ultra alta performance (UHP) projetado para sedãs e cupês premium, como os da BMW, Mercedes-Benz e Audi. Ele combina um comportamento esportivo com a segurança da tecnologia de rodagem sem pressão.",
    carros: ["BMW M3", "Mercedes AMG C63", "Audi RS4"],
    destaque: true, novoModelo: true
  },
  {
    id: 44,
    slug: "pneu-yokohama-v103-zps-275-35rf18-95y-runflat",
    nome: "Yokohama V103 Z.P.S 275/35 RF18 95Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V103", aro: 18, medida: "275/35R18",
    largura: 275, perfil: 35, indiceVelocidade: "Y (300km/h)", indiceCarga: "95 (690kg)",
    categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v103-runflat.webp",
    descricao: "O Yokohama ADVAN Sport V103 Z.P.S é um pneu de ultra alta performance (UHP) projetado para sedãs e cupês premium, como os da BMW, Mercedes-Benz e Audi. Ele combina um comportamento esportivo com a segurança da tecnologia de rodagem sem pressão.",
    carros: ["BMW M4", "Mercedes AMG GT", "Audi RS5"],
    destaque: true, novoModelo: true
  },

  // ══════════════════════════════════════
  // YOKOHAMA – Linha ADVAN Sport V105 (RUNFLAT)
  // ══════════════════════════════════════
  {
    id: 45,
    slug: "pneu-yokohama-v105-zps-225-55rf17-97y-runflat",
    nome: "Yokohama V105 Z.P.S. 225/55RF17 97Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 17, medida: "225/55R17",
    largura: 225, perfil: 55, indiceVelocidade: "Y (300km/h)", indiceCarga: "97 (730kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "SUV Premium"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW X3", "Mercedes GLC", "Audi Q5"],
    destaque: false, novoModelo: true
  },
  {
    id: 46,
    slug: "pneu-yokohama-v105-zps-205-50rf17-89w-runflat",
    nome: "Yokohama V105 Z.P.S. 205/50RF17 89W (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 17, medida: "205/50R17",
    largura: 205, perfil: 50, indiceVelocidade: "W (270km/h)", indiceCarga: "89 (580kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Hatch Esportivo"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW Série 1", "Mini Cooper S", "Mercedes A-Class"],
    destaque: false, novoModelo: true
  },
  {
    id: 47,
    slug: "pneu-yokohama-v105-zps-225-45rf18-91y-runflat",
    nome: "Yokohama V105 Z.P.S. 225/45RF18 91Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 18, medida: "225/45R18",
    largura: 225, perfil: 45, indiceVelocidade: "Y (300km/h)", indiceCarga: "91 (615kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW Série 3", "Mercedes C-Class", "Audi A4"],
    destaque: false, novoModelo: true
  },
  {
    id: 48,
    slug: "pneu-yokohama-v105-zps-245-45rf18-96y-runflat",
    nome: "Yokohama V105 Z.P.S. 245/45RF18 96Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 18, medida: "245/45R18",
    largura: 245, perfil: 45, indiceVelocidade: "Y (300km/h)", indiceCarga: "96 (710kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "SUV Premium"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW Série 5", "Mercedes E-Class", "Audi A6"],
    destaque: false, novoModelo: true
  },
  {
    id: 49,
    slug: "pneu-yokohama-v105-zps-245-40rf18-93y-runflat",
    nome: "Yokohama V105 Z.P.S. 245/40RF18 93Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 18, medida: "245/40R18",
    largura: 245, perfil: 40, indiceVelocidade: "Y (300km/h)", indiceCarga: "93 (650kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW Série 4", "Mercedes CLA", "Audi A5"],
    destaque: false, novoModelo: true
  },
  {
    id: 50,
    slug: "pneu-yokohama-v105-zps-255-40rf18-95y-runflat",
    nome: "Yokohama V105 Z.P.S. 255/40RF18 95Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 18, medida: "255/40R18",
    largura: 255, perfil: 40, indiceVelocidade: "Y (300km/h)", indiceCarga: "95 (690kg)",
    categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW M2", "Mercedes AMG CLA 45", "Audi S5"],
    destaque: false, novoModelo: true
  },
  {
    id: 51,
    slug: "pneu-yokohama-v105-zps-275-40rf18-99y-runflat",
    nome: "Yokohama V105 Z.P.S. 275/40RF18 99Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 18, medida: "275/40R18",
    largura: 275, perfil: 40, indiceVelocidade: "Y (300km/h)", indiceCarga: "99 (775kg)",
    categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW M3", "Mercedes AMG C63", "Audi RS4"],
    destaque: true, novoModelo: true
  },
  {
    id: 52,
    slug: "pneu-yokohama-v105-zps-225-40rf19-93y-runflat",
    nome: "Yokohama V105 Z.P.S. 225/40RF19 93Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 19, medida: "225/40R19",
    largura: 225, perfil: 40, indiceVelocidade: "Y (300km/h)", indiceCarga: "93 (650kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW Série 3 M Sport", "Mercedes C-Class AMG Line", "Audi S4"],
    destaque: false, novoModelo: true
  },
  {
    id: 53,
    slug: "pneu-yokohama-v105-zps-245-40rf19-94y-runflat",
    nome: "Yokohama V105 Z.P.S. 245/40RF19 94Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 19, medida: "245/40R19",
    largura: 245, perfil: 40, indiceVelocidade: "Y (300km/h)", indiceCarga: "94 (670kg)",
    categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW Série 5 M Sport", "Mercedes E-Class AMG Line", "Audi A6 S-Line"],
    destaque: false, novoModelo: true
  },
  {
    id: 54,
    slug: "pneu-yokohama-v105-zps-255-35rf19-96y-runflat",
    nome: "Yokohama V105 Z.P.S. 255/35RF19 96Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 19, medida: "255/35R19",
    largura: 255, perfil: 35, indiceVelocidade: "Y (300km/h)", indiceCarga: "96 (710kg)",
    categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW M4", "Mercedes AMG C63 Coupe", "Audi RS5"],
    destaque: true, novoModelo: true
  },
  {
    id: 55,
    slug: "pneu-yokohama-v105-zps-275-35rf19-96y-runflat",
    nome: "Yokohama V105 Z.P.S. 275/35RF19 96Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 19, medida: "275/35R19",
    largura: 275, perfil: 35, indiceVelocidade: "Y (300km/h)", indiceCarga: "96 (710kg)",
    categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW M5", "Mercedes AMG E63", "Audi RS6"],
    destaque: true, novoModelo: true
  },
  {
    id: 56,
    slug: "pneu-yokohama-v105-zps-275-40rf20-102y-runflat",
    nome: "Yokohama V105 Z.P.S. 275/40RF20 102Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 20, medida: "275/40R20",
    largura: 275, perfil: 40, indiceVelocidade: "Y (300km/h)", indiceCarga: "102 (850kg)",
    categoria: "SUV Premium", tipoVeiculo: ["SUV Premium", "SUV Esportivo"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW X5 M", "Mercedes GLE AMG", "Audi SQ7"],
    destaque: true, novoModelo: true
  },
  {
    id: 57,
    slug: "pneu-yokohama-v105-zps-245-45rf20-99y-runflat",
    nome: "Yokohama V105 Z.P.S. 245/45RF20 99Y (RUNFLAT)",
    marca: "Yokohama", linha: "ADVAN Sport V105", aro: 20, medida: "245/45R20",
    largura: 245, perfil: 45, indiceVelocidade: "Y (300km/h)", indiceCarga: "99 (775kg)",
    categoria: "SUV Premium", tipoVeiculo: ["SUV Premium", "Sedan Premium"],
    imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-advan-sport-v105.webp",
    descricao: "O pneu Yokohama Advan Sport V105 Z.P.S é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas. Tecnologia Run Flat para continuar rodando mesmo sem pressão.",
    carros: ["BMW X3 M40i", "Mercedes GLC 43 AMG", "Audi SQ5"],
    destaque: true, novoModelo: true
  },

  // ══════════════════════════════════════
  // YOKOHAMA NEOVA AD09 – Ultra High Performance
  // ══════════════════════════════════════
  { id: 58, slug: "pneu-yokohama-neova-ad09-225-40r18-92w", nome: "Yokohama NEOVA AD09 225/40R18 92W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "225/40R18", largura: 225, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "92 (630kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Hatch Esportivo", "Sedan Premium"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["VW Golf GTI", "Audi A3", "BMW Série 1", "Mercedes A250", "Honda Civic Si"], destaque: true, novoModelo: true },
  { id: 59, slug: "pneu-yokohama-neova-ad09-185-55r15-82v", nome: "Yokohama NEOVA AD09 185/55R15 82V", marca: "Yokohama", linha: "NEOVA AD09", aro: 15, medida: "185/55R15", largura: 185, perfil: 55, indiceVelocidade: "V (240km/h)", indiceCarga: "82 (475kg)", categoria: "Esportivo", tipoVeiculo: ["Hatch Esportivo", "Passeio"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Honda Fit", "Peugeot 208", "VW Polo TSI", "Ford Fiesta ST"], destaque: false, novoModelo: true },
  { id: 60, slug: "pneu-yokohama-neova-ad09-195-55r15-85v", nome: "Yokohama NEOVA AD09 195/55R15 85V", marca: "Yokohama", linha: "NEOVA AD09", aro: 15, medida: "195/55R15", largura: 195, perfil: 55, indiceVelocidade: "V (240km/h)", indiceCarga: "85 (515kg)", categoria: "Esportivo", tipoVeiculo: ["Hatch Esportivo", "Passeio"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["VW Golf", "Peugeot 308", "Fiat Bravo", "Seat Ibiza FR"], destaque: false, novoModelo: true },
  { id: 61, slug: "pneu-yokohama-neova-ad09-195-50r15-82v", nome: "Yokohama NEOVA AD09 195/50R15 82V", marca: "Yokohama", linha: "NEOVA AD09", aro: 15, medida: "195/50R15", largura: 195, perfil: 50, indiceVelocidade: "V (240km/h)", indiceCarga: "82 (475kg)", categoria: "Esportivo", tipoVeiculo: ["Hatch Esportivo", "Passeio"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Honda Civic antigo", "VW Gol GTI", "Peugeot 206 RC"], destaque: false, novoModelo: true },
  { id: 62, slug: "pneu-yokohama-neova-ad09-205-50r15-86v", nome: "Yokohama NEOVA AD09 205/50R15 86V", marca: "Yokohama", linha: "NEOVA AD09", aro: 15, medida: "205/50R15", largura: 205, perfil: 50, indiceVelocidade: "V (240km/h)", indiceCarga: "86 (530kg)", categoria: "Esportivo", tipoVeiculo: ["Hatch Esportivo", "Sedan"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["VW Golf IV", "Honda Civic VII", "Peugeot 306"], destaque: false, novoModelo: true },
  { id: 63, slug: "pneu-yokohama-neova-ad09-205-55r16-91v", nome: "Yokohama NEOVA AD09 205/55R16 91V", marca: "Yokohama", linha: "NEOVA AD09", aro: 16, medida: "205/55R16", largura: 205, perfil: 55, indiceVelocidade: "V (240km/h)", indiceCarga: "91 (615kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan", "Hatch Premium"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["VW Jetta", "Honda Civic", "Toyota Corolla XRS", "Chevrolet Cruze RS"], destaque: true, novoModelo: true },
  { id: 64, slug: "pneu-yokohama-neova-ad09-225-50r16-92v", nome: "Yokohama NEOVA AD09 225/50R16 92V", marca: "Yokohama", linha: "NEOVA AD09", aro: 16, medida: "225/50R16", largura: 225, perfil: 50, indiceVelocidade: "V (240km/h)", indiceCarga: "92 (630kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW Série 3 E46", "Mercedes C-Class W203", "Audi A4 B6"], destaque: false, novoModelo: true },
  { id: 65, slug: "pneu-yokohama-neova-ad09-205-45r16-87w", nome: "Yokohama NEOVA AD09 205/45R16 87W", marca: "Yokohama", linha: "NEOVA AD09", aro: 16, medida: "205/45R16", largura: 205, perfil: 45, indiceVelocidade: "W (270km/h)", indiceCarga: "87 (545kg)", categoria: "Esportivo", tipoVeiculo: ["Hatch Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Mini Cooper S", "Peugeot 208 GTi", "Fiat 500 Abarth"], destaque: false, novoModelo: true },
  { id: 66, slug: "pneu-yokohama-neova-ad09-225-45r16-89w", nome: "Yokohama NEOVA AD09 225/45R16 89W", marca: "Yokohama", linha: "NEOVA AD09", aro: 16, medida: "225/45R16", largura: 225, perfil: 45, indiceVelocidade: "W (270km/h)", indiceCarga: "89 (580kg)", categoria: "Esportivo", tipoVeiculo: ["Hatch Esportivo", "Sedan"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["VW Golf GTI Mk4", "Honda Civic Si", "Subaru Impreza"], destaque: false, novoModelo: true },
  { id: 67, slug: "pneu-yokohama-neova-ad09-205-50r17-89w", nome: "Yokohama NEOVA AD09 205/50R17 89W", marca: "Yokohama", linha: "NEOVA AD09", aro: 17, medida: "205/50R17", largura: 205, perfil: 50, indiceVelocidade: "W (270km/h)", indiceCarga: "89 (580kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan", "Hatch Premium"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Honda Civic Touring", "Toyota Corolla Altis", "VW Jetta GLI"], destaque: false, novoModelo: true },
  { id: 68, slug: "pneu-yokohama-neova-ad09-205-45r17-88w", nome: "Yokohama NEOVA AD09 205/45R17 88W", marca: "Yokohama", linha: "NEOVA AD09", aro: 17, medida: "205/45R17", largura: 205, perfil: 45, indiceVelocidade: "W (270km/h)", indiceCarga: "88 (560kg)", categoria: "Esportivo", tipoVeiculo: ["Hatch Esportivo", "Sedan Premium"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW Série 1", "Mercedes A-Class", "Audi A3 Sportback"], destaque: false, novoModelo: true },
  { id: 69, slug: "pneu-yokohama-neova-ad09-215-45r17-91w", nome: "Yokohama NEOVA AD09 215/45R17 91W", marca: "Yokohama", linha: "NEOVA AD09", aro: 17, medida: "215/45R17", largura: 215, perfil: 45, indiceVelocidade: "W (270km/h)", indiceCarga: "91 (615kg)", categoria: "Esportivo", tipoVeiculo: ["Hatch Esportivo", "Sedan Premium"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["VW Golf GTI Mk7", "Ford Focus ST", "Hyundai i30 N Line"], destaque: true, novoModelo: true },
  { id: 70, slug: "pneu-yokohama-neova-ad09-225-45r17-94w", nome: "Yokohama NEOVA AD09 225/45R17 94W", marca: "Yokohama", linha: "NEOVA AD09", aro: 17, medida: "225/45R17", largura: 225, perfil: 45, indiceVelocidade: "W (270km/h)", indiceCarga: "94 (670kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Sedan Premium", "Hatch Esportivo"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Audi A4", "BMW 320i", "Mercedes C180", "VW Golf GTI", "Subaru WRX"], destaque: true, novoModelo: true },
  { id: 71, slug: "pneu-yokohama-neova-ad09-235-45r17-94w", nome: "Yokohama NEOVA AD09 235/45R17 94W", marca: "Yokohama", linha: "NEOVA AD09", aro: 17, medida: "235/45R17", largura: 235, perfil: 45, indiceVelocidade: "W (270km/h)", indiceCarga: "94 (670kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Sedan Premium"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW 330i", "Mercedes C300", "Audi A5", "Lexus IS"], destaque: false, novoModelo: true },
  { id: 72, slug: "pneu-yokohama-neova-ad09-245-45r17-95w", nome: "Yokohama NEOVA AD09 245/45R17 95W", marca: "Yokohama", linha: "NEOVA AD09", aro: 17, medida: "245/45R17", largura: 245, perfil: 45, indiceVelocidade: "W (270km/h)", indiceCarga: "95 (690kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Sedan Premium", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW M2", "Mercedes AMG A45", "Audi S3", "Ford Mustang"], destaque: true, novoModelo: true },
  { id: 73, slug: "pneu-yokohama-neova-ad09-255-45r17-102w", nome: "Yokohama NEOVA AD09 255/45R17 102W", marca: "Yokohama", linha: "NEOVA AD09", aro: 17, medida: "255/45R17", largura: 255, perfil: 45, indiceVelocidade: "W (270km/h)", indiceCarga: "102 (850kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe", "Sedan Premium"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW M3 E46", "Chevrolet Camaro", "Ford Mustang GT", "Nissan 350Z"], destaque: false, novoModelo: true },
  { id: 74, slug: "pneu-yokohama-neova-ad09-215-40r17-87w", nome: "Yokohama NEOVA AD09 215/40R17 87W", marca: "Yokohama", linha: "NEOVA AD09", aro: 17, medida: "215/40R17", largura: 215, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "87 (545kg)", categoria: "Esportivo", tipoVeiculo: ["Hatch Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Mini Cooper JCW", "Peugeot 208 GTi", "Fiat Abarth 595"], destaque: false, novoModelo: true },
  { id: 75, slug: "pneu-yokohama-neova-ad09-235-40r17-90w", nome: "Yokohama NEOVA AD09 235/40R17 90W", marca: "Yokohama", linha: "NEOVA AD09", aro: 17, medida: "235/40R17", largura: 235, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "90 (600kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe", "Hatch Esportivo"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["VW Golf R", "Ford Focus RS", "Subaru WRX STI", "Honda Civic Type R"], destaque: true, novoModelo: true },
  { id: 76, slug: "pneu-yokohama-neova-ad09-245-40r17-91w", nome: "Yokohama NEOVA AD09 245/40R17 91W", marca: "Yokohama", linha: "NEOVA AD09", aro: 17, medida: "245/40R17", largura: 245, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "91 (615kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW M2", "Porsche Cayman", "Nissan 370Z", "Toyota Supra"], destaque: true, novoModelo: true },
  { id: 77, slug: "pneu-yokohama-neova-ad09-255-40r17-98w", nome: "Yokohama NEOVA AD09 255/40R17 98W", marca: "Yokohama", linha: "NEOVA AD09", aro: 17, medida: "255/40R17", largura: 255, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "98 (750kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911", "Chevrolet Camaro SS", "Ford Mustang GT", "Nissan 370Z"], destaque: true, novoModelo: true },
  { id: 78, slug: "pneu-yokohama-neova-ad09-215-45r18-93w", nome: "Yokohama NEOVA AD09 215/45R18 93W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "215/45R18", largura: 215, perfil: 45, indiceVelocidade: "W (270km/h)", indiceCarga: "93 (650kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Hatch Esportivo"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW Série 1", "Mercedes A-Class", "Audi A3 Sportback S-Line"], destaque: false, novoModelo: true },
  { id: 79, slug: "pneu-yokohama-neova-ad09-225-45r18-95w", nome: "Yokohama NEOVA AD09 225/45R18 95W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "225/45R18", largura: 225, perfil: 45, indiceVelocidade: "W (270km/h)", indiceCarga: "95 (690kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW Série 3", "Mercedes C-Class", "Audi A4", "Lexus IS"], destaque: true, novoModelo: true },
  { id: 80, slug: "pneu-yokohama-neova-ad09-245-45r18-100w", nome: "Yokohama NEOVA AD09 245/45R18 100W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "245/45R18", largura: 245, perfil: 45, indiceVelocidade: "W (270km/h)", indiceCarga: "100 (800kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe", "SUV Premium"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW Série 5", "Mercedes E-Class", "Audi A6", "Lexus GS"], destaque: true, novoModelo: true },
  { id: 81, slug: "pneu-yokohama-neova-ad09-215-40r18-89w", nome: "Yokohama NEOVA AD09 215/40R18 89W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "215/40R18", largura: 215, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "89 (580kg)", categoria: "Esportivo", tipoVeiculo: ["Hatch Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Mini Cooper JCW", "Peugeot 308 GTi", "Fiat Abarth 595"], destaque: false, novoModelo: true },
  { id: 82, slug: "pneu-yokohama-neova-ad09-235-40r18-95w", nome: "Yokohama NEOVA AD09 235/40R18 95W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "235/40R18", largura: 235, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "95 (690kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe", "Sedan Premium"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["VW Golf R", "Ford Focus RS", "Subaru WRX STI", "Honda Civic Type R"], destaque: true, novoModelo: true },
  { id: 83, slug: "pneu-yokohama-neova-ad09-245-40r18-97w", nome: "Yokohama NEOVA AD09 245/40R18 97W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "245/40R18", largura: 245, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "97 (730kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW M2", "Porsche Cayman", "Nissan 370Z", "Toyota Supra"], destaque: true, novoModelo: true },
  { id: 84, slug: "pneu-yokohama-neova-ad09-255-40r18-99w", nome: "Yokohama NEOVA AD09 255/40R18 99W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "255/40R18", largura: 255, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "99 (775kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911", "Chevrolet Camaro SS", "Ford Mustang GT"], destaque: true, novoModelo: true },
  { id: 85, slug: "pneu-yokohama-neova-ad09-265-40r18-101w", nome: "Yokohama NEOVA AD09 265/40R18 101W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "265/40R18", largura: 265, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "101 (825kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe", "Muscle Car"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Chevrolet Camaro ZL1", "Ford Mustang Shelby", "Dodge Challenger"], destaque: true, novoModelo: true },
  { id: 86, slug: "pneu-yokohama-neova-ad09-275-40r18-103w", nome: "Yokohama NEOVA AD09 275/40R18 103W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "275/40R18", largura: 275, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "103 (875kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Muscle Car"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Chevrolet Camaro ZL1", "Ford Mustang Shelby GT500", "Dodge Challenger Hellcat"], destaque: true, novoModelo: true },
  { id: 87, slug: "pneu-yokohama-neova-ad09-245-35r18-92w", nome: "Yokohama NEOVA AD09 245/35R18 92W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "245/35R18", largura: 245, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "92 (630kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche Cayman GT4", "BMW M2 Competition", "Audi TT RS"], destaque: false, novoModelo: true },
  { id: 88, slug: "pneu-yokohama-neova-ad09-255-35r18-94w", nome: "Yokohama NEOVA AD09 255/35R18 94W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "255/35R18", largura: 255, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "94 (670kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 718 Cayman", "BMW M3", "Mercedes AMG C63"], destaque: true, novoModelo: true },
  { id: 89, slug: "pneu-yokohama-neova-ad09-265-35r18-97w", nome: "Yokohama NEOVA AD09 265/35R18 97W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "265/35R18", largura: 265, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "97 (730kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911", "BMW M4", "Mercedes AMG GT"], destaque: true, novoModelo: true },
  { id: 90, slug: "pneu-yokohama-neova-ad09-295-35r18-103w", nome: "Yokohama NEOVA AD09 295/35R18 103W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "295/35R18", largura: 295, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "103 (875kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 Turbo", "Ferrari 488", "Lamborghini Huracan"], destaque: true, novoModelo: true },
  { id: 91, slug: "pneu-yokohama-neova-ad09-285-30r18-97w", nome: "Yokohama NEOVA AD09 285/30R18 97W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "285/30R18", largura: 285, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "97 (730kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 GT3", "Ferrari F8", "McLaren 720S"], destaque: true, novoModelo: true },
  { id: 92, slug: "pneu-yokohama-neova-ad09-295-30r18-98w", nome: "Yokohama NEOVA AD09 295/30R18 98W", marca: "Yokohama", linha: "NEOVA AD09", aro: 18, medida: "295/30R18", largura: 295, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "98 (750kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 GT3 RS", "Ferrari SF90", "Lamborghini Aventador"], destaque: true, novoModelo: true },
  { id: 93, slug: "pneu-yokohama-neova-ad09-225-40r19-93w", nome: "Yokohama NEOVA AD09 225/40R19 93W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "225/40R19", largura: 225, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "93 (650kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW Série 3 M Sport", "Mercedes C-Class AMG Line", "Audi S4"], destaque: false, novoModelo: true },
  { id: 94, slug: "pneu-yokohama-neova-ad09-235-40r19-96w", nome: "Yokohama NEOVA AD09 235/40R19 96W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "235/40R19", largura: 235, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "96 (710kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW M340i", "Mercedes AMG C43", "Audi S5 Sportback"], destaque: true, novoModelo: true },
  { id: 95, slug: "pneu-yokohama-neova-ad09-245-40r19-98w", nome: "Yokohama NEOVA AD09 245/40R19 98W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "245/40R19", largura: 245, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "98 (750kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe", "Esportivo"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW M3", "Mercedes AMG C63", "Audi RS4", "Porsche Cayman S"], destaque: true, novoModelo: true },
  { id: 96, slug: "pneu-yokohama-neova-ad09-255-40r19-100w", nome: "Yokohama NEOVA AD09 255/40R19 100W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "255/40R19", largura: 255, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "100 (800kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911", "BMW M4", "Mercedes AMG GT"], destaque: true, novoModelo: true },
  { id: 97, slug: "pneu-yokohama-neova-ad09-265-40r19-102w", nome: "Yokohama NEOVA AD09 265/40R19 102W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "265/40R19", largura: 265, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "102 (850kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 Carrera S", "Chevrolet Corvette", "Ferrari Portofino"], destaque: true, novoModelo: true },
  { id: 98, slug: "pneu-yokohama-neova-ad09-275-40r19-105w", nome: "Yokohama NEOVA AD09 275/40R19 105W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "275/40R19", largura: 275, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "105 (925kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 Turbo", "Lamborghini Huracan", "Ferrari F8 Tributo"], destaque: true, novoModelo: true },
  { id: 99, slug: "pneu-yokohama-neova-ad09-235-35r19-91w", nome: "Yokohama NEOVA AD09 235/35R19 91W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "235/35R19", largura: 235, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "91 (615kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW M2", "Porsche Cayman GT4", "Audi TT RS"], destaque: false, novoModelo: true },
  { id: 100, slug: "pneu-yokohama-neova-ad09-245-35r19-93w", nome: "Yokohama NEOVA AD09 245/35R19 93W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "245/35R19", largura: 245, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "93 (650kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW M3", "Porsche 718 Cayman S", "Audi RS5"], destaque: true, novoModelo: true },
  { id: 101, slug: "pneu-yokohama-neova-ad09-255-35r19-96w", nome: "Yokohama NEOVA AD09 255/35R19 96W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "255/35R19", largura: 255, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "96 (710kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911", "BMW M4 Competition", "Mercedes AMG GT"], destaque: true, novoModelo: true },
  { id: 102, slug: "pneu-yokohama-neova-ad09-265-35r19-98w", nome: "Yokohama NEOVA AD09 265/35R19 98W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "265/35R19", largura: 265, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "98 (750kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 Carrera 4S", "BMW M4 GTS", "Mercedes AMG GT R"], destaque: true, novoModelo: true },
  { id: 103, slug: "pneu-yokohama-neova-ad09-275-35r19-100w", nome: "Yokohama NEOVA AD09 275/35R19 100W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "275/35R19", largura: 275, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "100 (800kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 Turbo S", "Ferrari 488 GTB", "Lamborghini Huracan"], destaque: true, novoModelo: true },
  { id: 104, slug: "pneu-yokohama-neova-ad09-285-35r19-103w", nome: "Yokohama NEOVA AD09 285/35R19 103W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "285/35R19", largura: 285, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "103 (875kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Ferrari F8 Tributo", "McLaren 720S", "Lamborghini Aventador"], destaque: true, novoModelo: true },
  { id: 105, slug: "pneu-yokohama-neova-ad09-265-30r19-93w", nome: "Yokohama NEOVA AD09 265/30R19 93W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "265/30R19", largura: 265, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "93 (650kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 GT3", "BMW M4 CS", "Mercedes AMG GT Black Series"], destaque: true, novoModelo: true },
  { id: 106, slug: "pneu-yokohama-neova-ad09-275-30r19-96w", nome: "Yokohama NEOVA AD09 275/30R19 96W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "275/30R19", largura: 275, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "96 (710kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 GT3 RS", "Ferrari 488 Pista", "Lamborghini Huracan Performante"], destaque: true, novoModelo: true },
  { id: 107, slug: "pneu-yokohama-neova-ad09-295-30r19-100w", nome: "Yokohama NEOVA AD09 295/30R19 100W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "295/30R19", largura: 295, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "100 (800kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Ferrari SF90 Stradale", "McLaren 765LT", "Lamborghini Aventador SVJ"], destaque: true, novoModelo: true },
  { id: 108, slug: "pneu-yokohama-neova-ad09-305-30r19-102w", nome: "Yokohama NEOVA AD09 305/30R19 102W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "305/30R19", largura: 305, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "102 (850kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 GT2 RS", "Ferrari 812 Superfast", "Lamborghini Aventador S"], destaque: true, novoModelo: true },
  { id: 109, slug: "pneu-yokohama-neova-ad09-325-30r19-105w", nome: "Yokohama NEOVA AD09 325/30R19 105W", marca: "Yokohama", linha: "NEOVA AD09", aro: 19, medida: "325/30R19", largura: 325, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "105 (925kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Ferrari LaFerrari", "McLaren P1", "Porsche 918 Spyder"], destaque: true, novoModelo: true },
  { id: 110, slug: "pneu-yokohama-neova-ad09-245-40r20-99w", nome: "Yokohama NEOVA AD09 245/40R20 99W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "245/40R20", largura: 245, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "99 (775kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW M5", "Mercedes AMG E63", "Audi RS6"], destaque: true, novoModelo: true },
  { id: 111, slug: "pneu-yokohama-neova-ad09-255-40r20-101w", nome: "Yokohama NEOVA AD09 255/40R20 101W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "255/40R20", largura: 255, perfil: 40, indiceVelocidade: "W (270km/h)", indiceCarga: "101 (825kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW M5 Competition", "Mercedes AMG E63 S", "Audi RS7"], destaque: true, novoModelo: true },
  { id: 112, slug: "pneu-yokohama-neova-ad09-235-35r20-92w", nome: "Yokohama NEOVA AD09 235/35R20 92W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "235/35R20", largura: 235, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "92 (630kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["BMW M4", "Porsche Panamera", "Mercedes AMG CLS"], destaque: false, novoModelo: true },
  { id: 113, slug: "pneu-yokohama-neova-ad09-245-35r20-95w", nome: "Yokohama NEOVA AD09 245/35R20 95W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "245/35R20", largura: 245, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "95 (690kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 Carrera", "BMW M4 Competition", "Mercedes AMG GT"], destaque: true, novoModelo: true },
  { id: 114, slug: "pneu-yokohama-neova-ad09-255-35r20-97w", nome: "Yokohama NEOVA AD09 255/35R20 97W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "255/35R20", largura: 255, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "97 (730kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 Turbo", "Ferrari Roma", "McLaren GT"], destaque: true, novoModelo: true },
  { id: 115, slug: "pneu-yokohama-neova-ad09-265-35r20-99w", nome: "Yokohama NEOVA AD09 265/35R20 99W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "265/35R20", largura: 265, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "99 (775kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 GT3", "Ferrari F8 Spider", "Lamborghini Huracan Evo"], destaque: true, novoModelo: true },
  { id: 116, slug: "pneu-yokohama-neova-ad09-275-35r20-102w", nome: "Yokohama NEOVA AD09 275/35R20 102W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "275/35R20", largura: 275, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "102 (850kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 Turbo S", "Ferrari SF90", "McLaren 720S"], destaque: true, novoModelo: true },
  { id: 117, slug: "pneu-yokohama-neova-ad09-285-35r20-104w", nome: "Yokohama NEOVA AD09 285/35R20 104W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "285/35R20", largura: 285, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "104 (900kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Ferrari 812 GTS", "Lamborghini Aventador", "McLaren 765LT"], destaque: true, novoModelo: true },
  { id: 118, slug: "pneu-yokohama-neova-ad09-295-35r20-105w", nome: "Yokohama NEOVA AD09 295/35R20 105W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "295/35R20", largura: 295, perfil: 35, indiceVelocidade: "W (270km/h)", indiceCarga: "105 (925kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Ferrari SF90 Stradale", "Lamborghini Aventador SVJ", "McLaren Senna"], destaque: true, novoModelo: true },
  { id: 119, slug: "pneu-yokohama-neova-ad09-245-30r20-90w", nome: "Yokohama NEOVA AD09 245/30R20 90W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "245/30R20", largura: 245, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "90 (600kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 GT3", "BMW M4 GTS", "Mercedes AMG GT Black Series"], destaque: false, novoModelo: true },
  { id: 120, slug: "pneu-yokohama-neova-ad09-265-30r20-94w", nome: "Yokohama NEOVA AD09 265/30R20 94W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "265/30R20", largura: 265, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "94 (670kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 GT3 RS", "Ferrari 488 Pista", "McLaren 600LT"], destaque: true, novoModelo: true },
  { id: 121, slug: "pneu-yokohama-neova-ad09-275-30r20-97w", nome: "Yokohama NEOVA AD09 275/30R20 97W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "275/30R20", largura: 275, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "97 (730kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Porsche 911 GT2 RS", "Ferrari F8 Tributo", "Lamborghini Huracan Performante"], destaque: true, novoModelo: true },
  { id: 122, slug: "pneu-yokohama-neova-ad09-285-30r20-99w", nome: "Yokohama NEOVA AD09 285/30R20 99W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "285/30R20", largura: 285, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "99 (775kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Ferrari 812 Superfast", "Lamborghini Aventador S", "McLaren 720S"], destaque: true, novoModelo: true },
  { id: 123, slug: "pneu-yokohama-neova-ad09-295-30r20-101w", nome: "Yokohama NEOVA AD09 295/30R20 101W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "295/30R20", largura: 295, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "101 (825kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Ferrari SF90", "Lamborghini Aventador SVJ", "McLaren Senna"], destaque: true, novoModelo: true },
  { id: 124, slug: "pneu-yokohama-neova-ad09-305-30r20-103w", nome: "Yokohama NEOVA AD09 305/30R20 103W", marca: "Yokohama", linha: "NEOVA AD09", aro: 20, medida: "305/30R20", largura: 305, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "103 (875kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Ferrari LaFerrari", "McLaren P1", "Porsche 918 Spyder"], destaque: true, novoModelo: true },
  { id: 125, slug: "pneu-yokohama-neova-ad09-305-30r21-104w", nome: "Yokohama NEOVA AD09 305/30R21 104W", marca: "Yokohama", linha: "NEOVA AD09", aro: 21, medida: "305/30R21", largura: 305, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "104 (900kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Ferrari SF90", "Lamborghini Aventador SVJ", "McLaren 765LT"], destaque: true, novoModelo: true },
  { id: 126, slug: "pneu-yokohama-neova-ad09-325-30r21-108w", nome: "Yokohama NEOVA AD09 325/30R21 108W", marca: "Yokohama", linha: "NEOVA AD09", aro: 21, medida: "325/30R21", largura: 325, perfil: 30, indiceVelocidade: "W (270km/h)", indiceCarga: "108 (1000kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Supercar"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-ad09.webp", descricao: "O Pneu Yokohama NEOVA AD09 é um pneu esportivo de ultra alta performance (UHP) desenvolvido para dirigibilidade extrema em pistas e uso nas ruas. Com composto de borracha assimétrico de nova geração, oferece máxima aderência, resposta precisa na direção e excelente frenagem em piso seco.", carros: ["Ferrari LaFerrari", "Lamborghini Sian", "Bugatti Chiron"], destaque: true, novoModelo: true },
  { id: 127, slug: "pneu-yokohama-advan-sport-v105-285-35r18-97y-mo", nome: "Yokohama ADVAN Sport V105 285/35R18 97Y MO", marca: "Yokohama", linha: "ADVAN Sport V105", aro: 18, medida: "285/35R18", largura: 285, perfil: 35, indiceVelocidade: "Y (300km/h)", indiceCarga: "97 (730kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-v105.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-v105.webp", descricao: "O pneu Yokohama ADVAN Sport V105 é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas, incluindo tecnologia Run Flat Z.P.S para mobilidade mesmo após perda de pressão.", carros: ["Mercedes AMG C63", "Mercedes AMG E63", "BMW M3"], destaque: true, novoModelo: true },
  { id: 128, slug: "pneu-yokohama-advan-sport-v105-245-45zr19-98y", nome: "Yokohama ADVAN Sport V105 245/45ZR19 98Y", marca: "Yokohama", linha: "ADVAN Sport V105", aro: 19, medida: "245/45R19", largura: 245, perfil: 45, indiceVelocidade: "Y (300km/h)", indiceCarga: "98 (750kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "SUV Premium"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-v105.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-v105.webp", descricao: "O pneu Yokohama ADVAN Sport V105 é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas, incluindo tecnologia Run Flat Z.P.S para mobilidade mesmo após perda de pressão.", carros: ["BMW Série 5", "Mercedes E-Class", "Audi A6", "Porsche Cayenne"], destaque: true, novoModelo: true },
  { id: 129, slug: "pneu-yokohama-advan-sport-v105-255-35zr18-94y", nome: "Yokohama ADVAN Sport V105 255/35ZR18 94Y", marca: "Yokohama", linha: "ADVAN Sport V105", aro: 18, medida: "255/35R18", largura: 255, perfil: 35, indiceVelocidade: "Y (300km/h)", indiceCarga: "94 (670kg)", categoria: "Esportivo", tipoVeiculo: ["Esportivo", "Coupe"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-v105.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-v105.webp", descricao: "O pneu Yokohama ADVAN Sport V105 é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas, incluindo tecnologia Run Flat Z.P.S para mobilidade mesmo após perda de pressão.", carros: ["BMW M3", "Mercedes AMG C43", "Audi RS4"], destaque: true, novoModelo: true },
  { id: 130, slug: "pneu-yokohama-advan-sport-v105-225-40zr18-92y", nome: "Yokohama ADVAN Sport V105 225/40ZR18 92Y", marca: "Yokohama", linha: "ADVAN Sport V105", aro: 18, medida: "225/40R18", largura: 225, perfil: 40, indiceVelocidade: "Y (300km/h)", indiceCarga: "92 (630kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Hatch Esportivo"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-v105.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-v105.webp", descricao: "O pneu Yokohama ADVAN Sport V105 é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas, incluindo tecnologia Run Flat Z.P.S para mobilidade mesmo após perda de pressão.", carros: ["BMW Série 3", "Mercedes C-Class", "Audi A4", "VW Golf GTI"], destaque: true, novoModelo: true },
  { id: 131, slug: "pneu-yokohama-advan-sport-v105-225-45zr17-94y", nome: "Yokohama ADVAN Sport V105 225/45ZR17 94Y", marca: "Yokohama", linha: "ADVAN Sport V105", aro: 17, medida: "225/45R17", largura: 225, perfil: 45, indiceVelocidade: "Y (300km/h)", indiceCarga: "94 (670kg)", categoria: "Esportivo", tipoVeiculo: ["Sedan Premium", "Hatch Esportivo"], imagem: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-v105.webp", imagemGrande: "https://carpluscwb.com.br/wp-content/uploads/2026/02/pneu-yokohama-v105.webp", descricao: "O pneu Yokohama ADVAN Sport V105 é um modelo de ultra-alta performance (UHP) que combina características esportivas com tecnologias de segurança avançadas, incluindo tecnologia Run Flat Z.P.S para mobilidade mesmo após perda de pressão.", carros: ["BMW Série 1", "Mercedes A-Class", "Audi A3", "VW Golf R"], destaque: true, novoModelo: true }
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
  
  // NOVOS BAIRROS ADICIONADOS
  { name: "Abranches", lat: -25.3780, lng: -49.2880, tempo: "18 min", zona: "norte", via: "Av. Anita Garibaldi" },
  { name: "Bom Retiro", lat: -25.4150, lng: -49.2750, tempo: "15 min", zona: "centro", via: "Av. Anita Garibaldi" },
  { name: "Boqueirão", lat: -25.4900, lng: -49.2350, tempo: "15 min", zona: "leste", via: "Linha Verde" },
  { name: "Alto Boqueirão", lat: -25.5050, lng: -49.2300, tempo: "18 min", zona: "leste", via: "Linha Verde" },
  { name: "Butiatuvinha", lat: -25.3850, lng: -49.3180, tempo: "25 min", zona: "norte", via: "Av. Manoel Ribas" },
  { name: "Cachoeira", lat: -25.3700, lng: -49.2850, tempo: "20 min", zona: "norte", via: "Av. Anita Garibaldi" },
  { name: "Campina do Siqueira", lat: -25.4450, lng: -49.2980, tempo: "10 min", zona: "centro", via: "Rua Padre Agostinho" },
  { name: "Campo de Santana", lat: -25.5750, lng: -49.2950, tempo: "25 min", zona: "sul", via: "Av. Raimundo Blum" },
  { name: "Capão da Imbuia", lat: -25.4350, lng: -49.2250, tempo: "20 min", zona: "leste", via: "Av. Prefeito Mauricio Fruet" },
  { name: "Caximba", lat: -25.6100, lng: -49.3100, tempo: "30 min", zona: "sul", via: "Av. Juscelino Kubitschek de Oliveira" },
  { name: "Ecoville", lat: -25.4520, lng: -49.3150, tempo: "12 min", zona: "oeste", via: "Av. Pedro Viriato Parigot de Souza" },
  { name: "Fanny", lat: -25.4850, lng: -49.2750, tempo: "8 min", zona: "sul", via: "Rua Nicola Pellanda" },
  { name: "Ganchinho", lat: -25.5600, lng: -49.2700, tempo: "25 min", zona: "sul", via: "Linha Verde" },
  { name: "Guabirotuba", lat: -25.4580, lng: -49.2400, tempo: "15 min", zona: "leste", via: "Av. das Torres" },
  { name: "Hauer", lat: -25.4750, lng: -49.2500, tempo: "12 min", zona: "leste", via: "Av. Marechal Floriano Peixoto" },
  { name: "Hugo Lange", lat: -25.4280, lng: -49.2500, tempo: "15 min", zona: "centro", via: "Rua Nicolau Maeder" },
  { name: "Jardim das Américas", lat: -25.4620, lng: -49.2280, tempo: "18 min", zona: "leste", via: "Av. das Torres" },
  { name: "Jardim Social", lat: -25.4320, lng: -49.2380, tempo: "18 min", zona: "centro", via: "Rua Ubaldino do Amaral" },
  { name: "Lamenha Pequena", lat: -25.3900, lng: -49.3250, tempo: "22 min", zona: "norte", via: "Av. Manoel Ribas" },
  { name: "Lindóia", lat: -25.4880, lng: -49.2780, tempo: "8 min", zona: "sul", via: "Rua Nicola Pellanda" },
  { name: "Mossunguê", lat: -25.4480, lng: -49.3080, tempo: "12 min", zona: "oeste", via: "Av. Iguaçu" },
  { name: "Orleans", lat: -25.4420, lng: -49.2880, tempo: "15 min", zona: "centro", via: "Rua Padre Agostinho" },
  { name: "Prado Velho", lat: -25.4550, lng: -49.2580, tempo: "12 min", zona: "centro", via: "Av. das Torres" },
  { name: "Santa Quitéria", lat: -25.4850, lng: -49.3050, tempo: "8 min", zona: "sul", via: "Rua João Dembinski" },
  { name: "Santo Inácio", lat: -25.4950, lng: -49.3200, tempo: "15 min", zona: "sul", via: "Rua João Dembinski" },
  { name: "São Braz", lat: -25.4000, lng: -49.3200, tempo: "18 min", zona: "norte", via: "Av. Manoel Ribas" },
  { name: "São Francisco", lat: -25.4280, lng: -49.2850, tempo: "12 min", zona: "centro", via: "Av. Visconde de Guarapuava" },
  { name: "São João", lat: -25.3800, lng: -49.2650, tempo: "20 min", zona: "norte", via: "Av. Paraná" },
  { name: "São Miguel", lat: -25.5200, lng: -49.3350, tempo: "25 min", zona: "sul", via: "Linha Verde" },
  { name: "Seminário", lat: -25.4380, lng: -49.2920, tempo: "10 min", zona: "centro", via: "Rua Padre Agostinho" },
  { name: "Taboão", lat: -25.5100, lng: -49.2900, tempo: "20 min", zona: "sul", via: "Linha Verde" },
  { name: "Tarumã", lat: -25.4200, lng: -49.2200, tempo: "20 min", zona: "leste", via: "Av. Prefeito Erasto Gaertner" },
  { name: "Augusta", lat: -25.3900, lng: -49.2450, tempo: "20 min", zona: "norte", via: "Rua Mascarenhas de Moraes" },
  { name: "Riviera", lat: -25.4900, lng: -49.3100, tempo: "15 min", zona: "sul", via: "Av. República Argentina" },
  { name: "Caiuá", lat: -25.4920, lng: -49.3280, tempo: "15 min", zona: "sul", via: "Rua Raúl Pompéia" },
  
  // VILAS
  { name: "Vila Izabel", lat: -25.4750, lng: -49.2800, tempo: "5 min", zona: "sul", via: "Av. Arthur da Silva Bernardes" },
  { name: "Vila Hauer", lat: -25.4780, lng: -49.2480, tempo: "12 min", zona: "leste", via: "Av. Marechal Floriano Peixoto" },
  { name: "Vila Guaíra", lat: -25.4850, lng: -49.2950, tempo: "5 min", zona: "sul", via: "Rua Kennedy" },
  { name: "Vila Fanny", lat: -25.4870, lng: -49.2720, tempo: "8 min", zona: "sul", via: "Rua Nicola Pellanda" },
  { name: "Vila Torres", lat: -25.4480, lng: -49.2620, tempo: "12 min", zona: "centro", via: "Av. das Torres" },
  { name: "Vila Oficinas", lat: -25.4450, lng: -49.2200, tempo: "18 min", zona: "leste", via: "Av. das Torres" },
  
  // NOVAS VILAS E REGIÕES
  { name: "Vila Sandra", lat: -25.5000, lng: -49.3200, tempo: "15 min", zona: "sul", via: "Rua João Dembinski" },
  { name: "Neoville", lat: -25.4600, lng: -49.3050, tempo: "12 min", zona: "oeste", via: "Rua Pedro Gusso" },
  { name: "Vila Verde", lat: -25.4700, lng: -49.3150, tempo: "15 min", zona: "oeste", via: "Ecoville" },
  { name: "Vila Nossa Senhora da Luz", lat: -25.5100, lng: -49.3000, tempo: "15 min", zona: "sul", via: "Linha Verde" },
  { name: "Vila Pantanal", lat: -25.4950, lng: -49.2200, tempo: "18 min", zona: "leste", via: "Linha Verde" },
  { name: "Vitória Régia", lat: -25.5000, lng: -49.3300, tempo: "20 min", zona: "sul", via: "Rua João Bettega" },
  { name: "Sabará", lat: -25.5150, lng: -49.2950, tempo: "20 min", zona: "sul", via: "Rua Kennedy" },
  { name: "Santa Felicidade Norte", lat: -25.3750, lng: -49.3300, tempo: "20 min", zona: "norte", via: "Av. Manoel Ribas" },
  
  // REGIAO METROPOLITANA (RMC) - Cidades com paginas completas
  { name: "Sao Jose dos Pinhais", lat: -25.5346, lng: -49.2070, tempo: "30 min", zona: "metro", via: "Av. das Torres" },
  { name: "Pinhais", lat: -25.4441, lng: -49.1919, tempo: "22 min", zona: "metro", via: "Rod. Deputado Joao Leopoldo Jacomel" },
  { name: "Colombo", lat: -25.2915, lng: -49.2239, tempo: "30 min", zona: "metro", via: "PR-417" },
  { name: "Araucaria", lat: -25.5925, lng: -49.4005, tempo: "30 min", zona: "metro", via: "Rodovia do Xisto" },
  { name: "Almirante Tamandare", lat: -25.3243, lng: -49.3039, tempo: "25 min", zona: "metro", via: "Rodovia dos Minerios" },
  { name: "Campo Largo", lat: -25.4590, lng: -49.5278, tempo: "35 min", zona: "metro", via: "BR-277" },
  { name: "Fazenda Rio Grande", lat: -25.6600, lng: -49.3060, tempo: "35 min", zona: "metro", via: "BR-116" },
  { name: "Piraquara", lat: -25.4428, lng: -49.0620, tempo: "35 min", zona: "metro", via: "Rodovia Joao Leopoldo Jacomel" },
  { name: "Quatro Barras", lat: -25.3644, lng: -49.0769, tempo: "30 min", zona: "metro", via: "BR-116" },
  { name: "Campina Grande do Sul", lat: -25.3050, lng: -49.0550, tempo: "35 min", zona: "metro", via: "BR-116" },
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
