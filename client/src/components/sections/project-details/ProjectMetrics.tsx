import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project, ProjectMetric } from "@/types/projects";

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
  language: Language;
}

export const ProjectMetrics: FC<ProjectMetricsProps> = ({ metrics, language }) => {
  if (!metrics?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {metrics.map((metric, index) => {
        const IconComponent = metric.icon;
        const labelContent = typeof metric.label[language] === 'string' 
          ? metric.label[language] 
          : metric.label[language].text;

        return (
          <motion.div
            key={index}
            className="bg-white dark:bg-card border border-border/50 hover:border-primary/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-4">
              <IconComponent className="w-10 h-10 text-primary" />
              <div className="relative group">
                <p className="text-2xl font-bold">{metric.value}</p>
                <p className="text-muted-foreground">
                  {labelContent}
                </p>
                {typeof metric.label[language] !== 'string' && metric.label[language].tooltip && (
                  <div className="absolute invisible group-hover:visible bg-gray-800 text-white text-sm rounded-md p-2 w-64 -top-2 left-1/2 -translate-y-full -translate-x-1/2 pointer-events-none transition-all duration-300 ease-in-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 delay-150 z-10">
                    {metric.label[language].tooltip}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  );
};