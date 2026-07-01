import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { familyFaq, pageLinks } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "台北車站親子住宿指南｜北車親子飯店怎麼選",
  description:
    "整理台北車站親子住宿選擇重點，包含房型空間、電梯動線、行李寄放、附近餐飲、親子景點與常見問題。",
};

const title = "台北車站親子住宿怎麼選？";
const description =
  "親子旅客選北車住宿時，應把房型空間、電梯、行李寄放、餐飲與休息節奏一起納入判斷。";

const jsonLd = [
  articleJsonLd({
    path: "/taipei-main-station-family-hotels",
    title,
    description,
  }),
  faqJsonLd(familyFaq),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "台北車站住宿推薦指南", path: "/taipei-main-station-hotels" },
    { name: "親子住宿", path: "/taipei-main-station-family-hotels" },
  ]),
];

export default function FamilyHotelsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Family Stay Guide"
        title={title}
        description="整理親子旅客選擇台北車站附近住宿時，最常需要檢查的房型、電梯、行李、餐飲與景點安排。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <ul className="grid gap-2">
            {[
              "台北車站適合親子旅客作為市區移動基地。",
              "親子住宿要優先看房型空間、電梯與行李寄放。",
              "附近餐飲、便利商店與可中途休息的行程安排很重要。",
              "住宿位置不一定要最近，但要好走、好回來、動線清楚。",
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
              親子旅客為什麼適合住台北車站附近
            </h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              北車交通選擇多，適合親子旅客把捷運、市區景點與跨縣市移動整合在同一個住宿基地。當孩子需要午休、換衣或短暫整理行李時，住在轉乘節點附近也比較容易調整行程。
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">
              親子住宿應注意的條件
            </h2>
            <ul className="mt-4 grid gap-2 text-sm leading-7 text-zinc-700">
              {[
                "房型是否有足夠活動與行李空間",
                "住宿點到車站或捷運出口是否有電梯",
                "是否方便寄放行李或暫時收納推車",
                "附近是否有簡單餐飲、便利商店與早餐選擇",
              ].map((item) => (
                <li key={item} className="rounded-md bg-teal-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-normal">
            適合親子安排的附近景點
          </h2>
          <p className="mt-3 text-base leading-8 text-zinc-700">
            親子行程可以把台北地下街、中正紀念堂、華山文創園區、西門町與大稻埕視為不同強度的選項。若孩子年紀較小，建議一天安排一個主要景點，再保留回住宿點休息的彈性。
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="rounded-md bg-teal-900 px-4 py-3 text-sm font-semibold text-white" href="/nearby">
              查看附近景點安排
            </Link>
            <Link className="rounded-md bg-zinc-100 px-4 py-3 text-sm font-semibold text-teal-900" href="/rooms">
              查看房型選擇指南
            </Link>
            <Link className="rounded-md bg-zinc-100 px-4 py-3 text-sm font-semibold text-teal-900" href="/location">
              查看交通動線指南
            </Link>
          </div>
        </section>

        <FaqList items={familyFaq} />

        <RelatedLinks
          links={pageLinks.filter((link) =>
            [
              "/taipei-main-station-hotels",
              "/taipei-main-station-business-hotels",
              "/taipei-main-station-transportation-hotels",
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
