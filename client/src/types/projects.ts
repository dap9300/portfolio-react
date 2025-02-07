// client/src/types/projects.ts

import { LocalizedContent } from './index';
import type { LucideIcon } from 'lucide-react';
import { IconType } from 'react-icons';

export interface Tool {
  name: string;
  icon: string;  // Changed from Icon to icon to match the string-based approach
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
  overview: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics: string[];
  };
  objectives: {
    title: LocalizedContent<string>;
    content?: LocalizedContent<string>;
    metrics?: string[];
    items?: string[];
  };
  tools?: {
    title: LocalizedContent<string>;
    description: LocalizedContent<string>;
    items: Tool[];
  };
  socialMedia?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics?: string[];
  };
  emailMarketing?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics?: string[];
  };
  contentPlanning?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics?: string[];
  };
  ecommerce?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
  };
  analytics?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics?: string[];
  };
  teamManagement?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
  };
  leadGeneration?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
  };
  contentStrategy?: {
    title: LocalizedContent<string>;
    content: LocalizedContent<string>;
    metrics?: string[];
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
  gallery?: string[];
  link?: string;
  assets?: ProjectAssets;
}