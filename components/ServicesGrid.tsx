"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '@/lib/data';

const STUDIO_IMAGES = [
  "https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus.webp",
  "https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-pirelli.webp",
  "https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-em-curitiba.webp"
];

export default function ServicesGrid() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % STUDIO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-none">Serviços <span className="text-primary italic">Full Service</span></h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light italic">Oficina mecânica completa para todas as marcas nacionais e importadas.</p>
          </div>
          <div className="hidden md:block h-px bg-gray-200 flex-grow mx-12 mb-4" />
          <div className="flex items-center gap-4 bg-primary text-white p-4 rounded-xl shadow-lg shadow-primary/20">
             <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <LucideIcons.ScanQrCode size={24} />
             </div>
             <div>
                <p className="text-xs font-bold opacity-80 leading-none mb-1 uppercase tracking-tight">Equipamento de Ponta</p>
                <p className="font-accent text-lg leading-none">ALINHAMENTO 3D</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => {
            const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Wrench;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-50 p-8 rounded-3xl border-b-4 border-transparent hover:border-primary transition-all overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                   <Icon size={120} />
                </div>

                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-md mb-8 group-hover:bg-primary group-hover:text-white transition-colors">
                   <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tighter">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">{service.description}</p>
                
                <motion.div
                  whileHover={{ x: 5 }}
                >
                  <Link 
                    href={`/servico/${service.slug}`}
                    className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs transition-all"
                  >
                    Ver Detalhes <LucideIcons.ArrowRight size={14} />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Diagnostic Banner */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-dark text-white p-12 rounded-[40px] flex flex-col justify-center">
              <h3 className="text-4xl mb-6 leading-none">Diagnóstico <br/> <span className="text-primary italic">Computadorizado</span></h3>
              <p className="text-lg text-white/60 mb-8 max-w-sm">Tecnologia avançada para leitura de códigos de falha e manutenção preventiva rigorosa.</p>
              <div className="space-y-4">
                 {['Leitura de Injeção Eletrônica', 'Reset de Mensagens no Painel', 'Análise de Sensores e Atuadores'].map(item => (
                   <div key={item} className="flex items-center gap-3">
                      <LucideIcons.ChevronRight className="text-primary" />
                      <span className="font-medium">{item}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="relative rounded-[40px] overflow-hidden flex flex-col bg-white border border-gray-100 shadow-xl">
              <div className="relative aspect-[4/3] md:aspect-auto md:h-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={STUDIO_IMAGES[currentImageIndex]}
                    src={STUDIO_IMAGES[currentImageIndex]} 
                    alt="Oficina Mecânica" 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Navigation Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {STUDIO_IMAGES.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentImageIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${i === currentImageIndex ? 'w-8 bg-primary' : 'bg-white/50'}`}
                    />
                  ))}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
              </div>
              
              <div className="p-8 md:p-12 flex-grow flex flex-col justify-center">
                 <div className="inline-block bg-primary px-4 py-1 text-[10px] font-bold uppercase tracking-widest text-white mb-4 rounded self-start">
                    Equipe Especializada
                 </div>
                 <p className="text-dark text-xl md:text-2xl font-bold leading-tight">Técnicos treinados para atender todas as marcas do mercado.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
