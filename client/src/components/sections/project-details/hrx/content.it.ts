// client/src/components/sections/project-details/hrx/content.it.ts
import { Users, Calendar, ShoppingCart } from "lucide-react";
import { Project } from "@/types/projects";

export const projectDetailsTranslations = {
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
      en: 'Social Media Strategy',
      it: 'Strategia Social Media'
    },
    contentPlanning: {
      en: 'Content Planning',
      it: 'Pianificazione Contenuti'
    },
    emailMarketing: {
      en: 'Email Marketing',
      it: 'Email Marketing'
    },
    crowdfunding: {
      en: 'Crowdfunding Campaign',
      it: 'Campagna di Crowdfunding'
    }
  }
};

export const projectContent: Project = {
  id: 2,
  title: {
    en: "HRX - Digital Marketing Strategy",
    it: "HRX - Strategia di Marketing Digitale"
  },
  description: {
    en: "HRX EN DESCRIPTION",
    it: "HRX IT DESCRIPTION"
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
  metrics: [
    {
      icon: Users,
      value: '4,2x',
      label: {
        en: {
          text: 'Average ROAS on Google Ads campaigns',
          tooltip: 'ROAS: Return On Ad Spend - The ratio between the revenue generated from ads and the cost of those ads'
        },
        it: {
          text: 'ROAS medio campagne Google Ads',
          tooltip: 'ROAS: Return On Ad Spend - Il rapporto tra i ricavi generati dalle inserzioni e il costo delle stesse'
        }
      }
    },
    {
      icon: ShoppingCart,
      value: '+22%',
      label: {
        en: {
          text: 'CRO on E-commerce',
          tooltip: 'CRO: Conversion Rate Optimization - The process of increasing the percentage of website visitors who take desired actions (conversions)'
        },
        it: {
          text: 'CRO su E-commerce',
          tooltip: 'CRO: Conversion Rate Optimization - Il processo di ottimizzazione che mira ad aumentare la percentuale di visitatori che completano azioni desiderate (conversioni)'
        }
      }
    },
    {
      icon: Calendar,
      value: '3,5%',
      label: {
        en: {
          text: 'Average CTR on social campaigns',
          tooltip: 'CTR: Click-Through Rate - The ratio of users who click on a specific link to the number of total users who view the content'
        },
        it: {
          text: 'CTR medio su campagne social',
          tooltip: 'CTR: Click-Through Rate - Il rapporto tra il numero di utenti che cliccano su un link specifico e il numero totale di utenti che visualizzano il contenuto'
        }
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
        'WordPress',
        'Google Analytics',
        'MailUp',
        'Adobe Creative Suite'
      ]
    },
    overview: {
      title: {
        en: 'Project Overview',
        it: 'Panoramica del Progetto'
      },
      content: {
        en: "I led the digital transformation and implemented communication strategies for one of Turin's major cultural venues, focusing on social media growth and engagement.",
        it: "Ho guidato la trasformazione digitale e implementato strategie di comunicazione per uno dei principali luoghi culturali di Torino, concentrandomi sulla crescita e coinvolgimento sui social media."
      },
      metrics: [
        'Facebook: Sviluppato calendario editoriale mensile',
        '- Copertura: 545.960 (+97,6%)',
        '- Visite: 91.723 (+90,6%)',
        'Instagram: 12.911 follower (+44,2% YoY)',
        '- Copertura: 502.784 (+550,6%)',
        '- Visite: 66.153 (+93,9%)'
      ]
    },
    objectives: {
      title: {
        en: 'Objectives & KPI',
        it: 'Obiettivi & KPI'
      },
      items: [
        'Budget gestito - XXX€',
        'CPC MEDIO - 0.10€',
        'CPM - 1.57€',
        'CTR MEDIO - 0.74%',
        'ROI CAMPAGNE - 2.46%'
      ]
    },
    socialMedia: {
      title: {
        en: 'Social Media Strategy',
        it: 'Strategia Social Media'
      },
      content: {
        en: 'Implementation of an integrated social media strategy focused on community growth and engagement.',
        it: 'Implementazione di una strategia social media integrata focalizzata sulla crescita della community e sull\'engagement.'
      },
      metrics: [
        'Instagram: +44.2% crescita follower YoY',
        'Facebook: +3.1% crescita follower YoY',
        'Engagement rate medio: 4.8%',
        'Reach organica: +97.6% YoY'
      ]
    },
    emailMarketing: {
      title: {
        en: 'Email Marketing',
        it: 'Email Marketing'
      },
      content: {
        en: 'Development and management of email marketing campaigns to promote events and engage with the community.',
        it: 'Sviluppo e gestione delle campagne di email marketing per promuovere gli eventi e mantenere il contatto con la community.'
      },
      metrics: [
        'Newsletter settimanale a oltre 40.000 iscritti',
        'CTR medio (5%) Tasso di Apertura (10%)',
        'Invio notifiche push circuito Arci',
        'Segmentazione utenza e liste per interessi'
      ]
    },
    contentPlanning: {
      title: {
        en: 'Content Planning',
        it: 'Pianificazione Contenuti'
      },
      content: {
        en: 'Strategic content planning and creation to maintain consistent brand communication.',
        it: 'Pianificazione strategica e creazione di contenuti per mantenere una comunicazione del brand coerente.'
      },
      metrics: [
        'Piano editoriale mensile',
        'Contenuti ottimizzati per piattaforma',
        'Analisi performance contenuti',
        'A/B testing formati e copy'
      ]
    }
  },
  
};