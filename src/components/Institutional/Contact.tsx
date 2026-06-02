import Navbar from '../Navbar';
import Footer from '../Footer';
import { Mail, Phone, MapPin, MessageSquare, Navigation, Clock } from 'lucide-react';
import { useSEO } from '../../hooks/useSEO';

export default function Contact() {
  useSEO({
    title: 'Contato – Carplus Pneus e Oficina no Portão, Curitiba',
    description: 'Fale com a Carplus Pneus e Oficina Mecânica: (41) 3082-7282, WhatsApp e endereço na Av. Arthur da Silva Bernardes, 1323 – Portão, Curitiba. Orçamento de pneus e serviços.',
    canonical: 'https://www.carpluspneuseoficina.com.br/contato',
    ogImage: 'https://www.carpluspneuseoficina.com.br/og-carplus.webp',
    keywords: ['contato Carplus', 'telefone oficina Curitiba', 'WhatsApp pneus Curitiba', 'orçamento pneus Portão'],
  });

  return (
    <div className="bg-white min-h-screen">
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

            <div className="relative h-full min-h-[500px] rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="/images/fachada-carplus.webp"
                alt="Fachada da Carplus Pneus e Oficina Mecânica no Portão, Curitiba"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={1200}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-2xl font-bold mb-1">Carplus Pneus e Oficina Mecânica</p>
                <p className="text-white/80 mb-5 flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  Av. Arthur da Silva Bernardes, 1323 – Portão, Curitiba
                </p>
                <a
                  href="https://maps.app.goo.gl/75ZjiqbsPe9QWrPs7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-dark font-bold px-6 py-3 rounded-full hover:brightness-110 transition"
                >
                  <Navigation size={18} />
                  Abrir no Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
