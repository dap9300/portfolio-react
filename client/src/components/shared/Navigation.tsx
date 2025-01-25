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

  const sections = [
    { id: "home", label: t.home },
    { id: "overview", label: t.overview },
    { id: "projects", label: t.projects },
    { id: "skills", label: t.skills },
    { id: "education", label: t.education },
    { id: "contact", label: t.contact },
  ];

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm z-40 py-4"
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6 md:space-x-8">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionClick(section.id)}
                className="text-sm md:text-base hover:text-primary transition-colors"
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
