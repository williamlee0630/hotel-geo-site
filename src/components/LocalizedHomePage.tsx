import Link from "next/link";
import { HotelRecommender } from "@/components/HotelRecommender";
import { HotelRecommendationList } from "@/components/HotelRecommendationList";
import { LiveInfoTicker } from "@/components/LiveInfoTicker";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import {
  authorityInfoPath,
  liveInfoUpdatesEn,
  liveInfoUpdatesJa,
} from "@/data/authorityInfo";
import type { LocalizedHomeContent } from "@/data/localizedHome";
import { localeLabels, localePaths } from "@/data/locales";

type LocalizedHomePageProps = {
  content: LocalizedHomeContent;
};

export function LocalizedHomePage({ content }: LocalizedHomePageProps) {
  const updates = content.locale === "en" ? liveInfoUpdatesEn : liveInfoUpdatesJa;

  return (
    <>
      <section
        className="relative flex min-h-[72svh] items-end bg-cover bg-center px-5 pb-14 pt-24 text-white md:px-8"
        lang={content.htmlLang}
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(12, 28, 33, 0.88), rgba(12, 28, 33, 0.46)), url('https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {(["zh", "en", "ja"] as const).map((locale) => (
              <Link
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition ${
                  locale === content.locale
                    ? "bg-amber-300 text-zinc-950"
                    : "bg-white/15 text-white hover:bg-white hover:text-zinc-950"
                }`}
                href={localePaths[locale]}
                hrefLang={locale === "zh" ? "zh-Hant" : locale}
                key={locale}
              >
                {localeLabels[locale]}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
            {content.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-semibold tracking-normal md:text-7xl">
            {content.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-zinc-100 md:text-xl">
            {content.hero.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="rounded-md bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
              href={`${content.path}#hotel-recommendation-list`}
            >
              {content.hero.primaryCta}
            </Link>
            <Link
              className="rounded-md border border-white/70 px-5 py-3 text-center text-sm font-semibold transition hover:bg-white hover:text-zinc-950"
              href={`${content.path}#localized-faq`}
            >
              {content.hero.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <LiveInfoTicker
        href={authorityInfoPath}
        locale={content.locale}
        updates={updates}
      />

      <section className="px-5 py-12 md:px-8" lang={content.htmlLang}>
        <div className="mx-auto max-w-7xl">
          <SummaryBox title={content.summaryTitle}>
            <ul className="grid gap-2">
              {content.summaryPoints.map((point) => (
                <li className="flex gap-3" key={point}>
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-teal-700" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </SummaryBox>

          <HotelRecommendationList locale={content.locale} />

          <HotelRecommender locale={content.locale} />

          <section className="mt-12">
            <h2 className="text-3xl font-semibold tracking-normal text-zinc-950">
              {content.travelerSection.title}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-8 text-zinc-700">
              {content.travelerSection.description}
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {content.travelerSection.links.map((link) => (
                <Link
                  className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-teal-500"
                  href={link.href}
                  key={link.label}
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
              {content.selectionSection.title}
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
              {content.selectionSection.points.map((point) => (
                <article
                  className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
                  key={point.title}
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
                {content.conditionSection.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {content.conditionSection.description}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {content.conditionSection.links.map((link) => (
                  <Link
                    className="rounded-md bg-zinc-50 px-4 py-3 text-sm font-semibold text-teal-900 transition hover:bg-teal-50"
                    href={link.href}
                    key={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
              id="localized-faq"
            >
              <h2 className="text-2xl font-semibold tracking-normal">
                {content.faqSection.title}
              </h2>
              <div className="mt-5 space-y-4">
                {content.faqSection.items.map((item) => (
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
                href={`${content.path}#hotel-recommender`}
              >
                {content.faqSection.linkLabel}
              </Link>
            </div>
          </section>

          <section className="mt-12 rounded-lg border border-teal-100 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">
              {content.aboutSection.title}
            </h2>
            <p className="mt-3 max-w-4xl text-base leading-8 text-zinc-700">
              {content.aboutSection.description}
            </p>
          </section>

          <RelatedLinks title={content.relatedTitle} links={content.relatedLinks} />
        </div>
      </section>
    </>
  );
}
