import { Project } from '@/types';

export const projectContent: Project = {
  id: 1,
  title: {
    en: "Magazzino sul Po - Digital Marketing Strategy",
    it: "Magazzino sul Po - Strategia di Marketing Digitale"
  },
  description: {
    en: `Digital transformation and communication strategy for one of Turin's main cultural venues.
    Facebook: 31,203 followers (+3.1% YoY)
    Coverage: 545,960 (+97.6%)
    Visits: 91,723 (+90.6%)

    Instagram: 12,911 followers (+44.2% YoY)
    Coverage: 502,784 (+550.6%)
    Visits: 66,153 (+93.9%)`,
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
        en: 'I led the digital transformation and implemented communication strategies for one of Turin\'s major cultural venues, focusing on social media growth and engagement.',
        it: 'Ho guidato la trasformazione digitale e implementato strategie di comunicazione per uno dei principali luoghi culturali di Torino, concentrandomi sulla crescita e coinvolgimento sui social media.'
      },
      metrics: [
        'Facebook: Developed monthly editorial calendar',
        '- Reach: 545,960 (+97.6%)',
        '- Visits: 91,723 (+90.6%)',
        'Instagram: 12,911 followers (+44.2% YoY)',
        '- Reach: 502,784 (+550.6%)',
        '- Visits: 66,153 (+93.9%)'
      ]
    },
    objectives: {
      title: {
        en: 'Objectives & KPI',
        it: 'Obiettivi & KPI'
      },
      items: [
        'Managed Budget - XXX€',
        'Average CPC - 0.10€',
        'CPM - 1.57€',
        'Average CTR - 0.74%',
        'Campaign ROI - 2.46%'
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