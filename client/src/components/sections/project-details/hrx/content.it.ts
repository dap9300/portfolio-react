// client/src/components/sections/project-details/hrx/content.it.ts

import { Users, ShoppingCart, MousePointerClick } from "lucide-react";
import { Project } from "@/types/projects";

// Define translations object
const translationsData = {
  back: {
    en: 'Back to Projects',
    it: 'Torna ai Progetti'
  },
  projectDetails: {
    overview: {
      en: 'Project Overview',
      it: 'Panoramica del Progetto'
    },
    tools: {
      en: 'Tools & Platforms',
      it: 'Strumenti e Piattaforme'
    },
    objectives: {
      en: 'Objectives',
      it: 'Obiettivi'
    },
    socialStrategy: {
      en: 'Digital Marketing Strategy',
      it: 'Strategia Marketing Digitale'
    },
    contentPlanning: {
      en: 'Content Strategy',
      it: 'Strategia dei Contenuti'
    },
    emailMarketing: {
      en: 'Email Marketing',
      it: 'Email Marketing'
    },
    ecommerce: {
      en: 'E-commerce Strategy',
      it: 'Strategia E-commerce'
    }
  }
};

// Export both translations for retrocompatibilità
export const translations = translationsData;
export const projectDetailsTranslations = translationsData;

export const projectContent: Project = {
  id: 2,
  title: {
    en: "HRX - Digital Marketing Strategy",
    it: "HRX - Strategia di Marketing Digitale"
  },
  description: {
    en: "Led digital transformation as the first digital marketing specialist at HRX SRL, an Italian company specialized in technical clothing and motorsport accessories.",
    it: "In qualità di prima figura dedicata al marketing digitale in HRX SRL, azienda italiana specializzata nella produzione di abbigliamento tecnico e accessori per il motorsport."
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
      'Google Ads',
      'Google Search Console',
      'Google Tag Manager'
    ],
    email: [
      'Mailchimp',
      'Klaviyo'
    ]
  },
  metrics: [
    {
      icon: Users,
      value: '4.2x',
      label: {
        en: 'Average ROAS',
        it: 'ROAS Medio'
      }
    },
    {
      icon: ShoppingCart,
      value: '+22%',
      label: {
        en: 'E-commerce CRO',
        it: 'CRO E-commerce'
      }
    },
    {
      icon: MousePointerClick,
      value: '3.5%',
      label: {
        en: 'Average CTR',
        it: 'CTR Medio'
      }
    }
  ],
  detailedSections: {
    overview: {
      title: {
        en: 'Project Overview',
        it: 'Panoramica del Progetto'
      },
      content: {
        en: 'Led digital transformation for HRX SRL, an Italian company specializing in technical clothing and motorsport accessories, focusing on e-commerce optimization and implementation of integrated digital marketing strategies.',
        it: 'Ho guidato la trasformazione digitale di HRX SRL, azienda italiana specializzata nella produzione di abbigliamento tecnico e accessori per il motorsport, concentrandomi sull\'ottimizzazione dell\'e-commerce e sull\'implementazione di strategie di marketing digitale integrate.'
      },
      metrics: [
        'E-commerce: implementazione strategia di vendita B2C e B2B',
        '- Conversione: +22% YoY',
        '- ROAS medio: 4.2x',
        'Google Ads: sviluppo e gestione campagne Search e Shopping',
        '- CTR medio: 3.5%',
        '- CPA: ottimizzazione -35%'
      ]
    },
    objectives: {
      title: {
        en: 'Objectives & KPI',
        it: 'Obiettivi & KPI'
      },
      items: [
        'Incremento vendite e-commerce B2C',
        'Ottimizzazione ROAS campagne advertising',
        'Sviluppo presenza internazionale',
        'Miglioramento conversion rate sito web',
        'Implementazione tracking avanzato'
      ]
    },
    ecommerce: {
      title: {
        en: 'E-commerce Strategy',
        it: 'Strategia E-commerce'
      },
      content: {
        en: 'Development and optimization of e-commerce strategy focusing on B2C and B2B sales channels, with implementation of advanced tracking and conversion optimization.',
        it: 'Sviluppo e ottimizzazione della strategia e-commerce con focus su canali di vendita B2C e B2B, con implementazione di tracking avanzato e ottimizzazione delle conversioni.'
      },
      metrics: [
        'Catalogo prodotti multilingua',
        'Implementazione configuratore prodotto',
        'Ottimizzazione UX/UI checkout',
        'Tracking conversioni avanzato',
        'A/B testing pagine prodotto'
      ]
    },
    socialMedia: {
      title: {
        en: 'Digital Marketing Strategy',
        it: 'Strategia Marketing Digitale'
      },
      content: {
        en: 'Implementation of an integrated digital marketing strategy focused on brand awareness and lead generation through multiple channels.',
        it: 'Implementazione di una strategia di marketing digitale integrata focalizzata sulla brand awareness e sulla generazione di lead attraverso molteplici canali.'
      },
      metrics: [
        'Google Ads: gestione campagne Search e Shopping',
        'Facebook/Instagram Ads: sviluppo strategia ADV',
        'Ottimizzazione SEO on-page e off-page',
        'Analisi competitor e mercato',
        'Reportistica KPI mensile'
      ]
    },
    emailMarketing: {
      title: {
        en: 'Email Marketing',
        it: 'Email Marketing'
      },
      content: {
        en: 'Development and management of automated email marketing campaigns for customer retention and lead nurturing.',
        it: 'Sviluppo e gestione di campagne email marketing automatizzate per la fidelizzazione dei clienti e il nurturing dei lead.'
      },
      metrics: [
        'Segmentazione database clienti',
        'Automazione flussi post-acquisto',
        'Newsletter mensile prodotti',
        'Campagne recovery carrelli abbandonati',
        'A/B testing subject lines e contenuti'
      ]
    },
    contentPlanning: {
      title: {
        en: 'Content Strategy',
        it: 'Strategia Contenuti'
      },
      content: {
        en: 'Development of a comprehensive content strategy to enhance brand positioning and support digital marketing initiatives.',
        it: 'Sviluppo di una strategia contenuti completa per migliorare il posizionamento del brand e supportare le iniziative di marketing digitale.'
      },
      metrics: [
        'Pianificazione contenuti social media',
        'Ottimizzazione copy prodotti e-commerce',
        'Creazione contenuti blog SEO-oriented',
        'Gestione shooting fotografici prodotto',
        'Video tutorial e contenuti tecnici'
      ]
    }
  },
  assets: {
    banner: '/assets/hrx-banner1.jpg',
    analytics: [
      '/assets/hrx-analytics1.png',
      '/assets/hrx-growth.png'
    ]
  }
};

// Export project as alias of projectContent for consistency
export const project = projectContent;