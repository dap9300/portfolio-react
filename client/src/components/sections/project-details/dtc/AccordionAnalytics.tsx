// client/src/components/sections/project-details/dtc/AccordionAnalytics.tsx
import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { BarChart2, TrendingUp, Search, Globe } from "lucide-react";
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

interface AccordionAnalyticsProps {
  project: Project;
  language: Language;
}

export const AccordionAnalytics: FC<AccordionAnalyticsProps> = ({ project, language }) => {
  const sectionTitle = language === 'it' ? 'Analytics & Performance' : 'Analytics & Performance';

  const performanceData = [
    { month: 'Gen', organic: 2500, conversion: 2.8 },
    { month: 'Feb', organic: 3200, conversion: 3.2 },
    { month: 'Mar', organic: 4100, conversion: 3.9 },
    { month: 'Apr', organic: 4800, conversion: 4.3 },
    { month: 'Mag', organic: 5500, conversion: 4.5 }
  ];

  return (
    <AccordionItem value="analytics" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <BarChart2 className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{sectionTitle}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Performance Overview */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {language === 'it' ? 'KPI Principali' : 'Key Performance Indicators'}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Globe className="w-4 h-4 text-primary" />
                      <span className="text-sm">Organic Traffic</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">+85%</p>
                    <span className="text-sm text-muted-foreground">YoY Growth</span>
                  </div>
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Search className="w-4 h-4 text-primary" />
                      <span className="text-sm">SERP Rankings</span>
                    </div>
                    <p className="text-2xl font-bold text-primary">Top 3</p>
                    <span className="text-sm text-muted-foreground">Key Terms</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {language === 'it' ? 'Metriche SEO' : 'SEO Metrics'}
                </h3>
                <ul className="space-y-3">
                  {[
                    { metric: 'Domain Authority', value: '65/100' },
                    { metric: 'Backlink Quality', value: '8.5/10' },
                    { metric: 'Page Speed Score', value: '95/100' },
                    { metric: 'Core Web Vitals', value: 'Passed' }
                  ].map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{item.metric}</span>
                      <span className="font-semibold text-primary">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Traffic & Conversion Chart */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">
                {language === 'it' ? 'Trend Traffico e Conversioni' : 'Traffic & Conversion Trends'}
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="organic" 
                      stroke="#2563eb" 
                      name="Organic Traffic"
                    />
                    <Line 
                      yAxisId="right"
                      type="monotone" 
                      dataKey="conversion" 
                      stroke="#16a34a" 
                      name="Conversion Rate %"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Key Achievements */}
              <div className="bg-accent/50 p-4 rounded-lg">
                <h4 className="font-semibold mb-3">
                  {language === 'it' ? 'Achievement Chiave' : 'Key Achievements'}
                </h4>
                <ul className="space-y-2">
                  {[
                    'Miglioramento page speed del 40%',
                    'Riduzione bounce rate del 25%',
                    'Incremento dwell time del 60%',
                    'Ottimizzazione mobile-first completa'
                  ].map((achievement, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};