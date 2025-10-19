"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/profile";
import { ExperienceItem } from "./experience-item";
import { slideUp, staggerChildren } from "@/utils/motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" ref={ref} className="py-24">
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
            Experience
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="text-lg text-muted mb-12 max-w-2xl text-pretty"
          >
            My professional journey
          </motion.p>

          <motion.div variants={staggerChildren}>
            {experience.map((exp) => (
              <ExperienceItem key={exp.id} {...exp} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
