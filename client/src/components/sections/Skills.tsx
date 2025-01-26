import { motion } from "framer-motion";
import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { LordIcon } from "@/components/shared/LordIcon";

interface SkillsProps {
  language: Language;
}

interface SkillCategory {
  title: { en: string; it: string };
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: { en: "Digital Marketing & Analytics", it: "Digital Marketing & Analytics" },
    icon: "gkosxwgv",
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
    icon: "rjzlcjqi",
    skills: [
      "Programming & CMS (HTML5, CSS, WordPress, WooCommerce, Shopify)",
      "Operating Systems (Windows, MacOS)",
      "Office Productivity (Office Suite, Google Workspace, Slack, Asana, Trello)"
    ]
  },
  {
    title: { en: "Soft Skills", it: "Soft Skill" },
    icon: "mzjnwzka",
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
    icon: "ehdfdiha",
    skills: [
      "Italian: Native",
      "English: Fluent"
    ]
  },
  {
    title: { en: "Content Creation & Media Editing", it: "Content Creation & Media Editing" },
    icon: "xltxtfvt",
    skills: [
      "Graphic Design (Adobe Creative Suite, Canva)",
      "Video/Audio Editing (DaVinci Resolve, CapCut, Audacity)",
      "AI Tools (ChatGPT, Claude, MidJourney, Cursor, ElevenLabs)"
    ]
  },
  {
    title: { en: "Hobbies & Interests", it: "Hobby & Interessi" },
    icon: "lupuorrc",
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <div className="container mx-auto">
        <SectionTitle 
          title={t.title} 
          icon="https://cdn.lordicon.com/xcxzayqr.json"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <LordIcon
                      src={`https://cdn.lordicon.com/${category.icon}.json`}
                      trigger="hover"
                      size={32}
                      colors={{
                        primary: "var(--primary)",
                        secondary: "var(--primary)"
                      }}
                    />
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}