
import { useEffect, useRef } from 'react';
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// Initialize lord-icon element if it hasn't been initialized yet
if (typeof window !== 'undefined') {
  defineElement(lottie.loadAnimation);
}

interface LordIconProps {
  src: string;
  trigger?: "hover" | "click" | "loop" | "loop-on-hover" | "morph" | "morph-two-way";
  size?: number;
  delay?: number;
  colors?: {
    primary?: string;
    secondary?: string;
  };
  className?: string;
}

export function LordIcon({ 
  src, 
  trigger = "hover",
  size = 32,
  delay = 0,
  colors = {
    primary: "var(--primary)",
    secondary: "var(--primary)"
  },
  className = ""
}: LordIconProps) {
  const iconRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      iconRef.current.setAttribute("colors", `primary:${colors.primary},secondary:${colors.secondary}`);
      iconRef.current.setAttribute("src", src);
      iconRef.current.setAttribute("trigger", trigger);
      iconRef.current.setAttribute("delay", delay.toString());
    }
  }, [colors, src, trigger, delay]);

  return (
    <lord-icon
      ref={iconRef}
      style={{ width: size, height: size }}
      className={className}
    />
  );
}
