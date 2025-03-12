import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, sectionVariants } from "@/lib/animations";
import { ScrollContext } from "@/App";

interface OverviewProps {
  language: Language;
  sectionIndex: number;
}

export function Overview({ language, sectionIndex }: OverviewProps) {
  const { registerSection } = useContext(ScrollContext);
  const sectionRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Refs per gli element lord-icon
  const lordIcon1Ref = useRef<HTMLDivElement>(null);
  const lordIcon2Ref = useRef<HTMLDivElement>(null);
  const lordIcon3Ref = useRef<HTMLDivElement>(null);
  const lordIcon4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (sectionRef.current) {
      registerSection(sectionIndex)(sectionRef.current);
    }
  }, [registerSection, sectionIndex]);

  // Content localization
  const content = {
    en: {
      title: "Overview",
      introduction: "I am a **Digital Marketing Specialist** with a 360° approach to digital strategy. From SEO to advertising, from content marketing to web development, I integrate cross-functional skills to create projects that generate measurable results.",
      experience: "My experience spans across **SEO, content strategy, social media marketing, email automation, and web development**, with a particular focus on advanced advertising on **Meta Ads and Google Ads** to maximize ROI.",
      technology: "**Technology & Innovation** Passionate about digital innovation, I actively explore the potential of **AI and LLMs** to automate processes and optimize marketing strategies. This portfolio itself is a concrete example of **human-AI collaboration**, created by leveraging Claude's capabilities in the creative process.",
      vision: "**My Vision** I believe in the synergy between **human creativity and computational power** to develop digital projects that stand out in an increasingly competitive market. The future of marketing belongs to those who know how to integrate strategy, data, and automation."
    },
    it: {
      title: "Panoramica",
      introduction: "Sono un **Digital Marketing Specialist** con un approccio a 360° alla strategia digitale. Integro competenze cross-funzionali per realizzare progetti ad alto impatto che generano risultati misurabili.",
      experience: "La mia esperienza spazia tra **Sviluppo Web, SEO, Content Strategy, Social Media Marketing ed Email Automation**, con un focus particolare sull'advertising avanzato su **Meta Ads e Google Ads** per massimizzare il ROI delle campagne.",
      technology: "Sono appassionato di innovazione digitale ed esploro attivamente il potenziale delle **AI** per automatizzare processi e **ottimizzare strategie digitali**. Il sito che stai navigando è un esempio concreto di questa integrazione, realizzato sfruttando strumenti di AI per ottimizzare il workflow creativo.",
      vision: "Credo nella sinergia tra **creatività umana e automazione intelligente** per sviluppare progetti che si distinguono in un mercato sempre più competitivo. Il futuro del marketing appartiene a chi sa integrare strategia, dati e automazione."
    }
  };

  // Function to convert markdown bold to JSX with proper typing
  const formatText = (text: string) => {
    if (!text) return null;

    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <span key={i} className="font-bold text-blue-900 dark:text-gray-100">{part.slice(2, -2)}</span>;
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  const currentContent = content[language];

  // Stile condizionale per desktop/mobile
  const contentStyle = {
    transformOrigin: 'top center',
    // Scale solo per desktop, non per mobile
    transform: isMobile ? 'none' : 'scale(0.80)',
    // Force pixel rendering to improve text clarity
    imageRendering: 'crisp-edges',
    // Special CSS for text rendering on different screens
    textRendering: 'geometricPrecision'
  };

  // Utilizziamo un variant stagger più veloce per mobile
  const optimizedStaggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.3,
        delayChildren: isMobile ? 0.1 : 0.2
      }
    }
  };

  // Funzioni per gestire l'hover sulle card e animare le icone
  const handleCardMouseEnter = (iconRef: React.RefObject<HTMLDivElement>) => {
    if (iconRef.current) {
      const lordIconElement = iconRef.current.querySelector('lord-icon');
      if (lordIconElement) {
        (lordIconElement as any).trigger = "loop";
        (lordIconElement as any).state = "hover";
      }
    }
  };

  const handleCardMouseLeave = (iconRef: React.RefObject<HTMLDivElement>) => {
    if (iconRef.current) {
      const lordIconElement = iconRef.current.querySelector('lord-icon');
      if (lordIconElement) {
        (lordIconElement as any).trigger = "hover";
        (lordIconElement as any).state = "intro";
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id="overview"
      className="min-h-screen relative flex flex-col justify-center items-center snap-start pt-16 md:pt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10" />

      <div className="container max-w-5xl mx-auto px-4 md:px-8 mt-8">
        <SectionTitle
          title={currentContent.title}
          icon="https://cdn.lordicon.com/fqrjldna.json" // Person icon
          titleClassName="text-[#5090f0]"
        />

        {/* Special container with improved text rendering for scaled content */}
        <div 
          style={contentStyle}
          className="will-change-transform prevent-overflow-x"
        >
          <motion.div
            variants={optimizedStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: isMobile ? 0.1 : 0.2 }}
            className="grid gap-6"
          >
            {/* Introduction Card */}
            <motion.div 
              variants={fadeInUp}
              className="card-wrapper"
            >
              <motion.div 
                className="h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => handleCardMouseEnter(lordIcon1Ref)}
                onMouseLeave={() => handleCardMouseLeave(lordIcon1Ref)}
              >
                <Card className="overflow-hidden backdrop-blur-sm bg-white dark:bg-gray-800 h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 md:p-8">
                    <div className={`flex ${isMobile ? 'flex-col' : 'items-start'} gap-4`}>
                      <div 
                        ref={lordIcon1Ref}
                        className={`${isMobile ? 'flex justify-center mb-2' : 'hidden md:block'} flex-shrink-0`}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `
                              <lord-icon
                                src="https://cdn.lordicon.com/qhviklyi.json"
                                trigger="hover"
                                colors="primary:#5090f0"
                                style="width: ${isMobile ? '64px' : '48px'}; height: ${isMobile ? '64px' : '48px'};"
                              ></lord-icon>
                            `
                          }}
                        />
                      </div>
                      <div>
                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">{formatText(currentContent.introduction)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Experience Card */}
            <motion.div 
              variants={fadeInUp}
              className="card-wrapper"
            >
              <motion.div 
                className="h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => handleCardMouseEnter(lordIcon2Ref)}
                onMouseLeave={() => handleCardMouseLeave(lordIcon2Ref)}
              >
                <Card className="overflow-hidden backdrop-blur-sm bg-white dark:bg-gray-800 h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 md:p-8">
                    <div className={`flex ${isMobile ? 'flex-col' : 'items-start'} gap-4`}>
                      <div 
                        ref={lordIcon2Ref}
                        className={`${isMobile ? 'flex justify-center mb-2' : 'hidden md:block'} flex-shrink-0`}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `
                              <lord-icon
                                src="https://cdn.lordicon.com/dtgezzsi.json"
                                trigger="hover"
                                colors="primary:#5090f0"
                                style="width: ${isMobile ? '72px' : '48px'}; height: ${isMobile ? '64px' : '48px'};"
                              ></lord-icon>
                            `
                          }}
                        />
                      </div>
                      <div className="text-rendering-geometricPrecision">
                        <p className="text-lg leading-relaxed font-normal text-gray-600 dark:text-gray-300">{formatText(currentContent.experience)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Technology Card */}
            <motion.div 
              variants={fadeInUp}
              className="card-wrapper"
            >
              <motion.div 
                className="h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => handleCardMouseEnter(lordIcon3Ref)}
                onMouseLeave={() => handleCardMouseLeave(lordIcon3Ref)}
              >
                <Card className="overflow-hidden backdrop-blur-sm bg-white dark:bg-gray-800 h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 md:p-8">
                    <div className={`flex ${isMobile ? 'flex-col' : 'items-start'} gap-4`}>
                      <div 
                        ref={lordIcon3Ref}
                        className={`${isMobile ? 'flex justify-center mb-2' : 'hidden md:block'} flex-shrink-0`}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `
                              <lord-icon
                                src="https://cdn.lordicon.com/wrprwmwt.json"
                                trigger="hover"
                                colors="primary:#5090f0"
                                style="width: ${isMobile ? '64px' : '48px'}; height: ${isMobile ? '64px' : '48px'};"
                              ></lord-icon>
                            `
                          }}
                        />
                      </div>
                      <div className="text-rendering-geometricPrecision">
                        <p className="text-lg leading-relaxed font-normal text-gray-600 dark:text-gray-300">{formatText(currentContent.technology)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              variants={fadeInUp}
              className="card-wrapper"
            >
              <motion.div 
                className="h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => handleCardMouseEnter(lordIcon4Ref)}
                onMouseLeave={() => handleCardMouseLeave(lordIcon4Ref)}
              >
                <Card className="overflow-hidden backdrop-blur-sm bg-white dark:bg-gray-800 h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
                  <CardContent className="p-6 md:p-8">
                    <div className={`flex ${isMobile ? 'flex-col' : 'items-start'} gap-4`}>
                      <div 
                        ref={lordIcon4Ref}
                        className={`${isMobile ? 'flex justify-center mb-2' : 'hidden md:block'} flex-shrink-0`}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: `
                              <lord-icon
                                src="https://cdn.lordicon.com/vmdbqgzi.json"
                                trigger="hover"
                                colors="primary:#3080e8,secondary:#16c79e"
                                style="width: ${isMobile ? '52px' : '44px'}; height: ${isMobile ? '64px' : '48px'};"
                              ></lord-icon>
                            `
                          }}
                        />
                      </div>
                      <div className="text-rendering-geometricPrecision">
                        <p className="text-lg leading-relaxed font-normal text-gray-600 dark:text-gray-300">{formatText(currentContent.vision)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}