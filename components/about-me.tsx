"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import { Terminal } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutMe() {
  const t = useTranslations("about");
  return (
    <section
      id="about"
      className="py-24 w-full max-w-[1280px] mx-auto px-5 md:px-6"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Narrative / About */}
        <div className="lg:col-span-7">
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
            className="text-5xl md:text-6xl mb-8 leading-tight text-[#dae6d0]"
            dangerouslySetInnerHTML={{ __html: t.raw("heading") }}
          />
          <div className="space-y-6 max-w-2xl text-[#baccb0]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg leading-relaxed opacity-80"
              dangerouslySetInnerHTML={{ __html: t.raw("paragraph1") }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg leading-relaxed opacity-80"
              dangerouslySetInnerHTML={{ __html: t.raw("paragraph2") }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg leading-relaxed opacity-80"
              dangerouslySetInnerHTML={{ __html: t.raw("paragraph3") }}
            />
          </div>
        </div>

        {/* Skills Cloud */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="nn-card p-8 rounded-xl h-full flex flex-col sticky top-24"
          >
            <h3 className="text-2xl mb-8 border-b border-[#3c4b35] pb-4 text-[#dae6d0]">
              {t("coreStack")}
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                  className={`px-3 py-1.5 border label-caps text-[10px] rounded-full transition-all duration-300 ${
                    index % 3 === 0
                      ? "border-[#39ff14]/30 text-[#39ff14] bg-[#39ff14]/10"
                      : "border-[#3c4b35] text-[#dae6d0] bg-[#141e11]"
                  } hover:border-[#39ff14] hover:shadow-[0_0_8px_rgba(57,255,20,0.15)]`}
                >
                  {skill.name.toUpperCase()}
                </motion.span>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-[#3c4b35]">
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-[#2d3828] flex items-center justify-center border border-[#3c4b35] group-hover:border-[#39ff14] transition-colors">
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
      </div>
    </section>
  );
}
