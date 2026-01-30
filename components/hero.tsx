"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { slideUp, staggerChildren } from "@/utils/motion";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-cyan-500/5 to-indigo-500/10 pointer-events-none" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="container mx-auto px-4 max-w-5xl relative z-10"
      >
        <motion.div variants={slideUp} className="mb-6">
          <span className="inline-block px-4 py-2 bg-surface/80 backdrop-blur-sm gradient-border rounded-full text-primary text-sm font-medium">
            {profile.availability}
          </span>
        </motion.div>

        <motion.h1
          variants={slideUp}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-balance gradient-text"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={slideUp}
          className="text-2xl md:text-3xl text-primary font-semibold mb-6 text-balance"
        >
          {profile.tagline}
        </motion.p>

        <motion.p
          variants={slideUp}
          className="text-lg md:text-xl text-muted max-w-2xl mb-12 leading-relaxed text-pretty"
        >
          {profile.bio}
        </motion.p>

        <motion.div variants={slideUp} className="flex flex-wrap gap-4">
          <Button
            asChild
            size="lg"
            className="gradient-primary hover:opacity-90 text-background font-semibold border-0"
          >
            <a href="#contact">
              <Mail className="w-5 h-5 mr-2" />
              Contáctame
            </a>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary/30 text-white hover:bg-primary/10 bg-transparent"
          >
            <a href={profile.resume} download>
              <Download className="w-5 h-5 mr-2" />
              Descargar CV
            </a>
          </Button>
        </motion.div>

        <motion.div
          variants={slideUp}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="w-6 h-6 text-muted" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
