import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { budgetFaq, pageLinks } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "台北車站平價住宿指南｜北車平價飯店怎麼選",
  description:
    "整理台北車站平價住宿選擇邏輯，包含價格、交通、房型、設施取捨，適合預算有限旅客規劃北車住宿。",
};

const title = "台北車站平價住宿怎麼選？";
const description =
  "平價住宿應把價格、交通距離、房型與必要設施一起比較，避免只用最低價格判斷。";

const jsonLd = [
  articleJsonLd({
    path: "/taipei-main-station-budget-hotels",
    title,
    description,
  }),
  faqJsonLd(budgetFaq),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "台北車站住宿推薦指南", path: "/taipei-main-station-hotels" },
    { name: "平價住宿", path: "/taipei-main-station-budget-hotels" },
  ]),
];

export default function BudgetHotelsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Budget Stay Guide"
        title={title}
        description="整理預算有限旅客選擇台北車站附近住宿時，常見的價格、交通、房型與設施取捨。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <ul className="grid gap-2">
            {[
              "平價住宿常見取捨包含房間大小、隔音、衛浴形式與設施完整度。",
              "價格低不一定總成本低，交通時間與晚間返程也要一起算。",
              "預算有限時，先保留安全、乾淨、交通可達與必要 Wi-Fi。",
              "親子或大行李旅客不一定適合過度壓低房型與動線條件。",
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
              平價住宿常見取捨
            </h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              台北車站周邊住宿選擇多，預算有限時常需要在房間大小、窗戶、隔音、衛浴形式、公共空間與步行距離之間取捨。適合先定義不能妥協的條件，再看哪些附加設施可以放掉。
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">
              價格、交通、房型與設施的平衡
            </h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              如果每天都要轉乘，離車站太遠可能增加時間與交通成本；如果只住一晚，簡化設施可能可接受；如果親子同行，房型空間與電梯動線通常不能犧牲太多。
            </p>
          </article>
        </section>

        <section className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-normal">
            適合預算有限旅客的住宿選擇邏輯
          </h2>
          <ol className="mt-5 grid gap-3 text-sm leading-7 text-zinc-700 md:grid-cols-2">
            {[
              "先確認旅遊目的：轉乘、觀光、商務或親子。",
              "列出不能妥協條件：安全、乾淨、交通、Wi-Fi、衛浴形式。",
              "再比較可取捨條件：早餐、景觀、房間大小、公共空間。",
              "最後把晚間返程、雨天與行李拖行成本一起算入。",
            ].map((item) => (
              <li key={item} className="rounded-md bg-teal-50 px-3 py-2">
                {item}
              </li>
            ))}
          </ol>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link className="rounded-md bg-teal-900 px-4 py-3 text-sm font-semibold text-white" href="/rooms">
              查看房型指南
            </Link>
            <Link className="rounded-md bg-zinc-100 px-4 py-3 text-sm font-semibold text-teal-900" href="/facilities">
              查看設施指南
            </Link>
            <Link className="rounded-md bg-zinc-100 px-4 py-3 text-sm font-semibold text-teal-900" href="/taipei-main-station-hotels">
              回主指南
            </Link>
          </div>
        </section>

        <FaqList items={budgetFaq} />

        <RelatedLinks
          links={pageLinks.filter((link) =>
            [
              "/taipei-main-station-hotels",
              "/taipei-main-station-family-hotels",
              "/taipei-main-station-business-hotels",
              "/taipei-main-station-transportation-hotels",
              "/rooms",
              "/facilities",
              "/faq",
            ].includes(link.href)
          )}
        />
      </div>
    </>
  );
}
