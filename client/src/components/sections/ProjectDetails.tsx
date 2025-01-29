import { motion } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { Language } from '@/types';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { LanguageSwitch } from '@/components/shared/LanguageSwitch';
import { ArrowLeft } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useEffect } from 'react';
import { projectDetailsTranslations } from '@/data/translations/projectDetails';
import { getProject } from '@/lib/projectsManager';
import {
  ProjectLayout,
  ProjectHeader,
  ProjectMetrics,
  ProjectContent,
  ProjectGallery
} from './project-details';

interface ProjectDetailsProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function ProjectDetails({
  language,
  onLanguageChange,
}: ProjectDetailsProps) {
  const [, setLocation] = useLocation();
  const params = useParams();
  const id = params?.id ?? '1';
  const project = getProject(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    setLocation('/');
    return null;
  }

  const t = projectDetailsTranslations;

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
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          onClick={() => setLocation('/')}
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.back[language]}
        </motion.button>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-8"
        >
          <ProjectHeader project={project} language={language} />
          <ProjectMetrics metrics={project.metrics} language={language} />
          <ProjectContent project={project} language={language} />
          <ProjectGallery gallery={project.gallery} />
        </motion.div>
      </div>
    </ProjectLayout>
  );
}