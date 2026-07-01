import Navbar from '../Navbar';
import Footer from '../Footer';
import { Mail, Phone, MapPin, MessageSquare, Navigation, Clock } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

export default function Contact() {
  const __seo = useSEO({
    title: 'Contato – Carplus Pneus e Oficina no Portão, Curitiba',
    description: 'Fale com a Carplus Centro Automotivo: (41) 3082-7282, WhatsApp e endereço na Av. Arthur da Silva Bernardes, 1323 – Portão, Curitiba. Orçamento de pneus e serviços.',
    canonical: 'https://www.carpluspneuseoficina.com.br/contato',
    ogImage: 'https://www.carpluspneuseoficina.com.br/og-carplus.webp',
    keywords: ['contato Carplus', 'telefone oficina Curitiba', 'WhatsApp pneus Curitiba', 'orçamento pneus Portão'],
  });

  return (
    <div className="bg-white min-h-screen">
      {__seo}
      <Navbar />
      <main className="pt-[130px] pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-6xl mb-4">Entre em <span className="text-primary italic">Contato</span></h1>
            <p className="text-xl text-gray-500">Agende sua revisão ou peça um orçamento de pneus agora mesmo.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-dark text-white p-12 rounded-[40px] shadow-2xl">
                 <h2 className="text-3xl mb-8">Dados de Atendimento</h2>
                 <ul className="space-y-8">
                    <li className="flex items-start gap-4">
                       <Phone className="text-primary" size={28} />
                       <div>
                          <p className="font-bold text-xl">(41) 3082-7282</p>
                          <p className="text-white/50">Telefone Fixo</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <MessageSquare className="text-primary" size={28} />
                       <div>
                          <p className="font-bold text-xl">(41) 3082-7282</p>
                          <p className="text-white/50">WhatsApp Comercial</p>
                          <a href="https://wa.me/554130827282" className="text-primary underline mt-2 block font-bold">Iniciar conversa no WhatsApp</a>
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <MapPin className="text-primary" size={28} />
                       <div>
                          <p className="font-bold text-xl">Av. Arthur da Silva Bernardes, 1323</p>
                          <p className="text-white/50">Portão, Curitiba - PR</p>
                          <a href="https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7" className="text-primary underline mt-2 block font-bold">Abrir no Google Maps</a>
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <Clock className="text-primary" size={28} />
                       <div>
                          <p className="font-bold text-xl italic uppercase">Horário de Funcionamento</p>
                          <p className="text-white/50">Segunda a Sexta: 08:00 às 18:00</p>
                          <p className="text-white/50">Sábado: 08:00 às 12:00</p>
                       </div>
                    </li>
                 </ul>
              </div>
            </div>

            <div className="h-full">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.240580658666!2d-49.30287292373215!3d-25.46364093422533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce31ec1ad6641%3A0xa51067e0d7b484af!2sCarplus%20Pneus%20e%20Oficina%20Mec%C3%A2nica!5e0!3m2!1spt-BR!2sbr!4v1779235735934!5m2!1spt-BR!2sbr"
                width="100%" height="100%" style={{ border:0, borderRadius: '40px', minHeight: '500px' }} 
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
