import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { pageLinks, siteConfig, travelerTypes } from "@/data/site";

export const metadata: Metadata = {
  title: "關於我們",
  description:
    "關於晴川行館 Demo 網站，說明飯店品牌設定、台北車站位置特色、適合旅客類型與示範網站聲明。",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="關於晴川行館"
        description="晴川行館是一個用於展示 Next.js、GEO 與 SEO 內容結構的 Demo 飯店品牌，不是真實營業中的飯店。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            本網站用「晴川行館」作為示範飯店名稱，模擬一間位於台北車站附近、步行約 8 分鐘可抵達的城市旅宿。所有內容皆為 Demo，不代表真實地址、真實房價、真實評論或真實可訂房資訊。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">飯店品牌介紹</h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              晴川行館的 Demo 品牌設定是「台北車站附近、交通便利、資訊透明」的城市旅宿。網站內容示範飯店官網如何回答旅客在搜尋階段最關心的問題，例如距離車站多遠、房型適合誰、是否能寄放行李與附近有哪些景點。
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">位置特色</h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              台北車站周邊適合需要轉乘高鐵、台鐵、捷運、客運與機場捷運的旅客。此 Demo 使用「{siteConfig.demoAddress}」作為示範地址，目的是呈現位置頁與 FAQ 該如何被搜尋引擎理解。
            </p>
          </article>
        </section>

        <section className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-normal">適合旅客類型</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {travelerTypes.map((type) => (
              <li key={type} className="rounded-md bg-teal-50 px-4 py-3 text-sm font-medium text-teal-950">
                {type}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-semibold tracking-normal">Demo 網站說明</h2>
          <p className="mt-3 text-base leading-8 text-zinc-700">
            {siteConfig.demoNotice}若要改成真實飯店網站，應補上合法營業資訊、真實地址、聯絡方式、訂房條款、隱私權政策與可驗證的服務內容。
          </p>
        </section>

        <RelatedLinks links={pageLinks} />
      </div>
    </>
  );
}
