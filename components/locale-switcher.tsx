"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { Languages } from "lucide-react";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const otherLocale = locale === "es" ? "en" : "es";
  const label = otherLocale === "en" ? "EN" : "ES";

  function switchLocale() {
    startTransition(() => {
      document.cookie = `NEXT_LOCALE=${otherLocale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
      router.replace(pathname, { locale: otherLocale });
    });
  }

  return (
    <button
      onClick={switchLocale}
      disabled={isPending}
      className="flex items-center gap-1.5 text-muted hover:text-primary transition-colors text-sm font-medium"
      aria-label={`Switch to ${otherLocale === "en" ? "English" : "Spanish"}`}
    >
      <Languages className="w-4 h-4" />
      <span>{label}</span>
    </button>
  );
}
