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
  type?: 'video' | 'image';
  poster?: string;
}

const mediaDetails: MediaDetail[] = [
  {
    src: '/assets/magamix.hevc.mp4',
    title: "Video Promo",
    subtitle: "Video promozionale",
    type: 'video',
    poster: '/assets/magamix-cover.webp'
  },
  {
    src: '/assets/magareel.hevc.mp4',
    title: "Video Promo",
    subtitle: "Video promozionale",
    type: 'video',
    poster: '/assets/magamix-cover2.webp'
  },
  {
    src: '/assets/maga-newsocial3.webp',
    title: "Instagram Feed",
    subtitle: "",
    type: 'image'
  },
  { 
    src: '/assets/maga-newsocial2.webp',
    title: "Instagram Feed",
    subtitle: "Esempio di feed Instagram",
    type: 'image'
  }
];

export const ProjectCarousel: FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaDetail | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set());
  const [visibleItems, setVisibleItems] = useState<number[]>([0, 1]); // Inizialmente carica solo i primi due elementi
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
      rootMargin: '100px', // Precarica gli elementi quando sono vicini a 100px dalla viewport
      threshold: 0.1
    });

    // Osserva tutti gli elementi media
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
      // Prefetch delle prossime 2 immagini/video che non sono ancora state caricate
      visibleItems.forEach(index => {
        const nextIndex = (index + 1) % mediaDetails.length;
        const media = mediaDetails[nextIndex];

        if (media.type === 'image' && !loadedImages.has(media.src)) {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, media.src]));
          };
          img.src = media.src;
        } else if (media.type === 'video' && !loadedVideos.has(media.src) && media.poster) {
          // Prefetch del poster del video
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set([...prev, media.poster!]));
          };
          img.src = media.poster;
        }
      });
    };

    prefetchNextItems();
  }, [visibleItems, loadedImages, loadedVideos]);

  const handleMediaClick = (media: MediaDetail) => {
    document.body.classList.add('react-zoom-container-open');
    setSelectedMedia(media);
  };

  const handleClose = () => {
    document.body.classList.remove('react-zoom-container-open');
    setSelectedMedia(null);
  };

  const renderMedia = (media: MediaDetail, index: number) => {
    const isHovered = hoverIndex === index;
    const shouldLoad = visibleItems.includes(index);

    if (media.type === 'video') {
      return (
        <div 
          ref={el => mediaRefs.current[index] = el}
          className="relative group cursor-zoom-in"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {shouldLoad ? (
            <>
              <video
                src={media.src}
                poster={media.poster}
                className="w-auto h-auto max-w-[300px] max-h-[300px] object-scale-down transition-all duration-300"
                style={{
                  filter: isHovered ? 'brightness(1.1)' : 'brightness(1)'
                }}
                controls={false}
                muted
                loop
                playsInline
                preload="none" // Previene il caricamento automatico del video
                onLoadedData={() => {
                  setLoadedVideos(prev => new Set([...prev, media.src]));
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: isHovered ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)'
                  }}
                >
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
            </>
          ) : (
            // Placeholder per i video non ancora caricati
            <div className="w-[300px] h-[300px] bg-neutral-200 dark:bg-neutral-700 animate-pulse flex items-center justify-center">
              <span className="text-neutral-500 dark:text-neutral-400">Caricamento...</span>
            </div>
          )}
        </div>
      );
    }

    return (
      <div 
        ref={el => mediaRefs.current[index] = el}
        className="relative cursor-zoom-in"
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        {shouldLoad ? (
          <>
            <img
              src={media.src}
              alt={media.title}
              className="w-auto h-auto max-w-[300px] max-h-[300px] object-scale-down"
              loading="lazy" // HTML native lazy loading
              onLoad={() => {
                setLoadedImages(prev => new Set([...prev, media.src]));
              }}
              width="300" // Dimensioni esplicite per aiutare il browser a calcolare lo spazio richiesto
              height="300"
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
          // Placeholder per le immagini non ancora caricate
          <div className="w-[300px] h-[300px] bg-neutral-200 dark:bg-neutral-700 animate-pulse flex items-center justify-center">
            <span className="text-neutral-500 dark:text-neutral-400">Caricamento...</span>
          </div>
        )}
      </div>
    );
  };

  const renderZoomedMedia = (media: MediaDetail) => {
    if (media.type === 'video') {
      return (
        <video
          src={media.src}
          className="max-w-[90vw] max-h-[70vh] object-contain"
          controls
          autoPlay
          playsInline
        />
      );
    }
    return (
      <img
        src={media.src}
        alt="Zoomed Media"
        className="max-w-[90vw] max-h-[70vh] object-contain"
      />
    );
  };

  return (
    <div className="w-full max-w-3xl mx-auto" ref={carouselRef}>
      <Carousel className="w-full">
        <CarouselContent className="px-2">
          {mediaDetails.map((media, index) => (
            <CarouselItem key={index} className="basis-auto">
              <motion.div
                layoutId={`media-${media.src}`}
                onClick={() => handleMediaClick(media)}
                className="relative rounded-lg overflow-hidden flex justify-center items-center bg-neutral-100 dark:bg-neutral-800"
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
              <div className="flex flex-col items-center gap-4">
                {renderZoomedMedia(selectedMedia)}
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