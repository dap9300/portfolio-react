import { FC } from "react";
import { motion } from "framer-motion";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { FileEdit } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  if (!project.detailedSections?.socialMedia) return null;

  return (
    <AccordionItem value="social" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <FileEdit className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">
            {project.detailedSections.socialMedia.title[language]}
          </h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Text Content */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Gestione Contenuti</h3>
              <ul className="space-y-2 text-muted-foreground">
                {project.detailedSections.socialMedia.metrics.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Performance Stats */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Performance Social</h3>
              <div className="space-y-4">
                {/* Facebook Stats */}
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Facebook</span>
                    <span className="text-green-600 dark:text-green-400">+3,1% YoY</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">31.203</p>
                  <p className="text-sm text-muted-foreground">follower</p>
                </div>

                {/* Instagram Stats */}
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Instagram</span>
                    <span className="text-green-600 dark:text-green-400">+44,2% YoY</span>
                  </div>
                  <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">12.911</p>
                  <p className="text-sm text-muted-foreground">follower</p>
                </div>
              </div>
            </div>
          </div>

          {/* Growth Chart */}
          <div className="mt-8 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[
                { month: 'Gen', followers: 32000, engagement: 2100 },
                { month: 'Feb', followers: 34500, engagement: 2300 },
                { month: 'Mar', followers: 37800, engagement: 2600 },
                { month: 'Apr', followers: 40200, engagement: 2800 },
                { month: 'Mag', followers: 42500, engagement: 3100 },
                { month: 'Giu', followers: 44115, engagement: 3400 }
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="followers" stroke="#2563eb" name="Followers" />
                <Line type="monotone" dataKey="engagement" stroke="#16a34a" name="Engagement" />
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
      </AccordionContent>
    </AccordionItem>
  );
};