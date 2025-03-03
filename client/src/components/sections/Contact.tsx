import React, { useState, useContext, useEffect, useRef } from 'react';
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
import { ScrollContext } from "@/App";

// Componente per il testo offuscato
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
  sectionIndex: number;
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function Contact({ language, sectionIndex }: ContactProps) {
  const { registerSection } = useContext(ScrollContext);
  const sectionRef = useRef<HTMLElement>(null);
  const t = translations[language].contact;
  const form = useForm<ContactForm>();

  // Registra questa sezione nel sistema di scrolling
  useEffect(() => {
    if (sectionRef.current) {
      registerSection(sectionIndex)(sectionRef.current);
    }
  }, [registerSection, sectionIndex]);

  // Gestione hash URL per navigazione diretta
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact' && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  }, []);

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="min-h-[85vh] flex items-center justify-center py-10 snap-start relative"
      data-section-index={sectionIndex}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"
      />
      <div className="container max-w-5xl mx-auto px-8 mb-16">
        <SectionTitle 
          title={t.title} 
          icon="https://cdn.lordicon.com/diihvcfp.json"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <Card className="backdrop-blur-sm bg-background/80 h-full">
              <CardContent className="p-8 md:p-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">{t.getInTouch}</h3>
                    <p className="text-muted-foreground mb-8">
                      {/* sentiti libero di contattarmi */}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <FaEnvelope className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t.emailLabel}</p>
                      <span className="text-neutral-900 dark:text-neutral-100">
                        <BlurredText text="aledap93@gmail.com" />
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
                        <BlurredText text="+39 3406143529" />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <SiLinkedin className="w-5 h-5 text-primary" />
                    </div>
                      <div>
                        <p className="font-medium">{t.linkedinLabel}</p>
                        <BlurredText text="linkedin.com/in/alessandrodapolito" isLink={true} />
                      </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="backdrop-blur-sm bg-background/80 h-full">
              <CardContent className="p-8 md:p-10">
                <form 
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
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}