// client/src/types/projects.ts

import { LocalizedContent } from './index';
import type { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

export interface Tool {
  name: string;
  Icon: IconType | LucideIcon;
}

export interface ProjectTechnology {
  social: Tool[];
  web: Tool[];
  email: Tool[];
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

export interface DetailedSection {
  title: LocalizedContent<string>;
  content?: LocalizedContent<string>;
  items?: string[];
  metrics?: string[];
}

export interface DetailedSections {
  overview: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics?: string[];
  };
  tools?: {
    title: LocalizedContent<string>;
    description: LocalizedContent<string>;
    items: Tool[];
  };
  objectives?: DetailedSection;
  contentPlanning?: DetailedSection;
  socialMedia?: DetailedSection;
  emailMarketing?: DetailedSection;
  ecommerce?: DetailedSection;
  strategies?: DetailedSection;
}

export interface Project {
  id: number;
  title: LocalizedContent<string>;
  description: LocalizedContent<string>;
  image: string;
  technologies: ProjectTechnology;
  metrics: ProjectMetric[];
  detailedSections?: DetailedSections;
  gallery?: string[];
  link?: string;
  assets?: ProjectAssets;
}