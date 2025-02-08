// client/src/components/sections/project-details/hrx/content.ts

import { Users, ShoppingCart, MousePointerClick } from "lucide-react";
import { Project } from "@/types/projects";
import { 
  SiMeta, 
  SiInstagram, 
  SiFacebook, 
  SiLinkedin, 
  SiAdobephotoshop, 
  SiShopify, 
  SiGoogleanalytics, 
  SiGoogleads, 
  SiGooglesearchconsole, 
  SiGoogletagmanager,
  SiMailchimp,
} from "react-icons/si";

const translationsData = {
  back: { en: 'Back to Projects', it: 'Torna ai Progetti' },
  projectDetails: {
    overview: { en: 'Project Overview', it: 'Panoramica del Progetto' },
    tools: { en: 'Tools & Platforms', it: 'Strumenti e Piattaforme' },
    objectives: { en: 'Objectives', it: 'Obiettivi' },
    socialStrategy: { en: 'Digital Marketing Strategy', it: 'Strategia Marketing Digitale' },
    contentPlanning: { en: 'Content Strategy', it: 'Strategia dei Contenuti' },
    emailMarketing: { en: 'Email Marketing', it: 'Email Marketing' },
    ecommerce: { en: 'E-commerce Strategy', it: 'Strategia E-commerce' }
  }
};

const projectData: Project = {
  id: 2,
  title: {
    en: "HRX - Digital Marketing Strategy",
    it: "HRX - Strategia di Marketing Digitale"
  },
  description: {
    en: "Led digital transformation as the first digital marketing specialist at HRX SRL, an Italian company specialized in technical clothing and motorsport accessories.",
    it: "In qualità di prima figura dedicata al marketing digitale in HRX SRL, azienda italiana specializzata nella produzione di abbigliamento tecnico e accessori per il motorsport."
  },
  image: '/assets/hrx-banner1.jpg',
  technologies: [
    { name: 'Shopify', Icon: SiShopify },
    { name: 'Google Ads', Icon: SiGoogleads },
    { name: 'Google Tag Manager', Icon: SiGoogletagmanager },
    { name: 'Google Analytics', Icon: SiGoogleanalytics },
    { name: 'Google Search Console', Icon: SiGooglesearchconsole },
    { name: 'Meta Business Suite', Icon: SiMeta },
    { name: 'Instagram', Icon: SiInstagram },
    { name: 'Facebook', Icon: SiFacebook },
    { name: 'Mailchimp', Icon: SiMailchimp }
  ],
  metrics: [
    {
      icon: Users,
      value: '4.2x',
      label: { en: 'Average ROAS', it: 'ROAS Medio' }
    },
    {
      icon: ShoppingCart,
      value: '+22%',
      label: { en: 'E-commerce CRO', it: 'CRO E-commerce' }
    },
    {
      icon: MousePointerClick,
      value: '3.5%',
      label: { en: 'Average CTR', it: 'CTR Medio' }
    }
  ],
  detailedSections: {
    overview: {
      title: { en: 'Project Overview', it: 'Panoramica del Progetto' },
      content: {
        en: 'Led digital transformation for HRX SRL, an Italian company specializing in technical clothing and motorsport accessories, focusing on e-commerce optimization and implementation of integrated digital marketing strategies.',
        it: 'Ho guidato la trasformazione digitale di HRX SRL, azienda italiana specializzata nella produzione di abbigliamento tecnico e accessori per il motorsport, concentrandomi sull\'ottimizzazione dell\'e-commerce e sull\'implementazione di strategie di marketing digitale integrate.'
      },
      metrics: [
        'E-commerce: B2C and B2B sales strategy implementation',
        '- Conversion: +22% YoY',
        '- Average ROAS: 4.2x',
        'Google Ads: Search and Shopping campaign development',
        '- Average CTR: 3.5%',
        '- CPA: optimization -35%'
      ]
    },
    objectives: {
      title: { en: 'Objectives & KPI', it: 'Obiettivi & KPI' },
      items: [
        'Increase B2C e-commerce sales',
        'Optimize advertising ROAS',
        'Develop international presence',
        'Improve website conversion rate',
        'Implement advanced tracking'
      ]
    },
    ecommerce: {
      title: { en: 'E-commerce Strategy', it: 'Strategia E-commerce' },
      content: {
        en: 'Development and optimization of e-commerce strategy focusing on B2C and B2B sales channels, with implementation of advanced tracking and conversion optimization.',
        it: 'Sviluppo e ottimizzazione della strategia e-commerce con focus su canali di vendita B2C e B2B, con implementazione di tracking avanzato e ottimizzazione delle conversioni.'
      },
      metrics: [
        'Multilingual product catalog',
        'Product configurator implementation',
        'Checkout UX/UI optimization',
        'Advanced conversion tracking',
        'Product page A/B testing'
      ]
    },
    socialMedia: {
      title: { en: 'Digital Marketing Strategy', it: 'Strategia Marketing Digitale' },
      content: {
        en: 'Implementation of an integrated digital marketing strategy focused on brand awareness and lead generation through multiple channels.',
        it: 'Implementazione di una strategia di marketing digitale integrata focalizzata sulla brand awareness e sulla generazione di lead attraverso molteplici canali.'
      },
      metrics: [
        'Google Ads: Search and Shopping campaign management',
        'Facebook/Instagram Ads: ADV strategy development',
        'On-page and off-page SEO optimization',
        'Competitor and market analysis',
        'Monthly KPI reporting'
      ]
    },
    emailMarketing: {
      title: { en: 'Email Marketing', it: 'Email Marketing' },
      content: {
        en: 'Development and management of automated email marketing campaigns for customer retention and lead nurturing.',
        it: 'Sviluppo e gestione di campagne email marketing automatizzate per la fidelizzazione dei clienti e il nurturing dei lead.'
      },
      metrics: [
        'Customer database segmentation',
        'Post-purchase flow automation',
        'Monthly product newsletter',
        'Abandoned cart recovery campaigns',
        'Subject lines and content A/B testing'
      ]
    },
    contentPlanning: {
      title: { en: 'Content Strategy', it: 'Strategia Contenuti' },
      content: {
        en: 'Development of a comprehensive content strategy to enhance brand positioning and support digital marketing initiatives.',
        it: 'Sviluppo di una strategia contenuti completa per migliorare il posizionamento del brand e supportare le iniziative di marketing digitale.'
      },
      metrics: [
        'Social media content planning',
        'E-commerce product copy optimization',
        'SEO-oriented blog content creation',
        'Product photo shoot management',
        'Tutorial videos and technical content'
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

export { translationsData as translations, translationsData as projectDetailsTranslations, projectData, projectData as projectContent };