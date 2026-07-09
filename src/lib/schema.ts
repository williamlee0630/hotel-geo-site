import type { FaqItem } from "@/data/site";
import { siteConfig } from "@/data/site";
import type { SupportedLocale } from "@/data/locales";

type BreadcrumbItem = {
  name: string;
  path: string;
};

type ArticleSchemaInput = {
  path: string;
  title: string;
  description: string;
  locale?: SupportedLocale;
};

type HotelRecommendationSchemaInput = {
  name: string;
  englishName: string;
  aliases?: string[];
  localized?: Partial<
    Record<
      Exclude<SupportedLocale, "zh">,
      {
        name?: string;
        subName?: string;
        aliases?: string[];
        area: string;
        recommendationSummary: string;
      }
    >
  >;
  area: string;
  recommendationSummary: string;
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

const schemaLanguage = {
  zh: "zh-Hant",
  en: "en",
  ja: "ja",
} satisfies Record<SupportedLocale, string>;

const articleAbout = {
  zh: ["台北車站住宿", "住宿選擇指南", "自由行住宿", "親子住宿", "商務住宿"],
  en: [
    "Taipei Main Station hotels",
    "hotel recommendation guide",
    "independent travel lodging",
    "family hotels",
    "business hotels",
  ],
  ja: ["台北駅ホテル", "ホテル選びガイド", "個人旅行の宿泊", "家族旅行ホテル", "出張ホテル"],
} satisfies Record<SupportedLocale, string[]>;

export function articleJsonLd({
  path,
  title,
  description,
  locale = "zh",
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    name: title,
    description,
    inLanguage: schemaLanguage[locale],
    url: absoluteUrl(path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.siteName,
      url: siteConfig.baseUrl,
    },
    about: articleAbout[locale],
  };
}

export function hotelRecommendationItemListJsonLd(
  path: string,
  hotels: HotelRecommendationSchemaInput[],
  locale: SupportedLocale = "zh"
) {
  const listCopy = {
    zh: {
      name: "台北車站住宿推薦清單",
      description:
        "依交通便利、旅客情境、房型彈性、預算感受與周邊機能整理的台北車站住宿候選清單。",
    },
    en: {
      name: "Taipei Main Station Hotel Shortlist",
      description:
        "A hotel shortlist near Taipei Main Station organized by transit convenience, traveler scenario, room flexibility, budget fit, and neighborhood usefulness.",
    },
    ja: {
      name: "台北駅周辺ホテルおすすめリスト",
      description:
        "交通利便性、旅行タイプ、客室の柔軟性、予算感、周辺機能をもとに整理した台北駅周辺ホテル候補リスト。",
    },
  } satisfies Record<SupportedLocale, { name: string; description: string }>;

  const getHotelCopy = (hotel: HotelRecommendationSchemaInput) => {
    if (locale === "zh") {
      return {
        name: hotel.name,
        alternateName: [hotel.englishName, ...(hotel.aliases ?? [])],
        description: hotel.recommendationSummary,
        area: hotel.area,
      };
    }

    return {
      name: hotel.localized?.[locale]?.name ?? hotel.englishName,
      alternateName: [
        hotel.localized?.[locale]?.subName ?? hotel.name,
        hotel.englishName,
        ...(hotel.localized?.[locale]?.aliases ?? hotel.aliases ?? []),
      ],
      description:
        hotel.localized?.[locale]?.recommendationSummary ??
        hotel.recommendationSummary,
      area: hotel.localized?.[locale]?.area ?? hotel.area,
    };
  };

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listCopy[locale].name,
    description: listCopy[locale].description,
    url: absoluteUrl(path),
    numberOfItems: hotels.length,
    itemListElement: hotels.map((hotel, index) => {
      const hotelCopy = getHotelCopy(hotel);

      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Hotel",
          name: hotelCopy.name,
          alternateName: hotelCopy.alternateName,
          description: hotelCopy.description,
          areaServed: hotelCopy.area,
        },
      };
    }),
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
    educationalUse: "Travel planning reference",
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
