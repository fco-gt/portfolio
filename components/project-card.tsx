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
            Destacado
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
                  {links.status === "update-notice" ? "Ver en Top.gg" : "Demo en Vivo"}
                </Button>
              </DialogTrigger>
              {links.status === "update-notice" && (
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Aviso de Estado del Bot</DialogTitle>
                    <DialogDescription className="pt-4">
                      <p className="mb-4">
                        Mankekito se encuentra actualmente en una gran actualización. Si bien el código original está deprecado y el bot está temporalmente fuera de línea, aún puedes ver su perfil en Top.gg, una plataforma profesional de listado de bots de Discord.
                      </p>
                      <p className="mb-4">
                        El bot logró estado de verificación oficial y sirvió a más de 10,000 usuarios en más de 260 servidores durante su período activo. Una nueva versión con características mejoradas y arquitectura moderna está en desarrollo.
                      </p>
                      <div className="flex justify-end gap-3 mt-6">
                        <DialogTrigger asChild>
                          <Button
                            variant="outline"
                            className="border-primary/30 text-white hover:bg-primary/10 bg-transparent"
                          >
                            Cancelar
                          </Button>
                        </DialogTrigger>
                        <Button
                          asChild
                          className="gradient-primary hover:opacity-90 text-background font-semibold border-0"
                        >
                          <a href={links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Ver en Top.gg
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
                Código
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
                  Aplicación Web
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Aviso de Funcionalidad Limitada</DialogTitle>
                  <DialogDescription className="pt-4">
                    <p className="mb-4">
                      Por favor, ten en cuenta que esta aplicación web actualmente opera con funcionalidad limitada ya que es parte de un proyecto académico.
                    </p>
                    <p className="mb-4">
                      Si bien puedes explorar el código del frontend y la arquitectura, la integración del backend está intencionalmente restringida debido a requisitos académicos y consideraciones de propiedad intelectual.
                    </p>
                    <p className="mb-4">
                      ¿Te gustaría proceder a ver el repositorio del frontend?
                    </p>
                    <div className="flex justify-end gap-3 mt-6">
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="border-primary/30 text-white hover:bg-primary/10 bg-transparent"
                        >
                          Cancelar
                        </Button>
                      </DialogTrigger>
                      <Button
                        asChild
                        className="gradient-primary hover:opacity-90 text-background font-semibold border-0"
                      >
                        <a href={links.webApp} target="_blank" rel="noopener noreferrer">
                          <Code2 className="w-4 h-4 mr-2" />
                          Ver Repositorio
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
                  Aplicación Móvil
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Aviso de Proyecto Académico</DialogTitle>
                  <DialogDescription className="pt-4">
                    <p className="mb-4">
                      El componente de aplicación móvil de este proyecto actualmente es privado debido a requisitos académicos y consideraciones de propiedad intelectual.
                    </p>
                    <p className="mb-4">
                      Si bien la aplicación web y los servicios backend están disponibles para visualización pública, el código fuente de la aplicación móvil permanece protegido. Sin embargo, aún puedes explorar la arquitectura y características a través de los otros componentes del sistema.
                    </p>
                    <p>
                      Siéntete libre de consultar la aplicación web y los repositorios backend para entender la arquitectura e implementación del sistema.
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
                Aplicación Móvil
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
