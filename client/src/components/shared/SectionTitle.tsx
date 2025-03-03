// client/src/components/shared/SectionTitle.tsx
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { LordIcon } from "./LordIcon";
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  icon?: string;
}
export function SectionTitle({ title, subtitle, icon }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-center gap-4">
        {icon && (
          <LordIcon
            src={icon}
            trigger="hover"
            size={48}
            colors={{
              primary: "#D97706",
              secondary: "#D97706"
            }}
          />
        )}
        <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#263973" }}>{title}</h2>
      </div>
      {subtitle && (
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}