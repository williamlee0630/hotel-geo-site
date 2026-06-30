import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_1fr] md:px-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-normal">
            {siteConfig.hotelName}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300">
            {siteConfig.demoNotice}
          </p>
          <p className="mt-4 text-sm text-zinc-400">
            示範地址：{siteConfig.demoAddress}
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold">網站導覽</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
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
      </div>
    </footer>
  );
}
