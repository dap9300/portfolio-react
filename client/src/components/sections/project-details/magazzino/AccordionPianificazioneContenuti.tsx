import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Globe, Ticket, Euro, Users, UserPlus } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CarouselSitoWeb } from "./CarouselSitoWeb";

interface AccordionPianificazioneContenutiProps {
  project: Project;
  language: Language;
}

interface MetricCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: React.ReactNode;
  bgColor: string;
  iconBgColor: string;
  valueColor: string;
}

const MetricCard: FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  icon, 
  bgColor, 
  iconBgColor,
  valueColor 
}) => (
  <Card className={`p-6 flex-1 ${bgColor}`}>
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className={`p-3 rounded-full ${iconBgColor}`}>
          {icon}
        </div>
        <div className="text-sm font-medium text-green-600">{change}</div>
      </div>
      <div className="space-y-1">
        <div className={`text-2xl font-semibold ${valueColor}`}>{value}</div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      </div>
    </div>
  </Card>
);

export const AccordionPianificazioneContenuti: FC<AccordionPianificazioneContenutiProps> = ({ 
  project, 
  language 
}) => {
  if (!project.detailedSections?.contentPlanning) return null;

  const metrics = [
    {
      title: "Nuovi Utenti Sito",
      value: "60.396",
      change: "+49,8% YoY",
      icon: <UserPlus className="w-5 h-5 text-blue-600" />,
      bgColor: "bg-blue-50",
      iconBgColor: "bg-blue-100",
      valueColor: "text-blue-800"
    },
    {
      title: "Totale eTicket venduti",
      value: "5.090",
      change: "+34% YoY",
      icon: <Ticket className="w-5 h-5 text-purple-600" />,
      bgColor: "bg-purple-50",
      iconBgColor: "bg-purple-100",
      valueColor: "text-purple-800"
    },
    {
      title: "Ricavi netti vendita eTicket",
      value: "€27.206",
      change: "+34% YoY",
      icon: <Euro className="w-5 h-5 text-green-600" />,
      bgColor: "bg-green-50",
      iconBgColor: "bg-green-100",
      valueColor: "text-green-800"
    }
  ];

  return (
    <AccordionItem value="content-planning" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <Globe className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{project.detailedSections.contentPlanning.title[language]}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <div className="flex gap-4 mb-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Card className="p-6 w-full md:w-1/3">
            <ul className="space-y-2 text-muted-foreground">
              {project.detailedSections.contentPlanning.metrics.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <div className="w-full md:w-2/3">
            <CarouselSitoWeb />
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};