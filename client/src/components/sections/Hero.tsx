import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface HeroProps {
  language: Language;
  onContactClick: () => void;
}

export function Hero({ language, onContactClick }: HeroProps) {
  const t = translations[language].hero;

  return (
    <motion.section
      id="hero"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center text-center px-4"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <div>
        <motion.img
          src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
          alt="Alessandro d'Apolito"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover border-2 border-primary/20"
          variants={fadeInUp}
        />
        <motion.div 
          variants={fadeInUp}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Alessandro d'Apolito</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Digital Marketing Specialist & Web Strategist
          </p>
          <Button
            size="lg"
            onClick={onContactClick}
            className="text-lg"
          >
            {t.cta}
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}