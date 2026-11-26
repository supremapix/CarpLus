import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type HubLink = readonly [label: string, to: string];
type Hub = { title: string; answer: string; links: readonly HubLink[] };
type Page = 'home' | 'tires' | 'workshop' | 'offers';

const TOPICS: Record<Page, { heading: string; intro: string; hubs: readonly Hub[] }> = {
  home: {
    heading: 'Pneus e oficina mecânica em Curitiba: por onde começar?',
    intro: 'A Carplus Pneus e Oficina Mecânica tem uma unidade no Portão, na Av. Presidente Arthur da Silva Bernardes, 1323. Escolha o caminho conforme o que seu carro precisa.',
    hubs: [
      { title: 'Comprar pneus em Curitiba', answer: 'Use a medida recomendada para o seu veículo e compare os modelos. A Carplus atende quem procura uma loja de pneus e quer consultar a montagem no mesmo endereço.', links: [['Ver catálogo de pneus', '/pneus'], ['Consultar pneus em promoção', '/pneus-promocao']] },
      { title: 'Trocar pneus e verificar o desgaste', answer: 'Além de pesquisar o pneu, confira se o orçamento inclui montagem, balanceamento e, quando indicado após avaliação, alinhamento. Desgaste irregular merece investigação antes da troca.', links: [['Como funciona a montagem', '/servico/montagem-de-pneu'], ['Ver opção de troca de pneus', '/centro-automotivo-para-troca-de-pneus-curitiba']] },
      { title: 'Encontrar uma oficina perto de você', answer: 'Se estiver no Centro ou em outro bairro de Curitiba, consulte o trajeto real até o Portão. A Carplus não tem filial no Centro; o tempo e a distância variam conforme seu ponto de partida.', links: [['Conferir endereço e rotas', '/como-chegar'], ['Ver serviços da oficina', '/servicos']] },
    ],
  },
  tires: {
    heading: 'Como escolher pneus em Curitiba sem comparar só pelo preço',
    intro: 'Comece pelo manual do veículo: confirme medida, índices de carga e velocidade. Depois compare o que está incluído no orçamento, não apenas o valor de cada pneu.',
    hubs: [
      { title: '205/55 R16 ou 215/65 R16: qual procurar?', answer: 'As duas medidas são para aro 16, mas têm larguras e perfis diferentes. Não são automaticamente intercambiáveis. Use a página da medida indicada para seu carro.', links: [['Pneus 205/55 R16', '/pneu-medida/205-55r16'], ['Pneus 215/65 R16', '/pneu-medida/215-65r16']] },
      { title: 'Continental, Bridgestone ou Hankook?', answer: 'Compare modelos da mesma medida e aplicação. A marca sozinha não confirma compatibilidade nem disponibilidade. Se procura Hankook ou um modelo específico, consulte a equipe com a medida em mãos.', links: [['Pneus Continental em Curitiba', '/pneus-continental-curitiba'], ['Pneus Bridgestone em Curitiba', '/pneus-bridgestone-curitiba'], ['Falar com a Carplus sobre uma marca', '/contato']] },
      { title: 'Pneus baratos, usados ou de seguradora: o que comparar?', answer: 'Se você está comparando pneus novos com usados de marketplace ou anúncios de origem de seguradora, confira a procedência, a condição, a nota e a garantia de cada oferta. A Carplus apresenta pneus novos no catálogo; consulte as condições da medida desejada.', links: [['Ver promoções', '/pneus-promocao'], ['Guia para comparar o custo total', '/pneus-em-curitiba-melhor-preco']] },
    ],
  },
  workshop: {
    heading: 'Oficina mecânica perto de mim: confirme a rota até o Portão',
    intro: 'Para saber se a Carplus está a 400 m ou a alguns quilômetros, consulte a rota com seu ponto de partida. A unidade fica no Portão, não no Centro de Curitiba.',
    hubs: [
      { title: 'O que informar antes de levar o carro', answer: 'Diga marca, modelo, ano e quando aparece o sintoma: ao frear, em determinada velocidade ou ao passar por irregularidades. Isso ajuda a equipe a orientar a avaliação.', links: [['Localização e horários', '/como-chegar'], ['Falar com a equipe', '/contato']] },
      { title: 'Onde trocar pneus em Curitiba?', answer: 'Na Carplus você pode consultar pneus, montagem e balanceamento. Informe a medida e quantas unidades precisa, e confirme se o orçamento inclui o serviço desejado.', links: [['Montagem de pneus', '/servico/montagem-de-pneu'], ['Escolher pneus por medida', '/pneus']] },
    ],
  },
  offers: {
    heading: 'Como comparar promoções de pneus em Curitiba',
    intro: 'Vale conferir três coisas antes de decidir: a medida certa, o preço total do conjunto e quais serviços entram no orçamento. Veja a disponibilidade e as condições com a equipe.',
    hubs: [
      { title: 'Orçamento de loja ou distribuidora: compare a mesma cesta', answer: 'Ao comparar lojas e distribuidoras, confira se o valor é por unidade ou pelo jogo e se inclui montagem, balanceamento, válvulas ou outros serviços. Preço de um modelo em outra medida não é uma comparação direta.', links: [['Como comparar preços de pneus', '/pneus-em-curitiba-melhor-preco'], ['Ver modelos e medidas', '/pneus']] },
      { title: 'Promoção de pneu aro 16: confirme a medida completa', answer: 'Aro 16 indica o diâmetro da roda, mas não identifica sozinho o pneu. Confira largura e perfil e peça cotação pela medida completa, sem presumir que todo modelo esteja em oferta.', links: [['Consultar 205/55 R16', '/pneu-medida/205-55r16'], ['Consultar 215/65 R16', '/pneu-medida/215-65r16']] },
    ],
  },
};

export default function CarplusSearchHubs({ page }: { page: Page }) {
  const { heading, intro, hubs } = TOPICS[page];
  const titleId = `carplus-guia-${page}`;
  return (
    <section aria-labelledby={titleId} className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14">
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-dark sm:p-8">
        <p className="text-xs font-black uppercase tracking-widest text-neutral-600">Guia Carplus · Portão, Curitiba</p>
        <h2 id={titleId} className="mt-2 max-w-3xl text-2xl font-black tracking-tight sm:text-3xl">{heading}</h2>
        <p className="mt-3 max-w-3xl leading-relaxed text-neutral-700">{intro}</p>
        <div className={`mt-6 grid gap-4 sm:grid-cols-2 ${hubs.length === 3 ? 'lg:grid-cols-3' : ''}`}>
          {hubs.map(({ title, answer, links }) => (
            <article key={title} className="flex min-w-0 flex-col rounded-xl border border-neutral-200 bg-white p-4 sm:p-5">
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">{answer}</p>
              <ul className="mt-auto pt-3">
                {links.map(([label, to]) => (
                  <li key={to}><Link to={to} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold underline decoration-primary decoration-2 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700">{label}<ArrowRight size={15} aria-hidden="true" className="shrink-0" /></Link></li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
