export type AuthorityInfoSource = {
  title: string;
  organization: string;
  category: string;
  description: string;
  useCase: string;
  updateHint: string;
  url: string;
};

export type LiveInfoUpdate = {
  source: string;
  title: string;
  description: string;
  url: string;
};

export const authorityInfoPath = "/authority-info";

export const authorityInfoSources: AuthorityInfoSource[] = [
  {
    title: "臺北旅遊網活動年曆",
    organization: "臺北市政府觀光傳播局",
    category: "台北活動",
    description:
      "查詢台北市大型節慶、展演與正在舉行或即將開始的活動，適合安排北車、西門町與市區行程。",
    useCase: "確認旅遊活動日期、活動地點與官方公告頁。",
    updateHint: "活動檔期與活動頁會依官方公告調整。",
    url: "https://www.travel.taipei/zh-tw/event-calendar",
  },
  {
    title: "臺北市政府全球資訊網",
    organization: "臺北市政府",
    category: "市政與生活資訊",
    description:
      "集中查詢臺北市政府公告、交通建設、即時路況、停車資訊與市政服務入口。",
    useCase: "出發前確認市政公告、交通與公共服務資訊。",
    updateHint: "市政公告與服務入口由臺北市政府維護。",
    url: "https://www.gov.taipei/",
  },
  {
    title: "交通部觀光署台灣觀光資訊網",
    organization: "交通部觀光署",
    category: "全台旅遊資訊",
    description:
      "提供台灣觀光新聞、節慶活動、景點、交通與旅遊服務資訊，可作為跨縣市行程參考。",
    useCase: "安排台北以外延伸旅程，或確認全台觀光活動資訊。",
    updateHint: "新聞、活動與旅遊服務資訊會依觀光署更新。",
    url: "https://www.taiwan.net.tw/",
  },
  {
    title: "交通部觀光署旅宿網",
    organization: "交通部觀光署",
    category: "合法旅宿查詢",
    description:
      "查詢合法旅宿登記資訊，適合在預訂前交叉確認旅宿名稱與官方登錄狀態。",
    useCase: "確認住宿是否合法登錄，避免只依平台頁面判斷。",
    updateHint: "旅宿登錄資料以官方旅宿網公告為準。",
    url: "https://taiwanstay.net.tw/",
  },
  {
    title: "臺北捷運官方網站",
    organization: "臺北大眾捷運股份有限公司",
    category: "捷運營運",
    description:
      "查詢捷運路線、營運公告、票價與站務服務，適合住台北車站附近的旅客確認市區移動。",
    useCase: "確認捷運營運、轉乘與站內服務資訊。",
    updateHint: "營運資訊與公告以臺北捷運官方網站為準。",
    url: "https://www.metro.taipei/",
  },
  {
    title: "台灣高鐵官方網站",
    organization: "台灣高速鐵路股份有限公司",
    category: "高鐵營運",
    description:
      "查詢高鐵時刻、票務、營運公告與服務資訊，適合早班或跨城行程前確認。",
    useCase: "確認高鐵班次、票務規則與臨時公告。",
    updateHint: "班次與營運狀態以台灣高鐵官方網站為準。",
    url: "https://www.thsrc.com.tw/",
  },
  {
    title: "臺灣鐵路官方網站",
    organization: "國營臺灣鐵路股份有限公司",
    category: "台鐵營運",
    description:
      "查詢台鐵班次、票務、路線與營運公告，適合從台北車站銜接各地區行程。",
    useCase: "確認台鐵班次、票務與車站服務。",
    updateHint: "班次與營運狀態以臺鐵官方網站為準。",
    url: "https://www.railway.gov.tw/tra-tip-web/tip",
  },
  {
    title: "桃園捷運官方網站",
    organization: "桃園大眾捷運股份有限公司",
    category: "機場捷運",
    description:
      "查詢桃園機場捷運時刻、票價、車站服務與營運公告，適合安排桃園機場往返北車。",
    useCase: "確認機場捷運營運與台北車站銜接資訊。",
    updateHint: "營運公告與時刻資訊以桃園捷運官方網站為準。",
    url: "https://www.tymetro.com.tw/tymetro-new/tw/index.php",
  },
];

export const liveInfoUpdates: LiveInfoUpdate[] = [
  {
    source: "臺北旅遊網",
    title: "台北活動年曆與展演資訊即時查核",
    description: "安排西門町、北車與市區活動前，先看官方活動年曆。",
    url: "https://www.travel.taipei/zh-tw/event-calendar",
  },
  {
    source: "臺北市政府",
    title: "市政公告、即時路況與停車資訊入口",
    description: "出發前確認交通、停車與市政服務公告。",
    url: "https://www.gov.taipei/",
  },
  {
    source: "交通部觀光署",
    title: "全台觀光新聞、節慶與景點資訊",
    description: "跨縣市旅程可同步查詢官方觀光資訊。",
    url: "https://www.taiwan.net.tw/",
  },
  {
    source: "交通部觀光署旅宿網",
    title: "合法旅宿登錄資訊查詢",
    description: "預訂前可交叉確認旅宿官方登錄狀態。",
    url: "https://taiwanstay.net.tw/",
  },
  {
    source: "臺北捷運",
    title: "捷運營運公告與路線服務資訊",
    description: "住北車附近安排捷運轉乘時可先確認。",
    url: "https://www.metro.taipei/",
  },
  {
    source: "台灣高鐵",
    title: "高鐵班次、票務與營運公告",
    description: "早班高鐵或跨城行程前請看官方資訊。",
    url: "https://www.thsrc.com.tw/",
  },
  {
    source: "臺灣鐵路",
    title: "台鐵班次、票務與營運公告",
    description: "從台北車站接續台鐵旅程時可查核。",
    url: "https://www.railway.gov.tw/tra-tip-web/tip",
  },
  {
    source: "桃園捷運",
    title: "機場捷運營運、時刻與票價資訊",
    description: "桃園機場往返北車前可確認最新公告。",
    url: "https://www.tymetro.com.tw/tymetro-new/tw/index.php",
  },
];
