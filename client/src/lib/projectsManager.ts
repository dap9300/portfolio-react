import { Project } from '@/types';
import project1Data from '@/data/projects/project1.json';
import project2Data from '@/data/projects/project2.json';
import project3Data from '@/data/projects/project3.json';
import project4Data from '@/data/projects/project4.json';

const projects: { [key: string]: Project } = {
  '1': project1Data as Project,
  '2': project2Data as Project,
  '3': project3Data as Project,
  '4': project4Data as Project,
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