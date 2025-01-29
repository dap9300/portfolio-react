export type Language = 'en' | 'it';

export interface LocalizedString {
  en: string;
  it: string;
}

export interface ProjectMetric {
  icon: string;
  value: string;
  label: LocalizedString;
}

export interface ProjectTechnology {
  social?: string[];
  web?: string[];
  email?: string[];
}

export interface ProjectSection {
  title: LocalizedString;
  content: LocalizedString;
}

export interface Project {
  id: number;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  technologies: string[] | ProjectTechnology;
  link?: string;
  metrics?: ProjectMetric[];
  gallery?: string[];
  sections?: {
    overview?: ProjectSection;
    objectives?: string[];
    strategies?: {
      contentPlanning?: {
        en: string[];
        it: string[];
      };
      analytics?: {
        en: string[];
        it: string[];
      };
    };
  };
}

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
  title: LocalizedString;
}