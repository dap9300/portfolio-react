// client/src/components/sections/project-details/magazzino/content.it.ts

import { Project } from '@/types/projects';
import { Users, TrendingUp, Calendar } from 'lucide-react';
import { FaMeta, FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa6';
import { 
  SiGoogleanalytics,
  SiGooglesearchconsole,
  SiMailchimp,
  SiWordpress
} from 'react-icons/si';

export const translations = { 
  en: {
    nav: {
      home: 'Home',
      overview: 'Overview',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      role: 'Full Stack Developer',
      cta: 'Get in touch'
    },
    overview: {
      title: 'Overview',
      content: 'I am a passionate full-stack developer with experience in building modern web applications. I focus on creating efficient, scalable, and user-friendly solutions.'
    },
    projects: {
      title: 'Projects',
      viewProject: 'View Project'
    },
    skills: {
      title: 'Skills & Competencies',
      technical: 'Technical Skills',
      soft: 'Soft Skills'
    },
    education: {
      title: 'Education',
    },
    contact: {
      title: 'Contact',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message'
    }
  },
  it: {
    nav: {
      home: 'Home',
      overview: 'Panoramica',
      projects: 'Progetti',
      skills: 'Competenze',
      education: 'Formazione',
      contact: 'Contatti'
    },
    hero: {
      greeting: 'Ciao, sono',
      role: 'Sviluppatore Full Stack',
      cta: 'Contattami'
    },
    overview: {
      title: 'Panoramica Generale',
      content: 'Sono uno sviluppatore full-stack appassionato con esperienza nella creazione di applicazioni web moderne. Mi concentro sulla creazione di soluzioni efficienti, scalabili e user-friendly.'
    },
    projects: {
      title: 'Progetti',
      viewProject: 'Vedi Progetto'
    },
    skills: {
      title: 'Skills & Competenze',
      technical: 'Competenze Tecniche',
      soft: 'Soft Skills'
    },
    education: {
      title: 'Formazione',
    },
    contact: {
      title: 'Contatti',
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      send: 'Invia Messaggio'
    }
  }
};

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
    }
  }
};

export const project: Project = {
  id: 1,
  title: {
    en: "Magazzino sul Po - Digital Marketing Strategy",
    it: "Magazzino sul Po - Strategia di Marketing Digitale"
  },
  description: {
    en: "Digital transformation and communication strategy for one of Turin's main cultural venues.",
    it: "In qualità di Digital Marketing & Communications Specialist presso Magazzino sul Po, ho guidato la trasformazione digitale di uno dei principali luoghi di aggregazione culturale di Torino."
  },
  image: '/assets/banner-magazzino.webp',
  technologies: {
    social: [
      { name: "Meta Business Suite", Icon: FaMeta },
      { name: "Instagram", Icon: FaInstagram },
      { name: "Facebook", Icon: FaFacebook },
      { name: "Telegram", Icon: FaTelegram }
    ],
    web: [
      { name: "WordPress", Icon: SiWordpress },
      { name: "Google Search Console", Icon: SiGooglesearchconsole },
      { name: "Google Analytics", Icon: SiGoogleanalytics }
    ],
    email: [
      { name: "MailUp", Icon: SiMailchimp }
    ]
  },
  metrics: [
    {
      icon: Users,
      value: '44,114',
      label: {
        en: 'Total Social Followers',
        it: 'Follower Social Totali'
      }
    },
    {
      icon: TrendingUp,
      value: '+550%',
      label: {
        en: 'Instagram Growth',
        it: 'Crescita Instagram'
      }
    },
    {
      icon: Calendar,
      value: '37,455',
      label: {
        en: 'Annual Users',
        it: 'Utenti Annuali'
      }
    }
  ],
  detailedSections: {
    overview: {
      title: {
        en: 'Project Overview',
        it: 'Panoramica del Progetto'
      },
      content: {
        en: "I led the digital transformation and implemented communication strategies for one of Turin's major cultural venues, focusing on social media growth and engagement.",
        it: "Ho guidato la trasformazione digitale e implementato strategie di comunicazione per uno dei principali luoghi culturali di Torino, concentrandomi sulla crescita e coinvolgimento sui social media."
      }
    },
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
        { name: "WordPress", Icon: SiWordpress },
        { name: "Google Analytics", Icon: SiGoogleanalytics },
        { name: "MailUp", Icon: SiMailchimp }
      ]
    },
    objectives: {
      title: {
        en: 'Objectives & KPI',
        it: 'Obiettivi & KPI'
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
      }
    },
    contentPlanning: {
      title: {
        en: 'Content Planning',
        it: 'Pianificazione Contenuti'
      },
      content: {
        en: 'Strategic content planning and creation to maintain consistent brand communication.',
        it: 'Pianificazione strategica e creazione di contenuti per mantenere una comunicazione del brand coerente.'
      }
    }
  },
  assets: {
    banner: '/assets/banner-magazzino.webp',
    analytics: [
      '/assets/analytics_maga1.png',
      '/assets/growth.png'
    ]
  }
};