"use client";

import { useMemo, useState } from "react";
import { hotels, type Hotel } from "@/data/hotels";

type SortKey = "recommended" | "rating" | "price" | "metro";

const districtOptions = ["全部地區", ...Array.from(new Set(hotels.map((hotel) => hotel.district)))];

const sortLabels: Record<SortKey, string> = {
  recommended: "推薦",
  rating: "評分",
  price: "價格",
  metro: "捷運距離",
};

function formatPrice(price: number) {
  return `NT$${price.toLocaleString("zh-TW")}`;
}

function sortHotels(items: Hotel[], sortBy: SortKey) {
  const sorted = [...items];

  if (sortBy === "rating") {
    return sorted.sort((a, b) => b.rating - a.rating);
  }

  if (sortBy === "price") {
    return sorted.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "metro") {
    return sorted.sort((a, b) => a.walkingMinutes - b.walkingMinutes);
  }

  return sorted.sort((a, b) => {
    const scoreA = a.rating * 18 - a.walkingMinutes * 1.2 - a.price / 900;
    const scoreB = b.rating * 18 - b.walkingMinutes * 1.2 - b.price / 900;
    return scoreB - scoreA;
  });
}

export function HotelExplorer() {
  const [query, setQuery] = useState("");
  const [district, setDistrict] = useState("全部地區");
  const [sortBy, setSortBy] = useState<SortKey>("recommended");
  const [onlyFlexible, setOnlyFlexible] = useState(false);
  const [selectedId, setSelectedId] = useState(hotels[0].id);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  const filteredHotels = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const filtered = hotels.filter((hotel) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        [
          hotel.name,
          hotel.district,
          hotel.address,
          hotel.metro,
          hotel.summary,
          ...hotel.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      const matchesDistrict = district === "全部地區" || hotel.district === district;
      const matchesCancel = !onlyFlexible || hotel.flexibleCancel;

      return matchesQuery && matchesDistrict && matchesCancel;
    });

    return sortHotels(filtered, sortBy);
  }, [district, onlyFlexible, query, sortBy]);

  const selectedHotel =
    filteredHotels.find((hotel) => hotel.id === selectedId) ?? filteredHotels[0] ?? hotels[0];

  const averageRating =
    filteredHotels.length > 0
      ? filteredHotels.reduce((sum, hotel) => sum + hotel.rating, 0) / filteredHotels.length
      : 0;

  function toggleSaved(id: string) {
    setSavedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-[#f5f7f2] text-zinc-950">
      <header className="border-b border-zinc-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-sm font-medium text-teal-700">Hotel Geo Site</p>
            <h1 className="mt-1 text-2xl font-semibold tracking-normal text-zinc-950 md:text-3xl">
              台北飯店地理搜尋
            </h1>
          </div>
          <nav aria-label="主要導覽" className="flex flex-wrap gap-2 text-sm font-medium text-zinc-600">
            <a className="rounded-md border border-zinc-200 px-3 py-2 hover:border-teal-500 hover:text-teal-700" href="#hotels">
              飯店列表
            </a>
            <a className="rounded-md border border-zinc-200 px-3 py-2 hover:border-teal-500 hover:text-teal-700" href="#map">
              位置分布
            </a>
            <a className="rounded-md border border-zinc-200 px-3 py-2 hover:border-teal-500 hover:text-teal-700" href="#summary">
              篩選摘要
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-6 md:px-8 lg:grid-cols-[360px_1fr]">
        <aside className="space-y-4 lg:sticky lg:top-4 lg:self-start">
          <section className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm" aria-labelledby="search-title">
            <h2 id="search-title" className="text-base font-semibold text-zinc-950">
              搜尋條件
            </h2>

            <label className="mt-4 block text-sm font-medium text-zinc-700" htmlFor="hotel-search">
              關鍵字
            </label>
            <input
              id="hotel-search"
              className="mt-2 h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="輸入飯店、地區、捷運站"
            />

            <label className="mt-4 block text-sm font-medium text-zinc-700" htmlFor="district">
              地區
            </label>
            <select
              id="district"
              className="mt-2 h-11 w-full rounded-md border border-zinc-300 bg-white px-3 text-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
              value={district}
              onChange={(event) => setDistrict(event.target.value)}
            >
              {districtOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>

            <div className="mt-4">
              <p className="text-sm font-medium text-zinc-700">排序</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {(Object.keys(sortLabels) as SortKey[]).map((key) => (
                  <button
                    key={key}
                    className={`h-10 rounded-md border px-3 text-sm font-medium transition ${
                      sortBy === key
                        ? "border-teal-700 bg-teal-700 text-white"
                        : "border-zinc-300 bg-white text-zinc-700 hover:border-teal-600"
                    }`}
                    type="button"
                    onClick={() => setSortBy(key)}
                  >
                    {sortLabels[key]}
                  </button>
                ))}
              </div>
            </div>

            <label className="mt-4 flex items-center gap-3 rounded-md border border-zinc-200 bg-zinc-50 px-3 py-3 text-sm font-medium text-zinc-700">
              <input
                className="h-4 w-4 accent-teal-700"
                checked={onlyFlexible}
                type="checkbox"
                onChange={(event) => setOnlyFlexible(event.target.checked)}
              />
              只看可彈性取消
            </label>
          </section>

          <section id="summary" className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm" aria-labelledby="summary-title">
            <h2 id="summary-title" className="text-base font-semibold text-zinc-950">
              目前結果
            </h2>
            <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-md bg-zinc-50 px-2 py-3">
                <dt className="text-xs text-zinc-500">飯店</dt>
                <dd className="mt-1 text-xl font-semibold text-zinc-950">{filteredHotels.length}</dd>
              </div>
              <div className="rounded-md bg-zinc-50 px-2 py-3">
                <dt className="text-xs text-zinc-500">均分</dt>
                <dd className="mt-1 text-xl font-semibold text-zinc-950">{averageRating.toFixed(1)}</dd>
              </div>
              <div className="rounded-md bg-zinc-50 px-2 py-3">
                <dt className="text-xs text-zinc-500">收藏</dt>
                <dd className="mt-1 text-xl font-semibold text-zinc-950">{savedIds.size}</dd>
              </div>
            </dl>
          </section>
        </aside>

        <div className="space-y-6">
          <section id="map" className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm" aria-labelledby="map-title">
            <div className="grid lg:grid-cols-[1fr_320px]">
              <div className="p-4 md:p-5">
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 id="map-title" className="text-xl font-semibold text-zinc-950">
                      位置分布
                    </h2>
                    <p className="mt-1 text-sm text-zinc-600">
                      點選地圖標記或飯店卡片，可以查看右側摘要。
                    </p>
                  </div>
                  <span className="w-fit rounded-md bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                    範例資料
                  </span>
                </div>

                <div className="map-surface relative aspect-[4/3] min-h-[320px] overflow-hidden rounded-lg border border-zinc-200">
                  <div className="absolute left-[12%] right-[8%] top-[47%] h-2 rounded-full bg-teal-500/70" />
                  <div className="absolute bottom-[12%] left-[48%] top-[10%] w-2 rounded-full bg-rose-400/70" />
                  <div className="absolute left-[20%] right-[18%] top-[25%] h-1 rounded-full bg-zinc-400/60" />
                  <div className="absolute bottom-[18%] left-[26%] right-[10%] h-1 rounded-full bg-zinc-400/60" />
                  <div className="absolute left-5 top-5 rounded-md bg-white/90 px-3 py-2 text-xs font-medium text-zinc-600 shadow-sm">
                    Taipei sample map
                  </div>

                  {filteredHotels.map((hotel) => {
                    const isSelected = hotel.id === selectedHotel.id;
                    const isSaved = savedIds.has(hotel.id);

                    return (
                      <button
                        key={hotel.id}
                        aria-label={`選取 ${hotel.name}`}
                        className={`absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 text-sm font-semibold shadow-md transition ${
                          isSelected
                            ? "z-20 border-zinc-950 bg-zinc-950 text-white"
                            : "z-10 border-white bg-teal-700 text-white hover:bg-teal-800"
                        }`}
                        style={{ left: `${hotel.mapX}%`, top: `${hotel.mapY}%` }}
                        type="button"
                        onClick={() => setSelectedId(hotel.id)}
                      >
                        {isSaved ? "★" : hotel.rating.toFixed(1)}
                      </button>
                    );
                  })}
                </div>
              </div>

              <aside className="border-t border-zinc-200 bg-zinc-50 p-4 md:p-5 lg:border-l lg:border-t-0">
                <div className={`h-36 rounded-lg bg-gradient-to-br ${selectedHotel.photoClass} border border-white shadow-inner`} />
                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-950">{selectedHotel.name}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{selectedHotel.district} · {selectedHotel.metro}</p>
                  </div>
                  <button
                    className={`h-10 rounded-md border px-3 text-sm font-medium ${
                      savedIds.has(selectedHotel.id)
                        ? "border-amber-500 bg-amber-100 text-amber-900"
                        : "border-zinc-300 bg-white text-zinc-700 hover:border-amber-500"
                    }`}
                    type="button"
                    onClick={() => toggleSaved(selectedHotel.id)}
                  >
                    {savedIds.has(selectedHotel.id) ? "已收藏" : "收藏"}
                  </button>
                </div>
                <p className="mt-3 text-sm leading-6 text-zinc-700">{selectedHotel.summary}</p>
                <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <div className="rounded-md bg-white p-3">
                    <dt className="text-zinc-500">每晚價格</dt>
                    <dd className="mt-1 font-semibold text-zinc-950">{formatPrice(selectedHotel.price)}</dd>
                  </div>
                  <div className="rounded-md bg-white p-3">
                    <dt className="text-zinc-500">捷運步行</dt>
                    <dd className="mt-1 font-semibold text-zinc-950">{selectedHotel.walkingMinutes} 分鐘</dd>
                  </div>
                  <div className="rounded-md bg-white p-3">
                    <dt className="text-zinc-500">評分</dt>
                    <dd className="mt-1 font-semibold text-zinc-950">{selectedHotel.rating} / 5</dd>
                  </div>
                  <div className="rounded-md bg-white p-3">
                    <dt className="text-zinc-500">評論數</dt>
                    <dd className="mt-1 font-semibold text-zinc-950">{selectedHotel.reviews.toLocaleString("zh-TW")}</dd>
                  </div>
                </dl>
              </aside>
            </div>
          </section>

          <section id="hotels" aria-labelledby="hotels-title">
            <div className="mb-3 flex items-center justify-between gap-4">
              <div>
                <h2 id="hotels-title" className="text-xl font-semibold text-zinc-950">
                  飯店列表
                </h2>
                <p className="mt-1 text-sm text-zinc-600">
                  目前依「{sortLabels[sortBy]}」排序
                </p>
              </div>
            </div>

            {filteredHotels.length === 0 ? (
              <div className="rounded-lg border border-dashed border-zinc-300 bg-white p-8 text-center text-sm text-zinc-600">
                沒有符合條件的飯店。請調整關鍵字或篩選條件。
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {filteredHotels.map((hotel) => {
                  const isSelected = hotel.id === selectedHotel.id;

                  return (
                    <article
                      key={hotel.id}
                      className={`rounded-lg border bg-white p-4 shadow-sm transition ${
                        isSelected ? "border-teal-600 ring-2 ring-teal-100" : "border-zinc-200 hover:border-zinc-300"
                      }`}
                    >
                      <button className="block w-full text-left" type="button" onClick={() => setSelectedId(hotel.id)}>
                        <div className={`h-28 rounded-md bg-gradient-to-br ${hotel.photoClass} border border-zinc-100`} />
                        <div className="mt-4 flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-lg font-semibold text-zinc-950">{hotel.name}</h3>
                            <p className="mt-1 text-sm text-zinc-600">
                              {hotel.district} · {hotel.metro}步行 {hotel.walkingMinutes} 分鐘
                            </p>
                          </div>
                          <span className="rounded-md bg-zinc-950 px-2 py-1 text-sm font-semibold text-white">
                            {hotel.rating}
                          </span>
                        </div>
                        <p className="mt-3 line-clamp-2 text-sm leading-6 text-zinc-700">{hotel.summary}</p>
                      </button>

                      <div className="mt-4 flex flex-wrap gap-2">
                        {hotel.tags.map((tag) => (
                          <span key={tag} className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
                        <p className="text-sm text-zinc-600">
                          <span className="text-lg font-semibold text-zinc-950">{formatPrice(hotel.price)}</span>
                          <span className="ml-1">起 / 晚</span>
                        </p>
                        <button
                          className={`h-10 rounded-md border px-3 text-sm font-medium ${
                            savedIds.has(hotel.id)
                              ? "border-amber-500 bg-amber-100 text-amber-900"
                              : "border-zinc-300 bg-white text-zinc-700 hover:border-amber-500"
                          }`}
                          type="button"
                          onClick={() => toggleSaved(hotel.id)}
                        >
                          {savedIds.has(hotel.id) ? "已收藏" : "收藏"}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
