
import { Mail, Phone, MapPin, Instagram, Facebook, MessageSquare, Clock, ShieldCheck, Star, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../data/services';

export default function Footer() {
  return (
    <>
    <footer className="bg-dark text-white pt-24 pb-4">
      {/* Pre-footer CTA */}
      <div className="max-w-7xl mx-auto px-4 mb-20 relative z-10">
         <div className="bg-primary p-10 md:p-14 rounded-[32px] flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/30">
            <div className="text-center lg:text-left">
               <h2 className="text-4xl lg:text-5xl mb-3 leading-tight font-black"><span className="text-white">Precisa de Pneus</span> <br /> <span className="text-black italic">ou Oficina?</span></h2>
               <p className="text-black/70 text-base font-medium">Entre em contato agora – atendimento rápido e preço justo garantido.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
               <a
                href="https://wa.me/554130827282"
                className="bg-black text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-gray-900 transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-tight"
               >
                  <MessageSquare size={17} /> WhatsApp Agora
               </a>
               <a
                href="tel:+554130827282"
                className="bg-black/10 text-black px-7 py-3 rounded-full font-bold text-sm hover:bg-black/20 border border-black/10 transition-all flex items-center justify-center gap-2 uppercase tracking-tight"
               >
                  <Phone size={18} /> (41) 3082-7282
               </a>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 text-center md:text-left items-center md:items-start">
         {/* About */}
         <div className="space-y-10 flex flex-col items-center md:items-start w-full">
            <img 
              src="/images/logos/logo-vertical.svg" 
              className="h-56 md:h-64 drop-shadow-2xl" 
              alt="Carplus" 
            />
            <p className="text-white/60 text-xl leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">
              Referência em Curitiba para quem busca segurança, tecnologia de ponta e o melhor atendimento para seu veículo.
            </p>
         </div>

         {/* Links & Services */}
         <div className="w-full">
            <h4 className="font-display text-lg uppercase tracking-widest mb-6 text-primary font-black">Nossos Serviços</h4>
            <ul className="space-y-3 text-sm font-medium max-h-80 overflow-y-auto pr-2 scrollbar-thin">
               {SERVICE_CATEGORIES.flatMap(category => 
                 category.services.map(service => (
                   <li key={service.slug}>
                      <Link 
                        to={`/servico/${service.slug}`} 
                        className="footer-service-link transition-colors flex items-center justify-center md:justify-start gap-2"
                      >
                          <ChevronRight className="text-primary/40 flex-shrink-0" size={14} />
                          <span>{service.name}</span>
                      </Link>
                   </li>
                 ))
               )}
            </ul>
            <div className="pt-4 mt-4 border-t border-white/10">
               <Link to="/pneus" className="font-bold text-primary hover:text-white transition-colors text-sm uppercase tracking-tight">Ver Todos os Pneus</Link>
            </div>
         </div>

         {/* Contact Info */}
         <div className="w-full">
            <h4 className="font-display text-2xl uppercase tracking-widest mb-10 text-primary font-black">Onde Estamos</h4>
            <ul className="space-y-10 text-white/80">
               <li className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 border border-primary/20">
                    <MapPin size={32} />
                  </div>
                  <span className="text-xl font-bold leading-tight">Av. Presid. Arthur da Silva Bernardes, 1323 – Portão, Curitiba – PR</span>
               </li>
               <li className="flex flex-col md:flex-row items-center md:items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center text-black flex-shrink-0 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                    <Phone size={32} />
                  </div>
                  <div>
                    <a href="tel:+554130827282" className="text-3xl font-black text-white hover:text-primary transition-colors block leading-none mb-1 text-center md:text-left">(41) 3082-7282</a>
                    <p className="text-primary font-bold text-xs uppercase tracking-widest text-center md:text-left">Ligar Agora</p>
                  </div>
               </li>
               <li className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary flex-shrink-0 border border-white/10">
                    <Clock size={32} />
                  </div>
                  <div className="text-xl font-bold">
                     <p>Segunda a Sexta: 08:00 – 18:00</p>
                     <p>Sábado: 08:00 – 12:00</p>
                  </div>
               </li>
            </ul>
         </div>

         {/* Trust & Social */}
         <div className="space-y-8 w-full">
            <h4 className="font-display text-xl uppercase tracking-widest mb-8 text-primary font-bold">Siga-nos</h4>
            <div className="flex justify-center md:justify-start gap-6 mb-8">
               <a href="https://www.instagram.com/carpluscwb/" target="_blank" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-black transition-all shadow-lg">
                  <Instagram size={32} />
               </a>
               <a href="https://wa.me/554130827282" target="_blank" className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-[#25D366] text-white transition-all shadow-lg">
                  <MessageSquare size={32} />
               </a>
            </div>
            
            <div className="grid grid-cols-1 gap-6 max-w-xs mx-auto md:mx-0">
               <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <Star className="text-accent" size={32} fill="currentColor" />
                  <div>
                    <p className="font-bold text-lg leading-tight">4.9/5 no Google</p>
                    <p className="text-xs opacity-60 uppercase font-bold tracking-widest">312+ Avaliações</p>
                  </div>
               </div>
               <div className="flex items-center gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
                  <ShieldCheck className="text-primary" size={32} />
                  <div>
                    <p className="font-bold text-lg leading-tight">Garantia Total</p>
                    <p className="text-xs opacity-60 uppercase font-bold tracking-widest">Nota Fiscal em Tudo</p>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-white/40 text-sm">
         <div className="text-center md:text-left space-y-1">
            <p className="font-bold">Carplus Auto Center © 2025</p>
            <p className="text-xs">CNPJ 22.345.678/0001-90 · Todos os direitos reservados</p>
         </div>
         
         <a 
            href="https://supremasite.com.br" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/30 rounded-full px-5 py-2.5 transition-all duration-300"
         >
            <span className="text-white/50 text-xs font-medium">Desenvolvido com</span>
            <Heart size={12} className="text-red-500 animate-pulse" fill="currentColor" />
            <span className="text-white/50 text-xs font-medium">por</span>
            <span className="text-white group-hover:text-primary font-bold text-xs transition-colors flex items-center gap-2">
              Suprema Sites Express
              <img src="/images/logos/suprema.webp" alt="Suprema" className="h-4 opacity-80 group-hover:opacity-100 transition-opacity" />
            </span>
         </a>
      </div>
    </footer>

    <div className="bg-black py-4 border-t border-white/5">
       <div className="max-w-7xl mx-auto px-4 flex justify-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20">
          <Link to="/politica-de-privacidade" className="hover:text-primary transition-colors">Privacidade</Link>
          <Link to="/trocas-e-devolucoes" className="hover:text-primary transition-colors">Garantia</Link>
          <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
       </div>
    </div>
</>
  );
}
