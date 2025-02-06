import { Project } from "@/types/projects";
import { Users, TrendingUp, Calendar } from "lucide-react";
import { FaMeta, FaInstagram, FaFacebook } from "react-icons/fa6";
import { SiGoogleanalytics, SiMailchimp, SiWordpress, SiGoogleads } from "react-icons/si";

export const project: Project = {
  id: 4,
  title: {
    en: "DTC - Digital Marketing",
    it: "DTC - Marketing Digitale"
  },
  description: {
    en: "Digital marketing strategy for DTC company.",
    it: "Strategia di marketing digitale per l'azienda DTC."
  },
  image: '/assets/dtc-banner.webp',
  technologies: {
    social: [
      { name: "Meta Business Suite", Icon: FaMeta },
      { name: "Instagram", Icon: FaInstagram },
      { name: "Facebook", Icon: FaFacebook }
    ],
    web: [
      { name: "WordPress", Icon: SiWordpress },
      { name: "Google Analytics", Icon: SiGoogleanalytics },
      { name: "Google Ads", Icon: SiGoogleads }
    ],
    email: [
      { name: "MailUp", Icon: SiMailchimp }
    ]
  },
  metrics: [
    {
      icon: Users,
      value: "40%",
      label: {
        en: "Traffic Growth",
        it: "Crescita Traffico"
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
        { name: "Google Ads", Icon: SiGoogleads },
        { name: "MailUp", Icon: SiMailchimp }
      ]
    },
    overview: {
      title: {
        en: "Project Overview",
        it: "Panoramica del Progetto"
      },
      content: {
        en: "Led digital marketing strategy for DTC.",
        it: "Ho guidato la strategia di marketing digitale per DTC."
      },
      metrics: [
        "Website traffic: +40%",
        "Conversion rate: 3.8%",
        "ROI: 280%"
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
        "Incrementare il traffico web",
        "Migliorare il tasso di conversione",
        "Ottimizzare il ROI delle campagne"
      ]
    },
    contentPlanning: {
      title: {
        en: "Content Planning",
        it: "Pianificazione Contenuti"
      },
      content: {
        en: "Strategic content planning and execution",
        it: "Pianificazione e esecuzione strategica dei contenuti"
      },
      metrics: [
        "Piano editoriale mensile",
        "Ottimizzazione contenuti",
        "Analisi performance",
        "A/B testing"
      ]
    },
    socialMedia: {
      title: {
        en: "Social Media Strategy",
        it: "Strategia Social Media"
      },
      content: {
        en: "Social media strategy implementation",
        it: "Implementazione strategia social media"
      },
      metrics: [
        "Crescita follower: +40%",
        "Engagement rate: 5.2%",
        "ROI campagne: 220%"
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