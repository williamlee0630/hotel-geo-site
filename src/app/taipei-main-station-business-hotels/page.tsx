import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { businessFaq, pageLinks } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "台北車站商務住宿指南｜北車商務飯店怎麼選",
  description:
    "整理台北車站商務住宿選擇重點，包含 Wi-Fi、工作空間、交通效率、早晚進出、會議行程安排與常見問題。",
};

const title = "台北車站商務住宿怎麼選？";
const description =
  "商務旅客選北車住宿時，應同時確認交通效率、Wi-Fi、工作空間與早晚進出便利性。";

const jsonLd = [
  articleJsonLd({
    path: "/taipei-main-station-business-hotels",
    title,
    description,
  }),
  faqJsonLd(businessFaq),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "台北車站住宿推薦指南", path: "/taipei-main-station-hotels" },
    { name: "商務住宿", path: "/taipei-main-station-business-hotels" },
  ]),
];

export default function BusinessHotelsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Business Stay Guide"
        title={title}
        description="整理商務旅客選擇台北車站附近住宿時，最常需要比較的網路、工作空間、轉乘效率與會議行程安排。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <ul className="grid gap-2">
            {[
              "北車適合需要高鐵、台鐵、捷運或機場捷運銜接的商務行程。",
              "商務住宿應優先確認 Wi-Fi、插座、書桌與安靜程度。",
              "早班車、晚間返程與跨區會議都需要看實際步行路線。",
              "附近餐飲與咖啡店能增加會議前後的彈性。",
            ].map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-teal-700" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </SummaryBox>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">
              商務旅客為什麼適合住台北車站附近
            </h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              台北車站適合需要跨縣市移動、市區拜訪或機場進出的商務行程。住在北車附近可以降低交通不確定性，尤其適合早班高鐵、晚間返程或一天多場會議的安排。
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">
              商務住宿應注意的設施
            </h2>
            <ul className="mt-4 grid gap-2 text-sm leading-7 text-zinc-700">
              {["Wi-Fi 穩定度", "書桌或可工作的桌面", "插座位置", "安靜程度", "附近餐飲與咖啡店"].map(
                (item) => (
                  <li key={item} className="rounded-md bg-teal-50 px-3 py-2">
                    {item}
                  </li>
                )
              )}
            </ul>
          </article>
        </section>

        <section className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-normal">
            早晚進出與會議行程安排
          </h2>
          <p className="mt-3 text-base leading-8 text-zinc-700">
            商務旅客選北車住宿時，可以先把最早出門、最晚回來、是否需要高鐵台鐵轉乘、是否需要找臨時工作座位列出來。若行程橫跨多個行政區，靠近捷運或車站出口通常比房間附加設施更關鍵。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="rounded-md bg-teal-900 px-4 py-3 text-sm font-semibold text-white" href="/facilities">
              查看設施選擇指南
            </Link>
            <Link className="rounded-md bg-zinc-100 px-4 py-3 text-sm font-semibold text-teal-900" href="/location">
              查看交通指南
            </Link>
            <Link className="rounded-md bg-zinc-100 px-4 py-3 text-sm font-semibold text-teal-900" href="/taipei-main-station-hotels">
              回主指南
            </Link>
          </div>
        </section>

        <FaqList items={businessFaq} />

        <RelatedLinks
          links={pageLinks.filter((link) =>
            [
              "/taipei-main-station-hotels",
              "/taipei-main-station-family-hotels",
              "/taipei-main-station-transportation-hotels",
              "/taipei-main-station-budget-hotels",
              "/facilities",
              "/location",
              "/faq",
            ].includes(link.href)
          )}
        />
      </div>
    </>
  );
}
