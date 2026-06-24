"use client";

import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  locale: string;
  messages: Record<string, unknown>;
  timeZone: string;
};

export function IntlProvider({ children, locale, messages, timeZone }: Props) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone={timeZone}>
      {children}
    </NextIntlClientProvider>
  );
}
