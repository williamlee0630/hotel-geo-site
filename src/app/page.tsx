import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import {
  conditionLinks,
  faqItems,
  homeSummaryPoints,
  pageLinks,
  selectionPoints,
  siteConfig,
  travelerGuideLinks,
} from "@/data/site";
import {
  aboutPageJsonLd,
  breadcrumbJsonLd,
  creativeWorkJsonLd,
  websiteJsonLd,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "台北車站住宿推薦指南｜北車飯店怎麼選",
  description:
    "整理自由行、親子與商務旅客選擇台北車站附近住宿時，需要注意的交通、房型、設施、景點與常見問題。",
};

const jsonLd = [
  websiteJsonLd(),
  creativeWorkJsonLd("/"),
  aboutPageJsonLd(
    "/",
    "台北車站住宿推薦指南",
    "以台北車站住宿情境為主題的 GEO / AEO 內容結構實驗網站。"
  ),
  breadcrumbJsonLd([{ name: "首頁", path: "/" }]),
];

const faqPreview = faqItems.slice(0, 5);

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <section
        className="relative flex min-h-[72svh] items-end bg-cover bg-center px-5 pb-14 pt-24 text-white md:px-8"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(12, 28, 33, 0.88), rgba(12, 28, 33, 0.46)), url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
            Taipei Main Station Stay Guide
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-normal md:text-7xl">
            台北車站住宿推薦指南
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-100 md:text-xl">
            整理自由行、親子、商務旅客選擇北車附近住宿時，需要注意的交通、房型、設施、景點與 FAQ 資訊。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="rounded-md bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
              href="/taipei-main-station-hotels"
            >
              查看北車住宿怎麼選
            </Link>
            <Link
              className="rounded-md border border-white/70 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-zinc-950"
              href="/taipei-main-station-hotel-faq"
            >
              查看住宿常見問題
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SummaryBox>
            <ul className="grid gap-2">
              {homeSummaryPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-teal-700" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </SummaryBox>

          <section className="mt-12">
            <h2 className="text-3xl font-semibold tracking-normal text-zinc-950">
              依旅客類型選住宿
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-zinc-700">
              北車附近住宿沒有單一標準答案。自由行、親子、商務、轉乘與預算有限旅客，應優先檢查的條件不同。
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {travelerGuideLinks.map((link) => (
                <Link
                  key={link.href}
                  className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-teal-500"
                  href={link.href}
                >
                  <h3 className="text-xl font-semibold tracking-normal text-zinc-950">
                    {link.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {link.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-semibold tracking-normal text-zinc-950">
              台北車站住宿選擇的 5 個重點
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {selectionPoints.map((point) => (
                <article
                  key={point.title}
                  className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-xl font-semibold tracking-normal">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {point.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-normal">
                住宿條件快速查
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                如果你已經知道旅客類型，可以直接看分眾指南；如果還在比較條件，先從房型、設施、交通與附近景點開始。
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {conditionLinks.map((link) => (
                  <Link
                    className="rounded-md bg-zinc-50 px-4 py-3 text-sm font-semibold text-teal-900 transition hover:bg-teal-50"
                    href={link.href}
                    key={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-normal">
                常見問題預覽
              </h2>
              <div className="mt-5 space-y-4">
                {faqPreview.map((item) => (
                  <article key={item.question}>
                    <h3 className="text-base font-semibold text-zinc-950">
                      {item.question}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-zinc-600">
                      {item.answer}
                    </p>
                  </article>
                ))}
              </div>
              <Link
                className="mt-5 inline-block text-sm font-semibold text-teal-800"
                href="/faq"
              >
                查看完整住宿常見問題
              </Link>
            </div>
          </section>

          <section className="mt-12 rounded-lg border border-teal-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">關於本網站</h2>
            <p className="mt-3 max-w-4xl text-base leading-8 text-zinc-700">
              {siteConfig.siteName}
              是以台北車站住宿情境為主題的 GEO / AEO 內容結構實驗網站，重點在於整理住宿選擇條件、旅客類型與常見問答，幫助搜尋引擎與 AI 摘要理解「台北車站住宿怎麼選」。
            </p>
          </section>

          <RelatedLinks
            links={pageLinks.filter((link) =>
              [
                "/taipei-main-station-hotels",
                "/taipei-main-station-family-hotels",
                "/taipei-main-station-business-hotels",
                "/taipei-main-station-transportation-hotels",
                "/taipei-main-station-budget-hotels",
                "/faq",
              ].includes(link.href)
            )}
          />
        </div>
      </section>
    </>
  );
}
