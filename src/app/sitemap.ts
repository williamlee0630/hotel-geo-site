import type { MetadataRoute } from "next";

const siteUrl = "https://hotel-geo-site.vercel.app";
const lastModified = "2026-07-04T11:42:50.036Z";

const routes = [
  { path: "/", priority: 1 },
  { path: "/taipei-main-station-hotels", priority: 0.98 },
  { path: "/taipei-main-station-family-hotels", priority: 0.9 },
  { path: "/taipei-main-station-business-hotels", priority: 0.9 },
  { path: "/taipei-main-station-transportation-hotels", priority: 0.9 },
  { path: "/taipei-main-station-budget-hotels", priority: 0.88 },
  { path: "/rooms", priority: 0.8 },
  { path: "/facilities", priority: 0.8 },
  { path: "/location", priority: 0.85 },
  { path: "/nearby", priority: 0.85 },
  { path: "/faq", priority: 0.95 },
  { path: "/about", priority: 0.65 },
  { path: "/methodology", priority: 0.7 },
  { path: "/data-source", priority: 0.7 },
  { path: "/policies", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
