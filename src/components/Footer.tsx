import Link from "next/link";
import { conditionLinks, footerLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-normal">
            {siteConfig.siteName}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300">
            {siteConfig.description}
          </p>
          <p className="mt-4 text-sm text-zinc-400">
            {siteConfig.transparencyNote}
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold">指南導覽</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                className="text-zinc-300 hover:text-amber-200"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold">住宿條件</h2>
          <div className="mt-4 grid gap-2 text-sm">
            {conditionLinks.map((link) => (
              <Link
                key={link.href}
                className="text-zinc-300 hover:text-amber-200"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
            <Link className="text-zinc-300 hover:text-amber-200" href="/about">
              關於本網站
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
