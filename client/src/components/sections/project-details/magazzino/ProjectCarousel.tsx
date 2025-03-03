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
  type?: 'video' | 'image';
  poster?: string;
}

const mediaDetails: MediaDetail[] = [
  { 
    src: '/assets/newsocial2.png',
    title: "Instagram Feed",
    subtitle: "Esempio di feed Instagram",
    type: 'image'
  },
  {
    src: '/assets/newsocial3.png',
    title: "Instagram Feed",
    subtitle: "",
    type: 'image'
  },
  {
    src: '/assets/magamix.mp4',
    title: "Video Promo",
    subtitle: "Video promozionale",
    type: 'video',
    poster: '/assets/magamix-cover.png'
  },
  {
    src: '/assets/magareel.mp4',
    title: "Video Promo",
    subtitle: "Video promozionale",
    type: 'video',
    poster: '/assets/7.png'
  }
];

export const ProjectCarousel: FC = () => {
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

    if (media.type === 'video') {
      return (
        <div 
          className="relative group cursor-zoom-in"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
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
        </div>
      );
    }

    return (
      <div 
        className="relative cursor-zoom-in"
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        <img
          src={media.src}
          alt={media.title}
          className="w-auto h-auto max-w-[300px] max-h-[300px] object-scale-down"
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
    <div className="w-full max-w-3xl mx-auto">
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