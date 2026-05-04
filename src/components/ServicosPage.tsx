import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Star, 
  ShieldCheck, 
  CreditCard, 
  Trophy,
  ChevronRight,
  Gauge,
  Droplets,
  Settings2,
  Wrench,
  Wind,
  Circle
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Badge } from './ui/badge';
import { SERVICES_DATA } from '../servicesData';

const ICON_MAP: Record<string, React.ElementType> = {
  Gauge,
  Droplets,
  Settings2,
  Wrench,
  Wind,
  Circle,
};

const TRUST_ITEMS = [
  { icon: <Star size={28} className="text-red-500" />, val: '4,9/5', label: '312+ avaliações Google' },
  { icon: <Trophy size={28} className="text-red-500" />, val: '10 Anos', label: 'de experiência' },
  { icon: <ShieldCheck size={28} className="text-red-500" />, val: 'Garantia', label: 'em todos os serviços' },
  { icon: <CreditCard size={28} className="text-red-500" />, val: '10x', label: 'sem juros nos pneus' },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-[#111111] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#CC0000]" />
        <div className="max-w-3xl mx-auto">
          <nav className="text-xs text-white/40 mb-6 flex items-center justify-center gap-2">
            <Link to="/" className="hover:text-white/70 transition-colors">Inicio</Link>
            <span className="text-white/20">/</span>
            <span className="text-white/60">Servicos</span>
          </nav>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white leading-none mb-4">
            Nossos <span className="text-[#CC0000]">Servicos</span>
          </h1>
          <p className="text-base text-[#888888] max-w-xl mx-auto leading-relaxed">
            Oficina completa no Portao, Curitiba. Agendamento pelo WhatsApp.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-black/30 border-y border-white/5 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_ITEMS.map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-1 text-center py-2">
              {t.icon}
              <strong className="text-2xl text-white font-bold">{t.val}</strong>
              <span className="text-xs text-white/45 uppercase tracking-wide">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20 px-4 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, i) => {
              const IconComponent = ICON_MAP[service.icon] || Circle;
              
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-2xl p-6 flex flex-col gap-4 hover:border-red-600 transition-all duration-200 group h-full"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-[#2a2a2a] flex items-center justify-center group-hover:bg-red-600/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-red-500" />
                  </div>

                  {/* Badge */}
                  {service.badge && (
                    <Badge 
                      variant="outline" 
                      className={`w-fit text-xs ${
                        service.badgeColor === 'red' 
                          ? 'border-red-600 text-red-400' 
                          : 'border-[#888888] text-[#888888]'
                      }`}
                    >
                      {service.badge}
                    </Badge>
                  )}

                  {/* Title */}
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {service.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-[#888888] text-sm leading-relaxed flex-1">
                    {service.shortDesc}
                  </p>

                  {/* Button */}
                  <Link
                    to={`/servico/${service.slug}`}
                    className="mt-auto w-full bg-[#CC0000] hover:bg-[#A00000] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-1 transition-colors"
                  >
                    Ver detalhes
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#CC0000] py-10 text-center px-4">
        <p className="text-white text-xl font-bold mb-2">Quer um orcamento?</p>
        <p className="text-white/80 text-sm mb-6">Atendemos Curitiba e Regiao Metropolitana. Seg-Sex 8h-18h | Sab 8h-13h</p>
        <a
          href="https://wa.me/554130827282"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-[#CC0000] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Orcamento pelo WhatsApp
        </a>
      </section>

      <Footer />
    </div>
  );
}
