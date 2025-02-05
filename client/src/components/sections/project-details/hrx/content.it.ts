// client/src/components/sections/project-details/hrx/content.it.ts
import { Users, Calendar, ShoppingCart } from "lucide-react";
import { Project } from "@/types/projects";

export const projectDetailsTranslations = {
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
      en: 'Content Planning',
      it: 'Pianificazione Contenuti'
    },
    emailMarketing: {
      en: 'Email Marketing',
      it: 'Email Marketing'
    },
    crowdfunding: {
      en: 'Results & Performance',
      it: 'Risultati e Performance'
    }
  }
};

export const projectContent: Project = {
  id: 2,
  title: {
    en: "HRX - Digital Marketing Strategy",
    it: "HRX - Strategia di Marketing Digitale"
  },
  description: {
    en: "Development and implementation of digital marketing strategies for a leading HR tech company, focusing on lead generation and brand awareness.",
    it: "Sviluppo e implementazione di strategie di marketing digitale per un'azienda leader nel settore HR tech, con focus sulla generazione di lead e brand awareness."
  },
  image: '/assets/hrx-banner1.jpg',
  technologies: {
    social: [
      'Meta Business Suite',
      'LinkedIn Campaign Manager',
      'HubSpot Marketing Hub',
      'Canva Pro',
      'Adobe Creative Suite'
    ],
    web: [
      'Google Analytics 4',
      'Google Tag Manager',
      'Google Search Console',
      'SEMrush',
      'WordPress'
    ],
    email: [
      'HubSpot',
      'Mailchimp',
      'SendGrid'
    ]
  },
  metrics: [
    {
      icon: Users,
      value: '4.2x',
      label: {
        en: 'Average ROAS',
        it: 'ROAS medio'
      }
    },
    {
      icon: ShoppingCart,
      value: '+22%',
      label: {
        en: 'Lead Generation',
        it: 'Generazione Lead'
      }
    },
    {
      icon: Calendar,
      value: '3.5%',
      label: {
        en: 'CTR Improvement',
        it: 'Miglioramento CTR'
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
        en: 'Advanced marketing tools and platforms utilized in this project',
        it: 'Strumenti di marketing avanzati e piattaforme utilizzate in questo progetto'
      },
      items: [
        'HubSpot Marketing Hub',
        'LinkedIn Campaign Manager',
        'Meta Business Suite',
        'Google Analytics 4',
        'SEMrush',
        'Adobe Creative Suite'
      ]
    },
    contentPlanning: {
      title: {
        en: 'Content Strategy',
        it: 'Strategia dei Contenuti'
      },
      metrics: [
        'Piano editoriale multi-piattaforma',
        'Contenuti SEO-oriented',
        'Lead magnet development',
        'Marketing automation workflow'
      ]
    },
    overview: {
      title: {
        en: 'Project Overview',
        it: 'Panoramica del Progetto'
      },
      content: {
        en: "Led digital marketing initiatives for HRX, implementing comprehensive strategies across multiple channels to drive business growth and market presence.",
        it: "Ho guidato le iniziative di marketing digitale per HRX, implementando strategie complete su più canali per guidare la crescita del business e la presenza sul mercato."
      },
      metrics: [
        'LinkedIn: Developed B2B campaign strategy',
        '- Lead gen: +22% YoY',
        '- Engagement: +45% YoY',
        'Google Ads: ROAS 4.2x',
        '- CTR improvement: +3.5%',
        '- Cost per lead: -18%'
      ]
    }
  },
  assets: {
    banner: '/assets/hrx-banner1.jpg',
    analytics: [
      '/assets/hrx-analytics1.png',
      '/assets/hrx-growth.png'
    ]
  }
};