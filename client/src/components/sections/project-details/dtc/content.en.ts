import { project as italianProject } from './content.it';
import type { Project } from '@/types/projects';

export const project: Project = {
  ...italianProject,
  description: {
    ...italianProject.description,
    en: "Development and implementation of digital marketing strategies for an e-commerce business, focusing on performance marketing and social media campaigns.",
  },
  detailedSections: {
    ...italianProject.detailedSections!,
    overview: {
      ...italianProject.detailedSections!.overview,
      content: {
        en: "Led the e-commerce growth strategy, implementing performance marketing campaigns and optimizing the conversion funnel to boost sales.",
        it: italianProject.detailedSections!.overview.content.it
      }
    }
  }
};