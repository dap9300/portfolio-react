import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content.it";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

interface AccordionEmailMarketingProps {
  project: Project;
  language: Language;
}

export const AccordionEmailMarketing: FC<AccordionEmailMarketingProps> = ({ project, language }) => {
  const emailStrategies = project.detailedSections?.strategies.email?.[language] || [];

  return (
    <AccordionItem value="email" className="border-none">
      <AccordionTrigger className="hover:no-underline py-6 px-8 bg-card rounded-xl">
        <div className="flex items-center gap-4">
          <Mail className="w-5 h-5 text-primary" />
          <span className="text-xl font-semibold">
            {t.projectDetails.emailMarketing[language]}
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
            {emailStrategies.map((strategy, index) => (
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