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
  const tc = useTranslations("common");

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "rgba(0,0,0,0.90)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #3c4b35",
      }}
    >
      <div className="grid grid-cols-3 items-center w-full max-w-[1280px] mx-auto px-5 md:px-6 h-20">
        {/* Logo — left */}
        <Link
          href="/"
          className="font-[family-name:var(--font-montserrat)] text-xl font-bold tracking-tighter justify-self-start"
          style={{ color: "#dae6d0" }}
        >
          FCO-GT
        </Link>

        {/* Nav links — center */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {[
            { href: "/#about", key: "about" },
            { href: "/#experience", key: "experience" },
            { href: "/#projects", key: "projects" },
            { href: "/#contact", key: "contact" },
          ].map(({ href, key }) => (
            <Link
              key={key}
              href={href}
              className="label-caps transition-colors duration-300"
              style={{ color: "#baccb0" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#39ff14")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "#baccb0")
              }
            >
              {t(key as "about" | "experience" | "projects" | "contact")}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center justify-end gap-4">
          <LocaleSwitcher />

          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ color: "#baccb0" }}
            aria-label={tc("github")}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#39ff14")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#baccb0")
            }
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300"
            style={{ color: "#baccb0" }}
            aria-label={tc("linkedin")}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#39ff14")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "#baccb0")
            }
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* CTA */}
          <Link
            href="/#contact"
            className="btn-neon label-caps px-5 py-2 rounded-sm hidden md:inline-flex items-center"
          >
            {t("hire")}
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
