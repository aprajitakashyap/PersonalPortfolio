export interface SocialItem {
  name: string;
  url: string;
  icon?: string;
}

export const socialConfig = {
  links: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
    },
  ] satisfies SocialItem[],
};
