export const profile = {
  name: "Francisco Gutierrez",
  title: "Full Stack (enfocado en backend)",
  tagline: "Node.js · TypeScript · APIs · PostgreSQL · Auth",
  bio: `FullStack Developer especializado en backend (Node.js y TypeScript)

Diseño e implemento APIs REST, sistemas de autenticación y servicios orientados a datos, con experiencia en proyectos con usuarios reales y entornos de producción.

He trabajado en integraciones con terceros, modelado de bases de datos, control de accesos y optimización de rendimiento en endpoints críticos.

Experiencia con PostgreSQL, Prisma, MongoDB, JWT, CI/CD y arquitecturas orientadas a servicios.`,
  email: "fco.gutierrez1227@gmail.com",
  location: "Santiago, Chile",
  availability: "Abierto a oportunidades",
  social: {
    github: "https://github.com/fco-gt",
    linkedin: "https://www.linkedin.com/in/francisco-guti%C3%A9rrez-1b7580254",
  },
  resume: "/resume.docx",
};

import {
  Code2,
  FileText,
  FileJson,
  Box,
  Server,
  FileCode,
  Database,
  Wind,
  Network,
  Search,
  GitBranch,
  Smartphone,
} from "lucide-react";

export const skills = [
  {
    name: "JavaScript",
    context: "Desarrollo backend y frontend con características ES6+",
    icon: Code2,
  },
  {
    name: "HTML",
    context: "Marcado semántico y mejores prácticas de accesibilidad",
    icon: FileText,
  },
  {
    name: "CSS",
    context: "Diseño responsivo y técnicas modernas de layout (Flexbox, Grid)",
    icon: FileCode,
  },
  {
    name: "TypeScript",
    context: "Aplicaciones full-stack escalables con APIs tipadas",
    icon: FileJson,
  },
  {
    name: "React",
    context: "UI orientada a componentes con hooks y patrones modernos",
    icon: Box,
  },
  {
    name: "Next.js",
    context: "Renderizado en servidor, generación estática y rutas API",
    icon: Server,
  },
  {
    name: "Node.js",
    context: "APIs RESTful con Express y arquitectura de microservicios",
    icon: Server,
  },
  {
    name: "Astro",
    context: "Generación de sitios estáticos con optimización de rendimiento",
    icon: FileCode,
  },
  {
    name: "PostgreSQL",
    context: "Diseño y optimización de bases de datos relacionales",
    icon: Database,
  },
  {
    name: "MongoDB",
    context: "Modelado de datos basado en documentos y agregación",
    icon: Database,
  },
  {
    name: "Tailwind CSS",
    context: "Estilos orientados a utilidades con diseño responsivo",
    icon: Wind,
  },
  {
    name: "GraphQL",
    context: "APIs de tipo seguro con lenguaje de consulta moderno",
    icon: Network,
  },
  {
    name: "SEO",
    context: "Optimización en página y mejora de Core Web Vitals",
    icon: Search,
  },
  {
    name: "CI/CD",
    context: "Pipelines de despliegue automatizados con Vercel y Git",
    icon: GitBranch,
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
    company: "Psiquesanacion",
    position: "Desarrollador FullStack",
    period: "Jun 2025 — Aug 2025",
    location: "Santiago, Chile",
    description:
      "Migré el sitio web heredado a una pila moderna, construí un sistema de blog personalizado y automaticé el pipeline de despliegue.",
    achievements: [
      "Diseño e implementación de un sistema de publicación de contenidos utilizando Node.js y MongoDB.",
      "Integración de Cloudinary para almacenamiento y entrega de imágenes.",
      "Implementación de autenticación y control de acceso mediante JWT para acciones administrativas",
      "Desarrollo de APIs REST consumidas por frontend en Astro y configuración de despliegues automatizados con GitHub Actions.",
    ],
    technologies: ["Astro", "MongoDB", "Cloudinary", "Vercel", "GitHub"],
  },
  {
    id: 2,
    company: "BrandBits Agency",
    position: "Practica Desarrollo Web",
    period: "Feb 2025 — May 2025",
    location: "Santiago, Chile",
    description:
      "Implementé características de marketing y mantuve la comunicación con clientes mientras depuraba problemas de integración.",
    achievements: [
      "Mantenimiento y mejora de funcionalidades web.",
      "Integración de APIs de terceros y webhooks para automatización de flujos internos.",
      "Colaboración con equipos de diseño y marketing.",
    ],
    technologies: ["HTML", "JavaScript", "SEO", "Webhooks"],
  },
  {
    id: 3,
    company: "Agis",
    position: "Desarrollador FullStack",
    period: "Sep 2024 — Jan 2025",
    location: "Santiago, Chile",
    description:
      "Desarrollé una plataforma de e-commerce con integración de WooCommerce e implementé procesos de despliegue eficientes.",
    achievements: [
      "Implementación de integraciones backend con la API REST de WooCommerce para sincronización de productos, pedidos y usuarios.",
      "Desarrollo de endpoints protegidos mediante JWT para flujos de autenticación y autorización entre servicios.",
      "Resolución de problemas de performance y consistencia de datos en procesos de sincronización (paginación, batching y retries).",
      "Configuración de pipelines CI/CD que automatizaron despliegues y redujeron errores manuales.",
    ],
    technologies: ["WooCommerce", "WordPress API", "Vercel", "SEO", "CI/CD"],
  },
];

export const projects = [
  {
    id: 1,
    title: "AutoAttendance - Sistema FullStack",
    description:
      "Sistema integral de gestión de asistencia con aplicación móvil React Native (proyecto académico privado), aplicación web Next.js y backend de microservicios Node.js. Incluye check-in con código QR, check-in remoto con geofencing y autenticación JWT segura. La aplicación móvil permanece privada por requisitos académicos.",
    image: "/autoattendance.png",
    technologies: [
      "React Native",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "Microservices",
    ],
    role: "Desarrollador Full Stack",
    links: {
      webApp: "https://github.com/fco-gt/autoattendance-frontend",
      backend: "https://github.com/fco-gt/autoattendance-services",
      mobileApp: "Private - Academic Project",
    },
    featured: true,
  },
  {
    id: 2,
    title: "Plataforma de E-commerce con Next.js",
    description:
      "Aplicación web de e-commerce full-stack construida con arquitectura N-Tier. Incluye catálogo de productos completo, sistema de checkout y gestión de usuarios con backend de API REST con Django.",
    image: "/master-bikes.png",
    technologies: ["Next.js", "Django", "REST API", "PostgreSQL", "Vercel"],
    role: "Desarrollador Full Stack",
    links: {
      github: "https://github.com/fco-gt/bikes-ecommerce",
      live: "https://master-bikes.vercel.app/",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Mankekito - Bot Verificado de Discord",
    description:
      "Bot de Discord construido a los 15 años que se escaló a más de 260 servidores y 10,000+ usuarios. Logró verificación oficial de Discord y listado en Top.gg. Construido con Node.js y MongoDB para gestión robusta de usuarios y características.",
    image: "/mankekito.png",
    technologies: ["Node.js", "MongoDB", "Discord.js", "JavaScript"],
    role: "Desarrollador Backend",
    links: {
      live: "https://top.gg/bot/758059320238931978",
      status: "update-notice" as const,
    },
    featured: true,
  },
];
