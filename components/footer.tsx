"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { fadeIn } from "@/utils/motion";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const common = useTranslations("common");

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-12 border-t-2 border-[#1a1a1a]"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold mb-1">{profile.name}</p>
            <p className="text-[#999] text-sm">{t("title")}</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999]"
              aria-label={common("github")}
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#999]"
              aria-label={common("linkedin")}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-[#999] text-sm">
            © {new Date().getFullYear()} {t("copyright")}
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
