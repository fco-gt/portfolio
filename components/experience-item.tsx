"use client";

import { MapPin } from "lucide-react";
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
    <div className="relative pl-8 pb-12 border-l-2 border-[#1a1a1a] last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 bg-[#00ff88]" />

      <div className="bg-[#0a0a0a] border-2 border-[#1a1a1a] p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-2 md:gap-4 mb-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              {t(`${itemKey}.position`)}
            </h3>
            <p className="text-base md:text-lg text-[#00ff88] font-semibold">{company}</p>
          </div>
          <div className="md:text-right">
            <p className="text-[#999] text-sm md:text-base font-medium">
              {t(`${itemKey}.period`)}
            </p>
            <p className="text-[#999] text-xs md:text-sm flex items-center gap-1 md:justify-end mt-1">
              <MapPin className="w-3 md:w-4 h-3 md:h-4" />
              {t(`${itemKey}.location`)}
            </p>
          </div>
        </div>

        <p className="text-[#e0e0e0] mb-4 leading-relaxed">
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
                  className="text-[#999] text-sm flex items-start gap-2"
                >
                  <span className="text-[#00ff88] mt-1">▸</span>
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
              className="px-3 py-1 bg-[#000] border border-[#00ff88]/20 text-[#00ff88] text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
