// client/src/lib/projectsManager.ts
import { Project } from '@/types/projects';
import { project as magazzinoProject } from '@/components/sections/project-details/magazzino';
import { project as hrxProject } from '@/components/sections/project-details/hrx';
import { project as manuntaProject } from '@/components/sections/project-details/manunta';
import { project as dtcProject } from '@/components/sections/project-details/dtc';

// Projects mapping - combining component-based and JSON-based projects
const projects: Record<string, Project> = {
  '1': magazzinoProject,
  '2': hrxProject,
  '3': manuntaProject,
  '4': dtcProject
};

// Import translations from their respective locations
import { translations as siteTranslations } from '@/components/sections/project-details/SiteContent';
import { translations as magazzinoTranslations } from '@/components/sections/project-details/magazzino/content.it';
import { translations as hrxTranslations } from '@/components/sections/project-details/hrx/content.it';
import { translations as manuntaTranslations } from '@/components/sections/project-details/manunta/content.it';
import { translations as dtcTranslations } from '@/components/sections/project-details/dtc/content.it';

// Translations mapping
const projectTranslations: Record<string, any> = {
  'site': siteTranslations,
  '1': magazzinoTranslations,
  '2': hrxTranslations,
  '3': manuntaTranslations,
  '4': dtcTranslations
};

export function getProject(id: string): Project | undefined {
  return projects[id];
}

export function getProjectTranslations(id: string): any {
  return projectTranslations[id];
}

export function getSiteTranslations(): any {
  return projectTranslations['site'];
}

export function getAllProjects(): Project[] {
  return Object.values(projects);
}

export function getProjectMetrics(id: string) {
  const project = projects[id];
  return project?.metrics || [];
}

export function getProjectGallery(id: string) {
  const project = projects[id];
  return project?.gallery || [];
}

export function getProjectDetailedSections(id: string) {
  const project = projects[id];
  return project?.detailedSections;
}

// Add a utility function to determine which accordion components to use
export function getProjectAccordions(id: string) {
  switch(id) {
    case '2':
      return require('@/components/sections/project-details/hrx');
    case '3':
      return require('@/components/sections/project-details/manunta');
    case '1':
      return require('@/components/sections/project-details/magazzino');
    case '4':
      return require('@/components/sections/project-details/dtc');
    default:
      return require('@/components/sections/project-details/magazzino');
  }
}