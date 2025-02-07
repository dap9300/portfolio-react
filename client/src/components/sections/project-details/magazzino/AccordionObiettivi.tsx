// client/src/components/sections/project-details/magazzino/AccordionObiettivi.tsx
import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Target, Check } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { translations as t } from "./content.it";
import { translations as siteTranslations } from "@/components/sections/project-details/SiteContent";

interface AccordionObiettiviProps {
  project: Project;
  language: Language;
}

export const AccordionObiettivi: FC<AccordionObiettiviProps> = ({ project, language }) => {
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
                title: 'Aumentare la visibilità online',
                icon: '✨',
                achievement: 'Target raggiunto',
                details: 'Incremento significativo della presenza sui social media e motori di ricerca'
              },
              {
                title: 'Migliorare l\'efficacia della comunicazione degli eventi',
                icon: '📢',
                achievement: 'Superato aspettative',
                details: 'Aumento del 75% nella partecipazione agli eventi promossi'
              },
              {
                title: 'Incrementare il coinvolgimento della community',
                icon: '🤝',
                achievement: 'In continua crescita',
                details: 'Community attiva e engagement rate superiore alla media del settore'
              },
              {
                title: 'Ottimizzare la presenza digitale',
                icon: '📱',
                achievement: 'Completato',
                details: 'Implementazione di una strategia digitale integrata e performante'
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