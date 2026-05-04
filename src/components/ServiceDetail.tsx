import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '../servicesData';
import { ArrowLeft, MessageSquare, CircleCheck as CheckCircle, AlertTriangle, ChevronDown, Phone, MapPin, Clock, Star } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useState } from 'react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || '');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO(
    service
      ? {
          title: service.metaTitle,
          description: service.metaDescription,
          canonical: `https://carpluscwb.com.br/servico/${service.slug}`,
          ogImage: 'https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-curitiba.webp',
          schemaJSON: [
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "description": service.metaDescription,
              "provider": {
                "@type": "AutoRepair",
                "name": "Carplus Pneus e Oficina",
                "telephone": "+55-41-3082-7282",
                "url": "https://carpluscwb.com.br/",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Av. Presid. Arthur da Silva Bernardes, 1323",
                  "addressLocality": "Curitiba",
                  "addressRegion": "PR",
                  "postalCode": "81070-010",
                  "addressCountry": "BR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": -25.4770,
                  "longitude": -49.2845
                },
                "openingHoursSpecification": [
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "08:00", "closes": "18:00" },
                  { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "13:00" }
                ]
              },
              "areaServed": { "@type": "City", "name": "Curitiba" },
              "url": `https://carpluscwb.com.br/servico/${service.slug}`
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": service.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://carpluscwb.com.br/" },
                { "@type": "ListItem", "position": 2, "name": "Servicos", "item": "https://carpluscwb.com.br/servicos" },
                { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://carpluscwb.com.br/servico/${service.slug}` }
              ]
            }
          ]
        }
      : { title: 'Servico nao encontrado | Carplus', description: 'Servico nao encontrado.' }
  );

  if (!service) {
    return (
      <div className="bg-[#111] min-h-screen text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Servico nao encontrado</h1>
          <Link to="/servicos" className="text-primary hover:underline">Voltar para servicos</Link>
        </div>
      </div>
    );
  }

  const Icon = (LucideIcons as any)[service.icon] || LucideIcons.Wrench;

  return (
    <div className="bg-[#111] min-h-screen">
      <Navbar />
      
      <main className="pt-[72px]">
        {/* Breadcrumb */}
        <div className="bg-[#0a0a0a] border-b border-[#222] py-3">
          <div className="max-w-6xl mx-auto px-4">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
              <span>/</span>
              <Link to="/servicos" className="hover:text-primary transition-colors">Servicos</Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary/10 border border-primary/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Icon className="w-10 h-10 text-primary" />
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                {service.title} <span className="text-primary">em Curitiba</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                {service.heroDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href={`https://wa.me/554130827282?text=Ola! Preciso de orcamento para ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-colors text-lg"
                >
                  <MessageSquare size={22} />
                  Solicitar Orcamento
                </a>
                <a
                  href="tel:+554130827282"
                  className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#222] text-white font-semibold px-8 py-4 rounded-xl border border-[#333] transition-colors text-lg"
                >
                  <Phone size={22} />
                  (41) 3082-7282
                </a>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  <span>Tempo medio: {service.averageTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-primary" />
                  <span>Garantia: {service.warranty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span>Portao, Curitiba</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Full Description */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-primary rounded-full" />
              Sobre o Servico
            </h2>
            <div className="space-y-6">
              {service.fullDescription.map((paragraph, index) => (
                <p key={index} className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Included Items */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Benefits */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="text-primary" size={28} />
                  Diferenciais do Servico
                </h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-lg">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Included Items */}
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#2a2a2a]">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="text-primary" size={28} />
                  O Que Esta Incluso
                </h3>
                <ul className="space-y-4">
                  {service.includedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300 text-lg">
                      <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* When You Need */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-primary rounded-full" />
              Quando Voce Precisa Deste Servico
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.whenYouNeed.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-[#1a1a1a] p-4 rounded-xl border border-[#2a2a2a]">
                  <AlertTriangle className="text-amber-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-300 text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-primary rounded-full" />
              Perguntas Frequentes sobre {service.title}
            </h2>
            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-[#222] transition-colors"
                  >
                    <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`text-primary flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}
                      size={24}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 pb-5 text-gray-300 text-lg leading-relaxed border-t border-[#2a2a2a] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
              Agende seu {service.title} Agora
            </h2>
            <p className="text-black/70 text-lg mb-8">
              Av. Presid. Arthur da Silva Bernardes, 1323 - Portao, Curitiba<br />
              Segunda a Sexta: 8h-18h | Sabado: 8h-13h
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/554130827282"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-black text-primary font-bold px-8 py-4 rounded-xl hover:bg-gray-900 transition-colors text-lg"
              >
                <MessageSquare size={22} />
                WhatsApp
              </a>
              <Link
                to="/como-chegar"
                className="inline-flex items-center justify-center gap-2 bg-black/10 text-black font-semibold px-8 py-4 rounded-xl border border-black/20 hover:bg-black/20 transition-colors text-lg"
              >
                <MapPin size={22} />
                Como Chegar
              </Link>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-[#0a0a0a]">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Outros Servicos da Carplus
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/servicos" className="inline-flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#222] text-white px-6 py-3 rounded-xl border border-[#2a2a2a] transition-colors">
                Ver todos os servicos
                <ArrowLeft className="rotate-180" size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
