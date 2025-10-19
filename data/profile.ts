export const profile = {
  name: "Francisco Gutierrez",
  title: "Full Stack Developer",
  tagline: "TypeScript, React, Next.js — SEO & Performance",
  bio: "FullStack Developer specializing in TypeScript, React, Next.js, and Node.js, with proven experience in SEO optimization and UI/UX improvements. Experienced delivering websites and SaaS solutions with strong Core Web Vitals, scalable architectures, and cloud deployment pipelines. Recently gained local NZ experience enhancing SEO and frontend performance for a healthcare provider in Auckland.",
  email: "fco.gutierrez1227@gmail.com",
  location: "Auckland, New Zealand",
  availability: "Open to opportunities",
  social: {
    github: "https://github.com/fco-gt",
    linkedin: "https://www.linkedin.com/in/francisco-guti%C3%A9rrez-1b7580254",
  },
  resume: "/resume.pdf",
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
    context: "Backend and frontend development with ES6+ features",
    icon: Code2,
  },
  {
    name: "HTML",
    context: "Semantic markup and accessibility best practices",
    icon: FileText,
  },
  {
    name: "CSS",
    context: "Responsive design and modern layout techniques (Flexbox, Grid)",
    icon: FileCode,
  },
  {
    name: "TypeScript",
    context: "Scalable full-stack applications with typed APIs",
    icon: FileJson,
  },
  {
    name: "React",
    context: "Component-driven UI with hooks and modern patterns",
    icon: Box,
  },
  {
    name: "Next.js",
    context: "Server-side rendering, static generation, and API routes",
    icon: Server,
  },
  {
    name: "Node.js",
    context: "RESTful APIs with Express and microservices architecture",
    icon: Server,
  },
  {
    name: "Astro",
    context: "Static site generation with performance optimization",
    icon: FileCode,
  },
  {
    name: "PostgreSQL",
    context: "Relational database design and optimization",
    icon: Database,
  },
  {
    name: "MongoDB",
    context: "Document-based data modeling and aggregation",
    icon: Database,
  },
  {
    name: "Tailwind CSS",
    context: "Utility-first styling with responsive design",
    icon: Wind,
  },
  {
    name: "GraphQL",
    context: "Type-safe APIs with modern query language",
    icon: Network,
  },
  {
    name: "SEO",
    context: "On-page optimization and Core Web Vitals improvement",
    icon: Search,
  },
  {
    name: "CI/CD",
    context: "Automated deployment pipelines with Vercel and Git",
    icon: GitBranch,
  },
  {
    name: "React Native",
    context: "Cross-platform mobile app development",
    icon: Smartphone,
  },
];

export const experience = [
  {
    id: 1,
    company: "Max and Beresford Orthodontists",
    position: "Frontend Developer & SEO Specialist",
    period: "Sep 2025 — Oct 2025",
    location: "Auckland, New Zealand (Hybrid)",
    description:
      "Enhanced UI/UX and SEO performance for healthcare provider's website, improving patient reach and site performance.",
    achievements: [
      "Improved UI/UX using HTML, CSS, and JavaScript",
      "Conducted comprehensive SEO optimization including metadata and content structure",
      "Enhanced Google search visibility and site speed, boosting patient reach",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "SEO"],
  },
  {
    id: 2,
    company: "Psiquesanacion",
    position: "FullStack Developer",
    period: "Jul 2025 — Aug 2025",
    location: "Santiago, Chile (Remote)",
    description:
      "Migrated legacy website to modern stack, built custom blog system, and automated deployment pipeline.",
    achievements: [
      "Migrated legacy site to Astro, improving Lighthouse SEO score by 90%",
      "Built custom blog publishing system with MongoDB and Cloudinary integration",
      "Automated deployment with Vercel and GitHub CI/CD pipeline",
    ],
    technologies: ["Astro", "MongoDB", "Cloudinary", "Vercel", "GitHub"],
  },
  {
    id: 3,
    company: "BrandBits Agency",
    position: "Web Development Intern",
    period: "Feb 2025 — May 2025",
    location: "Santiago, Chile (Hybrid)",
    description:
      "Implemented marketing features and maintained client communication while debugging integration issues.",
    achievements: [
      "Implemented marketing features and SEO improvements including meta tags and alt text",
      "Debugged chatbot webhook integration using HTML and JavaScript",
      "Maintained direct client communication and project coordination",
    ],
    technologies: ["HTML", "JavaScript", "SEO", "Webhooks"],
  },
  {
    id: 4,
    company: "Eficontable",
    position: "Frontend Developer",
    period: "Jan 2025 — Feb 2025",
    location: "Santiago, Chile (Remote)",
    description:
      "Built responsive corporate website with performance optimizations and modern deployment practices.",
    achievements: [
      "Built responsive corporate website using Astro framework",
      "Applied performance and SEO optimizations, improved Core Web Vitals",
      "Deployed with Vercel and Git for CI/CD implementation",
    ],
    technologies: ["Astro", "Responsive Design", "SEO", "Vercel", "Git"],
  },
  {
    id: 5,
    company: "Agis",
    position: "FullStack Developer",
    period: "Sep 2024 — Jan 2025",
    location: "Santiago, Chile (Remote)",
    description:
      "Developed e-commerce platform with WooCommerce integration and implemented efficient deployment processes.",
    achievements: [
      "Developed e-commerce platform integrated with WooCommerce/WordPress API",
      "Implemented CI/CD on Vercel, reducing deployment time by 70%",
      "Improved on-page SEO and content structure optimization",
    ],
    technologies: ["WooCommerce", "WordPress API", "Vercel", "SEO", "CI/CD"],
  },
];

export const projects = [
  {
    id: 1,
    title: "AutoAttendance - FullStack System",
    description:
      "Comprehensive attendance management system featuring React Native mobile app (private academic project), Next.js web application, and Node.js microservices backend. Includes QR code check-in, remote check-in with geofencing, and secure JWT authentication. The mobile app remains private due to academic requirements.",
    image: "/autoattendance.png",
    technologies: [
      "React Native",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "JWT",
      "Microservices",
    ],
    role: "Full Stack Developer",
    links: {
      webApp: "https://github.com/fco-gt/autoattendance-frontend",
      backend: "https://github.com/fco-gt/autoattendance-services",
      mobileApp: "Private - Academic Project",
    },
    featured: true,
  },
  {
    id: 2,
    title: "E-commerce Platform with Next.js",
    description:
      "Full-stack e-commerce web application built with N-Tier architecture. Features complete product catalog, checkout system, and user management with Django REST API backend.",
    image: "/master-bikes.png",
    technologies: ["Next.js", "Django", "REST API", "PostgreSQL", "Vercel"],
    role: "Full Stack Developer",
    links: {
      github: "https://github.com/fco-gt/bikes-ecommerce",
      live: "https://master-bikes.vercel.app/",
    },
    featured: true,
  },
  {
    id: 3,
    title: "Mankekito - Verified Discord Bot",
    description:
      "Discord bot built at age 15 that scaled to 260+ servers and 10,000+ users. Achieved official Discord verification and Top.gg listing. Built with Node.js and MongoDB for robust user management and features.",
    image: "/mankekito.png",
    technologies: ["Node.js", "MongoDB", "Discord.js", "JavaScript"],
    role: "Backend Developer",
    links: {
      live: "https://top.gg/bot/758059320238931978",
      status: "update-notice" as const
    },
    featured: true,
  },
];
