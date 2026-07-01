import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { conditionLinks, facilityGuides, pageLinks } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "住宿設施選擇指南｜北車住宿設施怎麼看",
  description:
    "整理選擇台北車站附近住宿時常見設施條件，包含 Wi-Fi、工作空間、行李寄放、洗衣、早餐與親子備品。",
};

const title = "住宿設施選擇指南";
const description =
  "不同旅客需要的設施不同，設施清單應和行程目的、同行者與停留天數一起判斷。";

const jsonLd = [
  articleJsonLd({ path: "/facilities", title, description }),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: title, path: "/facilities" },
  ]),
];

export default function FacilitiesPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Facility Choice Guide"
        title={title}
        description="整理 Wi-Fi、行李寄放、洗衣、早餐、親子備品與工作空間等條件，說明它們對自由行、親子與商務旅客的實際影響。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            設施不需要越多越好，而是要和旅程需求一致。商務旅客應先看網路與工作空間，親子旅客要看電梯、備品與行李處理，多日自由行則可把洗衣與早餐列入比較。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {facilityGuides.map((facility) => (
            <article
              key={facility.title}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-normal">
                {facility.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {facility.description}
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-zinc-700">
                {facility.points.map((point) => (
                  <li key={point} className="rounded-md bg-zinc-50 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <RelatedLinks
          links={[
            ...conditionLinks.filter((link) => link.href !== "/facilities"),
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
