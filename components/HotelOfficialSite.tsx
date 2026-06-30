import {
  contactInfo,
  diningFeatures,
  hotelHighlights,
  hotelProfile,
  nearbyPlaces,
  roomTypes,
  signatureExperiences,
} from "@/data/hotels";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-normal text-zinc-950 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-zinc-600">{description}</p>
    </div>
  );
}

export function HotelOfficialSite() {
  return (
    <div className="min-h-screen bg-[#f6f7f2] text-zinc-950">
      <header className="absolute inset-x-0 top-0 z-20 border-b border-white/20 bg-zinc-950/20 text-white backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 md:px-8">
          <a className="text-lg font-semibold tracking-normal" href="#top">
            {hotelProfile.name}
          </a>
          <nav
            aria-label="主要導覽"
            className="hidden items-center gap-6 text-sm font-medium md:flex"
          >
            <a className="hover:text-amber-200" href="#rooms">
              客房
            </a>
            <a className="hover:text-amber-200" href="#dining">
              餐飲
            </a>
            <a className="hover:text-amber-200" href="#experiences">
              設施
            </a>
            <a className="hover:text-amber-200" href="#location">
              位置
            </a>
          </nav>
          <a
            className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-amber-100"
            href="#booking"
          >
            預訂住宿
          </a>
        </div>
      </header>

      <main id="top">
        <section
          className="relative flex min-h-[86svh] items-end bg-cover bg-center text-white"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(11, 18, 18, 0.78), rgba(11, 18, 18, 0.34) 48%, rgba(11, 18, 18, 0.22)), url("${hotelProfile.heroImage}")`,
          }}
        >
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 pb-16 pt-32 md:px-8 lg:grid-cols-[1fr_380px] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-200">
                {hotelProfile.location}
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-normal md:text-7xl">
                {hotelProfile.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-zinc-100 md:text-xl">
                {hotelProfile.tagline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className="rounded-md bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
                  href="#booking"
                >
                  查看入住方案
                </a>
                <a
                  className="rounded-md border border-white/70 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-white hover:text-zinc-950"
                  href="#rooms"
                >
                  瀏覽客房
                </a>
              </div>
            </div>

            <div
              id="booking"
              className="rounded-lg border border-white/25 bg-white/92 p-5 text-zinc-950 shadow-2xl backdrop-blur"
            >
              <p className="text-sm font-semibold text-teal-700">今日專屬禮遇</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal">
                河景早鳥住房
              </h2>
              <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
                <div className="rounded-md bg-zinc-100 p-3">
                  <dt className="text-zinc-500">入住</dt>
                  <dd className="mt-1 font-semibold">15:00</dd>
                </div>
                <div className="rounded-md bg-zinc-100 p-3">
                  <dt className="text-zinc-500">退房</dt>
                  <dd className="mt-1 font-semibold">11:00</dd>
                </div>
                <div className="rounded-md bg-zinc-100 p-3">
                  <dt className="text-zinc-500">含早餐</dt>
                  <dd className="mt-1 font-semibold">2 位</dd>
                </div>
              </dl>
              <a
                className="mt-5 block rounded-md bg-teal-800 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-teal-700"
                href={`tel:${contactInfo.phoneHref}`}
              >
                致電訂房
              </a>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-6 md:grid-cols-3 md:px-8">
            {hotelHighlights.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-teal-900 text-sm font-semibold text-white">
                  {item.code}
                </span>
                <div>
                  <h2 className="text-base font-semibold text-zinc-950">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="rooms" className="px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="Rooms"
            title="為停留而設計的房型"
            description="從晨光照進房內開始，到夜晚城市燈影落在窗邊，每一間客房都保留安靜、明亮與舒適的節奏。"
          />
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">
            {roomTypes.map((room) => (
              <article
                key={room.name}
                className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.18)), url("${room.image}")`,
                  }}
                />
                <div className="p-5">
                  <p className="text-sm font-semibold text-amber-700">
                    {room.size}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-normal">
                    {room.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {room.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-zinc-100 pt-5">
                    <span className="text-sm text-zinc-500">每晚起</span>
                    <span className="text-lg font-semibold">{room.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="dining" className="bg-zinc-950 px-5 py-20 text-white md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">
                Dining
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal md:text-4xl">
                晨光餐廳與河岸酒吧
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-300">
                早餐以台灣在地食材與手作烘焙為主軸，夜晚則換上低光、木質與香氣，供應小盤料理、茶調酒與城市夜景。
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {diningFeatures.map((item) => (
                  <div key={item.title} className="rounded-lg bg-white/8 p-4">
                    <p className="text-2xl font-semibold text-amber-200">
                      {item.value}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="min-h-[440px] rounded-lg bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.24)), url("${hotelProfile.diningImage}")`,
              }}
            />
          </div>
        </section>

        <section id="experiences" className="px-5 py-20 md:px-8">
          <SectionHeading
            eyebrow="Facilities"
            title="把旅程留在飯店裡慢慢展開"
            description="無論是商務短住、週末旅行，或只是想離開日常半天，晴川行館都準備了剛剛好的停留理由。"
          />
          <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
            {signatureExperiences.map((experience) => (
              <article
                key={experience.title}
                className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <p className="text-sm font-semibold text-teal-700">
                  {experience.label}
                </p>
                <h3 className="mt-3 text-xl font-semibold tracking-normal">
                  {experience.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {experience.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="location" className="bg-white px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_420px]">
            <div className="rounded-lg border border-zinc-200 bg-[#edf4ef] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                Location
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-normal">
                河岸旁，離城市剛好一步
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                {contactInfo.address}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {nearbyPlaces.map((place) => (
                  <div
                    key={place.name}
                    className="rounded-md border border-white bg-white/80 p-4"
                  >
                    <h3 className="font-semibold">{place.name}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{place.time}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="rounded-lg border border-zinc-200 bg-zinc-950 p-6 text-white">
              <h2 className="text-2xl font-semibold tracking-normal">
                聯絡晴川行館
              </h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-zinc-400">電話</dt>
                  <dd className="mt-1 text-lg font-semibold">
                    {contactInfo.phone}
                  </dd>
                </div>
                <div>
                  <dt className="text-zinc-400">電子信箱</dt>
                  <dd className="mt-1">{contactInfo.email}</dd>
                </div>
                <div>
                  <dt className="text-zinc-400">服務時間</dt>
                  <dd className="mt-1">{contactInfo.hours}</dd>
                </div>
              </dl>
              <a
                className="mt-8 block rounded-md bg-amber-300 px-5 py-3 text-center text-sm font-semibold text-zinc-950 transition hover:bg-amber-200"
                href={`mailto:${contactInfo.email}`}
              >
                詢問住宿需求
              </a>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
