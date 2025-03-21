// client/src/components/sections/project-details/manunta/content.ts
import { Project } from '@/types';
import { Users, TrendingUp, Calendar, MousePointerClick } from 'lucide-react';
import { 
  SiMeta,
  SiInstagram,
  SiFacebook,
  SiWordpress,
  SiGoogleanalytics,
  SiCanva,
  SiGooglesearchconsole,
  SiAdobephotoshop,
  SiAdobeillustrator
} from "react-icons/si";
import { AiOutlineShop } from "react-icons/ai";


const translations = {
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
      en: 'Content Strategy',
      it: 'Strategia dei Contenuti'
    },
    emailMarketing: {
      en: 'Email Marketing',
      it: 'Email Marketing'
    }
  }
};

const projectData: Project = {
  id: 3,
  title: {
    en: "Studi Fisioterapici Manunta - Website & SEO Optimization | Social Media",
    it: "Studi Fisioterapici Manunta - Sviluppo Sito Web & Strategia Digitale"
  },
  description: {
    en: "Management of digital marketing strategies for a physiotherapy clinic, focusing on Facebook, Instagram, and Google Ads campaigns to increase online bookings and local brand awareness.",
    it: "Ho progettato e sviluppato il sito web per gli Studi Fisioterapici Manunta, curandone l'architettura, il design e l'ottimizzazione SEO. Mi sono occupato dell'integrazione dei contenuti, della user experience e dell'implementazione di strategie per migliorare la visibilità online."
  },
  image: '/assets/manunta-banner.webp',
  technologies: [
    { name: 'WordPress', Icon: SiWordpress },
    { name: 'Google Search Console', Icon: SiGooglesearchconsole },
    { name: 'Google Analytics', Icon: SiGoogleanalytics },
    { name: 'Google My Business', Icon: AiOutlineShop },
    { name: 'Instagram', Icon: SiInstagram },
    { name: 'Facebook', Icon: SiFacebook },
    { name: 'Adobe Photoshop', Icon: SiAdobephotoshop },
    { name: 'Adobe Illustrator', Icon: SiAdobeillustrator },
    { name: 'Canva', Icon: SiCanva }
 
  ],
  metrics: [
    {
      icon: Users,
      value: '+45%',
      label: {
        en: 'Online Bookings',
        it: 'Prenotazioni Online'
      }
    },
    {
      icon: TrendingUp,
      value: '+120%',
      label: {
        en: 'Social Media Growth',
        it: 'Crescita Social Media'
      }
    },
    {
      icon: Calendar,
      value: '850+',
      label: {
        en: 'Monthly Patients',
        it: 'Pazienti Mensili'
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
        'Meta Business Suite',
        'Instagram',
        'Facebook',
        'WordPress',
        'Google Analytics',
        'Google Ads',
        'MailChimp'
      ]
    },
    overview: {
      title: {
        en: 'Project Overview',
        it: 'Panoramica del Progetto'
      },
      content: {
        en: 'Digital marketing and web presence optimization for a physiotherapy clinic to boost local visibility and online bookings.',
        it: 'Ottimizzazione del marketing digitale e della presenza web per uno studio di fisioterapia per aumentare la visibilità locale e le prenotazioni online.'
      },
      metrics: [
        'Website traffic: +85% YoY',
        'Online bookings: +45% YoY',
        'Local search visibility: +120%',
        'Social media engagement: +75%'
      ]
    },
    objectives: {
      title: {
        en: 'Objectives & KPI',
        it: 'Obiettivi & KPI'
      },
      items: [
        'Increase online bookings by 40%',
        'Improve local SEO rankings',
        'Build social media presence',
        'Enhance website user experience',
        'Implement conversion tracking'
      ]
    },
    socialMedia: {
      title: {
        en: 'Social Media Strategy',
        it: 'Strategia Social Media'
      },
      content: {
        en: 'Implementation of a local-focused social media strategy to build community engagement and increase brand awareness.',
        it: 'Implementazione di una strategia social media focalizzata sul locale per costruire engagement nella community e aumentare la brand awareness.'
      },
      metrics: [
        'Instagram followers: +120% YoY',
        'Facebook page likes: +85% YoY',
        'Average engagement rate: 5.2%',
        'Local reach: +95% YoY'
      ]
    },
    emailMarketing: {
      title: {
        en: 'Email Marketing',
        it: 'Email Marketing'
      },
      content: {
        en: 'Development of targeted email campaigns for patient retention and appointment reminders.',
        it: 'Sviluppo di campagne email mirate per la fidelizzazione dei pazienti e i promemoria degli appuntamenti.'
      },
      metrics: [
        'Monthly newsletter to 5,000+ subscribers',
        'Average open rate: 25%',
        'Click-through rate: 3.2%',
        'Appointment reminder effectiveness: 85%'
      ]
    },
    contentPlanning: {
      title: {
        en: 'Content Planning',
        it: 'Pianificazione Contenuti'
      },
      content: {
        en: 'Strategic content creation focused on educational materials and expert positioning.',
        it: 'Creazione strategica di contenuti focalizzata su materiali educativi e posizionamento come esperti.'
      },
      metrics: [
        'Weekly blog posts',
        'Educational video content',
        'Treatment guides and resources',
        'Patient success stories'
      ]
    },
    services: {
      title: {
        en: 'Medical Services',
        it: 'Servizi Medici'
      },
      content: {
        en: `Core physiotherapy treatments and specialized services, focusing on patient care and recovery optimization.
        Implementation of online booking system and patient follow-up.
        Development of educational content and treatment resources.
        Integration of telehealth consultations.`,
        it: `Trattamenti fisioterapici core e servizi specializzati, con focus sulla cura del paziente e l'ottimizzazione del recupero.
        Implementazione sistema di prenotazione online e follow-up pazienti.
        Sviluppo di contenuti educativi e risorse per i trattamenti.
        Integrazione di consulenze in telemedicina.`
      }
    }
  },
  assets: {
    banner: '/assets/manunta-banner.jpg',
    analytics: [
      '/assets/manunta-analytics1.png',
      '/assets/manunta-growth.png'
    ]
  }
};

export { translations, translations as projectDetailsTranslations, projectData, projectData as projectContent };
