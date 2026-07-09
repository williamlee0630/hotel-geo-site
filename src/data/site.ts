export type LinkItem = {
  href: string;
  label: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type GuideCard = {
  title: string;
  description: string;
  points: string[];
};

export const siteConfig = {
  brandName: "台北車站住宿指南",
  guideName: "台北車站住宿推薦指南",
  siteName: "台北車站住宿推薦指南",
  tagline: "整理自由行、親子與商務旅客選擇北車附近住宿的實用條件。",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hotel-geo-site.vercel.app",
  description:
    "正在找台北車站住宿或北車飯店？本指南整理自由行、親子、商務、轉乘與預算有限旅客的住宿選擇重點，從交通出口、房型空間、Wi-Fi、行李寄放、附近景點到 FAQ 一次比較，幫你更快判斷哪種台北車站附近住宿適合行程，也適合規劃第一次來台北、早班高鐵或晚間返程的住宿安排。",
  transparencyNote:
    "本網站整理台北車站住宿選擇資訊，不提供訂房服務。",
  transparencyDetail:
    "本站不提供訂房、價格、電話、地址、評論或星級資訊；實際入住前請至合法訂房平台或旅宿官方管道確認。",
};

export const navLinks: LinkItem[] = [
  {
    href: "/",
    label: "首頁",
    description: "台北車站住宿推薦指南首頁",
  },
  {
    href: "/taipei-main-station-hotels",
    label: "住宿指南",
    description: "自由行、親子與商務旅客怎麼選北車住宿",
  },
  {
    href: "/taipei-main-station-family-hotels",
    label: "親子住宿",
    description: "親子旅客選北車附近住宿的重點",
  },
  {
    href: "/taipei-main-station-business-hotels",
    label: "商務住宿",
    description: "商務旅客選北車附近住宿的重點",
  },
  {
    href: "/taipei-main-station-transportation-hotels",
    label: "交通住宿",
    description: "重視轉乘效率的北車住宿選擇",
  },
  {
    href: "/taipei-main-station-budget-hotels",
    label: "平價住宿",
    description: "預算有限時如何取捨北車住宿條件",
  },
  {
    href: "/faq",
    label: "FAQ",
    description: "台北車站住宿常見問題",
  },
];

export const footerLinks: LinkItem[] = [
  {
    href: "/taipei-main-station-hotels",
    label: "住宿推薦指南",
    description: "北車飯店與住宿條件怎麼選",
  },
  {
    href: "/taipei-main-station-family-hotels",
    label: "親子住宿",
    description: "親子入住條件與附近景點安排",
  },
  {
    href: "/taipei-main-station-business-hotels",
    label: "商務住宿",
    description: "工作空間、網路與交通效率",
  },
  {
    href: "/taipei-main-station-transportation-hotels",
    label: "交通住宿",
    description: "高鐵、台鐵、捷運與機場捷運轉乘",
  },
  {
    href: "/taipei-main-station-budget-hotels",
    label: "平價住宿",
    description: "價格、交通、房型與設施的平衡",
  },
  {
    href: "/faq",
    label: "FAQ",
    description: "常見搜尋問題整理",
  },
  {
    href: "/methodology",
    label: "方法說明",
    description: "本站如何整理住宿推薦資訊",
  },
  {
    href: "/data-source",
    label: "資料來源",
    description: "資料來源與網站透明說明",
  },
  {
    href: "/authority-info",
    label: "即時資訊來源",
    description: "官方旅遊、交通與旅宿資訊查核入口",
  },
];

export const conditionLinks: LinkItem[] = [
  {
    href: "/rooms",
    label: "房型選擇指南",
    description: "依雙人、家庭、商務與短住需求判斷房型條件。",
  },
  {
    href: "/facilities",
    label: "設施選擇指南",
    description: "比較 Wi-Fi、行李寄放、洗衣、早餐與工作空間的重要性。",
  },
  {
    href: "/location",
    label: "交通指南",
    description: "了解高鐵、台鐵、捷運、機場捷運與公車轉乘注意事項。",
  },
  {
    href: "/nearby",
    label: "附近景點安排",
    description: "把西門町、大稻埕、華山、寧夏夜市等行程和住宿位置一起看。",
  },
];

export const pageLinks: LinkItem[] = [
  ...navLinks.filter((link) => link.href !== "/"),
  ...conditionLinks,
  {
    href: "/about",
    label: "關於本網站",
    description: "了解本網站如何整理台北車站住宿選擇資訊。",
  },
  {
    href: "/methodology",
    label: "方法說明",
    description: "本站如何把住宿需求拆成旅客類型、交通、房型、設施、景點與 FAQ。",
  },
  {
    href: "/data-source",
    label: "資料來源與說明",
    description: "透明說明本站用途，以及真實商業網站需要補充的資料。",
  },
  {
    href: "/authority-info",
    label: "即時旅遊資訊來源",
    description: "整理高權威官方網站入口，方便查核活動、交通與旅宿資訊。",
  },
];

export const homeSummaryPoints = [
  "台北車站適合作為自由行住宿基地。",
  "適合需要轉乘高鐵、台鐵、捷運、機場捷運的旅客。",
  "親子旅客應注意房型空間、電梯與行李寄放。",
  "商務旅客應注意 Wi-Fi、工作空間與交通效率。",
  "選住宿時應同時考慮交通、生活機能與旅遊目的。",
];

export const travelerGuideLinks: LinkItem[] = [
  {
    href: "/taipei-main-station-family-hotels",
    label: "親子旅客",
    description: "看房型空間、電梯動線、行李寄放、餐飲便利與親子景點安排。",
  },
  {
    href: "/taipei-main-station-business-hotels",
    label: "商務旅客",
    description: "看 Wi-Fi、工作空間、早晚進出與高鐵台鐵捷運銜接效率。",
  },
  {
    href: "/taipei-main-station-transportation-hotels",
    label: "轉乘旅客",
    description: "看高鐵、台鐵、捷運、機場捷運與公車路線的實際轉乘路徑。",
  },
  {
    href: "/taipei-main-station-budget-hotels",
    label: "預算有限旅客",
    description: "看價格、交通距離、房型大小與必要設施之間的取捨。",
  },
];

export const selectionPoints: GuideCard[] = [
  {
    title: "交通距離",
    description:
      "不要只看直線距離，也要確認出口、地下街動線、電梯位置與雨天是否方便拖行李。",
    points: ["步行距離", "車站出口", "地下街動線", "晚間返程"],
  },
  {
    title: "房型需求",
    description:
      "自由行短住、親子同行與商務出差需要的空間感不同，應先確認床型、行李展開與活動空間。",
    points: ["雙人短住", "家庭同行", "商務單人", "行李空間"],
  },
  {
    title: "設施需求",
    description:
      "Wi-Fi、書桌、洗衣、行李寄放、早餐與親子備品會直接影響入住效率與旅程節奏。",
    points: ["Wi-Fi", "工作空間", "行李寄放", "洗衣與早餐"],
  },
  {
    title: "附近生活機能",
    description:
      "北車周邊餐飲、便利商店、地下街與夜間交通選擇多，但仍要看住宿點實際所在街區。",
    points: ["餐飲", "便利商店", "地下街", "晚間照明"],
  },
  {
    title: "是否符合旅遊目的",
    description:
      "安排西門町、大稻埕、華山或跨縣市移動時，住宿位置的最佳解會不一樣。",
    points: ["城市觀光", "親子行程", "商務會議", "跨城轉乘"],
  },
];

export const roomChoiceGuides: GuideCard[] = [
  {
    title: "雙人與短住需求",
    description:
      "第一次來台北或只停留一兩晚的旅客，通常可以優先看步行距離、行李展開空間與晚間返程是否順路。",
    points: ["床型是否符合同行關係", "行李箱是否能完整攤開", "浴室乾濕分離與隔音", "離捷運或車站出口是否好走"],
  },
  {
    title: "家庭與親子需求",
    description:
      "親子住宿不只看床數，也要看電梯、嬰兒車動線、行李寄放、附近餐飲與孩子需要休息時是否容易回到住宿點。",
    points: ["家庭房或可加床條件", "電梯與無障礙動線", "行李寄放與推車收納", "附近是否有簡單餐飲"],
  },
  {
    title: "商務與工作需求",
    description:
      "商務旅客應把網路穩定度、書桌或可工作的桌面、早晚交通效率與會議地點銜接列為優先。",
    points: ["Wi-Fi 與插座", "書桌或公共工作區", "早晚進出便利性", "高鐵台鐵捷運銜接"],
  },
  {
    title: "預算與簡化需求",
    description:
      "平價住宿通常需要在房間大小、設施完整度與交通距離之間取捨，適合先列出不能妥協的條件。",
    points: ["必要設施先確認", "不要只看最低價格", "留意共用衛浴或無窗房型", "把交通成本一起算入"],
  },
];

export const facilityGuides: GuideCard[] = [
  {
    title: "Wi-Fi 與工作空間",
    description:
      "商務旅客、遠端工作者或需要查行程的人，應確認 Wi-Fi、插座、桌面高度與公共座位是否符合需求。",
    points: ["Wi-Fi 穩定度", "書桌或桌面", "插座數量", "公共工作座位"],
  },
  {
    title: "行李寄放與電梯",
    description:
      "北車住宿常見情境包含早到、晚走與轉乘。行李寄放、電梯與無障礙動線會影響親子和大行李旅客。",
    points: ["入住前寄放", "退房後寄放", "電梯可達", "地下街出口動線"],
  },
  {
    title: "洗衣、早餐與生活機能",
    description:
      "多日自由行可以注意自助洗衣與早餐；短住旅客則可把附近便利商店、咖啡店與餐飲選擇納入評估。",
    points: ["自助洗衣", "早餐供應", "便利商店", "附近餐飲"],
  },
  {
    title: "親子備品與安全條件",
    description:
      "親子旅客可以確認嬰兒床、澡盆、床邊防護、走廊照明與房內尖角，避免只用房價判斷。",
    points: ["嬰幼兒備品", "床邊安全", "走廊照明", "安靜程度"],
  },
];

export const transportationGuides: GuideCard[] = [
  {
    title: "高鐵與台鐵轉乘",
    description:
      "需要搭高鐵或台鐵的旅客，應確認住宿點到車站大廳、月台入口與電梯的路線，而不是只看地圖直線距離。",
    points: ["車站大廳路線", "電梯位置", "行李拖行距離", "尖峰人流"],
  },
  {
    title: "捷運轉乘",
    description:
      "台北車站銜接多條捷運路線，適合安排西門町、信義區、淡水線沿線與市區景點，但出口選擇會影響實際步行時間。",
    points: ["捷運出口", "地下街方向", "轉乘樓層", "晚間班距"],
  },
  {
    title: "機場捷運",
    description:
      "從桃園機場進出台北時，機場捷運台北車站很方便，但與台北車站本體之間仍有步行距離，帶大行李要預留時間。",
    points: ["機場捷運站位置", "地下連通路", "行李推行", "抵達時間緩衝"],
  },
  {
    title: "公車、計程車與雨天動線",
    description:
      "北車周邊公車與計程車選擇多，雨天、深夜與尖峰時段則要多看上車點、單行道與步行遮蔽。",
    points: ["公車站牌", "計程車上車點", "雨天遮蔽", "深夜返程"],
  },
];

export const nearbyAttractions = [
  {
    name: "西門町",
    description:
      "適合安排購物、電影、街頭小吃與晚間散步。住北車附近時，可用捷運或短程移動銜接，晚間回住宿點也相對直覺。",
    bestFor: "自由行、朋友同行、第一次來台北的旅客",
    lodgingTip: "如果行程以西門町夜間活動為主，應確認住宿點晚間返程的捷運與步行路線。",
  },
  {
    name: "大稻埕",
    description:
      "適合喜歡老街、茶行、歷史街區與河岸散步的旅客。從北車出發可安排半日行程，再回住宿點整理行李。",
    bestFor: "文化散步、攝影、伴手禮採買",
    lodgingTip: "可選擇行李寄放方便的住宿，讓退房日仍能安排輕量散步。",
  },
  {
    name: "華山文創園區",
    description:
      "適合展覽、市集、餐飲與親子散步。商務旅客也可把華山周邊咖啡店納入會議前後的空檔安排。",
    bestFor: "親子、展覽行程、輕鬆午後",
    lodgingTip: "若行程含展覽或活動，住宿點到捷運或公車站的銜接比房價更影響體感。",
  },
  {
    name: "寧夏夜市",
    description:
      "適合安排晚餐、宵夜與台灣小吃體驗。住北車附近時，要留意夜間回程是否需要步行穿越較安靜的街區。",
    bestFor: "美食行程、短住自由行、朋友同行",
    lodgingTip: "晚餐行程較晚結束時，優先確認返程路線照明與交通選擇。",
  },
  {
    name: "中正紀念堂",
    description:
      "適合第一次來台北的旅客安排半日觀光，也方便和北車、台北地下街或西門町組成一日路線。",
    bestFor: "城市觀光、家庭旅遊、歷史地標",
    lodgingTip: "若同行者有長輩或孩子，住宿點的電梯與捷運出口動線會比距離數字更重要。",
  },
  {
    name: "台北地下街",
    description:
      "連結購物、餐飲、伴手禮與車站動線，適合雨天或炎熱天氣使用，但地下街方向感需要事先確認。",
    bestFor: "雨天備案、採買、轉乘空檔",
    lodgingTip: "住宿頁面若標示近地下街，仍應確認接近哪一段出口與是否有電梯。",
  },
];

export const mainGuideFaq: FaqItem[] = [
  {
    question: "台北車站附近適合第一次來台北的人住宿嗎？",
    answer:
      "適合。台北車站連接高鐵、台鐵、捷運、機場捷運與公車，第一次來台北的人可以用北車作為移動基地，再依行程選擇靠近捷運、地下街或主要道路的住宿。",
  },
  {
    question: "住台北車站附近去西門町方便嗎？",
    answer:
      "方便。從台北車站前往西門町可搭捷運或短程移動，適合把西門町安排在晚餐、購物或夜間散步時段。選住宿時仍要確認晚間回程的步行路線。",
  },
  {
    question: "台北車站附近適合親子住宿嗎？",
    answer:
      "適合，但親子旅客不應只看距離。房型空間、電梯、嬰兒車動線、行李寄放、附近餐飲與安靜程度，通常比單純離車站最近更重要。",
  },
  {
    question: "商務旅客適合住台北車站附近嗎？",
    answer:
      "適合。北車的高鐵、台鐵與捷運轉乘效率高，方便安排跨縣市會議與市區拜訪。商務旅客應優先確認 Wi-Fi、書桌或工作空間，以及早晚進出的便利性。",
  },
  {
    question: "選北車飯店時最重要的條件是什麼？",
    answer:
      "最重要的是住宿條件是否符合旅遊目的。自由行看交通與餐飲，親子看房型與動線，商務看網路與效率，預算有限則要在價格、距離與必要設施之間取得平衡。",
  },
];

export const familyFaq: FaqItem[] = [
  {
    question: "台北車站附近親子住宿要先看什麼？",
    answer:
      "建議先看房型空間、電梯動線、行李寄放與附近餐飲。親子旅客常需要中途回住宿點休息，因此交通與生活機能都要一起評估。",
  },
  {
    question: "帶嬰兒車住北車附近方便嗎？",
    answer:
      "可以很方便，但要確認住宿點到車站或捷運出口是否有電梯，地下街動線是否容易推車，以及雨天是否需要走戶外路段。",
  },
  {
    question: "親子旅客適合安排哪些北車附近景點？",
    answer:
      "可依體力安排台北地下街、中正紀念堂、華山文創園區、西門町或大稻埕。建議把景點與休息時間交錯安排，避免整天拖行李或走太遠。",
  },
  {
    question: "親子住宿一定要選離車站最近嗎？",
    answer:
      "不一定。離車站最近不代表最適合親子，安靜程度、電梯、房間空間、餐飲便利與步行安全性也很重要。",
  },
];

export const businessFaq: FaqItem[] = [
  {
    question: "商務旅客為什麼常選台北車站附近住宿？",
    answer:
      "台北車站適合需要高鐵、台鐵、捷運或機場捷運銜接的商務行程，能降低跨區移動的不確定性，也方便安排早晚會議。",
  },
  {
    question: "北車商務住宿最需要注意哪些設施？",
    answer:
      "建議優先確認 Wi-Fi、書桌或可工作的桌面、插座、安靜程度與公共空間。若需要線上會議，也要留意隔音與背景環境。",
  },
  {
    question: "早班高鐵或晚間返程適合住北車附近嗎？",
    answer:
      "適合。住北車附近可以減少早班交通壓力與晚間轉乘時間，但仍要確認住宿點到車站入口的實際步行路線。",
  },
  {
    question: "商務住宿需要把附近餐飲列入條件嗎？",
    answer:
      "需要。會議前後常需要快速用餐或找咖啡店處理工作，附近餐飲與便利商店能讓行程更有彈性。",
  },
];

export const transportationFaq: FaqItem[] = [
  {
    question: "台北車站附近住宿適合需要轉乘的人嗎？",
    answer:
      "適合。北車整合高鐵、台鐵、捷運、機場捷運與公車，適合跨縣市、機場進出與市區多點移動的旅客。",
  },
  {
    question: "選交通方便住宿只看地圖距離夠嗎？",
    answer:
      "不夠。台北車站周邊出口多，地下街動線也長，應確認實際出口、電梯、雨天路線與拖行李是否順暢。",
  },
  {
    question: "機場捷運台北車站和台北車站本體很近嗎？",
    answer:
      "兩者有地下連通，但仍需要步行移動。帶大行李、親子同行或趕車時，建議預留轉乘時間。",
  },
  {
    question: "晚到台北適合住北車附近嗎？",
    answer:
      "通常適合，因為交通選擇多。不過仍要確認住宿點夜間步行路線、櫃台或入住方式，以及是否需要穿越較安靜街區。",
  },
];

export const budgetFaq: FaqItem[] = [
  {
    question: "台北車站平價住宿最常見的取捨是什麼？",
    answer:
      "常見取捨包含房間大小、窗戶、隔音、衛浴形式、設施完整度與步行距離。不要只用最低價格判斷，要看是否符合你的行程需求。",
  },
  {
    question: "平價住宿離車站遠一點可以接受嗎？",
    answer:
      "可以，但要把拖行李、雨天、晚間返程與交通成本一起算進去。如果每天都要轉乘，過遠的位置可能反而增加時間成本。",
  },
  {
    question: "預算有限旅客要優先保留哪些條件？",
    answer:
      "建議保留基本安全、乾淨、交通可達、行李放置與必要 Wi-Fi。其他如早餐、景觀或大型公共空間可依預算取捨。",
  },
  {
    question: "北車平價住宿適合親子嗎？",
    answer:
      "不一定。親子旅客需要更多空間、電梯與安靜環境，若平價住宿在這些條件上不足，可能不如選稍遠但動線更好的住宿。",
  },
];

export const faqItems: FaqItem[] = [
  ...mainGuideFaq,
  {
    question: "北車住宿要選多靠近車站？",
    answer:
      "建議依行李量、同行者與行程判斷。若每天都要搭高鐵、台鐵或捷運，靠近車站出口較有利；若主要逛西門町或大稻埕，生活機能與晚間返程也要一起看。",
  },
  {
    question: "帶大行李住台北車站附近要注意什麼？",
    answer:
      "應確認電梯、地下街出口、路面平整度與行李寄放。台北車站周邊人流大，尖峰時間拖行李可能比地圖顯示的步行時間更久。",
  },
  {
    question: "台北車站平價住宿怎麼選比較不踩雷？",
    answer:
      "先列出不能妥協的條件，例如安全、乾淨、衛浴形式、交通可達與 Wi-Fi，再看房間大小、早餐或其他附加設施是否值得加價。",
  },
  {
    question: "住台北車站附近一定比住西門町好嗎？",
    answer:
      "不一定。北車適合轉乘與跨區移動，西門町適合夜生活與商圈行程。若行程集中在西門町，住西門町可能更直覺；若需要多點移動，北車通常更有彈性。",
  },
  {
    question: "這個網站可以直接訂房嗎？",
    answer:
      "不可以。本網站是台北車站住宿指南型內容站，用於整理住宿選擇條件，不提供訂房、價格、電話、地址或評論。",
  },
];

export const methodologyCards: GuideCard[] = [
  {
    title: "依旅客類型拆解需求",
    description:
      "同樣是台北車站附近住宿，自由行、親子、商務與預算有限旅客會在意不同條件，因此本站先用旅客類型建立內容入口。",
    points: ["自由行", "親子", "商務", "交通轉乘", "預算有限"],
  },
  {
    title: "把住宿條件拆成可比較項目",
    description:
      "住宿選擇被拆成交通、房型、設施、景點與 FAQ，讓使用者能快速比較每個條件的判斷方式。",
    points: ["交通距離", "房型需求", "設施條件", "附近景點", "常見問題"],
  },
  {
    title: "用問答格式回應搜尋意圖",
    description:
      "使用者搜尋北車住宿時常用問句，本網站用清楚問答整理常見需求，讓讀者更快找到可操作的住宿選擇方向。",
    points: ["真實查詢語氣", "可見內容一致", "避免關鍵字堆疊", "清楚內部連結"],
  },
];

export const sitemapRoutes = [
  "/",
  "/en",
  "/ja",
  "/taipei-main-station-hotels",
  "/taipei-main-station-family-hotels",
  "/taipei-main-station-business-hotels",
  "/taipei-main-station-transportation-hotels",
  "/taipei-main-station-budget-hotels",
  "/rooms",
  "/facilities",
  "/location",
  "/nearby",
  "/faq",
  "/about",
  "/methodology",
  "/data-source",
  "/authority-info",
  "/policies",
];
