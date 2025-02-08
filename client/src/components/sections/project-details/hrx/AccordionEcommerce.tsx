// client/src/components/sections/project-details/hrx/AccordionEcommerce.tsx
import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content";


interface AccordionEcommerceProps {
  project: Project;
  language: Language;
}

export const AccordionEcommerce: FC<AccordionEcommerceProps> = ({ project, language }) => {
  // Definisco un fallback per il titolo nel caso in cui le traduzioni non siano disponibili
  const sectionTitle = t?.projectDetails?.ecommerce?.[language] || "E-commerce";

  return (
    <AccordionItem value="ecommerce" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <ShoppingCart className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{sectionTitle}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column - Text Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                {project.detailedSections?.ecommerce?.title?.[language] || sectionTitle}
              </h3>
              <div className="text-muted-foreground">
                {project.detailedSections?.ecommerce?.content?.[language]?.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-3 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            {/* Right Column - Image */}
            <div className="flex items-center justify-center">
              <img 
                src="/api/placeholder/600/400" 
                alt="E-commerce visualization" 
                className="rounded-lg w-full h-auto object-cover shadow-lg"
              />
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionEcommerce;