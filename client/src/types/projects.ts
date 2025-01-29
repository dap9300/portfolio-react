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

export interface Project {
  id: number;
  title: LocalizedContent<string>;
  description: LocalizedContent<string>;
  image: string;
  technologies: string[] | ProjectTechnology;
  metrics: ProjectMetric[];
  detailedSections?: DetailedSections;
  gallery?: string[];
  link?: string;
}