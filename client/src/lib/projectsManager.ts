import { Project } from '@/types/projects';
import { project as magazzinoProject, translations as magazzinoTranslations } from '@/components/sections/project-details/magazzino';
import { project as hrxProject } from '@/components/sections/project-details/hrx';
import { project as manuntaProject } from '@/components/sections/project-details/manunta';
import { project as dtcProject } from '@/components/sections/project-details/dtc';

// Progetti in fase di sviluppo - imposta su 'false' quando sono pronti
const COMING_SOON_PROJECTS = {
  '3': true, // manunta
  '4': true  // dtc
};

// Projects mapping
const projects: Record<string, Project> = {
  '1': magazzinoProject,
  '2': hrxProject,
  '3': manuntaProject,
  '4': dtcProject
};

// This line was causing the error - we now import translations directly from the index files
import { translations as hrxTranslations } from '@/components/sections/project-details/hrx';
import { translations as manuntaTranslations } from '@/components/sections/project-details/manunta';
import { translations as dtcTranslations } from '@/components/sections/project-details/dtc';

// Translations mapping
const projectTranslations: Record<string, any> = {
  '1': magazzinoTranslations,
  '2': hrxTranslations,
  '3': manuntaTranslations,
  '4': dtcTranslations
};

// Utility che controlla se un progetto è marcato come "coming soon"
export function isComingSoon(id: string): boolean {
  return COMING_SOON_PROJECTS[id] === true;
}

export function getProject(id: string): Project | undefined {
  return projects[id];
}

export function getProjectTranslations(id: string): any {
  return projectTranslations[id];
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