import Navbar from './Navbar';
import Hero from './Hero';
import TireSearchBar from './TireSearchBar';
import TiresByBrand from './TiresByBrand';
import BrandsCarousel from './BrandsCarousel';
import TireMeasuresSection from './TireMeasuresSection';
import PneusCuritibaPromo from './PneusCuritibaPromo';
import StoreSection from './StoreSection';
import ServicesGrid from './ServicesGrid';
import Reviews from './Reviews';
import FAQInfiniteScroll from './FAQInfiniteScroll';
import Footer from './Footer';
import { motion } from 'motion/react';
import { MessageSquare } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        
        <TireSearchBar />
        
        <TireMeasuresSection />

        <PneusCuritibaPromo />

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
        >
          <TiresByBrand />
        </motion.div>

        <StoreSection />

        <ServicesGrid />

        <Reviews />

        <FAQInfiniteScroll />
        
        <BrandsCarousel />
      </main>
      <Footer />

      {/* Floating WhatsApp */}
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/554130827282"
        target="_blank"
        className="fixed bottom-6 right-6 z-[900] bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group overflow-hidden border-4 border-white/20"
      >
         <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
         <MessageSquare size={24} className="relative z-10" />
         <span className="max-w-0 group-hover:max-w-xs transition-all duration-500 overflow-hidden whitespace-nowrap font-bold text-sm relative z-10">
            Dúvidas? Chame aqui
         </span>
      </motion.a>
    </div>
  );
}
