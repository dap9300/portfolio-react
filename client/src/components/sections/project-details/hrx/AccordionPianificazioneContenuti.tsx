// Accordion Social Media
import { FC, useState, useRef, useEffect } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { FileEdit, Search, X, ClipboardList } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";

interface MediaDetail {
  src: string;
  title: string;
  subtitle: string;
}

interface HRXPianificazioneContenutiProps {
  project: Project;
  language: Language;
}

const HRXPianificazioneContenuti: FC<HRXPianificazioneContenutiProps> = ({ project, language }) => {
  const mediaDetails: MediaDetail[] = [
    { 
      src: "/assets/hrx-feed1.webp",
      title: "HRX Social",
      subtitle: "Esempio di feed Instagram"
    },
    {
      src: "/assets/hrx-social2.webp",
      title: "HRX Social",
      subtitle: "Post engagement"
    },
    {
      src: "/assets/hrx-social4.webp",
      title: "HRX Social",
      subtitle: "Post promozionale"
    }
  ];

  const [selectedMedia, setSelectedMedia] = useState<MediaDetail | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  // Remove all drag-related functionality
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const zoomedImageRef = useRef<HTMLDivElement>(null);

  // Reset zoom and pan when media changes
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [selectedMedia]);

  const handleMediaClick = (media: MediaDetail) => {
    document.body.classList.add('react-zoom-container-open');
    setSelectedMedia(media);
  };

  const handleClose = () => {
    document.body.classList.remove('react-zoom-container-open');
    setSelectedMedia(null);
  };

  // Handle zoom on image click - zoom dove l'utente clicca
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    // Riferimento all'elemento immagine
    const imgElement = e.currentTarget as HTMLImageElement;
    const rect = imgElement.getBoundingClientRect();

    // Calcola la posizione relativa del click sull'immagine
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Centro dell'immagine
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Solo due livelli di zoom: normale (1x) e ingrandito (2x)
    if (zoomLevel === 1) {
      // Imposta lo zoom a 200%
      setZoomLevel(2);

      // Calcola lo spostamento per centrare il punto cliccato
      // Nota: dividiamo per zoomLevel per compensare l'effetto dello scale sulla posizione
      setPanPosition({
        x: (centerX - x),
        y: (centerY - y)
      });
    } else {
      // Se siamo già ingranditi, torniamo a zoom normale
      setZoomLevel(1);
      setPanPosition({ x: 0, y: 0 });
    }
  };

  // We'll keep the double click handler, but remove all drag functionality
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const renderMedia = (media: MediaDetail, index: number) => {
    const isHovered = hoverIndex === index;

    return (
      <div 
        className="relative cursor-zoom-in h-full"
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        <img
          src={media.src}
          alt={media.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div 
          className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-opacity duration-300 rounded-lg"
          style={{
            opacity: isHovered ? 1 : 0
          }}
        >
          <Search className="w-12 h-12 text-white mb-2" />
          <div className="text-center text-white">
            <h3 className="font-semibold text-lg">{media.title}</h3>
            <p className="text-sm">{media.subtitle}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AccordionItem value="content-planning" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <FileEdit className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{t.projectDetails.contentPlanning[language]}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="flex flex-wrap">
            {/* Left section with bullet points at 50% width */}
            <div className="w-1/2 pr-4">
              {/* Title with icon */}
              <div className="flex items-center gap-2 mb-4">
                <ClipboardList className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Panoramica</h3>
              </div>
              {/* Bullet points with new text and styling */}
              <ul className="space-y-4 text-muted-foreground">
                {[
                  'Sviluppo e gestione di un piano editoriale mensile in linea con gli obiettivi di marketing e il target di riferimento',
                  'Creazione di contenuti ottimizzati per le diverse piattaforme',
                  'Analisi delle performance dei contenuti attraverso KPI chiave per ottimizzare le strategie di comunicazione',
                  'Collaborazione e coordinamento con il team grafico e reparti interni per garantire coerenza nell\'identità visiva e supportare il lancio di nuovi prodotti'
                ].map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Carousel section at right 50% width */}
            <div className="w-1/2 pl-4">
            <Carousel className="w-full h-full">
              <CarouselContent className="px-2 h-full">
                {mediaDetails.map((media, index) => (
                  <CarouselItem key={index} className="basis-1/2 pl-1 pr-1 h-full">
                    <motion.div
                      layoutId={`media-${media.src}`}
                      onClick={() => handleMediaClick(media)}
                      className="relative rounded-lg overflow-hidden flex justify-center items-center h-full"
                    >
                      {renderMedia(media, index)}
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
          </div>
        </Card>
      </AccordionContent>

      {/* Zoomed view modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[9999] flex items-center justify-center"
            onClick={handleClose}
            style={{
              width: '100vw',
              height: '100vh',
              left: 0,
              top: 0,
              margin: 0,
              padding: 0,
              cursor: 'zoom-out'
            }}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              onClick={handleClose}
            >
              <div 
                className="flex flex-col items-center gap-4"
                onClick={e => e.stopPropagation()}
              >
                <div 
                  className="overflow-hidden relative"
                  ref={zoomedImageRef}
                >
                  <img
                    src={selectedMedia.src}
                    alt="Zoomed Media"
                    className="max-w-[90vw] max-h-[70vh] object-contain"
                    style={{
                      transform: `scale(${zoomLevel}) translate(${panPosition.x / zoomLevel}px, ${panPosition.y / zoomLevel}px)`,
                      transformOrigin: 'center center',
                      cursor: zoomLevel > 1 ? 'zoom-out' : 'zoom-in'
                    }}
                    onClick={handleImageClick}
                    onDoubleClick={handleDoubleClick}
                    draggable="false"
                  />
                </div>
                <div className="text-center text-white">
                  <h3 className="text-2xl font-semibold mb-1">
                    {selectedMedia.title}
                  </h3>
                  {selectedMedia.subtitle && (
                    <p className="text-lg text-white/70">
                      {selectedMedia.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Indicatore di zoom modificato: centrato sopra l'immagine con sfondo bianco crema */}
              <div 
                className="absolute text-xs font-medium px-2 py-0.5 rounded-sm bg-cream text-gray-800 border border-gray-300 shadow-sm backdrop-blur-sm pointer-events-none"
                style={{
                  left: "50%",
                  top: `calc(44% - ${zoomedImageRef.current?.offsetHeight ? (zoomedImageRef.current.offsetHeight / 2) + 20 : 160}px)`,
                  transform: "translateX(-50%)",
                  transition: 'opacity 0.2s ease-in-out',
                  opacity: zoomLevel > 1 ? 0.95 : 0.7,
                  backgroundColor: "#fffaf0" // sfondo bianco crema
                }}
              >
                {Math.round(zoomLevel * 100)}%
              </div>

              {/* Close button moved to the top right */}
              <button 
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
                onClick={handleClose}
              >
                <X className="w-8 h-8 text-white" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AccordionItem>
  );
};

export default HRXPianificazioneContenuti;