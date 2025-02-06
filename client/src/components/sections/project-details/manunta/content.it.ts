import { Project } from "@/types/projects";
import { Users, TrendingUp } from "lucide-react";
import { FaMeta, FaInstagram, FaFacebook } from "react-icons/fa6";
import { SiGoogleanalytics, SiMailchimp, SiWordpress } from "react-icons/si";

export const project: Project = {
  id: 3,
  title: {
    en: "Manunta - Business Strategy",
    it: "Manunta - Strategia Aziendale"
  },
  description: {
    en: "Digital transformation strategy for Manunta company.",
    it: "Strategia di trasformazione digitale per l'azienda Manunta."
  },
  image: '/assets/manunta-banner.webp',
  technologies: {
    social: [
      { name: "Meta Business Suite", Icon: FaMeta },
      { name: "Instagram", Icon: FaInstagram },
      { name: "Facebook", Icon: FaFacebook }
    ],
    web: [
      { name: "WordPress", Icon: SiWordpress },
      { name: "Google Analytics", Icon: SiGoogleanalytics }
    ],
    email: [
      { name: "MailUp", Icon: SiMailchimp }
    ]
  },
  metrics: [
    {
      icon: Users,
      value: "35%",
      label: {
        en: "Engagement Growth",
        it: "Crescita Engagement"
      }
    },
    {
      icon: TrendingUp,
      value: "4.2%",
      label: {
        en: "Average Engagement Rate",
        it: "Tasso di Engagement Medio"
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
        { name: "Meta Business Suite", Icon: FaMeta },
        { name: "Instagram", Icon: FaInstagram },
        { name: "Facebook", Icon: FaFacebook },
        { name: "WordPress", Icon: SiWordpress },
        { name: "Google Analytics", Icon: SiGoogleanalytics },
        { name: "MailUp", Icon: SiMailchimp }
      ]
    },
    overview: {
      title: {
        en: "Project Overview",
        it: "Panoramica del Progetto"
      },
      content: {
        en: "Led digital transformation strategy for Manunta.",
        it: "Ho guidato la strategia di trasformazione digitale per Manunta."
      }
    },
    objectives: {
      title: {
        en: "Objectives & KPI",
        it: "Obiettivi & KPI"
      },
      items: [
        "Aumentare la presenza sui social media",
        "Migliorare l'engagement con i clienti",
        "Ottimizzare le performance del sito web"
      ]
    },
    contentPlanning: {
      title: {
        en: "Content Planning",
        it: "Pianificazione Contenuti"
      },
      content: {
        en: "Strategic content planning and creation",
        it: "Pianificazione strategica e creazione contenuti"
      }
    },
    socialMedia: {
      title: {
        en: "Social Media Strategy",
        it: "Strategia Social Media"
      },
      content: {
        en: "Social media strategy implementation",
        it: "Implementazione strategia social media"
      }
    }
  },
  assets: {
    banner: '/assets/manunta-banner.webp'
  }
};

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