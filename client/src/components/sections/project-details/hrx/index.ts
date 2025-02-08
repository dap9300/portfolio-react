// client/src/components/sections/project-details/hrx/index.ts

import { projectDetailsTranslations as translations, projectContent } from './content';

export { translations };

import AccordionEcommerce from './AccordionEcommerce';
import AccordionEmailMarketing from './AccordionEmailMarketing';
import AccordionObiettivi from './AccordionObiettivi';
import AccordionPianificazioneContenuti from './AccordionPianificazioneContenuti';
import AccordionSocialMedia from './AccordionSocialMedia';

export const HRXEcommerce = AccordionEcommerce;
export const HRXEmailMarketing = AccordionEmailMarketing;
export const HRXObjectivesAccordion = AccordionObiettivi;
export const HRXPianificazioneContenuti = AccordionPianificazioneContenuti;
export const HRXSocialMedia = AccordionSocialMedia;

export { ProjectContent } from '../ProjectContent';
export { ProjectHeader } from '../ProjectHeader';
export { ProjectLayout } from '../ProjectLayout';
export { ProjectMetrics } from '../ProjectMetrics';

export const italianContent = projectContent;
export const englishContent = projectContent;

export const project = {
  ...projectContent,
  gallery: [
    '/assets/hrx-social1.png',
    '/assets/hrx-social2.png',
    '/assets/hrx-website.png'
  ],
};

export const getContent = (language: 'it' | 'en') => projectContent;