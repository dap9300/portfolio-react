import { motion } from 'framer-motion';
import { useLocation, useParams } from 'wouter';
import { Language } from '@/types';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { LanguageSwitch } from '@/components/shared/LanguageSwitch';
import { ArrowLeft } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { useEffect } from 'react';
import { projectDetailsTranslations } from './project-details/hrx/content.it';
import { getProject } from '@/lib/projectsManager';
import {
  ProjectLayout,
  ProjectHeader,
  ProjectMetrics,
  ProjectContent
} from './project-details/magazzino';

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

      {/* Back button positioned above hero section */}
      <div className="absolute top-4 left-4 z-50">
        <motion.button
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          onClick={() => setLocation('/')}
          className="flex items-center text-white hover:text-white/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.back[language]}
        </motion.button>
      </div>

      <ProjectHeader project={project} language={language} />

      <div className="container mx-auto max-w-6xl py-12 px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-8"
        >
          <ProjectMetrics metrics={project.metrics} language={language} />
          <ProjectContent project={project} language={language} />
        </motion.div>
      </div>
    </ProjectLayout>
  );
}