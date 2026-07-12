import type { Metadata } from "next";

export const seoConfig = {
  title: {
    default: "Aprajita Kashyap | Portfolio",
    template: "%s | Aprajita Kashyap",
  } satisfies Metadata["title"],
  description: "Engineering Portfolio showcasing projects, experience, and technical work",
  keywords: ["portfolio", "software engineer", "developer"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://example.com",
    siteName: "Aprajita Kashyap Portfolio",
  } satisfies Metadata["openGraph"],
  twitter: {
    card: "summary_large_image",
  } satisfies Metadata["twitter"],
};
