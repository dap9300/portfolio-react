import { FC, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface MediaDetail {
  src: string;
  title: string;
  subtitle: string;
}

const mediaDetails: MediaDetail[] = [
  {
    src: '/assets/maga-sito-web-analytics1.webp',
    title: "Analytics Overview",
    subtitle: "Panoramica delle analitiche del sito",
  },
  {
    src: '/assets/maga-sito-web-analytics2.webp',
    title: "Analytics Details",
    subtitle: "Dettaglio delle metriche",
  },
  {
    src: '/assets/maga-sito-web-analytics4.webp',
    title: "Analytics Insights",
    subtitle: "Approfondimento dei dati",
  }
];

export const CarouselSitoWeb: FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaDetail | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [visibleItems, setVisibleItems] = useState<number[]>([0]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mediaRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Impostazione dell'intersection observer per il lazy loading
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = mediaRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && !visibleItems.includes(index)) {
            setVisibleItems(prev => [...prev, index]);
          }
        }
      });
    }, {
      root: null,
      rootMargin: '200px',
      threshold: 0.1
    });

    mediaRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [mediaRefs.current]);

  // Gestione del prefetch delle immagini
  useEffect(() => {
    const prefetchNextItems = () => {
      visibleItems.forEach(index => {
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

  const handleClose = () => {
    document.body.classList.remove('react-zoom-container-open');
    setSelectedMedia(null);
  };

  const renderMedia = (media: MediaDetail, index: number) => {
    const isHovered = hoverIndex === index;
    const shouldLoad = visibleItems.includes(index);

    return (
      <div 
        ref={el => mediaRefs.current[index] = el}
        className="relative cursor-zoom-in w-full h-full"
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        {shouldLoad ? (
          <>
            <img
              src={media.src}
              alt={media.title}
              className="w-full h-full object-contain max-w-full"
              loading="lazy"
              onLoad={() => {
                setLoadedImages(prev => new Set([...prev, media.src]));
              }}
              width="800"
              height="400"
            />
            <div 
              className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center transition-opacity duration-300"
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
          </>
        ) : (
          <div className="w-full h-full bg-neutral-200 dark:bg-neutral-700 animate-pulse flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-neutral-300 dark:bg-neutral-600 mb-4"></div>
            <div className="h-4 bg-neutral-300 dark:bg-neutral-600 rounded w-1/3 mb-2"></div>
            <div className="h-3 bg-neutral-300 dark:bg-neutral-600 rounded w-1/2"></div>
          </div>
        )}
      </div>
    );
  };

  // Funzione per precaricare l'immagine selezionata a piena risoluzione
  const preloadFullImage = (media: MediaDetail) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => {
        resolve();
      };
      img.src = media.src;
    });
  };

  // Gestione modalità di zoom con precaricamento
  const handleZoomClick = async (media: MediaDetail) => {
    document.body.classList.add('react-zoom-container-open');
    setSelectedMedia(media);
    await preloadFullImage(media);
  };

  return (
    <div className="w-full overflow-hidden" ref={carouselRef}>
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: true
        }}
      >
        <CarouselContent className="max-w-full">
          {mediaDetails.map((media, index) => (
            <CarouselItem key={index} className="w-full pl-0">
              <motion.div
                layoutId={`media-${media.src}`}
                onClick={() => handleZoomClick(media)}
                className="relative rounded-lg overflow-hidden flex justify-center items-center bg-neutral-100 dark:bg-neutral-800 h-[300px] sm:h-[400px]"
              >
                {renderMedia(media, index)}
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 w-full h-full bg-black/90 backdrop-blur-xl z-[9999] flex items-center justify-center cursor-zoom-out"
            onClick={handleClose}
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
              onClick={handleClose}
            >
              <div className="flex flex-col items-center gap-4 px-4">
                <img
                  src={selectedMedia.src}
                  alt="Zoomed Media"
                  className="max-w-[90vw] max-h-[70vh] object-contain"
                />
                <div className="text-center text-white">
                  <h3 className="text-2xl font-semibold mb-1">
                    {selectedMedia.title}
                  </h3>
                  {selectedMedia.subtitle && (
                    <p className="text-lg text-muted-foreground">
                      {selectedMedia.subtitle}
                    </p>
                  )}
                </div>
              </div>
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
    </div>
  );
};