// client/src/components/sections/project-details/dtc/index.ts

// 1. First import projectDetailsTranslations
import { projectDetailsTranslations, projectContent as importedItalianContent } from './content.it';
import { projectContent as importedEnglishContent } from './content.en';

// 2. Export translations
export const translations = projectDetailsTranslations;

// 3. Export accordion components
export { default as AccordionObiettivi } from './AccordionObiettivi';
export { default as AccordionContentStrategy } from './AccordionContentStrategy';
export { default as AccordionLeadGeneration } from './AccordionLeadGeneration';
export { default as AccordionTeamManagement } from './AccordionTeamManagement';
export { default as AccordionAnalytics } from './AccordionAnalytics';

// 4. Export contents
export const italianContent = importedItalianContent;
export const englishContent = importedEnglishContent;
export const project = importedItalianContent;

// 5. Export content function
export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? italianContent : englishContent;
};