import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Trophy, Check, TrendingUp, UserMinus, LineChart, ShoppingCart } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content";

interface HRXObjectivesAccordionProps {
  project: Project;
  language: Language;
}

const HRXObjectivesAccordion: FC<HRXObjectivesAccordionProps> = ({ project, language }) => {
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
                title: 'Aumento delle vendite',
                icon: TrendingUp,
                achievement: 'Incremento significativo',
                details: 'Significativo aumento della vendita dei prodotti su E-commerce'
              },
              {
                title: 'Riduzione del tasso di abbandono',
                icon: UserMinus,
                achievement: 'Riduzione del 35%',
                details: 'Grazie al miglioramento dell\' esperienza utente on-site'
              },
              {
                title: 'Miglioramento del ROAS',
                icon: LineChart,
                achievement: 'ROAS medio del 320%',
                details: 'Ottimizzazione campagna e riduzione costo acquisizione'
              },
              {
                title: 'Ottimizzazione eCommerce',
                icon: ShoppingCart,
                achievement: 'Risultato raggiunto',
                details: 'Ottimizzazione SEO, schede prodotto e UX'
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

export default HRXObjectivesAccordion;