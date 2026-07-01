import type { Metadata } from "next";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { faqItems, pageLinks } from "@/data/site";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "台北車站住宿常見問題｜北車飯店怎麼選 FAQ",
  description:
    "整理台北車站附近住宿常見問題，包含第一次來台北、親子住宿、商務住宿、去西門町、交通距離與平價住宿取捨。",
};

const jsonLd = [
  faqJsonLd(faqItems),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "台北車站住宿常見問題", path: "/faq" },
  ]),
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="FAQ"
        title="台北車站住宿常見問題"
        description="以使用者實際查詢語氣整理北車住宿 FAQ，回答第一次來台北、親子、商務、交通、景點與預算取捨等問題。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            選台北車站附近住宿時，最常見的疑問不是只有「哪一家最好」，而是「我的行程適不適合住北車」、「交通要多近才夠」、「親子或商務需求該看哪些條件」。
          </p>
        </SummaryBox>

        <FaqList items={faqItems} />

        <RelatedLinks
          links={pageLinks.filter((link) =>
            [
              "/taipei-main-station-hotels",
              "/taipei-main-station-family-hotels",
              "/taipei-main-station-business-hotels",
              "/taipei-main-station-transportation-hotels",
              "/taipei-main-station-budget-hotels",
              "/location",
              "/nearby",
            ].includes(link.href)
          )}
        />
      </div>
    </>
  );
}
