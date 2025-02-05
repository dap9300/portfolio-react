// client/src/components/sections/project-details/hrx/index.ts
export { default as HRXCrowdfunding } from './AccordionCrowdfunding';
export { default as HRXEmailMarketing } from './AccordionEmailMarketing';
export { default as HRXObjectivesAccordion } from './AccordionObiettivi';
export { default as HRXPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { default as HRXSocialMedia } from './AccordionSocialMedia';

export { projectContent as italianContent } from './content.it';
export { projectContent as englishContent } from './content.en';

export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? italianContent : englishContent;
};