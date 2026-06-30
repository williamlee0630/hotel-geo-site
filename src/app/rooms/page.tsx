import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { pageLinks, roomTypes } from "@/data/site";

export const metadata: Metadata = {
  title: "房型介紹",
  description:
    "晴川行館 Demo 房型介紹，包含標準雙人房、豪華雙人房、家庭房與商務單人房的人數、坪數、床型與適合對象。",
};

export default function RoomsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rooms"
        title="房型介紹"
        description="本頁以搜尋者容易理解的格式整理 Demo 房型資訊，重點不是真實價格，而是人數、坪數、床型、適合對象與主要特色。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            晴川行館示範提供四種房型：標準雙人房、豪華雙人房、家庭房與商務單人房。房型內容以台北車站附近旅宿常見搜尋需求設計，協助使用者快速判斷是否適合雙人、親子或商務住宿。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {roomTypes.map((room) => (
            <article key={room.name} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-normal text-zinc-950">
                {room.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{room.description}</p>
              <dl className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-md bg-zinc-50 p-3">
                  <dt className="text-sm text-zinc-500">適合人數</dt>
                  <dd className="mt-1 font-semibold">{room.occupancy}</dd>
                </div>
                <div className="rounded-md bg-zinc-50 p-3">
                  <dt className="text-sm text-zinc-500">坪數</dt>
                  <dd className="mt-1 font-semibold">{room.size}</dd>
                </div>
                <div className="rounded-md bg-zinc-50 p-3">
                  <dt className="text-sm text-zinc-500">床型</dt>
                  <dd className="mt-1 font-semibold">{room.bed}</dd>
                </div>
                <div className="rounded-md bg-zinc-50 p-3">
                  <dt className="text-sm text-zinc-500">適合對象</dt>
                  <dd className="mt-1 font-semibold">{room.bestFor}</dd>
                </div>
              </dl>
              <h3 className="mt-6 text-lg font-semibold">主要特色</h3>
              <ul className="mt-3 grid gap-2 text-sm text-zinc-700">
                {room.features.map((feature) => (
                  <li key={feature} className="rounded-md bg-teal-50 px-3 py-2">
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <RelatedLinks links={pageLinks.filter((link) => link.href !== "/rooms")} />
      </div>
    </>
  );
}
