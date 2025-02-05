import { Project } from '@/types/projects';
import { project as magazzinoProject } from '@/components/sections/project-details/magazzino';
import { project as hrxProject } from '@/components/sections/project-details/hrx';
import { project as manuntaProject } from '@/data/projects/manunta';
import { project as dtcProject } from '@/data/projects/dtc';

// Projects mapping
const projects: Record<string, Project> = {
  '1': magazzinoProject,
  '2': hrxProject,
  '3': manuntaProject,
  '4': dtcProject
};

export function getProject(id: string): Project | undefined {
  return projects[id];
}

export function getProjectTranslations(id: string): any {
  const projectModules: Record<string, any> = {
    '1': require('@/components/sections/project-details/magazzino'),
    '2': require('@/components/sections/project-details/hrx')
  };
  return projectModules[id];
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
    case '1':
    default:
      return require('@/components/sections/project-details/magazzino');
  }
}