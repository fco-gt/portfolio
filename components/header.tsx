"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/profile";
import { fadeIn } from "@/utils/motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./locale-switcher";

const navItems = [
  { href: "/#about", key: "about" },
  { href: "/#experience", key: "experience" },
  { href: "/#projects", key: "projects" },
  { href: "/#contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("header");
  const tc = useTranslations("common");
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

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
      <div className="grid grid-cols-[1fr_auto] md:grid-cols-3 items-center w-full max-w-[1280px] mx-auto px-5 md:px-6 h-20">
        {/* Logo — left */}
        <Link
          href="/"
          className="font-[family-name:var(--font-montserrat)] text-xl font-bold tracking-tighter justify-self-start"
          style={{ color: "#dae6d0" }}
        >
          FCO-GT
        </Link>

        {/* Nav links — center (desktop only) */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {navItems.map(({ href, key }) => (
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
              {t(key)}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center justify-end gap-2 md:gap-4">
          <LocaleSwitcher />

          {/* Social icons — hidden on mobile when menu is open */}
          <a
            href={profile.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block transition-colors duration-300"
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
            className="hidden md:block transition-colors duration-300"
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

          {/* Hire CTA — desktop */}
          <Link
            href="/#contact"
            className="btn-neon label-caps px-5 py-2 rounded-sm hidden md:inline-flex items-center"
          >
            {t("hire")}
          </Link>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 transition-colors duration-300"
            style={{ color: "#baccb0" }}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-20 bg-black/60 md:hidden z-40"
              onClick={closeMobile}
            />

            {/* Drawer */}
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-20 left-0 right-0 md:hidden z-50"
              style={{
                backgroundColor: "rgba(0,0,0,0.95)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: "1px solid #3c4b35",
              }}
            >
              <div className="flex flex-col px-5 py-6 gap-1">
                {navItems.map(({ href, key }, i) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                  >
                    <Link
                      href={href}
                      onClick={closeMobile}
                      className="block py-3 label-caps text-sm transition-colors duration-300"
                      style={{ color: "#baccb0" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "#39ff14")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "#baccb0")
                      }
                    >
                      {t(key)}
                    </Link>
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="h-px bg-[#3c4b35] my-4" />

                {/* Social + Hire in drawer */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  className="flex items-center gap-5"
                >
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300"
                    style={{ color: "#baccb0" }}
                    aria-label={tc("github")}
                    onClick={closeMobile}
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
                    onClick={closeMobile}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <div className="flex-1" />
                  <Link
                    href="/#contact"
                    onClick={closeMobile}
                    className="btn-neon label-caps px-6 py-2.5 rounded-sm text-xs"
                  >
                    {t("hire")}
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
