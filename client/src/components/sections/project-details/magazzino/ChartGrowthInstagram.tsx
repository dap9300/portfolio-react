import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Instagram } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface ChartGrowthInstagramProps {
  project: Project;
  language: Language;
}

const data = [
  { year: '2021', month: 'Oct', followers: 5680, post: 1117, fbFollowers: 28200},
  { year: '2022', month: 'Jan', followers: 6379, post: 1179, fbFollowers: 28750},
  { year: '2022', month: 'Apr', followers: 7152, post: 1233, fbFollowers: 29100},
  { year: '2022', month: 'Jul', followers: 7901, post: 1266, fbFollowers: 29450},
  { year: '2022', month: 'Oct', followers: 8507, post: 1306, fbFollowers: 29700},
  { year: '2023', month: 'Jan', followers: 9314, post: 1366, fbFollowers: 30100},
  { year: '2023', month: 'Apr', followers: 10326, post: 1471, fbFollowers: 30450},
  { year: '2023', month: 'Jul', followers: 11263, post: 1552, fbFollowers: 30800},
  { year: '2023', month: 'Oct', followers: 12294, post: 1615, fbFollowers: 31000},
  { year: '2023', month: 'Dec', followers: 13133, post: 1657, fbFollowers: 31203}
];

export const ChartGrowthInstagram: FC<ChartGrowthInstagramProps> = ({ project, language }) => {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-center mb-4 flex items-center justify-center gap-2 text-foreground">
        <Instagram className="w-5 h-5 text-primary" />
        {project.detailedSections.overview.chartTitle[language]}
      </h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="!stroke-muted" />
            <XAxis 
              dataKey={(data) => `${data.month} ${data.year}`}
              stroke="currentColor"
              className="text-muted-foreground"
            />
            <YAxis stroke="currentColor" className="text-muted-foreground" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--background)',
                borderColor: 'var(--border)',
                color: 'var(--foreground)'
              }}
            />
            <Line type="monotone" dataKey="followers" stroke="#9333ea" name="Followers" />
            <Line type="monotone" dataKey="post" stroke="#16a34a" name="Posts" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};