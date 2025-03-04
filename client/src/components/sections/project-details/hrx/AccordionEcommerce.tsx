import { FC, useState, useRef, useEffect } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Store, Search, X } from "lucide-react";
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

interface AccordionEcommerceProps {
  project: Project;
  language: Language;
}

export const AccordionEcommerce: FC<AccordionEcommerceProps> = ({ project, language }) => {
  // Definisco un fallback per il titolo nel caso in cui le traduzioni non siano disponibili
  const sectionTitle = t?.projectDetails?.ecommerce?.[language] || "E-commerce";

  const mediaDetails: MediaDetail[] = [
    { 
      src: "/assets/hrx-full-sito1.webp",
      title: "Sito HRX",
      subtitle: "Homepage E-commerce"
    },
    {
      src: "/assets/hrx-full-sito2.webp",
      title: "Sezione Prodotti",
      subtitle: "Layout con prodotti e configuratore"
    },
    {
      src: "/assets/hrx-configuratore.webp",
      title: "Pagina configuratore",
      subtitle: "Un configuratore altamente personalizzabile per i prodotti HRX"
    },
    {
      src: "/assets/hrx-guanti.webp",
      title: "Pagina Prodotto",
      subtitle: "Esempio di scheda prodotto con descrizione e combinazioni"
    }
  ];

  const [selectedMedia, setSelectedMedia] = useState<MediaDetail | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [accordionExpanded, setAccordionExpanded] = useState<boolean>(false);
  const zoomedImageRef = useRef<HTMLDivElement>(null);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Precarica tutte le immagini all'avvio del componente
  useEffect(() => {
    // Precarica le immagini solo quando l'accordion è espanso
    if (accordionExpanded) {
      mediaDetails.forEach((media, index) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, media.src]));
        };
        img.src = media.src;
      });
    }
  }, [accordionExpanded]);

  // Reset zoom and pan when media changes
  useEffect(() => {
    // Zoom a 1x per visualizzare l'intera immagine
    setZoomLevel(1);
    setPanPosition({ x: 0, y: 0 });
  }, [selectedMedia]);

  // Gestione dell'apertura/chiusura dell'accordion
  const handleAccordionStateChange = (isOpen: boolean) => {
    setAccordionExpanded(isOpen);
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

  // Handle zoom on image click - single level zoom only
  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    // Fisso zoom a 2x senza possibilità di ulteriore zoom
    setZoomLevel(2);

    // Centra l'immagine
    setPanPosition({ x: 0, y: 0 });
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
          style={{ aspectRatio: "16/9" }}
          loading="lazy"
          onLoad={() => {
            setLoadedImages(prev => new Set([...prev, media.src]));
          }}
          width="800" // Dimensioni esplicite per aiutare il browser
          height="450"
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

  // Lista dei punti elenco
  const bulletPoints = [
    "Coordinamento delle fasi di implementazione in collaborazione con una software house",
    "Aggiornamento e ottimizzazione delle schede prodotto per una migliore user experience e SEO",
    "Ottimizzazione delle landing page in sinergia con le strategie Google Ads per massimizzare le conversioni",
    "Gestione del caricamento prodotti e aggiornamento dell'inventario per garantire accuratezza e disponibilità",
    "Ideazione e sviluppo di strategie promozionali per incrementare le vendite online"
  ];

  return (
    <AccordionItem 
      value="ecommerce" 
      className="border rounded-lg hover:bg-accent/50 transition-colors"
      onExpandedChange={handleAccordionStateChange}
    >
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <ShoppingCart className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{sectionTitle}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Title and Bullet Points */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">
                <div className="flex items-center gap-2">
                  <Store className="w-5 h-5 text-primary" />
                  <span>Ottimizzazione E-commerce</span>
                </div>
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Carousel with single image */}
            <div className="h-full min-h-[300px]" ref={carouselRef}>
              <Carousel className="w-full h-full">
                <CarouselContent className="h-full">
                  {mediaDetails.map((media, index) => (
                    <CarouselItem key={index} className="h-full">
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
                  {loadedImages.has(selectedMedia.src) ? (
                    <img
                      src={selectedMedia.src}
                      alt="Zoomed Media"
                      className="max-w-[90vw] max-h-[70vh] object-contain"
                      style={{
                        transform: `scale(${zoomLevel})`,
                        transformOrigin: 'center center',
                        cursor: 'zoom-out'
                      }}
                      onClick={handleClose}
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

              {/* Indicatore di zoom nella visualizzazione a schermo intero */}
              {loadedImages.has(selectedMedia.src) && zoomLevel > 1 && (
                <div 
                  className="absolute text-xs font-medium px-2 py-0.5 rounded-sm bg-white/80 text-gray-800 border border-gray-300 shadow-sm pointer-events-none"
                  style={{
                    left: "50%",
                    bottom: "10%",
                    transform: "translateX(-50%)",
                    transition: 'opacity 0.2s ease-in-out',
                    opacity: 0.8
                  }}
                >
                  {Math.round(zoomLevel * 100)}%
                </div>
              )}

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

export default AccordionEcommerce;