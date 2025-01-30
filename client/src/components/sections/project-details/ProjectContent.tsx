
"use client";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { FileEdit, Target, BarChart3, Trophy, Wrench, Mail, BookOpen, Search, X } from "lucide-react";
import { projectDetailsTranslations as t } from "@/data/translations/projectDetails";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
              <Wrench className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">{project.detailedSections.tools.title[language]}</h2>
            </div>
            <Card className="p-6">
              <p className="text-muted-foreground mb-6">
                {project.detailedSections.tools.description[language]}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.detailedSections.tools.items.map((tool) => (
                  <div
                    key={tool}
                    className="group relative border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 w-fit rounded-xl overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="px-4 py-3 justify-center">
                      <h3 className="font-medium relative z-10 whitespace-nowrap text-center">
                        {tool}
                      </h3>
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
        <Accordion type="single" collapsible className="space-y-4">
          {/* Social Media Section */}
          {project.detailedSections?.strategies?.social && (
            <AccordionItem value="social" className="border rounded-lg hover:bg-accent/50 transition-colors">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-3">
                  <FileEdit className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">
                    {language === 'en' ? 'Social Media & Content Creation' : 'Social Media & Content Creation'}
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <Card className="p-6 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Colonna Sinistra - Contenuto Esistente */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Gestione Contenuti</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        {project.detailedSections.strategies.social[language].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Colonna Destra - Performance */}
                    <div className="space-y-6">
                      {/* Statistiche Social */}
                      <div className="space-y-4">
                        <h3 className="font-semibold text-lg">Performance Social</h3>
                        <div className="grid grid-cols-1 gap-3">
                          <Card className="p-4 bg-blue-50/50">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Facebook</span>
                              <span className="text-green-600">+3.1% YoY</span>
                            </div>
                            <div className="text-2xl font-bold text-blue-600 mt-1">31.203</div>
                            <div className="text-sm text-muted-foreground">follower</div>
                          </Card>

                          <Card className="p-4 bg-pink-50/50">
                            <div className="flex justify-between items-center">
                              <span className="font-medium">Instagram</span>
                              <span className="text-green-600">+44.2% YoY</span>
                            </div>
                            <div className="text-2xl font-bold text-pink-600 mt-1">12.911</div>
                            <div className="text-sm text-muted-foreground">follower</div>
                          </Card>
                        </div>
                      </div>

                      {/* Grafico Interattivo */}
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <LineChart
                            data={[
                              { month: 'Gen', followers: 60000 },
                              { month: 'Feb', followers: 45000 },
                              { month: 'Mar', followers: 30000 },
                              { month: 'Apr', followers: 15000 },
                              { month: 'Mag', followers: 0 },
                              { month: 'Giu', followers: 44115 },
                            ]}
                          >
                            <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Line
                              type="monotone"
                              dataKey="followers"
                              stroke="#2563eb"
                              strokeWidth={2}
                              dot={{ fill: '#2563eb', r: 4 }}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>

                      {/* Metriche Chiave */}
                      <div className="grid grid-cols-3 gap-3">
                        <Card className="p-4 text-center bg-blue-50/50">
                          <div className="text-2xl font-bold text-blue-600">44k+</div>
                          <div className="text-sm text-muted-foreground">Followers</div>
                        </Card>
                        <Card className="p-4 text-center bg-green-50/50">
                          <div className="text-2xl font-bold text-green-600">8.2%</div>
                          <div className="text-sm text-muted-foreground">Engagement</div>
                        </Card>
                        <Card className="p-4 text-center bg-purple-50/50">
                          <div className="text-2xl font-bold text-purple-600">550%</div>
                          <div className="text-sm text-muted-foreground">Growth</div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Email Marketing Section */}
          {project.detailedSections?.strategies?.email && (
            <AccordionItem value="email" className="border rounded-lg hover:bg-accent/50 transition-colors">
              <AccordionTrigger className="px-4 data-[state=open]:bg-accent/20">
                <div className="flex items-center gap-3 w-full">
                  <Mail className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">
                    {language === 'en' ? 'Email Marketing' : 'Email Marketing'}
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <Card className="p-6 mt-4">
                  <ul className="space-y-2 text-muted-foreground">
                    {project.detailedSections.strategies.email[language].map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Objectives Section */}
          {project.detailedSections?.objectives && (
            <AccordionItem value="objectives" className="border rounded-lg hover:bg-accent/50 transition-colors">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-3">
                  <Target className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">{t.projectDetails.objectives[language]}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <Card className="p-6 mt-4">
                  <ul className="space-y-2 text-muted-foreground">
                    {project.detailedSections.objectives[language].map((objective, index) => (
                      <li key={index}>• {objective}</li>
                    ))}
                  </ul>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Content Planning Section */}
          {project.detailedSections?.strategies?.contentPlanning && (
            <AccordionItem value="content-planning" className="border rounded-lg hover:bg-accent/50 transition-colors">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-3">
                  <FileEdit className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">{t.projectDetails.contentPlanning[language]}</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <Card className="p-6 mt-4">
                  <ul className="space-y-2 text-muted-foreground">
                    {project.detailedSections.strategies.contentPlanning[language].map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))}
                  </ul>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Crowdfunding Section */}
          <AccordionItem value="crowdfunding" className="border rounded-lg hover:bg-accent/50 transition-colors">
            <AccordionTrigger className="px-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">{t.projectDetails.crowdfunding[language]}</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <Card className="p-6 mt-4">
                <ul className="space-y-2 text-muted-foreground">
                  {t.projectDetails.crowdfunding.results[language].map((result, index) => (
                    <li key={index}>• {result}</li>
                  ))}
                </ul>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
