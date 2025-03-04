import { useState, useEffect, useContext, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { translations } from "@/components/sections/project-details/SiteContent";
import { Language } from "@/types";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ScrollContext } from "@/App"; // Importa il contesto di scroll

interface HeroProps {
  language: Language;
  onContactClick: () => void;
  sectionIndex: number; // Aggiungi la prop per l'indice della sezione
}

// Custom animated text component
const AnimatedText = ({ text, className = "" }) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`overflow-hidden flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="mr-2 mb-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Role selector animation component
const RoleSelector = ({ roles, language, className = "" }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        opacity: 0,
        y: 20,
        transition: { duration: 0.2 }
      }).then(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        controls.start({
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 120
          }
        });
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [controls, roles.length]);

  return (
    <div className="h-8 flex items-center justify-center overflow-hidden">
      <motion.span
        className={`text-xl md:text-2xl font-medium inline-block ${className}`}
        animate={controls}
        initial={{ opacity: 1, y: 0 }}
      >
        {roles[currentRole][language]}
      </motion.span>
    </div>
  );
};

// Extremely minimal animated background
const MinimalDotsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Enhanced subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>

      {/* Dots pattern with gradient opacity */}
      <div className="absolute inset-0">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 0% 0%, rgba(0,0,0,0.07) 2px, transparent 2px)`,
          backgroundSize: '30px 30px',
          maskImage: 'linear-gradient(to bottom right, rgba(0,0,0,1), rgba(0,0,0,0.1))',
          WebkitMaskImage: 'linear-gradient(to bottom right, rgba(0,0,0,1), rgba(0,0,0,0.1))'
        }}></div>
      </div>

      {/* Very subtle horizontal separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200"></div>
    </div>
  );
};

export function Hero({ language, onContactClick, sectionIndex }: HeroProps) {
  // Utilizza il context per il sistema di scrolling
  const { registerSection, scrollToSection } = useContext(ScrollContext);
  const sectionRef = useRef<HTMLElement>(null);

  // Registra questa sezione nel sistema di scrolling
  useEffect(() => {
    if (sectionRef.current) {
      registerSection(sectionIndex)(sectionRef.current);
    }
  }, [registerSection, sectionIndex]);

  const t = translations[language].hero;

  // Define professional roles
  const roles = [
    { it: "Digital Marketing", en: "Digital Marketing" },
    { it: "SEO", en: "SEO" },
    { it: "Sviluppo Web", en: "Web Development" },
    { it: "Social Media Management", en: "Social Media Management" },
    { it: "Content Creation", en: "Content Creation" }
  ];

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0px 0px 25px rgba(var(--primary-rgb), 0.35)",
      filter: "brightness(1.05)",
      transition: { 
        type: "spring",
        damping: 8,
        stiffness: 120
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        delay: 1.2,
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    },
    hover: { 
      scale: 1.03,
      boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.15
      }
    },
    exit: {
      scale: 1,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        duration: 0.2
      }
    },
    tap: { scale: 0.97 }
  };

  return (
    <motion.section
      ref={sectionRef} // Aggiungi il ref per il sistema di scrolling
      id="hero"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden snap-start" // Aggiungi snap-start
    >
      {/* Minimal background */}
      <MinimalDotsBackground />

      {/* Hero content with improved positioning */}
      <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto relative z-10">
        {/* Left column: Text content */}
        <motion.div 
          variants={fadeInUp}
          className="order-2 md:order-1 text-left"
        >
          <AnimatedText 
            text="Ciao, sono" 
            className="text-3xl md:text-4xl font-light mb-2" 
          />
          <AnimatedText 
            text="Alessandro d'Apolito" 
            className="text-4xl md:text-6xl font-bold mb-6 text-primary" 
          />

          <motion.div 
            variants={fadeInUp}
            className="mb-8"
          >
            <div className="flex items-center mb-4">
              <motion.div 
                className="w-8 h-8 mr-3 flex items-center justify-center text-amber-600"
              >
                <motion.svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  style={{ transformOrigin: "center" }}
                >
                  {/* Sun center */}
                  <circle
                    cx="12"
                    cy="12"
                    r="5"
                    fill="currentColor"
                  />

                  {/* Sun rays - fixed, non-animated */}
                  {[...Array(8)].map((_, i) => {
                    const angle = (i / 8) * Math.PI * 2;
                    const startRadius = 6;
                    const endRadius = 9;

                    return (
                      <line
                        key={i}
                        x1={12 + Math.cos(angle) * startRadius}
                        y1={12 + Math.sin(angle) * startRadius}
                        x2={12 + Math.cos(angle) * endRadius}
                        y2={12 + Math.sin(angle) * endRadius}
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </motion.svg>
              </motion.div>
              <RoleSelector roles={roles} language={language} className="text-amber-600" />
            </div>

            <motion.p 
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.8, duration: 0.6 }
              }}
            >
              {t.description || "Trasformo idee in strategie digitali di successo, con un approccio creativo e orientato ai risultati."}
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 1, duration: 0.6 }
            }}
          >
            <motion.div
              initial={{ scale: 1, boxShadow: "0px 0px 0px rgba(0,0,0,0)" }}
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0px 3px 8px rgba(0,0,0,0.08)",
                transition: { 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 10, 
                  duration: 0.15 
                }
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ 
                type: "spring",
                stiffness: 500,
                damping: 15,
                duration: 0.1
              }}
            >
              <Button
                size="lg"
                onClick={onContactClick}
                className="text-lg font-medium px-8 py-6 bg-amber-600 hover:bg-amber-700 text-white"
              >
                {t.cta || "Contattami"}
                <motion.span 
                  className="ml-2"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: "loop", 
                    duration: 1.5,
                    repeatDelay: 2
                  }}
                >
                  →
                </motion.span>
              </Button>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              transition={{ duration: 0 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-medium px-8 py-6 border-amber-600 text-amber-600 hover:bg-amber-600/10"
                onClick={() => {
                  // Usa il sistema di scroll per andare alla sezione progetti
                  const projectsIndex = 2; // Assumi che progetti sia la sezione con indice 2
                  scrollToSection(projectsIndex);
                }}
              >
                {language === 'it' ? 'Scopri i progetti' : 'See my work'}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right column: Profile image - very minimal */}
        <motion.div 
          className="order-1 md:order-2 flex justify-center items-center relative"
          variants={fadeInUp}
        >
          <div className="relative">
            {/* Profile image with hover effect only */}
            <motion.div
              className="relative z-10"
              variants={imageVariants}
              whileHover="hover"
            >
              <motion.img
                src="/assets/2f.png"
                alt="Alessandro d'Apolito"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-background shadow-lg"
                animate={{ opacity: 1 }}
                transition={{ duration: 0 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}