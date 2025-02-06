import { project as italianProject } from './content.it';
import type { Project } from '@/types/projects';

export const project: Project = {
  ...italianProject,
  description: {
    ...italianProject.description,
    en: "Management of digital marketing strategies for a physiotherapy clinic, focusing on Facebook, Instagram, and Google Ads campaigns to increase online bookings and local brand awareness.",
  },
  detailedSections: {
    ...italianProject.detailedSections!,
    overview: {
      ...italianProject.detailedSections!.overview,
      content: {
        en: "Led the digital transformation for a physiotherapy clinic, implementing SEO strategies and managing social media campaigns to boost online visibility and patient bookings.",
        it: italianProject.detailedSections!.overview.content.it
      }
    }
  }
};