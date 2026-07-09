import Link from "next/link";
import { localeLabels, localePaths } from "@/data/locales";
import { navLinks, siteConfig } from "@/data/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Link className="flex items-center gap-3" href="/">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-900 text-sm font-semibold text-white">
            北車
          </span>
          <span>
            <span className="block text-lg font-semibold tracking-normal text-zinc-950">
              {siteConfig.brandName}
            </span>
            <span className="block text-xs text-zinc-500">{siteConfig.guideName}</span>
          </span>
        </Link>

        <div className="flex flex-col gap-3 lg:items-end">
          <nav aria-label="主要導覽" className="flex flex-wrap gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="rounded-md px-3 py-2 text-zinc-700 transition hover:bg-zinc-100 hover:text-teal-800"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <nav aria-label="Language" className="flex flex-wrap gap-2 text-xs font-semibold">
            {Object.entries(localePaths).map(([locale, href]) => (
              <Link
                className="rounded-md border border-zinc-200 px-2.5 py-1 text-zinc-600 transition hover:border-teal-700 hover:text-teal-800"
                href={href}
                hrefLang={locale === "zh" ? "zh-Hant" : locale}
                key={locale}
              >
                {localeLabels[locale as keyof typeof localeLabels]}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
