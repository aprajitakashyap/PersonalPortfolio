import type { PersonalInfo, SocialLink } from "@/types";

export const personalInfo: PersonalInfo = {
  greeting: "Hello, I'm",
  name: "Aprajita Kashyap",
  headline: "Software Engineer & Full-Stack Developer.",
  intro: [
    "Passionate about building scalable, user-centric applications and solving complex engineering challenges.",
    "Specialized in developing web applications, designing & integrating RESTful APIs, and leveraging AI-assisted development tools.",
  ],
  primaryCtaLabel: "Explore Projects",
  secondaryCtaLabel: "Request Resume",
  email: "aprajitaworks@gmail.com",
  location: "India",
  availability: "Open to Opportunities",
  avatarUrl: "/images/ExtractedmyPhoto.webp",
  resumeUrl: "mailto:aprajitaworks+resume@gmail.com?subject=Request%20to%20View%20Resume&body=Hello%20Aprajita%2C%0A%0AI%20would%20like%20to%20request%20to%20view%20your%20resume.%20Please%20send%20it%20to%20my%20email%20address%20at%3A%20%5BInsert%20your%20email%20here%5D%0A%0AThank%20you%21",
};

export const socialLinks: SocialLink[] = [
  {
    id: "1",
    name: "GitHub",
    url: "https://github.com/aprajitakashyap",
  },
  {
    id: "2",
    name: "LinkedIn",
    url: "https://linkedin.com/in/aprajitakashyap",
  },
  {
    id: "3",
    name: "Email",
    url: "mailto:aprajitaworks@gmail.com",
  },
];
