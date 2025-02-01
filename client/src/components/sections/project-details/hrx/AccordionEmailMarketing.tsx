import { FC } from 'react';
import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { Language, Project } from '@/types';
import { Mail } from 'lucide-react';

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
            <div className="space-y-4">
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
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};