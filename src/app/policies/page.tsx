import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { pageLinks, siteConfig } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "網站使用說明｜台北車站住宿指南",
  description:
    "說明台北車站住宿指南的內容用途、資訊限制與使用提醒；本站不提供訂房或特定旅宿交易資訊。",
};

const title = "網站使用說明";
const description =
  "本站提供住宿選擇條件整理，不提供訂房、價格、電話、地址或評論。";

const jsonLd = [
  articleJsonLd({ path: "/policies", title, description }),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: title, path: "/policies" },
  ]),
];

export default function PoliciesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Site Policy"
        title={title}
        description="這裡說明本站的內容用途與資訊限制，幫助讀者正確使用台北車站住宿指南。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>{siteConfig.transparencyDetail}</p>
        </SummaryBox>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            {
              title: "內容用途",
              description:
                "本站用於整理台北車站住宿選擇條件，協助讀者比較交通、房型、設施、景點與不同旅客情境。",
            },
            {
              title: "不提供訂房服務",
              description:
                "本站沒有即時房價、訂房連結、電話、地址、評論、星級或旅客見證。",
            },
            {
              title: "資訊判斷方式",
              description:
                "內容以旅客類型、交通、房型、設施、景點與 FAQ 說明住宿選擇邏輯，不代表特定旅宿可入住或可預訂。",
            },
            {
              title: "實際使用提醒",
              description:
                "若要預訂住宿，請以合法訂房平台或旅宿官方公告的地址、價格、條款、政策與評價為準。",
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
            ["/data-source", "/methodology", "/about", "/taipei-main-station-hotels"].includes(
              link.href
            )
          )}
        />
      </div>
    </>
  );
}
