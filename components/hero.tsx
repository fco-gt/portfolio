"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <div className="flex flex-col">
      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0 grid-bg opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[#39ff14]/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 md:px-6 text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-montserrat)] text-5xl md:text-7xl lg:text-8xl text-[#dae6d0] max-w-5xl mx-auto leading-[1.1] mb-8 tracking-tighter"
            dangerouslySetInnerHTML={{ __html: t.raw("tagline") }}
          />

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-[family-name:var(--font-inter)] text-lg md:text-xl text-[#baccb0] max-w-2xl mx-auto mb-12 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.raw("bio") }}
          />

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <Button
              asChild
              className="btn-neon px-10 py-7 text-lg rounded-sm w-full md:w-auto h-auto"
            >
              <a href="#projects">{t("cta")}</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="btn-ghost px-10 py-7 text-lg rounded-sm w-full md:w-auto h-auto backdrop-blur-sm"
            >
              <a href="#about">{t("manifesto")}</a>
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="label-caps text-[10px]">{t("scroll")}</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#39ff14] to-transparent"></div>
        </div>
      </section>
    </div>
  );
}
