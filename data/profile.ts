export const profile = {
  name: "Francisco Gutierrez",
  email: "fco.gutierrez1227@gmail.com",
  location: "Santiago, Chile",
  social: {
    github: "https://github.com/fco-gt",
    linkedin: "https://www.linkedin.com/in/francisco-guti%C3%A9rrez-1b7580254",
  },
  resume: "/Francisco_Gutierrez_BCK_CV.pdf",
};

import {
  CICDIcon,
  DockerIcon,
  GinIcon,
  GolangIcon,
  NodeJsIcon,
  PostgreSQLIcon,
  PrismaIcon,
  RabbitMQIcon,
  ReactIcon,
  RedisIcon,
  SecurityIcon,
  TypescriptIcon,
} from "@/components/icons";

export const skills = [
  {
    name: "Golang",
    context: "Desarrollo de microservicios de alto rendimiento y herramientas CLI",
    icon: GolangIcon,
  },
  {
    name: "Node.js",
    context: "APIs RESTful escalables con Express y arquitectura de microservicios",
    icon: NodeJsIcon,
  },
  {
    name: "TypeScript",
    context: "Aplicaciones robustas con tipado estático y mejores prácticas",
    icon: TypescriptIcon,
  },
  {
    name: "PostgreSQL",
    context: "Diseño, optimización de queries y modelado relacional avanzado",
    icon: PostgreSQLIcon,
  },
  {
    name: "Redis",
    context: "Estrategias de caching, gestión de sesiones y colas de mensajes",
    icon: RedisIcon,
  },
  {
    name: "Docker",
    context: "Contenerización de aplicaciones y gestión de entornos de desarrollo",
    icon: DockerIcon,
  },
  {
    name: "Next.js",
    context: "Framework full-stack con renderizado híbrido y App Router",
    icon: ReactIcon,
  },
  {
    name: "RabbitMQ",
    context: "Mensajería asíncrona y comunicación desacoplada entre servicios",
    icon: RabbitMQIcon,
  },
  {
    name: "CI/CD",
    context: "Automatización de despliegues y tests con GitHub Actions",
    icon: CICDIcon,
  },
  {
    name: "Prisma",
    context: "ORM moderno para Node.js y TypeScript con seguridad de tipos",
    icon: PrismaIcon,
  },
  {
    name: "Gin",
    context: "Framework web de alto rendimiento para aplicaciones en Go",
    icon: GinIcon,
  },
  {
    name: "React",
    context: "Desarrollo de interfaces de usuario modernas con componentes reutilizables",
    icon: ReactIcon,
  },
  {
    name: "Supabase",
    context: "Backend-as-a-Service con PostgreSQL, autenticación y almacenamiento",
    icon: PostgreSQLIcon,
  },
  {
    name: "MongoDB",
    context: "Base de datos NoSQL para aplicaciones flexibles y escalables",
    icon: PostgreSQLIcon,
  },
  {
    name: "Express",
    context: "Framework backend minimalista para Node.js y APIs REST",
    icon: NodeJsIcon,
  },
  {
    name: "Astro",
    context: "Framework web con cero JavaScript por defecto y rendimiento optimizado",
    icon: ReactIcon,
  },
  {
    name: "Seguridad",
    context: "Implementación de JWT, OAuth2 y control de acceso basado en roles",
    icon: SecurityIcon,
  },
];

export const experience = [
  {
    id: 1,
    company: "Sellfyn SpA",
    technologies: ["Next.js", "Supabase", "PostgreSQL", "TypeScript", "JWT"],
    location: "Santiago, Chile",
    modalities: ["Remoto", "Contrato por proyecto"],
  },
  {
    id: 2,
    company: "Max and Beresford Orthodontists",
    technologies: ["JavaScript", "HTML", "CSS", "Accessibility", "SEO"],
    location: "Auckland, New Zealand",
    modalities: ["Hibrido", "Consultoría"],
  },
  {
    id: 3,
    company: "Psiquesanacion",
    technologies: ["Node.js", "Express", "MongoDB", "Cloudinary", "Astro", "GitHub Actions"],
    location: "Santiago, Chile",
    modalities: ["Remoto", "Freelance"],
  },
  {
    id: 4,
    company: "BrandBits Agency",
    technologies: ["HTML", "JavaScript", "APIs", "Webhooks"],
    location: "Santiago, Chile",
    modalities: ["Hibrido", "Practica profesional"],
  },
  {
    id: 5,
    company: "Otec AGIS SpA",
    technologies: ["Node.js", "WooCommerce API", "SQL", "JWT", "CI/CD"],
    location: "Santiago, Chile",
    modalities: ["Remoto", "Contrato por proyecto"],
  },
];

export const projects = [
  {
    id: 1,
    image: "/gopotency-icon.png",
    technologies: ["Golang", "PostgreSQL", "Redis", "Middleware"],
    links: {
      github: "https://github.com/fco-gt/gopotency",
      docs: "https://gopotency.vercel.app/"
    },
    featured: true,
  },
  {
    id: 2,
    image: "/autoattendance.png",
    technologies: ["Golang", "RabbitMQ", "Clean Architecture", "Gin", "Swagger"],
    links: {
      github: "https://github.com/fco-gt/quickattendance-go",
    },
    featured: true,
  },
  {
    id: 3,
    image: "/autoattendance.png",
    technologies: ["Node.js", "Express", "PostgreSQL", "Prisma", "Microservices"],
    links: {
      github: "https://github.com/fco-gt/autoattendance-services",
    },
    featured: true,
  },
];
