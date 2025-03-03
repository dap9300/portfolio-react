// Accordion Socia Media Magazzino
  import { FC } from "react";
  import { Language } from "@/types";
  import { Project } from "@/types/projects";
  import { Card } from "@/components/ui/card";
  import { FileEdit, FileChartColumnIncreasing, TrendingUp, GalleryHorizontalEnd } from "lucide-react";
  import { ProjectCarousel } from "./ProjectCarousel";
  import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
  import { ChartGrowthInstagram } from "./ChartGrowthInstagram";

  interface AccordionSocialMediaProps {
    project: Project;
    language: Language;
  }

  const renderMetric = (text: string) => {
    return text.split(/(\{\{[^}]+\}\})/g).map((part, i) => {
      if (part.startsWith('{{') && part.endsWith('}}')) {
        const value = part.slice(2, -2);
        return (
          <span key={i} className="text-green-600 dark:text-green-400">
            {value}
          </span>
        );
      }
      return <span key={i} className="text-gray-600 dark:text-gray-400">{part}</span>;
    });
  };

  export const AccordionSocialMedia: FC<AccordionSocialMediaProps> = ({ project, language }) => {
    if (!project.detailedSections?.overview) return null;

    return (
      <AccordionItem value="social" className="border rounded-lg hover:bg-accent/50 transition-colors">
        <AccordionTrigger className="px-4">
          <div className="flex items-center gap-3">
            <FileEdit className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">
              {project.detailedSections.overview.title[language]}
            </h2>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-4">
          <Card className="p-6 mt-4 bg-background">
            {/* Overview Content */}
            <div className="w-1/2 mb-6">
              <p className="text-muted-foreground">
                {project.detailedSections.overview.content[language]}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2 text-foreground">
                  <FileChartColumnIncreasing className="w-5 h-5 text-primary" />
                  {project.detailedSections.overview.metricsTitle[language]}
                </h3>
                <ul className="space-y-2">
                  {project.detailedSections.overview.metrics.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                      {renderMetric(item)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Performance Stats */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2 text-foreground">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  {project.detailedSections.overview.followersTitle[language]}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {/* Facebook Stats */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{project.detailedSections.overview.facebookTitle[language]}</span>
                      <span className="text-green-600 dark:text-green-400">{project.detailedSections.overview.facebookGrowth}</span>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">{project.detailedSections.overview.facebookFollowers}</p>
                    <p className="text-sm text-muted-foreground">{project.detailedSections.overview.followersLabel[language]}</p>
                  </div>

                  {/* Instagram Stats */}
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{project.detailedSections.overview.instagramTitle[language]}</span>
                      <span className="text-green-600 dark:text-green-400">{project.detailedSections.overview.instagramGrowth}</span>
                    </div>
                    <p className="text-2xl font-bold text-purple-600 dark:text-purple-400 mt-1">{project.detailedSections.overview.instagramFollowers}</p>
                    <p className="text-sm text-muted-foreground">{project.detailedSections.overview.followersLabel[language]}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Chart */}
            <ChartGrowthInstagram project={project} language={language} />

            {/* Content Creation Section */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-center mb-4 flex items-center justify-center gap-2 text-foreground">
                <GalleryHorizontalEnd className="w-5 h-5 text-primary" />
                {project.detailedSections.socialMediaContent.title[language]}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {/* Left Column - Bullet Points */}
                <div className="md:col-span-1 space-y-2">
                  {project.detailedSections.socialMediaContent.metrics.map((metric, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span className="text-muted-foreground break-normal">{metric}</span>
                    </div>
                  ))}
                </div>
                {/* Right Column - Carousel */}
                <div className="md:col-span-3">
                  <ProjectCarousel project={project} />
                </div>
              </div>
            </div>
          </Card>
        </AccordionContent>
      </AccordionItem>
    );
};