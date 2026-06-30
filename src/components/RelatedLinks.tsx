import Link from "next/link";

type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

export function RelatedLinks({ links }: { links: RelatedLink[] }) {
  return (
    <section className="mt-12 border-t border-zinc-200 pt-8">
      <h2 className="text-2xl font-semibold tracking-normal text-zinc-950">
        相關頁面
      </h2>
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-teal-500"
            href={link.href}
          >
            <span className="text-base font-semibold text-teal-800">
              {link.label}
            </span>
            <span className="mt-2 block text-sm leading-6 text-zinc-600">
              {link.description}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
