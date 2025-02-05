// client/src/components/sections/project-details/hrx/index.ts
export { ProjectGallery } from '../ProjectGallery';
export { ProjectHeader } from '../ProjectHeader';
export { ProjectLayout } from '../ProjectLayout';
export { ProjectMetrics } from '../ProjectMetrics';
export { ProjectContent } from '../ProjectContent';
export { ProjectDetails } from '../../ProjectDetails';
export * from './AccordionCrowdfunding';
export * from './AccordionEmailMarketing';
export { HRXObjectivesAccordion } from './AccordionObiettivi';
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
    it: "In qualità di prima figura dedicata al marketing digitale in HRX SRL, azienda italiana specializzata nella produzione di abbigliamento tecnico e accessori per il motorsport, ho lavorato su diverse aree chiave, tra cui gestione dell'e-commerce, campagne di advertising su Google Ads e Meta, ottimizzazione SEO e strategie di remarketing, con l'obiettivo di aumentare le vendite online e migliorare il ROI delle campagne pubblicitarie."
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
      'Shopify',
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