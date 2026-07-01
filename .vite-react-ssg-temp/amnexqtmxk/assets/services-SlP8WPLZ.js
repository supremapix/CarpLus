const BUSINESS_INFO = {
  whatsapp: "5541308272822",
  stats: [
    { value: "5,0/5", label: "Avaliações Google", icon: "Star" },
    { value: "214+", label: "Avaliações Verificadas", icon: "Trophy" },
    { value: "Garantia", label: "Em Todos os Serviços", icon: "ShieldCheck" },
    { value: "10x", label: "Sem Juros nos Pneus", icon: "CreditCard" }
  ]
};
const SERVICE_CATEGORIES = [
  {
    id: "pneus",
    name: "Pneus",
    icon: "Circle",
    emoji: "🔘",
    services: [
      {
        id: "venda-pneus",
        name: "Venda de Pneus",
        slug: "venda-de-pneus",
        shortDescription: "Pneus das melhores marcas nacionais e importados para todos os tipos de veículo. Montagem e balanceamento inclusos na compra.",
        fullDescription: "Na Carplus você encontra pneus das melhores marcas do mercado para todos os tipos de veículo — carros de passeio, SUVs, picapes, vans e tratores. Trabalhamos com pneus nacionais e importados com qualidade, segurança e preço justo. A montagem e o balanceamento são realizados no ato da compra. Parcelamento em até 10x sem juros.",
        highlights: ["Pirelli, Michelin, Goodyear, Continental", "Firestone, Bridgestone, Hankook, Yokohama", "Todos os aros do 13 ao 22", "Montagem e balanceamento inclusos", "Parcelamento em até 10x sem juros"],
        estimatedTime: "45–60 min",
        icon: "ShoppingCart"
      },
      {
        id: "alinhamento-balanceamento",
        name: "Alinhamento e Balanceamento 3D",
        slug: "alinhamento-e-balanceamento",
        shortDescription: "Alinhamento computadorizado 3D com equipamento de alta precisão. Evita desgaste irregular, melhora estabilidade e reduz consumo de combustível.",
        fullDescription: "O alinhamento de pneus na Carplus é realizado com equipamento 3D computadorizado de última geração, garantindo precisão milimétrica. A regulagem correta dos ângulos das rodas evita desgaste irregular dos pneus, melhora a estabilidade em curvas, proporciona mais conforto e reduz o consumo de combustível. O balanceamento computadorizado elimina vibrações e prolonga a vida útil dos pneus. Atendemos todos os modelos de veículos sem necessidade de agendamento.",
        highlights: ["Equipamento 3D computadorizado", "Resultado em 30–40 minutos", "Todos os modelos de veículos", "Sem necessidade de agendamento", "Ajuste de cambagem e caster"],
        estimatedTime: "30–40 min",
        icon: "Target"
      },
      {
        id: "montagem-pneu",
        name: "Montagem de Pneu",
        slug: "montagem-de-pneu",
        shortDescription: "Montagem precisa com equipamentos modernos, sem danos ao aro ou à borracha. Balanceamento e calibragem inclusos.",
        fullDescription: "A montagem de pneu na Carplus é realizada com equipamentos modernos e técnicos especializados, garantindo o encaixe correto do pneu na roda sem causar danos ao aro ou à borracha. Após a montagem, realizamos o balanceamento e a calibragem para garantir segurança e durabilidade máximas ao conjunto roda-pneu.",
        highlights: ["Equipamento moderno", "Sem danos ao aro", "Balanceamento incluso", "Todos os aros (13 ao 22)"],
        estimatedTime: "30–45 min",
        icon: "Circle"
      },
      {
        id: "rodizio-pneus",
        name: "Rodízio de Pneus",
        slug: "rodizio-de-pneus",
        shortDescription: "Troca de posição dos pneus para distribuir o desgaste uniformemente, prolongando a vida útil e economizando na substituição.",
        fullDescription: "O rodízio de pneus consiste em mudar a posição dos pneus no veículo de forma técnica para distribuir o desgaste de forma uniforme entre os quatro pneus. Isso prolonga significativamente a vida útil dos pneus e gera economia na substituição a longo prazo. Na Carplus, realizamos o rodízio com agilidade e precisão, seguindo as recomendações de cada fabricante.",
        highlights: ["Desgaste uniforme nos 4 pneus", "Prolonga a vida útil", "Inclui calibragem", "Todos os modelos"],
        estimatedTime: "20–30 min",
        icon: "RefreshCw"
      },
      {
        id: "conserto-pneu",
        name: "Conserto de Pneu",
        slug: "conserto-de-pneu",
        shortDescription: "Reparo de furos simples e laterais a frio e a quente com materiais de alta qualidade. Carros, SUVs, pickups e motos.",
        fullDescription: "O conserto de pneu na Carplus é rápido, eficiente e seguro. Realizamos o reparo de furo simples e lateral, com técnicas a frio e a quente, utilizando materiais de alta qualidade que garantem vedação perfeita e durabilidade. Atendemos carros, SUVs, pickups, vans e motos. Em caso de danos irreparáveis, orientamos sobre a melhor substituição.",
        highlights: ["Furo simples e lateral", "Técnica a frio e a quente", "Materiais de alta qualidade", "Carros, SUVs, pickups e motos"],
        estimatedTime: "20–40 min",
        icon: "Wrench"
      },
      {
        id: "manutencao-pneus",
        name: "Manutenção e Calibragem",
        slug: "manutencao-e-calibragem-de-pneus",
        shortDescription: "Inspeção completa, calibragem correta (inclui estepe), avaliação do desgaste e alerta preventivo de substituição.",
        fullDescription: "A manutenção preventiva de pneus é essencial para garantir segurança e reduzir custos. Na Carplus, realizamos inspeção completa das condições do pneu, calibragem com pressão correta (inclusive pneu estepe), avaliação do desgaste e alerta sobre necessidade de substituição. Pneus calibrados corretamente reduzem o consumo de combustível e evitam acidentes.",
        highlights: ["Calibragem com pressão correta", "Inclui pneu estepe", "Avaliação do desgaste", "Alerta preventivo"],
        estimatedTime: "15–20 min",
        icon: "Gauge"
      }
    ]
  },
  {
    id: "rodas",
    name: "Rodas",
    icon: "Disc",
    emoji: "💿",
    services: [
      {
        id: "conserto-rodas",
        name: "Conserto e Recuperação de Rodas",
        slug: "conserto-de-rodas",
        shortDescription: "Reparo de rodas amassadas, trincadas, riscadas ou com corrosão. Recuperação da geometria original com equipamento especializado.",
        fullDescription: "O conserto de rodas na Carplus recupera rodas amassadas por impacto, trincadas, com fissuras, riscadas, com empenamento ou oxidação. Trabalhamos com rodas de liga leve, alumínio, aço, cromadas e diamantadas de todos os aros. Utilizamos equipamento especializado de última geração para recuperar a geometria original e o acabamento perfeito, evitando a necessidade de substituição e valorizando seu veículo.",
        highlights: ["Amassadas, trincadas e riscadas", "Liga leve, alumínio e aço", "Todos os aros", "Geometria original recuperada", "Garantia em todos os reparos"],
        estimatedTime: "1–2 horas",
        icon: "Disc"
      },
      {
        id: "reforma-roda",
        name: "Reforma de Roda",
        slug: "reforma-de-roda",
        shortDescription: "Restauração completa de rodas com danos estruturais mais severos. Técnicas avançadas de usinagem, solda e pintura com garantia.",
        fullDescription: "A reforma de roda na Carplus restaura rodas com danos estruturais mais severos, devolvendo seu aspecto original ou personalizado. Com técnicas avançadas de usinagem, solda e pintura, recuperamos suas rodas com qualidade e durabilidade comprovadas. Atendemos todos os modelos de rodas para carros de passeio, SUVs e utilitários.",
        highlights: ["Usinagem, solda e pintura", "Aspecto original ou personalizado", "Todos os tipos de rodas", "Acabamento durável"],
        estimatedTime: "2–4 horas",
        icon: "Settings"
      },
      {
        id: "diamante-roda",
        name: "Diamante de Roda (Usinagem)",
        slug: "diamante-de-roda",
        shortDescription: "Processo de usinagem de alta precisão que confere acabamento brilhante e valorizado às rodas. Renova e personaliza com estética premium.",
        fullDescription: "O diamante de roda é um processo de usinagem de alta precisão que confere às rodas um acabamento brilhante e altamente valorizado, semelhante ao cromado. Na Carplus, realizamos esse serviço especializado para renovar e personalizar suas rodas, combinando técnica e estética com a qualidade e precisão que seu veículo merece.",
        highlights: ["Usinagem de alta precisão", "Acabamento brilhante premium", "Alta valorização estética", "Personalização"],
        estimatedTime: "2–4 horas",
        icon: "Star"
      },
      {
        id: "pintura-roda",
        name: "Pintura de Roda",
        slug: "pintura-de-roda",
        shortDescription: "Pintura profissional com tintas de alta qualidade. Renova, personaliza e protege contra corrosão e desgaste.",
        fullDescription: "A pintura de roda na Carplus renova e personaliza suas rodas com acabamento profissional de alta durabilidade. Utilizamos tintas de alta qualidade e técnicas especializadas para garantir resultado estético impecável e proteção eficiente contra corrosão, oxidação e desgaste. Atendemos rodas de todos os tipos e tamanhos.",
        highlights: ["Tintas de alta qualidade", "Acabamento profissional", "Proteção anticorrosão", "Personalização de cor"],
        estimatedTime: "3–5 horas",
        icon: "Droplet"
      }
    ]
  },
  {
    id: "freios",
    name: "Freios",
    icon: "ShieldAlert",
    emoji: "🛡️",
    services: [
      {
        id: "manutencao-freios",
        name: "Manutenção Completa de Freios",
        slug: "manutencao-de-freios",
        shortDescription: "Inspeção, reparo e substituição de pastilhas, discos, lonas, cilindros e pinças. Diagnóstico completo antes do orçamento.",
        fullDescription: "Os freios são o principal sistema de segurança do seu veículo. Na Carplus, realizamos a inspeção completa do sistema de freios, identificando e corrigindo problemas em pastilhas, discos, lonas, cilindros, pinças e mangueiras. Todo serviço inclui diagnóstico prévio detalhado e verificação do fluido. Trabalhamos com peças de alta qualidade para todas as marcas e modelos.",
        highlights: ["Pastilhas, discos e lonas", "Cilindros, pinças e mangueiras", "Diagnóstico antes do orçamento", "Peças de qualidade com NF", "Garantia no serviço"],
        estimatedTime: "1–3 horas",
        icon: "ShieldAlert"
      },
      {
        id: "retifica-disco",
        name: "Retífica de Disco de Freio",
        slug: "retifica-de-disco-de-freio",
        shortDescription: "Usinagem que restaura a superfície dos discos, eliminando ranhuras e vibrações. Solução econômica antes da troca total.",
        fullDescription: "A retífica de disco de freio na Carplus restaura as superfícies dos discos eliminando irregularidades, ranhuras e rugosidades causadas pelo desgaste. Com equipamento de usinagem de precisão próprio, devolvemos ao disco a espessura e planeza corretas, eliminando vibrações no pedal e melhorando a eficiência de frenagem. Uma alternativa econômica inteligente antes da substituição total.",
        highlights: ["Elimina vibrações e ranhuras", "Equipamento de usinagem próprio", "Mais econômico que a troca", "Resultado imediato"],
        estimatedTime: "1–2 horas",
        icon: "Layers"
      },
      {
        id: "troca-fluido-freio",
        name: "Troca de Fluido de Freio",
        slug: "troca-de-fluido-de-freio",
        shortDescription: "Substituição do fluido DOT3/DOT4 com sangria completa do sistema. Garante frenagem máxima e previne corrosão interna.",
        fullDescription: "A troca de fluido de freio é uma manutenção essencial e frequentemente negligenciada. O fluido absorve umidade com o tempo e perde sua eficiência, podendo causar frenagem esponjosa, perda total da frenagem em situações de emergência e corrosão interna dos componentes hidráulicos. Na Carplus, realizamos a substituição completa com fluidos DOT3 e DOT4 de alta qualidade, incluindo sangria completa do sistema e verificação de vazamentos.",
        highlights: ["Fluido DOT3 e DOT4 premium", "Sangria completa", "Verificação de vazamentos", "Previne corrosão interna"],
        estimatedTime: "30–60 min",
        icon: "FlaskConical"
      },
      {
        id: "troca-pastilha",
        name: "Troca de Pastilha de Freio",
        slug: "troca-de-pastilha-de-freio",
        shortDescription: "Substituição com peças de alta qualidade para todos os veículos. Verificação completa do sistema de freios inclusa.",
        fullDescription: "Pastilhas de freio desgastadas comprometem a distância de parada e colocam em risco a segurança de todos no veículo. Na Carplus, realizamos a troca de pastilhas com peças de alta qualidade homologadas para cada modelo de veículo, incluindo verificação completa do sistema de freios — discos, pinças e fluido — garantindo frenagem eficiente e segura.",
        highlights: ["Pastilhas para todos os modelos", "Verificação completa do sistema", "Peças de qualidade com NF", "Frenagem eficiente"],
        estimatedTime: "45–90 min",
        icon: "Square"
      }
    ]
  },
  {
    id: "suspensao-direcao",
    name: "Suspensão & Direção",
    icon: "Sliders",
    emoji: "⚙️",
    services: [
      {
        id: "revisao-suspensao",
        name: "Revisão e Reparo de Suspensão",
        slug: "revisao-de-suspensao",
        shortDescription: "Diagnóstico e reparo completo de amortecedores, molas, buchas, terminais e barra estabilizadora.",
        fullDescription: "A suspensão é responsável pelo conforto e pela estabilidade do veículo. Na Carplus, realizamos a revisão completa de todos os componentes: amortecedores, molas, buchas, terminais, barra estabilizadora e suportes. Identificamos e corrigimos problemas com precisão, garantindo estabilidade em curvas, conforto nas irregularidades do asfalto e segurança em todas as condições de uso.",
        highlights: ["Amortecedores e molas", "Buchas e terminais", "Barra estabilizadora", "Diagnóstico antes do orçamento", "Garantia"],
        estimatedTime: "1–4 horas",
        icon: "Sliders"
      },
      {
        id: "amortecedores",
        name: "Troca de Amortecedores",
        slug: "troca-de-amortecedores",
        shortDescription: "Substituição com peças de qualidade para todas as marcas. Estabilidade direcional e conforto restaurados.",
        fullDescription: "Amortecedores defeituosos comprometem seriamente a segurança, a estabilidade direcional e o conforto do veículo. Na Carplus, realizamos o diagnóstico preciso e a substituição de amortecedores com peças de qualidade para todos os modelos de carros e SUVs. Após a troca, recomendamos a realização do alinhamento para garantir o melhor desempenho.",
        highlights: ["Dianteiro e traseiro", "Peças de qualidade", "Todos os modelos", "Alinhamento recomendado pós-troca"],
        estimatedTime: "1–3 horas",
        icon: "MoveVertical"
      },
      {
        id: "cambagem-caster",
        name: "Cambagem e Caster",
        slug: "cambagem-e-caster",
        shortDescription: "Regulagem precisa dos ângulos de inclinação das rodas para desgaste uniforme e estabilidade perfeita na direção.",
        fullDescription: "A cambagem é o ângulo de inclinação das rodas em relação ao solo. O caster é o ângulo de inclinação do pino mestre que influencia diretamente a estabilidade e o retorno da direção ao centro. Na Carplus, ajustamos cambagem e caster com equipamento computadorizado de alta precisão, prevenindo desgaste irregular dos pneus, melhorando a estabilidade direcional e reduzindo o cansaço ao dirigir.",
        highlights: ["Equipamento computadorizado 3D", "Previne desgaste irregular", "Melhora estabilidade direcional", "Reduz o cansaço ao dirigir"],
        estimatedTime: "30–60 min",
        icon: "Maximize2"
      },
      {
        id: "gabaritagem-eixo",
        name: "Gabaritagem de Eixo",
        slug: "gabaritagem-de-eixo",
        shortDescription: "Medição e ajuste preciso dos eixos dianteiro e traseiro. Previne desgastes e melhora a estabilidade. Essencial pós-colisão.",
        fullDescription: "A gabaritagem de eixo é o processo de medição e ajuste preciso da geometria dos eixos dianteiro e traseiro do veículo. Na Carplus, garantimos que todos os parâmetros estejam dentro da especificação do fabricante, prevenindo desgastes irregulares e melhorando a estabilidade na direção. Serviço essencial após reparos de suspensão ou colisões.",
        highlights: ["Eixo dianteiro e traseiro", "Medição computadorizada", "Especificação do fabricante", "Essencial pós-colisão"],
        estimatedTime: "45–90 min",
        icon: "AlignCenter"
      },
      {
        id: "direcao-hidraulica",
        name: "Reparo de Direção Hidráulica",
        slug: "reparo-de-direcao-hidraulica",
        shortDescription: "Correção de vazamentos, substituição de bomba e mangueiras. Direção suave e precisa restaurada.",
        fullDescription: "O reparo de direção hidráulica na Carplus restabelece a leveza e o controle na direção do veículo. Identificamos e corrigimos vazamentos, substituímos a bomba hidráulica, mangueiras e fluido, garantindo uma direção precisa, suave e segura. Atendemos todos os modelos com direção hidráulica convencional e eletro-hidráulica.",
        highlights: ["Correção de vazamentos", "Substituição de bomba e mangueiras", "Fluido de direção premium", "Direção suave restaurada"],
        estimatedTime: "1–3 horas",
        icon: "RotateCw"
      }
    ]
  },
  {
    id: "motor-mecanica",
    name: "Motor & Mecânica",
    icon: "Wrench",
    emoji: "🔧",
    services: [
      {
        id: "revisao-geral",
        name: "Revisão Geral do Veículo",
        slug: "revisao-geral",
        shortDescription: "Inspeção completa de motor, freios, suspensão, pneus, fluidos e elétrica. Laudo técnico detalhado.",
        fullDescription: "A revisão geral na Carplus é uma inspeção completa e detalhada do seu veículo, cobrindo motor, freios, suspensão, pneus, todos os fluidos e sistema elétrico. Identificamos e corrigimos possíveis problemas antes que se tornem sérios e caros. Indicada para revisões de fábrica, pré-viagem ou simplesmente para garantir a segurança do veículo. Emitimos laudo técnico detalhado ao final.",
        highlights: ["Motor, freios, suspensão e elétrica", "Todos os fluidos", "Revisão de fábrica e preventiva", "Laudo técnico detalhado", "Peças com NF"],
        estimatedTime: "2–4 horas",
        icon: "Clipboard"
      },
      {
        id: "troca-oleo",
        name: "Troca de Óleo e Filtros",
        slug: "troca-de-oleo",
        shortDescription: "Troca com óleos de alta qualidade (sintético, semissintético, mineral) adequados ao seu veículo. Lubrificação ideal e motor mais duradouro.",
        fullDescription: "A troca de óleo é uma das manutenções mais importantes para a saúde do motor. Na Carplus, realizamos a troca com óleos de alta qualidade — sintético, semissintético e mineral — adequados ao seu veículo e às recomendações do fabricante. Incluímos a troca do filtro de óleo e verificação dos demais fluidos (arrefecimento, direção, freio). O resultado é lubrificação ideal, menos desgaste e maior vida útil do motor.",
        highlights: ["Sintético, semissintético e mineral", "Filtro de óleo incluso", "Verificação de todos os fluidos", "Conforme fabricante"],
        estimatedTime: "30–45 min",
        icon: "Droplets"
      },
      {
        id: "correia-dentada",
        name: "Troca de Correia Dentada",
        slug: "troca-de-correia-dentada",
        shortDescription: "Substituição preventiva com kit completo (correia + tensor + polias). Inclui verificação da bomba d'água. Evita danos graves ao motor.",
        fullDescription: "A troca de correia dentada é uma das manutenções preventivas mais críticas do veículo. O rompimento da correia dentada pode causar danos gravíssimos ao motor, com custo de reparo muito elevado. Na Carplus, realizamos a substituição completa com kit (correia + tensor + polias) em peças de primeira linha, incluindo verificação e, quando necessário, substituição da bomba d'água. Respeitamos o intervalo recomendado pelo fabricante.",
        highlights: ["Kit completo (correia + tensor + polias)", "Verificação da bomba d'água", "Peças de primeira linha", "Garante o motor", "Garantia"],
        estimatedTime: "3–5 horas",
        icon: "Link"
      },
      {
        id: "injecao-eletronica",
        name: "Injeção Eletrônica e Limpeza de Bicos",
        slug: "injecao-eletronica",
        shortDescription: "Diagnóstico de sensores, limpeza ultrassônica dos bicos injetores e reparo do sistema. Desempenho e economia restaurados.",
        fullDescription: "A injeção eletrônica é o sistema responsável pelo fornecimento preciso de combustível ao motor. Com o uso, os bicos injetores acumulam depósitos que reduzem a pulverização de combustível, prejudicando o desempenho e aumentando o consumo. Na Carplus, realizamos a limpeza ultrassônica de bicos injetores, diagnóstico de sensores (MAP, TPS, lambda, temperatura) e reparo completo do sistema, restaurando o desempenho e a economia do veículo.",
        highlights: ["Limpeza ultrassônica", "Diagnóstico de sensores", "Scanner avançado", "Restaura desempenho e economia"],
        estimatedTime: "1–2 horas",
        icon: "Zap"
      },
      {
        id: "arrefecimento",
        name: "Sistema de Arrefecimento",
        slug: "sistema-de-arrefecimento",
        shortDescription: "Inspeção e manutenção de radiador, bomba d'água, termostato e fluido. Previne superaquecimento e danos ao motor.",
        fullDescription: "O sistema de arrefecimento é responsável por manter a temperatura ideal do motor. Falhas nesse sistema causam superaquecimento e podem gerar danos graves como a queima da junta do cabeçote. Na Carplus, inspecionamos e realizamos a manutenção completa do sistema: radiador, bomba d'água, mangueiras, termostato e fluido de arrefecimento (aditivo), prevenindo superaquecimento e protegendo seu motor.",
        highlights: ["Radiador, bomba d'água e mangueiras", "Termostato e tampas", "Troca do fluido de arrefecimento", "Previne superaquecimento"],
        estimatedTime: "1–3 horas",
        icon: "Thermometer"
      },
      {
        id: "troca-filtros",
        name: "Troca de Filtros",
        slug: "troca-de-filtros",
        shortDescription: "Substituição de filtros de óleo, ar do motor, combustível, cabine e ar-condicionado. Motor limpo e ar interno saudável.",
        fullDescription: "Os filtros do veículo protegem motor, combustível e ar interno de impurezas. Na Carplus, realizamos a troca de todos os tipos de filtro: óleo, ar do motor, combustível, cabine (habitáculo) e filtro do ar-condicionado. Filtros limpos melhoram o desempenho do motor, reduzem o consumo de combustível e garantem qualidade do ar dentro do veículo. Realizamos a troca conforme o plano de manutenção do fabricante.",
        highlights: ["Filtro de óleo, ar e combustível", "Filtro de cabine e ar-condicionado", "Melhora desempenho e economia"],
        estimatedTime: "20–40 min",
        icon: "Filter"
      },
      {
        id: "reparo-motor",
        name: "Reparo de Motor",
        slug: "reparo-de-motor",
        shortDescription: "Diagnóstico e correção de falhas mecânicas, desgaste, vazamentos e falhas de compressão. Vida útil do motor restaurada.",
        fullDescription: "O reparo de motor na Carplus abrange diagnóstico completo e correção de falhas mecânicas, desgaste de peças, vazamentos de óleo e falhas de compressão. Nossa equipe especializada utiliza equipamentos de diagnóstico modernos para identificar a causa raiz do problema e realizar reparos com precisão e qualidade, prolongando a vida útil do motor do seu veículo.",
        highlights: ["Diagnóstico computadorizado", "Correção de vazamentos", "Falhas de compressão", "Peças de qualidade com NF"],
        estimatedTime: "Conforme diagnóstico",
        icon: "Cpu"
      },
      {
        id: "troca-oleo-cambio",
        name: "Troca de Óleo de Câmbio Automático",
        slug: "troca-de-oleo-de-cambio-automatico",
        shortDescription: "Substituição do fluido ATF específico para cada modelo. Trocas de marcha suaves e longevidade garantidas.",
        fullDescription: "A troca de óleo de câmbio automático é fundamental para o bom funcionamento da transmissão. O fluido ATF (Automatic Transmission Fluid) degrada com o uso e o calor, comprometendo as trocas de marcha e podendo causar danos graves ao câmbio. Na Carplus, realizamos essa manutenção com óleos ATF específicos para cada modelo de veículo, garantindo trocas de marcha suaves e longevidade ao câmbio automático.",
        highlights: ["Fluido ATF específico", "Manual e automático", "Trocas de marcha mais suaves", "Previne danos ao câmbio"],
        estimatedTime: "45–90 min",
        icon: "GitBranch"
      },
      {
        id: "escapamento",
        name: "Sistema de Escapamento",
        slug: "sistema-de-escapamento",
        shortDescription: "Inspeção, reparo e substituição de canos, silencioso e catalisador. Reduz ruídos e garante conformidade ambiental.",
        fullDescription: "O sistema de escapamento é responsável por conduzir os gases do motor para fora do veículo, reduzindo ruídos e emissões. Na Carplus, inspecionamos e reparamos escapamentos, catalisadores e silenciosos com qualidade. Ruídos excessivos, perda de desempenho ou cheiro de gases indicam a necessidade de verificação. Mantemos o desempenho e a conformidade ambiental do seu veículo.",
        highlights: ["Canos, silencioso e catalisador", "Redução de ruídos", "Conformidade ambiental", "Melhora o desempenho"],
        estimatedTime: "1–3 horas",
        icon: "Wind"
      },
      {
        id: "ajuste-motor",
        name: "Ajuste e Regulagem de Motor",
        slug: "ajuste-de-motor",
        shortDescription: "Regulagem de válvulas, ignição, velas e correia. Maior eficiência, menor consumo e longevidade ao motor.",
        fullDescription: "O ajuste de motor na Carplus otimiza o desempenho por meio da regulagem precisa de válvulas, sistema de ignição, velas, correia dentada e demais componentes. Um motor bem ajustado opera com maior eficiência, consome menos combustível, polui menos e tem vida útil prolongada. Atendemos todos os modelos nacionais e importados.",
        highlights: ["Válvulas e ignição", "Velas e partida", "Menor consumo", "Todos os modelos"],
        estimatedTime: "1–2 horas",
        icon: "SlidersHorizontal"
      }
    ]
  },
  {
    id: "eletrico",
    name: "Elétrico & Diagnóstico",
    icon: "Zap",
    emoji: "⚡",
    services: [
      {
        id: "diagnostico-eletronico",
        name: "Diagnóstico Eletrônico",
        slug: "diagnostico-eletronico",
        shortDescription: "Scanner multiprotocolo avançado para leitura de todos os códigos DTC. Motor, ABS, airbag, câmbio. Reset de luzes.",
        fullDescription: "O diagnóstico eletrônico na Carplus utiliza scanner automotivo multiprotocolo de última geração para leitura de todos os códigos de falha (DTC) do veículo. Diagnosticamos motor, injeção eletrônica, ABS, airbag, câmbio automático e todos os módulos eletrônicos. Resetamos luzes de painel e emitimos relatório completo do diagnóstico. Compatível com veículos nacionais e importados de todas as marcas.",
        highlights: ["Scanner multiprotocolo", "Motor, ABS, airbag e câmbio", "Reset de todas as luzes", "Relatório de diagnóstico", "Nacionais e importados"],
        estimatedTime: "30–60 min",
        icon: "Monitor"
      },
      {
        id: "reparo-eletrico",
        name: "Reparo Elétrico Automotivo",
        slug: "reparo-eletrico",
        shortDescription: "Diagnóstico e reparo de alternador, motor de partida, fiação, fusíveis, iluminação, sensores e módulos eletrônicos.",
        fullDescription: "O reparo elétrico na Carplus engloba diagnóstico e correção de problemas no sistema elétrico automotivo: alternador, motor de partida, fiação, fusíveis, relés, iluminação interna e externa, sensores e módulos eletrônicos. Com equipamentos de diagnóstico modernos e equipe técnica especializada, restabelecemos o funcionamento elétrico com segurança e eficiência.",
        highlights: ["Alternador e motor de partida", "Fiação, fusíveis e relés", "Iluminação e sensores", "Módulos eletrônicos"],
        estimatedTime: "Conforme diagnóstico",
        icon: "Zap"
      },
      {
        id: "bateria",
        name: "Bateria Automotiva",
        slug: "bateria-automotiva",
        shortDescription: "Teste de carga, manutenção e substituição. Verificação do alternador inclusa. Partida confiável garantida.",
        fullDescription: "A bateria é fundamental para o funcionamento elétrico do veículo. Na Carplus, realizamos o teste de carga completo para avaliar a real condição da bateria, limpeza dos terminais, verificação do alternador (que é responsável por carregar a bateria) e substituição quando necessário. Trabalhamos com baterias das melhores marcas para garantir partida confiável e funcionamento correto de todos os sistemas elétricos.",
        highlights: ["Teste de carga completo", "Verificação do alternador", "Melhores marcas", "Limpeza de terminais"],
        estimatedTime: "20–40 min",
        icon: "Battery"
      }
    ]
  },
  {
    id: "ar-condicionado",
    name: "Ar-Condicionado",
    icon: "Snowflake",
    emoji: "❄️",
    services: [
      {
        id: "higienizacao-ac",
        name: "Higienização de Ar-Condicionado",
        slug: "higienizacao-de-ar-condicionado",
        shortDescription: "Eliminação de fungos, bactérias e odores. Limpeza de dutos, evaporador e filtro cabine. Ar saudável para toda a família.",
        fullDescription: "A higienização do ar-condicionado elimina fungos, bactérias, ácaros e odores desagradáveis acumulados no sistema de climatização. Na Carplus, realizamos a limpeza completa dos dutos, evaporador e filtro cabine, além da aplicação de agente antimicrobiano. O resultado é ar fresco, limpo e saudável dentro do veículo, essencial especialmente para famílias com crianças e pessoas com alergias respiratórias.",
        highlights: ["Elimina fungos, bactérias e ácaros", "Limpeza de dutos e evaporador", "Filtro cabine substituído", "Agente antimicrobiano"],
        estimatedTime: "1–2 horas",
        icon: "Wind"
      },
      {
        id: "manutencao-ac",
        name: "Manutenção de Ar-Condicionado",
        slug: "manutencao-de-ar-condicionado",
        shortDescription: "Carga de gás R-134a/R-1234yf, reparo de compressor, limpeza do condensador e evaporador, verificação de mangueiras.",
        fullDescription: "A manutenção completa do ar-condicionado na Carplus inclui verificação de pressão e carga de gás refrigerante (R-134a ou R-1234yf), diagnóstico e reparo do compressor, limpeza do condensador e evaporador, verificação de mangueiras e conexões. Um ar-condicionado bem mantido resfria com eficiência, consome menos combustível e dura muito mais.",
        highlights: ["Carga de gás R-134a e R-1234yf", "Reparo de compressor", "Limpeza do condensador", "Maior eficiência e economia"],
        estimatedTime: "1–3 horas",
        icon: "Snowflake"
      }
    ]
  },
  {
    id: "especiais",
    name: "Serviços Especiais",
    icon: "Award",
    emoji: "🌟",
    services: [
      {
        id: "inspecao-veicular",
        name: "Inspeção Veicular de Segurança",
        slug: "inspecao-veicular",
        shortDescription: "Avaliação completa de freios, suspensão, pneus, iluminação e mecânica. Relatório detalhado. Ideal para compra de usado.",
        fullDescription: "A inspeção veicular de segurança na Carplus avalia o estado geral do veículo, verificando freios, suspensão, pneus, iluminação, sistema elétrico e todos os componentes mecânicos relevantes. Identificamos problemas antes que se tornem perigosos, garantindo que seu carro esteja dentro dos padrões de segurança para circular com tranquilidade. Ideal para compra e venda de veículos usados.",
        highlights: ["Freios, suspensão e pneus", "Iluminação e elétrica", "Mecânica geral", "Ideal para veículos usados", "Relatório detalhado"],
        estimatedTime: "1–2 horas",
        icon: "CheckCircle"
      },
      {
        id: "vans-utilitarios",
        name: "Manutenção de Vans e Utilitários",
        slug: "vans-e-utilitarios",
        shortDescription: "Serviços completos para vans e veículos de carga leve. Pneus específicos, freios reforçados e manutenção preventiva para frotas.",
        fullDescription: "Na Carplus, oferecemos serviços completos para vans e veículos de carga leve. Realizamos manutenção preventiva e corretiva completa: troca de pneus específicos para vans, alinhamento, balanceamento, freios, suspensão, motor e inspeções gerais. Garantimos segurança e eficiência para sua van de passageiros ou frota de veículos comerciais.",
        highlights: ["Pneus específicos para vans", "Freios e suspensão reforçados", "Manutenção preventiva", "Segurança para frotas"],
        estimatedTime: "Conforme serviço",
        icon: "Truck"
      },
      {
        id: "carros-classicos",
        name: "Manutenção de Carros Clássicos",
        slug: "carros-classicos",
        shortDescription: "Serviços especializados para veículos antigos com respeito à originalidade e ao valor histórico do veículo.",
        fullDescription: "A Carplus oferece serviços especializados para carros clássicos e antigos, com atenção extrema aos detalhes e respeito total pela originalidade dos veículos. Realizamos manutenção preventiva, revisão mecânica completa e reparo elétrico, garantindo que seu clássico rode com segurança e preserve todo o seu valor histórico e sentimental.",
        highlights: ["Respeito pela originalidade", "Manutenção preventiva especializada", "Revisão mecânica e elétrica", "Preserva o valor histórico"],
        estimatedTime: "Conforme avaliação",
        icon: "Clock"
      },
      {
        id: "palheta-para-brisa",
        name: "Instalação de Palhetas",
        slug: "palhetas-de-para-brisa",
        shortDescription: "Substituição rápida de palhetas de para-brisa para visibilidade plena na chuva. Todos os modelos nacionais e importados.",
        fullDescription: "A instalação de palhetas de para-brisa na Carplus garante visibilidade plena durante chuvas, prevenindo acidentes por falta de visão. Substituímos as palhetas desgastadas por modelos de qualidade com encaixe perfeito para o seu veículo, em um serviço rápido e sem complicações. Contamos com palhetas para todos os modelos nacionais e importados.",
        highlights: ["Palhetas para todos os modelos", "Encaixe perfeito", "Serviço rápido", "Visibilidade plena"],
        estimatedTime: "10–15 min",
        icon: "Droplet"
      }
    ]
  },
  {
    id: "online",
    name: "Loja Online",
    icon: "ShoppingBag",
    emoji: "🛒",
    services: [
      {
        id: "loja-online",
        name: "Compra de Pneus Online",
        slug: "loja-online",
        shortDescription: "Compre pelo site ou WhatsApp com parcelamento em até 10x sem juros e agende a instalação na loja.",
        fullDescription: "A loja online da Carplus permite que você compre pneus e acessórios com praticidade total, de onde estiver. Consulte nosso catálogo completo, compare modelos e marcas, escolha o melhor produto para seu veículo e garanta com segurança. Parcelamos em até 10x sem juros. Após a compra, agende a instalação na nossa loja ou entre em contato pelo WhatsApp para atendimento personalizado.",
        highlights: ["Catálogo completo online", "Parcelamento em até 10x sem juros", "Atendimento pelo WhatsApp", "Agendamento da instalação"],
        estimatedTime: null,
        icon: "ShoppingBag"
      }
    ]
  }
];
function getAllServices() {
  return SERVICE_CATEGORIES.flatMap(
    (category) => category.services.map((service) => ({
      ...service,
      categoryId: category.id,
      categoryName: category.name
    }))
  );
}
export {
  BUSINESS_INFO,
  SERVICE_CATEGORIES,
  getAllServices
};
