// client/src/components/sections/project-details/manunta/AccordionObiettivi (copy).tsx
import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Target, Check } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { translations as t } from "./content.it";

interface ManuntaObjectivesAccordionProps {
  project: Project;
  language: Language;
}

const ManuntaObjectivesAccordion: FC<ManuntaObjectivesAccordionProps> = ({ project, language }) => {
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
                title: 'Incrementare Prenotazioni Online',
                icon: '✨',
                achievement: 'Target raggiunto: +45%',
                details: 'Significativo aumento nelle prenotazioni online'
              },
              {
                title: 'Ottimizzare SEO Locale',
                icon: '📢',
                achievement: 'Superato target: +120%',
                details: 'Visibilità locale migliorata significativamente'
              },
              {
                title: 'Migliorare CTR',
                icon: '🤝',
                achievement: 'Raggiunto: 3.2%',
                details: 'Click-Through Rate ottimizzato su tutte le campagne'
              },
              {
                title: 'Espandere Presenza Social',
                icon: '📱',
                achievement: 'Completato +85%',
                details: 'Strategia social implementata con successo'
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

export default ManuntaObjectivesAccordion;