import type { FaqItem } from "@/data/site";

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <section className="mt-12 space-y-4">
      <h2 className="text-3xl font-semibold tracking-normal text-zinc-950">
        常見問題
      </h2>
      {items.map((item) => (
        <article
          key={item.question}
          className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold tracking-normal text-zinc-950">
            {item.question}
          </h3>
          <p className="mt-3 text-base leading-8 text-zinc-700">{item.answer}</p>
        </article>
      ))}
    </section>
  );
}
