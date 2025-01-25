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

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");

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
      <LanguageSwitch
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
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
