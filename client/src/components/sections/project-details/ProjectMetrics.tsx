import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { ProjectMetric } from "@/types/projects";
import { Users, TrendingUp, Calendar } from "lucide-react";

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
  language: Language;
}

export const ProjectMetrics: FC<ProjectMetricsProps> = ({ metrics, language }) => {
  if (!metrics?.length) return null;

  // Map icon keys to Lucide icons
  const getIcon = (iconKey: string) => {
    switch (iconKey) {
      case 'rjzlcjqi':
        return <Users className="w-10 h-10 text-primary" />;
      case 'gkosxwgv':
        return <TrendingUp className="w-10 h-10 text-primary" />;
      case 'mzjnwzka':
        return <Calendar className="w-10 h-10 text-primary" />;
      default:
        return null;
    }
  };

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
            {getIcon(metric.icon)}
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