import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import SectionTitle from './SectionTitle';

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
              <img loading="lazy"
                src="/images/loja/carplus-oficina-interior.webp"
                alt="Carplus Pneus - Loja e Oficina no Portao, Curitiba"
                width={1001}
                height={1200}
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
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            {/* Eyebrow */}
            <p className="text-amber-500 font-bold text-sm sm:text-base md:text-lg tracking-wider uppercase mb-2 text-center lg:text-left">
              Carplus Pneus e Oficina
            </p>
            
            {/* Title */}
            <SectionTitle prefix="LOJA DE PNEUS EM" highlight="CURITIBA" darkBg className="lg:text-left" />
            
            {/* Paragraphs */}
            <div className="space-y-5 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left">
              <p>
                Bem-vindo à <span className="text-white font-semibold">Carplus Pneus e Oficina</span>, sua referência em pneus e serviços automotivos em Curitiba e Região Metropolitana. Trabalhamos com as principais marcas do mercado — <span className="text-white font-semibold">Pirelli, Michelin, Goodyear, Continental, Bridgestone, Firestone, Yokohama, Prinx e Delinte</span> — com pneus <span className="text-white font-semibold">a partir de R$ 239,00 à vista</span> e parcelamento em até 10x sem juros.
              </p>

              <p>
                Aqui você encontra o pneu ideal para o seu veículo, de carros de passeio compactos a SUVs, picapes e utilitários. Nossa estrutura foi pensada para garantir disponibilidade imediata e preços competitivos, com atendimento personalizado via WhatsApp e a segurança de uma <span className="text-white font-semibold">loja física consolidada com estoque real</span> no bairro Portão.
              </p>

              <p>
                Todos os produtos são originais, com selo do INMETRO e garantia de fábrica. Além da venda de pneus, somos uma oficina <span className="text-white font-semibold">full service</span>: alinhamento 3D, balanceamento, troca de óleo, freios e suspensão. Escolha a medida certa, negocie diretamente com nossos consultores e rode com mais segurança pelas ruas de Curitiba. <span className="text-white font-semibold">Carplus Pneus: qualidade e confiança em um só lugar</span>.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <motion.a
                href="https://wa.me/554130827282?text=Ola! Gostaria de saber mais sobre pneus disponiveis na Carplus."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 mt-8 bg-amber-500 hover:bg-amber-600 text-black font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-colors shadow-lg"
              >
                Fale pelo WhatsApp
                <MessageSquare size={22} />
              </motion.a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
