import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { facilities, pageLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "設施服務",
  description:
    "晴川行館 Demo 設施服務頁，整理免費 Wi-Fi、行李寄放、24 小時櫃台、自助洗衣、早餐區、親子備品與商務工作區。",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities"
        title="設施服務"
        description="本頁示範飯店官網如何把設施寫成具體可搜尋內容，讓旅客清楚知道有哪些服務、適合哪些入住情境。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            晴川行館 Demo 設施包含免費 Wi-Fi、行李寄放、24 小時櫃台、自助洗衣、早餐區、親子備品與商務工作區。這些內容可協助自由行、親子與商務旅客快速確認住宿需求。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {facilities.map((facility) => (
            <article key={facility.title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-normal">{facility.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {facility.description}
              </p>
            </article>
          ))}
        </section>

        <RelatedLinks links={pageLinks} />
      </div>
    </>
  );
}
