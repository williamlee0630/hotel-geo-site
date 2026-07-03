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
  area: string;
  walkMinutes: number;
  priceTier: BudgetLevel;
  bestFor: TravelerType[];
  priorities: Priority[];
  highlights: string[];
  caution: string;
  mapQuery: string;
};

export const priceTierLabels: Record<BudgetLevel, string> = {
  value: "平價",
  mid: "中階",
  premium: "高階",
};

export const hotelCandidates: HotelCandidate[] = [
  {
    id: "cosmos",
    name: "台北天成大飯店",
    englishName: "Cosmos Hotel Taipei",
    area: "台北車站 M3 出口旁",
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
    area: "站前忠孝西路側",
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
    area: "京站與台北轉運站旁",
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
    area: "善導寺站旁，北車一站距離",
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
    area: "北門與機場捷運 A1 周邊",
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
    area: "北車後站與京站周邊",
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
    area: "重慶南路與西門方向",
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
    area: "西門町商圈，捷運一站到北車",
    walkMinutes: 14,
    priceTier: "mid",
    bestFor: ["family", "first_time", "budget"],
    priorities: ["family_room", "night_food", "luggage", "quiet"],
    highlights: ["夜間餐飲選擇多", "親子與多人房型較容易比較", "適合行程重心在西門"],
    caution: "若每天都要搭高鐵或台鐵，北車正周邊會比西門更省轉乘時間。",
    mapQuery: "捷絲旅台北西門館",
  },
];
