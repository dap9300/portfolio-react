import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileEdit, Target, BarChart3, Trophy } from "lucide-react";
import { projectDetailsTranslations as t } from "@/data/translations/projectDetails";

interface ProjectContentProps {
  project: Project;
  language: Language;
}

export const ProjectContent: FC<ProjectContentProps> = ({ project, language }) => {
  return (
    <div className="space-y-8 mt-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Accordion type="single" collapsible className="space-y-4">
          {/* Overview Section */}
          <AccordionItem value="overview" className="border rounded-lg hover:bg-accent/50 transition-colors">
            <AccordionTrigger className="px-4">
              <div className="flex items-center gap-3">
                <FileEdit className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">{t.projectDetails.overview[language]}</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <Card className="p-6 mt-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-4">
                      {language === 'en' ? 'Project Background' : 'Background del Progetto'}
                    </h3>
                    <p className="text-muted-foreground mb-4 whitespace-pre-line">
                      {project.description[language]}
                    </p>
                  </div>
                  {project.assets?.analytics && project.assets.analytics[0] && (
                    <div className="aspect-video relative">
                      <img
                        src={project.assets.analytics[0]}
                        alt="Overview"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  )}
                </div>
              </Card>
            </AccordionContent>
          </AccordionItem>

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
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4">
                        {language === 'en' ? 'Strategic Goals' : 'Obiettivi Strategici'}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {project.detailedSections.objectives[language].map((objective, index) => (
                          <li key={index}>• {objective}</li>
                        ))}
                      </ul>
                    </div>
                    {project.assets?.analytics && project.assets.analytics[1] && (
                      <div className="aspect-video relative">
                        <img
                          src={project.assets.analytics[1]}
                          alt="Objectives"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Content Planning Section */}
          {project.detailedSections?.strategies && (
            <AccordionItem value="content-planning" className="border rounded-lg hover:bg-accent/50 transition-colors">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-3">
                  <FileEdit className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">{t.projectDetails.contentPlanning[language]}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <div className="space-y-6 pt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="font-semibold mb-4">
                        {t.projectDetails.contentPlanning[language]}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {project.detailedSections.strategies.contentPlanning[language].map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="font-semibold mb-4">
                        {language === 'en' ? 'Performance & Analytics' : 'Performance & Analisi'}
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {project.detailedSections.strategies.analytics[language].map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Key Results Section */}
          <AccordionItem value="key-results" className="border rounded-lg hover:bg-accent/50 transition-colors">
            <AccordionTrigger className="px-4">
              <div className="flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">{t.projectDetails.keyResults[language]}</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <div className="space-y-6 pt-4">
                <Card className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4">
                        {language === 'en' ? 'Analytics & Performance' : 'Analytics & Performance'}
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">
                            {language === 'en' ? 'Website Performance' : 'Performance Sito Web'}
                          </h4>
                          <ul className="space-y-1 text-muted-foreground">
                            {project.detailedSections?.strategies?.analytics[language].map((item, index) => (
                              <li key={index}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {project.assets?.analytics && (
                      <div className="aspect-video relative">
                        <img
                          src={project.assets.analytics[0]}
                          alt="Analytics"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    )}
                  </div>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};