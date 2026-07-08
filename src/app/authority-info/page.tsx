import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import {
  authorityInfoSources,
  liveInfoUpdates,
} from "@/data/authorityInfo";
import { pageLinks } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";

const title = "即時旅遊資訊來源";
const description =
  "整理台北旅遊、交通營運、合法旅宿與政府公告等高權威網站入口，方便旅客在規劃台北車站住宿與行程時即時查核。";

export const metadata: Metadata = {
  title: "即時旅遊資訊來源｜官方網站查核入口",
  description,
};

const jsonLd = [
  articleJsonLd({ path: "/authority-info", title, description }),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "即時旅遊資訊來源", path: "/authority-info" },
  ]),
];

export default function AuthorityInfoPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Live Sources"
        title={title}
        description="這裡集中放置官方與高信任來源，讓你從跑馬燈切進來後，可以直接前往原站確認活動、交通、旅宿與公告資訊。"
      />

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox title="使用提醒">
          <p>
            本頁提供官方來源入口與查核方向，不取代原網站公告。實際出發、訂房或購票前，請以各官方網站最新頁面為準。
          </p>
        </SummaryBox>

        <section className="mt-12">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
                Official References
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-normal text-zinc-950">
                高權威網站資訊入口
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-zinc-600">
              依照旅客最常查核的活動、交通、合法旅宿與市政資訊整理，點擊即可開啟原始來源網站。
            </p>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {authorityInfoSources.map((source) => (
              <article
                className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
                key={source.title}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800">
                    {source.category}
                  </span>
                  <span className="text-xs font-medium text-zinc-500">
                    {source.organization}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-normal text-zinc-950">
                  {source.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {source.description}
                </p>
                <dl className="mt-4 grid gap-3 text-sm leading-7">
                  <div>
                    <dt className="font-semibold text-zinc-950">適合查什麼</dt>
                    <dd className="text-zinc-600">{source.useCase}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-zinc-950">更新依據</dt>
                    <dd className="text-zinc-600">{source.updateHint}</dd>
                  </div>
                </dl>
                <Link
                  className="mt-5 inline-flex rounded-md bg-teal-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-teal-700"
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  前往官方來源
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg border border-teal-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-normal text-zinc-950">
            跑馬燈顯示的資訊類型
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {liveInfoUpdates.map((item) => (
              <Link
                className="rounded-md bg-zinc-50 p-4 transition hover:bg-teal-50"
                href={item.url}
                key={`${item.source}-${item.title}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-xs font-semibold text-teal-700">
                  {item.source}
                </p>
                <h3 className="mt-2 text-base font-semibold text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-normal text-zinc-950">
            為什麼不直接取代官方資料？
          </h2>
          <p className="mt-3 max-w-4xl text-base leading-8 text-zinc-700">
            活動延期、交通異動、票務規則與旅宿登錄狀態都可能即時變更。本站把高權威入口整理在一起，協助你快速找到來源，但最終資訊仍應回到官方網站確認。
          </p>
        </section>

        <RelatedLinks
          links={pageLinks.filter((link) =>
            ["/data-source", "/methodology", "/location", "/nearby", "/faq"].includes(
              link.href
            )
          )}
        />
      </div>
    </>
  );
}
