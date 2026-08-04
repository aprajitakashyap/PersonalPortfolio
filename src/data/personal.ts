import type { PersonalInfo, SocialLink } from "@/types";

export const personalInfo: PersonalInfo = {
  greeting: "Hello, I'm",
  name: "Aprajita Kashyap",
  headline: "Software Engineer building thoughtful digital experiences.",
  intro: [
    "I focus on creating clean, performant, and user-centric applications — from scalable backend systems to polished frontends.",
    "My passion lies in solving complex problems with elegant solutions and building software that genuinely makes a difference.",
  ],
  primaryCtaLabel: "Explore Projects",
  secondaryCtaLabel: "Resume",
  email: "aprajita.kashyap@example.com",
  location: "India",
  availability: "Open to Opportunities",
  avatarUrl: "/avatar.jpg",
  resumeUrl: "/resume.pdf",
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
    url: "mailto:aprajita.kashyap@example.com",
  },
];
