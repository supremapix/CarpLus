import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion } from 'motion/react';
import { Calendar, Users, Award, Wrench, MapPin, Phone } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-dark min-h-screen">
      <Navbar />
      <main className="pt-[120px] pb-16">
        {/* Hero Section */}
        <section className="max-w-5xl mx-auto px-4 text-center mb-12 md:mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-6"
          >
            Quem <span className="text-amber-500">Somos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Conheca a historia da Carplus Pneus, referencia em servicos automotivos em Curitiba desde 2014.
          </motion.p>
        </section>

        {/* Stats Bar */}
        <section className="bg-[#1a1a1a] border-y border-[#2a2a2a] py-8 mb-12 md:mb-16">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Calendar className="w-8 h-8 text-amber-500" />
              <p className="text-2xl md:text-3xl font-black text-white">2014</p>
              <p className="text-sm md:text-base text-gray-400">Ano de Fundacao</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Users className="w-8 h-8 text-amber-500" />
              <p className="text-2xl md:text-3xl font-black text-white">10.000+</p>
              <p className="text-sm md:text-base text-gray-400">Clientes Atendidos</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-8 h-8 text-amber-500" />
              <p className="text-2xl md:text-3xl font-black text-white">4.9/5</p>
              <p className="text-sm md:text-base text-gray-400">Avaliacao Google</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Wrench className="w-8 h-8 text-amber-500" />
              <p className="text-2xl md:text-3xl font-black text-white">Full</p>
              <p className="text-sm md:text-base text-gray-400">Service Completo</p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-4 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 md:p-10"
          >
            <div className="prose prose-lg md:prose-xl prose-invert max-w-none">
              <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
                A <strong className="text-amber-500">Carplus Pneus</strong> em Curitiba nasceu em novembro de 2014 com um proposito claro: oferecer servicos automotivos de alta qualidade, unindo confianca, tecnologia e atendimento transparente. Desde o inicio, nosso compromisso e garantir que cada cliente tenha seguranca e tranquilidade em cada quilometro rodado.
              </p>
              
              <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
                Ao longo dos anos, nos consolidamos como referencia em <strong className="text-white">centro automotivo em Curitiba</strong> e regiao, sempre guiados por valores solidos como respeito, comprometimento e atencao aos detalhes. Contamos com uma equipe tecnica especializada, estrutura moderna e equipamentos de ultima geracao para atender veiculos nacionais e importados com excelencia.
              </p>
              
              <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
                Nossa oficina foi planejada para proporcionar conforto, agilidade e eficiencia, utilizando produtos e marcas reconhecidas no mercado automotivo. Seguimos rigorosos padroes de manutencao, revisao e inspecao, garantindo mais desempenho, durabilidade e seguranca para o seu veiculo.
              </p>
              
              <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-6">
                A <strong className="text-amber-500">Carplus Pneus Curitiba</strong> vai alem de uma oficina mecanica: somos um verdadeiro parceiro de estrada. Atendemos clientes de toda Curitiba e regiao metropolitana, sempre prontos para entender suas necessidades e oferecer as melhores solucoes em pneus, manutencao e servicos automotivos.
              </p>
              
              <p className="text-gray-300 text-lg sm:text-xl md:text-2xl leading-relaxed">
                Se voce busca <strong className="text-white">qualidade, confianca e atendimento profissional</strong> em Curitiba, a Carplus Pneus e a escolha certa para cuidar do seu carro.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Values Image - Centered and Highlighted */}
        <section className="max-w-5xl mx-auto px-4 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-amber-500/10 rounded-3xl blur-3xl" />
            <img
              src="/images/loja/proposito-carplus.png"
              alt="Proposito e Valores da Carplus Pneus - Valorizacao de Pessoas, Honestidade, Respeito e Colaboracao, Transparencia, Excelencia, Compromisso"
              className="relative w-full h-auto rounded-2xl md:rounded-3xl shadow-2xl border border-[#2a2a2a]"
            />
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="bg-amber-500 py-10 md:py-12 text-center px-4">
          <h2 className="text-black text-2xl md:text-3xl font-bold mb-3">Venha nos conhecer!</h2>
          <p className="text-black/70 text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Estamos prontos para atender voce com a qualidade e atencao que voce merece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/554130827282"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-black text-amber-500 font-bold px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="https://maps.app.goo.gl/A2EZYhFhdbS3D1UCA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-black text-black font-semibold px-8 py-4 rounded-lg hover:bg-black/10 transition-colors text-lg"
            >
              <MapPin className="w-5 h-5" />
              Ver no Mapa
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
