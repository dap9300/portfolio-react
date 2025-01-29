import { LocalizedContent } from './index';

export interface ProjectTechnology {
  social?: string[];
  web?: string[];
  email?: string[];
}

export interface ProjectMetric {
  icon: string;
  value: string;
  label: LocalizedContent<string>;
}

export interface DetailedSections {
  overview: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics: string[];
  };
  objectives: LocalizedContent<string[]>;
  strategies: {
    contentPlanning: LocalizedContent<string[]>;
    analytics: LocalizedContent<string[]>;
  };
}

export interface ProjectDetails {
  id: number;
  title: LocalizedContent<string>;
  description: LocalizedContent<string>;
  image: string;
  technologies: ProjectTechnology;
  metrics: ProjectMetric[];
  detailedSections?: DetailedSections;
}

export interface Project extends ProjectDetails {
  gallery?: string[];
  link?: string;
}
