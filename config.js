// 贊助頁設定。拿到綠界「實況主收款」的收款網址後,填進 ecpayUrl 並 push,頁面就會出現贊助按鈕。
window.SUPPORT_CONFIG = {
  // 綠界「實況主收款」收款網址(https://…):台灣的信用卡、ATM、超商
  ecpayUrl: "",
  // Buy Me a Coffee 頁面網址(https://buymeacoffee.com/…):國外贊助者用信用卡、Apple Pay、Google Pay
  bmcUrl: "",
  // 兩個都留空時,頁面顯示「贊助即將開放」
  // 聯絡 email:綠界審核要求販售網址頁面顯示「跟綠界會員相同的聯絡資訊」;留空時不顯示聯絡區塊
  contactEmail: "huang77code@gmail.com",
  // 各工具:從工具連過來時帶 ?from=<key>,頁面會顯示對應的感謝文字
  tools: {
    watchnotes: {
      name: "WatchNotes",
      icon: "watchnotes.png",
      url: "https://25qi.github.io/watchnotes/",
      en: "An AI that watches YouTube with you and writes the notes.",
      zh: "陪你看 YouTube 的 AI 筆記。",
    },
  },
};
