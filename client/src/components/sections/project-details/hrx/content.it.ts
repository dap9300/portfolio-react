import { Users, Calendar, ShoppingCart, MousePointerClick } from "lucide-react";
import { Project } from "@/types/projects";

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
    ecommerce: {
      en: 'E-commerce',
      it: 'E-commerce'
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
    en: "Digital transformation and communication strategy for HRX.",
    it: "In qualità di prima figura dedicata al marketing digitale in HRX SRL, azienda italiana specializzata nella produzione di abbigliamento tecnico e accessori per il motorsport."
  },
  image: '/assets/hrx-banner1.jpg',
  technologies: {
    social: [
      { name: 'Meta Business Suite', icon: 'meta' },
      { name: 'Instagram', icon: 'instagram' },
      { name: 'Facebook', icon: 'facebook' },
      { name: 'LinkedIn', icon: 'linkedin' },
      { name: 'Adobe Creative Suite', icon: 'adobe' }
    ],
    web: [
      { name: 'Shopify', icon: 'shopify' },
      { name: 'Google Analytics', icon: 'analytics' },
      { name: 'Google Ads', icon: 'ads' }
    ],
    email: [
      { name: 'Mailchimp', icon: 'mailchimp' }
    ]
  },
  metrics: [
    {
      icon: Users,
      value: '4.2x',
      label: {
        en: 'Average ROAS',
        it: 'ROAS Medio'
      }
    },
    {
      icon: ShoppingCart,
      value: '+22%',
      label: {
        en: 'E-commerce CRO',
        it: 'CRO E-commerce'
      }
    },
    {
      icon: MousePointerClick,
      value: '3.5%',
      label: {
        en: 'Average CTR',
        it: 'CTR Medio'
      }
    }
  ],
  detailedSections: {
    overview: {
      title: {
        en: "Project Overview",
        it: "Panoramica del Progetto"
      },
      content: {
        en: "Led digital transformation for HRX, focusing on e-commerce optimization and digital marketing strategies.",
        it: "Ho guidato la trasformazione digitale di HRX, concentrandomi sull'ottimizzazione dell'e-commerce e sulle strategie di marketing digitale."
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
        en: "Objectives & KPI",
        it: "Obiettivi & KPI"
      },
      content: {
        en: "Strategic goals and key performance indicators for the project.",
        it: "Obiettivi strategici e indicatori chiave di performance del progetto."
      },
      metrics: [
        'Increase organic traffic by 80%',
        'Improve lead generation by 100%',
        'Enhance technical SEO performance',
        'Optimize team workflow efficiency'
      ]
    },
    tools: {
      title: {
        en: "Tools & Platforms",
        it: "Strumenti e Piattaforme",
      },
      description: {
        en: "Technologies and platforms used in this project",
        it: "Tecnologie e piattaforme utilizzate in questo progetto",
      },
      items: [
        { name: "Shopify", icon: "shopify" },
        { name: "Google AdSense", icon: "ads" },
        { name: "Google Analytics", icon: "analytics" },
        { name: "Google Looker Studio", icon: "looker" },
        { name: "Google Search Console", icon: "searchconsole" },
        { name: "MailUp", icon: "mailchimp" },
        { name: "Meta Business Suite", icon: "meta" },
        { name: "Instagram", icon: "instagram" },
        { name: "Facebook", icon: "facebook" }
      ],
    },
    socialMedia: {
      title: {
        en: "Social Media Strategy",
        it: "Strategia Social Media",
      },
      content: {
        en: "Implementation of an integrated social media strategy focused on community growth and engagement.",
        it: "Implementazione di una strategia social media integrata focalizzata sulla crescita della community e sull'engagement.",
      },
      metrics: [
        "Instagram: +44.2% crescita follower YoY",
        "Facebook: +3.1% crescita follower YoY",
        "Engagement rate medio: 4.8%",
        "Reach organica: +97.6% YoY",
      ],
    },
    emailMarketing: {
      title: {
        en: "Email Marketing",
        it: "Email Marketing",
      },
      content: {
        en: "Development and management of email marketing campaigns to promote events and engage with the community.",
        it: "Sviluppo e gestione delle campagne di email marketing per promuovere gli eventi e mantenere il contatto con la community.",
      },
      metrics: [
        "Newsletter settimanale a oltre 40.000 iscritti",
        "CTR medio (5%) Tasso di Apertura (10%)",
        "Invio notifiche push circuito Arci",
        "Segmentazione utenza e liste per interessi",
      ],
    },
    contentPlanning: {
      title: {
        en: "Content Planning",
        it: "Pianificazione Contenuti",
      },
      content: {
        en: "Strategic content planning and creation to maintain consistent brand communication.",
        it: "Pianificazione strategica e creazione di contenuti per mantenere una comunicazione del brand coerente.",
      },
      metrics: [
        "Piano editoriale mensile",
        "Contenuti ottimizzati per piattaforma",
        "Analisi performance contenuti",
        "A/B testing formati e copy",
      ],
    },
    ecommerce: {
      title: {
        en: "E-commerce",
        it: "E-commerce",
      },
      content: {
        en: `Product page optimization and conversion funnel improvement to enhance user experience and sales performance.
      Implementation of a product configurator for customization.
      Management of multilingual catalog and SEO optimization.
      SEO & UX Optimization: improved site structure and content to increase organic visibility and navigability.
      UX/UI improvement focusing on customer experience.
      Implementation of Google Analytics for monitoring traffic and user behavior.`,
        it: `Ottimizzazione delle pagine prodotto e del funnel di conversione per migliorare la user experience e le performance di vendita.
      Implementazione di un configuratore prodotto per personalizzazione.
      Gestione del catalogo multilingua e ottimizzazione SEO.
      SEO & UX Optimization: ho migliorato la struttura del sito e i contenuti per aumentare la visibilità organica e la navigabilità.
      Miglioramento UX/UI con focus sulla customer experience.
      Implementazione di Google Analytics per il monitoraggio del traffico e del comportamento degli utenti.`,
      },
    },
  },
  assets: {
    banner: '/assets/hrx-banner1.jpg',
    analytics: [
      '/assets/hrx-analytics1.png',
      '/assets/hrx-performance.png'
    ]
  }
};