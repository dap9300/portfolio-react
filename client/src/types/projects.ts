// client/src/types/projects.ts
import { LocalizedContent } from './index';
import type { LucideIcon } from 'lucide-react';

export interface ProjectTechnology {
  social?: string[];
  web?: string[];
  email?: string[];
}

export interface ProjectMetric {
  icon: LucideIcon;
  value: string;
  label: LocalizedContent<string>;
}

export interface ProjectAssets {
  banner: string;
  gallery?: string[];
  analytics?: string[];
}

export interface DetailedSections {
  overview: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics: string[];
  };
  objectives?: {
    title: LocalizedContent<string>;
    items: string[];
  };
  emailMarketing?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics: string[];
  };
  socialMedia?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics: string[];
  };
  contentPlanning?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics: string[];
  };
  tools?: {
    title: LocalizedContent<string>;
    description: LocalizedContent<string>;
    items: string[];
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
  assets?: ProjectAssets;
}