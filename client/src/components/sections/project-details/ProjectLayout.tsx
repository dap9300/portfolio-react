import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/animations";

interface ProjectLayoutProps {
  children: ReactNode;
}

/**
 * ProjectLayout - Main container component for project details
 * Handles the layout and animation of project detail sections
 */
export const ProjectLayout: FC<ProjectLayoutProps> = ({ children }) => {
  return (
    <motion.section
      className="min-h-screen py-20 px-4"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container mx-auto max-w-4xl">
        {children}
      </div>
    </motion.section>
  );
};
