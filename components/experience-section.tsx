"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/profile";
import { ExperienceItem } from "./experience-item";
import { fadeIn } from "@/utils/motion";
import { useTranslations } from "next-intl";

export function ExperienceSection() {
  const t = useTranslations("experience");

  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="py-12 md:py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t("title")}
        </h2>

        <p className="text-lg text-[#999] mb-12 max-w-2xl">
          {t("subtitle")}
        </p>

        <div>
          {experience.map((exp) => (
            <ExperienceItem
              key={exp.id}
              id={exp.id}
              company={exp.company}
              technologies={exp.technologies}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
