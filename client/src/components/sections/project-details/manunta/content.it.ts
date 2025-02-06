import { Project } from "@/types/projects";
import { Users, TrendingUp, Calendar } from "lucide-react";
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
      },
      metrics: [
        "Social media growth: +35%",
        "Engagement rate: 4.2%",
        "Website traffic: +25%"
      ]
    },
    objectives: {
      title: {
        en: "Objectives & KPI",
        it: "Obiettivi & KPI"
      },
      content: {
        en: "Key objectives and performance indicators",
        it: "Obiettivi chiave e indicatori di performance"
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
      },
      metrics: [
        "Piano editoriale mensile",
        "Contenuti ottimizzati per piattaforma",
        "Analisi performance contenuti"
      ]
    },
    socialMedia: {
      title: {
        en: "Social Media Strategy",
        it: "Strategia Social Media"
      },
      content: {
        en: "Social media strategy and implementation",
        it: "Strategia e implementazione social media"
      },
      metrics: [
        "Instagram: +44.2% crescita follower YoY",
        "Facebook: +3.1% crescita follower YoY",
        "Engagement rate medio: 4.8%"
      ]
    }
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