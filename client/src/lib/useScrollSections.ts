// src/lib/useScrollSections.ts
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

export function useScrollSections() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const [location] = useLocation();

  // Verifica se siamo nella homepage
  const isHomePage = location === "/";

  const registerSection = (index: number) => (el: HTMLElement | null) => {
    if (el) sectionsRef.current[index] = el;
  };

  const scrollToSection = (index: number) => {
    const section = sectionsRef.current[index];
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Se non siamo nella homepage, non applicare la logica di scroll
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      sectionsRef.current.forEach((section, index) => {
        if (!section) return;
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index);
        }
      });
    };

    // Aggiungiamo un listener per l'evento wheel per intercettare lo scroll
    // ma solo se siamo nella homepage
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && activeSection < sectionsRef.current.length - 1) {
        // Scroll verso il basso
        scrollToSection(activeSection + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        // Scroll verso l'alto
        scrollToSection(activeSection - 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Utilizziamo passive: false per poter chiamare preventDefault()
    // ma solo se siamo nella homepage
    if (isHomePage) {
      window.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (isHomePage) {
        window.removeEventListener("wheel", handleWheel);
      }
    };
  }, [activeSection, isHomePage]);

  return { registerSection, scrollToSection, activeSection, isHomePage };
}