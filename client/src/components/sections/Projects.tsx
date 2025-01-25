import { motion } from "framer-motion";
import { translations } from "@/lib/translations";
import { Language, Project } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { staggerContainer } from "@/lib/animations";

interface ProjectsProps {
  language: Language;
}

const projects: Project[] = [
  {
    id: 1,
    title: {
      en: "Digital Marketing Dashboard",
      it: "Dashboard Marketing Digitale"
    },
    description: {
      en: "Analytics dashboard for tracking marketing campaigns and ROI",
      it: "Dashboard analitica per monitorare campagne marketing e ROI"
    },
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    link: "#"
  },
  {
    id: 2,
    title: {
      en: "Project Management Tool",
      it: "Strumento di Project Management"
    },
    description: {
      en: "Collaborative project management platform with real-time updates",
      it: "Piattaforma collaborativa di project management con aggiornamenti in tempo reale"
    },
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "WebSocket"],
    link: "#"
  },
  {
    id: 3,
    title: {
      en: "E-commerce Platform",
      it: "Piattaforma E-commerce"
    },
    description: {
      en: "Full-featured online shopping platform with payment integration",
      it: "Piattaforma di shopping online completa con integrazione pagamenti"
    },
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    technologies: ["React", "Express", "MongoDB", "Stripe"],
    link: "#"
  },
  {
    id: 4,
    title: {
      en: "Content Management System",
      it: "Sistema di Gestione Contenuti"
    },
    description: {
      en: "Custom CMS with rich text editing and media management",
      it: "CMS personalizzato con editor di testo ricco e gestione media"
    },
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
    technologies: ["Vue.js", "Node.js", "GraphQL", "AWS"],
    link: "#"
  }
];

export function Projects({ language }: ProjectsProps) {
  const t = translations[language].projects;

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <SectionTitle title={t.title} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
    </section>
  );
}
