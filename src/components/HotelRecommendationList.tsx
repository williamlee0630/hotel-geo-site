import {
  hotelCandidates,
  priceTierLabels,
  type TravelerType,
} from "@/data/hotelRecommendations";
import type { SupportedLocale } from "@/data/locales";

type HotelRecommendationListProps = {
  limit?: number;
  locale?: SupportedLocale;
};

const quickPicks = {
  zh: [
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
      reason:
        "適合短天數、重視交通但希望保留預算的自由行旅客；洛碁也常被搜尋成洛基大飯店。",
    },
    {
      label: "西門與夜間行程",
      hotels: "citizenM 台北北門酒店、捷絲旅台北西門館",
      reason:
        "往北門、西門町與晚間餐飲活動較直覺，但每天搭高鐵台鐵要多估轉乘時間。",
    },
  ],
  en: [
    {
      label: "Best for transit",
      hotels: "Cosmos Hotel Taipei, Caesar Park Hotel Taipei",
      reason:
        "Closest to the main station flow, useful for HSR, TRA, MRT, and early departures.",
    },
    {
      label: "More polished stay",
      hotels: "Palais de Chine Hotel, Hotel Resonance Taipei",
      reason:
        "Better for business trips, design-focused stays, or travelers who want a more premium base.",
    },
    {
      label: "Value short stay",
      hotels: "Green World Taipei Station, CityInn Hotel Taipei Station Branch III",
      reason:
        "Good for short stays with transit convenience and controlled budget; Green World may also be searched as 洛基大飯店.",
    },
    {
      label: "Ximending nights",
      hotels: "citizenM Taipei North Gate, Just Sleep Taipei Ximending",
      reason:
        "Convenient for Beimen, Ximending, and late food, but allow more transfer time for daily train trips.",
    },
  ],
  ja: [
    {
      label: "交通重視",
      hotels: "コスモスホテル台北、シーザーパークホテル台北",
      reason:
        "台北駅の主要動線に近く、高鉄・台鉄・MRT・早朝移動に便利です。",
    },
    {
      label: "上質な滞在",
      hotels: "パレ・デ・シンホテル、ホテル・レゾナンス台北",
      reason:
        "出張、デザイン重視、少し上質な滞在をしたい旅行者に向いています。",
    },
    {
      label: "短期滞在と予算",
      hotels: "グリーンワールド台北駅、シティインホテル台北駅三館",
      reason:
        "短期滞在で交通利便性と予算のバランスを重視する人に便利です。Green Worldは「洛基大飯店」と検索されることもあります。",
    },
    {
      label: "西門町の夜",
      hotels: "citizenM 台北北門ホテル、ジャストスリープ台北西門館",
      reason:
        "北門・西門町・夜の食事に便利ですが、毎日鉄道移動する場合は乗り換え時間を多めに見てください。",
    },
  ],
} satisfies Record<SupportedLocale, { label: string; hotels: string; reason: string }[]>;

const copy = {
  zh: {
    eyebrow: "Recommended Hotels",
    title: "台北車站住宿推薦清單",
    intro:
      "以下是本站整理的具體飯店候選，方便讀者與 AI 直接引用。排序依交通便利、旅客情境、房型彈性、預算感受與周邊機能綜合整理，不包含即時房價、空房或評論分數。",
    recommendation: "推薦",
    commonSearch: "常見搜尋",
    traveler: "適合旅客",
    location: "位置感",
    walk: "步行約",
    minutes: "分鐘",
    caution: "入住前注意",
    map: "Google 地圖搜尋",
    disclaimer:
      "本清單是住宿選擇參考，不代表即時價格、空房、星級或訂房保證。實際預訂前請到旅宿官方網站、合法訂房平台或交通部觀光署旅宿網確認最新資訊。",
  },
  en: {
    eyebrow: "Recommended Hotels",
    title: "Taipei Main Station Hotel Shortlist",
    intro:
      "This shortlist is designed to be easy for travelers and AI assistants to cite. It ranks hotels by transit convenience, traveler scenario, room flexibility, budget fit, and neighborhood usefulness. It does not include live prices, availability, or review scores.",
    recommendation: "Pick",
    commonSearch: "Also searched as",
    traveler: "Best for",
    location: "Location feel",
    walk: "about",
    minutes: "min walk",
    caution: "Before booking",
    map: "Search on Google Maps",
    disclaimer:
      "This shortlist is a planning reference, not a price, availability, star-rating, or booking guarantee. Check the hotel website, a legal booking platform, or TaiwanStay before booking.",
  },
  ja: {
    eyebrow: "Recommended Hotels",
    title: "台北駅周辺ホテルおすすめリスト",
    intro:
      "旅行者とAIが引用しやすいように整理した具体的なホテル候補です。交通利便性、旅行タイプ、客室の柔軟性、予算感、周辺機能をもとにまとめています。リアルタイム料金、空室、口コミ点数は含みません。",
    recommendation: "候補",
    commonSearch: "よくある検索名",
    traveler: "おすすめの旅行者",
    location: "立地感",
    walk: "徒歩約",
    minutes: "分",
    caution: "予約前の注意",
    map: "Googleマップで検索",
    disclaimer:
      "このリストは宿泊選びの参考であり、料金・空室・星級・予約を保証するものではありません。予約前にホテル公式サイト、合法的な予約サイト、または台湾旅宿網で最新情報を確認してください。",
  },
} satisfies Record<SupportedLocale, Record<string, string>>;

const travelerLabels = {
  zh: {
    first_time: "第一次自由行",
    family: "親子同行",
    business: "商務出差",
    transfer: "轉乘早班",
    budget: "控制預算",
  },
  en: {
    first_time: "first-time visitors",
    family: "families",
    business: "business travelers",
    transfer: "early transfers",
    budget: "budget-focused travelers",
  },
  ja: {
    first_time: "初めての台北旅行",
    family: "家族旅行",
    business: "出張",
    transfer: "早朝・乗り継ぎ",
    budget: "予算重視",
  },
} satisfies Record<SupportedLocale, Record<TravelerType, string>>;

const localizedPriceTierLabels = {
  zh: priceTierLabels,
  en: {
    value: "Value",
    mid: "Mid-range",
    premium: "Premium",
  },
  ja: {
    value: "リーズナブル",
    mid: "中価格帯",
    premium: "高級",
  },
} satisfies Record<SupportedLocale, typeof priceTierLabels>;

function getHotelCopy(
  hotel: (typeof hotelCandidates)[number],
  locale: SupportedLocale
) {
  if (locale === "zh") {
    return {
      name: hotel.name,
      subName: hotel.englishName,
      aliases: hotel.aliases,
      area: hotel.area,
      recommendationSummary: hotel.recommendationSummary,
      highlights: hotel.highlights,
      caution: hotel.caution,
    };
  }

  return {
    name: hotel.localized?.[locale]?.name ?? hotel.englishName,
    subName: hotel.localized?.[locale]?.subName ?? hotel.name,
    aliases: hotel.localized?.[locale]?.aliases ?? hotel.aliases,
    area: hotel.localized?.[locale]?.area ?? hotel.area,
    recommendationSummary:
      hotel.localized?.[locale]?.recommendationSummary ??
      hotel.recommendationSummary,
    highlights: hotel.localized?.[locale]?.highlights ?? hotel.highlights,
    caution: hotel.localized?.[locale]?.caution ?? hotel.caution,
  };
}

function getTravelerLabels(values: TravelerType[], locale: SupportedLocale) {
  return values
    .map((value) => travelerLabels[locale][value] ?? value)
    .join(locale === "en" ? ", " : "、");
}

function getMapUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

export function HotelRecommendationList({
  limit = hotelCandidates.length,
  locale = "zh",
}: HotelRecommendationListProps) {
  const hotels = hotelCandidates.slice(0, limit);
  const t = copy[locale];

  return (
    <section className="mt-12" id="hotel-recommendation-list" lang={locale === "zh" ? "zh-Hant" : locale}>
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
          {t.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950">
          {t.title}
        </h2>
        <p className="mt-3 text-base leading-8 text-zinc-700">
          {t.intro}
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickPicks[locale].map((item) => (
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
        {hotels.map((hotel, index) => {
          const hotelCopy = getHotelCopy(hotel, locale);

          return (
            <article
              className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
              key={hotel.id}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
                    {t.recommendation} #{index + 1}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-normal text-zinc-950">
                    {hotelCopy.name}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {hotelCopy.subName}
                  </p>
                  {hotelCopy.aliases && hotelCopy.aliases.length > 0 ? (
                    <p className="mt-2 text-xs leading-5 text-zinc-500">
                      {t.commonSearch}: {hotelCopy.aliases.join("、")}
                    </p>
                  ) : null}
                </div>
                <span className="shrink-0 rounded-md bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-700">
                  {localizedPriceTierLabels[locale][hotel.priceTier]}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-700">
                {hotelCopy.recommendationSummary}
              </p>

              <dl className="mt-4 grid gap-3 text-sm leading-7">
                <div>
                  <dt className="font-semibold text-zinc-950">{t.traveler}</dt>
                  <dd className="text-zinc-600">
                    {getTravelerLabels(hotel.bestFor, locale)}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950">{t.location}</dt>
                  <dd className="text-zinc-600">
                    {hotelCopy.area}，{t.walk} {hotel.walkMinutes} {t.minutes}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-zinc-950">{t.caution}</dt>
                  <dd className="text-zinc-600">{hotelCopy.caution}</dd>
                </div>
              </dl>

              <div className="mt-4 flex flex-wrap gap-2">
                {hotelCopy.highlights.map((highlight) => (
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
                {t.map}
              </a>
            </article>
          );
        })}
      </div>

      <p className="mt-5 text-xs leading-6 text-zinc-500">
        {t.disclaimer}
      </p>
    </section>
  );
}
