import { FC, useState, useRef, useEffect } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { FileEdit } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content.it";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

const BeforeAfterSlider: FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel,
  afterLabel
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
    const position = (x / rect.width) * 100;
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(touch.clientX - rect.left, 0), rect.width);
    const position = (x / rect.width) * 100;
    setSliderPosition(position);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className="relative select-none cursor-col-resize rounded-lg overflow-hidden w-4/5 mx-auto"
    >  
      {/* Before Image */}
      <img 
        src={beforeImage} 
        alt={beforeLabel} 
        className="w-full"
        style={{ filter: 'grayscale(100%)' }}
      />
      <span className="absolute top-4 left-4 bg-primary/80 text-primary-foreground px-2 py-1 rounded text-sm">
        {beforeLabel}
      </span>

      {/* After Image */}
      <div 
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={afterImage} 
          alt={afterLabel} 
          className="absolute top-0 left-0 w-full h-full"
          style={{ 
            width: `${(100 / sliderPosition) * 100}%`,
            maxWidth: 'none',
            objectFit: 'cover',
            objectPosition: 'left'
          }}
        />
        <span className="absolute top-4 left-4 bg-primary/80 text-primary-foreground px-2 py-1 rounded text-sm">
          {afterLabel}
        </span>
      </div>

      {/* Slider Handle */}
      <div 
        ref={sliderRef}
        className="absolute top-0 bottom-0 w-0.5 bg-primary cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        <div className="absolute top-1/2 left-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 bg-background rounded-full shadow-lg flex items-center justify-center border border-primary">
          <div className="w-0.5 h-4 bg-primary rounded-full" />
        </div>
      </div>
    </div>
  );
};

interface AccordionPianificazioneContenutiProps {
  project: Project;
  language: Language;
}

export const AccordionPianificazioneContenuti: FC<AccordionPianificazioneContenutiProps> = ({ project, language }) => {
  if (!project.detailedSections?.contentPlanning) return null;

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
          <BeforeAfterSlider
            beforeImage="/assets/old-hrx-1.png"
            afterImage="/assets/new-hrx1.png"
            beforeLabel={language === 'it' ? 'Prima' : 'Before'}
            afterLabel={language === 'it' ? 'Dopo' : 'After'}
          />

          <ul className="space-y-2 text-muted-foreground mt-6">
            {project.detailedSections.contentPlanning.metrics.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};