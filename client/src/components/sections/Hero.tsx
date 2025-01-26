import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { useRef } from "react";

interface HeroProps {
  language: Language;
  onContactClick: () => void;
}

export function Hero({ language, onContactClick }: HeroProps) {
  const t = translations[language].hero;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -250]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0]),
    springConfig
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 0.8]),
    springConfig
  );

  return (
    <motion.section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        opacity
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.div
        className="relative z-10 text-center px-4"
        style={{
          y,
          scale
        }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Digital Marketing
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Specialist & Web Strategist
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            onClick={onContactClick}
            className="text-lg"
          >
            {t.cta}
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}