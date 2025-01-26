import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Magazzino sul Po",
    description: "Web platform development for Turin's historic music venue to showcase events, history, and cultural impact",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    link: "https://magazzinosulpo.com"
  },
  {
    id: 2,
    title: "The Good Burger",
    description: "E-commerce and delivery platform for a premium burger restaurant chain in Turin",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://thegoodburger.it"
  },
  {
    id: 3,
    title: "Easycondo",
    description: "Property management platform streamlining condo administration and resident communication",
    technologies: ["Vue.js", "Firebase", "Cloud Functions", "Material UI"],
    link: "https://easycondo.it"
  },
  {
    id: 4,
    title: "Off Topic",
    description: "Digital presence development for Turin's cultural hub, featuring events, workshops, and artistic initiatives",
    technologies: ["WordPress", "PHP", "MySQL", "Custom Theme"],
    link: "https://offtopictorino.it"
  }
];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-background" id="projects">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={projectVariants}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card 
                className="h-full cursor-pointer transition-colors hover:bg-muted/50"
                onClick={() => setSelectedProject(project.id)}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-primary hover:underline"
                    >
                      Visit Project →
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;