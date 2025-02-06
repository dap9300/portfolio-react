import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content.it";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

interface AccordionEcommerceProps {
  project: Project;
  language: Language;
}

export const AccordionEcommerce: FC<AccordionEcommerceProps> = ({ project, language }) => {
  return (
    <AccordionItem value="ecommerce" className="border-none">
      <AccordionTrigger className="hover:no-underline py-6 px-8 bg-card rounded-xl">
        <div className="flex items-center gap-4">
          <ShoppingCart className="w-5 h-5 text-primary" />
          <span className="text-xl font-semibold">
            {t.projectDetails.ecommerce[language]}
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
          <p className="text-muted-foreground whitespace-pre-line">
            {project.detailedSections?.ecommerce?.content[language]}
          </p>
        </motion.div>
      </AccordionContent>
    </AccordionItem>
  );
};
