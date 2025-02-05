// client/src/types/index.ts
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
  icon: string | any;
  value: string;
  label: LocalizedContent<string>;
}

export interface ProjectTechnology {
  social?: string[];
  web?: string[];
  email?: string[];
}

export interface DetailedSections {
  tools?: {
    title: LocalizedContent<string>;
    description: LocalizedContent<string>;
    items: string[];
  };
  overview?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics?: string[];
  };
  objectives?: {
    title: LocalizedContent<string>;
    items: string[];
  };
  socialMedia?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics: string[];
  };
  emailMarketing?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics: string[];
  };
  contentPlanning?: {
    title: LocalizedContent<string>;
    content?: LocalizedContent<string>;
    metrics: string[];
  };
  crowdfunding?: {
    title: LocalizedContent<string>;
    content?: LocalizedContent<string>;
    metrics?: string[];
  };
}

export interface Project {
  id: number;
  title: LocalizedContent<string>;
  description: LocalizedContent<string>;
  image: string;
  technologies: ProjectTechnology;
  metrics?: ProjectMetric[];
  detailedSections: DetailedSections;
  assets: ProjectAssets;
  gallery?: string[];
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