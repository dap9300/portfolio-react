import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";

interface ProjectHeaderProps {
  project: Project;
  language: Language;
}

/**
 * ProjectHeader - Displays the project title and main image
 * Handles responsive image loading and title animations
 */
export const ProjectHeader: FC<ProjectHeaderProps> = ({ project, language }) => {
  return (
    <div className="space-y-6">
      <motion.h1 
        className="text-4xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {project.title[language]}
      </motion.h1>
      <motion.div
        className="relative aspect-video w-full overflow-hidden rounded-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <img
          src={project.image}
          alt={project.title[language]}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};
