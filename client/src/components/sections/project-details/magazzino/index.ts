// client/src/components/sections/project-details/magazzino/index.ts
export { default as AccordionCrowdfunding } from './AccordionCrowdfunding';
export { default as AccordionEmailMarketing } from './AccordionEmailMarketing';
export { default as AccordionObiettivi } from './AccordionObiettivi';
export { default as AccordionPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { default as AccordionSocialMedia } from './AccordionSocialMedia';

// Export project content
export { projectContent } from './content.it';
export { projectContent as englishProjectContent } from './content.en';

// Helper function to get the correct content based on language
export const getProjectContent = (language: 'it' | 'en') => {
  return language === 'it' ? projectContent : englishProjectContent;
};