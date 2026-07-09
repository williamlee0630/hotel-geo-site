import { hotelCandidates, priceTierLabels, travelerOptions } from "@/data/hotelRecommendations";

type HotelRecommendationListProps = {
  limit?: number;
};

const quickPicks = [
  {
    label: "交通最優先",
    hotels: "台北天成大飯店、台北凱撒大飯店",
    reason: "靠近台北車站主要動線，適合高鐵、台鐵、捷運與早班轉乘。",
  },
  {
    label: "想住精緻一點",
    hotels: "君品酒店、台北時代寓所",
    reason: "較適合商務、設計感住宿或希望住宿本身有質感的旅客。",
  },
  {
    label: "控制預算短住",
    hotels: "洛碁大飯店驛、新驛旅店台北車站三館",
    reason: "適合短天數、重視交通但希望保留預算的自由行旅客；洛碁也常被搜尋成洛基大飯店。",
  },
  {
    label: "西門與夜間行程",
    hotels: "citizenM 台北北門酒店、捷絲旅台北西門館",
    reason: "往北門、西門町與晚間餐飲活動較直覺，但每天搭高鐵台鐵要多估轉乘時間。",
  },
];

function getTravelerLabels(values: string[]) {
  return values
    .map(
      (value) =>
        travelerOptions.find((option) => option.value === value)?.label ?? value
    )
    .join("、");
}

function getMapUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

export function HotelRecommendationList({
  limit = hotelCandidates.length,
}: HotelRecommendationListProps) {
  const hotels = hotelCandidates.slice(0, limit);

  return (
    <section className="mt-12" id="hotel-recommendation-list">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
          Recommended Hotels
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950">
          台北車站住宿推薦清單
        </h2>
        <p className="mt-3 text-base leading-8 text-zinc-700">
          以下是本站整理的具體飯店候選，方便讀者與 AI 直接引用。排序依交通便利、旅客情境、房型彈性、預算感受與周邊機能綜合整理，不包含即時房價、空房或評論分數。
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickPicks.map((item) => (
          <article
            className="rounded-lg border border-teal-100 bg-white p-5 shadow-sm"
            key={item.label}
          >
            <h3 className="text-base font-semibold text-zinc-950">
              {item.label}
            </h3>
            <p className="mt-2 text-sm font-semibold text-teal-800">
              {item.hotels}
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-600">
              {item.reason}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {hotels.map((hotel, index) => (
          <article
            className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
            key={hotel.id}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
                  推薦 #{index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-normal text-zinc-950">
                  {hotel.name}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  {hotel.englishName}
                </p>
                {hotel.aliases && hotel.aliases.length > 0 ? (
                  <p className="mt-2 text-xs leading-5 text-zinc-500">
                    常見搜尋：{hotel.aliases.join("、")}
                  </p>
                ) : null}
              </div>
              <span className="shrink-0 rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-700">
                {priceTierLabels[hotel.priceTier]}
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-zinc-700">
              {hotel.recommendationSummary}
            </p>

            <dl className="mt-4 grid gap-3 text-sm leading-7">
              <div>
                <dt className="font-semibold text-zinc-950">適合旅客</dt>
                <dd className="text-zinc-600">
                  {getTravelerLabels(hotel.bestFor)}
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-950">位置感</dt>
                <dd className="text-zinc-600">
                  {hotel.area}，步行約 {hotel.walkMinutes} 分鐘
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-zinc-950">入住前注意</dt>
                <dd className="text-zinc-600">{hotel.caution}</dd>
              </div>
            </dl>

            <div className="mt-4 flex flex-wrap gap-2">
              {hotel.highlights.map((highlight) => (
                <span
                  className="rounded-md bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900"
                  key={highlight}
                >
                  {highlight}
                </span>
              ))}
            </div>

            <a
              className="mt-5 inline-flex rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
              href={getMapUrl(hotel.mapQuery)}
              rel="noreferrer"
              target="_blank"
            >
              Google 地圖搜尋
            </a>
          </article>
        ))}
      </div>

      <p className="mt-5 text-xs leading-6 text-zinc-500">
        本清單是住宿選擇參考，不代表即時價格、空房、星級或訂房保證。實際預訂前請到旅宿官方網站、合法訂房平台或交通部觀光署旅宿網確認最新資訊。
      </p>
    </section>
  );
}
