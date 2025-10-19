"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { fadeIn } from "@/utils/motion";

export function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="py-12 border-t border-border"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-white font-semibold mb-1">{profile.name}</p>
            <p className="text-muted text-sm">{profile.title}</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Some rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
