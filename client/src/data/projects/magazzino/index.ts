import { Project } from '@/types';
import { ASSET_PATHS } from '@/lib/constants';
import { metrics } from './metrics';
import { gallery } from './gallery';

export const project: Project = {
  id: 1,
  content: {
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
    }
  },
  assets: {
    banner: ASSET_PATHS.MAGAZZINO.BANNER,
    gallery,
    analytics: [ASSET_PATHS.MAGAZZINO.ANALYTICS, ASSET_PATHS.MAGAZZINO.GROWTH]
  },
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
  sections: {
    overview: {
      title: {
        en: "Project Overview",
        it: "Panoramica del Progetto"
      },
      content: {
        en: "Digital transformation and communication strategy implementation for one of Turin's major cultural venues, focusing on social media growth and engagement.",
        it: "Implementazione della strategia di trasformazione digitale e comunicazione per uno dei principali luoghi culturali di Torino, con focus sulla crescita e coinvolgimento sui social media."
      }
    }
  }
};
