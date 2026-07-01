import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { pageLinks, siteConfig } from "@/data/site";
import { aboutPageJsonLd, breadcrumbJsonLd, creativeWorkJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "關於本網站｜台北車站住宿推薦指南",
  description:
    "了解台北車站住宿推薦指南如何整理自由行、親子、商務與轉乘旅客選擇北車住宿時會用到的資訊。",
};

const title = "關於本網站";
const description =
  "本網站整理台北車站附近住宿的選擇條件，協助讀者依行程、旅客類型與交通需求判斷住宿方向。";

const jsonLd = [
  aboutPageJsonLd("/about", title, description),
  creativeWorkJsonLd("/about"),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "關於本網站", path: "/about" },
  ]),
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="About"
        title={title}
        description="台北車站住宿推薦指南整理自由行、親子、商務與轉乘旅客在選擇北車住宿時會比較的交通、房型、設施、生活機能與常見問題。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            {siteConfig.siteName}
            以「台北車站住宿怎麼選」為核心，將住宿需求拆成旅客類型、交通距離、房型需求、設施條件、附近景點與常見問題，讓讀者能依自己的行程快速篩選重點。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">網站定位</h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              本站是台北車站住宿主題的資訊整理網站，不是特定旅宿的官方網站。內容重點放在選擇住宿時該看哪些條件，而不是推薦某一間可直接預訂的住宿。
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">整理方式</h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              住宿資訊依自由行、親子、商務、交通轉乘與預算需求分頁整理，並搭配房型、設施、交通、附近景點與 FAQ，方便不同旅客快速找到相關內容。
            </p>
          </article>
        </section>

        <section className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-semibold tracking-normal">網站說明</h2>
          <p className="mt-3 text-base leading-8 text-zinc-700">
            {siteConfig.transparencyDetail}
            本站內容可作為住宿規劃參考；實際住宿條件仍應以旅宿官方資訊或合法訂房平台公告為準。
          </p>
        </section>

        <RelatedLinks
          links={pageLinks.filter((link) =>
            ["/methodology", "/data-source", "/taipei-main-station-hotels", "/faq"].includes(
              link.href
            )
          )}
        />
      </div>
    </>
  );
}
