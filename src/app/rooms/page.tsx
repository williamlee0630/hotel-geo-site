import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { conditionLinks, pageLinks, roomChoiceGuides } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "住宿房型選擇指南｜北車住宿房型怎麼看",
  description:
    "整理台北車站附近住宿的房型判斷方式，包含雙人短住、家庭親子、商務工作與平價住宿常見需求。",
};

const title = "住宿房型選擇指南";
const description =
  "房型不是越大越好，而是要符合旅客類型、行李量、停留天數與行程節奏。";

const jsonLd = [
  articleJsonLd({ path: "/rooms", title, description }),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: title, path: "/rooms" },
  ]),
];

export default function RoomsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Room Choice Guide"
        title={title}
        description="從自由行、親子、商務與短住需求出發，整理選擇台北車站附近住宿房型時應注意的空間、床型、行李與動線條件。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            選北車住宿房型時，可以先問三件事：同行者是誰、行李有多少、每天是否需要頻繁轉乘。雙人短住重視效率，親子同行重視空間與動線，商務旅客則要兼顧休息與工作。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {roomChoiceGuides.map((room) => (
            <article
              key={room.title}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-normal text-zinc-950">
                {room.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {room.description}
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-zinc-700">
                {room.points.map((point) => (
                  <li key={point} className="rounded-md bg-teal-50 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <RelatedLinks
          links={[
            ...conditionLinks.filter((link) => link.href !== "/rooms"),
            ...pageLinks.filter((link) =>
              [
                "/taipei-main-station-hotels",
                "/taipei-main-station-family-hotels",
                "/taipei-main-station-business-hotels",
                "/faq",
              ].includes(link.href)
            ),
          ]}
        />
      </div>
    </>
  );
}
