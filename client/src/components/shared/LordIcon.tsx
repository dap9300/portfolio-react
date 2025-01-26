
import { useEffect, useRef } from 'react';
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// Initialize lord-icon element only once
if (typeof window !== 'undefined' && !customElements.get('lord-icon')) {
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
    primary: "#121331",
    secondary: "#121331"
  },
  className = ""
}: LordIconProps) {
  const iconRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (iconRef.current) {
      const element = iconRef.current;
      element.setAttribute("src", src);
      element.setAttribute("trigger", trigger);
      element.setAttribute("colors", `primary:${colors.primary},secondary:${colors.secondary}`);
      element.setAttribute("delay", delay.toString());
    }
  }, [src, trigger, colors, delay]);

  return (
    <lord-icon
      ref={iconRef}
      style={{ width: size, height: size }}
      className={className}
    />
  );
}
