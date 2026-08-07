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
  secondaryCtaLabel: "Resume",
  email: "kashyapaprajita2@gmail.com",
  location: "India",
  availability: "Open to Opportunities",
  avatarUrl: "/images/ExtractedmyPhoto.png",
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
    url: "mailto:kashyapaprajita2@gmail.com",
  },
];
