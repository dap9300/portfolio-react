// client/src/types/projects.ts

import { LocalizedContent } from './index';
import type { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

export interface Tool {
  name: string;
  Icon: IconType | LucideIcon;
}

export interface Technologies {
  social: Tool[];
  web: Tool[];
  email: Tool[];
}

export interface ProjectMetric {
  icon: LucideIcon;
  value: string;
  label: LocalizedContent<string>;
}

export interface DetailedSection {
  title: LocalizedContent<string>;
  content?: LocalizedContent<string>;
  description?: LocalizedContent<string>;
  items?: string[];
  metrics?: string[];
}

export interface DetailedSections {
  overview: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
  };
  tools: {
    title: LocalizedContent<string>;
    description: LocalizedContent<string>;
    items: Tool[];
  };
  objectives?: DetailedSection;
  contentPlanning?: DetailedSection;
  socialMedia?: DetailedSection;
  emailMarketing?: DetailedSection;
  ecommerce?: DetailedSection;
  crowdfunding?: DetailedSection;
}

export interface Project {
  id: number;
  title: LocalizedContent<string>;
  description: LocalizedContent<string>;
  image: string;
  technologies: Technologies;
  metrics: ProjectMetric[];
  detailedSections: DetailedSections;
  gallery?: string[];
  assets?: {
    banner: string;
    analytics?: string[];
  };
}