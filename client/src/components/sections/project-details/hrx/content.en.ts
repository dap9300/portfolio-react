import { Project } from '@/types';
import { Users, TrendingUp, Calendar } from 'lucide-react';

export const projectContent: Project = {
  id: 2,
  title: {
    en: "HRX - Digital Marketing & Communication",
    it: "HRX - Marketing Digitale & Comunicazione"
  },
  description: {
    en: "Development and implementation of digital marketing strategies for HRX, focusing on social media growth, content creation, and community engagement.",
    it: "Sviluppo e implementazione di strategie di marketing digitale per HRX, con focus sulla crescita social, creazione di contenuti e coinvolgimento della community."
  },
  image: '/assets/banner-hrx.webp',
  technologies: {
    social: [
      'Meta Business Suite',
      'Instagram',
      'Facebook',
      'LinkedIn',
      'Adobe Creative Suite',
      'DaVinci Resolve'
    ],
    web: [
      'Google Analytics',
      'Google Search Console',
      'Google Tag Manager',
      'Google Looker Studio'
    ],
    email: [
      'Mailchimp',
      'Klaviyo'
    ]
  },
  metrics: [
    {
      icon: Users,
      value: '15,244',
      label: {
        en: 'Total Social Followers',
        it: 'Follower Social Totali'
      }
    },
    {
      icon: TrendingUp,
      value: '+225%',
      label: {
        en: 'Instagram Growth',
        it: 'Crescita Instagram'
      }
    },
    {
      icon: Calendar,
      value: '12,455',
      label: {
        en: 'Monthly Users',
        it: 'Utenti Mensili'
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
        en: "Led digital marketing initiatives for HRX, implementing comprehensive strategies across multiple channels.",
        it: "Ho guidato le iniziative di marketing digitale per HRX, implementando strategie complete su più canali."
      },
      metrics: [
        'Instagram: Developed weekly content calendar',
        '- Reach: 245,960 (+125.6%)',
        '- Visits: 41,723 (+85.3%)',
        'Facebook: 8,911 followers (+35.2% YoY)',
        '- Reach: 182,784 (+225.6%)',
        '- Visits: 26,153 (+78.4%)'
      ]
    },
    objectives: {
      title: {
        en: 'Objectives & KPI',
        it: 'Obiettivi & KPI'
      },
      items: [
        'Managed Budget - €50,000',
        'Average CPC - €0.15',
        'CPM - €2.25',
        'Average CTR - 0.95%',
        'Campaign ROI - 3.15%'
      ]
    },
    emailMarketing: {
      title: {
        en: 'Email Marketing',
        it: 'Email Marketing'
      },
      content: {
        en: 'Strategic development and management of email marketing campaigns to drive engagement and sales.',
        it: 'Sviluppo strategico e gestione delle campagne di email marketing per aumentare engagement e vendite.'
      },
      metrics: [
        'Bi-weekly newsletter to 15,000+ subscribers',
        'Average CTR (6.5%) Open Rate (15%)',
        'Automated email flows implementation',
        'Advanced user segmentation strategies'
      ]
    },
    socialMedia: {
      title: {
        en: 'Social Media Strategy',
        it: 'Strategia Social Media'
      },
      content: {
        en: 'Comprehensive social media strategy focused on brand awareness and community growth.',
        it: 'Strategia social media completa focalizzata sulla brand awareness e crescita della community.'
      },
      metrics: [
        'Instagram: +35.2% follower growth YoY',
        'Facebook: +25.1% follower growth YoY',
        'Average engagement rate: 5.8%',
        'Organic reach: +125.6% YoY'
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
        'Weekly content calendar',
        'Cross-platform content optimization',
        'Performance analytics tracking',
        'A/B testing implementation'
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