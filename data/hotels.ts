export type Hotel = {
  id: string;
  name: string;
  district: string;
  address: string;
  metro: string;
  price: number;
  rating: number;
  reviews: number;
  walkingMinutes: number;
  mapX: number;
  mapY: number;
  tags: string[];
  summary: string;
  photoClass: string;
  flexibleCancel: boolean;
};

export const hotels: Hotel[] = [
  {
    id: "north-gate",
    name: "北門行旅",
    district: "大同區",
    address: "台北市大同區塔城街 18 號",
    metro: "北門站",
    price: 3280,
    rating: 4.7,
    reviews: 1284,
    walkingMinutes: 4,
    mapX: 34,
    mapY: 38,
    tags: ["近捷運", "歷史街區", "商務"],
    summary: "靠近北門與西門商圈，適合第一次來台北或需要轉乘機場捷運的旅客。",
    photoClass: "from-sky-200 via-white to-emerald-200",
    flexibleCancel: true,
  },
  {
    id: "xinyi-view",
    name: "信義景觀酒店",
    district: "信義區",
    address: "台北市信義區松高路 92 號",
    metro: "市政府站",
    price: 5680,
    rating: 4.9,
    reviews: 2197,
    walkingMinutes: 6,
    mapX: 74,
    mapY: 42,
    tags: ["夜景", "購物", "高樓景觀"],
    summary: "步行可到百貨商圈與 101，適合研討會貴賓接待與高預算行程。",
    photoClass: "from-indigo-200 via-white to-amber-200",
    flexibleCancel: false,
  },
  {
    id: "daan-green",
    name: "大安森林公寓酒店",
    district: "大安區",
    address: "台北市大安區新生南路二段 36 號",
    metro: "大安森林公園站",
    price: 4120,
    rating: 4.8,
    reviews: 954,
    walkingMinutes: 3,
    mapX: 58,
    mapY: 60,
    tags: ["親子", "公園", "長住"],
    summary: "鄰近大安森林公園，房型偏寬敞，適合多日停留與家庭旅遊。",
    photoClass: "from-lime-200 via-white to-cyan-200",
    flexibleCancel: true,
  },
  {
    id: "songshan-terminal",
    name: "松山轉運旅店",
    district: "松山區",
    address: "台北市松山區八德路四段 760 號",
    metro: "松山站",
    price: 2860,
    rating: 4.5,
    reviews: 743,
    walkingMinutes: 5,
    mapX: 82,
    mapY: 30,
    tags: ["平價", "車站", "夜市"],
    summary: "鄰近車站與饒河夜市，交通清楚，適合短住與預算型行程。",
    photoClass: "from-rose-200 via-white to-orange-200",
    flexibleCancel: true,
  },
  {
    id: "zhongshan-calm",
    name: "中山靜巷會館",
    district: "中山區",
    address: "台北市中山區南京東路一段 48 號",
    metro: "中山站",
    price: 3650,
    rating: 4.6,
    reviews: 1106,
    walkingMinutes: 7,
    mapX: 48,
    mapY: 33,
    tags: ["餐廳多", "設計", "安靜"],
    summary: "在中山商圈旁的靜巷位置，生活機能好，也適合安排餐飲路線。",
    photoClass: "from-violet-200 via-white to-teal-200",
    flexibleCancel: false,
  },
  {
    id: "beitou-spring",
    name: "北投溫泉山居",
    district: "北投區",
    address: "台北市北投區溫泉路 128 號",
    metro: "新北投站",
    price: 4860,
    rating: 4.8,
    reviews: 867,
    walkingMinutes: 9,
    mapX: 28,
    mapY: 16,
    tags: ["溫泉", "度假", "自然"],
    summary: "適合把城市行程延伸成半日度假，位置接近溫泉博物館與綠地。",
    photoClass: "from-amber-200 via-white to-sky-200",
    flexibleCancel: true,
  },
];
