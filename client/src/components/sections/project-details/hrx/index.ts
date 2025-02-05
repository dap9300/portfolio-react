// client/src/components/sections/project-details/hrx/index.ts
export { default as HRXCrowdfunding } from './AccordionCrowdfunding';
export { default as HRXEmailMarketing } from './AccordionEmailMarketing';
export { default as HRXObjectivesAccordion } from './AccordionObiettivi';
export { default as HRXPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { default as HRXSocialMedia } from './AccordionSocialMedia';

// Export project content
export { projectContent } from './content.it';
export { projectContent as englishProjectContent } from './content.en';

// Helper function to get the correct content based on language
export const getProjectContent = (language: 'it' | 'en') => {
  return language === 'it' ? projectContent : englishProjectContent;
};