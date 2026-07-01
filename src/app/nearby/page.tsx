import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { conditionLinks, nearbyAttractions, pageLinks } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "台北車站附近景點與住宿安排｜北車行程怎麼排",
  description:
    "整理西門町、華山文創園區、寧夏夜市、中正紀念堂、大稻埕與台北地下街等景點，說明如何和北車住宿安排連動。",
};

const title = "台北車站附近景點與住宿安排";
const description =
  "把景點安排、晚間返程與住宿位置一起思考，會比單看房價更接近實際旅遊需求。";

const jsonLd = [
  articleJsonLd({ path: "/nearby", title, description }),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: title, path: "/nearby" },
  ]),
];

export default function NearbyPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Nearby Planning"
        title={title}
        description="整理西門町、華山文創園區、寧夏夜市、中正紀念堂、大稻埕、台北地下街等景點，說明如何和台北車站住宿安排一起判斷。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            住北車附近的好處是可以把市區景點、轉乘與行李寄放整合在同一個移動節點。選住宿時，可以先列出晚間行程、親子休息點與退房日安排，再回頭看住宿位置是否順路。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {nearbyAttractions.map((attraction) => (
            <article
              key={attraction.name}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-normal">
                {attraction.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {attraction.description}
              </p>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-zinc-950">適合旅客</dt>
                  <dd className="mt-1 text-zinc-600">{attraction.bestFor}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950">住宿安排提醒</dt>
                  <dd className="mt-1 text-zinc-600">{attraction.lodgingTip}</dd>
                </div>
              </dl>
            </article>
          ))}
        </section>

        <RelatedLinks
          links={[
            ...conditionLinks.filter((link) => link.href !== "/nearby"),
            ...pageLinks.filter((link) =>
              [
                "/taipei-main-station-hotels",
                "/taipei-main-station-family-hotels",
                "/taipei-main-station-transportation-hotels",
                "/faq",
              ].includes(link.href)
            ),
          ]}
        />
      </div>
    </>
  );
}
