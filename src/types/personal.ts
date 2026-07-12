export interface PersonalInfo {
  greeting: string;
  name: string;
  headline: string;
  intro: string[];
  email: string;
  location: string;
  avatarUrl: string;
  resumeUrl: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon?: string;
}
