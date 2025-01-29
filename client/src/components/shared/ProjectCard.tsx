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
  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [
        ...(project.technologies.social || []),
        ...(project.technologies.web || []),
        ...(project.technologies.email || [])
      ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="h-full cursor-pointer"
      onClick={() => setLocation(`/project/${project.id}`)}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <CardHeader className="p-0">
          <img
            src={project.image}
            alt={project.title[language]}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title[language]}</h3>
          <p className="text-muted-foreground mb-4">{project.description[language].split('\n')[0]}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.link && (
            <Button
              variant="outline"
              className="w-full"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.link, '_blank');
              }}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              {language === 'en' ? 'View Project' : 'Vedi Progetto'}
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}