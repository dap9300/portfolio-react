import { motion } from "framer-motion";
import { useLocation, useParams } from "wouter";
import { Project, Language } from "@/types";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { LanguageSwitch } from "@/components/shared/LanguageSwitch";
import { ArrowLeft, ArrowUpRight, Users, TrendingUp, Calendar, Globe, Target, Search, Star, FileEdit, BarChart3, Wrench, Trophy, PiggyBank } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";

// Update the images array to use absolute paths
const images = [
  "/assets/oldsocial1.png",
  "/assets/oldsocial2.png",
  "/assets/sito-eventi-1.png",
];

interface ProjectDetailsProps {
  language: Language;
}

// Project data remains unchanged...
const projectsData: Record<string, Project> = {
  "1": {
    id: 1,
    title: {
      en: "Magazzino sul Po - Digital Marketing Strategy",
      it: "Magazzino sul Po - Strategia di Marketing Digitale"
    },
    description: {
      en: `As **Digital Marketing & Communications Specialist**, I led the digital transformation of one of Turin's main cultural venues, managing integrated communication and marketing strategies to promote cultural and musical events.

**Key Results 2023:**

**Social Media Performance:**
• Facebook: 31,203 followers (+3.1% YoY)
- Reach: 545,960 (+97.6%)
- Visits: 91,723 (+90.6%)
• Instagram: 12,911 followers (+44.2% YoY)
- Reach: 502,784 (+550.6%)
- Visits: 66,153 (+93.9%)

**Website Performance:**
• 37,455 annual users (+88.2% YoY)
• 3,121 average monthly users
• Main traffic sources:
- Social Media: 8,500+ users
- Organic Search: 5,800+ users
- Direct Access: 4,950+ users

**E-commerce & Newsletter:**
• €15,583 online ticket revenue
• 2,915 tickets sold (+134% YoY)
• 44,514 newsletter subscribers (+54%)
• 32% average newsletter open rate

**Special Projects:**
• **FIUMEDENTRO Crowdfunding:**
- €5,597 raised
- 300+ supporters
- Multichannel communication strategy

**Digital Advertising:**
• Budget managed: €3,097
• Q3 2023 Performance:
- Average CPC: €0.10
- CPM: €1.57
- Average CTR: 0.74%
- Campaign ROI: 2.46x`,

      it: `Come **Digital Marketing & Communications Specialist**, ho guidato la trasformazione digitale di uno dei principali luoghi di aggregazione culturale di Torino, gestendo strategie integrate di comunicazione e marketing per promuovere eventi culturali e musicali.

**Risultati Chiave 2023:**

**Performance Social Media:**
• Facebook: 31.203 follower (+3,1% YoY)
- Copertura: 545.960 (+97,6%)
- Visite: 91.723 (+90,6%)
• Instagram: 12.911 follower (+44,2% YoY)
- Copertura: 502.784 (+550,6%)
- Visite: 66.153 (+93,9%)

**Performance Sito Web:**
• 37.455 utenti annuali (+88,2% YoY)
• 3.121 utenti mensili medi
• Principale provenienza traffico:
- Social Media: 8.500+ utenti
- Ricerca organica: 5.800+ utenti
- Accesso diretto: 4.950+ utenti

**E-commerce & Newsletter:**
• €15.583 ricavi da biglietteria online
• 2.915 biglietti venduti (+134% YoY)
• 44.514 iscritti newsletter (+54%)
• 32% tasso medio di apertura newsletter

**Progetti Speciali:**
• **Crowdfunding "FIUMEDENTRO":**
- €5.597 raccolti
- 300+ sostenitori
- Strategia comunicazione multicanale

**Advertising Digitale:**
• Budget gestito: €3.097
• Performance Q3 2023:
- CPC medio: €0,10
- CPM: €1,57
- CTR medio: 0,74%
- ROI campagne: 2,46x`
    },
    image: "/assets/banner-magazzino.webp",
    technologies: ["Social Media Strategy", "Web Development & Analytics", "Content Creation", "Event & Email Marketing"],
    link: "#"
  },
  "2": {
    id: 2,
    title: {
      en: "E-commerce Social Media Campaign",
      it: "Campagna Social Media E-commerce"
    },
    description: {
      en: `Developed and executed comprehensive social media campaigns for a leading fashion e-commerce brand. Created engaging content and implemented targeted advertising strategies that drove significant growth in sales and engagement.
Key Achievements:
• Increased social media-driven sales by 250%
• Achieved 45% growth in follower engagement
• Optimized ad spend with 3.2x ROAS
• Created viral UGC campaigns with over 1M views`,
      it: `Sviluppato ed eseguito campagne social media complete per un brand leader nell'e-commerce fashion. Creato contenuti coinvolgenti e implementato strategie pubblicitarie mirate che hanno portato a una crescita significativa nelle vendite e nel coinvolgimento.
Risultati Chiave:
• Aumentato le vendite da social del 250%
• Ottenuto una crescita del 45% nel coinvolgimento dei follower
• Ottimizzato la spesa pubblicitaria con un ROAS di 3.2x
• Creato campagne UGC virali con oltre 1M di visualizzazioni`
    },
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2574&auto=format&fit=crop",
    technologies: ["Social Media Advertising", "Content Strategy", "E-commerce", "Analytics"],
    link: "#"
  },
  "3": {
    id: 3,
    title: {
      en: "B2B LinkedIn Growth Strategy",
      it: "Strategia di Crescita LinkedIn B2B"
    },
    description: {
      en: `Implemented comprehensive LinkedIn marketing strategy for a B2B tech company, achieving 180% increase in lead generation and 300% growth in profile visits. Managed end-to-end campaign creation and optimization.
Key Achievements:
• Generated 150+ qualified leads through LinkedIn campaigns
• Increased profile engagement by 300%
• Optimized content strategy with 45% higher CTR
• Developed thought leadership content program`,
      it: `Implementato una strategia di marketing LinkedIn completa per un'azienda tech B2B, ottenendo un aumento del 180% nella generazione di lead e del 300% nelle visite al profilo. Gestito la creazione e l'ottimizzazione delle campagne end-to-end.
Risultati Chiave:
• Generati oltre 150 lead qualificati attraverso campagne LinkedIn
• Aumentato l'engagement del profilo del 300%
• Ottimizzato la strategia dei contenuti con CTR superiore del 45%
• Sviluppato un programma di contenuti thought leadership`
    },
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=2574&auto=format&fit=crop",
    technologies: ["LinkedIn Marketing", "B2B Strategy", "Content Marketing", "Lead Generation"],
    link: "#"
  },
  "4": {
    id: 4,
    title: {
      en: "Restaurant Digital Presence Optimization",
      it: "Ottimizzazione Presenza Digitale Ristorante"
    },
    description: {
      en: `Revamped digital presence for a high-end restaurant chain, increasing online reservations by 200% and achieving 150% growth in social media engagement. Implemented comprehensive local SEO and review management strategy.
Key Achievements:
• Increased online reservations by 200%
• Improved local search visibility by 180%
• Achieved 4.8/5 average rating across platforms
• Generated 300+ positive reviews in 6 months`,
      it: `Rinnovato la presenza digitale per una catena di ristoranti di alta fascia, aumentando le prenotazioni online del 200% e ottenendo una crescita del 150% nel coinvolgimento sui social media. Implementato una strategia completa di SEO locale e gestione delle recensioni.
Risultati Chiave:
• Aumentato le prenotazioni online del 200%
• Migliorato la visibilità nelle ricerche locali del 180%
• Raggiunto una valutazione media di 4.8/5 su tutte le piattaforme
• Generato oltre 300 recensioni positive in 6 mesi`
    },
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2574&auto=format&fit=crop",
    technologies: ["Local SEO", "Social Media Marketing", "Review Management", "Content Strategy"],
    link: "#"
  }
};

const projectMetrics: Record<string, any[]> = {
  "1": [
    {
      icon: "rjzlcjqi",  // people icon
      value: "44,114",
      label: { en: "Total Social Followers", it: "Follower Social Totali" }
    },
    {
      icon: "gkosxwgv", // trending up icon
      value: "+550%",
      label: { en: "Instagram Growth", it: "Crescita Instagram" }
    },
    {
      icon: "mzjnwzka", // calendar icon
      value: "37,455",
      label: { en: "Annual Users", it: "Utenti Annuali" }
    }
  ],
  "2": [
    {
      icon: "gkosxwgv", // trending up icon
      value: "250%",
      label: { en: "Sales Increase", it: "Aumento Vendite" }
    },
    {
      icon: "rjzlcjqi", // people icon
      value: "45%",
      label: { en: "Engagement Growth", it: "Crescita Engagement" }
    },
    {
      icon: "ehdfdiha", // globe icon
      value: "1M+",
      label: { en: "Campaign Views", it: "Visualizzazioni Campagne" }
    }
  ],
  "3": [
    {
      icon: "rjzlcjqi", // people icon
      value: "150+",
      label: { en: "Qualified Leads", it: "Lead Qualificati" }
    },
    {
      icon: "gkosxwgv", // trending up icon
      value: "300%",
      label: { en: "Profile Growth", it: "Crescita Profilo" }
    },
    {
      icon: "lupuorrc", // target icon
      value: "45%",
      label: { en: "Higher CTR", it: "CTR Superiore" }
    }
  ],
  "4": [
    {
      icon: "mzjnwzka", // calendar icon
      value: "200%",
      label: { en: "Reservation Growth", it: "Crescita Prenotazioni" }
    },
    {
      icon: "msoeawqm", // search icon
      value: "180%",
      label: { en: "SEO Visibility", it: "Visibilità SEO" }
    },
    {
      icon: "yqoxyxia", // star icon
      value: "4.8/5",
      label: { en: "Average Rating", it: "Valutazione Media" }
    }
  ]
};

const SectionHeader = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center gap-3 mb-6">
    <Icon className="w-8 h-8 text-primary" />
    <h2 className="text-2xl font-semibold">{title}</h2>
  </div>
);

export function ProjectDetails({ language, onLanguageChange }: ProjectDetailsProps & { onLanguageChange: (lang: Language) => void }) {
  const [, setLocation] = useLocation();
  const { id = "1" } = useParams();
  const projectData = projectsData[id];
  const metrics = projectMetrics[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!projectData || !metrics) {
    setLocation("/");
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      <div className="fixed top-4 right-4 z-50 flex items-center gap-4">
        <div className="fixed top-4 right-[100px]">
          <ThemeToggle />
        </div>
        <LanguageSwitch currentLanguage={language} onLanguageChange={onLanguageChange} />
      </div>
      <motion.div
        className="h-[60vh] relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${projectData.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {projectData.title[language]}
            </h1>
            <div className="flex flex-wrap gap-2 justify-center">
              {projectData.technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto max-w-6xl py-20 px-4">
        <motion.button
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          onClick={() => setLocation("/#projects")}
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === "en" ? "Back to Projects" : "Torna ai Progetti"}
        </motion.button>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid gap-12">
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => {
              let Icon = Users;
              switch(metric.icon) {
                case "rjzlcjqi": Icon = Users; break;
                case "gkosxwgv": Icon = TrendingUp; break;
                case "mzjnwzka": Icon = Calendar; break;
                case "ehdfdiha": Icon = Globe; break;
                case "lupuorrc": Icon = Target; break;
                case "msoeawqm": Icon = Search; break;
                case "yqoxyxia": Icon = Star; break;
              }

              return (
                <Card key={index} className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <Icon className="w-8 h-8 text-primary" />
                      <ArrowUpRight className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-3xl font-bold">{metric.value}</p>
                    <p className="text-muted-foreground">{metric.label[language]}</p>
                  </CardContent>
                </Card>
              );
            })}
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <SectionHeader
                title={language === "en" ? "Project Overview" : "Panoramica del Progetto"}
                icon={FileEdit}
              />
              <p 
                className="text-muted-foreground whitespace-pre-line"
                dangerouslySetInnerHTML={{
                  __html: projectData.description[language]
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </div>

            <div className="space-y-4">
              <SectionHeader
                title={language === "en" ? "Tools & Platforms" : "Strumenti e Piattaforme"}
                icon={Wrench}
              />
              <div className="space-y-2">
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Analytics & Tracking</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Google Analytics 4</li>
                    <li>Meta Business Suite</li>
                    <li>Mailchimp Analytics</li>
                  </ul>
                </Card>
                <Card className="p-4">
                  <h3 className="font-semibold mb-2">Content Creation</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Adobe Creative Suite</li>
                    <li>Canva Pro</li>
                    <li>Later for scheduling</li>
                  </ul>
                </Card>
              </div>
            </div>
          </motion.div>

          {id === "1" && (
            <>
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="overview" className="border rounded-lg hover:bg-accent/50 transition-colors">
                  <AccordionTrigger className="px-4">
                    <div className="flex items-center gap-3">
                      <FileEdit className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-semibold">
                        {language === "en" ? "1. Overview" : "1. Overview"}
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <Card className="p-6 mt-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-4">
                            {language === "en" ? "Project Background" : "Background del Progetto"}
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            {language === "en"
                              ? "Digital transformation and communication strategy for one of Turin's main cultural venues."
                              : "Trasformazione digitale e strategia di comunicazione per uno dei principali luoghi culturali di Torino."}
                          </p>
                        </div>
                        <div className="aspect-video relative">
                          <img
                            src="/assets/growth.png"
                            alt="Overview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="objectives" className="border rounded-lg hover:bg-accent/50 transition-colors">
                  <AccordionTrigger className="px-4">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-semibold">
                        {language === "en" ? "2. Main Objectives" : "2. Obiettivi Principali"}
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                      <Card className="p-6">
                        <h3 className="font-semibold mb-4">
                          {language === "en" ? "Strategic Goals" : "Obiettivi Strategici"}
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• {language === "en" ? "Digital Transformation" : "Trasformazione Digitale"}</li>
                          <li>• {language === "en" ? "Community Growth" : "Crescita Community"}</li>
                          <li>• {language === "en" ? "Brand Awareness" : "Brand Awareness"}</li>
                        </ul>
                      </Card>
                      <div className="aspect-video relative">
                        <img
                          src="/assets/growth.png"
                          alt="Objectives"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="key-results" className="border rounded-lg hover:bg-accent/50 transition-colors">
                  <AccordionTrigger className="px-4">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-semibold">
                        {language === "en" ? "3. Key Results (2023)" : "3. Risultati Chiave (2023)"}
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div className="space-y-6 pt-4">
                      <Card className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold mb-4">3.1 Social Media Performance</h3>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium mb-2">3.1.1 Facebook</h4>
                                <ul className="space-y-1 text-muted-foreground">
                                  <li>• 31,203 followers (+3.1% YoY)</li>
                                  <li>• Reach: 545,960 (+97.6%)</li>
                                  <li>• Visits: 91,723 (+90.6%)</li>
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-medium mb-2">3.1.2 Instagram</h4>
                                <ul className="space-y-1 text-muted-foreground">
                                  <li>• 12,911 followers (+44.2% YoY)</li>
                                  <li>• Reach: 502,784 (+550.6%)</li>
                                  <li>• Visits: 66,153 (+93.9%)</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="aspect-video relative">
                            <img
                              src="/assets/growth.png"
                              alt="Social Media Growth"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </Card>

                      <Card className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold mb-4">3.2 Website Performance</h3>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>• 37,455 annual users (+88.2% YoY)</li>
                              <li>• 3,121 average monthly users</li>
                              <li>• Main traffic sources:
                                <ul className="ml-4 mt-1">
                                  <li>- Social Media: 8,500+ users</li>
                                  <li>- Organic Search: 5,800+ users</li>
                                  <li>- Direct Access: 4,950+ users</li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                          <div className="aspect-video relative">
                            <img
                              src="/assets/growth.png"
                              alt="Website Analytics"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </Card>

                      <Card className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold mb-4">3.3 E-commerce & Newsletter</h3>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>• €15,583 online ticket revenue</li>
                              <li>• 2,915 tickets sold (+134% YoY)</li>
                              <li>• 44,514 newsletter subscribers (+54%)</li>
                              <li>• 32% average newsletter open rate</li>
                            </ul>
                          </div>
                          <div className="aspect-video relative">
                            <img
                              src="/assets/growth.png"
                              alt="E-commerce Performance"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="strategies" className="border rounded-lg hover:bg-accent/50 transition-colors">
                  <AccordionTrigger className="px-4">
                    <div className="flex items-center gap-3">
                      <FileEdit className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-semibold">
                        {language === "en" ? "4. Strategies & Projects" : "4. Strategie & Progetti"}
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div className="space-y-6 pt-4">
                      <Card className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold mb-4">4.1 Integrated Digital Marketing</h3>
                            <ul className="space-y-2 text-muted-foreground">
                              <li>• Multi-channel communication strategy</li>
                              <li>• Content planning and creation</li>
                              <li>• Community management</li>
                            </ul>
                          </div>
                          <div className="aspect-video relative">
                            <img
                              src="/assets/growth.png"
                              alt="Digital Marketing Strategy"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </Card>

                      <Card className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h3 className="font-semibold mb-4">4.2 Advertising Campaigns</h3>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-medium mb-2">4.2.1 Q3 2023 Performance</h4>
                                <ul className="space-y-1 text-muted-foreground">
                                  <li>• Average CPC: €0.10</li>
                                  <li>• CPM: €1.57</li>
                                  <li>• Average CTR: 0.74%</li>
                                  <li>• Campaign ROI: 2.46x</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="aspect-video relative">
                            <img
                              src="/assets/growth.png"
                              alt="Advertising Performance"
                              className="w-full h-full object-cover rounded-lg"
                            />
                          </div>
                        </div>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="special-projects" className="border rounded-lg hover:bg-accent/50 transition-colors">
                  <AccordionTrigger className="px-4">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-semibold">
                        {language === "en" ? "5. Special Projects" : "5. Progetti Speciali"}
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <Card className="p-6 mt-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-4">5.1 FIUMEDENTRO Crowdfunding</h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>• €5,597 raised</li>
                            <li>• 300+ supporters</li>
                            <li>• Multichannel communication strategy</li>
                          </ul>
                        </div>
                        <div className="aspect-video relative">
                          <img
                            src="/assets/growth.png"
                            alt="Crowdfunding Campaign"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="content-planning" className="border rounded-lg hover:bg-accent/50 transition-colors">
                  <AccordionTrigger className="px-4">
                    <div className="flex items-center gap-3">
                      <FileEdit className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-semibold">
                        {language === "en" ? "Content Planning" : "Pianificazione Contenuti"}
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div className="space-y-6 pt-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-6">
                          <h3 className="font-semibold mb-4">
                            {language === "en" ? "Content Planning" : "Pianificazione Contenuti"}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>
                              • {language === "en"
                                ? "Developed monthly editorial calendar for Instagram and Facebook"
                                : "Sviluppato calendario editoriale mensile per Instagram e Facebook"}
                            </li>
                            <li>
                              • {language === "en"
                                ? "Implemented content categorization system"
                                : "Implementato sistema di categorizzazione dei contenuti"}
                            </li>
                            <li>
                              • {language === "en"
                                ? "Managed multi-platform communication strategy"
                                : "Gestito strategia di comunicazione multipiattaforma"}
                            </li>
                          </ul>
                        </Card>
                        <Card className="p-6">
                          <h3 className="font-semibold mb-4">
                            {language === "en" ? "Performance & Analytics" : "Performance e Analytics"}
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>
                              • {language === "en"
                                ? "Monitored and analyzed content performance"
                                : "Monitorato e analizzato performance dei contenuti"}
                            </li>
                            <li>
                              • {language === "en"
                                ? "Optimized hashtag strategy for organic reach"
                                : "Ottimizzato strategia hashtag per portata organica"}
                            </li>
                            <li>
                              • {language === "en"
                                ? "Implemented content workflow via Asana"
                                : "Implementato workflow contenuti tramite Asana"}
                            </li>
                          </ul>
                        </Card>
                      </div>
                      <div>
                        <Carousel className="w-full max-w-5xl mx-auto">
                          <CarouselContent>
                            {images.map((image, index) => (
                              <CarouselItem key={index}>
                                <div className="p-1">
                                  <Card className="overflow-hidden">
                                    <div className="aspect-[16/9]">
                                      <img
                                        src={image}
                                        alt={`Social Media Content ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                      />
                                    </div>
                                  </Card>
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="advertising-campaigns" className="border rounded-lg hover:bg-accent/50 transition-colors">
                  <AccordionTrigger className="px-4">
                    <div className="flex items-center gap-3">
                      <BarChart3 className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-semibold">
                        {language === "en" ? "Advertising Campaigns" : "Campagne Pubblicitarie"}
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div className="grid md:grid-cols-3 gap-6 pt-4">
                      <Card className="p-6">
                        <h3 className="font-semibold mb-4">2023 Performance</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>
                            • {language === "en"
                              ? "Budget optimization: €71 to €337/month"
                              : "Ottimizzazione budget: da €71 a €337/mese"}
                          </li>
                          <li>
                            • {language === "en"
                              ? "Total reach: 296,973 users"
                              : "Copertura totale: 296.973 utenti"}
                          </li>
                          <li>• CPC: €0.10 - €0.29</li>
                        </ul>
                      </Card>
                      <Card className="p-6">
                        <h3 className="font-semibold mb-4">
                          {language === "en" ? "Growth Metrics" : "Metriche di Crescita"}
                        </h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Instagram: +536.5%</li>
                          <li>• Facebook: +164.4%</li>
                          <li>
                            • {language === "en"
                              ? "Web traffic: +140%"
                              : "Traffico web: +140%"}
                          </li>
                        </ul>
                      </Card>
                      <Card className="p-6">
                        <h3 className="font-semibold mb-4">ROI</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>
                            • {language === "en"
                              ? "Ticket sales growth: 200%"
                              : "Crescita vendite biglietti: 200%"}
                          </li>
                          <li>
                            • {language === "en"
                              ? "Average session duration: 42s"
                              : "Durata media sessione: 42s"}
                          </li>
                          <li>
                            • {language === "en"
                              ? "Checkout page in top 10"
                              : "Pagina checkout in top 10"}
                          </li>
                        </ul>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="crowdfunding" className="border rounded-lg hover:bg-accent/50 transition-colors">
                  <AccordionTrigger className="px-4">
                    <div className="flex items-center gap-3">
                      <PiggyBank className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-semibold">
                        {language === "en" ? "Crowdfunding Campaign" : "Campagna Crowdfunding"}
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <Card className="p-6 mt-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold mb-4">FIUMEDENTRO</h3>
                          <p className="text-muted-foreground mb-4">
                            {language === "en"
                              ? "A successful crowdfunding campaign to regenerate the Murazzi area, transforming abandoned spaces into an inclusive public space."
                              : "Una campagna di crowdfunding di successo per rigenerare l'area dei Murazzi, trasformando spazi abbandonati in uno spazio pubblico inclusivo."}
                          </p>
                          <div className="flex items-center gap-4 mb-4">
                            <div>
                              <p className="text-2xl font-bold">€5,597</p>
                              <p className="text-sm text-muted-foreground">
                                {language === "en" ? "Funds Raised" : "Fondi Raccolti"}
                              </p>
                            </div>
                            <div>
                              <p className="text-2xl font-bold">300+</p>
                              <p className="text-sm text-muted-foreground">
                                {language === "en" ? "Supporters" : "Sostenitori"}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">
                            {language === "en" ? "Campaign Highlights" : "Punti Salienti"}
                          </h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>
                              • {language === "en"
                                ? "Integrated digital & offline strategy"
                                : "Strategia integrata digitale e offline"}
                            </li>
                            <li>
                              • {language === "en"
                                ? "Custom rewards program"
                                : "Programma ricompense personalizzato"}
                            </li>
                            <li>
                              • {language === "en"
                                ? "Community engagement events"
                                : "Eventi di coinvolgimento community"}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Card>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="growth-analytics" className="border rounded-lg hover:bg-accent/50 transition-colors">
                  <AccordionTrigger className="px-4">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      <h2 className="text-xl font-semibold">
                        {language === "en" ? "Growth & Analytics" : "Crescita e Analytics"}
                      </h2>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                      <Card className="overflow-hidden">
                        <div className="aspect-video relative">
                          <img
                            src="/assets/growth.png"
                            alt="Follower Growth Chart"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold">
                            {language === "en" ? "Follower Growth" : "Crescita Follower"}
                          </h3>
                        </CardContent>
                      </Card>
                      <Card className="overflow-hidden">
                        <div className="aspect-video relative">
                          <img
                            src="/assets/engagement.png"
                            alt="User Engagement Analytics"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold">
                            {language === "en" ? "User Engagement" : "Coinvolgimento Utenti"}
                          </h3>
                        </CardContent>
                      </Card>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}