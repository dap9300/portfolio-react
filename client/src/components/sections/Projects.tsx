import { useContext, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { translations } from "@/components/sections/project-details/SiteContent";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { staggerContainer, sectionVariants } from "@/lib/animations";
import { getAllProjects } from "@/lib/projectsManager";
import { ScrollContext } from "@/App";

interface ProjectsProps {
  language: Language;
  sectionIndex: number;
}

export function Projects({ language, sectionIndex }: ProjectsProps) {
  const { registerSection } = useContext(ScrollContext);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerSection(sectionIndex)(sectionRef.current);
    }
  }, [registerSection, sectionIndex]);

  const t = translations[language];
  const projects = getAllProjects();

  return (
    <motion.section 
      ref={sectionRef}
      id="projects" 
      className="min-h-screen flex items-center justify-center bg-muted/30 relative z-10 snap-start pt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full max-w-9xl mx-auto text-left">
        <SectionTitle 
          title={t.projects.title}
          icon="https://cdn.lordicon.com/zhiiqoue.json"
        />
        <div style={{ transform: 'scale(0.80)', transformOrigin: 'top center' }} className="mt-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full">
                <ProjectCard
                  project={project}
                  language={language}
                  titleClassName="text-[#5090f0]" // Uso dello stesso blu del grassetto nell'Overview
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}