"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import { fadeIn } from "@/utils/motion";
import { useTranslations } from "next-intl";

export function SkillsList() {
  const t = useTranslations("skills");

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="py-24 relative"
    >
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
          {t("title")}
        </h2>

        <p className="text-lg text-[#e0e0e0] mb-12 max-w-2xl text-pretty">
          {t("subtitle")}
        </p>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`p-4 md:p-6 border-2 border-[#1a1a1a] rounded-none bg-[#0a0a0a]${index % 3 === 0 ? " lg:col-span-2" : ""}`}
            >
              <div className="flex items-center gap-2 mb-2">
                {skill.icon && (
                  <skill.icon className="w-5 h-5 text-[#00ff88]" strokeWidth={1.5} />
                )}
                <h3 className="text-xl font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
              <p className="text-[#999] text-xs md:text-sm leading-relaxed hidden md:block">
                {skill.context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
