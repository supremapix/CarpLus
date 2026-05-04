import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../data';
import { ArrowLeft, MessageSquare, CircleCheck as CheckCircle, Star, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { useSEO } from '../hooks/useSEO';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find(s => s.slug === slug);

  useSEO(
    service
      ? {
          title: `${service.title} em Curitiba | Carplus Auto Center – Portão`,
          description: `${service.description} Atendimento especializado no Portão, Curitiba. Orçamento sem compromisso: (41) 3082-7282 | Carplus Auto Center.`,
          canonical: `https://carpluscwb.com.br/servico/${service?.slug}`,
          ogImage: 'https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-curitiba.webp',
          schemaJSON: [
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "description": service.description,
              "provider": {
                "@type": "AutoPartsStore",
                "name": "Carplus Auto Center",
                "telephone": "+55-41-3082-7282",
                "url": "https://carpluscwb.com.br/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Av. Arthur da Silva Bernardes, 1323",
                  "addressLocality": "Curitiba",
                  "addressRegion": "PR",
                  "postalCode": "81070-010",
                  "addressCountry": "BR"
                }
              },
              "areaServed": { "@type": "City", "name": "Curitiba" },
              "url": `https://carpluscwb.com.br/servico/${service.slug}`
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://carpluscwb.com.br/" },
                { "@type": "ListItem", "position": 2, "name": "Serviços", "item": "https://carpluscwb.com.br/#servicos" },
                { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://carpluscwb.com.br/servico/${service.slug}` }
              ]
            }
          ]
        }
      : { title: 'Serviço não encontrado | Carplus', description: 'Serviço não encontrado.' }
  );

  if (!service) return <div>Serviço não encontrado</div>;

  const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Wrench;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <main className="pt-[100px] md:pt-[90px]">
        {/* Hero */}
        <section className="relative py-24 bg-dark text-white overflow-hidden">
           <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
              <Link to="/#servicos" className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-8 hover:transform hover:translate-x-[-4px] transition-all">
                 <ArrowLeft size={16} /> Voltar para serviços
              </Link>
              
              <div className="w-24 h-24 bg-primary text-black rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-primary/40">
                 <Icon size={48} />
              </div>

              <h1 className="text-5xl md:text-8xl mb-8 italic uppercase tracking-tighter">{service.title}</h1>
              <p className="text-xl md:text-3xl text-white/50 font-light max-w-3xl mx-auto mb-12">
                A Carplus Auto Center é especialista em <span className="text-white font-bold">{service.title}</span> no Portão, utilizando tecnologia de diagnóstico de ponta.
              </p>

              <div className="flex justify-center gap-4">
                 <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/554130827282?text=Olá! Preciso de orçamento para ${service.title}`}
                  className="bg-primary text-black px-7 py-3 rounded-full font-bold flex items-center gap-3 text-sm hover:bg-yellow-600 transition-all shadow-xl uppercase tracking-tight"
                 >
                    <MessageSquare size={20} /> Agendar Serviço
                 </motion.a>
              </div>
           </div>
        </section>

        {/* Content */}
        <section className="py-24 max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                 <h2 className="text-4xl mb-6 leading-tight">Por que fazer {service.title} na Carplus?</h2>
                 <p className="text-lg text-gray-500 leading-relaxed">
                   Investimos constantemente em novos equipamentos para garantir que o seu veículo receba o melhor tratamento possível. Nosso {service.title} segue rigorosos padrões de segurança e qualidade.
                 </p>
                 
                 <div className="space-y-4">
                    {[
                      'Diagnóstico computadorizado preciso',
                      'Técnicos treinados pelas montadoras',
                      'Peças originais com garantia',
                      'Transparência total no orçamento',
                      'Entrega no prazo combinado'
                    ].map(item => (
                       <div key={item} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                          <CheckCircle className="text-primary" size={20} />
                          <span className="font-bold text-gray-800">{item}</span>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="relative group">
                 <img 
                    src="https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-curitiba.webp" 
                    className="rounded-[40px] shadow-2xl w-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105" 
                    alt={service.title} 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent rounded-[40px]" />
                 <div className="absolute bottom-8 left-8 right-8 text-white">
                    <p className="font-accent text-3xl mb-1 uppercase italic tracking-tighter">10+ Anos</p>
                    <p className="text-sm opacity-80 uppercase tracking-widest font-bold">Cuidando de Curitiba</p>
                 </div>
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-black">
           <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl lg:text-5xl mb-4 leading-tight italic uppercase">Resolva o Problema <br/> do seu Carro Hoje</h2>
              <p className="text-base mb-8 max-w-2xl mx-auto opacity-70">Não deixe para depois. Pequenas manutenções evitam gastos altos no futuro.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                 <motion.a
                   whileHover={{ scale: 1.03 }}
                   whileTap={{ scale: 0.97 }}
                   href="https://wa.me/554130827282"
                   className="bg-black text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-gray-900 transition-all flex items-center justify-center gap-2 shadow-lg uppercase tracking-tight"
                 >
                    <MessageSquare size={16} /> Chamar no WhatsApp
                 </motion.a>
                 <motion.a
                   whileHover={{ scale: 1.03 }}
                   whileTap={{ scale: 0.97 }}
                   href="tel:+554130827282"
                   className="bg-black/10 border border-black/20 text-black px-7 py-3 rounded-full font-bold text-sm hover:bg-black/20 transition-all flex items-center justify-center gap-2 uppercase tracking-tight"
                 >
                    <LucideIcons.Phone size={16} /> (41) 3082-7282
                 </motion.a>
              </div>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
