import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { FileEdit } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content.it"; // Updated import path

interface AccordionPianificazioneContenutiProps {
  project: Project;
  language: Language;
}

export const AccordionPianificazioneContenuti: FC<AccordionPianificazioneContenutiProps> = ({ project, language }) => {
  if (!project.detailedSections?.contentPlanning) return null;

  return (
    <AccordionItem value="content-planning" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <FileEdit className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{project.detailedSections.contentPlanning.title[language]}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <ul className="space-y-2 text-muted-foreground">
            {project.detailedSections.contentPlanning.metrics.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};