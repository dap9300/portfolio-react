import { FC, useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { HandCoins, PiggyBank, ChartNoAxesGantt } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content";

interface AccordionCrowdfundingProps {
  project: Project;
  language: Language;
}

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
          <HandCoins className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{t.projectDetails.crowdfunding[language]}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-xl font-semibold py-2">
                FIUMEDENTRO: Una campagna di crowdfunding per rigenerare lo spazio pubblico dei Murazzi
              </h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Ho coordinato e gestito la campagna di crowdfunding <a href="https://www.produzionidalbasso.com/project/fiumedentro-lo-spazio-pubblico-che-pensa-con-il-fiume/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 transition-colors">FIUMEDENTRO</a>, un'iniziativa promossa 
                da Magazzino sul Po e Terzo Paesaggio, volta a raccogliere fondi per trasformare gli 
                spazi abbandonati dei Murazzi del Po in un luogo pubblico inclusivo e multispecie. 
                Il progetto ha integrato rigenerazione urbana, sostenibilità e cultura partecipativa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Prima Card - Fondi Raccolti */}
              <div className="bg-gradient-to-br from-accent/50 to-accent/30 p-8 rounded-lg shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <PiggyBank className="w-5 h-5 text-primary" />
                    <span className="text-lg font-medium">Fondi Raccolti</span>
                  </div>
                  <motion.span 
                    className="text-4xl font-bold text-green-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    €{fundAmount.toLocaleString()}
                  </motion.span>
                </div>
                <div className="w-full h-4 bg-muted rounded-full overflow-hidden mb-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                  />
                </div>
                <div className="bg-background/50 p-4 rounded-lg">
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

              {/* Seconda Card - Strategia Campagna */}
              <div className="bg-accent/50 p-8 rounded-lg">
                <div className="flex items-center gap-2 mb-6">
                  <ChartNoAxesGantt className="w-5 h-5 text-primary" />
                  <h4 className="text-lg font-medium">Strategia Campagna</h4>
                </div>
                <div className="space-y-4">
                  {[
                    'Strategia promozionale multicanale',
                    'Campagna di coinvolgimento community attraverso storytelling sui social',
                    'Attivazione di una rete di partner e passaparola strategico, ampliando la diffusione della campagna',
                    'Attività di supporto al crowdfunding attraverso gli eventi dal vivo promossi dall\'associazione'
                  ].map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-2"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};