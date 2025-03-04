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
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(index);

      const handleScrollEnd = () => {
        isScrollingRef.current = false;
        window.removeEventListener('scrollend', handleScrollEnd);
        clearTimeout(timer);
      };

      // Timeout di fallback per browser senza supporto scrollend
      const timer = setTimeout(handleScrollEnd, 1000);
      window.addEventListener('scrollend', handleScrollEnd);
    }
  };

  useEffect(() => {
    if (!isHomePage) return;

    document.body.classList.add('disable-scroll');

    const handleScroll = () => {
      if (isScrollingRef.current) return;

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

      if (closestSectionIndex !== activeSection) {
        setActiveSection(closestSectionIndex);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Tempo da aspettare prima di scrolling su un'altra sezione
      const now = Date.now();
      if (now - lastScrollTime.current < 400) return;

      // Ignora micro-scroll accidentali
      if (Math.abs(e.deltaY) < 15) return;

      lastScrollTime.current = now;
      const direction = e.deltaY > 0 ? 1 : -1;
      scrollToSection(activeSection + direction);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToSection(activeSection + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSection(activeSection - 1);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY.current - touchEndY;

      if (Math.abs(deltaY) < 50) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 1000) return;

      lastScrollTime.current = now;
      const direction = deltaY > 0 ? 1 : -1;
      scrollToSection(activeSection + direction);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      document.body.classList.remove('disable-scroll');
    };
  }, [activeSection, isHomePage]);

  return { registerSection, scrollToSection, activeSection, isHomePage };
}