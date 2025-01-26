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
      en: "B2B LinkedIn Growth Strategy",
      it: "Strategia di Crescita LinkedIn B2B"
    },
    description: {
      en: "Implemented comprehensive LinkedIn marketing strategy for a B2B tech company, achieving 180% increase in lead generation and 300% growth in profile visits.",
      it: "Implementato una strategia di marketing LinkedIn completa per un'azienda tech B2B, ottenendo un aumento del 180% nella generazione di lead e 300% di crescita nelle visite al profilo."
    },
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2574&auto=format&fit=crop",
    technologies: ["LinkedIn Marketing", "B2B Strategy", "Content Marketing", "Lead Generation"],
    link: "/project/3"
  },
  {
    id: 4,
    title: {
      en: "Restaurant Digital Presence Optimization",
      it: "Ottimizzazione Presenza Digitale Ristorante"
    },
    description: {
      en: "Revamped digital presence for a high-end restaurant chain, increasing online reservations by 200% and achieving 150% growth in social media engagement.",
      it: "Rinnovato la presenza digitale per una catena di ristoranti di alta fascia, aumentando le prenotazioni online del 200% e ottenendo una crescita del 150% nel coinvolgimento sui social media."
    },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2574&auto=format&fit=crop",
    technologies: ["Local SEO", "Social Media Marketing", "Review Management", "Content Strategy"],
    link: "/project/4"
  }
];