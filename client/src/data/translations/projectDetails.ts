import { LocalizedContent } from '@/types';

export const projectDetailsTranslations = {
  back: {
    en: 'Back to Projects',
    it: 'Torna ai Progetti'
  },
  navigation: {
    previous: {
      en: 'Previous',
      it: 'Precedente'
    },
    next: {
      en: 'Next',
      it: 'Successivo'
    }
  },
  overview: {
    en: 'Overview',
    it: 'Panoramica'
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
    keyResults: {
      en: 'Key Results',
      it: 'Risultati Chiave'
    },
    specialProjects: {
      en: 'Special Projects',
      it: 'Progetti Speciali'
    },
    contentPlanning: {
      en: 'Content Planning',
      it: 'Pianificazione Contenuti'
    },
    crowdfunding: {
      en: 'Crowdfunding Campaign',
      it: 'Campagna di Crowdfunding',
      results: {
        en: [
          'Successfully raised €50,000',
          'Engaged over 500 backers',
          'Achieved 125% of target goal'
        ],
        it: [
          'Raccolti con successo €50.000',
          'Coinvolti oltre 500 sostenitori',
          'Raggiunto il 125% dell\'obiettivo'
        ]
      }
    }
  },
  gallery: {
    en: 'Project Gallery',
    it: 'Galleria del Progetto'
  }
} as const;
