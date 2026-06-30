import type { MetadataRoute } from "next";
import { navLinks, siteConfig } from "@/data/site";

const routePriority: Record<string, number> = {
  "/": 1,
  "/faq": 0.95,
  "/location": 0.9,
  "/rooms": 0.85,
  "/nearby": 0.85,
  "/facilities": 0.75,
  "/policies": 0.7,
  "/about": 0.7,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return navLinks.map((link) => ({
    url: `${siteConfig.baseUrl}${link.href === "/" ? "" : link.href}`,
    lastModified,
    changeFrequency: "monthly",
    priority: routePriority[link.href] ?? 0.7,
  }));
}
