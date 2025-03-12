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
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const zoomedImageRef = useRef<HTMLDivElement>(null);
  const accordionExpandedRef = useRef<boolean>(false);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [visibleItems, setVisibleItems] = useState<number[]>([]); // Inizialmente non caricare nessuna immagine
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Reset zoom and pan when media changes
  useEffect(() => {
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [selectedMedia]);

  // Inizializza il caricamento di tutte le immagini al mount del componente
  useEffect(() => {
    // Precarica tutte le immagini del carosello in background
    mediaDetails.forEach((media, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, media.src]));
      };
      img.src = media.src;
    });

    // Imposta tutte le immagini come visibili
    const allIndices = Array.from({ length: mediaDetails.length }, (_, i) => i);
    setVisibleItems(allIndices);
  }, []);

  // Gestione del prefetch delle immagini
  useEffect(() => {
    const prefetchNextItems = () => {
      // Prefetch delle prossime immagini che non sono ancora state caricate
      visibleItems.forEach(index => {
        // Carica l'immagine successiva in sequenza
        const nextIndex = (index + 1) % mediaDetails.length;
        const media = mediaDetails[nextIndex];

        if (!loadedImages.has(media.src)) {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, media.src]));
          };
          img.src = media.src;
        }
      });
    };

    prefetchNextItems();
  }, [visibleItems, loadedImages]);

  // Gestire l'espansione dell'accordion per caricare le immagini
  const handleAccordionStateChange = (isOpen: boolean) => {
    accordionExpandedRef.current = isOpen;

    // Se l'accordion è aperto, caricare tutte le immagini
    if (isOpen) {
      // Carica tutti gli elementi immediatamente
      const allIndices = Array.from({ length: mediaDetails.length }, (_, i) => i);
      setVisibleItems(allIndices);
    }
  };

  // Funzione per precaricare l'immagine a piena risoluzione
  const preloadFullImage = (media: MediaDetail) => {
    return new Promise<void>((resolve) => {
      // Se l'immagine è già stata caricata, risolvi immediatamente
      if (loadedImages.has(media.src)) {
        resolve();
        return;
      }

      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, media.src]));
        resolve();
      };
      img.onerror = () => {
        // In caso di errore, risolvere comunque per non bloccare l'UI
        resolve();
      };
      img.src = media.src;
    });
  };

  const handleMediaClick = async (media: MediaDetail) => {
    document.body.classList.add('react-zoom-container-open');

    // Inizia a mostrare la modalità zoom con un possibile indicatore di caricamento
    setSelectedMedia(media);

    // Precarica l'immagine a piena risoluzione
    await preloadFullImage(media);
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

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  };

  const renderMedia = (media: MediaDetail, index: number) => {
    const isHovered = hoverIndex === index;
    const isLoaded = loadedImages.has(media.src);

    return (
      <div 
        ref={el => mediaRefs.current[index] = el}
        className="relative cursor-zoom-in h-full"
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        <img
          src={media.src}
          alt={media.title}
          className="w-full h-full object-cover rounded-lg"
          loading="lazy"
          onLoad={() => {
            setLoadedImages(prev => new Set([...prev, media.src]));
          }}
          width="400" // Dimensioni esplicite per aiutare il browser
          height="400"
        />

        {!isLoaded && (
          <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700 animate-pulse rounded-lg flex items-center justify-center">
            <div className="text-center text-neutral-500 dark:text-neutral-400">
              <div className="w-8 h-8 border-4 border-t-primary border-neutral-300 rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-sm">Caricamento...</p>
            </div>
          </div>
        )}

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
    <AccordionItem 
      value="content-planning" 
      className="border rounded-lg hover:bg-accent/50 transition-colors"
      onExpandedChange={handleAccordionStateChange}
    >
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <FileEdit className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{t.projectDetails.contentPlanning[language]}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          {/* Layout responsive: flex-col su mobile, flex-row su desktop */}
          <div className="flex flex-col md:flex-row flex-wrap">
            {/* Left section with bullet points at full width on mobile, 50% on desktop */}
            <div className="w-full md:w-1/2 md:pr-4 mb-6 md:mb-0">
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

            {/* Carousel section at full width on mobile, 50% on desktop */}
            <div className="w-full md:w-1/2 md:pl-4" ref={carouselRef}>
              <Carousel className="w-full h-full">
                <CarouselContent className="h-full">
                  {mediaDetails.map((media, index) => (
                    <CarouselItem key={index} className="basis-full h-full p-0">
                      <motion.div
                        layoutId={`media-${media.src}`}
                        onClick={() => handleMediaClick(media)}
                        className="relative rounded-lg overflow-hidden flex justify-center items-center h-full mx-auto"
                        style={{ width: "98%" }}
                      >
                        {renderMedia(media, index)}
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-1" />
                <CarouselNext className="right-1" />
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
                  {loadedImages.has(selectedMedia.src) ? (
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
                  ) : (
                    <div className="flex items-center justify-center w-[90vw] h-[70vh] bg-neutral-900">
                      <div className="w-16 h-16 border-4 border-neutral-300 border-t-primary rounded-full animate-spin"></div>
                    </div>
                  )}
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
              {loadedImages.has(selectedMedia.src) && (
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
              )}

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