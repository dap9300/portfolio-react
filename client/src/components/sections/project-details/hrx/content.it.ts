// Importazione delle icone Lucide React per le metriche
import { Users, Calendar, ShoppingCart, MousePointerClick } from "lucide-react";

// Importazione delle icone FontAwesome per i social media e piattaforme
import { FaMeta, FaInstagram, FaFacebook, FaTelegram, FaShopify, FaGoogle } from "react-icons/fa6";

// Importazione delle icone Simple Icons per strumenti e servizi
import {
  SiDavinciresolve,
  SiGoogleanalytics,
  SiLooker,
  SiGooglesearchconsole,
  SiGoogleads,
  SiMailchimp
} from "react-icons/si";

// Importazione del tipo Project
import { Project } from "@/types/projects";

// Traduzioni per le sezioni del progetto
export const projectDetailsTranslations = {
  back: {
    en: "Back to Projects",
    it: "Torna ai Progetti",
  },
  projectDetails: {
    overview: {
      en: "Project Overview",
      it: "Panoramica del Progetto",
    },
    tools: {
      en: "Tools & Platforms",
      it: "Strumenti e Piattaforme",
    },
    objectives: {
      en: "Objectives",
      it: "Obiettivi",
    },
    socialStrategy: {
      en: "Social Media Strategy",
      it: "Strategia Social Media",
    },
    contentPlanning: {
      en: "Content Planning",
      it: "Pianificazione Contenuti",
    },
    emailMarketing: {
      en: "Email Marketing",
      it: "Email Marketing",
    },
    crowdfunding: {
      en: "E-commerce",
      it: "E-commerce",
    },
  },
};

// Contenuto principale del progetto
export const project: Project = {
  id: 2,
  title: {
    en: "HRX - Digital Marketing Strategy",
    it: "HRX - Strategia di Marketing Digitale"
  },
  description: {
    en: "Digital transformation and communication strategy for HRX.",
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
      'Google Ads'
    ],
    email: [
      'Mailchimp'
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
    tools: {
      title: {
        en: 'Tools & Platforms',
        it: 'Strumenti e Piattaforme'
      },
      description: {
        en: 'Technologies and platforms used in this project',
        it: 'Tecnologie e piattaforme utilizzate in questo progetto'
      },
      items: [
        'Meta Business Suite',
        'Instagram',
        'Facebook',
        'Shopify',
        'Google Analytics',
        'Google Ads',
        'Mailchimp'
      ]
    },
    overview: {
      title: {
        en: 'Project Overview',
        it: 'Panoramica del Progetto'
      },
      content: {
        en: 'Led digital transformation for HRX, focusing on e-commerce optimization and digital marketing strategies.',
        it: 'Ho guidato la trasformazione digitale di HRX, concentrandomi sull\'ottimizzazione dell\'e-commerce e sulle strategie di marketing digitale.'
      }
    }
  }
};

import { Project } from '@/types';
import { Users, TrendingUp, Calendar } from 'lucide-react';

export const projectContent: Project = {
  id: 2,
  title: {
    en: "HRX - Digital Marketing Strategy",
    it: "HRX - Strategia di Marketing Digitale"
  },
  description: {
    en: "Digital transformation and communication strategy for HRX.",
    it: "In qualità di prima figura dedicata al marketing digitale in HRX SRL, azienda italiana specializzata nella produzione di abbigliamento tecnico e accessori per il motorsport."
  },
  image: '/assets/banner-hrx.webp',
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
      icon: TrendingUp,
      value: '+22%',
      label: {
        en: 'E-commerce CRO',
        it: 'CRO E-commerce'
      }
    },
    {
      icon: Calendar,
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
        en: 'Led digital transformation for HRX, focusing on e-commerce optimization and digital marketing strategies.',
        it: 'Ho guidato la trasformazione digitale di HRX, concentrandomi sull\'ottimizzazione dell\'e-commerce e sulle strategie di marketing digitale.'
      },
      metrics: [
        'Instagram: Weekly content calendar implementation',
        'Reach: 245,960 (+125.6%)',
        'Visits: 41,723 (+85.3%)',
        'Facebook: 8,911 followers (+35.2% YoY)',
        'Reach: 182,784 (+225.6%)',
        'Engagement: +78.4%'
      ]
    },
    objectives: {
      title: {
        en: 'Objectives & KPI',
        it: 'Obiettivi & KPI'
      },
      items: [
        'Budget gestito - €50.000',
        'CPC Medio - €0.15',
        'CPM - €2.25',
        'CTR Medio - 0.95%',
        'ROI Campagne - 3.15%'
      ]
    },
    emailMarketing: {
      title: {
        en: 'Email Marketing',
        it: 'Email Marketing'
      },
      content: {
        en: 'Strategic development and management of email marketing campaigns.',
        it: 'Sviluppo strategico e gestione delle campagne di email marketing.'
      },
      metrics: [
        'Newsletter bisettimanale a 15.000+ iscritti',
        'CTR medio (6.5%) Tasso di Apertura (15%)',
        'Implementazione flussi email automatizzati',
        'Strategie avanzate di segmentazione utenti'
      ]
    },
    socialMedia: {
      title: {
        en: 'Social Media Strategy',
        it: 'Strategia Social Media'
      },
      content: {
        en: 'Comprehensive social media strategy focused on brand awareness.',
        it: 'Strategia social media completa focalizzata sulla brand awareness.'
      },
      metrics: [
        'Instagram: +35.2% crescita follower YoY',
        'Facebook: +25.1% crescita follower YoY',
        'Engagement rate medio: 5.8%',
        'Reach organica: +125.6% YoY'
      ]
    },
    contentPlanning: {
      title: {
        en: 'Content Planning',
        it: 'Pianificazione Contenuti'
      },
      content: {
        en: 'Strategic content planning and creation for brand communication.',
        it: 'Pianificazione strategica e creazione contenuti per la comunicazione del brand.'
      },
      metrics: [
        'Piano editoriale settimanale',
        'Ottimizzazione contenuti cross-platform',
        'Tracciamento analytics performance',
        'Implementazione A/B testing'
      ]
    },
    tools: {
      title: {
        en: 'Tools & Platforms',
        it: 'Strumenti e Piattaforme'
      },
      description: {
        en: 'Technologies and platforms used in this project',
        it: 'Tecnologie e piattaforme utilizzate in questo progetto'
      },
      items: [
        'Meta Business Suite',
        'Instagram',
        'Facebook',
        'LinkedIn',
        'Google Analytics',
        'Mailchimp',
        'Adobe Creative Suite'
      ]
    }
  },
  assets: {
    banner: '/assets/banner-hrx.webp',
    analytics: [
      '/assets/analytics_hrx1.png',
      '/assets/growth_hrx.png'
    ]
  }
};