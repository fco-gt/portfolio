"use client";

import { experience } from "@/data/profile";
import { ExperienceItem } from "./experience-item";
import { useTranslations } from "next-intl";
export function ExperienceSection() {
  const t = useTranslations("experience");
  return (
    <section
      id="experience"
      className="py-24 w-full max-w-7xl mx-auto px-5 md:px-6"
    >
      {/* Section Header */}
      <div className="flex items-center gap-8 mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold text-[#dae6d0] whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: t.raw("heading") }}
        />
        <div className="h-px grow bg-[#3c4b35]"></div>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative nn-timeline mb-24">
        {experience.map((exp) => (
          <ExperienceItem
            key={exp.id}
            id={exp.id}
            company={exp.company}
            technologies={exp.technologies}
            location={exp.location}
            modalities={exp.modalities}
          />
        ))}
      </div>
    </section>
  );
}
