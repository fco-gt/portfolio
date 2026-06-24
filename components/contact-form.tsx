"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact");
  const common = useTranslations("common");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 w-full max-w-[1280px] mx-auto px-5 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* ── Left: Heading + Info ────────────────────────────────────────── */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="label-caps text-[#39ff14] mb-4 block"
            >
              {t("available")}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#dae6d0] leading-[1.15] mb-6"
              dangerouslySetInnerHTML={{ __html: t.raw("headline") }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#baccb0] text-base md:text-lg leading-relaxed max-w-md"
            >
              {t("subtitle")}
            </motion.p>
          </div>

          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 bg-[#121212] border border-[#3c4b35] p-5 hover:border-[#39ff14]/40 transition-all duration-300 group"
            >
              <div className="w-11 h-11 bg-[#000] flex items-center justify-center border border-[#3c4b35] text-[#39ff14] group-hover:neon-glow transition-all shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="label-caps text-[10px] text-[#baccb0]">{t("directEmail")}</p>
                <p className="text-[#dae6d0] text-sm truncate">{profile.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-[#121212] border border-[#3c4b35] p-5 hover:border-[#39ff14]/40 transition-all duration-300 group">
              <div className="w-11 h-11 bg-[#000] flex items-center justify-center border border-[#3c4b35] text-[#39ff14] group-hover:neon-glow transition-all shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="label-caps text-[10px] text-[#baccb0]">{t("baseOps")}</p>
                <p className="text-[#dae6d0] text-sm">{profile.location}</p>
              </div>
            </div>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="label-caps text-[10px] text-[#85967c] border-b border-[#3c4b35] pb-2 block mb-5">
              {t("connect")}
            </span>
            <div className="flex gap-8">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#dae6d0] hover:text-[#39ff14] transition-all duration-300 group"
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="label-caps text-[10px]">{common("github")}</span>
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#dae6d0] hover:text-[#39ff14] transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="label-caps text-[10px]">{common("linkedin")}</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Right: Contact Form ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="bg-[#121212] border border-[#3c4b35] p-8 md:p-10 relative overflow-hidden group">
            {/* Glow ornament */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#39ff14]/[0.04] blur-[100px] rounded-full group-hover:bg-[#39ff14]/[0.08] transition-colors duration-700 pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                <Field>
                  <FieldLabel htmlFor="name">{t("nameLabel")}</FieldLabel>
                  <FieldInput
                    id="name"
                    required
                    type="text"
                    placeholder={t("namePlaceholder")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">{t("emailLabel")}</FieldLabel>
                  <FieldInput
                    id="email"
                    required
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Field>
              </div>
              <Field>
                <FieldLabel htmlFor="message">{t("messageLabel")}</FieldLabel>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder={t("messagePlaceholder")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#000] border border-[#3c4b35] focus:border-[#39ff14] text-[#dae6d0] px-5 py-4 outline-none transition-all placeholder:text-[#3c4b35] text-sm resize-none input-neon"
                />
              </Field>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 pt-2">
                <p className="label-caps text-[10px] text-[#3c4b35] tracking-[0.15em] hidden md:block">
                  {t("response")}
                </p>
                <button
                  disabled={status === "loading"}
                  className="bg-[#39ff14] text-[#022100] px-10 py-4 font-bold label-caps text-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.3)] transition-all active:scale-[0.97] flex items-center gap-3 group/btn w-full md:w-auto justify-center"
                >
                  {status === "loading" ? t("sending") : t("send")}
                  <Send className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {status === "success" && (
                <p className="text-[#39ff14] label-caps text-xs text-center pt-2">
                  {t("success")}
                </p>
              )}
              {status === "error" && (
                <p className="text-red-400 label-caps text-xs text-center pt-2">
                  {t("error")}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── Field helper components ─────────────────────────────────────────── */

function Field({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 group/field">{children}</div>
  );
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="label-caps text-[10px] text-[#85967c] group-focus-within/field:text-[#39ff14] transition-colors"
    >
      {children}
    </label>
  );
}

function FieldInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full bg-[#000] border border-[#3c4b35] focus:border-[#39ff14] text-[#dae6d0] px-5 py-4 outline-none transition-all placeholder:text-[#3c4b35] text-sm input-neon"
    />
  );
}
