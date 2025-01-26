import { useEffect, useRef } from 'react';
import "lord-icon-element";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";

// Define the lord-icon custom element
defineElement(lottie.loadAnimation);

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
    }
  }, [colors]);

  return (
    <lord-icon
      ref={iconRef}
      src={src}
      trigger={trigger}
      delay={delay}
      colors={`primary:${colors.primary},secondary:${colors.secondary}`}
      style={{ width: size, height: size }}
      className={className}
    />
  );
}
