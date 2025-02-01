import { FC, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "@/data/translations/projectDetails";

interface AccordionCrowdfundingProps {
  project: Project;
  language: Language;
}

export const AccordionCrowdfunding: FC<AccordionCrowdfundingProps> = ({ project, language }) => {
  const supportersCount = useMotionValue(0);
  const fundAmount = useMotionValue(0);
  const formattedSupporters = useTransform(supportersCount, value => 
    Math.floor(value).toString()
  );
  const formattedAmount = useTransform(fundAmount, value => 
    `€${Math.floor(value).toLocaleString()}`
  );

  useEffect(() => {
    const supportersAnimation = animate(supportersCount, 300, {
      duration: 2,
      onComplete: () => {
        animate(fundAmount, 5597, {
          duration: 2.5,
          ease: "easeOut"
        });
      }
    });

    return () => supportersAnimation.stop();
  }, []);

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
              <h3 className="text-xl font-semibold">FIUMEDENTRO: Una campagna di crowdfunding per rigenerare lo spazio pubblico dei Murazzi</h3>
              <p className="text-muted-foreground mt-2 leading-relaxed">
                Ho coordinato e gestito la campagna di crowdfunding FIUMEDENTRO, un'iniziativa promossa da Magazzino sul Po e Terzo Paesaggio, volta a raccogliere fondi per trasformare gli spazi abbandonati dei Murazzi del Po in un luogo pubblico inclusivo e multispecie. Il progetto ha integrato rigenerazione urbana, sostenibilità e cultura partecipativa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-br from-accent/50 to-accent/30 p-8 rounded-lg shadow-md">
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-medium">Fondi Raccolti</span>
                    <motion.span className="text-4xl font-bold text-green-600">
                      {formattedAmount.get()}
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
                    <motion.p className="text-4xl font-bold text-blue-500">
                      {formattedSupporters.get()}
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
              <div className="relative py-8">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted"></div>
                <div className="grid grid-cols-3 gap-4 relative">
                  {[
                    { stage: 'Lancio', icon: '🚀' },
                    { stage: 'Sviluppo', icon: '📈' },
                    { stage: 'Chiusura', icon: '🎯' }
                  ].map((step) => (
                    <div key={step.stage} className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-background rounded-full border-2 border-blue-500 flex items-center justify-center mb-2 relative z-10 hover:scale-110 transition-transform">
                        <span className="text-xl">{step.icon}</span>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground">{step.stage}</p>
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
