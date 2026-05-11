"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { fadeIn } from "@/utils/motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";

export function Header() {
  const t = useTranslations("header");
  const common = useTranslations("common");

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-7xl">
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-primary transition-colors"
        >
          {profile.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#about"
            className="text-muted hover:text-white transition-colors"
          >
            {t("about")}
          </Link>
          <Link
            href="/#experience"
            className="text-muted hover:text-white transition-colors"
          >
            {t("experience")}
          </Link>
          <Link
            href="/#projects"
            className="text-muted hover:text-white transition-colors"
          >
            {t("projects")}
          </Link>
          <Link
            href="/#contact"
            className="text-muted hover:text-white transition-colors"
          >
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LocaleSwitcher />
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label={common("github")}
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition-colors"
            aria-label={common("linkedin")}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
