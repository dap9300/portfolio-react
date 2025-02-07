// client/src/components/sections/project-details/manunta/content.it.ts
import { Project } from '@/types';
import { Users, TrendingUp, MousePointerClick } from 'lucide-react';

export const projectContent: Project = {
  id: 3,
  title: {
    en: "Studi Fisioterapici Manunta - Website & SEO Optimization | Social Media",
    it: "Studi Fisioterapici Manunta - Sito Web & Ottimizzazione SEO | Social Media"
  },
  description: {
    en: "Management of digital marketing strategies for a physiotherapy clinic, focusing on Facebook, Instagram, and Google Ads campaigns to increase online bookings and local brand awareness.",
    it: "Gestione delle strategie di marketing digitale per uno studio di fisioterapia, con focus su campagne Facebook, Instagram e Google Ads per aumentare le prenotazioni online e la brand awareness locale"
  },
  image: '/assets/manunta-banner.jpg',
  technologies: {
    social: [
      'Meta Business Suite',
      'Instagram',
      'Facebook'
    ],
    web: [
      'WordPress',
      'Google Analytics',
      'Google Ads'
    ],
    email: [
      'MailChimp'
    ]
  },
  metrics: [
    {
      icon: Users,
      value: '+45%',
      label: {
        en: 'Online Bookings',
        it: 'Prenotazioni Online'
      }
    },
    {
      icon: TrendingUp,
      value: '+120%',
      label: {
        en: 'Social Media Growth',
        it: 'Crescita Social Media'
      }
    },
    {
      icon: MousePointerClick,
      value: '3.2%',
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
        'WordPress',
        'Google Analytics',
        'Google Ads',
        'MailChimp'
      ]
    },
    overview: {
      title: {
        en: 'Project Overview',
        it: 'Panoramica del Progetto'
      },
      content: {
        en: 'Digital marketing and web presence optimization for a physiotherapy clinic to boost local visibility and online bookings.',
        it: 'Ottimizzazione del marketing digitale e della presenza web per uno studio di fisioterapia per aumentare la visibilità locale e le prenotazioni online.'
      },
      metrics: [
        'Website traffic: +85% YoY',
        'Online bookings: +45% YoY',
        'Local search visibility: +120%',
        'Social media engagement: +75%'
      ]
    },
    objectives: {
      title: {
        en: 'Objectives & KPI',
        it: 'Obiettivi & KPI'
      },
      items: [
        'Increase online bookings by 40%',
        'Improve local SEO rankings',
        'Build social media presence',
        'Enhance website user experience',
        'Implement conversion tracking'
      ]
    },
    socialMedia: {
      title: {
        en: 'Social Media Strategy',
        it: 'Strategia Social Media'
      },
      content: {
        en: 'Implementation of a local-focused social media strategy to build community engagement and increase brand awareness.',
        it: 'Implementazione di una strategia social media focalizzata sul locale per costruire engagement nella community e aumentare la brand awareness.'
      },
      metrics: [
        'Instagram followers: +120% YoY',
        'Facebook page likes: +85% YoY',
        'Average engagement rate: 5.2%',
        'Local reach: +95% YoY'
      ]
    },
    emailMarketing: {
      title: {
        en: 'Email Marketing',
        it: 'Email Marketing'
      },
      content: {
        en: 'Development of targeted email campaigns for patient retention and appointment reminders.',
        it: 'Sviluppo di campagne email mirate per la fidelizzazione dei pazienti e i promemoria degli appuntamenti.'
      },
      metrics: [
        'Monthly newsletter to 5,000+ subscribers',
        'Average open rate: 25%',
        'Click-through rate: 3.2%',
        'Appointment reminder effectiveness: 85%'
      ]
    },
    contentPlanning: {
      title: {
        en: 'Content Planning',
        it: 'Pianificazione Contenuti'
      },
      content: {
        en: 'Strategic content creation focused on educational materials and expert positioning.',
        it: 'Creazione strategica di contenuti focalizzata su materiali educativi e posizionamento come esperti.'
      },
      metrics: [
        'Weekly blog posts',
        'Educational video content',
        'Treatment guides and resources',
        'Patient success stories'
      ]
    }
  },
  assets: {
    banner: '/assets/manunta-banner.jpg',
    analytics: [
      '/assets/manunta-analytics1.png',
      '/assets/manunta-growth.png'
    ]
  }
};

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
    socialStrategy: {
      en: 'Social Media Strategy',
      it: 'Strategia Social Media'
    },
    contentPlanning: {
      en: 'Content Strategy',
      it: 'Strategia dei Contenuti'
    },
    emailMarketing: {
      en: 'Email Marketing',
      it: 'Email Marketing'
    }
  }
};