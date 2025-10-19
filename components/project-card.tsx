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

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  role: string;
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
  title,
  description,
  image,
  technologies,
  role,
  links,
  featured,
}: ProjectCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -5 }}
      className="group relative bg-surface border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all"
    >
      <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      <div className="relative h-64 overflow-hidden bg-background">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-4 right-4 px-3 py-1 gradient-primary text-background text-xs font-bold rounded-full">
            Featured
          </div>
        )}
      </div>

      <div className="p-6 relative">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2 text-balance">
            {title}
          </h3>
          <p className="text-sm text-primary font-medium mb-3">{role}</p>
          <p className="text-muted leading-relaxed text-pretty">
            {description}
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
                  {links.status === "update-notice" ? "View on Top.gg" : "Live Demo"}
                </Button>
              </DialogTrigger>
              {links.status === "update-notice" && (
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Bot Status Notice</DialogTitle>
                    <DialogDescription className="pt-4">
                      <p className="mb-4">
                        Mankekito is currently undergoing a major update. While the original code is now deprecated and the bot is temporarily offline, you can still view its profile on Top.gg, a professional Discord bot listing platform.
                      </p>
                      <p className="mb-4">
                        The bot achieved verification status and served over 10,000 users across 260+ servers during its active period. A new version with improved features and modern architecture is in development.
                      </p>
                      <div className="flex justify-end gap-3 mt-6">
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="border-primary/30 text-white hover:bg-primary/10 bg-transparent"
                          >
                            Cancel
                          </Button>
                        </DialogTrigger>
                        <Button
                          asChild
                          className="gradient-primary hover:opacity-90 text-background font-semibold border-0"
                        >
                          <a href={links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View on Top.gg
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
                Code
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
                  Web App
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Limited Functionality Notice</DialogTitle>
                  <DialogDescription className="pt-4">
                    <p className="mb-4">
                      Please note that this web application is currently operating with limited functionality as it&apos;s part of an academic project.
                    </p>
                    <p className="mb-4">
                      While you can explore the frontend code and architecture, the backend integration is intentionally restricted due to academic requirements and intellectual property considerations.
                    </p>
                    <p className="mb-4">
                      Would you like to proceed to view the frontend repository?
                    </p>
                    <div className="flex justify-end gap-3 mt-6">
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-primary/30 text-white hover:bg-primary/10 bg-transparent"
                        >
                          Cancel
                        </Button>
                      </DialogTrigger>
                      <Button
                        asChild
                        className="gradient-primary hover:opacity-90 text-background font-semibold border-0"
                      >
                        <a href={links.webApp} target="_blank" rel="noopener noreferrer">
                          <Code2 className="w-4 h-4 mr-2" />
                          View Repository
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
                Backend
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
                  Mobile App
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Academic Project Notice</DialogTitle>
                  <DialogDescription className="pt-4">
                    <p className="mb-4">
                      The mobile application component of this project is currently private due to academic requirements and intellectual property considerations.
                    </p>
                    <p className="mb-4">
                      While the web application and backend services are available for public viewing, the mobile app&apos;s source code remains protected. However, you can still explore the architecture and features through the other components of the system.
                    </p>
                    <p>
                      Feel free to check out the web application and backend repositories to understand the system&apos;s architecture and implementation.
                    </p>
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
                Mobile App
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
