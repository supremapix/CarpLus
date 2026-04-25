import Navbar from '../Navbar';
import Footer from '../Footer';
import { Star, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-[100px] pb-24">
        <section className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-6xl mb-8 leading-none">Carplus Auto Center: <br/>Referência no <span className="text-primary italic">Portão</span></h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Fundada com o objetivo de oferecer transparência e precisão técnica em Curitiba, a Carplus se tornou um dos centros automotivos mais bem avaliados da cidade.
              </p>
              <p className="text-lg text-gray-500 mb-12">
                Especializados em venda de pneus de alta performance e oficina mecânica full service, nossa equipe técnica utiliza equipamentos de última geração para garantir a segurança da sua família.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <Star className="text-primary" size={32} />
                  <p className="font-bold text-2xl tracking-tighter uppercase">4.9/5 Estrelas</p>
                  <p className="text-sm text-gray-400">Avaliação média dos nossos clientes no Google.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <ShieldCheck className="text-primary" size={32} />
                  <p className="font-bold text-2xl tracking-tighter uppercase">Garantia Total</p>
                  <p className="text-sm text-gray-400">Serviços executados com peças originais e nota fiscal.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://carpluscwb.com.br/wp-content/uploads/2025/11/loja-de-pneus.webp" 
                className="rounded-[40px] shadow-2xl relative z-10"
                alt="Loja Carplus"
              />
              <div className="absolute top-12 -right-12 w-full h-full border-8 border-gray-100 rounded-[40px] -z-10" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
