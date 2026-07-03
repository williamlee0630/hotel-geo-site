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

function getTravelerLabel(value: TravelerType) {
  return (
    travelerOptions.find((option) => option.value === value)?.label ?? value
  );
}

function getPriorityLabel(value: Priority) {
  return priorityOptions.find((option) => option.value === value)?.label ?? value;
}

function getMapUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    query
  )}`;
}

function scoreHotel(hotel: HotelCandidate, preferences: Preferences) {
  let score = 0;

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

function getMatchNotes(hotel: HotelCandidate, preferences: Preferences) {
  const notes: string[] = [];
  const matchedPriorities = preferences.priorities.filter((priority) =>
    hotel.priorities.includes(priority)
  );

  if (hotel.bestFor.includes(preferences.traveler)) {
    notes.push(`符合「${getTravelerLabel(preferences.traveler)}」情境`);
  }

  if (hotel.walkMinutes <= preferences.maxWalk) {
    notes.push(`步行約 ${hotel.walkMinutes} 分鐘，落在你的距離設定內`);
  } else {
    notes.push(`步行約 ${hotel.walkMinutes} 分鐘，但其他條件匹配度較高`);
  }

  if (matchedPriorities.length > 0) {
    notes.push(
      `命中重點：${matchedPriorities.map(getPriorityLabel).join("、")}`
    );
  }

  if (preferences.guestCount >= 3 && hotel.priorities.includes("family_room")) {
    notes.push("多人或親子入住時較有房型彈性");
  }

  return notes.slice(0, 3);
}

function getMatchPercent(score: number) {
  return Math.max(62, Math.min(98, 58 + score * 3));
}

export function HotelRecommender() {
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
        notes: getMatchNotes(hotel, submittedPreferences),
      }))
      .sort((first, second) => {
        if (second.score !== first.score) {
          return second.score - first.score;
        }

        return first.hotel.walkMinutes - second.hotel.walkMinutes;
      })
      .slice(0, 3);
  }, [submittedPreferences]);

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
    <section className="mt-12" id="hotel-recommender">
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
          Hotel Matcher
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950">
          依你的需求推薦北車飯店
        </h2>
        <p className="mt-3 text-base leading-8 text-zinc-700">
          選擇旅客情境、預算、步行距離與在意條件後，系統會排序出最符合這趟行程的住宿候選。
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <form
          className="rounded-lg border border-teal-100 bg-white p-6 shadow-sm"
          onSubmit={handleSubmit}
        >
          <fieldset>
            <legend className="text-base font-semibold text-zinc-950">
              旅客情境
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {travelerOptions.map((option) => {
                const isSelected = traveler === option.value;

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
                      {option.label}
                    </span>
                    <span className="mt-1 block text-xs leading-5 text-zinc-500">
                      {option.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <label className="grid gap-2 text-sm font-semibold text-zinc-950">
              預算感受
              <select
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 text-sm font-normal text-zinc-800"
                onChange={(event) => setBudget(event.target.value as BudgetLevel)}
                value={budget}
              >
                {budgetOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-zinc-950">
              可接受步行
              <select
                className="rounded-md border border-zinc-300 bg-white px-3 py-3 text-sm font-normal text-zinc-800"
                onChange={(event) => setMaxWalk(Number(event.target.value))}
                value={maxWalk}
              >
                {maxWalkOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-zinc-950">
              同行人數
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
              這趟最在意
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
                    {option.label}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <button
            className="mt-6 w-full rounded-md bg-teal-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700"
            type="submit"
          >
            送出需求並推薦飯店
          </button>
        </form>

        <div aria-live="polite" className="space-y-4">
          {!submittedPreferences ? (
            <div className="rounded-lg border border-dashed border-zinc-300 bg-white/70 p-6">
              <h3 className="text-xl font-semibold tracking-normal text-zinc-950">
                推薦結果
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-600">
                送出需求後，這裡會顯示最適合的 3 間飯店、匹配原因與 Google 地圖搜尋連結。
              </p>
            </div>
          ) : (
            <>
              <div>
                <p className="text-sm font-semibold text-teal-800">
                  已依「{getTravelerLabel(submittedPreferences.traveler)}」排序
                </p>
                <h3 className="mt-1 text-2xl font-semibold tracking-normal text-zinc-950">
                  推薦前 3 名
                </h3>
              </div>

              {recommendations.map(({ hotel, notes, score }, index) => (
                <article
                  className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
                  key={hotel.id}
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">
                        #{index + 1} 匹配度 {getMatchPercent(score)}%
                      </p>
                      <h4 className="mt-2 text-xl font-semibold tracking-normal text-zinc-950">
                        {hotel.name}
                      </h4>
                      <p className="mt-1 text-sm text-zinc-500">
                        {hotel.englishName}
                      </p>
                    </div>
                    <span className="w-fit rounded-md bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-700">
                      {priceTierLabels[hotel.priceTier]}
                    </span>
                  </div>

                  <div className="mt-4 grid gap-2 text-sm leading-6 text-zinc-700 sm:grid-cols-2">
                    <p>{hotel.area}</p>
                    <p>步行約 {hotel.walkMinutes} 分鐘</p>
                  </div>

                  <ul className="mt-4 grid gap-2">
                    {notes.map((note) => (
                      <li className="flex gap-2 text-sm leading-6 text-zinc-700" key={note}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>

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

                  <p className="mt-4 text-sm leading-7 text-zinc-600">
                    {hotel.caution}
                  </p>

                  <a
                    className="mt-4 inline-flex rounded-md bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
                    href={getMapUrl(hotel.mapQuery)}
                    rel="noreferrer"
                    target="_blank"
                  >
                    打開 Google 地圖
                  </a>
                </article>
              ))}

              <p className="text-xs leading-6 text-zinc-500">
                推薦依內建候選池與需求標籤排序，不含即時房價、空房與評論；訂房前請再確認官方或合法訂房平台資訊。
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
