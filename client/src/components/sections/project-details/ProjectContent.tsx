import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectContentProps {
  project: Project;
  language: Language;
}

/**
 * ProjectContent - Displays project description and detailed sections
 * Handles rendering of overview, objectives, and strategies
 */
export const ProjectContent: FC<ProjectContentProps> = ({ project, language }) => {
  return (
    <div className="space-y-8 mt-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>
              {project.detailedSections?.overview?.title[language]}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground whitespace-pre-line">
              {project.detailedSections?.overview?.content[language]}
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {project.detailedSections?.objectives && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Objectives' : 'Obiettivi'}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {project.detailedSections.objectives[language].map((objective, index) => (
                  <li key={index} className="text-muted-foreground">
                    {objective}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      )}
    </div>
  );
};
