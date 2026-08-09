import type { Metadata } from "next";
import { Outfit, Inter, Cormorant_Garamond } from "next/font/google";
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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic"],
  variable: "--font-cormorant",
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
    <html lang="en" className="cursor-none" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${inter.variable} ${cormorant.variable} font-inter antialiased`}
        suppressHydrationWarning
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
