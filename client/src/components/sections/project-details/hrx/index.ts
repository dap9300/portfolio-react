// client/src/components/sections/project-details/hrx/index.ts

// 1. First import projectDetailsTranslations
import { projectDetailsTranslations, projectContent as importedItalianContent } from './content.it';
import { projectContent as importedEnglishContent } from './content.en';

// 2. Export translations (both for retrocompatibilità)
export const translations = projectDetailsTranslations;
export { projectDetailsTranslations };

// 3. Export accordion components with their specific names
export { AccordionEcommerce as HRXEcommerce } from './AccordionEcommerce';
export { default as HRXEmailMarketing } from './AccordionEmailMarketing';
export { default as HRXObjectivesAccordion } from './AccordionObiettivi';
export { default as HRXPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { default as HRXSocialMedia } from './AccordionSocialMedia';

// 4. Export contents
export const italianContent = importedItalianContent;
export const englishContent = importedEnglishContent;
export const project = importedItalianContent;

// 5. Export content function
export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? italianContent : englishContent;
};