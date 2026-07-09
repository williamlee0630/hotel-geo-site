export type SupportedLocale = "zh" | "en" | "ja";

export const localePaths: Record<SupportedLocale, string> = {
  zh: "/",
  en: "/en",
  ja: "/ja",
};

export const localeLabels: Record<SupportedLocale, string> = {
  zh: "繁中",
  en: "English",
  ja: "日本語",
};
