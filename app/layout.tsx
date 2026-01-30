import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francisco Gutierrez — Desarrollador Full Stack",
  description:
    "Desarrollador Full Stack especializado en TypeScript, React y Next.js. Construyo aplicaciones web escalables y de alto rendimiento con tecnologías modernas.",
  keywords: [
    "Desarrollador Full Stack",
    "TypeScript",
    "React",
    "Next.js",
    "Desarrollo Web",
    "Ingeniero de Software",
  ],
  authors: [{ name: "Francisco Gutierrez" }],
  creator: "Francisco Gutierrez",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://fco-gt.vercel.app",
    title: "Francisco Gutierrez — Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en TypeScript, React y Next.js. Construyo aplicaciones web escalables y de alto rendimiento.",
    siteName: "Portafolio de Francisco Gutierrez",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Gutierrez — Desarrollador Full Stack",
    description:
      "Desarrollador Full Stack especializado en TypeScript, React y Next.js. Construyo aplicaciones web escalables y de alto rendimiento.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
