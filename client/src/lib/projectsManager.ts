import { Project } from '@/types';
import project1Data from '@/data/projects/project1.json';

const projects: { [key: string]: Project } = {
  '1': project1Data as Project,
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