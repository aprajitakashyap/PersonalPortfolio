import type { Metadata } from "next";

export const seoConfig = {
  title: {
    default: "Aprajita Kashyap | Software Engineer & Full-Stack Developer",
    template: "%s | Aprajita Kashyap",
  } satisfies Metadata["title"],
  description: "Computer Science Undergraduate portfolio showcasing full-stack applications, RESTful APIs, internships, and research.",
  keywords: ["Aprajita Kashyap", "software engineer", "full stack developer", "React", "Node.js", "Express.js", "Java", "Python", "Flutter"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/aprajitakashyap",
    siteName: "Aprajita Kashyap Portfolio",
  } satisfies Metadata["openGraph"],
  twitter: {
    card: "summary_large_image",
  } satisfies Metadata["twitter"],
};
