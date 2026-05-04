
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Circle as HelpCircle } from 'lucide-react';

const FAQS = [
  { q: "Onde fica a Carplus Auto Center em Curitiba?", a: "Estamos na Av. Arthur da Silva Bernardes, 1323 – Portão, Curitiba – PR. Referência: próximo ao Shopping Palladium. Fácil acesso pelas avenidas República Argentina, Sete de Setembro e Winston Churchill." },
  { q: "Quais marcas de pneus a Carplus vende?", a: "Somos revendedores autorizados de Pirelli, Michelin, Goodyear, Continental, Firestone, Bridgestone e Yokohama. Todos os aros, do 13 ao 22, para carros de passeio, SUVs, picapes e veículos esportivos." },
  { q: "A montagem e o balanceamento estão inclusos na compra do pneu?", a: "Sim! Na Carplus a montagem e o balanceamento são inclusos na compra dos pneus. Nossos técnicos utilizam equipamentos de precisão para garantir segurança e conforto na sua direção." },
  { q: "A Carplus parcela a compra de pneus?", a: "Sim! Parcelamos pneus em até 10x sem juros no cartão de crédito. Aceitamos também débito, PIX e dinheiro. Para frotas em quantidade, temos condições especiais — consulte pelo WhatsApp: (41) 3082-7282." },
  { q: "Preciso agendar ou posso ir direto?", a: "Pode vir sem agendamento! Para serviços mais complexos como revisão completa ou suspensão, recomendamos ligar antes: (41) 3082-7282. Horário: Seg–Sex 8h–18h | Sáb 8h–13h." },
  { q: "A Carplus faz alinhamento 3D em Curitiba?", a: "Sim! Realizamos alinhamento computadorizado 3D, o método mais preciso disponível. Evita desgaste irregular dos pneus, melhora a estabilidade em curvas e reduz o consumo de combustível." },
  { q: "Quais serviços a oficina da Carplus realiza?", a: "Somos uma oficina full service: troca de óleo, revisão, suspensão, freios, correia dentada, ar-condicionado, diagnóstico eletrônico com scanner, retífica de discos e conserto de rodas." },
  { q: "Como pedir orçamento de pneus online?", a: "Envie mensagem pelo WhatsApp (41) 3082-7282 com: a medida do pneu (está na lateral do pneu atual, ex: 195/60R15), a marca de preferência e o modelo do carro. Respondemos rapidamente com opções e preços." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className={`text-sm md:text-xl font-bold transition-colors pr-4 break-words ${isOpen ? 'text-primary' : 'text-dark hover:text-primary/70'}`}>{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`p-2 rounded-full flex-shrink-0 ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-500 leading-relaxed max-w-3xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10 text-primary uppercase font-bold tracking-[0.3em] text-xs">
          <div className="w-12 h-px bg-primary" />
          <HelpCircle size={16} /> Dúvidas Frequentes
        </div>

        <h2 className="text-5xl mb-12">Perguntas <span className="text-primary italic">Comuns</span></h2>

        <div className="bg-white rounded-3xl p-4 md:p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
          {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </section>
  );
}
