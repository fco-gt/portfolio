import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francisco Gutierrez — Full Stack Developer",
  description:
    "Full Stack Developer specializing in TypeScript, React, and Next.js. Building scalable, performant web applications with modern technologies.",
  keywords: [
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Francisco Gutierrez" }],
  creator: "Francisco Gutierrez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fco-gt.vercel.app",
    title: "Francisco Gutierrez — Full Stack Developer",
    description:
      "Full Stack Developer specializing in TypeScript, React, and Next.js. Building scalable, performant web applications.",
    siteName: "Francisco Gutierrez Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francisco Gutierrez — Full Stack Developer",
    description:
      "Full Stack Developer specializing in TypeScript, React, and Next.js. Building scalable, performant web applications.",
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
