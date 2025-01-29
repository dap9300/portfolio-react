import { Project, Language } from '@/types';

// Project metrics
export const projectMetrics: Record<
  string,
  Array<{
    icon: string;
    value: string;
    label: Record<Language, string>;
  }>
> = {
  '1': [
    {
      icon: 'rjzlcjqi',
      value: '44,114',
      label: { en: 'Total Social Followers', it: 'Follower Social Totali' },
    },
    {
      icon: 'gkosxwgv',
      value: '+550%',
      label: { en: 'Instagram Growth', it: 'Crescita Instagram' },
    },
    {
      icon: 'mzjnwzka',
      value: '37,455',
      label: { en: 'Annual Users', it: 'Utenti Annuali' },
    },
  ],
  '2': [
    {
      icon: 'gkosxwgv',
      value: '+200%',
      label: { en: 'Sales Growth', it: 'Crescita Vendite' },
    },
    {
      icon: 'rjzlcjqi',
      value: '15K+',
      label: { en: 'Monthly Visitors', it: 'Visitatori Mensili' },
    },
    {
      icon: 'lupuorrc',
      value: '3.2x',
      label: { en: 'ROAS', it: 'ROAS' },
    },
  ],
  '3': [
    {
      icon: 'mzjnwzka',
      value: '+150%',
      label: { en: 'Bookings Growth', it: 'Crescita Prenotazioni' },
    },
    {
      icon: 'msoeawqm',
      value: '+80%',
      label: { en: 'Local SEO Visibility', it: 'Visibilità SEO Locale' },
    },
    {
      icon: 'gkosxwgv',
      value: '+120%',
      label: { en: 'Social Engagement', it: 'Engagement Social' },
    },
  ],
  '4': [
    {
      icon: 'rjzlcjqi',
      value: '50K+',
      label: { en: 'Monthly Reach', it: 'Reach Mensile' },
    },
    {
      icon: 'lupuorrc',
      value: '+180%',
      label: { en: 'Lead Generation', it: 'Generazione Lead' },
    },
    {
      icon: 'msoeawqm',
      value: '+90%',
      label: { en: 'Organic Traffic', it: 'Traffico Organico' },
    },
  ],
};

// Gallery images
export const projectImages = {
  '1': [
    '/assets/oldsocial1.png',
    '/assets/oldsocial2.png',
    '/assets/sito-eventi-1.png',
  ],
};

// Section data for Magazzino sul Po
export const detailedSections = {
  overview: {
    en: {
      title: 'Project Overview',
      metrics: [
        'Facebook: Sviluppato calendario editoriale mensile',
        '- Reach: 545,960 (+97.6%)',
        '- Visits: 91,723 (+90.6%)',
        'Instagram: 12,911 followers (+44.2% YoY)',
        '- Reach: 502,784 (+550.6%)',
        '- Visits: 66,153 (+93.9%)',
      ],
    },
    it: {
      title: 'Panoramica del Progetto',
      metrics: [
        'Facebook: Sviluppato calendario editoriale mensile',
        '- Copertura: 545.960 (+97,6%)',
        '- Visite: 91.723 (+90,6%)',
        'Instagram: 12.911 follower (+44,2% YoY)',
        '- Copertura: 502.784 (+550,6%)',
        '- Visite: 66.153 (+93,9%)',
      ],
    },
  },
  objectives: {
    en: [
      'Increase social media presence and engagement',
      'Improve website traffic and user experience',
      'Boost online ticket sales',
      'Enhance brand awareness',
      'Develop effective email marketing strategy',
    ],
    it: [
      'Budget gestito - XXX€',
      'CPC MEDIO - 0.10€',
      'CPM - 1.57€',
      'CTR MEDIO - 0.74%',
      'ROI CAMPAGNE - 2.46%',
    ],
  },
  strategies: {
    contentPlanning: {
      en: [
        'Developed monthly editorial calendar',
        'Implemented content categorization system',
        'Created diverse content formats',
        'Optimized posting schedules',
        'Integrated multi-platform strategy',
      ],
      it: [
        'Newsletter settimanale a oltre 40.000 iscritti',
        'CTR medio (5%) Tasso di Apertura (10%)',
        'Invio notifiche push circuito Arci',
        'Segmentazione utenza e liste per interessi',
        'Integrazione con strategie online dedicate',
      ],
    },
    analytics: {
      en: [
        'Monitored KPIs across platforms',
        'Analyzed content performance',
        'Optimized hashtag strategy',
        'Tracked conversion rates',
        'Generated monthly reports',
      ],
      it: [
        'Monitorato KPI su tutte le piattaforme',
        'Analizzato performance dei contenuti',
        'Ottimizzato strategia hashtag',
        'Tracciato tassi di conversione',
        'Generato report mensili',
      ],
    },
  },
};

// Section translations
export const translations = {
  back: {
    en: 'Back to Projects',
    it: 'Torna ai Progetti',
  },
  overview: {
    en: 'Project Overview',
    it: 'Panoramica del Progetto',
  },
  tools: {
    en: 'Tools & Platforms',
    it: 'Strumenti e Piattaforme',
    subtitle: {
      en: 'Technologies and platforms used in this project',
      it: 'Tecnologie e piattaforme utilizzate in questo progetto',
    },
  },
  gallery: {
    en: 'Project Gallery',
    it: 'Galleria del Progetto',
  },
  navigation: {
    previous: {
      en: 'Previous',
      it: 'Precedente',
    },
    next: {
      en: 'Next',
      it: 'Successivo',
    },
  },
  projectDetails: {
    overview: {
      en: 'Social Media & Content Creation',
      it: 'Social Media & Content Creation',
    },
    objectives: {
      en: 'Advertising & Analytics',
      it: 'Advertising & Analytics',
    },
    keyResults: {
      en: 'Sito Web',
      it: 'Sito Web',
    },
    strategies: {
      en: 'Campagna Crowdfunding',
      it: '4. Strategie & Progetti',
    },
    specialProjects: {
      en: 'Campagna Crowdfunding',
      it: 'Campagna Crowdfunding',
    },
    contentPlanning: {
      en: 'Email Marketing',
      it: 'Email Marketing',
    },
    crowdfunding: {
      en: 'FIUMEDENTRO Crowdfunding Campaign',
      it: 'Campagna Crowdfunding FIUMEDENTRO',
      results: {
        en: [
          '€5,597 total funds raised',
          '300+ individual supporters',
          'Multichannel promotion strategy',
          'Community engagement campaign',
          'Social media awareness drive',
        ],
        it: [
          '€5.597 fondi totali raccolti',
          '300+ sostenitori individuali',
          'Strategia promozionale multicanale',
          'Campagna di coinvolgimento community',
          'Campagna di sensibilizzazione social',
        ],
      },
    },
  },
};
