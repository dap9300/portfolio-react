// client/src/lib/projects.ts

import { Project } from '@/types/projects';
import { project as magazzinoProject } from '@/components/sections/project-details/magazzino/content.it';
import { project as hrxProject } from '@/components/sections/project-details/hrx/content.it';
import { project as manuntaProject } from '@/components/sections/project-details/manunta/content.it';
import { project as dtcProject } from '@/components/sections/project-details/dtc/content.it';

// Import accordion components
import { 
  AccordionObiettivi as MagazzinoObiettivi,
  AccordionSocialMedia as MagazzinoSocial,
  AccordionPianificazioneContenuti as MagazzinoPianificazione,
  AccordionEmailMarketing as MagazzinoEmail
} from '@/components/sections/project-details/magazzino';

import {
  HRXObjectivesAccordion as HRXObiettivi,
  HRXSocialMedia as HRXSocial,
  HRXPianificazioneContenuti as HRXPianificazione,
  HRXEmailMarketing as HRXEmail,
  HRXEcommerce
} from '@/components/sections/project-details/hrx';

import {
  AccordionObiettivi as ManuntaObiettivi,
  AccordionSocialMedia as ManuntaSocial,
  AccordionPianificazioneContenuti as ManuntaPianificazione
} from '@/components/sections/project-details/manunta';

import {
  AccordionObiettivi as DTCObiettivi,
  AccordionSocialMedia as DTCSocial,
  AccordionPianificazioneContenuti as DTCPianificazione
} from '@/components/sections/project-details/dtc';

// Projects registry
const projects: Record<string, Project> = {
  '1': magazzinoProject,
  '2': hrxProject,
  '3': manuntaProject,
  '4': dtcProject
};

// Simplified API for project management
export function getProject(id: string): Project | undefined {
  return projects[id];
}

export function getAllProjects(): Project[] {
  return Object.values(projects);
}

export function getProjectMetrics(id: string) {
  return projects[id]?.metrics || [];
}

export function getProjectDetailedSections(id: string) {
  return projects[id]?.detailedSections;
}

// Helper to determine which components to use based on project ID
export function getProjectComponents(id: string) {
  switch(id) {
    case '2':
      return [
        HRXObiettivi,
        HRXSocial,
        HRXPianificazione,
        HRXEmail,
        HRXEcommerce
      ];
    case '3':
      return [
        ManuntaObiettivi,
        ManuntaSocial,
        ManuntaPianificazione
      ];
    case '4':
      return [
        DTCObiettivi,
        DTCSocial,
        DTCPianificazione
      ];
    case '1':
    default:
      return [
        MagazzinoObiettivi,
        MagazzinoSocial,
        MagazzinoPianificazione,
        MagazzinoEmail
      ];
  }
}