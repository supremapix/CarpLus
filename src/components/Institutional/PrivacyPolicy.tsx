import Navbar from '../Navbar';
import Footer from '../Footer';
import { useSEO } from '../../hooks/useSEO';

export default function PrivacyPolicy() {
  useSEO({
    title: 'Política de Privacidade | Carplus Pneus e Oficina Curitiba',
    description: 'Saiba como a Carplus Centro Automotivo coleta, usa e protege os dados dos clientes em Curitiba. Política de Privacidade da loja de pneus e oficina no Portão.',
    canonical: 'https://www.carpluspneuseoficina.com.br/politica-de-privacidade',
    ogImage: 'https://www.carpluspneuseoficina.com.br/og-carplus.webp',
  });

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main className="pt-32 md:pt-36 pb-24 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl mb-8">Política de Privacidade</h1>
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>Na Carplus Centro Automotivo, a sua privacidade é uma prioridade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações quando você visita nosso site ou utiliza nossos serviços em nossa loja no Portão, Curitiba.</p>
          
          <h2 className="text-2xl font-bold text-dark">1. Coleta de Informações</h2>
          <p>Coletamos informações básicas de contato (como nome e telefone) através de formulários de orçamento ou via WhatsApp para prestar o melhor atendimento técnico possível.</p>
          
          <h2 className="text-2xl font-bold text-dark">2. Uso dos Dados</h2>
          <p>Os dados coletados são usados exclusivamente para:</p>
          <ul className="list-disc pl-6">
            <li>Fornecer orçamentos de pneus e serviços automotivos;</li>
            <li>Agendar revisões e manutenções;</li>
            <li>Enviar notificações sobre o status da sua ordem de serviço;</li>
            <li>Melhorar a experiência de navegação em nosso site.</li>
          </ul>

          <h2 className="text-2xl font-bold text-dark">3. Proteção de Dados</h2>
          <p>Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado ou vazamento.</p>
          
          <h2 className="text-2xl font-bold text-dark">4. Seus Direitos</h2>
          <p>De acordo com a LGPD, você tem o direito de solicitar a exclusão ou correção de seus dados a qualquer momento entrando em contato conosco.</p>
          
          <p className="mt-12 text-sm italic">Última atualização: Abril de 2026.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
