"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/profile";
import { ProjectCard } from "./project-card";
import { fadeIn } from "@/utils/motion";
import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
      className="py-12 md:py-24"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
          {t("title")}
        </h2>

        <p className="text-lg text-[#e0e0e0] mb-12 max-w-2xl text-pretty">
          {t("subtitle")}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={index === 0 ? "md:col-span-2" : ""}
            >
              <ProjectCard
                id={project.id}
                image={project.image}
                technologies={project.technologies}
                links={project.links}
                featured={project.featured}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
