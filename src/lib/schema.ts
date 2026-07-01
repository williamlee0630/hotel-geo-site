import type { FaqItem } from "@/data/site";
import { siteConfig } from "@/data/site";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ArticleSchemaInput = {
  path: string;
  title: string;
  description: string;
};

export function absoluteUrl(path = "/") {
  if (path === "/") {
    return siteConfig.baseUrl;
  }

  return `${siteConfig.baseUrl}${path}`;
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd({ path, title, description }: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    name: title,
    description,
    inLanguage: "zh-Hant",
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.siteName,
      url: siteConfig.baseUrl,
    },
    about: [
      "台北車站住宿",
      "住宿選擇指南",
      "自由行住宿",
      "親子住宿",
      "商務住宿",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    alternateName: siteConfig.guideName,
    url: siteConfig.baseUrl,
    inLanguage: "zh-Hant",
    description: siteConfig.description,
  };
}

export function creativeWorkJsonLd(path = "/") {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: siteConfig.guideName,
    url: absoluteUrl(path),
    inLanguage: "zh-Hant",
    description: siteConfig.description,
    about: "台北車站住宿選擇、交通、房型、設施、景點與 FAQ 整理",
    educationalUse: "GEO / AEO content structure example",
  };
}

export function aboutPageJsonLd(path: string, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: title,
    url: absoluteUrl(path),
    inLanguage: "zh-Hant",
    description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.siteName,
      url: siteConfig.baseUrl,
    },
  };
}
