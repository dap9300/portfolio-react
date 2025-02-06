
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

export const ProjectCarousel: FC = () => {
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

  return (
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
