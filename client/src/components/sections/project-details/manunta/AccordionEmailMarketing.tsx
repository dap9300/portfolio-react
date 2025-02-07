// client/src/components/sections/project-details/manunta/AccordionEmailMarketing.tsx
import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { translations as t } from "./content.it";

interface ManuntaEmailMarketingProps {
  project: Project;
  language: Language;
}

const ManuntaEmailMarketing: FC<ManuntaEmailMarketingProps> = ({ project, language }) => {
  return (
    <AccordionItem value="email" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">
            {t.projectDetails.emailMarketing[language]}
          </h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Bullet Points */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Attività Email Marketing</h3>
              <ul className="space-y-2">
                {[
                  'Newsletter mensile a 5,000+ iscritti',
                  'Promemoria appuntamenti automatizzati',
                  'Comunicazioni follow-up post trattamento',
                  'Newsletter informative sulla salute'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Iscritti Newsletter</p>
                <p className="text-2xl font-bold text-blue-500">5,214</p>
                <span className="text-green-600 text-base">+45% YoY</span>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Tasso di Apertura</p>
                <p className="text-2xl font-bold text-blue-500">25%</p>
                <span className="text-muted-foreground text-sm">medio</span>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Tasso di Click</p>
                <p className="text-2xl font-bold text-blue-500">3.2%</p>
                <span className="text-muted-foreground text-sm">medio</span>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Efficacia Promemoria</p>
                <p className="text-2xl font-bold text-blue-500">85%</p>
                <span className="text-muted-foreground text-sm">presenza appuntamenti</span>
              </div>
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ManuntaEmailMarketing;