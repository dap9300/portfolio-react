import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Target, Check } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { hrxDetailsTranslations as t } from "./translations";

interface HRXObjectivesAccordionProps {
  project: Project;
  language: Language;
}

const HRXObjectivesAccordion: FC<HRXObjectivesAccordionProps> = ({ project, language }) => {
  return (
    <AccordionItem value="objectives" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <Target className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{t.projectDetails.objectives[language]}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Incrementare Lead Generation',
                icon: '✨',
                achievement: 'Target raggiunto: +22%',
                details: 'Significativo aumento nella generazione di lead qualificati'
              },
              {
                title: 'Ottimizzare ROAS',
                icon: '📢',
                achievement: 'Superato target: 4.2x',
                details: 'Return on Ad Spend superiore agli obiettivi prefissati'
              },
              {
                title: 'Migliorare CTR',
                icon: '🤝',
                achievement: 'Raggiunto: +3.5%',
                details: 'Click-Through Rate ottimizzato su tutte le campagne'
              },
              {
                title: 'Espandere Presenza Online',
                icon: '📱',
                achievement: 'Completato',
                details: 'Strategia multicanale implementata con successo'
              }
            ].map((objective, index) => (
              <div key={index} className="bg-accent/50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">{objective.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-2">{objective.title}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-green-600">{objective.achievement}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{objective.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};

export default HRXObjectivesAccordion;