// client/src/components/sections/project-details/manunta/index.ts

// 1. First import projectDetailsTranslations and content
import { projectDetailsTranslations, translations as importedTranslations, projectContent as importedItalianContent } from './content.it';
import { projectContent as importedEnglishContent } from './content.en';

// 2. Export both translations for retrocompatibilità
export const translations = importedTranslations;
export { projectDetailsTranslations };

// 3. Export accordion components
export { default as AccordionObiettivi } from './AccordionObiettivi';
export { default as AccordionSocialMedia } from './AccordionSocialMedia';
export { default as AccordionPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { default as AccordionEmailMarketing } from './AccordionEmailMarketing';
export { default as AccordionServices } from './AccordionServices';

// 4. Export contents
export const italianContent = importedItalianContent;
export const englishContent = importedEnglishContent;
export const project = importedItalianContent;

// 5. Export content function
export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? italianContent : englishContent;
};