
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  { q: "Quanto custa trocar pneu na Carplus?", a: "Os preços variam de acordo com a marca (Pirelli, Michelin, Goodyear, etc) e o tamanho do aro do seu veículo. Oferecemos o melhor preço de Curitiba com parcelamento em até 10x sem juros. Peça seu orçamento pelo WhatsApp!" },
  { q: "Preciso agendar ou posso ir direto?", a: "Você pode vir direto à nossa loja no Portão! No entanto, recomendamos um contato prévio via WhatsApp para confirmarmos a disponibilidade imediata do pneu ou do serviço de oficina, agilizando sua entrega." },
  { q: "Vocês parcelam os serviços de oficina?", a: "Sim! Tanto a compra de pneus novos quanto os serviços de manutenção mecânica, troca de óleo e freios podem ser parcelados no cartão de crédito." },
  { q: "Quais marcas de pneus vocês vendem?", a: "Somos revendedores autorizados das principais marcas mundiais: Pirelli, Michelin, Goodyear, Continental, Firestone e Bridgestone." },
  { q: "Fica longe do Batel / Água Verde?", a: "De forma alguma! Estamos localizados na Av. Arthur da Silva Bernardes, a cerca de 5 a 8 minutos de carro do Batel e do Água Verde. Nossa localização no Portão é de fácil acesso por várias avenidas principais." },
  { q: "Vocês atendem frotas empresariais?", a: "Sim, atendemos frotas de empresas com condições especiais de faturamento e prioridade de agendamento. Entre em contato com nosso setor comercial." },
];

interface FAQItemProps {
  q: string;
  a: string;
  key?: number | string;
}

function FAQItem({ q, a }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-none">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className={`text-xl font-bold transition-colors ${isOpen ? 'text-primary' : 'text-dark hover:text-primary/70'}`}>{q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`p-2 rounded-full ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-gray-200'}`}
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
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10 text-primary uppercase font-bold tracking-[0.3em] text-xs">
           <div className="w-12 h-px bg-primary" />
           <HelpCircle size={16} /> Dúvidas Frequentes
        </div>
        
        <h2 className="text-5xl mb-12">Perguntas <span className="text-primary italic">Comuns</span></h2>

        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50">
           {FAQS.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
        </div>
      </div>
    </section>
  );
}
