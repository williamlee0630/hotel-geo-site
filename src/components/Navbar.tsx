import Link from "next/link";
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
      </div>
    </header>
  );
}
