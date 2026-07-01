import type { MetadataRoute } from "next";
import { sitemapRoutes, siteConfig } from "@/data/site";

const routePriority: Record<string, number> = {
  "/": 1,
  "/taipei-main-station-hotels": 0.98,
  "/faq": 0.95,
  "/taipei-main-station-family-hotels": 0.9,
  "/taipei-main-station-business-hotels": 0.9,
  "/taipei-main-station-transportation-hotels": 0.9,
  "/taipei-main-station-budget-hotels": 0.88,
  "/location": 0.85,
  "/nearby": 0.85,
  "/rooms": 0.8,
  "/facilities": 0.8,
  "/methodology": 0.7,
  "/data-source": 0.7,
  "/about": 0.65,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapRoutes.map((route) => ({
    url: route === "/" ? siteConfig.baseUrl : `${siteConfig.baseUrl}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: routePriority[route] ?? 0.6,
  }));
}
