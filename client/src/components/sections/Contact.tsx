import { motion } from "framer-motion";
import { translations } from "@/lib/translations";
import { Language } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";

interface ContactProps {
  language: Language;
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export function Contact({ language }: ContactProps) {
  const t = translations[language].contact;
  const form = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle title={t.title} />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <Card>
            <CardContent className="p-6">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <motion.div variants={fadeInUp}>
                  <Input
                    placeholder={t.name}
                    {...form.register("name")}
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Input
                    type="email"
                    placeholder={t.email}
                    {...form.register("email")}
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Textarea
                    placeholder={t.message}
                    rows={5}
                    {...form.register("message")}
                  />
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    {t.send}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
