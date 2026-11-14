import { Link } from 'react-router-dom';

interface TireReplacementAdviceProps {
  name: string;
  measure?: string;
  rim?: number;
  loadIndex?: string;
  speedIndex?: string;
}

const known = (value?: string) => value && value.trim() && value !== '—' ? value : 'confirme com a equipe';

/** Buying guidance, not a fitment approval or a diagnostic decision. */
export default function TireReplacementAdvice({ name, measure, rim, loadIndex, speedIndex }: TireReplacementAdviceProps) {
  const message = `Olá! Quero consultar ${name}, medida ${known(measure)}. Vou informar ano e versão do veículo para conferir a aplicação, disponibilidade e orçamento.`;
  return (
    <section className="py-12 px-4 bg-gray-50" aria-labelledby="troca-pneu-orientacao">
      <div className="max-w-6xl mx-auto">
        <h2 id="troca-pneu-orientacao" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Antes de trocar: confira se este pneu atende ao seu veículo</h2>
        <p className="text-gray-700 leading-relaxed mb-6">Você está consultando <strong>{name}</strong>. A medida do catálogo é <strong>{known(measure)}</strong>{rim ? `, para aro ${rim}` : ''}. Índice de carga: <strong>{known(loadIndex)}</strong>; índice de velocidade: <strong>{known(speedIndex)}</strong>. Esses dados ajudam na comparação, mas não aprovam a aplicação em qualquer carro ou versão.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-3">Como escolher o pneu recomendado</h3>
            <p className="text-gray-700 leading-relaxed">Confira no manual a medida e os índices exigidos para o ano e a versão do seu veículo, inclusive possíveis diferenças entre os eixos. Não escolha apenas pelo aro, pela marca ou pela lista de carros do catálogo. Informe seu uso e compare opções que atendam à especificação antes de decidir.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-3">Problemas que merecem avaliação</h3>
            <p className="text-gray-700 leading-relaxed">Desgaste irregular, perda recorrente de pressão, vibração ou o carro puxando para um lado podem ter causas diferentes no pneu, na roda ou no veículo. Trocar o pneu sem verificar a causa pode deixar o problema sem solução. Peça uma inspeção antes de autorizar os serviços.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold mb-3">Quando não continuar rodando</h3>
            <p className="text-gray-700 leading-relaxed">Se houver bolha, corte profundo, perda rápida de pressão ou instabilidade acentuada, pare em local seguro e procure assistência. Não tente resolver danos estruturais com calibragem ou seguir viagem para testar. O atendimento pelo WhatsApp não substitui a avaliação presencial.</p>
          </div>
        </div>
        <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-3">Como a Carplus pode ajudar no Portão</h3>
          <p className="text-gray-700 leading-relaxed">O atendimento é na Av. Arthur da Silva Bernardes, 1323, Portão, Curitiba. Envie a medida, ano, versão e os sintomas para consultar a aplicação e planejar a avaliação. Disponibilidade de pneus, serviços necessários, valores e prazo são confirmados no atendimento e no orçamento.</p>
          <nav aria-label="Serviços relacionados à troca de pneus" className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
            <Link className="min-h-11 inline-flex items-center font-semibold underline text-gray-900" to="/servico/montagem-de-pneu">Montagem de pneus</Link>
            <Link className="min-h-11 inline-flex items-center font-semibold underline text-gray-900" to="/servico/alinhamento-e-balanceamento">Alinhamento e balanceamento</Link>
            <Link className="min-h-11 inline-flex items-center font-semibold underline text-gray-900" to="/pneus">Comparar pneus no catálogo</Link>
            <Link className="min-h-11 inline-flex items-center font-semibold underline text-gray-900" to="/centro-automotivo-para-troca-de-pneus-curitiba">Onde trocar pneus em Curitiba</Link>
          </nav>
          <a href={`https://wa.me/554130827282?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="mt-4 min-h-12 inline-flex items-center rounded-xl px-5 py-3 bg-primary text-black font-bold">Consultar este pneu e a avaliação</a>
        </div>
      </div>
    </section>
  );
}
