
import { motion } from "framer-motion";
import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { staggerContainer } from "@/lib/animations";
import { ChartBar, Code2, PenTool, Brain, Languages, Heart } from "lucide-react";

interface SkillsProps {
  language: Language;
}

interface SkillCategory {
  title: { en: string; it: string };
  icon: any;
  skills: string[];
}

const leftSkillCategories: SkillCategory[] = [
  {
    title: { en: "Digital Marketing & Analytics", it: "Digital Marketing & Analytics" },
    icon: ChartBar,
    skills: [
      "Performance Marketing (Meta Ads, Google Ads, Amazon Ads)",
      "Web & Marketing Analytics (Meta Business Suite, Google Analytics, Google Search Console, Google Tag Manager, Looker Studio)",
      "Email Marketing & Marketing Automation (Mailchimp, MailUp, ConvertKit, MailerLite, Drip)",
      "SEO & Optimization (SEO on-page, SEO on-site, Technical SEO, Screaming Frog, Semrush, Rank Math)",
      "Social Media (Meta Business Suite, Editorial Strategy & Planning, Community Management)"
    ]
  },
  {
    title: { en: "IT & Web", it: "IT & Web" },
    icon: Code2,
    skills: [
      "Programming & CMS (HTML5, CSS, WordPress, WooCommerce, Shopify)",
      "Operating Systems (Windows, MacOS)",
      "Office Productivity (Office Suite, Google Workspace, Slack, Asana, Trello)"
    ]
  },
  {
    title: { en: "Content Creation & Media Editing", it: "Content Creation & Media Editing" },
    icon: PenTool,
    skills: [
      "Graphic Design (Adobe Creative Suite, Canva)",
      "Video/Audio Editing (DaVinci Resolve, CapCut, Audacity)",
      "AI Tools (ChatGPT, Claude, MidJourney, Cursor, ElevenLabs)"
    ]
  }
];

const rightSkillCategories: SkillCategory[] = [
  {
    title: { en: "Soft Skills", it: "Soft Skill" },
    icon: Brain,
    skills: [
      "Analytical and data-driven thinking",
      "Priority and deadline management",
      "Cross-functional collaboration",
      "Customer-centric approach",
      "Ability to translate technical concepts for non-technical audiences",
      "Quick learning ability"
    ]
  },
  {
    title: { en: "Languages", it: "Lingue" },
    icon: Languages,
    skills: [
      "Italian: Native",
      "English: Fluent"
    ]
  },
  {
    title: { en: "Hobbies & Interests", it: "Hobby & Interessi" },
    icon: Heart,
    skills: [
      "Experimentation with AI Tools and new technologies",
      "Sport Climbing",
      "Chess",
      "Guitar"
    ]
  }
];

export function Skills({ language }: SkillsProps) {
  const t = translations[language].skills;

  return (
    <section id="skills" className="min-h-screen relative flex items-center py-20 px-4">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"
        initial={{ opacity: 1 }}
        viewport={{ once: true }}
      />
      <div className="container mx-auto">
        <SectionTitle 
          title={t.title} 
          icon="Brain"
        />
        <div className="grid md:grid-cols-2 gap-8 auto-rows-fr">
          <div className="space-y-8 grid auto-rows-fr">
            {leftSkillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">
                      {category.title[language]}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-muted-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="space-y-8 grid auto-rows-fr">
            {rightSkillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <category.icon className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">
                      {category.title[language]}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-muted-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
