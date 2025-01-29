import { Project } from '@/types/projects';
import { project as magazzinoProject } from '@/data/projects/magazzino';
import { project as hrxProject } from '@/data/projects/hrx';
import { project as manuntaProject } from '@/data/projects/manunta';
import { project as dtcProject } from '@/data/projects/dtc';

const projects: Record<string, Project> = {
  '1': magazzinoProject,
  '2': hrxProject,
  '3': manuntaProject,
  '4': dtcProject
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