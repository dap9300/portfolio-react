import { LocalizedContent } from '@/types';

export const projectDetailsTranslations = {
  navigation: {
    back: {
      en: 'Back to Projects',
      it: 'Torna ai Progetti'
    },
    previous: {
      en: 'Previous',
      it: 'Precedente'
    },
    next: {
      en: 'Next',
      it: 'Successivo'
    }
  },
  sections: {
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
    }
  },
  gallery: {
    en: 'Project Gallery',
    it: 'Galleria del Progetto'
  },
  tools: {
    title: {
      en: 'Tools & Platforms',
      it: 'Strumenti e Piattaforme'
    },
    subtitle: {
      en: 'Technologies and platforms used in this project',
      it: 'Tecnologie e piattaforme utilizzate in questo progetto'
    }
  }
} as const;
