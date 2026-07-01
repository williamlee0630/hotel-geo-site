import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { conditionLinks, pageLinks, transportationGuides } from "@/data/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "台北車站住宿交通指南｜北車轉乘住宿怎麼選",
  description:
    "說明選擇台北車站附近住宿時，高鐵、台鐵、捷運、機場捷運、公車與行李動線應注意的交通條件。",
};

const title = "台北車站住宿交通指南";
const description =
  "台北車站交通便利，但出口、地下街、電梯與實際步行路線會影響住宿體驗。";

const jsonLd = [
  articleJsonLd({ path: "/location", title, description }),
  breadcrumbJsonLd([
    { name: "首頁", path: "/" },
    { name: title, path: "/location" },
  ]),
];

export default function LocationPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHeader
        eyebrow="Transportation Guide"
        title={title}
        description="整理從高鐵、台鐵、捷運、機場捷運與公車前往住宿地點時，應確認的出口、電梯、地下街與行李動線。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            北車住宿的交通優勢來自轉乘選擇多，但實際體驗取決於住宿點到車站出口的路線。帶大行李、親子同行、晚到台北或隔天早班車，都應把步行動線納入判斷。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {transportationGuides.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-semibold tracking-normal">{item.title}</h2>
              <p className="mt-3 text-base leading-8 text-zinc-700">
                {item.description}
              </p>
              <ul className="mt-5 grid gap-2 text-sm text-zinc-700">
                {item.points.map((point) => (
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
            選交通住宿時的實用檢查
          </h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-md bg-zinc-50 p-4">
              <h3 className="font-semibold">看出口，不只看站名</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                台北車站出口多，住宿頁面寫近車站時，仍應確認接近哪個出口與是否有電梯。
              </p>
            </div>
            <div className="rounded-md bg-zinc-50 p-4">
              <h3 className="font-semibold">把行李動線算進去</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                大行李、嬰兒車或長輩同行時，平面距離短不一定代表好走。
              </p>
            </div>
            <div className="rounded-md bg-zinc-50 p-4">
              <h3 className="font-semibold">預留轉乘緩衝</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600">
                機場捷運、台鐵、高鐵與捷運轉乘樓層不同，趕車時要留出移動時間。
              </p>
            </div>
          </div>
        </section>

        <RelatedLinks
          links={[
            ...conditionLinks.filter((link) => link.href !== "/location"),
            ...pageLinks.filter((link) =>
              [
                "/taipei-main-station-hotels",
                "/taipei-main-station-transportation-hotels",
                "/nearby",
                "/faq",
              ].includes(link.href)
            ),
          ]}
        />
      </div>
    </>
  );
}
