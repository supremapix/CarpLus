import Navbar from '../Navbar';
import Footer from '../Footer';

export default function ReturnPolicy() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-[160px] pb-24 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl mb-8">Política de Devolução e Garantia</h1>
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>A Carplus Auto Center preza pela transparência e satisfação total dos nossos clientes de Curitiba e região.</p>
          
          <h2 className="text-2xl font-bold text-dark">1. Garantia de Pneus</h2>
          <p>Todos os pneus vendidos (Pirelli, Michelin, Goodyear, etc.) possuem garantia de fábrica contra defeitos de fabricação pelo período estipulado pelo fabricante (geralmente 5 anos). A garantia não cobre danos causados por mau uso, cortes, bolhas por impacto ou falta de alinhamento.</p>
          
          <h2 className="text-2xl font-bold text-dark">2. Garantia de Serviços</h2>
          <p>Nossos serviços de oficina (suspensão, freios, motor) possuem garantia de 90 dias conforme o Código de Defesa do Consumidor, ou conforme especificado na nota fiscal para peças específicas.</p>
          
          <h2 className="text-2xl font-bold text-dark">3. Trocas de Peças</h2>
          <p>Peças não instaladas podem ser trocadas em até 7 dias, desde que estejam na embalagem original e sem marcas de tentativa de instalação.</p>
          
          <h2 className="text-2xl font-bold text-dark">4. Processo de Acionamento</h2>
          <p>Para acionar qualquer garantia, você deve trazer o veículo à nossa unidade no Portão com o comprovante de compra ou ordem de serviço original.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
