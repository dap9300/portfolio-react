// client/src/components/sections/project-details/ProjectContent.tsx
import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";
import { ProjectCarousel } from "./ProjectCarousel";

// Import Magazzino components
import { 
  AccordionObiettivi as MagazzinoObiettivi,
  AccordionSocialMedia as MagazzinoSocialMedia,
  AccordionPianificazioneContenuti as MagazzinoPianificazioneContenuti,
  AccordionEmailMarketing as MagazzinoEmailMarketing,
  AccordionCrowdfunding
} from './magazzino';

// Import HRX components
import {
  HRXObjectivesAccordion,
  HRXSocialMedia,
  HRXPianificazioneContenuti,
  HRXEmailMarketing,
  HRXEcommerce
} from './hrx';

// Import Manunta components
import {
  AccordionObiettivi as ManuntaObiettivi,
  AccordionSocialMedia as ManuntaSocialMedia,
  AccordionPianificazioneContenuti as ManuntaPianificazioneContenuti,
  AccordionEmailMarketing as ManuntaEmailMarketing,
  AccordionServices as ManuntaServices
} from './manunta';

// Import DTC components
import {
  AccordionObiettivi as DTCObiettivi,
  AccordionContentStrategy,
  AccordionLeadGeneration,
  AccordionTeamManagement,
  AccordionAnalytics
} from './dtc';

interface ProjectContentProps {
  project: Project;
  language: Language;
}

export const ProjectContent: FC<ProjectContentProps> = ({ project, language }) => {
  const [selectedImage, setSelectedImage] = useState<ImageDetail | null>(null);
  const [clickedPosition, setClickedPosition] = useState({ x: 0, y: 0 });

  const handleImageClick = (image: ImageDetail, event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setClickedPosition({
      x: event.clientX - rect.left - rect.width / 2,
      y: event.clientY - rect.top - rect.height / 2
    });
    document.body.classList.add('react-zoom-container-open');
    setSelectedImage(image);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove('react-zoom-container-open');
    };
  }, []);

  const renderAccordions = () => {
    switch (project.id) {
      case 2: // HRX Project
        return (
          <Accordion type="single" collapsible className="space-y-6">
            <HRXObjectivesAccordion project={project} language={language} />
            <HRXSocialMedia project={project} language={language} />
            <HRXPianificazioneContenuti project={project} language={language} />
            <HRXEmailMarketing project={project} language={language} />
            <HRXEcommerce project={project} language={language} />
          </Accordion>
        );
      case 3: // Manunta Project
        return (
          <Accordion type="single" collapsible className="space-y-6">
            <ManuntaObiettivi project={project} language={language} />
            <ManuntaSocialMedia project={project} language={language} />
            <ManuntaPianificazioneContenuti project={project} language={language} />
            <ManuntaEmailMarketing project={project} language={language} />
            <ManuntaServices project={project} language={language} />
          </Accordion>
        );
      case 4: // DTC Project
        return (
          <Accordion type="single" collapsible className="space-y-6">
            <DTCObiettivi project={project} language={language} />
            <AccordionAnalytics project={project} language={language} />
            <AccordionContentStrategy project={project} language={language} />
            <AccordionLeadGeneration project={project} language={language} />
            <AccordionTeamManagement project={project} language={language} />
          </Accordion>
        );
      default: // Magazzino Project
        return (
          <Accordion type="single" collapsible className="space-y-6">
            <MagazzinoObiettivi project={project} language={language} />
            <MagazzinoSocialMedia project={project} language={language} />
            <MagazzinoPianificazioneContenuti project={project} language={language} />
            <MagazzinoEmailMarketing project={project} language={language} />
            <AccordionCrowdfunding project={project} language={language} />
          </Accordion>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview and Tools Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Overview Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">
              {language === 'it' ? 'Panoramica del Progetto' : 'Project Overview'}
            </h2>
          </div>
          <Card className="p-6">
            <p className="text-muted-foreground whitespace-pre-line">
              {project.description[language]}
            </p>
          </Card>
        </div>

        {/* Tools Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">
                {language === 'it' ? 'Strumenti e Piattaforme' : 'Tools & Platforms'}
              </h2>
            </div>
            <Card className="p-6">
              <p className="text-muted-foreground mb-6">
                {language === 'it' 
                  ? 'Tecnologie e piattaforme utilizzate in questo progetto'
                  : 'Technologies and platforms used in this project'
                }
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.technologies.social?.concat(
                  project.technologies.web || [],
                  project.technologies.email || []
                ).map((tool, index) => (
                  <div
                    key={index}
                    className="group relative border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 rounded-xl overflow-hidden inline-flex"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
                      <span className="font-medium relative z-10">
                        {tool}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>


      {/* Accordion Sections */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {renderAccordions()}
      </motion.div>

      {/* Image Carousel Section
      <ProjectCarousel /> */}
    </div>
  );
};