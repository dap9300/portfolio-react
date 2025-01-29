import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { ProjectMetric } from "@/types/projects";
import { LordIcon } from "@/components/shared/LordIcon";

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
  language: Language;
}

/**
 * ProjectMetrics - Displays project statistics and metrics
 * Shows animated metric cards with icons and values
 */
export const ProjectMetrics: FC<ProjectMetricsProps> = ({ metrics, language }) => {
  if (!metrics?.length) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.icon}
          className="bg-card p-6 rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex items-center space-x-4">
            <LordIcon src={metric.icon} size={40} trigger="hover" />
            <div>
              <p className="text-2xl font-bold">{metric.value}</p>
              <p className="text-muted-foreground">
                {metric.label[language]}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};