import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = `${siteConfig.baseUrl}/sitemap.xml`;
  const host = new URL(siteConfig.baseUrl).host;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["Googlebot", "Bingbot", "Applebot"],
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot"],
        allow: "/",
      },
    ],
    sitemap: sitemapUrl,
    host,
  };
}
