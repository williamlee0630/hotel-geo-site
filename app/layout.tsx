import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "台北飯店地理搜尋",
  description: "用地區、捷運距離、價格與評分篩選台北飯店的互動展示網站。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
