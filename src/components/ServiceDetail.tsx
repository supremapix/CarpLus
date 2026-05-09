import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data';
import { ArrowLeft, MessageSquare, CircleCheck as CheckCircle, Star, ChevronRight, MapPin, Clock, Shield, Award } from 'lucide-react';
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
      { pergunta: 'O que significa a luz de injeção acesa no painel?', resposta: 'A luz de injeção (check engine) indica que o sistema de gerenciamento do motor detectou uma falha. Pode ser desde algo simples como tampa do tanque mal fechada at�� problemas mais sérios. O scanner lê o código exato e indica o componente com defeito.' },
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
          canonical: `https://carpluscwb.com.br/servico/${service?.slug}`,
          ogImage: 'https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-curitiba.webp',
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
                "url": "https://carpluscwb.com.br/",
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
              "url": `https://carpluscwb.com.br/servico/${service.slug}`
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://carpluscwb.com.br/" },
                { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://carpluscwb.com.br/#servicos" },
                { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://carpluscwb.com.br/servico/${service.slug}` }
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
                    src="https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-curitiba.webp" 
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recupera%C3%A7%C3%A3o%20de%20rodas-vddjT0XANzM3FbBUv2iHt0OjhN3OLZ.png" 
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
                  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carplus-rodas-reparos%20%282%29-i6IAEitR6cNYoN4U3J9uFMvgrTDWIv.jpg", alt: "Roda de liga leve polida e recuperada na Carplus Auto Center Curitiba - Conserto profissional de rodas amassadas" },
                  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carplus-rodas-reparos%20%284%29-hYzJ5iqfOVYrsf96wwC8Jg9GPLETVN.jpg", alt: "Detalhe de roda Volvo recuperada com pneu Yokohama na Carplus - Restauracao de acabamento original" },
                  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carplus-rodas-reparos%20%283%29-Pl9PoU2rqazLnV0TTvSLv7D1OuHGMS.jpg", alt: "Volvo XC60 com rodas restauradas na oficina Carplus Auto Center Curitiba Portao" },
                  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/carplus-rodas-reparos%20%285%29-VqCUBsrJKFvmM1iy4SXtGC1pwPx7DG.jpg", alt: "Veiculo com rodas consertadas estacionado na Carplus Pneus Curitiba - Servico de qualidade" },
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
