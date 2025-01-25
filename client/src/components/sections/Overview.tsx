import { motion } from "framer-motion";
import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";

interface OverviewProps {
  language: Language;
}

export function Overview({ language }: OverviewProps) {
  const t = translations[language].overview;

  return (
    <section id="overview" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle title={t.title} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Card>
            <CardContent className="p-6 md:p-8">
              <motion.p
                variants={fadeInUp}
                className="text-lg text-center max-w-3xl mx-auto"
              >
                {t.content}
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
