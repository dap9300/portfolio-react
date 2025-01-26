import { motion } from "framer-motion";
import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { staggerContainer, sectionVariants } from "@/lib/animations";

interface ProjectsProps {
  language: Language;
}

export function Projects({ language }: ProjectsProps) {
  const t = translations[language].projects;

  return (
    <motion.section 
      id="projects" 
      className="min-h-screen py-20 px-4 bg-muted/30"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto">
        <SectionTitle 
          title={t.title}
          icon="https://cdn.lordicon.com/iltqorsz.json"
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

const projects = [
  {
    id: 1,
    title: {
      en: "Magazzino sul Po - Digital Marketing Strategy",
      it: "Magazzino sul Po - Strategia di Marketing Digitale"
    },
    description: {
      en: "Led digital transformation and social media growth for a cultural venue, achieving 400% monthly growth in engagement and expanding social media following to 13,000+ followers.",
      it: "Guidato la trasformazione digitale e la crescita sui social media per un centro culturale, ottenendo una crescita mensile del 400% nel coinvolgimento e espandendo i follower a oltre 13.000."
    },
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574&auto=format&fit=crop",
    technologies: ["Social Media Strategy", "Content Creation", "Analytics", "Event Marketing"],
    link: "/project/1"
  },
  {
    id: 2,
    title: {
      en: "Meta Ads Campaign Optimization",
      it: "Ottimizzazione Campagne Meta Ads"
    },
    description: {
      en: "Optimized Meta Ads campaigns for a luxury fashion brand, resulting in a 320% ROAS increase and 45% reduction in customer acquisition costs through advanced targeting and creative testing.",
      it: "Ottimizzato campagne Meta Ads per un brand di moda di lusso, ottenendo un aumento del 320% nel ROAS e una riduzione del 45% nei costi di acquisizione clienti attraverso targeting avanzato e test creativi."
    },
    image: "https://images.unsplash.com/photo-1496115965489-21be7e6e59a0?q=80&w=2574&auto=format&fit=crop",
    technologies: ["Meta Ads", "A/B Testing", "Performance Marketing", "Analytics"],
    link: "/project/2"
  },
  {
    id: 3,
    title: {
      en: "SaaS Growth Marketing Strategy",
      it: "Strategia di Growth Marketing SaaS"
    },
    description: {
      en: "Developed and executed comprehensive growth strategy for a B2B SaaS platform, achieving 180% increase in qualified leads and reducing CAC by 40% through optimized funnel and content strategy.",
      it: "Sviluppato ed eseguito una strategia di crescita completa per una piattaforma B2B SaaS, ottenendo un aumento del 180% nei lead qualificati e riducendo il CAC del 40% attraverso l'ottimizzazione del funnel e la strategia dei contenuti."
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2574&auto=format&fit=crop",
    technologies: ["Growth Marketing", "Marketing Automation", "SEO", "Content Strategy"],
    link: "/project/3"
  },
  {
    id: 4,
    title: {
      en: "E-commerce Performance Marketing",
      it: "Performance Marketing E-commerce"
    },
    description: {
      en: "Led performance marketing initiatives for a premium D2C brand, resulting in 250% revenue growth through integrated Google & Meta campaigns and email marketing automation.",
      it: "Guidato iniziative di performance marketing per un brand D2C premium, ottenendo una crescita del fatturato del 250% attraverso campagne integrate Google e Meta e automazione del marketing via email."
    },
    image: "https://images.unsplash.com/photo-1556742393-d75f5498738e?q=80&w=2574&auto=format&fit=crop",
    technologies: ["Google Ads", "Meta Ads", "Email Marketing", "Analytics"],
    link: "/project/4"
  }
];