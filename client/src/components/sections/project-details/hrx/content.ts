// client/src/components/sections/project-details/hrx/content.ts
import { Users, ShoppingCart, MousePointerClick, Calendar } from "lucide-react";
import { Project } from "@/types/projects";
import { 
  SiMeta, 
  SiInstagram, 
  SiFacebook, 
  SiShopify, 
  SiGoogleanalytics, 
  SiGoogleads, 
  SiGooglesearchconsole, 
  SiGoogletagmanager,
  SiMailchimp,
  SiSemrush,
  SiLooker
} from "react-icons/si";
import { 
  Users, 
  ShoppingCart,
  MousePointerClick,
  Euro,
  Percent,
  Calendar
} from "lucide-react";
import { FaTag } from "react-icons/fa6";



const translationsData = {
  back: { en: 'Back to Projects', it: 'Torna ai Progetti' },
  projectDetails: {
    overview: { en: 'Project Overview', it: 'Panoramica del Progetto' },
    tools: { en: 'Tools & Platforms', it: 'Strumenti e Piattaforme' },
    objectives: { en: 'Results', it: 'Risultati' },
    socialStrategy: { en: 'Digital Marketing Strategy', it: 'Strategia Marketing Digitale' },
    contentPlanning: { en: 'Social Media', it: 'Social Media' },
    emailMarketing: { en: 'Email Marketing', it: 'Email Marketing' },
    ecommerce: { en: 'E-commerce Management', it: 'Gestione E-commerce' },
    projectPeriod: { en: 'Project Period', it: 'Durata Progetto' }
  }
};

const projectData: Project = {
  id: 2,
  title: {
    en: "HRX - Digital Marketing Strategy",
    it: "Hrx Srl - Strategia di Marketing Digitale"
  },
  period: {
    en: "Nov 2020 - Apr 2021",
    it: "Nov 2020 - Apr 2021"
  },
  description: {
    en: "I managed the marketing strategy for HRX SRL, an Italian company specializing in technical apparel and accessories for motorsports. I planned and optimized Google Ads campaigns (Search, Display, Shopping) to increase online sales while improving SEO and the UX of the Shopify e-commerce platform to enhance the user experience and conversion rate.",
    it: "Ho gestito la strategia di marketing per Hrx Srl, azienda italiana specializzata in abbigliamento tecnico e accessori per il motorsport. Ho pianificato e ottimizzato campagne Google Ads (Search, Display, Shopping) per aumentare le vendite online, ottimizzando al contempo SEO e UX dell'e-commerce Shopify per migliorare l'esperienza utente e il tasso di conversione."
  },
  image: '/assets/hrx-banner1.webp',
  technologies: [
    { name: 'Shopify', Icon: SiShopify },
    { name: 'Google Ads', Icon: SiGoogleads },
    { name: 'Google Tag Manager', Icon: SiGoogletagmanager },
    { name: 'Google Analytics', Icon: SiGoogleanalytics },
    { name: 'Google Search Console', Icon: SiGooglesearchconsole },
    { name: 'Google Merchant Center', Icon: FaTag },
    { name: 'Google Looker Studio', Icon: SiLooker },
    { name: 'Meta Business Suite', Icon: SiMeta },
    { name: 'Instagram', Icon: SiInstagram },
    { name: 'Facebook', Icon: SiFacebook },
    { name: 'Mailchimp', Icon: SiMailchimp },
    { name: 'Semrush', Icon: SiSemrush }

  ],
  metrics: [
    {
      icon: Euro,
      value: '€26,000+',
      label: { en: 'Total Sales', it: 'Totale Vendite' }
    },
    {
      icon: ShoppingCart,
      value: '110+',
      label: { en: 'Total Orders', it: 'Ordini totali' }
    },
    {
      icon: Percent,
      value: '320%',
      label: { en: 'Average ROAS', it: 'ROAS Medio' }
    },
    {
      icon: MousePointerClick,
      value: '2,47%',
      label: { en: 'Average CTR', it: 'CTR Medio' }
    }
  ],
  detailedSections: {

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
    banner: '/assets/hrx-banner1.webp',
    analytics: [
      '/assets/hrx-analytics1.png',
      '/assets/hrx-growth.png'
    ]
  }
};

const styles = {
  metricsContainer: "space-y-3",
  metricItem: "flex items-start gap-3",
  bulletPoint: "text-blue-500 text-lg leading-6",
  metricText: "text-gray-700 dark:text-gray-300",
  periodLabel: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
};

export { 
  translationsData as translations, 
  translationsData as projectDetailsTranslations, 
  projectData, 
  projectData as projectContent,
  styles
};