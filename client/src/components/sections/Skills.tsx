import { useState } from "react";
import { translations } from "@/components/sections/project-details/SiteContent";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, Code2, ChevronDown, PenTool, Brain, Languages, Heart } from "lucide-react";

interface SkillsProps {
  language: Language;
}

interface SkillCategory {
  title: { en: string; it: string };
  icon: any;
  skills: { en: string[]; it: string[] };
}

const leftSkillCategories: SkillCategory[] = [
  {
    title: { en: "Digital Marketing & Analytics", it: "Digital Marketing & Analytics" },
    icon: ChartBar,
    skills: {
      en: [
        "**Performance Marketing**: Meta Ads, Google Ads, Amazon Ads",
        "**Web & Marketing Analytics**: Meta Business Suite, Google Analytics, Google Search Console, Google Tag Manager, Looker Studio",
        "**Email Marketing**: Mailchimp & Other ESP",
        "**SEO & Optimization**: SEO Technical, Screaming Frog, Semrush, Rank Math",
        "**Social Media**: Meta Business Suite, Editorial Strategy & Planning, Community Management"
      ],
      it: [
        "Performance Marketing (Meta Ads, Google Ads, Amazon Ads)",
        "Web & Marketing Analytics (Meta Business Suite, Google Analytics, Google Search Console, Google Tag Manager, Looker Studio)",
        "Email Marketing (Mailchimp & Other ESP)",
        "SEO & Optimization (SEO Technical, Screaming Frog, Semrush, Rank Math)",
        "Social Media (Meta Business Suite, Editorial Strategy & Planning, Community Management)"
      ]
    }
  },
  {
    title: { en: "IT & Web", it: "IT & Web" },
    icon: Code2,
    skills: {
      en: [
        "Programming & CMS (HTML5, CSS, WordPress, WooCommerce, Shopify)",
        "Operating Systems (Windows, MacOS)",
        "Office Productivity (Office Suite, Google Workspace, Slack, Asana, Trello)"
      ],
      it: [
        "Programmazione & CMS (HTML5, CSS, WordPress, WooCommerce, Shopify)",
        "Sistemi Operativi (Windows, MacOS)",
        "Produttività Office (Office Suite, Google Workspace, Slack, Asana, Trello)"
      ]
    }
  },
  {
    title: { en: "Content Creation & Media Editing", it: "Content Creation & Media Editing" },
    icon: PenTool,
    skills: {
      en: [
        "Graphic Design (Adobe Creative Suite, Canva)",
        "Video/Audio Editing (DaVinci Resolve, CapCut, Audacity)",
        "AI Tools (ChatGPT, Claude, MidJourney, Cursor, ElevenLabs)"
      ],
      it: [
        "Graphic Design (Adobe Creative Suite, Canva)",
        "Video/Audio Editing (DaVinci Resolve, CapCut, Audacity)",
        "Strumenti AI (ChatGPT, Claude, MidJourney, Cursor, ElevenLabs)"
      ]
    }
  }
];

const rightSkillCategories: SkillCategory[] = [
  {
    title: { en: "Soft Skills", it: "Soft Skill" },
    icon: Brain,
    skills: {
      en: [
        "Analytical and data-driven thinking",
        "Priority and deadline management",
        "Cross-functional collaboration",
        "Customer-centric approach",
        "Ability to translate technical concepts for non-technical audiences",
        "Quick learning ability"
      ],
      it: [
        "Pensiero analitico e basato sui dati",
        "Gestione delle priorità e delle scadenze",
        "Collaborazione interfunzionale",
        "Approccio incentrato sul cliente",
        "Capacità di tradurre concetti tecnici per un pubblico non tecnico",
        "Capacità di apprendimento rapido"
      ]
    }
  },
  {
    title: { en: "Languages", it: "Lingue" },
    icon: Languages,
    skills: {
      en: [
        "Italian: Native",
        "English: Fluent"
      ],
      it: [
        "Italiano: Madrelingua",
        "Inglese: Fluente"
      ]
    }
  },
  {
    title: { en: "Hobbies & Interests", it: "Hobby & Interessi" },
    icon: Heart,
    skills: {
      en: [
        "Experimentation with AI Tools and new technologies",
        "Sport Climbing",
        "Chess",
        "Guitar"
      ],
      it: [
        "Sperimentazione con strumenti AI e nuove tecnologie",
        "Arrampicata sportiva",
        "Scacchi",
        "Chitarra"
      ]
    }
  }
];

const getSkillLevel = (tool: string): number => {
  const skillLevels: { [key: string]: number } = {
    "Meta Ads": 4,
    "Google Ads": 4,
    "Amazon Ads": 3,
    "Meta Business Suite": 4,
    "Google Analytics": 5,
    "Google Search Console": 5,
    "Google Tag Manager": 4,
    "Looker Studio": 3,
    "Mailchimp & Other ESP": 4,
    "SEO Technical": 4,
    "Screaming Frog": 4,
    "Semrush": 4,
    "Rank Math": 4,
    "Editorial Strategy & Planning": 4,
    "Community Management": 4,
    "HTML5": 4,
    "CSS": 4,
    "WordPress": 5,
    "WooCommerce": 4,
    "Shopify": 3,
    "Windows": 5,
    "MacOS": 4,
    "Office Suite": 5,
    "Google Workspace": 5,
    "Slack": 5,
    "Asana": 4,
    "Trello": 4,
    "Adobe Creative Suite": 3,
    "Canva": 5,
    "DaVinci Resolve": 3,
    "CapCut": 4,
    "Audacity": 3,
    "ChatGPT": 5,
    "Claude": 4,
    "MidJourney": 4,
    "Cursor": 3,
    "ElevenLabs": 3,
  };

  return skillLevels[tool.trim()] || 3;
};

const DotGradient = ({ level, index }: { level: number; index: number }) => {
  const gradientColors = [
    'bg-blue-200',
    'bg-blue-300',
    'bg-blue-400',
    'bg-blue-500',
    'bg-blue-600',
  ];

  return (
    <div
      className={`w-3 h-3 rounded-full transition-colors ${
        index < level ? gradientColors[index] : 'bg-muted'
      }`}
    />
  );
};

export function Skills({ language }: SkillsProps) {
  const t = translations[language].skills;
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  const toggleCategory = (categoryKey: string) => {
    setExpanded(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const renderCategory = (category: SkillCategory, side: 'left' | 'right', index: number) => {
    const categoryKey = `${side}-${index}`;
    const isExpanded = expanded[categoryKey] || false;

    return (
      <Card key={categoryKey} className="w-full">
        <button
          onClick={() => toggleCategory(categoryKey)}
          className="w-full p-4 hover:bg-muted/30 transition-colors"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <category.icon className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground text-left">
                {category.title[language]}
              </h3>
            </div>
            <ChevronDown className={`w-5 h-5 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </div>
        </button>

        <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0'}`}>
          <CardContent className="p-4 pt-0">
            <ul className="space-y-4">
              {category.skills[language].map((skill, skillIndex) => {
                if (side === 'left') {
                  const [title, ...tools] = skill.split(/: |\(/);
                  const cleanedTitle = title.replace(/\*\*/g, '').trim();
                  const toolList = tools.join('').split(/,\s*|\)/).filter(Boolean);

                  return (
                    <li key={skillIndex} className="text-sm">
                      <strong className="text-foreground">{cleanedTitle}</strong>
                      <ul className="mt-1.5 space-y-2">
                        {toolList.map((tool, toolIndex) => {
                          const level = getSkillLevel(tool);
                          return (
                            <li 
                              key={toolIndex} 
                              className="flex justify-between items-center"
                            >
                              <span className="text-muted-foreground">{tool}</span>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <DotGradient key={i} level={level} index={i} />
                                ))}
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                } else {
                  return (
                    <li 
                      key={skillIndex} 
                      className="text-sm text-muted-foreground flex justify-between items-center"
                    >
                      <span>{skill}</span>
                      {category.title.en === "Languages" && (
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => {
                            const level = skill.includes("Native") || skill.includes("Madrelingua") ? 5 : 4;
                            return <DotGradient key={i} level={level} index={i} />;
                          })}
                        </div>
                      )}
                    </li>
                  );
                }
              })}
            </ul>
          </CardContent>
        </div>
      </Card>
    );
  };

  return (
    <section id="skills" className="relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10" />
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-4 py-16">
          <div className="container mx-auto max-w-5xl">
            <SectionTitle title={t.title} icon="https://cdn.lordicon.com/lecprnjb.json" className="mb-8" />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {leftSkillCategories.map((category, index) => 
                  renderCategory(category, 'left', index)
                )}
              </div>
              <div className="space-y-4">
                {rightSkillCategories.map((category, index) => 
                  renderCategory(category, 'right', index)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}