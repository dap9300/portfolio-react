// client/src/components/sections/project-details/dtc/index.ts
export { default as AccordionObiettivi } from './AccordionObiettivi';
export { default as AccordionContentStrategy } from './AccordionContentStrategy';
export { default as AccordionLeadGeneration } from './AccordionLeadGeneration';
export { default as AccordionTeamManagement } from './AccordionTeamManagement';
export { default as AccordionAnalytics } from './AccordionAnalytics';
export { projectContent as project } from './content.it';
export { projectContent as italianContent } from './content.it';
export { projectContent as englishContent } from './content.en';

export const getContent = (language: 'it' | 'en') => {
  return language === 'it' ? italianContent : englishContent;
};