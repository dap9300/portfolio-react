import { useLocation, useParams } from 'wouter';
import { motion } from 'framer-motion';
import { Language } from '@/types';
import { projectDetailsTranslations } from '@/data/translations/project-details';
import { getProject, getProjectMetrics, getProjectGallery } from '@/lib/projectsManager';
import {
  ProjectLayout,
  ProjectHeader,
  ProjectMetrics,
  ProjectContent,
  ProjectGallery
} from './project-details';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { LanguageSwitch } from '@/components/shared/LanguageSwitch';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailsProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function ProjectDetails({ language, onLanguageChange }: ProjectDetailsProps) {
  const [, setLocation] = useLocation();
  const { id = '1' } = useParams();

  const project = getProject(id);
  const metrics = getProjectMetrics(id);
  const gallery = getProjectGallery(id);

  if (!project) {
    setLocation('/');
    return null;
  }

  return (
    <ProjectLayout>
      <div className="fixed top-4 right-16 z-50">
        <ThemeToggle />
      </div>
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitch
          currentLanguage={language}
          onLanguageChange={onLanguageChange}
        />
      </div>

      <div className="container mx-auto max-w-6xl py-12 px-4">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLocation('/')}
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {projectDetailsTranslations.navigation.back[language]}
        </motion.button>

        <ProjectHeader project={project} language={language} />

        {metrics.length > 0 && (
          <ProjectMetrics metrics={metrics} language={language} />
        )}

        <ProjectContent project={project} language={language} />

        {gallery?.length > 0 && (
          <ProjectGallery gallery={gallery} />
        )}
      </div>
    </ProjectLayout>
  );
}