import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function StoreSection() {
  return (
    <section className="w-full bg-[#111111] py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          
          {/* Left - Image with decorative corners */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full lg:w-1/2 flex-shrink-0"
          >
            {/* Decorative corner - top left */}
            <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 z-10">
              <div className="absolute top-0 left-0 w-full h-2 bg-amber-500" />
              <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
            </div>
            
            {/* Decorative corner - bottom right */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 z-10">
              <div className="absolute bottom-0 right-0 w-full h-2 bg-amber-500" />
              <div className="absolute bottom-0 right-0 w-2 h-full bg-amber-500" />
            </div>
            
            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="/images/loja/carplus-oficina-interior.png"
                alt="Carplus Pneus - Loja e Oficina no Portao, Curitiba"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            {/* Eyebrow */}
            <p className="text-amber-500 font-bold text-sm md:text-base tracking-wider uppercase mb-2">
              Carplus Pneus e Oficina
            </p>
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Loja de Pneus em Curitiba
            </h2>
            
            {/* Paragraphs */}
            <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                Bem-vindo a <span className="text-white font-semibold">Carplus Pneus</span>, sua referencia absoluta em pneus e servicos automotivos em Curitiba e Regiao Metropolitana. Somos especialistas em oferecer a linha completa de pneus de alta performance, unindo a conveniencia de um catalogo digital robusto com a seguranca do atendimento personalizado via WhatsApp.
              </p>
              
              <p>
                Aqui, voce encontra o pneu ideal para o seu veiculo, desde carros de passeio compactos ate SUVs de luxo e caminhonetes off-road. Nossa estrutura de loja de pneus foi desenhada para garantir disponibilidade imediata e precos competitivos em toda a familia Pirelli: Cinturato, Scorpion, P Zero e muito mais. Nao somos apenas um site, somos uma <span className="text-white font-semibold">loja fisica consolidada com estoque real</span>.
              </p>
              
              <p>
                Ao navegar por nossas categorias, voce tem a garantia de comprar produtos originais com selo do INMETRO e garantia de fabrica. Simplifique a manutencao do seu carro: escolha a medida certa, negocie diretamente com nossos consultores e garanta a melhor aderencia e seguranca para rodar nas ruas de Curitiba. <span className="text-white font-semibold">Carplus Pneus: qualidade que voce confia</span>.
              </p>
            </div>
            
            {/* CTA Button */}
            <motion.a
              href="https://wa.me/554130827282?text=Ola! Gostaria de saber mais sobre pneus disponiveis na Carplus."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 mt-8 bg-amber-500 hover:bg-amber-600 text-black font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg"
            >
              Fale pelo WhatsApp
              <MessageSquare size={22} />
            </motion.a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
