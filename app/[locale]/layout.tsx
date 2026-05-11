import type { ReactNode } from "react";
import type { Metadata } from "next";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import { IntlProvider } from "@/components/intl-provider";
import "../globals.css";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
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
      locale: locale === "es" ? "es_ES" : "en_US",
      url: "https://fco-gt.vercel.app",
      title: t("ogTitle"),
      description: t("ogDescription"),
      siteName: t("ogSiteName"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
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
}

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-display",
});

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${dmSans.variable} ${jetBrainsMono.variable} scroll-smooth dark`}>
      <body className="antialiased">
        <IntlProvider locale={locale} messages={messages}>
          {children}
        </IntlProvider>
        <Analytics />
      </body>
    </html>
  );
}
