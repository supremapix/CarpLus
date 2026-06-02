import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { Tire } from '../data';

interface TireFAQProps {
  tire: Tire;
}

interface FAQItem {
  question: string;
  answer: string;
}

function generateTireFAQ(tire: Tire): FAQItem[] {
  const brand = tire.marca;
  const model = tire.linha;
  const measure = tire.medida;
  const rim = tire.aro;

  return [
    {
      question: `Qual o preço do pneu ${brand} ${model} ${measure} em Curitiba?`,
      answer: `O preço do pneu ${brand} ${model} medida ${measure} varia conforme promoções e condições de pagamento. Na Carplus Pneus e Oficina Mecânica, oferecemos parcelamento em até 10x sem juros e os melhores preços da região do Portão. Entre em contato pelo WhatsApp (41) 3082-7282 para obter um orçamento personalizado com montagem e balanceamento inclusos.`
    },
    {
      question: `O pneu ${brand} ${model} ${measure} é bom para qual tipo de carro?`,
      answer: `O pneu ${brand} ${model} na medida ${measure} (aro ${rim}) é ideal para ${tire.tipoVeiculo.join(', ').toLowerCase()}. Modelos compatíveis incluem: ${tire.carros.join(', ')}. Sempre verifique a medida original do seu veículo no manual do proprietário ou na lateral do pneu atual.`
    },
    {
      question: `O pneu ${brand} ${model} tem garantia?`,
      answer: `Sim! O pneu ${brand} ${model} possui garantia de fábrica contra defeitos de fabricação por 5 anos ou até atingir o indicador de desgaste (TWI). A garantia não cobre danos por impacto, cortes, bolhas causadas por buracos ou falta de calibragem e alinhamento. Na Carplus, oferecemos suporte completo para acionamento da garantia.`
    },
    {
      question: `Quanto tempo dura o pneu ${brand} ${model}?`,
      answer: `A durabilidade do pneu ${brand} ${model} ${measure} depende de fatores como: estilo de direção, condições das vias, calibragem correta e manutenção do alinhamento. Em média, pneus da linha ${model} duram entre 40.000 a 60.000 km com uso adequado. Na Carplus, oferecemos alinhamento 3D computadorizado para maximizar a vida útil dos seus pneus.`
    },
    {
      question: `Onde comprar pneu ${brand} ${model} ${measure} em Curitiba?`,
      answer: `Você encontra o pneu ${brand} ${model} ${measure} com pronta entrega na Carplus Pneus e Oficina Mecânica, localizada na Av. Arthur da Silva Bernardes, 1323 - Portão, Curitiba. Atendemos de segunda a sexta das 8h às 18h e sábados das 8h às 12h. Ligue (41) 3082-7282 ou envie mensagem no WhatsApp para verificar disponibilidade e agendar a instalação.`
    },
    {
      question: `Qual a diferença do pneu ${brand} ${model} para outros modelos?`,
      answer: `O ${brand} ${model} é um pneu de categoria ${tire.categoria.toLowerCase()} com índice de velocidade ${tire.indiceVelocidade} e capacidade de carga ${tire.indiceCarga}. ${tire.descricao} Diferencia-se pela tecnologia ${brand} de última geração que proporciona melhor aderência, frenagem e durabilidade.`
    },
    {
      question: `Posso parcelar a compra do pneu ${brand} ${model}?`,
      answer: `Sim! Na Carplus Pneus e Oficina Mecânica você parcela em até 10x sem juros no cartão de crédito. Também aceitamos PIX, dinheiro e transferência bancária com condições especiais. A montagem, balanceamento e descarte do pneu antigo estão inclusos no preço. Consulte condições pelo (41) 3082-7282.`
    },
    {
      question: `O pneu ${brand} ${model} aro ${rim} serve no meu carro?`,
      answer: `O pneu ${brand} ${model} ${measure} com aro ${rim}" é compatível com veículos que utilizam essa medida original ou equivalente aprovada pelo fabricante. Carros como ${tire.carros.slice(0, 3).join(', ')} geralmente utilizam essa medida. Em caso de dúvida, nossa equipe técnica pode verificar a compatibilidade gratuitamente. Envie foto do pneu atual pelo WhatsApp!`
    }
  ];
}

export default function TireFAQ({ tire }: TireFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqItems = generateTireFAQ(tire);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl mb-20">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex items-center gap-4 mb-10">
        <div className="bg-primary p-3 rounded-2xl">
          <HelpCircle className="text-black" size={28} />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter italic">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-500 text-sm font-medium">
            Dúvidas sobre o {tire.marca} {tire.linha} {tire.medida}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
              openIndex === index 
                ? 'border-primary bg-primary/5' 
                : 'border-gray-100 hover:border-gray-200'
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-start justify-between p-5 md:p-6 text-left group"
              aria-expanded={openIndex === index}
            >
              <h3 className={`font-bold text-base md:text-lg pr-4 transition-colors whitespace-normal break-words overflow-wrap-anywhere flex-1 ${
                openIndex === index ? 'text-black' : 'text-gray-700 group-hover:text-black'
              }`}>
                {item.question}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className={`flex-shrink-0 self-start p-2 rounded-xl transition-colors ${
                  openIndex === index 
                    ? 'bg-primary text-black' 
                    : 'bg-gray-100 text-gray-500 group-hover:bg-gray-200'
                }`}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6">
                    <div className="pt-2 border-t border-primary/20">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 p-6 bg-gray-50 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-bold text-lg">Ainda tem dúvidas sobre o {tire.marca} {tire.linha}?</p>
          <p className="text-gray-500 text-sm">Nossa equipe técnica está pronta para ajudar!</p>
        </div>
        <a
          href={`https://wa.me/554130827282?text=${encodeURIComponent(`Olá! Tenho uma dúvida sobre o pneu ${tire.nome}`)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-tight hover:bg-green-600 transition-colors whitespace-nowrap"
        >
          Falar com Especialista
        </a>
      </div>
    </section>
  );
}
