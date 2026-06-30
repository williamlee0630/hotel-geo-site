import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import {
  facilities,
  pageLinks,
  primaryFeatures,
  roomTypes,
  siteConfig,
} from "@/data/site";

export const metadata: Metadata = {
  title: "首頁",
  description:
    "晴川行館首頁，整理台北車站附近 Demo 飯店的地點摘要、主要特色、房型入口、交通入口、FAQ 與附近景點。",
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["Hotel", "LodgingBusiness"],
    name: siteConfig.hotelName,
    url: siteConfig.baseUrl,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.demoAddress,
      addressLocality: "台北市",
      addressRegion: "台北",
      addressCountry: "TW",
    },
    amenityFeature: facilities.map((facility) => ({
      "@type": "LocationFeatureSpecification",
      name: facility.title,
      value: true,
      description: facility.description,
    })),
    additionalProperty: {
      "@type": "PropertyValue",
      name: "Demo notice",
      value: siteConfig.demoNotice,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.baseUrl,
    inLanguage: "zh-Hant",
    description: siteConfig.description,
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <section
        className="relative flex min-h-[78svh] items-end bg-cover bg-center px-5 pb-16 pt-24 text-white md:px-8"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(15, 23, 42, 0.82), rgba(15, 23, 42, 0.42)), url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
            Demo Hotel near Taipei Main Station
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-normal md:text-7xl">
            {siteConfig.hotelName}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-9 text-zinc-100 md:text-xl">
            {siteConfig.tagline}。本網站為示範飯店官網如何清楚整理位置、房型、設施與常見問題。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="rounded-md bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
              href="/rooms"
            >
              查看房型
            </Link>
            <Link
              className="rounded-md border border-white/70 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-zinc-950"
              href="/location"
            >
              查看交通
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SummaryBox>
            <p>{siteConfig.homeSummary}</p>
            <p className="mt-3 text-sm text-zinc-500">{siteConfig.demoNotice}</p>
          </SummaryBox>

          <section className="mt-12">
            <h2 className="text-3xl font-semibold tracking-normal text-zinc-950">
              主要特色
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="text-xl font-semibold tracking-normal">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-12 grid gap-5 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-normal">房型入口</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                Demo 房型包含標準雙人房、豪華雙人房、家庭房與商務單人房，方便搜尋者比較人數、坪數、床型與適合對象。
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {roomTypes.map((room) => (
                  <li key={room.name} className="rounded-md bg-zinc-50 p-3 text-sm">
                    <span className="font-semibold">{room.name}</span>
                    <span className="mt-1 block text-zinc-600">{room.occupancy}</span>
                  </li>
                ))}
              </ul>
              <Link className="mt-5 inline-block text-sm font-semibold text-teal-800" href="/rooms">
                前往房型介紹
              </Link>
            </div>

            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-normal">交通、FAQ 與附近景點</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                為了讓搜尋引擎與 AI 摘要更容易理解，本網站將交通問答、常見問題與附近景點拆成獨立頁面，並在首頁提供清楚入口。
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <Link className="rounded-md bg-teal-900 px-4 py-3 text-center text-sm font-semibold text-white" href="/location">
                  交通方式
                </Link>
                <Link className="rounded-md bg-teal-900 px-4 py-3 text-center text-sm font-semibold text-white" href="/faq">
                  FAQ
                </Link>
                <Link className="rounded-md bg-teal-900 px-4 py-3 text-center text-sm font-semibold text-white" href="/nearby">
                  附近景點
                </Link>
              </div>
            </div>
          </section>

          <RelatedLinks links={pageLinks} />
        </div>
      </section>
    </>
  );
}
