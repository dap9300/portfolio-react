// client/src/components/sections/project-details/dtc/content.it.ts
import { Project } from '@/types';
import { Users, TrendingUp, BarChart } from 'lucide-react';

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
    contentStrategy: {
      en: 'Content Strategy',
      it: 'Strategia dei Contenuti'
    },
    leadGeneration: {
      en: 'Lead Generation',
      it: 'Generazione Lead'
    },
    teamManagement: {
      en: 'Team Management',
      it: 'Gestione Team'
    }
  }
};

// Export both versions
export const translations = translationsData;
export const projectDetailsTranslations = translationsData;

export const projectContent: Project = {
  id: 4,
  title: {
    en: "Digital Trade Capital - Content Strategy & Editorial Management | Technical SEO & Website Optimization | Lead Generation & Contact Management",
    it: "Digital Trade Capital - Content Strategy & Editorial Management | Technical SEO & Website Optimization | Lead Generation & Contact Management"
  },
  description: {
    en: "Managed strategic and operational coordination in a fintech organization, focusing on developing integrated digital strategies, performance optimization, and cross-functional team management.",
    it: "Ho gestito il coordinamento strategico e operativo in un'organizzazione fintech, con un focus sullo sviluppo di strategie digitali integrate, sull'ottimizzazione delle performance e sulla gestione di team cross-funzionali"
  },
  image: '/assets/dtc-banner.webp',
  technologies: {
    social: [
      'Team Management',
      'Editorial Management',
      'Content Strategy'
    ],
    web: [
      'Technical SEO',
      'Google Analytics',
      'Google Search Console'
    ],
    email: [
      'Email Marketing',
      'Cross-functional Collaboration'
    ]
  },
  metrics: [
    {
      icon: Users,
      value: '+85%',
      label: {
        en: 'Organic Traffic',
        it: 'Traffico Organico'
      }
    },
    {
      icon: TrendingUp,
      value: '+150%',
      label: {
        en: 'Lead Generation',
        it: 'Generazione Lead'
      }
    },
    {
      icon: BarChart,
      value: '4.5x',
      label: {
        en: 'Conversion Rate',
        it: 'Tasso di Conversione'
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
        'Google Analytics',
        'Google Search Console',
        'SEMrush',
        'Ahrefs',
        'HubSpot',
        'Mailchimp',
        'monday.com'
      ]
    },
    overview: {
      title: {
        en: 'Project Overview',
        it: 'Panoramica del Progetto'
      },
      content: {
        en: "Strategic coordination and digital transformation for a fintech organization, focusing on integrated digital strategies and team management.",
        it: "Coordinamento strategico e trasformazione digitale per un'organizzazione fintech, con focus sulle strategie digitali integrate e la gestione del team."
      },
      metrics: [
        'SEO Traffic: +85% YoY',
        'Lead Generation: +150% YoY',
        'Conversion Rate: 4.5x improvement',
        'Team Performance: +65% efficiency'
      ]
    },
    objectives: {
      title: {
        en: 'Objectives & KPI',
        it: 'Obiettivi & KPI'
      },
      items: [
        'Increase organic traffic by 80%',
        'Improve lead generation by 100%',
        'Enhance technical SEO performance',
        'Optimize team workflow efficiency',
        'Boost content engagement metrics'
      ]
    },
    contentStrategy: {
      title: {
        en: 'Content Strategy',
        it: 'Strategia dei Contenuti'
      },
      content: {
        en: 'Development and implementation of comprehensive content strategy focused on fintech industry leadership and expertise.',
        it: 'Sviluppo e implementazione di una strategia di contenuti completa focalizzata sulla leadership e competenza nel settore fintech.'
      },
      metrics: [
        'Content engagement: +120% YoY',
        'Industry authority score: +85%',
        'Organic keyword ranking: +200%',
        'Content conversion rate: 4.5%'
      ]
    }
  },
  assets: {
    banner: '/assets/dtc-banner.jpg',
    analytics: [
      '/assets/dtc-analytics1.png',
      '/assets/dtc-growth.png'
    ]
  }
};