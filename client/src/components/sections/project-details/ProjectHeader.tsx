import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";

interface ProjectHeaderProps {
  project: Project;
  language: Language;
}

export const ProjectHeader: FC<ProjectHeaderProps> = ({ project, language }) => {
  const technologies = Array.isArray(project.technologies)
    ? project.technologies
    : [
        ...(project.technologies.social || []),
        ...(project.technologies.web || []),
        ...(project.technologies.email || [])
      ];

  return (
    <div className="h-[40vh] relative w-full mb-12">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundAttachment: 'fixed',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center max-w-4xl px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
    </div>
  );
};