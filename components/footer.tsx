"use client";

import { profile } from "@/data/profile";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  const tc = useTranslations("common");

  return (
    <footer className="bg-[#071105] border-t border-[#3c4b35] py-12">
      <div className="max-w-[1280px] mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[#dae6d0] tracking-tighter">
              FCO-GT
            </h2>
            <div className="hidden md:block w-px h-6 bg-[#3c4b35]"></div>
            <p className="text-[#baccb0] text-sm opacity-60">
              © {new Date().getFullYear()} Francisco Gutierrez. {t("copyright")}
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://github.com/fco-gt/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps text-[10px] text-[#baccb0] hover:text-[#39ff14] transition-all hover:underline underline-offset-4"
            >
              {tc("repository")}
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="label-caps text-[10px] text-[#baccb0] hover:text-[#39ff14] transition-all hover:underline underline-offset-4"
            >
              {tc("linkedin")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
