// Backup of original manunta content.it.ts
import { Project } from '@/types/projects';
import { Users, TrendingUp, MousePointerClick } from 'lucide-react';
import { SiWordpress, SiGoogleanalytics, SiGoogleads, SiFacebook, SiInstagram } from 'react-icons/si';

// Original content follows
export const projectDetailsTranslations = {
  back: {
    en: "Back to Projects",
    it: "Torna ai Progetti"
  },
  projectDetails: {
    overview: {
      en: "Project Overview",
      it: "Panoramica del Progetto"
    },
    tools: {
      en: "Tools & Platforms",
      it: "Strumenti e Piattaforme"
    },
    objectives: {
      en: "Objectives",
      it: "Obiettivi"
    },
    socialStrategy: {
      en: "Social Media Strategy",
      it: "Strategia Social Media"
    },
    contentPlanning: {
      en: "Content Planning",
      it: "Pianificazione Contenuti"
    },
    emailMarketing: {
      en: "Email Marketing",
      it: "Email Marketing"
    }
  }
};

export const project: Project = {
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
    web: [
      {
        name: "WordPress",
        Icon: SiWordpress
      },
      {
        name: "Google Analytics",
        Icon: SiGoogleanalytics
      },
      {
        name: "Google Ads",
        Icon: SiGoogleads
      }
    ],
    social: [
      {
        name: "Facebook",
        Icon: SiFacebook
      },
      {
        name: "Instagram",
        Icon: SiInstagram
      }
    ]
  },
  metrics: [
    {
      icon: Users,
      value: "+150%",
      label: {
        en: "Online Bookings",
        it: "Prenotazioni Online"
      }
    },
    {
      icon: TrendingUp,
      value: "+85%",
      label: {
        en: "Organic Traffic",
        it: "Traffico Organico"
      }
    },
    {
      icon: MousePointerClick,
      value: "2.8%",
      label: {
        en: "Average CTR",
        it: "CTR Medio"
      }
    }
  ],
  detailedSections: {
    tools: {
      title: {
        en: "Tools & Platforms",
        it: "Strumenti e Piattaforme"
      },
      description: {
        en: "Technologies and platforms used in this project",
        it: "Tecnologie e piattaforme utilizzate in questo progetto"
      },
      items: [
        {
          name: "WordPress",
          Icon: SiWordpress
        },
        {
          name: "Google Analytics",
          Icon: SiGoogleanalytics
        },
        {
          name: "Google Ads",
          Icon: SiGoogleads
        },
        {
          name: "Facebook",
          Icon: SiFacebook
        },
        {
          name: "Instagram",
          Icon: SiInstagram
        }
      ]
    },
    overview: {
      title: {
        en: "Project Overview",
        it: "Panoramica del Progetto"
      },
      content: {
        en: "Led the digital transformation for a physiotherapy clinic, implementing SEO strategies and managing social media campaigns to boost online visibility and patient bookings.",
        it: "Ho guidato la trasformazione digitale di uno studio di fisioterapia, implementando strategie SEO e gestendo campagne social media per aumentare la visibilità online e le prenotazioni dei pazienti."
      },
      metrics: [
        {
          icon: Users,
          value: "Website optimization",
          label: { en: "Website Optimization", it: "Ottimizzazione del sito web" }
        },
        {
          icon: TrendingUp,
          value: "Social media management",
          label: { en: "Social Media Management", it: "Gestione dei social media" }
        },
        {
          icon: MousePointerClick,
          value: "SEO strategy",
          label: { en: "SEO Strategy", it: "Strategia SEO" }
        }
      ]
    },
    objectives: {
      en: [
        "Increase in online visibility",
        "Growth in patient bookings",
        "Improved local search rankings",
        "Enhanced social media presence",
        "Better conversion rates"
      ],
      it: [
        "Aumento della visibilità online",
        "Crescita delle prenotazioni dei pazienti",
        "Miglioramento del posizionamento nelle ricerche locali",
        "Potenziamento della presenza sui social media",
        "Miglioramento dei tassi di conversione"
      ]
    },
    strategies: {
      contentPlanning: {
        en: [
          "Creation of healthcare-focused content",
          "Monthly content calendar development",
          "SEO-optimized blog posts",
          "Patient success stories"
        ],
        it: [
          "Creazione di contenuti focalizzati sulla salute",
          "Sviluppo calendario contenuti mensile",
          "Articoli blog ottimizzati per SEO",
          "Storie di successo dei pazienti"
        ]
      },
      analytics: {
        en: [
          "Conversion tracking implementation",
          "User behavior analysis",
          "Campaign performance monitoring",
          "ROI analysis"
        ],
        it: [
          "Implementazione tracciamento conversioni",
          "Analisi comportamento utenti",
          "Monitoraggio performance campagne",
          "Analisi ROI"
        ]
      },
      social: {
        en: [
          "Social media content strategy",
          "Community engagement",
          "Paid advertising campaigns",
          "Audience targeting"
        ],
        it: [
          "Strategia contenuti social media",
          "Engagement della community",
          "Campagne pubblicitarie a pagamento",
          "Targeting del pubblico"
        ]
      },
      email: {
        en: [
          "Email campaign automation",
          "Subscriber segmentation",
          "A/B testing",
          "Performance tracking"
        ],
        it: [
          "Automazione campagne email",
          "Segmentazione iscritti",
          "A/B testing",
          "Monitoraggio performance"
        ]
      }
    }
  },
  assets: {
    banner: '/assets/manunta-banner.jpg',
    gallery: [
      '/assets/manunta-website.png',
      '/assets/manunta-social.png'
    ]
  }
};
