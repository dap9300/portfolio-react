import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function Footer() {
  return (
    <motion.footer 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="w-full py-6 border-t bg-gray-800 backdrop-blur-sm relative z-50"
    >
      <div className="container mx-auto px-4">
        <p className="text-center text-sm text-white">
          © Alessandro d'Apolito – 2025 | Proudly created with React & Typescript
        </p>
      </div>
    </motion.footer>
  );
}