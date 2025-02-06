// Type imports
import { Project } from '@/types/projects';

// Icon imports
import { Users, Calendar, ShoppingCart, MousePointerClick } from "lucide-react";
import { FaMeta, FaInstagram, FaFacebook, FaTelegram, FaShopify } from "react-icons/fa6";
import { 
  SiDavinciresolve, 
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiGoogleads,
  SiMailchimp
} from "react-icons/si";

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
    }
  }
};

export const project: Project = {
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
      { name: "Meta Business Suite", Icon: FaMeta },
      { name: "Instagram", Icon: FaInstagram },
      { name: "Facebook", Icon: FaFacebook },
      { name: "Telegram", Icon: FaTelegram }
    ],
    web: [
      { name: "Shopify", Icon: FaShopify },
      { name: "Google Analytics", Icon: SiGoogleanalytics },
      { name: "Google Ads", Icon: SiGoogleads },
      { name: "Google Search Console", Icon: SiGooglesearchconsole }
    ],
    email: [
      { name: "MailChimp", Icon: SiMailchimp }
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
        { name: "Meta Business Suite", Icon: FaMeta },
        { name: "Instagram", Icon: FaInstagram },
        { name: "Facebook", Icon: FaFacebook },
        { name: "Shopify", Icon: FaShopify },
        { name: "Google Analytics", Icon: SiGoogleanalytics },
        { name: "Google Ads", Icon: SiGoogleads },
        { name: "MailChimp", Icon: SiMailchimp }
      ]
    },
    overview: {
      title: {
        en: 'Project Overview',
        it: 'Panoramica del Progetto'
      },
      content: {
        en: 'Led digital transformation for HRX, focusing on e-commerce optimization and digital marketing strategies.',
        it: 'Ho guidato la trasformazione digitale di HRX, concentrandomi sull\'ottimizzazione dell\'e-commerce e sulle strategie di marketing digitale.'
      }
    },
    objectives: {
      title: {
        en: 'Objectives & KPI',
        it: 'Obiettivi & KPI'
      },
      content: {
        en: 'Key performance indicators and objectives for the project',
        it: 'Indicatori chiave di performance e obiettivi del progetto'
      },
      items: [
        'Budget gestito - XXX€',
        'CPC MEDIO - 0.10€',
        'CPM - 1.57€',
        'CTR MEDIO - 0.74%',
        'ROI CAMPAGNE - 2.46%'
      ]
    },
    socialMedia: {
      title: {
        en: 'Social Media Strategy',
        it: 'Strategia Social Media'
      },
      content: {
        en: 'Implementation of an integrated social media strategy focused on community growth and engagement.',
        it: 'Implementazione di una strategia social media integrata focalizzata sulla crescita della community e sull\'engagement.'
      },
      metrics: [
        'Instagram: +44.2% crescita follower YoY',
        'Facebook: +3.1% crescita follower YoY',
        'Engagement rate medio: 4.8%',
        'Reach organica: +97.6% YoY'
      ]
    },
    contentPlanning: {
      title: {
        en: 'Content Planning',
        it: 'Pianificazione Contenuti'
      },
      content: {
        en: 'Strategic content planning and creation to maintain consistent brand communication.',
        it: 'Pianificazione strategica e creazione di contenuti per mantenere una comunicazione del brand coerente.'
      },
      metrics: [
        'Piano editoriale mensile',
        'Contenuti ottimizzati per piattaforma',
        'Analisi performance contenuti',
        'A/B testing formati e copy'
      ]
    },
    ecommerce: {
      title: {
        en: 'E-commerce',
        it: 'E-commerce'
      },
      content: {
        en: 'Product page optimization and conversion funnel improvement.',
        it: 'Ottimizzazione delle pagine prodotto e del funnel di conversione.'
      }
    }
  }
};