import { motion } from "framer-motion";
import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { fadeInUp, staggerContainer, sectionVariants } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";

interface OverviewProps {
  language: Language;
}

export function Overview({ language }: OverviewProps) {
  const content = language === 'en' 
    ? "Digital Marketing Specialist with over 6 years of experience in integrated digital strategies and cross-functional coordination with creative and technical teams. Expert in SEO optimization, content strategy and web development, with experience in monitoring and testing advertising campaigns. Strong interest in deepening advanced advertising on Meta Ads and Google Ads platforms to optimize campaign ROI. Development of dynamic and creative websites like this one."
    : "Digital Marketing Specialist con oltre 6 anni di esperienza nella gestione di strategie digitali integrate e nel coordinamento cross-funzionale con team creativi e tecnici. Esperto in ottimizzazione SEO, content strategy e sviluppo web, con esperienza nel monitoraggio e testing di campagne pubblicitarie. Forte interesse nell'approfondire l'advertising avanzato su piattaforme Meta Ads e Google Ads per ottimizzare il ROI delle campagne. Sviluppo siti web dinamici e creativi come questo.";

  return (
    <motion.section 
      id="overview" 
      className="min-h-screen relative flex items-center py-20 px-4"
      style={{
        backgroundImage: "url('/assets/hrx-banner1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />
      <div className="container mx-auto">
        <SectionTitle 
          title={language === 'en' ? 'Overview' : 'Panoramica'} 
          icon="https://cdn.lordicon.com/xcxzayqr.json"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Card className="backdrop-blur-sm bg-background/80 transform transition-all duration-500 hover:scale-[1.02]">
            <CardContent className="p-6 md:p-8">
              <motion.p
                variants={fadeInUp}
                className="text-lg text-center max-w-4xl mx-auto leading-relaxed"
              >
                {content}
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}