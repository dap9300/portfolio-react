// client/src/components/sections/project-details/magazzino/index.ts
export { default as AccordionCrowdfunding } from './AccordionCrowdfunding';
export { default as AccordionEmailMarketing } from './AccordionEmailMarketing';
export { default as AccordionObiettivi } from './AccordionObiettivi';
export { default as AccordionPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { default as AccordionSocialMedia } from './AccordionSocialMedia';

export { projectContent as italianContent } from './content.it';
export { projectContent as englishContent } from './content.en';

export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? italianContent : englishContent;
};