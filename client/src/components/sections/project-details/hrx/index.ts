// client/src/components/sections/project-details/hrx/index.ts
export { AccordionCrowdfunding } from './AccordionCrowdfunding';
export { AccordionEmailMarketing } from './AccordionEmailMarketing';
export { AccordionObiettivi as HRXObjectivesAccordion } from './AccordionObiettivi';
export { AccordionPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { AccordionSocialMedia } from './AccordionSocialMedia';
export { projectContent as italianContent } from './content.it';
export { projectContent as englishContent } from './content.en';
export { project } from './content.it';

export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? italianContent : englishContent;
};