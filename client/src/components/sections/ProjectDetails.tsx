import { motion } from "framer-motion";
import { useLocation, useParams } from "wouter";
import { Project, Language } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, Users, TrendingUp, Calendar, Globe, Target, Search, Star, FileEdit, BarChart3, Wrench, Trophy, PiggyBank } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect } from "react";

// Static images with proper paths
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
      en: `As Digital Marketing & Communications Specialist, I led the digital transformation and social media growth for Magazzino sul Po, a cultural association dedicated to promoting artistic and musical events. I developed and executed comprehensive strategies that significantly increased online visibility and engagement.

Key Achievements:
• Achieved 400% monthly growth in user engagement
• Grew social media following from 5,000 to 13,000+ followers
• Enhanced event promotion effectiveness through targeted campaigns
• Implemented data-driven marketing strategies using analytics
• Generated €17,771 in online ticket revenue across 85 events in 2023
• Successfully managed a crowdfunding campaign raising €5,597 with 300+ supporters`,

      it: `Come Digital Marketing & Communications Specialist, ho guidato la trasformazione digitale e la crescita sui social media per Magazzino sul Po, un'associazione culturale dedicata alla promozione di eventi artistici e musicali. Ho sviluppato ed eseguito strategie complete che hanno aumentato significativamente la visibilità e il coinvolgimento online.

Risultati Chiave:
• Ottenuto una crescita mensile del 400% nel coinvolgimento degli utenti
• Aumentato i follower sui social media da 5.000 a oltre 13.000
• Migliorato l'efficacia della promozione eventi attraverso campagne mirate
• Implementato strategie di marketing basate sui dati utilizzando analytics
• Generato €17.771 di ricavi da biglietteria online su 85 eventi nel 2023
• Gestito con successo una campagna di crowdfunding raccogliendo €5.597 con oltre 300 sostenitori`
    },
    image: "/assets/banner-magazzino.webp",
    technologies: ["Social Media Strategy", "Content Creation", "Analytics", "Event Marketing", "Community Management", "Email Marketing"],
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
      value: "13,000+",
      label: { en: "Social Media Followers", it: "Follower Social Media" }
    },
    {
      icon: "gkosxwgv", // trending up icon
      value: "400%",
      label: { en: "Monthly Growth", it: "Crescita Mensile" }
    },
    {
      icon: "mzjnwzka", // calendar icon
      value: "85+",
      label: { en: "Events in 2023", it: "Eventi nel 2023" }
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

export function ProjectDetails({ language }: ProjectDetailsProps) {
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
              <p className="text-muted-foreground whitespace-pre-line">
                {projectData.description[language]}
              </p>
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
              <motion.div variants={fadeInUp}>
                <SectionHeader
                  title={language === "en" ? "Editorial Strategy" : "Strategia Editoriale"}
                  icon={FileEdit}
                />
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">
                      {language === "en" ? "Content Planning" : "Pianificazione Contenuti"}
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        •{" "}
                        {language === "en"
                          ? "Developed monthly editorial calendar for Instagram and Facebook"
                          : "Sviluppato calendario editoriale mensile per Instagram e Facebook"}
                      </li>
                      <li>
                        •{" "}
                        {language === "en"
                          ? "Implemented content categorization system"
                          : "Implementato sistema di categorizzazione dei contenuti"}
                      </li>
                      <li>
                        •{" "}
                        {language === "en"
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
                        •{" "}
                        {language === "en"
                          ? "Monitored and analyzed content performance"
                          : "Monitorato e analizzato performance dei contenuti"}
                      </li>
                      <li>
                        •{" "}
                        {language === "en"
                          ? "Optimized hashtag strategy for organic reach"
                          : "Ottimizzato strategia hashtag per portata organica"}
                      </li>
                      <li>
                        •{" "}
                        {language === "en"
                          ? "Implemented content workflow via Asana"
                          : "Implementato workflow contenuti tramite Asana"}
                      </li>
                    </ul>
                  </Card>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionHeader
                  title={language === "en" ? "Advertising Campaigns" : "Campagne Pubblicitarie"}
                  icon={BarChart3}
                />
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">2023 Performance</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        •{" "}
                        {language === "en"
                          ? "Budget optimization: €71 to €337/month"
                          : "Ottimizzazione budget: da €71 a €337/mese"}
                      </li>
                      <li>
                        •{" "}
                        {language === "en"
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
                        •{" "}
                        {language === "en"
                          ? "Web traffic: +140%"
                          : "Traffico web: +140%"}
                      </li>
                    </ul>
                  </Card>
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">ROI</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>
                        •{" "}
                        {language === "en"
                          ? "Ticket sales growth: 200%"
                          : "Crescita vendite biglietti: 200%"}
                      </li>
                      <li>
                        •{" "}
                        {language === "en"
                          ? "Average session duration: 42s"
                          : "Durata media sessione: 42s"}
                      </li>
                      <li>
                        •{" "}
                        {language === "en"
                          ? "Checkout page in top 10"
                          : "Pagina checkout in top 10"}
                      </li>
                    </ul>
                  </Card>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionHeader
                  title={language === "en" ? "Crowdfunding Campaign" : "Campagna Crowdfunding"}
                  icon={PiggyBank}
                />
                <Card className="p-6">
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
                          •{" "}
                          {language === "en"
                            ? "Integrated digital & offline strategy"
                            : "Strategia integrata digitale e offline"}
                        </li>
                        <li>
                          •{" "}
                          {language === "en"
                            ? "Custom rewards program"
                            : "Programma ricompense personalizzato"}
                        </li>
                        <li>
                          •{" "}
                          {language === "en"
                            ? "Community engagement events"
                            : "Eventi di coinvolgimento community"}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionHeader
                  title={language === "en" ? "Growth & Analytics" : "Crescita e Analytics"}
                  icon={TrendingUp}
                />
                <div className="grid md:grid-cols-2 gap-6">
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
              </motion.div>

              <motion.div variants={fadeInUp}>
                <SectionHeader
                  title={language === "en" ? "Social Media Content" : "Contenuti Social Media"}
                  icon={Users}
                />

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
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}