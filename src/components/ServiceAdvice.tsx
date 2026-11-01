import { SERVICES } from '../data';
import { SERVICE_ADVICE } from '../data/serviceAdvice';
import { getServiceBySlug } from '../data/services';

export default function ServiceAdvice({ slug }: { slug: string }) {
  const advice = SERVICE_ADVICE[slug];
  const legacy = SERVICES.find(item => item.slug === slug);
  const service = getServiceBySlug(slug) ?? (legacy ? { name: legacy.title } : undefined);
  if (!advice || !service) return null;
  const message = `Olá! Quero consultar ${service.name} na Carplus do Portão. Meu veículo é [modelo, ano e versão]. O que percebi foi [sintoma ou necessidade]. Gostaria de orientação sobre avaliação, orçamento e agenda.`;
  return (
    <section aria-labelledby="service-advice-title" className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <div className="rounded-3xl border border-gray-200 bg-white p-6 md:p-10">
        <p className="mb-2 text-sm font-semibold text-gray-600">Orientação para decidir o próximo passo</p>
        <h2 id="service-advice-title" className="text-3xl font-bold text-dark md:text-4xl">{service.name}: problemas, dicas e avaliação</h2>
        <div className="mt-7 grid gap-6 md:grid-cols-3">
          <div><h3 className="text-xl font-bold text-dark">Sinais que merecem atenção</h3><p className="mt-3 leading-relaxed text-gray-700">{advice.signs}</p></div>
          <div><h3 className="text-xl font-bold text-dark">Dica útil antes do atendimento</h3><p className="mt-3 leading-relaxed text-gray-700">{advice.tip}</p></div>
          <div><h3 className="text-xl font-bold text-dark">O que avaliar com a Carplus</h3><p className="mt-3 leading-relaxed text-gray-700">{advice.process}</p></div>
        </div>
        <h3 className="mb-3 mt-8 text-2xl font-bold text-dark">Dúvidas sobre este serviço</h3>
        <div className="space-y-3">{advice.questions.map(({ question, answer }) => (
          <details key={question} className="rounded-xl border border-gray-200 bg-gray-50 px-4">
            <summary className="min-h-12 cursor-pointer py-3 font-semibold text-dark">{question}</summary>
            <p className="pb-4 leading-relaxed text-gray-700">{answer}</p>
          </details>
        ))}</div>
        <div className="mt-7 rounded-xl bg-gray-50 p-5">
          <p className="leading-relaxed text-gray-700">Atendimento na unidade do Portão, em Curitiba. Para quem está no bairro ou nas regiões próximas, a conversa pode começar pelo WhatsApp: informe o veículo e o problema para consultar o próximo passo. Diagnóstico, viabilidade do reparo, valores e prazo dependem de avaliação e confirmação da equipe.</p>
          <a href={`https://wa.me/554130827282?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-5 py-3 text-center font-bold text-dark" aria-label={`Consultar ${service.name} pelo WhatsApp (abre nova aba)`}>Consultar este serviço no WhatsApp</a>
        </div>
      </div>
    </section>
  );
}
