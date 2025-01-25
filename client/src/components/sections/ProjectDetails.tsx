import { motion } from "framer-motion";
import { useParams, useLocation } from "wouter";
import { Project, Language } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface ProjectDetailsProps {
  language: Language;
}

const projectData: Project = {
  id: 1,
  title: {
    en: "Digital Marketing Dashboard",
    it: "Dashboard Marketing Digitale"
  },
  description: {
    en: `A comprehensive analytics dashboard designed for digital marketing professionals. This powerful tool helps track campaign performance, monitor ROI, and make data-driven decisions.

Key Features:
• Real-time analytics tracking with customizable KPI widgets
• Campaign performance comparison across multiple platforms
• Advanced data visualization with interactive charts
• Automated report generation and scheduling
• Social media engagement metrics integration`,
    it: `Una dashboard analitica completa progettata per professionisti del marketing digitale. Questo potente strumento aiuta a tracciare le prestazioni delle campagne, monitorare il ROI e prendere decisioni basate sui dati.

Caratteristiche Principali:
• Monitoraggio analitico in tempo reale con widget KPI personalizzabili
• Confronto delle prestazioni delle campagne su più piattaforme
• Visualizzazione avanzata dei dati con grafici interattivi
• Generazione e programmazione automatica dei report
• Integrazione delle metriche di coinvolgimento dei social media`
  },
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js", "PostgreSQL"],
  link: "#"
};

const screenshots = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
];

export function ProjectDetails({ language }: ProjectDetailsProps) {
  const [, setLocation] = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background py-20 px-4"
    >
      <div className="container mx-auto">
        <motion.button
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          onClick={() => setLocation("/#projects")}
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'en' ? 'Back to Projects' : 'Torna ai Progetti'}
        </motion.button>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-12"
        >
          <motion.div variants={fadeInUp} className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              {projectData.title[language]}
            </h1>
            <div className="flex flex-wrap gap-2">
              {projectData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <img
              src={projectData.image}
              alt={projectData.title[language]}
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">
                {language === 'en' ? 'Project Overview' : 'Panoramica del Progetto'}
              </h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {projectData.description[language]}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                {language === 'en' ? 'Project Links' : 'Link del Progetto'}
              </h2>
              <div className="space-y-2">
                <Button variant="outline" className="w-full" onClick={() => window.open(projectData.link, '_blank')}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Live Demo' : 'Demo Dal Vivo'}
                </Button>
                <Button variant="outline" className="w-full">
                  <GitBranch className="w-4 h-4 mr-2" />
                  {language === 'en' ? 'Source Code' : 'Codice Sorgente'}
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-semibold mb-6">
              {language === 'en' ? 'Project Screenshots' : 'Screenshot del Progetto'}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative aspect-video"
                >
                  <img
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
