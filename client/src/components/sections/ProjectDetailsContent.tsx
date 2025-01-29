import { Project, Language } from '@/types';

// Project data
export const projectsData: Record<string, Project> = {
  '1': {
    id: 1,
    title: {
      en: 'Magazzino sul Po - Digital Marketing Strategy',
      it: 'Magazzino sul Po - Strategia di Marketing Digitale',
    },
    description: {
      en: `Digital transformation and communication strategy for one of Turin's main cultural venues.
      Facebook: 31,203 followers (+3.1% YoY)
      Coverage: 545,960 (+97.6%)
      Visits: 91,723 (+90.6%)

      Instagram: 12,911 followers (+44.2% YoY)
      Coverage: 502,784 (+550.6%)
      Visits: 66,153 (+93.9%)`,

      it: `In qualità di Digital Marketing & Communications Specialist presso Magazzino sul Po, ho guidato       la trasformazione digitale di uno dei principali luoghi di aggregazione culturale di Torino,   gestendo strategie integrate di comunicazione e marketing per promuovere eventi culturali e musicali.`,
    },
    image: '/assets/banner-magazzino.webp',
    technologies: [
      'Meta Business Suite',
      'Google Analytics',
      'MailerLite',
      'WordPress',
      'Meta Ads',
      'Google Ads',
      'Meta Creator Studio',
      'Canva',
      'Adobe Creative Suite',
      'DICE',
      'WooCommerce',
    ],
    link: '#',
  },
  '2': {
    id: 2,
    title: {
      en: 'HRX Srl - Digital Marketing | Social Media | Ecommerce optimization',
      it: 'HRX Srl - Digital Marketing | Social Media | Ottimizzazione Ecommerce',
    },
    description: {
      en: `Managed digital marketing strategies in the automotive sector, focusing on direct sales through Facebook, Instagram, Google Ads, and email marketing campaigns. Optimized the company's e-commerce for SEO to improve organic positioning and conversions.`,
      it: `Ho gestito strategie di marketing digitale nel settore automotive, con focus sulla vendita diretta tramite campagne Facebook, Instagram, Google Ads ed email marketing. Ho ottimizzato l' e-commerce dell'azienda in ottica SEO per migliorare posizionamento organico e conversioni.`,
    },
    image: '/assets/hrx-banner1.jpg',
    technologies: [
      'Social Media Advertising',
      'Social Media Strategy',
      'Social Media Management',
      'Content Creation',
      'Social Media Analytics',
      'Google Analytics',
      'Email Marketing',
      'Ottimizzazione SEO',
      'Ottimizzazione Ecommerce',
    ],
    link: '#',
  },
  '3': {
    id: 3,
    title: {
      en: 'Studi Fisioterapici Manunta - Website & SEO Optimization | Social Media',
      it: 'Studi Fisioterapici Manunta - Sito Web & Ottimizzazione SEO | Social Media',
    },
    description: {
      en: 'Management of digital marketing strategies for a physiotherapy clinic, focusing on Facebook, Instagram, and Google Ads campaigns to increase online bookings and local brand awareness.',
      it: 'Gestione delle strategie di marketing digitale per uno studio di fisioterapia, con focus su campagne Facebook, Instagram e Google Ads per aumentare le prenotazioni online e la brand awareness locale',
    },
    image: '/assets/manunta-banner.jpg',
    technologies: [
      'Creazione e ottimizzazione Sito Web',
      'Content Creation',
      'Google Analytics',
    ],
    link: '#',
  },
  '4': {
    id: 4,
    title: {
      en: 'Digital Trade Capital - Content Strategy & Editorial Management | Technical SEO & Website Optimization | Lead Generation & Contact Management',
      it: 'Digital Trade Capital - Content Strategy & Editorial Management | Technical SEO & Website Optimization | Lead Generation & Contact Management',
    },
    description: {
      en: 'Managed strategic and operational coordination in a fintech organization, focusing on developing integrated digital strategies, performance optimization, and cross-functional team management.',
      it: "Ho gestito il coordinamento strategico e operativo in un'organizzazione fintech, con un focus sullo sviluppo di strategie digitali integrate, sull'ottimizzazione delle performance e sulla gestione di team cross-funzionali",
    },
    image: '/assets/dtc-banner.jpg',
    technologies: [
      'Team Management',
      'Editorial Management',
      'Content Strategy',
      'Technical SEO',
      'Google Analytics',
      'Email Marketing',
      'Cross-functional Collaboration',
    ],
    link: '#',
  },
};

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
