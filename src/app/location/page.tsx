import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { pageLinks, siteConfig, transportQuestions } from "@/data/site";

export const metadata: Metadata = {
  title: "交通位置",
  description:
    "晴川行館交通位置頁，以問答整理台北車站步行、捷運、桃園機場、停車資訊與附近公車站。",
};

export default function LocationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Location"
        title="交通位置"
        description="本頁用清楚問答整理台北車站附近 Demo 飯店的交通方式，適合搜尋引擎與 AI 摘要直接理解。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            晴川行館 Demo 位置設定在台北車站步行約 8 分鐘的範圍，適合需要高鐵、台鐵、捷運與機場捷運轉乘的旅客。地址使用「{siteConfig.demoAddress}」，不是真實營業地址。
          </p>
        </SummaryBox>

        <section className="mt-12 space-y-5">
          {transportQuestions.map((item) => (
            <article key={item.question} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-normal">{item.question}</h2>
              <p className="mt-3 text-base leading-8 text-zinc-700">{item.answer}</p>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-normal">交通資訊整理</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-md bg-zinc-50 p-4">
              <h3 className="font-semibold">從台北車站步行前往</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                建議先確認最近出口，再依照手機地圖步行。若攜帶大型行李，應預留更多移動時間。
              </p>
            </div>
            <div className="rounded-md bg-zinc-50 p-4">
              <h3 className="font-semibold">從桃園機場前往</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                搭乘桃園機場捷運至台北車站，再步行或轉乘計程車前往 Demo 位置。
              </p>
            </div>
          </div>
        </section>

        <RelatedLinks links={pageLinks.filter((link) => link.href !== "/location")} />
      </div>
    </>
  );
}
