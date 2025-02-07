// client/src/components/sections/project-details/magazzino/index.ts

// Grouped imports from react-icons/si
import { 
  SiDavinciresolve,
  SiMeta,
  SiInstagram,
  SiFacebook,
  SiTelegram,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiWordpress,
  SiGooglesearchconsole,
  SiGoogleanalytics,
  SiLooker
} from "react-icons/si";

// Separate import for TbMailUp
import { TbMailUp } from "react-icons/tb";

// First import project details translations
import { projectDetailsTranslations } from './content.it';
// Export it as translations
export const translations = projectDetailsTranslations;

// Rest of your imports and exports...
export { AccordionCrowdfunding } from './AccordionCrowdfunding';
export { AccordionEmailMarketing } from './AccordionEmailMarketing';
export { AccordionObiettivi } from './AccordionObiettivi';
export { AccordionPianificazioneContenuti } from './AccordionPianificazioneContenuti';
export { AccordionSocialMedia } from './AccordionSocialMedia';
import { projectContent as importedItalianContent } from './content.it';
import { projectContent as importedEnglishContent } from './content.en';

// Export contents
export const italianContent = importedItalianContent;
export const englishContent = importedEnglishContent;

// 5. Esportiamo i componenti di livello superiore
export { ProjectContent } from '../ProjectContent';
export { ProjectHeader } from '../ProjectHeader';
export { ProjectLayout } from '../ProjectLayout'; 
export { ProjectMetrics } from '../ProjectMetrics';

// 6. Definiamo il project utilizzando i contenuti importati
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
      { name: 'Meta Business Suite', icon: SiMeta },
      { name: 'Instagram', icon: SiInstagram },
      { name: 'Facebook', icon: SiFacebook },
      { name: 'Telegram', icon: SiTelegram },
      { name: 'Adobe Photoshop', icon: SiAdobephotoshop },
      { name: 'Adobe Illustrator', icon: SiAdobeillustrator },
      { name: 'DaVinci Resolve', icon: SiDavinciresolve }
    ],
    web: [
      { name: 'WordPress', icon: SiWordpress },
      { name: 'Google Search Console', icon: SiGooglesearchconsole },
      { name: 'Google Analytics', icon: SiGoogleanalytics },
      { name: 'Google Looker Studio', icon: SiLooker }
    ],
    email: [
      { name: 'MailUp', icon: TbMailUp }
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

// 7. Definiamo la funzione getContent
export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? importedItalianContent : importedEnglishContent;
};