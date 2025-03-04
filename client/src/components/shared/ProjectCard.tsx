import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Project, Language } from "@/types";
import { ExternalLink, Clock } from "lucide-react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { isComingSoon } from "@/lib/projectsManager";

interface ProjectCardProps {
  project: Project;
  language: Language;
}

export function ProjectCard({ project, language }: ProjectCardProps) {
  const [, setLocation] = useLocation();
  const comingSoon = isComingSoon(project.id.toString());

  const handleProjectClick = () => {
    if (comingSoon) return;

    if (project.link) {
      // Se è un link esterno, naviga direttamente
      window.location.href = project.link;
    } else {
      // Se è un progetto interno, usa il router per navigare
      setLocation(`/project/${project.id}`);
    }
  };

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
        <CardHeader className="p-0 relative">
          {/* Contenitore per l'immagine con eventuale overlay "Coming Soon" */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title[language]}
              className={`w-full h-48 object-cover rounded-t-lg ${comingSoon ? 'blur-sm' : ''}`}
            />
            {/* Overlay "Coming Soon" se necessario */}
            {comingSoon && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
                <div className="bg-black/80 px-4 py-2 rounded-lg flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white" />
                  <span className="font-semibold text-white">{language === 'en' ? 'Coming Soon' : 'In Arrivo'}</span>
                </div>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-6 flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-gray-100">
            {project.title[language]}
          </h3>
          <p className={`text-gray-600 dark:text-gray-300 mb-4 flex-grow ${comingSoon ? 'select-none' : ''}`}>
            {project.description[language].split('\n')[0]}
          </p>
          <Button
            variant="outline"
            className={`w-full border border-gray-200 dark:border-gray-700 
              bg-transparent hover:bg-gray-50 dark:hover:bg-gray-700
              text-gray-900 dark:text-gray-100
              transition-colors duration-200
              flex items-center justify-center gap-2
              ${comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleProjectClick}
            disabled={comingSoon}
          >
            {comingSoon 
              ? (language === 'en' ? 'Coming Soon' : 'In Arrivo') 
              : (language === 'en' ? 'View Project' : 'Vai al Progetto')
            }
            {!comingSoon && <ExternalLink className="w-4 h-4" />}
            {comingSoon && <Clock className="w-4 h-4" />}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}