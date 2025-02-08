// client/src/components/sections/project-details/dtc/AccordionLeadGeneration.tsx
import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Users, Target, TrendingUp } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { translations as t } from "./content";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface DTCLeadGenerationProps {
  project: Project;
  language: Language;
}

export const AccordionLeadGeneration: FC<DTCLeadGenerationProps> = ({ project, language }) => {
  const data = [
    { year: '2023', month: 'Jan', leads: 250, conversion: 18 },
    { year: '2023', month: 'Mar', leads: 320, conversion: 22 },
    { year: '2023', month: 'Jun', leads: 410, conversion: 28 },
    { year: '2023', month: 'Sep', leads: 480, conversion: 32 },
    { year: '2023', month: 'Dec', leads: 550, conversion: 38 }
  ];

  const title = t.projectDetails.leadGeneration[language];

  return (
    <AccordionItem value="lead-generation" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <Target className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Lead Generation Strategy</h3>
              <p className="text-muted-foreground mb-4">
                Implementazione di una strategia integrata di lead generation focalizzata sul settore fintech.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                  Crescita lead qualificati: +150% YoY
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                  Tasso di conversione: 4.5x miglioramento
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                  Quality score leads: 8.5/10
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                  ROI campagne: +180%
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Performance Metriche</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Lead Rate</span>
                    <span className="text-green-600 dark:text-green-400">+150% YoY</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">4.5x</p>
                  <p className="text-sm text-muted-foreground">miglioramento</p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Conversion Rate</span>
                    <span className="text-green-600 dark:text-green-400">+180% YoY</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">8.5%</p>
                  <p className="text-sm text-muted-foreground">media</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={(data) => `${data.month} ${data.year}`} />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="leads" stroke="#2563eb" name="Leads" />
                <Line type="monotone" dataKey="conversion" stroke="#16a34a" name="Conversion %" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">550+</p>
              <p className="text-sm text-muted-foreground">Lead Mensili</p>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">8.5%</p>
              <p className="text-sm text-muted-foreground">Conversion Rate</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">180%</p>
              <p className="text-sm text-muted-foreground">ROI</p>
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};