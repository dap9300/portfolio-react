import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/shared/Navigation";
import { ScrollContext } from "@/App";

// Stessa chiave usata in ProjectDetails
const TARGET_SECTION_KEY = 'target_section';

export default function Home() {
  const { scrollToSection, activeSection, isHomePage } = useContext(ScrollContext);

  // Ref per assicurarci di eseguire lo scroll solo una volta
  const hasScrolledToTarget = useRef(false);

  // Temporarily set default language
  const language = 'it';

  const sections = [
    { id: "hero", index: 0 },
    { id: "overview", index: 1 },
    { id: "projects", index: 2 },
    { id: "skills", index: 3 },
    { id: "education", index: 4 },
    { id: "contact", index: 5 }
  ];

  // Utilizziamo useLayoutEffect che viene eseguito PRIMA del render visibile
  // Questo è cruciale per evitare il flash della hero section
  useLayoutEffect(() => {
    // Controlla se c'è una sezione target in sessionStorage
    const targetSectionIndex = sessionStorage.getItem(TARGET_SECTION_KEY);

    if (targetSectionIndex && !hasScrolledToTarget.current) {
      // Converti in numero
      const sectionIndex = parseInt(targetSectionIndex, 10);

      // Verifica che l'indice sia valido
      if (!isNaN(sectionIndex) && sectionIndex >= 0 && sectionIndex < sections.length) {
        // Piccolo timeout per assicurarsi che il DOM sia pronto
        setTimeout(() => {
          // Prima di fare lo scroll, trova la sezione nel DOM
          const sectionElement = document.getElementById(sections[sectionIndex].id);

          if (sectionElement) {
            // Scroll immediato (non smooth) alla sezione
            window.scrollTo({
              top: sectionElement.offsetTop,
              behavior: 'auto'
            });

            // Aggiorna l'active section nel contesto
            scrollToSection(sectionIndex);
          }

          // Imposta il flag per evitare scroll multipli
          hasScrolledToTarget.current = true;

          // Rimuovi l'item da sessionStorage dopo l'uso
          sessionStorage.removeItem(TARGET_SECTION_KEY);
        }, 0);
      }
    }
  }, [scrollToSection]); // Dipende solo da scrollToSection

  const handleScrollToSection = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      scrollToSection(section.index);
    }
  };

  const SectionIndicator = () => (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            activeSection === section.index 
              ? "bg-primary scale-125" 
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label={`Scroll to ${section.id}`}
        />
      ))}
    </div>
  );

  return (
    <div className="bg-background min-h-screen snap-y snap-mandatory">
      <Navigation
        language={language}
        onSectionClick={handleScrollToSection}
      />
      {isHomePage && <SectionIndicator />}
      <Hero
        language={language}
        onContactClick={() => handleScrollToSection("contact")}
        sectionIndex={0}
      />
      <Overview language={language} sectionIndex={1} />
      <Projects language={language} sectionIndex={2} />
      <Skills language={language} sectionIndex={3} />
      <Education language={language} sectionIndex={4} />
      <Contact language={language} sectionIndex={5} />
    </div>
  );
}