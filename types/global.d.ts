type Messages = typeof import("@/messages/es.json");

declare module "next-intl" {
  interface AppConfig {
    Messages: Messages;
  }
}
