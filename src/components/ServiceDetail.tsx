import { useParams, Link } from 'react-router-dom';
import { 
  ChevronRight, 
  MessageCircle, 
  CheckCircle, 
  AlertTriangle, 
  MapPin,
  Gauge,
  Droplets,
  Settings2,
  Wrench,
  Wind,
  Circle
} from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './ui/accordion';
import { getServiceBySlug } from '../servicesData';
import { useSEO } from '../hooks/useSEO';

const ICON_MAP: Record<string, React.ElementType> = {
  Gauge,
  Droplets,
  Settings2,
  Wrench,
  Wind,
  Circle,
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug || '');

  useSEO(
    service
      ? {
          title: `${service.title} em Curitiba | Carplus Auto Center - Portao`,
          description: `${service.shortDesc} Atendimento especializado no Portao, Curitiba. Orcamento sem compromisso: (41) 3082-7282 | Carplus Auto Center.`,
          canonical: `https://carpluscwb.com.br/servico/${service.slug}`,
          ogImage: 'https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus-curitiba.webp',
          schemaJSON: [
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.title,
              "description": service.shortDesc,
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
                { "@type": "ListItem", "position": 2, "name": "Servicos", "item": "https://carpluscwb.com.br/servicos" },
                { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://carpluscwb.com.br/servico/${service.slug}` }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": service.faq.map(item => ({
                "@type": "Question",
                "name": item.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.a
                }
              }))
            }
          ]
        }
      : { title: 'Servico nao encontrado | Carplus', description: 'Servico nao encontrado.' }
  );

  if (!service) {
    return (
      <div className="min-h-screen bg-[#111111] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold mb-4">Servico nao encontrado</h1>
          <Link to="/servicos" className="text-red-500 hover:text-red-400">
            Voltar para servicos
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = ICON_MAP[service.icon] || Circle;

  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="pt-24 border-b border-[#222222] py-3 px-6">
        <nav className="max-w-4xl mx-auto text-sm text-[#666666] flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/servicos" className="hover:text-white transition-colors">Servicos</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white">{service.title}</span>
        </nav>
      </div>

      {/* Hero interno */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a1a1a] border-b border-[#2a2a2a] py-14 px-6 text-center"
      >
        <div className="w-16 h-16 rounded-xl bg-red-600/10 border border-red-600/30 flex items-center justify-center mx-auto mb-6">
          <IconComponent className="w-8 h-8 text-red-500" />
        </div>
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
        <p className="text-[#888888] text-base max-w-xl mx-auto">
          Atendimento em Curitiba - Portao. Seg-Sex 8h-18h | Sab 8h-13h.
        </p>
        <a
          href={`https://wa.me/554130827282?text=Ola! Gostaria de agendar ${service.title}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 bg-[#CC0000] hover:bg-[#A00000] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Agendar pelo WhatsApp
        </a>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">

        {/* Descricao */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-[#CC0000] rounded-full inline-block" />
            Sobre o servico
          </h2>
          {service.description.split('\n\n').map((p, i) => (
            <p key={i} className="text-[#aaaaaa] leading-relaxed mb-4">{p}</p>
          ))}
        </motion.section>

        {/* O que esta incluso */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-[#CC0000] rounded-full inline-block" />
            O que esta incluso
          </h2>
          <ul className="space-y-3">
            {service.includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#cccccc]">
                <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Quando voce precisa */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-[#CC0000] rounded-full inline-block" />
            Quando voce precisa deste servico
          </h2>
          <ul className="space-y-3">
            {service.whenNeeded.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[#cccccc]">
                <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* FAQ */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-1 h-7 bg-[#CC0000] rounded-full inline-block" />
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="space-y-2">
            {service.faq.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4"
              >
                <AccordionTrigger className="text-white font-medium text-left hover:text-red-400 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#999999] leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>

      </div>

      {/* CTA final */}
      <div className="bg-[#CC0000] py-12 text-center px-6">
        <h3 className="text-white text-2xl font-bold mb-2">Pronto para agendar?</h3>
        <p className="text-white/80 mb-6">Av. Presid. Arthur da Silva Bernardes, 1323 - Portao, Curitiba</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/554130827282"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#CC0000] font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp (41) 3082-7282
          </a>
          <Link
            to="/como-chegar"
            className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Ver no mapa
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
