import { motion } from "framer-motion";
import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface SkillsProps {
  language: Language;
}

const technicalSkills = [
  "React/Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "SQL/NoSQL",
  "AWS",
  "Docker",
  "GraphQL"
];

const softSkills = [
  "Problem Solving",
  "Team Leadership",
  "Communication",
  "Agile/Scrum",
  "Project Management"
];

export function Skills({ language }: SkillsProps) {
  const t = translations[language].skills;

  return (
    <section id="skills" className="min-h-screen relative flex items-center py-20 px-4">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />
      <div className="container mx-auto">
        <SectionTitle title={t.title} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{t.technical}</h3>
                <div className="flex flex-wrap gap-2">
                  {technicalSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{t.soft}</h3>
                <div className="flex flex-wrap gap-2">
                  {softSkills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}