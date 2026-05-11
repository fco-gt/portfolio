"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/profile";
import { fadeIn } from "@/utils/motion";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact");
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
        const errorData = await response.json();
        console.error("Form submission error:", errorData);
        setStatus("error");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
    }
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="py-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
              {t("title")}
            </h2>

            <p className="text-lg text-[#e0e0e0] mb-8 text-pretty">
              {t("subtitle")}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[#999]">
                <Mail className="w-5 h-5 text-[#00ff88]" />
                <a href={`mailto:${profile.email}`} className="text-[#999]">
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#999]">
                <MapPin className="w-5 h-5 text-[#00ff88]" />
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-2"
              >
                {t("nameLabel")}
              </label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="!rounded-none border-2 border-[#1a1a1a] bg-[#0a0a0a] text-white"
                placeholder={t("namePlaceholder")}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white mb-2"
              >
                {t("emailLabel")}
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="!rounded-none border-2 border-[#1a1a1a] bg-[#0a0a0a] text-white"
                placeholder={t("emailPlaceholder")}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-white mb-2"
              >
                {t("messageLabel")}
              </label>
              <Textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="!rounded-none border-2 border-[#1a1a1a] bg-[#0a0a0a] text-white resize-none"
                placeholder={t("messagePlaceholder")}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="!rounded-none border-2 border-[#00ff88] bg-[#00ff88] text-black hover:bg-[#00ff88]/90 w-full"
            >
              {status === "loading" ? (
                t("sending")
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {t("send")}
                </>
              )}
            </Button>

            {status === "success" && (
              <p className="text-[#00ff88] text-sm">{t("success")}</p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-sm">{t("error")}</p>
            )}
          </form>
        </div>
      </div>
    </motion.section>
  );
}
