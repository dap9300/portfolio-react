import { useState } from "react";
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

interface HomeProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export default function Home({ language, onLanguageChange }: HomeProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <Navigation
        language={language}
        onSectionClick={scrollToSection}
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
      <Hero
        language={language}
        onContactClick={() => scrollToSection("contact")}
      />
      <Overview language={language} />
      <Projects language={language} />
      <Skills language={language} />
      <Education language={language} />
      <Contact language={language} />
    </div>
  );
}