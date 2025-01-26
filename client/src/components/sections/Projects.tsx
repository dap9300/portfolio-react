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
      en: "HRX Srl - Digital Marketing | Social Media | Ecommerce optimization",
      it: "HRX Srl - Digital Marketing | Social Media | Ottimizzazione Ecommerce"
    },
    description: {
      en: "Managed digital marketing strategies in the automotive sector, focusing on direct sales through Facebook, Instagram, Google Ads, and email marketing campaigns. Optimized the company's e-commerce for SEO to improve organic positioning and conversions.",
      it: "Ho gestito strategie di marketing digitale nel settore automotive, con focus sulla vendita diretta tramite campagne Facebook, Instagram, Google Ads ed email marketing. Ho ottimizzato l' e-commerce dell'azienda in ottica SEO per migliorare posizionamento organico e conversioni."
    },
    image: "https://images.unsplash.com/photo-1539281358105-021846343570?q=80&w=2574&auto=format&fit=crop",
    technologies: [
      "Social Media Advertising",
      "Social Media Strategy",
      "Social Media Management",
      "Content Creation",
      "Social Media Analytics",
      "Google Analytics",
      "Email Marketing",
      "Ottimizzazione SEO",
      "Ottimizzazione Ecommerce"
    ],
    link: "/project/2"
  },
  {
    id: 3,
    title: {
      en: "Studi Fisioterapici Manunta - Website & SEO Optimization | Social Media",
      it: "Studi Fisioterapici Manunta - Sito Web & Ottimizzazione SEO | Social Media"
    },
    description: {
      en: "Management of digital marketing strategies for a physiotherapy clinic, focusing on Facebook, Instagram, and Google Ads campaigns to increase online bookings and local brand awareness.",
      it: "Gestione delle strategie di marketing digitale per uno studio di fisioterapia, con focus su campagne Facebook, Instagram e Google Ads per aumentare le prenotazioni online e la brand awareness locale"
    },
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2574&auto=format&fit=crop",
    technologies: [
      "Creazione e ottimizzazione Sito Web",
      "Content Creation",
      "Google Analytics"
    ],
    link: "/project/3"
  },
  {
    id: 4,
    title: {
      en: "Digital Trade Capital - Content Strategy & Editorial Management | Technical SEO & Website Optimization | Lead Generation & Contact Management",
      it: "Digital Trade Capital - Content Strategy & Editorial Management | Technical SEO & Website Optimization | Lead Generation & Contact Management"
    },
    description: {
      en: "Managed strategic and operational coordination in a fintech organization, focusing on developing integrated digital strategies, performance optimization, and cross-functional team management.",
      it: "Ho gestito il coordinamento strategico e operativo in un'organizzazione fintech, con un focus sullo sviluppo di strategie digitali integrate, sull'ottimizzazione delle performance e sulla gestione di team cross-funzionali"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2574&auto=format&fit=crop",
    technologies: [
      "Team Management",
      "Editorial Management",
      "Content Strategy",
      "Technical SEO",
      "Google Analytics",
      "Email Marketing",
      "Cross-functional Collaboration"
    ],
    link: "/project/4"
  }
];