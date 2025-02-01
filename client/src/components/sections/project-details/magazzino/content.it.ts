import { Project } from '@/types';

export const projectContent: Project = {
  id: 1,
  title: {
    en: "Magazzino sul Po - Digital Marketing Strategy",
    it: "Magazzino sul Po - Strategia di Marketing Digitale"
  },
  description: {
    en: "Digital transformation and communication strategy for one of Turin's main cultural venues.",
    it: "In qualità di Digital Marketing & Communications Specialist presso Magazzino sul Po, ho guidato la trasformazione digitale di uno dei principali luoghi di aggregazione culturale di Torino, gestendo strategie integrate di comunicazione e marketing per promuovere eventi culturali e musicali."
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
      icon: 'rjzlcjqi',
      value: '44,114',
      label: {
        en: 'Total Social Followers',
        it: 'Follower Social Totali'
      }
    },
    {
      icon: 'gkosxwgv',
      value: '+550%',
      label: {
        en: 'Instagram Growth',
        it: 'Crescita Instagram'
      }
    },
    {
      icon: 'mzjnwzka',
      value: '37,455',
      label: {
        en: 'Annual Users',
        it: 'Utenti Annuali'
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
  assets: {
    banner: '/assets/banner-magazzino.webp',
    analytics: [
      '/assets/analytics_maga1.png',
      '/assets/growth.png'
    ]
  }
};