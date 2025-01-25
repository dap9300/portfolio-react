import { Button } from "@/components/ui/button";
import { useCallback } from "react";
import { Language } from "@/types";

interface LanguageSwitchProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitch({ currentLanguage, onLanguageChange }: LanguageSwitchProps) {
  const toggleLanguage = useCallback(() => {
    onLanguageChange(currentLanguage === 'en' ? 'it' : 'en');
  }, [currentLanguage, onLanguageChange]);

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50"
    >
      {currentLanguage.toUpperCase()}
    </Button>
  );
}
