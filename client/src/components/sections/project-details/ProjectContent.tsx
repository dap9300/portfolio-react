import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileEdit, Target, BarChart3, Trophy, Wrench, Mail } from "lucide-react";
import { projectDetailsTranslations as t } from "@/data/translations/projectDetails";

interface ProjectContentProps {
  project: Project;
  language: Language;
}

export const ProjectContent: FC<ProjectContentProps> = ({ project, language }) => {
  return (
    <div className="space-y-8">
      {/* Overview and Tools Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Overview Section - 1/3 width */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{t.projectDetails.overview[language]}</h2>
          <Card className="p-6">
            <p className="text-muted-foreground whitespace-pre-line">
              {project.description[language]}
            </p>
          </Card>
        </div>

        {/* Tools Section - 2/3 width */}
        {project.detailedSections?.tools && (
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">{project.detailedSections.tools.title[language]}</h2>
            <Card className="p-6">
              <p className="text-muted-foreground mb-6">
                {project.detailedSections.tools.description[language]}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.detailedSections.tools.items.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-2 bg-primary/10 text-primary rounded text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Accordion Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Accordion type="single" collapsible className="space-y-4">
          {/* Social Media Section */}
          {project.detailedSections?.strategies?.social && (
            <AccordionItem value="social" className="border rounded-lg hover:bg-accent/50 transition-colors">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-3">
                  <FileEdit className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">
                    {language === 'en' ? 'Social Media Performance' : 'Performance Social Media'}
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <Card className="p-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2 text-muted-foreground">
                      {project.detailedSections.strategies.social[language].map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                    {project.assets?.analytics && project.assets.analytics[0] && (
                      <div className="aspect-video relative">
                        <img
                          src={project.assets.analytics[0]}
                          alt="Social Media Analytics"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Email Marketing Section */}
          {project.detailedSections?.strategies?.email && (
            <AccordionItem value="email" className="border rounded-lg hover:bg-accent/50 transition-colors">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">
                    {language === 'en' ? 'Email Marketing' : 'Email Marketing'}
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <Card className="p-6 mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-2 text-muted-foreground">
                      {project.detailedSections.strategies.email[language].map((item, index) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                    {project.assets?.analytics && project.assets.analytics[1] && (
                      <div className="aspect-video relative">
                        <img
                          src={project.assets.analytics[1]}
                          alt="Email Marketing Analytics"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Objectives Section */}
          {project.detailedSections?.objectives && (
            <AccordionItem value="objectives" className="border rounded-lg hover:bg-accent/50 transition-colors">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">{t.projectDetails.objectives[language]}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <Card className="p-6 mt-4">
                  <ul className="space-y-2 text-muted-foreground">
                    {project.detailedSections.objectives[language].map((objective, index) => (
                      <li key={index}>• {objective}</li>
                    ))}
                  </ul>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Crowdfunding Section */}
          <AccordionItem value="crowdfunding" className="border rounded-lg hover:bg-accent/50 transition-colors">
            <AccordionTrigger className="px-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">{t.projectDetails.crowdfunding[language]}</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <Card className="p-6 mt-4">
                <ul className="space-y-2 text-muted-foreground">
                  {t.projectDetails.crowdfunding.results[language].map((result, index) => (
                    <li key={index}>• {result}</li>
                  ))}
                </ul>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Content Planning Section */}
          {project.detailedSections?.strategies?.contentPlanning && (
            <AccordionItem value="content-planning" className="border rounded-lg hover:bg-accent/50 transition-colors">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-3">
                  <FileEdit className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">{t.projectDetails.contentPlanning[language]}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <Card className="p-6 mt-4">
                  <ul className="space-y-2 text-muted-foreground">
                    {project.detailedSections.strategies.contentPlanning[language].map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </motion.div>
    </div>
  );
};