import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Target, Check, Trophy, Sparkles, Megaphone, Globe, Users } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content";

interface AccordionObiettiviProps {
  project: Project;
  language: Language;
}

export const AccordionObiettivi: FC<AccordionObiettiviProps> = ({ project, language }) => {
  return (
    <AccordionItem value="objectives" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <Trophy className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{t.projectDetails.objectives[language]}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Aumentare la presenza online',
                icon: Sparkles,
                achievement: 'Obiettivo raggiunto',
                details: 'Creazione dell\'identità digitale dell\'associazione, definendo il tone of voice, la visual identity e una strategia di contenuti chiara ed efficace per il target'
              },
              {
                title: 'Migliorare l\'efficacia della comunicazione degli eventi',  
                icon: Megaphone,  
                achievement: 'Superato aspettative',  
                details: 'Aumento del 45% della partecipazione agli eventi, promossi tramite strategie mirate e attività di sponsorizzazione mirate'  
              },
             {
                title: 'Sviluppare e integrare Sito Web',
                icon: Globe,
                achievement: 'Completato',
                details: 'Restyling del sito web e implementazione di un sistema di e-ticketing che ha generato nuovi flussi di revenue per l\'associazione'
              },
              {
                title: 'Incrementare il coinvolgimento della community',
                icon: Users,
                achievement: 'In continua crescita',
                details: 'Community attiva ed engagement rate superiore alla media del settore'
              }
            ].map((objective, index) => (
              <div key={index} className="bg-accent/50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <objective.icon className="w-6 h-6 text-primary" />
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