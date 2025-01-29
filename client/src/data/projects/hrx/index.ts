import { Project } from '@/types/projects';
import { PROJECT_ASSETS } from '@/constants/assets';

export const project: Project = {
  id: 2,
  title: {
    en: "HRX Srl - Digital Marketing | Social Media | Ecommerce optimization",
    it: "HRX Srl - Digital Marketing | Social Media | Ottimizzazione Ecommerce"
  },
  description: {
    en: "Managed digital marketing strategies in the automotive sector, focusing on direct sales through Facebook, Instagram, Google Ads, and email marketing campaigns. Optimized the company's e-commerce for SEO to improve organic positioning and conversions.",
    it: "Ho gestito strategie di marketing digitale nel settore automotive, con focus sulla vendita diretta tramite campagne Facebook, Instagram, Google Ads ed email marketing. Ho ottimizzato l' e-commerce dell'azienda in ottica SEO per migliorare posizionamento organico e conversioni."
  },
  image: PROJECT_ASSETS.HRX.BANNER,
  technologies: [
    "Social Media Advertising",
    "Social Media Strategy",
    "Social Media Management",
    "Content Creation",
    "Social Media Analytics",
    "Google Analytics",
    "Email Marketing",
    "Ottimizzazione SEO",
    "Ottimizzazione Ecommerce"
  ],
  metrics: []
};
