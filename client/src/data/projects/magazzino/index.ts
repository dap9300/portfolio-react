import { Project } from '@/types/projects';
import { ASSET_PATHS } from '@/lib/constants';
import { metrics } from './metrics';
import { gallery } from './gallery';
import { detailedSections } from './sections';

export const project: Project = {
  id: 1,
  title: {
    en: "Magazzino sul Po - Digital Marketing Strategy",
    it: "Magazzino sul Po - Strategia di Marketing Digitale"
  },
  description: {
    en: `Digital transformation and communication strategy for one of Turin's main cultural venues.
    Facebook: 31,203 followers (+3.1% YoY)
    Coverage: 545,960 (+97.6%)
    Visits: 91,723 (+90.6%)

    Instagram: 12,911 followers (+44.2% YoY)
    Coverage: 502,784 (+550.6%)
    Visits: 66,153 (+93.9%)`,
    it: `In qualità di Digital Marketing & Communications Specialist presso Magazzino sul Po, ho guidato la trasformazione digitale di uno dei principali luoghi di aggregazione culturale di Torino, gestendo strategie integrate di comunicazione e marketing per promuovere eventi culturali e musicali.`
  },
  image: ASSET_PATHS.MAGAZZINO.BANNER,
  technologies: {
    social: [
      'Meta Business Suite',
      'Instagram',
      'Facebook',
      'Telegram',
      'Adobe Creative Suite',
      'DaVinci Resolve'
    ],
    web: [
      'WordPress',
      'Google Search Console',
      'Google Analytics',
      'Google Looker Studio'
    ],
    email: [
      'MailUp'
    ]
  },
  metrics,
  gallery,
  detailedSections,
  assets: {
    banner: ASSET_PATHS.MAGAZZINO.BANNER,
    analytics: [
      ASSET_PATHS.MAGAZZINO.ANALYTICS,
      ASSET_PATHS.MAGAZZINO.GROWTH
    ]
  }
};