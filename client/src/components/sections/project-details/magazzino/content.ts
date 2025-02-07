import { Users, TrendingUp, Calendar } from 'lucide-react';
import { Project } from '@/types/projects';
import { SiDavinciresolve, SiMeta, SiInstagram, SiFacebook, SiTelegram, SiAdobephotoshop, SiAdobeillustrator, SiWordpress, SiGooglesearchconsole, SiGoogleanalytics, SiLooker } from "react-icons/si"; 
import { TbMailUp } from "react-icons/tb";

const translationsData = {
  back: {
    en: 'Back to Projects',
    it: 'Torna ai Progetti'
  },
  projectDetails: {
    overview: {
      en: 'Project Overview',
      it: 'Panoramica del Progetto'
    },
    objectives: {
      en: 'Objectives',
      it: 'Obiettivi'
    },
    crowdfunding: {
      en: 'Crowdfunding Campaign',
      it: 'Campagna di Crowdfunding'
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
    }
  }
};

export const translations = translationsData;
export const projectDetailsTranslations = translationsData;

const projectData: Project = {
  id: 1,
  title: {
    en: "Magazzino sul Po - Digital Marketing Strategy",
    it: "Magazzino sul Po - Strategia di Marketing Digitale"
  },
  description: {
    en: `HOME INTRO Digital transformation and communication strategy for one of Turin's main cultural venues.
    Facebook: 31,203 followers (+3.1% YoY)
    Coverage: 545,960 (+97.6%)
    Visits: 91,723 (+90.6%)

    Instagram: 12,911 followers (+44.2% YoY)
    Coverage: 502,784 (+550.6%)
    Visits: 66,153 (+93.9%)`,
    it: "INTRO HOME In qualità di Digital Marketing & Communications Specialist presso Magazzino sul Po, ho guidato la trasformazione digitale di uno dei principali luoghi di aggregazione culturale di Torino, gestendo strategie integrate di comunicazione e marketing per promuovere eventi culturali e musicali."
  },
  image: '/assets/banner-magazzino.webp',
  technologies: [
    { name: 'Meta Business Suite', Icon: SiMeta },
    { name: 'Instagram', Icon: SiInstagram },
    { name: 'Facebook', Icon: SiFacebook },
    { name: 'Telegram', Icon: SiTelegram },
    { name: 'Adobe Photoshop', Icon: SiAdobephotoshop },
    { name: 'Adobe Illustrator', Icon: SiAdobeillustrator },
    { name: 'DaVinci Resolve', Icon: SiDavinciresolve },
    { name: 'WordPress', Icon: SiWordpress },
    { name: 'Google Search Console', Icon: SiGooglesearchconsole },
    { name: 'Google Analytics', Icon: SiGoogleanalytics },
    { name: 'Google Looker Studio', Icon: SiLooker },
    { name: 'MailUp', Icon: TbMailUp }
  ],
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
      },
      metrics: [
        'Facebook: Developed monthly editorial calendar',
        '- Reach: 545,960 (+97.6%)',
        '- Visits: 91,723 (+90.6%)',
        'Instagram: 12,911 followers (+44.2% YoY)',
        '- Reach: 502,784 (+550.6%)',
        '- Visits: 66,153 (+93.9%)'
      ]
    },
    tools: {
      title: {
        en: 'Tools & Platforms',
        it: 'Strumenti e Piattaforme'
      },
      content: {
        en: 'Technologies and platforms used in this project',
        it: 'Tecnologie e piattaforme utilizzate in questo progetto'
      },
      items: [
        { name: 'Meta Business Suite', Icon: SiMeta },
        { name: 'Instagram', Icon: SiInstagram },
        { name: 'Facebook', Icon: SiFacebook },
        { name: 'WordPress', Icon: SiWordpress },
        { name: 'Google Analytics', Icon: SiGoogleanalytics },
        { name: 'MailUp', Icon: TbMailUp },
        { name: 'Adobe Creative Suite', Icon: SiAdobephotoshop }
      ]
    },
    objectives: {
      title: {
        en: 'Objectives & KPI',
        it: 'Obiettivi & KPI'
      },
      content: {
        en: "Main objectives and key performance indicators achieved during the project.",
        it: "Obiettivi principali e indicatori di performance raggiunti durante il progetto."
      },
      metrics: [
        'Managed Budget - XXX€',
        'Average CPC - 0.10€',
        'CPM - 1.57€',
        'Average CTR - 0.74%',
        'Campaign ROI - 2.46%'
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
        'Instagram: +44.2% follower growth YoY',
        'Facebook: +3.1% follower growth YoY',
        'Average engagement rate: 4.8%',
        'Organic reach: +97.6% YoY'
      ]
    },
    emailMarketing: {
      title: {
        en: 'Email Marketing',
        it: 'Email Marketing'
      },
      content: {
        en: 'Development and management of email marketing campaigns to promote events and engage with the community.',
        it: 'Sviluppo e gestione delle campagne di email marketing per promuovere gli eventi e mantenere il contatto con la community.'
      },
      metrics: [
        'Weekly newsletter to over 40,000 subscribers',
        'Average CTR (5%) Open Rate (10%)',
        'Arci circuit push notifications',
        'User segmentation and interest-based lists'
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
        'Monthly editorial plan',
        'Platform-optimized content',
        'Content performance analysis',
        'A/B testing formats and copy'
      ]
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

export const projectContent = projectData;