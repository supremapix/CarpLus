
import { motion } from 'motion/react';

import { MessageSquare, Star, ShieldCheck, Phone, Clock } from 'lucide-react';

export default function BrandsCarousel() {
  return (
    <section className="bg-dark pt-16 md:pt-0 md:pb-0 overflow-hidden relative border-b border-white/10" id="especialista">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" />

      {/* Desktop Background Image - Maurício */}
      <div className="hidden md:block absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 via-50% to-dark/20 z-10" />
        <img
          src="https://portao.carpluspneuseoficina.com.br/imagens/vendedor-telas-maiores.webp"
          alt=""
          className="w-full h-full object-cover object-right opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 py-16 md:py-32 lg:py-48">
        
        {/* Desktop Badge */}
        <div className="hidden md:flex items-center justify-center gap-3 bg-white/5 border border-primary/30 text-primary px-6 py-2 rounded-full mb-16 font-display font-bold text-[12px] uppercase tracking-[0.25em] w-fit mx-auto backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Consultoria Técnica Gratuita
        </div>

        <div className="flex flex-col md:grid md:grid-cols-[1.2fr_1fr] items-center gap-12 lg:gap-24">

          {/* COLUNA: Conteúdo (Left on PC) */}
          <div className="w-full space-y-8 md:space-y-10 order-1 text-center md:text-left relative">
            {/* Desktop Only Floating Tag */}
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 font-display font-bold text-[10px] tracking-[0.15em] text-white w-fit mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C853] shadow-[0_0_8px_#00C853] animate-pulse" />
                ONLINE AGORA
            </div>
            
            {/* Mobile Badge */}
            <div className="md:hidden inline-flex items-center gap-2 bg-white/5 border border-white/10 text-primary px-4 py-1.5 rounded-full mb-6 font-display font-bold text-[10px] uppercase tracking-widest">
                Consultoria Técnica Gratuita
            </div>

            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
            >
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-display font-black leading-[0.95] uppercase italic tracking-tighter">
                   FALE COM UM<br/>
                   <span className="text-primary not-italic">ESPECIALISTA</span>
                </h2>
                <p className="text-xl md:text-2xl text-white/70 font-sans font-medium max-w-[460px] mx-auto md:mx-0 leading-tight md:leading-relaxed">
                   O Maurício está pronto para te ajudar a escolher o pneu com o melhor custo-benefício para seu estilo de condução.
                </p>
            </motion.div>

            {/* Badges de confiança */}
            <div className="flex flex-col sm:flex-row items-stretch md:items-center gap-4 py-2">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 flex-1 hover:bg-primary/10 hover:border-primary/30 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20">
                        <ShieldCheck className="text-primary" size={24} />
                    </div>
                    <div className="text-left">
                        <p className="text-white font-display font-bold text-sm uppercase tracking-tight">Segurança Total</p>
                        <p className="text-white/40 text-[10px] uppercase font-sans font-bold tracking-[0.1em]">Garantia de Fábrica</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 flex-1 hover:bg-primary/10 hover:border-primary/30 transition-colors group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-primary/20">
                        <Star className="text-primary" size={24} fill="currentColor" />
                    </div>
                    <div className="text-left">
                        <p className="text-white font-display font-bold text-sm uppercase tracking-tight">Expertise</p>
                        <p className="text-white/40 text-[10px] uppercase font-sans font-bold tracking-[0.1em]">Técnicos Certificados</p>
                    </div>
                </div>
            </div>

            {/* Info de Contato vs Botão Mobile */}
            <div className="pt-6 border-t border-white/5 space-y-6">
                {/* Desktop Contact Info */}
                <div className="hidden md:flex flex-col gap-5">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <Phone className="text-primary" size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-sans font-bold">Ligue ou chame agora</span>
                            <strong className="text-primary font-display font-black text-xl tracking-wide">(41) 3082-7282</strong>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                            <Clock className="text-primary" size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-sans font-bold">Horário de atendimento</span>
                            <strong className="text-primary font-display font-black text-lg tracking-wide">Seg–Sex 8h–18h | Sáb 8h–13h</strong>
                        </div>
                    </div>
                </div>

                {/* Mobile Button - Visible only on mobile */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden block w-full"
                >
                    <a 
                        href="https://wa.me/554130827282?text=Olá Mauricio! Gostaria de uma consultoria técnica sobre pneus." 
                        target="_blank"
                        className="bg-primary hover:bg-white text-black px-8 py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-primary/20 transition-all w-full leading-none group"
                    >
                        CHAMAR NO WHATSAPP 
                        <MessageSquare size={24} className="group-hover:rotate-12 transition-transform" />
                    </a>
                </motion.div>
            </div>
          </div>

          {/* COLUNA DIREITA: Foto no Mobile / Vazia no Desktop */}
          <div className="w-full relative order-2 flex justify-center md:hidden">
             <div className="relative w-full h-[520px] overflow-visible">
                {/* Tag "Online Agora" - Mobile only */}
                <div className="absolute top-6 left-0 z-30 flex items-center gap-2 bg-dark/90 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5 font-display font-bold text-[11px] tracking-[0.15em] text-white">
                  <span className="w-2 h-2 rounded-full bg-[#00C853] shadow-[0_0_8px_#00C853] animate-pulse" />
                  ONLINE AGORA
                </div>

                {/* Foto do especialista Mobile */}
                <picture className="contents">
                    <img
                        src="https://portao.carpluspneuseoficina.com.br/imagens/carplus-vendedor-mobile.webp"
                        alt="Maurício – Especialista em Pneus Carplus Curitiba"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-full w-auto max-w-none z-20 object-contain object-bottom drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
                    />
                </picture>
             </div>
          </div>
        </div>
      </div>

      {/* Brand Ticker */}
      <div className="bg-dark/50 backdrop-blur-md py-4 overflow-hidden border-t border-white/5">
        <div className="flex gap-12 whitespace-nowrap animate-brands-scroll">
          {Array(4).fill(['PIRELLI', 'MICHELIN', 'GOODYEAR', 'CONTINENTAL', 'FIRESTONE', 'BRIDGESTONE']).flat().map((brand, i) => (
            <span key={i} className="text-white/30 font-display text-4xl font-bold tracking-tighter opacity-50 px-2 select-none italic">
              {brand}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brands-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-brands-scroll {
          animation: brands-scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
