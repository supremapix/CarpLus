'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Disc, Target, Droplets, Cpu, ShieldAlert, Snowflake, Wrench, Hammer, Link as LinkIcon,
  Phone, MapPin, Clock, ChevronRight, ArrowLeft
} from 'lucide-react';
import { SERVICES } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Disc, Target, Droplets, Cpu, ShieldAlert, Snowflake, Wrench, Hammer, Link: LinkIcon
};

export default function ServicosPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-24 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent" />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            Voltar ao inicio
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black uppercase mb-4"
          >
            Nossos <span className="text-amber-500">Servicos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl"
          >
            Mais de 10 anos de experiencia em pneus e mecanica automotiva. 
            Atendemos Curitiba e Regiao Metropolitana com qualidade e garantia.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Disc;
              const isHovered = hoveredId === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link
                    to={`/servico/${service.slug}`}
                    className={`block h-full p-6 rounded-2xl border transition-all duration-300 ${
                      isHovered 
                        ? 'bg-[#1a1a1a] border-amber-500/50 shadow-lg shadow-amber-500/10' 
                        : 'bg-[#111] border-[#222] hover:border-[#333]'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      isHovered ? 'bg-amber-500/20' : 'bg-[#1a1a1a]'
                    }`}>
                      <IconComponent className={`w-7 h-7 transition-colors ${
                        isHovered ? 'text-amber-500' : 'text-gray-400'
                      }`} />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                      isHovered ? 'text-amber-500' : 'text-gray-500'
                    }`}>
                      Saiba mais
                      <ChevronRight size={16} className={`transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#111] border border-[#222] rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Telefone</h4>
                  <p className="text-gray-400">(41) 3082-7282</p>
                  <p className="text-gray-400">(41) 99653-3877</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Endereco</h4>
                  <p className="text-gray-400">Av. Presid. Arthur da Silva Bernardes, 1323</p>
                  <p className="text-gray-400">Portao - Curitiba/PR</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Horario</h4>
                  <p className="text-gray-400">Seg a Sex: 8h as 18h</p>
                  <p className="text-gray-400">Sabado: 8h as 13h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-amber-500 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-4">
              Precisa de um orcamento?
            </h2>
            <p className="text-black/70 mb-6 max-w-xl mx-auto">
              Entre em contato pelo WhatsApp e receba atendimento rapido e personalizado.
            </p>
            <a
              href="https://wa.me/554130827282"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-amber-500 font-bold px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors"
            >
              <Phone size={20} />
              Chamar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
