// client/src/components/sections/project-details/magazzino/index.ts

import { projectDetailsTranslations as translations, projectContent } from './content';

export { translations };

export { AccordionCrowdfunding } from './AccordionCrowdfunding';
export { AccordionEmailMarketing } from './AccordionEmailMarketing';
export { AccordionObiettivi } from './AccordionObiettivi';
export { AccordionPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { AccordionSocialMedia } from './AccordionSocialMedia';

export { ProjectContent } from '../ProjectContent';
export { ProjectHeader } from '../ProjectHeader';
export { ProjectLayout } from '../ProjectLayout'; 
export { ProjectMetrics } from '../ProjectMetrics';

export const italianContent = projectContent;
export const englishContent = projectContent;

export const project = {
  ...projectContent,
  gallery: [
    '/assets/oldsocial1.png',
    '/assets/oldsocial2.png',
    '/assets/sito-eventi-1.png'
  ],
};

export const getContent = (language: 'it' | 'en') => projectContent;