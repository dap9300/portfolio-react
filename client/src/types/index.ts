// client/src/types/index.ts
export type Language = 'en' | 'it';

export interface LocalizedContent<T> {
  en: T;
  it: T;
}

// Removed duplicate Project interface - import from types/projects.ts instead

export interface TranslationKeys {
  nav: {
    home: string;
    overview: string;
    projects: string;
    skills: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    cta: string;
  };
  overview: {
    title: string;
    content: string;
  };
  projects: {
    title: string;
    viewProject: string;
  };
  skills: {
    title: string;
    technical: string;
    soft: string;
  };
  education: {
    title: string;
  };
  contact: {
    title: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}

export interface Section {
  id: string;
  title: LocalizedContent<string>;
}

// Re-export types from projects.ts
export { Project, ProjectMetric, ProjectTechnology, DetailedSections, ProjectAssets, Tool } from './projects';