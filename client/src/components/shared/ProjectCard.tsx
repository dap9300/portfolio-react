import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project, Language } from "@/types";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  language: Language;
}

export function ProjectCard({ project, language }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="h-full"
    >
      <Card className="h-full flex flex-col">
        <CardHeader className="p-0">
          <img
            src={project.image}
            alt={project.title[language]}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title[language]}</h3>
          <p className="text-muted-foreground mb-4">{project.description[language]}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
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
              onClick={() => window.open(project.link, '_blank')}
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
