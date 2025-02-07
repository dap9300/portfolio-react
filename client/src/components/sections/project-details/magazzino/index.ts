// client/src/components/sections/project-details/magazzino/index.ts

// 1. Prima importiamo i componenti
export { AccordionCrowdfunding } from './AccordionCrowdfunding';
export { AccordionEmailMarketing } from './AccordionEmailMarketing';
export { AccordionObiettivi } from './AccordionObiettivi';
export { AccordionPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { AccordionSocialMedia } from './AccordionSocialMedia';

// 2. Importiamo i contenuti da content.it e content.en
import { translations, projectContent as importedItalianContent } from './content.it';
import { projectContent as importedEnglishContent } from './content.en';

export { translations };

// 3. Esportiamo i contenuti
export const italianContent = importedItalianContent;
export const englishContent = importedEnglishContent;

// 4. Esportiamo i componenti di livello superiore
export { ProjectContent } from '../ProjectContent';
export { ProjectHeader } from '../ProjectHeader';
export { ProjectLayout } from '../ProjectLayout'; 
export { ProjectMetrics } from '../ProjectMetrics';

// 5. Definiamo il project utilizzando i contenuti importati
export const project = {
  id: 1,
  title: {
    en: "Magazzino sul Po - Digital Marketing Strategy",
    it: "Magazzino sul Po - Strategia di Marketing Digitale"
  },
  description: {
    en: "Digital transformation and communication strategy for one of Turin's main cultural venues.",
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
  metrics: importedItalianContent.metrics,
  gallery: [
    '/assets/oldsocial1.png',
    '/assets/oldsocial2.png',
    '/assets/sito-eventi-1.png'
  ],
  detailedSections: importedItalianContent.detailedSections
};

// 6. Definiamo la funzione getContent
export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? importedItalianContent : importedEnglishContent;
};