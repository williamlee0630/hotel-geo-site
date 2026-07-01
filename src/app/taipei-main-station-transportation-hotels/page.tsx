import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { pageLinks, transportationFaq, transportationGuides } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "台北車站交通住宿指南｜交通方便飯店怎麼選",
  description:
    "整理台北車站交通便利住宿選擇重點，包含高鐵、台鐵、捷運、機場捷運轉乘動線、行李路線與常見問題。",
};

const title = "台北車站交通便利住宿怎麼選？";
const description =
  "重視交通的旅客應確認出口、電梯、地下街、機場捷運與高鐵台鐵捷運轉乘路線。";

const jsonLd = [
  articleJsonLd({
    path: "/taipei-main-station-transportation-hotels",
    title,
    description,
  }),
  faqJsonLd(transportationFaq),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "台北車站住宿推薦指南", path: "/taipei-main-station-hotels" },
    { name: "交通住宿", path: "/taipei-main-station-transportation-hotels" },
  ]),
];

export default function TransportationHotelsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Transportation Stay Guide"
        title={title}
        description="整理台北車站住宿的交通優勢，以及高鐵、台鐵、捷運、機場捷運轉乘時應注意的實際路線。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <ul className="grid gap-2">
            {[
              "台北車站整合高鐵、台鐵、捷運、機場捷運與公車。",
              "交通方便不只看距離，也要看出口、電梯與地下街動線。",
              "帶大行李、晚到或早班車旅客要預留轉乘緩衝。",
              "住宿點到實際上車位置的路線，比地圖直線距離更重要。",
            ].map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-teal-700" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </SummaryBox>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-normal text-zinc-950">
            台北車站的交通優勢
          </h2>
          <p className="mt-3 max-w-4xl text-base leading-8 text-zinc-700">
            台北車站適合需要跨縣市移動、機場進出或市區多點行程的旅客。住在北車附近可以把住宿、轉乘、行李整理與景點安排集中處理，但仍要確認住宿點到各交通系統的實際路線。
          </p>
        </section>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {transportationGuides.map((guide) => (
            <article
              key={guide.title}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-normal">
                {guide.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {guide.description}
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-zinc-700">
                {guide.points.map((point) => (
                  <li key={point} className="rounded-md bg-teal-50 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-normal">
            選擇交通方便住宿的注意事項
          </h2>
          <p className="mt-3 text-base leading-8 text-zinc-700">
            建議把「最近的出口」、「是否有電梯」、「地下街是否好辨識」、「晚間步行路線」、「從機場捷運到住宿點是否需要長距離拖行李」列為檢查項目。交通方便住宿的價值，在於降低移動壓力，而不是只追求最短距離。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="rounded-md bg-teal-900 px-4 py-3 text-sm font-semibold text-white" href="/location">
              查看完整交通指南
            </Link>
            <Link className="rounded-md bg-zinc-100 px-4 py-3 text-sm font-semibold text-teal-900" href="/taipei-main-station-hotels">
              回主指南
            </Link>
          </div>
        </section>

        <FaqList items={transportationFaq} />

        <RelatedLinks
          links={pageLinks.filter((link) =>
            [
              "/taipei-main-station-hotels",
              "/taipei-main-station-family-hotels",
              "/taipei-main-station-business-hotels",
              "/taipei-main-station-budget-hotels",
              "/location",
              "/nearby",
              "/faq",
            ].includes(link.href)
          )}
        />
      </div>
    </>
  );
}
