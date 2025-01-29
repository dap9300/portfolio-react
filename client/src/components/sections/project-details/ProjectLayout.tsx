import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { sectionVariants } from "@/lib/animations";

interface ProjectLayoutProps {
  children: ReactNode;
}

export const ProjectLayout: FC<ProjectLayoutProps> = ({ children }) => {
  return (
    <motion.section
      className="min-h-screen w-full relative"
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
    </motion.section>
  );
};