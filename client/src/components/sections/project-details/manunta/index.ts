// client/src/components/sections/project-details/manunta/index.ts

import { projectDetailsTranslations as translations, projectContent } from './content';

export { translations };

export { default as AccordionObiettivi } from './AccordionObiettivi';
export { default as AccordionSocialMedia } from './AccordionSocialMedia';
export { default as AccordionPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { default as AccordionEmailMarketing } from './AccordionEmailMarketing';
export { default as AccordionServices } from './AccordionServices';

export { ProjectContent } from '../ProjectContent';
export { ProjectHeader } from '../ProjectHeader';
export { ProjectLayout } from '../ProjectLayout';
export { ProjectMetrics } from '../ProjectMetrics';

export const italianContent = projectContent;
export const englishContent = projectContent;

export const project = {
  ...projectContent,
  gallery: [
    '/assets/manunta-analytics1.png',
    '/assets/manunta-growth.png',
    '/assets/manunta-banner.jpg'
  ],
};

export const getContent = (language: 'it' | 'en') => projectContent;