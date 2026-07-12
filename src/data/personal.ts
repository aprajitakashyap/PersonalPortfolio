import type { PersonalInfo, SocialLink } from "@/types";

export const personalInfo: PersonalInfo = {
  greeting: "Hello, I'm",
  name: "Aprajita Kashyap",
  headline: "Software Engineer building thoughtful digital experiences.",
  intro: [
    "I focus on creating clean, performant, and user-centric applications.",
    "My passion lies in solving complex problems and building solutions that last.",
  ],
  email: "you@example.com",
  location: "Remote",
  avatarUrl: "/placeholder-avatar.jpg",
  resumeUrl: "/resume.pdf",
};

export const socialLinks: SocialLink[] = [
  {
    id: "1",
    name: "GitHub",
    url: "https://github.com/yourusername",
  },
  {
    id: "2",
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
  },
  {
    id: "3",
    name: "Email",
    url: "mailto:you@example.com",
  },
];
