export type Language = 'en' | 'it';

export interface LocalizedContent<T> {
  en: T;
  it: T;
}

export interface ProjectAssets {
  banner: string;
  gallery?: string[];
  analytics?: string[];
}

export interface ProjectMetric {
  icon: string;
  value: string;
  label: LocalizedContent<string>;
}

export interface ProjectTechnology {
  social?: string[];
  web?: string[];
  email?: string[];
}

export interface ProjectSection {
  title: LocalizedContent<string>;
  content: LocalizedContent<string>;
}

export interface ProjectContent {
  title: LocalizedContent<string>;
  description: LocalizedContent<string>;
  objectives?: LocalizedContent<string[]>;
  results?: LocalizedContent<string[]>;
}

export interface Project {
  id: number;
  content: ProjectContent;
  assets: ProjectAssets;
  technologies: string[] | ProjectTechnology;
  metrics?: ProjectMetric[];
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
  title: LocalizedContent<string>;
}