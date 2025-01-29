import { Project } from '@/types/projects';
import { project as magazzinoProject } from '@/data/projects/magazzino';

const projects: Record<string, Project> = {
  '1': magazzinoProject,
  // Other projects will be added here as they are migrated
};

export function getProject(id: string): Project | undefined {
  return projects[id];
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