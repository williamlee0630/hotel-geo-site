import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LocalizedHomePage } from "@/components/LocalizedHomePage";
import { hotelCandidates } from "@/data/hotelRecommendations";
import { localizedHomeContent } from "@/data/localizedHome";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  hotelRecommendationItemListJsonLd,
} from "@/lib/schema";

const content = localizedHomeContent.en;

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  alternates: {
    canonical: content.path,
    languages: {
      "zh-Hant": "/",
      en: "/en",
      ja: "/ja",
    },
  },
};

const jsonLd = [
  articleJsonLd({
    path: content.path,
    title: content.metadata.title,
    description: content.metadata.description,
    locale: content.locale,
  }),
  hotelRecommendationItemListJsonLd(content.path, hotelCandidates, "en"),
  breadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: content.breadcrumbName, path: content.path },
  ]),
];

export default function EnglishHomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <LocalizedHomePage content={content} />
    </>
  );
}
