"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex items-center justify-start relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance text-white">
          {profile.name.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: i * 0.05,
                ease: [0.6, 0.05, 0.01, 0.9],
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <p className="text-2xl md:text-3xl text-[#00ff88] font-semibold mb-6 text-balance">
          {t("tagline")}
          <span className="cursor">_</span>
        </p>

        <p className="text-lg md:text-xl text-[#e0e0e0] max-w-2xl mb-12 leading-relaxed text-pretty">
          {t("bio")}
        </p>

        <div className="flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#00ff88] text-black font-semibold border-0 hover:opacity-90"
          >
            <a href="#contact">
              <Mail className="w-5 h-5 mr-2" />
              {t("cta")}
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-[#1a1a1a] text-[#e0e0e0] hover:bg-[#0a0a0a] bg-transparent"
          >
            <a href={profile.resume} download>
              <Download className="w-5 h-5 mr-2" />
              {t("download")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
