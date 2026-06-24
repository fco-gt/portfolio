"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import { Terminal } from "lucide-react";
import { useTranslations } from "next-intl";

export function SkillsList() {
  const t = useTranslations("skills");

  return (
    <section className="py-24 w-full max-w-[1280px] mx-auto px-5 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-caps text-[#39ff14] mb-4 block"
          >
            {t("label")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#dae6d0]"
            dangerouslySetInnerHTML={{ __html: t.raw("heading") }}
          />
        </motion.div>

        {/* Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="nn-card p-8 md:p-12 rounded-xl"
        >
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {skills.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className={`px-4 py-2 border label-caps text-[11px] rounded-full transition-all duration-300 ${
                  index % 3 === 0
                    ? "border-[#39ff14]/30 text-[#39ff14] bg-[#39ff14]/10"
                    : "border-[#3c4b35] text-[#dae6d0] bg-[#141e11]"
                } hover:border-[#39ff14] hover:shadow-[0_0_10px_rgba(57,255,20,0.2)]`}
              >
                {skill.name.toUpperCase()}
              </motion.span>
            ))}
          </div>

          <div className="pt-6 border-t border-[#3c4b35] max-w-md mx-auto">
            <div className="flex items-center gap-4 group justify-center">
              <div className="w-12 h-12 rounded-lg bg-[#2d3828] flex items-center justify-center border border-[#3c4b35] group-hover:border-[#39ff14] transition-colors">
                <Terminal className="w-5 h-5 text-[#39ff14]" />
              </div>
              <div>
                <p className="label-caps text-[10px] text-[#baccb0]">
                  {t("currentFocus")}
                </p>
                <p className="text-sm md:text-base text-[#dae6d0]">
                  {t("focusValue")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
