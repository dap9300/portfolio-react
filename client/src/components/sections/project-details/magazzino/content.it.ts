// client/src/components/sections/project-details/magazzino/content.it.ts

import type { Project, ProjectMetric } from '@/types/projects';
import { Users, TrendingUp, Calendar, Building2 } from 'lucide-react';
import { SiWordpress, SiGoogleanalytics, SiFacebook, SiInstagram, SiAdobecreativecloud } from 'react-icons/si';

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
} as const;

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

const projectMetrics: ProjectMetric[] = [
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
];

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
      {
        name: "Facebook",
        Icon: SiFacebook
      },
      {
        name: "Instagram",
        Icon: SiInstagram
      },
      {
        name: "Business Suite",
        Icon: Building2
      }
    ],
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
        name: "Adobe Creative Cloud",
        Icon: SiAdobecreativecloud
      }
    ]
  },
  metrics: projectMetrics,
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
          name: "Facebook",
          Icon: SiFacebook
        },
        {
          name: "Instagram",
          Icon: SiInstagram
        },
        {
          name: "Business Suite",
          Icon: Building2
        },
        {
          name: "Adobe Creative Cloud",
          Icon: SiAdobecreativecloud
        }
      ]
    },
    overview: {
      title: {
        en: "Project Overview",
        it: "Panoramica del Progetto"
      },
      content: {
        en: "I led the digital transformation and implemented communication strategies for one of Turin's major cultural venues, focusing on social media growth and engagement.",
        it: "Ho guidato la trasformazione digitale e implementato strategie di comunicazione per uno dei principali luoghi culturali di Torino, concentrandomi sulla crescita e coinvolgimento sui social media."
      },
      metrics: projectMetrics
    },
    objectives: {
      en: [
        "Increase social media presence",
        "Improve brand awareness",
        "Drive event attendance",
        "Enhance community engagement",
        "Optimize digital communication"
      ],
      it: [
        "Aumentare la presenza sui social media",
        "Migliorare la brand awareness",
        "Incrementare la partecipazione agli eventi",
        "Migliorare il coinvolgimento della community",
        "Ottimizzare la comunicazione digitale"
      ]
    },
    strategies: {
      contentPlanning: {
        en: [
          "Monthly editorial calendar",
          "Content optimization by platform",
          "Performance analysis",
          "A/B testing formats and copy"
        ],
        it: [
          "Piano editoriale mensile",
          "Contenuti ottimizzati per piattaforma",
          "Analisi performance contenuti",
          "A/B testing formati e copy"
        ]
      },
      social: {
        en: [
          "Platform-specific strategy",
          "Community management",
          "Event promotion",
          "Influencer collaborations"
        ],
        it: [
          "Strategia specifica per piattaforma",
          "Gestione della community",
          "Promozione eventi",
          "Collaborazioni con influencer"
        ]
      },
      email: {
        en: [
          "Weekly newsletter",
          "Segmented campaigns",
          "Event announcements",
          "Engagement tracking"
        ],
        it: [
          "Newsletter settimanale",
          "Campagne segmentate",
          "Annunci eventi",
          "Monitoraggio engagement"
        ]
      }
    }
  },
  assets: {
    banner: '/assets/banner-magazzino.webp',
    gallery: [
      '/assets/magazzino-social.png',
      '/assets/magazzino-website.png'
    ]
  }
};

export const projectContent = project;