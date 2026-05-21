import Navbar from '../Navbar';
import Footer from '../Footer';
import { motion } from 'motion/react';
import { Calendar, Users, Award, Wrench, MapPin, Phone, Shield, Star, Heart, Cog, UsersRound, MessageSquare, ArrowRight } from 'lucide-react';
import AboutGallery from './AboutGallery';
import { Link } from 'react-router-dom';

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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-normal text-white leading-tight mb-6"
          >
            Quem <span className="text-amber-500">Somos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-400 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-6"
          >
            Conheca a historia da Carplus Pneus, referencia em servicos automotivos em Curitiba desde 2014.
          </motion.p>
          
          {/* Prova Social Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-[#1a1a1a] border border-amber-500/30 rounded-full px-6 py-3"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
              ))}
            </div>
            <span className="text-white font-bold">+215 avaliacoes 5 estrelas no Google</span>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <AboutGallery />

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
              <p className="text-2xl md:text-3xl font-black text-white">215+</p>
              <p className="text-sm md:text-base text-gray-400">Avaliacoes 5 Estrelas</p>
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

        {/* SECAO 2 - Diferenciais "Oficina Anti-Trauma" */}
        <section className="py-16 md:py-20 bg-[#0d0d0d]">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                Por que a Carplus e diferente de qualquer outra oficina?
              </h2>
              <p className="text-xl md:text-2xl text-amber-500 font-medium">
                A unica oficina onde voce entra preocupado e sai aliviado.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Orcamento aprovado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-amber-500/50 transition-colors"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Orcamento aprovado por voce</h3>
                <p className="text-gray-400 leading-relaxed">
                  Nenhum trabalho comeca sem sua aprovacao. Sem surpresas na nota. Sem cobrancas escondidas.
                </p>
              </motion.div>

              {/* Card 2 - 215 clientes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-amber-500/50 transition-colors"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Star className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">215 clientes nao mentem</h3>
                <p className="text-gray-400 leading-relaxed">
                  Mais de 215 avaliacoes 5 estrelas no Google. Cada uma e a historia de um cliente que saiu satisfeito.
                </p>
              </motion.div>

              {/* Card 3 - Area kids */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-amber-500/50 transition-colors"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Area kids + cafe enquanto voce espera</h3>
                <p className="text-gray-400 leading-relaxed">
                  Traga seu filho. Tome um cafe. A gente cuida do seu carro enquanto voce relaxa. Esperar aqui e diferente.
                </p>
              </motion.div>

              {/* Card 4 - Especialistas em rodas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-amber-500/50 transition-colors"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <Cog className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Especialistas em recuperacao de rodas</h3>
                <p className="text-gray-400 leading-relaxed">
                  Roda amassada, riscada ou oxidada? Restauramos sem necessidade de troca. Veja o antes e depois.
                </p>
              </motion.div>

              {/* Card 5 - Time de confianca */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 hover:border-amber-500/50 transition-colors md:col-span-2 lg:col-span-1"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-4">
                  <UsersRound className="w-7 h-7 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Time que voce aprende a confiar</h3>
                <p className="text-gray-400 leading-relaxed">
                  Vinicius, Matheus e Jocimar sao citados pelos clientes por nome. Nao e sorte — e padrao.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECAO 3 - Depoimentos Reais */}
        <section className="py-16 md:py-20 bg-dark">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                O que nossos clientes dizem
              </h2>
              <div className="inline-flex items-center gap-2 text-amber-500 text-xl font-medium">
                <span>215 avaliacoes</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* TODO: substituir pelos reviews reais do Google */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Depoimento 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  &quot;Fui pela primeira vez com medo de levar gato por lebre. O Vinicius me explicou tudo antes de comecar, aprovei o orcamento e nao tive nenhuma surpresa na nota. Virei cliente.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-500 font-bold text-sm">R</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Ricardo M.</p>
                    <p className="text-sm text-gray-500">Cliente desde 2022</p>
                  </div>
                </div>
              </motion.div>

              {/* Depoimento 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  &quot;Levei para recuperar as rodas e fiquei impressionada com o resultado. O Matheus fez um trabalho impecavel. O antes e depois foi absurdo. Vale muito a pena.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-500 font-bold text-sm">F</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Fernanda K.</p>
                    <p className="text-sm text-gray-500">Cliente desde 2021</p>
                  </div>
                </div>
              </motion.div>

              {/* Depoimento 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  &quot;Fui com minha filha e ficamos na area kids enquanto esperavamos. O Jocimar foi super atencioso desde a chegada. Nao sabia que ir a oficina podia ser assim.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center">
                    <span className="text-amber-500 font-bold text-sm">C</span>
                  </div>
                  <div>
                    <p className="font-bold text-white">Camila R.</p>
                    <p className="text-sm text-gray-500">Cliente desde 2023</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECAO 4 - Antes e Depois das Rodas */}
        <section className="py-16 md:py-20 bg-[#0d0d0d]">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                Transformacao Carplus<br />
                <span className="text-primary italic">Recuperacao de Rodas</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Roda amassada ou riscada nao e sinonimo de troca. Veja o que fazemos por voce.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Slot 1 - Oxidacao severa */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative group overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-amber-500/50 transition-colors"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oxidacao%20severa%20%E2%86%92%20pintura%20eletrostatica-x6lyP8nFMo2iNxOXrTbBQR8kGcHI9t.png" 
                    alt="Pintura de rodas profissional na Carplus Curitiba - Tecnico especializado realizando pintura eletrostatica em roda de liga leve"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-white font-medium">Oxidacao severa → pintura eletrostatica</p>
                  <p className="text-amber-500 text-sm">Acabamento profissional de fabrica</p>
                </div>
              </motion.div>

              {/* Slot 2 - Roda amassada */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative group overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-amber-500/50 transition-colors"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Roda%20amassada%20%E2%86%92%20restaurada%20em%202h-dFTVy6dSoaU0u7xdkPprLwtEJhSajO.png" 
                    alt="Rodas restauradas na Carplus Curitiba - Jogo de rodas pretas brilhantes recuperadas com acabamento impecavel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-white font-medium">Roda amassada → restaurada em 2h</p>
                  <p className="text-amber-500 text-sm">Sem troca necessaria</p>
                </div>
              </motion.div>

              {/* Slot 3 - Risco profundo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative group overflow-hidden rounded-2xl bg-[#1a1a1a] border border-[#2a2a2a] hover:border-amber-500/50 transition-colors"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Risco%20profundo%20%E2%86%92%20recuperacao%20total-U6WANiatYVSBrd9DVnwKajZ3hiA3mk.png" 
                    alt="Troca de pneus na Carplus Curitiba Portao - Cliente satisfeito com roda restaurada e pneu novo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-white font-medium">Risco profundo → recuperacao total</p>
                  <p className="text-amber-500 text-sm">Liga leve restaurada</p>
                </div>
              </motion.div>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/554130827282?text=Ol%C3%A1!%20Gostaria%20de%20um%20or%C3%A7amento%20para%20recupera%C3%A7%C3%A3o%20de%20rodas."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 text-black font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors text-lg"
              >
                Quero recuperar minhas rodas
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* SECAO 5 - Sobre o Time */}
        <section className="py-16 md:py-20 bg-dark">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                Conheca quem cuida do seu carro
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Na Carplus, o atendimento tem nome e rosto. E isso que faz a diferenca.
              </p>
            </motion.div>

            {/* TODO: inserir fotos reais da equipe */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Vinicius */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 text-center"
              >
                <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-500 font-black text-3xl">V</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Vinicius</h3>
                <p className="text-amber-500 text-sm font-medium mb-4">Consultor de Atendimento</p>
                <p className="text-gray-400 leading-relaxed">
                  Vinicius e quem explica o que vai ser feito, alinha expectativas e garante que voce entenda cada etapa. Clientes pedem por ele pelo nome.
                </p>
              </motion.div>

              {/* Matheus */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 text-center"
              >
                <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-500 font-black text-3xl">M</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Matheus</h3>
                <p className="text-amber-500 text-sm font-medium mb-4">Especialista Tecnico em Rodas</p>
                <p className="text-gray-400 leading-relaxed">
                  Matheus e o responsavel pela recuperacao e pintura de rodas. Precisao tecnica que clientes reconhecem e recomendam.
                </p>
              </motion.div>

              {/* Jocimar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl p-6 text-center"
              >
                <div className="w-24 h-24 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-amber-500 font-black text-3xl">J</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">Jocimar</h3>
                <p className="text-amber-500 text-sm font-medium mb-4">Atendimento e Recepcao</p>
                <p className="text-gray-400 leading-relaxed">
                  Jocimar e quem recebe voce com atencao e vai alem do esperado. Clientes dizem que se sentiram bem-vindos desde o primeiro contato.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECAO 6 - CTA Final Reforcado */}
        <section className="bg-amber-500 py-12 md:py-16 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-black text-3xl md:text-4xl font-black mb-3">Seu carro merece a Carplus.</h2>
            <p className="text-black/70 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Agende agora e descubra por que 215 clientes nos deram 5 estrelas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://wa.me/554130827282?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black text-amber-500 font-bold px-8 py-4 rounded-lg hover:bg-gray-900 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" />
                Agendar pelo WhatsApp
              </a>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 border-2 border-black text-black font-semibold px-8 py-4 rounded-lg hover:bg-black/10 transition-colors text-lg"
              >
                Ver nossos servicos
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* WhatsApp Flutuante */}
      <a
        href="https://wa.me/554130827282?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20servi%C3%A7o."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-6 h-6 text-white" fill="white" />
      </a>

      <Footer />
    </div>
  );
}
