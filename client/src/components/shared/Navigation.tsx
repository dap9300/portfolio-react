import { useState, useEffect, useRef } from "react";
import { translations } from "@/components/sections/project-details/SiteContent";
import { Language } from "@/types";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  language: Language;
  onSectionClick: (section: string) => void;
}

export function Navigation({ language, onSectionClick }: NavigationProps) {
  const t = translations[language].nav;
  const [activeSection, setActiveSection] = useState("hero");
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Detect mobile devices
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Update dimensions whenever language or active section changes
    const updateDimensions = () => {
      // Only calculate dimensions for desktop view
      if (isMobile) return;

      const activeItem = itemsRef.current.get(activeSection);
      if (activeItem && navRef.current) {
        const navRect = navRef.current.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();

        setDimensions({
          width: itemRect.width + 20, // Make bubble wider than text
          left: itemRect.left - navRect.left - 10, // Center the wider bubble
        });
      }
    };

    updateDimensions();
    // Add resize listener to handle window size changes
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [activeSection, language, isMobile]); // Add isMobile as dependency

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    if (isMobile) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-50 py-4 border-b"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-muted-foreground hover:text-amber-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobile && (
          <div 
            className={`${
              mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } transition-all duration-300 overflow-hidden md:hidden`}
          >
            <div className="flex flex-col space-y-4 pt-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === section.id
                      ? "text-amber-600"
                      : "text-muted-foreground hover:text-amber-600"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Desktop Menu */}
        <div 
          className={`relative ${isMobile ? 'hidden' : 'flex'} justify-center`}
          ref={navRef}
        >
          <div className="flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                ref={(el) => {
                  if (el) itemsRef.current.set(section.id, el);
                }}
                onClick={() => handleSectionClick(section.id)}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === section.id
                    ? "text-amber-600"
                    : "text-muted-foreground hover:text-amber-600"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
          {!isMobile && (
            <div
              className="absolute -z-10 bottom-1 h-6 transition-all duration-300 ease-spring"
              style={{
                width: `${dimensions.width}px`,
                left: `${dimensions.left}px`,
              }}
            >
              <div className="absolute inset-0 bg-amber-600/10 rounded-full transform scale-110" />
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
}