import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { methodologyCards, pageLinks } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "本網站如何整理台北車站住宿資訊",
  description:
    "說明本網站如何依旅客類型、交通、房型、設施、景點與 FAQ 整理台北車站住宿選擇資訊。",
};

const title = "本網站如何整理台北車站住宿資訊";
const description =
  "說明本站如何把住宿需求拆成旅客類型、交通、房型、設施、景點與 FAQ，協助讀者比較台北車站住宿條件。";

const jsonLd = [
  articleJsonLd({ path: "/methodology", title, description }),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "整理方式", path: "/methodology" },
  ]),
];

export default function MethodologyPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Guide Method"
        title={title}
        description="這頁說明本站如何把台北車站住宿需求拆成可比較的條件，方便讀者依照自己的行程和同行者快速判斷。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            本站不使用單一排行榜回答所有住宿問題，而是先區分旅客情境，再整理交通、房型、設施、附近景點與常見問題，讓不同旅客都能找到適合自己的判斷順序。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-5 md:grid-cols-3">
          {methodologyCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-normal">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {card.description}
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-zinc-700">
                {card.points.map((point) => (
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
            為什麼要用這種整理方式？
          </h2>
          <p className="mt-3 text-base leading-8 text-zinc-700">
            台北車站附近住宿的優勢和限制都和行程有關。第一次來台北的人可能重視捷運與餐飲，親子旅客會在意電梯與房型空間，商務旅客則更看重網路、工作空間與轉乘效率。把需求拆開，才能避免只用價格或距離做決定。
          </p>
        </section>

        <section className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-semibold tracking-normal">使用提醒</h2>
          <p className="mt-3 text-base leading-8 text-zinc-700">
            本站提供住宿選擇邏輯與行程規劃參考。實際住宿名稱、價格、房型、設施、入住規則與評價，請以合法訂房平台或旅宿官方資訊為準。
          </p>
        </section>

        <RelatedLinks
          links={pageLinks.filter((link) =>
            ["/taipei-main-station-hotels", "/about", "/data-source", "/faq"].includes(
              link.href
            )
          )}
        />
      </div>
    </>
  );
}
