// client/src/components/sections/project-details/dtc/content.en.ts
import { Project } from '@/types';
import { Users, TrendingUp, BarChart } from 'lucide-react';

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
  image: '/assets/dtc-banner.jpg',
  technologies: {
    social: [
      'Team Management',
      'Editorial Management',
      'Content Strategy'
    ],
    web: [
      'Technical SEO',
      'Google Analytics',
      'SEMrush',
      'Ahrefs'
    ],
    email: [
      'HubSpot',
      'monday.com'
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
        'Organic Traffic: +85% YoY',
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
    analytics: {
      title: {
        en: 'Analytics & Performance',
        it: 'Analytics & Performance'
      },
      content: {
        en: 'Comprehensive analytics implementation and performance tracking across all digital channels.',
        it: 'Implementazione analytics completa e monitoraggio performance su tutti i canali digitali.'
      },
      metrics: [
        'Domain Authority: 65/100',
        'Page Speed Score: 95/100',
        'Core Web Vitals: All Passed',
        'Mobile Score: 98/100'
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
    },
    leadGeneration: {
      title: {
        en: 'Lead Generation',
        it: 'Generazione Lead'
      },
      content: {
        en: `Implementation of comprehensive lead generation strategy focused on high-quality prospect acquisition.
        Optimization of conversion funnels and lead scoring systems.
        Integration of marketing automation workflows.
        Development of targeted landing pages and conversion paths.`,
        it: `Implementazione di una strategia completa di lead generation focalizzata sull'acquisizione di prospect di qualità.
        Ottimizzazione dei funnel di conversione e dei sistemi di lead scoring.
        Integrazione di workflow di marketing automation.
        Sviluppo di landing page mirate e percorsi di conversione.`
      }
    },
    teamManagement: {
      title: {
        en: 'Team Management',
        it: 'Gestione Team'
      },
      content: {
        en: `Cross-functional team coordination and workflow optimization.
        Implementation of agile methodologies and sprint planning.
        Performance tracking and KPI monitoring.
        Team training and skill development programs.`,
        it: `Coordinamento team cross-funzionale e ottimizzazione dei workflow.
        Implementazione metodologie agile e pianificazione sprint.
        Monitoraggio performance e KPI.
        Programmi di formazione e sviluppo competenze del team.`
      }
    }
  },
  assets: {
    banner: '/assets/dtc-banner.jpg',
    analytics: [
      '/assets/dtc-analytics1.png',
      '/assets/dtc-performance.png'
    ]
  }
};