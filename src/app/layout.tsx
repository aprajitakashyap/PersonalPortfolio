import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import { seoConfig, siteConfig } from "@/config";
import { CustomCursor } from "@/components/common/CustomCursor";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: seoConfig.title.default,
    template: seoConfig.title.template,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  openGraph: seoConfig.openGraph,
  twitter: seoConfig.twitter,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="cursor-none">
      <body
        className={`${outfit.variable} ${inter.variable} font-inter antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
