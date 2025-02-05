// index.ts di hrx (project 2)
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

export const project = {
  id: 2,
  title: {
    en: "HRX - Digital Marketing Strategy",
    it: "HRX - Strategia di Marketing Digitale"
  },
  description: {
    en: "Digital transformation and communication strategy for HRX.",
    it: "Strategia di trasformazione digitale e comunicazione per HRX."
  },
  image: '/assets/hrx-banner1.jpg',
  technologies: {
    social: [
      'Meta Business Suite',
      'Instagram',
      'Facebook',
      'LinkedIn',
      'Adobe Creative Suite'
    ],
    web: [
      'WordPress',
      'Google Analytics',
      'Google Ads'
    ],
    email: [
      'Mailchimp'
    ]
  },
  metrics: italianContent.metrics,
  gallery: [
    '/assets/hrx-banner1.jpg'
  ],
  detailedSections: italianContent.detailedSections
};
