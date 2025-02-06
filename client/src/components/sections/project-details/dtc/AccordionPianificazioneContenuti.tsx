import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content.it";
import { motion } from "framer-motion";
import { LayoutTemplate } from "lucide-react";

interface AccordionPianificazioneContenutiProps {
  project: Project;
  language: Language;
}

export const AccordionPianificazioneContenuti: FC<AccordionPianificazioneContenutiProps> = ({ project, language }) => {
  const contentPlanning = project.detailedSections?.strategies.contentPlanning?.[language] || [];

  return (
    <AccordionItem value="content" className="border-none">
      <AccordionTrigger className="hover:no-underline py-6 px-8 bg-card rounded-xl">
        <div className="flex items-center gap-4">
          <LayoutTemplate className="w-5 h-5 text-primary" />
          <span className="text-xl font-semibold">
            {t.projectDetails.contentPlanning[language]}
          </span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="pt-6 px-8">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <ul className="list-disc list-inside space-y-2">
            {contentPlanning.map((strategy, index) => (
              <li key={index} className="text-muted-foreground">
                {strategy}
              </li>
            ))}
          </ul>
        </motion.div>
      </AccordionContent>
    </AccordionItem>
  );
};