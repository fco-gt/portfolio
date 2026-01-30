"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { slideUp } from "@/utils/motion";

interface ExperienceItemProps {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export function ExperienceItem({
  company,
  position,
  period,
  location,
  description,
  achievements,
  technologies,
}: ExperienceItemProps) {
  return (
    <motion.div
      variants={slideUp}
      className="relative pl-8 pb-12 border-l-2 border-border last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 -translate-x-[9px] w-4 h-4 rounded-full bg-primary border-4 border-background" />

      <div className="bg-surface border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{position}</h3>
            <p className="text-lg text-primary font-semibold">{company}</p>
          </div>
          <div className="text-right">
            <p className="text-muted font-medium">{period}</p>
            <p className="text-muted text-sm flex items-center gap-1 justify-end mt-1">
              <MapPin className="w-4 h-4" />
              {location}
            </p>
          </div>
        </div>

        <p className="text-foreground mb-4 leading-relaxed">{description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-white mb-2">
            Logros Clave:
          </h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="text-muted text-sm flex items-start gap-2"
              >
                <span className="text-primary mt-1">▸</span>
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-background border border-primary/20 rounded-full text-primary text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
