import { LocalizedContent } from './index';
import type { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

export interface Tool {
  name: string;
  Icon: IconType | LucideIcon;
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
    objectives: {
      title: LocalizedContent<string>;
      content: LocalizedContent<string>;
      metrics: string[];
    };
    tools: {
      title: LocalizedContent<string>;
      content: LocalizedContent<string>;
      items: Tool[];
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
  technologies: Tool[];
  metrics: ProjectMetric[];
  detailedSections?: DetailedSections;
  gallery?: string[];
  link?: string;
  assets?: ProjectAssets;
}