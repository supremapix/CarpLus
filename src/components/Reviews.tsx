
import { motion } from 'motion/react';
import { Star, Quote, CheckCircle } from 'lucide-react';

const REVIEWS = [
  { name: 'Carlos M.', neighborhood: 'Campo Comprido', text: 'Comprei 4 pneus Pirelli, montagem e balanceamento. Preço justo, atendimento rápido. Recomendo a todos!', stars: 5 },
  { name: 'Ana P.', neighborhood: 'Guaíra', text: 'Fiz revisão completa + alinhamento. Equipe muito profissional, diagnóstico transparente. Vim do Guaíra e vale a viagem!', stars: 5 },
  { name: 'Roberto S.', neighborhood: 'Água Verde', text: 'Melhor auto center do Portão. Já indiquei para toda a família. Atendimento nota 10.', stars: 5 },
  { name: 'Juliana R.', neighborhood: 'Portão', text: 'Sempre trago meu carro aqui. Confiança é tudo quando se trata de mecânica. Preço de pneus imbatível.', stars: 5 },
  { name: 'Ricardo F.', neighborhood: 'Fazendinha', text: 'Troca de óleo e pastilhas de freio feita em menos de 1 hora. Muito ágeis e organizados!', stars: 5 },
  { name: 'Marcos L.', neighborhood: 'Centro', text: 'Fui pelo alinhamento 3D e acabei trocando os pneus. O parcelamento em 10x ajudou muito.', stars: 5 },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative quotes background */}
      <div className="absolute top-0 left-0 p-12 opacity-5 pointer-events-none">
         <Quote size={200} className="text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 bg-yellow-500 text-dark px-6 py-2 rounded-full font-bold mb-6 text-sm">
             <Star size={16} fill="currentColor" />
             <span>⭐ 4,9 DE 5 ESTRELAS – 312+ AVALIAÇÕES NO GOOGLE</span>
           </div>
           <h2 className="text-white text-5xl mb-4 leading-none">O Que Nossos Clientes <span className="text-primary italic">Dizem</span></h2>
           <p className="text-white/50 text-xl font-light">Transparência em cada diagnóstico, satisfação em cada entrega.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {REVIEWS.map((review, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="bg-surface p-8 rounded-3xl border border-white/5 group hover:border-primary/30 transition-all shadow-2xl"
             >
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl uppercase">
                      {review.name[0]}
                   </div>
                   <div>
                      <h4 className="text-white font-bold">{review.name}</h4>
                      <p className="text-white/40 text-xs uppercase tracking-widest leading-none">Cliente do {review.neighborhood}</p>
                   </div>
                </div>

                <div className="flex gap-1 mb-4 text-accent">
                   {[...Array(review.stars)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>

                <p className="text-white/80 text-lg font-light leading-relaxed italic mb-6">"{review.text}"</p>
                
                <div className="flex items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-widest border-t border-white/5 pt-6">
                   <CheckCircle size={12} className="text-primary" /> Verificado no Google
                </div>
             </motion.div>
           ))}
        </div>

        <div className="mt-16 text-center">
           <a 
            href="https://www.google.com/search?q=carplus+auto+center+curitiba+avaliacoes"
            target="_blank"
            className="inline-flex items-center gap-3 text-white hover:text-primary transition-colors font-bold uppercase tracking-[0.2em] text-xs"
           >
              Ver Todas as Avaliações <Quote size={16} />
           </a>
        </div>
      </div>
    </section>
  );
}
