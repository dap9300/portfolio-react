"use client";

import { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { FileEdit, Target, BarChart3, Trophy, Wrench, Mail, BookOpen, Search, X, Check } from "lucide-react";
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
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { SiGoogleanalytics, SiGooglesearchconsole, SiGoogletagmanager, SiMailchimp, SiSemrush, SiInstagram, SiTelegram, SiAdobe, SiMeta, SiGoogleads } from 'react-icons/si';
import { IconType } from 'react-icons';

const toolIconMap: Record<string, IconType> = {
  'google-analytics': SiGoogleanalytics,
  'google-search-console': SiGooglesearchconsole,
  'google-tag-manager': SiGoogletagmanager,
  'mailchimp': SiMailchimp,
  'semrush': SiSemrush,
  'instagram': SiInstagram,
  'telegram': SiTelegram,
  'adobe': SiAdobe,
    'meta-ads': SiMeta,
  'google-ads': SiGoogleads
};


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
        {project.technologies && (
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Wrench className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold">Tools & Platforms</h2>
            </div>
            <Card className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.technologies.map((tech) => {
                   const IconComponent = toolIconMap[tech.toLowerCase().replace(/\s+/g, '-')];
                  return (
                    <div
                      key={tech}
                      className="group relative border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 rounded-xl overflow-hidden p-4"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="flex items-center gap-3 relative z-10">
                        {IconComponent && <IconComponent className="w-5 h-5 text-primary" />}
                        <span className="font-medium">{tech}</span>
                      </div>
                    </div>
                  );
                })}
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
        <Accordion type="single" collapsible className="space-y-6">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: 'Aumentare la visibilità online',
                        icon: '✨',
                        achievement: 'Target raggiunto',
                        details: 'Incremento significativo della presenza sui social media e motori di ricerca'
                      },
                      {
                        title: 'Migliorare l\'efficacia della comunicazione degli eventi',
                        icon: '📢',
                        achievement: 'Superato aspettative',
                        details: 'Aumento del 75% nella partecipazione agli eventi promossi'
                      },
                      {
                        title: 'Incrementare il coinvolgimento della community',
                        icon: '🤝',
                        achievement: 'In continua crescita',
                        details: 'Community attiva e engagement rate superiore alla media del settore'
                      },
                      {
                        title: 'Ottimizzare la presenza digitale',
                        icon: '📱',
                        achievement: 'Completato',
                        details: 'Implementazione di una strategia digitale integrata e performante'
                      }
                    ].map((objective, index) => (
                      <div key={index} className="bg-accent/50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="text-2xl">{objective.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-medium mb-2">{objective.title}</h4>
                            <div className="flex items-center gap-2 mb-2">
                              <Check className="w-4 h-4 text-green-500" /> {/* Changed to Check icon */}
                              <span className="text-sm font-medium text-green-600">{objective.achievement}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{objective.details}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Social Media Section */}
          {project.detailedSections?.strategies?.social && (
        <AccordionItem value="social" className="border rounded-lg hover:bg-accent/50 transition-colors">
          <AccordionTrigger className="px-4">
            <div className="flex items-center gap-3">
              <FileEdit className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">
                {language === 'en' ? 'Social Media' : 'Social Media'}
              </h2>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-4">
            <Card className="p-6 mt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column - Text Content */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Gestione Contenuti</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {project.detailedSections.strategies.social[language].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column - Performance Stats */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Performance Social</h3>
                  <div className="space-y-4">
                    {/* Facebook Stats */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Facebook</span>
                        <span className="text-green-600 dark:text-green-400">+3,1% YoY</span>
                      </div>
                      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">31.203</p>
                      <p className="text-sm text-muted-foreground">follower</p>
                    </div>

                    {/* Instagram Stats */}
                    <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Instagram</span>
                        <span className="text-green-600 dark:text-green-400">+44,2% YoY</span>
                      </div>
                      <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">12.911</p>
                      <p className="text-sm text-muted-foreground">follower</p>
                    </div>
                  </div>
                </div>
              </div>

            {/* Growth Chart */}
              <div className="mt-8 h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={[
                    { month: 'Gen', followers: 32000, engagement: 2100 },
                    { month: 'Feb', followers: 34500, engagement: 2300 },
                    { month: 'Mar', followers: 37800, engagement: 2600 },
                    { month: 'Apr', followers: 40200, engagement: 2800 },
                    { month: 'Mag', followers: 42500, engagement: 3100 },
                    { month: 'Giu', followers: 44115, engagement: 3400 }
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="followers" stroke="#2563eb" name="Followers" />
                    <Line type="monotone" dataKey="engagement" stroke="#16a34a" name="Engagement" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Metrics Section Social Media*/}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">44k+</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">8.2%</p>
                  <p className="text-sm text-muted-foreground">Engagement</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">550%</p>
                  <p className="text-sm text-muted-foreground">Growth</p>
                </div>
              </div>
            </Card>
          </AccordionContent>
        </AccordionItem>
          )}

          {/* Pianificazione Contenuti Section */}
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
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div> {/* Bullet personalizzato */}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </AccordionContent>
            </AccordionItem>
          )}

          {/* Email Marketing Section */}
          {project.detailedSections?.strategies?.email && (
            <AccordionItem value="email" className="border rounded-lg hover:bg-accent/50 transition-colors">
              <AccordionTrigger className="px-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">
                    {language === 'en' ? 'Email Marketing' : 'Email Marketing'}
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4">
                <Card className="p-6 mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column - Bullet Points */}
                    <div className="space-y-4">
                      <h3 className="font-semibold text-lg">Attività Email Marketing</h3>
                      <ul className="space-y-2">
                        {[
                          'Newsletter settimanale con contenuti esclusivi',
                          'Campagne DEM per eventi speciali',
                          'Segmentazione del database utenti',
                          'Automazione del funnel di conversione'
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Column - Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Iscritti Newsletter</p>
                        <p className="text-2xl font-bold text-blue-500">44.514</p>
                        <span className="text-green-600 text-base ">+54%</span>
                      </div>
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Tasso di Apertura</p>
                        <p className="text-2xl font-bold text-blue-500">32%</p>
                        <span className="text-muted-foreground text-sm">medio</span>
                      </div>
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Tasso di Click</p>
                        <p className="text-2xl font-bold text-blue-500">12%</p>
                        <span className="text-muted-foreground text-sm">medio</span>
                      </div>
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">Performance YoY</p>
                        <p className="text-2xl font-bold text-blue-500">+28%</p>
                        <span className="text-muted-foreground text-sm">crescita</span>
                      </div>
                    </div>
                  </div>
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
                <div className="space-y-6">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold">FIUMEDENTRO: Una campagna di crowdfunding per rigenerare lo spazio pubblico dei Murazzi</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">Ho coordinato e gestito la campagna di crowdfunding FIUMEDENTRO, un'iniziativa promossa da Magazzino sul Po e Terzo Paesaggio, volta a raccogliere fondi per trasformare gli spazi abbandonati dei Murazzi del Po in un luogo pubblico inclusivo e multispecie. Il progetto ha integrato rigenerazione urbana, sostenibilità e cultura partecipativa.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-accent/50 p-6 rounded-lg">
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-lg font-medium">Fondi Raccolti</span>
                          <span className="text-green-700 text-xl font-bold">€5.597</span>
                        </div>
                        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-500 rounded-full transition-all duration-1000"
                            style={{ width: '85%' }}
                          />
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-3xl font-bold text-blue-500">300+</p>
                          <p className="text-sm text-muted-foreground">Sostenitori Individuali</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-accent/50 p-6 rounded-lg">
                      <h4 className="text-lg font-medium mb-4">Strategia Campagna</h4>
                      <div className="space-y-3">
                        {[
                          'Strategia promozionale multicanale',
                          'Campagna di coinvolgimento community',
                          'Campagna di sensibilizzazione social'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/50 p-6 rounded-lg">
                    <h4 className="font-medium mb-6 text-center">Timeline Campagna</h4>
                    <div className="relative py-8">
                      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted"></div>
                      <div className="grid grid-cols-3 gap-4 relative">
                        {[
                          { stage: 'Lancio', icon: '🚀' },
                          { stage: 'Sviluppo', icon: '📈' },
                          { stage: 'Chiusura', icon: '🎯' }
                        ].map((step) => (
                          <div key={step.stage} className="flex flex-col items-center">
                              <div className="w-12 h-12 bg-background rounded-full border-2 border-blue-500 flex items-center justify-center mb-2 relative z-10 hover:scale-110 transition-transform">
                              <span className="text-xl">{step.icon}</span>
                            </div>
                            <p className="text-sm font-medium text-muted-foreground">{step.stage}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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