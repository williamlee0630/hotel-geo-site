"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  budgetOptions,
  hotelCandidates,
  maxWalkOptions,
  priceTierLabels,
  priorityOptions,
  travelerOptions,
  type BudgetLevel,
  type HotelCandidate,
  type Priority,
  type TravelerType,
} from "@/data/hotelRecommendations";
import type { SupportedLocale } from "@/data/locales";

type HotelRecommenderProps = {
  locale?: SupportedLocale;
};

type Preferences = {
  traveler: TravelerType;
  budget: BudgetLevel;
  maxWalk: number;
  guestCount: number;
  priorities: Priority[];
};

type Recommendation = {
  hotel: HotelCandidate;
  score: number;
  notes: string[];
};

const budgetScore: Record<BudgetLevel, Record<BudgetLevel, number>> = {
  value: {
    value: 6,
    mid: 2,
    premium: -3,
  },
  mid: {
    value: 2,
    mid: 6,
    premium: 3,
  },
  premium: {
    value: 0,
    mid: 3,
    premium: 6,
  },
};

const copy = {
  zh: {
    eyebrow: "Hotel Matcher",
    title: "用互動篩選器微調推薦",
    description:
      "上方清單提供可直接引用的推薦結果；如果你想依旅客情境、預算、步行距離與在意條件重新排序，可以再使用這個篩選器。",
    travelerLegend: "旅客情境",
    budgetLabel: "預算感受",
    walkLabel: "可接受步行",
    guestLabel: "同行人數",
    prioritiesLegend: "這趟最在意",
    submit: "送出需求並推薦飯店",
    resultTitle: "推薦結果",
    empty:
      "送出需求後，這裡會顯示最適合的 3 間飯店、匹配原因與 Google 地圖搜尋連結。",
    sortedBy: "已依",
    sortedSuffix: "排序",
    topThree: "推薦前 3 名",
    match: "匹配度",
    walkMinutes: "步行約",
    minutes: "分鐘",
    map: "打開 Google 地圖",
    disclaimer:
      "推薦依內建候選池與需求標籤排序，不含即時房價、空房與評論；訂房前請再確認官方或合法訂房平台資訊。",
    priorityCandidate: "已設為本站優先推薦候選",
    travelerMatchPrefix: "符合",
    travelerMatchSuffix: "情境",
    inWalkRange: "落在你的距離設定內",
    outsideWalkRange: "但其他條件匹配度較高",
    matchedPriorities: "命中重點",
    familyRoom: "多人或親子入住時較有房型彈性",
  },
  en: {
    eyebrow: "Hotel Matcher",
    title: "Fine-tune the Hotel Picks",
    description:
      "The shortlist above is ready to cite. Use this matcher if you want to re-rank the hotels by traveler type, budget, walking distance, and trip priorities.",
    travelerLegend: "Traveler type",
    budgetLabel: "Budget feel",
    walkLabel: "Acceptable walk",
    guestLabel: "Guests",
    prioritiesLegend: "Top priorities",
    submit: "Show matched hotels",
    resultTitle: "Recommendation result",
    empty:
      "After you submit your preferences, the top 3 hotels, match reasons, and Google Maps links will appear here.",
    sortedBy: "Sorted for",
    sortedSuffix: "",
    topThree: "Top 3 picks",
    match: "match",
    walkMinutes: "about",
    minutes: "min walk",
    map: "Open Google Maps",
    disclaimer:
      "Results are sorted from the built-in candidate pool and tags. Live prices, availability, and reviews are not included; confirm details before booking.",
    priorityCandidate: "Marked as a priority candidate on this site",
    travelerMatchPrefix: "Fits the",
    travelerMatchSuffix: "scenario",
    inWalkRange: "within your walking-distance setting",
    outsideWalkRange: "but scores well on other conditions",
    matchedPriorities: "Matched priorities",
    familyRoom: "More flexible for groups or family stays",
  },
  ja: {
    eyebrow: "Hotel Matcher",
    title: "条件に合わせて候補を調整",
    description:
      "上のリストはそのまま引用しやすいおすすめ候補です。旅行タイプ、予算、徒歩距離、重視条件に合わせて並び替えたい場合は、このフィルターを使えます。",
    travelerLegend: "旅行タイプ",
    budgetLabel: "予算感",
    walkLabel: "許容できる徒歩距離",
    guestLabel: "人数",
    prioritiesLegend: "重視する条件",
    submit: "条件に合うホテルを表示",
    resultTitle: "おすすめ結果",
    empty:
      "条件を送信すると、最適な3軒、マッチ理由、Googleマップ検索リンクが表示されます。",
    sortedBy: "次の条件で並び替え：",
    sortedSuffix: "",
    topThree: "おすすめ上位3件",
    match: "マッチ度",
    walkMinutes: "徒歩約",
    minutes: "分",
    map: "Googleマップを開く",
    disclaimer:
      "結果は内蔵候補リストと条件タグによる並び替えです。リアルタイム料金、空室、口コミは含みません。予約前に公式サイトまたは合法的な予約サイトで確認してください。",
    priorityCandidate: "本サイトの優先候補",
    travelerMatchPrefix: "",
    travelerMatchSuffix: "向き",
    inWalkRange: "設定した徒歩距離内",
    outsideWalkRange: "ただし他の条件との相性が高い",
    matchedPriorities: "一致した条件",
    familyRoom: "複数人・家族滞在で客室の柔軟性あり",
  },
} satisfies Record<SupportedLocale, Record<string, string>>;

const travelerCopy = {
  zh: {
    first_time: {
      label: "第一次自由行",
      description: "想把交通、餐飲和景點移動都變簡單。",
    },
    family: {
      label: "親子同行",
      description: "在意房型空間、電梯、行李與中途休息。",
    },
    business: {
      label: "商務出差",
      description: "需要有效率的交通、穩定網路與工作空間。",
    },
    transfer: {
      label: "轉乘早班",
      description: "高鐵、台鐵、機場捷運或客運銜接是重點。",
    },
    budget: {
      label: "控制預算",
      description: "願意在空間或距離上取捨，優先看必要條件。",
    },
  },
  en: {
    first_time: {
      label: "First-time visitor",
      description: "Make transit, food, and sightseeing simple.",
    },
    family: {
      label: "Family trip",
      description: "Care about room space, elevators, luggage, and rest breaks.",
    },
    business: {
      label: "Business trip",
      description: "Need efficient transit, stable Wi-Fi, and work space.",
    },
    transfer: {
      label: "Early transfer",
      description: "HSR, TRA, Airport MRT, or bus connections matter most.",
    },
    budget: {
      label: "Budget control",
      description: "Trade some space or distance for essential comfort.",
    },
  },
  ja: {
    first_time: {
      label: "初めての台北",
      description: "交通、食事、観光をシンプルにしたい。",
    },
    family: {
      label: "家族旅行",
      description: "客室の広さ、エレベーター、荷物、休憩しやすさを重視。",
    },
    business: {
      label: "出張",
      description: "交通効率、安定したWi-Fi、作業スペースが必要。",
    },
    transfer: {
      label: "早朝・乗り継ぎ",
      description: "高鉄、台鉄、空港MRT、バス接続が重要。",
    },
    budget: {
      label: "予算重視",
      description: "空間や距離を少し調整して必要条件を優先。",
    },
  },
} satisfies Record<
  SupportedLocale,
  Record<TravelerType, { label: string; description: string }>
>;

const budgetCopy = {
  zh: {
    value: "精打細算",
    mid: "中等舒適",
    premium: "想住好一點",
  },
  en: {
    value: "Value-focused",
    mid: "Balanced comfort",
    premium: "Nicer stay",
  },
  ja: {
    value: "価格重視",
    mid: "バランス重視",
    premium: "少し上質",
  },
} satisfies Record<SupportedLocale, Record<BudgetLevel, string>>;

const priorityCopy = {
  zh: {
    near_station: "離車站出口近",
    family_room: "多人房型彈性",
    quiet: "安靜好睡",
    workspace: "Wi-Fi 與工作桌",
    luggage: "行李寄放方便",
    night_food: "晚上吃東西方便",
    design: "設計感或新穎",
  },
  en: {
    near_station: "Close to station exits",
    family_room: "Flexible rooms for groups",
    quiet: "Quiet sleep",
    workspace: "Wi-Fi and desk",
    luggage: "Easy luggage storage",
    night_food: "Late food nearby",
    design: "Design or newer feel",
  },
  ja: {
    near_station: "駅出口に近い",
    family_room: "複数人向け客室",
    quiet: "静かに眠れる",
    workspace: "Wi-Fiと作業机",
    luggage: "荷物預かりが便利",
    night_food: "夜の食事が便利",
    design: "デザイン性・新しさ",
  },
} satisfies Record<SupportedLocale, Record<Priority, string>>;

const priceTierCopy = {
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

const maxWalkCopy = {
  zh: maxWalkOptions.map((option) => ({
    value: option.value,
    label: option.label,
  })),
  en: maxWalkOptions.map((option) => ({
    value: option.value,
    label: `Within ${option.value} min`,
  })),
  ja: maxWalkOptions.map((option) => ({
    value: option.value,
    label: `${option.value}分以内`,
  })),
} satisfies Record<SupportedLocale, { value: number; label: string }[]>;

function getTravelerLabel(value: TravelerType, locale: SupportedLocale) {
  return travelerCopy[locale][value].label;
}

function getPriorityLabel(value: Priority, locale: SupportedLocale) {
  return priorityCopy[locale][value];
}

function getMapUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

function scoreHotel(hotel: HotelCandidate, preferences: Preferences) {
  let score = 0;

  score += hotel.priorityBoost ?? 0;

  if (hotel.bestFor.includes(preferences.traveler)) {
    score += 8;
  }

  score += budgetScore[preferences.budget][hotel.priceTier];

  if (hotel.walkMinutes <= preferences.maxWalk) {
    score += 6;
  } else {
    score -= Math.min(6, Math.ceil((hotel.walkMinutes - preferences.maxWalk) / 2));
  }

  score += preferences.priorities.filter((priority) =>
    hotel.priorities.includes(priority)
  ).length * 3;

  if (preferences.guestCount >= 3) {
    score += hotel.priorities.includes("family_room") ? 4 : -2;
  }

  if (
    preferences.traveler === "business" &&
    hotel.priorities.includes("workspace")
  ) {
    score += 2;
  }

  if (
    preferences.traveler === "transfer" &&
    hotel.priorities.includes("near_station")
  ) {
    score += 2;
  }

  return score;
}

function getHotelCopy(hotel: HotelCandidate, locale: SupportedLocale) {
  if (locale === "zh") {
    return {
      name: hotel.name,
      subName: hotel.englishName,
      area: hotel.area,
      highlights: hotel.highlights,
      caution: hotel.caution,
    };
  }

  return {
    name: hotel.localized?.[locale]?.name ?? hotel.englishName,
    subName: hotel.localized?.[locale]?.subName ?? hotel.name,
    area: hotel.localized?.[locale]?.area ?? hotel.area,
    highlights: hotel.localized?.[locale]?.highlights ?? hotel.highlights,
    caution: hotel.localized?.[locale]?.caution ?? hotel.caution,
  };
}

function getMatchNotes(
  hotel: HotelCandidate,
  preferences: Preferences,
  locale: SupportedLocale
) {
  const t = copy[locale];
  const notes: string[] = [];
  const matchedPriorities = preferences.priorities.filter((priority) =>
    hotel.priorities.includes(priority)
  );

  if (hotel.priorityBoost) {
    notes.push(t.priorityCandidate);
  }

  if (hotel.bestFor.includes(preferences.traveler)) {
    notes.push(
      `${t.travelerMatchPrefix}「${getTravelerLabel(
        preferences.traveler,
        locale
      )}」${t.travelerMatchSuffix}`
    );
  }

  if (hotel.walkMinutes <= preferences.maxWalk) {
    notes.push(
      `${t.walkMinutes} ${hotel.walkMinutes} ${t.minutes}，${t.inWalkRange}`
    );
  } else {
    notes.push(
      `${t.walkMinutes} ${hotel.walkMinutes} ${t.minutes}，${t.outsideWalkRange}`
    );
  }

  if (matchedPriorities.length > 0) {
    notes.push(
      `${t.matchedPriorities}: ${matchedPriorities
        .map((priority) => getPriorityLabel(priority, locale))
        .join(locale === "en" ? ", " : "、")}`
    );
  }

  if (preferences.guestCount >= 3 && hotel.priorities.includes("family_room")) {
    notes.push(t.familyRoom);
  }

  return notes.slice(0, 3);
}

function getMatchPercent(score: number) {
  return Math.max(62, Math.min(98, 58 + score * 3));
}

export function HotelRecommender({ locale = "zh" }: HotelRecommenderProps) {
  const t = copy[locale];
  const [traveler, setTraveler] = useState<TravelerType>("first_time");
  const [budget, setBudget] = useState<BudgetLevel>("mid");
  const [maxWalk, setMaxWalk] = useState(8);
  const [guestCount, setGuestCount] = useState(2);
  const [selectedPriorities, setSelectedPriorities] = useState<Priority[]>([
    "near_station",
    "luggage",
  ]);
  const [submittedPreferences, setSubmittedPreferences] =
    useState<Preferences | null>(null);

  const recommendations = useMemo<Recommendation[]>(() => {
    if (!submittedPreferences) {
      return [];
    }

    return hotelCandidates
      .map((hotel) => ({
        hotel,
        score: scoreHotel(hotel, submittedPreferences),
        notes: getMatchNotes(hotel, submittedPreferences, locale),
      }))
      .sort((first, second) => {
        if (second.score !== first.score) {
          return second.score - first.score;
        }

        return first.hotel.walkMinutes - second.hotel.walkMinutes;
      })
      .slice(0, 3);
  }, [locale, submittedPreferences]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmittedPreferences({
      traveler,
      budget,
      maxWalk,
      guestCount,
      priorities: selectedPriorities,
    });
  }

  function togglePriority(priority: Priority) {
    setSelectedPriorities((current) =>
      current.includes(priority)
        ? current.filter((item) => item !== priority)
        : [...current, priority]
    );
  }

  return (
    <section className="mt-12" id="hotel-recommender" lang={locale === "zh" ? "zh-Hant" : locale}>
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
          {t.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950">
          {t.title}
        </h2>
        <p className="mt-3 text-base leading-8 text-zinc-700">
          {t.description}
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <form
          className="rounded-lg border border-teal-100 bg-white p-6 shadow-sm"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <legend className="text-base font-semibold text-zinc-950">
              {t.travelerLegend}
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {travelerOptions.map((option) => {
                const isSelected = traveler === option.value;
                const localizedOption = travelerCopy[locale][option.value];

                return (
                  <button
                    aria-pressed={isSelected}
                    className={`rounded-md border px-4 py-3 text-left transition ${
                      isSelected
                        ? "border-teal-700 bg-teal-50 text-teal-950"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-teal-300"
                    }`}
                    key={option.value}
                    onClick={() => setTraveler(option.value)}
                    type="button"
                  >
                    <span className="block text-sm font-semibold">
                      {localizedOption.label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-zinc-500">
                      {localizedOption.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <label className="grid gap-2 text-sm font-semibold text-zinc-950">
              {t.budgetLabel}
              <select
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 text-sm font-normal text-zinc-800"
                onChange={(event) => setBudget(event.target.value as BudgetLevel)}
                value={budget}
              >
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {budgetCopy[locale][option.value]}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-zinc-950">
              {t.walkLabel}
              <select
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 text-sm font-normal text-zinc-800"
                onChange={(event) => setMaxWalk(Number(event.target.value))}
                value={maxWalk}
              >
                {maxWalkCopy[locale].map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-zinc-950">
              {t.guestLabel}
              <input
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 text-sm font-normal text-zinc-800"
                max={6}
                min={1}
                onChange={(event) =>
                  setGuestCount(
                    Math.min(6, Math.max(1, Number(event.target.value) || 1))
                  )
                }
                type="number"
                value={guestCount}
              />
            </label>
          </div>

          <fieldset className="mt-6">
            <legend className="text-base font-semibold text-zinc-950">
              {t.prioritiesLegend}
            </legend>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {priorityOptions.map((option) => {
                const isChecked = selectedPriorities.includes(option.value);

                return (
                  <label
                    className={`flex items-center gap-3 rounded-md border px-3 py-3 text-sm transition ${
                      isChecked
                        ? "border-teal-700 bg-teal-50 text-teal-950"
                        : "border-zinc-200 bg-white text-zinc-700"
                    }`}
                    key={option.value}
                  >
                    <input
                      checked={isChecked}
                      className="h-4 w-4 accent-teal-700"
                      onChange={() => togglePriority(option.value)}
                      type="checkbox"
                    />
                    {priorityCopy[locale][option.value]}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <button
            className="mt-6 w-full rounded-md bg-teal-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            type="submit"
          >
            {t.submit}
          </button>
        </form>

        <div aria-live="polite" className="space-y-4">
          {!submittedPreferences ? (
            <div className="rounded-lg border border-dashed border-zinc-300 bg-white/70 p-6">
              <h3 className="text-xl font-semibold tracking-normal text-zinc-950">
                {t.resultTitle}
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {t.empty}
              </p>
            </div>
          ) : (
            <>
              <div>
                <p className="text-sm font-semibold text-teal-800">
                  {t.sortedBy}「
                  {getTravelerLabel(submittedPreferences.traveler, locale)}」
                  {t.sortedSuffix}
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-normal text-zinc-950">
                  {t.topThree}
                </h3>
              </div>

              {recommendations.map(({ hotel, notes, score }, index) => {
                const hotelCopy = getHotelCopy(hotel, locale);

                return (
                  <article
                    className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
                    key={hotel.id}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
                          #{index + 1} {t.match} {getMatchPercent(score)}%
                        </p>
                        <h4 className="mt-2 text-xl font-semibold tracking-normal text-zinc-950">
                          {hotelCopy.name}
                        </h4>
                        <p className="mt-1 text-sm text-zinc-500">
                          {hotelCopy.subName}
                        </p>
                      </div>
                      <span className="w-fit rounded-md bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-700">
                        {priceTierCopy[locale][hotel.priceTier]}
                      </span>
                    </div>

                    <div className="mt-4 grid gap-2 text-sm leading-6 text-zinc-700 sm:grid-cols-2">
                      <p>{hotelCopy.area}</p>
                      <p>
                        {t.walkMinutes} {hotel.walkMinutes} {t.minutes}
                      </p>
                    </div>

                    <ul className="mt-4 grid gap-2">
                      {notes.map((note) => (
                        <li
                          className="flex gap-2 text-sm leading-6 text-zinc-700"
                          key={note}
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>

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

                    <p className="mt-4 text-sm leading-7 text-zinc-600">
                      {hotelCopy.caution}
                    </p>

                    <a
                      className="mt-4 inline-flex rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
                      href={getMapUrl(hotel.mapQuery)}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {t.map}
                    </a>
                  </article>
                );
              })}

              <p className="text-xs leading-6 text-zinc-500">
                {t.disclaimer}
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
