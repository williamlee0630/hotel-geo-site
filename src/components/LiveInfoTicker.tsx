"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { LiveInfoUpdate } from "@/data/authorityInfo";

type LiveInfoTickerProps = {
  href: string;
  updates: LiveInfoUpdate[];
};

const dateFormatter = new Intl.DateTimeFormat("zh-TW", {
  timeZone: "Asia/Taipei",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function LiveInfoTicker({ href, updates }: LiveInfoTickerProps) {
  const [syncedAt, setSyncedAt] = useState("同步中");

  useEffect(() => {
    const updateTime = () => {
      setSyncedAt(dateFormatter.format(new Date()));
    };

    updateTime();
    const timer = window.setInterval(updateTime, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  const tickerItems = useMemo(() => {
    const items = updates.map(
      (item) => `${item.source}｜${item.title}｜${item.description}`
    );

    return [...items, ...items];
  }, [updates]);

  return (
    <section className="bg-teal-800 text-white" aria-label="即時更新資訊">
      <Link
        className="group block overflow-hidden transition hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
        href={href}
        aria-label="前往即時旅遊資訊來源頁"
      >
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-5 py-3 md:px-8">
          <span className="shrink-0 rounded-md bg-white/15 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-amber-100">
            即時更新
          </span>
          <div className="relative min-w-0 flex-1 overflow-hidden">
            <div className="live-info-ticker__edge live-info-ticker__edge--left" />
            <div className="live-info-ticker__edge live-info-ticker__edge--right" />
            <div className="live-info-ticker__track whitespace-nowrap text-sm font-semibold md:text-base">
              <span className="mx-6 inline-flex items-center gap-2">
                官方來源同步時間：{syncedAt}
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
            查看來源
          </span>
        </div>
      </Link>
    </section>
  );
}
