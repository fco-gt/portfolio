"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface ExperienceItemProps {
  id: number;
  company: string;
  technologies: string[];
  location: string;
  modalities: string[];
}

export function ExperienceItem({
  id,
  company,
  technologies,
  location,
  modalities,
}: ExperienceItemProps) {
  const t = useTranslations("experience");
  const itemKey = `item${id}`;

  const isCurrent = id === 1 || t(`${itemKey}.period`).includes("PRESENT");

  return (
    <div className="relative pl-8 md:pl-12 pb-16 last:pb-0">
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className={`absolute left-[-5px] md:left-[-5px] top-6 w-[11px] h-[11px] rounded-full z-10 ${
          isCurrent ? "bg-[#39ff14] shadow-[0_0_10px_#39ff14]" : "bg-[#3c4b35]"
        }`}
      />

      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        {/* Date & Meta */}
        <div className="md:w-1/4 pt-4">
          <p
            className={`label-caps text-[10px] mb-2 ${
              isCurrent ? "text-[#39ff14]" : "text-[#baccb0]"
            }`}
          >
            {t(`${itemKey}.period`)}
          </p>
          <h4 className="text-xl font-bold text-[#dae6d0] tracking-tight leading-snug">
            {company.toUpperCase()}
          </h4>
          <p className="text-sm text-[#baccb0] opacity-70">
            {t(`${itemKey}.position`)}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            <span className="inline-flex items-center gap-1 text-[10px] label-caps text-[#85967c]">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              {location}
            </span>
          </div>
          {modalities.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {modalities.map((mod) => (
                <span
                  key={mod}
                  className="text-[9px] label-caps px-1.5 py-0.5 rounded-sm border border-[#3c4b35]/50 text-[#85967c]"
                >
                  {mod}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`md:w-3/4 nn-card p-8 rounded-lg ${
            !isCurrent ? "opacity-80 hover:opacity-100" : ""
          }`}
        >
          <p className="text-[#baccb0] leading-relaxed mb-6">
            {t(`${itemKey}.description`)}
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] label-caps border border-[#3c4b35] px-2.5 py-1 rounded-sm text-[#baccb0] bg-[#0c1609]"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
