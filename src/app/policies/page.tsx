import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { pageLinks, policies } from "@/data/site";

export const metadata: Metadata = {
  title: "入住規範",
  description:
    "晴川行館 Demo 入住規範，整理入住時間、退房時間、取消規範、兒童入住、寵物、禁菸、行李寄放與注意事項。",
};

export default function PoliciesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Policies"
        title="入住規範"
        description="本頁示範飯店官網應如何清楚整理住宿規範，避免旅客只看到模糊的行銷文字。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            晴川行館是 Demo 網站，不處理真實訂房或付款。本頁規範用於示範入住時間、退房時間、取消規範、兒童入住、寵物、禁菸與行李寄放資訊應如何呈現。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {policies.map((policy) => (
            <article key={policy.title} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-normal">{policy.title}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{policy.description}</p>
            </article>
          ))}
        </section>

        <RelatedLinks links={pageLinks} />
      </div>
    </>
  );
}
