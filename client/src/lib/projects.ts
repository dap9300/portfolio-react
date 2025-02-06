// client/src/lib/projects.ts

import { Project } from '@/types/projects';
import { project as magazzinoProject } from '@/components/sections/project-details/magazzino/content.it';
import { project as hrxProject } from '@/components/sections/project-details/hrx/content.it';

// Projects registry
const projects: Record<string, Project> = {
  '1': magazzinoProject,
  '2': hrxProject,
};

// Simplified API for project management
export function getProject(id: string): Project | undefined {
  return projects[id];
}

export function getAllProjects(): Project[] {
  return Object.values(projects);
}

// Utility functions for project data
export function getProjectMetrics(id: string) {
  return projects[id]?.metrics || [];
}

export function getProjectDetailedSections(id: string) {
  return projects[id]?.detailedSections;
}

// Helper to determine which components to use based on project ID
export function getProjectComponents(id: string) {
  const componentMap = {
    '2': '@/components/sections/project-details/hrx',
    '1': '@/components/sections/project-details/magazzino'
  };
  
  return componentMap[id] || componentMap['1'];
}
