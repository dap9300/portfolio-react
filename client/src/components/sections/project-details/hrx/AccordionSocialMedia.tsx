// AccordionSocialMedia.tsx di hrx (project 2)
import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { FileEdit } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { projectDetailsTranslations as t } from "./content.it";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface AccordionSocialMediaProps {
  project: Project;
  language: Language;
}

export const AccordionSocialMedia: FC<AccordionSocialMediaProps> = ({ project, language }) => {
  console.log('AccordionSocialMedia - project:', project);
  console.log('AccordionSocialMedia - detailedSections:', project?.detailedSections);

  const data = [
    { year: '2021', month: 'Oct', followers: 5680, post: 1117},
    { year: '2022', month: 'Jan', followers: 6379, post: 1179},
    { year: '2022', month: 'Apr', followers: 7152, post: 1233},
    { year: '2022', month: 'Jul', followers: 7901, post: 1266},
    { year: '2022', month: 'Oct', followers: 8507, post: 1306},
    { year: '2023', month: 'Jan', followers: 9314, post: 1366},
    { year: '2023', month: 'Apr', followers: 10326, post: 1471},
    { year: '2023', month: 'Jul', followers: 11263, post: 1552},
    { year: '2023', month: 'Oct', followers: 12294, post: 1615}
  ];

  // Utilizziamo t.projectDetails.socialStrategy come fallback per il titolo
  const title = project?.detailedSections?.socialMedia?.title?.[language] || 
                t.projectDetails.socialStrategy[language];

  return (
    <AccordionItem value="social" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <FileEdit className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">
            {title}
          </h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        {project?.detailedSections?.socialMedia && (
          <Card className="p-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Attività</h3>
                {project.detailedSections.socialMedia.content && (
                  <p className="text-muted-foreground mb-4">
                    {project.detailedSections.socialMedia.content[language]}
                  </p>
                )}
                {project.detailedSections.socialMedia.metrics && (
                  <ul className="space-y-2 text-muted-foreground">
                    {project.detailedSections.socialMedia.metrics.map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Right Column - Performance Stats */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Performance Social</h3>
                <div className="space-y-4">
                  {/* Facebook Stats */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Facebook</span>
                      <span className="text-green-600 dark:text-green-400">+5,1% YoY</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">31.203</p>
                    <p className="text-sm text-muted-foreground">follower</p>
                  </div>

                  {/* Instagram Stats */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">Instagram</span>
                      <span className="text-green-600 dark:text-green-400">+41% YoY</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">13.133</p>
                    <p className="text-sm text-muted-foreground">follower</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Chart */}
            <div className="mt-8 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey={(data) => `${data.month} ${data.year}`} />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="followers" stroke="#2563eb" name="Followers" />
                  <Line type="monotone" dataKey="post" stroke="#16a34a" name="Posts" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Metrics Section */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">44k+</p>
                <p className="text-sm text-muted-foreground">Followers</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-green-600 dark:text-green-400">8.2%</p>
                <p className="text-sm text-muted-foreground">Engagement</p>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">550%</p>
                <p className="text-sm text-muted-foreground">Growth</p>
              </div>
            </div>
          </Card>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};