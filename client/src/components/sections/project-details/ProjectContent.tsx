// client/src/components/sections/project-details/ProjectContent.tsx
"use client";

import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { projectDetailsTranslations as t } from "./magazzino/content.it";
import { Accordion } from "@/components/ui/accordion";
import { ProjectCarousel } from "./ProjectCarousel";

// Import Magazzino components
import { 
  AccordionObiettivi,
  AccordionSocialMedia,
  AccordionPianificazioneContenuti,
  AccordionEmailMarketing,
  AccordionCrowdfunding
} from './magazzino';

// Import HRX components
import {
  HRXObjectivesAccordion,
  HRXSocialMedia,
  HRXPianificazioneContenuti,
  HRXEmailMarketing,
  HRXEcommerce
} from '@/components/sections/project-details/hrx';

import { getProjectComponents } from '@/lib/projects';  // Add this import

interface ImageDetail {
  src: string;
  title: string;
  subtitle: string;
}

const imageDetails: ImageDetail[] = [
  { 
    src: '/assets/newsocial2.png',
    title: "Instagram Feed",
    subtitle: "Esempio di feed Instagram"
  },
  {
    src: '/assets/newsocial3.png',
    title: "Instagram Feed",
    subtitle: ""
  },
  {
    src: '/assets/crescitafollower2.png',
    title: "Crescita Pagina Instagram",
    subtitle: "ott 2021 - dic 2023"
  },
  {
    src: '/assets/growth.png',
    title: "Crescita Pagina Instagram",
    subtitle: ""
  }
];

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
    const AccordionComponents = getProjectComponents(project.id.toString());
    return (
      <Accordion type="single" collapsible className="space-y-6">
        {AccordionComponents.map((Component, index) => (
          <Component key={index} project={project} language={language} />
        ))}
      </Accordion>
    );
  };

  return (
    <div className="space-y-8">
      {/* Overview and Tools Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Overview Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold">{t.projectDetails.overview[language]}</h2>
          </div>
          <Card className="p-6">
            <p className="text-muted-foreground whitespace-pre-line">
              {project.description[language]}
            </p>
          </Card>
        </div>

        {/* Tools Section */}
        {project.detailedSections?.tools && (
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-semibold">{project.detailedSections.tools.title[language]}</h2>
            </div>
            <Card className="p-6">
              <p className="text-muted-foreground mb-6">
                {project.detailedSections.tools.description[language]}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.detailedSections.tools.items.map((tool, index) => (
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
        )}
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
      <ProjectCarousel />
    </div>
  );
};