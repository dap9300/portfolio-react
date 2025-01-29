import { Project } from '@/types/projects';
import { PROJECT_ASSETS } from '@/constants/assets';

export const project: Project = {
  id: 3,
  title: {
    en: "Studi Fisioterapici Manunta - Website & SEO Optimization | Social Media",
    it: "Studi Fisioterapici Manunta - Sito Web & Ottimizzazione SEO | Social Media"
  },
  description: {
    en: "Management of digital marketing strategies for a physiotherapy clinic, focusing on Facebook, Instagram, and Google Ads campaigns to increase online bookings and local brand awareness.",
    it: "Gestione delle strategie di marketing digitale per uno studio di fisioterapia, con focus su campagne Facebook, Instagram e Google Ads per aumentare le prenotazioni online e la brand awareness locale"
  },
  image: PROJECT_ASSETS.MANUNTA.BANNER,
  technologies: [
    "Creazione e ottimizzazione Sito Web",
    "Content Creation",
    "Google Analytics"
  ],
  metrics: []
};
