"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/profile";
import { ExperienceItem } from "./experience-item";
import { slideUp, staggerChildren } from "@/utils/motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useTranslations } from "next-intl";

export function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();
  const t = useTranslations("experience");

  return (
    <section id="experience" ref={ref} className="py-12 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <motion.h2
            variants={slideUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-lg text-muted mb-12 max-w-2xl text-pretty"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div variants={staggerChildren}>
            {experience.map((exp) => (
              <ExperienceItem
                key={exp.id}
                id={exp.id}
                company={exp.company}
                technologies={exp.technologies}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
