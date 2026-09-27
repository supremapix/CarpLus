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
  subtitle = 'Atendimento rápido com diagnóstico antes do orçamento, pneus das principais marcas e equipe qualificada para cuidar do seu carro.',
  whatsappMessage = 'Olá! Vim pelo site da Carplus e gostaria de um atendimento no Portão.',
  primaryActionText = 'Chamar no WhatsApp',
  badge = 'Atendimento Rápido · Portão, Curitiba',
}: FinalCTAProps) {
  const whatsappUrl = `https://wa.me/554130827282?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-14 md:py-20 bg-dark text-white relative border-t border-white/10" aria-label="Contato e localização">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-[11px] sm:text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-sm mb-6">
          <ShieldCheck size={15} className="shrink-0" />
          <span>{badge}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tight text-white mb-4 max-w-3xl mx-auto leading-tight italic">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-normal">
          {subtitle}
        </p>

        {/* Actions Grid */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-2xl mx-auto mb-10">
          {/* Primary CTA: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-md border border-emerald-500/20 shadow-sm transition-colors whitespace-nowrap sm:min-w-[200px]"
          >
            <MessageSquare size={18} className="shrink-0" />
            <span>{primaryActionText}</span>
          </a>

          {/* Secondary CTA: Phone */}
          <a
            href="tel:+554130827282"
            className="flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors whitespace-nowrap sm:min-w-[170px]"
          >
            <Phone size={17} className="shrink-0" />
            <span>(41) 3082-7282</span>
          </a>

          {/* Tertiary CTA: Como Chegar */}
          <Link
            to="/como-chegar"
            className="flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 bg-primary hover:bg-yellow-400 text-dark font-bold text-xs sm:text-sm uppercase tracking-wider px-5 py-3 rounded-md transition-colors shadow-sm whitespace-nowrap sm:min-w-[160px]"
          >
            <Navigation size={17} className="shrink-0" />
            <span>Como Chegar</span>
          </Link>
        </div>

        {/* Quick Location & Schedule Strip */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-white/60">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary shrink-0" />
            Av. Pres. Arthur da Silva Bernardes, 1323 – Portão, Curitiba
          </span>
          <span className="hidden sm:inline opacity-30">•</span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} className="text-primary shrink-0" />
            Seg–Sex 8h–18h · Sáb 8h–12h
          </span>
          <span className="hidden sm:inline opacity-30">•</span>
          <span>Acesso fácil com vagas para clientes</span>
        </div>
      </div>
    </section>
  );
}
