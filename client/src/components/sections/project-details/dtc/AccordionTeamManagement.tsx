// client/src/components/sections/project-details/dtc/AccordionTeamManagement.tsx
import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Users, Clock, Zap, Award } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { translations as t } from "./content";

interface DTCTeamManagementProps {
  project: Project;
  language: Language;
}

export const AccordionTeamManagement: FC<DTCTeamManagementProps> = ({ project, language }) => {
  return (
    <AccordionItem value="team-management" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">
            {t.projectDetails.teamManagement[language]}
          </h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Team Management Overview */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Team Performance</h3>
              <ul className="space-y-2">
                {[
                  'Cross-functional team coordination',
                  'Workflow optimization e automazione',
                  'Implementazione metodologie agile',
                  'Knowledge sharing e documentazione',
                  'Performance tracking e KPI'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-accent/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <p className="text-sm text-muted-foreground">Time Efficiency</p>
                </div>
                <p className="text-2xl font-bold text-primary">+65%</p>
                <span className="text-sm text-muted-foreground">improvement</span>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <p className="text-sm text-muted-foreground">Productivity</p>
                </div>
                <p className="text-2xl font-bold text-primary">+85%</p>
                <span className="text-sm text-muted-foreground">increase</span>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-primary" />
                  <p className="text-sm text-muted-foreground">Quality Score</p>
                </div>
                <p className="text-2xl font-bold text-primary">9.2</p>
                <span className="text-sm text-muted-foreground">out of 10</span>
              </div>
              <div className="bg-accent/50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-4 h-4 text-primary" />
                  <p className="text-sm text-muted-foreground">Team Size</p>
                </div>
                <p className="text-2xl font-bold text-primary">12</p>
                <span className="text-sm text-muted-foreground">members</span>
              </div>
            </div>
          </div>

          {/* Team Efficiency Metrics */}
          <div className="mt-8">
            <h4 className="font-semibold mb-4">Team Efficiency Metrics</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-accent/50 p-6 rounded-lg">
                <h5 className="font-medium mb-2">Project Delivery</h5>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">On-time completion</span>
                  <span className="font-semibold text-primary">95%</span>
                </div>
              </div>
              <div className="bg-accent/50 p-6 rounded-lg">
                <h5 className="font-medium mb-2">Sprint Velocity</h5>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Average improvement</span>
                  <span className="font-semibold text-primary">+45%</span>
                </div>
              </div>
              <div className="bg-accent/50 p-6 rounded-lg">
                <h5 className="font-medium mb-2">Team Satisfaction</h5>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Employee score</span>
                  <span className="font-semibold text-primary">4.8/5</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};