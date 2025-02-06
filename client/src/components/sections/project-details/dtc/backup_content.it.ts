// Backup of original dtc content.it.ts
import { Project } from '@/types/projects';
import { Users, TrendingUp, ShoppingCart } from 'lucide-react';
import { 
  SiShopify, 
  SiGoogleanalytics, 
  SiGoogleads, 
  SiFacebook, 
  SiInstagram,
  SiMailchimp
} from 'react-icons/si';

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
    },
    ecommerce: {
      en: "E-commerce",
      it: "E-commerce"
    }
  }
};

export const project: Project = {
  id: 4,
  title: {
    en: "DTC - E-commerce & Digital Marketing Strategy",
    it: "DTC - Strategia E-commerce & Marketing Digitale"
  },
  description: {
    en: "Development and implementation of digital marketing strategies for an e-commerce business, focusing on performance marketing and social media campaigns.",
    it: "Sviluppo e implementazione di strategie di marketing digitale per un'attività e-commerce, con focus su performance marketing e campagne social media."
  },
  image: '/assets/dtc-banner.jpg',
  technologies: {
    web: [
      {
        name: "Shopify",
        Icon: SiShopify
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
    ],
    email: [
      {
        name: "Mailchimp",
        Icon: SiMailchimp
      }
    ]
  },
  metrics: [
    {
      icon: ShoppingCart,
      value: "+180%",
      label: {
        en: "Sales Growth",
        it: "Crescita Vendite"
      }
    },
    {
      icon: Users,
      value: "3.2x",
      label: {
        en: "ROAS",
        it: "ROAS"
      }
    },
    {
      icon: TrendingUp,
      value: "+95%",
      label: {
        en: "Website Traffic",
        it: "Traffico Web"
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
          name: "Shopify",
          Icon: SiShopify
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
        },
        {
          name: "Mailchimp",
          Icon: SiMailchimp
        }
      ]
    },
    overview: {
      title: {
        en: "Project Overview",
        it: "Panoramica del Progetto"
      },
      content: {
        en: "Led the e-commerce growth strategy, implementing performance marketing campaigns and optimizing the conversion funnel to boost sales.",
        it: "Ho guidato la strategia di crescita e-commerce, implementando campagne di performance marketing e ottimizzando il funnel di conversione per aumentare le vendite."
      },
      metrics: [
        {
          icon: ShoppingCart,
          value: "E-commerce optimization",
          label: { en: "E-commerce Optimization", it: "Ottimizzazione E-commerce" }
        },
        {
          icon: Users,
          value: "Performance marketing",
          label: { en: "Performance Marketing", it: "Performance Marketing" }
        },
        {
          icon: TrendingUp,
          value: "Analytics and reporting",
          label: { en: "Analytics & Reporting", it: "Analytics e Reporting" }
        }
      ]
    },
    objectives: {
      en: [
        "Increased e-commerce sales",
        "Improved ROAS",
        "Enhanced customer retention",
        "Optimized conversion funnel",
        "Expanded customer base"
      ],
      it: [
        "Aumento delle vendite e-commerce",
        "Miglioramento del ROAS",
        "Incremento della fidelizzazione clienti",
        "Ottimizzazione del funnel di conversione",
        "Espansione della base clienti"
      ]
    },
    strategies: {
      contentPlanning: {
        en: [
          "E-commerce product content strategy",
          "Monthly content calendar",
          "Product descriptions optimization",
          "Brand storytelling"
        ],
        it: [
          "Strategia contenuti e-commerce",
          "Calendario contenuti mensile",
          "Ottimizzazione descrizioni prodotti",
          "Storytelling del brand"
        ]
      },
      analytics: {
        en: [
          "E-commerce tracking setup",
          "Customer journey analysis",
          "Conversion funnel optimization",
          "A/B testing implementation"
        ],
        it: [
          "Setup tracking e-commerce",
          "Analisi customer journey",
          "Ottimizzazione funnel di conversione",
          "Implementazione A/B testing"
        ]
      },
      social: {
        en: [
          "Social commerce strategy",
          "Product launch campaigns",
          "Influencer marketing",
          "Social ads optimization"
        ],
        it: [
          "Strategia social commerce",
          "Campagne lancio prodotti",
          "Marketing con influencer",
          "Ottimizzazione social ads"
        ]
      },
      email: {
        en: [
          "Email marketing automation",
          "Customer segmentation",
          "Abandoned cart recovery",
          "Loyalty program emails"
        ],
        it: [
          "Automazione email marketing",
          "Segmentazione clienti",
          "Recupero carrelli abbandonati",
          "Email programma fedeltà"
        ]
      }
    },
    ecommerce: {
      title: {
        en: "E-commerce",
        it: "E-commerce"
      },
      content: {
        en: "Implemented a comprehensive e-commerce strategy focusing on user experience, conversion optimization, and customer retention through targeted marketing campaigns and personalized customer journeys.",
        it: "Implementata una strategia e-commerce completa focalizzata sulla user experience, ottimizzazione delle conversioni e fidelizzazione dei clienti attraverso campagne di marketing mirate e customer journey personalizzati."
      }
    }
  },
  assets: {
    banner: '/assets/dtc-banner.jpg',
    gallery: [
      '/assets/dtc-website.png',
      '/assets/dtc-social.png'
    ]
  }
};
