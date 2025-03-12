// client/src/components/sections/Projects.tsx
import { useContext, useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
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
  const contentRef = useRef(null);

  // Rileva se siamo su mobile
  const [isMobile, setIsMobile] = useState(false);

  // Usa il hook useInView di framer-motion per rilevare quando la sezione è visibile
  const isInView = useInView(sectionRef, { 
    once: true, 
    amount: isMobile ? 0.1 : 0.3 // Riduce la soglia su mobile per trigger più veloce
  });

  // Verifica se siamo su dispositivo mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Registra la sezione per lo scrolling
  useEffect(() => {
    if (sectionRef.current) {
      registerSection(sectionIndex)(sectionRef.current);
    }
  }, [registerSection, sectionIndex]);

  const t = translations[language];
  const projects = getAllProjects();

  // Stile condizionale per desktop/mobile
  const contentStyle = {
    transformOrigin: 'top center',
    maxWidth: '100%',
    // Scale solo per desktop, non per mobile
    transform: isMobile ? 'none' : 'scale(0.80)'
  };

  // Utilizziamo un variant stagger più veloce per mobile
  const optimizedStaggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isMobile ? 0.1 : 0.3,
        delayChildren: isMobile ? 0.1 : 0.2
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      id="projects"
      className="min-h-screen flex items-center justify-center bg-muted/30 relative z-10 snap-start pt-20 prevent-overflow-x"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: isMobile ? 0.1 : 0.3 }}
    >
      <div className="w-full max-w-9xl mx-auto text-left px-4 sm:px-6">
        <SectionTitle 
          title={t.projects.title}
          icon="https://cdn.lordicon.com/zhiiqoue.json"
          titleClassName="text-[#5090f0]"
        />

        <div 
          ref={contentRef}
          style={contentStyle} 
          className="mt-4 prevent-overflow-x"
        >
          <motion.div
            variants={optimizedStaggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // Più sensibile per mobile
            className="grid grid-cols-1 md:grid-cols-2 gap-4 prevent-overflow-x"
          >
            {projects.map((project) => (
              <motion.div 
                key={project.id} 
                className="w-full"
                variants={sectionVariants}
              >
                <ProjectCard
                  project={project}
                  language={language}
                  titleClassName="text-[#5090f0]"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}