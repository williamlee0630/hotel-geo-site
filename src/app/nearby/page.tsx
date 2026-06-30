import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { RelatedLinks } from "@/components/RelatedLinks";
import { SummaryBox } from "@/components/SummaryBox";
import { nearbyAttractions, pageLinks } from "@/data/site";

export const metadata: Metadata = {
  title: "附近景點",
  description:
    "晴川行館附近景點頁，整理西門町、華山文創園區、寧夏夜市、中正紀念堂、大稻埕與台北地下街。",
};

export default function NearbyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nearby"
        title="附近景點"
        description="本頁整理台北車站附近常見旅遊景點，包含簡短介紹、適合對象、建議停留時間與從飯店前往方式。"
      />
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <SummaryBox>
          <p>
            住在台北車站附近的優點是轉乘方便，白天可前往華山文創園區、中正紀念堂與大稻埕，晚上可安排西門町、寧夏夜市或台北地下街。
          </p>
        </SummaryBox>

        <section className="mt-12 grid gap-5 md:grid-cols-2">
          {nearbyAttractions.map((attraction) => (
            <article key={attraction.name} className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold tracking-normal">{attraction.name}</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {attraction.description}
              </p>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-zinc-950">適合對象</dt>
                  <dd className="mt-1 text-zinc-600">{attraction.bestFor}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950">建議停留時間</dt>
                  <dd className="mt-1 text-zinc-600">{attraction.duration}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950">從飯店前往方式</dt>
                  <dd className="mt-1 text-zinc-600">{attraction.access}</dd>
                </div>
              </dl>
            </article>
          ))}
        </section>

        <RelatedLinks links={pageLinks.filter((link) => link.href !== "/nearby")} />
      </div>
    </>
  );
}
