import type { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BackToTop from '@/components/BackToTop';
import { 
  Target, 
  Droplets, 
  Cpu, 
  ShieldAlert, 
  Snowflake, 
  Wrench, 
  Hammer, 
  Link as LinkIcon, 
  FlaskConical,
  Disc
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Disc,
  Target,
  Droplets,
  Cpu,
  ShieldAlert,
  Snowflake,
  Wrench,
  Hammer,
  Link: LinkIcon,
  FlaskConical,
};

export const metadata: Metadata = {
  title: 'Serviços Automotivos em Curitiba | Carplus Auto Center',
  description: 'Alinhamento 3D, troca de óleo, balanceamento, suspensão e freios, ar-condicionado e mais. Serviços automotivos de qualidade em Curitiba - Portão.',
  alternates: {
    canonical: 'https://www.carpluspneuseoficina.com.br/servicos',
  },
};

export default function ServicosPage() {
  return (
    <div className="relative">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter italic mb-4">
              Nossos <span className="text-primary">Serviços</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Serviços automotivos completos com profissionais especializados e equipamentos de última geração.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] || Disc;
              return (
                <Link
                  key={service.id}
                  href={`/servico/${service.slug}`}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:border-primary transition-all group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-tighter mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-500">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-dark rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold uppercase tracking-tighter italic mb-4">
              Agende seu Serviço
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Entre em contato conosco para agendar seu serviço. Atendimento rápido e de qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/554130827282"
                target="_blank"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-all"
              >
                WhatsApp
              </a>
              <a
                href="tel:+554130827282"
                className="bg-primary text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-all"
              >
                (41) 3082-7282
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}
