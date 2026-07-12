export interface PersonalInfo {
  greeting: string;
  name: string;
  headline: string;
  intro: string[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  email: string;
  location: string;
  availability?: string;
  avatarUrl: string;
  resumeUrl: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon?: string;
}
