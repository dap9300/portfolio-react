import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project, ProjectMetric } from "@/types/projects";
import { Users, TrendingUp, BarChart } from 'lucide-react';

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
  language: Language;
}

export const ProjectMetrics: FC<ProjectMetricsProps> = ({ metrics, language }) => {
  if (!metrics?.length) {
    console.log("No metrics found or metrics is empty");
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 pb-4">
      {metrics.map((metric, index) => {
        // Gestione più flessibile delle icone
        let IconToRender;
        if (typeof metric.icon === 'string') {
          // Se l'icona è una stringa, potremmo avere un mapping qui se necessario
          IconToRender = Users; // default fallback
        } else {
          IconToRender = metric.icon;
        }

        const labelContent = typeof metric.label[language] === 'string' 
          ? metric.label[language] 
          : metric.label[language].text;

        return (
          <motion.div
            key={index}
            className="bg-white dark:bg-card border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-4">
              {IconToRender && (
                <IconToRender className="w-10 h-10 text-primary" />
              )}
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
        );
      })}
    </div>
  );
};