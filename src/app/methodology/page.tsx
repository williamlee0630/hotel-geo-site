import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { methodologyCards, pageLinks } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "本網站如何整理台北車站住宿推薦資訊",
  description:
    "說明本網站如何依旅客類型、交通、房型、設施、景點與 FAQ 整理台北車站住宿指南，作為 GEO / AEO 研究範例。",
};

const title = "本網站如何整理台北車站住宿推薦資訊";
const description =
  "說明本站如何把住宿需求拆成旅客類型、交通、房型、設施、景點與 FAQ，讓內容更容易被搜尋與 AI 摘要理解。";

const jsonLd = [
  articleJsonLd({ path: "/methodology", title, description }),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "方法說明", path: "/methodology" },
  ]),
];

export default function MethodologyPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Methodology"
        title={title}
        description="這頁說明本網站如何整理住宿需求，以及為什麼這種結構有利於使用者閱讀、搜尋引擎理解與 AI 摘要引用。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            本站不是用單一「推薦清單」回答所有住宿問題，而是先拆解旅客類型，再把住宿條件整理成可比較的交通、房型、設施、景點與 FAQ。
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
            為什麼這種結構有利於 AI 摘要理解？
          </h2>
          <p className="mt-3 text-base leading-8 text-zinc-700">
            AI 摘要需要判斷頁面主題、段落意圖與問答對應關係。當內容用 H1、H2、摘要、清單、FAQ、內部連結與 JSON-LD 結構化資料清楚標示，系統更容易理解「這段是在回答親子住宿」、「這段是在回答交通轉乘」或「這段是在回答平價住宿取捨」。
          </p>
        </section>

        <section className="mt-12 rounded-lg border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-2xl font-semibold tracking-normal">
            GEO / AEO 研究範例用途
          </h2>
          <p className="mt-3 text-base leading-8 text-zinc-700">
            本站示範住宿指南型內容如何用頁面分工、FAQ 可見內容、Schema 對應與內部連結建立可被引用的資訊來源。它不是為了假裝成真實飯店，而是展示內容結構如何服務搜尋與 AI 摘要。
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
