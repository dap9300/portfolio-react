import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Language } from "@/types";
import { translations } from "@/components/sections/project-details/SiteContent";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// Nuovo componente per il testo offuscato
const BlurredText = ({ text, isLink = false }) => {
  const [isBlurred, setIsBlurred] = useState(true);

  if (isLink) {
    return (
      <div onClick={(e) => {
        if (isBlurred) {
          e.preventDefault();
          setIsBlurred(false);
        }
      }}>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className={`cursor-pointer transition-all duration-300 ${isBlurred ? 'pointer-events-none filter blur-md select-none' : 'hover:underline'}`}
        >
          {text}
        </a>
      </div>
    );
  }

  return (
    <span 
      onClick={() => isBlurred && setIsBlurred(false)}
      className={`cursor-pointer transition-all duration-300 ${isBlurred ? 'filter blur-md select-none' : ''}`}
    >
      {text}
    </span>
  );
};

interface ContactProps {
  language: Language;
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const sectionFadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren"
    }
  }
};

export function Contact({ language }: ContactProps) {
  const t = translations[language].contact;
  const form = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <motion.section 
      id="contact" 
      className="min-h-screen relative flex items-center py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionFadeIn}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
      <div className="container max-w-5xl mx-auto px-8">
        <SectionTitle 
          title={t.title} 
          icon="https://cdn.lordicon.com/diihvcfp.json"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="backdrop-blur-sm bg-background/80 h-full">
              <CardContent className="p-8 md:p-10">
                <motion.div variants={fadeInUp} className="space-y-6">
                  <motion.div>
                    <h3 className="text-xl font-semibold mb-4">{t.getInTouch}</h3>
                    <p className="text-muted-foreground mb-8">
                      Feel free to reach out through any of the following channels:
                    </p>
                  </motion.div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FaEnvelope className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t.emailLabel}</p>
                      <span className="text-neutral-900 dark:text-neutral-100">
                        <BlurredText text="mymail@mail.com" />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FaPhone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t.phoneLabel}</p>
                      <span className="text-neutral-900 dark:text-neutral-100">
                        <BlurredText text="+39 1234567890" />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <SiLinkedin className="w-5 h-5 text-primary" />
                    </div>
                      <div>
                        <p className="font-medium">{t.linkedinLabel}</p>
                        <BlurredText text="linkedin.com/in/yourprofile" isLink={true} />
                      </div>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Card className="backdrop-blur-sm bg-background/80 h-full">
              <CardContent className="p-8 md:p-10">
                <motion.form 
                  variants={fadeInUp}
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="space-y-6"
                >
                  <Input
                    placeholder={t.name}
                    className="bg-primary/5 border-primary/10 focus:border-primary/30 h-12"
                    {...form.register("name")}
                  />

                  <Input
                    type="email"
                    placeholder={t.email}
                    className="bg-primary/5 border-primary/10 focus:border-primary/30 h-12"
                    {...form.register("email")}
                  />

                  <Textarea
                    placeholder={t.message}
                    rows={5}
                    className="bg-primary/5 border-primary/10 focus:border-primary/30 resize-none"
                    {...form.register("message")}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-medium"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {t.send}
                  </Button>
                </motion.form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}