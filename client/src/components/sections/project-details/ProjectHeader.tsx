import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";

interface ProjectHeaderProps {
  project: Project;
  language: Language;
}

export const ProjectHeader: FC<ProjectHeaderProps> = ({ project, language }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.src = project.image;
    img.onload = () => setIsLoaded(true);
  }, [project.image]);

  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [
        ...(project.technologies.social || []),
        ...(project.technologies.web || []),
        ...(project.technologies.email || [])
      ];

  return (
    <motion.div 
      className="h-[60vh] relative w-full mb-12 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="absolute inset-0"
        style={{ 
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-out'
        }}
      >
        <img
          src={project.image}
          alt={project.title[language]}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            transform: 'translate3d(0,0,0)',
            WebkitBackfaceVisibility: 'hidden',
            WebkitPerspective: 1000,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white z-10">
        <div className="text-center max-w-4xl px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {project.title[language]}
          </motion.h1>
          <motion.div
            className="flex flex-wrap gap-2 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/10 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};