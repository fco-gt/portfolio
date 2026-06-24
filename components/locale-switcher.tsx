"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "en", name: "English", flag: "🇺🇸" },
  ];

  const currentLang = languages.find((l) => l.code === locale);
  const label = currentLang?.code.toUpperCase() ?? "ES";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 h-9 native-none">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <span className="hidden sm:inline">{label}</span>
          <span className="inline sm:hidden">{label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[150px] backdrop-blur-xl bg-[#0c1609]/80 border-[#3c4b35] shadow-lg"
      >
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => {
            startTransition(() => {
              document.cookie = `NEXT_LOCALE=${value}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
              router.replace(pathname, { locale: value });
            });
          }}
        >
          {languages.map((lang) => (
            <DropdownMenuRadioItem
              key={lang.code}
              value={lang.code}
              className="flex items-center justify-between cursor-pointer hover:bg-[#39ff14]/10 focus:bg-[#39ff14]/10"
            >
              <div className="flex items-center gap-2">
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
