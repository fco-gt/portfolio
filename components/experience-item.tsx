"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { slideUp } from "@/utils/motion";
import { useTranslations } from "next-intl";

interface ExperienceItemProps {
  id: number;
  company: string;
  technologies: string[];
}

export function ExperienceItem({
  id,
  company,
  technologies,
}: ExperienceItemProps) {
  const t = useTranslations("experience");
  const itemKey = `item${id}`;

  return (
    <motion.div
      variants={slideUp}
      whileHover={{ y: -2, transition: { duration: 0.3 } }}
      className="relative pl-8 pb-12 border-l-2 border-border last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary border-4 border-background" />

      <div className="bg-surface border border-border rounded-lg p-4 md:p-6 hover:border-primary/30 transition-colors">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              {t(`${itemKey}.position`)}
            </h3>
            <p className="text-base md:text-lg text-primary font-semibold">{company}</p>
          </div>
          <div className="md:text-right">
            <p className="text-muted text-sm md:text-base font-medium">
              {t(`${itemKey}.period`)}
            </p>
            <p className="text-muted text-xs md:text-sm flex items-center gap-1 md:justify-end mt-1">
              <MapPin className="w-3 md:w-4 h-3 md:h-4" />
              {t(`${itemKey}.location`)}
            </p>
          </div>
        </div>

        <p className="text-foreground mb-4 leading-relaxed">
          {t(`${itemKey}.description`)}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">
            {t("achievements")}
          </h4>
          <ul className="space-y-2">
            {(t.raw(`${itemKey}.achievements`) as string[]).map(
              (achievement: string, index: number) => (
                <li
                  key={index}
                  className="text-muted text-sm flex items-start gap-2"
                >
                  <span className="text-primary mt-1">▸</span>
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-background border border-primary/20 rounded-full text-primary text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
