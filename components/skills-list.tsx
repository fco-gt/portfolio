"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/profile";
import { slideUp, staggerChildren } from "@/utils/motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function SkillsList() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-surface/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 max-w-6xl relative">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <motion.h2
            variants={slideUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance"
          >
            Habilidades y Experiencia
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-lg text-muted mb-12 max-w-2xl text-pretty"
          >
            Tecnologías y herramientas que utilizo para construir experiencias digitales excepcionales.
          </motion.p>

          <motion.div
            variants={staggerChildren}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={slideUp}
                whileHover={{ scale: 1.02 }}
                className="relative p-6 bg-surface border border-border rounded-lg hover:border-primary/30 transition-colors group"
              >
                <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-2">
                    {skill.icon && (
                      <skill.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    )}
                    <h3 className="text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    {skill.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
