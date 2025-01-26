import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project, Language } from "@/types";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/lib/animations";
import { ExternalLink } from "lucide-react";
import { useLocation } from "wouter";

interface ProjectCardProps {
  project: Project;
  language: Language;
}

export function ProjectCard({ project, language }: ProjectCardProps) {
  const [, setLocation] = useLocation();

  return (
    <motion.div
      variants={fadeInUp}
      className="h-full cursor-pointer"
      onClick={() => setLocation(`/project/${project.id}`)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="h-full flex flex-col overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CardHeader className="p-0">
            <img
              src={project.image}
              alt={project.title[language]}
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
            />
          </CardHeader>
        </motion.div>
        <CardContent className="flex-1 p-6">
          <motion.div variants={scaleIn}>
            <h3 className="text-xl font-semibold mb-2">{project.title[language]}</h3>
            <p className="text-muted-foreground mb-4">{project.description[language].split('\n')[0]}</p>
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
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.link, '_blank');
                }}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                {language === 'en' ? 'View Project' : 'Vedi Progetto'}
              </Button>
            )}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}