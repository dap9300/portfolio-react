// client/src/lib/projects.ts
import { Project } from '@/types/projects';

// Import projects
import { project as magazzinoProject } from '@/components/sections/project-details/magazzino/content.it';
import { project as hrxProject } from '@/components/sections/project-details/hrx/content.it';
import { project as manuntaProject } from '@/components/sections/project-details/manunta/content.it';
import { project as dtcProject } from '@/components/sections/project-details/dtc/content.it';

// Import accordion components for each project
import { 
  AccordionObiettivi as MagazzinoObiettivi,
  AccordionSocialMedia as MagazzinoSocial,
  AccordionPianificazioneContenuti as MagazzinoPianificazione,
  AccordionEmailMarketing as MagazzinoEmail,
  AccordionCrowdfunding as MagazzinoCrowdfunding
} from '@/components/sections/project-details/magazzino';

import {
  HRXEcommerce,
  HRXEmailMarketing,
  HRXObjectivesAccordion as HRXObiettivi,
  HRXPianificazioneContenuti,
  HRXSocialMedia
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

export function getProject(id: string): Project | undefined {
  return projects[id];
}

export function getAllProjects(): Project[] {
  return Object.values(projects);
}

export function getProjectComponents(id: string) {
  switch(id) {
    case '2':
      return [
        HRXObiettivi,
        HRXSocialMedia,
        HRXPianificazioneContenuti,
        HRXEmailMarketing,
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
        MagazzinoEmail,
        MagazzinoCrowdfunding
      ];
  }
}