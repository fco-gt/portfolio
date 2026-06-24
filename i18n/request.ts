import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const safeLocale = requested ?? routing.defaultLocale;
  
  const isSupported = (routing.locales as readonly string[]).includes(safeLocale);
  const locale = isSupported ? safeLocale : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
    timeZone: "America/Santiago",
  };
});
