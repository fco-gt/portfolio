"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/profile";
import { ProjectCard } from "./project-card";
import { slideUp, staggerChildren } from "@/utils/motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ProjectsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" ref={ref} className="py-12 md:py-24 bg-surface/50">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerChildren}
        >
          <motion.h2
            variants={slideUp}
            className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance"
          >
            Proyectos Destacados
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-lg text-muted mb-12 max-w-2xl text-pretty"
          >
            Una selección de proyectos que muestran mis habilidades técnicas y enfoque en la resolución de problemas.
          </motion.p>

          <motion.div
            variants={staggerChildren}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
