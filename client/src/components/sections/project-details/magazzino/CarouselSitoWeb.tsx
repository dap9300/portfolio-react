import { FC, useState } from "react";
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
    src: '/assets/01_analytics_panoramica.png',
    title: "Analytics Overview",
    subtitle: "Panoramica delle analitiche del sito",
  },
  {
    src: '/assets/02_analytics_panoramica.png',
    title: "Analytics Details",
    subtitle: "Dettaglio delle metriche",
  },
  {
    src: '/assets/03_analytics_panoramica.png',
    title: "Analytics Insights",
    subtitle: "Approfondimento dei dati",
  }
];

export const CarouselSitoWeb: FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<MediaDetail | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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

    return (
      <div 
        className="relative cursor-zoom-in w-full h-full"
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        <img
          src={media.src}
          alt={media.title}
          className="w-full h-full object-contain"
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
      </div>
    );
  };

  return (
    <div className="w-full">
      <Carousel 
        className="w-full"
        opts={{
          align: "start",
          loop: true
        }}
      >
        <CarouselContent>
          {mediaDetails.map((media, index) => (
            <CarouselItem key={index} className="w-full pl-0">
              <motion.div
                layoutId={`media-${media.src}`}
                onClick={() => handleMediaClick(media)}
                className="relative rounded-lg overflow-hidden flex justify-center items-center bg-neutral-100 dark:bg-neutral-800 h-[400px]"
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