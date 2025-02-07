import { Users, TrendingUp, Calendar } from 'lucide-react';
import { Project } from '@/types/projects';

export const translations = {
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
    socialMedia: {
      en: 'Social Media Strategy',
      it: 'Strategia Social Media'
    },
    emailMarketing: {
      en: 'Email Marketing',
      it: 'Email Marketing'
    },
    contentPlanning: {
      en: 'Content Planning',
      it: 'Pianificazione Contenuti'
    },
    crowdfunding: {
      en: 'Crowdfunding Campaign',
      it: 'Campagna di Crowdfunding'
    }
  }
};

export const projectContent: Project = {
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
      { name: 'Meta Business Suite', icon: 'meta' },
      { name: 'Instagram', icon: 'instagram' },
      { name: 'Facebook', icon: 'facebook' },
      { name: 'Telegram', icon: 'telegram' },
      { name: 'Adobe Creative Suite', icon: 'adobe' },
      { name: 'DaVinci Resolve', icon: 'davinci' }
    ],
    web: [
      { name: 'WordPress', icon: 'wordpress' },
      { name: 'Google Search Console', icon: 'searchconsole' },
      { name: 'Google Analytics', icon: 'analytics' },
      { name: 'Google Looker Studio', icon: 'looker' }
    ],
    email: [
      { name: 'MailUp', icon: 'mailup' }
    ]
  },
  metrics: [
    {
      icon: Users,
      value: '44,114',
      label: {
        en: 'Total Social Followers',
        it: 'Follower Social Totali'
      }
    },
    {
      icon: TrendingUp,
      value: '+550%',
      label: {
        en: 'Instagram Growth',
        it: 'Crescita Instagram'
      }
    },
    {
      icon: Calendar,
      value: '37,455',
      label: {
        en: 'Annual Users',
        it: 'Utenti Annuali'
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
        en: "I led the digital transformation and implemented communication strategies for one of Turin's major cultural venues, focusing on social media growth and engagement.",
        it: "Ho guidato la trasformazione digitale e implementato strategie di comunicazione per uno dei principali luoghi culturali di Torino, concentrandomi sulla crescita e coinvolgimento sui social media."
      },
      metrics: [
        'Facebook: Sviluppato calendario editoriale mensile',
        '- Copertura: 545.960 (+97,6%)',
        '- Visite: 91.723 (+90,6%)',
        'Instagram: 12.911 follower (+44.2% YoY)',
        '- Copertura: 502.784 (+550,6%)',
        '- Visite: 66.153 (+93.9%)'
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