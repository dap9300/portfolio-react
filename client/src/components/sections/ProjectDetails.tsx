import { motion } from "framer-motion";
import { useLocation, useParams } from "wouter";
import { Language } from "@/types";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { LanguageSwitch } from "@/components/shared/LanguageSwitch";
import { ArrowLeft, ArrowUpRight, Users, TrendingUp, Calendar, Globe, Target, Search, Star, FileEdit, BarChart3, Wrench, Trophy } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useMemo } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { projectsData, projectMetrics, projectImages, translations } from "./ProjectDetailsContent";

interface ProjectDetailsProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

interface ImageCarouselProps {
  images: string[];
  language: Language;
}

function ImageCarousel({ images, language }: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 relative">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => emblaApi?.scrollPrev()}
          className="px-3 py-2"
        >
          {translations.navigation.previous[language]}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => emblaApi?.scrollNext()}
          className="px-3 py-2"
        >
          {translations.navigation.next[language]}
        </Button>
      </div>
    </div>
  );
}

export function ProjectDetails({ language, onLanguageChange }: ProjectDetailsProps) {
  const [, setLocation] = useLocation();
  const params = useParams();
  const id = params?.id ?? "1";

  const projectData = useMemo(() => projectsData[id], [id]);
  const metrics = useMemo(() => projectMetrics[id], [id]);
  const images = projectImages[id as keyof typeof projectImages] || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!projectData || !metrics) {
    setLocation("/");
    return null;
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "rjzlcjqi": return Users;
      case "gkosxwgv": return TrendingUp;
      case "mzjnwzka": return Calendar;
      case "ehdfdiha": return Globe;
      case "lupuorrc": return Target;
      case "msoeawqm": return Search;
      case "yqoxyxia": return Star;
      default: return Users;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-background"
      key={id}
    >
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <ThemeToggle />
        <LanguageSwitch currentLanguage={language} onLanguageChange={onLanguageChange} />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <div className="h-[60vh] relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${projectData.image})`,
              backgroundAttachment: "fixed"
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div className="text-center max-w-4xl px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {projectData.title[language]}
              </h1>
              <div className="flex flex-wrap gap-2 justify-center">
                {projectData.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="container mx-auto max-w-6xl py-12 px-4">
          <motion.button
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            onClick={() => setLocation("/")}
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {translations.back[language]}
          </motion.button>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid gap-8"
          >
            {/* Metrics */}
            <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {metrics.map((metric, index) => {
                const Icon = getIconComponent(metric.icon);
                return (
                  <Card key={index} className="border-2">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <Icon className="w-8 h-8 text-primary" />
                        <ArrowUpRight className="w-5 h-5 text-green-500" />
                      </div>
                      <p className="text-3xl font-bold">{metric.value}</p>
                      <p className="text-muted-foreground">{metric.label[language]}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>

            {/* Overview and Tools */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <FileEdit className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-semibold">
                    {translations.overview[language]}
                  </h2>
                </div>
                <div
                  className="text-muted-foreground whitespace-pre-line"
                  dangerouslySetInnerHTML={{
                    __html: projectData.description[language]
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  }}
                />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Wrench className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-semibold">
                    {translations.tools[language]}
                  </h2>
                </div>
                <div className="space-y-4">
                  {projectData.technologies.map((tech, index) => (
                    <Card key={index} className="p-4">
                      <h3 className="font-medium">{tech}</h3>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Image Gallery */}
            {images.length > 0 && (
              <motion.div variants={fadeInUp}>
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">
                    {translations.gallery[language]}
                  </h3>
                  <ImageCarousel images={images} language={language} />
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}