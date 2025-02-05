"use client";

import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { BookOpen, Search, X } from "lucide-react";
import { projectDetailsTranslations as t } from "./magazzino/content.it";
import { Accordion } from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import Magazzino components
import { 
  AccordionCrowdfunding as MagazzinoCrowdfunding,
  AccordionEmailMarketing as MagazzinoEmailMarketing,
  AccordionObiettivi as MagazzinoObiettivi,
  AccordionPianificazioneContenuti as MagazzinoPianificazioneContenuti,
  AccordionSocialMedia as MagazzinoSocialMedia
} from './magazzino';

// Import HRX components
import {
  HRXObjectivesAccordion,
  HRXSocialMedia,
  HRXPianificazioneContenuti,
  HRXEmailMarketing,
  HRXCrowdfunding
} from './hrx';

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
    if (project.id === 2) { // HRX Project
      return (
        <Accordion type="single" collapsible className="space-y-6">
          <HRXObjectivesAccordion project={project} language={language} />
          <HRXSocialMedia project={project} language={language} />
          <HRXPianificazioneContenuti project={project} language={language} />
          <HRXEmailMarketing project={project} language={language} />
          <HRXCrowdfunding project={project} language={language} />
        </Accordion>
      );
    } else { // Magazzino Project (default)
      return (
        <Accordion type="single" collapsible className="space-y-6">
          <MagazzinoObiettivi project={project} language={language} />
          <MagazzinoSocialMedia project={project} language={language} />
          <MagazzinoPianificazioneContenuti project={project} language={language} />
          <MagazzinoEmailMarketing project={project} language={language} />
          <MagazzinoCrowdfunding project={project} language={language} />
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
                      <span className="text-2xl">{typeof tool === 'string' ? tool : tool.name}</span>
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
      <div className="w-full max-w-3xl mx-auto">
        <Carousel className="w-full" opts={{ align: "start" }}>
          <CarouselContent>
            {imageDetails.map((image, index) => (
              <CarouselItem key={index} className="basis-auto">
                <motion.div
                  layoutId={`image-${image.src}`}
                  onClick={(e) => handleImageClick(image, e)}
                  className={`relative rounded-lg overflow-hidden flex justify-center items-center bg-neutral-100 dark:bg-neutral-800 ${
                    !selectedImage ? 'cursor-zoom-in' : 'pointer-events-none'
                  }`}
                >
                  <motion.div
                    className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={!selectedImage ? { opacity: 1 } : undefined}
                  >
                    <Search className="w-12 h-12 text-white mb-2" />
                    <div className="text-center text-white">
                      <h3 className="font-semibold text-lg">{image.title}</h3>
                      <p className="text-sm">{image.subtitle}</p>
                    </div>
                  </motion.div>
                  <img
                    src={image.src}
                    alt={`Social Media Image ${index + 1}`}
                    className="w-auto h-auto max-w-[300px] max-h-[300px] object-scale-down"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Zoom Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 w-full h-full bg-black/90 backdrop-blur-xl z-[9999] flex items-center justify-center cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
            style={{
              width: '100vw',
              height: '100vh',
              left: 0,
              top: 0,
              margin: 0,
              padding: 0
            }}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
            >
              <div className="flex flex-col items-center gap-4">
                <img
                  src={selectedImage.src}
                  alt="Zoomed Image"
                  className="max-w-[90vw] max-h-[70vh] object-contain"
                />
                <div className="text-center text-white">
                  <h3 className="text-2xl font-semibold mb-1">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.subtitle && (
                    <p className="text-lg text-muted-foreground">
                      {selectedImage.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <X className="w-8 h-8 text-white cursor-pointer" onClick={() => setSelectedImage(null)} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};