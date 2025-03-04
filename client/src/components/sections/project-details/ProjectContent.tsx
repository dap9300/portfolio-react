// client/src/components/sections/project-details/ProjectContent.tsx
import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { BookOpen, Cog, Calendar } from "lucide-react";
import { Accordion } from "@/components/ui/accordion";


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
 // HRXEmailMarketing, >>> commentato questo e pezzo più giù. togli commenti per rimettere accordion marketing
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

interface ImageDetail {
  src: string;
  alt?: string;
}

export const ProjectContent: FC<ProjectContentProps> = ({ project, language }) => {
  const [selectedImage, setSelectedImage] = useState<ImageDetail | null>(null);
  const [clickedPosition, setClickedPosition] = useState({ x: 0, y: 0 });

  const translations = {
    projectPeriod: {
      en: 'Project Period',
      it: 'Durata Progetto'
    }
  };

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
            {/* <HRXEmailMarketing project={project} language={language} /> */}
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
            <BookOpen className="w-7 h-7 text-primary" />
            <h2 className="text-2xl font-semibold">
              {language === 'it' ? 'Panoramica del Progetto' : 'Project Overview'}
            </h2>
          </div>
          <Card className="p-6">
            {/* Project period badge */}
            {project.period && (
              <div className="mb-4 flex items-center">
                
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {translations.projectPeriod[language]}: {project.period[language]}
                </span>
              </div>
            )}
            <p className="text-muted-foreground whitespace-pre-line">
              {project.description[language]}
            </p>
          </Card>
        </div>

        {/* Strumenti e Piattaforme Section (Tools) */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Cog className="w-7 h-7 text-primary" />
              <h2 className="text-2xl font-semibold">
                {language === 'it' ? 'Strumenti e Piattaforme' : 'Tools & Platforms'}
              </h2>
            </div>
            <Card className="p-6">
              {/* <p className="text-muted-foreground mb-6">
                {language === 'it' 
                  ? '/* Tecnologie e piattaforme utilizzate in questo progetto ' 
                  : 'Technologies and platforms used in this project'
                }
              </p> */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.technologies.map((tool, index) => (
                  <div
                    key={tool.name}
                    className="group relative border border-gray-200 transition-shadow shadow-sm hover:shadow-md rounded-xl overflow-hidden inline-flex"
                  >
                    <div className="px-4 py-3 flex items-center gap-2 whitespace-nowrap">
                      {tool.Icon && <tool.Icon className="w-4 h-4" />}
                      <span className="font-medium relative z-10">
                        {tool.name}
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

      {/* Image Carousel Section */}

    </div>
  );
};