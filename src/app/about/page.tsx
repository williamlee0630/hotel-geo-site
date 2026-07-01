import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { pageLinks, siteConfig } from "@/data/site";
import { aboutPageJsonLd, breadcrumbJsonLd, creativeWorkJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "關於晴川行館｜台北車站住宿指南內容實驗",
  description:
    "說明晴川行館作為台北車站住宿推薦指南與 GEO / AEO 內容結構實驗品牌的定位，以及本站如何整理住宿選擇資訊。",
};

const title = "關於晴川行館與本網站";
const description =
  "晴川行館保留為內容結構實驗品牌，本站核心是台北車站住宿推薦指南。";

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
        description="本網站不是傳統飯店官網，而是以台北車站住宿情境為主題的指南型內容站，整理使用者選擇北車附近住宿時會比較的條件。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            {siteConfig.siteName}
            的主軸是「台北車站住宿怎麼選」。內容以旅客類型、交通距離、房型需求、設施條件、附近景點與常見問題為核心，協助使用者和 AI 摘要理解住宿選擇資訊。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">網站定位</h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              本站以「台北車站住宿推薦指南」為主要定位，整理自由行、親子、商務、轉乘與預算有限旅客在選擇北車附近住宿時會比較的條件。
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">內容結構</h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              內容採用指南文章、分眾頁、FAQ、內部連結與 JSON-LD 結構化資料，讓搜尋引擎與 AI 系統能清楚辨識頁面主題與問答內容。
            </p>
          </article>
        </section>

        <section className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-semibold tracking-normal">透明說明</h2>
          <p className="mt-3 text-base leading-8 text-zinc-700">
            {siteConfig.transparencyDetail}
            若要作為真實商業網站，需補上合法商家資訊、真實地址、聯絡方式、訂房條款、隱私權政策與可驗證評論來源。
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
