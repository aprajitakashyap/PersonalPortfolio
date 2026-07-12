import type { LucideIcon } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks as personalSocialLinks } from "@/data/personal";
import type { SocialLink } from "@/types";
import { cn } from "@/lib/utils";

type SocialLinksProps = {
  links?: SocialLink[];
  variant?: "horizontal" | "vertical";
  className?: string;
  linkClassName?: string;
};

const iconMap: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

function getLinkIcon(name: string) {
  return iconMap[name.toLowerCase()] ?? Mail;
}

function isExternalLink(url: string) {
  return url.startsWith("http://") || url.startsWith("https://");
}

export function SocialLinks({
  links = personalSocialLinks,
  variant = "horizontal",
  className,
  linkClassName,
}: SocialLinksProps) {
  return (
    <ul
      className={cn(
        "flex gap-4",
        variant === "horizontal"
          ? "flex-row flex-wrap items-center md:gap-6"
          : "flex-col items-start",
        className
      )}
      aria-label="Social links"
    >
      {links.map((link) => {
        const Icon = getLinkIcon(link.name);

        return (
          <li key={link.id}>
            <a
              href={link.url}
              target={isExternalLink(link.url) ? "_blank" : undefined}
              rel={isExternalLink(link.url) ? "noopener noreferrer" : undefined}
              className={cn(
                "-mx-2 -my-2 inline-flex items-center gap-2 rounded-md px-2 py-2 font-geist text-sm font-medium text-text-secondary transition-colors duration-150 hover:text-accent-primary hover:underline hover:underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                linkClassName
              )}
              aria-label={
                link.name === "Email" ? "Send an email" : `Visit ${link.name}`
              }
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{link.name}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
