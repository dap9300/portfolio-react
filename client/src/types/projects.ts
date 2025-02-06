// client/src/types/projects.ts

import { LocalizedContent } from './index';
import type { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

export interface Tool {
  name: string;
  Icon: IconType | LucideIcon;
}

export interface ProjectTechnology {
  social?: Tool[];
  web?: Tool[];
  email?: Tool[];
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
  tools?: {
    title: LocalizedContent<string>;
    description: LocalizedContent<string>;
    items: Tool[];
  };
  overview: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics: ProjectMetric[];
  };
  objectives: LocalizedContent<string[]>;
  strategies: {
    contentPlanning: LocalizedContent<string[]>;
    analytics: LocalizedContent<string[]>;
    social?: LocalizedContent<string[]>;
    email?: LocalizedContent<string[]>;
  };
  ecommerce?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
  };
}

export interface Project {
  id: number;
  title: LocalizedContent<string>;
  description: LocalizedContent<string>;
  image: string;
  technologies: ProjectTechnology;
  metrics: ProjectMetric[];
  detailedSections?: DetailedSections;
  assets?: ProjectAssets;
}