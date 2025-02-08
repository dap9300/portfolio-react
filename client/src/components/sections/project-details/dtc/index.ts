// client/src/components/sections/project-details/dtc/index.ts
import { projectDetailsTranslations as translations, projectContent } from './content';

export { translations };

export { AccordionObiettivi } from './AccordionObiettivi';
export { AccordionContentStrategy } from './AccordionContentStrategy';
export { AccordionLeadGeneration } from './AccordionLeadGeneration';
export { AccordionAnalytics } from './AccordionAnalytics';
export { AccordionTeamManagement } from './AccordionTeamManagement';

export { ProjectContent } from '../ProjectContent';
export { ProjectHeader } from '../ProjectHeader';
export { ProjectLayout } from '../ProjectLayout';
export { ProjectMetrics } from '../ProjectMetrics';

export const italianContent = projectContent;
export const englishContent = projectContent;

export const project = {
  ...projectContent,
  gallery: [
    '/assets/dtc-analytics1.png',
    '/assets/dtc-performance.png',
    '/assets/dtc-banner.jpg'
  ],
};

export const getContent = (language: 'it' | 'en') => projectContent;