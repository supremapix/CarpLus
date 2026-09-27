import { MessageSquare, Phone, MapPin, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  whatsappMessage?: string;
  primaryActionText?: string;
  badge?: string;
}

export default function FinalCTA({
  title = 'Pronto para cuidar do seu carro na Carplus?',
  subtitle = 'Atendimento rápido por especialistas, pneus das melhores marcas e mecânica completa com laudo e garantia no Portão, Curitiba.',
  whatsappMessage = 'Olá! Vim pelo site da Carplus e gostaria de um atendimento no Portão.',
  primaryActionText = 'Chamar no WhatsApp',
  badge = 'Atendimento Rápido · Portão, Curitiba',
}: FinalCTAProps) {
  const whatsappUrl = `https://wa.me/554130827282?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-16 md:py-20 bg-dark text-white relative overflow-hidden border-t border-white/10" aria-label="Contato e localização">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Badge */}
        <span className="inline-flex items-center gap-2 bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
          <ShieldCheck size={14} />
          {badge}
        </span>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 max-w-3xl mx-auto leading-tight italic">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-normal">
          {subtitle}
        </p>

        {/* Actions Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto mb-10">
          {/* Primary CTA: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 min-h-12 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-green-600 text-white font-bold text-sm sm:text-base uppercase tracking-tight px-6 py-3.5 rounded-full transition-all shadow-lg shadow-green-900/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageSquare size={20} />
            <span>{primaryActionText}</span>
          </a>

          {/* Secondary CTA: Phone */}
          <a
            href="tel:+554130827282"
            className="w-full sm:w-auto min-h-12 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm sm:text-base uppercase tracking-tight px-6 py-3.5 rounded-full transition-colors"
          >
            <Phone size={18} />
            <span>(41) 3082-7282</span>
          </a>

          {/* Tertiary CTA: Como Chegar */}
          <Link
            to="/como-chegar"
            className="w-full sm:w-auto min-h-12 flex items-center justify-center gap-2 bg-primary hover:bg-yellow-400 text-black font-bold text-sm sm:text-base uppercase tracking-tight px-6 py-3.5 rounded-full transition-colors shadow-md shadow-primary/20"
          >
            <Navigation size={18} />
            <span>Como Chegar</span>
          </Link>
        </div>

        {/* Quick Location & Schedule Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary" />
            Av. Pres. Arthur da Silva Bernardes, 1323 – Portão, Curitiba
          </span>
          <span className="hidden sm:inline opacity-30">•</span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-primary" />
            Seg–Sex 8h–18h · Sáb 8h–12h
          </span>
          <span className="hidden sm:inline opacity-30">•</span>
          <span>Acesso fácil com vagas para clientes</span>
        </div>
      </div>
    </section>
  );
}
