"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { profile } from "@/data/profile";
import { fadeIn } from "@/utils/motion";

export function Header() {
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
            href="#about"
            className="text-muted hover:text-white transition-colors"
          >
            Acerca de
          </Link>
          <Link
            href="#experience"
            className="text-muted hover:text-white transition-colors"
          >
            Experiencia
          </Link>
          <Link
            href="#projects"
            className="text-muted hover:text-white transition-colors"
          >
            Proyectos
          </Link>
          <Link
            href="#contact"
            className="text-muted hover:text-white transition-colors"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-4">
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
      </div>
    </motion.header>
  );
}
