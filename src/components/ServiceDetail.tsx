import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data';
import { ArrowLeft, MessageSquare, CircleCheck as CheckCircle, Star, ChevronRight, MapPin, Clock, Shield, Award, Play, OctagonX, FlaskConical, Trophy, AlertTriangle } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

// Conteúdo SEO detalhado para cada serviço - otimizado para Google e Bing
const SEO_CONTENT: Record<string, {
  intro: string;
  detalhes: string[];
  perguntas: { pergunta: string; resposta: string }[];
  keywords: string[];
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
    intro: 'O alinhamento 3D computadorizado é essencial para a segurança e economia do seu veículo. Na Carplus Auto Center, utilizamos equipamento de alinhamento Hunter 3D de última geração, o mesmo utilizado pelas concessionárias premium. O alinhamento corrige a geometria das rodas, evitando desgaste irregular dos pneus e melhorando a estabilidade do veículo.',
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
    intro: 'A troca de óleo é a manutenção mais importante para a longevidade do motor do seu carro. Na Carplus Auto Center em Curitiba, realizamos troca de óleo com lubrificantes das melhores marcas: Mobil, Shell Helix, Castrol, Petronas e Selenia. Trabalhamos com óleos minerais, semi-sintéticos e 100% sintéticos para todos os tipos de motor.',
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
    keywords: ['troca de óleo curitiba', 'óleo sintético curitiba', 'troca óleo portão', 'mobil curitiba', 'shell helix curitiba', 'castrol curitiba']
  },
  'scanner-automotivo': {
    intro: 'O diagnóstico por scanner automotivo é fundamental para identificar problemas eletrônicos no seu veículo. Na Carplus Auto Center, utilizamos scanners multiprotocolo de última geração que leem todos os módulos do carro: motor, câmbio, ABS, airbag, direção elétrica e muito mais. Atendemos todas as marcas nacionais e importadas.',
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
    intro: 'A suspensão e os freios são sistemas críticos para a segurança do seu veículo. Na Carplus Auto Center, oferecemos serviço completo de revisão e reparo de amortecedores, molas, pivôs, buchas, pastilhas, discos e todo o sistema de frenagem. Utilizamos peças de qualidade com garantia e mão de obra especializada.',
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
    intro: 'O ar-condicionado automotivo é essencial para o conforto em Curitiba, tanto no verão quanto no inverno úmido. Na Carplus Auto Center, realizamos todos os serviços de manutenção do sistema de climatização: carga de gás, higienização, reparo de compressor, troca de filtro de cabine e diagnóstico completo do sistema.',
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
    intro: 'A manutenção do motor é fundamental para garantir desempenho, economia de combustível e durabilidade do seu veículo. Na Carplus Auto Center em Curitiba, realizamos revisões preventivas e corretivas completas: troca de velas, cabos, filtros, correias, bomba d\'água, embreagem e muito mais. Atendemos carros nacionais e importados.',
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
    intro: 'O conserto de rodas é uma solução econômica para recuperar rodas amassadas, trincadas ou arranhadas sem precisar comprar rodas novas. Na Carplus Auto Center, utilizamos equipamento especializado para recuperar a geometria original de rodas de liga leve e aço, garantindo segurança e economia.',
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
    intro: 'A correia dentada é uma das peças mais importantes do motor. Se ela quebrar, pode causar danos gravíssimos e irreversíveis ao motor, custando milhares de reais em reparo. Na Carplus Auto Center, realizamos a troca preventiva da correia dentada com kit completo de qualidade, incluindo tensor, polia e bomba d\'água quando necessário.',
    detalhes: [
      'Kit completo de correia dentada com tensor, polia e guias',
      'Verificação e troca da bomba d\'água quando necessário',
      'Peças das marcas Gates, Contitech, Dayco e originais',
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
  'troca-de-fluido-de-freio': {
    intro: 'A troca de fluido de freio é um serviço de segurança essencial que muitos motoristas negligenciam. O fluido de freio é higroscópico, ou seja, absorve umidade do ar com o tempo. Essa contaminação reduz o ponto de ebulição do fluido, podendo causar "fading" (perda de frenagem) em situações de uso intenso. Na Carplus Auto Center em Curitiba, realizamos a troca completa com sangria de todo o sistema, utilizando fluidos DOT3 e DOT4 de alta qualidade.',
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
    videoUrl: 'qTmIkTltrYk',
    videoBadge: 'Video Explicativo Premium'
  }
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  useSEO(
    service
      ? {
          title: `${service.title} em Curitiba | Carplus Auto Center – Portão`,
          description: `${service.description} Atendimento especializado no Portão, Curitiba. Orçamento sem compromisso: (41) 3082-7282 | Carplus Auto Center.`,
          canonical: `https://www.carpluspneuseoficina.com.br/servico/${service?.slug}`,
          ogImage: '/images/loja/loja-de-pneus-curitiba.webp',
          schemaJSON: [
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "AutoPartsStore",
                "name": "Carplus Auto Center",
                "telephone": "+55-41-3082-7282",
                "url": "https://www.carpluspneuseoficina.com.br/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Av. Arthur da Silva Bernardes, 1323",
                  "addressLocality": "Curitiba",
                  "addressRegion": "PR",
                  "postalCode": "81070-010",
                  "addressCountry": "BR"
                }
              },
              "areaServed": { "@type": "City", "name": "Curitiba" },
              "url": `https://www.carpluspneuseoficina.com.br/servico/${service.slug}`
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.carpluspneuseoficina.com.br/" },
                { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://www.carpluspneuseoficina.com.br/#servicos" },
                { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://www.carpluspneuseoficina.com.br/servico/${service.slug}` }
              ]
            },
            // FAQPage Schema para Rich Snippets no Google
            ...(SEO_CONTENT[service.slug] ? [{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": SEO_CONTENT[service.slug].perguntas.map(faq => ({
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
      : { title: 'Serviço não encontrado | Carplus', description: 'Serviço não encontrado.' }
  );

  if (!service) return <div>Serviço não encontrado</div>;

  const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Wrench;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-[100px] md:pt-[90px]">
        {/* Hero */}
        <section className="relative py-24 bg-dark text-white overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
              <Link to="/#servicos" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-8 hover:transform hover:translate-x-[-4px] transition-all">
                 <ArrowLeft size={16} /> Voltar para serviços
              </Link>
              
              <div className="w-24 h-24 bg-primary text-black rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/40">
                 <Icon size={48} />
              </div>

              <h1 className="text-5xl md:text-8xl mb-8 italic uppercase tracking-tighter">{service.title}</h1>
              <p className="text-xl md:text-3xl text-white/50 font-light max-w-3xl mx-auto mb-12">
                A Carplus Auto Center é especialista em <span className="text-white font-bold">{service.title}</span> no Portão, utilizando tecnologia de diagnóstico de ponta.
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
                 <h2 className="text-4xl mb-6 leading-tight">Por que fazer {service.title} na Carplus?</h2>
                 <p className="text-lg text-gray-500 leading-relaxed">
                   Investimos constantemente em novos equipamentos para garantir que o seu veículo receba o melhor tratamento possível. Nosso {service.title} segue rigorosos padrões de segurança e qualidade.
                 </p>
                 
                 <div className="space-y-4">
                    {[
                      'Diagnóstico computadorizado preciso',
                      'Técnicos treinados pelas montadoras',
                      'Peças originais com garantia',
                      'Transparência total no orçamento',
                      'Entrega no prazo combinado'
                    ].map(item => (
                       <div key={item} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                          <CheckCircle className="text-primary" size={20} />
                          <span className="font-bold text-gray-800">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="relative group">
                 <img 
                    src="/images/loja/loja-de-pneus-curitiba.webp" 
                    className="rounded-[40px] shadow-2xl w-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105" 
                    alt={service.title} 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent rounded-[40px]" />
                 <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="font-accent text-3xl mb-1 uppercase italic tracking-tighter">10+ Anos</p>
                    <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Cuidando de Curitiba</p>
                 </div>
              </div>
           </div>
        </section>

        {/* SEO Content Section - Conteúdo otimizado para Google e Bing */}
        {SEO_CONTENT[slug || ''] && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              {/* Introdução SEO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto mb-16"
              >
                <h2 className="text-3xl lg:text-4xl mb-6 leading-tight text-center">
                  {service.title} em <span className="text-primary">Curitiba</span> - Portão
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-center">
                  {SEO_CONTENT[slug || ''].intro}
                </p>
              </motion.div>

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
                    {SEO_CONTENT[slug || ''].detalhes.map((detalhe, idx) => (
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

              {/* FAQ Section - Schema.org FAQPage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-8 text-center">
                  Perguntas Frequentes sobre {service.title}
                </h3>
                <div className="space-y-4">
                  {SEO_CONTENT[slug || ''].perguntas.map((faq, idx) => (
                    <details
                      key={idx}
                      className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition-colors">
                        <h4 className="font-bold text-gray-900 pr-4">{faq.pergunta}</h4>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0" />
                      </summary>
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-gray-600 leading-relaxed">{faq.resposta}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </motion.div>

              {/* Keywords para SEO (hidden but crawlable) */}
              <div className="sr-only">
                <p>Palavras-chave relacionadas: {SEO_CONTENT[slug || ''].keywords.join(', ')}</p>
                <p>Carplus Auto Center - {service.title} no bairro Portão em Curitiba, Paraná. Atendemos toda a região metropolitana incluindo São José dos Pinhais, Pinhais, Colombo, Araucária e Campo Largo.</p>
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
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-6 italic leading-[0.9]">
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
                    <iframe
                      src="https://www.youtube.com/embed/qTmIkTltrYk?autoplay=1&mute=0&loop=1&playlist=qTmIkTltrYk&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                      title="CarPlus - Troca de Fluido de Freio"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
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
                      <p className="text-white font-black text-xl uppercase tracking-tight mb-1">Carplus Auto Center</p>
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
                      className="flex-1 bg-gradient-to-r from-primary to-yellow-400 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02]"
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
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-white mb-6 italic leading-[0.9]">
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
                    <iframe
                      src="https://www.youtube.com/embed/OEDrtkA19mY?autoplay=1&mute=0&loop=1&playlist=OEDrtkA19mY&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1"
                      title="Carplus Auto Center - Servico de Suspensao e Freios em Curitiba"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
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
                      <p className="text-white font-black text-xl uppercase tracking-tight mb-1">Carplus Auto Center</p>
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
                      <LucideIcons.Wrench className="text-primary" size={24} />
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
                      className="flex-1 bg-gradient-to-r from-primary to-orange-400 text-black px-8 py-4 rounded-2xl font-black text-sm uppercase tracking-tight flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-[1.02]"
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
                    src="/images/rodas/recuperacao-rodas.png" 
                    alt="Recuperação e restauração de rodas danificadas na Carplus Auto Center em Curitiba - Serviço especializado de conserto de rodas amassadas, trincadas e deformadas com comparativo antes e depois"
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
                  { icon: <LucideIcons.Settings className="w-6 h-6" />, title: 'Equipamento', desc: 'De ultima geracao' },
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
                  { src: "/images/rodas/roda-polida-1.jpg", alt: "Roda de liga leve polida e recuperada na Carplus Auto Center Curitiba - Conserto profissional de rodas amassadas" },
                  { src: "/images/rodas/roda-volvo-yokohama.jpg", alt: "Detalhe de roda Volvo recuperada com pneu Yokohama na Carplus - Restauracao de acabamento original" },
                  { src: "/images/rodas/volvo-xc60-rodas.jpg", alt: "Volvo XC60 com rodas restauradas na oficina Carplus Auto Center Curitiba Portao" },
                  { src: "/images/rodas/veiculo-rodas-consertadas.jpg", alt: "Veiculo com rodas consertadas estacionado na Carplus Pneus Curitiba - Servico de qualidade" },
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
              <h2 className="text-3xl lg:text-5xl mb-4 leading-tight italic uppercase">Resolva o Problema <br/> do seu Carro Hoje</h2>
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
                    <LucideIcons.Phone size={16} /> (41) 3082-7282
                 </motion.a>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
