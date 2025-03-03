import React, { useContext, useEffect, useRef } from "react";
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
      introduction: "Sono un **Digital Marketing Specialist** con un approccio a 360° alla strategia digitale. Dalla SEO all'advertising, dal content marketing allo sviluppo web, integro competenze cross-funzionali per creare progetti che generano risultati misurabili.",
      experience: "La mia esperienza spazia tra **SEO, content strategy, social media marketing, email automation e sviluppo web**, con un focus particolare sull'advertising avanzato su **Meta Ads e Google Ads** per massimizzare il ROI.",
      technology: "**Tecnologia & Innovazione** Appassionato di innovazione digitale, esploro attivamente il potenziale dell'**AI e degli LLM** per automatizzare processi e ottimizzare strategie di marketing. Questo portfolio stesso è un esempio concreto di collaborazione **uomo-AI**, realizzato sfruttando le potenzialità di Claude nel processo creativo.",
      vision: "**La mia visione** Credo nella sinergia tra **creatività umana e potenza computazionale** per sviluppare progetti digitali che si distinguono in un mercato sempre più competitivo. Il futuro del marketing appartiene a chi sa integrare strategia, dati e automazione."
    }
  };

  // Function to convert markdown bold to JSX with proper typing
  const formatText = (text: string) => {
    if (!text) return null;

    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <span key={i} className="font-bold text-primary">{part.slice(2, -2)}</span>;
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  const currentContent = content[language];

  return (
    <motion.section
      ref={sectionRef}
      id="overview"
      className="min-h-screen relative flex flex-col justify-center items-center snap-start pt-16 md:pt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10" />

      <div className="container max-w-5xl mx-auto px-4 md:px-8 mt-8">
        <SectionTitle
          title={currentContent.title}
          icon="https://cdn.lordicon.com/fqrjldna.json" // Person icon
        />

        {/* Special container with improved text rendering for scaled content */}
        <div 
          style={{ 
            transform: 'scale(0.80)', 
            transformOrigin: 'top center',
            // Force pixel rendering to improve text clarity
            imageRendering: 'crisp-edges',
            // Special CSS for text rendering on different screens
            textRendering: 'geometricPrecision'
          }}
          className="will-change-transform"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
              >
                <Card className="overflow-hidden backdrop-blur-sm bg-background/90 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="hidden md:block flex-shrink-0 mt-1">
                        {/* Original lord-icon element - this should work as before */}
                        <lord-icon
                          src="https://cdn.lordicon.com/qhviklyi.json"
                          trigger="hover"
                          colors="primary:#5090f0"
                          style={{ width: "48px", height: "48px" }}
                        ></lord-icon>
                      </div>
                      <div>
                        <p className="text-lg leading-relaxed">{formatText(currentContent.introduction)}</p>
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
              >
                <Card className="overflow-hidden backdrop-blur-sm bg-background/90 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="hidden md:block flex-shrink-0 mt-1">
                        <lord-icon
                          src="https://cdn.lordicon.com/dtgezzsi.json"
                          trigger="hover"
                          colors="primary:#5090f0"
                          style={{ width: "48px", height: "48px" }}
                        ></lord-icon>
                      </div>
                      <div className="text-rendering-geometricPrecision">
                        <p className="text-lg leading-relaxed font-normal">{formatText(currentContent.experience)}</p>
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
              >
                <Card className="overflow-hidden backdrop-blur-sm bg-background/90 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="hidden md:block flex-shrink-0 mt-1">
                        <lord-icon
                          src="https://cdn.lordicon.com/wloilxuq.json"
                          trigger="hover"
                          colors="primary:#5090f0"
                          style={{ width: "48px", height: "48px" }}
                        ></lord-icon>
                      </div>
                      <div className="text-rendering-geometricPrecision">
                        <p className="text-lg leading-relaxed font-normal">{formatText(currentContent.technology)}</p>
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
              >
                <Card className="overflow-hidden backdrop-blur-sm bg-background/90 h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="hidden md:block flex-shrink-0 mt-1">
                        <lord-icon
                          src="https://cdn.lordicon.com/kbtmbyzy.json"
                          trigger="hover"
                          colors="primary:#5090f0"
                          style={{ width: "48px", height: "48px" }}
                        ></lord-icon>
                      </div>
                      <div className="text-rendering-geometricPrecision">
                        <p className="text-lg leading-relaxed font-normal">{formatText(currentContent.vision)}</p>
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