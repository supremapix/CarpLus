
import { Mail, Phone, MapPin, Instagram, Facebook, MessageSquare, Clock, ShieldCheck, Star, Heart, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../data';

export default function Footer() {
  return (
    <>
    <footer className="bg-dark text-white pt-24 pb-4">
      {/* Pre-footer CTA */}
      <div className="max-w-7xl mx-auto px-4 -mt-40 mb-24 relative z-10">
         <div className="bg-primary p-12 md:p-20 rounded-[40px] flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl shadow-primary/30">
            <div className="text-center lg:text-left">
               <h2 className="text-5xl lg:text-7xl mb-4 leading-none text-black">Precisa de Pneus <br /> ou Oficina?</h2>
               <p className="text-black/70 text-xl font-medium">Entre em contato agora – atendimento rápido e preço justo garantido.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
               <a 
                href="https://wa.me/554130827282"
                className="bg-black text-white px-10 py-5 rounded-2xl font-bold text-2xl hover:bg-gray-900 transition-all flex items-center justify-center gap-3 shadow-xl"
               >
                  <MessageSquare size={28} /> WhatsApp Agora
               </a>
               <a 
                href="tel:+554130827282"
                className="bg-black/10 text-black px-10 py-5 rounded-2xl font-bold text-2xl hover:bg-black/20 border border-black/10 transition-all flex items-center justify-center gap-3"
               >
                  <Phone size={28} /> (41) 3082-7282
               </a>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 text-center md:text-left items-center md:items-start">
         {/* About */}
         <div className="space-y-10 flex flex-col items-center md:items-start w-full">
            <img 
              src="https://lp.carpluscwb.com.br/wp-content/uploads/2025/08/carplus-pneus-oficina-mecanica-full-service-vertical.svg" 
              className="h-56 md:h-64 drop-shadow-2xl" 
              alt="Carplus" 
            />
            <p className="text-white/60 text-xl leading-relaxed max-w-sm mx-auto md:mx-0 font-medium">
              Referência em Curitiba para quem busca segurança, tecnologia de ponta e o melhor atendimento para seu veículo.
            </p>
         </div>

         {/* Links & Services */}
         <div className="w-full">
            <h4 className="font-accent text-2xl uppercase tracking-widest mb-10 text-primary font-black">Nossos Serviços</h4>
            <ul className="space-y-6 text-white/80 text-xl font-medium">
               {SERVICES.map(service => (
                 <li key={service.id}>
                    <Link to={`/servico/${service.slug}`} className="hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-3">
                        <ChevronRight className="text-primary/40" size={20} />
                        {service.title}
                    </Link>
                 </li>
               ))}
               <li className="pt-8 border-t border-white/10">
                  <Link to="/pneus" className="font-black text-primary hover:text-white transition-colors text-2xl uppercase tracking-tighter italic underline decoration-2 underline-offset-8">Ver Todos os Pneus</Link>
               </li>
            </ul>
         </div>

         {/* Contact Info */}
         <div className="w-full">
            <h4 className="font-accent text-2xl uppercase tracking-widest mb-10 text-primary font-black">Onde Estamos</h4>
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
                     <p>Sábado: 08:00 – 13:00</p>
                  </div>
               </li>
            </ul>
         </div>

         {/* Trust & Social */}
         <div className="space-y-8 w-full">
            <h4 className="font-accent text-xl uppercase tracking-widest mb-8 text-primary font-bold">Siga-nos</h4>
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
         
         <div className="flex flex-col items-center md:items-end gap-2">
            <p className="text-white/35 text-xs flex items-center gap-1">
              Desenvolvido com <Heart size={11} className="text-red-500 animate-heartbeat" /> por
              <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition ml-1 inline-flex items-center gap-1 font-bold">
                Suprema Sites Express
                <img src="https://img.supremamidia.com/suprema-img.png" alt="Suprema" className="h-3.5 inline" />
              </a>
            </p>
         </div>
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
