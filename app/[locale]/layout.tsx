import type { ReactNode } from "react";
import type { Metadata } from "next";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { Analytics } from "@vercel/analytics/next";
import { Montserrat, Inter, JetBrains_Mono } from "next/font/google";
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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
});

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} ${inter.variable} ${jetBrainsMono.variable} scroll-smooth dark`}
    >
      <body className="antialiased">
        <IntlProvider locale={locale} messages={messages} timeZone="America/Santiago">
          {children}
        </IntlProvider>
        <Analytics />
      </body>
    </html>
  );
}
