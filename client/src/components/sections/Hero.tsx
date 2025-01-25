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
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center text-center px-4"
    >
      <div>
        <motion.img
          src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-8 object-cover"
          variants={fadeInUp}
        />
        <motion.div variants={fadeInUp}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t.greeting} <span className="text-primary">Christina</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {t.role}
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
