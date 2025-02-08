import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content";

interface AccordionEmailMarketingProps {
  project: Project;
  language: Language;
}

export const AccordionEmailMarketing: FC<AccordionEmailMarketingProps> = ({ project, language }) => {
  if (!project.detailedSections?.emailMarketing) return null;

  return (
    <AccordionItem value="email" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">
            {project.detailedSections.emailMarketing.title[language]}
          </h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Content and Bullet Points */}
            <div className="space-y-4">
              <p className="text-muted-foreground">
                {project.detailedSections.emailMarketing.content[language]}
              </p>
              <h3 className="font-semibold text-lg">Attività Email Marketing</h3>
              <ul className="space-y-2">
                {project.detailedSections.emailMarketing.metrics.map((item, index) => (
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
                <p className="text-2xl font-bold text-blue-500">44.514</p>
                <span className="text-green-600 text-base">+28% YoY</span>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Tasso di Apertura</p>
                <p className="text-2xl font-bold text-blue-500">14,7%</p>
                <span className="text-muted-foreground text-sm">medio</span>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Tasso di Click</p>
                <p className="text-2xl font-bold text-blue-500">4.5%</p>
                <span className="text-muted-foreground text-sm">medio</span>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">Tasso di Cancellazione</p>
                <p className="text-2xl font-bold text-blue-500">0,7%</p>
                <span className="text-muted-foreground text-sm">basso</span>
              </div>
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};