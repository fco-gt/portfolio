"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/profile";
import { ProjectCard } from "./project-card";
import { useTranslations } from "next-intl";

export function ProjectsSection() {
  const t = useTranslations("projects");

  return (
    <section
      id="projects"
      className="py-24 w-full max-w-[1280px] mx-auto px-5 md:px-6"
    >
      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-8 mb-7">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#dae6d0] whitespace-nowrap"
            dangerouslySetInnerHTML={{ __html: t.raw("title") }}
          />
          <div className="h-px grow bg-[#3c4b35]"></div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[#baccb0] text-lg max-w-2xl leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
      </div>
    </section>
  );
}
