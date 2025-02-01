import { motion } from "framer-motion";
import { translations } from "@/components/sections/project-details/magazzino/content.it";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer, sectionVariants } from "@/lib/animations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface EducationProps {
  language: Language;
}

const education = [
  {
    id: 1,
    period: "2015 - 2018",
    degree: {
      en: "Master's Degree in ICT and Media Communication",
      it: "Laurea Magistrale in Comunicazione ICT e Media"
    },
    institution: {
      en: "University of Turin",
      it: "Università degli Studi di Torino"
    },
    location: "Torino (TO)",
    details: {
      grade: "103/110",
      year: "2018",
      mainSubjects: [
        "Marketing",
        "Economia",
        "Tecnologie web",
        "Sistemi mediali e ICT",
        "Analisi del media",
        "Innovazione sociale",
        "Sociologia"
      ],
      thesis: "Bitcoin e blockchain tra economia, regolamentazione e informazione"
    }
  },
  {
    id: 2,
    period: "2012 - 2015",
    degree: {
      en: "Bachelor's Degree in Philosophy",
      it: "Laurea Triennale in Filosofia"
    },
    institution: {
      en: "University of Turin",
      it: "Università degli Studi di Torino"
    },
    location: "Torino (TO)",
    details: {
      grade: "104/110",
      year: "2015",
      thesis: "La coscienza: dal problema mente-corpo alla teoria dell'informazione integrata"
    }
  }
];

export function Education({ language }: EducationProps) {
  const t = translations[language].education;

  return (
    <motion.section 
      id="education" 
      className="min-h-screen relative flex items-center py-20 px-4 bg-muted/30"
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
          title={t.title} 
          icon="https://cdn.lordicon.com/kipaqhoz.json"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="mb-6 last:mb-0"
            >
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${item.id}`}>
                  <Card>
                    <CardContent className="p-6">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left">
                          <div>
                            <h3 className="text-xl font-semibold">
                              {item.degree[language]}
                            </h3>
                            <p className="text-muted-foreground">
                              {item.institution[language]}, {item.location}
                            </p>
                          </div>
                          <span className="text-primary mt-2 md:mt-0">
                            {item.period}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="mt-4 space-y-4 text-muted-foreground">
                          <p>
                            <span className="font-medium text-foreground">
                              {language === 'en' ? 'Grade' : 'Voto'}:
                            </span> {item.details.grade}
                          </p>
                          <p>
                            <span className="font-medium text-foreground">
                              {language === 'en' ? 'Year of completion' : 'A.A. di conseguimento'}:
                            </span> {item.details.year}
                          </p>
                          {item.details.mainSubjects && (
                            <div>
                              <p className="font-medium text-foreground mb-2">
                                {language === 'en' ? 'Main Subjects' : 'Materie principali'}:
                              </p>
                              <ul className="list-disc list-inside pl-4">
                                {item.details.mainSubjects.map((subject, idx) => (
                                  <li key={idx}>{subject}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                          <div>
                            <p className="font-medium text-foreground mb-2">
                              {language === 'en' ? 'Thesis' : 'Titolo tesi'}:
                            </p>
                            <p>{item.details.thesis}</p>
                          </div>
                        </div>
                      </AccordionContent>
                    </CardContent>
                  </Card>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}