import { useState, useEffect, useRef } from "react";
import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface NavigationProps {
  language: Language;
  onSectionClick: (section: string) => void;
}

export function Navigation({ language, onSectionClick }: NavigationProps) {
  const t = translations[language].nav;
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorOffset, setIndicatorOffset] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Map<string, HTMLButtonElement>>(new Map());

  const sections = [
    { id: "home", label: t.home },
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
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const activeItem = itemsRef.current.get(activeSection);
    if (activeItem && navRef.current) {
      const navRect = navRef.current.getBoundingClientRect();
      const itemRect = activeItem.getBoundingClientRect();

      setIndicatorWidth(itemRect.width);
      setIndicatorOffset(itemRect.left - navRect.left);
    }
  }, [activeSection]);

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-40 py-4 border-b"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div 
        className="container mx-auto px-4"
        ref={navRef}
      >
        <div className="relative flex justify-center">
          <div className="flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                ref={(el) => {
                  if (el) itemsRef.current.set(section.id, el);
                }}
                onClick={() => onSectionClick(section.id)}
                className={`relative py-2 text-sm transition-colors duration-300 ${
                  activeSection === section.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
          <motion.div
            className="absolute bottom-0 h-0.5 bg-primary"
            initial={false}
            animate={{
              width: indicatorWidth,
              x: indicatorOffset,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
          />
        </div>
      </div>
    </motion.nav>
  );
}