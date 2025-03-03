import { useState, useContext, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { translations } from "@/components/sections/project-details/SiteContent";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { ChevronDown } from "lucide-react";
import { ScrollContext } from "@/App"; // Importa il contesto di scroll

interface EducationProps {
  language: Language;
  sectionIndex: number; // Aggiungi la prop per l'indice della sezione
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

export function Education({ language, sectionIndex }: EducationProps) {
  // Utilizza il context per il sistema di scrolling
  const { registerSection } = useContext(ScrollContext);
  const sectionRef = useRef<HTMLElement>(null);

  // Registra questa sezione nel sistema di scrolling
  useEffect(() => {
    if (sectionRef.current) {
      registerSection(sectionIndex)(sectionRef.current);
    }
  }, [registerSection, sectionIndex]);

  const t = translations[language].education;
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <motion.section 
      ref={sectionRef} // Aggiungi il ref per il sistema di scrolling
      id="education" 
      className="min-h-screen relative flex items-center py-20 px-4 bg-muted/30 snap-start" // Aggiungi snap-start
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
              <Card className="w-full">
                <button
                  onClick={() => toggleExpanded(item.id)}
                  className="w-full p-4 hover:bg-muted/30 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full text-left">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.degree[language]}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.institution[language]}, {item.location}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 md:mt-0">
                      <span className="text-primary">{item.period}</span>
                      <ChevronDown 
                        className={`w-5 h-5 transform transition-transform ${
                          expandedId === item.id ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-200 ${
                  expandedId === item.id ? 'opacity-100' : 'opacity-0 h-0'
                }`}>
                  <CardContent className="p-4 pt-0">
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
                          <ul className="space-y-2">
                            {item.details.mainSubjects.map((subject, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                <span>{subject}</span>
                              </li>
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
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}