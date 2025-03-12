import React, { useState, useContext, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhone, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { Send } from "lucide-react";
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
          href="https://linkedin.com/in/alessandrodapolito"
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

// Componente per il messaggio di conferma
const SuccessMessage = () => {
  return (
    <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded mt-4 flex items-center">
      <FaCheckCircle className="mr-2 text-green-500 text-lg" />
      <p className="font-medium">Grazie, il tuo messaggio è stato inviato correttamente.</p>
    </div>
  );
};

// Componente per il messaggio di errore
const ErrorMessage = () => {
  return (
    <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded flex items-center">
      <FaExclamationCircle className="mr-2 text-red-500 text-lg" />
      <p className="font-medium">Compila tutti i campi richiesti</p>
    </div>
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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

  // Aggiungiamo lo stile CSS personalizzato per i bordi attivi
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .input-primary-focus:focus {
        border-color: #263973 !important;
        border-width: 2px !important;
        box-shadow: 0 0 0 3px rgba(38, 57, 115, 0.25) !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Gestisce la validazione del form prima dell'invio
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const nameInput = form.querySelector('input[name="name"]') as HTMLInputElement;
    const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
    const messageInput = form.querySelector('textarea[name="message"]') as HTMLTextAreaElement;

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      setShowError(true);
      return;
    }

    setShowError(false);
    setIsLoading(true);

    // Creiamo i dati del form per l'invio
    const formData = new FormData(form);

    // Invia i dati in background con fetch
    fetch(form.action, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Necessario per FormSubmit
    });

    // Mostriamo il messaggio di conferma dopo 2 secondi
    // Questo dà all'utente un feedback immediato anche se l'invio è ancora in corso
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      if (formRef.current) {
        formRef.current.reset();
      }
    }, 2000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="min-h-[85vh] flex items-center justify-center py-10 snap-start relative w-full overflow-hidden"
      data-section-index={sectionIndex}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background to-muted/30 -z-10"
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-5xl mb-16 w-full">
        <SectionTitle 
          title={t.title} 
          icon="https://cdn.lordicon.com/diihvcfp.json"
          titleClassName="text-[#5090f0]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Info */}
          <div>
            <Card className="backdrop-blur-sm bg-white dark:bg-gray-800 h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6 md:p-8 lg:p-10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-900 dark:text-gray-100">{t.getInTouch}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                      { "Le grandi idee iniziano con una conversazione. Contattami!" }
                    </p>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <FaEnvelope className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-blue-900 dark:text-gray-100">{t.emailLabel}</p>
                      <span className="text-gray-600 dark:text-gray-300">
                        <BlurredText text="aledap93@gmail.com" />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <FaPhone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-blue-900 dark:text-gray-100">{t.phoneLabel}</p>
                      <span className="text-gray-600 dark:text-gray-300">
                        <BlurredText text="+39 3406143529" />
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                      <SiLinkedin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-blue-900 dark:text-gray-100">{t.linkedinLabel}</p>
                      <div className="overflow-hidden text-ellipsis text-gray-600 dark:text-gray-300">
                        <a
                          href="https://linkedin.com/in/alessandrodapolito"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          linkedin.com/in/alessandrodapolito
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="backdrop-blur-sm bg-white dark:bg-gray-800 h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6 md:p-8 lg:p-10">
                {isSubmitted ? (
                  <SuccessMessage />
                ) : (
                  <div>
                    {showError && <ErrorMessage />}

                    <form 
                      ref={formRef}
                      action="https://formsubmit.co/3284a782f596b950ed0f27d2bdfaa5ae" 
                      method="POST"
                      className="space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-4">
                      
                      </p>
                      <input type="hidden" name="_captcha" value="false" />
                      <input type="hidden" name="_next" value={window.location.href} />
                      <input type="hidden" name="_subject" value="Nuovo messaggio dal sito web" />

                      <div className="space-y-4 md:space-y-6">
                        <input
                          type="text"
                          name="name"
                          placeholder={t.name}
                          className="w-full bg-primary/5 border border-primary/10 rounded-md px-4 h-12 input-primary-focus focus:outline-none"
                        />

                        <input
                          type="email"
                          name="email"
                          placeholder={t.email}
                          className="w-full bg-primary/5 border border-primary/10 rounded-md px-4 h-12 input-primary-focus focus:outline-none"
                        />

                        <textarea
                          name="message"
                          placeholder={t.message}
                          rows={5}
                          className="w-full bg-primary/5 border border-primary/10 rounded-md px-4 py-2 input-primary-focus focus:outline-none resize-none"
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        className="w-full h-12 text-base font-medium bg-[#263973] text-white rounded-md flex items-center justify-center"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Invio...
                          </div>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            {t.send}
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}