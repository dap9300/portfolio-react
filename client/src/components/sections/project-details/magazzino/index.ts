// index.ts di magazzino (project 1)
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
  id: 1,
  title: {
    en: "Magazzino sul Po - Digital Marketing Strategy",
    it: "Magazzino sul Po - Strategia di Marketing Digitale"
  },
  description: {
    en: `Digital transformation and communication strategy for one of Turin's main cultural venues.`,
    it: "In qualità di Digital Marketing & Communications Specialist presso Magazzino sul Po, ho guidato la trasformazione digitale di uno dei principali luoghi di aggregazione culturale di Torino."
  },
  image: '/assets/banner-magazzino.webp',
  technologies: {
    social: [
      'Meta Business Suite',
      'Instagram',
      'Facebook',
      'Telegram',
      'Adobe Creative Suite',
      'DaVinci Resolve'
    ],
    web: [
      'WordPress',
      'Google Search Console',
      'Google Analytics',
      'Google Looker Studio'
    ],
    email: [
      'MailUp'
    ]
  },
  metrics: italianContent.metrics,
  gallery: [
    '/assets/oldsocial1.png',
    '/assets/oldsocial2.png',
    '/assets/sito-eventi-1.png'
  ],
  detailedSections: italianContent.detailedSections,
  assets: {
    banner: '/assets/banner-magazzino.webp',
    analytics: [
      '/assets/analytics_maga1.png',
      '/assets/growth.png'
    ]
  }
};