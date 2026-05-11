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
      className="relative border-2 border-[#1a1a1a] rounded-none overflow-hidden"
    >
      <div className="relative h-48 md:h-64 overflow-hidden bg-[#000]">
        <Image
          src={image || "/placeholder.svg"}
          alt={t(`${itemKey}.title`)}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1 border border-[#00ff88] text-[#00ff88] text-xs font-bold">
            {t("featured")}
          </div>
        )}
      </div>

      <div className="p-4 md:p-6">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 text-balance">
            {t(`${itemKey}.title`)}
          </h3>
          <p className="text-xs md:text-sm text-[#00ff88] font-medium mb-3">
            {t(`${itemKey}.role`)}
          </p>
          <p className="text-sm md:text-base text-[#999] leading-relaxed text-pretty">
            {t(`${itemKey}.description`)}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 border border-[#1a1a1a] text-[#00ff88] text-xs font-medium"
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
                  className="!rounded-none border-2 border-[#00ff88] bg-[#00ff88] text-black hover:bg-[#00ff88]/90"
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
                            className="!rounded-none border-2 border-[#1a1a1a] text-[#999] hover:bg-[#0a0a0a] bg-transparent"
                          >
                            {dt("cancel")}
                          </Button>
                        </DialogTrigger>
                        <Button
                          asChild
                          className="!rounded-none border-2 border-[#00ff88] bg-[#00ff88] text-black hover:bg-[#00ff88]/90"
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
              className="!rounded-none border-2 border-[#1a1a1a] text-[#999] hover:bg-[#0a0a0a] bg-transparent"
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
                  className="!rounded-none border-2 border-[#1a1a1a] text-[#999] hover:bg-[#0a0a0a] bg-transparent"
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
                          className="!rounded-none border-2 border-[#1a1a1a] text-[#999] hover:bg-[#0a0a0a] bg-transparent"
                        >
                          {dt("cancel")}
                        </Button>
                      </DialogTrigger>
                      <Button
                        asChild
                        className="!rounded-none border-2 border-[#00ff88] bg-[#00ff88] text-black hover:bg-[#00ff88]/90"
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
              className="!rounded-none border-2 border-[#1a1a1a] text-[#999] hover:bg-[#0a0a0a] bg-transparent"
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
                  className="!rounded-none border-2 border-[#1a1a1a] text-[#999] hover:bg-[#0a0a0a] bg-transparent"
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
              className="!rounded-none border-2 border-[#1a1a1a] text-[#999] hover:bg-[#0a0a0a] bg-transparent"
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
