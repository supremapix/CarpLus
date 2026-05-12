import { useRef } from 'react';

const column1Questions = [
  "Qual a melhor marca de pneu para meu carro?",
  "Quanto tempo dura um pneu novo?",
  "Posso misturar marcas de pneu no mesmo eixo?",
  "Qual o prazo de validade de um pneu?",
  "Como saber se meu pneu está careca?",
  "O que significa o número na lateral do pneu?",
  "Qual a diferença entre pneu radial e diagonal?",
  "Pneu novo precisa de balanceamento?",
  "Com que frequência devo calibrar os pneus?",
  "Qual a pressão ideal para meus pneus?",
  "Pneu murcho estraga o aro?",
  "Qual a diferença entre pneu de verão e inverno?",
  "Vale a pena comprar pneu remold?",
  "Pneu recauchutado é seguro?",
  "O que é pneu run flat?",
  "Posso rodar com pneu furado?",
  "Qual pneu é melhor para estrada?",
  "Qual pneu é mais econômico?",
  "Como guardar pneus que não estão sendo usados?",
  "Quanto custa um jogo de pneus em Curitiba?",
  "Onde comprar pneu Pirelli em Curitiba?",
  "Onde comprar pneu Michelin no Portão?",
  "Pneu Goodyear é bom?",
  "Pneu Continental aguenta rodovias?",
  "Pneu Yokohama vale a pena?",
  "Qual pneu para SUV em Curitiba?",
  "Qual pneu para chuva?",
  "Pneu com bolha pode estourar?",
  "Quanto custa trocar os 4 pneus?",
  "A Carplus tem pneu com montagem inclusa?",
  "Carplus trabalha com pneu Pirelli original?",
  "Qual pneu para Fiat Mobi?",
  "Qual pneu para Honda HRV?",
  "Qual pneu para Toyota Corolla?",
  "Qual pneu para Chevrolet Tracker?",
  "Qual pneu para Jeep Compass?",
  "Qual pneu para VW Polo?",
  "Qual pneu para Ford Ka?",
  "Qual pneu para Hyundai Creta?",
  "Qual pneu para picape?",
  "Pneu muda o consumo de combustível?",
  "Pneu mais largo melhora a frenagem?",
  "O que é índice de carga do pneu?",
  "O que é índice de velocidade do pneu?",
  "Pneu novo deixa o carro mais seguro?",
  "Quanto tempo leva para montar 4 pneus?",
  "A Carplus faz descarte ecológico dos pneus velhos?",
  "Tem como parcelar pneu na Carplus?",
  "A Carplus aceita cartão de crédito?",
  "Posso levar o pneu e pagar só a mão de obra?",
  "Qual a diferença entre pneu 185 e 195?",
  "Pneu estepe de diferente tamanho pode?",
  "Quando devo trocar o estepe?",
  "Pneu novo precisa rodar devagar?",
  "O que é o TWI no pneu?",
  "Tem loja de pneus perto do Portão em Curitiba?",
  "Carplus entrega pneu em domicílio?",
  "Tem pneu para moto na Carplus?",
  "Qual pneu para carro de passeio mais econômico?",
  "Pneu com mais de 5 anos ainda é seguro?",
  "O que faz o pneu vibrar em alta velocidade?",
  "Pneu faz barulho quando está com problema?",
  "O que causa desgaste irregular nos pneus?",
  "Pneu puxa para um lado — o que fazer?",
];

const column2Questions = [
  "O que é alinhamento 3D?",
  "Qual a diferença entre alinhamento 2D e 3D?",
  "Com que frequência fazer alinhamento?",
  "Alinhamento resolve pneu que puxa?",
  "Quanto custa alinhamento 3D em Curitiba?",
  "A Carplus faz alinhamento 3D?",
  "O que é balanceamento de pneus?",
  "Balanceamento precisa ser feito junto com alinhamento?",
  "Carro tremendo na estrada precisa de balanceamento?",
  "Quanto custa balanceamento em Curitiba?",
  "O que é geometria de suspensão?",
  "Como saber se preciso de alinhamento?",
  "Alinhamento torto desgasta pneu?",
  "Alinhamento 3D é mais preciso?",
  "Meu carro está andando torto, o que pode ser?",
  "O que é convergência e divergência nas rodas?",
  "Quanto tempo leva para fazer alinhamento?",
  "Posso fazer alinhamento sem trocar os pneus?",
  "Quando bater o carro precisa refazer o alinhamento?",
  "Alinhamento resolve vibração no volante?",
  "O que causa vibração no volante em alta velocidade?",
  "Conserto de roda amassada tem na Carplus?",
  "A Carplus faz reparo em roda de liga leve?",
  "Quanto custa consertar uma roda torta?",
  "Roda trincada tem conserto?",
  "Pintura de roda tem na Carplus?",
  "O que é scanner automotivo?",
  "A luz do painel acendeu, o que fazer?",
  "Scanner automotivo apaga a luz do motor?",
  "Quanto custa scanner automotivo em Curitiba?",
  "O que a luz amarela do painel significa?",
  "O que a luz vermelha do motor significa?",
  "Scanner detecta todos os problemas do carro?",
  "Onde fazer diagnóstico automotivo no Portão?",
  "Scanner resolve o problema ou só aponta?",
  "O que é OBD2?",
  "Posso usar scanner em qualquer carro?",
  "Quanto tempo leva um diagnóstico por scanner?",
  "A Carplus tem equipamento de diagnóstico eletrônico?",
  "Scanner funciona em carro flex?",
  "O que é código de falha no carro?",
  "Troca de óleo pode apagar luz de revisão?",
  "A Carplus faz manutenção preventiva?",
  "O que entra em uma revisão completa?",
  "Com que quilometragem fazer revisão?",
  "Revisão no Portão tem na Carplus?",
  "Quanto custa revisão completa em Curitiba?",
  "O que é revisão de 10.000 km?",
  "A Carplus faz revisão de garantia?",
  "Posso usar óleo alternativo na revisão?",
  "Revisão perde garantia se não for na concessionária?",
  "Quanto custa troca de óleo em Curitiba?",
  "Qual o melhor óleo para meu carro?",
  "Posso misturar óleo 5W30 com 5W40?",
  "Óleo sintético é melhor que semissintético?",
  "Qual óleo para motor turbinado?",
  "Com que frequência trocar o óleo?",
  "Qual o óleo certo para meu carro?",
  "Troca de óleo pode ser feita no Portão?",
  "A Carplus troca filtro junto com o óleo?",
  "Qual filtro de óleo usar?",
  "Posso trocar óleo a cada 10.000 km?",
  "O que acontece se eu não trocar o óleo no prazo?",
  "Motor consome óleo demais — o que pode ser?",
];

const column3Questions = [
  "O que é fluido de freio?",
  "Com que frequência trocar o fluido de freio?",
  "Fluido de freio absorve umidade com o tempo?",
  "Qual o fluido de freio correto para meu carro?",
  "A Carplus faz troca de fluido de freio?",
  "Quanto custa troca de fluido de freio?",
  "Pastilha de freio — quando trocar?",
  "Disco de freio — quando trocar?",
  "Freio rangendo — o que pode ser?",
  "Freio fundo — o que significa?",
  "Freio vibrando ao parar — o que fazer?",
  "Quanto custa troca de pastilha de freio em Curitiba?",
  "Posso trocar pastilha e não trocar disco?",
  "Freio ABS está com luz acesa — o que fazer?",
  "A Carplus faz manutenção de freios?",
  "Manutenção de freio pode salvar vidas?",
  "O que é correia dentada?",
  "Com que km trocar a correia dentada?",
  "O que acontece se a correia dentada arrebentar?",
  "A Carplus troca correia dentada?",
  "Quanto custa trocar correia dentada em Curitiba?",
  "O que é kit de correia dentada?",
  "A correia dentada precisa trocar a bomba d'água junto?",
  "Como saber se a correia dentada está vencida?",
  "Correia dentada arrebentada danifica o motor?",
  "Qual a garantia na troca de correia dentada?",
  "O que é correia acessórios?",
  "O que é suspensão do carro?",
  "Suspensão fazendo barulho — o que pode ser?",
  "Quanto custa revisão de suspensão?",
  "O que é amortecedor?",
  "Amortecedor gasto afeta a frenagem?",
  "Quando trocar o amortecedor?",
  "O que é pivô de suspensão?",
  "O que é barra estabilizadora?",
  "Batente de amortecedor — o que é?",
  "A Carplus faz manutenção de suspensão no Portão?",
  "Carro barulhando na lombada — o que pode ser?",
  "Carro abaixando de um lado — o que é?",
  "Quanto custa trocar amortecedor em Curitiba?",
  "O que é mola da suspensão?",
  "O que faz a suspensão do carro?",
  "O ar condicionado do meu carro está fraco — o que fazer?",
  "Com que frequência fazer manutenção do ar condicionado?",
  "Quanto custa higienização do ar condicionado?",
  "A Carplus higieniza ar condicionado de carro?",
  "O que é recarga de gás do ar condicionado?",
  "Quanto custa recarga de gás do ar condicionado em Curitiba?",
  "Ar condicionado com cheiro ruim — o que fazer?",
  "Ar condicionado não está gelando — o que pode ser?",
  "Ar condicionado liga e desliga sozinho — o que é?",
  "Compressor do ar condicionado faz barulho — o que fazer?",
  "Quanto custa trocar compressor de ar condicionado?",
  "A Carplus usa gás R134a ou R1234yf?",
  "Ar condicionado automotivo precisa de manutenção anual?",
  "O que é a válvula de expansão do ar condicionado?",
  "O ar condicionado consome combustível?",
  "Filtro do ar condicionado — quando trocar?",
  "O que é manutenção de motor?",
  "Motor batendo — o que pode ser?",
  "Motor superaquecendo — o que fazer?",
  "O que causa superaquecimento do motor?",
  "A Carplus faz retífica de motor?",
  "O que é junta do cabeçote?",
];

const column4Questions = [
  "Onde fica a Carplus em Curitiba?",
  "A Carplus fica no bairro Portão?",
  "A Carplus atende o bairro Água Verde?",
  "Tem oficina mecânica no Novo Mundo perto da Carplus?",
  "A Carplus atende clientes do bairro Fazendinha?",
  "Tem troca de pneu no bairro Campo Comprido?",
  "Oficina mecânica no bairro Lindóia — a Carplus atende?",
  "Tem auto center perto do bairro Seminário em Curitiba?",
  "A Carplus fica próxima ao bairro Vila Izabel?",
  "Qual a distância da Carplus para o bairro Guabirotuba?",
  "Tem loja de pneus perto do bairro Pinheirinho?",
  "Oficina mecânica próxima ao Santa Quitéria?",
  "A Carplus atende o bairro Parolin?",
  "Tem mecânico de confiança perto do bairro Capão Raso?",
  "Oficina no bairro Xaxim tem na Carplus?",
  "A Carplus está perto do bairro Boqueirão?",
  "Tem auto center na região do Portão em Curitiba?",
  "Qual a melhor oficina mecânica perto do Portão?",
  "Onde resolver pneu furado rápido no Portão?",
  "Pneu furado no Portão — a Carplus resolve?",
  "Como resolver pneu furado em Curitiba?",
  "Quanto custa consertar pneu furado?",
  "A Carplus faz conserto de pneu furado?",
  "Quanto tempo leva consertar pneu furado?",
  "Pneu furado pode ser remendado?",
  "Quando não tem como consertar o pneu furado?",
  "O que fazer se o pneu furar na estrada?",
  "Pneu furado na lateral tem conserto?",
  "Plugue de pneu funciona?",
  "Qual o melhor remendo para pneu furado?",
  "Pneu furado no centro de Curitiba — onde ir?",
  "A Carplus tem atendimento rápido para pneu furado?",
  "Pneu furado estraga o aro?",
  "O que fazer se furar o pneu do SUV?",
  "Quanto custa um remendo de pneu?",
  "A Carplus tem estacionamento fácil?",
  "Qual o horário de atendimento da Carplus?",
  "A Carplus abre no sábado?",
  "Posso agendar serviço na Carplus online?",
  "A Carplus tem Wi-Fi na sala de espera?",
  "Qual o telefone da Carplus?",
  "A Carplus tem WhatsApp para orçamento?",
  "A Carplus emite nota fiscal?",
  "A Carplus tem garantia nos serviços?",
  "Qual o prazo de garantia da Carplus nos serviços?",
  "A Carplus faz orçamento gratuito?",
  "Posso levar o carro para avaliar sem compromisso?",
  "A Carplus tem mecânicos certificados?",
  "A Carplus é credenciada por alguma marca de pneus?",
  "A Carplus é revendedor autorizado Pirelli?",
  "Tem mecânica full service perto do Portão?",
  "O que é auto center full service?",
  "A Carplus faz revisão de carro seminovo?",
  "Posso fazer revisão pré-compra de veículo na Carplus?",
  "A Carplus emite laudo de revisão?",
  "A Carplus faz manutenção de veículos importados?",
  "A Carplus trabalha com carros a diesel?",
  "A Carplus atende caminhonetes e SUVs grandes?",
  "Quanto tempo fica o carro na oficina para revisão completa?",
  "A Carplus tem serviço expresso de troca de óleo?",
  "A Carplus tem câmera de monitoramento na oficina?",
  "A Carplus usa peças originais ou paralelas?",
  "A Carplus tem orçamento pelo WhatsApp com foto?",
];

interface FAQColumnProps {
  questions: string[];
  duration: number;
  columnIndex: number;
}

function FAQColumn({ questions, duration, columnIndex }: FAQColumnProps) {
  const columnRef = useRef<HTMLDivElement>(null);
  const duplicatedQuestions = [...questions, ...questions];
  
  const icons = ['🔧', '🚗', '🛞', '⚙️'];
  const icon = icons[columnIndex % icons.length];

  return (
    <div
      ref={columnRef}
      className="flex flex-col gap-3 group"
      style={{
        animation: `scrollUp ${duration}s linear infinite`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.animationPlayState = 'paused';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.animationPlayState = 'running';
      }}
    >
      {duplicatedQuestions.map((question, index) => (
        <div
          key={`${columnIndex}-${index}`}
          className="bg-[#1c1c1c] border border-primary/40 rounded-full px-4 py-2.5 text-white text-sm font-medium flex items-center gap-2 hover:border-primary hover:scale-105 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-default whitespace-nowrap"
        >
          <span className="text-xs">{icon}</span>
          <span className="truncate">{question}</span>
        </div>
      ))}
    </div>
  );
}

export default function FAQInfiniteScroll() {
  return (
    <section
      aria-label="Dúvidas Frequentes"
      className="relative py-16 bg-[#0f0f0f] overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Dúvidas <span className="text-primary italic">Frequentes</span>
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        <p className="text-white/50 mt-4 max-w-2xl mx-auto">
          As perguntas mais comuns sobre pneus, serviços automotivos e nossa loja em Curitiba
        </p>
      </div>

      {/* Scrolling Container */}
      <div
        className="relative h-[520px] overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4 max-w-7xl mx-auto">
          <FAQColumn questions={column1Questions} duration={30} columnIndex={0} />
          <FAQColumn questions={column2Questions} duration={38} columnIndex={1} />
          <FAQColumn questions={column3Questions} duration={34} columnIndex={2} />
          <FAQColumn questions={column4Questions} duration={42} columnIndex={3} />
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}
