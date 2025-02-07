// client/src/components/sections/project-details/magazzino/AccordionCrowdfunding.tsx
import { FC, useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Trophy, Lightbulb, Code2, MessageSquare, CheckCircle } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { translations as t } from "./content.it";
import { translations as siteTranslations } from "@/components/sections/project-details/SiteContent";

interface AccordionCrowdfundingProps {
  project: Project;
  language: Language;
}

const Timeline: FC = () => {
  const [selected, setSelected] = useState(0);

  const timelineSteps = [
    {
      stage: 'Ideazione',
      icon: Lightbulb,
      description: 'Definizione del concept, analisi del territorio e pianificazione strategica del progetto'
    },
    {
      stage: 'Implementazione',
      icon: Code2,
      description: 'Sviluppo della piattaforma, creazione dei contenuti e preparazione degli strumenti di campagna'
    },
    {
      stage: 'Comunicazione',
      icon: MessageSquare,
      description: 'Attivazione dei canali social, PR e coinvolgimento della community locale'
    },
    {
      stage: 'Chiusura',
      icon: CheckCircle,
      description: 'Raggiungimento degli obiettivi, rendicontazione e celebrazione dei risultati'
    }
  ];

  return (
    <div className="w-full space-y-6">
      <div className="relative py-8">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted"></div>
        <motion.div 
          className="absolute top-1/2 left-0 h-0.5 bg-primary"
          initial={{ width: '0%' }}
          animate={{ width: `${(selected / (timelineSteps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-dotted-pattern"></div>

        <div className="grid grid-cols-4 gap-4 relative">
          {timelineSteps.map((step, index) => {
            const isSelected = selected === index;
            const isPast = index < selected;

            return (
              <div 
                key={step.stage} 
                className="flex flex-col items-center cursor-pointer" 
                onClick={() => setSelected(index)}
              >
                <motion.div 
                  className={`w-14 h-14 rounded-full border-2 flex items-center justify-center mb-2 relative z-10
                    ${isSelected ? 'bg-primary border-primary shadow-lg' : 
                      isPast ? 'bg-background border-primary' : 'bg-background border-muted'}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: isSelected ? -4 : 0
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                >
                  <step.icon 
                    className={`w-6 h-6 ${
                      isSelected ? 'text-background' : 
                      isPast ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  />
                </motion.div>
                <p className={`text-sm font-medium ${
                  isSelected ? 'text-primary scale-105 font-semibold' :
                  isPast ? 'text-primary' : 'text-muted-foreground'
                }`}>
                  {step.stage}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <motion.div 
        className="bg-background/80 p-4 rounded-lg shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20
        }}
        key={selected}
      >
        <p className="text-sm text-muted-foreground leading-relaxed">
          {timelineSteps[selected].description}
        </p>
      </motion.div>
    </div>
  );
};

export const AccordionCrowdfunding: FC<AccordionCrowdfundingProps> = ({ project, language }) => {
  const [supportersCount, setSupportersCount] = useState(0);
  const [fundAmount, setFundAmount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateSupporters = () => {
    const controls = animate(0, 300, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setSupportersCount(Math.round(latest));
      }
    });

    return controls.stop;
  };

  const animateFunds = () => {
    const controls = animate(0, 5597, {
      duration: 2.2,
      ease: "easeInOut",
      stiffness: 150,
      damping: 25,
      onUpdate: (latest) => {
        setFundAmount(Math.round(latest));
      }
    });

    return controls.stop;
  };

  useEffect(() => {
    if (!hasAnimated) {
      const timer = setTimeout(() => {
        const cleanupSupporters = animateSupporters();
        const cleanupFunds = animateFunds();
        setHasAnimated(true);

        return () => {
          cleanupSupporters();
          cleanupFunds();
        };
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [hasAnimated]);

  return (
    <AccordionItem value="crowdfunding" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <Trophy className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{t.projectDetails.crowdfunding[language]}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold">
                FIUMEDENTRO: Una campagna di crowdfunding per rigenerare lo spazio pubblico dei Murazzi
              </h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Ho coordinato e gestito la campagna di crowdfunding FIUMEDENTRO, un'iniziativa promossa 
                da Magazzino sul Po e Terzo Paesaggio, volta a raccogliere fondi per trasformare gli 
                spazi abbandonati dei Murazzi del Po in un luogo pubblico inclusivo e multispecie. 
                Il progetto ha integrato rigenerazione urbana, sostenibilità e cultura partecipativa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-accent/50 to-accent/30 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium">Fondi Raccolti</span>
                    <motion.span 
                      className="text-4xl font-bold text-green-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      €{fundAmount.toLocaleString()}
                    </motion.span>
                  </div>
                  <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center bg-background/50 p-4 rounded-lg">
                  <div>
                    <motion.p 
                      className="text-4xl font-bold text-blue-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {supportersCount}
                      <span className="text-2xl">+</span>
                    </motion.p>
                    <p className="text-sm text-muted-foreground mt-1">Sostenitori Individuali</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/50 p-6 rounded-lg">
                <h4 className="text-lg font-medium mb-4">Strategia Campagna</h4>
                <div className="space-y-3">
                  {[
                    'Strategia promozionale multicanale',
                    'Campagna di coinvolgimento community',
                    'Campagna di sensibilizzazione social'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-accent/50 p-6 rounded-lg">
              <h4 className="font-medium mb-6 text-center">Timeline Campagna</h4>
              <Timeline />
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};