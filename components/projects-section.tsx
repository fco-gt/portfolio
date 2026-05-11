"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/profile";
import { ProjectCard } from "./project-card";
import { slideUp, staggerChildren } from "@/utils/motion";
import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerChildren}
      className="py-12 md:py-24 bg-surface/50"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div variants={staggerChildren}>
          <motion.h2
            variants={slideUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance"
          >
            {t("title")}
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-lg text-muted mb-12 max-w-2xl text-pretty"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div
            variants={staggerChildren}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                image={project.image}
                technologies={project.technologies}
                links={project.links}
                featured={project.featured}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
