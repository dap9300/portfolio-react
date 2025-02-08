// client/src/components/sections/project-details/manunta/AccordionServices.tsx
import { FC } from "react";
import { Language } from "@/types";
import { Project } from "@/types/projects";
import { Card } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { translations as t } from "./content";

interface AccordionServicesProps {
  project: Project;
  language: Language;
}

export const AccordionServices: FC<AccordionServicesProps> = ({ project, language }) => {
  const sectionTitle = language === 'it' ? 'Servizi Medici' : 'Medical Services';

  return (
    <AccordionItem value="services" className="border rounded-lg hover:bg-accent/50 transition-colors">
      <AccordionTrigger className="px-4">
        <div className="flex items-center gap-3">
          <Stethoscope className="w-5 h-5 text-primary" />
          <h2 className="text-xl font-semibold">{sectionTitle}</h2>
        </div>
      </AccordionTrigger>
      <AccordionContent className="px-4">
        <Card className="p-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Services List */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {language === 'it' ? 'Trattamenti Principali' : 'Main Treatments'}
                </h3>
                <ul className="space-y-2">
                  {[
                    'Fisioterapia Ortopedica',
                    'Riabilitazione Sportiva',
                    'Terapia Manuale',
                    'Rieducazione Posturale',
                    'Terapia Strumentale'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {language === 'it' ? 'Servizi Online' : 'Online Services'}
                </h3>
                <ul className="space-y-2">
                  {[
                    'Prenotazioni Online',
                    'Teleconsulto',
                    'Video Tutorial Esercizi',
                    'Follow-up Digitale'
                  ].map((service, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">
                {language === 'it' ? 'Performance dei Servizi' : 'Service Performance'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-accent/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    {language === 'it' ? 'Prenotazioni Online' : 'Online Bookings'}
                  </p>
                  <p className="text-2xl font-bold text-primary">45%</p>
                  <span className="text-green-600 text-sm">+25% YoY</span>
                </div>
                <div className="bg-accent/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    {language === 'it' ? 'Pazienti Attivi' : 'Active Patients'}
                  </p>
                  <p className="text-2xl font-bold text-primary">850+</p>
                  <span className="text-green-600 text-sm">mensili</span>
                </div>
                <div className="bg-accent/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    {language === 'it' ? 'Soddisfazione' : 'Satisfaction'}
                  </p>
                  <p className="text-2xl font-bold text-primary">4.8</p>
                  <span className="text-muted-foreground text-sm">su 5</span>
                </div>
                <div className="bg-accent/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    {language === 'it' ? 'Recensioni' : 'Reviews'}
                  </p>
                  <p className="text-2xl font-bold text-primary">250+</p>
                  <span className="text-muted-foreground text-sm">verificate</span>
                </div>
              </div>

              {/* Treatment Success Rate */}
              <div className="bg-accent/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3">
                  {language === 'it' ? 'Tasso di Successo Trattamenti' : 'Treatment Success Rate'}
                </h4>
                <div className="space-y-3">
                  {[
                    { name: 'Riabilitazione Sportiva', rate: '92%' },
                    { name: 'Terapia Manuale', rate: '89%' },
                    { name: 'Rieducazione Posturale', rate: '87%' }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{item.name}</span>
                      <span className="font-semibold text-primary">{item.rate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionServices;