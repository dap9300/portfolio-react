export { AccordionObiettivi } from './AccordionObiettivi';
export { AccordionSocialMedia } from './AccordionSocialMedia';
export { AccordionPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { AccordionEmailMarketing } from './AccordionEmailMarketing';
export { AccordionCrowdfunding } from './AccordionCrowdfunding';

import { projectContent as italianContent } from './content.it';
import { projectContent as englishContent } from './content.en';

export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? italianContent : englishContent;
};