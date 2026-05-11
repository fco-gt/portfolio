"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Code2, Smartphone, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scaleIn } from "@/utils/motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  id: number;
  image: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    webApp?: string;
    backend?: string;
    mobileApp?: string;
    status?: "update-notice";
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
  const dt = useTranslations("projectDialogs");
  const itemKey = `item${id}`;

  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-surface border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all"
    >
      <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative h-48 md:h-64 overflow-hidden bg-background">
        <Image
          src={image || "/placeholder.svg"}
          alt={t(`${itemKey}.title`)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1 gradient-primary text-background text-xs font-bold rounded-full">
            {t("featured")}
          </div>
        )}
      </div>

      <div className="p-4 md:p-6 relative">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-balance">
            {t(`${itemKey}.title`)}
          </h3>
          <p className="text-xs md:text-sm text-primary font-medium mb-3">
            {t(`${itemKey}.role`)}
          </p>
          <p className="text-sm md:text-base text-muted leading-relaxed text-pretty">
            {t(`${itemKey}.description`)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-background/50 backdrop-blur-sm border border-primary/20 rounded-full text-primary text-xs font-medium hover:border-primary/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {links.live && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  className="gradient-primary hover:opacity-90 text-background font-semibold border-0"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {links.status === "update-notice"
                    ? dt("topgg.action")
                    : t("liveDemo")}
                </Button>
              </DialogTrigger>
              {links.status === "update-notice" && (
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{dt("topgg.title")}</DialogTitle>
                    <DialogDescription className="pt-4">
                      {(dt.raw("topgg.paragraphs") as string[]).map(
                        (paragraph: string, i: number) => (
                          <p key={i} className="mb-4">
                            {paragraph}
                          </p>
                        )
                      )}
                      <div className="flex justify-end gap-3 mt-6">
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="border-primary/30 text-white hover:bg-primary/10 bg-transparent"
                          >
                            {dt("cancel")}
                          </Button>
                        </DialogTrigger>
                        <Button
                          asChild
                          className="gradient-primary hover:opacity-90 text-background font-semibold border-0"
                        >
                          <a href={links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {dt("topgg.action")}
                          </a>
                        </Button>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              )}
            </Dialog>
          )}
          {links.github && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-primary/30 text-white hover:bg-primary/10 bg-transparent"
            >
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                {t("code")}
              </a>
            </Button>
          )}
          {links.webApp && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/30 text-white hover:bg-primary/10 bg-transparent group"
                >
                  <Code2 className="w-4 h-4 mr-2" />
                  {t("webApp")}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{dt("webapp.title")}</DialogTitle>
                  <DialogDescription className="pt-4">
                    {(dt.raw("webapp.paragraphs") as string[]).map(
                      (paragraph: string, i: number) => (
                        <p key={i} className="mb-4">
                          {paragraph}
                        </p>
                      )
                    )}
                    <div className="flex justify-end gap-3 mt-6">
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-primary/30 text-white hover:bg-primary/10 bg-transparent"
                        >
                          {dt("cancel")}
                        </Button>
                      </DialogTrigger>
                      <Button
                        asChild
                        className="gradient-primary hover:opacity-90 text-background font-semibold border-0"
                      >
                        <a href={links.webApp} target="_blank" rel="noopener noreferrer">
                          <Code2 className="w-4 h-4 mr-2" />
                          {dt("viewRepository")}
                        </a>
                      </Button>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          )}
          {links.backend && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-primary/30 text-white hover:bg-primary/10 bg-transparent"
            >
              <a href={links.backend} target="_blank" rel="noopener noreferrer">
                <Server className="w-4 h-4 mr-2" />
                {t("backend")}
              </a>
            </Button>
          )}
          {links.mobileApp === "Private - Academic Project" ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/30 text-white hover:bg-primary/10 bg-transparent"
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  {t("mobileApp")}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{dt("mobile.title")}</DialogTitle>
                  <DialogDescription className="pt-4">
                    {(dt.raw("mobile.paragraphs") as string[]).map(
                      (paragraph: string, i: number) => (
                        <p key={i} className="mb-4">
                          {paragraph}
                        </p>
                      )
                    )}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ) : links.mobileApp && (
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-primary/30 text-white hover:bg-primary/10 bg-transparent"
            >
              <a href={links.mobileApp} target="_blank" rel="noopener noreferrer">
                <Smartphone className="w-4 h-4 mr-2" />
                {t("mobileApp")}
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
