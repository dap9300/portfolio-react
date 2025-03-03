import { useState, useContext, useEffect } from "react";
import { Language } from "@/types";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Navigation } from "@/components/shared/Navigation";
import { LanguageSwitch } from "@/components/shared/LanguageSwitch";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { ScrollContext } from "@/App"; // Importa il contesto di scroll

interface HomeProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Home({ language, onLanguageChange }: HomeProps) {
  // Usa il contesto di scroll con la nuova proprietà isHomePage
  const { scrollToSection, activeSection, isHomePage } = useContext(ScrollContext);

  // Mappa delle sezioni e dei loro indici
  const sections = [
    { id: "hero", index: 0 },
    { id: "overview", index: 1 },
    { id: "projects", index: 2 },
    { id: "skills", index: 3 },
    { id: "education", index: 4 },
    { id: "contact", index: 5 }
  ];

  // Funzione di scroll modificata per usare il sistema di scroll
  const handleScrollToSection = (sectionId: string) => {
    const section = sections.find(s => s.id === sectionId);
    if (section) {
      scrollToSection(section.index);
    }
  };

  // Indicatore visivo per la navigazione a scorrimento (opzionale)
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
        activeSection={activeSection}
      />
      <div className="fixed top-4 right-4 z-50 flex items-center">
        <div className="mr-12">
          <ThemeToggle />
        </div>
        <LanguageSwitch
          currentLanguage={language}
          onLanguageChange={onLanguageChange}
        />
      </div>

      {/* Mostra gli indicatori di navigazione solo nella homepage */}
      {isHomePage && <SectionIndicator />}

      {/* Componenti di sezione con indici */}
      <Hero
        language={language}
        onContactClick={() => handleScrollToSection("contact")}
        sectionIndex={0}
      />
      <Overview 
        language={language} 
        sectionIndex={1}
      />
      <Projects 
        language={language} 
        sectionIndex={2}
      />
      <Skills 
        language={language} 
        sectionIndex={3}
      />
      <Education 
        language={language} 
        sectionIndex={4}
      />
      <Contact 
        language={language} 
        sectionIndex={5}
      />
    </div>
  );
}