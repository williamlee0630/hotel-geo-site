"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { LiveInfoUpdate } from "@/data/authorityInfo";
import type { SupportedLocale } from "@/data/locales";

type LiveInfoTickerProps = {
  href: string;
  updates: LiveInfoUpdate[];
  locale?: SupportedLocale;
};

const localeConfig = {
  zh: {
    htmlLang: "zh-Hant",
    dateLocale: "zh-TW",
    loading: "同步中",
    aria: "即時更新資訊",
    linkAria: "前往即時旅遊資訊來源頁",
    badge: "即時更新",
    syncedAt: "官方來源同步時間",
    cta: "查看來源",
  },
  en: {
    htmlLang: "en",
    dateLocale: "en-US",
    loading: "Syncing",
    aria: "Live travel information updates",
    linkAria: "Go to official travel information sources",
    badge: "Live Update",
    syncedAt: "Official source sync time",
    cta: "View Sources",
  },
  ja: {
    htmlLang: "ja",
    dateLocale: "ja-JP",
    loading: "同期中",
    aria: "リアルタイム旅行情報",
    linkAria: "公式旅行情報ソースへ移動",
    badge: "更新情報",
    syncedAt: "公式情報の同期時刻",
    cta: "情報源を見る",
  },
} satisfies Record<SupportedLocale, Record<string, string>>;

export function LiveInfoTicker({
  href,
  updates,
  locale = "zh",
}: LiveInfoTickerProps) {
  const t = localeConfig[locale];
  const [syncedAt, setSyncedAt] = useState(t.loading);

  useEffect(() => {
    const dateFormatter = new Intl.DateTimeFormat(t.dateLocale, {
      timeZone: "Asia/Taipei",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const updateTime = () => {
      setSyncedAt(dateFormatter.format(new Date()));
    };

    updateTime();
    const timer = window.setInterval(updateTime, 60_000);

    return () => window.clearInterval(timer);
  }, [t.dateLocale]);

  const tickerItems = useMemo(() => {
    const items = updates.map(
      (item) => `${item.source}｜${item.title}｜${item.description}`
    );

    return [...items, ...items];
  }, [updates]);

  return (
    <section
      className="bg-teal-800 text-white"
      aria-label={t.aria}
      lang={t.htmlLang}
    >
      <Link
        className="group block overflow-hidden transition hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
        href={href}
        aria-label={t.linkAria}
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 md:px-8">
          <span className="shrink-0 rounded-md bg-white/15 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-amber-100">
            {t.badge}
          </span>
          <div className="relative min-w-0 flex-1 overflow-hidden">
            <div className="live-info-ticker__edge live-info-ticker__edge--left" />
            <div className="live-info-ticker__edge live-info-ticker__edge--right" />
            <div className="live-info-ticker__track whitespace-nowrap text-sm font-semibold md:text-base">
              <span className="mx-6 inline-flex items-center gap-2">
                {t.syncedAt}: {syncedAt}
              </span>
              {tickerItems.map((item, index) => (
                <span className="mx-6 inline-flex items-center gap-2" key={`${item}-${index}`}>
                  <span aria-hidden="true">|</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <span className="hidden shrink-0 rounded-md bg-white px-3 py-1 text-xs font-semibold text-teal-900 transition group-hover:bg-amber-200 md:inline-flex">
            {t.cta}
          </span>
        </div>
      </Link>
    </section>
  );
}
