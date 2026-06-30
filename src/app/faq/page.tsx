import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { faqItems, pageLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "常見問題 FAQ",
  description:
    "晴川行館 FAQ，回答距離台北車站多遠、停車、親子入住、行李寄放、入住退房、早餐、商務與機場交通等問題。",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHeader
        eyebrow="FAQ"
        title="常見問題"
        description="這是本 Demo 網站的 GEO 重點頁，使用旅客真的會搜尋的問句整理答案，讓搜尋引擎與 AI 摘要更容易擷取重點。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            本頁整理晴川行館 Demo 飯店的常見問題，涵蓋台北車站距離、停車、親子入住、行李寄放、早餐、商務需求、桃園機場交通與晚間用餐便利性。內容為示範用途，不代表真實服務承諾。
          </p>
        </SummaryBox>

        <section className="mt-12 space-y-4">
          <h2 className="text-3xl font-semibold tracking-normal">FAQ 問答列表</h2>
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold tracking-normal text-zinc-950">
                {item.question}
              </h3>
              <p className="mt-3 text-base leading-8 text-zinc-700">{item.answer}</p>
            </article>
          ))}
        </section>

        <RelatedLinks links={pageLinks.filter((link) => link.href !== "/faq")} />
      </div>
    </>
  );
}
