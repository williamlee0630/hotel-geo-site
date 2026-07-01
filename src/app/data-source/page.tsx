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
    "說明本網站為台北車站住宿指南型內容站，用於 GEO / AEO 研究與教學展示，不提供真實訂房、價格、電話、地址或評論。",
};

const title = "資料來源與網站說明";
const description =
  "本網站為台北車站住宿指南型內容站，用於 GEO / AEO 研究與教學展示，不提供真實商家資料。";

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
        description="這頁集中說明本站資料用途、透明標示與不提供真實訂房資訊的原則。"
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
                "本網站為台北車站住宿指南型內容站，整理住宿選擇條件與常見問題，而不是實際營業飯店官網。",
            },
            {
              title: "研究與展示用途",
              description:
                "網站內容用於 GEO / AEO 研究與教學展示，示範如何用清楚的內容結構協助搜尋與 AI 摘要理解。",
            },
            {
              title: "不提供的資訊",
              description:
                "本站不提供真實訂房、價格、電話、地址、Google 評論、星級評分、旅客見證或可入住服務。",
            },
            {
              title: "真實商業網站需要補充",
              description:
                "若作為真實商業網站，需補上合法商家資訊、真實地址、聯絡方式、訂房條款、隱私權政策與可驗證評論來源。",
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
