// client/src/components/sections/project-details/manunta/index.ts
export { default as AccordionObiettivi } from './AccordionObiettivi';
export { default as AccordionSocialMedia } from './AccordionSocialMedia';
export { default as AccordionPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { default as AccordionEmailMarketing } from './AccordionEmailMarketing';
export { default as AccordionServices } from './AccordionServices';
export { projectContent as project } from './content.it';
export { projectContent as italianContent } from './content.it';
export { projectContent as englishContent } from './content.en';

export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? italianContent : englishContent;
};