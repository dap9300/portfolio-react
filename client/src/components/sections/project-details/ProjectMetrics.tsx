import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project, ProjectMetric } from "@/types/projects";
import { ICON_MAPPING } from "@/constants/icons";

export const projectMetrics: Record<
  string,
  Array<{
    icon: string;
    value: string;
    label: Record<Language, string>;
  }>
> = {
  '1': [
    {
      icon: 'rjzlcjqi',
      value: '44,114',
      label: { en: 'Total Social Followers', it: 'Follower Social Totali' },
    },
    {
      icon: 'gkosxwgv',
      value: '+550%',
      label: { en: 'Instagram Growth', it: 'Crescita Instagram' },
    },
    {
      icon: 'mzjnwzka',
      value: '37,455',
      label: { en: 'Annual Users', it: 'Utenti Annuali' },
    },
  ],
  '2': [
    {
      icon: 'rjzlcjqi',
      value: '4,2x',
      label: {
        en: 'Average ROAS on Google Ads campaigns',
        it: 'ROAS medio su campagne Google Ads'
      }
    },
    {
      icon: 'esvewwqs',
      value: '+18%',
      label: {
        en: 'CRO on E-commerce',
        it: 'CRO su E-commerce'
      }
    },
    {
      icon: 'mzjnwzka',
      value: '+120%',
      label: {
        en: 'Campaigns ROI',
        it: 'ROI Campagne'
      }
    }
  ]
};

interface ProjectMetricsProps {
  metrics: ProjectMetric[];
  language: Language;
}

export const ProjectMetrics: FC<ProjectMetricsProps> = ({ metrics, language }) => {
  if (!metrics?.length) return null;

  const getIcon = (iconKey: string) => {
    const IconComponent = ICON_MAPPING[iconKey as keyof typeof ICON_MAPPING];
    return IconComponent ? <IconComponent className="w-10 h-10 text-primary" /> : null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.icon}
          className="bg-white dark:bg-card border border-border/50 hover:border-primary/50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
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