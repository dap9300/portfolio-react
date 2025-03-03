import { FC } from "react";
import { Language, LocalizedContent } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Mail, Users, MousePointerClick, Send, UserMinus } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface AccordionEmailMarketingProps {
  project: Project;
  language: Language;
}

interface MetricCardProps {
  label: LocalizedContent<string>;
  value: string;
  subtitle: LocalizedContent<string>;
  language: Language;
  icon: React.ReactNode;
  colorClasses: {
    bg: string;
    text: string;
    icon: string;
  };
}

const MetricCard: FC<MetricCardProps> = ({ 
  label, 
  value, 
  subtitle, 
  language,
  icon,
  colorClasses 
}) => (
  <div className={`p-4 rounded-lg ${colorClasses.bg}`}>
    <div className="flex items-center justify-between mb-2">
      <p className="text-sm text-muted-foreground">{label[language]}</p>
      <div className={`p-2 rounded-full ${colorClasses.icon}`}>
        {icon}
      </div>
    </div>
    <p className={`text-2xl font-bold ${colorClasses.text}`}>{value}</p>
    <span className="text-muted-foreground text-sm">{subtitle[language]}</span>
  </div>
);

export const AccordionEmailMarketing: FC<AccordionEmailMarketingProps> = ({ 
  project, 
  language 
}) => {
  if (!project.detailedSections?.emailMarketing) return null;

  const metrics = [
    {
      label: {
        it: "Iscritti Newsletter",
        en: "Newsletter Subscribers"
      },
      value: "46.347",
      subtitle: {
        it: "+30% YoY",
        en: "+30% YoY"
      },
      icon: <Users className="w-5 h-5" />,
      colorClasses: {
        bg: "bg-blue-50",
        text: "text-blue-700",
        icon: "bg-blue-100"
      }
    },
    {
      label: {
        it: "Tasso di Apertura",
        en: "Open Rate"
      },
      value: "14.7%",
      subtitle: {
        it: "medio",
        en: "average"
      },
      icon: <Send className="w-5 h-5" />,
      colorClasses: {
        bg: "bg-amber-50",
        text: "text-amber-700",
        icon: "bg-amber-100"
      }
    },
    {
      label: {
        it: "Tasso di Click",
        en: "Click Rate"
      },
      value: "4.5%",
      subtitle: {
        it: "medio",
        en: "average"
      },
      icon: <MousePointerClick className="w-5 h-5" />,
      colorClasses: {
        bg: "bg-green-50",
        text: "text-green-700",
        icon: "bg-green-100"
      }
    },
    {
      label: {
        it: "Tasso di Cancellazione",
        en: "Unsubscribe Rate"
      },
      value: "0.7%",
      subtitle: {
        it: "basso",
        en: "low"
      },
      icon: <UserMinus className="w-5 h-5" />,
      colorClasses: {
        bg: "bg-red-50",
        text: "text-red-700",
        icon: "bg-red-100"
      }
    }
  ];

  const activitiesTitle: LocalizedContent<string> = {
    it: "Attività Email Marketing",
    en: "Email Marketing Activities"
  };

  return (
    <AccordionItem value="email" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">
            {project.detailedSections.emailMarketing.title[language]}
          </h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {project.detailedSections.emailMarketing.content[language]}
              </p>
              <h3 className="font-semibold text-lg">{activitiesTitle[language]}</h3>
              <ul className="space-y-2">
                {project.detailedSections.emailMarketing.metrics.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  label={metric.label}
                  value={metric.value}
                  subtitle={metric.subtitle}
                  language={language}
                  icon={metric.icon}
                  colorClasses={metric.colorClasses}
                />
              ))}
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};