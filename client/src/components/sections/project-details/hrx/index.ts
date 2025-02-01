
export { ProjectGallery } from '../ProjectGallery';
export { ProjectHeader } from '../ProjectHeader';
export { ProjectLayout } from '../ProjectLayout';
export { ProjectMetrics } from '../ProjectMetrics';
export { ProjectContent } from '../ProjectContent';
export { ProjectDetails } from '../../ProjectDetails';
export * from './AccordionCrowdfunding';
export * from './AccordionEmailMarketing';
export * from './AccordionObiettivi';
export * from './AccordionPianificazioneContenuti';
export * from './AccordionSocialMedia';
import { projectContent as italianContent } from './content.it';
import { projectContent as englishContent } from './content.en';

export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? italianContent : englishContent;
};
