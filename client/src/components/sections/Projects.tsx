// client/src/components/sections/Projects.tsx
import { motion } from "framer-motion";
import { translations } from "@/components/sections/project-details/SiteContent";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { staggerContainer, sectionVariants } from "@/lib/animations";
import { getAllProjects } from "@/lib/projectsManager";

interface ProjectsProps {
  language: Language;
}

export function Projects({ language }: ProjectsProps) {
  const t = translations[language];
  const projects = getAllProjects();

  return (
    <motion.section 
      id="projects" 
      className="min-h-screen py-20 px-4 bg-muted/30 relative z-10"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto">
        <SectionTitle 
          title={t.projects.title}
          icon="https://cdn.lordicon.com/zhiiqoue.json"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              language={language}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}