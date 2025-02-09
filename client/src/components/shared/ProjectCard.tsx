// client/src/components/shared/ProjectCard.tsx
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project, Language } from "@/types";
import { ExternalLink } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
  language: Language;
}

export function ProjectCard({ project, language }: ProjectCardProps) {
  const [, setLocation] = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300
        border border-gray-200 dark:border-gray-700
        bg-white dark:bg-gray-800
        hover:shadow-lg">
        <CardHeader className="p-0">
          <img
            src={project.image}
            alt={project.title[language]}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="flex-1 p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
            {project.title[language]}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
            {project.description[language].split('\n')[0]}
          </p>
          <Button
            variant="outline"
            className="w-full border border-gray-200 dark:border-gray-700 
              bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700
              text-gray-900 dark:text-gray-100
              transition-colors duration-200
              flex items-center justify-center gap-2"
            onClick={() => window.open(project.link || `/project/${project.id}`, '_blank')}
          >
            {language === 'en' ? 'View Project' : 'Vai al Progetto'}
            <ExternalLink className="w-4 h-4" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}