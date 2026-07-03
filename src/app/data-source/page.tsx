import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { pageLinks, siteConfig } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "資料來源與網站說明｜台北車站住宿指南",
  description:
    "說明本網站的內容範圍、使用方式與資訊限制；本站不提供訂房、價格、電話、地址或評論。",
};

const title = "資料來源與網站說明";
const description =
  "本網站整理台北車站住宿選擇資訊，內容可作為行程規劃參考，但不提供訂房或特定旅宿交易資訊。";

const jsonLd = [
  articleJsonLd({ path: "/data-source", title, description }),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "資料來源與網站說明", path: "/data-source" },
  ]),
];

export default function DataSourcePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Data Source"
        title={title}
        description="這頁集中說明本站內容範圍、資訊限制，以及使用住宿指南時應注意的事項。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>{siteConfig.transparencyDetail}</p>
        </SummaryBox>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "網站內容定位",
              description:
                "本網站是台北車站住宿主題的資訊整理網站，重點在於說明住宿選擇條件與常見問題。",
            },
            {
              title: "資訊整理範圍",
              description:
                "內容依旅客類型、交通距離、房型需求、設施條件、附近景點與 FAQ 整理，協助讀者建立比較住宿的方向。",
            },
            {
              title: "不提供的資訊",
              description:
                "本站不提供訂房服務、即時價格、電話、地址、評論、星級評分、旅客見證或可入住承諾。",
            },
            {
              title: "實際預訂前請確認",
              description:
                "若要實際入住，請至合法訂房平台或旅宿官方管道確認商家資訊、地址、聯絡方式、訂房條款、隱私權政策與可驗證評論來源。",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-normal">
                {item.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {item.description}
              </p>
            </article>
          ))}
        </section>

        <RelatedLinks
          links={pageLinks.filter((link) =>
            ["/methodology", "/about", "/taipei-main-station-hotels", "/faq"].includes(
              link.href
            )
          )}
        />
      </div>
    </>
  );
}
