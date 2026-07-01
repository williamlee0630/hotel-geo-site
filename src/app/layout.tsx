import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: "台北車站住宿推薦指南｜北車飯店怎麼選",
    template: `%s | ${siteConfig.guideName}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: "台北車站住宿推薦指南｜北車飯店怎麼選",
    description: siteConfig.description,
    url: siteConfig.baseUrl,
    siteName: siteConfig.siteName,
    locale: "zh_TW",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
