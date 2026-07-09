import type { LinkItem } from "@/data/site";
import type { SupportedLocale } from "@/data/locales";

type LocalizedFaqItem = {
  question: string;
  answer: string;
};

type LocalizedCard = {
  title: string;
  description: string;
};

export type LocalizedHomeContent = {
  locale: Exclude<SupportedLocale, "zh">;
  path: string;
  htmlLang: string;
  metadata: {
    title: string;
    description: string;
  };
  breadcrumbName: string;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  summaryTitle: string;
  summaryPoints: string[];
  travelerSection: {
    title: string;
    description: string;
    links: LinkItem[];
  };
  selectionSection: {
    title: string;
    points: LocalizedCard[];
  };
  conditionSection: {
    title: string;
    description: string;
    links: LinkItem[];
  };
  faqSection: {
    title: string;
    linkLabel: string;
    items: LocalizedFaqItem[];
  };
  aboutSection: {
    title: string;
    description: string;
  };
  relatedTitle: string;
  relatedLinks: LinkItem[];
};

export const localizedHomeContent: Record<
  Exclude<SupportedLocale, "zh">,
  LocalizedHomeContent
> = {
  en: {
    locale: "en",
    path: "/en",
    htmlLang: "en",
    metadata: {
      title:
        "Taipei Main Station Hotel Guide | Recommended Stays Near Taipei Station",
      description:
        "English guide to recommended hotels near Taipei Main Station, including transit-friendly, family, business, value, and Ximending-friendly stays.",
    },
    breadcrumbName: "English Home",
    hero: {
      eyebrow: "Taipei Main Station Stay Guide",
      title: "Taipei Main Station Hotel Guide",
      description:
        "A practical English guide for choosing hotels near Taipei Main Station by transit access, traveler type, room needs, facilities, nearby sights, and FAQs.",
      primaryCta: "View Hotel Shortlist",
      secondaryCta: "Read FAQs",
    },
    summaryTitle: "Key Takeaways",
    summaryPoints: [
      "Taipei Main Station is a practical base for first-time Taipei trips.",
      "It works well for HSR, TRA, MRT, Airport MRT, and bus transfers.",
      "Families should check room space, elevators, and luggage flow.",
      "Business travelers should prioritize Wi-Fi, work space, and transfer efficiency.",
      "Choose by your trip purpose, not only by the shortest map distance.",
    ],
    travelerSection: {
      title: "Choose By Traveler Type",
      description:
        "There is no single best hotel for everyone. First-time visitors, families, business travelers, transfer-focused travelers, and value travelers should prioritize different details.",
      links: [
        {
          href: "#hotel-recommender",
          label: "First-time visitors",
          description:
            "Prioritize simple station access, food nearby, and flexible city sightseeing.",
        },
        {
          href: "#hotel-recommender",
          label: "Families",
          description:
            "Look for room space, elevators, luggage storage, and easy mid-day breaks.",
        },
        {
          href: "#hotel-recommender",
          label: "Business travelers",
          description:
            "Focus on Wi-Fi, desk space, quiet rooms, and efficient rail/MRT access.",
        },
        {
          href: "#hotel-recommender",
          label: "Transit travelers",
          description:
            "Check walking routes to HSR, TRA, MRT, Airport MRT, or bus terminals.",
        },
      ],
    },
    selectionSection: {
      title: "5 Things To Check Before Booking",
      points: [
        {
          title: "Transit route",
          description:
            "Do not rely only on straight-line distance. Check exits, underground routes, elevators, and luggage-friendly paths.",
        },
        {
          title: "Room type",
          description:
            "Couples, families, and business travelers need different bed layouts, luggage space, and desk space.",
        },
        {
          title: "Facilities",
          description:
            "Wi-Fi, desk, laundry, luggage storage, breakfast, and family amenities can change the actual stay experience.",
        },
        {
          title: "Neighborhood",
          description:
            "Food, convenience stores, underground malls, and lighting at night matter around Taipei Main Station.",
        },
        {
          title: "Trip purpose",
          description:
            "A Ximending-heavy trip, a business trip, and an early-train trip may need different hotel locations.",
        },
      ],
    },
    conditionSection: {
      title: "Quick Condition Checks",
      description:
        "If you already know your traveler type, use the matcher. If you are still comparing, start with rooms, facilities, transit, and nearby sights.",
      links: [
        {
          href: "#hotel-recommendation-list",
          label: "Hotel shortlist",
          description: "See the main hotel candidates first.",
        },
        {
          href: "#hotel-recommender",
          label: "Interactive matcher",
          description: "Fine-tune picks by traveler type and priorities.",
        },
        {
          href: "#localized-faq",
          label: "FAQ",
          description: "Read common planning questions.",
        },
        {
          href: "/authority-info",
          label: "Official sources",
          description: "Check official event, transit, and lodging sources.",
        },
      ],
    },
    faqSection: {
      title: "FAQ Preview",
      linkLabel: "Jump to hotel matcher",
      items: [
        {
          question: "Is Taipei Main Station a good area to stay in Taipei?",
          answer:
            "Yes. It is especially useful for travelers who need HSR, TRA, MRT, Airport MRT, buses, and easy city access.",
        },
        {
          question: "Which hotels are easiest for train transfers?",
          answer:
            "Cosmos Hotel Taipei and Caesar Park Hotel Taipei are among the simplest station-front options. Always check the exact walking route before booking.",
        },
        {
          question: "Is Ximending better than Taipei Main Station?",
          answer:
            "Ximending is better for nightlife and shopping. Taipei Main Station is usually better for transfers and intercity rail.",
        },
        {
          question: "Can this site book rooms?",
          answer:
            "No. This site is an informational guide. Confirm prices, availability, policies, and legal lodging details before booking.",
        },
      ],
    },
    aboutSection: {
      title: "About This English Page",
      description:
        "This English page keeps the same hotel shortlist and matching function as the Traditional Chinese page, but presents the planning guidance in English for international travelers.",
    },
    relatedTitle: "Related Reading",
    relatedLinks: [
      {
        href: "/",
        label: "Traditional Chinese version",
        description: "Return to the main Traditional Chinese guide.",
      },
      {
        href: "/ja",
        label: "Japanese version",
        description: "Open the Japanese Taipei Main Station hotel guide.",
      },
      {
        href: "/authority-info",
        label: "Official information sources",
        description: "Check official travel, transit, and lodging links.",
      },
      {
        href: "/taipei-main-station-hotels",
        label: "Full Chinese main guide",
        description: "Read the complete Chinese Taipei Main Station hotel guide.",
      },
    ],
  },
  ja: {
    locale: "ja",
    path: "/ja",
    htmlLang: "ja",
    metadata: {
      title: "台北駅ホテルおすすめガイド | 台北駅周辺の宿泊候補",
      description:
        "台北駅周辺ホテルの日本語ガイド。交通重視、家族旅行、出張、予算重視、西門町方面など、目的別に宿泊候補を整理します。",
    },
    breadcrumbName: "日本語ホーム",
    hero: {
      eyebrow: "Taipei Main Station Stay Guide",
      title: "台北駅ホテルおすすめガイド",
      description:
        "台北駅周辺で泊まるホテルを、交通アクセス、旅行タイプ、客室、設備、周辺観光、FAQから選びやすく整理した日本語ガイドです。",
      primaryCta: "ホテル候補を見る",
      secondaryCta: "FAQを見る",
    },
    summaryTitle: "ポイント",
    summaryPoints: [
      "台北駅周辺は、初めての台北旅行の拠点にしやすいエリアです。",
      "高鉄、台鉄、MRT、空港MRT、バスの乗り継ぎに便利です。",
      "家族旅行では客室の広さ、エレベーター、荷物動線を確認しましょう。",
      "出張ではWi-Fi、作業スペース、移動効率が重要です。",
      "地図上の近さだけでなく、旅の目的に合う場所を選ぶのが大切です。",
    ],
    travelerSection: {
      title: "旅行タイプ別に選ぶ",
      description:
        "すべての人に共通する一番のホテルはありません。初めての旅行、家族旅行、出張、乗り継ぎ、予算重視では見るべき条件が変わります。",
      links: [
        {
          href: "#hotel-recommender",
          label: "初めての台北",
          description:
            "駅への動線、周辺の食事、市内観光のしやすさを重視します。",
        },
        {
          href: "#hotel-recommender",
          label: "家族旅行",
          description:
            "客室の広さ、エレベーター、荷物預かり、休憩しやすさを確認します。",
        },
        {
          href: "#hotel-recommender",
          label: "出張",
          description:
            "Wi-Fi、デスク、静かさ、鉄道やMRTへのアクセスを重視します。",
        },
        {
          href: "#hotel-recommender",
          label: "乗り継ぎ重視",
          description:
            "高鉄、台鉄、MRT、空港MRT、バスターミナルへの徒歩動線を確認します。",
        },
      ],
    },
    selectionSection: {
      title: "予約前に確認したい5つのこと",
      points: [
        {
          title: "交通動線",
          description:
            "直線距離だけでなく、出口、地下街、エレベーター、荷物を持って歩きやすいルートを確認します。",
        },
        {
          title: "客室タイプ",
          description:
            "カップル、家族、出張では必要なベッド構成、荷物スペース、デスクが異なります。",
        },
        {
          title: "設備",
          description:
            "Wi-Fi、デスク、ランドリー、荷物預かり、朝食、家族向け設備は滞在の快適さに影響します。",
        },
        {
          title: "周辺環境",
          description:
            "飲食店、コンビニ、地下街、夜間の明るさも台北駅周辺では大切です。",
        },
        {
          title: "旅の目的",
          description:
            "西門町中心、出張、早朝列車では、それぞれ便利なホテル立地が変わります。",
        },
      ],
    },
    conditionSection: {
      title: "条件をすばやく確認",
      description:
        "旅行タイプが決まっている場合はマッチャーを使えます。比較中なら、まずホテル候補、客室、設備、交通、FAQから確認しましょう。",
      links: [
        {
          href: "#hotel-recommendation-list",
          label: "ホテル候補",
          description: "まず主要な宿泊候補を確認します。",
        },
        {
          href: "#hotel-recommender",
          label: "条件マッチャー",
          description: "旅行タイプと重視条件で候補を調整します。",
        },
        {
          href: "#localized-faq",
          label: "FAQ",
          description: "よくある計画上の質問を確認します。",
        },
        {
          href: "/authority-info",
          label: "公式情報源",
          description: "イベント、交通、旅宿登録の公式情報を確認します。",
        },
      ],
    },
    faqSection: {
      title: "FAQプレビュー",
      linkLabel: "ホテルマッチャーへ移動",
      items: [
        {
          question: "台北駅周辺は宿泊に便利ですか？",
          answer:
            "はい。高鉄、台鉄、MRT、空港MRT、バスを使う旅行者には特に便利なエリアです。",
        },
        {
          question: "鉄道移動に便利なホテルはどれですか？",
          answer:
            "コスモスホテル台北、シーザーパークホテル台北は駅前で動線がわかりやすい候補です。予約前に実際の徒歩ルートを確認してください。",
        },
        {
          question: "西門町と台北駅、どちらに泊まるべきですか？",
          answer:
            "夜の食事や買い物中心なら西門町、鉄道移動や乗り継ぎ重視なら台北駅周辺が便利です。",
        },
        {
          question: "このサイトから予約できますか？",
          answer:
            "できません。このサイトは情報ガイドです。料金、空室、規約、合法旅宿情報は予約前に確認してください。",
        },
      ],
    },
    aboutSection: {
      title: "この日本語ページについて",
      description:
        "この日本語ページは、繁体字中国語版と同じホテル候補リストとマッチング機能を使い、日本語で旅行計画のポイントを整理しています。",
    },
    relatedTitle: "関連リンク",
    relatedLinks: [
      {
        href: "/",
        label: "繁体字中国語版",
        description: "メインの繁体字中国語ガイドに戻ります。",
      },
      {
        href: "/en",
        label: "English version",
        description: "英語版の台北駅ホテルガイドを開きます。",
      },
      {
        href: "/authority-info",
        label: "公式情報源",
        description: "旅行、交通、旅宿情報の公式リンクを確認します。",
      },
      {
        href: "/taipei-main-station-hotels",
        label: "中国語の詳細ガイド",
        description: "台北駅宿泊に関する中国語の詳しいガイドを読みます。",
      },
    ],
  },
};
