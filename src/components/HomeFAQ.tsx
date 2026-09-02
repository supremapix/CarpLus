import { Link } from 'react-router-dom';
import { Wrench, Disc, Settings, MapPin } from 'lucide-react';

// FAQ da Home — enxuta, organizada por grupos e factual.
// Substitui a lista antiga com dezenas de perguntas quase idênticas por bairro.
// Renderizada em HTML estático (<details>/<summary>) para buscadores e LLMs,
// com um único FAQPage JSON-LD.

interface FaqItem {
  q: string;
  a: string;
}

interface FaqGroup {
  id: string;
  title: string;
  icon: typeof Wrench;
  items: FaqItem[];
}

const ENDERECO = 'Av. Presidente Arthur da Silva Bernardes, 1323, bairro Portão, Curitiba';

export const HOME_FAQ_GROUPS: FaqGroup[] = [
  {
    id: 'oficina',
    title: 'Oficina Mecânica',
    icon: Wrench,
    items: [
      {
        q: 'Qual oficina mecânica tem no Portão, em Curitiba?',
        a: `A Carplus Pneus e Oficina é um centro automotivo localizado no bairro Portão, em Curitiba, na ${ENDERECO}. Faz alinhamento 3D, balanceamento, freios, suspensão, direção, troca de óleo e diagnóstico com scanner automotivo, além de vender e montar pneus.`,
      },
      {
        q: 'Existe oficina mecânica perto do Água Verde, Vila Izabel ou Novo Mundo?',
        a: 'Sim. A Carplus fica no Portão e, por isso, atende clientes de bairros vizinhos como Água Verde, Vila Izabel, Guaíra, Fanny, Lindóia, Novo Mundo, Seminário, Santa Quitéria, Fazendinha e Capão Raso. O endereço é único: Av. Presidente Arthur da Silva Bernardes, 1323.',
      },
      {
        q: 'Qual centro automotivo vende pneus e também faz mecânica em Curitiba?',
        a: 'A Carplus Pneus e Oficina reúne os dois serviços no mesmo endereço, no Portão: loja de pneus com montagem e balanceamento e oficina mecânica com alinhamento 3D, freios, suspensão, troca de óleo e diagnóstico.',
      },
      {
        q: 'Preciso agendar para ser atendido na oficina?',
        a: 'O atendimento é por ordem de chegada, mas o agendamento pelo telefone (41) 3082-7282 ou WhatsApp é recomendado para reduzir a espera. Horário: segunda a sexta, das 8h às 18h; sábado, das 8h às 12h.',
      },
      {
        q: 'A Carplus faz diagnóstico antes do orçamento?',
        a: 'Sim. O veículo é avaliado com scanner automotivo e inspeção técnica antes de o orçamento ser apresentado, e o serviço só é executado após aprovação do cliente.',
      },
    ],
  },
  {
    id: 'pneus',
    title: 'Pneus',
    icon: Disc,
    items: [
      {
        q: 'Onde comprar pneus no Portão, em Curitiba?',
        a: `Na Carplus Pneus e Oficina, ${ENDERECO}. A loja vende pneus para carros de passeio, SUVs e picapes, com montagem e balanceamento feitos no local. Consulte medidas e disponibilidade pelo WhatsApp (41) 3082-7282.`,
      },
      {
        q: 'Quais marcas de pneus a Carplus vende?',
        a: 'Pirelli, Michelin, Goodyear, Continental, Bridgestone, Firestone, Yokohama, Prinx e Delinte. A disponibilidade de cada modelo e medida deve ser confirmada pelo WhatsApp ou na loja.',
      },
      {
        q: 'Onde comprar pneus Pirelli, Michelin ou Bridgestone em Curitiba?',
        a: 'A Carplus, no Portão, trabalha com essas três marcas, além de Goodyear, Continental, Firestone, Yokohama, Prinx e Delinte. Veja as páginas de cada marca no catálogo ou envie a medida do pneu pelo WhatsApp para consultar a disponibilidade.',
      },
      {
        q: 'Quais aros de pneu a Carplus trabalha?',
        a: 'O catálogo inclui pneus do aro 13 ao aro 22 (com algumas medidas de aro 23), cobrindo carros populares, sedans, SUVs, picapes e esportivos. Cada aro tem uma página própria com as medidas disponíveis.',
      },
      {
        q: 'Como identificar a medida do meu pneu?',
        a: 'A medida fica na lateral do pneu, no formato largura/perfil R aro, por exemplo 195/55 R16: 195 mm de largura, perfil 55% e aro 16 polegadas. Também consta no manual do veículo e na etiqueta da porta do motorista.',
      },
      {
        q: 'A compra do pneu inclui montagem e balanceamento?',
        a: 'Sim. Na Carplus a montagem e o balanceamento são realizados no ato da compra, no mesmo endereço. O alinhamento 3D é recomendado a cada troca de pneus e também é feito na loja.',
      },
      {
        q: 'Vocês parcelam pneus?',
        a: 'Sim, os pneus podem ser parcelados em até 10x sem juros no cartão de crédito. Também são aceitos PIX, débito e dinheiro.',
      },
    ],
  },
  {
    id: 'servicos',
    title: 'Serviços',
    icon: Settings,
    items: [
      {
        q: 'Onde fazer alinhamento e balanceamento em Curitiba?',
        a: 'A Carplus faz alinhamento 3D computadorizado e balanceamento no Portão, em Curitiba. O serviço é indicado a cada troca de pneus, após impactos em buracos ou quando o volante fica torto ou vibra.',
      },
      {
        q: 'Onde trocar pastilha de freio no Portão?',
        a: 'A oficina da Carplus faz manutenção completa de freios: troca de pastilhas, discos, retífica e troca de fluido de freio, com diagnóstico prévio e orçamento antes da execução.',
      },
      {
        q: 'A Carplus faz manutenção de suspensão e amortecedores?',
        a: 'Sim. A oficina faz revisão de suspensão, troca de amortecedores, buchas, bieletas, pivôs e terminais, além de cambagem e caster.',
      },
      {
        q: 'Vocês fazem conserto e reforma de rodas?',
        a: 'Sim. A Carplus faz conserto de rodas amassadas ou trincadas, reforma, pintura e diamantação de rodas, com balanceamento ao final.',
      },
      {
        q: 'Posso fazer revisão e trocar pneus no mesmo lugar?',
        a: 'Sim. Por ser loja de pneus e oficina mecânica no mesmo endereço, a Carplus permite trocar pneus, alinhar, balancear e fazer troca de óleo ou revisão na mesma visita.',
      },
    ],
  },
  {
    id: 'localizacao',
    title: 'Localização',
    icon: MapPin,
    items: [
      {
        q: 'Onde fica a Carplus Pneus e Oficina?',
        a: `${ENDERECO} – PR, CEP 80320-300. Telefone (41) 3082-7282. Há apenas esta unidade.`,
      },
      {
        q: 'Qual o horário de funcionamento?',
        a: 'Segunda a sexta, das 8h às 18h; sábado, das 8h às 12h. Fechado aos domingos e feriados.',
      },
      {
        q: 'Quais bairros a Carplus atende?',
        a: 'Por estar no Portão, a Carplus atende principalmente clientes do próprio bairro e de regiões próximas de Curitiba, como Vila Izabel, Água Verde, Guaíra, Fanny, Lindóia, Novo Mundo, Seminário, Santa Quitéria, Fazendinha, Capão Raso, Parolin, Rebouças, Campina do Siqueira, Campo Comprido e Pinheirinho.',
      },
      {
        q: 'Como chegar à Carplus?',
        a: 'A loja fica na Av. Presidente Arthur da Silva Bernardes, 1323, no Portão, com acesso pela Av. República Argentina e pela Rua João Bettega. A página "Como chegar" traz o mapa e as rotas a partir dos bairros vizinhos.',
      },
    ],
  },
];

export function getHomeFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HOME_FAQ_GROUPS.flatMap((g) =>
      g.items.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    ),
  };
}

export default function HomeFAQ() {
  return (
    <section className="bg-[#0f0f0f] py-14 md:py-20" aria-labelledby="home-faq-titulo">
      <div className="mx-auto max-w-7xl px-4">
        <header className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2
            id="home-faq-titulo"
            className="text-balance text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl"
          >
            Dúvidas <span className="italic text-primary">Frequentes</span>
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-white/60">
            Respostas diretas sobre a oficina, os pneus, os serviços e a localização da Carplus no Portão, em Curitiba.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {HOME_FAQ_GROUPS.map((group) => (
            <div key={group.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <h3 className="mb-4 flex items-center gap-3 text-base font-bold uppercase tracking-widest text-primary">
                <group.icon size={18} aria-hidden="true" />
                {group.title}
              </h3>
              <div className="flex flex-col divide-y divide-white/10">
                {group.items.map((item) => (
                  <details key={item.q} className="group py-3">
                    <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold leading-snug text-white sm:text-base [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span
                        aria-hidden="true"
                        className="shrink-0 text-lg leading-none text-primary transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="pb-1 pt-2 text-pretty text-sm leading-relaxed text-white/70">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            to="/faq"
            className="flex min-h-12 w-full items-center justify-center rounded-full bg-primary px-6 text-sm font-bold uppercase tracking-tight text-black transition-colors hover:bg-yellow-400 sm:w-auto"
          >
            Ver todas as perguntas
          </Link>
          <Link
            to="/como-chegar"
            className="flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-6 text-sm font-bold uppercase tracking-tight text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Como chegar
          </Link>
        </div>
      </div>
    </section>
  );
}
