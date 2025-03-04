// client/src/components/sections/project-details/magazzino/content.ts
import { Users, TrendingUp, Calendar, Euro } from 'lucide-react';
import { Project } from '@/types/projects';
import { 
  SiDavinciresolve, SiMeta, SiInstagram, SiFacebook, 
  SiTelegram, SiAdobephotoshop, SiAdobeillustrator, 
  SiWordpress, SiGooglesearchconsole, SiGoogleanalytics, 
  SiLooker 
} from "react-icons/si";
import { TbMailUp } from "react-icons/tb";

const translations = {
  back: { en: 'Back to Projects', it: 'Torna ai Progetti' },
  projectDetails: {
    overview: { en: 'Project Overview', it: 'Panoramica del Progetto' },
    objectives: { en: 'Results', it: 'Risultati' },
    crowdfunding: { en: 'Crowdfunding Campaign', it: 'Campagna di Crowdfunding' },
    socialMedia: { en: 'Social Media Strategy', it: 'Strategia Social Media' },
    emailMarketing: { en: 'Email Marketing', it: 'Email Marketing' },
    contentPlanning: { en: 'Content Planning', it: 'Pianificazione Contenuti' },
    projectPeriod: { en: 'Project Period', it: 'Durata Progetto' } // Aggiunta traduzione per la durata
  }
};

const projectData: Project = {
  id: 1,
  title: {
    en: "Magazzino sul Po – Digital Marketing & Communication",
    it: "Magazzino sul Po – Digital Marketing & Comunicazione"
  },
  period: {
    en: "Oct 2021 - Dec 2023",
    it: "Ott 2021 - Dic 2023"
  },
  description: {
    en: "I led the digital transformation of one of Turin's main cultural hubs, enhancing its online presence by defining brand identity and tone of voice on social media. I managed email marketing campaigns and oversaw the development of the association's website, implementing an e-ticketing system that optimized the user journey and generated new revenue streams.",
    it: "Ho guidato la trasformazione digitale di uno dei principali luoghi di aggregazione culturale di Torino, rafforzandone la presenza online attraverso la definizione della brand identity e del tone of voice sui social media. Ho gestito campagne di email marketing e curato lo sviluppo del sito web, implementando un sistema di e-ticketing che ha generato nuovi flussi di revenue per l'associazione."
  },
  image: '/assets/magazzino-banner.webp',
  technologies: [
    { name: 'Meta Business Suite', Icon: SiMeta },
    { name: 'Instagram', Icon: SiInstagram },
    { name: 'Facebook', Icon: SiFacebook },
    { name: 'WordPress', Icon: SiWordpress },
    { name: 'Google Search Console', Icon: SiGooglesearchconsole },
    { name: 'Google Analytics', Icon: SiGoogleanalytics },
    { name: 'Adobe Photoshop', Icon: SiAdobephotoshop },
    { name: 'Adobe Illustrator', Icon: SiAdobeillustrator },
    { name: 'DaVinci Resolve', Icon: SiDavinciresolve },
    { name: 'Google Looker Studio', Icon: SiLooker },
    { name: 'MailUp', Icon: TbMailUp },
    { name: 'Telegram', Icon: SiTelegram }
  ],
  metrics: [
    {
      icon: Users,
      value: '60.396',
      label: { en: 'New Website Users', it: 'Nuovi Utenti Sito' }
    },
    {
      icon: Euro,
      value: '27.206',
      label: { en: 'eTickets Sold', it: 'Ricavi vendita eTicket' }
    },
    {
      icon: TrendingUp,
      value: '+116%',
      label: { en: 'Instagram Growth', it: 'Crescita Instagram' }
    },
    {
      icon: Calendar,
      value: '350+',
      label: { en: 'Promoted Events', it: 'Eventi Promossi' }
    }
  ],
  detailedSections: {
    overview: {
      title: { en: 'Social Media Strategy & Content Creation', it: 'Social Media Strategy & Content Creation' },
      content: {
        en: "Implementation of an integrated social media strategy focused on community growth and engagement.",
        it: "Implementazione di una strategia social media integrata focalizzata sulla crescita della community e sull'engagement."
      },
      metricsTitle: { en: 'Social Metrics', it: 'Metriche Social' },
      followersTitle: { en: 'Follower Growth', it: 'Crescita Follower' },
      facebookTitle: { en: 'Facebook', it: 'Facebook' },
      instagramTitle: { en: 'Instagram', it: 'Instagram' },
      followersLabel: { en: 'followers', it: 'follower' },
      facebookGrowth: '+5,1% YoY',
      instagramGrowth: '+44.2% YoY',
      facebookFollowers: '31.203',
      instagramFollowers: '13.133',
      chartTitle: { en: 'Instagram Page Growth', it: 'Crescita Pagina Instagram' },
      metrics: [
        'Copertura (IG): 502.784 {{+550% YoY}}',
        'Copertura (FB): 545.960 {{+97% YoY}}',
        'Engagement Rate: {{3%}}',
        'CTR: {{1,2%}}'
      ]
    },
    emailMarketing: {
      title: { en: 'Email Marketing', it: 'Email Marketing' },
      content: {
        en: 'Development and management of email marketing campaigns to promote events and engage with the community.',
        it: 'Sviluppo e gestione delle campagne di email marketing per promuovere gli eventi e mantenere il contatto con la community.'
      },
      metrics: [
        'Invio newsletter settimanale a oltre 46.000 iscritti',
        'Segmentazione utenza in liste basate su interessi',
        'Notifiche push agli utenti su App Arci'
      ]
    },
    contentPlanning: {
      title: { en: 'Sito Web', it: 'Sito Web' },
      content: {
        en: 'Strategic content planning and creation to maintain consistent brand communication across all channels.',
        it: 'Pianificazione strategica e creazione di contenuti per mantenere una comunicazione del brand coerente su tutti i canali.'
      },
      metrics: [
        'Restyling completo del sito web dell\'associazione, con focus su usabilità e design moderno',
        'Implementazione di un sistema di e-ticketing per vendita e gestione online dei biglietti degli eventi.',
        'Integrazione di Google Analytics e Search Console, con ottimizzazione strategica data-driven per il monitoraggio e il miglioramento delle performance.',
        'Gestione attiva del sito web, con aggiornamento costante dei contenuti'
      ]
    },
    socialMediaContent: {
      title: { en: 'Content Creation', it: 'Content Creation' },
      metrics: [
        'Ideazione, sviluppo e gestione di un piano editoriale strategico su base mensile',
        'Ottimizzazione delle performance dei post tramite A/B testing su grafiche e copy',
        'Collaborazione con il team grafico per definire e consolidare la brand identity',
        'Produzione di contenuti video strategici per l\'engagement e la promozione di eventi',
        'Gestione e coordinamento delle campagne Ads su Meta in sinergia con un\'agenzia di comunicazione specializzata'
      ]
    }
  }
};

const styles = {
  metricsContainer: "space-y-3",
  metricItem: "flex items-start gap-3",
  bulletPoint: "text-blue-500 text-lg leading-6",
  metricText: "text-gray-700 dark:text-gray-300",
  periodLabel: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
};

export { translations, translations as projectDetailsTranslations, projectData, projectData as projectContent, styles };