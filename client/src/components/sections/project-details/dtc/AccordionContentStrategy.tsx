// client/src/components/sections/project-details/dtc/AccordionContentStrategy.tsx
import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { FileEdit, Layout, BookOpen, BarChart2, Target } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { translations as t } from "./content.it";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface DTCContentStrategyProps {
  project: Project;
  language: Language;
}

const DTCContentStrategy: FC<DTCContentStrategyProps> = ({ project, language }) => {
  return (
    <AccordionItem value="content-strategy" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <FileEdit className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{t.projectDetails.contentStrategy[language]}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Content Strategy Overview */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {language === 'it' ? 'Strategia Editoriale' : 'Editorial Strategy'}
                </h3>
                <ul className="space-y-2">
                  {[
                    'Content audit e gap analysis',
                    'Keyword research e mappatura contenuti',
                    'Sviluppo linee guida editoriali',
                    'Ottimizzazione contenuti esistenti',
                    'Creazione nuovi contenuti verticali'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {language === 'it' ? 'Contenuti Sviluppati' : 'Developed Content'}
                </h3>
                <ul className="space-y-2">
                  {[
                    'White paper settoriali',
                    'Case study e success stories',
                    'Guide tecniche e tutorial',
                    'Newsletter tematiche',
                    'Articoli di approfondimento'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Layout className="w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground">Page Views</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">+180%</p>
                  <span className="text-sm text-muted-foreground">incremento YoY</span>
                </div>

                <div className="bg-accent/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground">Time on Page</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">4:30</p>
                  <span className="text-sm text-muted-foreground">media</span>
                </div>

                <div className="bg-accent/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <BarChart2 className="w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground">Conversion Rate</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">4.5%</p>
                  <span className="text-sm text-muted-foreground">media</span>
                </div>

                <div className="bg-accent/50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-primary" />
                    <p className="text-sm text-muted-foreground">Keyword Ranking</p>
                  </div>
                  <p className="text-2xl font-bold text-primary">+200%</p>
                  <span className="text-sm text-muted-foreground">crescita</span>
                </div>
              </div>

              {/* Content Performance */}
              <div className="bg-accent/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">
                  {language === 'it' ? 'Performance per Tipo di Contenuto' : 'Content Type Performance'}
                </h4>
                <div className="space-y-3">
                  {[
                    { name: 'White Papers', rate: '6.8%' },
                    { name: 'Case Studies', rate: '5.2%' },
                    { name: 'Technical Guides', rate: '4.7%' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-semibold text-primary">{item.rate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};

export default DTCContentStrategy;