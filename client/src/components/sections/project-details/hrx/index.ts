// client/src/components/sections/project-details/hrx/index.ts

import { projectDetailsTranslations as translations, projectContent } from './content';

export { translations };

// Import default exports from accordion components
import AccordionEcommerce from './AccordionEcommerce';
import AccordionEmailMarketing from './AccordionEmailMarketing';
import AccordionObiettivi from './AccordionObiettivi';
import AccordionPianificazioneContenuti from './AccordionPianificazioneContenuti';
import AccordionSocialMedia from './AccordionSocialMedia';

// Re-export accordion components
export const HRXEcommerce = AccordionEcommerce;
export const HRXEmailMarketing = AccordionEmailMarketing;
export const HRXObjectivesAccordion = AccordionObiettivi;
export const HRXPianificazioneContenuti = AccordionPianificazioneContenuti;
export const HRXSocialMedia = AccordionSocialMedia;

// Export shared components
export { ProjectContent } from '../ProjectContent';
export { ProjectHeader } from '../ProjectHeader';
export { ProjectLayout } from '../ProjectLayout';
export { ProjectMetrics } from '../ProjectMetrics';

// Export content
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