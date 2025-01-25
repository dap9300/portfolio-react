import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { Project, Language } from "@/types";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BarChart3, Users, Calendar, ArrowUpRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectDetailsProps {
  language: Language;
}

const projectData: Project = {
  id: 1,
  title: {
    en: "Magazzino sul Po - Digital Marketing Strategy",
    it: "Magazzino sul Po - Strategia di Marketing Digitale"
  },
  description: {
    en: `Led the digital transformation and social media growth for Magazzino sul Po, a cultural association dedicated to promoting artistic and musical events. As Digital Marketing & Communications Specialist, I developed and executed comprehensive strategies that significantly increased online visibility and engagement.

Key Achievements:
• Achieved 400% monthly growth in user engagement
• Grew social media following from 5,000 to 13,000+ followers
• Enhanced event promotion effectiveness through targeted campaigns
• Implemented data-driven marketing strategies using analytics
`,
    it: `Ho guidato la trasformazione digitale e la crescita sui social media per Magazzino sul Po, un'associazione culturale dedicata alla promozione di eventi artistici e musicali. Come Digital Marketing & Communications Specialist, ho sviluppato ed eseguito strategie complete che hanno aumentato significativamente la visibilità e il coinvolgimento online.

Risultati Chiave:
• Ottenuto una crescita mensile del 400% nel coinvolgimento degli utenti
• Aumentato i follower sui social media da 5.000 a oltre 13.000
• Migliorato l'efficacia della promozione eventi attraverso campagne mirate
• Implementato strategie di marketing basate sui dati utilizzando analytics`
  },
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
  technologies: ["Social Media Strategy", "Content Creation", "Analytics", "Event Marketing", "Community Management", "Email Marketing"],
  link: "#"
};

const metrics = [
  {
    icon: Users,
    value: "13,000+",
    label: { en: "Social Media Followers", it: "Follower Social Media" }
  },
  {
    icon: BarChart3,
    value: "400%",
    label: { en: "Monthly Growth", it: "Crescita Mensile" }
  },
  {
    icon: Calendar,
    value: "150+",
    label: { en: "Events Promoted", it: "Eventi Promossi" }
  }
];

export function ProjectDetails({ language }: ProjectDetailsProps) {
  const [, setLocation] = useLocation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background py-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.button
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          onClick={() => setLocation("/#projects")}
          className="flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {language === 'en' ? 'Back to Projects' : 'Torna ai Progetti'}
        </motion.button>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid gap-12"
        >
          {/* Header Section */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              {projectData.title[language]}
            </h1>
            <div className="flex flex-wrap gap-2">
              {projectData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div variants={fadeInUp} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <metric.icon className="w-8 h-8 text-primary" />
                    <ArrowUpRight className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-3xl font-bold">{metric.value}</p>
                  <p className="text-muted-foreground">{metric.label[language]}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Project Overview */}
          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">
                {language === 'en' ? 'Project Overview' : 'Panoramica del Progetto'}
              </h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {projectData.description[language]}
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                {language === 'en' ? 'Tools & Platforms' : 'Strumenti e Piattaforme'}
              </h2>
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

          {/* Analytics Screenshots */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-semibold mb-6">
              {language === 'en' ? 'Growth & Analytics' : 'Crescita e Analytics'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="overflow-hidden">
                <img
                  src="/attached_assets/crescitafollower1.png"
                  alt="Follower Growth Chart"
                  className="w-full h-auto object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold">
                    {language === 'en' ? 'Follower Growth' : 'Crescita Follower'}
                  </h3>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <img
                  src="/attached_assets/analytics_maga3.png"
                  alt="User Engagement Analytics"
                  className="w-full h-auto object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="font-semibold">
                    {language === 'en' ? 'User Engagement' : 'Coinvolgimento Utenti'}
                  </h3>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Social Media Examples */}
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-semibold mb-6">
              {language === 'en' ? 'Social Media Content' : 'Contenuti Social Media'}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "/attached_assets/oldsocial1.png",
                "/attached_assets/oldsocial2.png",
                "/attached_assets/sito-eventi-1.png"
              ].map((image, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative aspect-square"
                >
                  <img
                    src={image}
                    alt={`Social Media Content ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </motion.div>
  );
}