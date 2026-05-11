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
    name: "Seguridad",
    context: "Implementación de OAuth2, JWT y control de acceso RBAC",
    icon: SecurityIcon,
  },
  {
    name: "React Native",
    context: "Desarrollo de aplicaciones móviles multiplataforma",
    icon: ReactIcon,
  },
];

export const experience = [
  {
    id: 1,
    company: "Max and Beresford Orthodontists",
    technologies: ["JavaScript", "HTML", "CSS", "Web Management"],
  },
  {
    id: 2,
    company: "Psiquesanacion",
    technologies: ["Node.js", "Express", "MongoDB", "Cloudinary", "GitHub Actions"],
  },
  {
    id: 3,
    company: "BrandBits Agency",
    technologies: ["HTML", "JavaScript", "SEO", "Webhooks"],
  },
  {
    id: 4,
    company: "Agis",
    technologies: ["Node.js", "WooCommerce API", "SQL", "Batch Processing"],
  },
];

export const projects = [
  {
    id: 1,
    image: "/gopotency-icon.png",
    technologies: ["Golang", "PostgreSQL", "Redis", "Middleware"],
    links: {
      github: "https://github.com/fco-gt/gopotency",
    },
    featured: true,
  },
  {
    id: 2,
    image: "/autoattendance.png",
    technologies: ["Golang", "RabbitMQ", "Clean Architecture", "Prometheus", "Grafana"],
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
      webApp: "https://github.com/fco-gt/autoattendance-frontend",
      backend: "https://github.com/fco-gt/autoattendance-services",
    },
    featured: true,
  },
];
