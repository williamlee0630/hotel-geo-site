import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { HotelRecommendationList } from "@/components/HotelRecommendationList";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import {
  conditionLinks,
  mainGuideFaq,
  pageLinks,
  selectionPoints,
  travelerGuideLinks,
} from "@/data/site";
import { hotelCandidates } from "@/data/hotelRecommendations";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
  hotelRecommendationItemListJsonLd,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "台北車站住宿推薦指南｜自由行親子商務怎麼選",
  description:
    "整理台北車站附近住宿選擇重點，包含自由行、親子、商務旅客的飯店挑選條件、交通便利性、附近景點與常見問題。",
};

const title = "台北車站住宿推薦指南：自由行、親子、商務旅客怎麼選？";
const description =
  "整理台北車站附近住宿選擇重點，包含旅客類型、交通便利性、房型需求、設施條件、附近景點與常見問題。";

const jsonLd = [
  articleJsonLd({
    path: "/taipei-main-station-hotels",
    title,
    description,
  }),
  faqJsonLd(mainGuideFaq),
  hotelRecommendationItemListJsonLd(
    "/taipei-main-station-hotels",
    hotelCandidates
  ),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: "台北車站住宿推薦指南", path: "/taipei-main-station-hotels" },
  ]),
];

export default function TaipeiMainStationHotelsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Main Guide"
        title={title}
        description="從交通、旅客類型、房型、設施、附近景點與 FAQ 出發，整理北車附近住宿怎麼選。"
      />

      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            台北車站附近住宿適合需要高效率移動的旅客，但選擇時不應只看「離車站近」。自由行要看晚間交通與餐飲，親子要看房型與電梯，商務旅客要看網路、工作空間與轉乘效率。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">
              為什麼台北車站附近適合住宿？
            </h2>
            <p className="mt-3 text-base leading-8 text-zinc-700">
              台北車站具備高鐵、台鐵、捷運、機場捷運與公車轉乘優勢，適合作為台北自由行住宿基地。對需要跨縣市移動、從機場進出、安排市區多點行程的旅客來說，北車能降低交通決策成本。
            </p>
          </article>

          <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold tracking-normal">
              哪些旅客適合住台北車站附近？
            </h2>
            <ul className="mt-4 grid gap-2 text-sm leading-7 text-zinc-700">
              {[
                "第一次來台北的自由行旅客",
                "需要轉乘高鐵、台鐵或機場捷運的旅客",
                "親子旅客",
                "商務旅客",
                "想安排西門町、大稻埕、華山文創園區等景點的旅客",
              ].map((item) => (
                <li key={item} className="rounded-md bg-teal-50 px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="mt-12 grid gap-5 lg:grid-cols-3">
          {[
            {
              title: "自由行旅客選北車住宿的重點",
              points: [
                "步行到車站的距離",
                "晚上回飯店是否方便",
                "周邊餐飲是否充足",
                "是否方便前往西門町、台北地下街、寧夏夜市",
              ],
              body: "第一次來台北的自由行旅客，選擇台北車站附近住宿時，可以優先考慮步行距離、晚間交通與周邊餐飲。北車很適合作為移動基地，但實際位置仍要和你的景點安排一起看。",
            },
            {
              title: "親子旅客選北車住宿的重點",
              points: [
                "房型空間",
                "行李寄放",
                "電梯與無障礙動線",
                "附近餐飲",
                "到捷運或車站的步行距離",
              ],
              body: "親子旅客需要把孩子休息、推車、行李與臨時用餐納入考量。住宿點不一定要離車站最近，但要好走、好回來，也要方便短暫休息。",
            },
            {
              title: "商務旅客選北車住宿的重點",
              points: [
                "Wi-Fi",
                "書桌或工作空間",
                "交通效率",
                "早晚進出便利性",
                "是否靠近捷運、高鐵或台鐵",
              ],
              body: "商務旅客住北車附近的核心是節省移動時間。除了交通，也要確認是否有穩定網路、可工作的桌面與安靜環境。",
            },
          ].map((section) => (
            <article
              key={section.title}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-normal">
                {section.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{section.body}</p>
              <ul className="mt-5 grid gap-2 text-sm text-zinc-700">
                {section.points.map((point) => (
                  <li key={point} className="rounded-md bg-zinc-50 px-3 py-2">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <HotelRecommendationList />

        <section className="mt-12">
          <h2 className="text-3xl font-semibold tracking-normal text-zinc-950">
            台北車站住宿選擇的 5 個重點
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {selectionPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-xl font-semibold tracking-normal">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-normal">
            依旅客類型深入閱讀
          </h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {travelerGuideLinks.map((link) => (
              <Link
                key={link.href}
                className="rounded-md bg-teal-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <FaqList items={mainGuideFaq} />

        <section className="mt-12 rounded-lg border border-teal-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-normal">
            本網站如何整理住宿資訊
          </h2>
          <p className="mt-3 text-base leading-8 text-zinc-700">
            本網站將台北車站住宿資訊拆成交通、旅客類型、房型需求、設施條件、附近景點與 FAQ。這種整理方式能讓讀者快速比對條件，依照自己的行程目的找到更合適的住宿判斷方向。
          </p>
        </section>

        <RelatedLinks
          links={[
            ...travelerGuideLinks,
            ...conditionLinks,
            ...pageLinks.filter((link) => ["/faq", "/nearby", "/location"].includes(link.href)),
          ]}
        />
      </div>
    </>
  );
}
