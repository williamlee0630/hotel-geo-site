import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "晴川行館 | 台北河岸精品飯店",
  description:
    "晴川行館是位於台北河岸的精品飯店，提供城市景觀客房、晨光餐廳、私湯套房與舒緩療程。",
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
