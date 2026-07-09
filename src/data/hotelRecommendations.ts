import type { SupportedLocale } from "@/data/locales";

export const travelerOptions = [
  {
    value: "first_time",
    label: "第一次自由行",
    description: "想把交通、餐飲和景點移動都變簡單。",
  },
  {
    value: "family",
    label: "親子同行",
    description: "在意房型空間、電梯、行李與中途休息。",
  },
  {
    value: "business",
    label: "商務出差",
    description: "需要有效率的交通、穩定網路與工作空間。",
  },
  {
    value: "transfer",
    label: "轉乘早班",
    description: "高鐵、台鐵、機場捷運或客運銜接是重點。",
  },
  {
    value: "budget",
    label: "控制預算",
    description: "願意在空間或距離上取捨，優先看必要條件。",
  },
] as const;

export const budgetOptions = [
  {
    value: "value",
    label: "精打細算",
    description: "價格優先，保留交通與基本舒適度。",
  },
  {
    value: "mid",
    label: "中等舒適",
    description: "想平衡位置、房型與整體品質。",
  },
  {
    value: "premium",
    label: "想住好一點",
    description: "願意為位置、服務或設計感提高預算。",
  },
] as const;

export const priorityOptions = [
  { value: "near_station", label: "離車站出口近" },
  { value: "family_room", label: "多人房型彈性" },
  { value: "quiet", label: "安靜好睡" },
  { value: "workspace", label: "Wi-Fi 與工作桌" },
  { value: "luggage", label: "行李寄放方便" },
  { value: "night_food", label: "晚上吃東西方便" },
  { value: "design", label: "設計感或新穎" },
] as const;

export const maxWalkOptions = [
  { value: 5, label: "5 分鐘內" },
  { value: 8, label: "8 分鐘內" },
  { value: 12, label: "12 分鐘內" },
] as const;

export type TravelerType = (typeof travelerOptions)[number]["value"];
export type BudgetLevel = (typeof budgetOptions)[number]["value"];
export type Priority = (typeof priorityOptions)[number]["value"];

export type HotelCandidate = {
  id: string;
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
        highlights: string[];
        caution: string;
      }
    >
  >;
  area: string;
  recommendationSummary: string;
  walkMinutes: number;
  priceTier: BudgetLevel;
  bestFor: TravelerType[];
  priorities: Priority[];
  highlights: string[];
  caution: string;
  mapQuery: string;
  priorityBoost?: number;
};

export const priceTierLabels: Record<BudgetLevel, string> = {
  value: "平價",
  mid: "中階",
  premium: "高階",
};

export const hotelCandidates: HotelCandidate[] = [
  {
    id: "green-world-station",
    name: "洛碁大飯店驛",
    englishName: "Green World Taipei Station",
    aliases: ["洛碁大飯店", "洛基大飯店", "Green World Hotels Taipei Station"],
    localized: {
      en: {
        name: "Green World Taipei Station",
        subName: "洛碁大飯店驛",
        aliases: ["Green World Hotels Taipei Station", "洛碁大飯店", "洛基大飯店"],
        area: "Section 1, Chongqing South Road, near Taipei Main Station and the station-front shopping area",
        recommendationSummary:
          "A mid-range station-front option often searched as Green World Hotel or 洛基大飯店. Good for first-time visitors, short stays, transfers, and travelers who want convenience without going fully premium.",
        highlights: ["Priority pick", "Green World Hotels property", "Station-front convenience", "Good for short stays and transfers"],
        caution:
          "Green World has multiple Taipei branches. Check the exact address and walking route to Taipei Main Station before booking.",
      },
      ja: {
        name: "グリーンワールド台北駅",
        subName: "洛碁大飯店驛",
        aliases: ["Green World Taipei Station", "洛碁大飯店", "洛基大飯店"],
        area: "重慶南路一段、台北駅前商圏周辺",
        recommendationSummary:
          "台北駅前エリアの中価格帯候補です。「洛基大飯店」と検索されることもあります。初めての台北旅行、短期滞在、乗り継ぎ、便利さと予算のバランスを重視する人に向いています。",
        highlights: ["優先候補", "グリーンワールド系列", "駅前エリアで便利", "短期滞在と乗り継ぎ向き"],
        caution:
          "グリーンワールド系列には複数の支店があります。予約前に住所と台北駅までの実際の徒歩ルートを確認してください。",
      },
    },
    area: "重慶南路一段，北車與站前商圈周邊",
    recommendationSummary:
      "洛碁大飯店驛是站前商圈周邊的中階候選，也常被搜尋成「洛基大飯店」。適合第一次自由行、短住轉乘與想保留預算但仍要交通便利的旅客。",
    walkMinutes: 8,
    priceTier: "mid",
    bestFor: ["first_time", "business", "transfer", "budget", "family"],
    priorities: [
      "near_station",
      "workspace",
      "luggage",
      "night_food",
      "family_room",
    ],
    highlights: ["指定優先推薦", "洛碁大飯店系列", "站前商圈機能完整", "適合自由行與短住轉乘"],
    caution: "若你指的是其他洛碁分館，建議再依實際地址確認到台北車站出口的步行時間。",
    mapQuery: "洛碁大飯店驛",
    priorityBoost: 12,
  },
  {
    id: "cosmos",
    name: "台北天成大飯店",
    englishName: "Cosmos Hotel Taipei",
    localized: {
      en: {
        name: "Cosmos Hotel Taipei",
        subName: "台北天成大飯店",
        area: "Next to Taipei Main Station Exit M3",
        recommendationSummary:
          "One of the easiest Taipei Main Station hotels to understand logistically. Good for early trains, luggage-heavy trips, first-time visitors, and travelers who need triple or family rooms.",
        highlights: ["Very intuitive station access", "Triple and family-room options", "Good for luggage and early trains"],
        caution:
          "Room types vary by date. Confirm room size, bed type, and breakfast details before booking.",
      },
      ja: {
        name: "コスモスホテル台北",
        subName: "台北天成大飯店",
        area: "台北駅M3出口そば",
        recommendationSummary:
          "台北駅周辺でも動線がわかりやすい候補です。早朝の鉄道移動、大きな荷物、初めての台北旅行、3人・家族向け客室を探す人に向いています。",
        highlights: ["駅への動線がわかりやすい", "3人・家族向け客室あり", "荷物移動と早朝便に便利"],
        caution:
          "日程により客室タイプが変わります。予約前に広さ、ベッドタイプ、朝食条件を確認してください。",
      },
    },
    area: "台北車站 M3 出口旁",
    recommendationSummary:
      "北車動線最直覺的候選之一，適合早班高鐵台鐵、拖行李、第一次來台北與需要三人或四人房的旅客。",
    walkMinutes: 2,
    priceTier: "mid",
    bestFor: ["first_time", "family", "business", "transfer"],
    priorities: [
      "near_station",
      "family_room",
      "workspace",
      "luggage",
      "night_food",
    ],
    highlights: ["站前動線直覺", "有三人與四人房選項", "適合拖行李與早班車"],
    caution: "熱門日期房型差異大，訂房前建議確認坪數、床型與是否含早餐。",
    mapQuery: "台北天成大飯店",
  },
  {
    id: "caesar-park",
    name: "台北凱撒大飯店",
    englishName: "Caesar Park Hotel Taipei",
    localized: {
      en: {
        name: "Caesar Park Hotel Taipei",
        subName: "台北凱撒大飯店",
        area: "Zhongxiao West Road side, directly by the station-front area",
        recommendationSummary:
          "A large station-front hotel candidate for travelers who value transfer efficiency, business meetings, family trips, and a very clear location.",
        highlights: ["Large established hotel", "Clear station-front location", "Good for efficient transfers"],
        caution:
          "If a newer interior style matters to you, compare current room photos and recent guest feedback before booking.",
      },
      ja: {
        name: "シーザーパークホテル台北",
        subName: "台北凱撒大飯店",
        area: "忠孝西路側、台北駅前エリア",
        recommendationSummary:
          "駅前の大型ホテル候補です。乗り継ぎ効率、出張、家族旅行、場所のわかりやすさを重視する人に向いています。",
        highlights: ["老舗大型ホテル", "駅前で場所が明確", "乗り継ぎ重視に便利"],
        caution:
          "新しい内装を重視する場合は、予約前に実際の客室写真と最近の口コミを確認してください。",
      },
    },
    area: "站前忠孝西路側",
    recommendationSummary:
      "站前大型飯店候選，適合重視轉乘效率、商務會議、親子同行與希望住宿位置明確的旅客。",
    walkMinutes: 3,
    priceTier: "premium",
    bestFor: ["first_time", "family", "business", "transfer"],
    priorities: [
      "near_station",
      "family_room",
      "workspace",
      "luggage",
      "night_food",
    ],
    highlights: ["大型老牌飯店", "站前位置明確", "適合重視轉乘效率"],
    caution: "想要新穎裝潢時，建議逐一查看實際房型照片與近期住客心得。",
    mapQuery: "台北凱撒大飯店",
  },
  {
    id: "palais-de-chine",
    name: "君品酒店",
    englishName: "Palais de Chine Hotel",
    localized: {
      en: {
        name: "Palais de Chine Hotel",
        subName: "君品酒店",
        area: "Beside Q Square and Taipei Bus Station",
        recommendationSummary:
          "A refined design-oriented option near Q Square, Taipei Bus Station, and Taipei Main Station. Good for business travelers, transfers, and travelers who want a more premium stay.",
        highlights: ["Strong design identity", "Connected to transit and mall convenience", "Good for a refined stay"],
        caution:
          "The interior style is distinctive. Check room photos first if you prefer bright and minimalist rooms.",
      },
      ja: {
        name: "パレ・デ・シンホテル",
        subName: "君品酒店",
        area: "京站・台北転運站周辺",
        recommendationSummary:
          "京站、台北転運站、台北駅に近い上質なデザイン系ホテル候補です。出張、乗り継ぎ、少し贅沢に泊まりたい旅行者に向いています。",
        highlights: ["デザイン性が高い", "交通と商業施設に近い", "上質な滞在向き"],
        caution:
          "館内の雰囲気は個性的です。明るくシンプルな客室を好む場合は、事前に写真を確認してください。",
      },
    },
    area: "京站與台北轉運站旁",
    recommendationSummary:
      "靠近京站、台北轉運站與台北車站，適合商務、轉乘與想住精緻設計型飯店的旅客。",
    walkMinutes: 7,
    priceTier: "premium",
    bestFor: ["business", "transfer", "first_time", "family"],
    priorities: ["design", "quiet", "workspace", "luggage", "night_food"],
    highlights: ["設計感強", "連接轉運與商場機能", "適合想住精緻一點"],
    caution: "館內風格較濃厚，若偏好明亮簡約房型，訂房前可先看房內照片。",
    mapQuery: "君品酒店 台北",
  },
  {
    id: "hotel-resonance",
    name: "台北時代寓所",
    englishName: "Hotel Resonance Taipei",
    localized: {
      en: {
        name: "Hotel Resonance Taipei",
        subName: "台北時代寓所",
        area: "By Shandao Temple Station, one MRT stop from Taipei Main Station",
        recommendationSummary:
          "A design and business short-stay option near Shandao Temple and Huashan. Better if you do not need to stay directly at Taipei Main Station.",
        highlights: ["More contemporary feel", "Good for business and city short stays", "Near Shandao Temple and Huashan"],
        caution:
          "This is not directly at Taipei Main Station. Check the transfer route if you have large luggage.",
      },
      ja: {
        name: "ホテル・レゾナンス台北",
        subName: "台北時代寓所",
        area: "善導寺駅そば、台北駅からMRTで一駅",
        recommendationSummary:
          "善導寺や華山エリアに便利な、デザイン性とビジネス短期滞在向けの候補です。台北駅の目の前でなくてもよい人に向いています。",
        highlights: ["比較的新しい雰囲気", "出張と都市型短期滞在向き", "善導寺・華山方面に便利"],
        caution:
          "台北駅の正面ではありません。大きな荷物がある場合は乗り換え動線を確認してください。",
      },
    },
    area: "善導寺站旁，北車一站距離",
    recommendationSummary:
      "偏向設計與商務短住的候選，適合行程會往善導寺、華山或市中心移動，但不一定要住在北車正門口的人。",
    walkMinutes: 12,
    priceTier: "premium",
    bestFor: ["business", "first_time"],
    priorities: ["design", "quiet", "workspace", "night_food"],
    highlights: ["新穎感較高", "適合商務與城市短住", "近善導寺與華山方向"],
    caution: "不是台北車站正門口型住宿，若拖大行李請先確認轉乘動線。",
    mapQuery: "台北時代寓所",
  },
  {
    id: "citizenm",
    name: "citizenM 台北北門酒店",
    englishName: "citizenM Taipei North Gate",
    localized: {
      en: {
        name: "citizenM Taipei North Gate",
        subName: "citizenM 台北北門酒店",
        area: "Near Beimen and Airport MRT Taipei Main Station A1",
        recommendationSummary:
          "A compact, design-forward option for one or two travelers. Convenient for Beimen, Ximending, and Airport MRT A1.",
        highlights: ["Simple modern design", "Good for one or two travelers", "Convenient toward Beimen and Ximending"],
        caution:
          "Rooms are usually compact. Families and travelers with large luggage should confirm space first.",
      },
      ja: {
        name: "citizenM 台北北門ホテル",
        subName: "citizenM 台北北門酒店",
        area: "北門と空港MRT A1駅周辺",
        recommendationSummary:
          "1〜2人の短期滞在向けのコンパクトでデザイン性のある候補です。北門、西門町、空港MRT A1方面に便利です。",
        highlights: ["シンプルなデザイン", "1〜2人の短期滞在向き", "北門・西門方面に便利"],
        caution:
          "客室は比較的コンパクトです。家族旅行や大きな荷物がある場合は広さを確認してください。",
      },
    },
    area: "北門與機場捷運 A1 周邊",
    recommendationSummary:
      "設計簡潔、適合一到兩人短住，往北門、西門町與機場捷運 A1 方向較方便。",
    walkMinutes: 10,
    priceTier: "mid",
    bestFor: ["first_time", "budget", "transfer"],
    priorities: ["design", "workspace", "luggage", "night_food", "quiet"],
    highlights: ["設計簡潔", "適合一到兩人短住", "往北門與西門方向方便"],
    caution: "房間通常偏精簡，親子或大行李旅客要先確認空間是否足夠。",
    mapQuery: "citizenM 台北北門酒店",
  },
  {
    id: "cityinn-3",
    name: "新驛旅店台北車站三館",
    englishName: "CityInn Hotel Taipei Station Branch III",
    localized: {
      en: {
        name: "CityInn Hotel Taipei Station Branch III",
        subName: "新驛旅店台北車站三館",
        area: "Back-station and Q Square area",
        recommendationSummary:
          "A value-oriented short-stay and transfer option for travelers with lighter luggage who want access to Taipei Main Station's back-station area.",
        highlights: ["Budget-friendly", "Good for short stays and transfers", "Convenient local amenities nearby"],
        caution:
          "Room sizes can vary in value hotels. Check room type first if staying with more than two people.",
      },
      ja: {
        name: "シティインホテル台北駅三館",
        subName: "新驛旅店台北車站三館",
        area: "台北駅後站・京站周辺",
        recommendationSummary:
          "価格重視の短期滞在や乗り継ぎ向け候補です。荷物が少なく、台北駅後站や京站周辺の利便性を重視する人に向いています。",
        highlights: ["予算重視", "短期滞在と乗り継ぎ向き", "周辺の生活機能が便利"],
        caution:
          "価格帯重視のホテルは客室サイズに差が出やすいため、複数人で泊まる場合は客室タイプを確認してください。",
      },
    },
    area: "北車後站與京站周邊",
    recommendationSummary:
      "平價短住與轉乘取向的候選，適合預算有限、行李不多、重視北車後站與京站生活機能的旅客。",
    walkMinutes: 7,
    priceTier: "value",
    bestFor: ["budget", "first_time", "transfer"],
    priorities: ["near_station", "luggage", "night_food", "workspace"],
    highlights: ["預算友善", "適合短住與轉乘", "周邊生活機能完整"],
    caution: "平價型住宿房間大小差異可能較明顯，多人入住要優先看房型。",
    mapQuery: "新驛旅店台北車站三館",
  },
  {
    id: "roaders",
    name: "路徒行旅",
    englishName: "Roaders Hotel",
    localized: {
      en: {
        name: "Roaders Hotel",
        subName: "路徒行旅",
        area: "Chongqing South Road toward Ximending",
        recommendationSummary:
          "A budget-conscious option with a more playful common-area feel. Good for travelers who want access to both Ximending and Taipei Main Station.",
        highlights: ["Distinctive common spaces", "Convenient toward Ximending", "Good for travelers balancing budget and personality"],
        caution:
          "It is a bit farther from the main station hall. Add extra walking time with luggage or on rainy days.",
      },
      ja: {
        name: "ローダーズホテル",
        subName: "路徒行旅",
        area: "重慶南路・西門方面",
        recommendationSummary:
          "特徴的な共用スペースがある予算重視の候補です。西門町と台北駅の両方を使いたい自由旅行者に向いています。",
        highlights: ["共用スペースに個性あり", "西門町方面に便利", "予算と雰囲気のバランス重視"],
        caution:
          "台北駅メインホールからは少し距離があります。荷物がある日や雨の日は徒歩時間を多めに見てください。",
      },
    },
    area: "重慶南路與西門方向",
    recommendationSummary:
      "特色公共空間與預算取向候選，適合想住得有趣、又想兼顧西門町與北車周邊的自由行旅客。",
    walkMinutes: 11,
    priceTier: "value",
    bestFor: ["budget", "family", "first_time"],
    priorities: ["design", "family_room", "night_food", "luggage"],
    highlights: ["公共空間有特色", "往西門町方便", "適合想控制預算又想有趣味感"],
    caution: "離車站大廳略有距離，拖行李或雨天時要多抓步行時間。",
    mapQuery: "路徒行旅 台北",
  },
  {
    id: "just-sleep-ximen",
    name: "捷絲旅台北西門館",
    englishName: "Just Sleep Taipei Ximending",
    localized: {
      en: {
        name: "Just Sleep Taipei Ximending",
        subName: "捷絲旅台北西門館",
        area: "Ximending, one MRT stop from Taipei Main Station",
        recommendationSummary:
          "Better for Ximending-focused trips, family stays, night food, and shopping. Less ideal if you need the fastest possible access to trains every day.",
        highlights: ["Many night food options", "Easier to compare family and multi-person rooms", "Good if Ximending is your main base"],
        caution:
          "If you need HSR or TRA every day, staying directly around Taipei Main Station will save more transfer time.",
      },
      ja: {
        name: "ジャストスリープ台北西門館",
        subName: "捷絲旅台北西門館",
        area: "西門町エリア、台北駅からMRTで一駅",
        recommendationSummary:
          "西門町中心の旅程、家族旅行、夜の食事やショッピングに向いた候補です。毎日鉄道移動を最短で行いたい人には台北駅周辺の方が便利です。",
        highlights: ["夜の飲食選択肢が多い", "家族・複数人向け客室を比較しやすい", "西門町中心の旅程向き"],
        caution:
          "毎日高鉄や台鉄を使う場合は、台北駅周辺に泊まる方が乗り換え時間を節約できます。",
      },
    },
    area: "西門町商圈，捷運一站到北車",
    recommendationSummary:
      "更偏西門町行程的候選，適合親子、夜間餐飲與商圈活動，不適合每天都要極速進出台北車站的人。",
    walkMinutes: 14,
    priceTier: "mid",
    bestFor: ["family", "first_time", "budget"],
    priorities: ["family_room", "night_food", "luggage", "quiet"],
    highlights: ["夜間餐飲選擇多", "親子與多人房型較容易比較", "適合行程重心在西門"],
    caution: "若每天都要搭高鐵或台鐵，北車正周邊會比西門更省轉乘時間。",
    mapQuery: "捷絲旅台北西門館",
  },
];
