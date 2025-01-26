import { useState, useEffect, useRef } from "react";
import { translations } from "@/lib/translations";
import { Language } from "@/types";

interface NavigationProps {
  language: Language;
  onSectionClick: (section: string) => void;
}

export function Navigation({ language, onSectionClick }: NavigationProps) {
  const t = translations[language].nav;
  const [activeSection, setActiveSection] = useState("hero");
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
  const navRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Map<string, HTMLButtonElement>>(new Map());

  const sections = [
    { id: "hero", label: t.home },
    { id: "overview", label: t.overview },
    { id: "projects", label: t.projects },
    { id: "skills", label: t.skills },
    { id: "education", label: t.education },
    { id: "contact", label: t.contact },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }  // Reduced threshold for quicker response
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const updateDimensions = () => {
      const activeItem = itemsRef.current.get(activeSection);
      if (activeItem && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();

        setDimensions({
          width: itemRect.width + 20,
          left: itemRect.left - navRect.left - 10,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [activeSection, language]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 py-4 border-b">
      <div className="container mx-auto px-4">
        <div 
          className="relative flex justify-center"
          ref={navRef}
        >
          <div className="flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                ref={(el) => {
                  if (el) itemsRef.current.set(section.id, el);
                }}
                onClick={() => onSectionClick(section.id)}
                className={`relative py-2 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
          <div
            className="absolute -z-10 bottom-1 h-6 transition-all duration-200 ease-out"
            style={{
              width: `${dimensions.width}px`,
              left: `${dimensions.left}px`,
            }}
          >
            <div className="absolute inset-0 bg-primary/10 rounded-full" />
          </div>
        </div>
      </div>
    </nav>
  );
}