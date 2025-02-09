import React, { lazy, Suspense } from 'react';
import { Users, TrendingUp, Calendar } from 'lucide-react';
import { Project } from '@/types/projects';

// Lazy loading per le icone react-icons
const SiDavinciresolve = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiDavinciresolve })));
const SiMeta = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiMeta })));
const SiInstagram = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiInstagram })));
const SiFacebook = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiFacebook })));
const SiTelegram = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiTelegram })));
const SiAdobephotoshop = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiAdobephotoshop })));
const SiAdobeillustrator = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiAdobeillustrator })));
const SiWordpress = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiWordpress })));
const SiGooglesearchconsole = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiGooglesearchconsole })));
const SiGoogleanalytics = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiGoogleanalytics })));
const SiLooker = lazy(() => import('react-icons/si').then(mod => ({ default: mod.SiLooker })));
const TbMailUp = lazy(() => import('react-icons/tb').then(mod => ({ default: mod.TbMailUp })));

// Componente wrapper per le icone lazy loaded
const LazyIcon = ({ Icon }: { Icon: React.LazyExoticComponent<any> }) => (
  <Suspense fallback={<div className="w-6 h-6 bg-gray-200 animate-pulse rounded"/>}>
    <Icon />
  </Suspense>
);

const translations = {
  back: { en: 'Back to Projects', it: 'Torna ai Progetti' },
  projectDetails: {
    overview: { en: 'Project Overview', it: 'Panoramica del Progetto' },
    objectives: { en: 'Objectives', it: 'Obiettivi' },
    crowdfunding: { en: 'Crowdfunding Campaign', it: 'Campagna di Crowdfunding' },
    socialMedia: { en: 'Social Media Strategy', it: 'Strategia Social Media' },
    emailMarketing: { en: 'Email Marketing', it: 'Email Marketing' },
    contentPlanning: { en: 'Content Planning', it: 'Pianificazione Contenuti' }
  }
};

const projectData: Project = {
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
  technologies: [
    { name: 'Meta Business Suite', Icon: (props) => <LazyIcon Icon={SiMeta} {...props} /> },
    { name: 'Instagram', Icon: (props) => <LazyIcon Icon={SiInstagram} {...props} /> },
    { name: 'Facebook', Icon: (props) => <LazyIcon Icon={SiFacebook} {...props} /> },
    { name: 'WordPress', Icon: (props) => <LazyIcon Icon={SiWordpress} {...props} /> },
    { name: 'Google Search Console', Icon: (props) => <LazyIcon Icon={SiGooglesearchconsole} {...props} /> },
    { name: 'Google Analytics', Icon: (props) => <LazyIcon Icon={SiGoogleanalytics} {...props} /> },
    { name: 'Adobe Photoshop', Icon: (props) => <LazyIcon Icon={SiAdobephotoshop} {...props} /> },
    { name: 'Adobe Illustrator', Icon: (props) => <LazyIcon Icon={SiAdobeillustrator} {...props} /> },
    { name: 'DaVinci Resolve', Icon: (props) => <LazyIcon Icon={SiDavinciresolve} {...props} /> },
    { name: 'Google Looker Studio', Icon: (props) => <LazyIcon Icon={SiLooker} {...props} /> },
    { name: 'MailUp', Icon: (props) => <LazyIcon Icon={TbMailUp} {...props} /> },
    { name: 'Telegram', Icon: (props) => <LazyIcon Icon={SiTelegram} {...props} /> }
  ],
  metrics: [
    {
      icon: Users,
      value: '44,114',
      label: { en: 'Total Social Followers', it: 'Follower Social Totali' }
    },
    {
      icon: TrendingUp,
      value: '+550%',
      label: { en: 'Instagram Growth', it: 'Crescita Instagram' }
    },
    {
      icon: Calendar,
      value: '37,455',
      label: { en: 'Annual Users', it: 'Utenti Annuali' }
    }
  ],
  detailedSections: {
    overview: {
      title: { en: 'Project Overview', it: 'Panoramica del Progetto' },
      content: {
        en: "I led the digital transformation and implemented communication strategies for one of Turin's major cultural venues, focusing on social media growth and engagement.",
        it: "Ho guidato la trasformazione digitale e implementato strategie di comunicazione per uno dei principali luoghi culturali di Torino, concentrandomi sulla crescita e coinvolgimento sui social media."
      },
      metrics: [
        'Facebook: Monthly editorial calendar',
        '- Reach: 545,960 (+97.6%)',
        '- Visits: 91,723 (+90.6%)',
        'Instagram: 12,911 followers (+44.2% YoY)',
        '- Reach: 502,784 (+550.6%)',
        '- Visits: 66,153 (+93.9%)'
      ]
    },
    socialMedia: {
      title: { en: 'Social Media Strategy', it: 'Strategia Social Media' },
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
      title: { en: 'Email Marketing', it: 'Email Marketing' },
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
      title: { en: 'Content Planning', it: 'Pianificazione Contenuti' },
      content: {
        en: 'Strategic content planning and creation to maintain consistent brand communication across all channels.',
        it: 'Pianificazione strategica e creazione di contenuti per mantenere una comunicazione del brand coerente su tutti i canali.'
      },
      metrics: [
        'Monthly editorial plan',
        'Platform-optimized content',
        'Content performance analysis',
        'A/B testing formats and copy'
      ]
    }
  },
};

export { translations, translations as projectDetailsTranslations, projectData, projectData as projectContent };