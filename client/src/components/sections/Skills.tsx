import { useState, useContext, useRef, useEffect } from "react";
import { translations } from "@/components/sections/project-details/SiteContent";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { ChartBar, Code2, ChevronDown, PenTool, Brain, Languages, Heart, BarChart, BarChart2, ChartNoAxesCombined, Globe, Share2, Smartphone, Monitor, Palette, Video, Bot, Laptop, FileText, Briefcase } from "lucide-react";
import { ScrollContext } from "@/App";

interface SkillsProps {
  language: Language;
  sectionIndex: number;
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
        "**Performance Marketing**: Meta Ads | Google Ads | Amazon Ads",
        "**Web & Marketing Analytics**: Meta Business Suite, Google Analytics & Google Looker Studio, Google Tag Manager",
        "**Email Marketing**: Mailchimp & Altri ESP",
        "**SEO & Optimization**: Technical SEO , Screaming Frog, Semrush, Rank Math"
      ],
      it: [
        "Performance Marketing (Meta Ads | Google Ads | Amazon Ads)",
        "Web & Marketing Analytics (Meta Business Suite, Google Analytics & Google Looker Studio, Google Search Console, Google Tag Manager)",
        "Email Marketing (Mailchimp & Altri ESP)",
        "SEO & Optimization (Technical SEO, Screaming Frog & Semrush, Rank Math & Yoast SEO)"
      ]
    }
  },
  {
    title: { en: "IT & Web", it: "IT & Web" },
    icon: Code2,
    skills: {
      en: [
        "**Programming & CMS**: HTML5 & CSS, WordPress, Shopify",
        "**Office Productivity**: Office Suite, Google Workspace, Slack | Asana | Trello"
      ],
      it: [
        "**Programmazione & CMS**: HTML5 & CSS, JavaScript, Python, WordPress, Shopify",
        "**Produttività Office**: Office Suite, Google Workspace, Slack | Asana | Trello",
        "**Tools & Framework AI/LLM**: PyTorch | TensorFlow | Hugging Face Transformers, Cursor"
      ]
    }
  },
  {
    title: { en: "Content Creation & Social Media", it: "Content Creation & Social Media" },
    icon: PenTool,
    skills: {
      en: [
        "**Social Media**: Meta Business Suite, Editorial Strategy & Planning, Community Management",
        "**Graphic Design**: Adobe Creative Suite, Canva",
        "**Video/Audio Editing**: DaVinci Resolve, CapCut, Audacity",
        "**AI Tools**: ChatGPT & Claude, MidJourney, ElevenLabs"
      ],
      it: [
        "**Social Media**: Editorial Strategy & Planning, Community Management, Content Creation",
        "**Graphic Design**: Adobe Creative Suite, Canva",
        "**Video/Audio Editing**: DaVinci Resolve, CapCut, Audacity",
        "**Tools AI**: ChatGPT & Claude, MidJourney, ElevenLabs"
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
        "Collaborazione cross-funzionale",
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
    "Meta Ads | Google Ads | Amazon Ads": 4,
    "Meta Business Suite": 4,
    "Google Analytics & Google Looker Studio": 5,
    "Google Search Console": 5,
    "Google Tag Manager": 4,
    "Mailchimp & Altri ESP": 4,
    "Technical SEO": 4,
    "Screaming Frog & Semrush": 4,
    "Rank Math & Yoast SEO": 5,
    "Editorial Strategy & Planning": 5,
    "Community Management": 5,
    "HTML5 & CSS": 4,
    "JavaScript": 3,
    "Python": 2,
    "WordPress": 5,
    "WooCommerce": 4,
    "Shopify": 4,
    "Office Suite": 5,
    "Google Workspace": 5,
    "Slack | Asana | Trello": 4,
    "Adobe Creative Suite": 3,
    "Canva": 5,
    "DaVinci Resolve": 3,
    "CapCut": 4,
    "Audacity": 3,
    "ChatGPT & Claude": 5,
    "Cursor": 3,
    "MidJourney": 5,
    "ElevenLabs": 4,
    "Content Creation": 3,
    "PyTorch | TensorFlow | Hugging Face Transformers": 2
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

// Oggetto che mappa i titoli delle sezioni alle icone Lucide React
const skillIcons: { [key: string]: any } = {
  "Performance Marketing": ChartNoAxesCombined,
  "Web & Marketing Analytics": BarChart2,
  "Email Marketing": Share2,
  "SEO & Optimization": Globe,
  "Social Media": Smartphone,
  "Programming & CMS": Laptop,
  "Office Productivity": Briefcase,
  "Produttività Office": Briefcase,
  "Tools & Framework AI/LLM": Bot,
  "Programmazione & CMS": Laptop,
  "Graphic Design": Palette,
  "Video/Audio Editing": Video,
  "AI Tools": Bot,
  "Tools AI": Bot
};

export function Skills({ language, sectionIndex }: SkillsProps) {
  const { registerSection } = useContext(ScrollContext);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerSection(sectionIndex)(sectionRef.current);
    }
  }, [registerSection, sectionIndex]);

  const t = translations[language].skills;

  // Change the state to a single string instead of an object
  // This will store only the currently active accordion key
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (categoryKey: string) => {
    // If the category is already active, close it
    // Otherwise, open the new category and close the previous one
    setActiveCategory(prev => prev === categoryKey ? null : categoryKey);
  };

  const renderCategory = (category: SkillCategory, side: 'left' | 'right', index: number) => {
    const categoryKey = `${side}-${index}`;
    const isExpanded = activeCategory === categoryKey;

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

                  // Ottieni l'icona appropriata per questo titolo di competenza
                  const SkillIcon = skillIcons[cleanedTitle];

                  return (
                    <li key={skillIndex} className="text-sm">
                      <div className="flex items-center gap-2">
                        {SkillIcon && <SkillIcon className="w-4 h-4 text-[#D97706]" />}
                        <strong className="text-foreground">{cleanedTitle}</strong>
                      </div>
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
                      {category.title.en === "Soft Skills" || category.title.en === "Hobbies & Interests" ? (
                        <div className="flex">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                          <span className="ml-2">{skill}</span>
                        </div>
                      ) : (
                        <span>{skill}</span>
                      )}
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
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative min-h-screen snap-start"
    >
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