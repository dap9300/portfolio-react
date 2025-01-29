import { FC } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ProjectGalleryProps {
  gallery?: string[];
}

/**
 * ProjectGallery - Displays a grid of project images
 * Handles responsive image layout and loading animations
 */
export const ProjectGallery: FC<ProjectGalleryProps> = ({ gallery }) => {
  if (!gallery?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {gallery.map((image, index) => (
        <motion.div
          key={image}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden">
            <img
              src={image}
              alt={`Project image ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
