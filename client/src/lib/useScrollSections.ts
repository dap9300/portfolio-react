import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

const easeInOutCubic = (t: number) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export function useScrollSections() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const [activeSection, setActiveSection] = useState(0);
  const [location] = useLocation();
  const isScrollingRef = useRef(false);
  const lastScrollTime = useRef(0);

  const isHomePage = location === "/";

  const registerSection = (index: number) => (el: HTMLElement | null) => {
    if (el) sectionsRef.current[index] = el;
  };

  const scrollToSection = (index: number) => {
    if (!isHomePage || isScrollingRef.current || index < 0 || index >= sectionsRef.current.length) return;

    const section = sectionsRef.current[index];
    if (section) {
      isScrollingRef.current = true;
      const targetScroll = section.getBoundingClientRect().top + window.scrollY;
      const startScroll = window.scrollY;
      const distance = targetScroll - startScroll;

      const minDuration = 550;
      const maxDuration = 800;
      const duration = Math.min(Math.max(Math.abs(distance) / 3, minDuration), maxDuration);
      let startTime: number | null = null;

      // Imposta il cooldown iniziale basato sulla durata dell'animazione
      lastScrollTime.current = Date.now() + duration;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutCubic(progress);
        window.scrollTo(0, startScroll + distance * easedProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          isScrollingRef.current = false;
          setActiveSection(index);
          // Aggiungi un cooldown aggiuntivo dopo il completamento
          const cooldown = 650; // 600ms di blocco dopo l'animazione
          lastScrollTime.current = Date.now() + cooldown;
        }
      };

      requestAnimationFrame(animation);
    }
  };

  useEffect(() => {
    if (!isHomePage) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      // Blocca gli eventi durante l'animazione e il cooldown
      if (now < lastScrollTime.current || Math.abs(e.deltaY) < 6) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      scrollToSection(activeSection + direction);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSection, isHomePage]);

  return { registerSection, scrollToSection, activeSection, isHomePage };
}