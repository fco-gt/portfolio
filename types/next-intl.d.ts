/* eslint-disable */

// Type augmentation to bypass use-intl/core.d.ts resolution issues
// The actual exports exist at runtime - this provides the static types.

import type {
  useTranslations as UseTranslationsFn,
  useFormatter as UseFormatterFn,
} from "use-intl";

declare module "next-intl" {
  export function useTranslations(
    namespace?: string
  ): ReturnType<UseTranslationsFn>;
  export function useFormatter(): ReturnType<UseFormatterFn>;
  export function useLocale(): string;
  export function useNow(opts?: { updateInterval?: number }): Date;
  export function useTimeZone(): string | undefined;
  export function useMessages(): Record<string, unknown>;
  export function hasLocale(
    routing: { locales: readonly string[] },
    locale: string
  ): boolean;
  export const NextIntlClientProvider: import("react").FC<{
    locale?: string;
    messages?: Record<string, unknown>;
    now?: Date;
    timeZone?: string;
    formats?: Partial<Intl.Formats>;
    children?: import("react").ReactNode;
  }>;
}
