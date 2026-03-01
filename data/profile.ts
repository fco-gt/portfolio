export const profile = {
  name: "Francisco Gutierrez",
  title: "Desarrollador Backend (Golang / Node.js)",
  tagline: "Golang · Node.js · TypeScript · PostgreSQL · Redis · Docker",
  bio: `Desarrollador Backend con experiencia en la construcción y mantenimiento de APIs y servicios backend.

Especializado en el desarrollo completo de soluciones, desde el análisis de requerimientos hasta el despliegue y soporte en producción. Me enfoco en crear sistemas confiables y escalables utilizando Node.js/TypeScript y Go.

Experto en integraciones con terceros, modelado de bases de datos, control de accesos y optimización de rendimiento en entornos críticos.`,
  email: "fco.gutierrez1227@gmail.com",
  location: "Santiago, Chile",
  availability: "Abierto a oportunidades",
  social: {
    github: "https://github.com/fco-gt",
    linkedin: "https://www.linkedin.com/in/francisco-guti%C3%A9rrez-1b7580254",
  },
  resume: "/Francisco_Gutierrez_BCK_CV.pdf",
};

import {
  Code2,
  FileJson,
  Server,
  Database,
  Wind,
  GitBranch,
  Smartphone,
  Box,
  Cpu,
  Layers,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const skills = [
  {
    name: "Golang",
    context: "Desarrollo de microservicios de alto rendimiento y herramientas CLI",
    icon: Terminal,
  },
  {
    name: "Node.js",
    context: "APIs RESTful escalables con Express y arquitectura de microservicios",
    icon: Server,
  },
  {
    name: "TypeScript",
    context: "Aplicaciones robustas con tipado estático y mejores prácticas",
    icon: FileJson,
  },
  {
    name: "PostgreSQL",
    context: "Diseño, optimización de queries y modelado relacional avanzado",
    icon: Database,
  },
  {
    name: "Redis",
    context: "Estrategias de caching, gestión de sesiones y colas de mensajes",
    icon: Zap,
  },
  {
    name: "Docker",
    context: "Contenerización de aplicaciones y gestión de entornos de desarrollo",
    icon: Box,
  },
  {
    name: "RabbitMQ",
    context: "Mensajería asíncrona y comunicación desacoplada entre servicios",
    icon: Layers,
  },
  {
    name: "CI/CD",
    context: "Automatización de despliegues y tests con GitHub Actions",
    icon: GitBranch,
  },
  {
    name: "Prisma",
    context: "ORM moderno para Node.js y TypeScript con seguridad de tipos",
    icon: Code2,
  },
  {
    name: "Gin",
    context: "Framework web de alto rendimiento para aplicaciones en Go",
    icon: Cpu,
  },
  {
    name: "Seguridad",
    context: "Implementación de OAuth2, JWT y control de acceso RBAC",
    icon: ShieldCheck,
  },
  {
    name: "React Native",
    context: "Desarrollo de aplicaciones móviles multiplataforma",
    icon: Smartphone,
  },
];

export const experience = [
  {
    id: 1,
    company: "Max and Beresford Orthodontists",
    position: "Web Developer",
    period: "Sep 2025 — Oct 2025",
    location: "Auckland, New Zealand",
    description:
      "Desarrollé y mantuve soluciones web en un entorno internacional, mejorando la presencia digital de la clínica.",
    achievements: [
      "Optimización de componentes web para mejorar la experiencia del usuario.",
      "Colaboración en un equipo multicultural siguiendo estándares internacionales.",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Web Management"],
  },
  {
    id: 2,
    company: "Psiquesanacion",
    position: "Backend Developer",
    period: "Jun 2025 — Aug 2025",
    location: "Remoto (Santiago, Chile)",
    description:
      "Diseñé e implementé el núcleo de la API y el sistema de gestión de contenidos.",
    achievements: [
      "Diseño y desarrollo de APIs REST en Node.js/Express.",
      "Implementación de autenticación JWT y control de accesos granular.",
      "Integración de Cloudinary para gestión de contenido multimedia y CDN.",
      "Configuración de pipelines CI/CD con GitHub Actions para despliegues automáticos.",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "Cloudinary", "GitHub Actions"],
  },
  {
    id: 3,
    company: "BrandBits Agency",
    position: "Web Developer (Práctica)",
    period: "Feb 2025 — May 2025",
    location: "Santiago, Chile",
    description:
      "Apoyé en el mantenimiento de plataformas web y la integración de herramientas de marketing.",
    achievements: [
      "Mantenimiento proactivo de funcionalidades web existentes.",
      "Integración de APIs y webhooks para la automatización de flujos internos.",
    ],
    technologies: ["HTML", "JavaScript", "SEO", "Webhooks"],
  },
  {
    id: 4,
    company: "Agis",
    position: "Backend Developer",
    period: "Sep 2024 — Jan 2025",
    location: "Remoto (Santiago, Chile)",
    description:
      "Me especialicé en integraciones críticas y optimización de rendimiento backend.",
    achievements: [
      "Sincronización robusta con APIs de terceros (WooCommerce) manejando grandes volúmenes de datos.",
      "Implementación de mecanismos de idempotencia, retries y control de backpressure.",
      "Resolución de incidentes de performance y tuning de queries complejas en SQL.",
    ],
    technologies: ["Node.js", "WooCommerce API", "SQL", "Batch Processing"],
  },
];

export const projects = [
  {
    id: 1,
    title: "GoPotency - Idempotencia en Go",
    description:
      "Librería/middleware en Go diseñada para aplicar idempotencia en endpoints HTTP de forma sencilla. Permite asegurar que operaciones críticas no se dupliquen, soportando estrategias de clave por body hash o headers, con almacenamiento persistente en Postgres o Redis.",
    image: "/gopotency-icon.png",
    technologies: ["Golang", "PostgreSQL", "Redis", "Middleware"],
    role: "Desarrollador Backend",
    links: {
      github: "https://github.com/fco-gt/gopotency",
    },
    featured: true,
  },
  {
    id: 2,
    title: "QuickAttendance - Escalamiento a Go",
    description:
      "Migración y evolución del sistema core de asistencia a Go utilizando Clean Architecture. Implementa arquitectura multi-tenant, procesamiento de tareas asíncronas con RabbitMQ y monitoreo en tiempo real con Prometheus y Grafana.",
    image: "/autoattendance.png",
    technologies: ["Golang", "RabbitMQ", "Clean Architecture", "Prometheus", "Grafana"],
    role: "Backend Architect",
    links: {
      github: "https://github.com/fco-gt/quick-attendance-go",
    },
    featured: true,
  },
  {
    id: 3,
    title: "AutoAttendance - Microservicios",
    description:
      "Sistema integral de gestión de asistencia basado en microservicios. Incluye check-in via QR, geofencing para asistencia remota y un sistema seguro de autenticación. Proyecto de titulación con backend robusto en Node.js y base de datos relacional.",
    image: "/autoattendance.png",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Microservices"],
    role: "Full Stack Developer",
    links: {
      webApp: "https://github.com/fco-gt/autoattendance-frontend",
      backend: "https://github.com/fco-gt/autoattendance-services",
    },
    featured: true,
  },
];
