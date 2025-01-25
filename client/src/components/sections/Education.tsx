import { motion } from "framer-motion";
import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface EducationProps {
  language: Language;
}

const education = [
  {
    period: "2018 - 2022",
    degree: {
      en: "Master's in Computer Science",
      it: "Laurea Magistrale in Informatica"
    },
    institution: {
      en: "University of Technology",
      it: "Università della Tecnologia"
    }
  },
  {
    period: "2015 - 2018",
    degree: {
      en: "Bachelor's in Computer Engineering",
      it: "Laurea in Ingegneria Informatica"
    },
    institution: {
      en: "Technical Institute",
      it: "Istituto Tecnico"
    }
  }
];

export function Education({ language }: EducationProps) {
  const t = translations[language].education;

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <SectionTitle title={t.title} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="mb-6 last:mb-0"
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {item.degree[language]}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.institution[language]}
                      </p>
                    </div>
                    <span className="text-primary mt-2 md:mt-0">
                      {item.period}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
