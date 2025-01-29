import { DetailedSections } from '@/types/projects';

export const detailedSections: DetailedSections = {
  overview: {
    title: {
      en: 'Project Overview',
      it: 'Panoramica del Progetto'
    },
    content: {
      en: "Digital transformation and communication strategy implementation for one of Turin's major cultural venues, focusing on social media growth and engagement.",
      it: "Implementazione della strategia di trasformazione digitale e comunicazione per uno dei principali luoghi culturali di Torino, con focus sulla crescita e coinvolgimento sui social media."
    },
    metrics: [
      'Facebook: 31,203 followers (+3.1% YoY)',
      'Coverage: 545,960 (+97.6%)',
      'Visits: 91,723 (+90.6%)'
    ]
  },
  objectives: {
    en: [
      'Increase online visibility',
      'Improve event communication effectiveness',
      'Grow community engagement',
      'Optimize digital presence and campaign performance'
    ],
    it: [
      'Aumentare la visibilità online',
      'Migliorare l\'efficacia della comunicazione degli eventi',
      'Incrementare il coinvolgimento della community',
      'Ottimizzare la presenza digitale e le performance delle campagne'
    ]
  },
  strategies: {
    contentPlanning: {
      en: [
        'Developed monthly editorial calendar',
        'Implemented content categorization system',
        'Created diversified content formats',
        'Optimized post scheduling',
        'Integrated multi-platform strategy'
      ],
      it: [
        'Sviluppato calendario editoriale mensile',
        'Implementato sistema di categorizzazione contenuti',
        'Creato formati di contenuto diversificati',
        'Ottimizzato programmazione dei post',
        'Integrato strategia multipiattaforma'
      ]
    },
    analytics: {
      en: [
        'E-commerce & Newsletter Performance',
        'Online ticket sales revenue: €15,583',
        'Tickets sold: 2,915 (+134% YoY)',
        'Newsletter subscribers: 44,514 (+54%)',
        'Average newsletter open rate: 32%'
      ],
      it: [
        'Performance E-commerce & Newsletter',
        'Ricavi da biglietteria online: €15.583',
        'Biglietti venduti: 2.915 (+134% YoY)',
        'Iscritti newsletter: 44.514 (+54%)',
        'Tasso medio di apertura newsletter: 32%'
      ]
    }
  }
};
