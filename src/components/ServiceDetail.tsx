import { useParams, Link } from 'react-router-dom';
import { SERVICES, TIRES, NEIGHBORHOODS } from '../data';
import { SERVICE_CATEGORIES } from '../data/services';
import { getServiceFaqs } from '../data/serviceFaqs';
import { ArrowLeft, MessageSquare, CircleCheck as CheckCircle, Star, ChevronRight, MapPin, Clock, Shield, Award, Play, OctagonX, FlaskConical, Trophy, AlertTriangle, Droplet, Timer, Wrench, Settings, Phone } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { getIcon } from './iconMap';
import LiteYouTube from './LiteYouTube';
import { useSEO } from '../hooks/useSEO';

// Flatten all services from new categories
const ALL_NEW_SERVICES = SERVICE_CATEGORIES.flatMap(cat => 
  cat.services.map(s => ({ 
    ...s, 
    categoryName: cat.name, 
    categoryIcon: cat.icon,
    // Map to old format for compatibility
    title: s.name,
    description: s.shortDescription,
  }))
);

// Conteúdo SEO detalhado para cada serviço - otimizado para Google e Bing
const SEO_CONTENT: Record<string, {
  intro: string;
  detalhes: string[];
  perguntas: { pergunta: string; resposta: string }[];
  keywords: string[];
  temVideo?: boolean;
  videoUrl?: string;
  videoBadge?: string;
}> = {
  'loja-de-pneus': {
    intro: 'A Carplus Pneus é a loja de pneus mais completa do bairro Portão em Curitiba. Trabalhamos com as melhores marcas de pneus do mercado: Pirelli, Michelin, Goodyear, Continental, Bridgestone, Firestone e Yokohama. Nossa loja oferece pneus para todos os tipos de veículos, desde carros populares até SUVs e caminhonetes, com medidas do aro 13 ao aro 22.',
    detalhes: [
      'Pneus novos das melhores marcas com garantia de fábrica e nota fiscal',
      'Parcelamento em até 10x sem juros nos cartões de crédito',
      'Montagem, balanceamento e alinhamento inclusos na compra de 4 pneus',
      'Estoque próprio com mais de 500 pneus disponíveis para pronta entrega',
      'Atendimento personalizado com consultores especializados em pneus',
      'Descarte ecológico dos pneus usados sem custo adicional'
    ],
    perguntas: [
      { pergunta: 'Qual o melhor pneu para meu carro em Curitiba?', resposta: 'Curitiba tem clima úmido e chuvas frequentes. Recomendamos pneus com bom desempenho em piso molhado como Pirelli Cinturato, Michelin Primacy ou Goodyear EfficientGrip. Nossa equipe analisa seu veículo e perfil de uso para indicar o pneu ideal.' },
      { pergunta: 'Vocês têm pneus para carros importados?', resposta: 'Sim! Trabalhamos com pneus para BMW, Mercedes, Audi, Volvo, Land Rover e outras marcas premium. Temos medidas especiais como Run Flat e pneus de alta performance em estoque.' },
      { pergunta: 'Como funciona a garantia dos pneus?', resposta: 'Todos os pneus vendidos têm garantia de fábrica contra defeitos de fabricação. Além disso, oferecemos garantia própria de montagem por 90 dias. Guardamos o histórico do seu veículo para acompanhamento.' }
    ],
    keywords: ['loja de pneus curitiba', 'pneus portão curitiba', 'pneu pirelli curitiba', 'pneu michelin curitiba', 'comprar pneus curitiba', 'pneus baratos curitiba']
  },
  'alinhamento-3d': {
    intro: 'O alinhamento 3D computadorizado é essencial para a segurança e economia do seu veículo. Na Carplus Centro Automotivo, utilizamos equipamento de alinhamento Hunter 3D de última geração, o mesmo utilizado pelas concessionárias premium. O alinhamento corrige a geometria das rodas, evitando desgaste irregular dos pneus e melhorando a estabilidade do veículo.',
    detalhes: [
      'Equipamento Hunter 3D com precisão de 0,01 grau - padrão internacional',
      'Alinhamento das 4 rodas com ajuste de câmber, cáster e convergência',
      'Laudo técnico impresso com valores antes e depois do serviço',
      'Tempo médio de 30 a 40 minutos para alinhamento completo',
      'Verificação gratuita da suspensão antes do alinhamento',
      'Compatível com todos os veículos: nacionais, importados, SUVs e picapes'
    ],
    perguntas: [
      { pergunta: 'Como saber se meu carro precisa de alinhamento?', resposta: 'Os sinais mais comuns são: volante torto com o carro em linha reta, carro puxando para um lado, desgaste irregular dos pneus (mais de um lado que do outro) e vibração no volante. Recomendamos verificar o alinhamento a cada 10.000 km ou 6 meses.' },
      { pergunta: 'Qual a diferença entre alinhamento 3D e convencional?', resposta: 'O alinhamento 3D usa câmeras de alta precisão que medem todos os ângulos simultaneamente em três dimensões. Isso garante resultado muito mais preciso que o sistema convencional, especialmente em veículos modernos com suspensão multilink.' },
      { pergunta: 'Preciso alinhar após trocar pneus?', resposta: 'Sim, sempre recomendamos fazer alinhamento junto com a troca de pneus. Pneus novos em um carro desalinhado vão desgastar irregularmente desde o primeiro dia. Na Carplus, oferecemos pacote com desconto para troca + alinhamento.' }
    ],
    keywords: ['alinhamento 3d curitiba', 'alinhamento computadorizado curitiba', 'alinhamento hunter curitiba', 'alinhamento portão', 'geometria curitiba']
  },
  'troca-de-oleo': {
    intro: 'A troca de óleo é a manutenção mais importante para a longevidade do motor do seu carro. Na Carplus Centro Automotivo em Curitiba, realizamos troca de óleo com lubrificantes das melhores marcas: Mobil, Shell Helix, Castrol, Petronas e Selenia. Trabalhamos com óleos minerais, semi-sintéticos e 100% sintéticos para todos os tipos de motor.',
    detalhes: [
      'Óleos das marcas Mobil 1, Shell Helix Ultra, Castrol Edge e Petronas Syntium',
      'Troca de filtro de óleo sempre inclusa no serviço',
      'Verificação de nível de todos os fluidos do veículo sem custo adicional',
      'Etiqueta de próxima troca colada no para-brisa',
      'Óleos especiais para carros com DPF (filtro de partículas diesel)',
      'Descarte ecológico do óleo usado conforme normas ambientais'
    ],
    perguntas: [
      { pergunta: 'De quanto em quanto tempo devo trocar o óleo?', resposta: 'Para óleo mineral: a cada 5.000 km ou 6 meses. Para semi-sintético: a cada 7.500 km ou 6 meses. Para sintético: a cada 10.000 km ou 12 meses. Sempre prevalece o que acontecer primeiro. Em Curitiba, com muito trânsito, recomendamos intervalos menores.' },
      { pergunta: 'Qual óleo é melhor: mineral, semi-sintético ou sintético?', resposta: 'O sintético oferece melhor proteção, especialmente em partidas a frio (comum em Curitiba). Porém, o manual do veículo indica a especificação mínima. Carros mais novos geralmente exigem sintético. Nossa equipe consulta a especificação correta para seu modelo.' },
      { pergunta: 'Vocês trocam óleo de câmbio automático?', resposta: 'Sim! Realizamos troca de óleo de câmbio automático e CVT com fluidos específicos para cada marca. É um serviço especializado que muitas oficinas não fazem. Recomendado a cada 60.000 km.' }
    ],
    keywords: ['troca de óleo curitiba', 'óleo sintético curitiba', 'troca óleo portão', 'mobil curitiba', 'shell helix curitiba', 'castrol curitiba'],
    temVideo: true,
    videoUrl: 'TY8qfETXlJQ',
    videoBadge: 'Video Explicativo Premium'
  },
  'scanner-automotivo': {
    intro: 'O diagnóstico por scanner automotivo é fundamental para identificar problemas eletrônicos no seu veículo. Na Carplus Centro Automotivo, utilizamos scanners multiprotocolo de última geração que leem todos os módulos do carro: motor, câmbio, ABS, airbag, direção elétrica e muito mais. Atendemos todas as marcas nacionais e importadas.',
    detalhes: [
      'Scanner multiprotocolo compatível com mais de 80 marcas de veículos',
      'Leitura e apagamento de códigos de falha (DTCs) de todos os módulos',
      'Reset de luz de óleo, airbag, ABS e demais indicadores do painel',
      'Teste de atuadores para diagnóstico preciso de componentes',
      'Relatório detalhado impresso com todas as falhas encontradas',
      'Diagnóstico de injeção eletrônica, ignição e sensores'
    ],
    perguntas: [
      { pergunta: 'O que significa a luz de injeção acesa no painel?', resposta: 'A luz de injeção (check engine) indica que o sistema de gerenciamento do motor detectou uma falha. Pode ser desde algo simples como tampa do tanque mal fechada at���� problemas mais sérios. O scanner lê o código exato e indica o componente com defeito.' },
      { pergunta: 'O scanner resolve todos os problemas do carro?', resposta: 'O scanner é uma ferramenta de diagnóstico que identifica a causa do problema. Após a leitura, nossa equipe analisa os códigos e propõe a solução. Em muitos casos, como reset de luz de óleo ou adaptação de peças novas, o próprio scanner resolve.' },
      { pergunta: 'Vocês fazem diagnóstico de carros importados?', resposta: 'Sim! Temos scanners específicos para BMW, Mercedes, Audi, VW, Volvo, Land Rover, Jeep e outras marcas premium. Conseguimos acessar módulos que scanners genéricos não alcançam.' }
    ],
    keywords: ['scanner automotivo curitiba', 'diagnóstico eletrônico curitiba', 'luz injeção curitiba', 'check engine curitiba', 'scanner portão']
  },
  'suspensao-e-freios': {
    intro: 'A suspensão e os freios são sistemas críticos para a segurança do seu veículo. Na Carplus Centro Automotivo, oferecemos serviço completo de revisão e reparo de amortecedores, molas, pivôs, buchas, pastilhas, discos e todo o sistema de frenagem. Utilizamos peças de qualidade com garantia e mão de obra especializada.',
    detalhes: [
      'Troca de amortecedores das marcas Cofap, Monroe, Kayaba e originais',
      'Substituição de pastilhas e discos de freio com peças de primeira linha',
      'Reparo de sistema de freio ABS com diagnóstico eletrônico',
      'Troca de pivôs, bandejas, buchas e batentes de suspensão',
      'Sangria e troca de fluido de freio DOT 4',
      'Teste de eficiência de frenagem em equipamento específico'
    ],
    perguntas: [
      { pergunta: 'Como saber se os amortecedores estão ruins?', resposta: 'Sinais de amortecedores gastos: carro balança muito em lombadas, instabilidade em curvas, pneus com desgaste irregular nas bordas, ruídos ao passar em buracos e aumento da distância de frenagem. Recomendamos trocar a cada 50.000 km ou quando apresentar vazamento.' },
      { pergunta: 'Quando devo trocar as pastilhas de freio?', resposta: 'As pastilhas devem ser verificadas a cada 20.000 km. Sinais de desgaste: ruído metálico ao frear, pedal mais baixo que o normal, carro puxando para um lado ao frear. A maioria dos carros tem sensor que acende luz no painel quando as pastilhas estão no limite.' },
      { pergunta: 'É seguro trocar só as pastilhas sem trocar os discos?', resposta: 'Depende do estado dos discos. Se estiverem dentro da medida mínima e sem ranhuras profundas, podem ser reaproveitados. Fazemos medição com paquímetro e avaliamos visualmente. Discos muito finos ou danificados devem ser trocados junto com as pastilhas.' }
    ],
    keywords: ['suspensão curitiba', 'amortecedor curitiba', 'freio curitiba', 'pastilha de freio curitiba', 'disco de freio curitiba', 'troca amortecedor portão']
  },
  'ar-condicionado': {
    intro: 'O ar-condicionado automotivo é essencial para o conforto em Curitiba, tanto no verão quanto no inverno úmido. Na Carplus Centro Automotivo, realizamos todos os serviços de manutenção do sistema de climatização: carga de gás, higienização, reparo de compressor, troca de filtro de cabine e diagnóstico completo do sistema.',
    detalhes: [
      'Carga de gás R134a e R1234yf (novo gás ecológico) com medição precisa',
      'Higienização do sistema com produto bactericida e fungicida',
      'Troca de filtro de cabine (filtro antipólen) de todas as marcas',
      'Reparo e troca de compressor, condensador e evaporador',
      'Detecção de vazamentos com gás traçador e luz UV',
      'Limpeza de evaporador para eliminar mau cheiro'
    ],
    perguntas: [
      { pergunta: 'Por que meu ar-condicionado não gela mais?', resposta: 'As causas mais comuns são: falta de gás refrigerante (vazamento), filtro de cabine entupido, condensador sujo ou compressor com defeito. Fazemos diagnóstico completo para identificar a causa antes de qualquer reparo.' },
      { pergunta: 'Com que frequência devo fazer manutenção no ar?', resposta: 'Recomendamos: higienização a cada 6 meses ou início do verão/inverno, troca de filtro de cabine anual, verificação de gás anual. Em Curitiba, com alta umidade, a higienização é especialmente importante para evitar fungos e bactérias.' },
      { pergunta: 'O que causa mau cheiro no ar-condicionado?', resposta: 'O mau cheiro é causado por fungos e bactérias que se proliferam no evaporador úmido. A solução é a higienização completa do sistema com produto bactericida. Em casos graves, pode ser necessária a limpeza manual do evaporador.' }
    ],
    keywords: ['ar condicionado automotivo curitiba', 'carga de gás curitiba', 'higienização ar condicionado curitiba', 'ar carro curitiba', 'ar condicionado portão']
  },
  'manutencao-motor': {
    intro: 'A manutenção do motor é fundamental para garantir desempenho, economia de combustível e durabilidade do seu veículo. Na Carplus Centro Automotivo em Curitiba, realizamos revisões preventivas e corretivas completas: troca de velas, cabos, filtros, correias, bomba d\'água, embreagem e muito mais. Atendemos carros nacionais e importados.',
    detalhes: [
      'Revisão completa seguindo o plano de manutenção do fabricante',
      'Troca de velas de ignição convencionais e de irídio/platina',
      'Substituição de filtro de ar, combustível e cabine',
      'Troca de correias do alternador, ar-condicionado e direção hidráulica',
      'Reparo de sistema de arrefecimento: bomba d\'água, válvula termostática, mangueiras',
      'Diagnóstico e reparo de vazamentos de óleo e fluidos'
    ],
    perguntas: [
      { pergunta: 'Quando devo fazer a revisão do meu carro?', resposta: 'A revisão deve seguir o plano do fabricante, geralmente a cada 10.000 ou 15.000 km. Porém, em uso urbano intenso (muito trânsito, como em Curitiba), recomendamos intervalos menores. Verificamos o manual do seu veículo e indicamos o momento certo.' },
      { pergunta: 'Posso fazer revisão fora da concessionária sem perder garantia?', resposta: 'Sim! Desde 2019, a lei garante que você pode fazer manutenção em qualquer oficina sem perder a garantia de fábrica. Basta usar peças de qualidade equivalente e guardar as notas fiscais. Na Carplus, fornecemos toda documentação necessária.' },
      { pergunta: 'Meu carro está consumindo muito combustível. O que pode ser?', resposta: 'Consumo alto pode ter várias causas: velas gastas, filtro de ar sujo, sensores com defeito (sonda lambda, MAP, MAF), pneus murchos, alinhamento errado. Fazemos diagnóstico completo para identificar a causa e resolver o problema.' }
    ],
    keywords: ['revisão carro curitiba', 'manutenção motor curitiba', 'troca de velas curitiba', 'mecânico curitiba', 'oficina mecânica portão']
  },
  'conserto-de-rodas': {
    intro: 'O conserto de rodas é uma solução econômica para recuperar rodas amassadas, trincadas ou arranhadas sem precisar comprar rodas novas. Na Carplus Centro Automotivo, utilizamos equipamento especializado para recuperar a geometria original de rodas de liga leve e aço, garantindo segurança e economia.',
    detalhes: [
      'Recuperação de rodas de liga leve amassadas por buracos e guias',
      'Solda especial para trincas em rodas de alumínio',
      'Desempeno de rodas de aço convencionais',
      'Polimento e pintura de rodas arranhadas',
      'Teste de balanceamento após o reparo para garantir o resultado',
      'Avaliação gratuita antes do orçamento'
    ],
    perguntas: [
      { pergunta: 'Vale a pena consertar roda ou é melhor trocar?', resposta: 'Na maioria dos casos, o conserto custa entre 30% a 50% do valor de uma roda nova e o resultado é excelente. Avaliamos cada caso: se a roda tiver trinca estrutural grave ou estiver muito danificada, recomendamos a troca por segurança.' },
      { pergunta: 'Conserto de roda é seguro?', resposta: 'Sim, quando feito com equipamento adequado e por profissionais experientes. Utilizamos técnicas que restauram a geometria original da roda. Após o serviço, fazemos teste de balanceamento para garantir que a roda está perfeita.' },
      { pergunta: 'Quanto tempo leva para consertar uma roda?', resposta: 'Depende do tipo de dano. Amassados simples: 1-2 horas. Trincas que precisam de solda: 1 dia (por conta do resfriamento). Pintura: 2-3 dias. Oferecemos serviço de roda reserva para não ficar sem o carro.' }
    ],
    keywords: ['conserto de rodas curitiba', 'roda amassada curitiba', 'reparo roda liga leve curitiba', 'desempeno roda curitiba', 'roda trincada curitiba']
  },
  'correia-dentada': {
    intro: 'A correia dentada é uma das peças mais importantes do motor. Se ela quebrar, pode causar danos gravíssimos e irreversíveis ao motor, custando milhares de reais em reparo. Na Carplus Centro Automotivo, realizamos a troca preventiva da correia dentada com kit completo de qualidade, incluindo tensor, polia e bomba d\'água quando necessário.',
    detalhes: [
      'Kit completo de correia dentada com tensor, polia e guias',
      'Verificação e troca da bomba d\'água quando necessário',
      'Pe��as das marcas Gates, Contitech, Dayco e originais',
      'Garantia de 1 ano ou 20.000 km no serviço completo',
      'Inspeção de retentores e juntas durante o serviço',
      'Adesivo informativo com data e km da próxima troca'
    ],
    perguntas: [
      { pergunta: 'Quando devo trocar a correia dentada?', resposta: 'A maioria dos fabricantes recomenda trocar entre 50.000 e 100.000 km, ou a cada 4-5 anos (o que vier primeiro). Consulte o manual do seu veículo. Em Curitiba, com clima úmido, recomendamos não ultrapassar 5 anos mesmo com pouca quilometragem.' },
      { pergunta: 'O que acontece se a correia dentada arrebentar?', resposta: 'Na maioria dos motores modernos (motores de interferência), se a correia arrebentar, as válvulas colidem com os pistões, causando dano grave ao motor. O reparo pode custar de R$ 3.000 a R$ 10.000 ou mais. Por isso a troca preventiva é fundamental.' },
      { pergunta: 'Por que trocar a bomba d\'água junto com a correia?', resposta: 'A bomba d\'água fica no mesmo sistema e tem vida útil similar à correia. Se ela falhar depois, será necessário abrir todo o motor novamente. Trocar junto evita mão de obra duplicada e previne superaquecimento por falha da bomba.' }
    ],
    keywords: ['correia dentada curitiba', 'troca correia dentada curitiba', 'kit correia dentada curitiba', 'correia gates curitiba', 'tensor correia curitiba']
  },
  'retifica-de-disco-de-freio': {
    intro: 'A retífica de disco de freio é um serviço especializado que restaura a superfície dos discos, eliminando ranhuras, irregularidades e vibrações no pedal. Na Carplus Centro Automotivo, localizada no bairro Portão em Curitiba, somos referência em retífica de disco de freio para toda a região sul da cidade. Se você mora no Portão, Água Verde, Santa Quitéria, Fazendinha, Novo Mundo, Capão Raso ou arredores, a Carplus é a sua melhor opção para este serviço premium com o melhor preço da região.',
    detalhes: [
      'Equipamento de usinagem próprio com precisão milimétrica',
      'Atendimento para moradores do Portão e toda região sul de Curitiba',
      'Melhor preço da região com qualidade garantida',
      'Medição de espessura antes e depois do serviço com laudo técnico',
      'Discos ventilados, sólidos e perfurados de todas as marcas',
      'Diagnóstico completo do sistema de freios incluso',
      'Garantia total no serviço de usinagem',
      'Localização estratégica na Av. Presidente Arthur da Silva Bernardes'
    ],
    perguntas: [
      { pergunta: 'Qual o preço da retífica de disco de freio no Portão?', resposta: 'Na Carplus Centro Automotivo oferecemos o melhor preço de retífica de disco de freio da região do Portão em Curitiba. O valor varia conforme o tamanho do disco, mas garantimos preço competitivo com qualidade superior. Consulte orçamento pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'A Carplus fica perto do Portão em Curitiba?', resposta: 'Sim! A Carplus está localizada na Av. Presidente Arthur da Silva Bernardes, 1323, no coração do bairro Portão. Fácil acesso para quem vem da Água Verde, Santa Quitéria, Fazendinha, Novo Mundo, Capão Raso e toda região sul de Curitiba.' },
      { pergunta: 'Por que escolher a Carplus para retífica de disco no Portão?', resposta: 'Somos especialistas em freios com mais de 10 anos de experiência. Temos equipamento de usinagem próprio, oferecemos o melhor preço da região do Portão e garantia total no serviço. Além disso, fazemos diagnóstico completo do sistema de freios.' }
    ],
    keywords: ['retifica disco freio portao', 'retifica disco curitiba portao', 'retificar disco freio portao curitiba', 'disco freio portao', 'oficina freio portao curitiba', 'melhor preço retifica disco portao'],
    temImagem: true,
    imagemDestaque: '/images/servicos/retifica-disco-freio-portao-curitiba.webp',
    imagemAlt: 'Retífica de Disco de Freio no bairro Portão em Curitiba - Carplus Centro Automotivo - Serviço Premium com Melhor Preço da Região Sul',
    imagemTitle: 'Retífica de Disco de Freio Portão Curitiba - Carplus Pneus e Oficina Mecânica'
  },
  'troca-de-fluido-de-freio': {
    intro: 'A troca de fluido de freio é um serviço de segurança essencial que muitos motoristas negligenciam. O fluido de freio é higroscópico, ou seja, absorve umidade do ar com o tempo. Essa contaminação reduz o ponto de ebulição do fluido, podendo causar "fading" (perda de frenagem) em situações de uso intenso. Na Carplus Centro Automotivo em Curitiba, realizamos a troca completa com sangria de todo o sistema, utilizando fluidos DOT3 e DOT4 de alta qualidade.',
    detalhes: [
      'Sangria completa de todo o sistema de freios (4 rodas)',
      'Fluidos DOT3 e DOT4 das melhores marcas (Bosch, TRW, Varga)',
      'Verificação de vazamentos em cilindros, pinças e conexões',
      'Teste de umidade do fluido antigo para diagnóstico',
      'Verificação do nível e condição das pastilhas e discos',
      'Garantia total no serviço com nota fiscal'
    ],
    perguntas: [
      { pergunta: 'Com que frequência devo trocar o fluido de freio?', resposta: 'A recomendação geral é trocar a cada 2 anos ou 40.000 km, o que ocorrer primeiro. Em Curitiba, com alta umidade, a contaminação do fluido pode ser mais rápida. Alguns fabricantes recomendam intervalos menores - consulte o manual do seu veículo.' },
      { pergunta: 'O que acontece se eu não trocar o fluido de freio?', resposta: 'O fluido contaminado com umidade pode ferver em frenagens intensas (descidas longas, uso pesado), causando bolhas de vapor no sistema. Isso resulta em perda total ou parcial da capacidade de frenagem - extremamente perigoso. Além disso, a umidade causa corrosão interna em cilindros e pinças.' },
      { pergunta: 'Qual a diferença entre DOT3 e DOT4?', resposta: 'O DOT4 tem ponto de ebulição mais alto que o DOT3, sendo mais resistente ao fading. Carros com freios ABS e sistemas mais modernos geralmente requerem DOT4. Nunca misture tipos diferentes. Na Carplus, usamos sempre o fluido especificado pelo fabricante do seu veículo.' },
      { pergunta: 'Como saber se o fluido de freio precisa ser trocado?', resposta: 'Sinais de fluido velho: cor escura (o novo é claro/amarelado), pedal de freio "esponjoso" ou que afunda, perda de eficiência em frenagens longas. Fazemos teste de umidade com equipamento específico para diagnóstico preciso.' }
    ],
    keywords: ['troca fluido de freio curitiba', 'fluido de freio curitiba', 'sangria freio curitiba', 'DOT4 curitiba', 'fluido freio portão', 'manutencao freio curitiba'],
    temVideo: true,
    videoUrl: '-7jfKxcDlTs',
    videoBadge: 'Video Explicativo Premium'
  },
  'rodizio-de-pneus': {
    intro: 'O rodizio de pneus e um servico essencial para prolongar a vida util dos seus pneus e garantir desgaste uniforme. Na Carplus Centro Automotivo no bairro Portao em Curitiba, somos especialistas em rodizio de pneus para todos os tipos de veiculos. Realizamos o servico com agilidade e precisao, seguindo as recomendacoes tecnicas de cada fabricante, garantindo que seu veiculo rode com seguranca e economia.',
    detalhes: [
      'Rodizio tecnico seguindo padrao X, diagonal ou dianteiro-traseiro conforme veiculo',
      'Inspecao visual completa de todos os pneus durante o servico',
      'Verificacao do desgaste e indicacao de troca quando necessario',
      'Calibragem com pressao recomendada pelo fabricante inclusa',
      'Reaperto dos parafusos de roda com torquimetro',
      'Servico rapido em aproximadamente 30 minutos',
      'Atendimento para carros nacionais, importados, SUVs e picapes'
    ],
    perguntas: [
      { pergunta: 'Com que frequencia devo fazer rodizio de pneus?', resposta: 'Recomendamos fazer o rodizio a cada 10.000 km ou a cada 6 meses, o que ocorrer primeiro. Em veiculos com tracao dianteira, o desgaste dos pneus dianteiros e maior, tornando o rodizio ainda mais importante para equilibrar o desgaste.' },
      { pergunta: 'Qual o preco do rodizio de pneus na Carplus?', resposta: 'O rodizio de pneus na Carplus tem o melhor custo-beneficio da regiao do Portao. O servico inclui inspecao dos pneus e calibragem. Para clientes que compram pneus conosco, oferecemos condicoes especiais. Consulte valores pelo WhatsApp (41) 3082-7282.' },
      { pergunta: 'O rodizio de pneus melhora o consumo de combustivel?', resposta: 'Sim! Pneus com desgaste uniforme rolam melhor e geram menos resistencia, contribuindo para economia de combustivel. Alem disso, evita vibracoes e ruidos que indicam desgaste irregular, melhorando o conforto na direcao.' },
      { pergunta: 'Posso fazer rodizio em pneus de medidas diferentes?', resposta: 'Quando os pneus dianteiros e traseiros tem medidas diferentes (comum em carros esportivos), o rodizio so pode ser feito entre pneus do mesmo eixo (direito-esquerdo). Nossa equipe avalia seu veiculo e indica o melhor procedimento.' }
    ],
    keywords: ['rodizio de pneus curitiba', 'rodizio pneus portao', 'trocar posicao pneus curitiba', 'rodizio pneu curitiba preco', 'borracharia rodizio curitiba'],
    temVideo: true,
    videoUrl: '4FpPSM5vYE8',
    videoBadge: 'Servico em Destaque'
  }
};

// Mapeamento de servicos complementares para links internos
const SERVICOS_COMPLEMENTARES: Record<string, { nome: string; slug: string }[]> = {
  'pintura-de-roda': [
    { nome: 'Alinhamento e Balanceamento', slug: 'alinhamento-e-balanceamento' },
  ],
  'alinhamento-e-balanceamento': [
    { nome: 'Balanceamento', slug: 'balanceamento' },
    { nome: 'Troca de Pneus', slug: 'venda-de-pneus' },
  ],
  'balanceamento': [
    { nome: 'Alinhamento 3D', slug: 'alinhamento-e-balanceamento' },
    { nome: 'Revisao de Suspensao', slug: 'revisao-de-suspensao' },
  ],
  'venda-de-pneus': [
    { nome: 'Alinhamento e Balanceamento', slug: 'alinhamento-e-balanceamento' },
  ],
  'revisao-de-suspensao': [
    { nome: 'Alinhamento 3D', slug: 'alinhamento-e-balanceamento' },
  ],
  'troca-de-amortecedores': [
    { nome: 'Alinhamento 3D', slug: 'alinhamento-e-balanceamento' },
    { nome: 'Revisao de Suspensao', slug: 'revisao-de-suspensao' },
  ],
  'manutencao-de-freios': [
    { nome: 'Troca de Fluido de Freio', slug: 'troca-de-fluido-de-freio' },
    { nome: 'Troca de Pastilha de Freio', slug: 'troca-de-pastilha-de-freio' },
  ],
  'troca-de-fluido-de-freio': [
    { nome: 'Manutencao de Freios', slug: 'manutencao-de-freios' },
    { nome: 'Troca de Pastilha', slug: 'troca-de-pastilha-de-freio' },
  ],
  'troca-de-pastilha-de-freio': [
    { nome: 'Retifica de Disco', slug: 'retifica-de-disco-de-freio' },
    { nome: 'Troca de Fluido de Freio', slug: 'troca-de-fluido-de-freio' },
  ],
  'retifica-de-disco-de-freio': [
    { nome: 'Troca de Pastilha de Freio', slug: 'troca-de-pastilha-de-freio' },
    { nome: 'Manutencao de Freios', slug: 'manutencao-de-freios' },
    { nome: 'Troca de Fluido de Freio', slug: 'troca-de-fluido-de-freio' },
  ],
  'troca-de-oleo': [
    { nome: 'Revisao Geral', slug: 'revisao-geral' },
    { nome: 'Troca de Filtros', slug: 'troca-de-filtros' },
  ],
  'revisao-geral': [
    { nome: 'Troca de Oleo', slug: 'troca-de-oleo' },
    { nome: 'Manutencao de Freios', slug: 'manutencao-de-freios' },
  ],
  'conserto-de-rodas': [
    { nome: 'Reforma de Roda', slug: 'reforma-de-roda' },
    { nome: 'Pintura de Roda', slug: 'pintura-de-roda' },
  ],
  'reforma-de-roda': [
    { nome: 'Conserto de Rodas', slug: 'conserto-de-rodas' },
    { nome: 'Diamante de Roda', slug: 'diamante-de-roda' },
  ],
  'ar-condicionado': [
    { nome: 'Troca de Filtro de Cabine', slug: 'troca-de-filtros' },
    { nome: 'Revisao Geral', slug: 'revisao-geral' },
  ],
};

export default function ServiceDetail() {
  const { slug } = useParams();
  // Try to find in old SERVICES first, then in new ALL_NEW_SERVICES
  const oldService = SERVICES.find(s => s.slug === slug);
  const newService = ALL_NEW_SERVICES.find(s => s.slug === slug);
  const service = oldService || (newService ? { 
    ...newService, 
    id: newService.id,
    slug: newService.slug,
    title: newService.name,
    icon: newService.icon,
    description: newService.shortDescription
  } : null);

  // Get additional SEO content if available, or generate from new service data
  const seoContent = service && SEO_CONTENT[service.slug] ? SEO_CONTENT[service.slug] : (newService ? {
    intro: newService.fullDescription,
    detalhes: newService.highlights,
    perguntas: [],
    keywords: [`${newService.name.toLowerCase()} curitiba`, `${newService.name.toLowerCase()} portão`]
  } : null);

  useSEO(
    service
      ? {
          title: `${service.title} em Curitiba Portão | Carplus Centro Automotivo`,
          description: `${service.description} na Carplus, bairro Portão em Curitiba. Agende: (41) 3082-7282.`,
          canonical: `https://www.carpluspneuseoficina.com.br/servico/${service.slug}/`,
          ogImage: 'https://www.carpluspneuseoficina.com.br/og-carplus.webp',
          schemaJSON: [
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "AutoPartsStore",
                "name": "Carplus Centro Automotivo",
                "telephone": "+55-41-3082-7282",
                "url": "https://www.carpluspneuseoficina.com.br/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Av. Arthur da Silva Bernardes, 1323",
                  "addressLocality": "Curitiba",
                  "addressRegion": "PR",
                  "postalCode": "80320-300",
                  "addressCountry": "BR"
                }
              },
              "areaServed": { "@type": "City", "name": "Curitiba" },
              "url": `https://www.carpluspneuseoficina.com.br/servico/${service.slug}/`
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carpluspneuseoficina.com.br/" },
                { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://www.carpluspneuseoficina.com.br/servicos/" },
                { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://www.carpluspneuseoficina.com.br/servico/${service.slug}/` }
              ]
            },
            // FAQPage Schema para Rich Snippets no Google - 12 perguntas por servico
            ...(service && getServiceFaqs(service.slug).length > 0 ? [{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": getServiceFaqs(service.slug).map(faq => ({
                "@type": "Question",
                "name": faq.pergunta,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.resposta
                }
              }))
            }] : [])
          ]
        }
      : { title: 'Serviço não encontrado | Carplus', description: 'Serviço não encontrado.', noindex: true }
  );

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 pt-24 md:pt-28">
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold uppercase mb-4">Serviço não encontrado</h1>
        <p className="text-gray-500 mb-8">O serviço que você procura não existe ou foi removido.</p>
        <Link to="/servicos" className="bg-primary text-black px-7 py-3 rounded-full font-bold uppercase tracking-widest text-sm">Ver Todos os Serviços</Link>
      </div>
      <Footer />
    </div>
  );

  const Icon = getIcon(service.icon);

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      
      <main className="bg-white">
        {/* Hero */}
        <section className="relative pt-[120px] md:pt-[108px] pb-24 bg-dark text-white overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
              <Link to="/#servicos" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-8 hover:transform hover:translate-x-[-4px] transition-all">
                 <ArrowLeft size={16} /> Voltar para serviços
              </Link>
              
              <div className="w-24 h-24 bg-primary text-black rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/40">
                 <Icon size={48} />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 italic uppercase tracking-tight font-bold leading-tight">{service.title} <span className="text-primary">em Curitiba</span> – Bairro Portão</h1>
              <p className="text-xl md:text-3xl text-white/50 font-light max-w-3xl mx-auto mb-12">
                A Carplus Centro Automotivo é referência em <span className="text-white font-bold">{service.title}</span> na região sul de Curitiba, oferecendo tecnologia de ponta e atendimento especializado.
              </p>

              <div className="flex justify-center gap-4">
                 <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/554130827282?text=Olá! Preciso de orçamento para ${service.title}`}
                  className="bg-primary text-black px-7 py-3 rounded-full font-bold flex items-center gap-3 text-sm hover:bg-yellow-600 transition-all shadow-xl uppercase tracking-tight"
                 >
                    <MessageSquare size={20} /> Agendar Serviço
                 </motion.a>
              </div>
           </div>
        </section>

        {/* Content */}
        <section className="py-24 max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 leading-snug font-bold tracking-tight">Por que escolher a Carplus para {service.title}?</h2>
                 <p className="text-lg text-gray-500 leading-relaxed">
                   Na Carplus Centro Automotivo, localizada no bairro Portão em Curitiba, investimos constantemente em equipamentos modernos e capacitacao da equipe. Nosso servico de {service.title} segue rigorosos padroes de seguranca e qualidade, atendendo clientes de toda Curitiba e regiao metropolitana.
                 </p>
                 
                 <h3 className="sr-only">Diferenciais técnicos e tecnologia utilizada</h3>
                 <div className="space-y-4">
                    {[
                      'Diagnostico computadorizado de alta precisao',
                      'Tecnicos certificados com treinamento especializado',
                      'Pecas originais e de primeira linha com garantia',
                      'Orcamento detalhado e transparente antes do servico',
                      'Localizacao privilegiada no Portao, Curitiba'
                    ].map(item => (
                       <div key={item} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                          <CheckCircle className="text-primary" size={20} />
                          <span className="font-bold text-gray-800">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="relative group">
                 <img loading="lazy" 
                    src="/images/loja/loja-de-pneus-curitiba.webp" 
                    width={1067}
                    height={800}
                    className="rounded-[40px] shadow-2xl w-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105" 
                    alt={`Oficina mecanica especializada em ${service.title} – ${service.title} na Carplus Curitiba Portao`} 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent rounded-[40px]" />
                 <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="font-accent text-3xl mb-1 uppercase italic tracking-tighter">10+ Anos</p>
                    <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Cuidando de Curitiba</p>
                 </div>
              </div>
           </div>
        </section>

        {/* SEO Content Section - Conte��do otimizado para Google e Bing */}
        {seoContent && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              {/* Introdução SEO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto mb-16"
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 leading-snug font-bold tracking-tight text-center">
                  {service.title} em <span className="text-primary">Curitiba</span> – Bairro Portão
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  {seoContent.intro}
                </p>
              </motion.div>

              {/* Imagem em Destaque para SEO */}
              {seoContent.temImagem && seoContent.imagemDestaque && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto mb-16"
                >
                  <figure className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={seoContent.imagemDestaque}
                    alt={seoContent.imagemAlt || `${service.title} no bairro Portão em Curitiba - Carplus Centro Automotivo`}
                    title={seoContent.imagemTitle || `${service.title} Curitiba Portão`}
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                    <figcaption className="sr-only">
                      {seoContent.imagemAlt || `Serviço de ${service.title} realizado pela Carplus Centro Automotivo no bairro Portão, região sul de Curitiba. Atendimento especializado com melhor preço da região.`}
                    </figcaption>
                  </figure>
                </motion.div>
              )}

              {/* Grid de Detalhes */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    O Que Oferecemos
                  </h3>
                  <ul className="space-y-4">
                    {seoContent.detalhes.map((detalhe, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-gray-700">{detalhe}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    Por Que Escolher a Carplus?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <Clock className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold text-gray-900 mb-1">Atendimento Rápido</h4>
                      <p className="text-sm text-gray-600">Sem agendamento para a maioria dos serviços. Atendimento por ordem de chegada.</p>
                    </div>
                    <div className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <Shield className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold text-gray-900 mb-1">Garantia Total</h4>
                      <p className="text-sm text-gray-600">Todos os serviços com garantia por escrito. Peças com nota fiscal.</p>
                    </div>
                    <div className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <Award className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold text-gray-900 mb-1">10+ Anos</h4>
                      <p className="text-sm text-gray-600">Mais de uma década cuidando dos carros de Curitiba com excelência.</p>
                    </div>
                    <div className="p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
                      <MapPin className="w-8 h-8 text-primary mb-3" />
                      <h4 className="font-bold text-gray-900 mb-1">Localização Central</h4>
                      <p className="text-sm text-gray-600">No coração do Portão, fácil acesso de toda Curitiba e região.</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* FAQ Section - Schema.org FAQPage - 12 perguntas otimizadas para SEO */}
              {service && getServiceFaqs(service.slug).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto"
                >
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-center">
                    Perguntas Frequentes sobre {service.title} em Curitiba
                  </h3>
                  <p className="text-gray-500 text-center mb-8">
                    Tire suas duvidas sobre {service.title} na Carplus Centro Automotivo, bairro Portao.
                  </p>
                  <div className="space-y-3">
                    {getServiceFaqs(service.slug).map((faq, idx) => (
                      <details
                        key={idx}
                        className="group bg-white rounded-xl border border-gray-200"
                      >
                        <summary className="flex items-start justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                          <h4 className="font-bold text-gray-900 pr-4 text-left whitespace-normal break-words flex-1">{faq.pergunta}</h4>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0 self-start mt-0.5" />
                        </summary>
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-gray-600 leading-relaxed">{faq.resposta}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Links Internos para Servicos Complementares */}
              {service && SERVICOS_COMPLEMENTARES[service.slug] && SERVICOS_COMPLEMENTARES[service.slug].length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-xl border border-gray-200"
                >
                  <p className="text-gray-700 leading-relaxed">
                    Aproveite e conheca tambem nossos servicos complementares:{' '}
                    {SERVICOS_COMPLEMENTARES[service.slug].map((s, idx) => (
                      <span key={s.slug}>
                        <Link 
                          to={`/servico/${s.slug}`} 
                          className="text-primary font-bold hover:underline"
                        >
                          {s.nome}
                        </Link>
                        {idx < SERVICOS_COMPLEMENTARES[service.slug].length - 1 ? ' e ' : ''}
                      </span>
                    ))}
                    {' '}para manter seu veiculo em perfeito estado.
                  </p>
                </motion.div>
              )}

              {/* Keywords para SEO (hidden but crawlable) */}
              <div className="sr-only">
                <p>Palavras-chave relacionadas: {seoContent.keywords.join(', ')}</p>
                <p>Carplus Centro Automotivo - {service.title} no bairro Portão em Curitiba, Paraná. Atendemos toda a região metropolitana incluindo São José dos Pinhais, Pinhais, Colombo, Araucária e Campo Largo.</p>
              </div>
            </div>
          </section>
        )}

        {/* Depoimentos Section - O que dizem nossos clientes */}
        {service && (
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  O que dizem nossos clientes sobre <span className="text-primary">{service.title}</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Veja o que clientes da regiao de Curitiba e Portao falam sobre nosso atendimento e servicos.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* TODO: substituir por depoimentos reais do Google/CRM */}
                {[
                  {
                    name: 'Ricardo M.',
                    since: 'cliente desde 2022',
                    text: `Levei meu carro para ${service.title} e fiquei impressionado com o resultado. Prazo cumprido, preco justo e atendimento transparente do inicio ao fim.`,
                  },
                  {
                    name: 'Patricia S.',
                    since: 'cliente desde 2021',
                    text: `Excelente servico de ${service.title}! Equipe muito profissional e atenciosa. Recomendo para quem busca qualidade no Portao, Curitiba.`,
                  },
                  {
                    name: 'Carlos A.',
                    since: 'cliente desde 2023',
                    text: `Melhor oficina da regiao sul de Curitiba! Fiz ${service.title} e outros servicos, sempre com qualidade impecavel. Nota 10!`,
                  },
                ].map((review, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-4">&quot;{review.text}&quot;</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">{review.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.since}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Premium Video Section - Exclusive for troca-de-fluido-de-freio */}
        {slug === 'troca-de-fluido-de-freio' && (
          <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-primary/20 border border-red-500/40 text-red-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-red-500/10">
                  <Play size={12} fill="currentColor" />
                  Video Explicativo Premium
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-normal text-white mb-6 italic leading-snug">
                  Veja <span className="text-primary">Como Funciona</span>
                </h2>
                <p className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  Assista ao video e entenda a importancia da troca de fluido de freio e os <span className="text-red-400 font-bold">riscos de negligenciar este servico</span>.
                </p>
              </motion.div>

              {/* Video + Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Premium Video Container */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-500/30 via-primary/20 to-red-500/30 rounded-[3rem] blur-2xl opacity-60" />
                  
                  {/* Video Frame */}
                  <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-red-500/20 border-4 border-red-500/30">
                    {/* YouTube Shorts Embed */}
                    <LiteYouTube
                      videoId="-7jfKxcDlTs"
                      title="CarPlus - Troca de Fluido de Freio"
                      params="mute=1&loop=1&playlist=-7jfKxcDlTs&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                    />
                    
                    {/* Top Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
                    
                    {/* Premium Badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <div className="bg-gradient-to-r from-red-500 to-primary text-white px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-red-500/40">
                        <Play size={12} fill="currentColor" />
                        Video Explicativo
                      </div>
                    </div>

                    {/* Danger Badge */}
                    <div className="absolute top-5 right-5 z-10">
                      <div className="bg-red-500/90 text-white px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 animate-pulse">
                        <AlertTriangle size={10} />
                        Importante
                      </div>
                    </div>
                    
                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-white font-black text-xl uppercase tracking-tight mb-1">Carplus Centro Automotivo</p>
                      <p className="text-red-400/80 text-sm font-medium">Sua seguranca em primeiro lugar</p>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-red-500/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-[50px]" />
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Shield className="w-6 h-6" />, title: 'Seguranca', desc: 'Frenagem eficiente' },
                      { icon: <Clock className="w-6 h-6" />, title: '30-60 min', desc: 'Servico rapido' },
                      { icon: <Star className="w-6 h-6" />, title: 'DOT3/DOT4', desc: 'Fluidos premium' },
                      { icon: <Trophy className="w-6 h-6" />, title: 'Garantia', desc: 'No servico' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/30 transition-colors group">
                        <div className="w-11 h-11 bg-primary/15 rounded-xl flex items-center justify-center mb-3 text-primary group-hover:bg-primary/25 transition-colors">
                          {item.icon}
                        </div>
                        <h3 className="font-bold text-white text-sm uppercase tracking-tight">{item.title}</h3>
                        <p className="text-white/40 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Danger Warning Box */}
                  <div className="bg-gradient-to-br from-red-500/10 to-red-900/10 border-2 border-red-500/40 rounded-3xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl" />
                    <h3 className="text-xl font-black text-red-400 uppercase tracking-tight mb-5 flex items-center gap-3 relative z-10">
                      <OctagonX className="text-red-500" size={24} />
                      Perigos de NAO Trocar
                    </h3>
                    <ul className="space-y-3 relative z-10">
                      {[
                        'Perda total da capacidade de frenagem em emergencias',
                        'Fluido velho ferve em altas temperaturas (fading)',
                        'Corrosao interna danifica cilindros e pincas',
                        'Pedal de freio fica "esponjoso" e sem resposta',
                        'Risco de acidentes graves por falha nos freios',
                        'Custo de reparo aumenta drasticamente',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Feature List */}
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-5 flex items-center gap-3">
                      <FlaskConical className="text-primary" size={24} />
                      Como Fazemos a Troca
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Analise do nivel e condicao atual do fluido',
                        'Sangria completa de todo o sistema de freios',
                        'Substituicao por fluido DOT3 ou DOT4 premium',
                        'Verificacao de vazamentos em todas as conexoes',
                        'Teste de pressao e resposta do pedal',
                        'Garantia total no servico realizado',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de Troca de Fluido de Freio. Pode me dar mais informações?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02]"
                    >
                      <MessageSquare size={18} /> Agendar Agora
                    </a>
                    <a
                      href="tel:+554130827282"
                      className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      (41) 3082-7282
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Additional Info Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  { 
                    icon: <AlertTriangle className="w-8 h-8" />, 
                    title: 'Quando Trocar?', 
                    desc: 'A cada 2 anos ou 40.000 km, o que ocorrer primeiro. Em Curitiba, com alta umidade, recomendamos verificar anualmente.',
                    color: 'red'
                  },
                  { 
                    icon: <FlaskConical className="w-8 h-8" />, 
                    title: 'DOT3 vs DOT4', 
                    desc: 'DOT4 tem ponto de ebulicao mais alto, ideal para carros com ABS. Usamos sempre o fluido especificado pelo fabricante.',
                    color: 'primary'
                  },
                  { 
                    icon: <Shield className="w-8 h-8" />, 
                    title: 'Garantia Total', 
                    desc: 'Servico realizado com nota fiscal, fluidos de primeira linha e garantia completa. Sua seguranca e nossa prioridade.',
                    color: 'primary'
                  },
                ].map((item, i) => (
                  <div key={i} className={`bg-[#1a1a1a] border ${item.color === 'red' ? 'border-red-500/30' : 'border-white/10'} rounded-3xl p-8 hover:border-primary/30 transition-colors`}>
                    <div className={`w-14 h-14 ${item.color === 'red' ? 'bg-red-500/20 text-red-400' : 'bg-primary/20 text-primary'} rounded-2xl flex items-center justify-center mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="font-black text-white text-lg uppercase tracking-tight mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Premium Video Section - Exclusive for troca-de-oleo */}
        {slug === 'troca-de-oleo' && (
          <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-primary/20 border border-amber-500/40 text-amber-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-amber-500/10">
                  <Play size={12} fill="currentColor" />
                  Video Explicativo Premium
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-normal text-white mb-6 italic leading-snug">
                  Troca de <span className="text-primary">Oleo e Filtros</span>
                </h2>
                <p className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  Assista ao video e entenda a importancia da troca de oleo regular para a <span className="text-amber-400 font-bold">saude do motor</span> do seu veiculo.
                </p>
              </motion.div>

              {/* Video + Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Premium Video Container */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-primary/20 to-amber-500/30 rounded-[3rem] blur-2xl opacity-60" />
                  
                  {/* Video Frame */}
                  <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-amber-500/20 border-4 border-amber-500/30">
                    {/* YouTube Shorts Embed */}
                    <LiteYouTube
                      videoId="TY8qfETXlJQ"
                      title="CarPlus - Troca de Óleo"
                      params="mute=1&loop=1&playlist=TY8qfETXlJQ&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                    />
                    
                    {/* Top Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
                    
                    {/* Premium Badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <div className="bg-gradient-to-r from-amber-500 to-primary text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-amber-500/40">
                        <Play size={12} fill="currentColor" />
                        Video Explicativo
                      </div>
                    </div>

                    {/* Motor Badge */}
                    <div className="absolute top-5 right-5 z-10">
                      <div className="bg-amber-500/90 text-black px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5">
                        <Droplet size={10} />
                        Motor
                      </div>
                    </div>
                    
                    {/* Bottom Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-white font-black text-xl uppercase tracking-tight mb-1">Carplus Centro Automotivo</p>
                      <p className="text-amber-400/80 text-sm font-medium">Cuidando do seu motor</p>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-[50px]" />
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: '5.000km', label: 'Intervalo Mineral', icon: <Droplet size={20} /> },
                      { value: '10.000km', label: 'Intervalo Sintetico', icon: <Shield size={20} /> },
                      { value: '100%', label: 'Filtragem', icon: <CheckCircle size={20} /> },
                      { value: '+Vida', label: 'Util do Motor', icon: <Star size={20} /> },
                    ].map((stat, i) => (
                      <div key={i} className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-amber-500/30 transition-colors">
                        <div className="w-10 h-10 mx-auto mb-3 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center">
                          {stat.icon}
                        </div>
                        <p className="text-2xl font-black text-white">{stat.value}</p>
                        <p className="text-white/50 text-xs uppercase tracking-wider">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Feature List */}
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-5 flex items-center gap-3">
                      <Droplet className="text-primary" size={24} />
                      Como Fazemos a Troca
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Drenar completamente o oleo antigo do carter',
                        'Substituir o filtro de oleo por um novo',
                        'Abastecer com oleo de alta qualidade',
                        'Verificar nivel de todos os fluidos',
                        'Colar etiqueta de proxima troca',
                        'Garantia total no servico realizado',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de Troca de Óleo e Filtros. Pode me dar mais informações?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02]"
                    >
                      <MessageSquare size={18} /> Agendar Agora
                    </a>
                    <a
                      href="tel:+554130827282"
                      className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      (41) 3082-7282
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Additional Info Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  { 
                    icon: <Droplet className="w-8 h-8" />, 
                    title: 'Tipos de Oleo', 
                    desc: 'Trabalhamos com oleos minerais, semi-sinteticos e 100% sinteticos das melhores marcas: Mobil, Shell, Castrol e Petronas.',
                    color: 'amber'
                  },
                  { 
                    icon: <Timer className="w-8 h-8" />, 
                    title: 'Quando Trocar?', 
                    desc: 'Mineral: 5.000km. Semi-sintetico: 7.500km. Sintetico: 10.000km. Sempre prevalece o que ocorrer primeiro.',
                    color: 'primary'
                  },
                  { 
                    icon: <Shield className="w-8 h-8" />, 
                    title: 'Garantia Total', 
                    desc: 'Servico realizado com nota fiscal, oleos de primeira linha e garantia completa. Descarte ecologico do oleo usado.',
                    color: 'primary'
                  },
                ].map((item, i) => (
                  <div key={i} className={`bg-[#1a1a1a] border ${item.color === 'amber' ? 'border-amber-500/30' : 'border-white/10'} rounded-3xl p-8 hover:border-primary/30 transition-colors`}>
                    <div className={`w-14 h-14 ${item.color === 'amber' ? 'bg-amber-500/20 text-amber-400' : 'bg-primary/20 text-primary'} rounded-2xl flex items-center justify-center mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="font-black text-white text-lg uppercase tracking-tight mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Premium Video Section - Exclusive for suspensao-e-freios */}
        {slug === 'suspensao-e-freios' && (
          <section className="relative py-24 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
              <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-[100px]" />
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              {/* Header */}
              <motion.header
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-orange-500/20 border border-primary/40 text-primary px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-lg shadow-primary/10">
                  <Play size={12} fill="currentColor" />
                  Video Premium Exclusivo
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-normal text-white mb-6 italic leading-snug">
                  Suspensao e Freios <span className="text-primary">em Acao</span>
                </h2>
                <p className="text-white/50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                  Assista ao nosso video e entenda a importancia de manter a <span className="text-primary font-bold">suspensao e freios</span> do seu veiculo em perfeito estado.
                </p>
              </motion.header>

              {/* Video + Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Premium Video Container */}
                <motion.figure
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative mx-auto w-full max-w-[380px] lg:max-w-[420px]"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-orange-500/20 to-primary/30 rounded-[3rem] blur-2xl opacity-60" />
                  
                  {/* Video Frame */}
                  <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-4 border-primary/30">
                    {/* YouTube Shorts Embed */}
                    <LiteYouTube
                      videoId="OEDrtkA19mY"
                      title="Carplus Centro Automotivo - Servico de Suspensao e Freios em Curitiba"
                      params="mute=1&loop=1&playlist=OEDrtkA19mY&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                    />
                    
                    {/* Top Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
                    
                    {/* Premium Badge */}
                    <div className="absolute top-5 left-5 z-10">
                      <div className="bg-gradient-to-r from-primary to-orange-500 text-black px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl shadow-primary/40">
                        <Play size={12} fill="currentColor" />
                        Video Exclusivo
                      </div>
                    </div>

                    {/* Service Badge */}
                    <div className="absolute top-5 right-5 z-10">
                      <div className="bg-white/90 text-black px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5">
                        <Shield size={10} />
                        Seguranca
                      </div>
                    </div>
                    
                    {/* Bottom Info */}
                    <figcaption className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black/90 to-transparent">
                      <p className="text-white font-black text-xl uppercase tracking-tight mb-1">Carplus Centro Automotivo</p>
                      <p className="text-primary/80 text-sm font-medium">Especialistas em Suspensao e Freios</p>
                    </figcaption>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                  <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-orange-500/10 rounded-full blur-[50px]" />
                </motion.figure>

                {/* Content */}
                <motion.article
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="space-y-8"
                >
                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: <Shield className="w-6 h-6" />, title: 'Seguranca', desc: 'Frenagem precisa' },
                      { icon: <Clock className="w-6 h-6" />, title: '1-3 horas', desc: 'Servico completo' },
                      { icon: <Star className="w-6 h-6" />, title: 'Pecas Premium', desc: 'Cofap, Monroe' },
                      { icon: <Trophy className="w-6 h-6" />, title: 'Garantia', desc: 'Total no servico' },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-primary/30 transition-colors group">
                        <div className="w-11 h-11 bg-primary/15 rounded-xl flex items-center justify-center mb-3 text-primary group-hover:bg-primary/25 transition-colors">
                          {item.icon}
                        </div>
                        <h3 className="font-bold text-white text-sm uppercase tracking-tight">{item.title}</h3>
                        <p className="text-white/40 text-xs mt-0.5">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Warning Box */}
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-900/10 border-2 border-orange-500/40 rounded-3xl p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
                    <h3 className="text-xl font-black text-orange-400 uppercase tracking-tight mb-5 flex items-center gap-3 relative z-10">
                      <AlertTriangle className="text-orange-500" size={24} />
                      Sinais de Problema
                    </h3>
                    <ul className="space-y-3 relative z-10">
                      {[
                        'Carro balancando muito em lombadas e buracos',
                        'Ruidos ao passar em irregularidades na pista',
                        'Vibracao no volante durante a frenagem',
                        'Aumento da distancia para frear o veiculo',
                        'Pneus com desgaste irregular nas bordas',
                        'Carro puxando para um lado ao frear',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/80 text-sm">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Service List */}
                  <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-3xl p-8">
                    <h3 className="text-xl font-black text-white uppercase tracking-tight mb-5 flex items-center gap-3">
                      <Wrench className="text-primary" size={24} />
                      Nossos Servicos
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Troca de amortecedores dianteiros e traseiros',
                        'Substituicao de pastilhas e discos de freio',
                        'Reparo de pivos, bandejas e bieletas',
                        'Troca de buchas e batentes de suspensao',
                        'Sangria e troca de fluido de freio DOT4',
                        'Diagnostico completo com laudo tecnico',
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de Suspensão e Freios. Pode me dar mais informações?"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary hover:bg-primary/90 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02]"
                    >
                      <MessageSquare size={18} /> Agendar Agora
                    </a>
                    <a
                      href="tel:+554130827282"
                      className="bg-white/5 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                    >
                      (41) 3082-7282
                    </a>
                  </div>
                </motion.article>
              </div>

              {/* Additional Info Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  { icon: <Award size={28} />, title: 'Pecas de Qualidade', desc: 'Trabalhamos com as melhores marcas: Cofap, Monroe, Kayaba, Bosch e pecas originais.', color: 'primary' },
                  { icon: <Shield size={28} />, title: 'Garantia Total', desc: 'Todos os servicos de suspensao e freios tem garantia de 6 meses ou 10.000 km.', color: 'primary' },
                  { icon: <MapPin size={28} />, title: 'Facil Acesso', desc: 'Estamos no Portao, Curitiba. Atendemos toda a regiao metropolitana com qualidade.', color: 'primary' },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-primary/30 transition-colors">
                    <div className="w-14 h-14 bg-primary/20 text-primary rounded-2xl flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-black text-white text-lg uppercase tracking-tight mb-2">{item.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        )}

        {/* Wheel Repair Showcase - Exclusive for conserto-de-rodas */}
        {slug === 'conserto-de-rodas' && (
          <section className="py-20 bg-[#0a0a0a]" aria-labelledby="wheel-repair-gallery">
            <div className="max-w-7xl mx-auto px-4">
              {/* Banner Promocional */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/rodas/recuperacao-rodas.webp"
                    alt="Recuperação e restauração de rodas danificadas na Carplus Centro Automotivo em Curitiba - Serviço especializado de conserto de rodas amassadas, trincadas e deformadas com comparativo antes e depois"
                    width={799}
                    height={1200}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </motion.div>

              {/* Header da Galeria */}
              <header className="text-center mb-12">
                <span className="inline-block bg-primary/20 border border-primary/40 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  Trabalhos Realizados
                </span>
                <h2 id="wheel-repair-gallery" className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4 italic">
                  Rodas <span className="text-primary">Recuperadas</span>
                </h2>
                <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
                  Confira alguns dos nossos trabalhos de recuperacao e restauracao de rodas. Transformamos rodas danificadas em rodas perfeitas novamente.
                </p>
              </header>

              {/* Grid de Benefícios */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { icon: <Shield className="w-6 h-6" />, title: 'Garantia', desc: 'Em todos os reparos' },
                  { icon: <Settings className="w-6 h-6" />, title: 'Equipamento', desc: 'De ultima geracao' },
                  { icon: <Clock className="w-6 h-6" />, title: 'Rapidez', desc: 'Entrega em 1-2h' },
                  { icon: <Star className="w-6 h-6" />, title: 'Qualidade', desc: 'Acabamento perfeito' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-5 text-center"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 text-primary">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-white text-sm uppercase tracking-tight">{item.title}</h3>
                    <p className="text-white/50 text-xs mt-1">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Galeria de Imagens */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { src: "/images/rodas/roda-polida-1.webp", alt: "Roda de liga leve polida e recuperada na Carplus Centro Automotivo Curitiba - Conserto profissional de rodas amassadas" },
                  { src: "/images/rodas/roda-volvo-yokohama.webp", alt: "Detalhe de roda Volvo recuperada com pneu Yokohama na Carplus - Restauracao de acabamento original" },
                  { src: "/images/rodas/volvo-xc60-rodas.webp", alt: "Volvo XC60 com rodas restauradas na oficina Carplus Centro Automotivo Curitiba Portao" },
                  { src: "/images/rodas/veiculo-rodas-consertadas.webp", alt: "Veiculo com rodas consertadas estacionado na Carplus Pneus Curitiba - Servico de qualidade" },
                ].map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative rounded-2xl overflow-hidden aspect-square group"
                  >
                    <img 
                      src={img.src}
                      alt={img.alt}
                      width={1200}
                      height={801}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>

              {/* Lista de Serviços */}
              <div className="bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 md:p-10 mb-10">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-6">
                  Tipos de Consertos de Rodas que Realizamos
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
                  {[
                    'Rodas amassadas por impacto em buracos',
                    'Rodas trincadas ou com fissuras',
                    'Rodas com corrosao ou oxidacao',
                    'Rodas riscadas ou arranhadas em guias',
                    'Rodas com empenamento lateral',
                    'Rodas de liga leve e aluminio',
                    'Rodas de aco (ferro)',
                    'Rodas cromadas ou diamantadas',
                    'Restauracao de acabamento original',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/80">
                      <span className="w-2 h-2 bg-primary rounded-full shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA WhatsApp */}
              <div className="text-center">
                <a
                  href="https://wa.me/554130827282?text=Olá! Tenho interesse no serviço de Conserto de Rodas. Pode me dar mais informações e orçamento?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-tight hover:bg-yellow-400 transition-colors shadow-lg shadow-primary/30"
                >
                  <MessageSquare size={18} /> Solicitar Orcamento via WhatsApp
                </a>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 bg-primary text-black">
           <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl lg:text-5xl mb-4 leading-tight italic uppercase font-bold">Resolva o Problema <br/> do seu Carro Hoje</h2>
              <p className="text-base mb-8 max-w-2xl mx-auto opacity-70">Não deixe para depois. Pequenas manutenções evitam gastos altos no futuro.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                 <motion.a
                   whileHover={{ scale: 1.03 }}
                   whileTap={{ scale: 0.97 }}
                   href="https://wa.me/554130827282"
                   className="bg-black text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-gray-900 transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-tight"
                 >
                    <MessageSquare size={16} /> Chamar no WhatsApp
                 </motion.a>
                 <motion.a
                   whileHover={{ scale: 1.03 }}
                   whileTap={{ scale: 0.97 }}
                   href="tel:+554130827282"
                   className="bg-black/10 border border-black/20 text-black px-7 py-3 rounded-full font-bold text-sm hover:bg-black/20 transition-all flex items-center justify-center gap-2 uppercase tracking-tight"
                 >
                    <Phone size={16} /> (41) 3082-7282
                 </motion.a>
              </div>
           </div>
        </section>

        {/* Seção de Pneus em Destaque - SEO Internal Linking */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Pneus</span>
                <div className="w-12 h-1 bg-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-dark">
                Pneus em <span className="text-primary italic">Destaque</span>
              </h2>
              <p className="text-gray-500 mt-4">Aproveite para conhecer nossos pneus das melhores marcas</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {TIRES.filter(t => t && t.destaque).slice(0, 6).map((tire) => (
                <Link 
                  key={tire.id} 
                  to={`/pneu/${tire.slug}`}
                  className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="aspect-square mb-3 overflow-hidden rounded-xl bg-gray-50">
                  <img
                    src={tire.imagem}
                    alt={tire.nome}
                    width={600}
                    height={600}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  </div>
                  <p className="text-xs font-bold text-gray-400 uppercase">{tire.marca}</p>
                  <p className="text-sm font-bold text-dark truncate">{tire.medida}</p>
                  <p className="text-xs text-gray-500 truncate">{tire.linha}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link 
                to="/pneus"
                className="inline-flex items-center gap-2 bg-primary text-black px-8 py-4 rounded-full font-bold uppercase tracking-tight hover:bg-yellow-400 transition-all shadow-lg"
              >
                Ver Todos os Pneus <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* Bairros e Cidades Atendidas - SEO Internal Linking */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Cobertura</span>
                <div className="w-12 h-1 bg-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-dark">
                Atendemos <span className="text-primary italic">Toda Curitiba</span>
              </h2>
              <p className="text-gray-500 mt-4">{service.title} para moradores de todos os bairros e cidades da regiao</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {NEIGHBORHOODS.slice(0, 18).map((neighborhood) => {
                const neighborhoodSlug = neighborhood.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-');
                return (
                  <Link 
                    key={neighborhood.name}
                    to={`/bairro/${neighborhoodSlug}`}
                    className="bg-gray-50 hover:bg-primary/10 border border-gray-100 hover:border-primary/30 rounded-xl p-3 transition-all group text-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <MapPin size={14} className="text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-dark group-hover:text-primary transition-colors truncate">{neighborhood.name}</span>
                    </div>
                    <span className="text-[10px] text-gray-400">{neighborhood.tempo}</span>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-8">
              <Link 
                to="/como-chegar"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                Ver todos os bairros atendidos <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp Flutuante */}
      <a
        href="https://wa.me/554130827282?text=Olá!%20Gostaria%20de%20agendar%20um%20serviço."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-6 h-6 text-white" fill="white" />
      </a>

      <Footer />
    </div>
  );
}
