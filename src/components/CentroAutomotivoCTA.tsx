import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Star, Shield, Wrench } from 'lucide-react';

export default function CentroAutomotivoCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span className="text-amber-500 text-sm font-medium">Bairro Portão, Curitiba</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Onde Instalar Pneus em Curitiba:{' '}
                <span className="text-amber-500">Centro Automotivo no Portão</span>
              </h2>

              <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
                Compre e instale seus pneus no mesmo lugar: pneus das melhores marcas com instalação,
                balanceamento e alinhamento 3D feitos por mecânicos especializados. Somos um centro
                automotivo completo em Curitiba, com garantia em todos os serviços.
              </p>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Star className="w-6 h-6 text-amber-500" />
                  </div>
                  <p className="text-white text-sm font-medium">Pirelli Center</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-amber-500" />
                  </div>
                  <p className="text-white text-sm font-medium">Garantia Total</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Wrench className="w-6 h-6 text-amber-500" />
                  </div>
                  <p className="text-white text-sm font-medium">Full Service</p>
                </div>
              </div>

              <Link
                to="/centro-automotivo-portao"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 group"
              >
                Conhecer o Centro Automotivo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Imagem */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img loading="lazy"
                  src="/images/loja/troca-de-pneus-portao-carplus.webp"
                  alt="Centro Automotivo Carplus no Portão - Loja de Pneus e Oficina Mecânica em Curitiba"
                  width={1200}
                  height={801}
                  className="w-full h-80 lg:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badge */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-black font-bold text-lg">4.9</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                          ))}
                        </div>
                        <p className="text-white/80 text-sm">+234 avaliações no Google</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute -top-4 -right-4 bg-amber-500 rounded-xl p-4 shadow-xl hidden lg:block">
                <p className="text-black font-bold text-lg">35+ Anos</p>
                <p className="text-black/70 text-sm">de experiência</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
