"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  id: number;
  image: string;
  technologies: string[];
  links: {
    github?: string;
    docs?: string;
  };
  featured?: boolean;
}

export function ProjectCard({
  id,
  image,
  technologies,
  links,
  featured,
}: ProjectCardProps) {
  const t = useTranslations("projects");
  const tc = useTranslations("common");
  const itemKey = `item${id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`group relative nn-card overflow-hidden rounded-lg ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Image Container */}
      <div className="relative h-64 md:h-80 overflow-hidden bg-[#000]">
        <Image
          src={image || "/placeholder.svg"}
          alt={t(`${itemKey}.title`)}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000] via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        
        {/* Overlay content on hover */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex gap-2 mb-4">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[9px] label-caps border border-[#39ff14]/30 text-[#39ff14] bg-[#0c1609]/80 px-2 py-0.5 rounded-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#dae6d0] mb-2 leading-none">
            {t(`${itemKey}.title`)}
          </h3>
          <p className="text-[#baccb0] text-sm line-clamp-2 mb-6">
            {t(`${itemKey}.description`)}
          </p>
          
          <div className="flex items-center gap-4">
            {links.docs && (
              <a
                href={links.docs}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#39ff14] label-caps text-[10px] flex items-center gap-2 hover:underline"
              >
                {tc("viewDetails")} <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#dae6d0] label-caps text-[10px] flex items-center gap-2 hover:text-[#39ff14] transition-colors"
              >
                {tc("code")} <Github className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-6 left-6 z-20">
          <span className="label-caps text-[10px] bg-[#39ff14] text-[#022100] px-3 py-1 rounded-full font-bold">
            {tc("featuredProject")}
          </span>
        </div>
      )}
    </motion.div>
  );
}
