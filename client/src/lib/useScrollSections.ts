// src/lib/useScrollSections.ts
import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

export function useScrollSections() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const [location] = useLocation();
  const isScrollingRef = useRef(false);
  const lastScrollTime = useRef(0);
  const touchStartY = useRef(0);

  // Verifica se siamo nella homepage
  const isHomePage = location === "/";

  const registerSection = (index: number) => (el: HTMLElement | null) => {
    if (el) sectionsRef.current[index] = el;
  };

  const scrollToSection = (index: number) => {
    if (!isHomePage) return;
    if (index < 0 || index >= sectionsRef.current.length) return;
    if (isScrollingRef.current) return;

    const section = sectionsRef.current[index];
    if (section) {
      isScrollingRef.current = true;

      // Utilizziamo scrollIntoView senza modificare overflow
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);

      // Riabilita lo scrolling dopo che l'animazione è completata
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  useEffect(() => {
    if (!isHomePage) return;

    // Impostiamo una classe sul body anziché modificare direttamente lo stile
    // Questo ci permette di gestire la scrollbar in CSS in modo più affidabile
    document.body.classList.add('disable-scroll');

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      // Trova la sezione più vicina alla posizione attuale
      const scrollPosition = window.scrollY;
      let closestSectionIndex = 0;
      let minDistance = Infinity;

      sectionsRef.current.forEach((section, index) => {
        if (!section) return;

        const distance = Math.abs(section.offsetTop - scrollPosition);
        if (distance < minDistance) {
          minDistance = distance;
          closestSectionIndex = index;
        }
      });

      // Aggiorna la sezione attiva solo se cambia
      if (closestSectionIndex !== activeSection) {
        setActiveSection(closestSectionIndex);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Ignora eventi troppo frequenti
      const now = Date.now();
      if (now - lastScrollTime.current < 800) return;
      lastScrollTime.current = now;

      // Determina la direzione dello scroll
      const direction = e.deltaY > 0 ? 1 : -1;

      // Calcola la prossima sezione
      const nextSectionIndex = activeSection + direction;
      scrollToSection(nextSectionIndex);
    };

    // Supporto per i tasti freccia
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSection(activeSection + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(activeSection - 1);
      }
    };

    // Supporto per touchpad/dispositivi touch
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      // Ignora swipe troppo piccoli
      if (Math.abs(deltaY) < 50) return;

      // Ignora eventi troppo frequenti
      const now = Date.now();
      if (now - lastScrollTime.current < 800) return;
      lastScrollTime.current = now;

      // Determina la direzione
      const direction = deltaY > 0 ? 1 : -1;
      scrollToSection(activeSection + direction);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      // Rimuovi gli event listener quando il componente viene smontato
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);

      // Rimuovi la classe
      document.body.classList.remove('disable-scroll');
    };
  }, [activeSection, isHomePage]);

  return { registerSection, scrollToSection, activeSection, isHomePage };
}